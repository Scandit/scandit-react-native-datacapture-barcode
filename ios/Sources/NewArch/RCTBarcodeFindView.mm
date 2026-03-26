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

@interface RCTBarcodeFindViewWrapper : UIView
@property (nonatomic, assign) BOOL isFrameSet;
@property (nonatomic, copy) void (^postFrameSetAction)(void);
- (void)cleanupForRecycle;
@end

@implementation RCTBarcodeFindViewWrapper

- (void)addSubview:(UIView *)view {
    [super addSubview:view];
    if ([NSStringFromClass([view class]) containsString:@"BarcodeFindView"]) {
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

@interface RCTBarcodeFindView : RCTViewComponentView
@end

@implementation RCTBarcodeFindView {
    RCTBarcodeFindViewWrapper *_containerView;
    BOOL _needsContainerRegistration;
}

static NSMutableArray<RCTBarcodeFindViewWrapper *> *_containers;

+ (void)initialize {
    if (self == [RCTBarcodeFindView class]) {
        _containers = [NSMutableArray array];
    }
}

+ (NSMutableArray<RCTBarcodeFindViewWrapper *> *)containers {
    return _containers;
}

- (instancetype)initWithFrame:(CGRect)frame {
    if (self = [super initWithFrame:frame]) {
        static const auto defaultProps = std::make_shared<const RNTBarcodeFindViewProps>();
        _props = defaultProps;

        _containerView = [[RCTBarcodeFindViewWrapper alloc] init];
        _containerView.autoresizingMask = UIViewAutoresizingFlexibleWidth |
                                          UIViewAutoresizingFlexibleHeight;
        [RCTBarcodeFindView.containers addObject:_containerView];
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
        [RCTBarcodeFindView.containers addObject:_containerView];
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

    NSUInteger index = [RCTBarcodeFindView.containers indexOfObject:_containerView];
    if (index != NSNotFound) {
        [RCTBarcodeFindView.containers removeObjectAtIndex:index];
    }
    _needsContainerRegistration = YES;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider {
    return concreteComponentDescriptorProvider<RNTBarcodeFindViewComponentDescriptor>();
}

@end

Class<RCTComponentViewProtocol> RNTBarcodeFindViewCls(void) { return RCTBarcodeFindView.class; }

#import "ScanditDataCaptureBarcodeViews.h"

@implementation RCTFabricBarcodeFindViewContainers

+ (NSArray<UIView *> *)containers {
    return RCTBarcodeFindView.containers;
}

@end
