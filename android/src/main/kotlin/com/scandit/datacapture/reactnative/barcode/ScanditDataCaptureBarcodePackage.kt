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
import com.scandit.datacapture.frameworks.barcode.BarcodeModule
import com.scandit.datacapture.frameworks.barcode.capture.BarcodeCaptureModule
import com.scandit.datacapture.frameworks.barcode.count.BarcodeCountModule
import com.scandit.datacapture.frameworks.barcode.find.BarcodeFindModule
import com.scandit.datacapture.frameworks.barcode.generator.BarcodeGeneratorModule
import com.scandit.datacapture.frameworks.barcode.pick.BarcodePickModule
import com.scandit.datacapture.frameworks.barcode.selection.BarcodeSelectionModule
import com.scandit.datacapture.frameworks.barcode.spark.SparkScanModule
import com.scandit.datacapture.frameworks.barcode.tracking.BarcodeTrackingModule
import com.scandit.datacapture.frameworks.core.locator.DefaultServiceLocator
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeCountViewManager
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeFindViewManager
import com.scandit.datacapture.reactnative.barcode.ui.BarcodePickViewManager
import com.scandit.datacapture.reactnative.barcode.ui.SparkScanViewManager
import com.scandit.datacapture.reactnative.core.utils.ReactNativeEventEmitter
import java.util.concurrent.locks.ReentrantLock

@Suppress("unused")
class ScanditDataCaptureBarcodePackage : ReactPackage {

    private val serviceLocator = DefaultServiceLocator.getInstance()

    override fun createNativeModules(
        reactContext: ReactApplicationContext
    ): MutableList<NativeModule> {
        setupSharedModules(reactContext)

        return mutableListOf(
            ScanditDataCaptureBarcodeModule(reactContext, serviceLocator),
            ScanditDataCaptureBarcodeCaptureModule(reactContext, serviceLocator),
            ScanditDataCaptureBarcodeTrackingModule(reactContext, serviceLocator),
            ScanditDataCaptureBarcodeSelectionModule(reactContext, serviceLocator),
            ScanditDataCaptureSparkScanModule(reactContext, serviceLocator),
            ScanditDataCaptureBarcodeCountModule(reactContext, serviceLocator),
            ScanditDataCaptureBarcodeFindModule(reactContext, serviceLocator),
            ScanditDataCaptureBarcodePickModule(reactContext, serviceLocator),
            ScanditDataCaptureBarcodeGeneratorModule(reactContext, serviceLocator)
        )
    }

    override fun createViewManagers(
        reactContext: ReactApplicationContext
    ): MutableList<ViewManager<*, *>> =
        mutableListOf(
            SparkScanViewManager(serviceLocator),
            BarcodeCountViewManager(serviceLocator),
            BarcodeFindViewManager(serviceLocator),
            BarcodePickViewManager(serviceLocator)
        )

    private fun getBarcodeModule(reactContext: ReactApplicationContext): BarcodeModule {
        return BarcodeModule().also {
            it.onCreate(reactContext)
        }
    }

    private fun setupSharedModules(reactContext: ReactApplicationContext) {
        lock.lock()
        try {
            val emitter = ReactNativeEventEmitter(reactContext)

            val barcodeModule = BarcodeModule().also {
                it.onCreate(reactContext)
            }
            val captureModule = BarcodeCaptureModule.create(emitter).also {
                it.onCreate(reactContext)
            }
            val trackingModule = BarcodeTrackingModule.create(emitter).also {
                it.onCreate(reactContext)
            }
            val selectionModule = BarcodeSelectionModule.create(emitter).also {
                it.onCreate(reactContext)
            }
            val sparkScanModule = SparkScanModule.create(emitter).also {
                it.onCreate(reactContext)
            }
            val countModule = BarcodeCountModule.create(emitter).also {
                it.onCreate(reactContext)
            }
            val findModule = BarcodeFindModule.create(emitter).also {
                it.onCreate(reactContext)
            }
            val pickModule = BarcodePickModule(emitter).also {
                it.onCreate(reactContext)
            }
            val generatorModule = BarcodeGeneratorModule().also {
                it.onCreate(reactContext)
            }
            serviceLocator.register(barcodeModule)
            serviceLocator.register(captureModule)
            serviceLocator.register(trackingModule)
            serviceLocator.register(selectionModule)
            serviceLocator.register(pickModule)
            serviceLocator.register(findModule)
            serviceLocator.register(sparkScanModule)
            serviceLocator.register(countModule)
            serviceLocator.register(generatorModule)
        } finally {
            lock.unlock()
        }
    }

    companion object {
        private val lock: ReentrantLock = ReentrantLock()
    }
}
