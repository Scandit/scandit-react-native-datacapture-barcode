/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE (ScanditDataCaptureSparkScan, RCTEventEmitter)

RCT_EXTERN_METHOD(finishSparkScanDidUpdateSession : (NSDictionary *)data)

RCT_EXTERN_METHOD(finishSparkScanDidScan : (NSDictionary *)data)

RCT_EXTERN_METHOD(registerSparkScanListenerForEvents : (NSDictionary *)data)

RCT_EXTERN_METHOD(unregisterSparkScanListenerForEvents : (NSDictionary *)data)

RCT_EXTERN_METHOD(resetSparkScanSession
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(registerSparkScanViewListenerEvents : (NSDictionary *)data)

RCT_EXTERN_METHOD(unregisterSparkScanViewListenerEvents : (NSDictionary *)data)

RCT_EXTERN_METHOD(createSparkScanView
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateSparkScanView
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateSparkScanMode
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(startSparkScanViewScanning
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(stopSparkScanViewScanning
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(prepareSparkScanViewScanning
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(pauseSparkScanViewScanning
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(disposeSparkScanView
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(showSparkScanViewToast
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(registerSparkScanFeedbackDelegateForEvents
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(unregisterSparkScanFeedbackDelegateForEvents
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(submitSparkScanFeedbackForBarcode
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setSparkScanModeEnabledState
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(showSparkScanView
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(hideSparkScanView
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)
@end
