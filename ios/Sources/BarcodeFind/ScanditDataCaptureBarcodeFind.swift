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
        barcodeFindModule = BarcodeFindModule(emitter: emitter)
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

    @objc(setBarcodeFindModeEnabledState:resolver:rejecter:)
    func setBarcodeFindModeEnabledState(data: [String: Any],
                                        resolve: @escaping RCTPromiseResolveBlock,
                                        reject: @escaping RCTPromiseRejectBlock) {
        guard let enabled = data["enabled"] as? Bool else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeFindModule.setModeEnabled(data.viewId, enabled: enabled)
        resolve(nil)
    }

    @objc(createFindView:resolver:rejecter:)
    func createFindView(data: [String: Any],
                        resolve: @escaping RCTPromiseResolveBlock,
                        reject: @escaping RCTPromiseRejectBlock) {
        guard let jsonString = data["json"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        let result = ReactNativeResult(resolve, reject)
        let viewId = data.viewId
        
        viewManager.barcodeFindModule = barcodeFindModule
        dispatchMain {
            if let container = BarcodeFindViewManager.containers.first(where: { $0.reactTag == NSNumber(value: viewId) }) {
                self.barcodeFindModule.addViewToContainer(container: container,
                                                          jsonString: jsonString,
                                                          result: ReactNativeResult(resolve, reject))
            } else {
                self.viewManager.setPostContainerCreateAction(for: viewId) { [weak self] container in
                    guard let self = self else {
                        result.reject(error: ScanditFrameworksCoreError.nilSelf)
                        return
                    }
                    self.barcodeFindModule.addViewToContainer(container: container, jsonString: jsonString, result: result)
                }
            }
        }
    }

    @objc(removeFindView:resolver:rejecter:)
    func removeFindView(data: [String: Any],
                        resolve: @escaping RCTPromiseResolveBlock,
                        reject: @escaping RCTPromiseRejectBlock) {
        // handled in ViewManager
        resolve(nil)
    }

    @objc(showFindView:rejecter:)
    func showFindView(resolve: @escaping RCTPromiseResolveBlock,
                     reject: @escaping RCTPromiseRejectBlock) {
        // not exposed in API
        resolve(nil)
    }

    @objc(hideFindView:rejecter:)
    func hideFindView(resolve: @escaping RCTPromiseResolveBlock,
                     reject: @escaping RCTPromiseRejectBlock) {
        // not exposed in API
        resolve(nil)
    }

    @objc(updateFindView:resolver:rejecter:)
    func updateFindView(data: [String: Any],
                        resolve: @escaping RCTPromiseResolveBlock,
                        reject: @escaping RCTPromiseRejectBlock) {
        guard let jsonString = data["barcodeFindViewJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeFindModule.updateBarcodeFindView(data.viewId, viewJson: jsonString, result: .create(resolve, reject))
    }

    @objc(updateFindMode:resolver:rejecter:)
    func updateFindMode(data: [String: Any],
                        resolve: @escaping RCTPromiseResolveBlock,
                        reject: @escaping RCTPromiseRejectBlock) {
        guard let jsonString = data["barcodeFindJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeFindModule.updateBarcodeFindMode(data.viewId, modeJson: jsonString, result: .create(resolve, reject))
    }

    @objc(registerBarcodeFindListener:resolver:rejecter:)
    func registerBarcodeFindListener(data: [String: Any],
                                     resolve: @escaping RCTPromiseResolveBlock,
                                     reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.addBarcodeFindListener(data.viewId, result: .create(resolve, reject))
    }

    @objc(unregisterBarcodeFindListener:resolver:rejecter:)
    func unregisterBarcodeFindListener(data: [String: Any],
                                       resolve: @escaping RCTPromiseResolveBlock,
                                       reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.removeBarcodeFindListener(data.viewId, result: .create(resolve, reject))
    }

    @objc(registerBarcodeFindViewListener:resolver:rejecter:)
    func registerBarcodeFindViewListener(data: [String: Any],
                                         resolve: @escaping RCTPromiseResolveBlock,
                                         reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.addBarcodeFindViewListener(data.viewId, result: .create(resolve, reject))
    }

    @objc(unregisterBarcodeFindViewListener:resolver:rejecter:)
    func unregisterBarcodeFindViewListener(data: [String: Any],
                                           resolve: @escaping RCTPromiseResolveBlock,
                                           reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.removeBarcodeFindViewListener(data.viewId, result: .create(resolve, reject))
    }

    @objc(barcodeFindViewOnPause:resolver:rejecter:)
    func barcodeFindViewOnPause(data: [String: Any],
                                resolve: @escaping RCTPromiseResolveBlock,
                                reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.stopSearching(data.viewId, result: .create(resolve, reject))
    }

    @objc(barcodeFindViewOnResume:resolver:rejecter:)
    func barcodeFindViewOnResume(data: [String: Any],
                                 resolve: @escaping RCTPromiseResolveBlock,
                                 reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.prepareSearching(data.viewId, result: .create(resolve, reject))
    }

    @objc(barcodeFindSetItemList:resolver:rejecter:)
    func barcodeFindSetItemList(data: [String: Any],
                                resolve: @escaping RCTPromiseResolveBlock,
                                reject: @escaping RCTPromiseRejectBlock) {
        guard let jsonString = data["itemsJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeFindModule.setItemList(data.viewId, barcodeFindItemsJson: jsonString, result: .create(resolve, reject))
    }

    @objc(barcodeFindViewStopSearching:resolver:rejecter:)
    func barcodeFindViewStopSearching(data: [String: Any],
                                      resolve: @escaping RCTPromiseResolveBlock,
                                      reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.stopSearching(data.viewId, result: .create(resolve, reject))
    }

    @objc(barcodeFindViewStartSearching:resolver:rejecter:)
    func barcodeFindViewStartSearching(data: [String: Any],
                                       resolve: @escaping RCTPromiseResolveBlock,
                                       reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.startSearching(data.viewId, result: .create(resolve, reject))
    }

    @objc(barcodeFindViewPauseSearching:resolver:rejecter:)
    func barcodeFindViewPauseSearching(data: [String: Any],
                                       resolve: @escaping RCTPromiseResolveBlock,
                                       reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.pauseSearching(data.viewId, result: .create(resolve, reject))
    }

    @objc(barcodeFindModeStart:resolver:rejecter:)
    func barcodeFindModeStart(data: [String: Any],
                              resolve: @escaping RCTPromiseResolveBlock,
                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.startMode(data.viewId, result: .create(resolve, reject))
    }

    @objc(barcodeFindModePause:resolver:rejecter:)
    func barcodeFindModePause(data: [String: Any],
                              resolve: @escaping RCTPromiseResolveBlock,
                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.pauseMode(data.viewId, result: .create(resolve, reject))
    }

    @objc(barcodeFindModeStop:resolver:rejecter:)
    func barcodeFindModeStop(data: [String: Any],
                             resolve: @escaping RCTPromiseResolveBlock,
                             reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.stopMode(data.viewId, result: .create(resolve, reject))
    }

    @objc(setModeEnabledState:)
    func setModeEnabledState(data: [String: Any]) {
        let enabled = data["enabled"] as! Bool
        barcodeFindModule.setModeEnabled(data.viewId, enabled: enabled)
    }

    @objc(setBarcodeTransformer:resolver:rejecter:)
    func setBarcodeTransformer(data: [String: Any],
                               resolve: @escaping RCTPromiseResolveBlock,
                               reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.setBarcodeFindTransformer(data.viewId, result: ReactNativeResult(resolve, reject))
    }
    
    @objc(unsetBarcodeTransformer:resolver:rejecter:)
    func unsetBarcodeTransformer(data: [String: Any],
                               resolve: @escaping RCTPromiseResolveBlock,
                               reject: @escaping RCTPromiseRejectBlock) {
        barcodeFindModule.removeBarcodeFindTransformer(data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(submitBarcodeFindTransformerResult:resolver:rejecter:)
    func submitBarcodeFindTransformerResult(data: [String: Any],
                                            resolve: @escaping RCTPromiseResolveBlock,
                                            reject: @escaping RCTPromiseRejectBlock) {
        let transformedData = data["transformedBarcode"] as? String
        barcodeFindModule.submitBarcodeFindTransformerResult(data.viewId, transformedData: transformedData, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeFindFeedback:resolver:rejecter:)
    func updateBarcodeFindFeedback(data: [String: Any],
                                   resolve: @escaping RCTPromiseResolveBlock,
                                   reject: @escaping RCTPromiseRejectBlock) {
        guard let feedbackJson = data["feedbackJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeFindModule.updateFeedback(data.viewId, feedbackJson: feedbackJson, result: ReactNativeResult(resolve, reject))
    }
}
