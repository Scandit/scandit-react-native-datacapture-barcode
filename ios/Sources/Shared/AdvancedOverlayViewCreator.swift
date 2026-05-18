/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2026- Scandit AG. All rights reserved.
 */

import ScanditDataCaptureCore

/// Protocol abstracting the creation of React Native root views for advanced overlay functionality.
/// Arch-specific implementations are in OldArch/ and NewArch/.
public protocol AdvancedOverlayViewCreator: AnyObject {
    func rootViewWith(jsView: JSView) -> ScanditRootView?
}
