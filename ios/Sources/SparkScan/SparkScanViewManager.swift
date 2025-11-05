/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

import React
import ScanditBarcodeCapture
import ScanditDataCaptureCore
import ScanditFrameworksCore

class RNTSparkScanViewWrapper: UIView {
    var isFrameSet = false

    var sparkScanView: SparkScanView? {
        return subviews.first { $0 is SparkScanView } as? SparkScanView
    }

    var postFrameSetAction: (() -> Void)?

    weak var viewManager: SparkScanViewManager?

    override func removeFromSuperview() {
        super.removeFromSuperview()
        guard let index = SparkScanViewManager.containers.firstIndex(of: self) else {
            return
        }

        SparkScanViewManager.containers.remove(at: index)

        if let sparkScanView = sparkScanView,
           let _ = viewManager {
            if sparkScanView.superview != nil {
                sparkScanView.removeFromSuperview()
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

    override func didUpdateReactSubviews() {
        super.didUpdateReactSubviews()
        // Ensure SparkScanView is always on top
        if let sparkScanView = subviews.first(where: { $0 is SparkScanView }) {
            bringSubviewToFront(sparkScanView)
        }
    }
}

@objc(RNTSDCSparkScanViewManager)
class SparkScanViewManager: RCTViewManager {
    static var containers: [RNTSparkScanViewWrapper] = []

    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    var postContainerCreateAction: ((RNTSparkScanViewWrapper) -> Void)?

    override func view() -> UIView! {
        let container = RNTSparkScanViewWrapper()
        container.viewManager = self
        if SparkScanViewManager.containers.count == 0 {
            postContainerCreateAction?(container)
        }

        SparkScanViewManager.containers.append(container)

        return container
    }
}
