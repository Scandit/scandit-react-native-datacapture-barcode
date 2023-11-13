/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import ScanditBarcodeCapture
import ScanditDataCaptureCore

class BarcodeCountViewWrapperView: UIView {
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
}

@objc(RNTSDCBarcodeCountViewManager)
class BarcodeCountViewManager: RCTViewManager {
    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    override func view() -> UIView! {
        BarcodeCountViewWrapperView()
    }
}
