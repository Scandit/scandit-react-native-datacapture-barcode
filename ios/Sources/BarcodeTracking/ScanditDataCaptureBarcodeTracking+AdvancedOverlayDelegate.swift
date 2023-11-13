/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

extension ScanditDataCaptureBarcodeTracking: BarcodeTrackingAdvancedOverlayDelegate {
    func barcodeTrackingAdvancedOverlay(_ overlay: BarcodeTrackingAdvancedOverlay,
                                        viewFor trackedBarcode: TrackedBarcode) -> UIView? {
        let body = ["trackedBarcode": trackedBarcode.jsonString]
        sendEvent(withName: .viewForTrackedBarcode, body: body)
        return nil
    }

    func barcodeTrackingAdvancedOverlay(_ overlay: BarcodeTrackingAdvancedOverlay,
                                        anchorFor trackedBarcode: TrackedBarcode) -> Anchor {
        let body = ["trackedBarcode": trackedBarcode.jsonString]
        sendEvent(withName: .anchorForTrackedBarcode, body: body)

        return .center
    }

    func barcodeTrackingAdvancedOverlay(_ overlay: BarcodeTrackingAdvancedOverlay,
                                        offsetFor trackedBarcode: TrackedBarcode) -> PointWithUnit {
        let body = ["trackedBarcode": trackedBarcode.jsonString]
        sendEvent(withName: .offsetForTrackedBarcode, body: body)

        return .zero
    }
}
