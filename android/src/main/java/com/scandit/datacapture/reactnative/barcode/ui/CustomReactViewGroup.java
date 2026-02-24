/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2025- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui;

import android.annotation.SuppressLint;
import android.view.MotionEvent;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.JSTouchDispatcher;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.common.UIManagerType;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.views.view.ReactViewGroup;

@SuppressLint("ViewConstructor")
class CustomReactViewGroup extends ReactViewGroup {
    private JSTouchDispatcher jsTouchDispatcher;
    private final ReactContext reactContext;

    public CustomReactViewGroup(ReactContext context) {
        super(context);
        this.reactContext = context;
    }

    @Override
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        jsTouchDispatcher = new JSTouchDispatcher(this);
    }

    @Override
    protected void onDetachedFromWindow() {
        jsTouchDispatcher = null;
        super.onDetachedFromWindow();
    }

    @Override
    public boolean onInterceptTouchEvent(MotionEvent ev) {
        this.dispatchJSTouchEvent(ev);
        return super.onInterceptTouchEvent(ev);
    }

    @Override
    public boolean onTouchEvent(MotionEvent ev) {
        this.dispatchJSTouchEvent(ev);
        super.onTouchEvent(ev);
        return true;
    }

    private void dispatchJSTouchEvent(MotionEvent event) {
        if (event == null) return;
        EventDispatcher eventDispatcher = UIManagerHelper.getEventDispatcher(
            this.reactContext,
            UIManagerType.DEFAULT
        );

        if (eventDispatcher != null && jsTouchDispatcher != null) {
            jsTouchDispatcher.handleTouchEvent(event, eventDispatcher);
        }
    }
}
