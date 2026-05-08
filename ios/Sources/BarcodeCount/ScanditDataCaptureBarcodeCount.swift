/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import React
import ScanditDataCaptureCore
import ScanditFrameworksBarcode
import ScanditFrameworksCore

enum ScanditDataCaptureBarcodeCountEvent: String, CaseIterable {
    case didScanInSession = "BarcodeCountListener.onScan"

    case didUpdateCaptureList = "BarcodeCountCaptureListListener.didUpdateSession"

    case brushForRecognizedBarcode = "BarcodeCountViewListener.brushForRecognizedBarcode"
    case brushForRecognizedBarcodeNotInList = "BarcodeCountViewListener.brushForRecognizedBarcodeNotInList"
    case brushForUnrecognizedBarcode = "BarcodeCountViewListener.brushForUnrecognizedBarcode"
    case filteredBarcodeTapped = "BarcodeCountViewListener.didTapFilteredBarcode"
    case recognizedBarcodeNotInListTapped = "BarcodeCountViewListener.didTapRecognizedBarcodeNotInList"
    case recognizedBarcodeTapped = "BarcodeCountViewListener.didTapRecognizedBarcode"
    case unrecognizedBarcodeTapped = "BarcodeCountViewListener.didTapUnrecognizedBarcode"
    case didCompleteCaptureList = "BarcodeCountViewListener.didCompleteCaptureList"

    case singleScanButtonTapped = "BarcodeCountViewUiListener.onSingleScanButtonTapped"
    case listButtonTapped = "BarcodeCountViewUiListener.onListButtonTapped"
    case exitButtonTapped = "BarcodeCountViewUiListener.onExitButtonTapped"
}

@objc(ScanditDataCaptureBarcodeCount)
class ScanditDataCaptureBarcodeCount: RCTEventEmitter {
    var barcodeCountModule: BarcodeCountModule!

    lazy var barcodeCountViewManager: BarcodeCountViewManager = {
        bridge.module(for: BarcodeCountViewManager.self) as! BarcodeCountViewManager
    }()

    override init() {
        super.init()
        let emitter = ReactNativeEmitter(emitter: self)
        let barcodeCountListener = FrameworksBarcodeCountListener(emitter: emitter)
        let captureListListener = FrameworksBarcodeCountCaptureListListener(emitter: emitter)
        let viewListener = FrameworksBarcodeCountViewListener(emitter: emitter)
        let viewUIListener = FrameworksBarcodeCountViewUIListener(emitter: emitter)
        barcodeCountModule = BarcodeCountModule(barcodeCountListener: barcodeCountListener,
                                                captureListListener: captureListListener,
                                                viewListener: viewListener,
                                                viewUiListener: viewUIListener)
        barcodeCountModule.didStart()
    }

    override class func requiresMainQueueSetup() -> Bool {
        return true
    }

    override var methodQueue: DispatchQueue! {
        return sdcSharedMethodQueue
    }

    override func constantsToExport() -> [AnyHashable: Any]! {
        [
            "Defaults": barcodeCountModule.defaults.toEncodable()
        ]
    }

    override func supportedEvents() -> [String]! {
        ScanditDataCaptureBarcodeCountEvent.allCases.map { $0.rawValue }
    }

    @objc override func invalidate() {
        super.invalidate()
        barcodeCountModule.didStop()
        dispatchMain {
            BarcodeCountViewManager.containers.removeAll()
        }
    }

    deinit {
        invalidate()
    }

    @objc(createView:JSONString:resolver:rejecter:)
    func createView(reactTag: NSNumber,
                    jsonString: String,
                    resolve: @escaping RCTPromiseResolveBlock,
                    reject: @escaping RCTPromiseRejectBlock) {
        dispatchMain {
            if let container = BarcodeCountViewManager.containers.last {
                self.barcodeCountModule.addViewFromJson(parent: container, viewJson: jsonString)
                resolve(nil)
            }
        }
    }

    @objc(updateView:resolver:rejecter:)
    func updateView(jsonString: String,
                    resolve: @escaping RCTPromiseResolveBlock,
                    reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.updateBarcodeCountView(viewJson: jsonString)
        resolve(nil)
    }

    @objc(clearHighlights:rejecter:)
    func clearHighlights(resolve: @escaping RCTPromiseResolveBlock,
                         reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.clearHighlights()
        resolve(nil)
    }

    @objc(updateMode:resolver:rejecter:)
    func update(jsonString: String,
                resolve: @escaping RCTPromiseResolveBlock,
                reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.updateBarcodeCount(modeJson: jsonString)
        resolve(nil)
    }

    @objc(resetSession:rejecter:)
    func reset(resolve: @escaping RCTPromiseResolveBlock,
               reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.resetBarcodeCountSession(frameSequenceId: nil)
        resolve(nil)
    }

    @objc(resetBarcodeCount:rejecter:)
    func resetBarcodeCount(resolve: @escaping RCTPromiseResolveBlock,
                           reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.resetBarcodeCount()
        resolve(nil)
    }

    @objc(startScanningPhase:rejecter:)
    func startScanningPhase(resolve: @escaping RCTPromiseResolveBlock,
                            reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.startScanningPhase()
        resolve(nil)
    }

    @objc(endScanningPhase:rejecter:)
    func endScanningPhase(resolve: @escaping RCTPromiseResolveBlock,
                          reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.endScanningPhase()
        resolve(nil)
    }

    @objc(setBarcodeCountCaptureList:resolver:rejecter:)
    func setBarcodeCountCaptureList(jsonString: String,
                                    resolve: @escaping RCTPromiseResolveBlock,
                                    reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.setBarcodeCountCaptureList(barcodesJson: jsonString)
        resolve(nil)
    }

    @objc
    func registerBarcodeCountListener() {
        barcodeCountModule.addBarcodeCountListener()
    }

    @objc
    func unregisterBarcodeCountListener() {
        barcodeCountModule.removeBarcodeCountListener()
    }

    @objc
    func registerBarcodeCountViewListener() {
        barcodeCountModule.addBarcodeCountViewListener()
    }

    @objc
    func unregisterBarcodeCountViewListener() {
        barcodeCountModule.removeBarcodeCountViewListener()
    }

    @objc
    func registerBarcodeCountViewUiListener() {
        barcodeCountModule.addBarcodeCountViewUiListener()
    }

    @objc
    func unregisterBarcodeCountViewUiListener() {
        barcodeCountModule.removeBarcodeCountViewUiListener()
    }

    @objc
    func finishOnScan() {
        barcodeCountModule.finishOnScan(enabled: true)
    }

    @objc(finishBrushForUnrecognizedBarcodeCallback:jsonString:trackedBarcodeId:resolve:reject:)
    func finishBrushForUnrecognizedBarcodeCallback(reactTag: NSNumber,
                                                   jsonString: String,
                                                   trackedBarcodeId: Int,
                                                   resolve: @escaping RCTPromiseResolveBlock,
                                                   reject: @escaping RCTPromiseRejectBlock) {
        let brush = Brush(jsonString: jsonString)
        barcodeCountModule.finishBrushForUnrecognizedBarcodeEvent(brush: brush,
                                                                  trackedBarcodeId: trackedBarcodeId)
        resolve(nil)
    }

    @objc(finishBrushForRecognizedBarcodeCallback:jsonString:trackedBarcodeId:resolve:reject:)
    func finishBrushForRecognizedBarcodeCallback(reactTag: NSNumber,
                                                 jsonString: String,
                                                 trackedBarcodeId: Int,
                                                 resolve: @escaping RCTPromiseResolveBlock,
                                                 reject: @escaping RCTPromiseRejectBlock) {
        let brush = Brush(jsonString: jsonString)
        barcodeCountModule.finishBrushForRecognizedBarcodeEvent(brush: brush,
                                                                trackedBarcodeId: trackedBarcodeId)
        resolve(nil)
    }

    @objc(finishBrushForRecognizedBarcodeNotInListCallback:jsonString:trackedBarcodeId:resolve:reject:)
    func finishBrushForRecognizedBarcodeNotInListCallback(reactTag: NSNumber,
                                                          jsonString: String,
                                                          trackedBarcodeId: Int,
                                                          resolve: @escaping RCTPromiseResolveBlock,
                                                          reject: @escaping RCTPromiseRejectBlock) {
        let brush = Brush(jsonString: jsonString)
        barcodeCountModule.finishBrushForRecognizedBarcodeNotInListEvent(brush: brush,
                                                                         trackedBarcodeId: trackedBarcodeId)
        resolve(nil)
    }

    @objc(getSpatialMap:reject:)
    func getSpatialMap(resolve: @escaping RCTPromiseResolveBlock,
                       reject: @escaping RCTPromiseRejectBlock) {
        resolve(barcodeCountModule.getSpatialMap()?.jsonString)
    }

    @objc(getSpatialMapWithHints:expectedNumberOfColumns:resolve:reject:)
    func getSpatialMapWithHints(expectedNumberOfRows: NSInteger,
                       expectedNumberOfColumns: NSInteger,
                       resolve: @escaping RCTPromiseResolveBlock,
                       reject: @escaping RCTPromiseRejectBlock) {
        resolve(barcodeCountModule.getSpatialMap(expectedNumberOfRows: expectedNumberOfRows,
                                                 expectedNumberOfColumns: expectedNumberOfColumns)?.jsonString)
    }

    @objc(setModeEnabledState:)
    func setModeEnabledState(enabled: Bool) {
        barcodeCountModule.setModeEnabled(enabled: enabled)
    }

    @objc(updateBarcodeCountFeedback:resolve:reject:)
    func updateBarcodeCountFeedback(feedbackJson: String,
                                    resolve: @escaping RCTPromiseResolveBlock,
                                    reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.updateFeedback(feedbackJson: feedbackJson, result: ReactNativeResult(resolve, reject))
    }
}
