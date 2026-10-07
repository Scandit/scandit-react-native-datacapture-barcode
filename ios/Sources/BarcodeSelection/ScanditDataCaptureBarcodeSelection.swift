/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

import Foundation
import React
import ScanditDataCaptureCore
import ScanditFrameworksBarcode
import ScanditFrameworksCore

// Helper extension for safe parameter extraction from React Native method call data
private extension Dictionary where Key == String, Value == Any {
    func getString(_ key: String) -> String? {
        self[key] as? String
    }

    func getBool(_ key: String) -> Bool? {
        self[key] as? Bool
    }
}

extension Barcode {
    var selectionIdentifier: String {
        (data ?? "") + SymbologyDescription(symbology: symbology).identifier
    }
}

extension BarcodeSelectionSession {
    var barcodes: [Barcode] {
        selectedBarcodes + newlyUnselectedBarcodes
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
        let aimedBrushProvider = FrameworksBarcodeSelectionAimedBrushProvider(
            emitter: emitter,
            queue: cachedBrushesQueue
        )
        let trackedBrushProvider = FrameworksBarcodeSelectionTrackedBrushProvider(
            emitter: emitter,
            queue: cachedBrushesQueue
        )
        barcodeSelectionModule = BarcodeSelectionModule(
            emitter: emitter,
            aimedBrushProvider: aimedBrushProvider,
            trackedBrushProvider: trackedBrushProvider
        )
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
        FrameworksBarcodeSelectionEvent.allCases.map { $0.rawValue }
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
        let enabled = data.getBool("enabled") ?? false
        barcodeSelectionModule.finishDidSelect(modeId: data.modeId, enabled: enabled)
    }

    @objc(finishBarcodeSelectionDidUpdateSession:)
    func finishBarcodeSelectionDidUpdateSession(_ data: [String: Any]) {
        let enabled = data.getBool("enabled") ?? false
        barcodeSelectionModule.finishDidUpdate(modeId: data.modeId, enabled: enabled)
    }

    @objc(getCountForBarcodeInBarcodeSelectionSession:resolver:rejecter:)
    func getCountForBarcodeInBarcodeSelectionSession(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let selectionIdentifier = data.getString("selectionIdentifier") else {
            reject("INVALID_ARGUMENTS", "Missing selectionIdentifier parameter", nil)
            return
        }
        barcodeSelectionModule.submitBarcodeCountForIdentifier(
            modeId: data.modeId,
            selectionIdentifier: selectionIdentifier,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(increaseCountForBarcodes:resolver:rejecter:)
    func increaseCountForBarcodes(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let barcodesJson = data.getString("barcodesJson") else {
            reject("INVALID_ARGUMENTS", "Missing barcodesJson parameter", nil)
            return
        }
        barcodeSelectionModule.increaseCountForBarcodes(
            modeId: data.modeId,
            barcodesJson: barcodesJson,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(finishBrushForAimedBarcodeCallback:resolver:rejecter:)
    func finishBrushForAimedBarcodeCallback(
        data: [String: Any],
        resolve: RCTPromiseResolveBlock,
        reject: RCTPromiseRejectBlock
    ) {
        let brushJson = data["brushJson"] as? String
        let selectionIdentifier = data["selectionIdentifier"] as? String
        barcodeSelectionModule.finishBrushForAimedBarcode(
            brushJson: brushJson,
            selectionIdentifier: selectionIdentifier
        )
        resolve(nil)
    }

    @objc(setAimedBarcodeBrushProvider:rejecter:)
    func setAimedBarcodeBrushProvider(
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodeSelectionModule.setAimedBrushProvider(result: ReactNativeResult(resolve, reject))
    }

    @objc(removeAimedBarcodeBrushProvider:rejecter:)
    func removeAimedBarcodeBrushProvider(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeSelectionModule.removeAimedBarcodeBrushProvider()
        resolve(nil)
    }

    @objc(finishBrushForTrackedBarcodeCallback:resolver:rejecter:)
    func finishBrushForTrackedBarcodeCallback(
        data: [String: Any],
        resolve: RCTPromiseResolveBlock,
        reject: RCTPromiseRejectBlock
    ) {
        let brushJson = data["brushJson"] as? String
        let selectionIdentifier = data["selectionIdentifier"] as? String
        barcodeSelectionModule.finishBrushForTrackedBarcode(
            brushJson: brushJson,
            selectionIdentifier: selectionIdentifier
        )
        resolve(nil)
    }

    @objc(setTextForAimToSelectAutoHint:resolver:rejecter:)
    func setTextForAimToSelectAutoHint(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let text = data.getString("text") else {
            reject("INVALID_ARGUMENTS", "Missing text parameter", nil)
            return
        }
        barcodeSelectionModule.setTextForAimToSelectAutoHint(
            text: text,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(setTrackedBarcodeBrushProvider:rejecter:)
    func setTrackedBarcodeBrushProvider(
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodeSelectionModule.setTrackedBrushProvider(result: ReactNativeResult(resolve, reject))
    }

    @objc(removeTrackedBarcodeBrushProvider:rejecter:)
    func removeTrackedBarcodeBrushProvider(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeSelectionModule.removeTrackedBarcodeBrushProvider()
        resolve(nil)
    }

    @objc(unfreezeCameraInBarcodeSelection:resolver:rejecter:)
    func unfreezeCameraInBarcodeSelection(
        data: [String: Any],
        resolve: RCTPromiseResolveBlock,
        reject: RCTPromiseRejectBlock
    ) {
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
    func resetBarcodeSelectionSession(
        data: [String: Any],
        resolve: RCTPromiseResolveBlock,
        reject: RCTPromiseRejectBlock
    ) {
        barcodeSelectionModule.resetLatestSession(modeId: data.modeId, frameSequenceId: nil)
        resolve(nil)
    }

    @objc(unselectBarcodes:resolver:rejecter:)
    func unselectBarcodes(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let barcodesJson = data.getString("barcodesJson") else {
            reject("INVALID_ARGUMENTS", "Missing barcodesJson parameter", nil)
            return
        }
        barcodeSelectionModule.unselectBarcodes(
            modeId: data.modeId,
            barcodesJson: barcodesJson,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(setSelectBarcodeEnabled:resolver:rejecter:)
    func setSelectBarcodeEnabled(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let barcodesJson = data.getString("barcodesJson"),
            let enabled = data.getBool("enabled")
        else {
            reject("INVALID_ARGUMENTS", "Missing required parameters", nil)
            return
        }
        barcodeSelectionModule.setSelectBarcodeEnabled(
            modeId: data.modeId,
            barcodesJson: barcodesJson,
            enabled: enabled,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(setBarcodeSelectionModeEnabledState:)
    func setBarcodeSelectionModeEnabledState(data: [String: Any]) {
        let enabled = data.getBool("enabled") ?? false
        barcodeSelectionModule.setModeEnabled(modeId: data.modeId, enabled: enabled)
    }

    @objc(updateBarcodeSelectionBasicOverlay:resolve:reject:)
    func updateBarcodeSelectionBasicOverlay(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let overlayJson = data.getString("overlayJson") else {
            reject("INVALID_ARGUMENTS", "Missing overlayJson parameter", nil)
            return
        }
        barcodeSelectionModule.updateBasicOverlay(overlayJson: overlayJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeSelectionMode:resolve:reject:)
    func updateBarcodeSelectionMode(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let modeJson = data.getString("modeJson") else {
            reject("INVALID_ARGUMENTS", "Missing modeJson parameter", nil)
            return
        }
        barcodeSelectionModule.updateModeFromJson(
            modeId: data.modeId,
            modeJson: modeJson,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(applyBarcodeSelectionModeSettings:resolve:reject:)
    func applyBarcodeSelectionModeSettings(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let modeSettingsJson = data.getString("modeSettingsJson") else {
            reject("INVALID_ARGUMENTS", "Missing modeSettingsJson parameter", nil)
            return
        }
        barcodeSelectionModule.applyModeSettings(
            modeId: data.modeId,
            modeSettingsJson: modeSettingsJson,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(updateBarcodeSelectionFeedback:resolve:reject:)
    func updateBarcodeSelectionFeedback(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let feedbackJson = data.getString("feedbackJson") else {
            reject("INVALID_ARGUMENTS", "Missing feedbackJson parameter", nil)
            return
        }
        barcodeSelectionModule.updateFeedback(
            modeId: data.modeId,
            feedbackJson: feedbackJson,
            result: ReactNativeResult(resolve, reject)
        )
    }
}
