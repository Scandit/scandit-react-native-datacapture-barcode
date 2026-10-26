/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2025- Scandit AG. All rights reserved.
 */

import android.view.View
import com.facebook.react.bridge.ReactApplicationContext
import com.scandit.datacapture.frameworks.core.ui.ViewFromJsonResolver
import com.scandit.datacapture.frameworks.core.utils.AdvancedOverlayViewCache
import com.scandit.datacapture.reactnative.barcode.batch.nativeViewFromJson

class ReactViewFromJsonResolver(
    private val reactContext: ReactApplicationContext,
) : ViewFromJsonResolver {
    override fun getView(
        advancedOverlayViewPool: AdvancedOverlayViewCache,
        viewIdentifier: String,
        viewJson: String?
    ): View? {
        // Reuse the pooled view for this tracked barcode if one already exists.
        // The barcode SDK re-requests the view for a tracked barcode on every
        // session update; recreating a fresh ScanditReactRootView (a full
        // startReactApplication / ReactSurface mount) each time makes the bubble
        // flicker. Mirror DefaultViewFromJsonResolver, which reuses by identifier
        // via the pool. The caller (BarcodeBatchModule.setViewForTrackedBarcode)
        // populates the pool after creation. See SDC-32212.
        advancedOverlayViewPool.getView(viewIdentifier)?.let { return it }

        val activity = reactContext.currentActivity ?: return null
        return nativeViewFromJson(activity, viewJson)
    }
}
