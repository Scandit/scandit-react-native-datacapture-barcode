/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import android.widget.FrameLayout
import com.facebook.react.bridge.Promise
import com.facebook.react.uimanager.ThemedReactContext
import com.scandit.datacapture.frameworks.barcode.find.BarcodeFindModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.core.data.ViewCreationRequest
import com.scandit.datacapture.reactnative.core.ui.ScanditViewGroupManager
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

class BarcodeFindViewManager(
    private val serviceLocator: ServiceLocator<FrameworkModule>
) : ScanditViewGroupManager<FrameLayout>() {

    private val cachedCreationRequests = mutableMapOf<Int, ViewCreationRequest>()

    override fun getName(): String = "RNTBarcodeFindView"

    override fun onAfterUpdateTransaction(view: FrameLayout) {
        super.onAfterUpdateTransaction(view)

        val item = cachedCreationRequests.remove(view.id)

        if (item != null) {
            view.post {
                barcodeFindModule.addViewToContainer(
                    view,
                    item.viewJson,
                    ReactNativeResult(item.promise)
                )
            }
        }
    }

    override fun createNewInstance(reactContext: ThemedReactContext): FrameLayout =
        FrameLayout(reactContext)

    override fun onDropViewInstance(view: FrameLayout) {
        barcodeFindModule.viewDisposed(view.id)
        super.onDropViewInstance(view)
    }

    fun createBarcodeFindView(viewId: Int, viewJson: String, promise: Promise) {
        val container = containers.firstOrNull { it.id == viewId }

        if (container == null) {
            cachedCreationRequests[viewId] = ViewCreationRequest(viewId, viewJson, promise)
            return
        }
        container.post {
            barcodeFindModule.addViewToContainer(container, viewJson, ReactNativeResult(promise))
        }
    }

    private val barcodeFindModule: BarcodeFindModule
        get() {
            return serviceLocator.resolve(BarcodeFindModule::class.java.name) as? BarcodeFindModule?
                ?: throw ModuleNotStartedError(BarcodeFindModule::class.java.simpleName)
        }
}
