/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2026- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import android.widget.FrameLayout
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.viewmanagers.RNTBarcodePickViewManagerDelegate
import com.facebook.react.viewmanagers.RNTBarcodePickViewManagerInterface
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator

/**
 * New architecture (Fabric) view manager for BarcodePickView.
 * Implements the Codegen-generated interface and uses the delegate pattern.
 */
class BarcodePickViewManager(
    serviceLocator: ServiceLocator<FrameworkModule>
) : BarcodePickViewManagerBase(serviceLocator),
    RNTBarcodePickViewManagerInterface<FrameLayout> {

    private val delegate = RNTBarcodePickViewManagerDelegate(this)

    override fun getDelegate(): ViewManagerDelegate<FrameLayout> = delegate

    // RNTBarcodePickViewManagerInterface methods
    // Currently no custom props defined in the spec, but the interface must be implemented
}
