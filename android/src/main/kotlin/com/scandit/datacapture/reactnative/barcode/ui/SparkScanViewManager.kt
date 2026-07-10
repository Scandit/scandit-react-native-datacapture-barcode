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
import com.scandit.datacapture.frameworks.barcode.spark.SparkScanModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.frameworks.core.result.NoopFrameworksResult
import com.scandit.datacapture.reactnative.core.ui.ScanditViewGroupManager

class SparkScanViewManager(
    private val serviceLocator: ServiceLocator<FrameworkModule>
) : ScanditViewGroupManager<SparkScanCoordinatorLayout>() {

    private lateinit var rnViewsContainer: CustomReactViewGroup

    @SuppressLint("InflateParams")
    override fun createNewInstance(reactContext: ThemedReactContext): SparkScanCoordinatorLayout {
        val container = SparkScanCoordinatorLayout(reactContext)
        rnViewsContainer = CustomReactViewGroup(reactContext).also {
            container.addView(it)
        }
        return container
    }

    override fun addView(parent: SparkScanCoordinatorLayout, child: View, index: Int) {
        rnViewsContainer.addView(child, index)
    }

    override fun getCommandsMap(): MutableMap<String, Int> {
        return mutableMapOf(
            CREATE_SPARK_SCAN_VIEW_COMMAND to CREATE_SPARK_SCAN_VIEW_COMMAND_INDEX
        )
    }

    override fun receiveCommand(
        root: SparkScanCoordinatorLayout,
        commandId: String?,
        args: ReadableArray?
    ) {
        if (commandId == CREATE_SPARK_SCAN_VIEW_COMMAND) {
            val viewJson = args?.getString(0) ?: return
            root.post {
                sparkScanModule.addViewToContainer(
                    root,
                    viewJson,
                    NoopFrameworksResult()
                )
            }
        }
    }

    override fun getName(): String = "RNTSparkScanView"

    override fun invalidate() {
        super.invalidate()
        disposeInternal()
    }

    override fun onDropViewInstance(view: SparkScanCoordinatorLayout) {
        super.onDropViewInstance(view)
        sparkScanModule.disposeView()
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
