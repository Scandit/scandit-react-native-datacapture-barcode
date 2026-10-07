/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

import Foundation
import React
import ScanditDataCaptureCore
import ScanditFrameworksBarcode
import ScanditFrameworksCore

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
        true
    }

    override var methodQueue: DispatchQueue! {
        sdcSharedMethodQueue
    }

    override func constantsToExport() -> [AnyHashable: Any]! {
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
        let enabled = data["enabled"] as? Bool ?? false
        barcodeCaptureModule.finishDidUpdateSession(modeId: data.modeId, enabled: enabled)
    }

    @objc(finishBarcodeCaptureDidScan:)
    func finishBarcodeCaptureDidScan(data: [String: Any]) {
        let enabled = data["enabled"] as? Bool ?? false
        barcodeCaptureModule.finishDidScan(modeId: data.modeId, enabled: enabled)
    }

    @objc(resetBarcodeCaptureSession:rejecter:)
    func resetBarcodeCaptureSession(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeCaptureModule.resetSession()
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
        let enabled = data["enabled"] as? Bool ?? false
        barcodeCaptureModule.setModeEnabled(modeId: data.modeId, enabled: enabled)
    }

    @objc(updateBarcodeCaptureOverlay:resolver:rejecter:)
    func updateBarcodeCaptureOverlay(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let overlayJson = data["overlayJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeCaptureModule.updateOverlay(
            data.viewId,
            overlayJson: overlayJson,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(updateBarcodeCaptureMode:resolver:rejecter:)
    func updateBarcodeCaptureMode(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let modeJson = data["modeJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeCaptureModule.updateModeFromJson(modeJson: modeJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(applyBarcodeCaptureModeSettings:resolver:rejecter:)
    func applyBarcodeCaptureModeSettings(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let modeSettingsJson = data["modeSettingsJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeCaptureModule.applyModeSettings(
            modeId: data.modeId,
            modeSettingsJson: modeSettingsJson,
            result: ReactNativeResult(resolve, reject)
        )
    }
}
