/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.data.defaults

import com.facebook.react.bridge.WritableMap
import com.scandit.datacapture.barcode.capture.BarcodeCapture
import com.scandit.datacapture.barcode.capture.BarcodeCaptureSettings
import com.scandit.datacapture.barcode.ui.overlay.BarcodeCaptureOverlay
import com.scandit.datacapture.barcode.ui.overlay.BarcodeCaptureOverlayStyle
import com.scandit.datacapture.barcode.ui.overlay.toJson
import com.scandit.datacapture.reactnative.core.data.SerializableData
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableBrushDefaults
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableCameraSettingsDefaults
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableWritableMap
import com.scandit.datacapture.reactnative.core.utils.putData
import com.scandit.datacapture.reactnative.core.utils.writableMap
import org.json.JSONObject

internal data class SerializableBarcodeCaptureDefaults(
    private val recommendedCameraSettings: SerializableCameraSettingsDefaults,
    private val barcodeCaptureSettings: SerializableBarcodeCaptureSettingsDefaults,
    private val barcodeCaptureOverlay: SerializableBarcodeCaptureOverlayDefaults
) : SerializableData {

    override fun toWritableMap(): WritableMap = writableMap {
        putData(FIELD_RECOMMENDED_CAMERA_SETTINGS, recommendedCameraSettings)
        putData(FIELD_BARCODE_CAPTURE_SETTINGS, barcodeCaptureSettings)
        putData(FIELD_BARCODE_CAPTURE_OVERLAY, barcodeCaptureOverlay)
    }

    companion object {
        private const val FIELD_RECOMMENDED_CAMERA_SETTINGS = "RecommendedCameraSettings"
        private const val FIELD_BARCODE_CAPTURE_SETTINGS = "BarcodeCaptureSettings"
        private const val FIELD_BARCODE_CAPTURE_OVERLAY = "BarcodeCaptureOverlay"
    }
}

internal data class SerializableBarcodeCaptureSettingsDefaults(
    private val duplicateFilterInMillis: Long
) : SerializableData {

    override fun toWritableMap(): WritableMap = writableMap {
        putInt(FIELD_CODE_DUPLICATE_FILTER, duplicateFilterInMillis.toInt())
    }

    companion object {
        private const val FIELD_CODE_DUPLICATE_FILTER = "codeDuplicateFilter"
    }
}

internal class SerializableBarcodeCaptureOverlayDefaults(
    private val defaultBrush: SerializableBrushDefaults,
    private val defaultStyle: String,
    private val styles: Array<BarcodeCaptureOverlayStyle>
) : SerializableData {

    override fun toWritableMap(): WritableMap = writableMap {
        putData(FIELD_BRUSH, defaultBrush)
        putString(FIELD_DEFAULT_STYLE, defaultStyle)
        putData(FIELD_STYLES, stylesMap(styles))
    }

    private fun stylesMap(styles: Array<BarcodeCaptureOverlayStyle>): SerializableWritableMap {
        val map = mutableMapOf<String, Map<String, JSONObject>>()

        styles.forEach {
            map[it.toJson()] = mapOf(
                FIELD_BRUSH to SerializableBrushDefaults(
                    BarcodeCaptureOverlay.newInstance(
                        BarcodeCapture.forDataCaptureContext(
                            null,
                            BarcodeCaptureSettings()
                        ),
                        null,
                        it
                    ).brush
                ).toJSONObject()
            )
        }

        return SerializableWritableMap(JSONObject(map as Map<String, Map<String, JSONObject>>))
    }

    companion object {
        private const val FIELD_BRUSH = "DefaultBrush"
        private const val FIELD_DEFAULT_STYLE = "defaultStyle"
        private const val FIELD_STYLES = "styles"
    }
}
