/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.data.defaults

import android.content.Context
import com.facebook.react.bridge.WritableMap
import com.scandit.datacapture.barcode.count.capture.BarcodeCountSettings
import com.scandit.datacapture.barcode.count.feedback.BarcodeCountFeedback
import com.scandit.datacapture.barcode.count.ui.view.BarcodeCountToolbarDefaults
import com.scandit.datacapture.barcode.count.ui.view.BarcodeCountView
import com.scandit.datacapture.barcode.count.ui.view.toJson
import com.scandit.datacapture.barcode.filter.capture.BarcodeFilterSettings
import com.scandit.datacapture.reactnative.core.data.SerializableData
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableBrushDefaults
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableCameraSettingsDefaults
import com.scandit.datacapture.reactnative.core.utils.putData
import com.scandit.datacapture.reactnative.core.utils.writableArray
import com.scandit.datacapture.reactnative.core.utils.writableMap

internal class SerializableBarcodeCountDefaults(
    private val recommendedCameraSettings: SerializableCameraSettingsDefaults,
    private val barcodeCountSettings: SerializableBarcodeCountSettingsDefaults,
    private val barcodeCountFeedback: BarcodeCountFeedback,
    private val barcodeCountView: SerializableBarcodeCountViewDefaults,
) : SerializableData {

    override fun toWritableMap(): WritableMap = writableMap {
        putData(FIELD_RECOMMENDED_CAMERA_SETTINGS, recommendedCameraSettings)
        putData(FIELD_BARCODE_COUNT_SETTINGS, barcodeCountSettings)
        putString(FIELD_BARCODE_COUNT_FEEDBACK, barcodeCountFeedback.toJson())
        putData(FIELD_BARCODE_COUNT_VIEW, barcodeCountView)
    }

    companion object {
        private const val FIELD_RECOMMENDED_CAMERA_SETTINGS = "RecommendedCameraSettings"
        private const val FIELD_BARCODE_COUNT_SETTINGS = "BarcodeCountSettings"
        private const val FIELD_BARCODE_COUNT_FEEDBACK = "BarcodeCountFeedback"
        private const val FIELD_BARCODE_COUNT_VIEW = "BarcodeCountView"
    }
}

internal data class SerializableBarcodeCountViewDefaults(
    private val context: Context,
    private val barcodeCountView: BarcodeCountView
) : SerializableData {
    override fun toWritableMap(): WritableMap = writableMap {
        putString(FIELD_STYLE, barcodeCountView.style.toJson())
        putBoolean(
            FIELD_SHOULD_SHOW_USER_GUIDANCE_VIEW, barcodeCountView.shouldShowUserGuidanceView
        )
        putBoolean(FIELD_SHOULD_SHOW_LIST_BUTTON, barcodeCountView.shouldShowListButton)
        putBoolean(FIELD_SHOULD_SHOW_EXIT_BUTTON, barcodeCountView.shouldShowExitButton)
        putBoolean(FIELD_SHOULD_SHOW_SHUTTER_BUTTON, barcodeCountView.shouldShowShutterButton)
        putBoolean(FIELD_SHOULD_SHOW_HINTS, barcodeCountView.shouldShowHints)
        putBoolean(
            FIELD_SHOULD_CLEAR_HIGHLIGHTS_BUTTON, barcodeCountView.shouldShowClearHighlightsButton
        )
        putBoolean(
            FIELD_SHOULD_SHOW_SINGLE_SCAN_BUTTON, barcodeCountView.shouldShowSingleScanButton
        )
        putBoolean(
            FIELD_SHOULD_SHOW_FLOATING_SHUTTER_BUTTON,
            barcodeCountView.shouldShowFloatingShutterButton
        )
        putBoolean(FIELD_SHOULD_SHOW_TOOLBAR, barcodeCountView.shouldShowToolbar)
        putBoolean(FIELD_SHOULD_SHOW_SCAN_AREA_GUIDES, barcodeCountView.shouldShowScanAreaGuides)
        putData(
            FIELD_RECOGNIZED_BRUSH,
            SerializableBrushDefaults(
                BarcodeCountView.defaultRecognizedBrush()
            )
        )
        putData(
            FIELD_UNRECOGNIZED_BRUSH,
            SerializableBrushDefaults(
                BarcodeCountView.defaultUnrecognizedBrush()
            )
        )
        putData(
            FIELD_NOT_IN_LIST_BRUSH,
            SerializableBrushDefaults(
                BarcodeCountView.defaultNotInListBrush()
            )
        )
        putBoolean(FIELD_SHOULD_SHOW_SCAN_AREA_GUIDES, barcodeCountView.shouldShowScanAreaGuides)
        putBoolean(
            FIELD_SHOULD_SHOW_SINGLE_SCAN_BUTTON,
            barcodeCountView.shouldShowSingleScanButton
        )
        putBoolean(FIELD_SHOULD_SHOW_TOOLBAR, barcodeCountView.shouldShowToolbar)
        putString(
            FIELD_CLEAR_HIGHLIGHT_BUTTON_TEXT,
            barcodeCountView.getClearHighlightsButtonText()
        )
        putString(FIELD_EXIT_BUTTON_TEXT, barcodeCountView.getExitButtonText())
        putString(
            FIELD_TEXT_FOR_UNSCANNED_BARCODE_DETECTED_HINT,
            barcodeCountView.getTextForUnrecognizedBarcodesDetectedHint()
        )
        putString(
            FIELD_TEXT_FOR_TAP_SHUTTER_TO_SCAN_HINT,
            barcodeCountView.getTextForTapShutterToScanHint()
        )
        putString(FIELD_TEXT_FOR_SCANNING_HINT, barcodeCountView.getTextForScanningHint())
        putString(
            FIELD_TEXT_MOVE_CLOSER_AND_RESCAN_HINT,
            barcodeCountView.getTextForMoveCloserAndRescanHint()
        )
        putString(
            FIELD_TEXT_MOVE_FURTHER_AND_RESCAN_HINT,
            barcodeCountView.getTextForMoveFurtherAndRescanHint()
        )
        putData(FIELD_TOOLBAR_SETTINGS, SerializableBarcodeCountToolbarSettingsDefaults(context))
        putString(
            FIELD_LIST_BUTTON_CONTENT_DESCRIPTION,
            barcodeCountView.getListButtonContentDescription()
        )
        putString(
            FIELD_EXIT_BUTTON_CONTENT_DESCRIPTION,
            barcodeCountView.getExitButtonContentDescription()
        )
        putString(
            FIELD_SHUTTER_BUTTON_CONTENT_DESCRIPTION,
            barcodeCountView.getShutterButtonContentDescription()
        )
        putString(
            FIELD_FLOATING_SHUTTER_BUTTON_CONTENT_DESCRIPTION,
            barcodeCountView.getFloatingShutterButtonContentDescription()
        )
        putString(
            FIELD_CLEAR_HIGHLIGHTS_BUTTON_CONTENT_DESCRIPTION,
            barcodeCountView.getClearHighlightsButtonContentDescription()
        )
        putString(
            FIELD_SINGLE_SCAN_BUTTON_CONTENT_DESCRIPTION,
            barcodeCountView.getSingleScanButtonContentDescription()
        )
    }

    companion object {
        private const val FIELD_STYLE = "style"
        private const val FIELD_SHOULD_SHOW_USER_GUIDANCE_VIEW = "shouldShowUserGuidanceView"
        private const val FIELD_SHOULD_SHOW_LIST_BUTTON = "shouldShowListButton"
        private const val FIELD_SHOULD_SHOW_EXIT_BUTTON = "shouldShowExitButton"
        private const val FIELD_SHOULD_SHOW_SHUTTER_BUTTON = "shouldShowShutterButton"
        private const val FIELD_SHOULD_SHOW_HINTS = "shouldShowHints"
        private const val FIELD_SHOULD_CLEAR_HIGHLIGHTS_BUTTON = "shouldShowClearHighlightsButton"
        private const val FIELD_SHOULD_SHOW_FLOATING_SHUTTER_BUTTON =
            "shouldShowFloatingShutterButton"
        private const val FIELD_NOT_IN_LIST_BRUSH = "notInListBrush"
        private const val FIELD_RECOGNIZED_BRUSH = "recognizedBrush"
        private const val FIELD_UNRECOGNIZED_BRUSH = "unrecognizedBrush"
        private const val FIELD_SHOULD_SHOW_SCAN_AREA_GUIDES = "shouldShowScanAreaGuides"
        private const val FIELD_SHOULD_SHOW_SINGLE_SCAN_BUTTON = "shouldShowSingleScanButton"
        private const val FIELD_SHOULD_SHOW_TOOLBAR = "shouldShowToolbar"
        private const val FIELD_CLEAR_HIGHLIGHT_BUTTON_TEXT = "clearHighlightsButtonText"
        private const val FIELD_EXIT_BUTTON_TEXT = "exitButtonText"
        private const val FIELD_TEXT_FOR_UNSCANNED_BARCODE_DETECTED_HINT =
            "textForUnrecognizedBarcodesDetectedHint"
        private const val FIELD_TEXT_FOR_TAP_SHUTTER_TO_SCAN_HINT = "textForTapShutterToScanHint"
        private const val FIELD_TEXT_FOR_SCANNING_HINT = "textForScanningHint"
        private const val FIELD_TEXT_MOVE_CLOSER_AND_RESCAN_HINT = "textForMoveCloserAndRescanHint"
        private const val FIELD_TEXT_MOVE_FURTHER_AND_RESCAN_HINT =
            "textForMoveFurtherAndRescanHint"
        private const val FIELD_TOOLBAR_SETTINGS = "toolbarSettings"
        private const val FIELD_LIST_BUTTON_CONTENT_DESCRIPTION = "listButtonContentDescription"
        private const val FIELD_EXIT_BUTTON_CONTENT_DESCRIPTION = "exitButtonContentDescription"
        private const val FIELD_SHUTTER_BUTTON_CONTENT_DESCRIPTION =
            "shutterButtonContentDescription"
        private const val FIELD_FLOATING_SHUTTER_BUTTON_CONTENT_DESCRIPTION =
            "floatingShutterButtonContentDescription"
        private const val FIELD_CLEAR_HIGHLIGHTS_BUTTON_CONTENT_DESCRIPTION =
            "clearHighlightsButtonContentDescription"
        private const val FIELD_SINGLE_SCAN_BUTTON_CONTENT_DESCRIPTION =
            "singleScanButtonContentDescription"
    }
}

internal data class SerializableBarcodeCountSettingsDefaults(
    private val barcodeCountSettings: BarcodeCountSettings
) : SerializableData {

    override fun toWritableMap(): WritableMap = writableMap {
        putData(
            FIELD_BARCODE_FILTER_SETTINGS,
            SerializableBarcodeFilterSettingsDefaults(
                barcodeCountSettings.filterSettings
            )
        )
        putBoolean(
            FIELD_EXPECTS_ONLY_UNIQUE_BARCODES, barcodeCountSettings.expectsOnlyUniqueBarcodes
        )
    }

    companion object {
        private const val FIELD_EXPECTS_ONLY_UNIQUE_BARCODES = "expectOnlyUniqueBarcodes"
        private const val FIELD_BARCODE_FILTER_SETTINGS = "BarcodeFilterSettings"
    }
}

internal class SerializableBarcodeFilterSettingsDefaults(
    private val barcodeFilterSettings: BarcodeFilterSettings
) : SerializableData {
    override fun toWritableMap(): WritableMap = writableMap {
        putBoolean(FIELD_EXCLUDE_EAN13, barcodeFilterSettings.excludeEan13)
        putBoolean(FIELD_EXCLUDE_UPCA, barcodeFilterSettings.excludeUpca)
        putString(FIELD_EXCLUDE_REGEX, barcodeFilterSettings.excludedCodesRegex)
        putMap(
            FIELD_EXCLUDED_SYMBOL_COUNTS,
            writableMap { barcodeFilterSettings.excludedSymbolCounts })
        putArray(
            FIELD_EXCLUDED_SYMBOLOGIES,
            writableArray { barcodeFilterSettings.excludedSymbologies })
    }

    companion object {
        private const val FIELD_EXCLUDE_EAN13 = "excludeEan13"
        private const val FIELD_EXCLUDE_UPCA = "excludeUpca"
        private const val FIELD_EXCLUDE_REGEX = "excludedCodesRegex"
        private const val FIELD_EXCLUDED_SYMBOL_COUNTS = "excludedSymbolCounts"
        private const val FIELD_EXCLUDED_SYMBOLOGIES = "excludedSymbologies"
    }
}

internal class SerializableBarcodeCountToolbarSettingsDefaults(
    private val context: Context,
    private val toolbarDefaults: BarcodeCountToolbarDefaults = BarcodeCountToolbarDefaults()
) : SerializableData {
    override fun toWritableMap(): WritableMap = writableMap {
        putString(FIELD_AUDIO_ON_BUTTON_TEXT, toolbarDefaults.audioOnButtonText(context))
        putString(FIELD_AUDIO_OFF_BUTTON_TEXT, toolbarDefaults.audioOffButtonText(context))
        putString(
            FIELD_AUDIO_BUTTON_CONTENT_DESCRIPTION,
            toolbarDefaults.audioButtonContentDescription(context)
        )
        putString(FIELD_VIBRATION_ON_BUTTON_TEXT, toolbarDefaults.vibrationOnButtonText(context))
        putString(FIELD_VIBRATION_OFF_BUTTON_TEXT, toolbarDefaults.vibrationOffButtonText(context))
        putString(
            FIELD_VIBRATION_BUTTON_CONTENT_DESCRIPTION,
            toolbarDefaults.vibrationButtonContentDescription(context)
        )
        putString(FIELD_STRAP_MODE_ON_BUTTON_TEXT, toolbarDefaults.strapModeOnButtonText(context))
        putString(FIELD_STRAP_MODE_OFF_BUTTON_TEXT, toolbarDefaults.strapModeOffButtonText(context))
        putString(
            FIELD_STRAP_MODE_BUTTON_CONTENT_DESCRIPTION,
            toolbarDefaults.strapModeButtonContentDescription(context)
        )
        putString(
            FIELD_COLOR_SCHEME_ON_BUTTON_TEXT,
            toolbarDefaults.colorSchemeOnButtonText(context)
        )
        putString(
            FIELD_COLOR_SCHEME_OFF_BUTTON_TEXT,
            toolbarDefaults.colorSchemeOffButtonText(context)
        )
        putString(
            FIELD_COLOR_SCHEME_BUTTON_CONTENT_DESCRIPTION,
            toolbarDefaults.colorSchemeButtonContentDescription(context)
        )
    }

    companion object {
        private const val FIELD_AUDIO_ON_BUTTON_TEXT = "audioOnButtonText"
        private const val FIELD_AUDIO_OFF_BUTTON_TEXT = "audioOffButtonText"
        private const val FIELD_AUDIO_BUTTON_CONTENT_DESCRIPTION = "audioButtonContentDescription"
        private const val FIELD_VIBRATION_ON_BUTTON_TEXT = "vibrationOnButtonText"
        private const val FIELD_VIBRATION_OFF_BUTTON_TEXT = "vibrationOffButtonText"
        private const val FIELD_VIBRATION_BUTTON_CONTENT_DESCRIPTION =
            "vibrationButtonContentDescription"
        private const val FIELD_STRAP_MODE_ON_BUTTON_TEXT = "strapModeOnButtonText"
        private const val FIELD_STRAP_MODE_OFF_BUTTON_TEXT = "strapModeOffButtonText"
        private const val FIELD_STRAP_MODE_BUTTON_CONTENT_DESCRIPTION =
            "strapModeButtonContentDescription"
        private const val FIELD_COLOR_SCHEME_ON_BUTTON_TEXT = "colorSchemeOnButtonText"
        private const val FIELD_COLOR_SCHEME_OFF_BUTTON_TEXT = "colorSchemeOffButtonText"
        private const val FIELD_COLOR_SCHEME_BUTTON_CONTENT_DESCRIPTION =
            "colorSchemeButtonContentDescription"
    }
}
