/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

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
    internal var hasListeners = false

    internal let didUpdateSelectionLock =
        CallbackLock<Bool>(name: ScanditDataCaptureBarcodeSelectionEvent.didUpdateSelection.rawValue)
    internal let didUpdateSessionLock =
        CallbackLock<Bool>(name: ScanditDataCaptureBarcodeSelectionEvent.didUpdateSession.rawValue)

    internal var barcodeSelection: BarcodeSelection?
    internal var barcodeSelectionSession: BarcodeSelectionSession?
    internal var barcodeSelectionBasicOverlay: BarcodeSelectionBasicOverlay?

    internal var trackedBrushProviderFlag: Bool = false
    internal var aimedBrushProviderFlag: Bool = false
    
    internal var trackedBrushProvider: RNTBarcodeSelectionTrackedBrushProvider?
    internal var aimedBrushProvider: RNTBarcodeSelectionAimedBrushProvider?
    
    internal let cachedBrushesQueue = DispatchQueue(label: "cachedBrushesQueue")
    
    override init() {
        super.init()
        registerDeserializer()
    }

    override class func requiresMainQueueSetup() -> Bool {
        return true
    }

    override var methodQueue: DispatchQueue! {
        return sdcSharedMethodQueue
    }

    @objc override func invalidate() {
        super.invalidate()
        unlockLocks()
    }

    func unlockLocks() {
        didUpdateSelectionLock.reset()
        didUpdateSessionLock.reset()
    }

    @objc(getCount:resolver:rejecter:)
    func getCount(selectionIdentifier: String,
                  resolve: RCTPromiseResolveBlock,
                  reject: RCTPromiseRejectBlock) {
        guard let session = barcodeSelectionSession else {
            let error = ScanditDataCaptureBarcodeError.nilSession
            reject(String(error.code), error.message, error)
            return
        }
        resolve(session.count(for: selectionIdentifier))
    }

    @objc(increaseCountForBarcodes:resolver:rejecter:)
    func increaseCountForBarcodes(barcodesJson: String,
                                  resolve: RCTPromiseResolveBlock,
                                  reject: RCTPromiseRejectBlock) {
        guard let barcodeSelection = barcodeSelection else {
            let error = ScanditDataCaptureBarcodeError.nilMode
            reject(String(error.code), error.message, error)
            return
        }
        barcodeSelection.increaseCountForBarcodes(fromJsonString: barcodesJson)
        resolve(nil)
    }

    @objc(unselectBarcodes:resolver:rejecter:)
    func unselectBarcodes(barcodesJson: String,
                          resolve: RCTPromiseResolveBlock,
                          reject: RCTPromiseRejectBlock) {
        guard let barcodeSelection = barcodeSelection else {
            let error = ScanditDataCaptureBarcodeError.nilMode
            reject(String(error.code), error.message, error)
            return
        }
        barcodeSelection.unselectBarcodes(fromJsonString: barcodesJson)
        resolve(nil)
    }

    @objc(setSelectBarcodeEnabled:enabled:resolver:rejecter:)
    func setSelectBarcodeEnabled(barcodesJson: String,
                                 enabled: Bool,
                                 resolve: RCTPromiseResolveBlock,
                                 reject: RCTPromiseRejectBlock) {
        guard let barcodeSelection = barcodeSelection else {
            let error = ScanditDataCaptureBarcodeError.nilMode
            reject(String(error.code), error.message, error)
            return
        }
        barcodeSelection.setSelectBarcodeFromJsonString(barcodesJson, enabled: enabled)
    }

    @objc(resetSession:rejecter:)
    func resetSession(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        guard let session = barcodeSelectionSession else {
            let error = ScanditDataCaptureBarcodeError.nilSession
            reject(String(error.code), error.message, error)
            return
        }
        session.reset()
        resolve(nil)
    }

    @objc(unfreezeCamera:rejecter:)
    func unfreezeCamera(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        guard let barcodeSelection = barcodeSelection else {
            let error = ScanditDataCaptureBarcodeError.nilMode
            reject(String(error.code), error.message, error)
            return
        }
        barcodeSelection.unfreezeCamera()
        resolve(nil)
    }

    @objc(selectAimedBarcode:rejecter:)
    func selectAimedBarcode(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        guard let barcodeSelection = barcodeSelection else {
            let error = ScanditDataCaptureBarcodeError.nilMode
            reject(String(error.code), error.message, error)
            return
        }
        barcodeSelection.selectAimedBarcode()
        resolve(nil)
    }

    @objc(resetMode:rejecter:)
    func resetMode(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        guard let barcodeSelection = barcodeSelection else {
            let error = ScanditDataCaptureBarcodeError.nilMode
            reject(String(error.code), error.message, error)
            return
        }
        barcodeSelection.reset()
        resolve(nil)
    }
    
    @objc(finishBrushForAimedBarcodeCallback:selectionIdentifier:resolver:rejecter:)
    func finishBrushForAimedBarcodeCallback(brushJson: String?,
                                            selectionIdentifier: String?,
                                            resolve: RCTPromiseResolveBlock,
                                            reject: RCTPromiseRejectBlock) {
        aimedBrushProvider?.onFinishCallback(selectionIdentifier: selectionIdentifier, brushJson: brushJson, resolve: resolve, reject: reject)
    }
    
    @objc(setAimedBarcodeBrushProvider:rejecter:)
    func setAimedBarcodeBrushProvider(resolve: RCTPromiseResolveBlock,
                                        reject: RCTPromiseRejectBlock) {
        aimedBrushProvider = RNTBarcodeSelectionAimedBrushProvider(cachedBrushesQueue: cachedBrushesQueue)
        aimedBrushProvider?.eventEmitter = self
        aimedBrushProviderFlag = true
        resolve(nil)
    }
    @objc(removeAimedBarcodeBrushProvider:rejecter:)
    func removeAimedBarcodeBrushProvider(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        aimedBrushProviderFlag = false
        barcodeSelectionBasicOverlay?.setAimedBarcodeBrushProvider(nil)
        aimedBrushProvider = nil
        resolve(nil)
    }
    @objc(finishBrushForTrackedBarcodeCallback:selectionIdentifier:resolver:rejecter:)
    func finishBrushForTrackedBarcodeCallback(brushJson: String?,
                                              selectionIdentifier: String?,
                                              resolve: RCTPromiseResolveBlock,
                                              reject: RCTPromiseRejectBlock) {
        trackedBrushProvider?.onFinishCallback(selectionIdentifier: selectionIdentifier, brushJson: brushJson, resolve: resolve, reject: reject)
    }

    @objc(setTrackedBarcodeBrushProvider:rejecter:)
    func setTrackedBarcodeBrushProvider(resolve: RCTPromiseResolveBlock,
                                        reject: RCTPromiseRejectBlock) {
        trackedBrushProvider = RNTBarcodeSelectionTrackedBrushProvider(cachedBrushesQueue: cachedBrushesQueue)
        trackedBrushProvider?.eventEmitter = self
        trackedBrushProviderFlag = true
        resolve(nil)
    }
    
    @objc(removeTrackedBarcodeBrushProvider:rejecter:)
    func removeTrackedBarcodeBrushProvider(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        trackedBrushProviderFlag = false
        barcodeSelectionBasicOverlay?.setTrackedBarcodeBrushProvider(nil)
        trackedBrushProvider = nil
        resolve(nil)
    }

    // Empty methods to unify the logic on the TS side for supporting functionality automatically provided by RN on iOS,
    // but custom implemented on Android.
    @objc func registerListenerForEvents() {
        // Empty on purpose
    }

    @objc func unregisterListenerForEvents() {
        // Empty on purpose
    }
}
