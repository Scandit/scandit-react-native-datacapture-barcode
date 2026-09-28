/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.ViewManager
import com.scandit.datacapture.frameworks.core.locator.DefaultServiceLocator
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeArViewManager
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeCountViewManager
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeFindViewManager
import com.scandit.datacapture.reactnative.barcode.ui.BarcodePickViewManager
import com.scandit.datacapture.reactnative.barcode.ui.SparkScanViewManager
import com.scandit.datacapture.reactnative.core.ScanditReactPackageBase
import java.util.concurrent.ConcurrentHashMap

@Suppress("unused")
class ScanditDataCaptureBarcodePackage : ScanditReactPackageBase() {

    private val serviceLocator = DefaultServiceLocator.getInstance()

    private val viewManagers: MutableMap<String, ViewGroupManager<*>> = ConcurrentHashMap()

    override fun createNativeModules(
        reactContext: ReactApplicationContext
    ): MutableList<NativeModule> {
        // Module sets up its own shared modules in init
        return mutableListOf(
            ScanditDataCaptureBarcodeModule(reactContext, serviceLocator, viewManagers)
        )
    }

    override fun createViewManagers(
        reactContext: ReactApplicationContext
    ): MutableList<ViewManager<*, *>> {
        // Clear existing instances of previously cached viewMangers
        viewManagers.clear()

        val sparkScanViewManager = SparkScanViewManager(serviceLocator)
        viewManagers[SparkScanViewManager::class.java.simpleName] = sparkScanViewManager
        val barcodeCountViewManager = BarcodeCountViewManager(serviceLocator)
        viewManagers[BarcodeCountViewManager::class.java.simpleName] = barcodeCountViewManager
        val barcodeArViewManager = BarcodeArViewManager(serviceLocator)
        viewManagers[BarcodeArViewManager::class.java.simpleName] = barcodeArViewManager
        val barcodeFindViewManager = BarcodeFindViewManager(serviceLocator)
        viewManagers[BarcodeFindViewManager::class.java.simpleName] = barcodeFindViewManager
        val barcodePickViewManager = BarcodePickViewManager(serviceLocator)
        viewManagers[BarcodePickViewManager::class.java.simpleName] = barcodePickViewManager

        return mutableListOf(
            sparkScanViewManager,
            barcodeCountViewManager,
            barcodeArViewManager,
            barcodeFindViewManager,
            barcodePickViewManager
        )
    }

    override fun getModuleClasses(): List<Class<out NativeModule>> {
        return listOf(
            ScanditDataCaptureBarcodeModule::class.java,
        )
    }
}
