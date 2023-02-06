/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import android.graphics.Color
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.scandit.datacapture.barcode.spark.capture.SparkScan
import com.scandit.datacapture.barcode.spark.capture.SparkScanListener
import com.scandit.datacapture.barcode.spark.capture.SparkScanSettings
import com.scandit.datacapture.barcode.spark.feedback.SparkScanFeedback
import com.scandit.datacapture.barcode.spark.feedback.SparkScanViewFeedback
import com.scandit.datacapture.barcode.spark.serialization.SparkScanDeserializer
import com.scandit.datacapture.barcode.spark.serialization.SparkScanDeserializerListener
import com.scandit.datacapture.barcode.spark.ui.SparkScanViewSettings
import com.scandit.datacapture.core.capture.DataCaptureContext
import com.scandit.datacapture.core.json.JsonValue
import com.scandit.datacapture.core.time.TimeInterval
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableSparkScanDefaults
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableSparkScanFeedbackDefaults
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableSparkScanSettingsDefaults
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableSparkScanViewDefaults
import com.scandit.datacapture.reactnative.barcode.listener.RCTSparkScanListener
import com.scandit.datacapture.reactnative.barcode.listener.RCTSparkScanViewUiListener
import com.scandit.datacapture.reactnative.barcode.ui.SparkScanViewManager
import com.scandit.datacapture.reactnative.core.deserializers.TreeLifecycleObserver
import com.scandit.datacapture.reactnative.core.utils.LazyEventEmitter
import org.json.JSONObject

class ScanditDataCaptureSparkScanModule(
    private val reactContext: ReactApplicationContext,
    private val viewManager: SparkScanViewManager,
    eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter = LazyEventEmitter(
        reactContext
    ),
    private val sparkScanListener: RCTSparkScanListener = RCTSparkScanListener(eventEmitter),
    private val sparkScanDeserializer: SparkScanDeserializer = SparkScanDeserializer(),
    private val sparkScanViewUiListener: RCTSparkScanViewUiListener = RCTSparkScanViewUiListener(
        eventEmitter
    ),
) : ReactContextBaseJavaModule(reactContext),
    TreeLifecycleObserver.Callbacks,
    SparkScanDeserializerListener,
    SparkScanListener by sparkScanListener {

    init {
        TreeLifecycleObserver.callbacks += this
        sparkScanDeserializer.listener = this
    }

    private var dataCaptureContext: DataCaptureContext? = null

    private var sparkScan: SparkScan? = null
        private set(value) {
            field?.removeListener(sparkScanListener)
            field = value?.also { it.addListener(sparkScanListener) }
        }

    @ReactMethod
    fun registerListenerForEvents() {
        sparkScanListener.setHasNativeListeners(true)
    }

    @ReactMethod
    fun unregisterListenerForEvents() {
        sparkScanListener.setHasNativeListeners(false)
    }

    @ReactMethod
    fun finishDidUpdateSessionCallback(enabled: Boolean) {
        sparkScanListener.onFinishSessionUpdatedCallback(enabled)
    }

    @ReactMethod
    fun finishDidScanCallback(enabled: Boolean) {
        sparkScanListener.onFinishBarcodeScannedCallback(enabled)
    }

    @ReactMethod
    fun resetSession() {
        sparkScanListener.lastSession?.reset()
    }

    @ReactMethod
    fun registerListenerForViewEvents(promise: Promise) {
        sparkScanViewUiListener.setHasNativeListeners(true)
        promise.resolve(null)
    }

    @ReactMethod
    fun unregisterListenerForViewEvents(promise: Promise) {
        sparkScanViewUiListener.setHasNativeListeners(false)
        promise.resolve(null)
    }

    @ReactMethod
    fun create(@Suppress("UNUSED_PARAMETER") reactTag: Int, jsonString: String, promise: Promise) {
        val context = dataCaptureContext
        if (context == null) {
            promise.reject(Error("DataCaptureContext not yet initialized."))
            return
        }

        val json = JSONObject(jsonString)
        if (!json.has("SparkScan")) {
            promise.reject(IllegalArgumentException("Json doesn't contain info about SparkScan"))
            return
        }

        val sparkScanModeJson = json["SparkScan"].toString()

        val mode: SparkScan
        try {
            mode = sparkScanDeserializer.modeFromJson(sparkScanModeJson)
        } catch (error: Exception) {
            promise.reject(
                "Unable to create an instance of SparkScan from the provided json.",
                error
            )
            return
        }
        sparkScan = mode

        if (!json.has("SparkScanView")) {
            promise.reject(
                IllegalArgumentException("Json doesn't contain info about SparkScanView")
            )
            return
        }
        val sparkScanViewJson = json["SparkScanView"].toString()

        try {
            addViewFromJson(sparkScanViewJson)
            promise.resolve(null)
        } catch (error: Exception) {
            promise.reject(
                "Unable to create an instance of SparkScanView from the provided json.",
                error
            )
        }
    }

    private fun addViewFromJson(sparkScanViewJson: String) {
        val mode = sparkScan ?: return
        val context = dataCaptureContext ?: return

        if (viewManager.currentContainer == null) {
            // Workaround to the case when the container of the SparkScanView was not yet created.
            viewManager.postContainerCreationAction = {
                viewManager.createSparkScanViewFromJson(
                    sparkScanViewJson,
                    mode,
                    context,
                    sparkScanViewUiListener
                )
            }
            return
        }

        viewManager.createSparkScanViewFromJson(
            sparkScanViewJson,
            mode,
            context,
            sparkScanViewUiListener
        )
    }

    @ReactMethod
    fun update(@Suppress("UNUSED_PARAMETER") reactTag: Int, viewJson: String, promise: Promise) {
        if (viewManager.updateSparkScanViewFromJson(viewJson)) {
            promise.resolve(null)
        } else {
            promise.reject(VIEW_NOT_YET_INITIALIZED)
        }
    }

    @ReactMethod
    fun emitFeedback(
        @Suppress("UNUSED_PARAMETER") reactTag: Int,
        feedbackJson: String,
        promise: Promise
    ) {
        val sparkScanView = viewManager.sparkScanView

        if (sparkScanView == null) {
            promise.reject(VIEW_NOT_YET_INITIALIZED)
            return
        }

        val json = JSONObject(feedbackJson)
        val visualFeedbackColor = if (json.has("visualFeedbackColor")) {
            val hexColor = json["visualFeedbackColor"].toString()
            val colorPrefix = if (hexColor.startsWith("#")) "" else "#"
            try {
                Color.parseColor("$colorPrefix$hexColor")
            } catch (ex: Exception) {
                android.util.Log.e(
                    "scandit-react-native",
                    "Unable to parse color from $hexColor. ${ex.message}"
                )
                null
            }
        } else null

        if (json["type"].toString() == "success") {
            val successFeedback = if (visualFeedbackColor != null) {
                SparkScanViewFeedback.Success(visualFeedbackColor)
            } else {
                SparkScanViewFeedback.Success()
            }
            sparkScanView.emitFeedback(successFeedback)
            return
        }
        val message = json["message"].toString()
        val resumeCapturingDelay = json["resumeCapturingDelay"].toString().toLong()

        val errorFeedback = if (visualFeedbackColor != null) {
            SparkScanViewFeedback.Error(
                message,
                TimeInterval.millis(resumeCapturingDelay),
                visualFeedbackColor
            )
        } else {
            SparkScanViewFeedback.Error(
                message,
                TimeInterval.millis(resumeCapturingDelay)
            )
        }
        sparkScanView.emitFeedback(errorFeedback)

        promise.resolve(null)
    }

    @ReactMethod
    fun pauseScanning(promise: Promise) {
        val sparkScanView = viewManager.sparkScanView

        if (sparkScanView == null) {
            promise.reject(VIEW_NOT_YET_INITIALIZED)
            return
        }
        sparkScanView.pauseScanning()
        promise.resolve(null)
    }

    @ReactMethod
    fun startScanning(promise: Promise) {
        val sparkScanView = viewManager.sparkScanView

        if (sparkScanView == null) {
            promise.reject(VIEW_NOT_YET_INITIALIZED)
            return
        }
        sparkScanView.startScanning()
        promise.resolve(null)
    }

    @ReactMethod
    fun onResume(promise: Promise) {
        val sparkScanView = viewManager.sparkScanView

        if (sparkScanView == null) {
            promise.reject(VIEW_NOT_YET_INITIALIZED)
            return
        }
        sparkScanView.onResume()
        promise.resolve(null)
    }

    @ReactMethod
    fun onPause(promise: Promise) {
        val sparkScanView = viewManager.sparkScanView

        if (sparkScanView == null) {
            promise.reject(VIEW_NOT_YET_INITIALIZED)
            return
        }
        sparkScanView.onPause()
        promise.resolve(null)
    }

    override fun onCatalystInstanceDestroy() {
        viewManager.dispose()
        TreeLifecycleObserver.callbacks -= this
    }

    override fun onTreeCreated(root: DataCaptureContext) {
        dataCaptureContext = root
    }

    override fun onTreeDestroyed() {
        sparkScan = null
        dataCaptureContext = null
    }

    override fun getName(): String = "ScanditDataCaptureSparkScan"

    override fun getConstants(): MutableMap<String, Any> {
        return mutableMapOf(
            DEFAULTS_KEY to DEFAULTS.toWritableMap()
        )
    }

    override fun onModeDeserializationFinished(
        deserializer: SparkScanDeserializer,
        mode: SparkScan,
        json: JsonValue
    ) {
        if (json.contains("enabled")) {
            mode.isEnabled = json.requireByKeyAsBoolean("enabled")
        }
    }

    companion object {
        private const val DEFAULTS_KEY = "Defaults"
        private val VIEW_NOT_YET_INITIALIZED = Error(
            "The SparkScanView instance is not yet initialized."
        )

        private val DEFAULTS: SerializableSparkScanDefaults by lazy {
            SerializableSparkScanDefaults(
                SerializableSparkScanFeedbackDefaults(SparkScanFeedback.defaultFeedback()),
                SerializableSparkScanViewDefaults(SparkScanViewSettings()),
                SerializableSparkScanSettingsDefaults(SparkScanSettings())
            )
        }
    }
}
