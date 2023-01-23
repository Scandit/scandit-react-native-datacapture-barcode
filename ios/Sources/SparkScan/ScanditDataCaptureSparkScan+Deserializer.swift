/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

import ScanditBarcodeCapture

extension ScanditDataCaptureSparkScan: SparkScanDeserializerDelegate {
    func sparkScanDeserializer(_ deserializer: SparkScanDeserializer,
                               didStartDeserializingMode mode: SparkScan,
                               from JSONValue: JSONValue) {}

    func sparkScanDeserializer(_ deserializer: SparkScanDeserializer,
                               didFinishDeserializingMode mode: SparkScan,
                               from JSONValue: JSONValue) {
        if JSONValue.containsKey("enabled") {
            mode.isEnabled = JSONValue.bool(forKey: "enabled")
        }
        sparkScan = mode
    }

    func sparkScanDeserializer(_ deserializer: SparkScanDeserializer,
                               didStartDeserializingSettings settings: SparkScanSettings,
                               from JSONValue: JSONValue) {}

    func sparkScanDeserializer(_ deserializer: SparkScanDeserializer,
                               didFinishDeserializingSettings settings: SparkScanSettings,
                               from JSONValue: JSONValue) {}
}
