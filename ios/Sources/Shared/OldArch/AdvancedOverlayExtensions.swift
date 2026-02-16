/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2025- Scandit AG. All rights reserved.
 */

import Foundation
import React
import ScanditDataCaptureCore
import ScanditFrameworksBarcode
import ScanditFrameworksCore

public extension AdvancedOverlayContainer {
    public func rootViewWith(jsView: JSView) -> ScanditRootView? {
        // To support self sizing js views we need to leverage the RCTRootViewDelegate
        // see https://reactnative.dev/docs/communication-ios
        let view = ScanditRootView(
            bridge: bridge,
            moduleName: jsView.moduleName,
            initialProperties: jsView.initialProperties
        )
        view.sizeFlexibility = .widthAndHeight
        // Set delegate using setValue to avoid needing formal protocol conformance
        // The concrete classes implement rootViewDidChangeIntrinsicSize, so the delegate calls work at runtime
        view.setValue(self, forKey: "delegate")
        view.backgroundColor = .clear
        view.isUserInteractionEnabled = true
        view.addGestureRecognizer(
            TapGestureRecognizerWithClosure { [weak view] in
                guard let view = view else { return }
                view.didTap?()
            }
        )
        return view
    }
}

// MARK: - RCTRootViewDelegate method implementation
// We implement the delegate method directly without formal protocol conformance
// to avoid exposing RCTRootViewDelegate in the generated Swift-to-ObjC header.
// Objective-C delegates use respondsToSelector: at runtime, so this still works.

extension ScanditDataCaptureBarcode {
    @objc public func rootViewDidChangeIntrinsicSize(_ rootView: RCTRootView!) {
        guard rootView is ScanditRootView else { return }
        rootView.bounds.size = rootView.intrinsicContentSize
    }
}

// Internal class to avoid exposing RCTRootView dependency in generated header
public class ScanditRootView: RCTRootView, TappableView {
    public var didTap: (() -> Void)?
    // Flag to track if animation is in progress
    public var isAnimating = false
}
