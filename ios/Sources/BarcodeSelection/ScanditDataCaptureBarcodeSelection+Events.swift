/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

import Foundation

enum ScanditDataCaptureBarcodeSelectionEvent: String, CaseIterable {
    case didUpdateSelection = "barcodeSelectionListener-didUpdateSelection"
    case didUpdateSession = "barcodeSelectionListener-didUpdateSession"
    case brushForAimedBarcode = "barcodeSelectionAimedBrushProvider-brushForBarcode"
    case brushForTrackedBarcode = "barcodeSelectionTrackedBrushProvider-brushForBarcode"
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
        sendEvent(withName: name.rawValue, body: body)
        return true
    }
}
