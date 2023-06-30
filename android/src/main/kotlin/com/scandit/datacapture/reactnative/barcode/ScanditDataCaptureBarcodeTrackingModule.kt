/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import com.facebook.react.bridge.*
import com.scandit.datacapture.barcode.tracking.capture.*
import com.scandit.datacapture.barcode.tracking.ui.overlay.*
import com.scandit.datacapture.frameworks.barcode.tracking.BarcodeTrackingModule
import com.scandit.datacapture.reactnative.barcode.tracking.nativeViewFromJson
import org.json.JSONObject

class ScanditDataCaptureBarcodeTrackingModule(
    reactContext: ReactApplicationContext,
    private val barcodeTrackingModule: BarcodeTrackingModule,
) : ReactContextBaseJavaModule(reactContext) {

    companion object {
        private const val DEFAULTS_KEY = "Defaults"
    }

    @Suppress("OVERRIDE_DEPRECATION")
    override fun onCatalystInstanceDestroy() {
        barcodeTrackingModule.onStop()
    }

    override fun getName(): String = "ScanditDataCaptureBarcodeTracking"

    override fun getConstants(): MutableMap<String, Any> = mutableMapOf(
        DEFAULTS_KEY to barcodeTrackingModule.getDefaults()
    )

    @ReactMethod
    fun registerListenerForEvents() {
        barcodeTrackingModule.addBarcodeTrackingListener()
    }

    @ReactMethod
    fun unregisterListenerForEvents() {
        barcodeTrackingModule.removeBarcodeTrackingListener()
    }

    @ReactMethod
    fun registerListenerForBasicOverlayEvents() {
        barcodeTrackingModule.addBasicOverlayListener()
    }

    @ReactMethod
    fun unregisterListenerForBasicOverlayEvents() {
        barcodeTrackingModule.removeBasicOverlayListener()
    }

    @ReactMethod
    fun registerListenerForAdvancedOverlayEvents() {
        barcodeTrackingModule.addAdvancedOverlayListener()
    }

    @ReactMethod
    fun unregisterListenerForAdvancedOverlayEvents() {
        barcodeTrackingModule.removeAdvancedOverlayListener()
    }

    @ReactMethod
    fun setBrushForTrackedBarcode(
        brush: String?,
        sessionFrameSequenceId: Int,
        trackedBarcodeId: Int,
        promise: Promise
    ) {
        val payload = mapOf<String, Any?>(
            "brush" to brush,
            "trackedBarcodeID" to trackedBarcodeId,
            "sessionFrameSequenceID" to sessionFrameSequenceId
        )

        barcodeTrackingModule.setBasicOverlayBrushForTrackedBarcode(JSONObject(payload).toString())
        promise.resolve(null)
    }

    @ReactMethod
    fun clearTrackedBarcodeBrushes(promise: Promise) {
        barcodeTrackingModule.clearBasicOverlayTrackedBarcodeBrushes()
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBrushForTrackedBarcodeCallback(brushJson: String?) {
        barcodeTrackingModule.finishBasicOverlayBrushForTrackedBarcode(brushJson)
    }

    @ReactMethod
    fun finishDidUpdateSessionCallback(enabled: Boolean) {
        barcodeTrackingModule.finishDidUpdateSession(enabled)
    }

    @ReactMethod
    fun setViewForTrackedBarcode(
        view: String,
        trackedBarcodeId: Int,
        promise: Promise
    ) {
        currentActivity?.let {
            barcodeTrackingModule.setViewForTrackedBarcode(
                nativeViewFromJson(it, view),
                trackedBarcodeId,
                null
            )
        }
        promise.resolve(null)
    }

    @ReactMethod
    fun setAnchorForTrackedBarcode(
        anchor: String,
        trackedBarcodeId: Int,
        promise: Promise
    ) {
        barcodeTrackingModule.setAnchorForTrackedBarcode(
            hashMapOf(
                "anchor" to anchor,
                "identifier" to trackedBarcodeId,
                "sessionFrameSequenceID" to null

            )
        )
        promise.resolve(null)
    }

    @ReactMethod
    fun setOffsetForTrackedBarcode(
        offset: String,
        trackedBarcodeId: Int,
        promise: Promise
    ) {
        barcodeTrackingModule.setOffsetForTrackedBarcode(
            hashMapOf(
                "offset" to offset,
                "identifier" to trackedBarcodeId,
                "sessionFrameSequenceID" to null

            )
        )
        promise.resolve(null)
    }

    @ReactMethod
    fun clearTrackedBarcodeViews(promise: Promise) {
        barcodeTrackingModule.clearAdvancedOverlayTrackedBarcodeViews()
        promise.resolve(null)
    }

    @ReactMethod
    fun resetSession() {
        barcodeTrackingModule.resetSession(null)
    }
}
