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
import com.scandit.datacapture.frameworks.barcode.count.BarcodeCountModule
import com.scandit.datacapture.reactnative.core.ui.FragmentBase

class BarcodeCountViewFragment(
    private val barcodeCountModule: BarcodeCountModule,
    private val viewJson: String
) : FragmentBase() {

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? = barcodeCountModule.getViewFromJson(viewJson)

    override fun onDestroyView() {
        super.onDestroyView()
        barcodeCountModule.disposeBarcodeCountView()
    }
}
