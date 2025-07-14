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
import com.facebook.react.bridge.ReadableMap
import com.scandit.datacapture.frameworks.barcode.capture.BarcodeCaptureModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.errors.ParameterNullError
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
    fun registerBarcodeCaptureListenerForEvents() {
        barcodeCaptureModule.addListener()
    }

    @ReactMethod
    fun unregisterBarcodeCaptureListenerForEvents() {
        barcodeCaptureModule.removeListener()
    }

    @ReactMethod
    fun finishBarcodeCaptureDidUpdateSession(readableMap: ReadableMap) {
        val enabled = readableMap.getBoolean("enabled")
        barcodeCaptureModule.finishDidUpdateSession(enabled)
    }

    @ReactMethod
    fun finishBarcodeCaptureDidScan(readableMap: ReadableMap) {
        val enabled = readableMap.getBoolean("enabled")
        barcodeCaptureModule.finishDidScan(enabled)
    }

    @ReactMethod
    fun resetBarcodeCaptureSession() {
        barcodeCaptureModule.resetSession(null)
    }

    @ReactMethod
    fun setBarcodeCaptureModeEnabledState(readableMap: ReadableMap) {
        val enabled = readableMap.getBoolean("enabled")
        barcodeCaptureModule.setModeEnabled(enabled)
    }

    @ReactMethod
    fun updateBarcodeCaptureOverlay(readableMap: ReadableMap, promise: Promise) {
        val overlayJson = readableMap.getString("overlayJson")
            ?: return promise.reject(ParameterNullError("overlayJson"))
        barcodeCaptureModule.updateOverlay(overlayJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateBarcodeCaptureMode(readableMap: ReadableMap, promise: Promise) {
        val modeJson = readableMap.getString("modeJson")
            ?: return promise.reject(ParameterNullError("modeJson"))
        barcodeCaptureModule.updateModeFromJson(modeJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun applyBarcodeCaptureModeSettings(readableMap: ReadableMap, promise: Promise) {
        val modeSettingsJson = readableMap.getString("modeSettingsJson")
            ?: return promise.reject(ParameterNullError("modeSettingsJson"))
        barcodeCaptureModule.applyModeSettings(modeSettingsJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun addListener(@Suppress("UNUSED_PARAMETER") eventName: String?) {
        // Keep: Required for RN built in Event Emitter Calls.
    }

    @ReactMethod
    fun removeListeners(@Suppress("UNUSED_PARAMETER") count: Int?) {
        // Keep: Required for RN built in Event Emitter Calls.
    }

    private val barcodeCaptureModule: BarcodeCaptureModule
        get() {
            return serviceLocator.resolve(
                BarcodeCaptureModule::class.java.name
            ) as? BarcodeCaptureModule? ?: throw ModuleNotStartedError(name)
        }
}
