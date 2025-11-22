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

    override fun invalidate() {
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
    fun createBarcodeCountView(
        @Suppress("UNUSED_PARAMETER") readableMap: ReadableMap,
        promise: Promise
    ) {
        // Noop in Android. Everything is handled in the BarcodeCountViewManager
        promise.resolve(null)
    }

    @ReactMethod
    fun updateBarcodeCountView(readableMap: ReadableMap, promise: Promise) {
        val viewJson = readableMap.getString("viewJson")!!
        barcodeCountModule.updateBarcodeCountView(viewJson)
        promise.resolve(null)
    }

    @ReactMethod
    fun updateBarcodeCountMode(readableMap: ReadableMap, promise: Promise) {
        val barcodeCountJson = readableMap.getString("barcodeCountJson")!!
        barcodeCountModule.updateBarcodeCount(barcodeCountJson)
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
    fun resetBarcodeCountSession(promise: Promise) {
        barcodeCountModule.resetBarcodeCountSession(null)
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBarcodeCountOnScan(promise: Promise) {
        barcodeCountModule.finishOnScan(true)
        promise.resolve(null)
    }

    @ReactMethod
    fun resetBarcodeCount(promise: Promise) {
        barcodeCountModule.resetBarcodeCount()
        promise.resolve(null)
    }

    @ReactMethod
    fun startBarcodeCountScanningPhase(promise: Promise) {
        barcodeCountModule.startScanningPhase()
        promise.resolve(null)
    }

    @ReactMethod
    fun endBarcodeCountScanningPhase(promise: Promise) {
        barcodeCountModule.endScanningPhase()
        promise.resolve(null)
    }

    @ReactMethod
    fun clearBarcodeCountHighlights(promise: Promise) {
        barcodeCountModule.clearHighlights()
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBarcodeCountBrushForRecognizedBarcode(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val brush = readableMap.getString("brushJson")
            ?.takeUnless { it.isBlank() }
            ?.let { BrushDeserializer.fromJson(it) }
        val trackedBarcodeId = readableMap.getInt("trackedBarcodeId")
        barcodeCountModule.finishBrushForRecognizedBarcodeEvent(brush, trackedBarcodeId)
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBarcodeCountBrushForRecognizedBarcodeNotInList(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val brush = readableMap.getString("brushJson")
            ?.takeUnless { it.isBlank() }
            ?.let { BrushDeserializer.fromJson(it) }
        val trackedBarcodeId = readableMap.getInt("trackedBarcodeId")
        barcodeCountModule.finishBrushForRecognizedBarcodeNotInListEvent(brush, trackedBarcodeId)
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBarcodeCountBrushForAcceptedBarcode(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val brush = readableMap.getString("brushJson")
            ?.takeUnless { it.isBlank() }
            ?.let { BrushDeserializer.fromJson(it) }
        val trackedBarcodeId = readableMap.getInt("trackedBarcodeId")
        barcodeCountModule.finishBrushForAcceptedBarcodeEvent(brush, trackedBarcodeId)
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBarcodeCountBrushForRejectedBarcode(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val brush = readableMap.getString("brushJson")
            ?.takeUnless { it.isBlank() }
            ?.let { BrushDeserializer.fromJson(it) }
        val trackedBarcodeId = readableMap.getInt("trackedBarcodeId")
        barcodeCountModule.finishBrushForRejectedBarcodeEvent(brush, trackedBarcodeId)
        promise.resolve(null)
    }

    @ReactMethod
    fun setBarcodeCountCaptureList(readableMap: ReadableMap, promise: Promise) {
        val targetBarcodesJson = readableMap.getString("captureListJson")
        val barcodes = JSONArray(targetBarcodesJson)
        barcodeCountModule.setBarcodeCountCaptureList(barcodes)
        promise.resolve(null)
    }

    @ReactMethod
    fun getBarcodeCountSpatialMapWithHints(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val expectedNumberOfRows = readableMap.getInt("expectedNumberOfRows")
        val expectedNumberOfColumns = readableMap.getInt("expectedNumberOfColumns")
        barcodeCountModule.submitSpatialMap(
            expectedNumberOfRows,
            expectedNumberOfColumns,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun getBarcodeCountSpatialMap(promise: Promise) {
        barcodeCountModule.submitSpatialMap(ReactNativeResult(promise))
    }

    @ReactMethod
    fun setBarcodeCountModeEnabledState(readableMap: ReadableMap, promise: Promise) {
        val enabled = readableMap.getBoolean("isEnabled")
        barcodeCountModule.setModeEnabled(enabled)
        promise.resolve(null)
    }

    @ReactMethod
    fun updateBarcodeCountFeedback(readableMap: ReadableMap, promise: Promise) {
        val feedbackJson = readableMap.getString("feedbackJson")!!
        barcodeCountModule.updateFeedback(feedbackJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun enableBarcodeCountHardwareTrigger(readableMap: ReadableMap, promise: Promise) {
        val hardwareTriggerKeyCode = if (readableMap.hasKey("hardwareTriggerKeyCode")) {
            readableMap.getInt("hardwareTriggerKeyCode")
        } else {
            null
        }
        barcodeCountModule.enableHardwareTrigger(
            hardwareTriggerKeyCode,
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

    private val barcodeCountModule: BarcodeCountModule
        get() {
            return serviceLocator.resolve(
                BarcodeCountModule::class.java.name
            ) as? BarcodeCountModule? ?: throw ModuleNotStartedError(name)
        }
}
