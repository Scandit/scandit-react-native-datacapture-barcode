/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

// MARK: - Barcode Capture overlay with style explicitly set.
fileprivate extension BarcodeTrackingBasicOverlay {
    static var defaultStyle: BarcodeTrackingBasicOverlayStyle {
        return BarcodeTrackingBasicOverlayStyle.legacy
    }
}

extension ScanditDataCaptureBarcodeTracking {
    override func constantsToExport() -> [AnyHashable: Any]! {
        return ["Defaults": defaults]
    }
    
    var defaults: [String: Any] {
        return barcodeTrackingDefaults
    }
    
    var recommendedCameraSettings: [AnyHashable: Any] {
        return BarcodeTracking.recommendedCameraSettings.rntsdc_dictionary
    }
    
    var barcodeTrackingDefaults: [String: Any] {
        return ["RecommendedCameraSettings": recommendedCameraSettings,
                "BarcodeTrackingBasicOverlay": barcodeTrackingBasicOverlayDefaults]
    }
    
    var barcodeTrackingBasicOverlayDefaults: [String: Any] {
        return ["defaultStyle": BarcodeTrackingBasicOverlay.defaultStyle.jsonString,
                "Brushes": [
                    BarcodeTrackingBasicOverlayStyle.legacy.jsonString: BarcodeTrackingBasicOverlay.defaultBrush(forStyle: .legacy).rntsdc_dictionary,
                    BarcodeTrackingBasicOverlayStyle.frame.jsonString: BarcodeTrackingBasicOverlay.defaultBrush(forStyle: .frame).rntsdc_dictionary,
                    BarcodeTrackingBasicOverlayStyle.dot.jsonString: BarcodeTrackingBasicOverlay.defaultBrush(forStyle: .dot).rntsdc_dictionary
                ]
        ]
    }
}
