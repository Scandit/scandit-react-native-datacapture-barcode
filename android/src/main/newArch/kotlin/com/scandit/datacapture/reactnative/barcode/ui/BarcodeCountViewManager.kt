/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2026- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import android.widget.FrameLayout
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.viewmanagers.RNTBarcodeCountViewManagerDelegate
import com.facebook.react.viewmanagers.RNTBarcodeCountViewManagerInterface
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator

/**
 * New architecture (Fabric) view manager for BarcodeCountView.
 * Implements the Codegen-generated interface and uses the delegate pattern.
 */
class BarcodeCountViewManager(
    serviceLocator: ServiceLocator<FrameworkModule>
) : BarcodeCountViewManagerBase(serviceLocator),
    RNTBarcodeCountViewManagerInterface<FrameLayout> {

    private val delegate = RNTBarcodeCountViewManagerDelegate(this)

    override fun getDelegate(): ViewManagerDelegate<FrameLayout> = delegate

    // RNTBarcodeCountViewManagerInterface methods
    // Currently no custom props defined in the spec, but the interface must be implemented
}
