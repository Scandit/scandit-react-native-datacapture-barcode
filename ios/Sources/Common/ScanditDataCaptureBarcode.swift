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

// MARK: - Pending Fabric View Actions Registry

/// Registry for pending view creation actions when the Fabric container isn't ready yet.
/// This enables bidirectional attachment: if the view creation is requested before
/// the container exists, the action is stored here and executed when the container appears.
@objc(SDCPendingFabricViewActions)
public class SDCPendingFabricViewActions: NSObject {
    @objc public static let shared = SDCPendingFabricViewActions()

    private var pendingActions: [Int: (UIView) -> Void] = [:]
    private var viewRemovalCallbacks: [String: (Int) -> Void] = [:]
    private let lock = NSLock()

    private override init() {
        super.init()
    }

    /// Stores a pending action for a viewId.
    @objc public func setPendingAction(for viewId: Int, action: @escaping (UIView) -> Void) {
        lock.lock()
        defer { lock.unlock() }
        pendingActions[viewId] = action
    }

    /// Executes and removes the pending action for a viewId if one exists.
    /// Called from the Fabric component when the container is ready.
    @objc(executePendingActionFor:container:)
    public func executePendingAction(for viewId: Int, container: UIView) {
        lock.lock()
        let action = pendingActions.removeValue(forKey: viewId)
        lock.unlock()

        if let action = action {
            dispatchMain {
                action(container)
            }
        }
    }

    /// Removes a pending action without executing it.
    @objc public func removePendingAction(for viewId: Int) {
        lock.lock()
        defer { lock.unlock() }
        pendingActions.removeValue(forKey: viewId)
    }

    /// Registers a callback for when a view of a specific type is removed.
    /// The key should be a unique identifier for the view type (e.g., "BarcodeFind").
    public func setViewRemovalCallback(for key: String, callback: @escaping (Int) -> Void) {
        lock.lock()
        defer { lock.unlock() }
        viewRemovalCallbacks[key] = callback
    }

    /// Called from Fabric components when a container is removed.
    /// This notifies the appropriate module to handle cleanup.
    @objc(notifyViewRemovedFor:viewId:)
    public func notifyViewRemoved(for key: String, viewId: Int) {
        lock.lock()
        let callback = viewRemovalCallbacks[key]
        lock.unlock()

        if let callback = callback {
            dispatchMain {
                callback(viewId)
            }
        }
    }
}

/// Swift implementation for the Barcode native module.
/// This class contains all business logic and is used by the Obj-C++ adapter (NativeScanditDataCaptureBarcode).
/// Following the Adapter Pattern from React Native's TurboModule Swift guide.
@objcMembers
public class ScanditDataCaptureBarcodeImpl: NSObject {
    let barcodeModule: BarcodeModule
    var barcodeCaptureModule: BarcodeCaptureModule!
    var barcodeSelectionModule: BarcodeSelectionModule!
    var barcodeBatchModule: BarcodeBatchModule!
    var sparkScanModule: SparkScanModule!
    var barcodeCountModule: BarcodeCountModule!
    var barcodePickModule: BarcodePickModule!
    var barcodeFindModule: BarcodeFindModule!
    var barcodeArModule: BarcodeArModule!

    /// Reference to the RCTEventEmitter adapter.
    /// Used for Paper view manager lookup via bridge. Nil in new architecture.
    weak var emitter: RCTEventEmitter?

    public override init() {
        barcodeModule = BarcodeModule()
        super.init()
    }

    /// Called by the Obj-C++ adapter to set up the emitter reference and initialize modules (old architecture).
    public func setup(with emitter: RCTEventEmitter) {
        self.emitter = emitter
        guard let reactEmitter = ScanditDataCaptureCore.ReactNativeEmitterFactory.create(emitter: emitter) else {
            fatalError("Failed to create ReactNativeEmitter")
        }
        initializeModules(with: reactEmitter)
    }

    /// Called by the Obj-C++ adapter to set up the emitter reference and initialize modules (new architecture).
    /// - Parameters:
    ///   - emitter: The RCTEventEmitter (nil in new arch since we don't inherit from RCTEventEmitter).
    ///   - turboEmitter: TurboModule emitter block for new architecture.
    @objc(setupWith:turboEmitter:)
    public func setup(with emitter: RCTEventEmitter?, turboEmitter: SDCEventEmitBlock?) {
        self.emitter = emitter
        guard
            let reactEmitter = ScanditDataCaptureCore.ReactNativeEmitterFactory.create(
                emitter: emitter,
                turboEmitter: turboEmitter
            )
        else {
            fatalError("Failed to create ReactNativeEmitter")
        }
        initializeModules(with: reactEmitter)
    }

    private func initializeModules(with reactEmitter: ReactNativeEmitter) {

        barcodeCaptureModule = BarcodeCaptureModule(emitter: reactEmitter)
        barcodeCaptureModule.didStart()

        let aimedBrushProvider = FrameworksBarcodeSelectionAimedBrushProvider(
            emitter: reactEmitter
        )
        let trackedBrushProvider = FrameworksBarcodeSelectionTrackedBrushProvider(
            emitter: reactEmitter
        )

        barcodeSelectionModule = BarcodeSelectionModule(
            emitter: reactEmitter,
            aimedBrushProvider: aimedBrushProvider,
            trackedBrushProvider: trackedBrushProvider
        )
        barcodeSelectionModule.didStart()

        let viewResolver = AdvancedOverlayViewCreatorFactory.create(emitter: emitter)
            .map { ReactViewFromJsonResolver(creator: $0) }
        barcodeBatchModule = BarcodeBatchModule(emitter: reactEmitter, viewFromJsonResolver: viewResolver)
        barcodeBatchModule.didStart()

        sparkScanModule = SparkScanModule(emitter: reactEmitter)
        sparkScanModule.didStart()

        barcodeCountModule = BarcodeCountModule(emitter: reactEmitter)
        barcodeCountModule.didStart()

        barcodePickModule = BarcodePickModule(emitter: reactEmitter)
        barcodePickModule.didStart()

        barcodeFindModule = BarcodeFindModule(emitter: reactEmitter)
        barcodeFindModule.didStart()

        barcodeArModule = BarcodeArModule(emitter: reactEmitter)
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

    public func supportedEvents() -> [String] {
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
        events += FrameworksBarcodeFindEvent.allCases.map { $0.rawValue }
        events += BarcodeArListenerEvents.allCases.map { $0.rawValue }
        events += BarcodeArCustomHighlightEvents.allCases.map { $0.rawValue }
        events += BarcodeArCustomAnnotationEvents.allCases.map { $0.rawValue }
        events += BarcodeArViewUiDelegateEvents.allCases.map { $0.rawValue }
        events += BarcodeArAnnotationProviderEvents.allCases.map { $0.rawValue }
        events += BarcodeArHighlightProviderEvents.allCases.map { $0.rawValue }
        events += FrameworksBarcodeArAnnotationEvents.allCases.map { $0.rawValue }
        events += FrameworksBarcodeDataTransformerEvent.allCases.map { $0.rawValue }

        return events
    }

    public func getConstants() -> [AnyHashable: Any] {
        [
            "Defaults": barcodeModule.getDefaults()
        ]
    }

    public func executeBarcode(
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

    public func invalidate() {
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

    // MARK: - SparkScan

    public func createSparkScanView(
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

        // The wrapper view can be created later than this call.
        dispatchMain {
            // Check Paper (legacy arch) containers first
            let paperContainers = SparkScanViewManager.containers
            let paperContainer = paperContainers.first(where: {
                $0.reactTag == NSNumber(value: viewId)
            })
            // Check Fabric (new arch) containers
            let fabricContainers = RCTFabricSparkScanViewContainers.containers() ?? []
            let fabricContainer = fabricContainers.first(where: {
                $0.tag == viewId
            })

            if let container = paperContainer {
                self.addSparkScanViewIfFrameSet(container, jsonString: jsonString, result: result)
            } else if let container = fabricContainer {
                self.addSparkScanViewToFabricContainer(container, jsonString: jsonString, result: result)
            } else {
                // Container not found - store pending action in both mechanisms
                // Whichever architecture is active will execute its callback first

                // Store in Fabric pending action registry (for Fabric mode)
                SDCPendingFabricViewActions.shared.setPendingAction(for: viewId) { [weak self] container in
                    guard let self = self else {
                        result.reject(error: ScanditFrameworksCoreError.nilSelf)
                        return
                    }
                    self.addSparkScanViewToFabricContainer(container, jsonString: jsonString, result: result)
                }

                // Also store in Paper callback (for Paper mode)
                if let viewManager = self.emitter?.bridge?.module(for: SparkScanViewManager.self)
                    as? SparkScanViewManager
                {
                    viewManager.setPostContainerCreateAction(for: viewId) { [weak self] container in
                        // Clear the Fabric pending action since Paper is handling it
                        SDCPendingFabricViewActions.shared.removePendingAction(for: viewId)
                        guard let self = self else {
                            result.reject(error: ScanditFrameworksCoreError.nilSelf)
                            return
                        }
                        self.addSparkScanViewIfFrameSet(container, jsonString: jsonString, result: result)
                    }
                }
            }
        }
    }

    private func addSparkScanViewIfFrameSet(
        _ container: RNTSparkScanViewWrapper,
        jsonString: String,
        result: ReactNativeResult
    ) {
        if container.isFrameSet {
            sparkScanModule.addViewToContainer(container, jsonString: jsonString, result: result)
        } else {
            container.postFrameSetAction = { [weak self] in
                guard let self = self else {
                    result.reject(error: ScanditFrameworksCoreError.nilSelf)
                    return
                }
                self.sparkScanModule.addViewToContainer(container, jsonString: jsonString, result: result)
            }
        }
    }

    private func addSparkScanViewToFabricContainer(
        _ container: UIView,
        jsonString: String,
        result: ReactNativeResult
    ) {
        let isFrameSet = (container.value(forKey: "isFrameSet") as? Bool) ?? false
        if isFrameSet {
            sparkScanModule.addViewToContainer(container, jsonString: jsonString, result: result)
        } else {
            let action: @convention(block) () -> Void = { [weak self] in
                guard let self = self else {
                    result.reject(error: ScanditFrameworksCoreError.nilSelf)
                    return
                }
                self.sparkScanModule.addViewToContainer(container, jsonString: jsonString, result: result)
            }
            container.setValue(action, forKey: "postFrameSetAction")
        }
    }

    // MARK: - BarcodeCount

    public func createBarcodeCountView(
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

        dispatchMain {
            // Check Paper (legacy arch) containers first
            let paperContainers = BarcodeCountViewManager.containers
            let paperContainer = paperContainers.first(where: {
                $0.reactTag == NSNumber(value: viewId)
            })
            // Check Fabric (new arch) containers
            let fabricContainers = RCTFabricBarcodeCountViewContainers.containers() ?? []
            let fabricContainer = fabricContainers.first(where: {
                $0.tag == viewId
            })

            if let container = paperContainer {
                self.addBarcodeCountViewIfFrameSet(container, jsonString: jsonString, result: result)
            } else if let container = fabricContainer {
                self.addBarcodeCountViewToFabricContainer(container, jsonString: jsonString, result: result)
            } else {
                // Container not found - store pending action in both mechanisms
                // Whichever architecture is active will execute its callback first

                // Store in Fabric pending action registry (for Fabric mode)
                SDCPendingFabricViewActions.shared.setPendingAction(for: viewId) { [weak self] container in
                    guard let self = self else {
                        result.reject(error: ScanditFrameworksCoreError.nilSelf)
                        return
                    }
                    self.addBarcodeCountViewToFabricContainer(container, jsonString: jsonString, result: result)
                }

                // Also store in Paper callback (for Paper mode)
                if let viewManager = self.emitter?.bridge?.module(for: BarcodeCountViewManager.self)
                    as? BarcodeCountViewManager
                {
                    viewManager.setPostContainerCreateAction(for: viewId) { [weak self] container in
                        // Clear the Fabric pending action since Paper is handling it
                        SDCPendingFabricViewActions.shared.removePendingAction(for: viewId)
                        guard let self = self else {
                            result.reject(error: ScanditFrameworksCoreError.nilSelf)
                            return
                        }
                        self.addBarcodeCountViewIfFrameSet(container, jsonString: jsonString, result: result)
                    }
                }
            }
        }
    }

    private func addBarcodeCountViewIfFrameSet(
        _ container: BarcodeCountViewWrapperView,
        jsonString: String,
        result: ReactNativeResult
    ) {
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

    private func addBarcodeCountViewToFabricContainer(
        _ container: UIView,
        jsonString: String,
        result: ReactNativeResult
    ) {
        let isFrameSet = (container.value(forKey: "isFrameSet") as? Bool) ?? false
        if isFrameSet {
            _ = barcodeCountModule.addViewFromJson(parent: container, viewJson: jsonString, result: result)
        } else {
            let action: @convention(block) () -> Void = { [weak self] in
                guard let self = self else {
                    result.reject(error: ScanditFrameworksCoreError.nilSelf)
                    return
                }
                _ = self.barcodeCountModule.addViewFromJson(parent: container, viewJson: jsonString, result: result)
            }
            container.setValue(action, forKey: "postFrameSetAction")
        }
    }

    public func removeBarcodeCountView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodeCountModule.disposeBarcodeCountView(viewId: data.viewId)
        resolve(nil)
    }

    public func setBarcodeCountViewPositionAndSize(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        // Should not be called in RN
        resolve(nil)
    }

    // MARK: - BarcodePick

    public func createPickView(
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
            // Check Paper (legacy arch) containers first
            let paperContainers = BarcodePickViewManager.containers
            let paperContainer = paperContainers.first(where: {
                $0.reactTag == NSNumber(value: viewId)
            })
            // Check Fabric (new arch) containers
            let fabricContainers = RCTFabricBarcodePickViewContainers.containers() ?? []
            let fabricContainer = fabricContainers.first(where: {
                $0.tag == viewId
            })

            if let container = paperContainer {
                self.addPickViewIfFrameSet(container, jsonString: jsonString, result: result)
            } else if let container = fabricContainer {
                self.addPickViewToFabricContainer(container, jsonString: jsonString, result: result)
            } else {
                // Container not found - store pending action in both mechanisms
                // Whichever architecture is active will execute its callback first

                // Store in Fabric pending action registry (for Fabric mode)
                SDCPendingFabricViewActions.shared.setPendingAction(for: viewId) { [weak self] container in
                    guard let self = self else {
                        result.reject(error: ScanditFrameworksCoreError.nilSelf)
                        return
                    }
                    self.addPickViewToFabricContainer(container, jsonString: jsonString, result: result)
                }

                // Also store in Paper callback (for Paper mode)
                if let viewManager = self.emitter?.bridge?.module(for: BarcodePickViewManager.self)
                    as? BarcodePickViewManager
                {
                    viewManager.setPostContainerCreateAction(for: viewId) { [weak self] container in
                        // Clear the Fabric pending action since Paper is handling it
                        SDCPendingFabricViewActions.shared.removePendingAction(for: viewId)
                        guard let self = self else {
                            result.reject(error: ScanditFrameworksCoreError.nilSelf)
                            return
                        }
                        self.addPickViewIfFrameSet(container, jsonString: jsonString, result: result)
                    }
                }
            }
        }
    }

    private func addPickViewIfFrameSet(
        _ container: BarcodePickViewWrapperView,
        jsonString: String,
        result: ReactNativeResult
    ) {
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

    private func addPickViewToFabricContainer(
        _ container: UIView,
        jsonString: String,
        result: ReactNativeResult
    ) {
        let isFrameSet = (container.value(forKey: "isFrameSet") as? Bool) ?? false
        if isFrameSet {
            barcodePickModule.addViewToContainer(container: container, jsonString: jsonString, result: result)
        } else {
            let action: @convention(block) () -> Void = { [weak self] in
                guard let self = self else {
                    result.reject(error: ScanditFrameworksCoreError.nilSelf)
                    return
                }
                self.barcodePickModule.addViewToContainer(container: container, jsonString: jsonString, result: result)
            }
            container.setValue(action, forKey: "postFrameSetAction")
        }
    }

    public func removePickView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodePickModule.removeView(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }

    public func setPickViewPositionAndSize(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        // Should not be called in RN
        resolve(nil)
    }

    // MARK: - BarcodeFind

    public func createFindView(
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

        // Set barcodeFindModule on Paper viewManager if available
        if let viewManager = emitter?.bridge?.module(for: BarcodeFindViewManager.self) as? BarcodeFindViewManager {
            viewManager.barcodeFindModule = barcodeFindModule
        }

        dispatchMain {
            // Check Paper (legacy arch) containers first
            let paperContainers = BarcodeFindViewManager.containers
            let paperContainer = paperContainers.first(where: {
                $0.reactTag == NSNumber(value: viewId)
            })
            // Check Fabric (new arch) containers
            let fabricContainers = RCTFabricBarcodeFindViewContainers.containers() ?? []
            let fabricContainer = fabricContainers.first(where: {
                $0.tag == viewId
            })

            if let container = paperContainer {
                self.barcodeFindModule.addViewToContainer(
                    container: container,
                    jsonString: jsonString,
                    result: result
                )
            } else if let container = fabricContainer {
                self.barcodeFindModule.addViewToContainer(
                    container: container,
                    jsonString: jsonString,
                    result: result
                )
            } else {
                // Container not found - store pending action in both mechanisms
                // Whichever architecture is active will execute its callback first

                // Store in Fabric pending action registry (for Fabric mode)
                SDCPendingFabricViewActions.shared.setPendingAction(for: viewId) { [weak self] container in
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

                // Also store in Paper callback (for Paper mode)
                if let viewManager = self.emitter?.bridge?.module(for: BarcodeFindViewManager.self)
                    as? BarcodeFindViewManager
                {
                    viewManager.setPostContainerCreateAction(for: viewId) { [weak self] container in
                        // Clear the Fabric pending action since Paper is handling it
                        SDCPendingFabricViewActions.shared.removePendingAction(for: viewId)
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
    }

    public func removeFindView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        let viewId = (data["viewId"] as? Int) ?? -1
        barcodeFindModule.removeBarcodeFindView(
            viewId,
            result: ReactNativeResult(resolve, reject)
        )
    }

    // MARK: - BarcodeAr

    public func createBarcodeArView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let viewJson = data["viewJson"] as? String else {
            ReactNativeResult(resolve, reject).reject(error: ScanditFrameworksCoreError.nilArgument)
            return
        }

        let result = ReactNativeResult(resolve, reject)
        let viewId = data.viewId

        dispatchMain {
            // Check Paper (legacy arch) containers first
            let paperContainers = BarcodeArViewManager.containers
            let paperContainer = paperContainers.first(where: {
                $0.reactTag == NSNumber(value: viewId)
            })
            // Check Fabric (new arch) containers
            let fabricContainers = RCTFabricBarcodeArViewContainers.containers() ?? []
            let fabricContainer = fabricContainers.first(where: {
                $0.tag == viewId
            })

            if let container = paperContainer {
                self.addBarcodeArViewIfFrameSet(container, jsonString: viewJson, result: result)
            } else if let container = fabricContainer {
                self.addBarcodeArViewToFabricContainer(container, jsonString: viewJson, result: result)
            } else {
                // Container not found - store pending action in both mechanisms
                // Whichever architecture is active will execute its callback first

                // Store in Fabric pending action registry (for Fabric mode)
                SDCPendingFabricViewActions.shared.setPendingAction(for: viewId) { [weak self] container in
                    guard let self = self else {
                        result.reject(error: ScanditFrameworksCoreError.nilSelf)
                        return
                    }
                    self.addBarcodeArViewToFabricContainer(container, jsonString: viewJson, result: result)
                }

                // Also store in Paper callback (for Paper mode)
                if let viewManager = self.emitter?.bridge?.module(for: BarcodeArViewManager.self)
                    as? BarcodeArViewManager
                {
                    viewManager.setPostContainerCreateAction(for: viewId) { [weak self] container in
                        // Clear the Fabric pending action since Paper is handling it
                        SDCPendingFabricViewActions.shared.removePendingAction(for: viewId)
                        guard let self = self else {
                            result.reject(error: ScanditFrameworksCoreError.nilSelf)
                            return
                        }
                        self.addBarcodeArViewIfFrameSet(container, jsonString: viewJson, result: result)
                    }
                }
            }
        }
    }

    private func addBarcodeArViewIfFrameSet(
        _ container: BarcodeArViewWrapperView,
        jsonString: String,
        result: ReactNativeResult
    ) {
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

    private func addBarcodeArViewToFabricContainer(
        _ container: UIView,
        jsonString: String,
        result: ReactNativeResult
    ) {
        let isFrameSet = (container.value(forKey: "isFrameSet") as? Bool) ?? false
        if isFrameSet {
            _ = barcodeArModule.addViewFromJson(parent: container, viewJson: jsonString, result: result)
        } else {
            let action: @convention(block) () -> Void = { [weak self] in
                guard let self = self else {
                    result.reject(error: ScanditFrameworksCoreError.nilSelf)
                    return
                }
                _ = self.barcodeArModule.addViewFromJson(parent: container, viewJson: jsonString, result: result)
            }
            container.setValue(action, forKey: "postFrameSetAction")
        }
    }

    public func removeBarcodeArView(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        barcodeArModule.removeView(viewId: data.viewId, result: ReactNativeResult(resolve, reject))
    }
}
