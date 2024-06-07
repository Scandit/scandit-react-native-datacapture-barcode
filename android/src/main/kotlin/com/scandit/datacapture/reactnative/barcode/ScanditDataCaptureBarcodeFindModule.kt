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
import com.scandit.datacapture.frameworks.barcode.find.BarcodeFindModule
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeFindViewManager
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

class ScanditDataCaptureBarcodeFindModule(
    reactContext: ReactApplicationContext,
    private val barcodeFindModule: BarcodeFindModule,
    private val viewManager: BarcodeFindViewManager
) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String = "ScanditDataCaptureBarcodeFind"

    override fun getConstants(): MutableMap<String, Any> {
        return mutableMapOf(
            "Defaults" to barcodeFindModule.getDefaults()
        )
    }

    override fun invalidate() {
        viewManager.dispose()
        barcodeFindModule.onDestroy()
        super.invalidate()
    }

    @ReactMethod
    fun createFindView(
        @Suppress("UNUSED_PARAMETER") reactTag: Int,
        jsonString: String,
        promise: Promise
    ) {
        val container = viewManager.currentContainer
        if (container == null) {
            viewManager.postContainerCreationAction = {
                viewManager.currentContainer?.let {
                    barcodeFindModule.addViewToContainer(it, jsonString, ReactNativeResult(promise))
                }
            }
            return
        }
        barcodeFindModule.addViewToContainer(container, jsonString, ReactNativeResult(promise))
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
}
