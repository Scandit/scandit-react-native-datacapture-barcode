/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

import Foundation

enum ScanditDataCaptureBarcodeCaptureEvent: String, CaseIterable {
    case didUpdateSession = "barcodeCaptureListener-didUpdateSession"
    case didScan = "barcodeCaptureListener-didScan"
}

extension ScanditDataCaptureBarcodeCapture {
    override func supportedEvents() -> [String]! {
        return ScanditDataCaptureBarcodeCaptureEvent.allCases.map({$0.rawValue})
    }

    override func startObserving() {
        hasListeners = true
    }

    override func stopObserving() {
        hasListeners = false
        unlockLocks()
    }

    func sendEvent(withName name: ScanditDataCaptureBarcodeCaptureEvent, body: Any!) -> Bool {
        guard hasListeners else { return false }
        sendEvent(withName: name.rawValue, body: body)
        return true
    }
}
