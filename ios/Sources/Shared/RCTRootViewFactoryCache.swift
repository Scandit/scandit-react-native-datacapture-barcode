/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2025- Scandit AG. All rights reserved.
 */

import Foundation
import React
import ScanditDataCaptureCore
import ScanditFrameworksCore

#if RCT_NEW_ARCH_ENABLED
import React_RCTAppDelegate
#endif

/// Manages caching and detection of RCTRootViewFactory for React Native new architecture
class RCTRootViewFactoryCache {
    static let shared = RCTRootViewFactoryCache()

    #if RCT_NEW_ARCH_ENABLED
    private var cachedFactory: RCTRootViewFactory?
    #endif
    private var isNewArchitectureSupported: Bool = false
    private var hasInitialized: Bool = false

    private init() {}

    /// Initialize the factory cache on module startup
    func initialize() {
        guard !hasInitialized else { return }
        hasInitialized = true

        #if RCT_NEW_ARCH_ENABLED
        detectAndCacheFactory()
        #else
        isNewArchitectureSupported = false
        #endif
    }

    #if RCT_NEW_ARCH_ENABLED
    /// Returns the cached factory if new architecture is supported, nil otherwise
    var factory: RCTRootViewFactory? {
        cachedFactory
    }

    #endif

    /// Whether new architecture is supported and factory is available
    var isNewArchitectureAvailable: Bool {
        #if RCT_NEW_ARCH_ENABLED
        return isNewArchitectureSupported && cachedFactory != nil
        #else
        return false
        #endif
    }

    #if RCT_NEW_ARCH_ENABLED
    private func detectAndCacheFactory() {
        // Use synchronous dispatch to ensure initialization completes before module continues
        // Must access UIApplication.delegate on main thread per UIKit requirements
        dispatchMainSync {
            guard let appDelegate = UIApplication.shared.delegate else {
                isNewArchitectureSupported = false
                return
            }

            cachedFactory = extractRootViewFactory(from: appDelegate)
            isNewArchitectureSupported = cachedFactory != nil
        }
    }

    /// Extracts RCTRootViewFactory from AppDelegate using runtime inspection
    /// This works with any AppDelegate implementation without requiring protocol conformance
    private func extractRootViewFactory(from appDelegate: UIApplicationDelegate) -> RCTRootViewFactory? {
        // Method 1: Try protocol conformance for RN 0.78+ pattern (RCTReactNativeFactory)
        if let factoryContainer = appDelegate as? ScanditReactNativeFactoryContainer,
            let reactNativeFactory = factoryContainer.reactNativeFactory
        {
            // Use runtime to get rootViewFactory since RCTReactNativeFactory may not exist at compile time
            let selector = NSSelectorFromString("rootViewFactory")
            if reactNativeFactory.responds(to: selector),
                let factory = reactNativeFactory.perform(selector)?.takeUnretainedValue() as? RCTRootViewFactory
            {
                Log.info("[Scandit] RCTRootViewFactory obtained via ScanditReactNativeFactoryContainer protocol")
                return factory
            }
        }

        // Method 2: Use Objective-C runtime to access rootViewFactory
        // This works for both RN 0.74 (property) and RN 0.78+ (method)
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
    #endif
}
