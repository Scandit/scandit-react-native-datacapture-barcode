/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.tracking

import android.app.Activity
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

fun nativeViewFromJson(currentActivity: Activity, viewJson: String): View {
    UiThreadUtil.assertOnUiThread()
    val viewJsonObject = JSONObject(viewJson)

    val reactInstanceManager = (currentActivity.application as ReactApplication)
        .reactNativeHost
        .reactInstanceManager
    return ReactRootView(currentActivity).apply {
        startReactApplication(
            reactInstanceManager,
            viewJsonObject.moduleName,
            viewJsonObject.initialProperties
        )
        layoutParams = ViewGroup.LayoutParams(WRAP_CONTENT, WRAP_CONTENT)
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
