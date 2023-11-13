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
        guard hasListeners else { return nil }
        let body = ["trackedBarcode": trackedBarcode.jsonString]
        send(.brushForRecognizedBarcode, body: body)
        brushRequests[trackedBarcode.identifier.keyFor(prefix: ScanditDataCaptureBarcodeCountEvent.brushForRecognizedBarcode.rawValue)] = trackedBarcode
        return nil
    }

    func barcodeCountView(_ view: BarcodeCountView,
                          brushForUnrecognizedBarcode trackedBarcode: TrackedBarcode) -> Brush? {
        guard hasListeners else { return nil }
        let body = ["trackedBarcode": trackedBarcode.jsonString]
        send(.brushForUnrecognizedBarcode, body: body)
        brushRequests[trackedBarcode.identifier.keyFor(prefix: ScanditDataCaptureBarcodeCountEvent.brushForUnrecognizedBarcode.rawValue)] = trackedBarcode
        return nil
    }

    @objc(finishBrushForUnrecognizedBarcodeCallback:jsonString:trackedBarcodeId:resolve:reject:)
    func finishBrushForUnrecognizedBarcodeCallback(
        reactTag: NSNumber,
        jsonString: String?,
        trackedBarcodeId: Int,
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let jsonString = jsonString, let brush = Brush(jsonString: jsonString) else {
            let error = ScanditDataCaptureBarcodeCountViewError.wrongArgument(argument: "brushJson")
            reject(error.message, String(error.errorCode), error)
            return
        }
        
        guard let parentView = self.parentView(tag: reactTag) as? BarcodeCountViewWrapperView else {
            let error = ScanditDataCaptureBarcodeCountViewError.noParentView(tag: reactTag)
            reject(error.message, String(error.errorCode), error)
            return
        }
        
        guard let barcodeCountView = parentView.barcodeCountView else {
            let error = ScanditDataCaptureBarcodeCountViewError.noBarcodeCountView
            reject(error.message, String(error.errorCode), error)
            return
        }
        
        let key = trackedBarcodeId.keyFor(prefix: ScanditDataCaptureBarcodeCountEvent.brushForUnrecognizedBarcode.rawValue)
        guard let trackedBarcode = brushRequests[key] else {
            return
        }
        
        brushRequests.removeValue(forKey: key)
        DispatchQueue.main.async {
            barcodeCountView.setBrush(brush, forUnrecognizedBarcode: trackedBarcode)
        }
    }

    func barcodeCountView(_ view: BarcodeCountView,
                          brushForRecognizedBarcodeNotInList trackedBarcode: TrackedBarcode) -> Brush? {
        guard hasListeners else { return nil }
        let body = ["trackedBarcode": trackedBarcode.jsonString]
        send(.brushForRecognizedBarcodeNotInList, body: body)
        brushRequests[trackedBarcode.identifier.keyFor(prefix: ScanditDataCaptureBarcodeCountEvent.brushForRecognizedBarcodeNotInList.rawValue)] = trackedBarcode
        return nil
    }

    @objc(finishBrushForRecognizedBarcodeCallback:jsonString:trackedBarcodeId:resolve:reject:)
    func finishBrushForRecognizedBarcodeCallback(reactTag: NSNumber,
                                                 jsonString: String?,
                                                 trackedBarcodeId: Int,
                                                 resolve: @escaping RCTPromiseResolveBlock,
                                                 reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let jsonString = jsonString, let brush = Brush(jsonString: jsonString) else {
            let error = ScanditDataCaptureBarcodeCountViewError.wrongArgument(argument: "brushJson")
            reject(error.message, String(error.errorCode), error)
            return
        }
        
        guard let parentView = self.parentView(tag: reactTag) as? BarcodeCountViewWrapperView else {
            let error = ScanditDataCaptureBarcodeCountViewError.noParentView(tag: reactTag)
            reject(error.message, String(error.errorCode), error)
            return
        }
        
        guard let barcodeCountView = parentView.barcodeCountView else {
            let error = ScanditDataCaptureBarcodeCountViewError.noBarcodeCountView
            reject(error.message, String(error.errorCode), error)
            return
        }
        
        let key = trackedBarcodeId.keyFor(prefix: ScanditDataCaptureBarcodeCountEvent.brushForRecognizedBarcode.rawValue)
        guard let trackedBarcode = brushRequests[key] else {
            return
        }
        
        brushRequests.removeValue(forKey: key)
        DispatchQueue.main.async {
            barcodeCountView.setBrush(brush, forRecognizedBarcode: trackedBarcode)
        }
    }

    @objc(finishBrushForRecognizedBarcodeNotInListCallback:jsonString:trackedBarcodeId:resolve:reject:)
    func finishBrushForRecognizedBarcodeNotInListCallback(
        reactTag: NSNumber,
        jsonString: String?,
        trackedBarcodeId: Int,
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let jsonString = jsonString, let brush = Brush(jsonString: jsonString) else {
            let error = ScanditDataCaptureBarcodeCountViewError.wrongArgument(argument: "brushJson")
            reject(error.message, String(error.errorCode), error)
            return
        }
        
        guard let parentView = self.parentView(tag: reactTag) as? BarcodeCountViewWrapperView else {
            let error = ScanditDataCaptureBarcodeCountViewError.noParentView(tag: reactTag)
            reject(error.message, String(error.errorCode), error)
            return
        }
        
        guard let barcodeCountView = parentView.barcodeCountView else {
            let error = ScanditDataCaptureBarcodeCountViewError.noBarcodeCountView
            reject(error.message, String(error.errorCode), error)
            return
        }
        
        let key = trackedBarcodeId.keyFor(prefix: ScanditDataCaptureBarcodeCountEvent.brushForRecognizedBarcodeNotInList.rawValue)
        guard let trackedBarcode = brushRequests[key] else {
            return
        }
        
        brushRequests.removeValue(forKey: key)
        DispatchQueue.main.async {
            barcodeCountView.setBrush(brush, forRecognizedBarcodeNotInList: trackedBarcode)
        }
    }
    
    func captureList(_ captureList: BarcodeCountCaptureList, didCompleteWith session: BarcodeCountCaptureListSession) {
        guard hasListeners else { return }
        send(.didCompleteCaptureList, body: [])
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

fileprivate extension Int {
    func keyFor(prefix: String) -> String {
        return  "\(prefix)-\(self)"
    }
}

