/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.data.defaults

import com.facebook.react.bridge.WritableMap
import com.scandit.datacapture.barcode.spark.capture.SparkScanSettings
import com.scandit.datacapture.barcode.spark.capture.SparkScanViewDefaults
import com.scandit.datacapture.barcode.spark.feedback.SparkScanFeedback
import com.scandit.datacapture.barcode.spark.ui.SparkScanViewSettings
import com.scandit.datacapture.reactnative.core.data.SerializableData
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableBrushDefaults
import com.scandit.datacapture.reactnative.core.utils.putData
import com.scandit.datacapture.reactnative.core.utils.writableMap

internal class SerializableSparkScanDefaults(
    private var sparkScanFeedbackDefaults: SerializableSparkScanFeedbackDefaults,
    private val sparkScanViewDefaults: SerializableSparkScanViewDefaults,
    private val sparkScanSettingsDefaults: SerializableSparkScanSettingsDefaults
) : SerializableData {

    override fun toWritableMap(): WritableMap = writableMap {
        putData(FIELD_SPARK_SCAN_FEEDBACK, sparkScanFeedbackDefaults)
        putData(FIELD_SPARK_SCAN_SETTINGS, sparkScanSettingsDefaults)
        putData(FIELD_SPARK_SCAN_VIEW, sparkScanViewDefaults)
    }

    companion object {
        private const val FIELD_SPARK_SCAN_FEEDBACK = "Feedback"
        private const val FIELD_SPARK_SCAN_SETTINGS = "SparkScanSettings"
        private const val FIELD_SPARK_SCAN_VIEW = "SparkScanView"
    }
}

internal class SerializableSparkScanFeedbackDefaults(
    private val feedback: SparkScanFeedback
) : SerializableData {
    override fun toWritableMap(): WritableMap = writableMap {
        putString(FIELD_SUCCESS_FEEDBACK, feedback.success.toJson())
        putString(FIELD_ERROR_FEEDBACK, feedback.error.toJson())
    }

    companion object {
        private const val FIELD_SUCCESS_FEEDBACK = "success"
        private const val FIELD_ERROR_FEEDBACK = "error"
    }
}

internal class SerializableSparkScanSettingsDefaults(
    private val sparkScanSettings: SparkScanSettings
) : SerializableData {
    override fun toWritableMap(): WritableMap = writableMap {
        putInt(
            FIELD_CODE_DUPLICATE_FILTER,
            sparkScanSettings.codeDuplicateFilter.asMillis().toInt()
        )
        putString(
            FIELD_LOCATION_SELECTION,
            sparkScanSettings.locationSelection?.toJson()
        )
        putBoolean(
            FIELD_SINGLE_BARCODE_AUTODETECTION,
            sparkScanSettings.singleBarcodeAutoDetection
        )
    }

    companion object {
        private const val FIELD_CODE_DUPLICATE_FILTER = "codeDuplicateFilter"
        private const val FIELD_LOCATION_SELECTION = "locationSelection"
        private const val FIELD_SINGLE_BARCODE_AUTODETECTION = "singleBarcodeAutoDetection"
    }
}

internal class SerializableSparkScanViewDefaults(
    private val viewSettings: SparkScanViewSettings
) : SerializableData {

    override fun toWritableMap(): WritableMap = writableMap {
        // Set this to false for now.
        putBoolean(FIELD_SHOULD_SHOW_SCAN_AREA_GUIDES, false)
        putData(
            FIELD_BRUSH,
            SerializableBrushDefaults(SparkScanViewDefaults.defaultBrush)
        )
        putBoolean(FIELD_TORCH_BUTTON_VISIBLE, SparkScanViewDefaults.defaultTorchButtonVisible)
        putBoolean(
            FIELD_SCANNING_BEHAVIOR_BUTTON_VISIBLE,
            SparkScanViewDefaults.defaultScanningBehaviorButtonVisible
        )
        putBoolean(
            FIELD_HAND_MODE_BUTTON_VISIBLE,
            SparkScanViewDefaults.defaultHandModeButtonVisible
        )
        putBoolean(
            FIELD_BARCODE_COUNT_BUTTON_VISIBLE,
            SparkScanViewDefaults.defaultBarcodeCountButtonVisible
        )
        putBoolean(
            FIELD_FAST_FIND_BUTTON_VISIBLE,
            SparkScanViewDefaults.defaultFastFindButtonVisible
        )
        putBoolean(
            FIELD_TARGET_MODE_BUTTON_VISIBLE,
            SparkScanViewDefaults.defaultTargetModeButtonVisible
        )
        putBoolean(
            FIELD_SOUND_MODE_BUTTON_VISIBLE,
            SparkScanViewDefaults.defaultSoundModeButtonVisible
        )
        putBoolean(
            FIELD_HAPTIC_MODE_BUTTON_VISIBLE,
            SparkScanViewDefaults.defaultHapticModeButtonVisible
        )
        putString(FIELD_STOP_CAPTURING_TEXT, SparkScanViewDefaults.defaultStopCapturingText)
        putString(FIELD_START_CAPTURING_TEXT, SparkScanViewDefaults.defaultStartCapturingText)
        putString(FIELD_RESUME_CAPTURING_TEXT, SparkScanViewDefaults.defaultResumeCapturingText)
        putString(FIELD_SCANNING_CAPTURING_TEXT, SparkScanViewDefaults.defaultScanningCapturingText)
        SparkScanViewDefaults.defaultCaptureButtonActiveBackgroundColor?.let {
            putInt(FIELD_CAPTURE_BUTTON_ACTIVE_BACKGROUND_COLOR, it)
        }
        SparkScanViewDefaults.defaultCaptureButtonBackgroundColor?.let {
            putInt(FIELD_CAPTURE_BUTTON_BACKGROUND_COLOR, it)
        }
        SparkScanViewDefaults.defaultCaptureButtonTintColor?.let {
            putInt(FIELD_CAPTURE_BUTTON_TINT_COLOR, it)
        }
        SparkScanViewDefaults.defaultToolbarBackgroundColor?.let {
            putInt(FIELD_TOOLBAR_BACKGROUND_COLOR, it)
        }
        SparkScanViewDefaults.defaultToolbarIconActiveTintColor?.let {
            putInt(FIELD_TOOLBAR_ICON_ACTIVE_TINT_COLOR, it)
        }
        SparkScanViewDefaults.defaultToolbarIconInactiveTintColor?.let {
            putInt(FIELD_TOOLBAR_ICON_INACTIVE_TINT_COLOR, it)
        }
        putString(FIELD_SPARK_SCAN_VIEW_SETTINGS, viewSettings.toJson())
    }

    companion object {
        private const val FIELD_SHOULD_SHOW_SCAN_AREA_GUIDES = "shouldShowScanAreaGuides"
        private const val FIELD_BRUSH = "brush"
        private const val FIELD_TORCH_BUTTON_VISIBLE = "torchButtonVisible"
        private const val FIELD_SCANNING_BEHAVIOR_BUTTON_VISIBLE = "scanningBehaviorButtonVisible"
        private const val FIELD_HAND_MODE_BUTTON_VISIBLE = "handModeButtonVisible"
        private const val FIELD_BARCODE_COUNT_BUTTON_VISIBLE = "barcodeCountButtonVisible"
        private const val FIELD_FAST_FIND_BUTTON_VISIBLE = "fastFindButtonVisible"
        private const val FIELD_TARGET_MODE_BUTTON_VISIBLE = "targetModeButtonVisible"
        private const val FIELD_SOUND_MODE_BUTTON_VISIBLE = "soundModeButtonVisible"
        private const val FIELD_HAPTIC_MODE_BUTTON_VISIBLE = "hapticModeButtonVisible"
        private const val FIELD_STOP_CAPTURING_TEXT = "stopCapturingText"
        private const val FIELD_START_CAPTURING_TEXT = "stopCapturingText"
        private const val FIELD_RESUME_CAPTURING_TEXT = "resumeCapturingText"
        private const val FIELD_SCANNING_CAPTURING_TEXT = "scanningCapturingText"
        private const val FIELD_CAPTURE_BUTTON_ACTIVE_BACKGROUND_COLOR =
            "captureButtonActiveBackgroundColor"
        private const val FIELD_CAPTURE_BUTTON_BACKGROUND_COLOR = "captureButtonBackgroundColor"
        private const val FIELD_CAPTURE_BUTTON_TINT_COLOR = "captureButtonTintColor"
        private const val FIELD_TOOLBAR_BACKGROUND_COLOR = "toolbarBackgroundColor"
        private const val FIELD_TOOLBAR_ICON_ACTIVE_TINT_COLOR = "toolbarIconActiveTintColor"
        private const val FIELD_TOOLBAR_ICON_INACTIVE_TINT_COLOR = "toolbarIconInactiveTintColor"
        private const val FIELD_SPARK_SCAN_VIEW_SETTINGS = "SparkScanViewSettings"
    }
}
