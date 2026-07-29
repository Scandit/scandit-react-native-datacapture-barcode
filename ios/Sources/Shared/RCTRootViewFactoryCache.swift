/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2025- Scandit AG. All rights reserved.
 */

import Foundation
import React
import ScanditDataCaptureCore

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
        guard let appDelegate = UIApplication.shared.delegate else {
            isNewArchitectureSupported = false
            return
        }

        cachedFactory = extractRootViewFactory(from: appDelegate)
        isNewArchitectureSupported = cachedFactory != nil
    }

    /// Extracts RCTRootViewFactory from AppDelegate using runtime inspection
    /// This works with any AppDelegate implementation without requiring protocol conformance
    private func extractRootViewFactory(from appDelegate: UIApplicationDelegate) -> RCTRootViewFactory? {
        // Try direct property access for RCTAppDelegate
        if let rctAppDelegate = appDelegate as? RCTAppDelegate {
            return rctAppDelegate.rootViewFactory()
        }

        if let factoryContainer = appDelegate as? ScanditReactNativeFactoryContainer {
            return factoryContainer.reactNativeFactory?.rootViewFactory
        }

        return nil
    }
    #endif
}
