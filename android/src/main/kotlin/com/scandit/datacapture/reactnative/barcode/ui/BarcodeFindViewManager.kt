/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import android.widget.FrameLayout
import androidx.fragment.app.FragmentActivity
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.ThemedReactContext
import com.scandit.datacapture.frameworks.barcode.find.BarcodeFindModule
import com.scandit.datacapture.reactnative.core.ui.ScanditViewGroupManager

class BarcodeFindViewManager(
    private val reactContext: ReactApplicationContext,
    private val barcodeFindModule: BarcodeFindModule
) : ScanditViewGroupManager<FrameLayout>() {
    override fun getName(): String = "RNTBarcodeFindView"

    override fun createNewInstance(reactContext: ThemedReactContext): FrameLayout =
        FrameLayout(reactContext)

    override fun getCommandsMap(): MutableMap<String, Int> {
        return mutableMapOf(
            "create" to CREATE_FRAGMENT_COMMAND
        )
    }

    override fun receiveCommand(root: FrameLayout, commandId: String?, args: ReadableArray?) {
        if (commandId?.toIntOrNull() == CREATE_FRAGMENT_COMMAND) {
            val reactNativeViewId = args?.getInt(0) ?: 0
            val viewJson = args?.getString(1) ?: return

            createFragment(root, reactNativeViewId, viewJson)
        }
    }

    private fun createFragment(root: FrameLayout, reactNativeViewId: Int, viewJson: String) {
        val fragment = BarcodeFindViewFragment(barcodeFindModule, viewJson)
        val activity = reactContext.currentActivity as FragmentActivity
        activity.supportFragmentManager
            .beginTransaction()
            .replace(reactNativeViewId, fragment, reactNativeViewId.toString())
            .commit()
        fragmentsCache[root] = fragment
    }

    override fun onDropViewInstance(view: FrameLayout) {
        super.onDropViewInstance(view)
        fragmentsCache.remove(view)?.let {
            val activity = reactContext.currentActivity as FragmentActivity
            activity.supportFragmentManager.beginTransaction().remove(it).commit()
        }
    }

    override fun invalidate() {
        super.invalidate()
        fragmentsCache.forEach {
            val activity = reactContext.currentActivity as FragmentActivity
            activity.supportFragmentManager.beginTransaction().remove(it.value).commit()
        }
        fragmentsCache.clear()
    }

    companion object {
        private const val CREATE_FRAGMENT_COMMAND = 1
    }
}
