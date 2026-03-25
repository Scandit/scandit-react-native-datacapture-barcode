/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

import React
import ScanditDataCaptureCore
import ScanditFrameworksBarcode
import ScanditFrameworksCore

@objc(ScanditDataCaptureSparkScan)
class ScanditDataCaptureSparkScan: RCTEventEmitter {
    var sparkScanModule: SparkScanModule!

    lazy var sparkScanViewManager: SparkScanViewManager = {
        guard let manager = bridge.module(for: SparkScanViewManager.self) as? SparkScanViewManager else {
            fatalError("SparkScanViewManager not registered in bridge")
        }
        return manager
    }()

    override init() {
        super.init()
        let emitter = ReactNativeEmitter(emitter: self)
        sparkScanModule = SparkScanModule(emitter: emitter)
        sparkScanModule.didStart()
    }

    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    override var methodQueue: DispatchQueue! {
        sdcSharedMethodQueue
    }

    @objc override func invalidate() {
        super.invalidate()
        sparkScanModule.didStop()
        dispatchMain {
            SparkScanViewManager.containers.removeAll()
        }
    }

    deinit {
        invalidate()
    }

    override func supportedEvents() -> [String]! {
        FrameworksSparkScanEvent.allCases.map { $0.rawValue }
            + FrameworksSparkScanFeedbackDelegateEvent.allCases.map { $0.rawValue }
            + FrameworksSparkScanViewUIEvent.allCases.map { $0.rawValue }
    }

    override func constantsToExport() -> [AnyHashable: Any]! {
        ["Defaults": sparkScanModule.defaults.toEncodable()]
    }

    // MARK: - SparkScan Module public API

    @objc(registerSparkScanListenerForEvents:resolver:rejecter:)
    func registerSparkScanListenerForEvents(
        _ data: [String: Any],
        resolve: RCTPromiseResolveBlock,
        reject: RCTPromiseRejectBlock
    ) {
        sparkScanModule.addSparkScanListener(viewId: data.viewId)
        resolve(nil)
    }

    @objc(unregisterSparkScanListenerForEvents:resolver:rejecter:)
    func unregisterSparkScanListenerForEvents(
        _ data: [String: Any],
        resolve: RCTPromiseResolveBlock,
        reject: RCTPromiseRejectBlock
    ) {
        sparkScanModule.removeSparkScanListener(viewId: data.viewId)
        resolve(nil)
    }

    @objc(finishSparkScanDidScan:resolver:rejecter:)
    func finishSparkScanDidScan(
        data: [String: Any],
        resolve: RCTPromiseResolveBlock,
        reject: RCTPromiseRejectBlock
    ) {
        let enabled = data["isEnabled"] as? Bool ?? false
        sparkScanModule.finishDidScan(viewId: data.viewId, enabled: enabled)
        resolve(nil)
    }

    @objc(finishSparkScanDidUpdateSession:resolver:rejecter:)
    func finishSparkScanDidUpdateSession(
        data: [String: Any],
        resolve: RCTPromiseResolveBlock,
        reject: RCTPromiseRejectBlock
    ) {
        let enabled = data["isEnabled"] as? Bool ?? false
        sparkScanModule.finishDidUpdateSession(viewId: data.viewId, enabled: enabled)
        resolve(nil)
    }

    @objc(resetSparkScanSession:resolver:rejecter:)
    func resetSparkScanSession(data: [String: Any], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        sparkScanModule.resetSession(viewId: data.viewId)
        resolve(nil)
    }

    @objc(registerSparkScanViewListenerEvents:resolver:rejecter:)
    func registerSparkScanViewListenerEvents(
        _ data: [String: Any],
        resolve: RCTPromiseResolveBlock,
        reject: RCTPromiseRejectBlock
    ) {
        sparkScanModule.addSparkScanViewUiListener(viewId: data.viewId)
        resolve(nil)
    }

    @objc(unregisterSparkScanViewListenerEvents:resolver:rejecter:)
    func unregisterSparkScanViewListenerEvents(
        _ data: [String: Any],
        resolve: RCTPromiseResolveBlock,
        reject: RCTPromiseRejectBlock
    ) {
        sparkScanModule.removeSparkScanViewUiListener(viewId: data.viewId)
        resolve(nil)
    }

    @objc(createSparkScanView:resolver:rejecter:)
    func createSparkScanView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let jsonString = data["viewJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        let result = ReactNativeResult(resolve, reject)
        let viewId = data.viewId

        // The RNTSparkScanViewWrapper can be created later than this call.
        dispatchMain {
            if let container = SparkScanViewManager.containers.first(where: { $0.reactTag == NSNumber(value: viewId) })
            {
                self.addViewIfFrameSet(container, jsonString: jsonString, result: result)
            } else {
                self.sparkScanViewManager.setPostContainerCreateAction(for: viewId) { [weak self] container in
                    guard let self = self else {
                        result.reject(error: ScanditFrameworksCoreError.nilSelf)
                        return
                    }
                    self.addViewIfFrameSet(container, jsonString: jsonString, result: result)
                }
            }
        }
    }

    private func addViewIfFrameSet(_ container: RNTSparkScanViewWrapper, jsonString: String, result: ReactNativeResult)
    {
        // RN updates the frame for the wrapper view at a later point, which causes the native SparkScanView to misbehave.
        if container.isFrameSet {
            sparkScanModule.addViewToContainer(
                container,
                jsonString: jsonString,
                result: result
            )
        } else {
            container.postFrameSetAction = { [weak self] in
                guard let self = self else {
                    result.reject(error: ScanditFrameworksCoreError.nilSelf)
                    return
                }
                self.sparkScanModule.addViewToContainer(
                    container,
                    jsonString: jsonString,
                    result: result
                )
            }
        }
    }

    @objc(updateSparkScanView:resolver:rejecter:)
    func updateSparkScanView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let jsonString = data["viewJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        sparkScanModule.updateView(
            viewId: data.viewId,
            viewJson: jsonString,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(updateSparkScanMode:resolver:rejecter:)
    func updateSparkScanMode(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let jsonString = data["modeJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        sparkScanModule.updateMode(
            viewId: data.viewId,
            modeJson: jsonString,
            result: ReactNativeResult(resolve, reject)
        )
    }
    @objc(startSparkScanViewScanning:resolver:rejecter:)
    func startSparkScanViewScanning(
        _ data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        sparkScanModule.startScanning(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(pauseSparkScanViewScanning:resolver:rejecter:)
    func pauseSparkScanViewScanning(
        _ data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        sparkScanModule.pauseScanning(viewId: data.viewId)
        resolve(nil)
    }

    @objc(prepareSparkScanViewScanning:resolver:rejecter:)
    func prepareSparkScanViewScanning(
        _ data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        sparkScanModule.prepareScanning(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(stopSparkScanViewScanning:resolver:rejecter:)
    func stopSparkScanViewScanning(
        _ data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        sparkScanModule.stopScanning(viewId: data.viewId)
        resolve(nil)
    }

    @objc(onHostPauseSparkScanView:resolver:rejecter:)
    func onHostPauseSparkScanView(
        _ data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        sparkScanModule.onHostPause()
        resolve(nil)
    }

    @objc(showSparkScanViewToast:resolver:rejecter:)
    func showSparkScanViewToast(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let text = data["text"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        sparkScanModule.showToast(viewId: data.viewId, text: text, result: ReactNativeResult(resolve, reject))
    }

    @objc(registerSparkScanFeedbackDelegateForEvents:resolver:rejecter:)
    func registerSparkScanFeedbackDelegateForEvents(
        _ data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        sparkScanModule.addFeedbackDelegate(data.viewId)
        resolve(nil)
    }

    @objc(unregisterSparkScanFeedbackDelegateForEvents:resolver:rejecter:)
    func unregisterSparkScanFeedbackDelegateForEvents(
        _ data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        sparkScanModule.removeFeedbackDelegate(data.viewId)
        resolve(nil)
    }

    @objc(submitSparkScanFeedbackForBarcode:resolver:rejecter:)
    func submitSparkScanFeedbackForBarcode(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let feedbackJson = data["feedbackJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        sparkScanModule.submitFeedbackForBarcode(
            viewId: data.viewId,
            feedbackJson: feedbackJson,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(disposeSparkScanView:resolver:rejecter:)
    func disposeSparkScanView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {

        sparkScanModule.disposeView(viewId: data.viewId)
        resolve(nil)
    }

    @objc(setSparkScanModeEnabledState:resolver:rejecter:)
    func setSparkScanModeEnabledState(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let isEnabled = data["isEnabled"] as? Bool else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        sparkScanModule.setModeEnabled(viewId: data.viewId, enabled: isEnabled)
        resolve(nil)
    }

    @objc(showSparkScanView:resolver:rejecter:)
    func showSparkScanView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        resolve(nil)
    }

    @objc(hideSparkScanView:resolver:rejecter:)
    func hideSparkScanView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        resolve(nil)
    }
}
