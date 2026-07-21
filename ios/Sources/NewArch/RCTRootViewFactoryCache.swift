/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2025- Scandit AG. All rights reserved.
 */

import Foundation
import React
import ScanditDataCaptureCore
import ScanditFrameworksCore

// React-RCTAppDelegate types come from the pod's bridging header. SDC-30774.

/// Manages caching and detection of RCTRootViewFactory for React Native new architecture.
class RCTRootViewFactoryCache {
    static let shared = RCTRootViewFactoryCache()

    private var cachedFactory: RCTRootViewFactory?
    private var isNewArchitectureSupported: Bool = false
    private var hasInitialized: Bool = false

    private init() {}

    /// Initializes the factory cache on module startup.
    func initialize() {
        guard !hasInitialized else { return }
        hasInitialized = true
        detectAndCacheFactory()
    }

    /// Returns the cached factory if new architecture is supported, nil otherwise.
    var factory: RCTRootViewFactory? {
        cachedFactory
    }

    /// Whether new architecture is supported and factory is available.
    var isNewArchitectureAvailable: Bool {
        isNewArchitectureSupported && cachedFactory != nil
    }

    private func detectAndCacheFactory() {
        dispatchMainSync {
            guard let appDelegate = UIApplication.shared.delegate else {
                self.isNewArchitectureSupported = false
                return
            }
            self.cachedFactory = self.extractRootViewFactory(from: appDelegate)
            self.isNewArchitectureSupported = self.cachedFactory != nil
        }
    }

    private func extractRootViewFactory(from appDelegate: UIApplicationDelegate) -> RCTRootViewFactory? {
        let rootViewFactorySelector = NSSelectorFromString("rootViewFactory")

        // 1. Protocol conformance (RN 0.78+ ScanditReactNativeFactoryContainer).
        if let factoryContainer = appDelegate as? ScanditReactNativeFactoryContainer,
            let reactNativeFactory = factoryContainer.reactNativeFactory,
            reactNativeFactory.responds(to: rootViewFactorySelector),
            let factory = reactNativeFactory.perform(rootViewFactorySelector)?.takeUnretainedValue()
                as? RCTRootViewFactory
        {
            Log.info("[Scandit] RCTRootViewFactory obtained via ScanditReactNativeFactoryContainer protocol")
            return factory
        }

        // 2. AppDelegate exposes `rootViewFactory` directly.
        if appDelegate.responds(to: rootViewFactorySelector),
            let factory = (appDelegate as AnyObject).perform(rootViewFactorySelector)?.takeUnretainedValue()
                as? RCTRootViewFactory
        {
            Log.info("[Scandit] RCTRootViewFactory obtained via Objective-C runtime introspection")
            return factory
        }

        // 3. Mirror reflection — covers the stock Expo template which has the
        // factory as a non-@objc property and doesn't expose `rootViewFactory`.
        let mirror = Mirror(reflecting: appDelegate)
        for child in mirror.children {
            guard let value = unwrapOptional(child.value) as AnyObject?,
                value.responds(to: rootViewFactorySelector),
                let factory = value.perform(rootViewFactorySelector)?.takeUnretainedValue() as? RCTRootViewFactory
            else { continue }
            Log.info(
                "[Scandit] RCTRootViewFactory obtained via Mirror reflection of "
                    + "AppDelegate property '\(child.label ?? "?")'"
            )
            return factory
        }

        Log.error("[Scandit] Could not obtain RCTRootViewFactory from AppDelegate")
        return nil
    }

    private func unwrapOptional(_ value: Any) -> Any? {
        let mirror = Mirror(reflecting: value)
        guard mirror.displayStyle == .optional else { return value }
        return mirror.children.first?.value
    }
}
