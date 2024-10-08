/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import React
import ScanditBarcodeCapture
import ScanditDataCaptureCore
import ScanditFrameworksCore

class BarcodeFindViewWrapperView: UIView {
    weak var viewManager: BarcodeFindViewManager?

    var barcodeCountView: BarcodeFindView? {
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
        super.removeFromSuperview()
        guard let index = viewManager?.containers.firstIndex(of: self) else {
            return
        }
        viewManager?.containers.remove(at: index)
        if let view = barcodeCountView,
           let viewManager = viewManager {
            if view.superview != nil {
                view.removeFromSuperview()
            }
        }
    }
}

@objc(RNTSDCBarcodeFindViewManager)
class BarcodeFindViewManager: RCTViewManager {
    var containers: [BarcodeFindViewWrapperView] = []

    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    override func view() -> UIView! {
        let container = BarcodeFindViewWrapperView()
        container.viewManager = self
        containers.append(container)
        return container
    }
}
