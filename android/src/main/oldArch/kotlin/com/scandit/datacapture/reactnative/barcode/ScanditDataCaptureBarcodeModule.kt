/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
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
) : ReactContextBaseJavaModule(reactContext) {

    private val moduleBase = ScanditDataCaptureBarcodeModuleBase(serviceLocator, viewManagers)

    init {
        // Create emitter with bridge-based RCTDeviceEventEmitter and set up shared modules
        val emitter = ReactNativeEventEmitter(reactContext)
        moduleBase.setupSharedModules(reactContext, emitter)
    }

    companion object {
        const val NAME = ScanditDataCaptureBarcodeModuleBase.NAME
    }

    override fun getName(): String = NAME

    override fun getConstants(): MutableMap<String, Any> = moduleBase.getDefaults()

    override fun invalidate() {
        moduleBase.onInvalidate()
        super.invalidate()
    }

    // region SparkScan

    @ReactMethod
    fun createSparkScanView(readableMap: ReadableMap, promise: Promise) =
        moduleBase.createSparkScanView(readableMap, promise)

    // endregion SparkScan

    // region BarcodeCount

    @ReactMethod
    fun createBarcodeCountView(readableMap: ReadableMap, promise: Promise) =
        moduleBase.createBarcodeCountView(readableMap, promise)

    @ReactMethod
    fun removeBarcodeCountView(readableMap: ReadableMap, promise: Promise) =
        moduleBase.removeBarcodeCountView(readableMap, promise)

    @ReactMethod
    fun setBarcodeCountViewPositionAndSize(
        @Suppress("unused") readableMap: ReadableMap,
        promise: Promise
    ) = moduleBase.setBarcodeCountViewPositionAndSize(promise)

    // endregion BarcodeCount

    // region BarcodePick

    @ReactMethod
    fun createPickView(readableMap: ReadableMap, promise: Promise) =
        moduleBase.createPickView(readableMap, promise)

    @ReactMethod
    fun removePickView(
        @Suppress("unused") readableMap: ReadableMap,
        promise: Promise
    ) = moduleBase.removePickView(promise)

    @ReactMethod
    fun setPickViewPositionAndSize(
        @Suppress("unused") readableMap: ReadableMap,
        promise: Promise
    ) = moduleBase.setPickViewPositionAndSize(promise)

    // endregion BarcodePick

    // region BarcodeFind

    @ReactMethod
    fun createFindView(readableMap: ReadableMap, promise: Promise) =
        moduleBase.createFindView(readableMap, promise)

    @ReactMethod
    fun removeFindView(
        readableMap: ReadableMap,
        promise: Promise
    ) = moduleBase.removeFindView(readableMap, promise)

    // endregion BarcodeFind

    // region BarcodeAr

    @ReactMethod
    fun createBarcodeArView(readableMap: ReadableMap, promise: Promise) =
        moduleBase.createBarcodeArView(readableMap, promise)

    @ReactMethod
    fun removeBarcodeArView(
        @Suppress("UNUSED_PARAMETER") readableMap: ReadableMap,
        promise: Promise
    ) = moduleBase.removeBarcodeArView(promise)

    // endregion BarcodeAr

    @ReactMethod
    fun addListener(@Suppress("UNUSED_PARAMETER") eventName: String?) {
        // Keep: Required for RN built in Event Emitter Calls.
    }

    @ReactMethod
    fun removeListeners(@Suppress("UNUSED_PARAMETER") count: Int?) {
        // Keep: Required for RN built in Event Emitter Calls.
    }

    @ReactMethod
    fun executeBarcode(data: ReadableMap, promise: Promise) =
        moduleBase.executeBarcode(data, promise)
}
