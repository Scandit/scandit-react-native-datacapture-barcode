/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

extension ScanditDataCaptureBarcodeCapture {
    func registerDeserializer() {
        let barcodeCaptureDeserializer = BarcodeCaptureDeserializer()
        barcodeCaptureDeserializer.delegate = self

        ScanditDataCaptureCore.register(modeDeserializer: barcodeCaptureDeserializer)
    }
}

extension ScanditDataCaptureBarcodeCapture: BarcodeCaptureDeserializerDelegate {
    func barcodeCaptureDeserializer(_ deserializer: BarcodeCaptureDeserializer,
                                    didStartDeserializingMode mode: BarcodeCapture,
                                    from jsonValue: JSONValue) {
        // Empty on purpose
    }

    func barcodeCaptureDeserializer(_ deserializer: BarcodeCaptureDeserializer,
                                    didFinishDeserializingMode mode: BarcodeCapture,
                                    from jsonValue: JSONValue) {
        mode.addListener(self)
        if jsonValue.containsKey("enabled") {
            mode.isEnabled = jsonValue.bool(forKey: "enabled")
        }
    }

    func barcodeCaptureDeserializer(_ deserializer: BarcodeCaptureDeserializer,
                                    didStartDeserializingSettings settings: BarcodeCaptureSettings,
                                    from jsonValue: JSONValue) {
        // Empty on purpose
    }

    func barcodeCaptureDeserializer(_ deserializer: BarcodeCaptureDeserializer,
                                    didFinishDeserializingSettings settings: BarcodeCaptureSettings,
                                    from jsonValue: JSONValue) {
        // Empty on purpose
    }

    func barcodeCaptureDeserializer(_ deserializer: BarcodeCaptureDeserializer,
                                    didStartDeserializingOverlay overlay: BarcodeCaptureOverlay,
                                    from jsonValue: JSONValue) {
        // Empty on purpose
    }

    func barcodeCaptureDeserializer(_ deserializer: BarcodeCaptureDeserializer,
                                    didFinishDeserializingOverlay overlay: BarcodeCaptureOverlay,
                                    from jsonValue: JSONValue) {
        // Empty on purpose
    }
}
