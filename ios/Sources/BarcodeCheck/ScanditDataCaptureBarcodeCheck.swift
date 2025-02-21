/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import React
import ScanditDataCaptureCore
import ScanditFrameworksBarcode
import ScanditFrameworksCore

@objc(ScanditDataCaptureBarcodeCheck)
class ScanditDataCaptureBarcodeCheck: RCTEventEmitter {
    var barcodeCheckModule: BarcodeCheckModule!

    lazy var viewManager: BarcodeCheckViewManager = {
        bridge.module(for: BarcodeCheckViewManager.self) as! BarcodeCheckViewManager
    }()

    override init() {
        super.init()
        let emitter = ReactNativeEmitter(emitter: self)
        barcodeCheckModule = BarcodeCheckModule(emitter: emitter)
        barcodeCheckModule.didStart()
    }

    override func constantsToExport() -> [AnyHashable : Any]! {
        [
            "Defaults": barcodeCheckModule.defaults.toEncodable()
        ]
    }

    override func supportedEvents() -> [String]! {
        BarcodeCheckListenerEvents.allCases.map { $0.rawValue } +
        BarcodeCheckViewUiDelegateEvents.allCases.map { $0.rawValue } +
        BarcodeCheckAnnotationProviderEvents.allCases.map { $0.rawValue } +
        BarcodeCheckHighlightProviderEvents.allCases.map { $0.rawValue } +
        FrameworksBarcodeCheckAnnotationEvents.allCases.map { $0.rawValue } +
        FrameworksBarcodeCheckAnnotationEvents.allCases.map { $0.rawValue }
    }

    @objc override func invalidate() {
        super.invalidate()
        barcodeCheckModule.didStop()
        dispatchMain {
            BarcodeCheckViewManager.containers.removeAll()
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

    @objc(createBarcodeCheckView:jsonString:resolver:rejecter:)
    func createBarcodeCheckView(reactTag: Int,
                         jsonString: String,
                         resolve: @escaping RCTPromiseResolveBlock,
                         reject: @escaping RCTPromiseRejectBlock) {
        dispatchMain {
            if let container = BarcodeCheckViewManager.containers.last {
                self.barcodeCheckModule.addViewToContainer(container: container,
                                                           jsonString: jsonString,
                                                           result: ReactNativeResult(resolve, reject))
            }
        }
    }

    @objc(updateBarcodeCheckFeedback:resolver:rejecter:)
    func updateBarcodeCheckFeedback(feedbackJson: String,
                                    resolve: @escaping RCTPromiseResolveBlock,
                                    reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.updateFeedback(feedbackJson: feedbackJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeCheckMode:resolver:rejecter:)
    func updateBarcodeCheckMode(barcodeCheckJson: String,
                                resolve: @escaping RCTPromiseResolveBlock,
                                reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.applyBarcodeCheckModeSettings(modeSettingsJson: barcodeCheckJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeCheckView:resolver:rejecter:)
    func updateBarcodeCheckView(viewJson: String,
                                resolve: @escaping RCTPromiseResolveBlock,
                                reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.updateView(viewJson: viewJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeCheckAnnotation:resolver:rejecter:)
    func updateBarcodeCheckAnnotation(annotationJson: String,
                                      resolve: @escaping RCTPromiseResolveBlock,
                                      reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.updateAnnotation(annotationJson: annotationJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeCheckHighlight:resolver:rejecter:)
    func updateBarcodeCheckHighlight(highlightJson: String,
                                     resolve: @escaping RCTPromiseResolveBlock,
                                     reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.updateHighlight(highlightJson: highlightJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeCheckPopoverButtonAtIndex:resolver:rejecter:)
    func updateBarcodeCheckPopoverButtonAtIndex(updateJson: String,
                                                resolve: @escaping RCTPromiseResolveBlock,
                                                reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.updateBarcodeCheckPopoverButtonAtIndex(updateJson: updateJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(resetBarcodeCheck:rejecter:)
    func resetBarcodeCheck(resolve: @escaping RCTPromiseResolveBlock,
                           reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.resetLatestBarcodeCheckSession(result: ReactNativeResult(resolve, reject))
    }

    @objc(resetBarcodeCheckSession:rejecter:)
    func resetBarcodeCheckSession(resolve: @escaping RCTPromiseResolveBlock,
                                  reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.resetLatestBarcodeCheckSession(result: ReactNativeResult(resolve, reject))
    }

    @objc(barcodeCheckViewPause:rejecter:)
    func barcodeCheckViewPause(resolve: @escaping RCTPromiseResolveBlock,
                               reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.viewPause(result: ReactNativeResult(resolve, reject))
    }

    @objc(barcodeCheckViewStart:rejecter:)
    func barcodeCheckViewStart(resolve: @escaping RCTPromiseResolveBlock,
                               reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.viewStart(result: ReactNativeResult(resolve, reject))
    }

    @objc(barcodeCheckViewStop:rejecter:)
    func barcodeCheckViewStop(resolve: @escaping RCTPromiseResolveBlock,
                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.viewStop(result: ReactNativeResult(resolve, reject))
    }

    @objc(registerBarcodeCheckAnnotationProvider:rejecter:)
    func registerBarcodeCheckAnnotationProvider(resolve: @escaping RCTPromiseResolveBlock,
                                                reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.registerBarcodeCheckAnnotationProvider(result: ReactNativeResult(resolve, reject))
    }

    @objc(unregisterBarcodeCheckAnnotationProvider:rejecter:)
    func unregisterBarcodeCheckAnnotationProvider(resolve: @escaping RCTPromiseResolveBlock,
                                                  reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.unregisterBarcodeCheckAnnotationProvider(result: ReactNativeResult(resolve, reject))
    }

    @objc(registerBarcodeCheckListener:rejecter:)
    func registerBarcodeCheckListener(resolve: @escaping RCTPromiseResolveBlock,
                                      reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.addModeListener(result: ReactNativeResult(resolve, reject))
    }

    @objc(unregisterBarcodeCheckListener:rejecter:)
    func unregisterBarcodeCheckListener(resolve: @escaping RCTPromiseResolveBlock,
                                        reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.removeModeListener(result: ReactNativeResult(resolve, reject))
    }

    @objc(registerBarcodeCheckHighlightProvider:rejecter:)
    func registerBarcodeCheckHighlightProvider(resolve: @escaping RCTPromiseResolveBlock,
                                               reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.registerBarcodeCheckHighlightProvider(result: ReactNativeResult(resolve, reject))
    }

    @objc(unregisterBarcodeCheckHighlightProvider:rejecter:)
    func unregisterBarcodeCheckHighlightProvider(resolve: @escaping RCTPromiseResolveBlock,
                                                 reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.unregisterBarcodeCheckHighlightProvider(result: ReactNativeResult(resolve, reject))
    }

    @objc(registerBarcodeCheckViewUiListener:rejecter:)
    func registerBarcodeCheckViewUiListener(resolve: @escaping RCTPromiseResolveBlock,
                                            reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.registerBarcodeCheckViewUiListener(result: ReactNativeResult(resolve, reject))
    }

    @objc(unregisterBarcodeCheckViewUiListener:rejecter:)
    func unregisterBarcodeCheckViewUiListener(resolve: @escaping RCTPromiseResolveBlock,
                                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.unregisterBarcodeCheckViewUiListener(result: ReactNativeResult(resolve, reject))
    }

    @objc(finishBarcodeCheckOnDidUpdateSession:rejecter:)
    func finishBarcodeCheckOnDidUpdateSession(resolve: @escaping RCTPromiseResolveBlock,
                                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.finishDidUpdateSession(result: ReactNativeResult(resolve, reject))
    }

    @objc(finishBarcodeCheckAnnotationForBarcode:resolver:rejecter:)
    func finishBarcodeCheckAnnotationForBarcode(annotationJson: String,
                                                resolve: @escaping RCTPromiseResolveBlock,
                                                reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.finishAnnotationForBarcode(annotationJson: annotationJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(finishBarcodeCheckHighlightForBarcode:resolver:rejecter:)
    func finishBarcodeCheckHighlightForBarcode(highlightJson: String,
                                               resolve: @escaping RCTPromiseResolveBlock,
                                               reject: @escaping RCTPromiseRejectBlock) {
        barcodeCheckModule.finishHighlightForBarcode(highlightJson: highlightJson, result: ReactNativeResult(resolve, reject))
    }
}
