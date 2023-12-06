/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

extension ScanditDataCaptureBarcodeCapture: BarcodeCaptureListener {
    func barcodeCapture(_ barcodeCapture: BarcodeCapture,
                        didScanIn session: BarcodeCaptureSession,
                        frameData: FrameData) {
        ScanditDataCaptureCore.lastFrame = frameData
        defer { ScanditDataCaptureCore.lastFrame = nil }

        barcodeCaptureSession = session

        guard let value = didScanLock.wait(afterDoing: {
            return sendEvent(withName: .didScan, body: ["session": session.jsonString])
        }) else { return }
        barcodeCapture.isEnabled = value
    }

    @objc(finishDidScanCallback:)
    func finishDidScanCallback(enabled: Bool) {
        didScanLock.unlock(value: enabled)
    }

    func barcodeCapture(_ barcodeCapture: BarcodeCapture,
                        didUpdate session: BarcodeCaptureSession,
                        frameData: FrameData) {
        ScanditDataCaptureCore.lastFrame = frameData
        defer { ScanditDataCaptureCore.lastFrame = nil }

        barcodeCaptureSession = session

        guard let value = didUpdateSessionLock.wait(afterDoing: {
            return sendEvent(withName: .didUpdateSession, body: ["session": session.jsonString])
        }) else { return }
        barcodeCapture.isEnabled = value
    }

    @objc(finishDidUpdateSessionCallback:)
    func finishDidUpdateSessionCallback(enabled: Bool) {
        didUpdateSessionLock.unlock(value: enabled)
    }
}
