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
import com.scandit.datacapture.frameworks.barcode.check.BarcodeCheckModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

class ScanditDataCaptureBarcodeCheckModule(
    reactContext: ReactApplicationContext,
    private val serviceLocator: ServiceLocator<FrameworkModule>,
) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "ScanditDataCaptureBarcodeCheck"

    companion object {
        private const val DEFAULTS_KEY = "Defaults"
    }

    private val barcodeCheckModule: BarcodeCheckModule
        get() {
            return serviceLocator.resolve(
                BarcodeCheckModule::class.java.name
            ) as? BarcodeCheckModule? ?: throw ModuleNotStartedError(name)
        }

    override fun invalidate() {
        barcodeCheckModule.onDestroy()
        barcodeCheckModule.viewDisposed()
        super.invalidate()
    }

    override fun getConstants(): MutableMap<String, Any> {
        return mutableMapOf(
            DEFAULTS_KEY to barcodeCheckModule.getDefaults()
        )
    }

    @ReactMethod
    fun registerBarcodeCheckAnnotationProvider(promise: Promise) {
        barcodeCheckModule.registerBarcodeCheckAnnotationProvider(ReactNativeResult(promise))
    }

    @ReactMethod
    fun unregisterBarcodeCheckAnnotationProvider(promise: Promise) {
        barcodeCheckModule.unregisterBarcodeCheckAnnotationProvider(ReactNativeResult(promise))
    }

    @ReactMethod
    fun registerBarcodeCheckListener(promise: Promise) {
        barcodeCheckModule.addModeListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun unregisterBarcodeCheckListener(promise: Promise) {
        barcodeCheckModule.removeModeListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun registerBarcodeCheckHighlightProvider(promise: Promise) {
        barcodeCheckModule.registerBarcodeCheckHighlightProvider(ReactNativeResult(promise))
    }

    @ReactMethod
    fun unregisterBarcodeCheckHighlightProvider(promise: Promise) {
        barcodeCheckModule.unregisterBarcodeCheckHighlightProvider(ReactNativeResult(promise))
    }

    @ReactMethod
    fun registerBarcodeCheckViewUiListener(promise: Promise) {
        barcodeCheckModule.registerBarcodeCheckViewUiListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun unregisterBarcodeCheckViewUiListener(promise: Promise) {
        barcodeCheckModule.unregisterBarcodeCheckViewUiListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun finishBarcodeCheckOnDidUpdateSession(promise: Promise) {
        barcodeCheckModule.finishDidUpdateSession(ReactNativeResult(promise))
    }

    @ReactMethod
    fun finishBarcodeCheckAnnotationForBarcode(barcodeResponse: String, promise: Promise) {
        barcodeCheckModule.finishAnnotationForBarcode(barcodeResponse, ReactNativeResult(promise))
    }

    @ReactMethod
    fun finishBarcodeCheckHighlightForBarcode(highlightResponse: String, promise: Promise) {
        barcodeCheckModule.finishHighlightForBarcode(highlightResponse, ReactNativeResult(promise))
    }

    @ReactMethod
    fun createBarcodeCheckView(
        @Suppress("UNUSED_PARAMETER") reactTag: Int,
        @Suppress("UNUSED_PARAMETER") jsonString: String,
        promise: Promise
    ) {
        promise.resolve(null)
    }

    @ReactMethod
    fun updateBarcodeCheckFeedback(feedbackJson: String, promise: Promise) {
        barcodeCheckModule.updateFeedback(feedbackJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateBarcodeCheckMode(barcodeCheckJson: String, promise: Promise) {
        barcodeCheckModule.applyModeSettings(barcodeCheckJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateBarcodeCheckView(viewJson: String, promise: Promise) {
        barcodeCheckModule.updateView(viewJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateBarcodeCheckAnnotation(annotationJson: String, promise: Promise) {
        barcodeCheckModule.updateAnnotation(annotationJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateBarcodeCheckHighlight(highlightJson: String, promise: Promise) {
        barcodeCheckModule.updateHighlight(highlightJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateBarcodeCheckPopoverButtonAtIndex(updateJson: String, promise: Promise) {
        barcodeCheckModule.updateBarcodeCheckPopoverButtonAtIndex(
            updateJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun resetBarcodeCheck(promise: Promise) {
        barcodeCheckModule.resetLatestBarcodeCheckSession(ReactNativeResult(promise))
    }

    @ReactMethod
    fun resetBarcodeCheckSession(promise: Promise) {
        barcodeCheckModule.resetLatestBarcodeCheckSession(ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeCheckViewPause(promise: Promise) {
        promise.resolve(null)
    }

    @ReactMethod
    fun barcodeCheckViewStart(promise: Promise) {
        barcodeCheckModule.viewStart(ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeCheckViewStop(promise: Promise) {
        barcodeCheckModule.viewStop(ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeCheckViewReset(promise: Promise) {
        barcodeCheckModule.viewReset(ReactNativeResult(promise))
    }
}
