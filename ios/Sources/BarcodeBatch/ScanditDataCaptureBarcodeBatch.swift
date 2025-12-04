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
class ScanditDataCaptureBarcodeBatch: AdvancedOverlayContainer {
    var barcodeBatchModule: BarcodeBatchModule!

    var trackedBarcodeViewCache = [ScanditRootView: TrackedBarcode]()

    override init() {
        super.init()
        let emitter = ReactNativeEmitter(emitter: self)
        barcodeBatchModule = BarcodeBatchModule(emitter: emitter)
        barcodeBatchModule.didStart()
        
        // Initialize the root view factory cache for new architecture support
        RCTRootViewFactoryCache.shared.initialize()
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

    @objc(registerBarcodeBatchListenerForEvents:)
    func registerBarcodeBatchListenerForEvents(data: [String: Any]) {
        barcodeBatchModule.addBarcodeBatchListener(data.modeId)
    }

    @objc(unregisterBarcodeBatchListenerForEvents:)
    func unregisterBarcodeBatchListenerForEvents(data: [String: Any]) {
        barcodeBatchModule.removeBarcodeBatchListener(data.modeId)
    }
    
    @objc(registerListenerForAdvancedOverlayEvents:)
    func registerListenerForAdvancedOverlayEvents(data: [String: Any]) {
        barcodeBatchModule.addAdvancedOverlayListener(data.dataCaptureViewId)
    }

    @objc(unregisterListenerForAdvancedOverlayEvents:)
    func unregisterListenerForAdvancedOverlayEvents(data: [String: Any]) {
        barcodeBatchModule.removeAdvancedOverlayListener(data.dataCaptureViewId)
    }

    @objc(registerListenerForBasicOverlayEvents:)
    func registerListenerForBasicOverlayEvents(data: [String: Any]) {
        barcodeBatchModule.addBasicOverlayListener(data.dataCaptureViewId)
    }

    @objc(unregisterListenerForBasicOverlayEvents:)
    func unregisterListenerForBasicOverlayEvents(data: [String: Any]) {
        barcodeBatchModule.removeBasicOverlayListener(data.dataCaptureViewId)
    }

    @objc(setBrushForTrackedBarcode:resolver:rejecter:)
    func setBrushForTrackedBarcode(data: [String: Any],
                                   resolve: @escaping RCTPromiseResolveBlock,
                                   reject: @escaping RCTPromiseRejectBlock) {
        guard let brushJSON = data["brushJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        guard let barcodeId = data["trackedBarcodeIdentifier"] as? Int else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeBatchModule.setBasicOverlayBrush(data.dataCaptureViewId, brushJson: brushJSON, trackedBarcodeId: barcodeId)
        resolve(nil)
    }

    @objc(clearTrackedBarcodeBrushes:resolver:rejecter:)
    func clearTrackedBarcodeBrushes(data: [String: Any], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeBatchModule.clearBasicOverlayTrackedBarcodeBrushes(data.dataCaptureViewId)
        resolve(nil)
    }

    @objc(finishBarcodeBatchDidUpdateSessionCallback:)
    func finishBarcodeBatchDidUpdateSessionCallback(data: [String: Any]) {
        guard let enabled = data["enabled"] as? Bool else {
            return
        }
        barcodeBatchModule.finishDidUpdateSession(modeId: data.modeId, enabled: enabled)
    }

    @objc(setViewForTrackedBarcode:resolver:rejecter:)
    func setViewForTrackedBarcode(data: [String: Any],
                                  resolve: @escaping RCTPromiseResolveBlock,
                                  reject: @escaping RCTPromiseRejectBlock) {
        guard let trackedBarcodeId = data["trackedBarcodeIdentifier"] as? Int else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }

        let viewJSON = data["viewJson"] as? String

        if let viewJSON = viewJSON {
            do {
                let configuration = try JSONSerialization.jsonObject(with: viewJSON.data(using: .utf8)!,
                                                                     options: []) as! [String: Any]
                let jsView = try JSView(with: configuration)
                dispatchMain {
                    let rctRootView = self.rootViewWith(jsView: jsView)
                    if let trackedBarcode = self.barcodeBatchModule.trackedBarcode(by: trackedBarcodeId) {
                        self.trackedBarcodeViewCache[rctRootView] = trackedBarcode
                    }
                    
                    self.barcodeBatchModule.setViewForTrackedBarcode(
                        view: rctRootView,
                        trackedBarcodeId: trackedBarcodeId,
                        sessionFrameSequenceId: nil,
                        dataCaptureViewId: data.dataCaptureViewId
                    )
                }
            } catch {
                ReactNativeResult(resolve, reject).reject(error: error)
                return
            }
        } else {
            dispatchMain {
                self.barcodeBatchModule.setViewForTrackedBarcode(
                    view: nil,
                    trackedBarcodeId: trackedBarcodeId,
                    sessionFrameSequenceId: nil,
                    dataCaptureViewId: data.dataCaptureViewId
                )
            }
        }
        resolve(nil)
    }

    @objc(updateSizeOfTrackedBarcodeView:resolver:rejecter:)
    func updateSizeOfTrackedBarcodeView(data: [String: Any],
                                        resolve: @escaping RCTPromiseResolveBlock,
                                        reject: @escaping RCTPromiseRejectBlock) {
        guard let trackedBarcodeId = data["trackedBarcodeIdentifier"] as? Int else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }

        guard let widthValue = data["width"], let width = convertToInt(widthValue) else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }

        guard let heightValue = data["height"], let height = convertToInt(heightValue) else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }

        guard let trackedBarcode = barcodeBatchModule.trackedBarcode(by: trackedBarcodeId) else {
            reject("error", "View for tracked barcode \(trackedBarcodeId) not found.", nil)
            return
        }

        guard let view = trackedBarcodeViewCache.filter { $0.value.identifier == trackedBarcodeId }.first?.key as? ScanditRootView  else {
            reject("error", "View for tracked barcode \(trackedBarcodeId) not found.", nil)
            return
        }

        dispatchMain {
            if view.isAnimating {
                return
            }
            view.isAnimating = true

            let currentWidth = view.frame.width
            let currentHeight = view.frame.height
            let targetWidth = CGFloat(width)
            let targetHeight = CGFloat(height)

            let originalFrame = view.frame
            let originalCenter = view.center

            // view.sizeFlexibility = .none

            UIView.animate(
                withDuration: 0.5,
                delay: 0,
                usingSpringWithDamping: 0.8,
                initialSpringVelocity: 0.3,
                options: [.curveEaseInOut, .allowUserInteraction],
                animations: {
                    let newFrame = CGRect(
                        x: originalCenter.x - targetWidth/2,
                        y: originalCenter.y - targetHeight/2,
                        width: targetWidth,
                        height: targetHeight
                    )
                    view.frame = newFrame
                    view.center = originalCenter
                    view.layoutIfNeeded()
                },
                completion: { finished in
                    view.isAnimating = false
                }
            )
        }

        resolve(nil)
    }

    @objc(setAnchorForTrackedBarcode:resolver:rejecter:)
    func setAchorForTrackedBarcode(data: [String: Any],
                                   resolve: @escaping RCTPromiseResolveBlock,
                                   reject: @escaping RCTPromiseRejectBlock) {
        guard let anchorJSON = data["anchor"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        guard let trackedBarcodeId = data["trackedBarcodeIdentifier"] as? Int else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
 
        barcodeBatchModule.setAnchorForTrackedBarcode(anchorJson: anchorJSON, trackedBarcodeId: trackedBarcodeId, dataCaptureViewId: data.dataCaptureViewId)
        resolve(nil)
    }

    @objc(setOffsetForTrackedBarcode:resolver:rejecter:)
    func setOffsetForTrackedBarcode(data: [String: Any],
                                    resolve: @escaping RCTPromiseResolveBlock,
                                    reject: @escaping RCTPromiseRejectBlock) {
        guard let offsetJSON = data["offsetJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        guard let trackedBarcodeId = data["trackedBarcodeIdentifier"] as? Int else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeBatchModule.setOffsetForTrackedBarcode(offsetJson: offsetJSON, trackedBarcodeId: trackedBarcodeId, dataCaptureViewId: data.dataCaptureViewId)
        resolve(nil)
    }

    @objc(clearTrackedBarcodeViews:resolver:rejecter:)
    func clearTrackedBarcodeViews(data: [String: Any], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeBatchModule.clearAdvancedOverlayTrackedBarcodeViews(data.dataCaptureViewId)
        resolve(nil)
    }

    @objc(resetBarcodeBatchSession:rejecter:)
    func resetBarcodeBatchSession(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        barcodeBatchModule.resetSession(frameSequenceId: nil)
        resolve(nil)
    }

    @objc(setBarcodeBatchModeEnabledState:)
    func setBarcodeBatchModeEnabledState(data: [String: Any]) {
        guard let enabled = data["enabled"] as? Bool else {
            return
        }
        barcodeBatchModule.setModeEnabled(data.modeId, enabled: enabled)
    }

    @objc(updateBarcodeBatchBasicOverlay:resolve:reject:)
    func updateBarcodeBatchBasicOverlay(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        guard let overlayJson = data["overlayJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeBatchModule.updateBasicOverlay(data.dataCaptureViewId, overlayJson: overlayJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeBatchAdvancedOverlay:resolve:reject:)
    func updateBarcodeBatchAdvancedOverlay(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        guard let overlayJson = data["overlayJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeBatchModule.updateAdvancedOverlay(data.dataCaptureViewId, overlayJson: overlayJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateBarcodeBatchMode:resolve:reject:)
    func updateBarcodeBatchMode(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        guard let modeJson = data["modeJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeBatchModule.updateModeFromJson(modeJson: modeJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(applyBarcodeBatchModeSettings:resolve:reject:)
    func applyBarcodeBatchModeSettings(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        guard let modeSettingsJson = data["modeSettingsJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodeBatchModule.applyModeSettings(data.modeId, modeSettingsJson: modeSettingsJson, result: ReactNativeResult(resolve, reject))
    }

    // rootViewWith method is now implemented in architecture-specific files
    
    private func convertToInt(_ value: Any) -> Int? {
        switch value {
        case let intValue as Int:
            return intValue
        case let doubleValue as Double:
            return Int(doubleValue.rounded())
        case let floatValue as Float:
            return Int(floatValue.rounded())
        case let cgFloatValue as CGFloat:
            return Int(cgFloatValue.rounded())
        case let nsNumberValue as NSNumber:
            return nsNumberValue.intValue
        case let stringValue as String:
            return Int(stringValue)
        default:
            return nil
        }
    }
}

// RCTRootViewDelegate extension and ScanditRootView class are now implemented in architecture-specific files
