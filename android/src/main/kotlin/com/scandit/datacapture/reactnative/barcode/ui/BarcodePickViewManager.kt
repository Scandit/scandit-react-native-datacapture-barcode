/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import android.widget.FrameLayout
import com.facebook.react.bridge.Promise
import com.facebook.react.uimanager.ThemedReactContext
import com.scandit.datacapture.barcode.pick.ui.BarcodePickView
import com.scandit.datacapture.frameworks.barcode.pick.BarcodePickModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.extensions.findViewOfType
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.frameworks.core.result.NoopFrameworksResult
import com.scandit.datacapture.reactnative.core.data.ViewCreationRequest
import com.scandit.datacapture.reactnative.core.ui.ScanditViewGroupManager
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

class BarcodePickViewManager(
    private val serviceLocator: ServiceLocator<FrameworkModule>
) : ScanditViewGroupManager<FrameLayout>() {

    override fun getName(): String = "RNTBarcodePickView"

    private val cachedCreationRequests = mutableMapOf<Int, ViewCreationRequest>()

    override fun createNewInstance(reactContext: ThemedReactContext): FrameLayout =
        FrameLayout(reactContext)

    override fun onAfterUpdateTransaction(view: FrameLayout) {
        super.onAfterUpdateTransaction(view)

        val item = cachedCreationRequests.remove(view.id)

        if (item != null) {
            view.post {
                barcodePickModule.addViewToContainer(
                    view,
                    item.viewJson,
                    ReactNativeResult(item.promise)
                )
            }
        }
    }

    fun createBarcodePickView(viewId: Int, viewJson: String, promise: Promise) {
        val container = containers.firstOrNull { it.id == viewId }

        if (container == null) {
            cachedCreationRequests[viewId] = ViewCreationRequest(viewId, viewJson, promise)
            return
        }
        container.post {
            barcodePickModule.addViewToContainer(container, viewJson, ReactNativeResult(promise))
        }
    }

    override fun onDropViewInstance(view: FrameLayout) {
        view.findViewOfType(BarcodePickView::class.java)?.let {
            barcodePickModule.releasePickView(view.id, NoopFrameworksResult())
        }
        super.onDropViewInstance(view)
    }

    private val barcodePickModule: BarcodePickModule
        get() {
            return serviceLocator.resolve(BarcodePickModule::class.java.name) as? BarcodePickModule?
                ?: throw ModuleNotStartedError(BarcodePickModule::class.java.simpleName)
        }
}
