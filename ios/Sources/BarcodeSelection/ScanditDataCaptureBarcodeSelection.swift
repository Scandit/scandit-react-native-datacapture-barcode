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

    override init() {
        super.init()
        registerDeserializer()
    }

    override class func requiresMainQueueSetup() -> Bool {
        return true
    }

    override var methodQueue: DispatchQueue! {
        return SDCSharedMethodQeueue
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

    // Empty methods to unify the logic on the TS side for supporting functionality automatically provided by RN on iOS,
    // but custom implemented on Android.

    @objc func registerListenerForEvents() { }
    @objc func unregisterListenerForEvents() { }
}
