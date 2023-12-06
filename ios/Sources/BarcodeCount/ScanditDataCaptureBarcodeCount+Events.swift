/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import Foundation

enum ScanditDataCaptureBarcodeCountEvent: String, CaseIterable {
    case didScanInSession = "barcodeCountListener-scan"

    case didUpdateCaptureList = "barcodeCountCaptureListListener-onCaptureListSessionUpdated"

    case brushForRecognizedBarcode = "barcodeCountViewListener-brushForRecognizedBarcode"
    case brushForRecognizedBarcodeNotInList = "barcodeCountViewListener-brushForRecognizedBarcodeNotInList"
    case brushForUnrecognizedBarcode = "barcodeCountViewListener-brushForUnrecognizedBarcode"
    case filteredBarcodeTapped = "barcodeCountViewListener-onFilteredBarcodeTapped"
    case recognizedBarcodeNotInListTapped = "barcodeCountViewListener-onRecognizedBarcodeNotInListTapped"
    case recognizedBarcodeTapped = "barcodeCountViewListener-onRecognizedBarcodeTapped"
    case unrecognizedBarcodeTapped = "barcodeCountViewListener-onUnrecognizedBarcodeTapped"

    case singleScanButtonTapped = "barcodeCountViewUiListener-onSingleScanButtonTapped"
    case listButtonTapped = "barcodeCountViewUiListener-onListButtonTapped"
    case exitButtonTapped = "barcodeCountViewUiListener-onExitButtonTapped"
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
        sendEvent(withName: event.rawValue, body: body)
        return true
    }
}
