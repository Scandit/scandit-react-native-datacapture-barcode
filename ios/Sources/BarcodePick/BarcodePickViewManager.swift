/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import React
import ScanditBarcodeCapture
import ScanditFrameworksCore
import ScanditDataCaptureCore

class BarcodePickViewWrapperView: UIView {
    weak var viewManager: BarcodePickViewManager?

    var isFrameSet = false

    var postFrameSetAction: (() -> Void)?

    var barcodePickView: BarcodePickView? {
        if Thread.isMainThread {
            return subviews.first { $0 is BarcodePickView } as? BarcodePickView
        }

        return DispatchQueue.main.sync {
            subviews.first { $0 is BarcodePickView } as? BarcodePickView
        }
    }

    override func addSubview(_ view: UIView) {
        super.addSubview(view)
        if view is BarcodePickView {
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
        // Was added to the super view, if no barcodePickView yet
        if let viewManager = viewManager {
            let postCreationAction = viewManager.getAndRemovePostContainerCreateAction(for: self.reactTag.intValue)
            postCreationAction?(self)
        }
    }

    override func removeFromSuperview() {
        super.removeFromSuperview()
        guard let index = BarcodePickViewManager.containers.firstIndex(of: self) else {
            return
        }

        BarcodePickViewManager.containers.remove(at: index)

        if let viewManager = viewManager {
            _ = viewManager.getAndRemovePostContainerCreateAction(for: self.reactTag.intValue)
        }

        if let view = barcodePickView,
           let _ = viewManager {
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

@objc(RNTSDCBarcodePickViewManager)
class BarcodePickViewManager: RCTViewManager {
    static var containers: [BarcodePickViewWrapperView] = []

    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    private var postContainerCreateActions: [Int: ((BarcodePickViewWrapperView) -> Void)] = [:]

    public func setPostContainerCreateAction(for viewId: Int, action: @escaping (BarcodePickViewWrapperView) -> Void) {
        postContainerCreateActions[viewId] = action
    }

    func getAndRemovePostContainerCreateAction(for viewId: Int) -> ((BarcodePickViewWrapperView) -> Void)? {
        let action = postContainerCreateActions[viewId]
        postContainerCreateActions.removeValue(forKey: viewId)
        return action
    }

    override func view() -> UIView! {
        let container = BarcodePickViewWrapperView()
        container.viewManager = self

        BarcodePickViewManager.containers.append(container)

        return container
    }
}
