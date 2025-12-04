/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2025- Scandit AG. All rights reserved.
 */

import Foundation
import React
import ScanditDataCaptureCore
import ScanditFrameworksCore
import ScanditFrameworksBarcode

import React_RCTAppDelegate

public extension AdvancedOverlayContainer {
    
    /// Creates a native view for the given JS view using the new architecture (Fabric)
    /// Falls back to old architecture if new architecture is not available
    func rootViewWith(jsView: JSView) -> ScanditRootView {
        // Check if new architecture is available through the factory cache
        if RCTRootViewFactoryCache.shared.isNewArchitectureAvailable,
           let rootViewFactory = RCTRootViewFactoryCache.shared.factory {
            
            // Use RCTRootViewFactory which creates surface views in new architecture
            let rootView = rootViewFactory.view(withModuleName: jsView.moduleName, initialProperties: jsView.initialProperties)
            rootView.backgroundColor = .clear
            
            // Create ScanditRootView with the React Native root view
            let scanditView = ScanditRootView(rootView: rootView)
            scanditView.backgroundColor = .clear
            scanditView.isUserInteractionEnabled = true
            
            return scanditView
        }
        
        // Fallback to old architecture
        return createLegacyRootView(jsView: jsView)
    }
    
    /// Creates a legacy root view for fallback compatibility
    private func createLegacyRootView(jsView: JSView) -> ScanditRootView {
        // Old Architecture: Use RCTRootView directly
        let rootView = RCTRootView(
            bridge: bridge,
            moduleName: jsView.moduleName,
            initialProperties: jsView.initialProperties
        )
        
        let scanditView = ScanditRootView(rootView: rootView)
        scanditView.backgroundColor = UIColor.clear
        scanditView.isUserInteractionEnabled = true
        
        return scanditView
    }
}

// MARK: - Container View for React Native Root View (New Architecture)
public class ScanditRootView: UIView, TappableView {
    public var didTap: (() -> Void)?
    // Flag to track if animation is in progress
    internal var isAnimating = false
    
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
            reactRootView.bottomAnchor.constraint(equalTo: bottomAnchor)
        ])
        
        setupGestureRecognizer()
        startLayoutObservation()
    }
    
    private func setupGestureRecognizer() {
        let tapGesture = UITapGestureRecognizer(target: self, action: #selector(handleTap))
        tapGesture.cancelsTouchesInView = false // Don't interfere with React Native touches
        tapGesture.delaysTouchesBegan = false
        tapGesture.delaysTouchesEnded = false
        
        // Add to the React Native root view so it can intercept touches
        reactRootView.addGestureRecognizer(tapGesture)
        
        // Ensure the root view can receive touches
        reactRootView.isUserInteractionEnabled = true
    }
    
    @objc private func handleTap() {
        didTap?()
    }
    
    private func startLayoutObservation() {
        displayLink = CADisplayLink(target: self, selector: #selector(checkForSizeUpdates))
        displayLink?.add(to: .main, forMode: .common)
        
        // Stop monitoring after reasonable time
        DispatchQueue.main.asyncAfter(deadline: .now() + 5) { [weak self] in
            self?.stopLayoutObservation()
        }
    }
    
    private func stopLayoutObservation() {
        displayLink?.invalidate()
        displayLink = nil
    }
    
    @objc private func checkForSizeUpdates() {
        guard !hasSetInitialSize else { return }
        
        if let actualSize = findRCTViewComponentViewSize() {
            if actualSize.width > 0 && actualSize.height > 0 && !bounds.size.equalTo(actualSize) {
                bounds.size = actualSize
                invalidateIntrinsicContentSize()
                superview?.setNeedsLayout()
                hasSetInitialSize = true
                stopLayoutObservation()
            }
        }
    }
    
    private func findRCTViewComponentViewSize() -> CGSize? {
        return findFirstValidRCTViewComponentView(in: reactRootView)?.bounds.size
    }
    
    private func findFirstValidRCTViewComponentView(in view: UIView, depth: Int = 0) -> UIView? {
        guard depth < 10 else { return nil }
        
        // Use proper inheritance checking instead of string matching
        if let rctViewComponentViewClass = NSClassFromString("RCTViewComponentView") {
            if view.isKind(of: rctViewComponentViewClass) {
                let size = view.bounds.size
                if size.width > 0 && size.height > 0 {
                    return view
                }
            }
        }
        
        // Fallback to string matching for compatibility
        let className = String(describing: type(of: view))
        if className.contains("RCTViewComponentView") {
            let size = view.bounds.size
            if size.width > 0 && size.height > 0 {
                return view
            }
        }
        
        // Search in subviews
        for subview in view.subviews {
            if let found = findFirstValidRCTViewComponentView(in: subview, depth: depth + 1) {
                return found
            }
        }
        
        return nil
    }
    
    // MARK: - UIView Layout Methods
    
    public override var intrinsicContentSize: CGSize {
        if hasSetInitialSize {
            return bounds.size
        }
        return UIView.noIntrinsicMetric == UIView.noIntrinsicMetric ? CGSize(width: UIView.noIntrinsicMetric, height: UIView.noIntrinsicMetric) : .zero
    }
    
    public override func sizeThatFits(_ size: CGSize) -> CGSize {
        return intrinsicContentSize
    }
    
    public override func layoutSubviews() {
        super.layoutSubviews()
        reactRootView.setNeedsLayout()
        reactRootView.layoutIfNeeded()
    }
    
    public override func didMoveToSuperview() {
        super.didMoveToSuperview()
        setNeedsLayout()
    }
    
    // MARK: - React Native Integration
    
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
