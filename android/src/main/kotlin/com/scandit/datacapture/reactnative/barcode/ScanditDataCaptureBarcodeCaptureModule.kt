/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.scandit.datacapture.frameworks.barcode.capture.BarcodeCaptureModule

class ScanditDataCaptureBarcodeCaptureModule(
    reactContext: ReactApplicationContext,
    private val barcodeCaptureModule: BarcodeCaptureModule,
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
}
