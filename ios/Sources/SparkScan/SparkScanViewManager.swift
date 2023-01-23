/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

import ScanditBarcodeCapture
import ScanditDataCaptureCore

class RNTSparkScanViewWrapper: UIView {
    var sparkScanView: SparkScanView? {
        return subviews.first { $0 is SparkScanView } as? SparkScanView
    }
}

enum SparkScanViewError: CustomNSError {
    case nilContext
    case noParentView(tag: NSNumber)
    case noArguments
    case sparkScanDeserializerError(error: NSError)
    case sparkScanModuleNotLoaded
    case sparkScanViewDeserializerError(error: NSError)
    case noSparkScanView
    case invalidBrush(brushJson: String)

    var message: String {
        switch self {
        case .noArguments:
            return "No arguments were passed from the React side"
        case .nilContext:
            return "No data capture context was found"
        case .noParentView(let tag):
            return "No parent view found for the given react tag: \(tag.intValue)"
        case .sparkScanDeserializerError(let error):
            return "The spark scan deserializer encountered an error: \(error.localizedDescription)"
        case .sparkScanModuleNotLoaded:
            return "The ScanditDataCaptureSparkScan module is not loaded yet via RN."
        case .sparkScanViewDeserializerError(let error):
            return "The spark scan view deserializer encountered an error: \(error.localizedDescription)"
        case .noSparkScanView:
            return "No spark scan view has been found."
        case .invalidBrush(let json):
            return "The following is an invalid brush: \(json)"
        }
    }

    var errorCode: Int {
        switch self {
        case .nilContext:
            return 1
        case .noParentView(_):
            return 2
        case .noArguments:
            return 3
        case .sparkScanDeserializerError(_):
            return 4
        case .sparkScanModuleNotLoaded:
            return 5
        case .sparkScanViewDeserializerError(_):
            return 6
        case .noSparkScanView:
            return 7
        case .invalidBrush(_):
            return 8
        }
    }

    var errorUserInfo: [String : Any] {
        return [NSLocalizedDescriptionKey: message]
    }
}

@objc(RNTSDCSparkScanViewManager)
class SparkScanViewManager: RCTViewManager {
    let sparkScanViewDeserializer = SparkScanViewDeserializer()

    var context: DataCaptureContext?

    var eventEmitterModule: SparkScanViewEventEmitter?

    var sparkScanDeserializer: SparkScanDeserializer? {
        get {
            let module = bridge.module(for: ScanditDataCaptureSparkScan.self) as? ScanditDataCaptureSparkScan
            return module?.sparkScanDeserializer
        }
    }

    func parentView(for tag: NSNumber) -> RNTSparkScanViewWrapper? {
        bridge.uiManager.view(forReactTag: tag) as? RNTSparkScanViewWrapper
    }

    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    override func view() -> UIView! {
        return RNTSparkScanViewWrapper()
    }
    
    override var bridge: RCTBridge! {
        get {
            return super.bridge
        }
        set {
            super.bridge = newValue
            registerRNTContextListener()
            NotificationCenter.default.addObserver(self,
                                                   selector: #selector(moduleLoaded(notification:)),
                                                   name: Notification.Name.RCTDidSetupModule,
                                                   object: nil)
        }
    }

    @objc
    private func moduleLoaded(notification: Notification) {
        guard let moduleName = notification.userInfo?[RCTDidSetupModuleNotificationModuleNameKey] as? String else { return
        }
        if moduleName == "RNTSDCSparkScanViewEventEmitter" {
            eventEmitterModule = bridge.module(for: SparkScanViewEventEmitter.self) as? SparkScanViewEventEmitter
        }
    }

    deinit {
        unregisterRNTContextListener()
        NotificationCenter.default.removeObserver(self)
    }

    @objc(create:JSONString:resolver:rejecter:)
    func create(reactTag: NSNumber,
                jsonString: String,
                resolve: @escaping RCTPromiseResolveBlock,
                reject: @escaping RCTPromiseRejectBlock) {
        let createBlock = { [weak self] in
            guard let self = self else { return }
            guard let parentView = self.parentView(for: reactTag) else {
                let error = SparkScanViewError.noParentView(tag: reactTag)
                reject(error.message, String(error.errorCode), error)
                return
            }
            guard let context = self.context else {
                let error = SparkScanViewError.nilContext
                reject(error.message, String(error.errorCode), error)
                return
            }
            guard let sparkScanDeserializer = self.sparkScanDeserializer else {
                let error = SparkScanViewError.sparkScanModuleNotLoaded
                reject(error.message, String(error.errorCode), error)
                return
            }
            let jsonValue = JSONValue(string: jsonString)
            let sparkScanJson = jsonValue.object(forKey: "SparkScan")
            let sparkScanViewJson = jsonValue.object(forKey: "SparkScanView")
            var sparkScan: SparkScan
            do {
                sparkScan = try sparkScanDeserializer.mode(fromJSONString: sparkScanJson.jsonString())
            } catch let error as NSError {
                let wrappingError = SparkScanViewError.sparkScanDeserializerError(error: error)
                reject(wrappingError.message, String(wrappingError.errorCode), wrappingError)
                return
            }
            do {
                let sparkScanView = try self.sparkScanViewDeserializer.view(fromJSONString: sparkScanViewJson.jsonString(),
                                                                       with: context,
                                                                       mode: sparkScan,
                                                                       parentView: parentView)
                sparkScanView.uiDelegate = self.eventEmitterModule
                resolve(nil)
            } catch let error as NSError {
                let wrappingError = SparkScanViewError.sparkScanViewDeserializerError(error: error)
                reject(wrappingError.message, String(wrappingError.errorCode), wrappingError)
                return
            }
        }
        DispatchQueue.main.async(execute: createBlock)
    }

    @objc(update:JSONString:resolver:rejecter:)
    func update(reactTag: NSNumber,
                jsonString: String,
                resolve: @escaping RCTPromiseResolveBlock,
                reject: @escaping RCTPromiseRejectBlock) {
        let updateBlock = { [weak self] in
            guard let self = self else { return }
            guard let parentView = self.parentView(for: reactTag) else {
                let error = SparkScanViewError.noParentView(tag: reactTag)
                reject(error.message, String(error.errorCode), error)
                return
            }
            guard let sparkScanView = parentView.sparkScanView else {
                let error = SparkScanViewError.noSparkScanView
                reject(error.message, String(error.errorCode), error)
                return
            }
            do {
                try self.sparkScanViewDeserializer.update(sparkScanView,
                                                          fromJSONString: jsonString)
            } catch let error as NSError {
                let wrappingError = SparkScanViewError.sparkScanViewDeserializerError(error: error)
                reject(wrappingError.message, String(wrappingError.errorCode), error)
                return
            }
            resolve(nil)
        }
        DispatchQueue.main.async(execute: updateBlock)
    }

    @objc(update:brush:resolver:rejecter:)
    func update(reactTag: NSNumber,
                brushJson: String,
                resolve: @escaping RCTPromiseResolveBlock,
                reject: @escaping RCTPromiseRejectBlock) {
        let updateBlock = { [weak self] in
            guard let self = self else { return }
            guard let parentView = self.parentView(for: reactTag) else {
                let error = SparkScanViewError.noParentView(tag: reactTag)
                reject(error.message, String(error.errorCode), error)
                return
            }
            guard let sparkScanView = parentView.sparkScanView else {
                let error = SparkScanViewError.noSparkScanView
                reject(error.message, String(error.errorCode), error)
                return
            }
            guard let brush = Brush(jsonString: brushJson) else {
                let error = SparkScanViewError.invalidBrush(brushJson: brushJson)
                reject(error.message, String(error.errorCode), error)
                return
            }
            sparkScanView.brush = brush
            resolve(nil)
        }
        DispatchQueue.main.async(execute: updateBlock)
    }

    @objc(startScanning:resolver:rejecter:)
    func startScanning(reactTag: NSNumber,
                       resolve: @escaping RCTPromiseResolveBlock,
                       reject: @escaping RCTPromiseRejectBlock) {
        let updateBlock = { [weak self] in
            guard let self = self else { return }
            guard let parentView = self.parentView(for: reactTag) else {
                let error = SparkScanViewError.noParentView(tag: reactTag)
                reject(error.message, String(error.errorCode), error)
                return
            }
            guard let sparkScanView = parentView.sparkScanView else {
                let error = SparkScanViewError.noSparkScanView
                reject(error.message, String(error.errorCode), error)
                return
            }
            sparkScanView.startScanning()
            resolve(nil)
        }
        DispatchQueue.main.async(execute: updateBlock)
    }

    @objc(pauseScanning:resolver:rejecter:)
    func pauseScanning(reactTag: NSNumber,
                       resolve: @escaping RCTPromiseResolveBlock,
                       reject: @escaping RCTPromiseRejectBlock) {
        let updateBlock = { [weak self] in
            guard let self = self else { return }
            guard let parentView = self.parentView(for: reactTag) else {
                let error = SparkScanViewError.noParentView(tag: reactTag)
                reject(error.message, String(error.errorCode), error)
                return
            }
            guard let sparkScanView = parentView.sparkScanView else {
                let error = SparkScanViewError.noSparkScanView
                reject(error.message, String(error.errorCode), error)
                return
            }
            sparkScanView.pauseScanning()
            resolve(nil)
        }
        DispatchQueue.main.async(execute: updateBlock)
    }

    @objc(emitFeedback:arguments:resolver:rejecter:)
    func emit(reactTag: NSNumber,
              feedbackJson: String,
              resolve: @escaping RCTPromiseResolveBlock,
              reject: @escaping RCTPromiseRejectBlock) {
        let updateBlock = { [weak self] in
            guard let self = self else { return }
            guard let parentView = self.parentView(for: reactTag) else {
                let error = SparkScanViewError.noParentView(tag: reactTag)
                reject(error.message, String(error.errorCode), error)
                return
            }
            guard let sparkScanView = parentView.sparkScanView else {
                let error = SparkScanViewError.noSparkScanView
                reject(error.message, String(error.errorCode), error)
                return
            }
            let jsonValue = JSONValue(string: feedbackJson)
            var feedback: SparkScanViewFeedback
            let type = jsonValue.string(forKey: "type")
            if type == "success" {
                feedback = SparkScanViewSuccessFeedback()
            } else {
                let timeinterval = jsonValue.timeinterval(forKey: "resumeCapturingDelay")
                feedback = SparkScanViewErrorFeedback(message: jsonValue.string(forKey: "message"),
                                                      resumeCapturingDelay: timeinterval / 1000)
            }
            sparkScanView.emitFeedback(feedback)
            resolve(nil)
        }
        DispatchQueue.main.async(execute: updateBlock)
    }

    @objc func registerListenerForViewEvents() { }
    @objc func unregisterListenerForViewEvents() { }
}

extension SparkScanViewManager: RNTDataCaptureContextListener {
    func didUpdate(dataCaptureContext: DataCaptureContext?) {
        context = dataCaptureContext
    }

    func registerRNTContextListener() {
        guard let coreModule = bridge.module(for: ScanditDataCaptureCore.self) as? ScanditDataCaptureCore else {
            return
        }
        coreModule.addRNTDataCaptureContextListener(self)
    }

    func unregisterRNTContextListener() {
        guard let coreModule = bridge.module(for: ScanditDataCaptureCore.self) as? ScanditDataCaptureCore else {
            return
        }
        coreModule.removeRNTDataCaptureContextListener(self)
    }
}
