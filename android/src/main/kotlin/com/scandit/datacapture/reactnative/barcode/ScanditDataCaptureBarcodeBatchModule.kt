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
import com.scandit.datacapture.frameworks.barcode.batch.BarcodeBatchModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.barcode.batch.nativeViewFromJson
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult
import org.json.JSONObject

class ScanditDataCaptureBarcodeBatchModule(
    reactContext: ReactApplicationContext,
    private val serviceLocator: ServiceLocator<FrameworkModule>,
) : ReactContextBaseJavaModule(reactContext) {

    companion object {
        private const val DEFAULTS_KEY = "Defaults"
    }

    override fun invalidate() {
        barcodeBatchModule.onDestroy()
        super.invalidate()
    }

    override fun getName(): String = "ScanditDataCaptureBarcodeBatch"

    override fun getConstants(): MutableMap<String, Any> = mutableMapOf(
        DEFAULTS_KEY to barcodeBatchModule.getDefaults()
    )

    @ReactMethod
    fun registerListenerForEvents() {
        barcodeBatchModule.addBarcodeBatchListener()
    }

    @ReactMethod
    fun unregisterListenerForEvents() {
        barcodeBatchModule.removeBarcodeBatchListener()
    }

    @ReactMethod
    fun registerListenerForBasicOverlayEvents() {
        barcodeBatchModule.addBasicOverlayListener()
    }

    @ReactMethod
    fun unregisterListenerForBasicOverlayEvents() {
        barcodeBatchModule.removeBasicOverlayListener()
    }

    @ReactMethod
    fun registerListenerForAdvancedOverlayEvents() {
        barcodeBatchModule.addAdvancedOverlayListener()
    }

    @ReactMethod
    fun unregisterListenerForAdvancedOverlayEvents() {
        barcodeBatchModule.removeAdvancedOverlayListener()
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

        barcodeBatchModule.setBasicOverlayBrushForTrackedBarcode(JSONObject(payload).toString())
        promise.resolve(null)
    }

    @ReactMethod
    fun clearTrackedBarcodeBrushes(promise: Promise) {
        barcodeBatchModule.clearBasicOverlayTrackedBarcodeBrushes()
        promise.resolve(null)
    }

    @ReactMethod
    fun finishDidUpdateSessionCallback(enabled: Boolean) {
        barcodeBatchModule.finishDidUpdateSession(enabled)
    }

    @ReactMethod
    fun setViewForTrackedBarcode(
        view: String?,
        trackedBarcodeId: Int,
        promise: Promise
    ) {
        currentActivity?.let {
            it.runOnUiThread {
                barcodeBatchModule.setViewForTrackedBarcode(
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
        barcodeBatchModule.setAnchorForTrackedBarcode(
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
        barcodeBatchModule.setOffsetForTrackedBarcode(
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
        barcodeBatchModule.clearAdvancedOverlayTrackedBarcodeViews()
        promise.resolve(null)
    }

    @ReactMethod
    fun resetSession() {
        barcodeBatchModule.resetSession(null)
    }

    @ReactMethod
    fun setModeEnabledState(enabled: Boolean) {
        barcodeBatchModule.setModeEnabled(enabled)
    }

    @ReactMethod
    fun updateBarcodeBatchBasicOverlay(overlayJson: String, promise: Promise) {
        barcodeBatchModule.updateBasicOverlay(overlayJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateBarcodeBatchAdvancedOverlay(overlayJson: String, promise: Promise) {
        barcodeBatchModule.updateAdvancedOverlay(overlayJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateBarcodeBatchMode(modeJson: String, promise: Promise) {
        barcodeBatchModule.updateModeFromJson(modeJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun applyBarcodeBatchModeSettings(modeSettingsJson: String, promise: Promise) {
        barcodeBatchModule.applyModeSettings(modeSettingsJson, ReactNativeResult(promise))
    }

    private val barcodeBatchModule: BarcodeBatchModule
        get() {
            return serviceLocator.resolve(
                BarcodeBatchModule::class.java.name
            ) as? BarcodeBatchModule? ?: throw ModuleNotStartedError(name)
        }
}
