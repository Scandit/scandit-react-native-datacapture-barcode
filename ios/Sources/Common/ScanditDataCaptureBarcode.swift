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

@objc(ScanditDataCaptureBarcode)
class ScanditDataCaptureBarcode: AdvancedOverlayContainer {
    let barcodeModule: BarcodeModule
    var barcodeCaptureModule: BarcodeCaptureModule!
    var barcodeSelectionModule: BarcodeSelectionModule!
    var barcodeBatchModule: BarcodeBatchModule!
    var sparkScanModule: SparkScanModule!
    var barcodeCountModule: BarcodeCountModule!
    var barcodePickModule: BarcodePickModule!
    var barcodeFindModule: BarcodeFindModule!
    var barcodeArModule: BarcodeArModule!

    @objc override class func requiresMainQueueSetup() -> Bool {
        true
    }

    @objc
    override var methodQueue: DispatchQueue! {
        sdcSharedMethodQueue
    }

    public override init() {
        barcodeModule = BarcodeModule()

        super.init()
        let emitter = ReactNativeEmitter(emitter: self)

        barcodeCaptureModule = BarcodeCaptureModule(emitter: emitter)
        barcodeCaptureModule.didStart()

        let aimedBrushProvider = FrameworksBarcodeSelectionAimedBrushProvider(
            emitter: emitter
        )
        let trackedBrushProvider = FrameworksBarcodeSelectionTrackedBrushProvider(
            emitter: emitter
        )

        barcodeSelectionModule = BarcodeSelectionModule(
            emitter: emitter,
            aimedBrushProvider: aimedBrushProvider,
            trackedBrushProvider: trackedBrushProvider
        )
        barcodeSelectionModule.didStart()

        barcodeBatchModule = BarcodeBatchModule(
            emitter: emitter,
            viewFromJsonResolver: ReactViewFromJsonResolver(container: self)
        )
        barcodeBatchModule.didStart()
        // Initialize the root view factory cache for new architecture support
        RCTRootViewFactoryCache.shared.initialize()

        sparkScanModule = SparkScanModule(emitter: emitter)
        sparkScanModule.didStart()

        barcodeCountModule = BarcodeCountModule(emitter: emitter)
        barcodeCountModule.didStart()

        barcodePickModule = BarcodePickModule(emitter: emitter)
        barcodePickModule.didStart()

        barcodeFindModule = BarcodeFindModule(emitter: emitter)
        barcodeFindModule.didStart()

        barcodeArModule = BarcodeArModule(emitter: emitter)
        barcodeArModule.didStart()

        DefaultServiceLocator.shared.register(module: barcodeModule)
        DefaultServiceLocator.shared.register(module: barcodeCaptureModule)
        DefaultServiceLocator.shared.register(module: barcodeSelectionModule)
        DefaultServiceLocator.shared.register(module: barcodeBatchModule)
        DefaultServiceLocator.shared.register(module: sparkScanModule)
        DefaultServiceLocator.shared.register(module: barcodeCountModule)
        DefaultServiceLocator.shared.register(module: barcodePickModule)
        DefaultServiceLocator.shared.register(module: barcodeFindModule)
        DefaultServiceLocator.shared.register(module: barcodeArModule)
    }

    override func supportedEvents() -> [String]! {
        var events: [String] = []

        events += FrameworksBarcodeCaptureEvent.allCases.compactMap { $0.rawValue }
        events += FrameworksBarcodeSelectionEvent.allCases.map { $0.rawValue }
        events += FrameworksBarcodeBatchEvent.allCases.map { $0.rawValue }
        events += FrameworksSparkScanEvent.allCases.map { $0.rawValue }
        events += FrameworksSparkScanFeedbackDelegateEvent.allCases.map { $0.rawValue }
        events += FrameworksSparkScanViewUIEvent.allCases.map { $0.rawValue }
        events += FrameworksBarcodeCountCaptureListListenerEvent.allCases.map { $0.rawValue }
        events += FrameworksBarcodeCountListenerEvent.allCases.map { $0.rawValue }
        events += FrameworksBarcodeCountStatusProviderEvent.allCases.map { $0.rawValue }
        events += BarcodeCountViewListenerEvent.allCases.map { $0.rawValue }
        events += FrameworksBarcodeCountViewUIListenerEvent.allCases.map { $0.rawValue }
        events += BarcodePickEvent.allCases.map { $0.rawValue }
        events += BarcodePickScanningEvent.allCases.map { $0.rawValue }
        events += BarcodePickViewListenerEvents.allCases.map { $0.rawValue }
        events += BarcodePickViewUiListenerEvents.allCases.map { $0.rawValue }
        events += BarcodePickListenerEvent.allCases.map { $0.rawValue }
        events += BarcodePickViewHighlightStyleAsyncProviderEvent.allCases.map { $0.rawValue }
        events += FrameworksBarcodeFindEvent.allCases.map { $0.rawValue }
        events += BarcodeArListenerEvents.allCases.map { $0.rawValue }
        events += BarcodeArCustomHighlightEvents.allCases.map { $0.rawValue }
        events += BarcodeArCustomAnnotationEvents.allCases.map { $0.rawValue }
        events += BarcodeArViewUiDelegateEvents.allCases.map { $0.rawValue }
        events += BarcodeArAnnotationProviderEvents.allCases.map { $0.rawValue }
        events += BarcodeArHighlightProviderEvents.allCases.map { $0.rawValue }
        events += FrameworksBarcodeArAnnotationEvents.allCases.map { $0.rawValue }

        return events
    }

    override func constantsToExport() -> [AnyHashable: Any]! {
        [
            "Defaults": barcodeModule.getDefaults()
        ]
    }

    @objc(executeBarcode:resolve:reject:)
    func executeBarcode(
        _ data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let moduleName = data["moduleName"] as? String else {
            reject("-1", "Missing moduleName parameter", nil)
            return
        }

        let coreModuleName = String(describing: CoreModule.self)
        guard let coreModule = DefaultServiceLocator.shared.resolve(clazzName: coreModuleName) as? CoreModule else {
            reject("-1", "Unable to retrieve the CoreModule from the locator.", nil)
            return
        }

        guard let targetModule = DefaultServiceLocator.shared.resolve(clazzName: moduleName) else {
            reject("-1", "Unable to retrieve the \(moduleName) from the locator.", nil)
            return
        }

        let result = ReactNativeResult(resolve, reject)
        let handled = coreModule.execute(
            ReactNativeMethodCall(data),
            result: result,
            module: targetModule
        )

        if !handled {
            let methodName = data["methodName"] as? String ?? "unknown"
            reject("METHOD_NOT_FOUND", "Unknown Core method: \(methodName)", nil)
        }
    }

    @objc override func invalidate() {
        super.invalidate()
        // stop modules
        barcodeModule.didStop()
        barcodeCaptureModule.didStop()
        barcodeSelectionModule.didStop()
        barcodeBatchModule.didStop()
        sparkScanModule.didStop()
        barcodeCountModule.didStop()
        barcodePickModule.didStop()
        barcodeFindModule.didStop()
        barcodeArModule.didStop()

        // remove registration from the service locator
        DefaultServiceLocator.shared.remove(clazzName: String(describing: BarcodeModule.self))
        DefaultServiceLocator.shared.remove(clazzName: String(describing: BarcodeCaptureModule.self))
        DefaultServiceLocator.shared.remove(clazzName: String(describing: BarcodeSelectionModule.self))
        DefaultServiceLocator.shared.remove(clazzName: String(describing: BarcodeBatchModule.self))
        DefaultServiceLocator.shared.remove(clazzName: String(describing: SparkScanModule.self))
        DefaultServiceLocator.shared.remove(clazzName: String(describing: BarcodeCountModule.self))
        DefaultServiceLocator.shared.remove(clazzName: String(describing: BarcodePickModule.self))
        DefaultServiceLocator.shared.remove(clazzName: String(describing: BarcodeFindModule.self))
        DefaultServiceLocator.shared.remove(clazzName: String(describing: BarcodeArModule.self))
    }

    deinit {
        invalidate()
    }

    // MARK SparkScan

    @objc(createSparkScanView:resolve:reject:)
    func createSparkScanView(
        _ data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let jsonString = data["viewJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        guard let viewManager = bridge.module(for: SparkScanViewManager.self) as? SparkScanViewManager else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }

        let result = ReactNativeResult(resolve, reject)
        let viewId = data.viewId

        // The RNTSparkScanViewWrapper can be created later than this call.
        dispatchMain {
            if let container = SparkScanViewManager.containers.first(where: { $0.reactTag == NSNumber(value: viewId) })
            {
                self.addSparkScanViewIfFrameSet(container, jsonString: jsonString, result: result)
            } else {
                viewManager.setPostContainerCreateAction(for: viewId) { [weak self] container in
                    guard let self = self else {
                        result.reject(error: ScanditFrameworksCoreError.nilSelf)
                        return
                    }
                    self.addSparkScanViewIfFrameSet(container, jsonString: jsonString, result: result)
                }
            }
        }
    }

    private func addSparkScanViewIfFrameSet(
        _ container: RNTSparkScanViewWrapper,
        jsonString: String,
        result: ReactNativeResult
    ) {
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

    // MARK BarcodeCount

    @objc(createBarcodeCountView:resolve:reject:)
    func createBarcodeCountView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let jsonString = data["viewJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }

        guard let viewManager = bridge.module(for: BarcodeCountViewManager.self) as? BarcodeCountViewManager else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }

        let result = ReactNativeResult(resolve, reject)
        let viewId = data.viewId

        dispatchMain {
            if let container = BarcodeCountViewManager.containers.first(where: {
                $0.reactTag == NSNumber(value: viewId)
            }) {
                self.addBarcodeCountViewIfFrameSet(container, jsonString: jsonString, result: result)
            } else {
                viewManager.setPostContainerCreateAction(for: viewId) { [weak self] container in
                    guard let self = self else {
                        result.reject(error: ScanditFrameworksCoreError.nilSelf)
                        return
                    }
                    self.addBarcodeCountViewIfFrameSet(container, jsonString: jsonString, result: result)
                }
            }
        }
    }

    private func addBarcodeCountViewIfFrameSet(
        _ container: BarcodeCountViewWrapperView,
        jsonString: String,
        result: ReactNativeResult
    ) {
        // RN updates the frame for the wrapper view at a later point, which causes the native SparkScanView to misbehave.
        if container.isFrameSet {
            _ = barcodeCountModule.addViewFromJson(parent: container, viewJson: jsonString, result: result)
        } else {
            container.postFrameSetAction = { [weak self] in
                guard let self = self else {
                    result.reject(error: ScanditFrameworksCoreError.nilSelf)
                    return
                }
                _ = self.barcodeCountModule.addViewFromJson(parent: container, viewJson: jsonString, result: result)
            }
        }
    }

    @objc(removeBarcodeCountView:resolve:reject:)
    func removeBarcodeCountView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodeCountModule.disposeBarcodeCountView(viewId: data.viewId)
        resolve(nil)
    }

    @objc(setBarcodeCountViewPositionAndSize:resolve:reject:)
    func setBarcodeCountViewPositionAndSize(
        _ data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        // Should not be called in RN
        resolve(nil)
    }

    // MARK BarcodePick

    @objc(createPickView:resolve:reject:)
    func createPickView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let jsonString = data["json"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }

        guard let viewManager = bridge.module(for: BarcodePickViewManager.self) as? BarcodePickViewManager else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }

        let result = ReactNativeResult(resolve, reject)
        let viewId = data.viewId

        dispatchMain {
            if let container = BarcodePickViewManager.containers.first(where: { $0.reactTag == NSNumber(value: viewId) }
            ) {
                self.addPickViewIfFrameSet(container, jsonString: jsonString, result: result)
            } else {
                viewManager.setPostContainerCreateAction(for: viewId) { [weak self] container in
                    guard let self = self else {
                        result.reject(error: ScanditFrameworksCoreError.nilSelf)
                        return
                    }
                    self.addPickViewIfFrameSet(container, jsonString: jsonString, result: result)
                }
            }
        }
    }

    private func addPickViewIfFrameSet(
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

    @objc(removePickView:resolve:reject:)
    func removePickView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.removeView(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    @objc(setPickViewPositionAndSize:resolve:reject:)
    func setPickViewPositionAndSize(
        _ data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        // Should not be called in RN
        resolve(nil)
    }

    // MARK BarcodeFind

    @objc(createFindView:resolve:reject:)
    func createFindView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let jsonString = data["json"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }
        guard let viewManager = bridge.module(for: BarcodeFindViewManager.self) as? BarcodeFindViewManager else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }

        let result = ReactNativeResult(resolve, reject)
        let viewId = data.viewId

        viewManager.barcodeFindModule = barcodeFindModule
        dispatchMain {
            if let container = BarcodeFindViewManager.containers.first(where: { $0.reactTag == NSNumber(value: viewId) }
            ) {
                self.barcodeFindModule.addViewToContainer(
                    container: container,
                    jsonString: jsonString,
                    result: ReactNativeResult(resolve, reject)
                )
            } else {
                viewManager.setPostContainerCreateAction(for: viewId) { [weak self] container in
                    guard let self = self else {
                        result.reject(error: ScanditFrameworksCoreError.nilSelf)
                        return
                    }
                    self.barcodeFindModule.addViewToContainer(
                        container: container,
                        jsonString: jsonString,
                        result: result
                    )
                }
            }
        }
    }

    @objc(removeFindView:resolve:reject:)
    func removeFindView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        // handled in ViewManager
        resolve(nil)
    }

    // MARK BarcodeAr

    @objc(createBarcodeArView:resolve:reject:)
    func createBarcodeArView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let viewJson = data["viewJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }

        guard let viewManager = bridge.module(for: BarcodeArViewManager.self) as? BarcodeArViewManager else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }

        let result = ReactNativeResult(resolve, reject)
        let viewId = data.viewId

        dispatchMain {
            if let container = BarcodeArViewManager.containers.first(where: { $0.reactTag == NSNumber(value: viewId) })
            {
                self.addBarcodeArViewIfFrameSet(container, jsonString: viewJson, result: result)
            } else {
                viewManager.setPostContainerCreateAction(for: viewId) { [weak self] container in
                    guard let self = self else {
                        result.reject(error: ScanditFrameworksCoreError.nilSelf)
                        return
                    }
                    self.addBarcodeArViewIfFrameSet(container, jsonString: viewJson, result: result)
                }
            }
        }
    }

    private func addBarcodeArViewIfFrameSet(
        _ container: BarcodeArViewWrapperView,
        jsonString: String,
        result: ReactNativeResult
    ) {
        // RN updates the frame for the wrapper view at a later point, which causes the native BarcodeArView to misbehave.
        if container.isFrameSet {
            _ = barcodeArModule.addViewFromJson(parent: container, viewJson: jsonString, result: result)
        } else {
            container.postFrameSetAction = { [weak self] in
                guard let self = self else {
                    result.reject(error: ScanditFrameworksCoreError.nilSelf)
                    return
                }
                _ = self.barcodeArModule.addViewFromJson(parent: container, viewJson: jsonString, result: result)
            }
        }
    }

    @objc(removeBarcodeArView:resolve:reject:)
    func removeBarcodeArView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodeArModule.removeView(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }
}
