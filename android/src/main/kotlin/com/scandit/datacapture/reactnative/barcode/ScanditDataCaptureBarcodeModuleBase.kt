/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import ReactViewFromJsonResolver
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.uimanager.ViewGroupManager
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
import com.scandit.datacapture.frameworks.core.CoreModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.errors.ParameterNullError
import com.scandit.datacapture.frameworks.core.events.Emitter
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeArViewManager
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeCountViewManager
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeFindViewManager
import com.scandit.datacapture.reactnative.barcode.ui.BarcodePickViewManager
import com.scandit.datacapture.reactnative.barcode.ui.SparkScanViewManager
import com.scandit.datacapture.reactnative.core.utils.ReactNativeMethodCall
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult
import com.scandit.datacapture.reactnative.core.utils.viewId

/**
 * Base implementation for the Scandit Data Capture Barcode module.
 * Contains all shared business logic used by both old and new architecture modules.
 */
class ScanditDataCaptureBarcodeModuleBase(
    private val serviceLocator: ServiceLocator<FrameworkModule>,
    private val viewManagers: Map<String, ViewGroupManager<*>>,
) {
    companion object {
        const val NAME = "ScanditDataCaptureBarcode"
        private const val DEFAULTS_KEY = "Defaults"

        private fun viewManagerNullError(viewManagerName: String) = Error(
            "Unable to add the $viewManagerName on Android. " +
                "The $viewManagerName instance is null."
        )
    }

    fun getDefaults(): MutableMap<String, Any> {
        return mutableMapOf(
            DEFAULTS_KEY to barcodeModule.getDefaults()
        )
    }

    /**
     * Sets up all barcode-related shared modules with the provided emitter.
     * Called from the Module's init block after creating the appropriate emitter.
     */
    fun setupSharedModules(reactContext: ReactApplicationContext, emitter: Emitter) {
        // Check if already registered to avoid duplicate initialization
        val existingModule = serviceLocator.resolve(BarcodeModule::class.java.simpleName)
        if (existingModule != null) {
            return
        }

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

        val batchModule = BarcodeBatchModule.create(
            emitter,
            ReactViewFromJsonResolver(reactContext)
        ).also {
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
    }

    fun onInvalidate() {
        serviceLocator.remove(BarcodeModule::class.java.simpleName)?.onDestroy()
        serviceLocator.remove(BarcodeCaptureModule::class.java.simpleName)?.onDestroy()
        serviceLocator.remove(BarcodeSelectionModule::class.java.simpleName)?.onDestroy()
        serviceLocator.remove(BarcodeBatchModule::class.java.simpleName)?.onDestroy()
        serviceLocator.remove(SparkScanModule::class.java.simpleName)?.onDestroy()
        serviceLocator.remove(BarcodeCountModule::class.java.simpleName)?.onDestroy()
        serviceLocator.remove(BarcodePickModule::class.java.simpleName)?.onDestroy()
        serviceLocator.remove(BarcodeFindModule::class.java.simpleName)?.onDestroy()
        serviceLocator.remove(BarcodeArModule::class.java.simpleName)?.onDestroy()
        serviceLocator.remove(BarcodeGeneratorModule::class.java.simpleName)?.onDestroy()
    }

    // region SparkScan

    fun createSparkScanView(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val viewId = readableMap.viewId
        val viewJson = readableMap.getString("viewJson") ?: run {
            promise.reject(ParameterNullError("viewJson"))
            return
        }

        val viewManager = viewManagers[SparkScanViewManager::class.java.simpleName] as?
            SparkScanViewManager
        if (viewManager == null) {
            promise.reject(
                viewManagerNullError(
                    SparkScanViewManager::class.java.simpleName
                )
            )
            return
        }

        viewManager.createSparkScanView(viewId, viewJson, promise)
    }

    // endregion SparkScan

    // region BarcodeCount

    fun createBarcodeCountView(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val viewId = readableMap.viewId
        val viewJson = readableMap.getString("viewJson") ?: run {
            promise.reject(ParameterNullError("viewJson"))
            return
        }

        val viewManager = viewManagers[BarcodeCountViewManager::class.java.simpleName] as?
            BarcodeCountViewManager
        if (viewManager == null) {
            promise.reject(
                viewManagerNullError(
                    BarcodeCountViewManager::class.java.simpleName
                )
            )
            return
        }

        viewManager.createBarcodeCountView(viewId, viewJson, promise)
    }

    fun disposeBarcodeCountView(readableMap: ReadableMap, promise: Promise) {
        val barcodeCountModule =
            serviceLocator.resolve(BarcodeCountModule::class.java.simpleName) as BarcodeCountModule
        barcodeCountModule.viewDisposed(readableMap.viewId)
        promise.resolve(null)
    }

    fun removeBarcodeCountView(readableMap: ReadableMap, promise: Promise) {
        val barcodeCountModule =
            serviceLocator.resolve(BarcodeCountModule::class.java.simpleName) as BarcodeCountModule
        barcodeCountModule.viewDisposed(readableMap.viewId)
        promise.resolve(null)
    }

    fun setBarcodeCountViewPositionAndSize(promise: Promise) {
        promise.resolve(null)
    }

    // endregion BarcodeCount

    // region BarcodePick

    fun createPickView(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val viewId = readableMap.viewId
        val viewJson = readableMap.getString("json") ?: run {
            promise.reject(ParameterNullError("json"))
            return
        }

        val viewManager = viewManagers[BarcodePickViewManager::class.java.simpleName] as?
            BarcodePickViewManager
        if (viewManager == null) {
            promise.reject(
                viewManagerNullError(
                    BarcodePickViewManager::class.java.simpleName
                )
            )
            return
        }

        viewManager.createBarcodePickView(viewId, viewJson, promise)
    }

    fun removePickView(promise: Promise) {
        // Noop in RN. It is handled in the ViewManager
        promise.resolve(null)
    }

    fun setPickViewPositionAndSize(promise: Promise) {
        promise.resolve(null)
    }

    // endregion BarcodePick

    // region BarcodeFind

    fun createFindView(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val viewId = readableMap.viewId
        val viewJson = readableMap.getString("json") ?: run {
            promise.reject(ParameterNullError("json"))
            return
        }

        val viewManager = viewManagers[BarcodeFindViewManager::class.java.simpleName] as?
            BarcodeFindViewManager
        if (viewManager == null) {
            promise.reject(
                viewManagerNullError(
                    BarcodeFindViewManager::class.java.simpleName
                )
            )
            return
        }

        viewManager.createBarcodeFindView(viewId, viewJson, promise)
    }

    fun removeFindView(readableMap: ReadableMap, promise: Promise) {
        val barcodeFindModule =
            serviceLocator.resolve(BarcodeFindModule::class.java.simpleName) as BarcodeFindModule
        barcodeFindModule.viewDisposed(readableMap.viewId)
        promise.resolve(null)
    }

    // endregion BarcodeFind

    // region BarcodeAr

    fun createBarcodeArView(
        readableMap: ReadableMap,
        promise: Promise
    ) {
        val viewId = readableMap.viewId
        val viewJson = readableMap.getString("viewJson") ?: run {
            promise.reject(ParameterNullError("viewJson"))
            return
        }

        val viewManager = viewManagers[BarcodeArViewManager::class.java.simpleName] as?
            BarcodeArViewManager
        if (viewManager == null) {
            promise.reject(
                viewManagerNullError(
                    BarcodeArViewManager::class.java.simpleName
                )
            )
            return
        }

        viewManager.createBarcodeArView(viewId, viewJson, promise)
    }

    fun removeBarcodeArView(promise: Promise) {
        // handled in BarcodeArViewManager
        promise.resolve(null)
    }

    // endregion BarcodeAr

    fun executeBarcode(data: ReadableMap, promise: Promise) {
        val moduleName = data.getString("moduleName") ?: return run {
            promise.reject(ParameterNullError("moduleName"))
        }
        val coreModule = serviceLocator.resolve(
            CoreModule::class.java.simpleName
        ) as? CoreModule ?: return run {
            promise.reject("-1", "Unable to retrieve the CoreModule from the locator.")
        }

        val targetModule = serviceLocator.resolve(moduleName) ?: return run {
            promise.reject("-1", "Unable to retrieve the $moduleName from the locator.")
        }

        val result = coreModule.execute(
            ReactNativeMethodCall(data),
            ReactNativeResult(promise),
            targetModule
        )

        if (!result) {
            val methodName = data.getString("methodName") ?: "unknown"
            promise.reject(
                "METHOD_NOT_FOUND",
                "Unknown Core method: $methodName"
            )
        }
    }

    private val barcodeModule: BarcodeModule
        get() {
            return serviceLocator.resolve(
                BarcodeModule::class.java.simpleName
            ) as? BarcodeModule? ?: throw ModuleNotStartedError(NAME)
        }
}
