/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2020- Scandit AG. All rights reserved.
*/

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

@objc(ScanditDataCaptureBarcode)
class ScanditDataCaptureBarcode: NSObject {
    @objc class func requiresMainQueueSetup() -> Bool {
        return false
    }

    @objc
    var methodQueue: DispatchQueue! {
        return sdcSharedMethodQueue
    }
}
