/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import androidx.annotation.VisibleForTesting
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.scandit.datacapture.barcode.data.SymbologyDescription
import com.scandit.datacapture.barcode.selection.capture.*
import com.scandit.datacapture.barcode.selection.feedback.BarcodeSelectionFeedback
import com.scandit.datacapture.barcode.selection.ui.overlay.BarcodeSelectionBasicOverlay
import com.scandit.datacapture.barcode.selection.ui.overlay.BarcodeSelectionBasicOverlayStyle
import com.scandit.datacapture.core.capture.DataCaptureContext
import com.scandit.datacapture.core.capture.DataCaptureContextListener
import com.scandit.datacapture.core.capture.DataCaptureMode
import com.scandit.datacapture.core.json.JsonValue
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableBarcodeSelectionAimerSelectionDefaults
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableBarcodeSelectionBasicOverlayDefaults
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableBarcodeSelectionDefaults
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableBarcodeSelectionSettingsDefaults
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableBarcodeSelectionTapSelectionDefaults
import com.scandit.datacapture.reactnative.barcode.listener.RCTBarcodeSelectionAimedBrushProvider
import com.scandit.datacapture.reactnative.barcode.listener.RCTBarcodeSelectionListener
import com.scandit.datacapture.reactnative.barcode.listener.RCTBarcodeSelectionTrackedBrushProvider
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableCameraSettingsDefaults
import com.scandit.datacapture.reactnative.core.deserializers.Deserializers
import com.scandit.datacapture.reactnative.core.deserializers.TreeLifecycleObserver
import com.scandit.datacapture.reactnative.core.utils.LazyEventEmitter

class ScanditDataCaptureBarcodeSelectionModule(
    private val reactContext: ReactApplicationContext,
    @get:VisibleForTesting val barcodeSelectionDeserializer: BarcodeSelectionDeserializer =
        BarcodeSelectionDeserializer(),
    private val eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter = LazyEventEmitter(reactContext),
    private val barcodeSelectionListener: RCTBarcodeSelectionListener =
        RCTBarcodeSelectionListener(eventEmitter)
) : ReactContextBaseJavaModule(reactContext),
    TreeLifecycleObserver.Callbacks,
    DataCaptureContextListener,
    BarcodeSelectionDeserializerListener,
    BarcodeSelectionListener by barcodeSelectionListener {

    companion object {
        private const val DEFAULTS_KEY = "Defaults"

        private val DEFAULTS: SerializableBarcodeSelectionDefaults by lazy {
            val selection = BarcodeSelection.forDataCaptureContext(
                null,
                BarcodeSelectionSettings()
            )
            SerializableBarcodeSelectionDefaults(
                defaultFeedback = BarcodeSelectionFeedback.defaultFeedback(),
                recommendedCameraSettingsDefaults = SerializableCameraSettingsDefaults(
                    BarcodeSelection.createRecommendedCameraSettings()
                ),
                settingsDefaults = SerializableBarcodeSelectionSettingsDefaults(
                    BarcodeSelectionSettings()
                ),
                tapSelectionDefaults = SerializableBarcodeSelectionTapSelectionDefaults(
                    BarcodeSelectionTapSelection()
                ),
                aimerSelectionDefaults = SerializableBarcodeSelectionAimerSelectionDefaults(
                    BarcodeSelectionAimerSelection()
                ),
                overlayDefaults = SerializableBarcodeSelectionBasicOverlayDefaults(
                    defaultStyle = BarcodeSelectionBasicOverlay.newInstance(
                        selection,
                        null
                    ).style,
                    styles = BarcodeSelectionBasicOverlayStyle.values()
                )
            )
        }

        private val MODE_DOES_NOT_EXIST = Error("The BarcodeSelection mode instance does not exist.")
        private val ERROR_NULL_OVERLAY = Error("Overlay is null.")
        private val ERROR_DESERIALIZATION_FAILED = Error("Unable to deserialize a valid object.")
    }

    private var dataCaptureContext: DataCaptureContext? = null
        private set(value) {
            field?.removeListener(this)
            field = value?.also { it.addListener(this) }
        }

    @get:VisibleForTesting
    var barcodeSelection: BarcodeSelection? = null
        private set(value) {
            field?.removeListener(this)
            field = value?.also { it.addListener(this) }
        }

    private var barcodeSelectionBasicOverlay: BarcodeSelectionBasicOverlay? = null

    private var barcodeSelectionAimedBrushProvider: RCTBarcodeSelectionAimedBrushProvider? = null
    
    private var barcodeSelectionTrackedBrushProvider: RCTBarcodeSelectionTrackedBrushProvider? = null

    init {
        barcodeSelectionDeserializer.listener = this
        Deserializers.Factory.addModeDeserializer(barcodeSelectionDeserializer)

        TreeLifecycleObserver.callbacks += this
    }

    override fun onCatalystInstanceDestroy() {
        onTreeDestroyed()

        barcodeSelectionAimedBrushProvider?.clearCache()
        barcodeSelectionTrackedBrushProvider?.clearCache()
        barcodeSelectionBasicOverlay?.aimedBarcodeBrushProvider = null
        barcodeSelectionBasicOverlay?.trackedBarcodeBrushProvider = null
        barcodeSelectionDeserializer.listener = null
        Deserializers.Factory.removeModeDeserializer(barcodeSelectionDeserializer)

        TreeLifecycleObserver.callbacks -= this
    }

    override fun getName(): String = "ScanditDataCaptureBarcodeSelection"

    override fun getConstants(): MutableMap<String, Any> = mutableMapOf(
        DEFAULTS_KEY to DEFAULTS.toWritableMap()
    )

    @ReactMethod
    fun registerListenerForEvents() {
        barcodeSelectionListener.setHasNativeListeners(true)
    }

    @ReactMethod
    fun unregisterListenerForEvents() {
        barcodeSelectionListener.setHasNativeListeners(false)
    }

    @ReactMethod
    fun finishDidUpdateSessionCallback(enabled: Boolean) {
        barcodeSelectionListener.onFinishSessionUpdatedCallback(enabled)
    }

    @ReactMethod
    fun getCount(
        selectionIdentifier: String,
        promise: Promise
    ) {
        val count = barcodeSelectionListener.lastSession?.selectedBarcodes?.find {
            (it.data ?: "")
                .plus(SymbologyDescription.create(it.symbology).identifier) == selectionIdentifier
        }?.let {
            barcodeSelectionListener.lastSession?.getCount(it)
        } ?: 0

        barcodeSelectionListener.onCountFinished(count, promise)
    }

    @ReactMethod
    fun increaseCountForBarcodes(
        barcodesJson: String,
        promise: Promise
    ) {
        barcodeSelection?.let {
            try {
                it.increaseCountForBarcodesFromJsonString(barcodesJson)
                promise.resolve(null)
            }
            catch (e: Exception) {
                promise.reject(
                    "Unable to increment count for barcodes from the provided json.",
                    e
                )
            }
        } ?: run {
            promise.reject(MODE_DOES_NOT_EXIST)
        }
    }

    @ReactMethod
    fun finishBrushForAimedBarcodeCallback(
        brushJson: String?,
        selectionIdentifier: String?
    ) {
        barcodeSelectionAimedBrushProvider?.onFinishCallback(brushJson, selectionIdentifier)
    }

    @ReactMethod
    fun setAimedBarcodeBrushProvider(
        promise: Promise
    ) {
        val overlay = barcodeSelectionBasicOverlay ?: run {
            promise.reject(ERROR_NULL_OVERLAY)
            return
        }

        try {
            barcodeSelectionAimedBrushProvider = RCTBarcodeSelectionAimedBrushProvider(eventEmitter).also {
                overlay.aimedBarcodeBrushProvider = it
            }
            promise.resolve(null)
        } catch (e: RuntimeException) {
            println(e)
            promise.reject(ERROR_DESERIALIZATION_FAILED)
        }
    }

    @ReactMethod
    fun removeAimedBarcodeBrushProvider(
        promise: Promise
    ) {
        barcodeSelectionAimedBrushProvider?.clearCache()
        barcodeSelectionBasicOverlay?.aimedBarcodeBrushProvider = null
        barcodeSelectionAimedBrushProvider = null
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBrushForTrackedBarcodeCallback(
        brushJson: String?,
        selectionIdentifier: String?
    ) {
        barcodeSelectionTrackedBrushProvider?.onFinishCallback(brushJson, selectionIdentifier)
    }

    @ReactMethod
    fun setTrackedBarcodeBrushProvider(
        promise: Promise
    ) {
        val overlay = barcodeSelectionBasicOverlay ?: run {
            promise.reject(ERROR_NULL_OVERLAY)
            return
        }

        try {
            barcodeSelectionTrackedBrushProvider = RCTBarcodeSelectionTrackedBrushProvider(eventEmitter).also {
                overlay.trackedBarcodeBrushProvider = it
            }
            promise.resolve(null)
        } catch (e: RuntimeException) {
            println(e)
            promise.reject(ERROR_DESERIALIZATION_FAILED)
        }
    }

    @ReactMethod
    fun removeTrackedBarcodeBrushProvider(
        promise: Promise
    ) {
        barcodeSelectionTrackedBrushProvider?.clearCache()
        barcodeSelectionBasicOverlay?.trackedBarcodeBrushProvider = null
        barcodeSelectionTrackedBrushProvider = null
        promise.resolve(null)
    }

    @ReactMethod
    fun unfreezeCamera() {
        barcodeSelection?.unfreezeCamera()
    }

    @ReactMethod
    fun selectAimedBarcode() {
        barcodeSelection?.selectAimedBarcode()
    }

    @ReactMethod
    fun resetMode() {
        barcodeSelection?.reset()
    }

    @ReactMethod
    fun resetSession() {
        barcodeSelectionListener.lastSession?.reset()
    }

    @ReactMethod
    fun finishDidUpdateSelectionCallback(enabled: Boolean) {
        barcodeSelectionListener.onFinishBarcodeSelectedCallback(enabled)
    }

    @ReactMethod
    fun unselectBarcodes(
        barcodesJson: String,
        promise: Promise
    ) {
        barcodeSelection?.let {
            try {
                it.unselectBarcodesFromJsonString(barcodesJson)
                promise.resolve(null)
            }
            catch (e: Exception) {
                promise.reject(
                    "Unable to unselect barcodes from the provided json.",
                    e
                )
            }
        } ?: run { promise.reject(MODE_DOES_NOT_EXIST) }
    }

    override fun onModeDeserializationFinished(
        deserializer: BarcodeSelectionDeserializer,
        mode: BarcodeSelection,
        json: JsonValue
    ) {
        barcodeSelection = mode.also {
            if (json.contains("enabled")) {
                it.isEnabled = json.requireByKeyAsBoolean("enabled")
            }
        }
    }

    override fun onBasicOverlayDeserializationFinished(
        deserializer: BarcodeSelectionDeserializer,
        overlay: BarcodeSelectionBasicOverlay,
        json: JsonValue
    ) {
        barcodeSelectionBasicOverlay = overlay
    }

    override fun onTreeCreated(root: DataCaptureContext) {
        dataCaptureContext = root
    }

    override fun onTreeDestroyed() {
        dataCaptureContext = null
        barcodeSelection = null
    }

    override fun onModeRemoved(
        dataCaptureContext: DataCaptureContext,
        dataCaptureMode: DataCaptureMode
    ) {
        reactContext.runOnNativeModulesQueueThread {
            if (dataCaptureContext == this.dataCaptureContext &&
                dataCaptureMode == barcodeSelection
            ) {
                barcodeSelection = null
            }
        }
    }
}
