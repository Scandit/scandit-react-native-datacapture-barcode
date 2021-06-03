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
    internal var lastFrameSequenceId: Int?
    internal var lastTrackedBarcodes: [NSNumber: TrackedBarcode]?

    // BarcodeTrackingBasicOverlay
    internal var barcodeTrackingBasicOverlay: BarcodeTrackingBasicOverlay?
    internal let brushForTrackedBarcodeLock =
           CallbackLock<Brush>(name: ScanditDataCaptureBarcodeTrackingEvent.brushForTrackedBarcode.rawValue)

    // BarcodeTrackingAdvanceOverlay
    internal var barcodeTrackingAdvanceOverlay: BarcodeTrackingAdvancedOverlay?
    internal let viewForTrackedBarcodeLock =
        CallbackLock<JSView>(name: ScanditDataCaptureBarcodeTrackingEvent.viewForTrackedBarcode.rawValue)
    internal let anchorForTrackedBarcodeLock =
        CallbackLock<Anchor>(name: ScanditDataCaptureBarcodeTrackingEvent.anchorForTrackedBarcode.rawValue)
    internal let offsetForTrackedBarcodeLock =
        CallbackLock<PointWithUnit>(name: ScanditDataCaptureBarcodeTrackingEvent.offsetForTrackedBarcode.rawValue)

    internal let decoder = JSONDecoder()

    override init() {
        super.init()
        registerDeserializer()
    }

    override class func requiresMainQueueSetup() -> Bool {
        return false
    }

    override var methodQueue: DispatchQueue! {
        return SDCSharedMethodQeueue
    }

    @objc override func invalidate() {
        super.invalidate()
        unlockLocks()
    }

    internal var trackedBarcodeViewCache = [RCTRootView: TrackedBarcode]()

    internal func unlockLocks() {
        didUpdateSessionLock.reset()
        brushForTrackedBarcodeLock.reset()
        viewForTrackedBarcodeLock.reset()
        anchorForTrackedBarcodeLock.reset()
        offsetForTrackedBarcodeLock.reset()
    }

    // Empty methods to unify the logic on the TS side for supporting functionality automatically provided by RN on iOS,
    // but custom implemented on Android.

    @objc func registerListenerForEvents() { }
    @objc func unregisterListenerForEvents() { }
    @objc func registerListenerForAdvancedOverlayEvents() { }
    @objc func unregisterListenerForAdvancedOverlayEvents() { }
    @objc func registerListenerForBasicOverlayEvents() { }
    @objc func unregisterListenerForBasicOverlayEvents() { }
}
