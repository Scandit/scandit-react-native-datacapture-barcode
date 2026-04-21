/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2024- Scandit AG. All rights reserved.
 */

import Foundation
import React
import ScanditDataCaptureCore
import ScanditFrameworksBarcode

@objc(ScanditDataCaptureBarcodeGenerator)
class ScanditDataCaptureBarcodeGenerator: RCTEventEmitter {
    var barcodeGenerator: BarcodeGeneratorModule!

    override func supportedEvents() -> [String]! {
        []
    }

    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    override init() {
        super.init()
        barcodeGenerator = BarcodeGeneratorModule()
        barcodeGenerator.didStart()
    }

    @objc override func invalidate() {
        super.invalidate()
        barcodeGenerator.didStop()
    }

    deinit {
        invalidate()
    }

    @objc(executeNativeBarcodeGenerator:resolve:reject:)
    func executeNativeBarcodeGenerator(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodeGenerator.execute(method: ReactNativeMethodCall(data), result: ReactNativeResult(resolve, reject))
    }
}
