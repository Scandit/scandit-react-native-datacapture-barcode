/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.data.defaults

import com.facebook.react.bridge.WritableMap
import com.scandit.datacapture.barcode.selection.capture.BarcodeSelectionAimerSelection
import com.scandit.datacapture.barcode.selection.capture.BarcodeSelectionSettings
import com.scandit.datacapture.barcode.selection.capture.BarcodeSelectionTapSelection
import com.scandit.datacapture.barcode.selection.capture.toJson
import com.scandit.datacapture.barcode.selection.feedback.BarcodeSelectionFeedback
import com.scandit.datacapture.barcode.selection.ui.overlay.BarcodeSelectionBasicOverlay
import com.scandit.datacapture.barcode.selection.ui.overlay.BarcodeSelectionBasicOverlayStyle
import com.scandit.datacapture.barcode.selection.ui.overlay.toJson
import com.scandit.datacapture.reactnative.core.data.SerializableData
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableBrushDefaults
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableCameraSettingsDefaults
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableWritableMap
import com.scandit.datacapture.reactnative.core.utils.putData
import com.scandit.datacapture.reactnative.core.utils.writableMap
import org.json.JSONObject

internal data class SerializableBarcodeSelectionDefaults(
    private val defaultFeedback: BarcodeSelectionFeedback,
    private val recommendedCameraSettingsDefaults: SerializableCameraSettingsDefaults,
    private val settingsDefaults: SerializableBarcodeSelectionSettingsDefaults,
    private val tapSelectionDefaults: SerializableBarcodeSelectionTapSelectionDefaults,
    private val aimerSelectionDefaults: SerializableBarcodeSelectionAimerSelectionDefaults,
    private val overlayDefaults: SerializableBarcodeSelectionBasicOverlayDefaults
) : SerializableData {

    override fun toWritableMap(): WritableMap = writableMap {
        putData(FIELD_OVERLAY, overlayDefaults)
        putData(FIELD_SETTINGS, settingsDefaults)
        putString(FIELD_FEEDBACK, defaultFeedback.toJson())
        putData(FIELD_CAMERA_SETTINGS, recommendedCameraSettingsDefaults)
        putData(FIELD_TAP_SELECTION, tapSelectionDefaults)
        putData(FIELD_AIMER_SELECTION, aimerSelectionDefaults)
    }

    companion object {
        private const val FIELD_OVERLAY = "BarcodeSelectionBasicOverlay"
        private const val FIELD_SETTINGS = "BarcodeSelectionSettings"
        private const val FIELD_FEEDBACK = "Feedback"
        private const val FIELD_CAMERA_SETTINGS = "RecommendedCameraSettings"
        private const val FIELD_TAP_SELECTION = "BarcodeSelectionTapSelection"
        private const val FIELD_AIMER_SELECTION = "BarcodeSelectionAimerSelection"
    }
}

class SerializableBarcodeSelectionSettingsDefaults(
    private val settings: BarcodeSelectionSettings
) : SerializableData {

    companion object {
        private const val FIELD_CODE_DUPLICATE_FILTER = "codeDuplicateFilter"
        private const val FIELD_SINGLE_BARCODE_AUTO_DETECTION_ENABLED =
            "singleBarcodeAutoDetection"
        private const val FIELD_SELECTION_TYPE = "selectionType"
    }

    override fun toWritableMap(): WritableMap = writableMap {
        putDouble(FIELD_CODE_DUPLICATE_FILTER, settings.codeDuplicateFilter.asMillis().toDouble())
        putBoolean(FIELD_SINGLE_BARCODE_AUTO_DETECTION_ENABLED, settings.singleBarcodeAutoDetection)
        putString(FIELD_SELECTION_TYPE, settings.selectionType.toJson())
    }
}

class SerializableBarcodeSelectionBasicOverlayDefaults(
    private val defaultStyle: String,
    private val styles: Array<BarcodeSelectionBasicOverlayStyle>
) : SerializableData {
    companion object {
        private const val FIELD_TRACKED_BRUSH = "DefaultTrackedBrush"
        private const val FIELD_AIMED_BRUSH = "DefaultAimedBrush"
        private const val FIELD_SELECTING_BRUSH = "DefaultSelectingBrush"
        private const val FIELD_SELECTED_BRUSH = "DefaultSelectedBrush"
        private const val FIELD_DEFAULT_STYLE = "defaultStyle"
        private const val FIELD_STYLES = "styles"
    }

    private fun stylesMap(styles: Array<BarcodeSelectionBasicOverlayStyle>):
        SerializableWritableMap {
        val map = mutableMapOf<String, Map<String, JSONObject>>()

        styles.forEach {
            map[it.toJson()] = mapOf(
                FIELD_TRACKED_BRUSH to
                    SerializableBrushDefaults(
                        BarcodeSelectionBasicOverlay.DEFAULT_TRACKED_BRUSH
                    ).toJSONObject(),
                FIELD_AIMED_BRUSH to
                    SerializableBrushDefaults(
                        BarcodeSelectionBasicOverlay.DEFAULT_AIMED_BRUSH
                    ).toJSONObject(),
                FIELD_SELECTING_BRUSH to
                    SerializableBrushDefaults(
                        BarcodeSelectionBasicOverlay.DEFAULT_SELECTING_BRUSH
                    ).toJSONObject(),
                FIELD_SELECTED_BRUSH to
                    SerializableBrushDefaults(
                        BarcodeSelectionBasicOverlay.DEFAULT_SELECTED_BRUSH
                    ).toJSONObject()
            )
        }

        return SerializableWritableMap(JSONObject(map as Map<String, Map<String, JSONObject>>))
    }

    override fun toWritableMap(): WritableMap = writableMap {
        putString(
            FIELD_DEFAULT_STYLE,
            defaultStyle
        )
        putData(
            FIELD_STYLES,
            stylesMap(styles)
        )
        putString(
            FIELD_DEFAULT_STYLE,
            defaultStyle
        )
        putData(
            FIELD_TRACKED_BRUSH,
            SerializableBrushDefaults(
                BarcodeSelectionBasicOverlay.DEFAULT_TRACKED_BRUSH
            )
        )
        putData(
            FIELD_AIMED_BRUSH,
            SerializableBrushDefaults(
                BarcodeSelectionBasicOverlay.DEFAULT_AIMED_BRUSH
            )
        )
        putData(
            FIELD_SELECTING_BRUSH,
            SerializableBrushDefaults(
                BarcodeSelectionBasicOverlay.DEFAULT_SELECTING_BRUSH
            )
        )
        putData(
            FIELD_SELECTED_BRUSH,
            SerializableBrushDefaults(
                BarcodeSelectionBasicOverlay.DEFAULT_SELECTED_BRUSH
            )
        )
    }
}

class SerializableBarcodeSelectionTapSelectionDefaults(
    private val tapSelection: BarcodeSelectionTapSelection
) : SerializableData {

    companion object {
        private const val FIELD_DEFAULT_FREEZE_BEHAVIOUR = "defaultFreezeBehavior"
        private const val FIELD_DEFAULT_TAP_BEHAVIOUR = "defaultTapBehavior"
    }

    override fun toWritableMap(): WritableMap = writableMap {
        putString(FIELD_DEFAULT_FREEZE_BEHAVIOUR, tapSelection.freezeBehavior.toJson())
        putString(FIELD_DEFAULT_TAP_BEHAVIOUR, tapSelection.tapBehavior.toJson())
    }
}

class SerializableBarcodeSelectionAimerSelectionDefaults(
    private val aimerSelection: BarcodeSelectionAimerSelection
) : SerializableData {

    companion object {
        private const val FIELD_DEFAULT_SELECTION_STRATEGY = "defaultSelectionStrategy"
    }

    override fun toWritableMap(): WritableMap = writableMap {
        putString(FIELD_DEFAULT_SELECTION_STRATEGY, aimerSelection.selectionStrategy.toJson())
    }
}
