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
#import "ScanditDataCaptureBarcode-Swift.h"

using namespace facebook::react;

@interface RCTBarcodePickViewWrapper : UIView
@property (nonatomic, assign) BOOL isFrameSet;
@property (nonatomic, copy) void (^postFrameSetAction)(void);
- (void)cleanupForRecycle;
@end

@implementation RCTBarcodePickViewWrapper

- (void)addSubview:(UIView *)view {
    [super addSubview:view];
    if ([NSStringFromClass([view class]) containsString:@"BarcodePickView"]) {
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

@interface RCTBarcodePickView : RCTViewComponentView
@end

@implementation RCTBarcodePickView {
    RCTBarcodePickViewWrapper *_containerView;
    BOOL _needsContainerRegistration;
}

static NSMutableArray<RCTBarcodePickViewWrapper *> *_containers;

+ (void)initialize {
    if (self == [RCTBarcodePickView class]) {
        _containers = [NSMutableArray array];
    }
}

+ (NSMutableArray<RCTBarcodePickViewWrapper *> *)containers {
    return _containers;
}

- (instancetype)initWithFrame:(CGRect)frame {
    if (self = [super initWithFrame:frame]) {
        static const auto defaultProps = std::make_shared<const RNTBarcodePickViewProps>();
        _props = defaultProps;

        _containerView = [[RCTBarcodePickViewWrapper alloc] init];
        _containerView.autoresizingMask = UIViewAutoresizingFlexibleWidth |
                                          UIViewAutoresizingFlexibleHeight;
        [RCTBarcodePickView.containers addObject:_containerView];
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
        [RCTBarcodePickView.containers addObject:_containerView];
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

    NSUInteger index = [RCTBarcodePickView.containers indexOfObject:_containerView];
    if (index != NSNotFound) {
        [RCTBarcodePickView.containers removeObjectAtIndex:index];
    }
    _needsContainerRegistration = YES;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider {
    return concreteComponentDescriptorProvider<RNTBarcodePickViewComponentDescriptor>();
}

@end

Class<RCTComponentViewProtocol> RNTBarcodePickViewCls(void) { return RCTBarcodePickView.class; }

#import "ScanditDataCaptureBarcodeViews.h"

@implementation RCTFabricBarcodePickViewContainers

+ (NSArray<UIView *> *)containers {
    return RCTBarcodePickView.containers;
}

@end
