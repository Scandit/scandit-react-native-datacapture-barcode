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

extension AdvancedOverlayContainer: RCTRootViewDelegate {
    public func rootViewWith(jsView: JSView) -> ScanditRootView? {
        // To support self sizing js views we need to leverage the RCTRootViewDelegate
        // see https://reactnative.dev/docs/communication-ios
        let view = ScanditRootView(
            bridge: bridge,
            moduleName: jsView.moduleName,
            initialProperties: jsView.initialProperties
        )
        view.sizeFlexibility = .widthAndHeight
        view.delegate = self
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

    public func rootViewDidChangeIntrinsicSize(_ rootView: RCTRootView!) {
        guard let view = rootView as? ScanditRootView else { return }
        rootView.bounds.size = rootView.intrinsicContentSize
    }
}

public class ScanditRootView: RCTRootView, TappableView {
    public var didTap: (() -> Void)?
    // Flag to track if animation is in progress
    internal var isAnimating = false
}
