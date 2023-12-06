/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2020- Scandit AG. All rights reserved.
*/

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

extension ScanditDataCaptureBarcodeTracking: BarcodeTrackingListener {
    func barcodeTracking(_ barcodeTracking: BarcodeTracking,
                         didUpdate session: BarcodeTrackingSession,
                         frameData: FrameData) {
        ScanditDataCaptureCore.lastFrame = frameData
        defer { ScanditDataCaptureCore.lastFrame = nil }

        barcodeTrackingSession = session

        let removedTrackedBarcodes = session.removedTrackedBarcodes
        DispatchQueue.main.async {
            for barcode in removedTrackedBarcodes {
                guard let pair =
                    self.trackedBarcodeViewCache
                        .first(where: {$0.value.identifier == barcode.intValue}) else { continue }
                self.trackedBarcodeViewCache.removeValue(forKey: pair.key)
            }
        }

        lastFrameSequenceId = session.frameSequenceId
        lastTrackedBarcodes = session.trackedBarcodes

        guard let value = didUpdateSessionLock.wait(afterDoing: {
            return sendEvent(withName: .didUpdateSession, body: ["session": session.jsonString])
        }) else { return }
        barcodeTracking.isEnabled = value
    }

    @objc(finishDidUpdateSessionCallback:)
    func finishDidUpdateSessionCallback(enabled: Bool) {
        didUpdateSessionLock.unlock(value: enabled)
    }
}
