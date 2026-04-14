/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator

/**
 * Legacy architecture (Paper) view manager for BarcodeArView.
 * Extends the shared base class with no additional implementation needed.
 */
class BarcodeArViewManager(
    serviceLocator: ServiceLocator<FrameworkModule>
) : BarcodeArViewManagerBase(serviceLocator)
