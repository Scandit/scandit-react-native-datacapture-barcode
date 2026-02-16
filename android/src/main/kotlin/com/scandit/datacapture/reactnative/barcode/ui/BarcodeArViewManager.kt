/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import android.widget.FrameLayout
import com.facebook.react.bridge.Promise
import com.facebook.react.uimanager.ThemedReactContext
import com.scandit.datacapture.barcode.ar.ui.BarcodeArView
import com.scandit.datacapture.frameworks.barcode.ar.BarcodeArModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.extensions.findViewOfType
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.core.data.ViewCreationRequest
import com.scandit.datacapture.reactnative.core.ui.ScanditViewGroupManager
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

class BarcodeArViewManager(
    private val serviceLocator: ServiceLocator<FrameworkModule>
) : ScanditViewGroupManager<FrameLayout>() {

    override fun getName(): String = "RNTBarcodeArView"

    private val cachedCreationRequests = mutableMapOf<Int, ViewCreationRequest>()

    override fun createNewInstance(reactContext: ThemedReactContext): FrameLayout =
        FrameLayout(reactContext)

    override fun onAfterUpdateTransaction(view: FrameLayout) {
        super.onAfterUpdateTransaction(view)
        val item = cachedCreationRequests.remove(view.id)

        if (item != null) {
            view.post {
                barcodeArModule.addViewToContainer(
                    view,
                    item.viewJson,
                    ReactNativeResult(item.promise)
                )
            }
        }
    }

    fun createBarcodeArView(viewId: Int, viewJson: String, promise: Promise) {
        val container = containers.firstOrNull { it.id == viewId }

        if (container == null) {
            cachedCreationRequests[viewId] = ViewCreationRequest(viewId, viewJson, promise)
            return
        }
        container.post {
            barcodeArModule.addViewToContainer(container, viewJson, ReactNativeResult(promise))
        }
    }

    override fun onDropViewInstance(view: FrameLayout) {
        view.findViewOfType(BarcodeArView::class.java)?.let {
            barcodeArModule.viewDisposed(view.id)
        }
        super.onDropViewInstance(view)
    }

    private val barcodeArModule: BarcodeArModule
        get() {
            return serviceLocator.resolve(
                BarcodeArModule::class.java.simpleName
            ) as? BarcodeArModule?
                ?: throw ModuleNotStartedError(BarcodeArModule::class.java.simpleName)
        }
}
