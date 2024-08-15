/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import android.annotation.SuppressLint
import android.view.LayoutInflater
import android.view.View
import com.facebook.react.ReactRootView
import com.facebook.react.uimanager.ThemedReactContext
import com.scandit.datacapture.barcode.spark.ui.SparkScanCoordinatorLayout
import com.scandit.datacapture.reactnative.barcode.R
import com.scandit.datacapture.reactnative.core.ui.ScanditViewGroupManager

class SparkScanViewManager : ScanditViewGroupManager<SparkScanCoordinatorLayout>() {

    lateinit var rnViewsContainer: ReactRootView

    @SuppressLint("InflateParams")
    override fun createNewInstance(reactContext: ThemedReactContext): SparkScanCoordinatorLayout {
        val sparkScanCoordinatorLayout = LayoutInflater.from(reactContext)
            .inflate(R.layout.spark_scan_integration, null) as SparkScanCoordinatorLayout
        rnViewsContainer = sparkScanCoordinatorLayout.findViewById(R.id.rn_container)
        return sparkScanCoordinatorLayout
    }

    override fun addView(parent: SparkScanCoordinatorLayout?, child: View?, index: Int) {
        rnViewsContainer.addView(child, index)
    }

    override fun getName(): String = "RNTSparkScanView"

    fun dispose() {
        disposeInternal()
    }

    override fun invalidate() {
        super.invalidate()
        disposeInternal()
    }
}
