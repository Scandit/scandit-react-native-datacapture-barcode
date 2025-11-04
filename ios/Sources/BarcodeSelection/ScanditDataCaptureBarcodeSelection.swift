/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

import Foundation
import React
import ScanditDataCaptureCore
import ScanditFrameworksBarcode

extension Barcode {
    var selectionIdentifier: String {
        return (data ?? "") + SymbologyDescription(symbology: symbology).identifier
    }
}

extension BarcodeSelectionSession {
    var barcodes: [Barcode] {
        return selectedBarcodes + newlyUnselectedBarcodes
    }

    func count(for selectionIdentifier: String) -> Int {
        guard let barcode = barcodes.first(where: { $0.selectionIdentifier == selectionIdentifier }) else {
            return 0
        }
        return count(for: barcode)
    }
}

@objc(ScanditDataCaptureBarcodeSelection)
class ScanditDataCaptureBarcodeSelection: RCTEventEmitter {
    internal let cachedBrushesQueue = DispatchQueue(label: "cachedBrushesQueue")
    var barcodeSelectionModule: BarcodeSelectionModule!

    override init() {
        super.init()
        let emitter = ReactNativeEmitter(emitter: self)
        let aimedBrushProvider = FrameworksBarcodeSelectionAimedBrushProvider(emitter: emitter, queue: cachedBrushesQueue)
        let trackedBrushProvider = FrameworksBarcodeSelectionTrackedBrushProvider(emitter: emitter, queue: cachedBrushesQueue)
        barcodeSelectionModule = BarcodeSelectionModule(emitter: emitter,
                                                        aimedBrushProvider: aimedBrushProvider,
                                                        trackedBrushProvider: trackedBrushProvider)
        barcodeSelectionModule.didStart()
    }

    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    override var methodQueue: DispatchQueue! {
        sdcSharedMethodQueue
    }

    @objc override func invalidate() {
        super.invalidate()
        barcodeSelectionModule.didStop()
    }

    deinit {
        invalidate()
    }

    override func constantsToExport() -> [AnyHashable: Any]! {
        ["Defaults": barcodeSelectionModule.defaults.toEncodable()]
    }

    override func supportedEvents() -> [String]! {
        FrameworksBarcodeSelectionEvent.allCases.map{ $0.rawValue }
    }

    @objc(registerBarcodeSelectionListenerForEvents:)
    func registerBarcodeSelectionListenerForEvents(data: [String: Any]) {
        barcodeSelectionModule.addListener(modeId: data.modeId)
    }

    @objc(unregisterBarcodeSelectionListenerForEvents:)
    func unregisterBarcodeSelectionListenerForEvents(data: [String: Any]) {
        barcodeSelectionModule.removeListener(modeId: data.modeId)
    }

    @objc(finishBarcodeSelectionDidSelect:)
    func finishBarcodeSelectionDidSelect(_ data: [String: Any]) {
        let enabled = data["enabled"] as! Bool
        barcodeSelectionModule.finishDidSelect(modeId: data.modeId, enabled: enabled)
    }

    @objc(finishBarcodeSelectionDidUpdateSession:)
    func finishBarcodeSelectionDidUpdateSession(_ data: [String: Any]) {
        let enabled = data["enabled"] as! Bool
        barcodeSelectionModule.finishDidUpdate(modeId: data.modeId, enabled: enabled)
    }

    @objc(getCountForBarcodeInBarcodeSelectionSession:resolver:rejecter:)
    func getCountForBarcodeInBarcodeSelectionSession(data: [String: Any],
                  resolve: @escaping RCTPromiseResolveBlock,
                  reject: @escaping RCTPromiseRejectBlock) {
        let selectionIdentifier = data["selectionIdentifier"] as! String
        barcodeSelectionModule.submitBarcodeCountForIdentifier(
            modeId: data.modeId,
            selectionIdentifier: selectionIdentifier,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(increaseCountForBarcodes:resolver:rejecter:)
    func increaseCountForBarcodes(data: [String: Any],
                                  resolve: @escaping RCTPromiseResolveBlock,
                                  reject: @escaping RCTPromiseRejectBlock) {
        let barcodesJson = data["barcodesJson"] as! String
        barcodeSelectionModule.increaseCountForBarcodes(
            modeId: data.modeId,
            barcodesJson: barcodesJson,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(finishBrushForAimedBarcodeCallback:resolver:rejecter:)
    func finishBrushForAimedBarcodeCallback(data: [String: Any],
                                            resolve: RCTPromiseResolveBlock,
                                            reject: RCTPromiseRejectBlock) {
        let brushJson = data["brushJson"] as? String
        let selectionIdentifier = data["selectionIdentifier"] as? String
        barcodeSelectionModule.finishBrushForAimedBarcode(brushJson: brushJson, selectionIdentifier: selectionIdentifier)
        resolve(nil)
    }

    @objc(setAimedBarcodeBrushProvider:rejecter:)
    func setAimedBarcodeBrushProvider(resolve: @escaping RCTPromiseResolveBlock,
                                      reject: @escaping RCTPromiseRejectBlock) {
        barcodeSelectionModule.setAimedBrushProvider(result: ReactNativeResult(resolve, reject))
    }

    @objc(removeAimedBarcodeBrushProvider:rejecter:)
    func removeAimedBarcodeBrushProvider(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeSelectionModule.removeAimedBarcodeBrushProvider()
        resolve(nil)
    }

    @objc(finishBrushForTrackedBarcodeCallback:resolver:rejecter:)
    func finishBrushForTrackedBarcodeCallback(data: [String: Any],
                                              resolve: RCTPromiseResolveBlock,
                                              reject: RCTPromiseRejectBlock) {
        let brushJson = data["brushJson"] as? String
        let selectionIdentifier = data["selectionIdentifier"] as? String
        barcodeSelectionModule.finishBrushForTrackedBarcode(
            brushJson: brushJson,
            selectionIdentifier: selectionIdentifier
        )
        resolve(nil)
    }

    @objc(setTextForAimToSelectAutoHint:resolver:rejecter:)
    func setTextForAimToSelectAutoHint(data: [String: Any],
                                       resolve: @escaping RCTPromiseResolveBlock,
                                       reject: @escaping RCTPromiseRejectBlock) {
        let text = data["text"] as! String
        barcodeSelectionModule.setTextForAimToSelectAutoHint(text: text,
                                                             result: ReactNativeResult(resolve,reject))
    }

    @objc(setTrackedBarcodeBrushProvider:rejecter:)
    func setTrackedBarcodeBrushProvider(resolve: @escaping RCTPromiseResolveBlock,
                                        reject: @escaping RCTPromiseRejectBlock) {
        barcodeSelectionModule.setTrackedBrushProvider(result: ReactNativeResult(resolve, reject))
    }

    @objc(removeTrackedBarcodeBrushProvider:rejecter:)
    func removeTrackedBarcodeBrushProvider(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeSelectionModule.removeTrackedBarcodeBrushProvider()
        resolve(nil)
    }

    @objc(unfreezeCameraInBarcodeSelection:resolver:rejecter:)
    func unfreezeCameraInBarcodeSelection(data: [String: Any], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeSelectionModule.unfreezeCamera(modeId: data.modeId)
        resolve(nil)
    }

    @objc(selectAimedBarcode:resolver:rejecter:)
    func selectAimedBarcode(data: [String: Any], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeSelectionModule.selectAimedBarcode(modeId: data.modeId)
        resolve(nil)
    }

    @objc(resetBarcodeSelection:resolver:rejecter:)
    func resetBarcodeSelection(data: [String: Any], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeSelectionModule.resetSelection(modeId: data.modeId)
        resolve(nil)
    }

    @objc(resetBarcodeSelectionSession:resolver:rejecter:)
    func resetBarcodeSelectionSession(data: [String: Any], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeSelectionModule.resetLatestSession(modeId: data.modeId, frameSequenceId: nil)
        resolve(nil)
    }

    @objc(unselectBarcodes:resolver:rejecter:)
    func unselectBarcodes(data: [String: Any],
                          resolve: @escaping RCTPromiseResolveBlock,
                          reject: @escaping RCTPromiseRejectBlock) {
        let barcodesJson = data["barcodesJson"] as! String
        barcodeSelectionModule.unselectBarcodes(modeId: data.modeId, barcodesJson: barcodesJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(setSelectBarcodeEnabled:resolver:rejecter:)
    func setSelectBarcodeEnabled(data: [String: Any],
                                 resolve: @escaping RCTPromiseResolveBlock,
                                 reject: @escaping RCTPromiseRejectBlock) {
        let barcodesJson = data["barcodesJson"] as! String
        let enabled = data["enabled"] as! Bool
        barcodeSelectionModule.setSelectBarcodeEnabled(
            modeId: data.modeId,
            barcodesJson: barcodesJson,
            enabled: enabled,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(setBarcodeSelectionModeEnabledState:)
    func setBarcodeSelectionModeEnabledState(data: [String: Any]) {
        let enabled = data["enabled"] as! Bool
        barcodeSelectionModule.setModeEnabled(modeId: data.modeId, enabled: enabled)
    }

    @objc(updateBarcodeSelectionBasicOverlay:resolve:reject:)
    func updateBarcodeSelectionBasicOverlay(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let overlayJson = data["overlayJson"] as! String
        barcodeSelectionModule.updateBasicOverlay(overlayJson: overlayJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeSelectionMode:resolve:reject:)
    func updateBarcodeSelectionMode(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let modeJson = data["modeJson"] as! String
        barcodeSelectionModule.updateModeFromJson(
            modeId: data.modeId,
            modeJson: modeJson,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(applyBarcodeSelectionModeSettings:resolve:reject:)
    func applyBarcodeSelectionModeSettings(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let modeSettingsJson = data["modeSettingsJson"] as! String
        barcodeSelectionModule.applyModeSettings(
            modeId: data.modeId,
            modeSettingsJson: modeSettingsJson,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(updateBarcodeSelectionFeedback:resolve:reject:)
    func updateBarcodeSelectionFeedback(data: [String: Any],
                                        resolve: @escaping RCTPromiseResolveBlock,
                                        reject: @escaping RCTPromiseRejectBlock) {
        let feedbackJson = data["feedbackJson"] as! String
        barcodeSelectionModule.updateFeedback(
            modeId: data.modeId,
            feedbackJson: feedbackJson,
            result: ReactNativeResult(resolve, reject)
        )
    }
}
