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
import com.scandit.datacapture.frameworks.barcode.pick.BarcodePickModule
import com.scandit.datacapture.reactnative.barcode.ui.BarcodePickViewManager
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

class ScanditDataCaptureBarcodePickModule(
    reactContext: ReactApplicationContext,
    private val barcodePickModule: BarcodePickModule,
    private val viewManager: BarcodePickViewManager
) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String = "ScanditDataCaptureBarcodePick"

    override fun getConstants(): MutableMap<String, Any> {
        return mutableMapOf(
            "Defaults" to barcodePickModule.getDefaults()
        )
    }

    override fun invalidate() {
        viewManager.dispose()
        barcodePickModule.onDestroy()
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
                    barcodePickModule.addViewToContainer(it, jsonString, ReactNativeResult(promise))
                }
            }
            return
        }
        barcodePickModule.addViewToContainer(container, jsonString, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateView(jsonString: String, promise: Promise) {
        barcodePickModule.updateView(jsonString, ReactNativeResult(promise))
    }

    @ReactMethod
    fun addActionListener(promise: Promise) {
        barcodePickModule.addActionListener()
        promise.resolve(null)
    }

    @ReactMethod
    fun removeActionListener(promise: Promise) {
        barcodePickModule.removeActionListener()
        promise.resolve(null)
    }

    @ReactMethod
    fun addScanningListener(promise: Promise) {
        barcodePickModule.addScanningListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun removeScanningListener(promise: Promise) {
        barcodePickModule.removeScanningListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun addViewListener(promise: Promise) {
        barcodePickModule.addViewListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun removeViewListener(promise: Promise) {
        barcodePickModule.removeViewListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun registerBarcodePickViewUiListener(promise: Promise) {
        barcodePickModule.addViewUiListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun unregisterBarcodePickViewUiListener(promise: Promise) {
        barcodePickModule.removeViewUiListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun finishOnProductIdentifierForItems(
        barcodePickProductProviderCallbackItemsJson: String,
        promise: Promise
    ) {
        barcodePickModule.finishOnProductIdentifierForItems(
            barcodePickProductProviderCallbackItemsJson
        )
        promise.resolve(null)
    }

    @ReactMethod
    fun viewPause(promise: Promise) {
        barcodePickModule.viewPause()
        promise.resolve(null)
    }

    @ReactMethod
    fun viewStart(promise: Promise) {
        barcodePickModule.viewStart()
        promise.resolve(null)
    }

    @ReactMethod
    fun viewFreeze(promise: Promise) {
        barcodePickModule.viewFreeze(ReactNativeResult(promise))
    }

    @ReactMethod
    fun finishPickAction(itemData: String, result: Boolean, promise: Promise) {
        barcodePickModule.finishPickAction(itemData, result)
        promise.resolve(null)
    }
}
