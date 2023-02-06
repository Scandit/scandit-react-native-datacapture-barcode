/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

import ScanditBarcodeCapture
import ScanditDataCaptureCore

protocol RNTSDCSparkScanViewListener: class {
    func didUpdate(sparkScanView: SparkScanView?)
}

protocol RNTSDCSparkScanListener: class {
    func didUpdate(sparkScan: SparkScan?)
}

@objc(ScanditDataCaptureSparkScan)
class ScanditDataCaptureSparkScan: RCTEventEmitter {
    internal var hasListeners = false

    internal let didUpdateSessionLock =
        CallbackLock<Bool>(name: ScanditDataCaptureSparkScanEvent.didUpdateSession.rawValue)
    internal let didScanLock =
        CallbackLock<Bool>(name: ScanditDataCaptureSparkScanEvent.didScan.rawValue)

    internal var sparkScanSession: SparkScanSession?

    internal var sparkScan: SparkScan? {
        willSet {
            sparkScan?.removeListener(self)
        }
        didSet {
            sparkScan?.addListener(self)
        }
    }

    internal lazy var sparkScanDeserializer: SparkScanDeserializer = {
        let deserializer = SparkScanDeserializer()
        deserializer.delegate = self
        return deserializer
    }()

    private var context: DataCaptureContext?

    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    override var methodQueue: DispatchQueue! {
        SDCSharedMethodQeueue
    }

    @objc override func invalidate() {
        super.invalidate()
        unlockLocks()
    }

    func unlockLocks() {
        didScanLock.reset()
        didUpdateSessionLock.reset()
    }

    // MARK: - SparkScan Module public API

    @objc(resetSession:rejecter:)
    func resetSession(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        guard let session = sparkScanSession else {
            let error = ScanditDataCaptureBarcodeError.nilSession
            reject(String(error.code), error.message, error)
            return
        }
        session.reset()
        resolve(nil)
    }

    // Empty methods to unify the logic on the TS side for supporting functionality automatically provided by RN on iOS,
    // but custom implemented on Android.

    @objc func registerListenerForEvents() { }
    @objc func unregisterListenerForEvents() { }
}
