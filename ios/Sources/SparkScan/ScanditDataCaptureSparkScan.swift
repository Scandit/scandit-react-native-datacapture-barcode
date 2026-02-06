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
        bridge.module(for: SparkScanViewManager.self) as! SparkScanViewManager
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
        FrameworksSparkScanEvent.allCases.map { $0.rawValue } +
        FrameworksSparkScanFeedbackDelegateEvent.allCases.map { $0.rawValue } +
        FrameworksSparkScanViewUIEvent.allCases.map { $0.rawValue }
    }

    override func constantsToExport() -> [AnyHashable: Any]! {
        ["Defaults": sparkScanModule.defaults.toEncodable()]
    }

    // MARK: - SparkScan Module public API

    @objc func registerSparkScanListenerForEvents(_ data: [String: Any]) {
        sparkScanModule.addSparkScanListener(viewId: getViewId(data))
    }

    @objc func unregisterSparkScanListenerForEvents(_ data: [String: Any]) {
        sparkScanModule.removeSparkScanListener(viewId: getViewId(data))
    }

    @objc(finishSparkScanDidScan:)
    func finishSparkScanDidScan(data: [String: Any]) {
        let enabled = data["isEnabled"] as? Bool ?? false
        sparkScanModule.finishDidScan(viewId: getViewId(data), enabled: enabled)
    }

    @objc(finishSparkScanDidUpdateSession:)
    func finishSparkScanDidUpdateSession(data: [String: Any]) {
        let enabled = data["isEnabled"] as? Bool ?? false
        sparkScanModule.finishDidUpdateSession(viewId: getViewId(data), enabled: enabled)
    }

    @objc(resetSparkScanSession:resolver:rejecter:)
    func resetSparkScanSession(data: [String: Any], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        sparkScanModule.resetSession(viewId: getViewId(data))
        resolve(nil)
    }

    @objc func registerSparkScanViewListenerEvents(_ data: [String: Any]) {
        sparkScanModule.addSparkScanViewUiListener(viewId: getViewId(data))
    }

    @objc func unregisterSparkScanViewListenerEvents(_ data: [String: Any]) {
        sparkScanModule.removeSparkScanViewUiListener(viewId: getViewId(data))
    }

    @objc(createSparkScanView:resolver:rejecter:)
    func createSparkScanView(data: [String: Any],
                resolve: @escaping RCTPromiseResolveBlock,
                reject: @escaping RCTPromiseRejectBlock) {
        guard let jsonString = data["viewJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        let result = ReactNativeResult(resolve, reject)
        let viewId = getViewId(data)

        // The RNTSparkScanViewWrapper can be created later than this call.
        dispatchMain {
            if let container = SparkScanViewManager.containers.first(where: { $0.reactTag == NSNumber(value: viewId) }) {
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

    private func addViewIfFrameSet(_ container: RNTSparkScanViewWrapper, jsonString: String, result: ReactNativeResult) {
        // RN updates the frame for the wrapper view at a later point, which causes the native SparkScanView to misbehave.
        if container.isFrameSet {
            _ = sparkScanModule.addViewToContainer(
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
                _ = self.sparkScanModule.addViewToContainer(
                    container,
                    jsonString: jsonString,
                    result: result
                )
            }
        }
    }

    @objc(updateSparkScanView:resolver:rejecter:)
    func updateSparkScanView(data: [String: Any],
                resolve: @escaping RCTPromiseResolveBlock,
                reject: @escaping RCTPromiseRejectBlock) {
        guard let jsonString = data["viewJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        sparkScanModule.updateView(viewId: getViewId(data), viewJson: jsonString, result: ReactNativeResult(resolve, reject))
    }

     @objc(updateSparkScanMode:resolver:rejecter:)
    func updateSparkScanMode(data: [String: Any],
                resolve: @escaping RCTPromiseResolveBlock,
                reject: @escaping RCTPromiseRejectBlock) {
        guard let jsonString = data["modeJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        sparkScanModule.updateMode(viewId: getViewId(data), modeJson: jsonString, result: ReactNativeResult(resolve, reject))
    }
    @objc(startSparkScanViewScanning:resolver:rejecter:)
    func startSparkScanViewScanning(_ data: [String: Any],
                     resolve: @escaping RCTPromiseResolveBlock,
                     reject: @escaping RCTPromiseRejectBlock) {
        sparkScanModule.startScanning(viewId: getViewId(data), result: ReactNativeResult(resolve, reject))
    }

    @objc(pauseSparkScanViewScanning:resolver:rejecter:)
    func pauseSparkScanViewScanning(_ data: [String: Any],
                     resolve: @escaping RCTPromiseResolveBlock,
                     reject: @escaping RCTPromiseRejectBlock) {
        sparkScanModule.pauseScanning(viewId: getViewId(data))
        resolve(nil)
    }

    @objc(prepareSparkScanViewScanning:resolver:rejecter:)
    func prepareSparkScanViewScanning(_ data: [String: Any],
                       resolve: @escaping RCTPromiseResolveBlock,
                       reject: @escaping RCTPromiseRejectBlock) {
        sparkScanModule.prepareScanning(viewId: getViewId(data), result: ReactNativeResult(resolve, reject))
    }

    @objc(stopSparkScanViewScanning:resolver:rejecter:)
    func stopSparkScanViewScanning(_ data: [String: Any],
                    resolve: @escaping RCTPromiseResolveBlock,
                    reject: @escaping RCTPromiseRejectBlock) {
        sparkScanModule.stopScanning(viewId: getViewId(data))
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
        sparkScanModule.showToast(viewId: getViewId(data), text: text, result: ReactNativeResult(resolve, reject))
    }

    @objc(registerSparkScanFeedbackDelegateForEvents:resolver:rejecter:)
    func registerSparkScanFeedbackDelegateForEvents(_ data: [String: Any],
                             resolve: @escaping RCTPromiseResolveBlock,
                             reject: @escaping RCTPromiseRejectBlock) {
        sparkScanModule.addFeedbackDelegate(getViewId(data))
        resolve(nil)
    }

    @objc(unregisterSparkScanFeedbackDelegateForEvents:resolver:rejecter:)
    func unregisterSparkScanFeedbackDelegateForEvents(_ data: [String: Any],
                               resolve: @escaping RCTPromiseResolveBlock,
                               reject: @escaping RCTPromiseRejectBlock) {
       sparkScanModule.removeFeedbackDelegate(getViewId(data))
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
            viewId: getViewId(data),
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

        sparkScanModule.disposeView(viewId: getViewId(data))
        resolve(nil)
    }

    @objc(setSparkScanModeEnabledState:resolver:rejecter:)
    func setSparkScanModeEnabledState(data: [String: Any],
                                     resolve: @escaping RCTPromiseResolveBlock,
                                     reject: @escaping RCTPromiseRejectBlock) {
        guard let isEnabled = data["isEnabled"] as? Bool else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        sparkScanModule.setModeEnabled(viewId: getViewId(data), enabled: isEnabled)
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

    private func getViewId(_ data: [String: Any]) -> Int {
        return data["viewId"] as! Int
    }
}
