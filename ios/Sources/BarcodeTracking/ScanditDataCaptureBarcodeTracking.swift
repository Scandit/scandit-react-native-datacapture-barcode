/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2020- Scandit AG. All rights reserved.
*/

import Foundation
import React
import ScanditDataCaptureCore
import ScanditFrameworksCore
import ScanditFrameworksBarcode

@objc(ScanditDataCaptureBarcodeTracking)
class ScanditDataCaptureBarcodeTracking: RCTEventEmitter {
    var barcodeTrackingModule: BarcodeTrackingModule!

    var trackedBarcodeViewCache = [RCTRootView: TrackedBarcode]()

    override init() {
        super.init()
        let emitter = ReactNativeEmitter(emitter: self)
        let barcodeTrackingListener = FrameworksBarcodeTrackingListener(emitter: emitter)
        let basicOverlayListener = FrameworksBarcodeTrackingBasicOverlayListener(emitter: emitter)
        let advancedOverlayListener = FrameworksBarcodeTrackingAdvancedOverlayListener(emitter: emitter)
        barcodeTrackingModule = BarcodeTrackingModule(barcodeTrackingListener: barcodeTrackingListener,
                                                      barcodeTrackingBasicOverlayListener: basicOverlayListener,
                                                      barcodeTrackingAdvancedOverlayListener: advancedOverlayListener,
                                                      emitter: emitter)
        barcodeTrackingModule.didStart()
    }

    override class func requiresMainQueueSetup() -> Bool {
        return true
    }

    override var methodQueue: DispatchQueue! {
        return sdcSharedMethodQueue
    }

    @objc override func invalidate() {
        super.invalidate()
        trackedBarcodeViewCache.removeAll()
        barcodeTrackingModule.didStop()
    }

    override func constantsToExport() -> [AnyHashable: Any]! {
        ["Defaults": barcodeTrackingModule.defaults.toEncodable()]
    }

    override func supportedEvents() -> [String]! {
        FrameworksBarcodeTrackingEvent.allCases.map{ $0.rawValue }
    }

    @objc func registerListenerForEvents() {
        barcodeTrackingModule.addBarcodeTrackingListener()
    }

    @objc func unregisterListenerForEvents() {
        barcodeTrackingModule.removeBarcodeTrackingListener()
    }
    @objc func registerListenerForAdvancedOverlayEvents() {
        barcodeTrackingModule.addAdvancedOverlayListener()
    }

    @objc func unregisterListenerForAdvancedOverlayEvents() {
        barcodeTrackingModule.removeAdvancedOverlayListener()
    }

    @objc func registerListenerForBasicOverlayEvents() {
        barcodeTrackingModule.addBasicOverlayListener()
    }

    @objc func unregisterListenerForBasicOverlayEvents() {
        barcodeTrackingModule.removeBasicOverlayListener()
    }

    @objc(setBrushForTrackedBarcode:barcodeId:resolver:rejecter:)
    func setBrushForTrackedBarcode(brushJSON: String?,
                                   barcodeId: Int,
                                   resolve: RCTPromiseResolveBlock,
                                   reject: RCTPromiseRejectBlock) {
        let payload: [String: Any?] = [
            "brush": brushJSON,
            "trackedBarcodeID": String(barcodeId)
        ]
        let jsonString = String(data: try! JSONSerialization.data(withJSONObject: payload),
                                encoding: .utf8)!
        barcodeTrackingModule.setBasicOverlayBrush(with: jsonString)
        resolve(nil)
    }

    @objc(clearTrackedBarcodeBrushes:rejecter:)
    func clearTrackedBarcodeBrushes(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeTrackingModule.clearBasicOverlayTrackedBarcodeBrushes()
        resolve(nil)
    }

    @objc(finishBrushForTrackedBarcodeCallback:)
    func finishBrushForTrackedBarcodeCallback(jsonString: String?) {
        barcodeTrackingModule.setBasicOverlayBrush(with: jsonString!)
    }

    @objc(finishDidUpdateSessionCallback:)
    func finishDidUpdateSessionCallback(enabled: Bool) {
        barcodeTrackingModule.finishDidUpdateSession(enabled: enabled)
    }

    @objc(setViewForTrackedBarcode:trackedBarcodeId:resolver:rejecter:)
    func setViewForTrackedBarcode(viewJSON: String?,
                                  trackedBarcodeId: Int,
                                  resolve: RCTPromiseResolveBlock,
                                  reject: RCTPromiseRejectBlock) {
        let configuration = try! JSONSerialization.jsonObject(with: viewJSON!.data(using: .utf8)!,
                                                              options: []) as! [String: Any]
        let jsView = try! JSView(with: configuration)
        dispatchMainSync {
            let rctRootView = rootViewWith(jsView: jsView)
            trackedBarcodeViewCache[rctRootView] = barcodeTrackingModule.trackedBarcode(by: trackedBarcodeId)!
            barcodeTrackingModule.setViewForTrackedBarcode(view: rctRootView,
                                                           trackedBarcodeId: trackedBarcodeId,
                                                           sessionFrameSequenceId: nil)
        }
        resolve(nil)
    }

    @objc(setAnchorForTrackedBarcode:trackedBarcodeId:resolver:rejecter:)
    func setAchorForTrackedBarcode(anchorJSON: String,
                                   trackedBarcodeId: Int,
                                   resolve: RCTPromiseResolveBlock,
                                   reject: RCTPromiseRejectBlock) {
        let json: [String: Any?] = [
            "anchor": anchorJSON,
            "identifier": trackedBarcodeId,
            "sessionFrameSequenceID": nil
        ]
        barcodeTrackingModule.setAnchorForTrackedBarcode(anchorParams: json)
        resolve(nil)
    }

    @objc(setOffsetForTrackedBarcode:trackedBarcodeId:resolver:rejecter:)
    func setOffsetForTrackedBarcode(offsetJSON: String,
                                    trackedBarcodeId: Int,
                                    resolve: RCTPromiseResolveBlock,
                                    reject: RCTPromiseRejectBlock) {
        let json: [String: Any?] = [
            "offset": offsetJSON,
            "identifier": trackedBarcodeId,
            "sessionFrameSequenceID": nil
        ]
        barcodeTrackingModule.setOffsetForTrackedBarcode(offsetParams: json)
        resolve(nil)
    }

    @objc(clearTrackedBarcodeViews:rejecter:)
    func clearTrackedBarcodeViews(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeTrackingModule.clearAdvancedOverlayTrackedBarcodeViews()
        resolve(nil)
    }

    @objc(resetSession:rejecter:)
    func resetSession(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeTrackingModule.resetSession(frameSequenceId: nil)
        resolve(nil)
    }

    private func rootViewWith(jsView: JSView) -> ScanditRootView {
        // To support self sizing js views we need to leverage the RCTRootViewDelegate
        // see https://reactnative.dev/docs/communication-ios
        let view = ScanditRootView(bridge: bridge,
                                   moduleName: jsView.moduleName,
                                   initialProperties: jsView.initialProperties)
        view.sizeFlexibility = .widthAndHeight
        view.delegate = self
        view.backgroundColor = .clear
        view.isUserInteractionEnabled = true
        view.addGestureRecognizer(TapGestureRecognizerWithClosure { [weak view] in
            guard let view = view else { return }
            view.didTap?()
        })
        return view
    }
}

extension ScanditDataCaptureBarcodeTracking: RCTRootViewDelegate {
    func rootViewDidChangeIntrinsicSize(_ rootView: RCTRootView!) {
        guard let view = rootView as? ScanditRootView else { return }
        rootView.bounds.size = rootView.intrinsicContentSize
        guard let trackedBarcode = trackedBarcodeViewCache[view] else {
            // Barcode was lost before the view updated its size.
            return
        }
        barcodeTrackingModule.setViewForTrackedBarcode(view: view,
                                                       trackedBarcodeId: trackedBarcode.identifier,
                                                       sessionFrameSequenceId: nil)
    }
}

fileprivate class ScanditRootView: RCTRootView, TappableView {
    var didTap: (() -> Void)?
}
