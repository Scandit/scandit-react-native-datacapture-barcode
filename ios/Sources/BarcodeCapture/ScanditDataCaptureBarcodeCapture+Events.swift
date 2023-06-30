/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

import Foundation

enum ScanditDataCaptureBarcodeCaptureEvent: String, CaseIterable {
    case didUpdateSession = "BarcodeCaptureListener.didUpdateSession"
    case didScan = "BarcodeCaptureListener.didScan"
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
        do {
            let bodyData = try JSONSerialization.data(withJSONObject: body, options: [])
            let jsonBody = String(data: bodyData, encoding: .utf8)
            sendEvent(withName: name.rawValue, body: jsonBody)
        } catch {
            sendEvent(withName: name.rawValue, body: body)
        }
        return true
    }
}
