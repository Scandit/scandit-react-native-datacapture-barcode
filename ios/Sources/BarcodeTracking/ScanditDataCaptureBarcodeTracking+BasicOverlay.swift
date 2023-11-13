/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2020- Scandit AG. All rights reserved.
*/

import Foundation
import ScanditBarcodeCapture

extension ScanditDataCaptureBarcodeTracking {
    @objc(setBrushForTrackedBarcode:frameSequenceId:barcodeId:resolver:rejecter:)
    func setBrushForTrackedBarcode(brushJSON: String?,
                                   frameSequenceId: Int,
                                   barcodeId: Int,
                                   resolve: RCTPromiseResolveBlock,
                                   reject: RCTPromiseRejectBlock) {
        guard let lastFrameSequenceId = latestSession?.frameSequenceId,
            lastFrameSequenceId == frameSequenceId else {
                let error = ScanditDataCaptureBarcodeError.invalidSequenceId
                reject(String(error.code), error.message, error)
                return
        }

        guard let lastTrackedBarcodes = latestSession?.trackedBarcodes,
            let trackedBarcode = lastTrackedBarcodes[NSNumber(value: barcodeId)] else {
                let error = ScanditDataCaptureBarcodeError.trackedBarcodeNotFound
                reject(String(error.code), error.message, error)
                return
        }

        guard let barcodeTrackingBasicOverlay = barcodeTrackingBasicOverlay else {
            let error = ScanditDataCaptureBarcodeError.nilOverlay
            reject(String(error.code), error.message, error)
            return
        }

        guard let brushJSON = brushJSON else {
            barcodeTrackingBasicOverlay.setBrush(nil, for: trackedBarcode)
            resolve(nil)
            return
        }

        guard let brush = Brush(jsonString: brushJSON) else {
            let error = ScanditDataCaptureBarcodeError.brushInvalid
            reject(String(error.code), error.message, error)
            return
        }

        barcodeTrackingBasicOverlay.setBrush(brush, for: trackedBarcode)
        resolve(nil)
    }

    @objc(clearTrackedBarcodeBrushes:rejecter:)
    func clearTeackedBarcodeBrushes(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeTrackingBasicOverlay?.clearTrackedBarcodeBrushes()
        resolve(nil)
    }
}
