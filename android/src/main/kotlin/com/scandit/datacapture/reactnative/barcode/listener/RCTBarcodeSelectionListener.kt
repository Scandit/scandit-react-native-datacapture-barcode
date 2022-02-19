/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.listener

import com.facebook.react.bridge.Promise
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.scandit.datacapture.barcode.selection.capture.BarcodeSelection
import com.scandit.datacapture.barcode.selection.capture.BarcodeSelectionListener
import com.scandit.datacapture.barcode.selection.capture.BarcodeSelectionSession
import com.scandit.datacapture.core.data.FrameData
import com.scandit.datacapture.reactnative.core.ScanditDataCaptureCoreModule
import com.scandit.datacapture.reactnative.core.utils.EventWithResult
import com.scandit.datacapture.reactnative.core.utils.writableMap
import java.util.concurrent.atomic.AtomicBoolean

class RCTBarcodeSelectionListener(
    eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter
) : BarcodeSelectionListener {

    companion object {
        private const val ON_BARCODE_SELECTED_EVENT_NAME =
            "barcodeSelectionListener-didUpdateSelection"
        private const val ON_SESSION_UPDATED_EVENT_NAME =
            "barcodeSelectionListener-didUpdateSession"

        private const val FIELD_SESSION = "session"
    }

    private var hasNativeListeners: AtomicBoolean = AtomicBoolean(false)

    internal fun setHasNativeListeners(hasListeners: Boolean) {
        if (hasNativeListeners.getAndSet(hasListeners) && !hasListeners) {
            onSessionUpdated.onCancel()
            onBarcodeSelected.onCancel()
        }
    }

    private val onBarcodeSelected =
        EventWithResult<Boolean>(ON_BARCODE_SELECTED_EVENT_NAME, eventEmitter)

    private val onSessionUpdated =
        EventWithResult<Boolean>(ON_SESSION_UPDATED_EVENT_NAME, eventEmitter)

    override fun onSelectionUpdated(
        barcodeSelection: BarcodeSelection,
        session: BarcodeSelectionSession,
        frameData: FrameData?
    ) {
        ScanditDataCaptureCoreModule.lastFrame = frameData

        val params = writableMap {
            putString(FIELD_SESSION, session.toJson())
        }

        if (!hasNativeListeners.get()) return
        val enabled = onBarcodeSelected.emitForResult(params, barcodeSelection.isEnabled)
        barcodeSelection.isEnabled = enabled
        ScanditDataCaptureCoreModule.lastFrame = null
    }

    override fun onSessionUpdated(
        barcodeSelection: BarcodeSelection,
        session: BarcodeSelectionSession,
        frameData: FrameData?
    ) {
        ScanditDataCaptureCoreModule.lastFrame = frameData

        val params = writableMap {
            putString(FIELD_SESSION, session.toJson())
        }

        if (!hasNativeListeners.get()) return
        val enabled = onSessionUpdated.emitForResult(params, barcodeSelection.isEnabled)
        barcodeSelection.isEnabled = enabled
        ScanditDataCaptureCoreModule.lastFrame = null
    }

    fun onFinishBarcodeSelectedCallback(enabled: Boolean) {
        onBarcodeSelected.onResult(enabled)
    }

    fun onFinishSessionUpdatedCallback(enabled: Boolean) {
        onSessionUpdated.onResult(enabled)
    }

    fun onCountFinished(count: Int, promise: Promise) {
        promise.resolve(count)
    }
}
