package com.scandit.datacapture.reactnative.barcode.ui

import android.widget.FrameLayout
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.ThemedReactContext
import com.scandit.datacapture.barcode.check.ui.BarcodeCheckView
import com.scandit.datacapture.frameworks.barcode.check.BarcodeCheckModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.extensions.findViewOfType
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.frameworks.core.result.NoopFrameworksResult
import com.scandit.datacapture.reactnative.core.ui.ScanditViewGroupManager

class BarcodeCheckViewManager(
    private val serviceLocator: ServiceLocator<FrameworkModule>
) : ScanditViewGroupManager<FrameLayout>() {

    override fun getName(): String = "RNTBarcodeCheckView"

    override fun createNewInstance(reactContext: ThemedReactContext): FrameLayout =
        FrameLayout(reactContext)

    override fun getCommandsMap(): MutableMap<String, Int> {
        return mutableMapOf(
            CREATE_BARCODE_CHECK_VIEW_COMMAND to CREATE_BARCODE_CHECK_VIEW_COMMAND_INDEX
        )
    }

    override fun receiveCommand(root: FrameLayout, commandId: String?, args: ReadableArray?) {
        if (commandId == CREATE_BARCODE_CHECK_VIEW_COMMAND) {
            val viewJson = args?.getString(1) ?: return
            root.post {
                barcodeCheckModule.addViewToContainer(root, viewJson, NoopFrameworksResult())
            }
        }
    }

    override fun onDropViewInstance(view: FrameLayout) {
        view.findViewOfType(BarcodeCheckView::class.java)?.let {
            barcodeCheckModule.viewDisposed()
        }
        super.onDropViewInstance(view)
    }

    companion object {
        private const val CREATE_BARCODE_CHECK_VIEW_COMMAND_INDEX = 1
        private const val CREATE_BARCODE_CHECK_VIEW_COMMAND = "createBarcodeCheckView"
    }

    private val barcodeCheckModule: BarcodeCheckModule
        get() {
            return serviceLocator.resolve(
                BarcodeCheckModule::class.java.name
            ) as? BarcodeCheckModule?
                ?: throw ModuleNotStartedError(BarcodeCheckModule::class.java.simpleName)
        }
}
