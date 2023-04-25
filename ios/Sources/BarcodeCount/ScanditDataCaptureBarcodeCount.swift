/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import ScanditDataCaptureCore

enum ScanditDataCaptureBarcodeCountViewError: Error, CustomNSError {
    case nilContext
    case noArguments
    case barcodeCountModeNil
    case barcodeCountDeserializerError(error: NSError)
    case barcodeCountViewDeserializerError(error: NSError)
    case noBarcodeCountView
    case noParentView(tag: NSNumber)

    var message: String {
        switch self {
        case .nilContext:
            return "No data capture context was found"
        case .noArguments:
            return "No arguments were passed from the React side"
        case .barcodeCountViewDeserializerError(let error):
            return "The barcode count view deserializer encountered an error: \(error.localizedDescription)"
        case .noBarcodeCountView:
            return "No barcode count view has been found."
        case .barcodeCountModeNil:
            return "The barcode count mode is not deserialized yet."
        case .barcodeCountDeserializerError(error: let error):
            return "The barcode count view deserializer encountered an error: \(error.localizedDescription)"
        case .noParentView(let tag):
            return "No parent view has been found with the tag: \(tag)"
        }
    }

    var errorCode: Int {
        switch self {
        case .nilContext:
            return 1
        case .noArguments:
            return 2
        case .barcodeCountViewDeserializerError:
            return 3
        case .noBarcodeCountView:
            return 4
        case .barcodeCountModeNil:
            return 5
        case .barcodeCountDeserializerError:
            return 6
        case .noParentView:
            return 7
        }
    }

    var errorUserInfo: [String: Any] {
        [NSLocalizedDescriptionKey: message]
    }
}

@objc(ScanditDataCaptureBarcodeCount)
class ScanditDataCaptureBarcodeCount: RCTEventEmitter {

    internal var hasListeners = false

    internal let brushForRecognizedBarcodeLock = CallbackLock<Brush>(name: ScanditDataCaptureBarcodeCountEvent.brushForRecognizedBarcode.rawValue)
    internal let brushForRecognizedBarcodeNotInListLock = CallbackLock<Brush>(name: ScanditDataCaptureBarcodeCountEvent.brushForRecognizedBarcodeNotInList.rawValue)
    internal let brushForUnrecognizedBarcodeLock = CallbackLock<Brush>(name: ScanditDataCaptureBarcodeCountEvent.brushForUnrecognizedBarcode.rawValue)
    internal let didScanInSessionLock = CallbackLock<Bool>(name: ScanditDataCaptureBarcodeCountEvent.didScanInSession.rawValue)

    let barcodeCountDeserializer = BarcodeCountDeserializer()
    let barcodeCountViewDeserializer = BarcodeCountViewDeserializer()

    var context: DataCaptureContext?

    var barcodeCount: BarcodeCount? {
        willSet {
            barcodeCount?.remove(self)
        }
        didSet {
            barcodeCount?.add(self)
        }
    }

    internal var barcodeCountSession: BarcodeCountSession?

    override var bridge: RCTBridge! {
        didSet {
            if bridge != nil {
                unregisterRNTContextListener()
            }
            registerRNTContextListener()
        }
    }

    override class func requiresMainQueueSetup() -> Bool {
        return true
    }

    override var methodQueue: DispatchQueue! {
        return sdcSharedMethodQueue
    }

    @objc(createView:JSONString:resolver:rejecter:)
    func createView(reactTag: NSNumber,
                    jsonString: String,
                    resolve: @escaping RCTPromiseResolveBlock,
                    reject: @escaping RCTPromiseRejectBlock) {
        let createBlock = { [weak self] in
            guard let self = self else { return }
            guard let context = self.context else {
                let error = ScanditDataCaptureBarcodeCountViewError.nilContext
                reject(error.message, String(error.errorCode), error)
                return
            }
            let jsonValue = JSONValue(string: jsonString)
            let barcodeCountJson = jsonValue.object(forKey: "BarcodeCount").jsonString()
            let barcodeCountViewJson = jsonValue.object(forKey: "BarcodeCountView").jsonString()
            var barcodeCount: BarcodeCount
            do {
                barcodeCount = try self.barcodeCountDeserializer.mode(fromJSONString: barcodeCountJson,
                                                                      context: context)
                self.barcodeCount = barcodeCount
            } catch let error as NSError {
                let wrappingError = ScanditDataCaptureBarcodeCountViewError.barcodeCountDeserializerError(error: error)
                reject(wrappingError.message, String(wrappingError.errorCode), wrappingError)
                return
            }
            var barcodeCountView: BarcodeCountView
            do {
                barcodeCountView = try self.barcodeCountViewDeserializer.view(fromJSONString: barcodeCountViewJson,
                                                                              barcodeCount: barcodeCount,
                                                                              context: context)
            } catch let error as NSError {
                let wrappingError = ScanditDataCaptureBarcodeCountViewError.barcodeCountViewDeserializerError(error: error)
                reject(wrappingError.message, String(wrappingError.errorCode), wrappingError)
                return
            }
            barcodeCountView.delegate = self
            barcodeCountView.uiDelegate = self
            guard let parentView = self.parentView(tag: reactTag) as? BarcodeCountViewWrapperView else {
                let error = ScanditDataCaptureBarcodeCountViewError.noParentView(tag: reactTag)
                reject(error.message, String(error.errorCode), error)
                return
            }
            parentView.addSubview(barcodeCountView)
            resolve(nil)
        }
        DispatchQueue.main.async(execute: createBlock)
    }

    @objc(updateView:JSONString:resolver:rejecter:)
    func updateView(reactTag: NSNumber,
                    jsonString: String,
                    resolve: @escaping RCTPromiseResolveBlock,
                    reject: @escaping RCTPromiseRejectBlock) {
        let updateBlock = { [weak self] in
            guard let self = self else { return }
            guard let parentView = self.parentView(tag: reactTag) as? BarcodeCountViewWrapperView else {
                let error = ScanditDataCaptureBarcodeCountViewError.noParentView(tag: reactTag)
                reject(error.message, String(error.errorCode), error)
                return
            }
            guard let barcodeCountView = parentView.barcodeCountView else {
                let error = ScanditDataCaptureBarcodeCountViewError.noBarcodeCountView
                reject(error.message, String(error.errorCode), error)
                return
            }
            do {
                try self.barcodeCountViewDeserializer.update(barcodeCountView,
                                                             fromJSONString: jsonString)
                resolve(nil)
            } catch let error as NSError {
                let wrappingError = ScanditDataCaptureBarcodeCountViewError.barcodeCountViewDeserializerError(error: error)
                reject(wrappingError.message, String(wrappingError.errorCode), wrappingError)
                return
            }
        }
        DispatchQueue.main.async(execute: updateBlock)
    }

    @objc(clearHighlights:resolver:rejecter:)
    func clearHighlights(reactTag: NSNumber,
                         resolve: @escaping RCTPromiseResolveBlock,
                         reject: @escaping RCTPromiseRejectBlock) {
        let block = { [weak self] in
            guard let self = self else { return }
            guard let parentView = self.parentView(tag: reactTag) as? BarcodeCountViewWrapperView else {
                let error = ScanditDataCaptureBarcodeCountViewError.noParentView(tag: reactTag)
                reject(error.message, String(error.errorCode), error)
                return
            }
            guard let barcodeCountView = parentView.barcodeCountView else {
                let error = ScanditDataCaptureBarcodeCountViewError.noBarcodeCountView
                reject(error.message, String(error.errorCode), error)
                return
            }
            barcodeCountView.clearHighlights()
            resolve(nil)
        }
        DispatchQueue.main.async(execute: block)
    }

    @objc(updateMode:resolver:rejecter:)
    func update(jsonString: String,
                resolve: @escaping RCTPromiseResolveBlock,
                reject: @escaping RCTPromiseRejectBlock) {
        let updateBlock = { [weak self] in
            guard let self = self else { return }
            guard let mode = self.barcodeCount else {
                let error = ScanditDataCaptureBarcodeCountViewError.barcodeCountModeNil
                reject(error.message, String(error.errorCode), error)
                return
            }
            do {
                try self.barcodeCountDeserializer.updateMode(mode, fromJSONString: jsonString)
            } catch let error as NSError {
                let wrappingError = ScanditDataCaptureBarcodeCountViewError.barcodeCountDeserializerError(error: error)
                reject(wrappingError.message, String(wrappingError.errorCode), wrappingError)
                return
            }
            resolve(nil)
        }
        DispatchQueue.main.async(execute: updateBlock)
    }

    @objc(resetSession:rejecter:)
    func reset(resolve: @escaping RCTPromiseResolveBlock,
               reject: @escaping RCTPromiseRejectBlock) {
        guard let session = barcodeCountSession else {
            let error = ScanditDataCaptureBarcodeError.nilSession
            reject(String(error.code), error.message, error)
            return
        }
        session.reset()
        resolve(nil)
    }

    @objc(resetBarcodeCount:rejecter:)
    func resetBarcodeCount(resolve: @escaping RCTPromiseResolveBlock,
                           reject: @escaping RCTPromiseRejectBlock) {
        guard let mode = barcodeCount else {
            let error = ScanditDataCaptureBarcodeError.nilMode
            reject(String(error.code), error.message, error)
            return
        }
        mode.reset()
        resolve(nil)
    }

    @objc(startScanningPhase:rejecter:)
    func startScanningPhase(resolve: @escaping RCTPromiseResolveBlock,
                            reject: @escaping RCTPromiseRejectBlock) {
        barcodeCount?.startScanningPhase()
        resolve(nil)
    }

    @objc(endScanningPhase:rejecter:)
    func endScanningPhase(resolve: @escaping RCTPromiseResolveBlock,
                          reject: @escaping RCTPromiseRejectBlock) {
        barcodeCount?.endScanningPhase()
        resolve(nil)
    }

    @objc(setBarcodeCountCaptureList:resolver:rejecter:)
    func setBarcodeCountCaptureList(jsonString: String,
                                    resolve: @escaping RCTPromiseResolveBlock,
                                    reject: @escaping RCTPromiseRejectBlock) {
        let jsonArray = JSONValue(string: jsonString).asArray()
        let targetBarcodes: Set<TargetBarcode> = Set((0...jsonArray.count() - 1).map {
            let jsonValue = jsonArray.atIndex($0).asObject()
            return TargetBarcode(data: jsonValue.string(forKey: "data"),
                                 quantity: jsonValue.integer(forKey: "quantity"))
        })
        let captureList = BarcodeCountCaptureList(listener: self, targetBarcodes: targetBarcodes)
        barcodeCount?.setCaptureList(captureList)
        resolve(nil)
    }

    @objc
    func registerBarcodeCountListener() {}

    @objc
    func unregisterBarcodeCountListener() {}

    @objc
    func registerBarcodeCountViewListener() {}

    @objc
    func unregisterBarcodeCountViewListener() {}

    @objc
    func registerBarcodeCountViewUiListener() {}

    @objc
    func unregisterBarcodeCountViewUiListener() {}

    func unlockLocks() {
        brushForRecognizedBarcodeLock.reset()
        brushForRecognizedBarcodeNotInListLock.reset()
        brushForUnrecognizedBarcodeLock.reset()
        didScanInSessionLock.reset()
    }

    private func parentView(tag: NSNumber) -> UIView? {
        return bridge.uiManager.view(forReactTag: tag)
    }

    deinit {
        unregisterRNTContextListener()
    }
}

extension ScanditDataCaptureBarcodeCount: RNTDataCaptureContextListener {
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
