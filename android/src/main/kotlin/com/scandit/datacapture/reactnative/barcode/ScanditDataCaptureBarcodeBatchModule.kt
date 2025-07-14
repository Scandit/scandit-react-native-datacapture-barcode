/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import android.view.View
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.scandit.datacapture.core.internal.sdk.utils.pxFromDp
import com.scandit.datacapture.frameworks.barcode.batch.BarcodeBatchModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.barcode.batch.nativeViewFromJson
import com.scandit.datacapture.reactnative.barcode.extensions.animateSizeTo
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult
import org.json.JSONObject
import java.util.concurrent.ConcurrentHashMap

class ScanditDataCaptureBarcodeBatchModule(
    reactContext: ReactApplicationContext,
    private val serviceLocator: ServiceLocator<FrameworkModule>,
) : ReactContextBaseJavaModule(reactContext) {
    private val arViewsCache: MutableMap<Int, View> = ConcurrentHashMap()

    override fun invalidate() {
        barcodeBatchModule.onDestroy()
        arViewsCache.clear()
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
                val reactView = nativeViewFromJson(it, view)

                if (reactView != null) {
                    arViewsCache[trackedBarcodeId] = reactView
                }

                barcodeBatchModule.setViewForTrackedBarcode(
                    reactView,
                    trackedBarcodeId,
                    null
                )
            }
        }
        promise.resolve(null)
    }

    @ReactMethod
    fun updateSizeOfTrackedBarcodeView(
        trackedBarcodeId: Int,
        width: Int,
        height: Int,
        promise: Promise
    ) {
        val cachedView = arViewsCache[trackedBarcodeId] ?: run {
            promise.reject(Error("View for tracked barcode $trackedBarcodeId not found."))
            return
        }
        currentActivity?.let { context ->
            context.runOnUiThread {
                cachedView.animateSizeTo(width.pxFromDp(), height.pxFromDp())
                promise.resolve(null)
            }
        }
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
        arViewsCache.clear()
        promise.resolve(null)
    }

    @ReactMethod
    fun resetSession() {
        barcodeBatchModule.resetSession(null)
        arViewsCache.clear()
    }

    @ReactMethod
    fun setModeEnabledState(enabled: Boolean) {
        barcodeBatchModule.setModeEnabled(enabled)
        if (!enabled) {
            arViewsCache.clear()
        }
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

    @ReactMethod
    fun addListener(@Suppress("UNUSED_PARAMETER") eventName: String?) {
        // Keep: Required for RN built in Event Emitter Calls.
    }

    @ReactMethod
    fun removeListeners(@Suppress("UNUSED_PARAMETER") count: Int?) {
        // Keep: Required for RN built in Event Emitter Calls.
    }

    private val barcodeBatchModule: BarcodeBatchModule
        get() {
            return serviceLocator.resolve(
                BarcodeBatchModule::class.java.name
            ) as? BarcodeBatchModule? ?: throw ModuleNotStartedError(name)
        }

    companion object {
        private const val DEFAULTS_KEY = "Defaults"
    }
}
