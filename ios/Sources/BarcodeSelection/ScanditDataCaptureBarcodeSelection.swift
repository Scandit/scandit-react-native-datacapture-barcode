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

    @objc func registerListenerForEvents() {
        barcodeSelectionModule.addListener()
    }

    @objc func unregisterListenerForEvents() {
        barcodeSelectionModule.removeListener()
    }

    @objc(finishDidUpdateSelectionCallback:)
    func finishDidUpdateSelectionCallback(enabled: Bool) {
        barcodeSelectionModule.finishDidSelect(enabled: enabled)
    }

    @objc(finishDidUpdateSessionCallback:)
    func finishDidUpdateSessionCallback(enabled: Bool) {
        barcodeSelectionModule.finishDidUpdate(enabled: enabled)
    }

    @objc(getCount:resolver:rejecter:)
    func getCount(selectionIdentifier: String,
                  resolve: @escaping RCTPromiseResolveBlock,
                  reject: @escaping RCTPromiseRejectBlock) {
        barcodeSelectionModule.submitBarcodeCountForIdentifier(
            selectionIdentifier: selectionIdentifier,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(increaseCountForBarcodes:resolver:rejecter:)
    func increaseCountForBarcodes(barcodesJson: String,
                                  resolve: @escaping RCTPromiseResolveBlock,
                                  reject: @escaping RCTPromiseRejectBlock) {
        barcodeSelectionModule.increaseCountForBarcodes(barcodesJson: barcodesJson,
                                                        result: ReactNativeResult(resolve, reject))
    }

    @objc(finishBrushForAimedBarcodeCallback:selectionIdentifier:resolver:rejecter:)
    func finishBrushForAimedBarcodeCallback(brushJson: String?,
                                            selectionIdentifier: String?,
                                            resolve: RCTPromiseResolveBlock,
                                            reject: RCTPromiseRejectBlock) {
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

    @objc(finishBrushForTrackedBarcodeCallback:selectionIdentifier:resolver:rejecter:)
    func finishBrushForTrackedBarcodeCallback(brushJson: String?,
                                              selectionIdentifier: String?,
                                              resolve: RCTPromiseResolveBlock,
                                              reject: RCTPromiseRejectBlock) {
        barcodeSelectionModule.finishBrushForTrackedBarcode(brushJson: brushJson, selectionIdentifier: selectionIdentifier)
        resolve(nil)
    }

    @objc(setTextForAimToSelectAutoHint:resolver:rejecter:)
    func setTextForAimToSelectAutoHint(text: String,
                                       resolve: @escaping RCTPromiseResolveBlock,
                                       reject: @escaping RCTPromiseRejectBlock) {
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

    @objc(unfreezeCamera:rejecter:)
    func unfreezeCamera(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeSelectionModule.unfreezeCamera()
        resolve(nil)
    }

    @objc(selectAimedBarcode:rejecter:)
    func selectAimedBarcode(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeSelectionModule.selectAimedBarcode()
        resolve(nil)
    }

    @objc(resetMode:rejecter:)
    func resetMode(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeSelectionModule.resetSelection()
        resolve(nil)
    }

    @objc(resetSession:rejecter:)
    func resetSession(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeSelectionModule.resetLatestSession(frameSequenceId: nil)
        resolve(nil)
    }

    @objc(unselectBarcodes:resolver:rejecter:)
    func unselectBarcodes(barcodesJson: String,
                          resolve: @escaping RCTPromiseResolveBlock,
                          reject: @escaping RCTPromiseRejectBlock) {
        barcodeSelectionModule.unselectBarcodes(barcodesJson: barcodesJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(setSelectBarcodeEnabled:enabled:resolver:rejecter:)
    func setSelectBarcodeEnabled(barcodesJson: String,
                                 enabled: Bool,
                                 resolve: @escaping RCTPromiseResolveBlock,
                                 reject: @escaping RCTPromiseRejectBlock) {
        barcodeSelectionModule.setSelectBarcodeEnabled(barcodesJson: barcodesJson,
                                                       enabled: enabled,
                                                       result: ReactNativeResult(resolve, reject))
    }

    @objc(setModeEnabledState:)
    func setModeEnabledState(enabled: Bool) {
        barcodeSelectionModule.setModeEnabled(enabled: enabled)
    }

    @objc(updateBarcodeSelectionBasicOverlay:resolve:reject:)
    func updateBarcodeSelectionBasicOverlay(overlayJson: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        barcodeSelectionModule.updateBasicOverlay(overlayJson: overlayJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeSelectionMode:resolve:reject:)
    func updateBarcodeSelectionMode(modeJson: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        barcodeSelectionModule.updateModeFromJson(modeJson: modeJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(applyBarcodeSelectionModeSettings:resolve:reject:)
    func applyBarcodeSelectionModeSettings(modeSettingsJson: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        barcodeSelectionModule.applyModeSettings(modeSettingsJson: modeSettingsJson, result: ReactNativeResult(resolve, reject))
    }
    
    @objc(updateBarcodeSelectionFeedback:resolve:reject:)
    func updateBarcodeSelectionFeedback(feedbackJson: String,
                                        resolve: @escaping RCTPromiseResolveBlock,
                                        reject: @escaping RCTPromiseRejectBlock) {
        barcodeSelectionModule.updateFeedback(feedbackJson: feedbackJson, result: ReactNativeResult(resolve, reject))
    }
}
