/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2020- Scandit AG. All rights reserved.
*/

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

extension ScanditDataCaptureBarcode {

    @objc
    func constantsToExport() -> [AnyHashable: Any]! {
        return ["Defaults": defaults]
    }

    var defaults: [String: Any] {
        return ["SymbologyDescriptions": symbologyDescriptions,
                "SymbologySettings": symbologySettings,
                "CompositeTypeDescriptions": compositeTypeDescriptions ]
    }

    var symbologyDescriptions: [String] {
        return SymbologyDescription.all.map {$0.jsonString}
    }

    var compositeTypeDescriptions: [String] {
        return CompositeTypeDescription.all.map {$0.jsonString}
    }

    var symbologySettings: [String: String] {
        let barcodeCaptureSettings = BarcodeCaptureSettings()

        var symbologySettings = [String: String]()

        for symbologyDescription in SymbologyDescription.all {
            symbologySettings[symbologyDescription.identifier] =
                barcodeCaptureSettings.settings(for: symbologyDescription.symbology).jsonString
        }

        return symbologySettings
    }
}
