/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import React
import ScanditBarcodeCapture
import ScanditDataCaptureCore
import ScanditFrameworksBarcode
import ScanditFrameworksCore

protocol BarcodeFindViewWrapperDelegate: NSObject {
    func wrapperViewWillBeRemoved(_ view: BarcodeFindViewWrapperView)
}

class BarcodeFindViewWrapperView: UIView {
    weak var viewManager: BarcodeFindViewManager?

    override func addSubview(_ view: UIView) {
        super.addSubview(view)
        if view is BarcodeFindView {
            view.translatesAutoresizingMaskIntoConstraints = false
            addConstraints([
                view.leadingAnchor.constraint(equalTo: leadingAnchor),
                view.trailingAnchor.constraint(equalTo: trailingAnchor),
                view.topAnchor.constraint(equalTo: topAnchor),
                view.bottomAnchor.constraint(equalTo: bottomAnchor),
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
        viewManager?.wrapperViewWillBeRemoved(self)
        super.removeFromSuperview()

        if let viewManager = viewManager {
            _ = viewManager.getAndRemovePostContainerCreateAction(for: self.reactTag.intValue)
        }
    }
}

@objc(RNTSDCBarcodeFindViewManager)
class BarcodeFindViewManager: RCTViewManager, BarcodeFindViewWrapperDelegate {
    static var containers: [BarcodeFindViewWrapperView] = []

    weak var barcodeFindModule: BarcodeFindModule?

    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    private var postContainerCreateActions: [Int: ((BarcodeFindViewWrapperView) -> Void)] = [:]

    public func setPostContainerCreateAction(for viewId: Int, action: @escaping (BarcodeFindViewWrapperView) -> Void) {
        postContainerCreateActions[viewId] = action
    }

    override func view() -> UIView! {
        let container = BarcodeFindViewWrapperView()
        container.viewManager = self
        BarcodeFindViewManager.containers.append(container)
        return container
    }

    func getAndRemovePostContainerCreateAction(for viewId: Int) -> ((BarcodeFindViewWrapperView) -> Void)? {
        let action = postContainerCreateActions[viewId]
        postContainerCreateActions.removeValue(forKey: viewId)
        return action
    }

    func wrapperViewWillBeRemoved(_ view: BarcodeFindViewWrapperView) {
        if let index = BarcodeFindViewManager.containers.firstIndex(of: view) {
            BarcodeFindViewManager.containers.remove(at: index)
        }
        barcodeFindModule?.onViewRemovedFromSuperview(viewId: view.reactTag.intValue)
    }
}
