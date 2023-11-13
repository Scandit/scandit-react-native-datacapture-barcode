/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2020- Scandit AG. All rights reserved.
*/

import Foundation
import ScanditBarcodeCapture

extension ScanditDataCaptureBarcodeTracking: BarcodeTrackingBasicOverlayDelegate {
    func barcodeTrackingBasicOverlay(_ overlay: BarcodeTrackingBasicOverlay,
                                     brushFor trackedBarcode: TrackedBarcode) -> Brush? {
        let body = ["trackedBarcode": trackedBarcode.jsonString]
        let brush = brushForTrackedBarcodeLock.wait {
            return sendEvent(withName: .brushForTrackedBarcode, body: body)
        }
        return brush
    }

    @objc(finishBrushForTrackedBarcodeCallback:)
    func finishBrushForTrackedBarcodeCallback(jsonString: String?) {
        guard let jsonString = jsonString else {
            brushForTrackedBarcodeLock.unlock(value: nil)
            return
        }

        let brush = Brush(jsonString: jsonString)
        brushForTrackedBarcodeLock.unlock(value: brush)
    }

    func barcodeTrackingBasicOverlay(_ overlay: BarcodeTrackingBasicOverlay, didTap trackedBarcode: TrackedBarcode) {
        let body = ["trackedBarcode": trackedBarcode.jsonString]
        guard sendEvent(withName: .didTapTrackedBarcode, body: body) else { return }
    }
}
