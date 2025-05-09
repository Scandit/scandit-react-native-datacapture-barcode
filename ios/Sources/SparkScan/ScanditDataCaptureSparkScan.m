/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE (ScanditDataCaptureSparkScan, RCTEventEmitter)

RCT_EXTERN_METHOD(finishDidUpdateSessionCallback : (BOOL)enabled)

RCT_EXTERN_METHOD(finishDidScanCallback : (BOOL)enabled)

RCT_EXTERN_METHOD(registerListenerForEvents)

RCT_EXTERN_METHOD(unregisterListenerForEvents)

RCT_EXTERN_METHOD(resetSession
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(registerListenerForViewEvents)

RCT_EXTERN_METHOD(unregisterListenerForViewEvents)

RCT_EXTERN_METHOD(create
                  : (nonnull NSNumber *)reactTag JSONString
                  : (nonnull NSString *)JSONString resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(update
                  : (nonnull NSNumber *)reactTag JSONString
                  : (nonnull NSString *)JSONString resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateMode
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

RCT_EXTERN_METHOD(prepareScanning
                  : (nonnull NSNumber *)reactTag resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(pauseScanning
                  : (nonnull NSNumber *)reactTag resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(disposeSparkScanView
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(showToast
                  : (nonnull NSString *)text resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(addFeedbackDelegate
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(removeFeedbackDelegate
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(submitSparkScanFeedbackForBarcode
                  : (nonnull NSString *)feedbackJson resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

@end
