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

    @objc(createBarcodeArView:jsonString:resolver:rejecter:)
    func createBarcodeArView(reactTag: Int,
                         jsonString: String,
                         resolve: @escaping RCTPromiseResolveBlock,
                         reject: @escaping RCTPromiseRejectBlock) {
        dispatchMain {
            if let container = BarcodeArViewManager.containers.last {
                self.barcodeArModule.addViewToContainer(container: container,
                                                           jsonString: jsonString,
                                                           result: ReactNativeResult(resolve, reject))
            }
        }
    }

    @objc(updateBarcodeArFeedback:resolver:rejecter:)
    func updateBarcodeArFeedback(feedbackJson: String,
                                    resolve: @escaping RCTPromiseResolveBlock,
                                    reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.updateFeedback(feedbackJson: feedbackJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeArMode:resolver:rejecter:)
    func updateBarcodeArMode(barcodeArJson: String,
                                resolve: @escaping RCTPromiseResolveBlock,
                                reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.applyBarcodeArModeSettings(modeSettingsJson: barcodeArJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeArView:resolver:rejecter:)
    func updateBarcodeArView(viewJson: String,
                                resolve: @escaping RCTPromiseResolveBlock,
                                reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.updateView(viewJson: viewJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeArAnnotation:resolver:rejecter:)
    func updateBarcodeArAnnotation(annotationJson: String,
                                      resolve: @escaping RCTPromiseResolveBlock,
                                      reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.updateAnnotation(annotationJson: annotationJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeArHighlight:resolver:rejecter:)
    func updateBarcodeArHighlight(highlightJson: String,
                                     resolve: @escaping RCTPromiseResolveBlock,
                                     reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.updateHighlight(highlightJson: highlightJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeArPopoverButtonAtIndex:resolver:rejecter:)
    func updateBarcodeArPopoverButtonAtIndex(updateJson: String,
                                                resolve: @escaping RCTPromiseResolveBlock,
                                                reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.updateBarcodeArPopoverButtonAtIndex(updateJson: updateJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(resetBarcodeAr:rejecter:)
    func resetBarcodeAr(resolve: @escaping RCTPromiseResolveBlock,
                           reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.resetLatestBarcodeArSession(result: ReactNativeResult(resolve, reject))
    }

    @objc(resetBarcodeArSession:rejecter:)
    func resetBarcodeArSession(resolve: @escaping RCTPromiseResolveBlock,
                                  reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.resetLatestBarcodeArSession(result: ReactNativeResult(resolve, reject))
    }

    @objc(barcodeArViewPause:rejecter:)
    func barcodeArViewPause(resolve: @escaping RCTPromiseResolveBlock,
                               reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.viewPause(result: ReactNativeResult(resolve, reject))
    }

    @objc(barcodeArViewStart:rejecter:)
    func barcodeArViewStart(resolve: @escaping RCTPromiseResolveBlock,
                               reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.viewStart(result: ReactNativeResult(resolve, reject))
    }

    @objc(barcodeArViewStop:rejecter:)
    func barcodeArViewStop(resolve: @escaping RCTPromiseResolveBlock,
                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.viewStop(result: ReactNativeResult(resolve, reject))
    }

    @objc(barcodeArViewReset:rejecter:)
    func barcodeArViewReset(resolve: @escaping RCTPromiseResolveBlock,
                               reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.viewReset(result: ReactNativeResult(resolve, reject))
    }

    @objc(registerBarcodeArAnnotationProvider:rejecter:)
    func registerBarcodeArAnnotationProvider(resolve: @escaping RCTPromiseResolveBlock,
                                                reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.registerBarcodeArAnnotationProvider(result: ReactNativeResult(resolve, reject))
    }

    @objc(unregisterBarcodeArAnnotationProvider:rejecter:)
    func unregisterBarcodeArAnnotationProvider(resolve: @escaping RCTPromiseResolveBlock,
                                                  reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.unregisterBarcodeArAnnotationProvider(result: ReactNativeResult(resolve, reject))
    }

    @objc(registerBarcodeArListener:rejecter:)
    func registerBarcodeArListener(resolve: @escaping RCTPromiseResolveBlock,
                                      reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.addModeListener(result: ReactNativeResult(resolve, reject))
    }

    @objc(unregisterBarcodeArListener:rejecter:)
    func unregisterBarcodeArListener(resolve: @escaping RCTPromiseResolveBlock,
                                        reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.removeModeListener(result: ReactNativeResult(resolve, reject))
    }

    @objc(registerBarcodeArHighlightProvider:rejecter:)
    func registerBarcodeArHighlightProvider(resolve: @escaping RCTPromiseResolveBlock,
                                               reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.registerBarcodeArHighlightProvider(result: ReactNativeResult(resolve, reject))
    }

    @objc(unregisterBarcodeArHighlightProvider:rejecter:)
    func unregisterBarcodeArHighlightProvider(resolve: @escaping RCTPromiseResolveBlock,
                                                 reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.unregisterBarcodeArHighlightProvider(result: ReactNativeResult(resolve, reject))
    }

    @objc(registerBarcodeArViewUiListener:rejecter:)
    func registerBarcodeArViewUiListener(resolve: @escaping RCTPromiseResolveBlock,
                                            reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.registerBarcodeArViewUiListener(result: ReactNativeResult(resolve, reject))
    }

    @objc(unregisterBarcodeArViewUiListener:rejecter:)
    func unregisterBarcodeArViewUiListener(resolve: @escaping RCTPromiseResolveBlock,
                                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.unregisterBarcodeArViewUiListener(result: ReactNativeResult(resolve, reject))
    }

    @objc(finishBarcodeArOnDidUpdateSession:rejecter:)
    func finishBarcodeArOnDidUpdateSession(resolve: @escaping RCTPromiseResolveBlock,
                                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.finishDidUpdateSession(result: ReactNativeResult(resolve, reject))
    }

    @objc(finishBarcodeArAnnotationForBarcode:resolver:rejecter:)
    func finishBarcodeArAnnotationForBarcode(annotationJson: String,
                                                resolve: @escaping RCTPromiseResolveBlock,
                                                reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.finishAnnotationForBarcode(annotationJson: annotationJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(finishBarcodeArHighlightForBarcode:resolver:rejecter:)
    func finishBarcodeArHighlightForBarcode(highlightJson: String,
                                               resolve: @escaping RCTPromiseResolveBlock,
                                               reject: @escaping RCTPromiseRejectBlock) {
        barcodeArModule.finishHighlightForBarcode(highlightJson: highlightJson, result: ReactNativeResult(resolve, reject))
    }
}
