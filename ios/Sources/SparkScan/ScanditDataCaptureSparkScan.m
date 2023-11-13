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

@end
