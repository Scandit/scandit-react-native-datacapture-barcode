/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2026- Scandit AG. All rights reserved.
 */

import Foundation
import React
import ScanditFrameworksBarcode
import ScanditFrameworksCore
import UIKit

/// New Architecture container view for React Native overlays.
/// Wraps RCTSurfaceHostingProxyRootView inside a plain UIView for size flexibility and tap handling.
public class ScanditRootView: UIView, TappableView {
    public var didTap: (() -> Void)?
    public var isAnimating = false

    private let reactRootView: UIView
    private var hasSetInitialSize = false
    private var displayLink: CADisplayLink?

    init(rootView: UIView) {
        self.reactRootView = rootView
        super.init(frame: .zero)
        setupView()
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    deinit {
        displayLink?.invalidate()
    }

    private func setupView() {
        addSubview(reactRootView)
        reactRootView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            reactRootView.topAnchor.constraint(equalTo: topAnchor),
            reactRootView.leadingAnchor.constraint(equalTo: leadingAnchor),
            reactRootView.trailingAnchor.constraint(equalTo: trailingAnchor),
            reactRootView.bottomAnchor.constraint(equalTo: bottomAnchor),
        ])
        setupGestureRecognizer()
    }

    private func setupGestureRecognizer() {
        let tapGesture = UITapGestureRecognizer(target: self, action: #selector(handleTap))
        tapGesture.cancelsTouchesInView = false
        tapGesture.delaysTouchesBegan = false
        tapGesture.delaysTouchesEnded = false
        reactRootView.addGestureRecognizer(tapGesture)
        reactRootView.isUserInteractionEnabled = true
    }

    @objc private func handleTap() {
        didTap?()
    }

    public override func layoutSubviews() {
        super.layoutSubviews()
        reactRootView.setNeedsLayout()
        reactRootView.layoutIfNeeded()

        if !hasSetInitialSize, let actualSize = findRCTViewComponentViewSize() {
            if actualSize.width > 0 && actualSize.height > 0 && !bounds.size.equalTo(actualSize) {
                self.bounds.size = actualSize
                self.invalidateIntrinsicContentSize()
                self.superview?.setNeedsLayout()
                self.hasSetInitialSize = true
            }
        }
    }

    private func findRCTViewComponentViewSize() -> CGSize? {
        findFirstValidRCTViewComponentView(in: reactRootView)?.bounds.size
    }

    private func findFirstValidRCTViewComponentView(in view: UIView, depth: Int = 0) -> UIView? {
        guard depth < 10 else { return nil }

        if let rctViewComponentViewClass = NSClassFromString("RCTViewComponentView") {
            if view.isKind(of: rctViewComponentViewClass) {
                let size = view.bounds.size
                if size.width > 0 && size.height > 0 { return view }
            }
        }

        let className = String(describing: type(of: view))
        if className.contains("RCTViewComponentView") {
            let size = view.bounds.size
            if size.width > 0 && size.height > 0 { return view }
        }

        for subview in view.subviews {
            if let found = findFirstValidRCTViewComponentView(in: subview, depth: depth + 1) {
                return found
            }
        }
        return nil
    }

    public override var intrinsicContentSize: CGSize {
        if hasSetInitialSize {
            return bounds.size
        }
        return CGSize(width: UIView.noIntrinsicMetric, height: UIView.noIntrinsicMetric)
    }

    public override func sizeThatFits(_ size: CGSize) -> CGSize {
        intrinsicContentSize
    }

    public override func didMoveToSuperview() {
        super.didMoveToSuperview()
        setNeedsLayout()
    }

    public override func reactSetFrame(_ frame: CGRect) {
        if hasSetInitialSize {
            super.reactSetFrame(frame)
        } else {
            setNeedsLayout()
        }
    }

    public override func invalidateIntrinsicContentSize() {
        super.invalidateIntrinsicContentSize()
        superview?.setNeedsLayout()
    }
}
