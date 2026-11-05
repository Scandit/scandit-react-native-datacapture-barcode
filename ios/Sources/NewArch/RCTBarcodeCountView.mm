/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2026- Scandit AG. All rights reserved.
 */

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTFabricComponentsPlugins.h>
#import <React/RCTViewComponentView.h>
#import <ScanditReactNativeDatacaptureBarcodeSpec/ComponentDescriptors.h>
#import <ScanditReactNativeDatacaptureBarcodeSpec/Props.h>

#import "ScanditDataCaptureBarcode.h"
#if __has_include(<ScanditDataCaptureBarcode/ScanditDataCaptureBarcode-Swift.h>)
#import <ScanditDataCaptureBarcode/ScanditDataCaptureBarcode-Swift.h>
#else
#import "ScanditDataCaptureBarcode-Swift.h"
#endif

using namespace facebook::react;

@interface RCTBarcodeCountViewWrapper : UIView
@property (nonatomic, assign) BOOL isFrameSet;
@property (nonatomic, copy) void (^postFrameSetAction)(void);
- (void)cleanupForRecycle;
@end

@implementation RCTBarcodeCountViewWrapper

- (void)addSubview:(UIView *)view {
    [super addSubview:view];
    if ([NSStringFromClass([view class]) containsString:@"BarcodeCountView"]) {
        view.translatesAutoresizingMaskIntoConstraints = NO;
        [NSLayoutConstraint activateConstraints:@[
            [view.leadingAnchor constraintEqualToAnchor:self.leadingAnchor],
            [view.trailingAnchor constraintEqualToAnchor:self.trailingAnchor],
            [view.topAnchor constraintEqualToAnchor:self.topAnchor],
            [view.bottomAnchor constraintEqualToAnchor:self.bottomAnchor]
        ]];
    }
}

- (void)layoutSubviews {
    [super layoutSubviews];
    if (!CGRectEqualToRect(self.frame, CGRectZero) && !self.isFrameSet) {
        self.isFrameSet = YES;
        if (self.postFrameSetAction) {
            self.postFrameSetAction();
        }
    }
}

- (void)setPostFrameSetAction:(void (^)(void))postFrameSetAction {
    // A recycled Fabric container keeps its previous (non-zero) frame, so
    // layoutSubviews may never observe another zero->set transition. If the
    // frame is already usable, run the action immediately instead of parking
    // it forever (SDC-32484: white screen - the parked createView RPC never
    // replayed on a recycled view, wedging the JS attach path).
    if (postFrameSetAction != nil && !CGRectEqualToRect(self.frame, CGRectZero)) {
        self.isFrameSet = YES;
        _postFrameSetAction = nil;
        postFrameSetAction();
        return;
    }
    _postFrameSetAction = [postFrameSetAction copy];
}

- (void)didMoveToWindow {
    [super didMoveToWindow];
    // Drives the JS single-owner camera model (SDC-32484): attach -> the
    // hosting wrapper claims camera ownership, detach -> it releases.
    [SDCViewWindowEventsBridge notifyWindowChanged:self.tag attached:self.window != nil];
}

- (void)cleanupForRecycle {
    for (UIView *subview in self.subviews) {
        [subview removeFromSuperview];
    }
    self.isFrameSet = NO;
    self.postFrameSetAction = nil;
}

- (UIView *)hitTest:(CGPoint)point withEvent:(UIEvent *)event {
    UIView *view = [super hitTest:point withEvent:event];
    if (view == self) {
        return nil;
    }
    return view;
}

@end

@interface RCTBarcodeCountView : RCTViewComponentView
@end

@implementation RCTBarcodeCountView {
    RCTBarcodeCountViewWrapper *_containerView;
    BOOL _needsContainerRegistration;
}

static NSMutableArray<RCTBarcodeCountViewWrapper *> *_containers;

+ (void)initialize {
    if (self == [RCTBarcodeCountView class]) {
        _containers = [NSMutableArray array];
    }
}

+ (NSMutableArray<RCTBarcodeCountViewWrapper *> *)containers {
    return _containers;
}

- (instancetype)initWithFrame:(CGRect)frame {
    if (self = [super initWithFrame:frame]) {
        static const auto defaultProps = std::make_shared<const RNTBarcodeCountViewProps>();
        _props = defaultProps;

        _containerView = [[RCTBarcodeCountViewWrapper alloc] init];
        _containerView.autoresizingMask = UIViewAutoresizingFlexibleWidth |
                                          UIViewAutoresizingFlexibleHeight;
        [RCTBarcodeCountView.containers addObject:_containerView];
        self.contentView = _containerView;
    }
    return self;
}

- (void)setTag:(NSInteger)tag {
    [super setTag:tag];
    _containerView.tag = tag;
}

- (void)finalizeUpdates:(RNComponentViewUpdateMask)updateMask {
    [super finalizeUpdates:updateMask];
    if (_needsContainerRegistration) {
        _needsContainerRegistration = NO;
        [RCTBarcodeCountView.containers addObject:_containerView];
    }
}

- (void)didMoveToSuperview {
    [super didMoveToSuperview];

    if (self.superview == nil) {
        return;
    }

    [[SDCPendingFabricViewActions shared] executePendingActionFor:self.tag
                                                        container:_containerView];
}

- (void)prepareForRecycle {
    [super prepareForRecycle];
    [_containerView cleanupForRecycle];

    NSUInteger index = [RCTBarcodeCountView.containers indexOfObject:_containerView];
    if (index != NSNotFound) {
        [RCTBarcodeCountView.containers removeObjectAtIndex:index];
    }
    _needsContainerRegistration = YES;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider {
    return concreteComponentDescriptorProvider<RNTBarcodeCountViewComponentDescriptor>();
}

@end

Class<RCTComponentViewProtocol> RNTBarcodeCountViewCls(void) { return RCTBarcodeCountView.class; }

#import "ScanditDataCaptureBarcodeViews.h"

@implementation RCTFabricBarcodeCountViewContainers

+ (NSArray<UIView *> *)containers {
    return RCTBarcodeCountView.containers;
}

@end
