package com.scandit.datacapture.reactnative.barcode.listener

import com.facebook.react.modules.core.DeviceEventManagerModule
import com.scandit.datacapture.barcode.data.Barcode
import com.scandit.datacapture.barcode.data.SymbologyDescription
import com.scandit.datacapture.barcode.selection.capture.BarcodeSelectionBrushProvider
import com.scandit.datacapture.core.ui.style.Brush
import com.scandit.datacapture.core.ui.style.BrushDeserializer
import com.scandit.datacapture.reactnative.core.utils.EventWithResult
import com.scandit.datacapture.reactnative.core.utils.writableMap

class RCTBarcodeSelectionTrackedBrushProvider (
    eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter
) : BarcodeSelectionBrushProvider {

    companion object {
        private const val BRUSH_FOR_TRACKED_BARCODE_EVENT_NAME =
            "barcodeSelectionTrackedBrushProvider-brushForBarcode"

        private const val FIELD_BARCODE = "barcode"
    }

    private val cachedBrushes: MutableMap<String, Brush> = mutableMapOf()

    private val brushForBarcode =
        EventWithResult<Brush?>(BRUSH_FOR_TRACKED_BARCODE_EVENT_NAME, eventEmitter)

    override fun brushForBarcode(barcode: Barcode): Brush? {
        val params = writableMap {
            putString(FIELD_BARCODE, barcode.toJson())
        }

        if (cachedBrushes.containsKey(barcode.selectionIdentifier())) return cachedBrushes[barcode.selectionIdentifier()]
        return brushForBarcode.emitForResult(params, timeoutResult = null)
    }

    fun onFinishCallback(brushJson: String?, selectionIdentifier: String?) {
        brushForBarcode.onResult(
            if (brushJson != null) {
                val brush = BrushDeserializer.fromJson(brushJson)
                cachedBrushes[selectionIdentifier.orEmpty()] = brush
                brush
            } else null
        )
    }

    fun clearCache() {
        cachedBrushes.clear()
    }

    private fun Barcode.selectionIdentifier(): String {
        return this.data.orEmpty() + SymbologyDescription.create(symbology).identifier
    }
}
