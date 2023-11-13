/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2020- Scandit AG. All rights reserved.
*/

import Foundation

enum ScanditDataCaptureBarcodeTrackingEvent: String, CaseIterable {
    case didUpdateSession = "BarcodeTrackingListener.didUpdateSession"
    case brushForTrackedBarcode = "BarcodeTrackingBasicOverlayListener.brushForTrackedBarcode"
    case didTapTrackedBarcode = "BarcodeTrackingBasicOverlayListener.didTapTrackedBarcode"
    case viewForTrackedBarcode = "BarcodeTrackingAdvancedOverlayListener.widgetForTrackedBarcode"
    case anchorForTrackedBarcode = "BarcodeTrackingAdvancedOverlayListener.anchorForTrackedBarcode"
    case offsetForTrackedBarcode = "BarcodeTrackingAdvancedOverlayListener.offsetForTrackedBarcode"
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

    @discardableResult
    func sendEvent(withName name: ScanditDataCaptureBarcodeTrackingEvent, body: Any!) -> Bool {
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
