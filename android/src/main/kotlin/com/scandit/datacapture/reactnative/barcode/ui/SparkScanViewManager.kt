/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import android.view.Choreographer
import android.view.View
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.scandit.datacapture.barcode.spark.capture.SparkScan
import com.scandit.datacapture.barcode.spark.capture.SparkScanViewUiListener
import com.scandit.datacapture.barcode.spark.serialization.SparkScanViewDeserializer
import com.scandit.datacapture.barcode.spark.ui.SparkScanCoordinatorLayout
import com.scandit.datacapture.barcode.spark.ui.SparkScanView
import com.scandit.datacapture.core.capture.DataCaptureContext

class SparkScanViewManager(
    private val sparkScanViewDeserializer: SparkScanViewDeserializer = SparkScanViewDeserializer()
) : ViewGroupManager<SparkScanCoordinatorLayout>() {

    var sparkScanView: SparkScanView? = null

    val currentContainer: SparkScanCoordinatorLayout?
        get() {
            return if (containers.size > 0) containers[containers.size - 1] else null
        }

    // Action to be executed after the container is created via the createViewInstance function
    var postContainerCreationAction: (() -> Unit)? = null

    private val containers = mutableListOf<SparkScanCoordinatorLayout>()

    private val frameCallback: Choreographer.FrameCallback = object : Choreographer.FrameCallback {
        override fun doFrame(frameTimeNanos: Long) {
            manuallyLayoutChildren()
            currentContainer?.viewTreeObserver?.dispatchOnGlobalLayout()
            Choreographer.getInstance().postFrameCallback(this)
        }
    }

    override fun getName(): String = "RNTSparkScanView"

    override fun createViewInstance(reactContext: ThemedReactContext): SparkScanCoordinatorLayout {
        val container = SparkScanCoordinatorLayout(reactContext).also {
            containers.add(it)
        }

        if (containers.size == 1) {
            scheduleMeasureAndLayout()
        }
        postContainerCreationAction?.invoke()
        postContainerCreationAction = null
        return container
    }

    override fun onDropViewInstance(view: SparkScanCoordinatorLayout) {
        view.removeAllViews()
        containers.remove(view)
        if (containers.size == 0) {
            cancelMeasureAndLayout()
        }
    }

    /**
     * XXX RN is not calling measure() and layout() methods on dynamically added native Android
     * Views. That's why we need to call those methods on our container (and it's children)
     * ourselves - otherwise the views added by the BarcodeTrackingAdvancedOverlay won't be visible.
     * The hack has been taken from: https://github.com/facebook/react-native/issues/17968
     */
    private fun scheduleMeasureAndLayout() {
        Choreographer.getInstance().postFrameCallback(frameCallback)
    }

    private fun cancelMeasureAndLayout() {
        Choreographer.getInstance().removeFrameCallback(frameCallback)
    }

    private fun manuallyLayoutChildren() {
        currentContainer?.let { container ->
            for (i in 0 until container.childCount) {
                try {
                    val child = container.getChildAt(i)
                    child.measure(
                        View.MeasureSpec.makeMeasureSpec(
                            container.measuredWidth, View.MeasureSpec.EXACTLY
                        ),
                        View.MeasureSpec.makeMeasureSpec(
                            container.measuredHeight, View.MeasureSpec.EXACTLY
                        )
                    )
                    child.layout(0, 0, child.measuredWidth, child.measuredHeight)
                } catch (_: NullPointerException) {
                    // Noticed that sometimes it was crashing here with a null pointer exception
                    // most probably because views are added and removed automatically in the
                    // sparkScanView
                }
            }
        }
    }

    fun dispose() {
        sparkScanView?.setListener(null)
        cancelMeasureAndLayout()
        containers.clear()
    }

    fun createSparkScanViewFromJson(
        sparkScanViewJson: String,
        sparkScan: SparkScan,
        dataCaptureContext: DataCaptureContext,
        sparkScanViewUiListener: SparkScanViewUiListener
    ) {
        val container = currentContainer ?: return
        container.post {
            sparkScanView = sparkScanViewDeserializer.viewFrom(
                container,
                sparkScan,
                dataCaptureContext,
                sparkScanViewJson
            ).also {
                it.setListener(sparkScanViewUiListener)
            }
        }
    }

    fun updateSparkScanViewFromJson(
        sparkScanViewJson: String
    ): Boolean {
        val container = currentContainer ?: return false
        val sparkScanView = sparkScanView ?: return false

        container.post {
            sparkScanViewDeserializer.updateViewFromJson(sparkScanView, sparkScanViewJson)
        }

        return true
    }
}
