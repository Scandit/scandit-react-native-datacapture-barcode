/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.batch

import android.app.Activity
import android.content.Context
import android.os.Bundle
import android.view.View
import android.view.ViewGroup
import android.view.ViewGroup.LayoutParams.WRAP_CONTENT
import com.facebook.react.ReactApplication
import com.facebook.react.ReactRootView
import com.facebook.react.bridge.UiThreadUtil
import org.json.JSONArray
import org.json.JSONObject
import java.util.*

fun nativeViewFromJson(currentActivity: Activity, viewJson: String?): View? {
    UiThreadUtil.assertOnUiThread()
    val viewJsonObject = if (viewJson != null) JSONObject(viewJson) else return null

    val reactInstanceManager = (currentActivity.application as ReactApplication)
        .reactNativeHost
        .reactInstanceManager
    return ScanditReactRootView(currentActivity).apply {
        startReactApplication(
            reactInstanceManager,
            viewJsonObject.moduleName,
            viewJsonObject.initialProperties
        )
        layoutParams = ViewGroup.LayoutParams(WRAP_CONTENT, WRAP_CONTENT)

        // Force the view to respect content bounds in debug builds
        if (isAppInDebugMode(currentActivity)) {
            setBackgroundColor(android.graphics.Color.TRANSPARENT)
        }
    }
}

private val JSONObject.moduleName: String
    get() = this.getString("moduleName")

private val JSONObject.initialProperties: Bundle
    get() = optJSONObject("initialProperties")?.toBundle() ?: Bundle()

private fun JSONObject.toBundle(): Bundle = Bundle().also { bundle ->
    keys().forEach { key ->
        when (val value = get(key)) {
            is JSONObject -> bundle.putBundle(key, value.toBundle())
            is JSONArray -> bundle.putSerializable(key, value.toArrayList())
            is Boolean -> bundle.putBoolean(key, value)
            is Int -> bundle.putInt(key, value)
            is Long -> bundle.putLong(key, value)
            is Double -> bundle.putDouble(key, value)
            is String -> bundle.putString(key, value)
        }
    }
}

private fun JSONArray.toArrayList(): ArrayList<Any> = ArrayList<Any>().also { list ->
    for (i in 0 until length()) {
        list.add(get(i))
    }
}

private fun isAppInDebugMode(context: Context? = null): Boolean {
    return try {
        // Method 1: Check if the app is debuggable via ApplicationInfo
        val appInfo = context?.applicationInfo ?: return false
        (appInfo.flags and android.content.pm.ApplicationInfo.FLAG_DEBUGGABLE) != 0
    } catch (e: Exception) {
        // Fallback: assume production if we can't determine
        false
    }
}

// In Debug Builds the Debug Layouts introduced by RN are breaking the layout of the MSBubbles
private class ScanditReactRootView(context: Context) : ReactRootView(context) {
    private val debugMode = isAppInDebugMode(context)

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
