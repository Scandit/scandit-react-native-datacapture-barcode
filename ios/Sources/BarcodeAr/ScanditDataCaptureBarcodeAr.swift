/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import React
import ScanditDataCaptureCore
import ScanditFrameworksBarcode
import ScanditFrameworksCore

@objc(ScanditDataCaptureBarcodeAr)
class ScanditDataCaptureBarcodeAr: RCTEventEmitter {
    var barcodeArModule: BarcodeArModule!

    lazy var viewManager: BarcodeArViewManager = {
        bridge.module(for: BarcodeArViewManager.self) as! BarcodeArViewManager
    }()

    override init() {
        super.init()
        let emitter = ReactNativeEmitter(emitter: self)
        barcodeArModule = BarcodeArModule(emitter: emitter)
        barcodeArModule.didStart()
    }

    override func constantsToExport() -> [AnyHashable : Any]! {
        [
            "Defaults": barcodeArModule.defaults.toEncodable()
        ]
    }

    override func supportedEvents() -> [String]! {
        BarcodeArListenerEvents.allCases.map { $0.rawValue } +
        BarcodeArViewUiDelegateEvents.allCases.map { $0.rawValue } +
        BarcodeArAnnotationProviderEvents.allCases.map { $0.rawValue } +
        BarcodeArHighlightProviderEvents.allCases.map { $0.rawValue } +
        FrameworksBarcodeArAnnotationEvents.allCases.map { $0.rawValue } +
        FrameworksBarcodeArAnnotationEvents.allCases.map { $0.rawValue }
    }

    @objc override func invalidate() {
        super.invalidate()
        barcodeArModule.didStop()
        dispatchMain {
            BarcodeArViewManager.containers.removeAll()
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

    @objc(createBarcodeArView:resolver:rejecter:)
    func createBarcodeArView(data: [String: Any],
                         resolve: @escaping RCTPromiseResolveBlock,
                         reject: @escaping RCTPromiseRejectBlock) {
        guard let viewJson = data["viewJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }

        let result = ReactNativeResult(resolve, reject)
        let viewId = data.viewId

        dispatchMain {
            if let container = BarcodeArViewManager.containers.first(where: { $0.reactTag == NSNumber(value: viewId) }) {
                self.addViewIfFrameSet(container, jsonString: viewJson, result: result)
            } else {
                self.viewManager.setPostContainerCreateAction(for: viewId) { [weak self] container in
                    guard let self = self else {
                        result.reject(error: ScanditFrameworksCoreError.nilSelf)
                        return
                    }
                    self.addViewIfFrameSet(container, jsonString: viewJson, result: result)
                }
            }
        }
    }

    private func addViewIfFrameSet(_ container: BarcodeArViewWrapperView, jsonString: String, result: ReactNativeResult) {
        // RN updates the frame for the wrapper view at a later point, which causes the native BarcodeArView to misbehave.
        if container.isFrameSet {
            _ = barcodeArModule.addViewFromJson(parent: container, viewJson: jsonString, result: result)
        } else {
            container.postFrameSetAction = { [weak self] in
                guard let self = self else {
                    result.reject(error: ScanditFrameworksCoreError.nilSelf)
                    return
                }
                _ = self.barcodeArModule.addViewFromJson(parent: container, viewJson: jsonString, result: result)
            }
        }
    }

    @objc(updateBarcodeArFeedback:resolver:rejecter:)
    func updateBarcodeArFeedback(data: [String: Any],
                                    resolve: @escaping RCTPromiseResolveBlock,
                                    reject: @escaping RCTPromiseRejectBlock) {
        guard let feedbackJson = data["feedbackJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeArModule.updateFeedback(viewId: data.viewId, feedbackJson: feedbackJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeArMode:resolver:rejecter:)
    func updateBarcodeArMode(data: [String: Any],
                                resolve: @escaping RCTPromiseResolveBlock,
                                reject: @escaping RCTPromiseRejectBlock) {
        guard let barcodeArJson = data["barcodeArJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeArModule.applyBarcodeArModeSettings(viewId: data.viewId, modeSettingsJson: barcodeArJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeArView:resolver:rejecter:)
    func updateBarcodeArView(data: [String: Any],
                                resolve: @escaping RCTPromiseResolveBlock,
                                reject: @escaping RCTPromiseRejectBlock) {
        guard let viewJson = data["viewJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeArModule.updateView(viewId: data.viewId, viewJson: viewJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(removeBarcodeArView:resolver:rejecter:)
    func removeBarcodeArView(data: [String: Any],
                                resolve: @escaping RCTPromiseResolveBlock,
                                reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.removeView(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeArAnnotation:resolver:rejecter:)
    func updateBarcodeArAnnotation(data: [String: Any],
                                      resolve: @escaping RCTPromiseResolveBlock,
                                      reject: @escaping RCTPromiseRejectBlock) {
        guard let annotationJson = data["annotationJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeArModule.updateAnnotation(viewId: data.viewId, annotationJson: annotationJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeArHighlight:resolver:rejecter:)
    func updateBarcodeArHighlight(data: [String: Any],
                                     resolve: @escaping RCTPromiseResolveBlock,
                                     reject: @escaping RCTPromiseRejectBlock) {
        guard let highlightJson = data["highlightJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeArModule.updateHighlight(viewId: data.viewId, highlightJson: highlightJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeArPopoverButtonAtIndex:resolver:rejecter:)
    func updateBarcodeArPopoverButtonAtIndex(data: [String: Any],
                                                resolve: @escaping RCTPromiseResolveBlock,
                                                reject: @escaping RCTPromiseRejectBlock) {
        guard let updateJson = data["updateJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeArModule.updateBarcodeArPopoverButtonAtIndex(viewId: data.viewId, updateJson: updateJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(resetBarcodeAr:resolver:rejecter:)
    func resetBarcodeAr(data: [String: Any],
                           resolve: @escaping RCTPromiseResolveBlock,
                           reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.resetLatestBarcodeArSession(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(resetBarcodeArSession:resolver:rejecter:)
    func resetBarcodeArSession(data: [String: Any],
                                  resolve: @escaping RCTPromiseResolveBlock,
                                  reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.resetLatestBarcodeArSession(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(barcodeArViewPause:resolver:rejecter:)
    func barcodeArViewPause(data: [String: Any],
                               resolve: @escaping RCTPromiseResolveBlock,
                               reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.viewPause(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(barcodeArViewStart:resolver:rejecter:)
    func barcodeArViewStart(data: [String: Any],
                               resolve: @escaping RCTPromiseResolveBlock,
                               reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.viewStart(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(barcodeArViewStop:resolver:rejecter:)
    func barcodeArViewStop(data: [String: Any],
                              resolve: @escaping RCTPromiseResolveBlock,
                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.viewStop(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(barcodeArViewReset:resolver:rejecter:)
    func barcodeArViewReset(data: [String: Any],
                               resolve: @escaping RCTPromiseResolveBlock,
                               reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.viewReset(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(registerBarcodeArAnnotationProvider:resolver:rejecter:)
    func registerBarcodeArAnnotationProvider(data: [String: Any],
                                                resolve: @escaping RCTPromiseResolveBlock,
                                                reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.registerBarcodeArAnnotationProvider(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(unregisterBarcodeArAnnotationProvider:resolver:rejecter:)
    func unregisterBarcodeArAnnotationProvider(data: [String: Any],
                                                  resolve: @escaping RCTPromiseResolveBlock,
                                                  reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.unregisterBarcodeArAnnotationProvider(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(registerBarcodeArListener:resolver:rejecter:)
    func registerBarcodeArListener(data: [String: Any],
                                      resolve: @escaping RCTPromiseResolveBlock,
                                      reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.addModeListener(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(unregisterBarcodeArListener:resolver:rejecter:)
    func unregisterBarcodeArListener(data: [String: Any],
                                        resolve: @escaping RCTPromiseResolveBlock,
                                        reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.removeModeListener(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(registerBarcodeArHighlightProvider:resolver:rejecter:)
    func registerBarcodeArHighlightProvider(data: [String: Any],
                                               resolve: @escaping RCTPromiseResolveBlock,
                                               reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.registerBarcodeArHighlightProvider(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(unregisterBarcodeArHighlightProvider:resolver:rejecter:)
    func unregisterBarcodeArHighlightProvider(data: [String: Any],
                                                 resolve: @escaping RCTPromiseResolveBlock,
                                                 reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.unregisterBarcodeArHighlightProvider(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(registerBarcodeArViewUiListener:resolver:rejecter:)
    func registerBarcodeArViewUiListener(data: [String: Any],
                                            resolve: @escaping RCTPromiseResolveBlock,
                                            reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.registerBarcodeArViewUiListener(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(unregisterBarcodeArViewUiListener:resolver:rejecter:)
    func unregisterBarcodeArViewUiListener(data: [String: Any],
                                              resolve: @escaping RCTPromiseResolveBlock,
                                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.unregisterBarcodeArViewUiListener(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(finishBarcodeArOnDidUpdateSession:resolver:rejecter:)
    func finishBarcodeArOnDidUpdateSession(data: [String: Any],
                                              resolve: @escaping RCTPromiseResolveBlock,
                                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.finishDidUpdateSession(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(finishBarcodeArAnnotationForBarcode:resolver:rejecter:)
    func finishBarcodeArAnnotationForBarcode(data: [String: Any],
                                                resolve: @escaping RCTPromiseResolveBlock,
                                                reject: @escaping RCTPromiseRejectBlock) {
        guard let annotationJson = data["annotationJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeArModule.finishAnnotationForBarcode(viewId: data.viewId, annotationJson: annotationJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(finishBarcodeArHighlightForBarcode:resolver:rejecter:)
    func finishBarcodeArHighlightForBarcode(data: [String: Any],
                                               resolve: @escaping RCTPromiseResolveBlock,
                                               reject: @escaping RCTPromiseRejectBlock) {
        guard let highlightJson = data["highlightJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeArModule.finishHighlightForBarcode(viewId: data.viewId, highlightJson: highlightJson, result: ReactNativeResult(resolve, reject))
    }
}
