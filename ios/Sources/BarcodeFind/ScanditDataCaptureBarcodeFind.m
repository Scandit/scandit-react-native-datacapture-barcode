/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE (ScanditDataCaptureBarcodeFind, RCTEventEmitter)

RCT_EXTERN_METHOD(setBarcodeFindModeEnabledState
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(createFindView
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(removeFindView
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(showFindView
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(hideFindView
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateFindView
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateFindMode
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(registerBarcodeFindListener
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(unregisterBarcodeFindListener
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(registerBarcodeFindViewListener
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(unregisterBarcodeFindViewListener
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(barcodeFindViewOnPause
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(barcodeFindViewOnResume
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(barcodeFindSetItemList
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(barcodeFindViewStopSearching
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(barcodeFindViewStartSearching
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(barcodeFindViewPauseSearching
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(barcodeFindModeStart
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(barcodeFindModePause
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(barcodeFindModeStop
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setModeEnabledState : (nonnull NSDictionary *)data)

RCT_EXTERN_METHOD(setBarcodeTransformer
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(unsetBarcodeTransformer
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(submitBarcodeFindTransformerResult
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateBarcodeFindFeedback
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)
@end
