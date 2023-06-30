/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

// MARK: - Barcode Capture overlay with style explicitly set.
fileprivate extension BarcodeCaptureOverlay {
    static var defaultStyle: BarcodeCaptureOverlayStyle {
        return BarcodeCaptureOverlayStyle.legacy
    }
}

extension ScanditDataCaptureBarcodeCapture {

    override func constantsToExport() -> [AnyHashable: Any]! {
        return ["Defaults": defaults]
    }

    var defaults: [String: Any] {
        return barcodeCaptureDefaults
    }

    var recommendedCameraSettings: [AnyHashable: Any] {
        return BarcodeCapture.recommendedCameraSettings.rntsdc_dictionary
    }

    var barcodeCaptureDefaults: [String: Any] {
        return ["RecommendedCameraSettings": recommendedCameraSettings,
                "BarcodeCaptureOverlay": barcodeCaptureOverlayDefaults,
                "BarcodeCaptureSettings": barcodeCaptureSettings]
    }

    var barcodeCaptureOverlayDefaults: [String: Any] {
        let defaultStyle = BarcodeCaptureOverlay.defaultStyle
        return ["DefaultBrush": BarcodeCaptureOverlay.defaultBrush(forStyle: defaultStyle).rntsdc_dictionary,
                "defaultStyle": defaultStyle.jsonString,
                "Brushes": [
                    BarcodeCaptureOverlayStyle.legacy.jsonString: BarcodeCaptureOverlay.defaultBrush(forStyle: BarcodeCaptureOverlayStyle.legacy).rntsdc_dictionary,
                    BarcodeCaptureOverlayStyle.frame.jsonString: BarcodeCaptureOverlay.defaultBrush(forStyle: BarcodeCaptureOverlayStyle.frame).rntsdc_dictionary
                ]
        ]
    }

    var barcodeCaptureSettings: [AnyHashable: Any] {
        let settings = BarcodeCaptureSettings()
        return ["codeDuplicateFilter": Int(settings.codeDuplicateFilter * 1000)]
    }
}
