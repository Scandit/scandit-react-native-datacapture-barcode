/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

extension ScanditDataCaptureBarcodeTracking {
    @objc(setViewForTrackedBarcode:frameSequenceId:trackedBarcodeId:resolver:rejecter:)
    func setViewForTrackedBarcode(viewJSON: String?,
                                  frameSequenceId: Int,
                                  trackedBarcodeId: Int,
                                  resolve: RCTPromiseResolveBlock,
                                  reject: RCTPromiseRejectBlock) {
        guard let lastFrameSequenceId = lastFrameSequenceId,
            lastFrameSequenceId == frameSequenceId else {
                let error = ScanditDataCaptureBarcodeError.invalidSequenceId
                reject(String(error.code), error.message, error)
                return
        }

        guard let lastTrackedBarcodes = lastTrackedBarcodes,
            let trackedBarcode = lastTrackedBarcodes[NSNumber(value: trackedBarcodeId)] else {
                let error = ScanditDataCaptureBarcodeError.trackedBarcodeNotFound
                reject(String(error.code), error.message, error)
                return
        }

        guard let barcodeTrackingAdvanceOverlay = barcodeTrackingAdvanceOverlay else {
            let error = ScanditDataCaptureBarcodeError.nilOverlay
            reject(String(error.code), error.message, error)
            return
        }

        guard let viewJSON = viewJSON else {
            barcodeTrackingAdvanceOverlay.setView(nil, for: trackedBarcode)
            resolve(nil)
            return
        }

        guard
            let configuration = try? JSONSerialization.jsonObject(with: viewJSON.data(using: .utf8)!,
                                                                  options: []) as? [String: Any],
            let unboxedConfiguration = configuration,
            let jsView = try? JSView(with: unboxedConfiguration) else {
                let error = ScanditDataCaptureBarcodeError.viewInvalid
                reject(String(error.code), error.message, error)
                return
        }

        DispatchQueue.main.async {
            let view = self.rootViewWith(jsView: jsView, trackedBarcode: trackedBarcode)
            barcodeTrackingAdvanceOverlay.setView(view, for: trackedBarcode)
        }
    }

    @objc(setAnchorForTrackedBarcode:frameSequenceId:trackedBarcodeId:resolver:rejecter:)
    func setAchorForTrackedBarcode(anchorJSON: String,
                                   frameSequenceId: Int,
                                   trackedBarcodeId: Int,
                                   resolve: RCTPromiseResolveBlock,
                                   reject: RCTPromiseRejectBlock) {

        guard let lastFrameSequenceId = lastFrameSequenceId,
            lastFrameSequenceId == frameSequenceId else {
                let error = ScanditDataCaptureBarcodeError.invalidSequenceId
                reject(String(error.code), error.message, error)
                return
        }

        guard let lastTrackedBarcodes = lastTrackedBarcodes,
            let trackedBarcode = lastTrackedBarcodes[NSNumber(value: trackedBarcodeId)] else {
                let error = ScanditDataCaptureBarcodeError.trackedBarcodeNotFound
                reject(String(error.code), error.message, error)
                return
        }

        guard let barcodeTrackingAdvanceOverlay = barcodeTrackingAdvanceOverlay else {
            let error = ScanditDataCaptureBarcodeError.nilOverlay
            reject(String(error.code), error.message, error)
            return
        }

        var anchor = Anchor.center

        guard SDCAnchorFromJSONString(anchorJSON, &anchor) else {
            let error = ScanditDataCaptureBarcodeError.deserializationError
            reject(String(error.code), error.message, error)
            return
        }

        barcodeTrackingAdvanceOverlay.setAnchor(anchor, for: trackedBarcode)
    }

    @objc(setOffsetForTrackedBarcode:frameSequenceId:trackedBarcodeId:resolver:rejecter:)
    func setOffsetForTrackedBarcode(offsetJSON: String,
                                    frameSequenceId: Int,
                                    trackedBarcodeId: Int,
                                    resolve: RCTPromiseResolveBlock,
                                    reject: RCTPromiseRejectBlock) {

        guard let lastFrameSequenceId = lastFrameSequenceId,
            lastFrameSequenceId == frameSequenceId else {
                let error = ScanditDataCaptureBarcodeError.invalidSequenceId
                reject(String(error.code), error.message, error)
                self.offset[trackedBarcodeId] = nil
                return
        }

        guard let lastTrackedBarcodes = lastTrackedBarcodes,
            let trackedBarcode = lastTrackedBarcodes[NSNumber(value: trackedBarcodeId)] else {
                let error = ScanditDataCaptureBarcodeError.trackedBarcodeNotFound
                reject(String(error.code), error.message, error)
                self.offset[trackedBarcodeId] = nil
                return
        }

        guard let barcodeTrackingAdvanceOverlay = barcodeTrackingAdvanceOverlay else {
            let error = ScanditDataCaptureBarcodeError.nilOverlay
            reject(String(error.code), error.message, error)
            self.offset[trackedBarcodeId] = nil
            return
        }

        var offset = PointWithUnit.zero

        guard SDCPointWithUnitFromJSONString(offsetJSON, &offset) else {
            let error = ScanditDataCaptureBarcodeError.deserializationError
            reject(String(error.code), error.message, error)
            self.offset[trackedBarcodeId] = nil
            return
        }

        self.offset[trackedBarcodeId] = offset
        barcodeTrackingAdvanceOverlay.setOffset(offset, for: trackedBarcode)
    }

    @objc(clearTrackedBarcodeViews:rejecter:)
    func clearTrackedBarcodeViews(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        guard let barcodeAdvancedOverlay = barcodeTrackingAdvanceOverlay else {
            let error = ScanditDataCaptureBarcodeError.nilOverlay
            reject(String(error.code), error.message, error)
            return
        }

        barcodeAdvancedOverlay.clearTrackedBarcodeViews()
        resolve(nil)
    }
}

extension ScanditDataCaptureBarcodeTracking: RCTRootViewDelegate {
    func rootViewWith(jsView: JSView, trackedBarcode: TrackedBarcode) -> RCTRootView {
        // To support self sizing js views we need to leverage the RCTRootViewDelegate
        // see https://reactnative.dev/docs/communication-ios
        let view = RCTRootView(bridge: bridge,
                               moduleName: jsView.moduleName,
                               initialProperties: jsView.initialProperties)
        view.sizeFlexibility = .widthAndHeight
        view.delegate = self
        view.backgroundColor = .clear
        trackedBarcodeViewCache[view] = trackedBarcode
        return view
    }

    func rootViewDidChangeIntrinsicSize(_ rootView: RCTRootView!) {
        rootView.bounds.size = rootView.intrinsicContentSize
        guard let trackedBarcode = trackedBarcodeViewCache[rootView] else {
            // Barcode was lost before the view updated its size.
            return
        }
        barcodeTrackingAdvanceOverlay?.setView(rootView, for: trackedBarcode)
    }
}
