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
import com.scandit.datacapture.frameworks.barcode.find.BarcodeFindModule
import com.scandit.datacapture.frameworks.core.result.NoopFrameworksResult
import com.scandit.datacapture.reactnative.core.ui.FragmentBase

class BarcodeFindViewFragment(
    private val barcodeFindModule: BarcodeFindModule,
    private val viewJson: String
) : FragmentBase() {

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View = FrameLayout(requireContext()).also {
        barcodeFindModule.addViewToContainer(it, viewJson, NoopFrameworksResult())
    }

    override fun onPause() {
        super.onPause()
        barcodeFindModule.viewOnPause(NoopFrameworksResult())
    }

    override fun onResume() {
        super.onResume()
        barcodeFindModule.viewOnResume(NoopFrameworksResult())
    }

    override fun onDestroyView() {
        super.onDestroyView()
        barcodeFindModule.viewDisposed()
    }
}
