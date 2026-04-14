/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2025- Scandit AG. All rights reserved.
 */

import Foundation
import React
import React_RCTAppDelegate
import ScanditDataCaptureCore
import ScanditFrameworksCore

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

    /// Extracts RCTRootViewFactory from AppDelegate using runtime inspection.
    /// This works with any AppDelegate implementation without requiring protocol conformance.
    private func extractRootViewFactory(from appDelegate: UIApplicationDelegate) -> RCTRootViewFactory? {
        // Method 1: Try protocol conformance for RN 0.78+ pattern (RCTReactNativeFactory)
        if let factoryContainer = appDelegate as? ScanditReactNativeFactoryContainer,
            let reactNativeFactory = factoryContainer.reactNativeFactory
        {
            let selector = NSSelectorFromString("rootViewFactory")
            if reactNativeFactory.responds(to: selector),
                let factory = reactNativeFactory.perform(selector)?.takeUnretainedValue() as? RCTRootViewFactory
            {
                Log.info("[Scandit] RCTRootViewFactory obtained via ScanditReactNativeFactoryContainer protocol")
                return factory
            }
        }

        // Method 2: Use Objective-C runtime to access rootViewFactory.
        // This works for both RN 0.74 (property) and RN 0.78+ (method).
        let selector = NSSelectorFromString("rootViewFactory")
        if appDelegate.responds(to: selector) {
            if let factory = appDelegate.perform(selector)?.takeUnretainedValue() as? RCTRootViewFactory {
                Log.info("[Scandit] RCTRootViewFactory obtained via Objective-C runtime introspection")
                return factory
            }
        }

        Log.error("[Scandit] Could not obtain RCTRootViewFactory from AppDelegate")
        return nil
    }
}
