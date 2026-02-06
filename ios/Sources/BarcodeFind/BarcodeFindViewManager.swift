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
    weak var delegate: BarcodeFindViewWrapperDelegate?

    var barcodeFindView: BarcodeFindView? {
        dispatchMainSync {
            subviews.first { $0 is BarcodeFindView } as? BarcodeFindView
        }
    }

    override func addSubview(_ view: UIView) {
        super.addSubview(view)
        if view is BarcodeFindView {
            view.translatesAutoresizingMaskIntoConstraints = false
            addConstraints([
                view.leadingAnchor.constraint(equalTo: leadingAnchor),
                view.trailingAnchor.constraint(equalTo: trailingAnchor),
                view.topAnchor.constraint(equalTo: topAnchor),
                view.bottomAnchor.constraint(equalTo: bottomAnchor)
            ])
        }
    }

    override func removeFromSuperview() {
        delegate?.wrapperViewWillBeRemoved(self)
        super.removeFromSuperview()

        if let view = barcodeFindView, view.superview != nil {
            view.removeFromSuperview()
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

    override func view() -> UIView! {
        let container = BarcodeFindViewWrapperView()
        container.delegate = self
        BarcodeFindViewManager.containers.append(container)
        return container
    }

    func wrapperViewWillBeRemoved(_ view: BarcodeFindViewWrapperView) {
        guard let index = BarcodeFindViewManager.containers.firstIndex(of: view) else {
            return
        }
        BarcodeFindViewManager.containers.remove(at: index)
        if let findView = view.barcodeFindView {
            barcodeFindModule?.onViewRemovedFromSuperview(removedView: findView)
        }
    }
}
