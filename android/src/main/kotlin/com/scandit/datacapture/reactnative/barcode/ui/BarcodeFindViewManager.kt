/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import android.widget.FrameLayout
import com.facebook.react.uimanager.ThemedReactContext
import com.scandit.datacapture.reactnative.core.ui.ScanditViewGroupManager

class BarcodeFindViewManager : ScanditViewGroupManager<FrameLayout>() {
    override fun getName(): String = "RNTBarcodeFindView"

    override fun createNewInstance(reactContext: ThemedReactContext): FrameLayout =
        FrameLayout(reactContext)

    fun dispose() {
        disposeInternal()
    }
}
