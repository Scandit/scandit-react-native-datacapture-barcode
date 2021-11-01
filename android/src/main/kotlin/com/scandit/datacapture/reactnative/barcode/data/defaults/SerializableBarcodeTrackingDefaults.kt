/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.data.defaults

import com.facebook.react.bridge.WritableMap
import com.scandit.datacapture.barcode.tracking.capture.BarcodeTracking
import com.scandit.datacapture.barcode.tracking.capture.BarcodeTrackingSettings
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingBasicOverlay
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingBasicOverlayStyle
import com.scandit.datacapture.barcode.tracking.ui.overlay.toJson
import com.scandit.datacapture.reactnative.core.data.SerializableData
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableBrushDefaults
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableCameraSettingsDefaults
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableWritableMap
import com.scandit.datacapture.reactnative.core.utils.putData
import com.scandit.datacapture.reactnative.core.utils.writableMap
import org.json.JSONObject

internal data class SerializableBarcodeTrackingDefaults(
    private val recommendedCameraSettings: SerializableCameraSettingsDefaults,
    private val trackingBasicOverlayDefaults: SerializableTrackingBasicOverlayDefaults
) : SerializableData {

    override fun toWritableMap(): WritableMap = writableMap {
        putData(FIELD_RECOMMENDED_CAMERA_SETTINGS, recommendedCameraSettings)
        putData(FIELD_TRACKING_BASIC_OVERLAY, trackingBasicOverlayDefaults)
    }

    companion object {
        private const val FIELD_RECOMMENDED_CAMERA_SETTINGS = "RecommendedCameraSettings"
        private const val FIELD_TRACKING_BASIC_OVERLAY = "BarcodeTrackingBasicOverlay"
    }
}

internal class SerializableTrackingBasicOverlayDefaults(
    private val defaultBrush: SerializableBrushDefaults,
    private val defaultStyle: String,
    private val styles: Array<BarcodeTrackingBasicOverlayStyle>
) : SerializableData {
    override fun toWritableMap(): WritableMap = writableMap {
        putData(FIELD_BRUSH, defaultBrush)
        putString(FIELD_DEFAULT_STYLE, defaultStyle)
        putData(FIELD_STYLES, stylesMap(styles))
    }

    private fun stylesMap(styles: Array<BarcodeTrackingBasicOverlayStyle>):
        SerializableWritableMap {
        val map = mutableMapOf<String, Map<String, JSONObject>>()

        styles.forEach {
            map[it.toJson()] = mapOf(
                FIELD_BRUSH to SerializableBrushDefaults(
                    BarcodeTrackingBasicOverlay.newInstance(
                        BarcodeTracking.forDataCaptureContext(
                            null,
                            BarcodeTrackingSettings()
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
