/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

// MARK: - Barcode Capture overlay with style explicitly set.
fileprivate extension BarcodeSelectionBasicOverlay {
    static var defaultStyle: BarcodeSelectionBasicOverlayStyle {
        return BarcodeSelectionBasicOverlayStyle.frame
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
                "defaultStyle": BarcodeSelectionBasicOverlay.defaultStyle.jsonString,
                "styles": [
                    BarcodeSelectionBasicOverlayStyle.dot.jsonString: [
                        "DefaultTrackedBrush": BarcodeSelectionBasicOverlay.defaultTrackedBrush(forStyle: .dot).rntsdc_dictionary,
                        "DefaultAimedBrush": BarcodeSelectionBasicOverlay.defaultAimedBrush(forStyle: .dot).rntsdc_dictionary,
                        "DefaultSelectedBrush": BarcodeSelectionBasicOverlay.defaultSelectedBrush(forStyle: .dot).rntsdc_dictionary,
                        "DefaultSelectingBrush": BarcodeSelectionBasicOverlay.defaultSelectingBrush(forStyle: .dot).rntsdc_dictionary
                    ],
                    BarcodeSelectionBasicOverlayStyle.frame.jsonString: [
                        "DefaultTrackedBrush": BarcodeSelectionBasicOverlay.defaultTrackedBrush(forStyle: .frame).rntsdc_dictionary,
                        "DefaultAimedBrush": BarcodeSelectionBasicOverlay.defaultAimedBrush(forStyle: .frame).rntsdc_dictionary,
                        "DefaultSelectedBrush": BarcodeSelectionBasicOverlay.defaultSelectedBrush(forStyle: .frame).rntsdc_dictionary,
                        "DefaultSelectingBrush": BarcodeSelectionBasicOverlay.defaultSelectingBrush(forStyle: .frame).rntsdc_dictionary
                    ]
                ]
                ]
    }

    var barcodeSelectionSettings: [AnyHashable: Any] {
        let settings = BarcodeSelectionSettings()
        return ["codeDuplicateFilter": Int(settings.codeDuplicateFilter * 1000),
                "singleBarcodeAutoDetection": settings.singleBarcodeAutoDetection,
                "selectionType": settings.selectionType.jsonString]
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
