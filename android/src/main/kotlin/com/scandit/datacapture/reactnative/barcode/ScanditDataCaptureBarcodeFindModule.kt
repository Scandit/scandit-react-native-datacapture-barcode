/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import com.facebook.react.bridge.LifecycleEventListener
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.scandit.datacapture.frameworks.barcode.find.BarcodeFindModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.frameworks.core.result.NoopFrameworksResult
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

class ScanditDataCaptureBarcodeFindModule(
    private val reactContext: ReactApplicationContext,
    private val serviceLocator: ServiceLocator<FrameworkModule>,
) : ReactContextBaseJavaModule(reactContext) {

    private val lifecycleListener = object : LifecycleEventListener {
        override fun onHostResume() {
            barcodeFindModule.viewOnResume(NoopFrameworksResult())
        }

        override fun onHostPause() {
            barcodeFindModule.viewOnPause(NoopFrameworksResult())
        }

        override fun onHostDestroy() {
            barcodeFindModule.viewDisposed()
        }
    }

    override fun initialize() {
        reactContext.addLifecycleEventListener(lifecycleListener)
    }

    override fun getName(): String = "ScanditDataCaptureBarcodeFind"

    override fun getConstants(): MutableMap<String, Any> {
        return mutableMapOf(
            "Defaults" to barcodeFindModule.getDefaults()
        )
    }

    override fun invalidate() {
        reactContext.removeLifecycleEventListener(lifecycleListener)
        barcodeFindModule.onDestroy()
        super.invalidate()
    }

    @ReactMethod
    fun createFindView(
        @Suppress("UNUSED_PARAMETER") reactTag: Int,
        @Suppress("UNUSED_PARAMETER") jsonString: String,
        promise: Promise
    ) {
        promise.resolve(null)
    }

    @ReactMethod
    fun updateFindView(jsonString: String, promise: Promise) {
        barcodeFindModule.updateBarcodeFindView(jsonString, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateFindMode(jsonString: String, promise: Promise) {
        barcodeFindModule.updateBarcodeFindMode(jsonString, ReactNativeResult(promise))
    }

    @ReactMethod
    fun registerBarcodeFindListener(promise: Promise) {
        barcodeFindModule.addBarcodeFindListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun unregisterBarcodeFindListener(promise: Promise) {
        barcodeFindModule.removeBarcodeFindListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun registerBarcodeFindViewListener(promise: Promise) {
        barcodeFindModule.addBarcodeFindViewListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun unregisterBarcodeFindViewListener(promise: Promise) {
        barcodeFindModule.removeBarcodeFindViewListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeFindViewOnPause(promise: Promise) {
        barcodeFindModule.viewOnPause(ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeFindViewOnResume(promise: Promise) {
        barcodeFindModule.viewOnResume(ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeFindSetItemList(barcodeFindItemsJson: String, promise: Promise) {
        barcodeFindModule.setItemList(barcodeFindItemsJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeFindViewStopSearching(promise: Promise) {
        barcodeFindModule.viewStopSearching(ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeFindViewStartSearching(promise: Promise) {
        barcodeFindModule.viewStartSearching(ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeFindViewPauseSearching(promise: Promise) {
        barcodeFindModule.viewPauseSearching(ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeFindModeStart(promise: Promise) {
        barcodeFindModule.modeStart(ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeFindModePause(promise: Promise) {
        barcodeFindModule.modePause(ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeFindModeStop(promise: Promise) {
        barcodeFindModule.modeStop(ReactNativeResult(promise))
    }

    @ReactMethod
    fun setModeEnabledState(enabled: Boolean) {
        barcodeFindModule.setModeEnabled(enabled)
    }

    @ReactMethod
    fun setBarcodeTransformer(promise: Promise) {
        barcodeFindModule.setBarcodeFindTransformer(ReactNativeResult(promise))
    }

    @ReactMethod
    fun submitBarcodeFindTransformerResult(transformedBarcode: String?, promise: Promise) {
        barcodeFindModule.submitBarcodeFindTransformerResult(
            transformedBarcode,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun updateBarcodeFindFeedback(feedbackJson: String, promise: Promise) {
        barcodeFindModule.updateFeedback(
            feedbackJson,
            ReactNativeResult(promise)
        )
    }

    private val barcodeFindModule: BarcodeFindModule
        get() {
            return serviceLocator.resolve(
                BarcodeFindModule::class.java.name
            ) as? BarcodeFindModule? ?: throw ModuleNotStartedError(name)
        }
}
