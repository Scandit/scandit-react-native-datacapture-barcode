/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import android.view.ViewGroup
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.scandit.datacapture.core.ui.style.BrushDeserializer
import com.scandit.datacapture.frameworks.barcode.count.BarcodeCountModule
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeCountViewManager
import org.json.JSONArray

class ScanditDataCaptureBarcodeCountModule(
    reactContext: ReactApplicationContext,
    private val barcodeCountModule: BarcodeCountModule,
    private val viewManager: BarcodeCountViewManager,

) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "ScanditDataCaptureBarcodeCount"

    override fun getConstants(): MutableMap<String, Any> {
        return mutableMapOf(
            "Defaults" to barcodeCountModule.getDefaults()
        )
    }

    @ReactMethod
    fun createView(
        @Suppress("UNUSED_PARAMETER") reactTag: Int,
        jsonString: String,
        promise: Promise
    ) {
        barcodeCountModule.getViewFromJson(jsonString)?.let { barcodeCountView ->
            val container = viewManager.currentContainer
            if (container == null) {
                viewManager.postContainerCreationAction = {
                    viewManager.currentContainer?.addView(
                        barcodeCountView,
                        ViewGroup.LayoutParams(
                            ViewGroup.LayoutParams.MATCH_PARENT,
                            ViewGroup.LayoutParams.MATCH_PARENT
                        )
                    )
                }
                promise.resolve(null)
                return
            }

            container.addView(
                barcodeCountView,
                ViewGroup.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT
                )
            )
            promise.resolve(null)
        }
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
        brushJson: String,
        trackedBarcodeId: Int,
        promise: Promise
    ) {
        val brush = BrushDeserializer.fromJson(brushJson)
        barcodeCountModule.finishBrushForRecognizedBarcodeEvent(brush, trackedBarcodeId)
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBrushForRecognizedBarcodeNotInListCallback(
        @Suppress("UNUSED_PARAMETER") reactTag: Int,
        brushJson: String,
        trackedBarcodeId: Int,
        promise: Promise
    ) {
        val brush = BrushDeserializer.fromJson(brushJson)
        barcodeCountModule.finishBrushForRecognizedBarcodeNotInListEvent(brush, trackedBarcodeId)
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBrushForUnrecognizedBarcodeCallback(
        @Suppress("UNUSED_PARAMETER") reactTag: Int,
        brushJson: String,
        trackedBarcodeId: Int,
        promise: Promise
    ) {
        val brush = BrushDeserializer.fromJson(brushJson)
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

    override fun invalidate() {
        viewManager.dispose()
        barcodeCountModule.onDestroy()
        super.invalidate()
    }
}
