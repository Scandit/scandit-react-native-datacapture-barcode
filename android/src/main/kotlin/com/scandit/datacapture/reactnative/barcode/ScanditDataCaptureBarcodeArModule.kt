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
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.uimanager.ViewGroupManager
import com.scandit.datacapture.frameworks.barcode.ar.BarcodeArModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.errors.ParameterNullError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeArViewManager
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult
import com.scandit.datacapture.reactnative.core.utils.viewId

class ScanditDataCaptureBarcodeArModule(
    private val reactContext: ReactApplicationContext,
    private val serviceLocator: ServiceLocator<FrameworkModule>,
    private val viewManagers: Map<String, ViewGroupManager<*>>,
) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "ScanditDataCaptureBarcodeAr"

    companion object {
        private const val DEFAULTS_KEY = "Defaults"
        private val VIEW_MANAGER_NULL_ERROR = Error(
            "Unable to add the BarcodeArView on Android. " +
                "The BarcodeArViewManager instance is null."
        )
    }

    private val barcodeArModule: BarcodeArModule
        get() {
            return serviceLocator.resolve(
                BarcodeArModule::class.java.name
            ) as? BarcodeArModule? ?: throw ModuleNotStartedError(name)
        }

    override fun invalidate() {
        barcodeArModule.onDestroy()
        super.invalidate()
    }

    override fun getConstants(): MutableMap<String, Any> {
        return mutableMapOf(
            DEFAULTS_KEY to barcodeArModule.getDefaults()
        )
    }

    @ReactMethod
    fun createBarcodeArView(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val viewId = readableMap.viewId
        val viewJson = readableMap.getString("viewJson") ?: run {
            promise.reject(ParameterNullError("viewJson"))
            return
        }

        val viewManager = viewManagers[BarcodeArViewManager::class.java.name] as?
            BarcodeArViewManager
        if (viewManager == null) {
            promise.reject(VIEW_MANAGER_NULL_ERROR)
            return
        }

        viewManager.createBarcodeArView(viewId, viewJson, promise)
    }

    @ReactMethod
    fun updateBarcodeArView(readableMap: ReadableMap, promise: Promise) {
        val viewJson = readableMap.getString("viewJson") ?: return (
            promise.reject(ParameterNullError("viewJson"))
            )
        barcodeArModule.updateView(
            readableMap.viewId,
            viewJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun updateBarcodeArMode(readableMap: ReadableMap, promise: Promise) {
        val barcodeArJson = readableMap.getString("barcodeArJson") ?: return (
            promise.reject(ParameterNullError("barcodeArJson"))
            )
        barcodeArModule.applyModeSettings(
            readableMap.viewId,
            barcodeArJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun updateBarcodeArFeedback(readableMap: ReadableMap, promise: Promise) {
        val feedbackJson = readableMap.getString("feedbackJson") ?: return (
            promise.reject(ParameterNullError("feedbackJson"))
            )
        barcodeArModule.updateFeedback(
            readableMap.viewId,
            feedbackJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun registerBarcodeArListener(readableMap: ReadableMap, promise: Promise) {
        barcodeArModule.addModeListener(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun unregisterBarcodeArListener(readableMap: ReadableMap, promise: Promise) {
        barcodeArModule.removeModeListener(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun registerBarcodeArAnnotationProvider(readableMap: ReadableMap, promise: Promise) {
        barcodeArModule.registerBarcodeArAnnotationProvider(
            readableMap.viewId,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun unregisterBarcodeArAnnotationProvider(readableMap: ReadableMap, promise: Promise) {
        barcodeArModule.unregisterBarcodeArAnnotationProvider(
            readableMap.viewId,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun registerBarcodeArHighlightProvider(readableMap: ReadableMap, promise: Promise) {
        barcodeArModule.registerBarcodeArHighlightProvider(
            readableMap.viewId,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun unregisterBarcodeArHighlightProvider(readableMap: ReadableMap, promise: Promise) {
        barcodeArModule.unregisterBarcodeArHighlightProvider(
            readableMap.viewId,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun registerBarcodeArViewUiListener(readableMap: ReadableMap, promise: Promise) {
        barcodeArModule.registerBarcodeArViewUiListener(
            readableMap.viewId,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun unregisterBarcodeArViewUiListener(readableMap: ReadableMap, promise: Promise) {
        barcodeArModule.unregisterBarcodeArViewUiListener(
            readableMap.viewId,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun finishBarcodeArOnDidUpdateSession(readableMap: ReadableMap, promise: Promise) {
        barcodeArModule.finishDidUpdateSession(
            readableMap.viewId,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun finishBarcodeArAnnotationForBarcode(readableMap: ReadableMap, promise: Promise) {
        val annotationJson = readableMap.getString("annotationJson") ?: return (
            promise.reject(ParameterNullError("annotationJson"))
            )
        barcodeArModule.finishAnnotationForBarcode(
            readableMap.viewId,
            annotationJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun finishBarcodeArHighlightForBarcode(readableMap: ReadableMap, promise: Promise) {
        val highlightJson = readableMap.getString("highlightJson") ?: return (
            promise.reject(ParameterNullError("highlightJson"))
            )
        barcodeArModule.finishHighlightForBarcode(
            readableMap.viewId,
            highlightJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun updateBarcodeArAnnotation(readableMap: ReadableMap, promise: Promise) {
        val annotationJson = readableMap.getString("annotationJson") ?: return (
            promise.reject(ParameterNullError("annotationJson"))
            )
        barcodeArModule.updateAnnotation(
            readableMap.viewId,
            annotationJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun updateBarcodeArHighlight(readableMap: ReadableMap, promise: Promise) {
        val highlightJson = readableMap.getString("highlightJson") ?: return (
            promise.reject(ParameterNullError("highlightJson"))
            )
        barcodeArModule.updateHighlight(
            readableMap.viewId,
            highlightJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun updateBarcodeArPopoverButtonAtIndex(readableMap: ReadableMap, promise: Promise) {
        val updateJson = readableMap.getString("updateJson") ?: return (
            promise.reject(ParameterNullError("updateJson"))
            )
        barcodeArModule.updateBarcodeArPopoverButtonAtIndex(
            readableMap.viewId,
            updateJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun resetBarcodeAr(readableMap: ReadableMap, promise: Promise) {
        barcodeArModule.resetLatestBarcodeArSession(
            readableMap.viewId,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun resetBarcodeArSession(readableMap: ReadableMap, promise: Promise) {
        barcodeArModule.resetLatestBarcodeArSession(
            readableMap.viewId,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun barcodeArViewPause(
        @Suppress("UNUSED_PARAMETER") readableMap: ReadableMap,
        promise: Promise
    ) {
        // Noop on Android. The onPause will be called automatically
        promise.resolve(null)
    }

    @ReactMethod
    fun barcodeArViewStart(readableMap: ReadableMap, promise: Promise) {
        barcodeArModule.viewStart(
            readableMap.viewId,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun barcodeArViewStop(readableMap: ReadableMap, promise: Promise) {
        barcodeArModule.viewStop(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeArViewReset(readableMap: ReadableMap, promise: Promise) {
        barcodeArModule.viewReset(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun removeBarcodeArView(
        @Suppress("UNUSED_PARAMETER") readableMap: ReadableMap,
        promise: Promise
    ) {
        // handled in BarcodeArViewManager
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
}
