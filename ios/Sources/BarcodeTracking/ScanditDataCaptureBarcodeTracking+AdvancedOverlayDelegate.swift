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
        guard let jsView = viewForTrackedBarcodeLock.wait(afterDoing: {
            return sendEvent(withName: .viewForTrackedBarcode, body: body)
        }) else {
            return nil
        }

        return rootViewWith(jsView: jsView, trackedBarcode: trackedBarcode)
    }

    func barcodeTrackingAdvancedOverlay(_ overlay: BarcodeTrackingAdvancedOverlay,
                                        anchorFor trackedBarcode: TrackedBarcode) -> Anchor {
        let body = ["trackedBarcode": trackedBarcode.jsonString]
        guard let anchor = anchorForTrackedBarcodeLock.wait(afterDoing: {
            return sendEvent(withName: .anchorForTrackedBarcode, body: body)
        }) else {
            return .center
        }

        return anchor
    }

    func barcodeTrackingAdvancedOverlay(_ overlay: BarcodeTrackingAdvancedOverlay,
                                        offsetFor trackedBarcode: TrackedBarcode) -> PointWithUnit {
        let body = ["trackedBarcode": trackedBarcode.jsonString]
        guard let offset = offsetForTrackedBarcodeLock.wait(afterDoing: {
            return sendEvent(withName: .offsetForTrackedBarcode, body: body)
        }) else {
            let barcodeOffset = self.offset[trackedBarcode.identifier]
            self.offset.removeValue(forKey: trackedBarcode.identifier)
            return barcodeOffset ?? .zero
        }

        return offset
    }
}

extension ScanditDataCaptureBarcodeTracking {
    @objc(finishViewForTrackedBarcodeCallback:)
    func finishViewForTrackedBarcodeCallback(jsonString: String?) {
        guard let jsonString = jsonString else {
            viewForTrackedBarcodeLock.unlock(value: nil)
            return
        }

        guard
            let configuration = try? JSONSerialization.jsonObject(with: jsonString.data(using: .utf8)!,
                                                                  options: []) as? [String: Any],
            let unboxedConfiguration = configuration,
            let jsView = try? JSView(with: unboxedConfiguration) else {
                fatalError("\(jsonString) is not a valid JSView.")
        }
        viewForTrackedBarcodeLock.unlock(value: jsView)
    }

    @objc(finishAnchorForTrackedBarcodeCallback:)
    func finishAnchorForTrackedBarcodeCallback(jsonString: String) {
        var anchor = Anchor.center
        SDCAnchorFromJSONString(jsonString, &anchor)
        anchorForTrackedBarcodeLock.unlock(value: anchor)
    }

    @objc(finishOffsetForTrackedBarcodeCallback:)
    func finishOffsetForTrackedBarcodeCallback(jsonString: String) {
        var offset = PointWithUnit.zero
        SDCPointWithUnitFromJSONString(jsonString,
                                       &offset)
        offsetForTrackedBarcodeLock.unlock(value: offset)
    }
}
