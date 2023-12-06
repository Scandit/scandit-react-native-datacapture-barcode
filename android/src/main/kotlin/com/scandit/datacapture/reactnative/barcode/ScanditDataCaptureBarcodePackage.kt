/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeCountViewManager
import com.scandit.datacapture.reactnative.barcode.ui.SparkScanViewManager

class ScanditDataCaptureBarcodePackage : ReactPackage {
    private val sparkScanViewManager: SparkScanViewManager by lazy {
        SparkScanViewManager()
    }

    private val barcodeCountViewManager: BarcodeCountViewManager by lazy {
        BarcodeCountViewManager()
    }

    override fun createNativeModules(
        reactContext: ReactApplicationContext
    ): MutableList<NativeModule> = mutableListOf(
        ScanditDataCaptureBarcodeModule(reactContext),
        ScanditDataCaptureBarcodeCaptureModule(reactContext),
        ScanditDataCaptureBarcodeTrackingModule(reactContext),
        ScanditDataCaptureBarcodeSelectionModule(reactContext),
        ScanditDataCaptureSparkScanModule(reactContext, sparkScanViewManager),
        ScanditDataCaptureBarcodeCountModule(reactContext, barcodeCountViewManager)
    )

    override fun createViewManagers(
        reactContext: ReactApplicationContext
    ): MutableList<ViewManager<*, *>> = mutableListOf(sparkScanViewManager, barcodeCountViewManager)
}
