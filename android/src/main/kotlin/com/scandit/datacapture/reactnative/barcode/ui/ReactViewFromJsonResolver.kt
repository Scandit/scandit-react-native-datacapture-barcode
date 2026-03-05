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
        val activity = reactContext.currentActivity ?: return null
        return nativeViewFromJson(activity, viewJson)
    }
}
