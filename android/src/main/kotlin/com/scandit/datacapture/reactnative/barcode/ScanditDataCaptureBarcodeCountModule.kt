/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.scandit.datacapture.barcode.count.capture.BarcodeCount
import com.scandit.datacapture.barcode.count.capture.BarcodeCountSettings
import com.scandit.datacapture.barcode.count.capture.list.BarcodeCountCaptureList
import com.scandit.datacapture.barcode.count.capture.list.TargetBarcode
import com.scandit.datacapture.barcode.count.feedback.BarcodeCountFeedback
import com.scandit.datacapture.barcode.count.serialization.BarcodeCountDeserializer
import com.scandit.datacapture.barcode.count.serialization.BarcodeCountViewDeserializer
import com.scandit.datacapture.barcode.count.ui.view.BarcodeCountView
import com.scandit.datacapture.core.capture.DataCaptureContext
import com.scandit.datacapture.core.ui.style.BrushDeserializer
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableBarcodeCountDefaults
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableBarcodeCountSettingsDefaults
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableBarcodeCountViewDefaults
import com.scandit.datacapture.reactnative.barcode.listener.RCTBarcodeCountCaptureListListener
import com.scandit.datacapture.reactnative.barcode.listener.RCTBarcodeCountListener
import com.scandit.datacapture.reactnative.barcode.listener.RCTBarcodeCountViewListener
import com.scandit.datacapture.reactnative.barcode.listener.RCTBarcodeCountViewUiListener
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeCountViewManager
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableCameraSettingsDefaults
import com.scandit.datacapture.reactnative.core.deserializers.TreeLifecycleObserver
import com.scandit.datacapture.reactnative.core.ui.ScanditViewGroupManager
import com.scandit.datacapture.reactnative.core.utils.LazyEventEmitter
import org.json.JSONArray
import org.json.JSONObject

class ScanditDataCaptureBarcodeCountModule(
    private val reactContext: ReactApplicationContext,
    private val viewManager: BarcodeCountViewManager,
    private val barcodeCountViewDeserializer: BarcodeCountViewDeserializer =
        BarcodeCountViewDeserializer(),
    private val barcodeCountDeserializer: BarcodeCountDeserializer =
        BarcodeCountDeserializer(),
    eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter = LazyEventEmitter(
        reactContext
    ),
    private val barcodeCountListener: RCTBarcodeCountListener =
        RCTBarcodeCountListener(eventEmitter),
    private val barcodeCountViewUiListener: RCTBarcodeCountViewUiListener =
        RCTBarcodeCountViewUiListener(eventEmitter),
    private val barcodeCountViewListener: RCTBarcodeCountViewListener =
        RCTBarcodeCountViewListener(eventEmitter),
    private val barcodeCountCaptureListListener: RCTBarcodeCountCaptureListListener =
        RCTBarcodeCountCaptureListListener(eventEmitter)
) : ReactContextBaseJavaModule(reactContext),
    TreeLifecycleObserver.Callbacks {

    private var dataCaptureContext: DataCaptureContext? = null
    private var barcodeCountView: BarcodeCountView? = null

    private var barcodeCount: BarcodeCount? = null
        private set(value) {
            field?.removeListener(barcodeCountListener)
            field = value?.also { it.addListener(barcodeCountListener) }
        }

    init {
        TreeLifecycleObserver.callbacks += this
    }


    override fun getName(): String = "ScanditDataCaptureBarcodeCount"

    override fun getConstants(): MutableMap<String, Any> {
        val barcodeCountSettings = BarcodeCountSettings()
        return mutableMapOf(
            "Defaults" to SerializableBarcodeCountDefaults(
                SerializableCameraSettingsDefaults(BarcodeCount.createRecommendedCameraSettings()),
                SerializableBarcodeCountSettingsDefaults(barcodeCountSettings),
                BarcodeCountFeedback(),
                SerializableBarcodeCountViewDefaults(
                    reactContext,
                    BarcodeCountView.newInstance(
                        reactContext,
                        null,
                        BarcodeCount.forDataCaptureContext(null, barcodeCountSettings)
                    )
                )
            ).toWritableMap()
        )
    }

    @ReactMethod
    fun createView(@Suppress("UNUSED_PARAMETER") reactTag: Int, jsonString: String, promise: Promise) {
        val context = dataCaptureContext
        if (context == null) {
            promise.reject(Error("DataCaptureContext not yet initialized."))
            return
        }
        val json = JSONObject(jsonString)
        if (!json.has("BarcodeCount")) {
            promise.reject(IllegalArgumentException("Json doesn't contain info about BarcodeCount"))
            return
        }

        val barcodeCountModeJson = json["BarcodeCount"].toString()

        val mode: BarcodeCount
        try {
            mode = barcodeCountDeserializer.modeFromJson(context, barcodeCountModeJson)
        } catch (error: Exception) {
            promise.reject(
                "Unable to create an instance of BarcodeCount from the provided json.",
                error
            )
            return
        }
        barcodeCount = mode

        barcodeCountCaptureList?.let {
            mode.setBarcodeCountCaptureList(it)
        }

        if (!json.has("BarcodeCountView")) {
            promise.reject(
                IllegalArgumentException("Json doesn't contain info about BarcodeCountView")
            )
            return
        }
        val barcodeCountViewJson = json["BarcodeCountView"].toString()

        try {
            addViewFromJson(barcodeCountViewJson)
            promise.resolve(null)
        } catch (error: Exception) {
            promise.reject(
                "Unable to create an instance of BarcodeCountView from the provided json.",
                error
            )
        }
    }

    @ReactMethod
    fun updateView(jsonString: String, promise: Promise) {
        val view = barcodeCountView
        if (view == null) {
            promise.reject(VIEW_NOT_YET_INITIALIZED)
            return
        }

        barcodeCountViewDeserializer.updateViewFromJson(view, jsonString)
    }

    private fun addViewFromJson(barcodeCountViewJson: String) {
        val mode = barcodeCount ?: return
        val context = dataCaptureContext ?: return

        barcodeCountView = barcodeCountViewDeserializer.viewFromJson(
            reactContext,
            context,
            mode,
            barcodeCountViewJson
        ).also {
            viewManager.addViewToContainer(it)
            it.uiListener = barcodeCountViewUiListener
            it.listener = barcodeCountViewListener
        }
    }

    @ReactMethod
    fun updateMode(jsonString: String, promise: Promise) {
        val mode = barcodeCount
        if (mode == null) {
            promise.reject(MODE_NOT_YET_INITIALIZED)
            return
        }

        barcodeCountDeserializer.updateModeFromJson(mode, jsonString)
    }

    @ReactMethod
    fun registerBarcodeCountListener(promise: Promise) {
        barcodeCountListener.setHasNativeListeners(true)
        promise.resolve(null)
    }

    @ReactMethod
    fun unregisterBarcodeCountListener(promise: Promise) {
        barcodeCountListener.setHasNativeListeners(false)
        promise.resolve(null)
    }

    @ReactMethod
    fun registerBarcodeCountViewListener(promise: Promise) {
        barcodeCountViewListener.setHasNativeListeners(true)
        promise.resolve(null)
    }

    @ReactMethod
    fun unregisterBarcodeCountViewListener(promise: Promise) {
        barcodeCountViewListener.setHasNativeListeners(false)
        promise.resolve(null)
    }

    @ReactMethod
    fun registerBarcodeCountViewUiListener(promise: Promise) {
        barcodeCountViewUiListener.setHasNativeListeners(true)
        promise.resolve(null)
    }

    @ReactMethod
    fun unregisterBarcodeCountViewUiListener(promise: Promise) {
        barcodeCountViewUiListener.setHasNativeListeners(false)
        promise.resolve(null)
    }

    @ReactMethod
    fun resetSession(promise: Promise) {
        barcodeCountListener.lastSession?.reset()
        promise.resolve(null)
    }

    @ReactMethod
    fun finishOnScan(promise: Promise) {
        barcodeCountListener.finishOnScan()
        promise.resolve(null)
    }

    @ReactMethod
    fun resetBarcodeCount(promise: Promise) {
        barcodeCount?.reset()
        promise.resolve(null)
    }

    @ReactMethod
    fun startScanningPhase(promise: Promise) {
        barcodeCount?.startScanningPhase()
        promise.resolve(null)
    }

    @ReactMethod
    fun endScanningPhase(promise: Promise) {
        barcodeCount?.endScanningPhase()
        promise.resolve(null)
    }

    @ReactMethod
    fun clearHighlights(promise: Promise) {
        barcodeCountView?.clearHighlights()
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBrushForRecognizedBarcodeCallback(brushJson: String, promise: Promise) {
        val brush = BrushDeserializer.fromJson(brushJson)
        barcodeCountViewListener.finishBrushForRecognizedBarcodeEvent(brush)
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBrushForRecognizedBarcodeNotInListCallback(brushJson: String, promise: Promise) {
        val brush = BrushDeserializer.fromJson(brushJson)
        barcodeCountViewListener.finishBrushForRecognizedBarcodeNotInListEvent(brush)
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBrushForUnrecognizedBarcodeCallback(brushJson: String, promise: Promise) {
        val brush = BrushDeserializer.fromJson(brushJson)
        barcodeCountViewListener.finishBrushForUnrecognizedBarcodeEvent(brush)
        promise.resolve(null)
    }

    private var barcodeCountCaptureList: BarcodeCountCaptureList? = null

    @ReactMethod
    fun setBarcodeCountCaptureList(targetBarcodesJson: String, promise: Promise) {
        val barcodes = JSONArray(targetBarcodesJson)

        val targetBarcodes = mutableListOf<TargetBarcode>()
        for (i in 0 until barcodes.length()) {
            val values = JSONObject(barcodes[i].toString())
            targetBarcodes.add(
                TargetBarcode.create(
                    values["data"].toString(),
                    values["quantity"].toString().toInt()
                )
            )
        }

        barcodeCountCaptureList =  BarcodeCountCaptureList.create(
            barcodeCountCaptureListListener,
            targetBarcodes
        ).also {
            barcodeCount?.setBarcodeCountCaptureList(it)
        }
        promise.resolve(null)
    }

    override fun onTreeCreated(root: DataCaptureContext) {
        dataCaptureContext = root
    }

    override fun onTreeDestroyed() {
        viewManager.dispose()
    }

    @Suppress("OVERRIDE_DEPRECATION")
    override fun onCatalystInstanceDestroy() {
        TreeLifecycleObserver.callbacks -= this
        barcodeCountView?.uiListener = null
        barcodeCountView?.listener = null
        barcodeCountView = null
        barcodeCountCaptureList = null
    }

    companion object {
        private val VIEW_NOT_YET_INITIALIZED = Error(
            "The BarcodeCountView instance is not yet initialized."
        )
        private val MODE_NOT_YET_INITIALIZED = Error(
            "The BarcodeCount mode instance is not yet initialized."
        )
    }
}
