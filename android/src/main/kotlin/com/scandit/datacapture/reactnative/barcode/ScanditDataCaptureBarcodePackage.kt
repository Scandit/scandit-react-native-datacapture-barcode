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
import com.scandit.datacapture.frameworks.barcode.capture.listeners.FrameworksBarcodeCaptureListener
import com.scandit.datacapture.frameworks.barcode.count.BarcodeCountModule
import com.scandit.datacapture.frameworks.barcode.count.listeners.FrameworksBarcodeCountCaptureListListener
import com.scandit.datacapture.frameworks.barcode.count.listeners.FrameworksBarcodeCountListener
import com.scandit.datacapture.frameworks.barcode.count.listeners.FrameworksBarcodeCountViewListener
import com.scandit.datacapture.frameworks.barcode.count.listeners.FrameworksBarcodeCountViewUiListener
import com.scandit.datacapture.frameworks.barcode.find.BarcodeFindModule
import com.scandit.datacapture.frameworks.barcode.find.listeners.FrameworksBarcodeFindListener
import com.scandit.datacapture.frameworks.barcode.find.listeners.FrameworksBarcodeFindViewUiListener
import com.scandit.datacapture.frameworks.barcode.find.transformer.FrameworksBarcodeFindTransformer
import com.scandit.datacapture.frameworks.barcode.generator.BarcodeGeneratorModule
import com.scandit.datacapture.frameworks.barcode.pick.BarcodePickModule
import com.scandit.datacapture.frameworks.barcode.selection.BarcodeSelectionModule
import com.scandit.datacapture.frameworks.barcode.selection.listeners.FrameworksBarcodeSelectionAimedBrushProvider
import com.scandit.datacapture.frameworks.barcode.selection.listeners.FrameworksBarcodeSelectionListener
import com.scandit.datacapture.frameworks.barcode.selection.listeners.FrameworksBarcodeSelectionTrackedBrushProvider
import com.scandit.datacapture.frameworks.barcode.spark.SparkScanModule
import com.scandit.datacapture.frameworks.barcode.spark.delegates.FrameworksSparkScanFeedbackDelegate
import com.scandit.datacapture.frameworks.barcode.spark.listeners.FrameworksSparkScanListener
import com.scandit.datacapture.frameworks.barcode.spark.listeners.FrameworksSparkScanViewUiListener
import com.scandit.datacapture.frameworks.barcode.tracking.BarcodeTrackingModule
import com.scandit.datacapture.frameworks.barcode.tracking.listeners.FrameworksBarcodeTrackingAdvancedOverlayListener
import com.scandit.datacapture.frameworks.barcode.tracking.listeners.FrameworksBarcodeTrackingBasicOverlayListener
import com.scandit.datacapture.frameworks.barcode.tracking.listeners.FrameworksBarcodeTrackingListener
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeCountViewManager
import com.scandit.datacapture.reactnative.barcode.ui.BarcodeFindViewManager
import com.scandit.datacapture.reactnative.barcode.ui.BarcodePickViewManager
import com.scandit.datacapture.reactnative.barcode.ui.SparkScanViewManager
import com.scandit.datacapture.reactnative.core.utils.ReactNativeEventEmitter

@Suppress("unused")
class ScanditDataCaptureBarcodePackage : ReactPackage {
    private val sparkScanViewManager: SparkScanViewManager by lazy {
        SparkScanViewManager()
    }

    private val barcodeFindViewManager: BarcodeFindViewManager by lazy {
        BarcodeFindViewManager()
    }

    private val barcodePickViewManager: BarcodePickViewManager by lazy {
        BarcodePickViewManager()
    }

    override fun createNativeModules(
        reactContext: ReactApplicationContext
    ): MutableList<NativeModule> {
        return mutableListOf(
            ScanditDataCaptureBarcodeModule(reactContext, getBarcodeModule(reactContext)),
            ScanditDataCaptureBarcodeCaptureModule(
                reactContext,
                getBarcodeCaptureModule(reactContext)
            ),
            ScanditDataCaptureBarcodeTrackingModule(
                reactContext,
                getBarcodeTrackingModule(reactContext)
            ),
            ScanditDataCaptureBarcodeSelectionModule(
                reactContext,
                getBarcodeSelectionModule(reactContext)
            ),
            ScanditDataCaptureSparkScanModule(
                reactContext,
                getSparkScanModule(reactContext),
                sparkScanViewManager
            ),
            ScanditDataCaptureBarcodeCountModule(
                reactContext,
                getBarcodeCountModule(reactContext),
            ),
            ScanditDataCaptureBarcodeFindModule(
                reactContext,
                getBarcodeFindModule(reactContext),
                barcodeFindViewManager
            ),
            ScanditDataCaptureBarcodePickModule(
                reactContext,
                getBarcodePickModule(reactContext),
                barcodePickViewManager
            ),
            ScanditDataCaptureBarcodeGeneratorModule(
                reactContext,
                BarcodeGeneratorModule().also {
                    it.onCreate(reactContext)
                },
            )
        )
    }

    private fun getBarcodeCountViewManager(
        reactContext: ReactApplicationContext,
        barcodeCountModule: BarcodeCountModule
    ): BarcodeCountViewManager = BarcodeCountViewManager(reactContext, barcodeCountModule)

    override fun createViewManagers(
        reactContext: ReactApplicationContext
    ): MutableList<ViewManager<*, *>> =
        mutableListOf(
            sparkScanViewManager,
            getBarcodeCountViewManager(reactContext, getBarcodeCountModule(reactContext)),
            barcodeFindViewManager,
            barcodePickViewManager
        )

    private fun getBarcodeModule(reactContext: ReactApplicationContext): BarcodeModule {
        return BarcodeModule().also {
            it.onCreate(reactContext)
        }
    }

    private fun getBarcodeCaptureModule(
        reactContext: ReactApplicationContext
    ): BarcodeCaptureModule {
        val emitter = ReactNativeEventEmitter(reactContext)
        return BarcodeCaptureModule(FrameworksBarcodeCaptureListener(emitter)).also {
            it.onCreate(reactContext)
        }
    }

    private fun getBarcodeTrackingModule(
        reactContext: ReactApplicationContext
    ): BarcodeTrackingModule {
        val emitter = ReactNativeEventEmitter(reactContext)
        return BarcodeTrackingModule(
            FrameworksBarcodeTrackingListener(emitter),
            FrameworksBarcodeTrackingBasicOverlayListener(emitter),
            FrameworksBarcodeTrackingAdvancedOverlayListener(emitter)
        ).also {
            it.onCreate(reactContext)
        }
    }

    private fun getBarcodeSelectionModule(
        reactContext: ReactApplicationContext
    ): BarcodeSelectionModule {
        val emitter = ReactNativeEventEmitter(reactContext)
        return BarcodeSelectionModule(
            FrameworksBarcodeSelectionListener(emitter),
            FrameworksBarcodeSelectionAimedBrushProvider(emitter),
            FrameworksBarcodeSelectionTrackedBrushProvider(emitter)
        ).also {
            it.onCreate(reactContext)
        }
    }

    private var barcodeCountModule: BarcodeCountModule? = null

    @Synchronized
    private fun getBarcodeCountModule(
        reactContext: ReactApplicationContext
    ): BarcodeCountModule {
        val existingInstance = this.barcodeCountModule
        if (existingInstance != null) {
            return existingInstance.also {
                it.onCreate(reactContext)
            }
        }

        val emitter = ReactNativeEventEmitter(reactContext)
        val newInstance = BarcodeCountModule(
            FrameworksBarcodeCountListener(emitter),
            FrameworksBarcodeCountCaptureListListener(emitter),
            FrameworksBarcodeCountViewListener(emitter),
            FrameworksBarcodeCountViewUiListener(emitter)
        ).also {
            it.onCreate(reactContext)
        }
        barcodeCountModule = newInstance
        return newInstance
    }

    private fun getSparkScanModule(
        reactContext: ReactApplicationContext
    ): SparkScanModule {
        val emitter = ReactNativeEventEmitter(reactContext)
        return SparkScanModule(
            FrameworksSparkScanListener(emitter),
            FrameworksSparkScanViewUiListener(emitter),
            FrameworksSparkScanFeedbackDelegate(emitter)
        ).also {
            it.onCreate(reactContext)
        }
    }

    private fun getBarcodeFindModule(
        reactContext: ReactApplicationContext
    ): BarcodeFindModule {
        val emitter = ReactNativeEventEmitter(reactContext)
        return BarcodeFindModule(
            FrameworksBarcodeFindListener(emitter),
            FrameworksBarcodeFindViewUiListener(emitter),
            FrameworksBarcodeFindTransformer(emitter)
        ).also {
            it.onCreate(reactContext)
        }
    }

    private fun getBarcodePickModule(
        reactContext: ReactApplicationContext
    ): BarcodePickModule {
        val emitter = ReactNativeEventEmitter(reactContext)
        return BarcodePickModule(
            emitter
        ).also {
            it.onCreate(reactContext)
        }
    }
}
