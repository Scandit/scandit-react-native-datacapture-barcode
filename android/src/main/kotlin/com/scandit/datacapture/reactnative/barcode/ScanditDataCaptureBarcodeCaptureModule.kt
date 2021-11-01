/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import androidx.annotation.VisibleForTesting
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.scandit.datacapture.barcode.capture.*
import com.scandit.datacapture.barcode.ui.overlay.BarcodeCaptureOverlay
import com.scandit.datacapture.barcode.ui.overlay.BarcodeCaptureOverlayStyle
import com.scandit.datacapture.barcode.ui.overlay.toJson
import com.scandit.datacapture.core.capture.DataCaptureContext
import com.scandit.datacapture.core.capture.DataCaptureContextListener
import com.scandit.datacapture.core.capture.DataCaptureMode
import com.scandit.datacapture.core.json.JsonValue
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableBarcodeCaptureDefaults
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableBarcodeCaptureOverlayDefaults
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableBarcodeCaptureSettingsDefaults
import com.scandit.datacapture.reactnative.barcode.listener.RCTBarcodeCaptureListener
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableBrushDefaults
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableCameraSettingsDefaults
import com.scandit.datacapture.reactnative.core.deserializers.Deserializers
import com.scandit.datacapture.reactnative.core.deserializers.TreeLifecycleObserver
import com.scandit.datacapture.reactnative.core.utils.LazyEventEmitter

class ScanditDataCaptureBarcodeCaptureModule(
    private val reactContext: ReactApplicationContext,
    @get:VisibleForTesting val barcodeCaptureDeserializer: BarcodeCaptureDeserializer =
            BarcodeCaptureDeserializer(),
    eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter = LazyEventEmitter(reactContext),
    private val barcodeCaptureListener: RCTBarcodeCaptureListener =
            RCTBarcodeCaptureListener(eventEmitter)
) : ReactContextBaseJavaModule(reactContext),
        TreeLifecycleObserver.Callbacks,
        DataCaptureContextListener,
        BarcodeCaptureDeserializerListener,
        BarcodeCaptureListener by barcodeCaptureListener {

    companion object {
        private const val DEFAULTS_KEY = "Defaults"

        private val DEFAULTS: SerializableBarcodeCaptureDefaults by lazy {
            val settings = BarcodeCaptureSettings()
            val cameraSettings = BarcodeCapture.createRecommendedCameraSettings()
            val capture = BarcodeCapture.forDataCaptureContext(null, settings)
            SerializableBarcodeCaptureDefaults(
                    recommendedCameraSettings = SerializableCameraSettingsDefaults(
                            settings = cameraSettings
                    ),
                    barcodeCaptureSettings = SerializableBarcodeCaptureSettingsDefaults(
                            duplicateFilterInMillis = settings.codeDuplicateFilter.asMillis()
                    ),
                    barcodeCaptureOverlay = SerializableBarcodeCaptureOverlayDefaults(
                            defaultBrush = SerializableBrushDefaults(
                                    brush = BarcodeCaptureOverlay.DEFAULT_BRUSH
                            ),
                            defaultStyle = BarcodeCaptureOverlay.newInstance(
                                capture,
                                null
                            ).style.toJson(),
                            styles = BarcodeCaptureOverlayStyle.values()
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
    var barcodeCapture: BarcodeCapture? = null
        private set(value) {
            field?.removeListener(this)
            field = value?.also { it.addListener(this) }
        }

    init {
        barcodeCaptureDeserializer.listener = this
        Deserializers.Factory.addModeDeserializer(barcodeCaptureDeserializer)

        TreeLifecycleObserver.callbacks += this
    }

    override fun onCatalystInstanceDestroy() {
        onTreeDestroyed()

        barcodeCaptureDeserializer.listener = null
        Deserializers.Factory.removeModeDeserializer(barcodeCaptureDeserializer)

        TreeLifecycleObserver.callbacks -= this
    }

    override fun getName(): String = "ScanditDataCaptureBarcodeCapture"

    override fun getConstants(): MutableMap<String, Any> = mutableMapOf(
            DEFAULTS_KEY to DEFAULTS.toWritableMap()
    )

    @ReactMethod
    fun registerListenerForEvents() {
        barcodeCaptureListener.setHasNativeListeners(true)
    }

    @ReactMethod
    fun unregisterListenerForEvents() {
        barcodeCaptureListener.setHasNativeListeners(false)
    }

    @ReactMethod
    fun finishDidUpdateSessionCallback(enabled: Boolean) {
        barcodeCaptureListener.onFinishSessionUpdatedCallback(enabled)
    }

    @ReactMethod
    fun finishDidScanCallback(enabled: Boolean) {
        barcodeCaptureListener.onFinishBarcodeScannedCallback(enabled)
    }

    override fun onModeDeserializationFinished(
        deserializer: BarcodeCaptureDeserializer,
        mode: BarcodeCapture,
        json: JsonValue
    ) {
        barcodeCapture = mode.also {
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
        barcodeCapture = null
    }

    override fun onModeRemoved(
        dataCaptureContext: DataCaptureContext,
        dataCaptureMode: DataCaptureMode
    ) {
        reactContext.runOnNativeModulesQueueThread {
            if (dataCaptureContext == this.dataCaptureContext &&
                    dataCaptureMode == barcodeCapture) {
                barcodeCapture = null
            }
        }
    }
}
