/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

import ScanditBarcodeCapture

extension ScanditDataCaptureSparkScan: SparkScanDeserializerDelegate {
    func sparkScanDeserializer(_ deserializer: SparkScanDeserializer,
                               didStartDeserializingMode mode: SparkScan,
                               from jsonValue: JSONValue) {
        // Empty on purpose
    }

    func sparkScanDeserializer(_ deserializer: SparkScanDeserializer,
                               didFinishDeserializingMode mode: SparkScan,
                               from jsonValue: JSONValue) {
        if jsonValue.containsKey("enabled") {
            mode.isEnabled = jsonValue.bool(forKey: "enabled")
        }
        sparkScan = mode
    }

    func sparkScanDeserializer(_ deserializer: SparkScanDeserializer,
                               didStartDeserializingSettings settings: SparkScanSettings,
                               from jsonValue: JSONValue) {
        // Empty on purpose
    }

    func sparkScanDeserializer(_ deserializer: SparkScanDeserializer,
                               didFinishDeserializingSettings settings: SparkScanSettings,
                               from jsonValue: JSONValue) {
        // Empty on purpose
    }
}
