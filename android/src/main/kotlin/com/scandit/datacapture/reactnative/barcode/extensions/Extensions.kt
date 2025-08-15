/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2025- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.extensions

import android.view.Choreographer
import android.view.View
import java.util.WeakHashMap
import kotlin.math.PI
import kotlin.math.cos

private object ViewSizeAnimator {
    private val activeAnimations = WeakHashMap<View, Boolean>()

    fun isAnimating(view: View): Boolean = activeAnimations[view] == true
    fun setAnimating(view: View, animating: Boolean) {
        if (animating) {
            activeAnimations[view] = true
        } else {
            activeAnimations.remove(view)
        }
    }
}

fun View.animateSizeTo(
    targetWidth: Int,
    targetHeight: Int,
    duration: Long = 500L
) {
    if (ViewSizeAnimator.isAnimating(this)) {
        // Animation in progress, ignore request
        return
    }

    ViewSizeAnimator.setAnimating(this, true)

    val startTime = System.nanoTime()
    val startWidth = width
    val startHeight = height
    val choreographer = Choreographer.getInstance()

    @Suppress("UNUSED_PARAMETER")
    fun frameCallback(frameTimeNanos: Long) {
        val elapsed = (System.nanoTime() - startTime) / 1_000_000L
        val progress = (elapsed.toFloat() / duration).coerceIn(0f, 1f)
        val interpolated = 0.5f * (1 - cos(progress * PI)).toFloat() // ease-in-out

        val newWidth = startWidth + ((targetWidth - startWidth) * interpolated).toInt()
        val newHeight = startHeight + ((targetHeight - startHeight) * interpolated).toInt()

        layoutParams = layoutParams.apply {
            width = newWidth
            height = newHeight
        }
        requestLayout()

        if (progress < 1f) {
            choreographer.postFrameCallback(::frameCallback)
        } else {
            layoutParams = layoutParams.apply {
                width = targetWidth
                height = targetHeight
            }
            requestLayout()
            ViewSizeAnimator.setAnimating(this@animateSizeTo, false)
        }
    }

    choreographer.postFrameCallback(::frameCallback)
}
