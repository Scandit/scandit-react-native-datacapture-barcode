/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.uimanager.ViewGroupManager
import com.scandit.datacapture.frameworks.barcode.spark.SparkScanModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.errors.ParameterNullError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.barcode.ui.SparkScanViewManager
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult
import com.scandit.datacapture.reactnative.core.utils.viewId

class ScanditDataCaptureSparkScanModule(
    reactContext: ReactApplicationContext,
    private val serviceLocator: ServiceLocator<FrameworkModule>,
    private val viewManagers: Map<String, ViewGroupManager<*>>,
) : ReactContextBaseJavaModule(reactContext) {

    // SparkScanListenerProxy methods
    @ReactMethod
    fun resetSparkScanSession(readableMap: ReadableMap, promise: Promise) {
        sparkScanModule.resetSession(readableMap.viewId)
        promise.resolve(null)
    }

    @ReactMethod
    fun updateSparkScanMode(readableMap: ReadableMap, promise: Promise) {
        val sparkScanJson = readableMap.getString("modeJson") ?: run {
            promise.reject(ParameterNullError("modeJson"))
            return
        }
        sparkScanModule.updateMode(
            readableMap.viewId,
            sparkScanJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun registerSparkScanListenerForEvents(readableMap: ReadableMap, promise: Promise) {
        sparkScanModule.addSparkScanListener(readableMap.viewId)
        promise.resolve(null)
    }

    @ReactMethod
    fun unregisterSparkScanListenerForEvents(readableMap: ReadableMap, promise: Promise) {
        sparkScanModule.removeSparkScanListener(readableMap.viewId)
        promise.resolve(null)
    }

    @ReactMethod
    fun finishSparkScanDidUpdateSession(readableMap: ReadableMap) {
        val isEnabled = readableMap.getBoolean("isEnabled")
        sparkScanModule.finishDidUpdateSessionCallback(readableMap.viewId, isEnabled)
    }

    @ReactMethod
    fun finishSparkScanDidScan(readableMap: ReadableMap) {
        val isEnabled = readableMap.getBoolean("isEnabled")
        sparkScanModule.finishDidScanCallback(readableMap.viewId, isEnabled)
    }

    @ReactMethod
    fun setSparkScanModeEnabledState(readableMap: ReadableMap) {
        val isEnabled = readableMap.getBoolean("isEnabled")
        sparkScanModule.setModeEnabled(readableMap.viewId, isEnabled)
    }

    // SparkScanViewProxy methods
    @ReactMethod
    fun updateSparkScanView(readableMap: ReadableMap, promise: Promise) {
        val viewId = readableMap.viewId
        val viewJson = readableMap.getString("viewJson") ?: run {
            promise.reject(ParameterNullError("viewJson"))
            return
        }
        sparkScanModule.updateView(viewId, viewJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun createSparkScanView(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val viewId = readableMap.viewId
        val viewJson = readableMap.getString("viewJson") ?: run {
            promise.reject(ParameterNullError("viewJson"))
            return
        }

        val viewManager = viewManagers[SparkScanViewManager::class.java.name] as?
            SparkScanViewManager
        if (viewManager == null) {
            promise.reject(VIEW_MANAGER_NULL_ERROR)
            return
        }

        viewManager.createSparkScanView(viewId, viewJson, promise)
    }

    @ReactMethod
    fun disposeSparkScanView(readableMap: ReadableMap, promise: Promise) {
        sparkScanModule.disposeView(readableMap.viewId)
        promise.resolve(null)
    }

    @ReactMethod
    fun showSparkScanView(promise: Promise) {
        promise.resolve(null)
    }

    @ReactMethod
    fun hideSparkScanView(promise: Promise) {
        promise.resolve(null)
    }

    @ReactMethod
    fun registerSparkScanViewListenerEvents(readableMap: ReadableMap, promise: Promise) {
        sparkScanModule.addSparkScanViewUiListener(readableMap.viewId)
        promise.resolve(null)
    }

    @ReactMethod
    fun unregisterSparkScanViewListenerEvents(readableMap: ReadableMap, promise: Promise) {
        sparkScanModule.removeSparkScanViewUiListener(readableMap.viewId)
        promise.resolve(null)
    }

    @ReactMethod
    fun showSparkScanViewToast(readableMap: ReadableMap, promise: Promise) {
        val text = readableMap.getString("text") ?: run {
            promise.reject(ParameterNullError("text"))
            return
        }
        sparkScanModule.showToast(readableMap.viewId, text, ReactNativeResult(promise))
    }

    @ReactMethod
    fun stopSparkScanViewScanning(
        @Suppress("UNUSED_PARAMETER") readableMap: ReadableMap,
        promise: Promise
    ) {
        promise.resolve(null)
    }

    @ReactMethod
    fun startSparkScanViewScanning(readableMap: ReadableMap, promise: Promise) {
        sparkScanModule.startScanning(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun pauseSparkScanViewScanning(readableMap: ReadableMap, promise: Promise) {
        sparkScanModule.pauseScanning(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun prepareSparkScanViewScanning(
        @Suppress("UNUSED_PARAMETER") readableMap: ReadableMap,
        promise: Promise
    ) {
        promise.resolve(null)
    }

    @ReactMethod
    fun registerSparkScanFeedbackDelegateForEvents(readableMap: ReadableMap, promise: Promise) {
        sparkScanModule.addFeedbackDelegate(
            readableMap.viewId,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun unregisterSparkScanFeedbackDelegateForEvents(readableMap: ReadableMap, promise: Promise) {
        sparkScanModule.removeFeedbackDelegate(
            readableMap.viewId,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun submitSparkScanFeedbackForBarcode(readableMap: ReadableMap, promise: Promise) {
        val feedbackJson = readableMap.getString("feedbackJson")
        sparkScanModule.submitFeedbackForBarcode(
            readableMap.viewId,
            feedbackJson,
            ReactNativeResult(promise)
        )
    }

    override fun invalidate() {
        sparkScanModule.onDestroy()
        super.invalidate()
    }

    override fun getName(): String = "ScanditDataCaptureSparkScan"

    override fun getConstants(): MutableMap<String, Any> {
        return mutableMapOf(
            DEFAULTS_KEY to sparkScanModule.getDefaults()
        )
    }

    @ReactMethod
    fun addListener(@Suppress("UNUSED_PARAMETER") eventName: String?) {
        // Keep: Required for RN built in Event Emitter Calls.
    }

    @ReactMethod
    fun removeListeners(@Suppress("UNUSED_PARAMETER") count: Int?) {
        // Keep: Required for RN built in Event Emitter Calls.
    }

    private val sparkScanModule: SparkScanModule
        get() {
            return serviceLocator.resolve(
                SparkScanModule::class.java.name
            ) as? SparkScanModule? ?: throw ModuleNotStartedError(name)
        }

    companion object {
        private const val DEFAULTS_KEY = "Defaults"

        private val VIEW_MANAGER_NULL_ERROR = Error(
            "Unable to add the SparkScanView on Android. " +
                "The SparkScanViewManager instance is null."
        )
    }
}
