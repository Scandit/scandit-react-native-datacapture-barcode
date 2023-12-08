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

    @objc func registerListenerForEvents() {
        barcodeCaptureModule.addListener()
    }

    @objc func unregisterListenerForEvents() {
        barcodeCaptureModule.removeListener()
    }

    @objc(finishDidUpdateSessionCallback:)
    func finishDidUpdateSessionCallback(enabled: Bool) {
        barcodeCaptureModule.finishDidUpdateSession(enabled: enabled)
    }


    @objc(finishDidScanCallback:)
    func finishDidScanCallback(enabled: Bool) {
        barcodeCaptureModule.finishDidScan(enabled: enabled)
    }

    @objc(resetSession:rejecter:)
    func resetSession(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeCaptureModule.resetSession(frameSequenceId: nil)
        resolve(nil)
    }

    @objc override func invalidate() {
        super.invalidate()
        barcodeCaptureModule.didStop()
    }

    @objc(setModeEnabledState:)
    func setModeEnabledState(enabled: Bool) {
        barcodeCaptureModule.setModeEnabled(enabled: enabled)
    }
}
