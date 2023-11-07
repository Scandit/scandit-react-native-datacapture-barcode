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
    fun createView(
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
    fun updateView(jsonString: String, promise: Promise) {
        barcodeFindModule.updateBarcodeFindView(jsonString)
        promise.resolve(null)
    }

    @ReactMethod
    fun updateMode(jsonString: String, promise: Promise) {
        barcodeFindModule.updateBarcodeFindMode(jsonString)
        promise.resolve(null)
    }

    @ReactMethod
    fun registerBarcodeFindListener(promise: Promise) {
        barcodeFindModule.addBarcodeFindListener()
        promise.resolve(null)
    }

    @ReactMethod
    fun unregisterBarcodeFindListener(promise: Promise) {
        barcodeFindModule.removeBarcodeFindListener()
        promise.resolve(null)
    }

    @ReactMethod
    fun registerBarcodeFindViewListener(promise: Promise) {
        barcodeFindModule.addBarcodeFindViewListener()
        promise.resolve(null)
    }

    @ReactMethod
    fun unregisterBarcodeFindViewListener(promise: Promise) {
        barcodeFindModule.removeBarcodeFindViewListener()
        promise.resolve(null)
    }

    @ReactMethod
    fun viewOnPause(promise: Promise) {
        barcodeFindModule.viewOnPause()
        promise.resolve(null)
    }

    @ReactMethod
    fun viewOnResume(promise: Promise) {
        barcodeFindModule.viewOnResume()
        promise.resolve(null)
    }

    @ReactMethod
    fun setItemList(barcodeFindItemsJson: String, promise: Promise) {
        try {
            barcodeFindModule.setItemList(barcodeFindItemsJson)
            promise.resolve(null)
        } catch (e: Exception) {
            promise.reject(e)
        }
    }

    @ReactMethod
    fun viewStopSearching(promise: Promise) {
        barcodeFindModule.viewStopSearching()
        promise.resolve(null)
    }

    @ReactMethod
    fun viewStartSearching(promise: Promise) {
        barcodeFindModule.viewStartSearching()
        promise.resolve(null)
    }

    @ReactMethod
    fun viewPauseSearching(promise: Promise) {
        barcodeFindModule.viewPauseSearching()
        promise.resolve(null)
    }

    @ReactMethod
    fun barcodeFindModeStart(promise: Promise) {
        barcodeFindModule.modeStart()
        promise.resolve(null)
    }

    @ReactMethod
    fun barcodeFindModePause(promise: Promise) {
        barcodeFindModule.modePause()
        promise.resolve(null)
    }

    @ReactMethod
    fun barcodeFindModeStop(promise: Promise) {
        barcodeFindModule.modeStop()
        promise.resolve(null)
    }
}
