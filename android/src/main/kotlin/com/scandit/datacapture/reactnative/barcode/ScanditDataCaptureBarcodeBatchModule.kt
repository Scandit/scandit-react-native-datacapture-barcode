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
import com.facebook.react.bridge.ReadableMap
import com.scandit.datacapture.core.internal.sdk.utils.pxFromDp
import com.scandit.datacapture.frameworks.barcode.batch.BarcodeBatchModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.errors.ParameterNullError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.barcode.batch.nativeViewFromJson
import com.scandit.datacapture.reactnative.barcode.extensions.animateSizeTo
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult
import com.scandit.datacapture.reactnative.core.utils.getSafeLong
import com.scandit.datacapture.reactnative.core.utils.modeId
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
    fun registerBarcodeBatchListenerForEvents(readableMap: ReadableMap) {
        barcodeBatchModule.addBarcodeBatchListener(readableMap.modeId)
    }

    @ReactMethod
    fun unregisterBarcodeBatchListenerForEvents(readableMap: ReadableMap) {
        barcodeBatchModule.removeBarcodeBatchListener(readableMap.modeId)
    }

    @ReactMethod
    fun registerListenerForBasicOverlayEvents(readableMap: ReadableMap) {
        barcodeBatchModule.addBasicOverlayListener(readableMap.getInt("dataCaptureViewId"))
    }

    @ReactMethod
    fun unregisterListenerForBasicOverlayEvents(readableMap: ReadableMap) {
        barcodeBatchModule.removeBasicOverlayListener(readableMap.getInt("dataCaptureViewId"))
    }

    @ReactMethod
    fun registerListenerForAdvancedOverlayEvents(readableMap: ReadableMap) {
        barcodeBatchModule.addAdvancedOverlayListener(readableMap.getInt("dataCaptureViewId"))
    }

    @ReactMethod
    fun unregisterListenerForAdvancedOverlayEvents(readableMap: ReadableMap) {
        barcodeBatchModule.removeAdvancedOverlayListener(readableMap.getInt("dataCaptureViewId"))
    }

    @ReactMethod
    fun setBrushForTrackedBarcode(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val brushJson = readableMap.getString("brushJson") ?: return run {
            promise.reject(
                Error("Invalid brushJson parameter passed to setBrushForTrackedBarcode.")
            )
        }
        val trackedBarcodeId = readableMap.getInt("trackedBarcodeIdentifier")
        val dataCaptureViewId = readableMap.getInt("dataCaptureViewId")
        val sessionFrameSequenceId = readableMap.getSafeLong("sessionFrameSequenceID")

        barcodeBatchModule.setBasicOverlayBrushForTrackedBarcode(
            dataCaptureViewId,
            brushJson,
            trackedBarcodeId,
            sessionFrameSequenceId
        )
        promise.resolve(null)
    }

    @ReactMethod
    fun clearTrackedBarcodeBrushes(readableMap: ReadableMap, promise: Promise) {
        barcodeBatchModule.clearBasicOverlayTrackedBarcodeBrushes(
            readableMap.getInt("dataCaptureViewId")
        )
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBarcodeBatchDidUpdateSessionCallback(readableMap: ReadableMap) {
        val enabled = readableMap.getBoolean("enabled")
        barcodeBatchModule.finishDidUpdateSession(readableMap.modeId, enabled)
    }

    @ReactMethod
    fun setViewForTrackedBarcode(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val dataCaptureViewId = readableMap.getInt("dataCaptureViewId")
        val view = readableMap.getString("viewJson")
        val trackedBarcodeId = readableMap.getInt("trackedBarcodeIdentifier")

        currentActivity?.let {
            it.runOnUiThread {
                val reactView = nativeViewFromJson(it, view)

                if (reactView != null) {
                    arViewsCache[trackedBarcodeId] = reactView
                }

                barcodeBatchModule.setViewForTrackedBarcode(
                    dataCaptureViewId,
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
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val trackedBarcodeId = readableMap.getInt("trackedBarcodeIdentifier")
        val width = readableMap.getInt("width")
        val height = readableMap.getInt("height")

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
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val anchor = readableMap.getString("anchor")
            ?: return promise.reject(ParameterNullError("anchor"))
        val trackedBarcodeId = readableMap.getInt("trackedBarcodeIdentifier")
        val dataCaptureViewId = readableMap.getInt("dataCaptureViewId")

        barcodeBatchModule.setAnchorForTrackedBarcode(
            anchor,
            trackedBarcodeId,
            null,
            dataCaptureViewId
        )
        promise.resolve(null)
    }

    @ReactMethod
    fun setOffsetForTrackedBarcode(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val offset = readableMap.getString("offsetJson")
            ?: return promise.reject(ParameterNullError("offsetJson"))
        val dataCaptureViewId = readableMap.getInt("dataCaptureViewId")
        val trackedBarcodeId = readableMap.getInt("trackedBarcodeIdentifier")

        barcodeBatchModule.setOffsetForTrackedBarcode(
            offset,
            trackedBarcodeId,
            null,
            dataCaptureViewId
        )
        promise.resolve(null)
    }

    @ReactMethod
    fun clearTrackedBarcodeViews(readableMap: ReadableMap, promise: Promise) {
        barcodeBatchModule.clearAdvancedOverlayTrackedBarcodeViews(
            readableMap.getInt("dataCaptureViewId")
        )
        arViewsCache.clear()
        promise.resolve(null)
    }

    @ReactMethod
    fun resetBarcodeBatchSession() {
        barcodeBatchModule.resetSession(null)
        arViewsCache.clear()
    }

    @ReactMethod
    fun setBarcodeBatchModeEnabledState(readableMap: ReadableMap) {
        val enabled = readableMap.getBoolean("enabled")
        barcodeBatchModule.setModeEnabled(readableMap.modeId, enabled)
        if (!enabled) {
            arViewsCache.clear()
        }
    }

    @ReactMethod
    fun updateBarcodeBatchBasicOverlay(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val overlayJson = readableMap.getString("overlayJson")
            ?: return promise.reject(ParameterNullError("overlayJson"))
        val dataCaptureViewId = readableMap.getInt("dataCaptureViewId")
        barcodeBatchModule.updateBasicOverlay(
            dataCaptureViewId,
            overlayJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun updateBarcodeBatchAdvancedOverlay(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val overlayJson = readableMap.getString("overlayJson")
            ?: return promise.reject(ParameterNullError("overlayJson"))
        val dataCaptureViewId = readableMap.getInt("dataCaptureViewId")
        barcodeBatchModule.updateAdvancedOverlay(
            dataCaptureViewId,
            overlayJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun updateBarcodeBatchMode(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val modeJson = readableMap.getString("modeJson")
            ?: return promise.reject(ParameterNullError("modeJson"))
        barcodeBatchModule.updateModeFromJson(modeJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun applyBarcodeBatchModeSettings(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val modeSettingsJson = readableMap.getString("modeSettingsJson")
            ?: return promise.reject(ParameterNullError("modeSettingsJson"))
        barcodeBatchModule.applyModeSettings(
            readableMap.modeId,
            modeSettingsJson,
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
