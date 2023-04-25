/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import ScanditDataCaptureCore

extension ScanditDataCaptureBarcodeCount: BarcodeCountViewDelegate {
    func barcodeCountView(_ view: BarcodeCountView,
                          didTapRecognizedBarcode trackedBarcode: TrackedBarcode) {
        guard hasListeners else { return }
        let body = ["trackedBarcode": trackedBarcode.jsonString]
        send(.recognizedBarcodeTapped, body: body)
    }

    func barcodeCountView(_ view: BarcodeCountView,
                          didTapFilteredBarcode trackedBarcode: TrackedBarcode) {
        guard hasListeners else { return }
        let body = ["trackedBarcode": trackedBarcode.jsonString]
        send(.filteredBarcodeTapped, body: body)
    }

    func barcodeCountView(_ view: BarcodeCountView,
                          didTapUnrecognizedBarcode trackedBarcode: TrackedBarcode) {
        guard hasListeners else { return }
        let body = ["trackedBarcode": trackedBarcode.jsonString]
        send(.unrecognizedBarcodeTapped, body: body)
    }

    func barcodeCountView(_ view: BarcodeCountView,
                          didTapRecognizedBarcodeNotInList trackedBarcode: TrackedBarcode) {
        guard hasListeners else { return }
        let body = ["trackedBarcode": trackedBarcode.jsonString]
        send(.recognizedBarcodeNotInListTapped, body: body)
    }

    func barcodeCountView(_ view: BarcodeCountView,
                          brushForRecognizedBarcode trackedBarcode: TrackedBarcode) -> Brush? {
        // TODO: https://scandit.atlassian.net/browse/SDC-16607
        return view.recognizedBrush
//        guard hasListeners else { return nil }
//        let body = ["trackedBarcode": trackedBarcode.jsonString]
//        let brush = brushForRecognizedBarcodeLock.wait {
//            return send(.brushForRecognizedBarcode, body: body)
//        }
//        return brush
    }

    func barcodeCountView(_ view: BarcodeCountView,
                          brushForUnrecognizedBarcode trackedBarcode: TrackedBarcode) -> Brush? {
        // TODO: https://scandit.atlassian.net/browse/SDC-16607
        return view.unrecognizedBrush
//        guard hasListeners else { return nil }
//        let body = ["trackedBarcode": trackedBarcode.jsonString]
//        let brush = brushForRecognizedBarcodeLock.wait {
//            return send(.brushForUnrecognizedBarcode, body: body)
//        }
//        return brush
    }

    @objc
    func finishBrushForUnrecognizedBarcodeCallback(jsonString: String?) {
        guard let jsonString = jsonString, let brush = Brush(jsonString: jsonString) else {
            brushForUnrecognizedBarcodeLock.unlock(value: nil)
            return
        }
        brushForUnrecognizedBarcodeLock.unlock(value: brush)
    }

    func barcodeCountView(_ view: BarcodeCountView,
                          brushForRecognizedBarcodeNotInList trackedBarcode: TrackedBarcode) -> Brush? {
        // TODO: https://scandit.atlassian.net/browse/SDC-16607
        return view.notInListBrush
//        guard hasListeners else { return nil }
//        let body = ["trackedBarcode": trackedBarcode.jsonString]
//        let brush = brushForRecognizedBarcodeLock.wait {
//            return send(.brushForRecognizedBarcodeNotInList, body: body)
//        }
//        return brush
    }

    @objc
    func finishBrushForRecognizedBarcodeCallback(jsonString: String?) {
        guard let jsonString = jsonString, let brush = Brush(jsonString: jsonString) else {
            brushForRecognizedBarcodeLock.unlock(value: nil)
            return
        }
        brushForRecognizedBarcodeLock.unlock(value: brush)
    }

    @objc
    func finishBrushForRecognizedBarcodeNotInListCallback(jsonString: String?) {
        guard let jsonString = jsonString, let brush = Brush(jsonString: jsonString) else {
            brushForRecognizedBarcodeNotInListLock.unlock(value: nil)
            return
        }
        brushForRecognizedBarcodeNotInListLock.unlock(value: brush)
    }
}

extension ScanditDataCaptureBarcodeCount: BarcodeCountViewUIDelegate {
    func singleScanButtonTapped(for view: BarcodeCountView) {
        guard hasListeners else { return }
        send(.singleScanButtonTapped, body: [])
    }

    func listButtonTapped(for view: BarcodeCountView) {
        guard hasListeners else { return }
        send(.listButtonTapped, body: [])
    }

    func exitButtonTapped(for view: BarcodeCountView) {
        guard hasListeners else { return }
        send(.exitButtonTapped, body: [])
    }
}

extension ScanditDataCaptureBarcodeCount: BarcodeCountListener {
    func barcodeCount(_ barcodeCount: BarcodeCount,
                      didScanIn session: BarcodeCountSession,
                      frameData: FrameData) {
        guard hasListeners else { return }

        ScanditDataCaptureCore.lastFrame = frameData
        defer { ScanditDataCaptureCore.lastFrame = nil }

        barcodeCountSession = session

        let body = ["session": session.jsonString]
        // Since the state of barcodeCount is handled automatically inside the BarcodeCountView
        // we don't need to handle the result of this function.
        didScanInSessionLock.wait(afterDoing: {
            return send(.didScanInSession, body: body)
        })
    }

    @objc
    func finishOnScan() {
        didScanInSessionLock.unlock(value: true)
    }

    func barcodeCount(_ barcodeCount: BarcodeCount,
                      didUpdate session: BarcodeCountSession,
                      frameData: FrameData) {
        // We don't need to handle this callback
    }
}

extension ScanditDataCaptureBarcodeCount: BarcodeCountCaptureListListener {
    func captureList(_ captureList: BarcodeCountCaptureList,
                     didUpdate session: BarcodeCountCaptureListSession) {
        guard hasListeners else { return }
        let body = ["session": session.jsonString]
        send(.didUpdateCaptureList, body: body)
    }
}
