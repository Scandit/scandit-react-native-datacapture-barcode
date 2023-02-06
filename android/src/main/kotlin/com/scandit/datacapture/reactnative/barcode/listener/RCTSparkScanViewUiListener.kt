package com.scandit.datacapture.reactnative.barcode.listener

import com.facebook.react.modules.core.DeviceEventManagerModule
import com.scandit.datacapture.barcode.spark.capture.SparkScanViewUiListener
import com.scandit.datacapture.barcode.spark.ui.SparkScanView
import java.util.concurrent.atomic.AtomicBoolean

class RCTSparkScanViewUiListener(
    private val eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter,
) : SparkScanViewUiListener {

    private var hasNativeListeners: AtomicBoolean = AtomicBoolean(false)

    internal fun setHasNativeListeners(hasListeners: Boolean) {
        hasNativeListeners.set(hasListeners)
    }

    override fun onFastFindButtonTap(view: SparkScanView) {
        if (!hasNativeListeners.get()) return
        eventEmitter.emit(EVENT_FAST_FIND_BUTTON_TAP, null)
    }

    override fun onBarcodeCountButtonTap(view: SparkScanView) {
        if (!hasNativeListeners.get()) return
        eventEmitter.emit(EVENT_BARCODE_COUNT_BUTTON_TAP, null)
    }

    companion object {
        private const val EVENT_FAST_FIND_BUTTON_TAP = "fastFindButtonTapped"
        private const val EVENT_BARCODE_COUNT_BUTTON_TAP = "barcodeCountButtonTapped"
    }
}
