/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2026- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import android.widget.FrameLayout
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.viewmanagers.RNTBarcodeArViewManagerDelegate
import com.facebook.react.viewmanagers.RNTBarcodeArViewManagerInterface
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator

/**
 * New architecture (Fabric) view manager for BarcodeArView.
 * Implements the Codegen-generated interface and uses the delegate pattern.
 */
class BarcodeArViewManager(
    serviceLocator: ServiceLocator<FrameworkModule>
) : BarcodeArViewManagerBase(serviceLocator),
    RNTBarcodeArViewManagerInterface<FrameLayout> {

    private val delegate = RNTBarcodeArViewManagerDelegate(this)

    override fun getDelegate(): ViewManagerDelegate<FrameLayout> = delegate

    // RNTBarcodeArViewManagerInterface methods
    // Currently no custom props defined in the spec, but the interface must be implemented
}
