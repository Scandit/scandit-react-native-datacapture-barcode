/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

fileprivate extension BarcodeCaptureOverlay {
    static var defaultStyle: BarcodeCaptureOverlayStyle {
        return BarcodeCaptureOverlay(barcodeCapture:
                                        BarcodeCapture(context: nil, settings: BarcodeCaptureSettings())).style
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
        return ["DefaultBrush": BarcodeCaptureOverlay.defaultBrush.rntsdc_dictionary,
                "defaultStyle": BarcodeCaptureOverlay.defaultStyle.jsonString,
                "styles": [
                    BarcodeCaptureOverlayStyle.legacy.jsonString: [
                        "DefaultBrush": BarcodeCaptureOverlay(
                                barcodeCapture: BarcodeCapture(
                                context: nil,
                                settings: BarcodeCaptureSettings()),
                            with: BarcodeCaptureOverlayStyle.legacy
                        ).brush.rntsdc_dictionary
                    ],
                    BarcodeCaptureOverlayStyle.frame.jsonString: [
                        "DefaultBrush": BarcodeCaptureOverlay(
                                barcodeCapture: BarcodeCapture(
                                context: nil,
                                settings: BarcodeCaptureSettings()),
                            with: BarcodeCaptureOverlayStyle.frame
                        ).brush.rntsdc_dictionary
                    ]
                ]]
    }

    var barcodeCaptureSettings: [AnyHashable: Any] {
        let barcodeCaptureSettings = BarcodeCaptureSettings()
        return ["codeDuplicateFilter": Int(barcodeCaptureSettings.codeDuplicateFilter * 1000)]
    }
}
