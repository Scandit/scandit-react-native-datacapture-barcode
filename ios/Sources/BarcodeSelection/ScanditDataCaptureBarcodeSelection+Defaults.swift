/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

fileprivate extension BarcodeSelectionBasicOverlay {
    static var defaultStyle: BarcodeSelectionBasicOverlayStyle {
        return BarcodeSelectionBasicOverlay(barcodeSelection:
                    BarcodeSelection(context: nil,
                                     settings: BarcodeSelectionSettings())).style
    }

    static var dotStyle: BarcodeSelectionBasicOverlay {
            return BarcodeSelectionBasicOverlay(
                    barcodeSelection: BarcodeSelection(
                    context: nil,
                    settings: BarcodeSelectionSettings()),
                    style: BarcodeSelectionBasicOverlayStyle.dot
            )
        }

    static var frameStyle: BarcodeSelectionBasicOverlay {
        return BarcodeSelectionBasicOverlay(
                barcodeSelection: BarcodeSelection(
                context: nil,
                settings: BarcodeSelectionSettings()),
                style: BarcodeSelectionBasicOverlayStyle.frame
        )
    }
}

extension ScanditDataCaptureBarcodeSelection {

    override func constantsToExport() -> [AnyHashable: Any]! {
        return ["Defaults": defaults]
    }

    var defaults: [String: Any] {
        return barcodeSelectionDefaults
    }

    var barcodeSelectionDefaults: [String: Any] {
        return ["RecommendedCameraSettings": recommendedCameraSettings,
                "Feedback": feedback,
                "BarcodeSelectionSettings": barcodeSelectionSettings,
                "BarcodeSelectionTapSelection": tapSelection,
                "BarcodeSelectionAimerSelection": aimerSelection,
                "BarcodeSelectionBasicOverlay": barcodeSelectionBasicOverlayDefaults]
    }

    var recommendedCameraSettings: [AnyHashable: Any] {
        return BarcodeSelection.recommendedCameraSettings.rntsdc_dictionary
    }

    var feedback: String {
        return BarcodeSelectionFeedback.default.jsonString
    }

    var barcodeSelectionBasicOverlayDefaults: [String: Any] {
        return ["DefaultTrackedBrush": BarcodeSelectionBasicOverlay.defaultTrackedBrush.rntsdc_dictionary,
                "DefaultAimedBrush": BarcodeSelectionBasicOverlay.defaultAimedBrush.rntsdc_dictionary,
                "DefaultSelectedBrush": BarcodeSelectionBasicOverlay.defaultSelectedBrush.rntsdc_dictionary,
                "DefaultSelectingBrush": BarcodeSelectionBasicOverlay.defaultSelectingBrush.rntsdc_dictionary,
                "defaultStyle": BarcodeSelectionBasicOverlay.defaultStyle.jsonString,
                "styles": [
                    BarcodeSelectionBasicOverlayStyle.dot.jsonString: [
                        "DefaultTrackedBrush": BarcodeSelectionBasicOverlay.dotStyle.trackedBrush.rntsdc_dictionary,
                        "DefaultAimedBrush": BarcodeSelectionBasicOverlay.dotStyle.aimedBrush.rntsdc_dictionary,
                        "DefaultSelectedBrush": BarcodeSelectionBasicOverlay.dotStyle.selectedBrush.rntsdc_dictionary,
                        "DefaultSelectingBrush": BarcodeSelectionBasicOverlay.dotStyle.selectingBrush.rntsdc_dictionary,
                    ],
                    BarcodeSelectionBasicOverlayStyle.frame.jsonString: [
                        "DefaultTrackedBrush": BarcodeSelectionBasicOverlay.frameStyle.trackedBrush.rntsdc_dictionary,
                        "DefaultAimedBrush": BarcodeSelectionBasicOverlay.frameStyle.aimedBrush.rntsdc_dictionary,
                        "DefaultSelectedBrush": BarcodeSelectionBasicOverlay.frameStyle.selectedBrush.rntsdc_dictionary,
                        "DefaultSelectingBrush": BarcodeSelectionBasicOverlay.frameStyle.selectingBrush.rntsdc_dictionary
                    ]
                ]
                ]
    }

    var barcodeSelectionSettings: [AnyHashable: Any] {
        let barcodeSelectionSettings = BarcodeSelectionSettings()
        return ["codeDuplicateFilter": Int(barcodeSelectionSettings.codeDuplicateFilter * 1000),
                "singleBarcodeAutoDetection": barcodeSelectionSettings.singleBarcodeAutoDetection,
                "selectionType": barcodeSelectionSettings.selectionType.jsonString]
    }

    var tapSelection: [AnyHashable: Any] {
        let selection = BarcodeSelectionTapSelection()
        return ["defaultFreezeBehavior": selection.freezeBehavior.jsonString,
                "defaultTapBehavior": selection.tapBehavior.jsonString]
    }

    var aimerSelection: [AnyHashable: Any] {
        return ["defaultSelectionStrategy": BarcodeSelectionAimerSelection().selectionStrategy.jsonString]
    }
}
