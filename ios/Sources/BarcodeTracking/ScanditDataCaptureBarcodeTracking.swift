/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2020- Scandit AG. All rights reserved.
*/

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

enum ScanditDataCaptureBarcodeError: Int, CustomNSError {
    case invalidSequenceId = 1
    case trackedBarcodeNotFound
    case brushInvalid
    case nilOverlay
    case viewInvalid
    case missingModuleName
    case deserializationError
    case nilSession
    case nilMode

    var domain: String { return "ScanditDataCaptureBarcodeErrorDomain" }

    var code: Int {
        return rawValue
    }

    var message: String {
        switch self {
        case .invalidSequenceId:
            return "The sequence id does not match the current sequence id."
        case .trackedBarcodeNotFound:
            return "Tracked barcode not found."
        case .brushInvalid:
            return "It was not possible to deserialize a valid Brush."
        case .nilOverlay:
            return "Overlay is null."
        case .viewInvalid:
            return "It was not possible to deserialize a valid View."
        case .missingModuleName:
            return "moduleName is required."
        case .deserializationError:
            return "Unable to deserialize a valid object."
        case .nilSession:
            return "Session is null."
        case .nilMode:
            return "Mode is null."
        }
    }

    var errorUserInfo: [String: Any] {
        return [NSLocalizedDescriptionKey: message]
    }
}

@objc(ScanditDataCaptureBarcodeTracking)
class ScanditDataCaptureBarcodeTracking: RCTEventEmitter {
    // BarcodeTrackingListener
    internal var hasListeners = false
    internal let didUpdateSessionLock =
        CallbackLock<Bool>(name: ScanditDataCaptureBarcodeTrackingEvent.didUpdateSession.rawValue)

    internal var latestSession: BarcodeTrackingSession?

    // BarcodeTrackingBasicOverlay
    internal var barcodeTrackingBasicOverlay: BarcodeTrackingBasicOverlay?
    internal let brushForTrackedBarcodeLock =
           CallbackLock<Brush>(name: ScanditDataCaptureBarcodeTrackingEvent.brushForTrackedBarcode.rawValue)

    // BarcodeTrackingAdvanceOverlay
    internal var barcodeTrackingAdvanceOverlay: BarcodeTrackingAdvancedOverlay?

    internal let decoder = JSONDecoder()

    internal var offset: [Int: PointWithUnit] = [:]

    internal var barcodeTrackingSession: BarcodeTrackingSession?

    override init() {
        super.init()
        registerDeserializer()
    }

    @objc(resetSession:rejecter:)
    func resetSession(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        guard let session = barcodeTrackingSession else {
            let error = ScanditDataCaptureBarcodeError.nilSession
            reject(String(error.code), error.message, error)
            return
        }
        session.reset()
        resolve(nil)
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

    internal var trackedBarcodeViewCache = [RCTRootView: TrackedBarcode]()

    internal func unlockLocks() {
        didUpdateSessionLock.reset()
        brushForTrackedBarcodeLock.reset()
    }

    // Empty methods to unify the logic on the TS side for supporting functionality automatically provided by RN on iOS,
    // but custom implemented on Android.
    @objc func registerListenerForEvents() {
        // Empty on purpose
    }

    @objc func unregisterListenerForEvents() {
        // Empty on purpose
    }
    @objc func registerListenerForAdvancedOverlayEvents() {
        // Empty on purpose
    }

    @objc func unregisterListenerForAdvancedOverlayEvents() {
        // Empty on purpose
    }

    @objc func registerListenerForBasicOverlayEvents() {
        // Empty on purpose
    }

    @objc func unregisterListenerForBasicOverlayEvents() {
        // Empty on purpose
    }
}
