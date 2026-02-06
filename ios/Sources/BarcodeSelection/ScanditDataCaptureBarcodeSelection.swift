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
        let barcodeSelectionListener = FrameworksBarcodeSelectionListener(emitter: emitter)
        let aimedBrushProvider = FrameworksBarcodeSelectionAimedBrushProvider(emitter: emitter, queue: cachedBrushesQueue)
        let trackedBrushProvider = FrameworksBarcodeSelectionTrackedBrushProvider(emitter: emitter, queue: cachedBrushesQueue)
        barcodeSelectionModule = BarcodeSelectionModule(barcodeSelectionListener: barcodeSelectionListener,
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

    @objc func registerBarcodeSelectionListenerForEvents() {
        barcodeSelectionModule.addListener()
    }

    @objc func unregisterBarcodeSelectionListenerForEvents() {
        barcodeSelectionModule.removeListener()
    }

    @objc(finishBarcodeSelectionDidSelect:)
    func finishBarcodeSelectionDidSelect(_ data: NSDictionary) {
        let enabled = data["enabled"] as! Bool
        barcodeSelectionModule.finishDidSelect(enabled: enabled)
    }

    @objc(finishBarcodeSelectionDidUpdateSession:)
    func finishBarcodeSelectionDidUpdateSession(_ data: NSDictionary) {
        let enabled = data["enabled"] as! Bool
        barcodeSelectionModule.finishDidUpdate(enabled: enabled)
    }

    @objc(getCountForBarcodeInBarcodeSelectionSession:resolver:rejecter:)
    func getCountForBarcodeInBarcodeSelectionSession(data: NSDictionary,
                  resolve: @escaping RCTPromiseResolveBlock,
                  reject: @escaping RCTPromiseRejectBlock) {
        let selectionIdentifier = data["selectionIdentifier"] as! String
        barcodeSelectionModule.submitBarcodeCountForIdentifier(
            selectionIdentifier: selectionIdentifier,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(increaseCountForBarcodes:resolver:rejecter:)
    func increaseCountForBarcodes(data: NSDictionary,
                                  resolve: @escaping RCTPromiseResolveBlock,
                                  reject: @escaping RCTPromiseRejectBlock) {
        let barcodesJson = data["barcodesJson"] as! String
        barcodeSelectionModule.increaseCountForBarcodes(barcodesJson: barcodesJson,
                                                        result: ReactNativeResult(resolve, reject))
    }

    @objc(finishBrushForAimedBarcodeCallback:resolver:rejecter:)
    func finishBrushForAimedBarcodeCallback(data: NSDictionary,
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
    func finishBrushForTrackedBarcodeCallback(data: NSDictionary,
                                              resolve: RCTPromiseResolveBlock,
                                              reject: RCTPromiseRejectBlock) {
        let brushJson = data["brushJson"] as? String
        let selectionIdentifier = data["selectionIdentifier"] as? String
        barcodeSelectionModule.finishBrushForTrackedBarcode(brushJson: brushJson, selectionIdentifier: selectionIdentifier)
        resolve(nil)
    }

    @objc(setTextForAimToSelectAutoHint:resolver:rejecter:)
    func setTextForAimToSelectAutoHint(data: NSDictionary,
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

    @objc(unfreezeCameraInBarcodeSelection:rejecter:)
    func unfreezeCameraInBarcodeSelection(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeSelectionModule.unfreezeCamera()
        resolve(nil)
    }

    @objc(selectAimedBarcode:rejecter:)
    func selectAimedBarcode(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeSelectionModule.selectAimedBarcode()
        resolve(nil)
    }

    @objc(resetBarcodeSelection:rejecter:)
    func resetBarcodeSelection(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeSelectionModule.resetSelection()
        resolve(nil)
    }

    @objc(resetBarcodeSelectionSession:rejecter:)
    func resetBarcodeSelectionSession(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeSelectionModule.resetLatestSession(frameSequenceId: nil)
        resolve(nil)
    }

    @objc(unselectBarcodes:resolver:rejecter:)
    func unselectBarcodes(data: NSDictionary,
                          resolve: @escaping RCTPromiseResolveBlock,
                          reject: @escaping RCTPromiseRejectBlock) {
        let barcodesJson = data["barcodesJson"] as! String
        barcodeSelectionModule.unselectBarcodes(barcodesJson: barcodesJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(setSelectBarcodeEnabled:resolver:rejecter:)
    func setSelectBarcodeEnabled(data: NSDictionary,
                                 resolve: @escaping RCTPromiseResolveBlock,
                                 reject: @escaping RCTPromiseRejectBlock) {
        let barcodesJson = data["barcodesJson"] as! String
        let enabled = data["enabled"] as! Bool
        barcodeSelectionModule.setSelectBarcodeEnabled(barcodesJson: barcodesJson,
                                                       enabled: enabled,
                                                       result: ReactNativeResult(resolve, reject))
    }

    @objc(setBarcodeSelectionModeEnabledState:)
    func setBarcodeSelectionModeEnabledState(data: NSDictionary) {
        let enabled = data["enabled"] as! Bool
        barcodeSelectionModule.setModeEnabled(enabled: enabled)
    }

    @objc(updateBarcodeSelectionBasicOverlay:resolve:reject:)
    func updateBarcodeSelectionBasicOverlay(data: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let overlayJson = data["overlayJson"] as! String
        barcodeSelectionModule.updateBasicOverlay(overlayJson: overlayJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeSelectionMode:resolve:reject:)
    func updateBarcodeSelectionMode(data: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let modeJson = data["modeJson"] as! String
        barcodeSelectionModule.updateModeFromJson(modeJson: modeJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(applyBarcodeSelectionModeSettings:resolve:reject:)
    func applyBarcodeSelectionModeSettings(data: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let modeSettingsJson = data["modeSettingsJson"] as! String
        barcodeSelectionModule.applyModeSettings(modeSettingsJson: modeSettingsJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeSelectionFeedback:resolve:reject:)
    func updateBarcodeSelectionFeedback(data: NSDictionary,
                                        resolve: @escaping RCTPromiseResolveBlock,
                                        reject: @escaping RCTPromiseRejectBlock) {
        let feedbackJson = data["feedbackJson"] as! String
        barcodeSelectionModule.updateFeedback(feedbackJson: feedbackJson, result: ReactNativeResult(resolve, reject))
    }
}
