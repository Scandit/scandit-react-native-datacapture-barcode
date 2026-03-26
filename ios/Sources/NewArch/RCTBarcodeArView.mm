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

@interface RCTBarcodeArViewWrapper : UIView
@property (nonatomic, assign) BOOL isFrameSet;
@property (nonatomic, copy) void (^postFrameSetAction)(void);
- (void)cleanupForRecycle;
@end

@implementation RCTBarcodeArViewWrapper

- (void)addSubview:(UIView *)view {
    [super addSubview:view];
    if ([NSStringFromClass([view class]) containsString:@"BarcodeArView"]) {
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

@interface RCTBarcodeArView : RCTViewComponentView
@end

@implementation RCTBarcodeArView {
    RCTBarcodeArViewWrapper *_containerView;
    BOOL _needsContainerRegistration;
}

static NSMutableArray<RCTBarcodeArViewWrapper *> *_containers;

+ (void)initialize {
    if (self == [RCTBarcodeArView class]) {
        _containers = [NSMutableArray array];
    }
}

+ (NSMutableArray<RCTBarcodeArViewWrapper *> *)containers {
    return _containers;
}

- (instancetype)initWithFrame:(CGRect)frame {
    if (self = [super initWithFrame:frame]) {
        static const auto defaultProps = std::make_shared<const RNTBarcodeArViewProps>();
        _props = defaultProps;

        _containerView = [[RCTBarcodeArViewWrapper alloc] init];
        _containerView.autoresizingMask = UIViewAutoresizingFlexibleWidth |
                                          UIViewAutoresizingFlexibleHeight;
        [RCTBarcodeArView.containers addObject:_containerView];
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
        [RCTBarcodeArView.containers addObject:_containerView];
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

    NSUInteger index = [RCTBarcodeArView.containers indexOfObject:_containerView];
    if (index != NSNotFound) {
        [RCTBarcodeArView.containers removeObjectAtIndex:index];
    }
    _needsContainerRegistration = YES;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider {
    return concreteComponentDescriptorProvider<RNTBarcodeArViewComponentDescriptor>();
}

@end

Class<RCTComponentViewProtocol> RNTBarcodeArViewCls(void) { return RCTBarcodeArView.class; }

#import "ScanditDataCaptureBarcodeViews.h"

@implementation RCTFabricBarcodeArViewContainers

+ (NSArray<UIView *> *)containers {
    return RCTBarcodeArView.containers;
}

@end
