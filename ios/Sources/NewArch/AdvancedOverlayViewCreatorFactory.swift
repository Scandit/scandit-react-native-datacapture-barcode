/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2026- Scandit AG. All rights reserved.
 */

import Foundation
import React
import React_RCTAppDelegate
import ScanditDataCaptureCore
import ScanditFrameworksBarcode
import ScanditFrameworksCore

/// New Architecture factory: creates an AdvancedOverlayViewCreator using RCTRootViewFactory.
/// The emitter parameter is ignored in new architecture.
public final class AdvancedOverlayViewCreatorFactory {
    private init() {}

    public static func create(emitter: RCTEventEmitter?) -> AdvancedOverlayViewCreator? {
        RCTRootViewFactoryCache.shared.initialize()
        return NewArchAdvancedOverlayViewCreator()
    }
}

/// New Architecture implementation of AdvancedOverlayViewCreator.
/// Creates overlay views using RCTRootViewFactory (Fabric surface hosting proxy).
final class NewArchAdvancedOverlayViewCreator: NSObject, AdvancedOverlayViewCreator {

    public func rootViewWith(jsView: JSView) -> ScanditRootView? {
        guard RCTRootViewFactoryCache.shared.isNewArchitectureAvailable,
            let rootViewFactory = RCTRootViewFactoryCache.shared.factory
        else {
            Log.error("Unable to create overlay view: RCTRootViewFactory not available")
            return nil
        }

        guard
            let rootView = rootViewFactory.view(
                withModuleName: jsView.moduleName,
                initialProperties: jsView.initialProperties
            ) as? RCTSurfaceHostingProxyRootView
        else {
            Log.error("Root view is not an instance of RCTSurfaceHostingProxyRootView")
            return nil
        }

        rootView.backgroundColor = .clear
        rootView.sizeFlexibility = RCTRootViewSizeFlexibility.widthAndHeight

        let scanditView = ScanditRootView(rootView: rootView)
        scanditView.backgroundColor = .clear
        scanditView.isUserInteractionEnabled = true
        return scanditView
    }
}
