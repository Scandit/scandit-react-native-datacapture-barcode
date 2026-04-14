/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2025- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.ui;

import android.annotation.SuppressLint;
import android.view.MotionEvent;
import android.view.ViewConfiguration;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.JSTouchDispatcher;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.views.view.ReactViewGroup;

@SuppressLint("ViewConstructor")
class CustomReactViewGroup extends ReactViewGroup {
    private JSTouchDispatcher jsTouchDispatcher;
    private final ReactContext reactContext;
    private boolean hasDispatchedDown = false;
    private boolean hasCanceledGesture = false;
    private float initialX = 0;
    private float initialY = 0;
    private final int touchSlop;

    public CustomReactViewGroup(ReactContext context) {
        super(context);
        this.reactContext = context;
        this.touchSlop = ViewConfiguration.get(context).getScaledTouchSlop();
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
    public boolean dispatchTouchEvent(MotionEvent ev) {
        int action = ev.getActionMasked();
        
        if (action == MotionEvent.ACTION_DOWN) {
            hasDispatchedDown = true;
            hasCanceledGesture = false;
            initialX = ev.getRawX();
            initialY = ev.getRawY();
            this.dispatchJSTouchEvent(ev);
        } else if (action == MotionEvent.ACTION_MOVE) {
            // When scrolling starts, React Native's JS needs to know the gesture was canceled
            // to clear cached touch targets. Otherwise, after scrolling, taps on new items
            // will incorrectly trigger the original item that was first touched.
            // We use touchSlop to distinguish intentional scrolls from accidental finger jitter.
            if (hasDispatchedDown && !hasCanceledGesture) {
                float deltaX = Math.abs(ev.getRawX() - initialX);
                float deltaY = Math.abs(ev.getRawY() - initialY);
                
                if (deltaX > touchSlop || deltaY > touchSlop) {
                    MotionEvent cancelEvent = MotionEvent.obtain(ev);
                    cancelEvent.setAction(MotionEvent.ACTION_CANCEL);
                    this.dispatchJSTouchEvent(cancelEvent);
                    cancelEvent.recycle();
                    hasCanceledGesture = true;
                }
            }
        } else if (action == MotionEvent.ACTION_UP || action == MotionEvent.ACTION_CANCEL) {
            if (!hasCanceledGesture) {
                this.dispatchJSTouchEvent(ev);
            }
            hasDispatchedDown = false;
            hasCanceledGesture = false;
        }
        
        return super.dispatchTouchEvent(ev);
    }

    @Override
    public boolean onInterceptTouchEvent(MotionEvent ev) {
        // Never intercept - always let children (FlatList, TouchableOpacity, etc.) handle touches.
        // This view acts as a passive observer, dispatching events to React Native's JS layer
        // without interfering with native Android touch handling.
        // All observation logic is in dispatchTouchEvent() which sees every touch event.
        return false;
    }

    @Override
    public boolean onTouchEvent(MotionEvent ev) {
        // All touch observation is handled in dispatchTouchEvent()
        // This method only handles fallback for events not consumed by children
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
            jsTouchDispatcher.handleTouchEvent(event, eventDispatcher);
        }
    }
}
