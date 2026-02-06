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

    @objc(create:resolve:reject:)
    func create(barcodeGeneratorJson: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        barcodeGenerator.createGenerator(generatorJson: barcodeGeneratorJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(disposeGenerator:resolve:reject:)
    func disposeGenerator(generatorId: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        barcodeGenerator.disposeGenerator(generatorId: generatorId, result: ReactNativeResult(resolve, reject))
    }

    @objc(generateFromBase64EncodedData:data:imageWidth:resolve:reject:)
    func generateFromBase64EncodedData(generatorId: String, data: String, imageWidth: Int, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        barcodeGenerator.generateFromBase64EncodedData(generatorId: generatorId, data: data, imageWidth: imageWidth, result: ReactNativeResult(resolve, reject))
    }

    @objc(generate:text:imageWidth:resolve:reject:)
    func generate(generatorId: String, text: String, imageWidth: Int, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        barcodeGenerator.generate(generatorId: generatorId, text: text, imageWidth: imageWidth, result: ReactNativeResult(resolve, reject))
    }
}
