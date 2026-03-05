/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2025- Scandit AG. All rights reserved.
 */

import Foundation
import React
import ScanditDataCaptureCore
import ScanditFrameworksBarcode
import ScanditFrameworksCore
import UIKit

public class ReactViewFromJsonResolver: ViewFromJsonResolver {
    private weak var container: AdvancedOverlayContainer?

    public init(container: AdvancedOverlayContainer) {
        self.container = container
    }

    public func getView(viewJson: String?) -> UIView? {
        guard let viewJson = viewJson, let jsonData = viewJson.data(using: .utf8) else {
            return nil
        }

        guard let configuration = try? JSONSerialization.jsonObject(with: jsonData, options: []) as? [String: Any]
        else {
            return nil
        }

        guard let jsView = try? JSView(with: configuration) else {
            return nil
        }

        return container?.rootViewWith(jsView: jsView)
    }

    public func getViewFromBytes(
        advancedOverlayViewPool: AdvancedOverlayViewCache,
        viewIdentifier: String,
        viewBytes: Data?
    ) -> UIView? {
        nil
    }
}
