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
import com.facebook.react.uimanager.ViewGroupManager
import com.scandit.datacapture.frameworks.barcode.spark.SparkScanModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.barcode.ui.SparkScanViewManager
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

class ScanditDataCaptureSparkScanModule(
    private val reactContext: ReactApplicationContext,
    private val serviceLocator: ServiceLocator<FrameworkModule>,
    private val viewManagers: Map<String, ViewGroupManager<*>>,
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
    fun update(reactTag: Int, viewJson: String, promise: Promise) {
        sparkScanModule.updateView(viewJson, ReactNativeResult(promise))

        val viewManager = viewManagers[SparkScanViewManager::class.java.name] as?
            SparkScanViewManager
        viewManager?.updateCachedViewJsonOnUpdate(reactTag, viewJson)
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
