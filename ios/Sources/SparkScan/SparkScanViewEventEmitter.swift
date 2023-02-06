/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

import ScanditBarcodeCapture
import ScanditDataCaptureCore

enum SparkScanViewEvent: String, CaseIterable {
    case barcodeCountButtonTapped = "barcodeCountButtonTapped"
    case fastFindButtonTapped = "fastFindButtonTapped"
}

@objc(RNTSDCSparkScanViewEventEmitter)
class SparkScanViewEventEmitter: RCTEventEmitter {
    var hasListeners = false

    override func supportedEvents() -> [String]! {
        SparkScanViewEvent.allCases.map { $0.rawValue }
    }

    override func startObserving() {
        hasListeners = true
    }

    override func stopObserving() {
        hasListeners = false
    }

    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    override var methodQueue: DispatchQueue! {
        SDCSharedMethodQeueue
    }
}

extension SparkScanViewEventEmitter: SparkScanViewUIDelegate {
    func barcodeCountButtonTapped(in view: SparkScanView) {
        send(event: .barcodeCountButtonTapped)
    }

    func fastFindButtonTapped(in view: SparkScanView) {
        send(event: .fastFindButtonTapped)
    }

    func send(event: SparkScanViewEvent) {
        guard hasListeners else { return }
        sendEvent(withName: event.rawValue, body: [])
    }
}
