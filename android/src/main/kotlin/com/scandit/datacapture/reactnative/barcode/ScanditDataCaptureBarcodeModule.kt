/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.scandit.datacapture.frameworks.barcode.BarcodeModule

class ScanditDataCaptureBarcodeModule(
    reactContext: ReactApplicationContext,
    private val barcodeModule: BarcodeModule
) : ReactContextBaseJavaModule(reactContext) {

    companion object {
        private const val DEFAULTS_KEY = "Defaults"
    }

    override fun getName(): String = "ScanditDataCaptureBarcode"

    override fun getConstants(): MutableMap<String, Any> = mutableMapOf(
        DEFAULTS_KEY to barcodeModule.getDefaults()
    )

    @Suppress("OVERRIDE_DEPRECATION")
    override fun onCatalystInstanceDestroy() {
        barcodeModule.onStop()
    }
}
