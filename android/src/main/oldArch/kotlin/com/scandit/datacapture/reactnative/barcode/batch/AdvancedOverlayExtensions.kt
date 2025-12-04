/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.batch

import android.app.Activity
import android.content.Context
import android.view.View
import android.view.ViewGroup
import android.view.ViewGroup.LayoutParams.WRAP_CONTENT
import com.facebook.react.ReactApplication
import com.facebook.react.ReactRootView
import com.facebook.react.bridge.UiThreadUtil
import com.scandit.datacapture.reactnative.barcode.extensions.initialProperties
import com.scandit.datacapture.reactnative.barcode.extensions.isAppInDebugMode
import com.scandit.datacapture.reactnative.barcode.extensions.moduleName
import org.json.JSONObject

fun nativeViewFromJson(currentActivity: Activity, viewJson: String?): View? {
    UiThreadUtil.assertOnUiThread()
    val viewJsonObject = if (viewJson != null) JSONObject(viewJson) else return null

    val reactApplication = currentActivity.application as ReactApplication
    val reactInstanceManager = reactApplication.reactNativeHost.reactInstanceManager
    return ScanditReactRootView(currentActivity).apply {
        startReactApplication(
            reactInstanceManager,
            viewJsonObject.moduleName,
            viewJsonObject.initialProperties
        )
        layoutParams = ViewGroup.LayoutParams(WRAP_CONTENT, WRAP_CONTENT)

        // Force the view to respect content bounds in debug builds
        if (currentActivity.isAppInDebugMode) {
            setBackgroundColor(android.graphics.Color.TRANSPARENT)
        }
    }.also {
        it.bringToFront()
    }
}

// In Debug Builds the Debug Layouts introduced by RN are breaking the layout of the MSBubbles
private class ScanditReactRootView(context: Context) : ReactRootView(context) {
    private val debugMode = context.isAppInDebugMode

    override fun onMeasure(widthMeasureSpec: Int, heightMeasureSpec: Int) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec)

        // In debug builds, if we're getting full screen size, constrain to content size
        if (debugMode && measuredWidth > 600 && measuredHeight > 600) {
            // Find the actual content child (usually the first one with reasonable size)
            for (i in 0 until childCount) {
                val child = getChildAt(i)
                if (child.measuredWidth in 100..600 && child.measuredHeight in 50..200) {
                    // Override the measured dimensions to match the content
                    setMeasuredDimension(child.measuredWidth, child.measuredHeight)
                    break
                }
            }
        }
    }
}
