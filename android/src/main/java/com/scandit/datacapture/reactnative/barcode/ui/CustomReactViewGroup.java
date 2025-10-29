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
        // Only dispatch DOWN, UP, and CANCEL - skip MOVE to avoid gesture cancellation
        if ( ev.getActionMasked() != MotionEvent.ACTION_MOVE) {
            this.dispatchJSTouchEvent(ev);
        }

        // Never intercept - always let children handle
        return false;
    }

    @Override
    public boolean onTouchEvent(MotionEvent ev) {
        if (ev.getActionMasked() == MotionEvent.ACTION_MOVE) {
            this.dispatchJSTouchEvent(ev);
        }
        return super.onTouchEvent(ev);
    }

    private void dispatchJSTouchEvent(MotionEvent event) {
        if (event == null) return;

        // Use the parent's tag (SparkScanCoordinatorLayout) since that's the managed view
        // CustomReactViewGroup is not in Fabric's shadow tree
        int reactTag = getParent() != null ? ((android.view.View) getParent()).getId() : (Integer) this.getTag();

        EventDispatcher eventDispatcher = UIManagerHelper.getEventDispatcherForReactTag(
                this.reactContext,
                reactTag
        );

        if (eventDispatcher != null && jsTouchDispatcher != null) {
            // Use 3-parameter version for Fabric support
            jsTouchDispatcher.handleTouchEvent(event, eventDispatcher);
        }
    }
}
