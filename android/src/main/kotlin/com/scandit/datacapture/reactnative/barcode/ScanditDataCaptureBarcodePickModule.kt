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
import com.facebook.react.uimanager.ViewGroupManager
import com.scandit.datacapture.frameworks.barcode.pick.BarcodePickModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.errors.ParameterNullError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.barcode.ui.BarcodePickViewManager
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult
import com.scandit.datacapture.reactnative.core.utils.viewId

class ScanditDataCaptureBarcodePickModule(
    private val reactContext: ReactApplicationContext,
    private val serviceLocator: ServiceLocator<FrameworkModule>,
    private val viewManagers: Map<String, ViewGroupManager<*>>,
) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "ScanditDataCaptureBarcodePick"

    companion object {
        private const val DEFAULTS_KEY = "Defaults"
        private val VIEW_MANAGER_NULL_ERROR = Error(
            "Unable to add the BarcodePickView on Android. " +
                "The BarcodePickViewManager instance is null."
        )
    }

    override fun getConstants(): MutableMap<String, Any> {
        return mutableMapOf(
            DEFAULTS_KEY to barcodePickModule.getDefaults()
        )
    }

    override fun invalidate() {
        barcodePickModule.onDestroy()
        super.invalidate()
    }

    @ReactMethod
    fun createPickView(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val viewId = readableMap.viewId
        val viewJson = readableMap.getString("json") ?: run {
            promise.reject(ParameterNullError("json"))
            return
        }

        val viewManager = viewManagers[BarcodePickViewManager::class.java.name] as?
            BarcodePickViewManager
        if (viewManager == null) {
            promise.reject(VIEW_MANAGER_NULL_ERROR)
            return
        }

        viewManager.createBarcodePickView(viewId, viewJson, promise)
    }

    @ReactMethod
    fun updatePickView(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val jsonString = readableMap.getString("json")
            ?: return promise.reject(ParameterNullError("json"))
        barcodePickModule.updateView(readableMap.viewId, jsonString, ReactNativeResult(promise))
    }

    @ReactMethod
    fun addPickActionListener(readableMap: ReadableMap, promise: Promise) {
        barcodePickModule.addActionListener(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun removePickActionListener(readableMap: ReadableMap, promise: Promise) {
        barcodePickModule.removeActionListener(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun addBarcodePickScanningListener(readableMap: ReadableMap, promise: Promise) {
        barcodePickModule.addScanningListener(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun removeBarcodePickScanningListener(readableMap: ReadableMap, promise: Promise) {
        barcodePickModule.removeScanningListener(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun addPickViewListener(readableMap: ReadableMap, promise: Promise) {
        barcodePickModule.addViewListener(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun removePickViewListener(readableMap: ReadableMap, promise: Promise) {
        barcodePickModule.removeViewListener(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun registerBarcodePickViewUiListener(readableMap: ReadableMap, promise: Promise) {
        barcodePickModule.addViewUiListener(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun unregisterBarcodePickViewUiListener(readableMap: ReadableMap, promise: Promise) {
        barcodePickModule.removeViewUiListener(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun registerOnProductIdentifierForItemsListener(
        @Suppress("UNUSED_PARAMETER") readableMap: ReadableMap,
        promise: Promise
    ) {
        // Noop - handled automatically by FrameworksBarcodePickView
        promise.resolve(null)
    }

    @ReactMethod
    fun unregisterOnProductIdentifierForItemsListener(
        @Suppress("UNUSED_PARAMETER") readableMap: ReadableMap,
        promise: Promise
    ) {
        // Noop - handled automatically by FrameworksBarcodePickView
        promise.resolve(null)
    }

    @ReactMethod
    fun finishOnProductIdentifierForItems(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val itemsJson = readableMap.getString("itemsJson")
            ?: return promise.reject(ParameterNullError("itemsJson"))
        val response = hashMapOf<String, Any?>(
            "viewId" to readableMap.viewId,
            "data" to itemsJson
        )
        barcodePickModule.finishOnProductIdentifierForItems(response, ReactNativeResult(promise))
    }

    @ReactMethod
    fun pickViewStart(readableMap: ReadableMap, promise: Promise) {
        barcodePickModule.startPickView(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun pickViewFreeze(readableMap: ReadableMap, promise: Promise) {
        barcodePickModule.freezePickView(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun pickViewReset(readableMap: ReadableMap, promise: Promise) {
        barcodePickModule.viewReset(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun pickViewStop(readableMap: ReadableMap, promise: Promise) {
        barcodePickModule.stopPickView(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun pickViewPause(readableMap: ReadableMap, promise: Promise) {
        barcodePickModule.pausePickView(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun pickViewResume(readableMap: ReadableMap, promise: Promise) {
        barcodePickModule.resumePickView(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun removePickView(readableMap: ReadableMap, promise: Promise) {
        barcodePickModule.releasePickView(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun addBarcodePickListener(readableMap: ReadableMap, promise: Promise) {
        barcodePickModule.addBarcodePickListener(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun removeBarcodePickListener(readableMap: ReadableMap, promise: Promise) {
        barcodePickModule.removeBarcodePickListener(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun finishPickAction(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val itemData = readableMap.getString("code")
            ?: return promise.reject(ParameterNullError("code"))
        val result = readableMap.getBoolean("result")
        val response = hashMapOf<String, Any?>(
            "viewId" to readableMap.viewId,
            "itemData" to itemData,
            "result" to result
        )
        barcodePickModule.finishPickAction(response, ReactNativeResult(promise))
    }

    @ReactMethod
    fun finishBarcodePickViewHighlightStyleCustomViewProviderViewForRequest(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val response = HashMap<String, Any?>(readableMap.toHashMap()).apply {
            put("viewId", readableMap.viewId)
        }
        barcodePickModule.finishBarcodePickViewHighlightStyleCustomViewProviderViewForRequest(
            response,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun finishBarcodePickViewHighlightStyleAsyncProviderStyleForRequest(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val response = HashMap<String, Any?>(readableMap.toHashMap()).apply {
            put("viewId", readableMap.viewId)
        }
        barcodePickModule.finishBarcodePickViewHighlightStyleAsyncProviderStyleForRequest(
            response,
            ReactNativeResult(promise)
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

    private val barcodePickModule: BarcodePickModule
        get() {
            return serviceLocator.resolve(
                BarcodePickModule::class.java.name
            ) as? BarcodePickModule? ?: throw ModuleNotStartedError(name)
        }
}
