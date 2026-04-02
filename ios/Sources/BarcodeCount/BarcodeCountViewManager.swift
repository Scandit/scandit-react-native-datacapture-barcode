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

    override func removeFromSuperview() {
        super.removeFromSuperview()
        guard let index = BarcodeCountViewManager.containers.firstIndex(of: self) else {
            return
        }

        BarcodeCountViewManager.containers.remove(at: index)

        if let view = barcodeCountView,
           let viewManager = viewManager {
            if view.superview != nil {
                view.removeFromSuperview()
            }
        }
    }
}

@objc(RNTSDCBarcodeCountViewManager)
class BarcodeCountViewManager: RCTViewManager {
    static var containers: [BarcodeCountViewWrapperView] = []

    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    override func view() -> UIView! {
        let container = BarcodeCountViewWrapperView()
        container.viewManager = self

        BarcodeCountViewManager.containers.append(container)

        return container
    }
}
