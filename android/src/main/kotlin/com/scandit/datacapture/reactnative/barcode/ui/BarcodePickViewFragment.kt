/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2024- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.FrameLayout
import com.scandit.datacapture.frameworks.barcode.pick.BarcodePickModule
import com.scandit.datacapture.frameworks.core.result.NoopFrameworksResult
import com.scandit.datacapture.reactnative.core.ui.FragmentBase

class BarcodePickViewFragment(
    private val barcodePickModule: BarcodePickModule,
    private val viewJson: String
) : FragmentBase() {

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View = FrameLayout(requireContext()).also {
        barcodePickModule.addViewToContainer(it, viewJson, NoopFrameworksResult())
    }

    override fun onResume() {
        super.onResume()
        barcodePickModule.viewOnResume()
    }

    override fun onPause() {
        super.onPause()
        barcodePickModule.viewOnPause()
    }

    override fun onDestroyView() {
        barcodePickModule.viewOnDestroy()
        super.onDestroyView()
    }
}
