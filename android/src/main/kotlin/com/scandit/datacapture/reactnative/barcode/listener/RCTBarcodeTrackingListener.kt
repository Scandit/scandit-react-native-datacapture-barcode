/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.listener

import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter
import com.scandit.datacapture.barcode.tracking.capture.BarcodeTracking
import com.scandit.datacapture.barcode.tracking.capture.BarcodeTrackingListener
import com.scandit.datacapture.barcode.tracking.capture.BarcodeTrackingSession
import com.scandit.datacapture.core.data.FrameData
import com.scandit.datacapture.reactnative.core.ScanditDataCaptureCoreModule
import com.scandit.datacapture.reactnative.core.utils.EventWithResult
import com.scandit.datacapture.reactnative.core.utils.writableMap
import java.util.concurrent.atomic.AtomicBoolean

class RCTBarcodeTrackingListener(
    eventEmitter: RCTDeviceEventEmitter
) : BarcodeTrackingListener {

    companion object {
        private const val ON_SESSION_UPDATED_EVENT_NAME =
            "barcodeTrackingListener-didUpdateSession"

        private const val FIELD_SESSION = "session"
    }

    private var hasNativeListeners: AtomicBoolean = AtomicBoolean(false)

    internal fun setHasNativeListeners(hasListeners: Boolean) {
        if (hasNativeListeners.getAndSet(hasListeners) && !hasListeners) {
            onSessionUpdated.onCancel()
        }
    }

    var callbacks: Callbacks? = null

    private val onSessionUpdated =
        EventWithResult<Boolean>(ON_SESSION_UPDATED_EVENT_NAME, eventEmitter)

    override fun onSessionUpdated(
        mode: BarcodeTracking,
        session: BarcodeTrackingSession,
        data: FrameData
    ) {
        ScanditDataCaptureCoreModule.lastFrame = data

        callbacks?.onSessionUpdated(mode, session)
        val params = writableMap {
            putString(FIELD_SESSION, session.toJson())
        }

        if (!hasNativeListeners.get()) return
        val enabled = onSessionUpdated.emitForResult(params, timeoutResult = mode.isEnabled)
        mode.isEnabled = enabled
        ScanditDataCaptureCoreModule.lastFrame = null
    }

    fun onFinishCallback(enabled: Boolean) {
        if (!hasNativeListeners.get()) return
        onSessionUpdated.onResult(enabled)
    }

    interface Callbacks {
        fun onSessionUpdated(mode: BarcodeTracking, session: BarcodeTrackingSession)
    }
}
