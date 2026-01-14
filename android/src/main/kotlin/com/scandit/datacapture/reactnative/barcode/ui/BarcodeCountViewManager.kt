/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import android.view.ViewGroup
import android.widget.FrameLayout
import com.facebook.react.bridge.Promise
import com.facebook.react.uimanager.ThemedReactContext
import com.scandit.datacapture.barcode.count.ui.view.BarcodeCountView
import com.scandit.datacapture.frameworks.barcode.count.BarcodeCountModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.extensions.findViewOfType
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.core.data.ViewCreationRequest
import com.scandit.datacapture.reactnative.core.ui.ScanditViewGroupManager

class BarcodeCountViewManager(
    private val serviceLocator: ServiceLocator<FrameworkModule>
) : ScanditViewGroupManager<FrameLayout>() {

    override fun getName(): String = "RNTBarcodeCountView"

    private val cachedCreationRequests = mutableMapOf<Int, ViewCreationRequest>()

    override fun createNewInstance(reactContext: ThemedReactContext): FrameLayout =
        FrameLayout(reactContext)

    override fun onAfterUpdateTransaction(view: FrameLayout) {
        super.onAfterUpdateTransaction(view)

        val item = cachedCreationRequests.remove(view.id)

        if (item != null) {
            view.post {
                val barcodeCountView = barcodeCountModule.getViewFromJson(item.viewJson)

                view.addView(
                    barcodeCountView,
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT
                )
            }
        }
    }

    fun createBarcodeCountView(viewId: Int, viewJson: String, promise: Promise) {
        val container = containers.firstOrNull { it.id == viewId }

        if (container == null) {
            cachedCreationRequests[viewId] = ViewCreationRequest(viewId, viewJson, promise)
            return
        }
        container.post {
            barcodeCountModule.getViewFromJson(viewJson)?.let { bcView ->
                container.addView(
                    bcView,
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT
                )
            }
        }
    }

    override fun onDropViewInstance(view: FrameLayout) {
        view.findViewOfType(BarcodeCountView::class.java)?.let {
            barcodeCountModule.viewDisposed(view.id)
        }
        super.onDropViewInstance(view)
    }

    private val barcodeCountModule: BarcodeCountModule
        get() {
            return serviceLocator.resolve(
                BarcodeCountModule::class.java.name
            ) as? BarcodeCountModule?
                ?: throw ModuleNotStartedError(BarcodeCountModule::class.java.simpleName)
        }
}
