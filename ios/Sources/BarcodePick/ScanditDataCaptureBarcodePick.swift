/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import React
import ScanditDataCaptureCore
import ScanditFrameworksBarcode

@objc(ScanditDataCaptureBarcodePick)
class ScanditDataCaptureBarcodePick: RCTEventEmitter {
    var barcodePickModule: BarcodePickModule!

    lazy var barcodePickViewManager: BarcodePickViewManager = {
        bridge.module(for: BarcodePickViewManager.self) as! BarcodePickViewManager
    }()

    override init() {
        super.init()
        let emitter = ReactNativeEmitter(emitter: self)
        barcodePickModule = BarcodePickModule(emitter: emitter)
        barcodePickModule.didStart()
    }

    override func constantsToExport() -> [AnyHashable: Any]! {
        [
            "Defaults": barcodePickModule.defaults.toEncodable()
        ]
    }

    override func supportedEvents() -> [String]! {
        BarcodePickEvent.allCases.map { $0.rawValue }
    }

    @objc override func invalidate() {
        super.invalidate()
        barcodePickModule.didStop()
    }

    override class func requiresMainQueueSetup() -> Bool {
        return true
    }

    override var methodQueue: DispatchQueue! {
        return sdcSharedMethodQueue
    }

    @objc(createView:jsonString:resolver:rejecter:)
    func createView(reactTag: Int,
                    jsonString: String,
                    resolve: @escaping RCTPromiseResolveBlock,
                    reject: @escaping RCTPromiseRejectBlock) {
        if let container = barcodePickViewManager.containers.last {
            barcodePickModule.addViewToContainer(container: container,
                                                 jsonString: jsonString,
                                                 result: ReactNativeResult(resolve, reject))
        }
    }

    @objc(updateView:resolver:rejecter:)
    func updateView(jsonString: String,
                    resolve: @escaping RCTPromiseResolveBlock,
                    reject: @escaping RCTPromiseRejectBlock) {
        barcodePickModule.updateView(viewJson: jsonString, result: ReactNativeResult(resolve, reject))
    }

    @objc(addActionListener:rejecter:)
    func addActionListener(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.addActionListener()
        resolve(nil)
    }

    @objc(removeActionListener:rejecter:)
    func removeActionListener(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.removeActionListener()
        resolve(nil)
    }

    @objc(finishOnProductIdentifierForItems:resolver:rejecter:)
    func finishOnProductIdentifierForItems(jsonString: String,
                                           resolve: RCTPromiseResolveBlock,
                                           reject: RCTPromiseRejectBlock) {
        barcodePickModule.finishProductIdentifierForItems(barcodePickProductProviderCallbackItemsJson: jsonString)
        resolve(nil)
    }

    @objc(finishPickAction:result:resolver:rejecter:)
    func finishPickAction(data: String,
                          result: Bool,
                          resolve: RCTPromiseResolveBlock,
                          reject: RCTPromiseRejectBlock) {
        barcodePickModule.finishPickAction(data: data, result: result)
        resolve(nil)
    }

    @objc(viewPause:rejecter:)
    func viewPause(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.viewPause()
        resolve(nil)
    }

    @objc(viewStart:rejecter:)
    func viewStart(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.viewStart()
        resolve(nil)
    }
}
