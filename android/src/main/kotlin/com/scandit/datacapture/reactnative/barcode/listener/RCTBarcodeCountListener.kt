/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.listener

import com.facebook.react.modules.core.DeviceEventManagerModule
import com.scandit.datacapture.barcode.count.capture.BarcodeCount
import com.scandit.datacapture.barcode.count.capture.BarcodeCountListener
import com.scandit.datacapture.barcode.count.capture.BarcodeCountSession
import com.scandit.datacapture.core.data.FrameData
import com.scandit.datacapture.reactnative.core.ScanditDataCaptureCoreModule
import com.scandit.datacapture.reactnative.core.utils.EventWithResult
import com.scandit.datacapture.reactnative.core.utils.writableMap
import java.util.concurrent.atomic.AtomicBoolean

class RCTBarcodeCountListener(
    eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter
) : BarcodeCountListener {

    private val onScan =
        EventWithResult<Boolean>(SCAN_EVENT_NAME, eventEmitter)

    var lastSession: BarcodeCountSession? = null
        private set

    private var hasNativeListeners: AtomicBoolean = AtomicBoolean(false)

    internal fun setHasNativeListeners(hasListeners: Boolean) {
        if (hasNativeListeners.getAndSet(hasListeners) && !hasListeners) {
            onScan.onCancel()
        }
    }

    override fun onScan(mode: BarcodeCount, session: BarcodeCountSession, data: FrameData) {
        ScanditDataCaptureCoreModule.lastFrame = data
        if (!hasNativeListeners.get()) return
        lastSession = session
        val params = writableMap {
            putString(FIELD_SESSION, session.toJson())
        }
        // Since the state of barcodeCount is handled automatically inside the BarcodeCountView
        // we don't need to handle the result of this function.
        onScan.emitForResult(params, true)
        ScanditDataCaptureCoreModule.lastFrame = null
        lastSession = null
    }

    fun finishOnScan() {
        onScan.onResult(true)
    }

    companion object {
        private const val SCAN_EVENT_NAME =
            "barcodeCountListener-scan"

        private const val FIELD_SESSION = "session"
    }
}
