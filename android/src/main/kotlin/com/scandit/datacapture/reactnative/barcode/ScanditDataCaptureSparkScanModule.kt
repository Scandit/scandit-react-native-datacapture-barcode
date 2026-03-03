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
import com.scandit.datacapture.frameworks.barcode.spark.SparkScanModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

class ScanditDataCaptureSparkScanModule(
    private val reactContext: ReactApplicationContext,
    private val serviceLocator: ServiceLocator<FrameworkModule>,
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
    fun update(@Suppress("UNUSED_PARAMETER") reactTag: Int, viewJson: String, promise: Promise) {
        sparkScanModule.updateView(viewJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateMode(jsonString: String, promise: Promise) {
        sparkScanModule.updateMode(jsonString, ReactNativeResult(promise))
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

    private val sparkScanModule: SparkScanModule
        get() {
            return serviceLocator.resolve(
                SparkScanModule::class.java.name
            ) as? SparkScanModule? ?: throw ModuleNotStartedError(name)
        }

    companion object {
        private const val DEFAULTS_KEY = "Defaults"
    }
}
