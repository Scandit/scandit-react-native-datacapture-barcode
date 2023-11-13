/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

enum ScanditDataCaptureSparkScanEvent: String, CaseIterable {
    case didUpdateSession = "SparkScanListener.didUpdateSession"
    case didScan = "SparkScanListener.didScan"
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
