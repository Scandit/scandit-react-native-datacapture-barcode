/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import androidx.annotation.VisibleForTesting
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.scandit.datacapture.barcode.tracking.capture.*
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingAdvancedOverlay
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingAdvancedOverlayListener
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingBasicOverlay
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingBasicOverlayListener
import com.scandit.datacapture.core.capture.DataCaptureContext
import com.scandit.datacapture.core.capture.DataCaptureContextListener
import com.scandit.datacapture.core.capture.DataCaptureMode
import com.scandit.datacapture.core.common.geometry.AnchorDeserializer
import com.scandit.datacapture.core.common.geometry.PointWithUnitDeserializer
import com.scandit.datacapture.core.json.JsonValue
import com.scandit.datacapture.core.ui.style.BrushDeserializer
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableBarcodeTrackingDefaults
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableTrackingBasicOverlayDefaults
import com.scandit.datacapture.reactnative.barcode.listener.RCTBarcodeTrackingAdvancedOverlayListener
import com.scandit.datacapture.reactnative.barcode.listener.RCTBarcodeTrackingBasicOverlayListener
import com.scandit.datacapture.reactnative.barcode.listener.RCTBarcodeTrackingListener
import com.scandit.datacapture.reactnative.barcode.tracking.nativeViewFromJson
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableBrushDefaults
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableCameraSettingsDefaults
import com.scandit.datacapture.reactnative.core.deserializers.Deserializers
import com.scandit.datacapture.reactnative.core.deserializers.TreeLifecycleObserver
import com.scandit.datacapture.reactnative.core.utils.Error
import com.scandit.datacapture.reactnative.core.utils.LazyEventEmitter
import com.scandit.datacapture.reactnative.core.utils.reject

class ScanditDataCaptureBarcodeTrackingModule(
    private val reactContext: ReactApplicationContext,
    @get:VisibleForTesting val barcodeTrackingDeserializer: BarcodeTrackingDeserializer =
            BarcodeTrackingDeserializer(),
    eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter = LazyEventEmitter(reactContext),
    sessionProvider: (() -> BarcodeTrackingSession?)? = null,
    private val barcodeTrackingListener: RCTBarcodeTrackingListener =
            RCTBarcodeTrackingListener(eventEmitter),
    private val barcodeTrackingBasicOverlayListener: RCTBarcodeTrackingBasicOverlayListener =
            RCTBarcodeTrackingBasicOverlayListener(eventEmitter),
    private val barcodeTrackingAdvancedOverlayListener: RCTBarcodeTrackingAdvancedOverlayListener =
            RCTBarcodeTrackingAdvancedOverlayListener(eventEmitter, reactContext)
) : ReactContextBaseJavaModule(reactContext),
        TreeLifecycleObserver.Callbacks,
        DataCaptureContextListener,
        BarcodeTrackingDeserializerListener,
        BarcodeTrackingListener by barcodeTrackingListener,
        BarcodeTrackingBasicOverlayListener by barcodeTrackingBasicOverlayListener,
        BarcodeTrackingAdvancedOverlayListener by barcodeTrackingAdvancedOverlayListener,
        RCTBarcodeTrackingListener.Callbacks {

    companion object {
        private const val DEFAULTS_KEY = "Defaults"

        private val DEFAULTS: SerializableBarcodeTrackingDefaults by lazy {
            val cameraSettings = BarcodeTracking.createRecommendedCameraSettings()
            SerializableBarcodeTrackingDefaults(
                    recommendedCameraSettings = SerializableCameraSettingsDefaults(
                            settings = cameraSettings
                    ),
                    trackingBasicOverlayDefaults = SerializableTrackingBasicOverlayDefaults(
                            defaultBrush = SerializableBrushDefaults(
                                    brush = BarcodeTrackingBasicOverlay.DEFAULT_BRUSH
                            )
                    )
            )
        }

        private val ERROR_INVALID_SEQUENCE_ID =
                Error(1, "The sequence id does not match the current sequence id.")
        private val ERROR_TRACKED_BARCODE_NOT_FOUND = Error(2, "TrackedBarcode not found.")
        private val ERROR_DESERIALIZATION_FAILED = Error(3, "Unable to deserialize a valid object.")
        private val ERROR_NULL_OVERLAY = Error(4, "Overlay is null.")
    }

    private val modeLock = Object()

    private var lastSession: BarcodeTrackingSession? = null
    private val sessionProvider = sessionProvider ?: { lastSession }
    private var dataCaptureContext: DataCaptureContext? = null
        private set(value) {
            field?.removeListener(this)
            field = value?.also { it.addListener(this) }
        }

    @get:VisibleForTesting
    var barcodeTracking: BarcodeTracking? = null
        private set(value) {
            synchronized(modeLock) {
                if (value != field) {
                    lastSession = null

                    field?.removeListener(this)
                    field = value?.also { it.addListener(this) }
                }
            }
        }

    @get:VisibleForTesting
    var session: BarcodeTrackingSession? = null
        get() = sessionProvider()
        private set

    @get:VisibleForTesting
    var barcodeTrackingBasicOverlay: BarcodeTrackingBasicOverlay? = null
        private set(value) {
            field?.listener = null
            field = value?.also { it.listener = this }
        }

    @get:VisibleForTesting
    var barcodeTrackingAdvancedOverlay: BarcodeTrackingAdvancedOverlay? = null
        private set(value) {
            field?.listener = null
            field = value?.also { it.listener = this }
        }

    init {
        barcodeTrackingListener.callbacks = this

        barcodeTrackingDeserializer.listener = this
        Deserializers.Factory.addModeDeserializer(barcodeTrackingDeserializer)

        TreeLifecycleObserver.callbacks += this
    }

    override fun onCatalystInstanceDestroy() {
        onTreeDestroyed()

        barcodeTrackingDeserializer.listener = null
        Deserializers.Factory.removeModeDeserializer(barcodeTrackingDeserializer)

        TreeLifecycleObserver.callbacks -= this
    }

    override fun getName(): String = "ScanditDataCaptureBarcodeTracking"

    override fun getConstants(): MutableMap<String, Any> = mutableMapOf(
            DEFAULTS_KEY to DEFAULTS.toWritableMap()
    )

    override fun onSessionUpdated(mode: BarcodeTracking, session: BarcodeTrackingSession) {
        synchronized(modeLock) {
            if (lastSession == null && barcodeTracking == mode) {
                lastSession = session
            }
        }
    }

    @ReactMethod
    fun registerListenerForEvents() {
        barcodeTrackingListener.setHasNativeListeners(true)
    }

    @ReactMethod
    fun unregisterListenerForEvents() {
        barcodeTrackingListener.setHasNativeListeners(false)
    }

    @ReactMethod
    fun registerListenerForBasicOverlayEvents() {
        barcodeTrackingBasicOverlayListener.setHasNativeOverlayListeners(true)
    }

    @ReactMethod
    fun unregisterListenerForBasicOverlayEvents() {
        barcodeTrackingBasicOverlayListener.setHasNativeOverlayListeners(false)
    }

    @ReactMethod
    fun registerListenerForAdvancedOverlayEvents() {
        barcodeTrackingAdvancedOverlayListener.setHasNativeOverlayListeners(true)
    }

    @ReactMethod
    fun unregisterListenerForAdvancedOverlayEvents() {
        barcodeTrackingAdvancedOverlayListener.setHasNativeOverlayListeners(false)
    }

    @ReactMethod
    fun setBrushForTrackedBarcode(
        brush: String?,
        sessionFrameSequenceId: Int,
        trackedBarcodeId: Int,
        promise: Promise
    ) {
        if (!isCurrentSequenceId(sessionFrameSequenceId)) {
            promise.reject(ERROR_INVALID_SEQUENCE_ID)

            return
        }

        val trackedBarcode = session?.trackedBarcodes?.get(trackedBarcodeId) ?: run {
            promise.reject(ERROR_TRACKED_BARCODE_NOT_FOUND)
            return
        }

        val overlay = barcodeTrackingBasicOverlay ?: run {
            promise.reject(ERROR_NULL_OVERLAY)
            return
        }

        try {
            overlay.setBrushForTrackedBarcode(
                    trackedBarcode,
                    if (brush != null) BrushDeserializer.fromJson(brush) else null
            )
            promise.resolve(null)
        } catch (e: RuntimeException) {
            promise.reject(ERROR_DESERIALIZATION_FAILED)
        }
    }

    @ReactMethod
    fun clearTrackedBarcodeBrushes(promise: Promise) {
        barcodeTrackingBasicOverlay?.let {
            it.clearTrackedBarcodeBrushes()
            promise.resolve(null)
        } ?: run {
            promise.reject(ERROR_NULL_OVERLAY)
        }
    }

    @ReactMethod
    fun finishBrushForTrackedBarcodeCallback(brushJson: String?) {
        barcodeTrackingBasicOverlayListener.onFinishCallback(brushJson)
    }

    @ReactMethod
    fun finishDidUpdateSessionCallback(enabled: Boolean) {
        barcodeTrackingListener.onFinishCallback(enabled)
    }

    @ReactMethod
    fun setViewForTrackedBarcode(
        view: String,
        sessionFrameSequenceId: Int,
        trackedBarcodeId: Int,
        promise: Promise
    ) {
        if (!isCurrentSequenceId(sessionFrameSequenceId)) {
            promise.reject(ERROR_INVALID_SEQUENCE_ID)

            return
        }

        val trackedBarcode = session?.trackedBarcodes?.get(trackedBarcodeId) ?: run {
            promise.reject(ERROR_TRACKED_BARCODE_NOT_FOUND)
            return
        }

        val overlay = barcodeTrackingAdvancedOverlay ?: run {
            promise.reject(ERROR_NULL_OVERLAY)
            return
        }

        UiThreadUtil.runOnUiThread {
            overlay.setViewForTrackedBarcode(
                    trackedBarcode,
                    nativeViewFromJson(currentActivity!!, view)
            )
            promise.resolve(null)
        }
    }

    @ReactMethod
    fun setAnchorForTrackedBarcode(
        anchor: String,
        sessionFrameSequenceId: Int,
        trackedBarcodeId: Int,
        promise: Promise
    ) {
        if (!isCurrentSequenceId(sessionFrameSequenceId)) {
            promise.reject(ERROR_INVALID_SEQUENCE_ID)

            return
        }

        val trackedBarcode = session?.trackedBarcodes?.get(trackedBarcodeId) ?: run {
            promise.reject(ERROR_TRACKED_BARCODE_NOT_FOUND)
            return
        }

        val overlay = barcodeTrackingAdvancedOverlay ?: run {
            promise.reject(ERROR_NULL_OVERLAY)
            return
        }

        try {
            overlay.setAnchorForTrackedBarcode(
                    trackedBarcode,
                    AnchorDeserializer.fromJson(anchor)
            )
            promise.resolve(null)
        } catch (e: RuntimeException) {
            promise.reject(ERROR_DESERIALIZATION_FAILED)
        }
    }

    @ReactMethod
    fun setOffsetForTrackedBarcode(
        offset: String,
        sessionFrameSequenceId: Int,
        trackedBarcodeId: Int,
        promise: Promise
    ) {
        if (!isCurrentSequenceId(sessionFrameSequenceId)) {
            promise.reject(ERROR_INVALID_SEQUENCE_ID)

            return
        }

        val trackedBarcode = session?.trackedBarcodes?.get(trackedBarcodeId) ?: run {
            promise.reject(ERROR_TRACKED_BARCODE_NOT_FOUND)
            return
        }

        val overlay = barcodeTrackingAdvancedOverlay ?: run {
            promise.reject(ERROR_NULL_OVERLAY)
            return
        }

        try {
            overlay.setOffsetForTrackedBarcode(
                    trackedBarcode,
                    PointWithUnitDeserializer.fromJson(offset)
            )
            promise.resolve(null)
        } catch (e: RuntimeException) {
            promise.reject(ERROR_DESERIALIZATION_FAILED)
        }
    }

    @ReactMethod
    fun clearTrackedBarcodeViews(promise: Promise) {
        barcodeTrackingAdvancedOverlay?.let {
            it.clearTrackedBarcodeViews()
            promise.resolve(null)
        } ?: run {
            promise.reject(ERROR_NULL_OVERLAY)
        }
    }

    @ReactMethod
    fun finishViewForTrackedBarcodeCallback(viewJson: String?) {
        barcodeTrackingAdvancedOverlayListener.onFinishViewCallback(viewJson)
    }

    @ReactMethod
    fun finishAnchorForTrackedBarcodeCallback(anchorJson: String) {
        barcodeTrackingAdvancedOverlayListener.onFinishAnchorCallback(
                AnchorDeserializer.fromJson(anchorJson)
        )
    }

    @ReactMethod
    fun finishOffsetForTrackedBarcodeCallback(offsetJson: String) {
        barcodeTrackingAdvancedOverlayListener.onFinishOffsetCallback(
                PointWithUnitDeserializer.fromJson(offsetJson)
        )
    }

    override fun onModeDeserializationFinished(
        deserializer: BarcodeTrackingDeserializer,
        mode: BarcodeTracking,
        json: JsonValue
    ) {
        barcodeTracking = mode.also {
            if (json.contains("enabled")) {
                it.isEnabled = json.requireByKeyAsBoolean("enabled")
            }
        }
    }

    override fun onBasicOverlayDeserializationFinished(
        deserializer: BarcodeTrackingDeserializer,
        overlay: BarcodeTrackingBasicOverlay,
        json: JsonValue
    ) {
        barcodeTrackingBasicOverlay = overlay
    }

    override fun onAdvancedOverlayDeserializationFinished(
        deserializer: BarcodeTrackingDeserializer,
        overlay: BarcodeTrackingAdvancedOverlay,
        json: JsonValue
    ) {
        barcodeTrackingAdvancedOverlay = overlay
    }

    private fun isCurrentSequenceId(sequenceId: Int): Boolean {
        return session?.let {
            val currentSequenceId = it.frameSequenceId.toInt()

            currentSequenceId == sequenceId
        } ?: false
    }

    override fun onTreeCreated(root: DataCaptureContext) {
        dataCaptureContext = root
    }

    override fun onTreeDestroyed() {
        dataCaptureContext = null
        barcodeTracking = null
        barcodeTrackingBasicOverlay = null
        barcodeTrackingAdvancedOverlay = null
    }

    override fun onBarcodeTrackingRemoved() {
        barcodeTracking?.let {
            dataCaptureContext?.removeMode(it)
        }
    }

    override fun onBarcodeTrackingAdvancedOverlayRemoved() {
        barcodeTrackingAdvancedOverlay = null
    }

    override fun onModeRemoved(
        dataCaptureContext: DataCaptureContext,
        dataCaptureMode: DataCaptureMode
    ) {
        reactContext.runOnNativeModulesQueueThread {
            if (dataCaptureContext == this.dataCaptureContext &&
                    dataCaptureMode == barcodeTracking) {
                barcodeTracking = null
            }
        }
    }
}
