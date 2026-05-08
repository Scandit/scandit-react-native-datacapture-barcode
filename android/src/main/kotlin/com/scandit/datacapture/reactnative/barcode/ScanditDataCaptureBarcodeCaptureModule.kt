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
import com.scandit.datacapture.frameworks.barcode.capture.BarcodeCaptureModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

class ScanditDataCaptureBarcodeCaptureModule(
    reactContext: ReactApplicationContext,
    private val serviceLocator: ServiceLocator<FrameworkModule>
) : ReactContextBaseJavaModule(reactContext) {

    companion object {
        private const val DEFAULTS_KEY = "Defaults"
    }

    override fun invalidate() {
        barcodeCaptureModule.onDestroy()

        super.invalidate()
    }

    override fun getName(): String = "ScanditDataCaptureBarcodeCapture"

    override fun getConstants(): MutableMap<String, Any> = mutableMapOf(
        DEFAULTS_KEY to barcodeCaptureModule.getDefaults()
    )

    @ReactMethod
    fun registerListenerForEvents() {
        barcodeCaptureModule.addListener()
    }

    @ReactMethod
    fun unregisterListenerForEvents() {
        barcodeCaptureModule.removeListener()
    }

    @ReactMethod
    fun finishDidUpdateSessionCallback(enabled: Boolean) {
        barcodeCaptureModule.finishDidUpdateSession(enabled)
    }

    @ReactMethod
    fun finishDidScanCallback(enabled: Boolean) {
        barcodeCaptureModule.finishDidScan(enabled)
    }

    @ReactMethod
    fun resetSession() {
        barcodeCaptureModule.resetSession(null)
    }

    @ReactMethod
    fun setModeEnabledState(enabled: Boolean) {
        barcodeCaptureModule.setModeEnabled(enabled)
    }

    @ReactMethod
    fun updateBarcodeCaptureOverlay(overlayJson: String, promise: Promise) {
        barcodeCaptureModule.updateOverlay(overlayJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateBarcodeCaptureMode(modeJson: String, promise: Promise) {
        barcodeCaptureModule.updateModeFromJson(modeJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun applyBarcodeCaptureModeSettings(modeSettingsJson: String, promise: Promise) {
        barcodeCaptureModule.applyModeSettings(modeSettingsJson, ReactNativeResult(promise))
    }

    private val barcodeCaptureModule: BarcodeCaptureModule
        get() {
            return serviceLocator.resolve(
                BarcodeCaptureModule::class.java.name
            ) as? BarcodeCaptureModule? ?: throw ModuleNotStartedError(name)
        }
}
