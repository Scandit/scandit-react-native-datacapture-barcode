/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

import React
import ScanditBarcodeCapture
import ScanditDataCaptureCore

class RNTSparkScanViewWrapper: UIView {
    var isFrameSet = false

    var sparkScanView: SparkScanView? {
        return subviews.first { $0 is SparkScanView } as? SparkScanView
    }

    var postFrameSetAction: (() -> Void)?

    override func didUpdateReactSubviews() {
        super.didUpdateReactSubviews()
        if let sparkScanView {
            self.bringSubviewToFront(sparkScanView)
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
    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    var postContainerCreateAction: ((RNTSparkScanViewWrapper) -> Void)?

    override func view() -> UIView! {
        let container = RNTSparkScanViewWrapper()
        postContainerCreateAction?(container)
        containers.append(container)
        return container
    }
}
