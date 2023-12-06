/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.listener

import com.facebook.react.modules.core.DeviceEventManagerModule
import com.scandit.datacapture.barcode.count.ui.view.BarcodeCountView
import com.scandit.datacapture.barcode.count.ui.view.BarcodeCountViewListener
import com.scandit.datacapture.barcode.tracking.data.TrackedBarcode
import com.scandit.datacapture.core.ui.style.Brush
import com.scandit.datacapture.reactnative.core.utils.EventWithResult
import com.scandit.datacapture.reactnative.core.utils.writableMap
import java.util.concurrent.atomic.AtomicBoolean

class RCTBarcodeCountViewListener(
    private val eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter,
) : BarcodeCountViewListener {

    private val brushForRecognizedBarcoded =
        EventWithResult<Brush?>(BRUSH_FOR_RECOGNIZED_BARCODE_EVENT_NAME, eventEmitter)

    private val brushForRecognizedBarcodeNotInList =
        EventWithResult<Brush?>(BRUSH_FOR_RECOGNIZED_BARCODE_NOT_IN_LIST_EVENT_NAME, eventEmitter)

    private val brushForUnrecognizedBarcode =
        EventWithResult<Brush?>(BRUSH_FOR_UNRECOGNIZED_BARCODE_EVENT_NAME, eventEmitter)

    private var hasNativeListeners: AtomicBoolean = AtomicBoolean(false)

    internal fun setHasNativeListeners(hasListeners: Boolean) {
        if (hasNativeListeners.getAndSet(hasListeners) && !hasListeners) {
            brushForRecognizedBarcoded.onCancel()
            brushForRecognizedBarcodeNotInList.onCancel()
            brushForUnrecognizedBarcode.onCancel()
        }
    }

    override fun brushForRecognizedBarcode(
        view: BarcodeCountView,
        trackedBarcode: TrackedBarcode
    ): Brush? {
        // TODO: https://scandit.atlassian.net/browse/SDC-16607
        return  view.recognizedBrush
//        if (!hasNativeListeners.get()) return null
//
//        val params = writableMap {
//            putString(FIELD_TRACKED_BARCODE, trackedBarcode.toJson())
//        }
//        return brushForRecognizedBarcoded.emitForResult(params, null)
    }

    override fun brushForRecognizedBarcodeNotInList(
        view: BarcodeCountView,
        trackedBarcode: TrackedBarcode
    ): Brush? {
        // TODO: https://scandit.atlassian.net/browse/SDC-16607
        return  view.notInListBrush
//        if (!hasNativeListeners.get()) return null
//
//        val params = writableMap {
//            putString(FIELD_TRACKED_BARCODE, trackedBarcode.toJson())
//        }
//        return brushForRecognizedBarcodeNotInList.emitForResult(params, null)
    }

    override fun brushForUnrecognizedBarcode(
        view: BarcodeCountView,
        trackedBarcode: TrackedBarcode
    ): Brush? {
        // TODO: https://scandit.atlassian.net/browse/SDC-16607
        return  view.unrecognizedBrush
//        if (!hasNativeListeners.get()) return null
//
//        val params = writableMap {
//            putString(FIELD_TRACKED_BARCODE, trackedBarcode.toJson())
//        }
//        return brushForUnrecognizedBarcode.emitForResult(params, null)
    }

    override fun onFilteredBarcodeTapped(view: BarcodeCountView, filteredBarcode: TrackedBarcode) {
        if (!hasNativeListeners.get()) return
        eventEmitter.emit(FILTERED_BARCODE_TAPPED_EVENT_NAME, filteredBarcode.toJson())
    }

    override fun onRecognizedBarcodeNotInListTapped(
        view: BarcodeCountView,
        trackedBarcode: TrackedBarcode
    ) {
        if (!hasNativeListeners.get()) return
        eventEmitter.emit(RECOGNIZED_BARCODE_NOT_IN_LIST_TAPPED_EVENT_NAME, trackedBarcode.toJson())
    }

    override fun onRecognizedBarcodeTapped(view: BarcodeCountView, trackedBarcode: TrackedBarcode) {
        if (!hasNativeListeners.get()) return
        eventEmitter.emit(RECOGNIZED_BARCODE_TAPPED_EVENT_NAME, trackedBarcode.toJson())
    }

    override fun onUnrecognizedBarcodeTapped(
        view: BarcodeCountView,
        trackedBarcode: TrackedBarcode
    ) {
        if (!hasNativeListeners.get()) return
        eventEmitter.emit(UNRECOGNIZED_BARCODE_TAPPED_EVENT_NAME, trackedBarcode.toJson())
    }

    override fun onCaptureListCompleted(view: BarcodeCountView) {
        if (!hasNativeListeners.get()) return
        eventEmitter.emit(ON_CAPTURE_LIST_COMPLETED_EVENT_NAME, null)
    }

    fun finishBrushForRecognizedBarcodeEvent(brush: Brush) {
        brushForRecognizedBarcoded.onResult(brush)
    }

    fun finishBrushForRecognizedBarcodeNotInListEvent(brush: Brush) {
        brushForRecognizedBarcodeNotInList.onResult(brush)
    }

    fun finishBrushForUnrecognizedBarcodeEvent(brush: Brush) {
        brushForUnrecognizedBarcode.onResult(brush)
    }

    companion object {
        private const val BRUSH_FOR_RECOGNIZED_BARCODE_EVENT_NAME =
            "barcodeCountViewListener-brushForRecognizedBarcode"
        private const val BRUSH_FOR_RECOGNIZED_BARCODE_NOT_IN_LIST_EVENT_NAME =
            "barcodeCountViewListener-brushForRecognizedBarcodeNotInList"
        private const val BRUSH_FOR_UNRECOGNIZED_BARCODE_EVENT_NAME =
            "barcodeCountViewListener-brushForUnrecognizedBarcode"

        private const val FILTERED_BARCODE_TAPPED_EVENT_NAME =
            "barcodeCountViewListener-onFilteredBarcodeTapped"
        private const val RECOGNIZED_BARCODE_NOT_IN_LIST_TAPPED_EVENT_NAME =
            "barcodeCountViewListener-onRecognizedBarcodeNotInListTapped"
        private const val RECOGNIZED_BARCODE_TAPPED_EVENT_NAME =
            "barcodeCountViewListener-onRecognizedBarcodeTapped"
        private const val UNRECOGNIZED_BARCODE_TAPPED_EVENT_NAME =
            "barcodeCountViewListener-onUnrecognizedBarcodeTapped"
        private const val ON_CAPTURE_LIST_COMPLETED_EVENT_NAME =
            "barcodeCountViewListener-onCaptureListCompleted"

        private const val FIELD_TRACKED_BARCODE = "trackedBarcode"
    }
}
