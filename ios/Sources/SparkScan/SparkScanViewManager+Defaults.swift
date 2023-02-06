/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

import ScanditBarcodeCapture
import ScanditDataCaptureCore

extension SparkScanViewManager {
    override func constantsToExport() -> [AnyHashable : Any]! {
        ["Defaults": defaults]
    }

    var defaults: [String: Any] {
        let defaultFeedback = SparkScanFeedback.default
        let settings = SparkScanSettings()
        let viewSettings = SparkScanViewSettings()
        return [
            "Feedback": [
                "success": defaultFeedback.success.jsonString,
                "error": defaultFeedback.error.jsonString
            ],
            "SparkScanSettings": [
                "codeDuplicateFilter": Int(settings.codeDuplicateFilter * 1000),
                "locationSelection": settings.locationSelection.jsonString,
                "singleBarcodeAutoDetection": settings.singleBarcodeAutoDetection
            ],
            "SparkScanView": [
                "brush": SparkScanView.defaultBrush.rntsdc_dictionary,
                "shouldShowScanAreaGuides": false,
                "torchButtonVisible": SparkScanViewDefaults.defaultTorchButtonVisibility,
                "scanningBehaviorButtonVisible": SparkScanViewDefaults.defaultScanningBehaviorButtonVisibility,
                "handModeButtonVisible": SparkScanViewDefaults.defaultHandModeButtonVisibility,
                "barcodeCountButtonVisible": SparkScanViewDefaults.defaultBarcodeCountButtonVisibility,
                "fastFindButtonVisible": SparkScanViewDefaults.defaultFastFindButtonVisibility,
                "targetModeButtonVisible": SparkScanViewDefaults.defaultTargetModeButtonVisibility,
                "soundModeButtonVisible": SparkScanViewDefaults.defaultSoundModeButtonVisibility,
                "hapticModeButtonVisible": SparkScanViewDefaults.defaultHapticModeButtonVisibility,
                "stopCapturingText": SparkScanViewDefaults.defaultStopCapturingText as Any,
                "startCapturingText": SparkScanViewDefaults.defaultStopCapturingText as Any,
                "resumeCapturingText": SparkScanViewDefaults.defaultResumeCapturingText as Any,
                "scanningCapturingText": SparkScanViewDefaults.defaultScanningCapturingText as Any,
                "captureButtonBackgroundColor": SparkScanViewDefaults.defaultCaptureButtonBackgroundColor.sdcHexString as Any,
                "captureButtonActiveBackgroundColor": SparkScanViewDefaults.defaultCaptureButtonActiveBackgroundColor.sdcHexString as Any,
                "captureButtonTintColor": SparkScanViewDefaults.defaultCaptureButtonTintColor.sdcHexString as Any,
                "toolbarBackgroundColor": SparkScanViewDefaults.defaultToolbarBackgroundColor.sdcHexString as Any,
                "toolbarIconActiveTintColor": SparkScanViewDefaults.defaultToolbarIconActiveTintColor.sdcHexString as Any,
                "toolbarIconInactiveTintColor": SparkScanViewDefaults.defaultToolbarIconInactiveTintColor.sdcHexString as Any,
                "SparkScanViewSettings": viewSettings.jsonString
            ]
        ]
    }
}
