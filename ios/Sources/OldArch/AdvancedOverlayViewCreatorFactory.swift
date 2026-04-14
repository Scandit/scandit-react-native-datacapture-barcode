/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2026- Scandit AG. All rights reserved.
 */

import Foundation
import React
import ScanditDataCaptureCore
import ScanditFrameworksBarcode
import ScanditFrameworksCore

/// Old Architecture factory: creates an AdvancedOverlayViewCreator using the RCT bridge.
public final class AdvancedOverlayViewCreatorFactory {
    private init() {}

    public static func create(emitter: RCTEventEmitter?) -> AdvancedOverlayViewCreator? {
        guard let emitter = emitter else { return nil }
        return OldArchAdvancedOverlayViewCreator(emitter: emitter)
    }
}

/// Old Architecture implementation of AdvancedOverlayViewCreator.
/// Creates overlay views using RCTRootView with the legacy bridge.
final class OldArchAdvancedOverlayViewCreator: NSObject, AdvancedOverlayViewCreator {
    private weak var emitter: RCTEventEmitter?

    init(emitter: RCTEventEmitter) {
        self.emitter = emitter
        super.init()
    }

    public func rootViewWith(jsView: JSView) -> ScanditRootView? {
        guard let bridge = emitter?.bridge else { return nil }

        let view = ScanditRootView(
            bridge: bridge,
            moduleName: jsView.moduleName,
            initialProperties: jsView.initialProperties
        )
        view.sizeFlexibility = .widthAndHeight
        // Set delegate using setValue to avoid needing formal protocol conformance.
        // The concrete classes implement rootViewDidChangeIntrinsicSize, so the delegate calls work at runtime.
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

// MARK: - RCTRootViewDelegate

extension OldArchAdvancedOverlayViewCreator {
    @objc public func rootViewDidChangeIntrinsicSize(_ rootView: RCTRootView!) {
        guard rootView is ScanditRootView else { return }
        rootView.bounds.size = rootView.intrinsicContentSize
    }
}

// MARK: - ScanditRootView for Old Architecture

/// Wraps RCTRootView and adds tappable view support for overlay interactions.
public class ScanditRootView: RCTRootView, TappableView {
    public var didTap: (() -> Void)?
    public var isAnimating = false
}
