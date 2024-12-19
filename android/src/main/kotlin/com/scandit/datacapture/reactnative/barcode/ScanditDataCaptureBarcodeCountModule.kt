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
import com.scandit.datacapture.core.ui.style.BrushDeserializer
import com.scandit.datacapture.frameworks.barcode.count.BarcodeCountModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult
import org.json.JSONArray

class ScanditDataCaptureBarcodeCountModule(
    private val reactContext: ReactApplicationContext,
    private val serviceLocator: ServiceLocator<FrameworkModule>,
) : ReactContextBaseJavaModule(reactContext) {

    private val lifecycleListener = object : LifecycleEventListener {
        override fun onHostResume() {
            // noop
        }

        override fun onHostPause() {
            // noop
        }

        override fun onHostDestroy() {
            barcodeCountModule.disposeBarcodeCountView()
        }
    }

    override fun initialize() {
        reactContext.addLifecycleEventListener(lifecycleListener)
    }

    override fun invalidate() {
        reactContext.removeLifecycleEventListener(lifecycleListener)
        barcodeCountModule.onDestroy()
        super.invalidate()
    }

    override fun getName(): String = "ScanditDataCaptureBarcodeCount"

    override fun getConstants(): MutableMap<String, Any> {
        return mutableMapOf(
            "Defaults" to barcodeCountModule.getDefaults()
        )
    }

    @ReactMethod
    fun createView(
        @Suppress("UNUSED_PARAMETER") reactTag: Int,
        @Suppress("UNUSED_PARAMETER") jsonString: String,
        promise: Promise
    ) {
        // Noop in Android. Everything is handled in the BarcodeCountViewManager
        promise.resolve(null)
    }

    @ReactMethod
    fun updateView(jsonString: String, promise: Promise) {
        barcodeCountModule.updateBarcodeCountView(jsonString)
        promise.resolve(null)
    }

    @ReactMethod
    fun updateMode(jsonString: String, promise: Promise) {
        barcodeCountModule.updateBarcodeCount(jsonString)
        promise.resolve(null)
    }

    @ReactMethod
    fun registerBarcodeCountListener(promise: Promise) {
        barcodeCountModule.addBarcodeCountListener()
        promise.resolve(null)
    }

    @ReactMethod
    fun unregisterBarcodeCountListener(promise: Promise) {
        barcodeCountModule.removeBarcodeCountListener()
        promise.resolve(null)
    }

    @ReactMethod
    fun registerBarcodeCountViewListener(promise: Promise) {
        barcodeCountModule.addBarcodeCountViewListener()
        promise.resolve(null)
    }

    @ReactMethod
    fun unregisterBarcodeCountViewListener(promise: Promise) {
        barcodeCountModule.removeBarcodeCountViewListener()
        promise.resolve(null)
    }

    @ReactMethod
    fun registerBarcodeCountViewUiListener(promise: Promise) {
        barcodeCountModule.addBarcodeCountViewUiListener()
        promise.resolve(null)
    }

    @ReactMethod
    fun unregisterBarcodeCountViewUiListener(promise: Promise) {
        barcodeCountModule.removeBarcodeCountViewUiListener()
        promise.resolve(null)
    }

    @ReactMethod
    fun resetSession(promise: Promise) {
        barcodeCountModule.resetBarcodeCountSession(null)
        promise.resolve(null)
    }

    @ReactMethod
    fun finishOnScan(promise: Promise) {
        barcodeCountModule.finishOnScan(true)
        promise.resolve(null)
    }

    @ReactMethod
    fun resetBarcodeCount(promise: Promise) {
        barcodeCountModule.resetBarcodeCount()
        promise.resolve(null)
    }

    @ReactMethod
    fun startScanningPhase(promise: Promise) {
        barcodeCountModule.startScanningPhase()
        promise.resolve(null)
    }

    @ReactMethod
    fun endScanningPhase(promise: Promise) {
        barcodeCountModule.endScanningPhase()
        promise.resolve(null)
    }

    @ReactMethod
    fun clearHighlights(promise: Promise) {
        barcodeCountModule.clearHighlights()
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBrushForRecognizedBarcodeCallback(
        @Suppress("UNUSED_PARAMETER") reactTag: Int,
        brushJson: String?,
        trackedBarcodeId: Int,
        promise: Promise
    ) {
        val brush = if (!brushJson.isNullOrBlank()) BrushDeserializer.fromJson(brushJson) else null
        barcodeCountModule.finishBrushForRecognizedBarcodeEvent(brush, trackedBarcodeId)
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBrushForRecognizedBarcodeNotInListCallback(
        @Suppress("UNUSED_PARAMETER") reactTag: Int,
        brushJson: String?,
        trackedBarcodeId: Int,
        promise: Promise
    ) {
        val brush = if (!brushJson.isNullOrBlank()) BrushDeserializer.fromJson(brushJson) else null
        barcodeCountModule.finishBrushForRecognizedBarcodeNotInListEvent(brush, trackedBarcodeId)
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBrushForUnrecognizedBarcodeCallback(
        @Suppress("UNUSED_PARAMETER") reactTag: Int,
        brushJson: String?,
        trackedBarcodeId: Int,
        promise: Promise
    ) {
        val brush = if (!brushJson.isNullOrBlank()) BrushDeserializer.fromJson(brushJson) else null
        barcodeCountModule.finishBrushForUnrecognizedBarcodeEvent(brush, trackedBarcodeId)
        promise.resolve(null)
    }

    @ReactMethod
    fun setBarcodeCountCaptureList(targetBarcodesJson: String, promise: Promise) {
        val barcodes = JSONArray(targetBarcodesJson)
        barcodeCountModule.setBarcodeCountCaptureList(barcodes)
        promise.resolve(null)
    }

    @ReactMethod
    fun getSpatialMapWithHints(
        expectedNumberOfRows: Int,
        expectedNumberOfColumns: Int,
        promise: Promise
    ) {
        val map = barcodeCountModule.getSpatialMap(expectedNumberOfRows, expectedNumberOfColumns)
        promise.resolve(map?.toJson())
    }

    @ReactMethod
    fun getSpatialMap(promise: Promise) {
        val map = barcodeCountModule.getSpatialMap()
        promise.resolve(map?.toJson())
    }

    @ReactMethod
    fun setModeEnabledState(enabled: Boolean) {
        barcodeCountModule.setModeEnabled(enabled)
    }

    @ReactMethod
    fun updateBarcodeCountFeedback(feedbackJson: String, promise: Promise) {
        barcodeCountModule.updateFeedback(feedbackJson, ReactNativeResult(promise))
    }

    private val barcodeCountModule: BarcodeCountModule
        get() {
            return serviceLocator.resolve(
                BarcodeCountModule::class.java.name
            ) as? BarcodeCountModule? ?: throw ModuleNotStartedError(name)
        }
}
