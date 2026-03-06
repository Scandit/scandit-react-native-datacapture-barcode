/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.ViewManager
import com.scandit.datacapture.frameworks.barcode.BarcodeModule
import com.scandit.datacapture.frameworks.barcode.ar.BarcodeArModule
import com.scandit.datacapture.frameworks.barcode.batch.BarcodeBatchModule
import com.scandit.datacapture.frameworks.barcode.capture.BarcodeCaptureModule
import com.scandit.datacapture.frameworks.barcode.count.BarcodeCountModule
import com.scandit.datacapture.frameworks.barcode.find.BarcodeFindModule
import com.scandit.datacapture.frameworks.barcode.generator.BarcodeGeneratorModule
import com.scandit.datacapture.frameworks.barcode.pick.BarcodePickModule
import com.scandit.datacapture.frameworks.barcode.selection.BarcodeSelectionModule
import com.scandit.datacapture.frameworks.barcode.spark.SparkScanModule
import com.scandit.datacapture.frameworks.core.locator.DefaultServiceLocator
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeArViewManager
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeCountViewManager
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeFindViewManager
import com.scandit.datacapture.reactnative.barcode.ui.BarcodePickViewManager
import com.scandit.datacapture.reactnative.barcode.ui.SparkScanViewManager
import com.scandit.datacapture.reactnative.core.utils.ReactNativeEventEmitter
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.locks.ReentrantLock

@Suppress("unused")
class ScanditDataCaptureBarcodePackage : ReactPackage {

    private val serviceLocator = DefaultServiceLocator.getInstance()

    private val viewManagers: MutableMap<String, ViewGroupManager<*>> = ConcurrentHashMap()

    override fun createNativeModules(
        reactContext: ReactApplicationContext
    ): MutableList<NativeModule> {
        setupSharedModules(reactContext)

        return mutableListOf(
            ScanditDataCaptureBarcodeModule(reactContext, serviceLocator),
            ScanditDataCaptureBarcodeCaptureModule(reactContext, serviceLocator),
            ScanditDataCaptureBarcodeArModule(reactContext, serviceLocator, viewManagers),
            ScanditDataCaptureBarcodeBatchModule(reactContext, serviceLocator),
            ScanditDataCaptureBarcodeSelectionModule(reactContext, serviceLocator),
            ScanditDataCaptureSparkScanModule(reactContext, serviceLocator, viewManagers),
            ScanditDataCaptureBarcodeCountModule(reactContext, serviceLocator, viewManagers),
            ScanditDataCaptureBarcodeFindModule(reactContext, serviceLocator, viewManagers),
            ScanditDataCaptureBarcodePickModule(reactContext, serviceLocator, viewManagers),
            ScanditDataCaptureBarcodeGeneratorModule(reactContext, serviceLocator)
        )
    }

    override fun createViewManagers(
        reactContext: ReactApplicationContext
    ): MutableList<ViewManager<*, *>> {
        // Clear existing instances of previously cached viewMangers
        viewManagers.clear()

        val sparkScanViewManager = SparkScanViewManager(serviceLocator)
        viewManagers[SparkScanViewManager::class.java.name] = sparkScanViewManager
        val barcodeCountViewManager = BarcodeCountViewManager(serviceLocator)
        viewManagers[BarcodeCountViewManager::class.java.name] = barcodeCountViewManager
        val barcodeArViewManager = BarcodeArViewManager(serviceLocator)
        viewManagers[BarcodeArViewManager::class.java.name] = barcodeArViewManager
        val barcodeFindViewManager = BarcodeFindViewManager(serviceLocator)
        viewManagers[BarcodeFindViewManager::class.java.name] = barcodeFindViewManager
        val barcodePickViewManager = BarcodePickViewManager(serviceLocator)
        viewManagers[BarcodePickViewManager::class.java.name] = barcodePickViewManager

        return mutableListOf(
            sparkScanViewManager,
            barcodeCountViewManager,
            barcodeArViewManager,
            barcodeFindViewManager,
            barcodePickViewManager
        )
    }

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
            serviceLocator.register(barcodeModule)

            val captureModule = BarcodeCaptureModule.create(emitter).also {
                it.onCreate(reactContext)
            }
            serviceLocator.register(captureModule)

            val arModule = BarcodeArModule.create(emitter).also {
                it.onCreate(reactContext)
            }
            serviceLocator.register(arModule)

            val batchModule = BarcodeBatchModule.create(emitter).also {
                it.onCreate(reactContext)
            }
            serviceLocator.register(batchModule)

            val selectionModule = BarcodeSelectionModule.create(emitter).also {
                it.onCreate(reactContext)
            }
            serviceLocator.register(selectionModule)

            val sparkScanModule = SparkScanModule.create(emitter).also {
                it.onCreate(reactContext)
            }
            serviceLocator.register(sparkScanModule)

            val countModule = BarcodeCountModule.create(emitter).also {
                it.onCreate(reactContext)
            }
            serviceLocator.register(countModule)

            val findModule = BarcodeFindModule.create(emitter).also {
                it.onCreate(reactContext)
            }
            serviceLocator.register(findModule)

            val pickModule = BarcodePickModule(emitter).also {
                it.onCreate(reactContext)
            }
            serviceLocator.register(pickModule)

            val generatorModule = BarcodeGeneratorModule().also {
                it.onCreate(reactContext)
            }
            serviceLocator.register(generatorModule)
        } finally {
            lock.unlock()
        }
    }

    companion object {
        private val lock: ReentrantLock = ReentrantLock()
    }
}
