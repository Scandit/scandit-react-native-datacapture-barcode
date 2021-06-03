/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2020- Scandit AG. All rights reserved.
*/

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

@objc(ScanditDataCaptureBarcodeCapture)
class ScanditDataCaptureBarcodeCapture: RCTEventEmitter {
    internal var hasListeners = false

    internal let didUpdateSessionLock =
        CallbackLock<Bool>(name: ScanditDataCaptureBarcodeCaptureEvent.didUpdateSession.rawValue)
    internal let didScanLock =
        CallbackLock<Bool>(name: ScanditDataCaptureBarcodeCaptureEvent.didScan.rawValue)

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

    func unlockLocks() {
        didScanLock.reset()
        didUpdateSessionLock.reset()
    }

    // Empty methods to unify the logic on the TS side for supporting functionality automatically provided by RN on iOS,
    // but custom implemented on Android.

    @objc func registerListenerForEvents() { }
    @objc func unregisterListenerForEvents() { }
}
