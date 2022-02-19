/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.listener

import com.facebook.react.modules.core.DeviceEventManagerModule
import com.scandit.datacapture.barcode.capture.BarcodeCapture
import com.scandit.datacapture.barcode.capture.BarcodeCaptureListener
import com.scandit.datacapture.barcode.capture.BarcodeCaptureSession
import com.scandit.datacapture.core.data.FrameData
import com.scandit.datacapture.reactnative.core.ScanditDataCaptureCoreModule
import com.scandit.datacapture.reactnative.core.utils.EventWithResult
import com.scandit.datacapture.reactnative.core.utils.writableMap
import java.util.concurrent.atomic.AtomicBoolean

class RCTBarcodeCaptureListener(
    eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter
) : BarcodeCaptureListener {

    companion object {
        private const val ON_BARCODE_SCANNED_EVENT_NAME = "barcodeCaptureListener-didScan"
        private const val ON_SESSION_UPDATED_EVENT_NAME = "barcodeCaptureListener-didUpdateSession"

        private const val FIELD_SESSION = "session"
    }

    private var hasNativeListeners: AtomicBoolean = AtomicBoolean(false)

    internal fun setHasNativeListeners(hasListeners: Boolean) {
        if (hasNativeListeners.getAndSet(hasListeners) && !hasListeners) {
            onSessionUpdated.onCancel()
            onBarcodeScanned.onCancel()
        }
    }

    private val onBarcodeScanned =
        EventWithResult<Boolean>(ON_BARCODE_SCANNED_EVENT_NAME, eventEmitter)

    private val onSessionUpdated =
        EventWithResult<Boolean>(ON_SESSION_UPDATED_EVENT_NAME, eventEmitter)

    override fun onBarcodeScanned(
        barcodeCapture: BarcodeCapture,
        session: BarcodeCaptureSession,
        data: FrameData
    ) {
        ScanditDataCaptureCoreModule.lastFrame = data

        val params = writableMap {
            putString(FIELD_SESSION, session.toJson())
        }

        if (!hasNativeListeners.get()) return
        val enabled = onBarcodeScanned.emitForResult(params, barcodeCapture.isEnabled)
        barcodeCapture.isEnabled = enabled

        ScanditDataCaptureCoreModule.lastFrame = null
    }

    fun onFinishBarcodeScannedCallback(enabled: Boolean) {
        onBarcodeScanned.onResult(enabled)
    }

    override fun onSessionUpdated(
        barcodeCapture: BarcodeCapture,
        session: BarcodeCaptureSession,
        data: FrameData
    ) {
        ScanditDataCaptureCoreModule.lastFrame = data

        val params = writableMap {
            putString(FIELD_SESSION, session.toJson())
        }

        if (!hasNativeListeners.get()) return
        val enabled = onSessionUpdated.emitForResult(params, barcodeCapture.isEnabled)
        barcodeCapture.isEnabled = enabled
        ScanditDataCaptureCoreModule.lastFrame = null
    }

    fun onFinishSessionUpdatedCallback(enabled: Boolean) {
        onSessionUpdated.onResult(enabled)
    }
}
