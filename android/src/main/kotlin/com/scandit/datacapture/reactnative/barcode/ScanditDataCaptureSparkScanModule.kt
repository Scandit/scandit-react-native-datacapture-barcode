/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import com.facebook.react.bridge.LifecycleEventListener
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.scandit.datacapture.barcode.spark.ui.SparkScanCoordinatorLayout
import com.scandit.datacapture.frameworks.barcode.spark.SparkScanModule
import com.scandit.datacapture.frameworks.core.result.NoopFrameworksResult
import com.scandit.datacapture.frameworks.core.utils.DefaultMainThread
import com.scandit.datacapture.frameworks.core.utils.MainThread
import com.scandit.datacapture.reactnative.barcode.ui.SparkScanViewManager
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

class ScanditDataCaptureSparkScanModule(
    private val reactContext: ReactApplicationContext,
    private val sparkScanModule: SparkScanModule,
    private val viewManager: SparkScanViewManager,
    private val mainThread: MainThread = DefaultMainThread.getInstance()
) : ReactContextBaseJavaModule(reactContext) {

    private val lifecycleListener = object : LifecycleEventListener {
        override fun onHostResume() {
            sparkScanModule.onResume(NoopFrameworksResult())
        }

        override fun onHostPause() {
            sparkScanModule.onPause()
        }

        override fun onHostDestroy() {
            // Noop
        }
    }

    init {
        reactContext.addLifecycleEventListener(lifecycleListener)
    }

    @ReactMethod
    fun registerListenerForEvents() {
        sparkScanModule.addSparkScanListener()
    }

    @ReactMethod
    fun unregisterListenerForEvents() {
        sparkScanModule.removeSparkScanListener()
    }

    @ReactMethod
    fun finishDidUpdateSessionCallback(enabled: Boolean) {
        sparkScanModule.finishDidUpdateSessionCallback(enabled)
    }

    @ReactMethod
    fun finishDidScanCallback(enabled: Boolean) {
        sparkScanModule.finishDidScanCallback(enabled)
    }

    @ReactMethod
    fun resetSession() {
        sparkScanModule.resetSession()
    }

    @ReactMethod
    fun registerListenerForViewEvents(promise: Promise) {
        sparkScanModule.addSparkScanViewUiListener()
        promise.resolve(null)
    }

    @ReactMethod
    fun unregisterListenerForViewEvents(promise: Promise) {
        sparkScanModule.removeSparkScanViewUiListener()
        promise.resolve(null)
    }

    @ReactMethod
    fun create(@Suppress("UNUSED_PARAMETER") reactTag: Int, jsonString: String, promise: Promise) {
        val container = viewManager.currentContainer
        if (container == null) {
            // Workaround to the case when the container of the SparkScanView was not yet created.
            viewManager.postContainerCreationAction = {
                viewManager.currentContainer?.let { sparkScanContainer ->
                    mainThread.runOnMainThread {
                        addToContainer(sparkScanContainer, jsonString, promise)
                    }
                }
            }
            promise.resolve(null)
            return
        }

        mainThread.runOnMainThread {
            addToContainer(container, jsonString, promise)
        }
    }

    private fun addToContainer(
        container: SparkScanCoordinatorLayout,
        jsonString: String,
        promise: Promise
    ) {
        sparkScanModule.addViewToContainer(
            container,
            jsonString,
            ReactNativeResult(promise)
        )
        promise.resolve(null)
    }

    @ReactMethod
    fun update(@Suppress("UNUSED_PARAMETER") reactTag: Int, viewJson: String, promise: Promise) {
        sparkScanModule.updateView(viewJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateMode(jsonString: String, promise: Promise) {
        sparkScanModule.updateMode(jsonString, ReactNativeResult(promise))
    }

    @ReactMethod
    fun pauseScanning(promise: Promise) {
        sparkScanModule.pauseScanning()
        promise.resolve(null)
    }

    @ReactMethod
    fun startScanning(promise: Promise) {
        sparkScanModule.startScanning(ReactNativeResult(promise))
    }

    @ReactMethod
    fun onResume(promise: Promise) {
        // No need for this, the lifecycle is handled internally
        promise.resolve(null)
    }

    @ReactMethod
    fun onPause(promise: Promise) {
        // No need for this, the lifecycle is handled internally
        promise.resolve(null)
    }

    @ReactMethod
    fun showToast(text: String, promise: Promise) {
        sparkScanModule.showToast(text, ReactNativeResult(promise))
    }

    @ReactMethod
    fun setModeEnabledState(enabled: Boolean) {
        sparkScanModule.setModeEnabled(enabled)
    }

    @ReactMethod
    fun addFeedbackDelegate(promise: Promise) {
        sparkScanModule.addFeedbackDelegate(ReactNativeResult(promise))
    }

    @ReactMethod
    fun removeFeedbackDelegate(promise: Promise) {
        sparkScanModule.removeFeedbackDelegate(ReactNativeResult(promise))
    }

    @ReactMethod
    fun submitSparkScanFeedbackForBarcode(feedbackJson: String, promise: Promise) {
        sparkScanModule.submitFeedbackForBarcode(
            feedbackJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun disposeSparkScanView(promise: Promise) {
        sparkScanModule.pauseScanning()
        sparkScanModule.disposeView()
        promise.resolve(null)
    }

    override fun invalidate() {
        viewManager.dispose()
        sparkScanModule.onDestroy()
        reactContext.removeLifecycleEventListener(lifecycleListener)
        super.invalidate()
    }

    override fun getName(): String = "ScanditDataCaptureSparkScan"

    override fun getConstants(): MutableMap<String, Any> {
        return mutableMapOf(
            DEFAULTS_KEY to sparkScanModule.getDefaults()
        )
    }

    companion object {
        private const val DEFAULTS_KEY = "Defaults"
    }
}
