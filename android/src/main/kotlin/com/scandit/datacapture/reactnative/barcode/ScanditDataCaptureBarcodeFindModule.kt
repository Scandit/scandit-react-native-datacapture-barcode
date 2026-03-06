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
import com.scandit.datacapture.frameworks.barcode.find.BarcodeFindModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.errors.ParameterNullError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeFindViewManager
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult
import com.scandit.datacapture.reactnative.core.utils.viewId

class ScanditDataCaptureBarcodeFindModule(
    reactContext: ReactApplicationContext,
    private val serviceLocator: ServiceLocator<FrameworkModule>,
    private val viewManagers: Map<String, ViewGroupManager<*>>,
) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String = "ScanditDataCaptureBarcodeFind"

    override fun getConstants(): MutableMap<String, Any> {
        return mutableMapOf(
            "Defaults" to barcodeFindModule.getDefaults()
        )
    }

    override fun invalidate() {
        barcodeFindModule.onDestroy()
        super.invalidate()
    }

    @ReactMethod
    fun setBarcodeFindModeEnabledState(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val enabled = readableMap.getBoolean("enabled")
        barcodeFindModule.setModeEnabled(readableMap.viewId, enabled)
        promise.resolve(null)
    }

    @ReactMethod
    fun createFindView(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val viewId = readableMap.viewId
        val viewJson = readableMap.getString("json") ?: run {
            promise.reject(ParameterNullError("json"))
            return
        }

        val viewManager = viewManagers[BarcodeFindViewManager::class.java.name] as?
            BarcodeFindViewManager
        if (viewManager == null) {
            promise.reject(VIEW_MANAGER_NULL_ERROR)
            return
        }

        viewManager.createBarcodeFindView(viewId, viewJson, promise)
    }

    @ReactMethod
    fun removeFindView(
        @Suppress("UNUSED_PARAMETER") readableMap: ReadableMap,
        promise: Promise
    ) {
        // handled in view manager
        promise.resolve(null)
    }

    @ReactMethod
    fun showFindView(
        @Suppress("UNUSED_PARAMETER") readableMap: ReadableMap,
        promise: Promise
    ) {
        promise.resolve(null)
    }

    @ReactMethod
    fun hideFindView(
        @Suppress("UNUSED_PARAMETER") readableMap: ReadableMap,
        promise: Promise
    ) {
        promise.resolve(null)
    }

    @ReactMethod
    fun updateFindView(readableMap: ReadableMap, promise: Promise) {
        val jsonString = readableMap.getString("barcodeFindViewJson") ?: return promise.reject(
            ParameterNullError("barcodeFindViewJson")
        )

        barcodeFindModule.updateBarcodeFindView(
            readableMap.viewId,
            jsonString,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun updateFindMode(readableMap: ReadableMap, promise: Promise) {
        val jsonString = readableMap.getString("barcodeFindJson") ?: return promise.reject(
            ParameterNullError("barcodeFindJson")
        )
        barcodeFindModule.updateBarcodeFindMode(
            readableMap.viewId,
            jsonString,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun registerBarcodeFindListener(readableMap: ReadableMap, promise: Promise) {
        barcodeFindModule.addBarcodeFindListener(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun unregisterBarcodeFindListener(readableMap: ReadableMap, promise: Promise) {
        barcodeFindModule.removeBarcodeFindListener(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun registerBarcodeFindViewListener(readableMap: ReadableMap, promise: Promise) {
        barcodeFindModule.addBarcodeFindViewListener(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun unregisterBarcodeFindViewListener(readableMap: ReadableMap, promise: Promise) {
        barcodeFindModule.removeBarcodeFindViewListener(
            readableMap.viewId,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun barcodeFindSetItemList(readableMap: ReadableMap, promise: Promise) {
        val barcodeFindItemsJson = readableMap.getString("itemsJson") ?: return promise.reject(
            ParameterNullError("itemsJson")
        )
        barcodeFindModule.setItemList(
            readableMap.viewId,
            barcodeFindItemsJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun barcodeFindViewStopSearching(readableMap: ReadableMap, promise: Promise) {
        barcodeFindModule.viewStopSearching(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeFindViewStartSearching(readableMap: ReadableMap, promise: Promise) {
        barcodeFindModule.viewStartSearching(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeFindViewPauseSearching(readableMap: ReadableMap, promise: Promise) {
        barcodeFindModule.viewPauseSearching(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeFindModeStart(readableMap: ReadableMap, promise: Promise) {
        barcodeFindModule.modeStart(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeFindModePause(readableMap: ReadableMap, promise: Promise) {
        barcodeFindModule.modePause(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeFindModeStop(readableMap: ReadableMap, promise: Promise) {
        barcodeFindModule.modeStop(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun setBarcodeTransformer(readableMap: ReadableMap, promise: Promise) {
        barcodeFindModule.setBarcodeFindTransformer(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun unsetBarcodeTransformer(readableMap: ReadableMap, promise: Promise) {
        barcodeFindModule.unsetBarcodeFindTransformer(
            readableMap.viewId,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun submitBarcodeFindTransformerResult(readableMap: ReadableMap, promise: Promise) {
        val transformedBarcode = readableMap.getString("transformedBarcode")
        barcodeFindModule.submitBarcodeFindTransformerResult(
            readableMap.viewId,
            transformedBarcode,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun updateBarcodeFindFeedback(readableMap: ReadableMap, promise: Promise) {
        val feedbackJson = readableMap.getString("feedbackJson") ?: return promise.reject(
            ParameterNullError("feedbackJson")
        )
        barcodeFindModule.updateFeedback(
            readableMap.viewId,
            feedbackJson,
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

    private val barcodeFindModule: BarcodeFindModule
        get() {
            return serviceLocator.resolve(
                BarcodeFindModule::class.java.name
            ) as? BarcodeFindModule? ?: throw ModuleNotStartedError(name)
        }

    companion object {
        private val VIEW_MANAGER_NULL_ERROR = Error(
            "Unable to add the BarcodeFindView on Android. " +
                "The BarcodeFindViewManager instance is null."
        )
    }
}
