/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.listener

import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter
import com.scandit.datacapture.barcode.tracking.data.TrackedBarcode
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingBasicOverlay
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingBasicOverlayListener
import com.scandit.datacapture.core.ui.style.Brush
import com.scandit.datacapture.core.ui.style.BrushDeserializer
import com.scandit.datacapture.reactnative.core.utils.EventWithResult
import com.scandit.datacapture.reactnative.core.utils.writableMap
import java.util.concurrent.atomic.AtomicBoolean

class RCTBarcodeTrackingBasicOverlayListener(
    private val eventEmitter: RCTDeviceEventEmitter
) : BarcodeTrackingBasicOverlayListener {

    companion object {
        private const val BRUSH_FOR_TRACKED_BARCODE_EVENT_NAME =
            "barcodeTrackingBasicOverlayListener-brushForTrackedBarcode"
        private const val ON_TRACKED_BARCODE_TAPPED_EVENT_NAME =
            "barcodeTrackingBasicOverlayListener-didTapTrackedBarcode"

        private const val FIELD_TRACKED_BARCODE = "trackedBarcode"
    }

    private var hasNativeOverlayListeners: AtomicBoolean = AtomicBoolean(false)

    internal fun setHasNativeOverlayListeners(hasListeners: Boolean) {
        if (hasNativeOverlayListeners.getAndSet(hasListeners) && !hasListeners) {
            brushForTrackedBarcode.onCancel()
        }
    }

    private val brushForTrackedBarcode =
        EventWithResult<Brush?>(BRUSH_FOR_TRACKED_BARCODE_EVENT_NAME, eventEmitter)

    override fun brushForTrackedBarcode(
        overlay: BarcodeTrackingBasicOverlay,
        trackedBarcode: TrackedBarcode
    ): Brush? {
        val params = writableMap {
            putString(FIELD_TRACKED_BARCODE, trackedBarcode.toJson())
        }

        if (!hasNativeOverlayListeners.get()) return overlay.brush
        return brushForTrackedBarcode.emitForResult(params, timeoutResult = overlay.brush)
    }

    fun onFinishCallback(brushJson: String?) {
        brushForTrackedBarcode.onResult(
            if (brushJson != null) BrushDeserializer.fromJson(brushJson) else null
        )
    }

    override fun onTrackedBarcodeTapped(
        overlay: BarcodeTrackingBasicOverlay,
        trackedBarcode: TrackedBarcode
    ) {
        if (!hasNativeOverlayListeners.get()) return

        val params = writableMap {
            putString(FIELD_TRACKED_BARCODE, trackedBarcode.toJson())
        }
        eventEmitter.emit(ON_TRACKED_BARCODE_TAPPED_EVENT_NAME, params)
    }
}
