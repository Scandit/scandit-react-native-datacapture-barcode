/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

import Foundation

enum ScanditDataCaptureBarcodeSelectionEvent: String, CaseIterable {
    case didUpdateSelection = "BarcodeSelectionListener.didUpdateSelection"
    case didUpdateSession = "BarcodeSelectionListener.didUpdateSession"
    case brushForAimedBarcode = "BarcodeSelectionAimedBrushProvider.brushForBarcode"
    case brushForTrackedBarcode = "BarcodeSelectionTrackedBrushProvider.brushForBarcode"
}

extension ScanditDataCaptureBarcodeSelection {
    override func supportedEvents() -> [String]! {
        return ScanditDataCaptureBarcodeSelectionEvent.allCases.map({$0.rawValue})
    }

    override func startObserving() {
        hasListeners = true
    }

    override func stopObserving() {
        hasListeners = false
        unlockLocks()
    }

    func sendEvent(withName name: ScanditDataCaptureBarcodeSelectionEvent, body: Any!) -> Bool {
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
