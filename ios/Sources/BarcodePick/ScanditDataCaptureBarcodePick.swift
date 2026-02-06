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

    @objc(createPickView:resolver:rejecter:)
    func createPickView(data: [String: Any],
                    resolve: @escaping RCTPromiseResolveBlock,
                    reject: @escaping RCTPromiseRejectBlock) {
        guard let jsonString = data["json"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        dispatchMain {
            if let container = BarcodePickViewManager.containers.last {
                self.barcodePickModule.addViewToContainer(container: container,
                                                     jsonString: jsonString,
                                                     result: ReactNativeResult(resolve, reject))
            }
        }
    }

    @objc(updatePickView:resolver:rejecter:)
    func updatePickView(data: [String: Any],
                    resolve: @escaping RCTPromiseResolveBlock,
                    reject: @escaping RCTPromiseRejectBlock) {
        guard let jsonString = data["json"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodePickModule.updateView(viewJson: jsonString, result: ReactNativeResult(resolve, reject))
    }

    @objc(addPickActionListener:rejecter:)
    func addPickActionListener(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.addActionListener()
        resolve(nil)
    }

    @objc(removePickActionListener:rejecter:)
    func removePickActionListener(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.removeActionListener()
        resolve(nil)
    }

    @objc(addBarcodePickScanningListener:rejecter:)
    func addBarcodePickScanningListener(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.addScanningListener()
        resolve(nil)
    }

    @objc(removeBarcodePickScanningListener:rejecter:)
    func removeBarcodePickScanningListener(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.removeScanningListener()
        resolve(nil)
    }

    @objc(addPickViewListener:rejecter:)
    func addPickViewListener(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.addViewListener()
        resolve(nil)
    }

    @objc(removePickViewListener:rejecter:)
    func removePickViewListener(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
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
    func finishOnProductIdentifierForItems(data: [String: Any],
                                           resolve: @escaping RCTPromiseResolveBlock,
                                           reject: @escaping RCTPromiseRejectBlock) {
        guard let jsonString = data["itemsJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodePickModule.finishProductIdentifierForItems(barcodePickProductProviderCallbackItemsJson: jsonString)
        resolve(nil)
    }

    @objc(finishPickAction:resolver:rejecter:)
    func finishPickAction(data: [String: Any],
                          resolve: @escaping RCTPromiseResolveBlock,
                          reject: @escaping RCTPromiseRejectBlock) {
        guard let code = data["code"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        guard let result = data["result"] as? Bool else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodePickModule.finishPickAction(data: code, result: result)
        resolve(nil)
    }

    @objc(pickViewStop:rejecter:)
    func pickViewStop(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.viewStop()
        resolve(nil)
    }

    @objc(pickViewStart:rejecter:)
    func pickViewStart(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.viewStart()
        resolve(nil)
    }

    @objc(pickViewFreeze:rejecter:)
    func pickViewFreeze(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodePickModule.viewFreeze()
        resolve(nil)
    }

    @objc(registerOnProductIdentifierForItemsListener:rejecter:)
    func registerOnProductIdentifierForItemsListener(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        resolve(nil)
    }

    @objc(unregisterOnProductIdentifierForItemsListener:rejecter:)
    func unregisterOnProductIdentifierForItemsListener(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        resolve(nil)
    }
}
