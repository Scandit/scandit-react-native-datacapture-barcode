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
import com.facebook.react.bridge.ReadableMap
import com.scandit.datacapture.frameworks.barcode.pick.BarcodePickModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.errors.ParameterNullError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

class ScanditDataCaptureBarcodePickModule(
    private val reactContext: ReactApplicationContext,
    private val serviceLocator: ServiceLocator<FrameworkModule>,
) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "ScanditDataCaptureBarcodePick"

    override fun getConstants(): MutableMap<String, Any> {
        return mutableMapOf(
            "Defaults" to barcodePickModule.getDefaults()
        )
    }

    override fun invalidate() {
        barcodePickModule.onDestroy()
        super.invalidate()
    }

    @ReactMethod
    fun createPickView(
        @Suppress("UNUSED_PARAMETER") readableMap: ReadableMap,
        promise: Promise
    ) {
        // Noop. The view is created inside the BarcodePickViewFragment.
        promise.resolve(null)
    }

    @ReactMethod
    fun updatePickView(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val jsonString = readableMap.getString("json")
            ?: return promise.reject(ParameterNullError("json"))
        barcodePickModule.updateView(jsonString, ReactNativeResult(promise))
    }

    @ReactMethod
    fun addPickActionListener(promise: Promise) {
        barcodePickModule.addActionListener()
        promise.resolve(null)
    }

    @ReactMethod
    fun removePickActionListener(promise: Promise) {
        barcodePickModule.removeActionListener()
        promise.resolve(null)
    }

    @ReactMethod
    fun addBarcodePickScanningListener(promise: Promise) {
        barcodePickModule.addScanningListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun removeBarcodePickScanningListener(promise: Promise) {
        barcodePickModule.removeScanningListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun addPickViewListener(promise: Promise) {
        barcodePickModule.addViewListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun removePickViewListener(promise: Promise) {
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
    fun registerOnProductIdentifierForItemsListener(promise: Promise) {
        // Noop
        promise.resolve(null)
    }

    @ReactMethod
    fun unregisterOnProductIdentifierForItemsListener(promise: Promise) {
        // Noop
        promise.resolve(null)
    }

    @ReactMethod
    fun finishOnProductIdentifierForItems(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val itemsJson = readableMap.getString("itemsJson")
            ?: return promise.reject(ParameterNullError("itemsJson"))
        barcodePickModule.finishOnProductIdentifierForItems(itemsJson)
        promise.resolve(null)
    }

    @ReactMethod
    fun pickViewStart(promise: Promise) {
        barcodePickModule.viewStart()
        promise.resolve(null)
    }

    @ReactMethod
    fun pickViewFreeze(promise: Promise) {
        barcodePickModule.viewFreeze(ReactNativeResult(promise))
    }

    @ReactMethod
    fun pickViewStop(promise: Promise) {
        barcodePickModule.viewStop()
        promise.resolve(null)
    }

    @ReactMethod
    fun removePickView(promise: Promise) {
        barcodePickModule.viewDisposed()
        promise.resolve(null)
    }

    @ReactMethod
    fun finishPickAction(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val itemData = readableMap.getString("code")
            ?: return promise.reject(ParameterNullError("code"))
        val result = readableMap.getBoolean("result")
        barcodePickModule.finishPickAction(itemData = itemData, result = result)
        promise.resolve(null)
    }

    @ReactMethod
    fun addListener(@Suppress("UNUSED_PARAMETER") eventName: String?) {
        // Keep: Required for RN built in Event Emitter Calls.
    }

    @ReactMethod
    fun removeListeners(@Suppress("UNUSED_PARAMETER") count: Int?) {
        // Keep: Required for RN built in Event Emitter Calls.
    }

    private val barcodePickModule: BarcodePickModule
        get() {
            return serviceLocator.resolve(
                BarcodePickModule::class.java.name
            ) as? BarcodePickModule? ?: throw ModuleNotStartedError(name)
        }
}
