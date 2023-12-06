/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.listener

import android.view.View
import androidx.annotation.UiThread
import com.facebook.react.bridge.ReactContext
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.scandit.datacapture.barcode.tracking.data.TrackedBarcode
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingAdvancedOverlay
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingAdvancedOverlayListener
import com.scandit.datacapture.core.common.geometry.Anchor
import com.scandit.datacapture.core.common.geometry.PointWithUnit
import com.scandit.datacapture.reactnative.barcode.tracking.nativeViewFromJson
import com.scandit.datacapture.reactnative.core.utils.EventWithResult
import com.scandit.datacapture.reactnative.core.utils.POINT_WITH_UNIT_ZERO
import com.scandit.datacapture.reactnative.core.utils.writableMap
import java.util.concurrent.atomic.AtomicBoolean

class RCTBarcodeTrackingAdvancedOverlayListener(
    eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter,
    private val reactContext: ReactContext
) : BarcodeTrackingAdvancedOverlayListener {

    companion object {
        private const val VIEW_FOR_TRACKED_BARCODE_EVENT_NAME =
            "barcodeTrackingAdvancedOverlayListener-viewForTrackedBarcode"
        private const val ANCHOR_FOR_TRACKED_BARCODE_EVENT_NAME =
            "barcodeTrackingAdvancedOverlayListener-anchorForTrackedBarcode"
        private const val OFFSET_FOR_TRACKED_BARCODE_EVENT_NAME =
            "barcodeTrackingAdvancedOverlayListener-offsetForTrackedBarcode"

        private const val FIELD_TRACKED_BARCODE = "trackedBarcode"
    }

    private var hasNativeOverlayListeners: AtomicBoolean = AtomicBoolean(false)

    internal fun setHasNativeOverlayListeners(hasListeners: Boolean) {
        if (hasNativeOverlayListeners.getAndSet(hasListeners) && !hasListeners) {
            viewForTrackedBarcode.onCancel()
            anchorForTrackedBarcode.onCancel()
            offsetForTrackedBarcode.onCancel()
        }
    }

    private val viewForTrackedBarcode =
        EventWithResult<String?>(VIEW_FOR_TRACKED_BARCODE_EVENT_NAME, eventEmitter)
    private val anchorForTrackedBarcode =
        EventWithResult<Anchor>(ANCHOR_FOR_TRACKED_BARCODE_EVENT_NAME, eventEmitter)
    private val offsetForTrackedBarcode =
        EventWithResult<PointWithUnit>(OFFSET_FOR_TRACKED_BARCODE_EVENT_NAME, eventEmitter)

    @UiThread
    override fun viewForTrackedBarcode(
        overlay: BarcodeTrackingAdvancedOverlay,
        trackedBarcode: TrackedBarcode
    ): View? {
        val params = writableMap {
            putString(FIELD_TRACKED_BARCODE, trackedBarcode.toJson())
        }

        if (!hasNativeOverlayListeners.get()) return null
        val viewJson = viewForTrackedBarcode.emitForResult(params, timeoutResult = null)
        return viewJson?.let {
            nativeViewFromJson(reactContext.currentActivity!!, it)
        }
    }

    fun onFinishViewCallback(viewJson: String?) {
        if (!hasNativeOverlayListeners.get()) return
        viewForTrackedBarcode.onResult(viewJson)
    }

    @UiThread
    override fun anchorForTrackedBarcode(
        overlay: BarcodeTrackingAdvancedOverlay,
        trackedBarcode: TrackedBarcode
    ): Anchor {
        val params = writableMap {
            putString(FIELD_TRACKED_BARCODE, trackedBarcode.toJson())
        }

        if (!hasNativeOverlayListeners.get()) return Anchor.CENTER
        return anchorForTrackedBarcode.emitForResult(params, timeoutResult = Anchor.CENTER)
    }

    fun onFinishAnchorCallback(anchor: Anchor) {
        if (!hasNativeOverlayListeners.get()) return
        anchorForTrackedBarcode.onResult(anchor)
    }

    @UiThread
    override fun offsetForTrackedBarcode(
        overlay: BarcodeTrackingAdvancedOverlay,
        trackedBarcode: TrackedBarcode,
        view: View
    ): PointWithUnit {
        val params = writableMap {
            putString(FIELD_TRACKED_BARCODE, trackedBarcode.toJson())
        }

        if (!hasNativeOverlayListeners.get()) return POINT_WITH_UNIT_ZERO
        return offsetForTrackedBarcode.emitForResult(params, timeoutResult = POINT_WITH_UNIT_ZERO)
    }

    fun onFinishOffsetCallback(offset: PointWithUnit) {
        if (!hasNativeOverlayListeners.get()) return
        offsetForTrackedBarcode.onResult(offset)
    }
}
