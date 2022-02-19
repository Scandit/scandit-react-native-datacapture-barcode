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
import com.scandit.datacapture.barcode.selection.ui.overlay.toJson
import com.scandit.datacapture.core.capture.DataCaptureContext
import com.scandit.datacapture.core.capture.DataCaptureContextListener
import com.scandit.datacapture.core.capture.DataCaptureMode
import com.scandit.datacapture.core.data.FrameData
import com.scandit.datacapture.core.json.JsonValue
import com.scandit.datacapture.reactnative.barcode.data.defaults.*
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableBarcodeSelectionDefaults
import com.scandit.datacapture.reactnative.barcode.listener.RCTBarcodeSelectionListener
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableCameraSettingsDefaults
import com.scandit.datacapture.reactnative.core.deserializers.Deserializers
import com.scandit.datacapture.reactnative.core.deserializers.TreeLifecycleObserver
import com.scandit.datacapture.reactnative.core.utils.LazyEventEmitter

class ScanditDataCaptureBarcodeSelectionModule(
    private val reactContext: ReactApplicationContext,
    @get:VisibleForTesting val barcodeSelectionDeserializer: BarcodeSelectionDeserializer =
        BarcodeSelectionDeserializer(),
    eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter = LazyEventEmitter(reactContext),
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
                    ).style.toJson(),
                    styles = BarcodeSelectionBasicOverlayStyle.values()
                )
            )
        }
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

    @get:VisibleForTesting
    var session: BarcodeSelectionSession? = null
        private set

    init {
        barcodeSelectionDeserializer.listener = this
        Deserializers.Factory.addModeDeserializer(barcodeSelectionDeserializer)

        TreeLifecycleObserver.callbacks += this
    }

    override fun onCatalystInstanceDestroy() {
        onTreeDestroyed()

        barcodeSelectionDeserializer.listener = null
        Deserializers.Factory.removeModeDeserializer(barcodeSelectionDeserializer)

        TreeLifecycleObserver.callbacks -= this
    }

    override fun getName(): String = "ScanditDataCaptureBarcodeSelection"

    override fun getConstants(): MutableMap<String, Any> = mutableMapOf(
        DEFAULTS_KEY to DEFAULTS.toWritableMap()
    )

    override fun onSessionUpdated(
        barcodeSelection: BarcodeSelection,
        session: BarcodeSelectionSession,
        frameData: FrameData?
    ) {
        this.session = session
    }

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
        val count = session?.selectedBarcodes?.find {
            (it.data ?: "")
                .plus(SymbologyDescription.create(it.symbology).identifier) == selectionIdentifier
        }?.let {
            session?.getCount(it)
        } ?: 0

        barcodeSelectionListener.onCountFinished(count, promise)
    }

    @ReactMethod
    fun unfreezeCamera() {
        barcodeSelection?.unfreezeCamera()
    }

    @ReactMethod
    fun resetMode() {
        barcodeSelection?.reset()
    }

    @ReactMethod
    fun resetSession() {
        session?.reset()
    }

    @ReactMethod
    fun finishDidUpdateSelectionCallback(enabled: Boolean) {
        barcodeSelectionListener.onFinishBarcodeSelectedCallback(enabled)
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
