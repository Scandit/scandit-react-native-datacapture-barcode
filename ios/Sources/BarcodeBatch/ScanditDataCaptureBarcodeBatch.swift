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

@objc(ScanditDataCaptureBarcodeBatch)
class ScanditDataCaptureBarcodeBatch: RCTEventEmitter {
    var barcodeBatchModule: BarcodeBatchModule!

    var trackedBarcodeViewCache = [RCTRootView: TrackedBarcode]()

    override init() {
        super.init()
        let emitter = ReactNativeEmitter(emitter: self)
        let barcodeBatchListener = FrameworksBarcodeBatchListener(emitter: emitter)
        let basicOverlayListener = FrameworksBarcodeBatchBasicOverlayListener(emitter: emitter)
        let advancedOverlayListener = FrameworksBarcodeBatchAdvancedOverlayListener(emitter: emitter)
        barcodeBatchModule = BarcodeBatchModule(barcodeBatchListener: barcodeBatchListener,
                                                      barcodeBatchBasicOverlayListener: basicOverlayListener,
                                                      barcodeBatchAdvancedOverlayListener: advancedOverlayListener,
                                                      emitter: emitter)
        barcodeBatchModule.didStart()
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
        barcodeBatchModule.didStop()
    }

    deinit {
        invalidate()
    }

    override func constantsToExport() -> [AnyHashable: Any]! {
        ["Defaults": barcodeBatchModule.defaults.toEncodable()]
    }

    override func supportedEvents() -> [String]! {
        FrameworksBarcodeBatchEvent.allCases.map{ $0.rawValue }
    }

    @objc func registerListenerForEvents() {
        barcodeBatchModule.addBarcodeBatchListener()
    }

    @objc func unregisterListenerForEvents() {
        barcodeBatchModule.removeBarcodeBatchListener()
    }
    @objc func registerListenerForAdvancedOverlayEvents() {
        barcodeBatchModule.addAdvancedOverlayListener()
    }

    @objc func unregisterListenerForAdvancedOverlayEvents() {
        barcodeBatchModule.removeAdvancedOverlayListener()
    }

    @objc func registerListenerForBasicOverlayEvents() {
        barcodeBatchModule.addBasicOverlayListener()
    }

    @objc func unregisterListenerForBasicOverlayEvents() {
        barcodeBatchModule.removeBasicOverlayListener()
    }

    @objc(setBrushForTrackedBarcode:barcodeId:resolver:rejecter:)
    func setBrushForTrackedBarcode(brushJSON: String?,
                                   barcodeId: Int,
                                   resolve: RCTPromiseResolveBlock,
                                   reject: RCTPromiseRejectBlock) {
        let payload: [String: Any?] = [
            "brush": brushJSON,
            "trackedBarcodeID": barcodeId
        ]
        if let jsonString = String(data: try! JSONSerialization.data(withJSONObject: payload),
                                   encoding: .utf8) {
            barcodeBatchModule.setBasicOverlayBrush(with: jsonString)
        }
        resolve(nil)
    }

    @objc(clearTrackedBarcodeBrushes:rejecter:)
    func clearTrackedBarcodeBrushes(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeBatchModule.clearBasicOverlayTrackedBarcodeBrushes()
        resolve(nil)
    }

    @objc(finishBrushForTrackedBarcodeCallback:)
    func finishBrushForTrackedBarcodeCallback(jsonString: String?) {
        barcodeBatchModule.setBasicOverlayBrush(with: jsonString!)
    }

    @objc(finishDidUpdateSessionCallback:)
    func finishDidUpdateSessionCallback(enabled: Bool) {
        barcodeBatchModule.finishDidUpdateSession(enabled: enabled)
    }

    @objc(setViewForTrackedBarcode:trackedBarcodeId:resolver:rejecter:)
    func setViewForTrackedBarcode(viewJSON: String?,
                                  trackedBarcodeId: Int,
                                  resolve: RCTPromiseResolveBlock,
                                  reject: RCTPromiseRejectBlock) {
        if let viewJSON = viewJSON {
            let configuration = try! JSONSerialization.jsonObject(with: viewJSON.data(using: .utf8)!,
                                                                  options: []) as! [String: Any]
            let jsView = try! JSView(with: configuration)
            dispatchMain {
                let rctRootView = self.rootViewWith(jsView: jsView)
                if let trackedBarcode = self.barcodeBatchModule.trackedBarcode(by: trackedBarcodeId) {
                    self.trackedBarcodeViewCache[rctRootView] = trackedBarcode
                }
                self.barcodeBatchModule.setViewForTrackedBarcode(
                    view: rctRootView,
                    trackedBarcodeId: trackedBarcodeId,
                    sessionFrameSequenceId: nil
                )
            }
        } else {
            dispatchMain {
                self.barcodeBatchModule.setViewForTrackedBarcode(
                    view: nil,
                    trackedBarcodeId: trackedBarcodeId,
                    sessionFrameSequenceId: nil
                )
            }
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
        barcodeBatchModule.setAnchorForTrackedBarcode(anchorParams: json)
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
        barcodeBatchModule.setOffsetForTrackedBarcode(offsetParams: json)
        resolve(nil)
    }

    @objc(clearTrackedBarcodeViews:rejecter:)
    func clearTrackedBarcodeViews(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeBatchModule.clearAdvancedOverlayTrackedBarcodeViews()
        resolve(nil)
    }

    @objc(resetSession:rejecter:)
    func resetSession(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeBatchModule.resetSession(frameSequenceId: nil)
        resolve(nil)
    }

    @objc(setModeEnabledState:)
    func setModeEnabledState(enabled: Bool) {
        barcodeBatchModule.setModeEnabled(enabled: enabled)
    }

    @objc(updateBarcodeBatchBasicOverlay:resolve:reject:)
    func updateBarcodeBatchBasicOverlay(overlayJson: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        barcodeBatchModule.updateBasicOverlay(overlayJson: overlayJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeBatchAdvancedOverlay:resolve:reject:)
    func updateBarcodeBatchAdvancedOverlay(overlayJson: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        barcodeBatchModule.updateAdvancedOverlay(overlayJson: overlayJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeBatchMode:resolve:reject:)
    func updateBarcodeBatchMode(modeJson: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        barcodeBatchModule.updateModeFromJson(modeJson: modeJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(applyBarcodeBatchModeSettings:resolve:reject:)
    func applyBarcodeBatchModeSettings(modeSettingsJson: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        barcodeBatchModule.applyModeSettings(modeSettingsJson: modeSettingsJson, result: ReactNativeResult(resolve, reject))
    }

    func rootViewWith(jsView: JSView) -> ScanditRootView {
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

extension ScanditDataCaptureBarcodeBatch: RCTRootViewDelegate {
    func rootViewDidChangeIntrinsicSize(_ rootView: RCTRootView!) {
        guard let view = rootView as? ScanditRootView else { return }
        rootView.bounds.size = rootView.intrinsicContentSize
        guard let trackedBarcode = trackedBarcodeViewCache[view] else {
            // Barcode was lost before the view updated its size.
            return
        }
        barcodeBatchModule.setViewForTrackedBarcode(view: view,
                                                       trackedBarcodeId: trackedBarcode.identifier,
                                                       sessionFrameSequenceId: nil)
    }
}

public class ScanditRootView: RCTRootView, TappableView {
    public var didTap: (() -> Void)?
}
