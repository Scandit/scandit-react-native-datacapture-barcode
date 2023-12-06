/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.data.defaults

import com.facebook.react.bridge.WritableMap
import com.scandit.datacapture.barcode.capture.BarcodeCaptureSettings
import com.scandit.datacapture.barcode.data.SymbologyDescription
import com.scandit.datacapture.reactnative.core.data.SerializableData
import com.scandit.datacapture.reactnative.core.utils.writableMap

internal data class SerializableSymbologySettingsDefaults(
    private val barcodeCaptureSettings: BarcodeCaptureSettings
) : SerializableData {
    override fun toWritableMap(): WritableMap = writableMap {
        SymbologyDescription.all().forEach {
            val settings = barcodeCaptureSettings.getSymbologySettings(it.symbology)
            putString(it.identifier, settings.toJson())
        }
    }
}
