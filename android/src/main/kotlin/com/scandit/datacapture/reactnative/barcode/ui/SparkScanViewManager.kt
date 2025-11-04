/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import android.annotation.SuppressLint
import android.view.View
import com.facebook.react.bridge.Promise
import com.facebook.react.uimanager.ThemedReactContext
import com.scandit.datacapture.barcode.spark.ui.SparkScanCoordinatorLayout
import com.scandit.datacapture.frameworks.barcode.spark.SparkScanModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.extensions.findViewOfType
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.core.data.ViewCreationRequest
import com.scandit.datacapture.reactnative.core.ui.ScanditViewGroupManager
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult
import java.util.concurrent.ConcurrentHashMap

class SparkScanViewManager(
    private val serviceLocator: ServiceLocator<FrameworkModule>
) : ScanditViewGroupManager<SparkScanCoordinatorLayout>() {

    private val rnViewsContainers: MutableMap<Int, CustomReactViewGroup> = ConcurrentHashMap()

    private val cachedCreationRequests = mutableMapOf<Int, ViewCreationRequest>()

    override fun onAfterUpdateTransaction(view: SparkScanCoordinatorLayout) {
        super.onAfterUpdateTransaction(view)

        view.findViewOfType(CustomReactViewGroup::class.java)?.let {
            // Cache view containers
            rnViewsContainers[view.id] = it
            it.tag = view.id
        }

        val item = cachedCreationRequests.remove(view.id)

        if (item != null) {
            view.post {
                sparkScanModule.addViewToContainer(
                    view,
                    item.viewJson,
                    ReactNativeResult(item.promise)
                )
            }
        }
    }

    @SuppressLint("InflateParams")
    override fun createNewInstance(reactContext: ThemedReactContext): SparkScanCoordinatorLayout {
        val container = SparkScanCoordinatorLayout(reactContext)
        container.addView(CustomReactViewGroup(reactContext))
        return container
    }

    override fun addView(parent: SparkScanCoordinatorLayout, child: View, index: Int) {
        rnViewsContainers[parent.id]?.addView(child, index)
    }

    override fun removeView(parent: SparkScanCoordinatorLayout, view: View) {
        rnViewsContainers[parent.id]?.removeView(view)
    }

    override fun removeViewAt(parent: SparkScanCoordinatorLayout, index: Int) {
        rnViewsContainers[parent.id]?.removeViewAt(index)
    }

    override fun getChildAt(parent: SparkScanCoordinatorLayout, index: Int): View? =
        rnViewsContainers[parent.id]?.getChildAt(index)

    override fun getChildCount(parent: SparkScanCoordinatorLayout): Int =
        rnViewsContainers[parent.id]?.childCount ?: 0

    override fun getName(): String = "RNTSparkScanView"

    override fun invalidate() {
        super.invalidate()
        disposeInternal()
        rnViewsContainers.clear()
    }

    override fun onDropViewInstance(view: SparkScanCoordinatorLayout) {
        // Dispose the current view
        sparkScanModule.disposeView(view.id)
        rnViewsContainers.remove(view.id)
        super.onDropViewInstance(view)
    }

    fun createSparkScanView(viewId: Int, viewJson: String, promise: Promise) {
        val container = containers.firstOrNull { it.id == viewId }

        if (container == null) {
            cachedCreationRequests[viewId] = ViewCreationRequest(viewId, viewJson, promise)
            return
        }
        container.post {
            sparkScanModule.addViewToContainer(container, viewJson, ReactNativeResult(promise))
        }
    }

    private val sparkScanModule: SparkScanModule
        get() {
            return serviceLocator.resolve(SparkScanModule::class.java.name) as? SparkScanModule?
                ?: throw ModuleNotStartedError(SparkScanViewManager::class.java.simpleName)
        }
}
