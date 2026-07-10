/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import android.widget.FrameLayout
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.ThemedReactContext
import com.scandit.datacapture.barcode.pick.ui.BarcodePickView
import com.scandit.datacapture.frameworks.barcode.pick.BarcodePickModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.extensions.findViewOfType
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.frameworks.core.result.NoopFrameworksResult
import com.scandit.datacapture.reactnative.core.ui.ScanditViewGroupManager

class BarcodePickViewManager(
    private val serviceLocator: ServiceLocator<FrameworkModule>
) : ScanditViewGroupManager<FrameLayout>() {

    override fun getName(): String = "RNTBarcodePickView"

    override fun createNewInstance(reactContext: ThemedReactContext): FrameLayout =
        FrameLayout(reactContext)

    override fun getCommandsMap(): MutableMap<String, Int> {
        return mutableMapOf(
            CREATE_BARCODE_PICK_VIEW_COMMAND to CREATE_BARCODE_PICK_VIEW_COMMAND_INDEX
        )
    }

    override fun receiveCommand(root: FrameLayout, commandId: String?, args: ReadableArray?) {
        if (commandId == CREATE_BARCODE_PICK_VIEW_COMMAND) {
            val viewJson = args?.getString(1) ?: return
            root.post {
                barcodePickModule.addViewToContainer(root, viewJson, NoopFrameworksResult())
            }
        }
    }

    override fun onDropViewInstance(view: FrameLayout) {
        view.findViewOfType(BarcodePickView::class.java)?.let {
            barcodePickModule.viewDisposed()
        }
        super.onDropViewInstance(view)
    }

    companion object {
        private const val CREATE_BARCODE_PICK_VIEW_COMMAND_INDEX = 1
        private const val CREATE_BARCODE_PICK_VIEW_COMMAND = "createBarcodePickView"
    }

    private val barcodePickModule: BarcodePickModule
        get() {
            return serviceLocator.resolve(BarcodePickModule::class.java.name) as? BarcodePickModule?
                ?: throw ModuleNotStartedError(BarcodePickModule::class.java.simpleName)
        }
}
