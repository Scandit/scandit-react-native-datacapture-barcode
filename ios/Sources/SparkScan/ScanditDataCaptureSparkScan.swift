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
        let sparkScanListener = FrameworksSparkScanListener(emitter: emitter)
        let sparkScanViewUIListener = FrameworksSparkScanViewUIListener(emitter: emitter)
        let feedbackDelegate = FrameworksSparkScanFeedbackDelegate(emitter: emitter)
        sparkScanModule = SparkScanModule(sparkScanListener: sparkScanListener,
                                          sparkScanViewUIListener: sparkScanViewUIListener,
                                          feedbackDelegate: feedbackDelegate)
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
    }

    deinit {
        invalidate()
    }

    override func supportedEvents() -> [String]! {
        FrameworksSparkScanEvent.allCases.map { $0.rawValue } +
        FrameworksSparkScanViewUIEvent.allCases.map { $0.rawValue }
    }

    override func constantsToExport() -> [AnyHashable: Any]! {
        ["Defaults": sparkScanModule.defaults.toEncodable()]
    }

    // MARK: - SparkScan Module public API

    @objc func registerListenerForEvents() {
        sparkScanModule.addSparkScanListener()
    }

    @objc func unregisterListenerForEvents() {
        sparkScanModule.removeSparkScanListener()
    }

    @objc(finishDidScanCallback:)
    func finishDidScanCallback(enabled: Bool) {
        sparkScanModule.finishDidScan(enabled: enabled)
    }

    @objc(finishDidUpdateSessionCallback:)
    func finishDidUpdateSessionCallback(enabled: Bool) {
        sparkScanModule.finishDidUpdateSession(enabled: enabled)
    }

    @objc(resetSession:rejecter:)
    func resetSession(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        sparkScanModule.resetSession()
        resolve(nil)
    }

    @objc func registerListenerForViewEvents() {
        sparkScanModule.addSparkScanViewUiListener()
    }

    @objc func unregisterListenerForViewEvents() {
        sparkScanModule.removeSparkScanViewUiListener()
    }

    @objc(create:JSONString:resolver:rejecter:)
    func create(reactTag: NSNumber,
                jsonString: String,
                resolve: @escaping RCTPromiseResolveBlock,
                reject: @escaping RCTPromiseRejectBlock) {
        let result = ReactNativeResult(resolve, reject)

        // The RNTSparkScanViewWrapper can be created later than this call.
        if let container = sparkScanViewManager.containers.last {
            addViewIfFrameSet(container, jsonString: jsonString, result: result)
        } else {
            sparkScanViewManager.postContainerCreateAction = { [weak self] container in
                guard let self = self else {
                    result.reject(error: ScanditFrameworksCoreError.nilSelf)
                    return
                }
                self.addViewIfFrameSet(container, jsonString: jsonString, result: result)
            }
        }
    }

    private func addViewIfFrameSet(_ container: RNTSparkScanViewWrapper, jsonString: String, result: ReactNativeResult) {
        // RN updates the frame for the wrapper view at a later point, which causes the native SparkScanView to misbehave.
        if container.isFrameSet {
            sparkScanModule.addViewToContainer(container,
                                               jsonString: jsonString,
                                               result: result)
        } else {
            container.postFrameSetAction = { [weak self] in
                guard let self = self else {
                    result.reject(error: ScanditFrameworksCoreError.nilSelf)
                    return
                }
                self.sparkScanModule.addViewToContainer(container,
                                                        jsonString: jsonString,
                                                        result: result)
            }
        }
    }

    @objc(update:JSONString:resolver:rejecter:)
    func update(reactTag: NSNumber,
                jsonString: String,
                resolve: @escaping RCTPromiseResolveBlock,
                reject: @escaping RCTPromiseRejectBlock) {
        sparkScanModule.updateView(viewJson: jsonString, result: ReactNativeResult(resolve, reject))
    }

     @objc(updateMode:resolver:rejecter:)
    func updateMode(jsonString: String,
                resolve: @escaping RCTPromiseResolveBlock,
                reject: @escaping RCTPromiseRejectBlock) {
        sparkScanModule.updateMode(modeJson: jsonString,  result: ReactNativeResult(resolve, reject))
    }

    @objc(startScanning:resolver:rejecter:)
    func startScanning(reactTag: NSNumber,
                       resolve: @escaping RCTPromiseResolveBlock,
                       reject: @escaping RCTPromiseRejectBlock) {
        sparkScanModule.startScanning(result: ReactNativeResult(resolve, reject))
    }

    @objc(pauseScanning:resolver:rejecter:)
    func pauseScanning(reactTag: NSNumber,
                       resolve: RCTPromiseResolveBlock,
                       reject: RCTPromiseRejectBlock) {
        sparkScanModule.pauseScanning()
        resolve(nil)
    }

    @objc(emitFeedback:arguments:resolver:rejecter:)
    func emit(reactTag: NSNumber,
              feedbackJson: String,
              resolve: @escaping RCTPromiseResolveBlock,
              reject: @escaping RCTPromiseRejectBlock) {
        sparkScanModule.emitFeedback(feedbackJson: feedbackJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(prepareScanning:resolver:rejecter:)
    func prepareScanning(reactTag: NSNumber,
                         resolve: @escaping RCTPromiseResolveBlock,
                         reject: @escaping RCTPromiseRejectBlock) {
        sparkScanModule.onResume(result: ReactNativeResult(resolve, reject))
    }

    @objc(stopScanning:resolver:rejecter:)
    func stopScanning(reactTag: NSNumber,
                      resolve: @escaping RCTPromiseResolveBlock,
                      reject: @escaping RCTPromiseRejectBlock) {
        sparkScanModule.onPause(result: ReactNativeResult(resolve, reject))
    }

    @objc(showToast:resolver:rejecter:)
    func showToast(text: String,
                   resolve: @escaping RCTPromiseResolveBlock,
                   reject: @escaping RCTPromiseRejectBlock) {
        sparkScanModule.showToast(text: text, result: ReactNativeResult(resolve, reject))
    }

    @objc(addFeedbackDelegate:rejecter:)
    func addFeedbackDelegate(resolve: @escaping RCTPromiseResolveBlock,
                             reject: @escaping RCTPromiseRejectBlock) {
        sparkScanModule.addFeedbackDelegate(result: ReactNativeResult(resolve, reject))
    }

    @objc(removeFeedbackDelegate:rejecter:)
    func removeFeedbackDelegate(resolve: @escaping RCTPromiseResolveBlock,
                                reject: @escaping RCTPromiseRejectBlock) {
        sparkScanModule.removeFeedbackDelegate(result: ReactNativeResult(resolve, reject))
    }

    @objc(submitSparkScanFeedbackForBarcode:resolver:rejecter:)
    func submitSparkScanFeedbackForBarcode(feedbackJson: String,
                                           resolve: @escaping RCTPromiseResolveBlock,
                                           reject: @escaping RCTPromiseRejectBlock) {
        sparkScanModule.submitFeedbackForBarcode(feedbackJson: feedbackJson, result: ReactNativeResult(resolve, reject))
    }
}
