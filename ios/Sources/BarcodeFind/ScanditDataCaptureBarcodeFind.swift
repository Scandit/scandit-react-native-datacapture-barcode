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

    @objc(createView:jsonString:resolver:rejecter:)
    func createView(reactTag: Int,
                    jsonString: String,
                    resolve: @escaping RCTPromiseResolveBlock,
                    reject: @escaping RCTPromiseRejectBlock) {
        if let container = viewManager.containers.last {
            barcodeFindModule.addViewToContainer(container: container,
                                                 jsonString: jsonString,
                                                 result: ReactNativeResult(resolve, reject))
        }
    }

    @objc(updateView:resolver:rejecter:)
    func updateView(jsonString: String,
                    resolve: @escaping RCTPromiseResolveBlock,
                    reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.updateBarcodeFindView(viewJson: jsonString)
        resolve(nil)
    }

    @objc(updateMode:resolver:rejecter:)
    func updateMode(jsonString: String,
                    resolve: @escaping RCTPromiseResolveBlock,
                    reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.updateBarcodeFindMode(modeJson: jsonString)
        resolve(nil)
    }

    @objc(registerBarcodeFindListener:rejecter:)
    func registerBarcodeFindListener(resolve: @escaping RCTPromiseResolveBlock,
                                     reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.addBarcodeFindListener()
        resolve(nil)
    }

    @objc(unregisterBarcodeFindListener:rejecter:)
    func unregisterBarcodeFindListener(resolve: @escaping RCTPromiseResolveBlock,
                                       reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.removeBarcodeFindListener()
        resolve(nil)
    }

    @objc(registerBarcodeFindViewListener:rejecter:)
    func registerBarcodeFindViewListener(resolve: @escaping RCTPromiseResolveBlock,
                                         reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.addBarcodeFindViewListener()
        resolve(nil)
    }

    @objc(unregisterBarcodeFindViewListener:rejecter:)
    func unregisterBarcodeFindViewListener(resolve: @escaping RCTPromiseResolveBlock,
                                           reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.removeBarcodeFindViewListener()
        resolve(nil)
    }

    @objc(viewOnPause:rejecter:)
    func viewOnPause(resolve: @escaping RCTPromiseResolveBlock,
                     reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.stopSearching()
        resolve(nil)
    }

    @objc(viewOnResume:rejecter:)
    func viewOnResume(resolve: @escaping RCTPromiseResolveBlock,
                      reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.prepareSearching()
        resolve(nil)
    }

    @objc(setItemList:resolver:rejecter:)
    func setItemList(jsonString: String,
                     resolve: @escaping RCTPromiseResolveBlock,
                     reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.setItemList(barcodeFindItemsJson: jsonString)
        resolve(nil)
    }

    @objc(viewStopSearching:rejecter:)
    func viewStopSearching(resolve: @escaping RCTPromiseResolveBlock,
                           reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.stopSearching()
        resolve(nil)
    }

    @objc(viewStartSearching:rejecter:)
    func viewStartSearching(resolve: @escaping RCTPromiseResolveBlock,
                            reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.startSearching()
        resolve(nil)
    }

    @objc(viewPauseSearching:rejecter:)
    func viewPauseSearching(resolve: @escaping RCTPromiseResolveBlock,
                            reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.pauseSearching()
        resolve(nil)
    }

    @objc(barcodeFindModeStart:rejecter:)
    func barcodeFindModeStart(resolve: @escaping RCTPromiseResolveBlock,
                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.startMode()
        resolve(nil)
    }

    @objc(barcodeFindModePause:rejecter:)
    func barcodeFindModePause(resolve: @escaping RCTPromiseResolveBlock,
                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.pauseMode()
        resolve(nil)
    }

    @objc(barcodeFindModeStop:rejecter:)
    func barcodeFindModeStop(resolve: @escaping RCTPromiseResolveBlock,
                             reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.stopMode()
        resolve(nil)
    }
}
