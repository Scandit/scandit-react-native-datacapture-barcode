/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

import ScanditBarcodeCapture
import ScanditDataCaptureCore

extension ScanditDataCaptureSparkScan: SparkScanListener {
    func sparkScan(_ sparkScan: SparkScan,
                   didScanIn session: SparkScanSession,
                   frameData: FrameData?) {
        ScanditDataCaptureCore.lastFrame = frameData
        defer { ScanditDataCaptureCore.lastFrame = nil }

        sparkScanSession = session

        // Since the state of sparkScan is handled automatically inside the SparkScanView
        // we don't need to handle the result of this function.
        didScanLock.wait(afterDoing: {
            return sendEvent(withName: .didScan,
                             body: ["session": session.jsonString])
        })
    }

    @objc(finishDidScanCallback:)
    func finishDidScanCallback(enabled: Bool) {
        didScanLock.unlock(value: enabled)
    }

    func sparkScan(_ sparkScan: SparkScan,
                   didUpdate session: SparkScanSession,
                   frameData: FrameData?) {
        ScanditDataCaptureCore.lastFrame = frameData
        defer { ScanditDataCaptureCore.lastFrame = nil }

        sparkScanSession = session

        // Since the state of sparkScan is handled automatically inside the SparkScanView
        // we don't need to handle the result of this function.
        didUpdateSessionLock.wait(afterDoing: {
            return sendEvent(withName: .didUpdateSession,
                             body: ["session": session.jsonString])
        })
    }

    @objc(finishDidUpdateSessionCallback:)
    func finishDidUpdateSessionCallback(enabled: Bool) {
        didUpdateSessionLock.unlock(value: enabled)
    }
}
