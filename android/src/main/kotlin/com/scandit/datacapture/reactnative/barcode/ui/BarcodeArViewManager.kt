package com.scandit.datacapture.reactnative.barcode.ui

import android.widget.FrameLayout
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.ThemedReactContext
import com.scandit.datacapture.barcode.ar.ui.BarcodeArView
import com.scandit.datacapture.frameworks.barcode.ar.BarcodeArModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.extensions.findViewOfType
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.frameworks.core.result.NoopFrameworksResult
import com.scandit.datacapture.reactnative.core.ui.ScanditViewGroupManager

class BarcodeArViewManager(
    private val serviceLocator: ServiceLocator<FrameworkModule>
) : ScanditViewGroupManager<FrameLayout>() {

    override fun getName(): String = "RNTBarcodeArView"

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
                barcodeArModule.addViewToContainer(root, viewJson, NoopFrameworksResult())
            }
        }
    }

    override fun onDropViewInstance(view: FrameLayout) {
        view.findViewOfType(BarcodeArView::class.java)?.let {
            barcodeArModule.viewDisposed()
        }
        super.onDropViewInstance(view)
    }

    companion object {
        private const val CREATE_BARCODE_CHECK_VIEW_COMMAND_INDEX = 1
        private const val CREATE_BARCODE_CHECK_VIEW_COMMAND = "createBarcodeArView"
    }

    private val barcodeArModule: BarcodeArModule
        get() {
            return serviceLocator.resolve(
                BarcodeArModule::class.java.name
            ) as? BarcodeArModule?
                ?: throw ModuleNotStartedError(BarcodeArModule::class.java.simpleName)
        }
}
