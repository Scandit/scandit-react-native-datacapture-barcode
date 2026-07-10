/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import android.widget.FrameLayout
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.ThemedReactContext
import com.scandit.datacapture.barcode.find.ui.BarcodeFindView
import com.scandit.datacapture.frameworks.barcode.find.BarcodeFindModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.extensions.findViewOfType
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.frameworks.core.result.NoopFrameworksResult
import com.scandit.datacapture.reactnative.core.ui.ScanditViewGroupManager

class BarcodeFindViewManager(
    private val serviceLocator: ServiceLocator<FrameworkModule>
) : ScanditViewGroupManager<FrameLayout>() {

    override fun getName(): String = "RNTBarcodeFindView"

    override fun createNewInstance(reactContext: ThemedReactContext): FrameLayout =
        FrameLayout(reactContext)

    override fun getCommandsMap(): MutableMap<String, Int> {
        return mutableMapOf(
            CREATE_BARCODE_FIND_VIEW_COMMAND to CREATE_BARCODE_FIND_VIEW_COMMAND_INDEX
        )
    }

    override fun receiveCommand(root: FrameLayout, commandId: String?, args: ReadableArray?) {
        if (commandId == CREATE_BARCODE_FIND_VIEW_COMMAND) {
            val viewJson = args?.getString(1) ?: return
            root.post {
                barcodeFindModule.addViewToContainer(root, viewJson, NoopFrameworksResult())
            }
        }
    }

    override fun onDropViewInstance(view: FrameLayout) {
        view.findViewOfType(BarcodeFindView::class.java)?.let {
            barcodeFindModule.viewDisposed()
        }
        super.onDropViewInstance(view)
    }

    companion object {
        private const val CREATE_BARCODE_FIND_VIEW_COMMAND_INDEX = 1
        private const val CREATE_BARCODE_FIND_VIEW_COMMAND = "createBarcodeFindView"
    }

    private val barcodeFindModule: BarcodeFindModule
        get() {
            return serviceLocator.resolve(BarcodeFindModule::class.java.name) as? BarcodeFindModule?
                ?: throw ModuleNotStartedError(BarcodeFindModule::class.java.simpleName)
        }
}
