/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import React
import ScanditDataCaptureCore
import ScanditFrameworksBarcode
import ScanditFrameworksCore

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
        BarcodePickEvent.allCases.map { $0.rawValue } + BarcodePickScanningEvent.allCases.map { $0.rawValue } + BarcodePickViewListenerEvents.allCases.map { $0.rawValue } + BarcodePickViewUiListenerEvents.allCases.map { $0.rawValue }
    }

    @objc override func invalidate() {
        super.invalidate()
        barcodePickModule.didStop()
        dispatchMain {
            BarcodePickViewManager.containers.removeAll()
        }
    }

    deinit {
        invalidate()
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
        dispatchMain {
            if let container = BarcodePickViewManager.containers.last {
                self.barcodePickModule.addViewToContainer(container: container,
                                                     jsonString: jsonString,
                                                     result: ReactNativeResult(resolve, reject))
            }
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

    @objc(addScanningListener:rejecter:)
    func addScanningListener(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.addScanningListener()
        resolve(nil)
    }

    @objc(removeScanningListener:rejecter:)
    func removeScanningListener(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.removeScanningListener()
        resolve(nil)
    }

    @objc(addViewListener:rejecter:)
    func addViewListener(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.addViewListener()
        resolve(nil)
    }

    @objc(removeViewListener:rejecter:)
    func removeViewListener(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.removeViewListener()
        resolve(nil)
    }

    @objc(registerBarcodePickViewUiListener:rejecter:)
    func registerBarcodePickViewUiListener(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.addViewUiListener()
        resolve(nil)
    }

    @objc(unregisterBarcodePickViewUiListener:rejecter:)
    func unregisterBarcodePickViewUiListener(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.removeViewUiListener()
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
                          resolve: @escaping RCTPromiseResolveBlock,
                          reject: @escaping RCTPromiseRejectBlock) {
        barcodePickModule.finishPickAction(data: data, result: result)
    }

    @objc(viewPause:rejecter:)
    func viewPause(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        // DO NOTHING ON IOS
        resolve(nil)
    }

    @objc(viewResume:rejecter:)
    func viewResume(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        // DO NOTHING ON IOS
        resolve(nil)
    }

    @objc(viewStop:rejecter:)
    func viewStop(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.viewPause()
        resolve(nil)
    }

    @objc(viewStart:rejecter:)
    func viewStart(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.viewStart()
        resolve(nil)
    }

    @objc(viewFreeze:rejecter:)
    func viewFreeze(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.viewFreeze()
        resolve(nil)
    }
}
