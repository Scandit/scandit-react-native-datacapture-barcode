package com.scandit.datacapture.reactnative.barcode.ui

import android.annotation.SuppressLint
import android.view.MotionEvent
import com.facebook.react.bridge.ReactContext
import com.facebook.react.uimanager.JSTouchDispatcher
import com.facebook.react.uimanager.UIManagerModule
import com.facebook.react.views.view.ReactViewGroup

@SuppressLint("ViewConstructor")
class CustomReactViewGroup(
    private val reactContext: ReactContext
) : ReactViewGroup(reactContext) {
    private var jsTouchDispatcher: JSTouchDispatcher? = null

    override fun onAttachedToWindow() {
        super.onAttachedToWindow()
        jsTouchDispatcher = JSTouchDispatcher(this)
    }

    override fun onDetachedFromWindow() {
        jsTouchDispatcher = null
        super.onDetachedFromWindow()
    }

    override fun onInterceptTouchEvent(ev: MotionEvent?): Boolean {
        this.dispatchJSTouchEvent(ev)
        return super.onInterceptTouchEvent(ev)
    }

    override fun onTouchEvent(ev: MotionEvent?): Boolean {
        this.dispatchJSTouchEvent(ev)
        super.onTouchEvent(ev)
        return true
    }

    private fun dispatchJSTouchEvent(event: MotionEvent?) {
        if (event == null) return
        val eventDispatcher = reactContext.getNativeModule(
            UIManagerModule::class.java
        )?.eventDispatcher
        if (eventDispatcher != null) {
            jsTouchDispatcher?.handleTouchEvent(event, eventDispatcher)
        }
    }
}
