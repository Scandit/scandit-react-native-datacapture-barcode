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
import com.scandit.datacapture.frameworks.barcode.selection.BarcodeSelectionModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

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
    fun registerListenerForEvents() {
        barcodeSelectionModule.addListener()
    }

    @ReactMethod
    fun unregisterListenerForEvents() {
        barcodeSelectionModule.removeListener()
    }

    @ReactMethod
    fun finishDidUpdateSessionCallback(enabled: Boolean) {
        barcodeSelectionModule.finishDidUpdateSession(enabled)
    }

    @ReactMethod
    fun getCount(
        selectionIdentifier: String,
        promise: Promise
    ) {
        val count = barcodeSelectionModule.getBarcodeCount(selectionIdentifier)
        promise.resolve(count)
    }

    @ReactMethod
    fun increaseCountForBarcodes(
        barcodesJson: String,
        promise: Promise
    ) {
        barcodeSelectionModule.increaseCountForBarcodes(barcodesJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun finishBrushForAimedBarcodeCallback(
        brushJson: String?,
        selectionIdentifier: String?
    ) {
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
        text: String,
        promise: Promise
    ) {
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
        brushJson: String?,
        selectionIdentifier: String?
    ) {
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
    fun unfreezeCamera() {
        barcodeSelectionModule.unfreezeCamera()
    }

    @ReactMethod
    fun selectAimedBarcode() {
        barcodeSelectionModule.selectAimedBarcode()
    }

    @ReactMethod
    fun resetMode() {
        barcodeSelectionModule.resetSelection()
    }

    @ReactMethod
    fun resetSession() {
        barcodeSelectionModule.resetLatestSession(null)
    }

    @ReactMethod
    fun finishDidUpdateSelectionCallback(enabled: Boolean) {
        barcodeSelectionModule.finishDidSelect(enabled)
    }

    @ReactMethod
    fun unselectBarcodes(
        barcodesJson: String,
        promise: Promise
    ) {
        barcodeSelectionModule.unselectBarcodes(barcodesJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun setSelectBarcodeEnabled(
        barcodesJson: String,
        enabled: Boolean,
        promise: Promise
    ) {
        barcodeSelectionModule.setSelectBarcodeEnabled(
            barcodesJson,
            enabled,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun setModeEnabledState(enabled: Boolean) {
        barcodeSelectionModule.setModeEnabled(enabled)
    }

    @ReactMethod
    fun updateBarcodeSelectionBasicOverlay(overlayJson: String, promise: Promise) {
        barcodeSelectionModule.updateBasicOverlay(overlayJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateBarcodeSelectionMode(modeJson: String, promise: Promise) {
        barcodeSelectionModule.updateModeFromJson(modeJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun applyBarcodeSelectionModeSettings(modeSettingsJson: String, promise: Promise) {
        barcodeSelectionModule.applyModeSettings(modeSettingsJson, ReactNativeResult(promise))
    }

    override fun invalidate() {
        barcodeSelectionModule.onDestroy()
        super.invalidate()
    }

    private val barcodeSelectionModule: BarcodeSelectionModule
        get() {
            return serviceLocator.resolve(
                BarcodeSelectionModule::class.java.name
            ) as? BarcodeSelectionModule? ?: throw ModuleNotStartedError(name)
        }
}
