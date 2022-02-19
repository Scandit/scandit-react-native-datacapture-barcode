/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.data.defaults

import com.facebook.react.bridge.WritableMap
import com.scandit.datacapture.barcode.data.CompositeTypeDescription
import com.scandit.datacapture.barcode.data.SymbologyDescription
import com.scandit.datacapture.reactnative.core.data.SerializableData
import com.scandit.datacapture.reactnative.core.utils.putData
import com.scandit.datacapture.reactnative.core.utils.writableArray
import com.scandit.datacapture.reactnative.core.utils.writableMap

internal data class SerializableBarcodeDefaults(
    private val symbologySettingsDefaults: SerializableSymbologySettingsDefaults,
    private val symbologyDescriptions: List<SymbologyDescription>,
    private val compositeTypeDescriptions: List<CompositeTypeDescription>
) : SerializableData {
    override fun toWritableMap(): WritableMap = writableMap {
        putData(FIELD_SYMBOLOGY_SETTINGS_DEFAULTS, symbologySettingsDefaults)
        putArray(
            FIELD_SYMBOLOGY_DESCRIPTION_DEFAULTS,
            writableArray {
                symbologyDescriptions.forEach { pushString(it.toJson()) }
            }
        )
        putArray(
            FIELD_COMPOSITE_TYPE_DESCRIPTION_DEFAULTS,
            writableArray {
                compositeTypeDescriptions.forEach { pushString(it.toJson()) }
            }
        )
    }

    companion object {
        private const val FIELD_SYMBOLOGY_SETTINGS_DEFAULTS = "SymbologySettings"
        private const val FIELD_SYMBOLOGY_DESCRIPTION_DEFAULTS = "SymbologyDescriptions"
        private const val FIELD_COMPOSITE_TYPE_DESCRIPTION_DEFAULTS = "CompositeTypeDescriptions"
    }
}
