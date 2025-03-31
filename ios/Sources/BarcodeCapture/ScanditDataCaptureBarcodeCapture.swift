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
        let frameworksBarcodeListener = FrameworksBarcodeCaptureListener(emitter: emitter)
        barcodeCaptureModule = BarcodeCaptureModule(barcodeCaptureListener: frameworksBarcodeListener)
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

    @objc func registerBarcodeCaptureListenerForEvents() {
        barcodeCaptureModule.addListener()
    }

    @objc func unregisterBarcodeCaptureListenerForEvents() {
        barcodeCaptureModule.removeListener()
    }

    @objc(finishBarcodeCaptureDidUpdateSession:)
    func finishBarcodeCaptureDidUpdateSession(_ data: NSDictionary) {
        let enabled = data["enabled"] as! Bool
        barcodeCaptureModule.finishDidUpdateSession(enabled: enabled)
    }

    @objc(finishBarcodeCaptureDidScan:)
    func finishBarcodeCaptureDidScan(_ data: NSDictionary) {
        let enabled = data["enabled"] as! Bool
        barcodeCaptureModule.finishDidScan(enabled: enabled)
    }

    @objc(resetBarcodeCaptureSession:rejecter:)
    func resetBarcodeCaptureSession(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeCaptureModule.resetSession(frameSequenceId: nil)
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
    func setBarcodeCaptureModeEnabledState(_ data: NSDictionary) {
        let enabled = data["enabled"] as! Bool
        barcodeCaptureModule.setModeEnabled(enabled: enabled)
    }

    @objc(updateBarcodeCaptureOverlay:resolve:reject:)
    func updateBarcodeCaptureOverlay(_ data: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let overlayJson = data["overlayJson"] as! String
        barcodeCaptureModule.updateOverlay(overlayJson: overlayJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeCaptureMode:resolve:reject:)
    func updateBarcodeCaptureMode(_ data: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let modeJson = data["modeJson"] as! String
        barcodeCaptureModule.updateModeFromJson(modeJson: modeJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(applyBarcodeCaptureModeSettings:resolve:reject:)
    func applyBarcodeCaptureModeSettings(_ data: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let modeSettingsJson = data["modeSettingsJson"] as! String
        barcodeCaptureModule.applyModeSettings(modeSettingsJson: modeSettingsJson, result: ReactNativeResult(resolve, reject))
    }
}
