/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>
#import <ScanditReactNativeDatacaptureBarcodeSpec/ScanditReactNativeDatacaptureBarcodeSpec.h>
#import <ReactCommon/RCTTurboModule.h>
#import "ScanditDataCaptureBarcode.h"
#import "ScanditDataCaptureBarcode-Swift.h"

// Forward declare and import the shared method queue from Core module
// The actual implementation is in ScanditDataCaptureCore Swift module
@interface SDCSharedMethodQueue : NSObject
+ (dispatch_queue_t)queue;
@end

/// New Architecture (TurboModule/Fabric) adapter for the Barcode native module.
/// Inherits from the generated spec base class and uses direct method declarations.
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
    __weak NativeScanditDataCaptureBarcode *weakSelf = self;
    SDCEventEmitBlock emitterBlock = ^(NSDictionary *_Nonnull payload) {
        __strong NativeScanditDataCaptureBarcode *strongSelf = weakSelf;
        if (strongSelf) {
            [strongSelf emitOnScanditEvent:payload];
        }
    };
    [_impl setupWith:nil turboEmitter:emitterBlock];
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
    [_impl invalidate];
}

// MARK: - Native Module Methods

- (void)executeBarcode:(NSDictionary *)data
               resolve:(RCTPromiseResolveBlock)resolve
                reject:(RCTPromiseRejectBlock)reject {
    [_impl executeBarcode:data resolve:resolve reject:reject];
}

- (void)createSparkScanView:(NSDictionary *)data
                    resolve:(RCTPromiseResolveBlock)resolve
                     reject:(RCTPromiseRejectBlock)reject {
    [_impl createSparkScanViewWithData:data resolve:resolve reject:reject];
}

- (void)createBarcodeCountView:(NSDictionary *)data
                       resolve:(RCTPromiseResolveBlock)resolve
                        reject:(RCTPromiseRejectBlock)reject {
    [_impl createBarcodeCountViewWithData:data resolve:resolve reject:reject];
}

- (void)removeBarcodeCountView:(NSDictionary *)data
                       resolve:(RCTPromiseResolveBlock)resolve
                        reject:(RCTPromiseRejectBlock)reject {
    [_impl removeBarcodeCountViewWithData:data resolve:resolve reject:reject];
}

- (void)setBarcodeCountViewPositionAndSize:(NSDictionary *)data
                                   resolve:(RCTPromiseResolveBlock)resolve
                                    reject:(RCTPromiseRejectBlock)reject {
    [_impl setBarcodeCountViewPositionAndSizeWithData:data resolve:resolve reject:reject];
}

- (void)createPickView:(NSDictionary *)data
               resolve:(RCTPromiseResolveBlock)resolve
                reject:(RCTPromiseRejectBlock)reject {
    [_impl createPickViewWithData:data resolve:resolve reject:reject];
}

- (void)removePickView:(NSDictionary *)data
               resolve:(RCTPromiseResolveBlock)resolve
                reject:(RCTPromiseRejectBlock)reject {
    [_impl removePickViewWithData:data resolve:resolve reject:reject];
}

- (void)setPickViewPositionAndSize:(NSDictionary *)data
                           resolve:(RCTPromiseResolveBlock)resolve
                            reject:(RCTPromiseRejectBlock)reject {
    [_impl setPickViewPositionAndSizeWithData:data resolve:resolve reject:reject];
}

- (void)createFindView:(NSDictionary *)data
               resolve:(RCTPromiseResolveBlock)resolve
                reject:(RCTPromiseRejectBlock)reject {
    [_impl createFindViewWithData:data resolve:resolve reject:reject];
}

- (void)removeFindView:(NSDictionary *)data
               resolve:(RCTPromiseResolveBlock)resolve
                reject:(RCTPromiseRejectBlock)reject {
    [_impl removeFindViewWithData:data resolve:resolve reject:reject];
}

- (void)createBarcodeArView:(NSDictionary *)data
                    resolve:(RCTPromiseResolveBlock)resolve
                     reject:(RCTPromiseRejectBlock)reject {
    [_impl createBarcodeArViewWithData:data resolve:resolve reject:reject];
}

- (void)removeBarcodeArView:(NSDictionary *)data
                    resolve:(RCTPromiseResolveBlock)resolve
                     reject:(RCTPromiseRejectBlock)reject {
    [_impl removeBarcodeArViewWithData:data resolve:resolve reject:reject];
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params {
    return std::make_shared<facebook::react::NativeScanditDataCaptureBarcodeSpecJSI>(params);
}

@end
