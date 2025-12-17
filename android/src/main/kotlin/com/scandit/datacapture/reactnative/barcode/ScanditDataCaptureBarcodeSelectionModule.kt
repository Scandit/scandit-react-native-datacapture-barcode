/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.scandit.datacapture.frameworks.barcode.selection.BarcodeSelectionModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.errors.ParameterNullError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult
import com.scandit.datacapture.reactnative.core.utils.modeId

class ScanditDataCaptureBarcodeSelectionModule(
    reactContext: ReactApplicationContext,
    private val serviceLocator: ServiceLocator<FrameworkModule>
) : ReactContextBaseJavaModule(reactContext) {

    companion object {
        private const val DEFAULTS_KEY = "Defaults"
    }

    override fun getName(): String = "ScanditDataCaptureBarcodeSelection"

    override fun getConstants(): MutableMap<String, Any> = mutableMapOf(
        DEFAULTS_KEY to barcodeSelectionModule.getDefaults()
    )

    @ReactMethod
    fun registerBarcodeSelectionListenerForEvents(readableMap: ReadableMap) {
        barcodeSelectionModule.addListener(readableMap.modeId)
    }

    @ReactMethod
    fun unregisterBarcodeSelectionListenerForEvents(readableMap: ReadableMap) {
        barcodeSelectionModule.removeListener(readableMap.modeId)
    }

    @ReactMethod
    fun finishBarcodeSelectionDidUpdateSession(readableMap: ReadableMap) {
        val enabled = readableMap.getBoolean("enabled")
        barcodeSelectionModule.finishDidUpdateSession(readableMap.modeId, enabled)
    }

    @ReactMethod
    fun getCountForBarcodeInBarcodeSelectionSession(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val selectionIdentifier = readableMap.getString("selectionIdentifier")
            ?: return promise.reject(ParameterNullError("selectionIdentifier"))
        barcodeSelectionModule.submitBarcodeCountForIdentifier(
            readableMap.modeId,
            selectionIdentifier,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun increaseCountForBarcodes(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val barcodesJson = readableMap.getString("barcodesJson")
            ?: return promise.reject(ParameterNullError("barcodesJson"))
        barcodeSelectionModule.increaseCountForBarcodes(
            readableMap.modeId,
            barcodesJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun finishBrushForAimedBarcodeCallback(
        readableMap: ReadableMap
    ) {
        val brushJson = readableMap.getString("brushJson") ?: return
        val selectionIdentifier = readableMap.getString("selectionIdentifier") ?: return
        barcodeSelectionModule.finishBrushForAimedBarcode(brushJson, selectionIdentifier)
    }

    @ReactMethod
    fun setAimedBarcodeBrushProvider(
        promise: Promise
    ) {
        barcodeSelectionModule.setAimedBarcodeBrushProvider(ReactNativeResult(promise))
    }

    @ReactMethod
    fun setTextForAimToSelectAutoHint(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val text = readableMap.getString("text")
            ?: return promise.reject(ParameterNullError("text"))
        barcodeSelectionModule.setTextForAimToSelectAutoHint(text, ReactNativeResult(promise))
    }

    @ReactMethod
    fun removeAimedBarcodeBrushProvider(
        promise: Promise
    ) {
        barcodeSelectionModule.removeAimedBarcodeBrushProvider()
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBrushForTrackedBarcodeCallback(
        readableMap: ReadableMap
    ) {
        val brushJson = readableMap.getString("brushJson") ?: return
        val selectionIdentifier = readableMap.getString("selectionIdentifier") ?: return
        barcodeSelectionModule.finishBrushForTrackedBarcode(brushJson, selectionIdentifier)
    }

    @ReactMethod
    fun setTrackedBarcodeBrushProvider(
        promise: Promise
    ) {
        barcodeSelectionModule.setTrackedBarcodeBrushProvider(ReactNativeResult(promise))
    }

    @ReactMethod
    fun removeTrackedBarcodeBrushProvider(
        promise: Promise
    ) {
        barcodeSelectionModule.removeTrackedBarcodeBrushProvider()
        promise.resolve(null)
    }

    @ReactMethod
    fun unfreezeCameraInBarcodeSelection(readableMap: ReadableMap) {
        barcodeSelectionModule.unfreezeCamera(readableMap.modeId)
    }

    @ReactMethod
    fun selectAimedBarcode(readableMap: ReadableMap) {
        barcodeSelectionModule.selectAimedBarcode(readableMap.modeId)
    }

    @ReactMethod
    fun resetBarcodeSelection(readableMap: ReadableMap) {
        barcodeSelectionModule.resetSelection(readableMap.modeId)
    }

    @ReactMethod
    fun resetBarcodeSelectionSession(readableMap: ReadableMap) {
        barcodeSelectionModule.resetLatestSession(readableMap.modeId, null)
    }

    @ReactMethod
    fun finishBarcodeSelectionDidSelect(readableMap: ReadableMap) {
        val enabled = readableMap.getBoolean("enabled")
        barcodeSelectionModule.finishDidSelect(readableMap.modeId, enabled)
    }

    @ReactMethod
    fun unselectBarcodes(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val barcodesJson = readableMap.getString("barcodesJson")
            ?: return promise.reject(ParameterNullError("barcodesJson"))
        barcodeSelectionModule.unselectBarcodes(
            readableMap.modeId,
            barcodesJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun setSelectBarcodeEnabled(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val barcodesJson = readableMap.getString("barcodesJson")
            ?: return promise.reject(ParameterNullError("barcodesJson"))
        val enabled = readableMap.getBoolean("enabled")
        barcodeSelectionModule.setSelectBarcodeEnabled(
            readableMap.modeId,
            barcodesJson,
            enabled,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun setBarcodeSelectionModeEnabledState(readableMap: ReadableMap) {
        val enabled = readableMap.getBoolean("enabled")
        barcodeSelectionModule.setModeEnabled(readableMap.modeId, enabled)
    }

    @ReactMethod
    fun updateBarcodeSelectionBasicOverlay(readableMap: ReadableMap, promise: Promise) {
        val overlayJson = readableMap.getString("overlayJson")
            ?: return promise.reject(ParameterNullError("overlayJson"))
        barcodeSelectionModule.updateBasicOverlay(overlayJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateBarcodeSelectionMode(readableMap: ReadableMap, promise: Promise) {
        val modeJson = readableMap.getString("modeJson")
            ?: return promise.reject(ParameterNullError("modeJson"))
        barcodeSelectionModule.updateModeFromJson(
            readableMap.modeId,
            modeJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun applyBarcodeSelectionModeSettings(readableMap: ReadableMap, promise: Promise) {
        val modeSettingsJson = readableMap.getString("modeSettingsJson")
            ?: return promise.reject(ParameterNullError("modeSettingsJson"))
        barcodeSelectionModule.applyModeSettings(
            readableMap.modeId,
            modeSettingsJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun updateBarcodeSelectionFeedback(readableMap: ReadableMap, promise: Promise) {
        val feedbackJson = readableMap.getString("feedbackJson")
            ?: return promise.reject(ParameterNullError("feedbackJson"))
        barcodeSelectionModule.updateFeedback(
            readableMap.modeId,
            feedbackJson,
            ReactNativeResult(promise)
        )
    }

    override fun invalidate() {
        barcodeSelectionModule.onDestroy()
        super.invalidate()
    }

    @ReactMethod
    fun addListener(@Suppress("UNUSED_PARAMETER") eventName: String?) {
        // Keep: Required for RN built in Event Emitter Calls.
    }

    @ReactMethod
    fun removeListeners(@Suppress("UNUSED_PARAMETER") count: Int?) {
        // Keep: Required for RN built in Event Emitter Calls.
    }

    private val barcodeSelectionModule: BarcodeSelectionModule
        get() {
            return serviceLocator.resolve(
                BarcodeSelectionModule::class.java.name
            ) as? BarcodeSelectionModule? ?: throw ModuleNotStartedError(name)
        }
}
