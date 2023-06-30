/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

import ScanditBarcodeCapture
import ScanditDataCaptureCore

class RNTBarcodeSelectionAimedBrushProvider: NSObject, BarcodeSelectionBrushProvider {
    
    let cachedBrushesQueue: DispatchQueue
    var cachedBrushes: [String: Brush] = [:]
    weak var eventEmitter: RCTEventEmitter?
    
    init(cachedBrushesQueue: DispatchQueue) {
        self.cachedBrushesQueue = cachedBrushesQueue
    }
    
    func brush(for barcode: Barcode) -> Brush? {
        let brush: Brush? = cachedBrushesQueue.sync {
            if let cachedBrush = cachedBrushes[barcode.selectionIdentifier] {
                return cachedBrush
            }
            return nil
        }
        
        let body = ["barcode": barcode.jsonString]
        
        if brush == nil {
            do {
                let bodyData = try JSONSerialization.data(withJSONObject: body, options: [])
                let jsonBody = String(data: bodyData, encoding: .utf8)
                eventEmitter?.sendEvent(withName: ScanditDataCaptureBarcodeSelectionEvent.brushForAimedBarcode.rawValue, body: jsonBody)
            } catch {
                eventEmitter?.sendEvent(withName: ScanditDataCaptureBarcodeSelectionEvent.brushForAimedBarcode.rawValue, body: body)
            }
            return Brush.transparent
        }
        
        return brush
    }
    
    func onFinishCallback(selectionIdentifier: String?, brushJson: String?, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        guard let selectionIdentifier = selectionIdentifier else {
            let error = ScanditDataCaptureBarcodeError.trackedBarcodeNotFound
            reject(String(error.code), error.message, error)
            return
        }
        
        guard let brushJson = brushJson, let brush = Brush(jsonString: brushJson) else {
            let error = ScanditDataCaptureBarcodeError.brushInvalid
            reject(String(error.code), error.message, error)
            return
        }
        
        cachedBrushesQueue.async {
            self.cachedBrushes[selectionIdentifier] = brush
        }
        
        resolve(nil)
    }
}
