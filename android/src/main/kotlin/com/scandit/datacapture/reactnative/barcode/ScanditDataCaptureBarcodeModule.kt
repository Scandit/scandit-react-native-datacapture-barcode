/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.scandit.datacapture.barcode.capture.BarcodeCaptureSettings
import com.scandit.datacapture.barcode.data.CompositeTypeDescription
import com.scandit.datacapture.barcode.data.SymbologyDescription
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableBarcodeDefaults
import com.scandit.datacapture.reactnative.barcode.data.defaults.SerializableSymbologySettingsDefaults

class ScanditDataCaptureBarcodeModule(
    reactContext: ReactApplicationContext
) : ReactContextBaseJavaModule(reactContext) {

    companion object {
        private const val DEFAULTS_KEY = "Defaults"

        private val DEFAULTS: SerializableBarcodeDefaults by lazy {
            val barcodeCaptureSettings = BarcodeCaptureSettings()
            val symbologyDescriptions = SymbologyDescription.all()
            val compositeTypeDescriptions = CompositeTypeDescription.all()

            SerializableBarcodeDefaults(
                symbologySettingsDefaults = SerializableSymbologySettingsDefaults(
                    barcodeCaptureSettings = barcodeCaptureSettings
                ),
                symbologyDescriptions = symbologyDescriptions,
                compositeTypeDescriptions = compositeTypeDescriptions
            )
        }
    }

    override fun getName(): String = "ScanditDataCaptureBarcode"

    override fun getConstants(): MutableMap<String, Any> = mutableMapOf(
        DEFAULTS_KEY to DEFAULTS.toWritableMap()
    )
}
