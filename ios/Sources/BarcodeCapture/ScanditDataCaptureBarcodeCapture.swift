/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

import Foundation
import React
import ScanditDataCaptureCore
import ScanditFrameworksBarcode

@objc(ScanditDataCaptureBarcodeCapture)
class ScanditDataCaptureBarcodeCapture: RCTEventEmitter {
    var barcodeCaptureModule: BarcodeCaptureModule!

    override init() {
        super.init()
        let emitter = ReactNativeEmitter(emitter: self)
        barcodeCaptureModule = BarcodeCaptureModule(emitter: emitter)
        barcodeCaptureModule.didStart()
    }

    override class func requiresMainQueueSetup() -> Bool {
        return true
    }

    override var methodQueue: DispatchQueue! {
        return sdcSharedMethodQueue
    }

    override func constantsToExport() -> [AnyHashable : Any]! {
        ["Defaults": barcodeCaptureModule.defaults.toEncodable()]
    }

    override func supportedEvents() -> [String]! {
        FrameworksBarcodeCaptureEvent.allCases.compactMap { $0.rawValue }
    }

    @objc(registerBarcodeCaptureListenerForEvents:)
    func registerBarcodeCaptureListenerForEvents(data: [String: Any]) {
        barcodeCaptureModule.addListener(modeId: data.modeId)
    }

    @objc(unregisterBarcodeCaptureListenerForEvents:)
    func unregisterBarcodeCaptureListenerForEvents(data: [String: Any]) {
        barcodeCaptureModule.removeListener(modeId: data.modeId)
    }

    @objc(finishBarcodeCaptureDidUpdateSession:)
    func finishBarcodeCaptureDidUpdateSession(data: [String: Any]) {
        let enabled = data["enabled"] as! Bool
        barcodeCaptureModule.finishDidUpdateSession(modeId: data.modeId, enabled: enabled)
    }

    @objc(finishBarcodeCaptureDidScan:)
    func finishBarcodeCaptureDidScan(data: [String: Any]) {
        let enabled = data["enabled"] as! Bool
        barcodeCaptureModule.finishDidScan(modeId: data.modeId, enabled: enabled)
    }

    @objc(resetBarcodeCaptureSession:resolver:rejecter:)
    func resetBarcodeCaptureSession(data: [String: Any], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        let frameSequenceId: Int? = data["frameSequenceId"] as? Int
        barcodeCaptureModule.resetSession(frameSequenceId: frameSequenceId)
        resolve(nil)
    }

    @objc override func invalidate() {
        super.invalidate()
        barcodeCaptureModule.didStop()
    }

    deinit {
        invalidate()
    }

    @objc(setBarcodeCaptureModeEnabledState:)
    func setBarcodeCaptureModeEnabledState(data: [String: Any]) {
        let enabled = data["enabled"] as! Bool
        barcodeCaptureModule.setModeEnabled(modeId: data.modeId, enabled: enabled)
    }

    @objc(updateBarcodeCaptureOverlay:resolver:rejecter:)
    func updateBarcodeCaptureOverlay(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let overlayJson = data["overlayJson"] as! String
        barcodeCaptureModule.updateOverlay(data.viewId, overlayJson: overlayJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeCaptureMode:resolver:rejecter:)
    func updateBarcodeCaptureMode(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let modeJson = data["modeJson"] as! String
        barcodeCaptureModule.updateModeFromJson(modeJson: modeJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(applyBarcodeCaptureModeSettings:resolver:rejecter:)
    func applyBarcodeCaptureModeSettings(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let modeSettingsJson = data["modeSettingsJson"] as! String
        barcodeCaptureModule.applyModeSettings(modeId: data.modeId, modeSettingsJson: modeSettingsJson, result: ReactNativeResult(resolve, reject))
    }
}
