/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.listener

import com.facebook.react.modules.core.DeviceEventManagerModule
import com.scandit.datacapture.barcode.count.ui.view.BarcodeCountView
import com.scandit.datacapture.barcode.count.ui.view.BarcodeCountViewUiListener
import java.util.concurrent.atomic.AtomicBoolean

class RCTBarcodeCountViewUiListener(
    private val eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter
) : BarcodeCountViewUiListener {

    private var hasNativeListeners: AtomicBoolean = AtomicBoolean(false)

    internal fun setHasNativeListeners(hasListeners: Boolean) {
        hasNativeListeners.set(hasListeners)
    }

    override fun onExitButtonTapped(view: BarcodeCountView) {
        if (!hasNativeListeners.get()) return
        eventEmitter.emit(EXIT_BUTTON_BUTTON_TAP_EVENT_NAME, null)
    }

    override fun onListButtonTapped(view: BarcodeCountView) {
        if (!hasNativeListeners.get()) return
        eventEmitter.emit(LIST_BUTTON_TAP_EVENT_NAME, null)
    }

    override fun onSingleScanButtonTapped(view: BarcodeCountView) {
        if (!hasNativeListeners.get()) return
        eventEmitter.emit(SINGLE_SCAN_BUTTON_TAP_EVENT_NAME, null)
    }

    companion object {
        private const val EXIT_BUTTON_BUTTON_TAP_EVENT_NAME =
            "barcodeCountViewUiListener-onExitButtonTapped"
        private const val LIST_BUTTON_TAP_EVENT_NAME =
            "barcodeCountViewUiListener-onListButtonTapped"
        private const val SINGLE_SCAN_BUTTON_TAP_EVENT_NAME =
            "barcodeCountViewUiListener-onSingleScanButtonTapped"
    }
}
