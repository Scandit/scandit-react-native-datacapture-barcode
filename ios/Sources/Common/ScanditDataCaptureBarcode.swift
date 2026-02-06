/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2020- Scandit AG. All rights reserved.
*/

import Foundation
import React
import ScanditDataCaptureCore
import ScanditFrameworksBarcode

@objc(ScanditDataCaptureBarcode)
class ScanditDataCaptureBarcode: RCTEventEmitter {
    let barcodeModule: BarcodeModule

    @objc override class func requiresMainQueueSetup() -> Bool {
        return false
    }

    @objc
    override var methodQueue: DispatchQueue! {
        return sdcSharedMethodQueue
    }

    public override init() {
        barcodeModule = BarcodeModule()
        super.init()
    }

    override func supportedEvents() -> [String]! {
        []
    }

    override func constantsToExport() -> [AnyHashable: Any]! {
        ["Defaults": barcodeModule.defaults.toEncodable()]
    }
}
