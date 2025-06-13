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
    case brushForAcceptedBarcode = "BarcodeCountViewListener.brushForAcceptedBarcode"
    case brushForRejectedBarcode = "BarcodeCountViewListener.brushForRejectedBarcode"

    case filteredBarcodeTapped = "BarcodeCountViewListener.didTapFilteredBarcode"
    case recognizedBarcodeNotInListTapped = "BarcodeCountViewListener.didTapRecognizedBarcodeNotInList"
    case recognizedBarcodeTapped = "BarcodeCountViewListener.didTapRecognizedBarcode"
    case didCompleteCaptureList = "BarcodeCountViewListener.didCompleteCaptureList"

    case didTapAcceptedBarcode = "BarcodeCountViewListener.didTapAcceptedBarcode"
    case didTapRejectedBarcode = "BarcodeCountViewListener.didTapRejectedBarcode"

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
        let statusProvider = FrameworksBarcodeCountStatusProvider(emitter: emitter)
        barcodeCountModule = BarcodeCountModule(barcodeCountListener: barcodeCountListener,
                                                captureListListener: captureListListener,
                                                viewListener: viewListener,
                                                viewUiListener: viewUIListener,
                                                statusProvider: statusProvider)
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

    @objc(createBarcodeCountView:resolver:rejecter:)
    func createBarcodeCountView(data: [String: Any],
                    resolve: @escaping RCTPromiseResolveBlock,
                    reject: @escaping RCTPromiseRejectBlock) {
        let viewJson = data["viewJson"] as! String
        dispatchMain {
            if let container = BarcodeCountViewManager.containers.last {
                self.barcodeCountModule.addViewFromJson(parent: container, viewJson: viewJson, result: ReactNativeResult(resolve, reject))
            }
        }
    }

    @objc(updateBarcodeCountView:resolver:rejecter:)
    func updateBarcodeCountView(data: [String: Any],
                    resolve: @escaping RCTPromiseResolveBlock,
                    reject: @escaping RCTPromiseRejectBlock) {
        let viewJson = data["viewJson"] as! String
        barcodeCountModule.updateBarcodeCountView(viewJson: viewJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(clearBarcodeCountHighlights:rejecter:)
    func clearBarcodeCountHighlights(resolve: @escaping RCTPromiseResolveBlock,
                         reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.clearHighlights()
        resolve(nil)
    }

    @objc(updateBarcodeCountMode:resolver:rejecter:)
    func updateBarcodeCountMode(data: [String: Any],
                resolve: @escaping RCTPromiseResolveBlock,
                reject: @escaping RCTPromiseRejectBlock) {
        let modeJson = data["barcodeCountJson"] as! String
        barcodeCountModule.updateBarcodeCount(modeJson: modeJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(resetBarcodeCountSession:rejecter:)
    func resetBarcodeCountSession(resolve: @escaping RCTPromiseResolveBlock,
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

    @objc(startBarcodeCountScanningPhase:rejecter:)
    func startBarcodeCountScanningPhase(resolve: @escaping RCTPromiseResolveBlock,
                            reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.startScanningPhase()
        resolve(nil)
    }

    @objc(endBarcodeCountScanningPhase:rejecter:)
    func endBarcodeCountScanningPhase(resolve: @escaping RCTPromiseResolveBlock,
                          reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.endScanningPhase()
        resolve(nil)
    }

    @objc(setBarcodeCountCaptureList:resolver:rejecter:)
    func setBarcodeCountCaptureList(data: [String: Any],
                                    resolve: @escaping RCTPromiseResolveBlock,
                                    reject: @escaping RCTPromiseRejectBlock) {
        let barcodesJson = data["captureListJson"] as! String
        barcodeCountModule.setBarcodeCountCaptureList(barcodesJson: barcodesJson)
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

    @objc(registerBarcodeCountViewListener:rejecter:)
    func registerBarcodeCountViewListener(resolve: @escaping RCTPromiseResolveBlock,
                                          reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.addBarcodeCountViewListener(result: ReactNativeResult(resolve, reject))
    }

    @objc(unregisterBarcodeCountViewListener:rejecter:)
    func unregisterBarcodeCountViewListener(resolve: @escaping RCTPromiseResolveBlock,
                                            reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.removeBarcodeCountViewListener(result: ReactNativeResult(resolve, reject))
    }

    @objc(registerBarcodeCountViewUiListener:rejecter:)
    func registerBarcodeCountViewUiListener(resolve: @escaping RCTPromiseResolveBlock,
                                            reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.addBarcodeCountViewUiListener(result: ReactNativeResult(resolve, reject))
    }

    @objc(unregisterBarcodeCountViewUiListener:rejecter:)
    func unregisterBarcodeCountViewUiListener(resolve: @escaping RCTPromiseResolveBlock,
                                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.removeBarcodeCountViewUiListener(result: ReactNativeResult(resolve, reject))
    }

    @objc
    func finishBarcodeCountOnScan() {
        barcodeCountModule.finishOnScan(enabled: true)
    }

    @objc(finishBarcodeCountBrushForRecognizedBarcode:resolver:rejecter:)
    func finishBarcodeCountBrushForRecognizedBarcode(data: [String: Any],
                                                 resolve: @escaping RCTPromiseResolveBlock,
                                                 reject: @escaping RCTPromiseRejectBlock) {
        let brush = data["brushJson"].flatMap { $0 as? String }.flatMap { Brush(jsonString: $0) }
        let trackedBarcodeId = data["trackedBarcodeId"] as! Int
        barcodeCountModule.finishBrushForRecognizedBarcodeEvent(brush: brush,
                                                                trackedBarcodeId: trackedBarcodeId,
                                                                result: ReactNativeResult(resolve, reject))
    }

    @objc(finishBarcodeCountBrushForRecognizedBarcodeNotInList:resolver:rejecter:)
    func finishBarcodeCountBrushForRecognizedBarcodeNotInList(data: [String: Any],
                                                                      resolve: @escaping RCTPromiseResolveBlock,
                                                                      reject: @escaping RCTPromiseRejectBlock) {
        let brush = data["brushJson"].flatMap { $0 as? String }.flatMap { Brush(jsonString: $0) }
        let trackedBarcodeId = data["trackedBarcodeId"] as! Int
        barcodeCountModule.finishBrushForRecognizedBarcodeNotInListEvent(brush: brush,
                                                                         trackedBarcodeId: trackedBarcodeId,
                                                                         result: ReactNativeResult(resolve, reject))
    }

    @objc(finishBarcodeCountBrushForAcceptedBarcode:resolver:rejecter:)
    func finishBarcodeCountBrushForAcceptedBarcode(data: [String: Any],
                                                          resolve: @escaping RCTPromiseResolveBlock,
                                                          reject: @escaping RCTPromiseRejectBlock) {
        let brush = data["brushJson"].flatMap { $0 as? String }.flatMap { Brush(jsonString: $0) }
        let trackedBarcodeId = data["trackedBarcodeId"] as! Int
        barcodeCountModule.finishBrushForAcceptedBarcodeEvent(brush: brush,
                                                              trackedBarcodeId: trackedBarcodeId)
        resolve(nil)
    }

    @objc(finishBarcodeCountBrushForRejectedBarcode:resolver:rejecter:)
    func finishBarcodeCountBrushForRejectedBarcode(data: [String: Any],
                                                          resolve: @escaping RCTPromiseResolveBlock,
                                                          reject: @escaping RCTPromiseRejectBlock) {
        let brush = data["brushJson"].flatMap { $0 as? String }.flatMap { Brush(jsonString: $0) }
        let trackedBarcodeId = data["trackedBarcodeId"] as! Int
        barcodeCountModule.finishBrushForRejectedBarcodeEvent(brush: brush,
                                                              trackedBarcodeId: trackedBarcodeId)
        resolve(nil)
    }

    @objc(getBarcodeCountSpatialMap:reject:)
    func getBarcodeCountSpatialMap(resolve: @escaping RCTPromiseResolveBlock,
                       reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.submitSpatialMap(result: ReactNativeResult(resolve, reject))
    }

    @objc(getBarcodeCountSpatialMapWithHints:resolver:rejecter:)
    func getBarcodeCountSpatialMapWithHints(data: [String: Any],
                       resolve: @escaping RCTPromiseResolveBlock,
                       reject: @escaping RCTPromiseRejectBlock) {
        let expectedNumberOfRows = data["expectedNumberOfRows"] as! Int
        let expectedNumberOfColumns = data["expectedNumberOfColumns"] as! Int
        barcodeCountModule.submitSpatialMap(
            expectedNumberOfRows: expectedNumberOfRows,
            expectedNumberOfColumns: expectedNumberOfColumns,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(setBarcodeCountModeEnabledState:)
    func setBarcodeCountodeEnabledState(data: [String: Any]) {
        let enabled = data["isEnabled"] as! Bool
        barcodeCountModule.setModeEnabled(enabled: enabled)
    }

    @objc(updateBarcodeCountFeedback:resolve:reject:)
    func updateBarcodeCountFeedback(feedbackJson: String,
                                    resolve: @escaping RCTPromiseResolveBlock,
                                    reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.updateFeedback(feedbackJson: feedbackJson, result: ReactNativeResult(resolve, reject))
    }
}
