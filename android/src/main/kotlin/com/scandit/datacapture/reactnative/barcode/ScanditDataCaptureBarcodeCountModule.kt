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
import com.scandit.datacapture.core.ui.style.BrushDeserializer
import com.scandit.datacapture.frameworks.barcode.count.BarcodeCountModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.errors.ParameterNullError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeCountViewManager
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult
import com.scandit.datacapture.reactnative.core.utils.viewId
import org.json.JSONArray

class ScanditDataCaptureBarcodeCountModule(
    private val reactContext: ReactApplicationContext,
    private val serviceLocator: ServiceLocator<FrameworkModule>,
    private val viewManagers: Map<String, ViewGroupManager<*>>,
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
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val viewId = readableMap.viewId
        val viewJson = readableMap.getString("viewJson") ?: run {
            promise.reject(ParameterNullError("viewJson"))
            return
        }

        val viewManager = viewManagers[BarcodeCountViewManager::class.java.name] as?
            BarcodeCountViewManager
        if (viewManager == null) {
            promise.reject(VIEW_MANAGER_NULL_ERROR)
            return
        }

        viewManager.createBarcodeCountView(viewId, viewJson, promise)
    }

    @ReactMethod
    fun updateBarcodeCountView(readableMap: ReadableMap, promise: Promise) {
        val viewJson = readableMap.getString("viewJson")!!
        barcodeCountModule.updateBarcodeCountView(readableMap.viewId, viewJson)
        promise.resolve(null)
    }

    @ReactMethod
    fun updateBarcodeCountMode(readableMap: ReadableMap, promise: Promise) {
        val barcodeCountJson = readableMap.getString("barcodeCountJson")!!
        barcodeCountModule.updateBarcodeCount(readableMap.viewId, barcodeCountJson)
        promise.resolve(null)
    }

    @ReactMethod
    fun registerBarcodeCountListener(readableMap: ReadableMap, promise: Promise) {
        barcodeCountModule.addBarcodeCountListener(readableMap.viewId)
        promise.resolve(null)
    }

    @ReactMethod
    fun unregisterBarcodeCountListener(readableMap: ReadableMap, promise: Promise) {
        barcodeCountModule.removeBarcodeCountListener(readableMap.viewId)
        promise.resolve(null)
    }

    @ReactMethod
    fun registerBarcodeCountViewListener(readableMap: ReadableMap, promise: Promise) {
        barcodeCountModule.addBarcodeCountViewListener(readableMap.viewId)
        promise.resolve(null)
    }

    @ReactMethod
    fun unregisterBarcodeCountViewListener(readableMap: ReadableMap, promise: Promise) {
        barcodeCountModule.removeBarcodeCountViewListener(readableMap.viewId)
        promise.resolve(null)
    }

    @ReactMethod
    fun registerBarcodeCountViewUiListener(readableMap: ReadableMap, promise: Promise) {
        barcodeCountModule.addBarcodeCountViewUiListener(readableMap.viewId)
        promise.resolve(null)
    }

    @ReactMethod
    fun unregisterBarcodeCountViewUiListener(readableMap: ReadableMap, promise: Promise) {
        barcodeCountModule.removeBarcodeCountViewUiListener(readableMap.viewId)
        promise.resolve(null)
    }

    @ReactMethod
    fun resetBarcodeCountSession(readableMap: ReadableMap, promise: Promise) {
        barcodeCountModule.resetBarcodeCountSession(readableMap.viewId, null)
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBarcodeCountOnScan(readableMap: ReadableMap, promise: Promise) {
        barcodeCountModule.finishOnScan(readableMap.viewId, true)
        promise.resolve(null)
    }

    @ReactMethod
    fun resetBarcodeCount(readableMap: ReadableMap, promise: Promise) {
        barcodeCountModule.resetBarcodeCount(readableMap.viewId)
        promise.resolve(null)
    }

    @ReactMethod
    fun startBarcodeCountScanningPhase(readableMap: ReadableMap, promise: Promise) {
        barcodeCountModule.startScanningPhase(readableMap.viewId)
        promise.resolve(null)
    }

    @ReactMethod
    fun endBarcodeCountScanningPhase(readableMap: ReadableMap, promise: Promise) {
        barcodeCountModule.endScanningPhase(readableMap.viewId)
        promise.resolve(null)
    }

    @ReactMethod
    fun clearBarcodeCountHighlights(readableMap: ReadableMap, promise: Promise) {
        barcodeCountModule.clearHighlights(readableMap.viewId)
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
        barcodeCountModule.finishBrushForRecognizedBarcodeEvent(
            readableMap.viewId,
            brush,
            trackedBarcodeId
        )
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
        barcodeCountModule.finishBrushForRecognizedBarcodeNotInListEvent(
            readableMap.viewId,
            brush,
            trackedBarcodeId
        )
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
        barcodeCountModule.finishBrushForAcceptedBarcodeEvent(
            readableMap.viewId,
            brush,
            trackedBarcodeId
        )
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
        barcodeCountModule.finishBrushForRejectedBarcodeEvent(
            readableMap.viewId,
            brush,
            trackedBarcodeId
        )
        promise.resolve(null)
    }

    @ReactMethod
    fun setBarcodeCountCaptureList(readableMap: ReadableMap, promise: Promise) {
        val barcodes = JSONArray(readableMap.getString("captureListJson"))
        barcodeCountModule.setBarcodeCountCaptureList(readableMap.viewId, barcodes)
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
            readableMap.viewId,
            expectedNumberOfRows,
            expectedNumberOfColumns,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun getBarcodeCountSpatialMap(readableMap: ReadableMap, promise: Promise) {
        barcodeCountModule.submitSpatialMap(readableMap.viewId, ReactNativeResult(promise))
    }

    @ReactMethod
    fun setBarcodeCountModeEnabledState(readableMap: ReadableMap, promise: Promise) {
        val enabled = readableMap.getBoolean("isEnabled")
        barcodeCountModule.setModeEnabled(readableMap.viewId, enabled)
        promise.resolve(null)
    }

    @ReactMethod
    fun updateBarcodeCountFeedback(readableMap: ReadableMap, promise: Promise) {
        val feedbackJson = readableMap.getString("feedbackJson")!!
        barcodeCountModule.updateFeedback(
            readableMap.viewId,
            feedbackJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun enableBarcodeCountHardwareTrigger(readableMap: ReadableMap, promise: Promise) {
        val hardwareTriggerKeyCode = if (readableMap.hasKey("hardwareTriggerKeyCode")) {
            readableMap.getInt("hardwareTriggerKeyCode")
        } else {
            null
        }
        barcodeCountModule.enableHardwareTrigger(
            readableMap.viewId,
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

    @ReactMethod
    fun disposeBarcodeCountView(readableMap: ReadableMap, promise: Promise) {
        barcodeCountModule.viewDisposed(readableMap.viewId)
        promise.resolve(null)
    }

    private val barcodeCountModule: BarcodeCountModule
        get() {
            return serviceLocator.resolve(
                BarcodeCountModule::class.java.name
            ) as? BarcodeCountModule? ?: throw ModuleNotStartedError(name)
        }

    companion object {
        private val VIEW_MANAGER_NULL_ERROR = Error(
            "Unable to add the BarcodeCountView on Android. " +
                "The BarcodeCountViewManager instance is null."
        )
    }
}
