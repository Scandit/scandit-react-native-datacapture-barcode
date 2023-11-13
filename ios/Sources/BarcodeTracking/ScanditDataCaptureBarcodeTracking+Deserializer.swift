/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

extension ScanditDataCaptureBarcodeTracking {
    func registerDeserializer() {
        let barcodeTrackingDeserializer = BarcodeTrackingDeserializer()
        barcodeTrackingDeserializer.delegate = self

        ScanditDataCaptureCore.register(modeDeserializer: barcodeTrackingDeserializer)
    }
}

extension ScanditDataCaptureBarcodeTracking: BarcodeTrackingDeserializerDelegate {
    func barcodeTrackingDeserializer(_ deserializer: BarcodeTrackingDeserializer,
                                     didStartDeserializingMode mode: BarcodeTracking,
                                     from jsonValue: JSONValue) {
        // Empty on purpose
    }

    func barcodeTrackingDeserializer(_ deserializer: BarcodeTrackingDeserializer,
                                     didFinishDeserializingMode mode: BarcodeTracking,
                                     from jsonValue: JSONValue) {
        if jsonValue.containsKey("enabled") {
            mode.isEnabled = jsonValue.bool(forKey: "enabled")
        }
        mode.addListener(self)
    }

    func barcodeTrackingDeserializer(_ deserializer: BarcodeTrackingDeserializer,
                                     didStartDeserializingSettings settings: BarcodeTrackingSettings,
                                     from jsonValue: JSONValue) {
        // Empty on purpose
    }

    func barcodeTrackingDeserializer(_ deserializer: BarcodeTrackingDeserializer,
                                     didFinishDeserializingSettings settings: BarcodeTrackingSettings,
                                     from jsonValue: JSONValue) {
        // Empty on purpose
    }

    func barcodeTrackingDeserializer(_ deserializer: BarcodeTrackingDeserializer,
                                     didStartDeserializingBasicOverlay overlay: BarcodeTrackingBasicOverlay,
                                     from jsonValue: JSONValue) {
        // Empty on purpose
    }

    func barcodeTrackingDeserializer(_ deserializer: BarcodeTrackingDeserializer,
                                     didFinishDeserializingBasicOverlay overlay: BarcodeTrackingBasicOverlay,
                                     from jsonValue: JSONValue) {
        barcodeTrackingBasicOverlay = overlay
        barcodeTrackingBasicOverlay?.delegate = self
    }

    func barcodeTrackingDeserializer(_ deserializer: BarcodeTrackingDeserializer,
                                     didStartDeserializingAdvancedOverlay overlay: BarcodeTrackingAdvancedOverlay,
                                     from jsonValue: JSONValue) {
        // Empty on purpose
    }

    func barcodeTrackingDeserializer(_ deserializer: BarcodeTrackingDeserializer,
                                     didFinishDeserializingAdvancedOverlay overlay: BarcodeTrackingAdvancedOverlay,
                                     from jsonValue: JSONValue) {
        barcodeTrackingAdvanceOverlay = overlay
        barcodeTrackingAdvanceOverlay?.delegate = self
    }
}
