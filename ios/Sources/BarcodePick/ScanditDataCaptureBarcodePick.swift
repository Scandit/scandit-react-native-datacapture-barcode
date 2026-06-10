/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import React
import ScanditDataCaptureCore
import ScanditFrameworksBarcode
import ScanditFrameworksCore

@objc(ScanditDataCaptureBarcodePick)
class ScanditDataCaptureBarcodePick: RCTEventEmitter {
    var barcodePickModule: BarcodePickModule!

    lazy var barcodePickViewManager: BarcodePickViewManager = {
        guard let manager = bridge.module(for: BarcodePickViewManager.self) as? BarcodePickViewManager else {
            fatalError("BarcodePickViewManager not registered in bridge")
        }
        return manager
    }()

    override init() {
        super.init()
        let emitter = ReactNativeEmitter(emitter: self)
        barcodePickModule = BarcodePickModule(emitter: emitter)
        barcodePickModule.didStart()
    }

    override func constantsToExport() -> [AnyHashable: Any]! {
        [
            "Defaults": barcodePickModule.defaults.toEncodable()
        ]
    }

    override func supportedEvents() -> [String]! {
        BarcodePickEvent.allCases.map { $0.rawValue } + BarcodePickScanningEvent.allCases.map { $0.rawValue }
            + BarcodePickViewListenerEvents.allCases.map { $0.rawValue }
            + BarcodePickViewUiListenerEvents.allCases.map { $0.rawValue }
            + BarcodePickListenerEvent.allCases.map { $0.rawValue }
    }

    @objc override func invalidate() {
        super.invalidate()
        barcodePickModule.didStop()
        dispatchMain {
            BarcodePickViewManager.containers.removeAll()
        }
    }

    deinit {
        invalidate()
    }

    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    override var methodQueue: DispatchQueue! {
        sdcSharedMethodQueue
    }

    @objc(createPickView:resolver:rejecter:)
    func createPickView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let jsonString = data["json"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }

        let result = ReactNativeResult(resolve, reject)
        let viewId = data.viewId

        dispatchMain {
            if let container = BarcodePickViewManager.containers.first(where: { $0.reactTag == NSNumber(value: viewId) }
            ) {
                self.addViewIfFrameSet(container, jsonString: jsonString, result: result)
            } else {
                self.barcodePickViewManager.setPostContainerCreateAction(for: viewId) { [weak self] container in
                    guard let self = self else {
                        result.reject(error: ScanditFrameworksCoreError.nilSelf)
                        return
                    }
                    self.addViewIfFrameSet(container, jsonString: jsonString, result: result)
                }
            }
        }
    }

    private func addViewIfFrameSet(
        _ container: BarcodePickViewWrapperView,
        jsonString: String,
        result: ReactNativeResult
    ) {
        // RN updates the frame for the wrapper view at a later point, which causes the native BarcodePickView to misbehave.
        if container.isFrameSet {
            barcodePickModule.addViewToContainer(container: container, jsonString: jsonString, result: result)
        } else {
            container.postFrameSetAction = { [weak self] in
                guard let self = self else {
                    result.reject(error: ScanditFrameworksCoreError.nilSelf)
                    return
                }
                self.barcodePickModule.addViewToContainer(container: container, jsonString: jsonString, result: result)
            }
        }
    }

    @objc(updatePickView:resolver:rejecter:)
    func updatePickView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let jsonString = data["json"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodePickModule.updateView(
            viewId: data.viewId,
            viewJson: jsonString,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(removePickView:resolver:rejecter:)
    func removePickView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.removeView(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(addPickActionListener:resolver:rejecter:)
    func addPickActionListener(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.addActionListener(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(removePickActionListener:resolver:rejecter:)
    func removePickActionListener(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.removeActionListener(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(addBarcodePickScanningListener:resolver:rejecter:)
    func addBarcodePickScanningListener(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.addScanningListener(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(removeBarcodePickScanningListener:resolver:rejecter:)
    func removeBarcodePickScanningListener(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.removeScanningListener(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(addPickViewListener:resolver:rejecter:)
    func addPickViewListener(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.addViewListener(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(removePickViewListener:resolver:rejecter:)
    func removePickViewListener(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.removeViewListener(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(registerBarcodePickViewUiListener:resolver:rejecter:)
    func registerBarcodePickViewUiListener(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.addViewUiListener(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(unregisterBarcodePickViewUiListener:resolver:rejecter:)
    func unregisterBarcodePickViewUiListener(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.removeViewUiListener(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(addBarcodePickListener:resolver:rejecter:)
    func addBarcodePickListener(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.addBarcodePickListener(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(removeBarcodePickListener:resolver:rejecter:)
    func removeBarcodePickListener(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.removeBarcodePickListener(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(finishOnProductIdentifierForItems:resolver:rejecter:)
    func finishOnProductIdentifierForItems(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let jsonString = data["itemsJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodePickModule.finishProductIdentifierForItems(
            viewId: data.viewId,
            barcodePickProductProviderCallbackItemsJson: jsonString,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(registerOnProductIdentifierForItemsListener:resolver:rejecter:)
    func registerOnProductIdentifierForItemsListener(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        // Noop - handled automatically by FrameworksBarcodePickView
        resolve(nil)
    }

    @objc(unregisterOnProductIdentifierForItemsListener:resolver:rejecter:)
    func unregisterOnProductIdentifierForItemsListener(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        // Noop - handled automatically by FrameworksBarcodePickView
        resolve(nil)
    }

    @objc(finishPickAction:resolver:rejecter:)
    func finishPickAction(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let code = data["code"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        guard let result = data["result"] as? Bool else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        barcodePickModule.finishPickAction(
            viewId: data.viewId,
            data: code,
            actionResult: result,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(pickViewStart:resolver:rejecter:)
    func pickViewStart(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.viewStart(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(pickViewStop:resolver:rejecter:)
    func pickViewStop(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.viewStop(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(pickViewFreeze:resolver:rejecter:)
    func pickViewFreeze(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.viewFreeze(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(pickViewPause:resolver:rejecter:)
    func pickViewPause(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.viewPause(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(pickViewResume:resolver:rejecter:)
    func pickViewResume(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.viewResume(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(pickViewReset:resolver:rejecter:)
    func pickViewReset(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.viewReset(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(finishBarcodePickViewHighlightStyleCustomViewProviderViewForRequest:resolver:rejecter:)
    func finishBarcodePickViewHighlightStyleCustomViewProviderViewForRequest(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.finishBarcodePickViewHighlightStyleCustomViewProviderViewForRequest(
            viewId: data.viewId,
            response: data,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(finishBarcodePickViewHighlightStyleAsyncProviderStyleForRequest:resolver:rejecter:)
    func finishBarcodePickViewHighlightStyleAsyncProviderStyleForRequest(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.finishBarcodePickViewHighlightStyleAsyncProviderStyleForRequest(
            viewId: data.viewId,
            response: data,
            result: ReactNativeResult(resolve, reject)
        )
    }
}
