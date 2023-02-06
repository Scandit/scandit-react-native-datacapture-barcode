/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

#import <React/RCTViewManager.h>

@interface RCT_EXTERN_REMAP_MODULE (RNTSparkScanView, RNTSDCSparkScanViewManager, RCTViewManager)

RCT_EXTERN_METHOD(registerListenerForViewEvents)

RCT_EXTERN_METHOD(unregisterListenerForViewEvents)

RCT_EXTERN_METHOD(create
                  : (nonnull NSNumber *)reactTag JSONString
                  : (nonnull NSString *)JSONString resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(update
                  : (nonnull NSNumber *)reactTag brush
                  : (nonnull NSString *)JSONString resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(startScanning
                  : (nonnull NSNumber *)reactTag resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(stopScanning
                  : (nonnull NSNumber *)reactTag resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(emitFeedback
                  : (nonnull NSNumber *)reactTag arguments
                  : (nonnull NSString *)arguments resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(prepareScanning
                  : (nonnull NSNumber *)reactTag resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(stopScanning
                  : (nonnull NSNumber *)reactTag resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

@end
