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
import com.scandit.datacapture.barcode.spark.ui.SparkScanCoordinatorLayout
import com.scandit.datacapture.frameworks.barcode.spark.SparkScanModule
import com.scandit.datacapture.frameworks.core.utils.MainThread
import com.scandit.datacapture.reactnative.barcode.ui.SparkScanViewManager
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

class ScanditDataCaptureSparkScanModule(
    private val reactContext: ReactApplicationContext,
    private val sparkScanModule: SparkScanModule,
    private val viewManager: SparkScanViewManager,
) : ReactContextBaseJavaModule(reactContext) {

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
    fun create(reactTag: Int, jsonString: String, promise: Promise) {
        val container = viewManager.currentContainer
        if (container == null) {
            // Workaround to the case when the container of the SparkScanView was not yet created.
            viewManager.postContainerCreationAction = {
                viewManager.currentContainer?.let { sparkScanContainer ->
                    MainThread.runOnMainThread {
                        addToContainer(sparkScanContainer, jsonString, promise)
                    }
                }
            }
            return
        }

        MainThread.runOnMainThread {
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
        // This is a hack to bring all the views on top of the SparkScanView in order to solve the
        // issue described here https://scandit.atlassian.net/browse/SDC-17175.
        // No click was allowed on the other UI elements because SparkScanView was covering
        // all of them. This behaviour happens only on RN
        viewManager.rnViewsContainer.bringToFront()
    }


    @ReactMethod
    fun update(@Suppress("UNUSED_PARAMETER") reactTag: Int, viewJson: String, promise: Promise) {
        sparkScanModule.updateView(viewJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun emitFeedback(
        @Suppress("UNUSED_PARAMETER") reactTag: Int,
        feedbackJson: String,
        promise: Promise
    ) {
        sparkScanModule.emitFeedback(feedbackJson, ReactNativeResult(promise))
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
        sparkScanModule.onResume(ReactNativeResult(promise))
    }

    @ReactMethod
    fun onPause(promise: Promise) {
        sparkScanModule.onPause()
        promise.resolve(null)
    }

    @Suppress("OVERRIDE_DEPRECATION")
    override fun onCatalystInstanceDestroy() {
        viewManager.dispose()
        sparkScanModule.onPause()
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
