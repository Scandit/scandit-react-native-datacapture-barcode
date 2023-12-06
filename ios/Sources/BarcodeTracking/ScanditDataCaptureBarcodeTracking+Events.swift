/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2020- Scandit AG. All rights reserved.
*/

import Foundation

enum ScanditDataCaptureBarcodeTrackingEvent: String, CaseIterable {
    case didUpdateSession = "barcodeTrackingListener-didUpdateSession"
    case brushForTrackedBarcode = "barcodeTrackingBasicOverlayListener-brushForTrackedBarcode"
    case didTapTrackedBarcode = "barcodeTrackingBasicOverlayListener-didTapTrackedBarcode"
    case viewForTrackedBarcode = "barcodeTrackingAdvancedOverlayListener-viewForTrackedBarcode"
    case anchorForTrackedBarcode = "barcodeTrackingAdvancedOverlayListener-anchorForTrackedBarcode"
    case offsetForTrackedBarcode = "barcodeTrackingAdvancedOverlayListener-offsetForTrackedBarcode"
}

extension ScanditDataCaptureBarcodeTracking {
    override func supportedEvents() -> [String]! {
        return ScanditDataCaptureBarcodeTrackingEvent.allCases.map({$0.rawValue})
    }

    override func startObserving() {
        hasListeners = true
    }

    override func stopObserving() {
        hasListeners = false
        unlockLocks()
    }

    func sendEvent(withName name: ScanditDataCaptureBarcodeTrackingEvent, body: Any!) -> Bool {
        guard hasListeners else { return false }
        sendEvent(withName: name.rawValue, body: body)
        return true
    }
}
