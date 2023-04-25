/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import com.facebook.react.uimanager.ThemedReactContext
import com.scandit.datacapture.barcode.spark.capture.SparkScan
import com.scandit.datacapture.barcode.spark.capture.SparkScanViewUiListener
import com.scandit.datacapture.barcode.spark.serialization.SparkScanViewDeserializer
import com.scandit.datacapture.barcode.spark.ui.SparkScanCoordinatorLayout
import com.scandit.datacapture.barcode.spark.ui.SparkScanView
import com.scandit.datacapture.core.capture.DataCaptureContext
import com.scandit.datacapture.reactnative.core.ui.ScanditViewGroupManager

class SparkScanViewManager(
    private val sparkScanViewDeserializer: SparkScanViewDeserializer = SparkScanViewDeserializer()
) : ScanditViewGroupManager<SparkScanCoordinatorLayout>() {

    var sparkScanView: SparkScanView? = null

    override fun createNewInstance(reactContext: ThemedReactContext): SparkScanCoordinatorLayout =
        SparkScanCoordinatorLayout(reactContext)

    override fun getName(): String = "RNTSparkScanView"

    fun dispose() {
        sparkScanView?.setListener(null)
        disposeInternal()
    }

    fun createSparkScanViewFromJson(
        sparkScanViewJson: String,
        sparkScan: SparkScan,
        dataCaptureContext: DataCaptureContext,
        sparkScanViewUiListener: SparkScanViewUiListener
    ) {
        val container = currentContainer ?: return
        container.post {
            sparkScanView = sparkScanViewDeserializer.viewFrom(
                container,
                sparkScan,
                dataCaptureContext,
                sparkScanViewJson
            ).also {
                it.setListener(sparkScanViewUiListener)
            }
        }
    }

    fun updateSparkScanViewFromJson(
        sparkScanViewJson: String
    ): Boolean {
        val container = currentContainer ?: return false
        val sparkScanView = sparkScanView ?: return false

        container.post {
            sparkScanViewDeserializer.updateViewFromJson(sparkScanView, sparkScanViewJson)
        }

        return true
    }
}
