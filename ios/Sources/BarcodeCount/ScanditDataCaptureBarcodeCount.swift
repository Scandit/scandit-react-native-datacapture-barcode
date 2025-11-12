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
        barcodeCountModule = BarcodeCountModule(emitter: emitter)
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
        guard let jsonString = data["viewJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        
        let result = ReactNativeResult(resolve, reject)
        let viewId = data.viewId
        
        dispatchMain {
            if let container = BarcodeCountViewManager.containers.first(where: { $0.reactTag == NSNumber(value: viewId) }) {
                self.addViewIfFrameSet(container, jsonString: jsonString, result: result)
            } else {
                self.barcodeCountViewManager.setPostContainerCreateAction(for: viewId) { [weak self] container in
                    guard let self = self else {
                        result.reject(error: ScanditFrameworksCoreError.nilSelf)
                        return
                    }
                    self.addViewIfFrameSet(container, jsonString: jsonString, result: result)
                }
            }
        }
    }
    
    
    private func addViewIfFrameSet(_ container: BarcodeCountViewWrapperView, jsonString: String, result: ReactNativeResult) {
        // RN updates the frame for the wrapper view at a later point, which causes the native SparkScanView to misbehave.
        if container.isFrameSet {
            _ = barcodeCountModule.addViewFromJson(parent: container, viewJson: jsonString, result: result)
        } else {
            container.postFrameSetAction = { [weak self] in
                guard let self = self else {
                    result.reject(error: ScanditFrameworksCoreError.nilSelf)
                    return
                }
                _ = self.barcodeCountModule.addViewFromJson(parent: container, viewJson: jsonString, result: result)
            }
        }
    }

    @objc(updateBarcodeCountView:resolver:rejecter:)
    func updateBarcodeCountView(data: [String: Any],
                                resolve: @escaping RCTPromiseResolveBlock,
                                reject: @escaping RCTPromiseRejectBlock) {
        let viewJson = data["viewJson"] as! String
        barcodeCountModule.updateBarcodeCountView(viewId: data.viewId, viewJson: viewJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(clearBarcodeCountHighlights:resolver:rejecter:)
    func clearBarcodeCountHighlights(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock,
                                     reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.clearHighlights(viewId: data.viewId)
        resolve(nil)
    }

    @objc(updateBarcodeCountMode:resolver:rejecter:)
    func updateBarcodeCountMode(data: [String: Any],
                                resolve: @escaping RCTPromiseResolveBlock,
                                reject: @escaping RCTPromiseRejectBlock) {
        let modeJson = data["barcodeCountJson"] as! String
        barcodeCountModule.updateBarcodeCount(viewId: data.viewId, modeJson: modeJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(resetBarcodeCountSession:resolver:rejecter:)
    func resetBarcodeCountSession(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock,
                                  reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.resetBarcodeCountSession(viewId: data.viewId, frameSequenceId: nil)
        resolve(nil)
    }

    @objc(resetBarcodeCount:resolver:rejecter:)
    func resetBarcodeCount(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock,
                           reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.resetBarcodeCount(viewId: data.viewId)
        resolve(nil)
    }

    @objc(startBarcodeCountScanningPhase:resolver:rejecter:)
    func startBarcodeCountScanningPhase(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock,
                                        reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.startScanningPhase(viewId: data.viewId)
        resolve(nil)
    }

    @objc(endBarcodeCountScanningPhase:resolver:rejecter:)
    func endBarcodeCountScanningPhase(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock,
                                      reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.endScanningPhase(viewId: data.viewId)
        resolve(nil)
    }

    @objc(setBarcodeCountCaptureList:resolver:rejecter:)
    func setBarcodeCountCaptureList(data: [String: Any],
                                    resolve: @escaping RCTPromiseResolveBlock,
                                    reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.setBarcodeCountCaptureList(viewId: data.viewId, barcodesJson: data["captureListJson"] as! String)
        resolve(nil)
    }

    @objc
    func registerBarcodeCountListener(data: [String: Any]) {
        barcodeCountModule.addBarcodeCountListener(viewId: data.viewId)
    }

    @objc
    func unregisterBarcodeCountListener(data: [String: Any]) {
        barcodeCountModule.removeBarcodeCountListener(viewId: data.viewId)
    }

    @objc(registerBarcodeCountViewListener:resolver:rejecter:)
    func registerBarcodeCountViewListener(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock,
                                          reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.addBarcodeCountViewListener(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(unregisterBarcodeCountViewListener:resolver:rejecter:)
    func unregisterBarcodeCountViewListener(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock,
                                            reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.removeBarcodeCountViewListener(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(registerBarcodeCountViewUiListener:resolver:rejecter:)
    func registerBarcodeCountViewUiListener(data: [String: Any],
                                            resolve: @escaping RCTPromiseResolveBlock,
                                            reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.addBarcodeCountViewUiListener(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(unregisterBarcodeCountViewUiListener:resolver:rejecter:)
    func unregisterBarcodeCountViewUiListener(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock,
                                              reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.removeBarcodeCountViewUiListener(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(finishBarcodeCountOnScan:)
    func finishBarcodeCountOnScan(data: [String: Any]) {
        barcodeCountModule.finishOnScan(viewId: data.viewId, enabled: true)
    }

    @objc(finishBarcodeCountBrushForRecognizedBarcode:resolver:rejecter:)
    func finishBarcodeCountBrushForRecognizedBarcode(data: [String: Any],
                                                     resolve: @escaping RCTPromiseResolveBlock,
                                                     reject: @escaping RCTPromiseRejectBlock) {
        let brush = data["brushJson"].flatMap { $0 as? String }.flatMap { Brush(jsonString: $0) }
        let trackedBarcodeId = data["trackedBarcodeId"] as! Int
        barcodeCountModule.finishBrushForRecognizedBarcodeEvent(viewId: data.viewId, brush: brush,
                                                                trackedBarcodeId: trackedBarcodeId,
                                                                result: ReactNativeResult(resolve, reject))
    }

    @objc(finishBarcodeCountBrushForRecognizedBarcodeNotInList:resolver:rejecter:)
    func finishBarcodeCountBrushForRecognizedBarcodeNotInList(data: [String: Any],
                                                             resolve: @escaping RCTPromiseResolveBlock,
                                                             reject: @escaping RCTPromiseRejectBlock) {
        let brush = data["brushJson"].flatMap { $0 as? String }.flatMap { Brush(jsonString: $0) }
        let trackedBarcodeId = data["trackedBarcodeId"] as! Int
        barcodeCountModule.finishBrushForRecognizedBarcodeNotInListEvent(viewId: data.viewId, brush: brush,
                                                                         trackedBarcodeId: trackedBarcodeId,
                                                                         result: ReactNativeResult(resolve, reject))
    }

    @objc(finishBarcodeCountBrushForAcceptedBarcode:resolver:rejecter:)
    func finishBarcodeCountBrushForAcceptedBarcode(data: [String: Any],
                                                  resolve: @escaping RCTPromiseResolveBlock,
                                                  reject: @escaping RCTPromiseRejectBlock) {
        let brush = data["brushJson"].flatMap { $0 as? String }.flatMap { Brush(jsonString: $0) }
        let trackedBarcodeId = data["trackedBarcodeId"] as! Int
        barcodeCountModule.finishBrushForAcceptedBarcodeEvent(viewId: data.viewId, brush: brush,
                                                              trackedBarcodeId: trackedBarcodeId)
        resolve(nil)
    }

    @objc(finishBarcodeCountBrushForRejectedBarcode:resolver:rejecter:)
    func finishBarcodeCountBrushForRejectedBarcode(data: [String: Any],
                                                  resolve: @escaping RCTPromiseResolveBlock,
                                                  reject: @escaping RCTPromiseRejectBlock) {
        let brush = data["brushJson"].flatMap { $0 as? String }.flatMap { Brush(jsonString: $0) }
        let trackedBarcodeId = data["trackedBarcodeId"] as! Int
        barcodeCountModule.finishBrushForRejectedBarcodeEvent(viewId: data.viewId, brush: brush,
                                                              trackedBarcodeId: trackedBarcodeId)
        resolve(nil)
    }

    @objc(getBarcodeCountSpatialMap:resolver:reject:)
    func getBarcodeCountSpatialMap(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock,
                                   reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.submitSpatialMap(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(getBarcodeCountSpatialMapWithHints:resolver:rejecter:)
    func getBarcodeCountSpatialMapWithHints(data: [String: Any],
                                            resolve: @escaping RCTPromiseResolveBlock,
                                            reject: @escaping RCTPromiseRejectBlock) {
        let expectedNumberOfRows = data["expectedNumberOfRows"] as! Int
        let expectedNumberOfColumns = data["expectedNumberOfColumns"] as! Int
        barcodeCountModule.submitSpatialMap(
            viewId: data.viewId,
            expectedNumberOfRows: expectedNumberOfRows,
            expectedNumberOfColumns: expectedNumberOfColumns,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(setBarcodeCountModeEnabledState:)
    func setBarcodeCountodeEnabledState(data: [String: Any]) {
        let enabled = data["isEnabled"] as! Bool
        barcodeCountModule.setModeEnabled(viewId: data.viewId, enabled: enabled)
    }

    @objc(updateBarcodeCountFeedback:resolve:reject:)
    func updateBarcodeCountFeedback(data: [String: Any],
                                    resolve: @escaping RCTPromiseResolveBlock,
                                    reject: @escaping RCTPromiseRejectBlock) {
        barcodeCountModule.updateFeedback(viewId: data.viewId, feedbackJson: data["feedbackJson"] as! String, result: ReactNativeResult(resolve, reject))
    }
    
    @objc(disposeBarcodeCountView:resolver:rejecter:)
    func disposeBarcodeCountView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodeCountModule.disposeBarcodeCountView(viewId: data.viewId)
        resolve(nil)
    }

}
