/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

import ScanditBarcodeCapture
import ScanditDataCaptureCore

class RNTSparkScanViewWrapper: UIView {
    var isFrameSet = false

    var sparkScanView: SparkScanView? {
        return subviews.first { $0 is SparkScanView } as? SparkScanView
    }

    var postFrameSetAction: (() -> Void)?

    weak var viewManager: SparkScanViewManager?

    override func removeFromSuperview() {
        super.removeFromSuperview()
        guard let index = viewManager?.containers.firstIndex(of: self) else {
            return
        }
        viewManager?.containers.remove(at: index)
        if let sparkScanView = sparkScanView,
           let viewManager = viewManager {
            if sparkScanView.superview != nil {
                sparkScanView.removeFromSuperview()
            }
            viewManager.containers.last?.addSubview(sparkScanView)
        }
    }

    override func layoutSubviews() {
        super.layoutSubviews()
        if !frame.equalTo(.zero) && !isFrameSet {
            isFrameSet = true
            postFrameSetAction?()
        }
    }
}

@objc(RNTSDCSparkScanViewManager)
class SparkScanViewManager: RCTViewManager {
    internal var containers: [RNTSparkScanViewWrapper] = []

    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    var postContainerCreateAction: ((RNTSparkScanViewWrapper) -> Void)?

    override func view() -> UIView! {
        let container = RNTSparkScanViewWrapper()
        container.viewManager = self
        if containers.count == 0 {
            postContainerCreateAction?(container)
        }
        containers.append(container)
        return container
    }
}
