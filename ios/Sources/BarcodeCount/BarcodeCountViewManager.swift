/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import React
import ScanditBarcodeCapture
import ScanditDataCaptureCore
import ScanditFrameworksCore

class BarcodeCountViewWrapperView: UIView {
    weak var viewManager: BarcodeCountViewManager?
    
    var isFrameSet = false
    
    var postFrameSetAction: (() -> Void)?

    var barcodeCountView: BarcodeCountView? {
        if Thread.isMainThread {
            return subviews.first { $0 is BarcodeCountView } as? BarcodeCountView
        }

        return DispatchQueue.main.sync {
            subviews.first { $0 is BarcodeCountView } as? BarcodeCountView
        }
    }

    override func addSubview(_ view: UIView) {
        super.addSubview(view)
        if view is BarcodeCountView {
            view.translatesAutoresizingMaskIntoConstraints = false
            addConstraints([
                view.leadingAnchor.constraint(equalTo: leadingAnchor),
                view.trailingAnchor.constraint(equalTo: trailingAnchor),
                view.topAnchor.constraint(equalTo: topAnchor),
                view.bottomAnchor.constraint(equalTo: bottomAnchor)
            ])
        }
    }
    
    override func didMoveToSuperview() {
        // Was added to the super view, if no sparkScanView yet
        if let viewManager = viewManager {
            let postCreationAction = viewManager.getAndRemovePostContainerCreateAction(for: self.reactTag.intValue)
            postCreationAction?(self)
        }
    }


    override func removeFromSuperview() {
        super.removeFromSuperview()
        guard let index = BarcodeCountViewManager.containers.firstIndex(of: self) else {
            return
        }

        BarcodeCountViewManager.containers.remove(at: index)
        
        if let viewManager = viewManager {
            _ = viewManager.getAndRemovePostContainerCreateAction(for: self.reactTag.intValue)
        }

        if let view = barcodeCountView,
           let viewManager = viewManager {
            if view.superview != nil {
                view.removeFromSuperview()
            }
        }
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        // This is needed only the first time to execute the action queued in the postFrameSetAction
        if !frame.equalTo(.zero) && !isFrameSet {
            isFrameSet = true
            postFrameSetAction?()
        }
    }
}

@objc(RNTSDCBarcodeCountViewManager)
class BarcodeCountViewManager: RCTViewManager {
    static var containers: [BarcodeCountViewWrapperView] = []

    override class func requiresMainQueueSetup() -> Bool {
        true
    }
    
    private var postContainerCreateActions: [Int: ((BarcodeCountViewWrapperView) -> Void)] = [:]

    public func setPostContainerCreateAction(for viewId: Int, action: @escaping (BarcodeCountViewWrapperView) -> Void) {
        postContainerCreateActions[viewId] = action
    }

    func getAndRemovePostContainerCreateAction(for viewId: Int) -> ((BarcodeCountViewWrapperView) -> Void)? {
        let action = postContainerCreateActions[viewId]
        postContainerCreateActions.removeValue(forKey: viewId)
        return action
    }

    override func view() -> UIView! {
        let container = BarcodeCountViewWrapperView()
        container.viewManager = self

        BarcodeCountViewManager.containers.append(container)

        return container
    }
}
