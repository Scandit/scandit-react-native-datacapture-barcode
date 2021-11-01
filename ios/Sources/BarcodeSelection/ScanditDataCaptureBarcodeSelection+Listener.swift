/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditBarcodeCapture

extension ScanditDataCaptureBarcodeSelection: BarcodeSelectionListener {
    func barcodeSelection(_ barcodeSelection: BarcodeSelection,
                          didUpdateSelection session: BarcodeSelectionSession,
                          frameData: FrameData?) {
        barcodeSelectionSession = session
        guard let value = didUpdateSelectionLock.wait(afterDoing: {
            return sendEvent(withName: .didUpdateSelection, body: ["session": session.jsonString])
        }) else { return }
        barcodeSelection.isEnabled = value
    }

    @objc(finishDidUpdateSelectionCallback:)
    func finishDidUpdateSelectionCallback(enabled: Bool) {
        didUpdateSelectionLock.unlock(value: enabled)
    }

    func barcodeSelection(_ barcodeSelection: BarcodeSelection,
                          didUpdate session: BarcodeSelectionSession,
                          frameData: FrameData?) {
        barcodeSelectionSession = session
        guard let value = didUpdateSessionLock.wait(afterDoing: {
            return sendEvent(withName: .didUpdateSession, body: ["session": session.jsonString])
        }) else { return }
        barcodeSelection.isEnabled = value
    }

    @objc(finishDidUpdateSessionCallback:)
    func finishDidUpdateSessionCallback(enabled: Bool) {
        didUpdateSessionLock.unlock(value: enabled)
    }
}
