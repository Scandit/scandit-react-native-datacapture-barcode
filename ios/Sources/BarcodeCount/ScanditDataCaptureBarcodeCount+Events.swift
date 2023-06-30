/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import Foundation

enum ScanditDataCaptureBarcodeCountEvent: String, CaseIterable {
    case didScanInSession = "BarcodeCountListener.onScan"

    case didUpdateCaptureList = "BarcodeCountCaptureListListener.didUpdateSession"

    case brushForRecognizedBarcode = "BarcodeCountViewListener.brushForRecognizedBarcode"
    case brushForRecognizedBarcodeNotInList = "BarcodeCountViewListener.brushForRecognizedBarcodeNotInList"
    case brushForUnrecognizedBarcode = "BarcodeCountViewListener.brushForUnrecognizedBarcode"
    case filteredBarcodeTapped = "BarcodeCountViewListener.didTapFilteredBarcode"
    case recognizedBarcodeNotInListTapped = "BarcodeCountViewListener.didTapRecognizedBarcodeNotInList"
    case recognizedBarcodeTapped = "BarcodeCountViewListener.didTapRecognizedBarcode"
    case unrecognizedBarcodeTapped = "BarcodeCountViewListener.didTapUnrecognizedBarcode"
    case didCompleteCaptureList = "BarcodeCountViewListener.didCompleteCaptureList"

    case singleScanButtonTapped = "BarcodeCountViewUiListener.onSingleScanButtonTapped"
    case listButtonTapped = "BarcodeCountViewUiListener.onListButtonTapped"
    case exitButtonTapped = "BarcodeCountViewUiListener.onExitButtonTapped"
}

extension ScanditDataCaptureBarcodeCount {
    override func supportedEvents() -> [String]! {
        ScanditDataCaptureBarcodeCountEvent.allCases.map { $0.rawValue }
    }

    override func startObserving() {
        hasListeners = true
    }

    override func stopObserving() {
        hasListeners = false
        unlockLocks()
    }

    @discardableResult
    func send(_ event: ScanditDataCaptureBarcodeCountEvent, body: Any) -> Bool {
        guard hasListeners else { return false }
        do {
            let bodyData = try JSONSerialization.data(withJSONObject: body, options: [])
            let jsonBody = String(data: bodyData, encoding: .utf8)
            sendEvent(withName: event.rawValue, body: jsonBody)
        } catch {
            sendEvent(withName: event.rawValue, body: body)
        }
        return true
    }
}
