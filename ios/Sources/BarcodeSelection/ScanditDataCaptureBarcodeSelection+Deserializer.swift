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
                                      from jsonValue: JSONValue) {
        // Empty on purpose
    }

    func barcodeSelectionDeserializer(_ deserializer: BarcodeSelectionDeserializer,
                                      didFinishDeserializingMode mode: BarcodeSelection,
                                      from jsonValue: JSONValue) {
        barcodeSelection = mode
        mode.addListener(self)
        if jsonValue.containsKey("enabled") {
            mode.isEnabled = jsonValue.bool(forKey: "enabled")
        }
    }

    func barcodeSelectionDeserializer(_ deserializer: BarcodeSelectionDeserializer,
                                      didStartDeserializingSettings settings: BarcodeSelectionSettings,
                                      from JSONValue: JSONValue) {
        // Empty on purpose
    }

    func barcodeSelectionDeserializer(_ deserializer: BarcodeSelectionDeserializer,
                                      didFinishDeserializingSettings settings: BarcodeSelectionSettings,
                                      from JSONValue: JSONValue) {
        // Empty on purpose
    }

    func barcodeSelectionDeserializer(_ deserializer: BarcodeSelectionDeserializer,
                                      didStartDeserializingBasicOverlay overlay: BarcodeSelectionBasicOverlay,
                                      from JSONValue: JSONValue) {
        // Empty on purpose
    }

    func barcodeSelectionDeserializer(_ deserializer: BarcodeSelectionDeserializer,
                                      didFinishDeserializingBasicOverlay overlay: BarcodeSelectionBasicOverlay,
                                      from JSONValue: JSONValue) {
        barcodeSelectionBasicOverlay = overlay
        
        if let barcodeSelectionBasicOverlay = barcodeSelectionBasicOverlay,
            let trackedBrushProvider = trackedBrushProvider,
            trackedBrushProviderFlag {
            barcodeSelectionBasicOverlay.setTrackedBarcodeBrushProvider(trackedBrushProvider)
        }
        
        if let barcodeSelectionBasicOverlay = barcodeSelectionBasicOverlay,
            let aimedBrushProvider = aimedBrushProvider,
            aimedBrushProviderFlag {
            barcodeSelectionBasicOverlay.setAimedBarcodeBrushProvider(aimedBrushProvider)
        }
    }
}
