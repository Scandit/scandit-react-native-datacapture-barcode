/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTRootView.h>
#import "ScanditDataCaptureBarcode.h"
#import "ScanditDataCaptureBarcode-Swift.h"

// Forward declare and import the shared method queue from Core module
// The actual implementation is in ScanditDataCaptureCore Swift module
@interface SDCSharedMethodQueue : NSObject
+ (dispatch_queue_t)queue;
@end

/// Old Architecture (Paper/Bridge) adapter for the Barcode native module.
/// Inherits from RCTEventEmitter and exports methods via RCT_EXPORT_METHOD macros.
@implementation NativeScanditDataCaptureBarcode {
    ScanditDataCaptureBarcodeImpl *_impl;
}

RCT_EXPORT_MODULE(ScanditDataCaptureBarcode)

- (instancetype)init {
    if (self = [super init]) {
        _impl = [[ScanditDataCaptureBarcodeImpl alloc] init];
    }
    return self;
}

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

- (void)initialize {
    [_impl setupWith:self];
}

- (dispatch_queue_t)methodQueue {
    return [SDCSharedMethodQueue queue];
}

- (NSDictionary *)constantsToExport {
    return [self getConstantsOnMainQueue];
}

- (NSDictionary *)getConstants {
    return [self getConstantsOnMainQueue];
}

- (NSDictionary *)getConstantsOnMainQueue {
    __block NSDictionary *constants;
    if ([NSThread isMainThread]) {
        constants = [_impl getConstants];
    } else {
        dispatch_sync(dispatch_get_main_queue(), ^{
            constants = [_impl getConstants];
        });
    }
    return constants;
}

- (NSArray<NSString *> *)supportedEvents {
    return [_impl supportedEvents];
}

- (void)invalidate {
    [super invalidate];
    [_impl invalidate];
}

// MARK: - Native Module Methods

RCT_EXPORT_METHOD(executeBarcode
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject) {
    [_impl executeBarcode:data resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(createSparkScanView
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject) {
    [_impl createSparkScanViewWithData:data resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(createBarcodeCountView
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject) {
    [_impl createBarcodeCountViewWithData:data resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(removeBarcodeCountView
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject) {
    [_impl removeBarcodeCountViewWithData:data resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(setBarcodeCountViewPositionAndSize
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject) {
    [_impl setBarcodeCountViewPositionAndSizeWithData:data resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(createPickView
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject) {
    [_impl createPickViewWithData:data resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(removePickView
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject) {
    [_impl removePickViewWithData:data resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(setPickViewPositionAndSize
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject) {
    [_impl setPickViewPositionAndSizeWithData:data resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(createFindView
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject) {
    [_impl createFindViewWithData:data resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(removeFindView
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject) {
    [_impl removeFindViewWithData:data resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(createBarcodeArView
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject) {
    [_impl createBarcodeArViewWithData:data resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(removeBarcodeArView
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject) {
    [_impl removeBarcodeArViewWithData:data resolve:resolve reject:reject];
}

@end
