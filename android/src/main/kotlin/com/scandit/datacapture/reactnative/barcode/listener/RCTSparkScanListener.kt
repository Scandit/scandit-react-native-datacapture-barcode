/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.listener

import com.facebook.react.modules.core.DeviceEventManagerModule
import com.scandit.datacapture.barcode.spark.capture.SparkScan
import com.scandit.datacapture.barcode.spark.capture.SparkScanListener
import com.scandit.datacapture.barcode.spark.capture.SparkScanSession
import com.scandit.datacapture.core.data.FrameData
import com.scandit.datacapture.reactnative.core.ScanditDataCaptureCoreModule
import com.scandit.datacapture.reactnative.core.utils.EventWithResult
import com.scandit.datacapture.reactnative.core.utils.writableMap
import java.util.concurrent.atomic.AtomicBoolean

class RCTSparkScanListener(
    eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter
) : SparkScanListener {

    companion object {
        private const val ON_BARCODE_SCANNED_EVENT_NAME = "sparkScanListener-didScan"
        private const val ON_SESSION_UPDATED_EVENT_NAME = "sparkScanListener-didUpdateSession"

        private const val FIELD_SESSION = "session"
    }

    var lastSession: SparkScanSession? = null
        private set

    private var hasNativeListeners: AtomicBoolean = AtomicBoolean(false)

    internal fun setHasNativeListeners(hasListeners: Boolean) {
        if (hasNativeListeners.getAndSet(hasListeners) && !hasListeners) {
            onSessionUpdated.onCancel()
            onBarcodeScanned.onCancel()
        }
        if (!hasListeners) lastSession = null
    }

    private val onBarcodeScanned =
        EventWithResult<Boolean>(ON_BARCODE_SCANNED_EVENT_NAME, eventEmitter)

    private val onSessionUpdated =
        EventWithResult<Boolean>(ON_SESSION_UPDATED_EVENT_NAME, eventEmitter)

    override fun onSessionUpdated(
        sparkScan: SparkScan,
        session: SparkScanSession,
        data: FrameData?
    ) {
        if (!hasNativeListeners.get()) return
        lastSession = session
        ScanditDataCaptureCoreModule.lastFrame = data
        val params = writableMap {
            putString(FIELD_SESSION, session.toJson())
        }
        // Since the state of sparkScan is handled automatically inside the SparkScanView
        // we don't need to handle the result of this function.
        onSessionUpdated.emitForResult(params, sparkScan.isEnabled)
        ScanditDataCaptureCoreModule.lastFrame = null
    }

    override fun onBarcodeScanned(
        sparkScan: SparkScan,
        session: SparkScanSession,
        data: FrameData?
    ) {
        if (!hasNativeListeners.get()) return
        ScanditDataCaptureCoreModule.lastFrame = data
        val params = writableMap {
            putString(FIELD_SESSION, session.toJson())
        }
        // Since the state of sparkScan is handled automatically inside the SparkScanView
        // we don't need to handle the result of this function.
        onBarcodeScanned.emitForResult(params, sparkScan.isEnabled)
        ScanditDataCaptureCoreModule.lastFrame = null
    }

    fun onFinishBarcodeScannedCallback(enabled: Boolean) {
        onBarcodeScanned.onResult(enabled)
    }

    fun onFinishSessionUpdatedCallback(enabled: Boolean) {
        onSessionUpdated.onResult(enabled)
    }
}
