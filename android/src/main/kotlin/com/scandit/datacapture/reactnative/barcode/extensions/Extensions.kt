/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2025- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.extensions

import android.content.Context
import android.os.Bundle
import org.json.JSONArray
import org.json.JSONObject
import java.util.ArrayList

val JSONObject.moduleName: String
    get() = this.getString("moduleName")

val JSONObject.initialProperties: Bundle
    get() = optJSONObject("initialProperties")?.toBundle() ?: Bundle()

fun JSONObject.toBundle(): Bundle = Bundle().also { bundle ->
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

fun JSONArray.toArrayList(): java.util.ArrayList<Any> = ArrayList<Any>().also { list ->
    for (i in 0 until length()) {
        list.add(get(i))
    }
}

val Context?.isAppInDebugMode: Boolean
    get() {
        return try {
            // Method 1: Check if the app is debuggable via ApplicationInfo
            val appInfo = this?.applicationInfo ?: return false
            (appInfo.flags and android.content.pm.ApplicationInfo.FLAG_DEBUGGABLE) != 0
        } catch (e: Exception) {
            // Fallback: assume production if we can't determine
            false
        }
    }
