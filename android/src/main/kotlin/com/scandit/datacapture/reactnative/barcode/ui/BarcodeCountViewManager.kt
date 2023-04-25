/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import android.widget.FrameLayout
import com.facebook.react.uimanager.ThemedReactContext
import com.scandit.datacapture.barcode.count.ui.view.BarcodeCountView
import com.scandit.datacapture.reactnative.core.ui.ScanditViewGroupManager

class BarcodeCountViewManager : ScanditViewGroupManager<FrameLayout>() {
    override fun getName(): String = "RNTBarcodeCountView"

    override fun createNewInstance(reactContext: ThemedReactContext): FrameLayout =
        FrameLayout(reactContext)

    internal fun addViewToContainer(barcodeCountView: BarcodeCountView) {
        val container = currentContainer
        if (container == null) {
            postContainerCreationAction = {
                currentContainer?.addView(barcodeCountView)
            }
            return
        }
        container.addView(barcodeCountView)
    }

    fun dispose() {
        disposeInternal()
    }
}