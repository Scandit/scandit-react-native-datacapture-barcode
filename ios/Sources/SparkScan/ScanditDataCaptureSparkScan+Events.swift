/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

enum ScanditDataCaptureSparkScanEvent: String, CaseIterable {
    case didUpdateSession = "sparkScanListener-didUpdateSession"
    case didScan = "sparkScanListener-didScan"
}

extension ScanditDataCaptureSparkScan {
    override func supportedEvents() -> [String]! {
        ScanditDataCaptureSparkScanEvent.allCases.map { $0.rawValue }
    }

    override func startObserving() {
        hasListeners = true
    }

    override func stopObserving() {
        hasListeners = false
        unlockLocks()
    }

    func sendEvent(withName name: ScanditDataCaptureSparkScanEvent, body: Any!) -> Bool {
        guard hasListeners else { return false }
        sendEvent(withName: name.rawValue, body: body)
        return true
    }
}
