/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

extension ScanditDataCaptureBarcodeSelection {
    func registerDeserializer() {
        let barcodeSelectionDeserializer = BarcodeSelectionDeserializer()
        barcodeSelectionDeserializer.delegate = self

        ScanditDataCaptureCore.register(modeDeserializer: barcodeSelectionDeserializer)
    }
}

extension ScanditDataCaptureBarcodeSelection: BarcodeSelectionDeserializerDelegate {
    func barcodeSelectionDeserializer(_ deserializer: BarcodeSelectionDeserializer,
                                      didStartDeserializingMode mode: BarcodeSelection,
                                      from JSONValue: JSONValue) { }

    func barcodeSelectionDeserializer(_ deserializer: BarcodeSelectionDeserializer,
                                      didFinishDeserializingMode mode: BarcodeSelection,
                                      from JSONValue: JSONValue) {
        barcodeSelection = mode
        mode.addListener(self)
        if JSONValue.containsKey("enabled") {
            mode.isEnabled = JSONValue.bool(forKey: "enabled")
        }
    }

    func barcodeSelectionDeserializer(_ deserializer: BarcodeSelectionDeserializer,
                                      didStartDeserializingSettings settings: BarcodeSelectionSettings,
                                      from JSONValue: JSONValue) { }

    func barcodeSelectionDeserializer(_ deserializer: BarcodeSelectionDeserializer,
                                      didFinishDeserializingSettings settings: BarcodeSelectionSettings,
                                      from JSONValue: JSONValue) { }

    func barcodeSelectionDeserializer(_ deserializer: BarcodeSelectionDeserializer,
                                      didStartDeserializingBasicOverlay overlay: BarcodeSelectionBasicOverlay,
                                      from JSONValue: JSONValue) { }

    func barcodeSelectionDeserializer(_ deserializer: BarcodeSelectionDeserializer,
                                      didFinishDeserializingBasicOverlay overlay: BarcodeSelectionBasicOverlay,
                                      from JSONValue: JSONValue) { }
}
