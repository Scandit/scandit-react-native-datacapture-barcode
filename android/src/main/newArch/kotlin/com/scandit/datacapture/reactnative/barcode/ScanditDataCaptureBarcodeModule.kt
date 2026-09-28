/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import com.facebook.fbreact.specs.NativeScanditDataCaptureBarcodeSpec
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.ViewGroupManager
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.core.utils.ReactNativeEventEmitter

@ReactModule(name = ScanditDataCaptureBarcodeModuleBase.NAME)
class ScanditDataCaptureBarcodeModule(
    reactContext: ReactApplicationContext,
    serviceLocator: ServiceLocator<FrameworkModule>,
    viewManagers: Map<String, ViewGroupManager<*>>,
) : NativeScanditDataCaptureBarcodeSpec(reactContext) {

    private val moduleBase = ScanditDataCaptureBarcodeModuleBase(serviceLocator, viewManagers)

    init {
        // Create emitter with JSI-based emit handler and set up shared modules
        val emitter = ReactNativeEventEmitter { payload ->
            emitOnScanditEvent(payload)
        }
        moduleBase.setupSharedModules(reactContext, emitter)
    }

    companion object {
        const val NAME = ScanditDataCaptureBarcodeModuleBase.NAME
    }

    override fun getName(): String = NAME

    override fun getTypedExportedConstants(): MutableMap<String, Any> = moduleBase.getDefaults()

    override fun invalidate() {
        moduleBase.onInvalidate()
        super.invalidate()
    }

    // region SparkScan

    override fun createSparkScanView(readableMap: ReadableMap, promise: Promise) =
        moduleBase.createSparkScanView(readableMap, promise)

    // endregion SparkScan

    // region BarcodeCount

    override fun createBarcodeCountView(readableMap: ReadableMap, promise: Promise) =
        moduleBase.createBarcodeCountView(readableMap, promise)

    override fun removeBarcodeCountView(readableMap: ReadableMap, promise: Promise) =
        moduleBase.removeBarcodeCountView(readableMap, promise)

    override fun setBarcodeCountViewPositionAndSize(
        @Suppress("unused") readableMap: ReadableMap,
        promise: Promise
    ) = moduleBase.setBarcodeCountViewPositionAndSize(promise)

    // endregion BarcodeCount

    // region BarcodePick

    override fun createPickView(readableMap: ReadableMap, promise: Promise) =
        moduleBase.createPickView(readableMap, promise)

    override fun removePickView(
        @Suppress("unused") readableMap: ReadableMap,
        promise: Promise
    ) = moduleBase.removePickView(promise)

    override fun setPickViewPositionAndSize(
        @Suppress("unused") readableMap: ReadableMap,
        promise: Promise
    ) = moduleBase.setPickViewPositionAndSize(promise)

    // endregion BarcodePick

    // region BarcodeFind

    override fun createFindView(readableMap: ReadableMap, promise: Promise) =
        moduleBase.createFindView(readableMap, promise)

    override fun removeFindView(
        readableMap: ReadableMap,
        promise: Promise
    ) = moduleBase.removeFindView(readableMap, promise)

    // endregion BarcodeFind

    // region BarcodeAr

    override fun createBarcodeArView(readableMap: ReadableMap, promise: Promise) =
        moduleBase.createBarcodeArView(readableMap, promise)

    override fun removeBarcodeArView(
        @Suppress("UNUSED_PARAMETER") readableMap: ReadableMap,
        promise: Promise
    ) = moduleBase.removeBarcodeArView(promise)

    // endregion BarcodeAr

    override fun executeBarcode(data: ReadableMap, promise: Promise) =
        moduleBase.executeBarcode(data, promise)
}
