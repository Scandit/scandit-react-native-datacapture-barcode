/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import React
import ScanditDataCaptureCore
import ScanditFrameworksBarcode
import ScanditFrameworksCore

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
        let barcodeTransformer = FrameworksBarcodeFindTransformer(emitter: emitter)
        barcodeFindModule = BarcodeFindModule(listener: listener, viewListener: viewListener, barcodeTransformer: barcodeTransformer)
        barcodeFindModule.didStart()
    }

    override func constantsToExport() -> [AnyHashable : Any]! {
        [
            "Defaults": barcodeFindModule.defaults.toEncodable()
        ]
    }

    override func supportedEvents() -> [String]! {
        FrameworksBarcodeFindEvent.allCases.map { $0.rawValue }
    }

    @objc override func invalidate() {
        super.invalidate()
        viewManager.barcodeFindModule = nil
        barcodeFindModule.didStop()
        dispatchMain {
            BarcodeFindViewManager.containers.removeAll()
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

    @objc(createFindView:jsonString:resolver:rejecter:)
    func createFindView(reactTag: Int,
                        jsonString: String,
                        resolve: @escaping RCTPromiseResolveBlock,
                        reject: @escaping RCTPromiseRejectBlock) {
        viewManager.barcodeFindModule = barcodeFindModule
        dispatchMain {
            if let container = BarcodeFindViewManager.containers.last {
                self.barcodeFindModule.addViewToContainer(container: container,
                                                     jsonString: jsonString,
                                                     result: ReactNativeResult(resolve, reject))
            }
        }
    }

    @objc(updateFindView:resolver:rejecter:)
    func updateFindView(jsonString: String,
                        resolve: @escaping RCTPromiseResolveBlock,
                        reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.updateBarcodeFindView(viewJson: jsonString, result: .create(resolve, reject))
    }

    @objc(updateFindMode:resolver:rejecter:)
    func updateFindMode(jsonString: String,
                        resolve: @escaping RCTPromiseResolveBlock,
                        reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.updateBarcodeFindMode(modeJson: jsonString, result: .create(resolve, reject))
    }

    @objc(registerBarcodeFindListener:rejecter:)
    func registerBarcodeFindListener(resolve: @escaping RCTPromiseResolveBlock,
                                     reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.addBarcodeFindListener(result: .create(resolve, reject))
    }

    @objc(unregisterBarcodeFindListener:rejecter:)
    func unregisterBarcodeFindListener(resolve: @escaping RCTPromiseResolveBlock,
                                       reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.removeBarcodeFindListener(result: .create(resolve, reject))
    }

    @objc(registerBarcodeFindViewListener:rejecter:)
    func registerBarcodeFindViewListener(resolve: @escaping RCTPromiseResolveBlock,
                                         reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.addBarcodeFindViewListener(result: .create(resolve, reject))
    }

    @objc(unregisterBarcodeFindViewListener:rejecter:)
    func unregisterBarcodeFindViewListener(resolve: @escaping RCTPromiseResolveBlock,
                                           reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.removeBarcodeFindViewListener(result: .create(resolve, reject))
    }

    @objc(barcodeFindViewOnPause:rejecter:)
    func barcodeFindViewOnPause(resolve: @escaping RCTPromiseResolveBlock,
                                reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.stopSearching(result: .create(resolve, reject))
    }

    @objc(barcodeFindViewOnResume:rejecter:)
    func barcodeFindViewOnResume(resolve: @escaping RCTPromiseResolveBlock,
                                 reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.prepareSearching(result: .create(resolve, reject))
    }

    @objc(barcodeFindSetItemList:resolver:rejecter:)
    func barcodeFindSetItemList(jsonString: String,
                                resolve: @escaping RCTPromiseResolveBlock,
                                reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.setItemList(barcodeFindItemsJson: jsonString, result: .create(resolve, reject))
    }

    @objc(barcodeFindViewStopSearching:rejecter:)
    func barcodeFindViewStopSearching(resolve: @escaping RCTPromiseResolveBlock,
                                      reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.stopSearching(result: .create(resolve, reject))
    }

    @objc(barcodeFindViewStartSearching:rejecter:)
    func barcodeFindViewStartSearching(resolve: @escaping RCTPromiseResolveBlock,
                                       reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.startSearching(result: .create(resolve, reject))
    }

    @objc(barcodeFindViewPauseSearching:rejecter:)
    func barcodeFindViewPauseSearching(resolve: @escaping RCTPromiseResolveBlock,
                                       reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.pauseSearching(result: .create(resolve, reject))
    }

    @objc(barcodeFindModeStart:rejecter:)
    func barcodeFindModeStart(resolve: @escaping RCTPromiseResolveBlock,
                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.startMode(result: .create(resolve, reject))
    }

    @objc(barcodeFindModePause:rejecter:)
    func barcodeFindModePause(resolve: @escaping RCTPromiseResolveBlock,
                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.pauseMode(result: .create(resolve, reject))
    }

    @objc(barcodeFindModeStop:rejecter:)
    func barcodeFindModeStop(resolve: @escaping RCTPromiseResolveBlock,
                             reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.stopMode(result: .create(resolve, reject))
    }

    @objc(setModeEnabledState:)
    func setModeEnabledState(enabled: Bool) {
        barcodeFindModule.setModeEnabled(enabled: enabled)
    }

    @objc(setBarcodeTransformer:rejecter:)
    func setBarcodeTransformer(resolve: @escaping RCTPromiseResolveBlock,
                               reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.setBarcodeFindTransformer(result: ReactNativeResult(resolve, reject))
    }

    @objc(submitBarcodeFindTransformerResult:resolver:rejecter:)
    func submitBarcodeFindTransformerResult(transformedData: String?,
                                            resolve: @escaping RCTPromiseResolveBlock,
                                            reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.submitBarcodeFindTransformerResult(transformedData: transformedData, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeFindFeedback:resolver:rejecter:)
    func updateBarcodeFindFeedback(feedbackJson: String,
                                   resolve: @escaping RCTPromiseResolveBlock,
                                   reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.updateFeedback(feedbackJson: feedbackJson, result: ReactNativeResult(resolve, reject))
    }
}
