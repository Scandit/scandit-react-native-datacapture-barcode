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
import com.scandit.datacapture.frameworks.barcode.ar.BarcodeArModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

class ScanditDataCaptureBarcodeArModule(
    reactContext: ReactApplicationContext,
    private val serviceLocator: ServiceLocator<FrameworkModule>,
) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "ScanditDataCaptureBarcodeAr"

    companion object {
        private const val DEFAULTS_KEY = "Defaults"
    }

    private val barcodeArModule: BarcodeArModule
        get() {
            return serviceLocator.resolve(
                BarcodeArModule::class.java.name
            ) as? BarcodeArModule? ?: throw ModuleNotStartedError(name)
        }

    override fun invalidate() {
        barcodeArModule.onDestroy()
        barcodeArModule.viewDisposed()
        super.invalidate()
    }

    override fun getConstants(): MutableMap<String, Any> {
        return mutableMapOf(
            DEFAULTS_KEY to barcodeArModule.getDefaults()
        )
    }

    @ReactMethod
    fun registerBarcodeArAnnotationProvider(promise: Promise) {
        barcodeArModule.registerBarcodeArAnnotationProvider(ReactNativeResult(promise))
    }

    @ReactMethod
    fun unregisterBarcodeArAnnotationProvider(promise: Promise) {
        barcodeArModule.unregisterBarcodeArAnnotationProvider(ReactNativeResult(promise))
    }

    @ReactMethod
    fun registerBarcodeArListener(promise: Promise) {
        barcodeArModule.addModeListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun unregisterBarcodeArListener(promise: Promise) {
        barcodeArModule.removeModeListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun registerBarcodeArHighlightProvider(promise: Promise) {
        barcodeArModule.registerBarcodeArHighlightProvider(ReactNativeResult(promise))
    }

    @ReactMethod
    fun unregisterBarcodeArHighlightProvider(promise: Promise) {
        barcodeArModule.unregisterBarcodeArHighlightProvider(ReactNativeResult(promise))
    }

    @ReactMethod
    fun registerBarcodeArViewUiListener(promise: Promise) {
        barcodeArModule.registerBarcodeArViewUiListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun unregisterBarcodeArViewUiListener(promise: Promise) {
        barcodeArModule.unregisterBarcodeArViewUiListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun finishBarcodeArOnDidUpdateSession(promise: Promise) {
        barcodeArModule.finishDidUpdateSession(ReactNativeResult(promise))
    }

    @ReactMethod
    fun finishBarcodeArAnnotationForBarcode(barcodeResponse: String, promise: Promise) {
        barcodeArModule.finishAnnotationForBarcode(barcodeResponse, ReactNativeResult(promise))
    }

    @ReactMethod
    fun finishBarcodeArHighlightForBarcode(highlightResponse: String, promise: Promise) {
        barcodeArModule.finishHighlightForBarcode(highlightResponse, ReactNativeResult(promise))
    }

    @ReactMethod
    fun createBarcodeArView(
        @Suppress("UNUSED_PARAMETER") reactTag: Int,
        @Suppress("UNUSED_PARAMETER") jsonString: String,
        promise: Promise
    ) {
        promise.resolve(null)
    }

    @ReactMethod
    fun updateBarcodeArFeedback(feedbackJson: String, promise: Promise) {
        barcodeArModule.updateFeedback(feedbackJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateBarcodeArMode(barcodeArJson: String, promise: Promise) {
        barcodeArModule.applyModeSettings(barcodeArJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateBarcodeArView(viewJson: String, promise: Promise) {
        barcodeArModule.updateView(viewJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateBarcodeArAnnotation(annotationJson: String, promise: Promise) {
        barcodeArModule.updateAnnotation(annotationJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateBarcodeArHighlight(highlightJson: String, promise: Promise) {
        barcodeArModule.updateHighlight(highlightJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateBarcodeArPopoverButtonAtIndex(updateJson: String, promise: Promise) {
        barcodeArModule.updateBarcodeArPopoverButtonAtIndex(
            updateJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun resetBarcodeAr(promise: Promise) {
        barcodeArModule.resetLatestBarcodeArSession(ReactNativeResult(promise))
    }

    @ReactMethod
    fun resetBarcodeArSession(promise: Promise) {
        barcodeArModule.resetLatestBarcodeArSession(ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeArViewPause(promise: Promise) {
        promise.resolve(null)
    }

    @ReactMethod
    fun barcodeArViewStart(promise: Promise) {
        barcodeArModule.viewStart(ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeArViewStop(promise: Promise) {
        barcodeArModule.viewStop(ReactNativeResult(promise))
    }

    @ReactMethod
    fun barcodeArViewReset(promise: Promise) {
        barcodeArModule.viewReset(ReactNativeResult(promise))
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
