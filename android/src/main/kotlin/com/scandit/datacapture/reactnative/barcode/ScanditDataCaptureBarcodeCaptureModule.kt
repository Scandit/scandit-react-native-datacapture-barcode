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
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult
import com.scandit.datacapture.reactnative.core.utils.modeId
import com.scandit.datacapture.reactnative.core.utils.viewId

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
    fun registerBarcodeCaptureListenerForEvents(readableMap: ReadableMap, promise: Promise) {
        barcodeCaptureModule.addListener(readableMap.modeId)
        promise.resolve(null)
    }

    @ReactMethod
    fun unregisterBarcodeCaptureListenerForEvents(readableMap: ReadableMap, promise: Promise) {
        barcodeCaptureModule.removeListener(readableMap.modeId)
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBarcodeCaptureDidUpdateSession(readableMap: ReadableMap, promise: Promise) {
        val enabled = readableMap.getBoolean("enabled")
        barcodeCaptureModule.finishDidUpdateSession(readableMap.modeId, enabled)
        promise.resolve(null)
    }

    @ReactMethod
    fun finishBarcodeCaptureDidScan(readableMap: ReadableMap, promise: Promise) {
        val enabled = readableMap.getBoolean("enabled")
        barcodeCaptureModule.finishDidScan(readableMap.modeId, enabled)
        promise.resolve(null)
    }

    @ReactMethod
    fun resetBarcodeCaptureSession(promise: Promise) {
        barcodeCaptureModule.resetSession()
        promise.resolve(null)
    }

    @ReactMethod
    fun setBarcodeCaptureModeEnabledState(readableMap: ReadableMap, promise: Promise) {
        val enabled = readableMap.getBoolean("enabled")
        barcodeCaptureModule.setModeEnabled(readableMap.modeId, enabled)
        promise.resolve(null)
    }

    @ReactMethod
    fun updateBarcodeCaptureOverlay(readableMap: ReadableMap, promise: Promise) {
        val overlayJson = readableMap.getString("overlayJson") ?: ""
        barcodeCaptureModule.updateOverlay(
            readableMap.viewId,
            overlayJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun updateBarcodeCaptureMode(readableMap: ReadableMap, promise: Promise) {
        val modeJson = readableMap.getString("modeJson") ?: ""
        barcodeCaptureModule.updateModeFromJson(modeJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun applyBarcodeCaptureModeSettings(readableMap: ReadableMap, promise: Promise) {
        val modeSettingsJson = readableMap.getString("modeSettingsJson") ?: ""
        barcodeCaptureModule.applyModeSettings(
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

    private val barcodeCaptureModule: BarcodeCaptureModule
        get() {
            return serviceLocator.resolve(
                BarcodeCaptureModule::class.java.name
            ) as? BarcodeCaptureModule? ?: throw ModuleNotStartedError(name)
        }
}
