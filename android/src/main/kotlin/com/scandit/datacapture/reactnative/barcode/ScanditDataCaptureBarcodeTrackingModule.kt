/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.scandit.datacapture.frameworks.barcode.tracking.BarcodeTrackingModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.barcode.tracking.nativeViewFromJson
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult
import org.json.JSONObject

class ScanditDataCaptureBarcodeTrackingModule(
    reactContext: ReactApplicationContext,
    private val serviceLocator: ServiceLocator<FrameworkModule>
) : ReactContextBaseJavaModule(reactContext) {

    companion object {
        private const val DEFAULTS_KEY = "Defaults"
    }

    override fun invalidate() {
        barcodeTrackingModule.onDestroy()
        super.invalidate()
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
        trackedBarcodeId: Int,
        promise: Promise
    ) {
        val payload = mapOf<String, Any?>(
            "brush" to brush,
            "trackedBarcodeID" to trackedBarcodeId
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
    fun finishDidUpdateSessionCallback(enabled: Boolean) {
        barcodeTrackingModule.finishDidUpdateSession(enabled)
    }

    @ReactMethod
    fun setViewForTrackedBarcode(
        view: String?,
        trackedBarcodeId: Int,
        promise: Promise
    ) {
        currentActivity?.let {
            it.runOnUiThread {
                barcodeTrackingModule.setViewForTrackedBarcode(
                    nativeViewFromJson(it, view),
                    trackedBarcodeId,
                    null
                )
            }
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

    @ReactMethod
    fun setModeEnabledState(enabled: Boolean) {
        barcodeTrackingModule.setModeEnabled(enabled)
    }

    @ReactMethod
    fun updateBarcodeTrackingBasicOverlay(overlayJson: String, promise: Promise) {
        barcodeTrackingModule.updateBasicOverlay(overlayJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateBarcodeTrackingAdvancedOverlay(overlayJson: String, promise: Promise) {
        barcodeTrackingModule.updateAdvancedOverlay(overlayJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateBarcodeTrackingMode(modeJson: String, promise: Promise) {
        barcodeTrackingModule.updateModeFromJson(modeJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun applyBarcodeTrackingModeSettings(modeSettingsJson: String, promise: Promise) {
        barcodeTrackingModule.applyModeSettings(modeSettingsJson, ReactNativeResult(promise))
    }

    private val barcodeTrackingModule: BarcodeTrackingModule
        get() {
            return serviceLocator.resolve(
                BarcodeTrackingModule::class.java.name
            ) as? BarcodeTrackingModule? ?: throw ModuleNotStartedError(name)
        }
}
