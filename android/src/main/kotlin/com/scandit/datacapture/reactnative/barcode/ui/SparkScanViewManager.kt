/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import android.annotation.SuppressLint
import android.view.View
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.ThemedReactContext
import com.scandit.datacapture.barcode.spark.ui.SparkScanCoordinatorLayout
import com.scandit.datacapture.barcode.spark.ui.SparkScanView
import com.scandit.datacapture.frameworks.barcode.spark.SparkScanModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.extensions.findViewOfType
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.frameworks.core.result.NoopFrameworksResult
import com.scandit.datacapture.frameworks.core.utils.DefaultFrameworksLog
import com.scandit.datacapture.reactnative.core.ui.ScanditViewGroupManager
import org.json.JSONObject
import java.util.Collections
import java.util.concurrent.ConcurrentHashMap

/**
 * Data class to store a container and its associated view JSON configuration.
 * This allows us to recreate the view with the same configuration when needed.
 */
private class CreatedContainers(
    val container: SparkScanCoordinatorLayout,
    val viewJson: String
)

class SparkScanViewManager(
    private val serviceLocator: ServiceLocator<FrameworkModule>
) : ScanditViewGroupManager<SparkScanCoordinatorLayout>() {
    // Thread-safe map to store container references and their view configurations
    private val viewHistoryMap: MutableMap<Int, CreatedContainers> = ConcurrentHashMap()

    // Thread-safe list to track the order of created views (acts as a stack)
    private val createdViews: MutableList<Int> = Collections.synchronizedList(mutableListOf())

    private val rnViewsContainers: MutableMap<Int, CustomReactViewGroup> = ConcurrentHashMap()

    fun updateCachedViewJsonOnUpdate(viewId: Int, newViewJson: String) {
        try {
            // Find the existing entry in the history map
            val existingEntry = viewHistoryMap[viewId]

            if (existingEntry != null) {
                val newJson = JSONObject(newViewJson)
                val oldJson = JSONObject(existingEntry.viewJson)

                oldJson.put("SparkScanView", newJson)

                // Update the entry with the new JSON
                viewHistoryMap[viewId] =
                    CreatedContainers(existingEntry.container, oldJson.toString())
            }
        } catch (e: Exception) {
            DefaultFrameworksLog.getInstance().error(e)
        }
    }

    override fun onAfterUpdateTransaction(view: SparkScanCoordinatorLayout) {
        super.onAfterUpdateTransaction(view)
        view.findViewOfType(CustomReactViewGroup::class.java)?.let {
            // Cache view containers
            rnViewsContainers[view.id] = it
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

    override fun addViews(parent: SparkScanCoordinatorLayout, views: MutableList<View>) {
        rnViewsContainers[parent.id]?.let {
            for (view in views) {
                it.addView(view)
            }
        }
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

    override fun getCommandsMap(): MutableMap<String, Int> {
        return mutableMapOf(
            CREATE_SPARK_SCAN_VIEW_COMMAND to CREATE_SPARK_SCAN_VIEW_COMMAND_INDEX
        )
    }

    /**
     * Handles commands from React Native to create or manipulate views.
     * Currently supports creating a SparkScanView with the provided JSON configuration.
     *
     * When a new view is created, any existing view is disposed first to ensure
     * only one instance exists at a time.
     */
    override fun receiveCommand(
        root: SparkScanCoordinatorLayout,
        commandId: String?,
        args: ReadableArray?
    ) {
        if (commandId == CREATE_SPARK_SCAN_VIEW_COMMAND) {
            val viewJson = args?.getString(0) ?: return

            try {
                // Add the new view JSON to the history for this container
                addToViewHistory(root, viewJson)

                // If there's already a view, dispose it first
                if (sparkScanModule.sparkScanView != null) {
                    sparkScanModule.disposeView()
                }

                // Create the new view
                createViewFromJson(root, viewJson)

                // Add this container to the stack of created views
                createdViews.add(root.id)
            } catch (e: Exception) {
                DefaultFrameworksLog.getInstance().error(e)
            }
        }
    }

    /**
     * Stores the container and its view configuration in the history map.
     * This allows us to recreate the view later if needed.
     */
    private fun addToViewHistory(container: SparkScanCoordinatorLayout, viewJson: String) {
        viewHistoryMap[container.id] = CreatedContainers(container, viewJson)
    }

    /**
     * Creates a SparkScanView inside the specified container using the provided JSON configuration.
     * The creation is posted to the container's message queue to ensure it runs on the UI thread.
     */
    private fun createViewFromJson(container: SparkScanCoordinatorLayout, viewJson: String) {
        container.post {
            try {
                sparkScanModule.addViewToContainer(
                    container,
                    viewJson,
                    NoopFrameworksResult()
                )
            } catch (e: Exception) {
                DefaultFrameworksLog.getInstance().error(e)
            }
        }
    }

    override fun getName(): String = "RNTSparkScanView"

    /**
     * Cleans up resources when the ViewManager is invalidated.
     * Clears all stored view history and configurations.
     */
    override fun invalidate() {
        super.invalidate()
        disposeInternal()
        viewHistoryMap.clear()
        createdViews.clear()
        rnViewsContainers.clear()
    }

    /**
     * Handles the disposal of a view instance.
     *
     * When a view is dropped, this method:
     * 1. Disposes the current view
     * 2. Removes the container from tracking
     * 3. Attempts to recreate the previous view in the stack
     *
     * This ensures that when a view is removed, we automatically fall back to
     * the previous view, maintaining the desired "only one instance" behavior
     * while preserving view history.
     */
    override fun onDropViewInstance(view: SparkScanCoordinatorLayout) {
        // Dispose the current view
        if ((sparkScanModule.sparkScanView?.parent as? SparkScanCoordinatorLayout)?.id == view.id) {
            sparkScanModule.disposeView()
        }

        // Remove this container from our tracking
        createdViews.remove(view.id)
        viewHistoryMap.remove(view.id)
        rnViewsContainers.remove(view.id)

        super.onDropViewInstance(view)

        try {
            // Try to recreate the previous view in the stack
            while (createdViews.isNotEmpty()) {
                val previousTopMostSparkScanView = createdViews.last()
                val params = viewHistoryMap[previousTopMostSparkScanView]

                if (params != null) {
                    if (params.container.findViewOfType(SparkScanView::class.java) != null) {
                        // if the container has the view already, don't add it
                        return
                    }

                    createViewFromJson(params.container, params.viewJson)
                    return
                } else {
                    createdViews.remove(createdViews.size - 1)
                }
            }
        } catch (e: Exception) {
            DefaultFrameworksLog.getInstance().error(e)
        }
    }

    private val sparkScanModule: SparkScanModule
        get() {
            return serviceLocator.resolve(SparkScanModule::class.java.name) as? SparkScanModule?
                ?: throw ModuleNotStartedError(SparkScanViewManager::class.java.simpleName)
        }

    companion object {
        private const val CREATE_SPARK_SCAN_VIEW_COMMAND_INDEX = 1
        private const val CREATE_SPARK_SCAN_VIEW_COMMAND = "createSparkScanView"
    }
}
