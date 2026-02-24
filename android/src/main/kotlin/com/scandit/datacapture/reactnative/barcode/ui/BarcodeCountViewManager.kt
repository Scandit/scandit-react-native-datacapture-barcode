/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import android.view.ViewGroup
import android.widget.FrameLayout
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.ThemedReactContext
import com.scandit.datacapture.barcode.count.ui.view.BarcodeCountView
import com.scandit.datacapture.frameworks.barcode.count.BarcodeCountModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.extensions.findViewOfType
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.core.ui.ScanditViewGroupManager

class BarcodeCountViewManager(
    private val serviceLocator: ServiceLocator<FrameworkModule>
) : ScanditViewGroupManager<FrameLayout>() {

    override fun getName(): String = "RNTBarcodeCountView"

    override fun createNewInstance(reactContext: ThemedReactContext): FrameLayout =
        FrameLayout(reactContext)

    override fun getCommandsMap(): MutableMap<String, Int> {
        return mutableMapOf(
            CREATE_BARCODE_COUNT_VIEW_COMMAND to CREATE_BARCODE_COUNT_VIEW_COMMAND_INDEX
        )
    }

    override fun receiveCommand(root: FrameLayout, commandId: String?, args: ReadableArray?) {
        if (commandId == CREATE_BARCODE_COUNT_VIEW_COMMAND) {
            val viewJson = args?.getString(1) ?: return

            root.post {
                barcodeCountModule.getViewFromJson(viewJson)?.let { bcView ->
                    root.addView(
                        bcView,
                        ViewGroup.LayoutParams.MATCH_PARENT,
                        ViewGroup.LayoutParams.MATCH_PARENT
                    )
                }
            }
        }
    }

    override fun onDropViewInstance(view: FrameLayout) {
        view.findViewOfType(BarcodeCountView::class.java)?.let {
            barcodeCountModule.disposeBarcodeCountView()
        }
        super.onDropViewInstance(view)
    }

    companion object {
        private const val CREATE_BARCODE_COUNT_VIEW_COMMAND_INDEX = 1
        private const val CREATE_BARCODE_COUNT_VIEW_COMMAND = "createBarcodeCountView"
    }

    private val barcodeCountModule: BarcodeCountModule
        get() {
            return serviceLocator.resolve(
                BarcodeCountModule::class.java.name
            ) as? BarcodeCountModule?
                ?: throw ModuleNotStartedError(BarcodeCountModule::class.java.simpleName)
        }
}
