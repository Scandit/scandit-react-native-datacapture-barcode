/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.batch

import android.app.Activity
import android.view.View
import android.view.ViewGroup
import android.view.ViewGroup.LayoutParams.WRAP_CONTENT
import com.facebook.react.ReactApplication
import com.facebook.react.bridge.UiThreadUtil
import com.scandit.datacapture.reactnative.barcode.extensions.initialProperties
import com.scandit.datacapture.reactnative.barcode.extensions.isAppInDebugMode
import com.scandit.datacapture.reactnative.barcode.extensions.moduleName
import org.json.JSONObject

fun nativeViewFromJson(currentActivity: Activity, viewJson: String?): View? {
    UiThreadUtil.assertOnUiThread()
    val viewJsonObject = if (viewJson != null) JSONObject(viewJson) else return null

    val reactApplication = currentActivity.application as ReactApplication
    val reactHost = reactApplication.reactHost ?: return null

    return try {
        // Create ReactSurface for new architecture
        val reactSurface = reactHost.createSurface(
            currentActivity,
            viewJsonObject.moduleName,
            viewJsonObject.initialProperties
        )

        // Start the surface
        reactSurface.start()

        val surfaceView = reactSurface.view
        if (surfaceView != null) {
            surfaceView.layoutParams = ViewGroup.LayoutParams(WRAP_CONTENT, WRAP_CONTENT)
            if (currentActivity.isAppInDebugMode) {
                surfaceView.layoutParams = ViewGroup.LayoutParams(WRAP_CONTENT, 200)
            }
        }

        surfaceView
    } catch (e: Exception) {
        // Fallback to old architecture if new architecture fails
        android.util.Log.w(
            "ScanditAdvancedOverlay",
            "Failed to create view with new architecture, falling back to old architecture",
            e
        )
        null
    }
}
