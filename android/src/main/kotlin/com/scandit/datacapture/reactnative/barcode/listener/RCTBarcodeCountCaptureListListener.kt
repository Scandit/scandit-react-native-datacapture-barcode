package com.scandit.datacapture.reactnative.barcode.listener

import com.facebook.react.modules.core.DeviceEventManagerModule
import com.scandit.datacapture.barcode.count.capture.list.BarcodeCountCaptureList
import com.scandit.datacapture.barcode.count.capture.list.BarcodeCountCaptureListListener
import com.scandit.datacapture.barcode.count.capture.list.BarcodeCountCaptureListSession
import com.scandit.datacapture.reactnative.core.utils.writableMap

class RCTBarcodeCountCaptureListListener(
    private val eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter
) : BarcodeCountCaptureListListener {

    override fun onCaptureListSessionUpdated(
        list: BarcodeCountCaptureList,
        session: BarcodeCountCaptureListSession
    ) {
        val params = writableMap {
            putString(FIELD_SESSION, session.toJson())
        }
        eventEmitter.emit(ON_CAPTURE_LIST_SESSION_UPDATED_EVENT_NAME, params)
    }

    companion object {
        private const val ON_CAPTURE_LIST_SESSION_UPDATED_EVENT_NAME =
            "barcodeCountCaptureListListener-onCaptureListSessionUpdated"

        private const val FIELD_SESSION = "session"
    }
}
