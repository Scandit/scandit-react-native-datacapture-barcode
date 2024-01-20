/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import React
import ScanditDataCaptureCore
import ScanditFrameworksBarcode

@objc(ScanditDataCaptureBarcodeFind)
class ScanditDataCaptureBarcodeFind: RCTEventEmitter {
    var barcodeFindModule: BarcodeFindModule!

    lazy var viewManager: BarcodeFindViewManager = {
        bridge.module(for: BarcodeFindViewManager.self) as! BarcodeFindViewManager
    }()

    override init() {
        super.init()
        let emitter = ReactNativeEmitter(emitter: self)
        let listener = FrameworksBarcodeFindListener(emitter: emitter)
        let viewListener = FrameworksBarcodeFindViewUIListener(emitter: emitter)
        barcodeFindModule = BarcodeFindModule(listener: listener, viewListener: viewListener)
        barcodeFindModule.didStart()
    }

    override func constantsToExport() -> [AnyHashable : Any]! {
        [
            "Defaults": barcodeFindModule.defaults.toEncodable()
        ]
    }

    override func supportedEvents() -> [String]! {
        BarcodeFindEvent.allCases.map { $0.rawValue }
    }

    @objc override func invalidate() {
        super.invalidate()
        barcodeFindModule.didStop()
    }

    override class func requiresMainQueueSetup() -> Bool {
        return true
    }

    override var methodQueue: DispatchQueue! {
        return sdcSharedMethodQueue
    }

    @objc(createFindView:jsonString:resolver:rejecter:)
    func createFindView(reactTag: Int,
                        jsonString: String,
                        resolve: @escaping RCTPromiseResolveBlock,
                        reject: @escaping RCTPromiseRejectBlock) {
        if let container = viewManager.containers.last {
            barcodeFindModule.addViewToContainer(container: container,
                                                 jsonString: jsonString,
                                                 result: ReactNativeResult(resolve, reject))
        }
    }

    @objc(updateFindView:resolver:rejecter:)
    func updateFindView(jsonString: String,
                        resolve: @escaping RCTPromiseResolveBlock,
                        reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.updateBarcodeFindView(viewJson: jsonString, result: .create(resolve, reject))
        resolve(nil)
    }

    @objc(updateFindMode:resolver:rejecter:)
    func updateFindMode(jsonString: String,
                        resolve: @escaping RCTPromiseResolveBlock,
                        reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.updateBarcodeFindMode(modeJson: jsonString, result: .create(resolve, reject))
        resolve(nil)
    }

    @objc(registerBarcodeFindListener:rejecter:)
    func registerBarcodeFindListener(resolve: @escaping RCTPromiseResolveBlock,
                                     reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.addBarcodeFindListener(result: .create(resolve, reject))
        resolve(nil)
    }

    @objc(unregisterBarcodeFindListener:rejecter:)
    func unregisterBarcodeFindListener(resolve: @escaping RCTPromiseResolveBlock,
                                       reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.removeBarcodeFindListener(result: .create(resolve, reject))
        resolve(nil)
    }

    @objc(registerBarcodeFindViewListener:rejecter:)
    func registerBarcodeFindViewListener(resolve: @escaping RCTPromiseResolveBlock,
                                         reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.addBarcodeFindViewListener(result: .create(resolve, reject))
        resolve(nil)
    }

    @objc(unregisterBarcodeFindViewListener:rejecter:)
    func unregisterBarcodeFindViewListener(resolve: @escaping RCTPromiseResolveBlock,
                                           reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.removeBarcodeFindViewListener(result: .create(resolve, reject))
        resolve(nil)
    }

    @objc(barcodeFindViewOnPause:rejecter:)
    func barcodeFindViewOnPause(resolve: @escaping RCTPromiseResolveBlock,
                                reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.stopSearching(result: .create(resolve, reject))
        resolve(nil)
    }

    @objc(barcodeFindViewOnResume:rejecter:)
    func barcodeFindViewOnResume(resolve: @escaping RCTPromiseResolveBlock,
                                 reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.prepareSearching(result: .create(resolve, reject))
        resolve(nil)
    }

    @objc(barcodeFindSetItemList:resolver:rejecter:)
    func barcodeFindSetItemList(jsonString: String,
                                resolve: @escaping RCTPromiseResolveBlock,
                                reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.setItemList(barcodeFindItemsJson: jsonString, result: .create(resolve, reject))
        resolve(nil)
    }

    @objc(barcodeFindViewStopSearching:rejecter:)
    func barcodeFindViewStopSearching(resolve: @escaping RCTPromiseResolveBlock,
                                      reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.stopSearching(result: .create(resolve, reject))
        resolve(nil)
    }

    @objc(barcodeFindViewStartSearching:rejecter:)
    func barcodeFindViewStartSearching(resolve: @escaping RCTPromiseResolveBlock,
                                       reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.startSearching(result: .create(resolve, reject))
        resolve(nil)
    }

    @objc(barcodeFindViewPauseSearching:rejecter:)
    func barcodeFindViewPauseSearching(resolve: @escaping RCTPromiseResolveBlock,
                                       reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.pauseSearching(result: .create(resolve, reject))
        resolve(nil)
    }

    @objc(barcodeFindModeStart:rejecter:)
    func barcodeFindModeStart(resolve: @escaping RCTPromiseResolveBlock,
                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.startMode(result: .create(resolve, reject))
        resolve(nil)
    }

    @objc(barcodeFindModePause:rejecter:)
    func barcodeFindModePause(resolve: @escaping RCTPromiseResolveBlock,
                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.pauseMode(result: .create(resolve, reject))
        resolve(nil)
    }

    @objc(barcodeFindModeStop:rejecter:)
    func barcodeFindModeStop(resolve: @escaping RCTPromiseResolveBlock,
                             reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.stopMode(result: .create(resolve, reject))
        resolve(nil)
    }

    @objc(setModeEnabledState:)
    func setModeEnabledState(enabled: Bool) {
        barcodeFindModule.setModeEnabled(enabled: enabled)
    }
}
