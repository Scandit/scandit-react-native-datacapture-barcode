/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2026- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.viewmanagers.RNTSparkScanViewManagerDelegate
import com.facebook.react.viewmanagers.RNTSparkScanViewManagerInterface
import com.scandit.datacapture.barcode.spark.ui.SparkScanCoordinatorLayout
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator

/**
 * New architecture (Fabric) view manager for SparkScanView.
 * Implements the Codegen-generated interface and uses the delegate pattern.
 */
class SparkScanViewManager(
    serviceLocator: ServiceLocator<FrameworkModule>
) : SparkScanViewManagerBase(serviceLocator),
    RNTSparkScanViewManagerInterface<SparkScanCoordinatorLayout> {

    private val delegate = RNTSparkScanViewManagerDelegate(this)

    override fun getDelegate(): ViewManagerDelegate<SparkScanCoordinatorLayout> = delegate

    // RNTSparkScanViewManagerInterface methods
    // Currently no custom props defined in the spec, but the interface must be implemented
}
