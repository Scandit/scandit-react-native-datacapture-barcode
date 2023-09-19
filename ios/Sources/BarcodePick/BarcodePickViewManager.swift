/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import ScanditBarcodeCapture
import ScanditFrameworksCore
import ScanditDataCaptureCore

class BarcodePickViewWrapperView: UIView {
    weak var viewManager: BarcodePickViewManager?

    var barcodePickView: BarcodePickView? {
        return dispatchMainSync {
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

    override func removeFromSuperview() {
        super.removeFromSuperview()
        guard let index = viewManager?.containers.firstIndex(of: self) else {
            return
        }
        viewManager?.containers.remove(at: index)
        if let view = barcodePickView,
           let viewManager = viewManager {
            if view.superview != nil {
                view.removeFromSuperview()
            }
            viewManager.containers.last?.addSubview(view)
        }
    }
}

@objc(RNTSDCBarcodePickViewManager)
class BarcodePickViewManager: RCTViewManager {
    var containers: [BarcodePickViewWrapperView] = []

    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    override func view() -> UIView! {
        let container = BarcodePickViewWrapperView()
        container.viewManager = self
        containers.append(container)
        return container
    }
}
