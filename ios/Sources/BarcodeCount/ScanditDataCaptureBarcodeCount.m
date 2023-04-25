/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE (ScanditDataCaptureBarcodeCount, RCTEventEmitter)

RCT_EXTERN_METHOD(registerBarcodeCountListener)

RCT_EXTERN_METHOD(unregisterBarcodeCountListener)

RCT_EXTERN_METHOD(registerBarcodeCountViewListener)

RCT_EXTERN_METHOD(unregisterBarcodeCountViewListener)

RCT_EXTERN_METHOD(registerBarcodeCountViewUiListener)

RCT_EXTERN_METHOD(unregisterBarcodeCountViewUiListener)

RCT_EXTERN_METHOD(createView
                  : (nonnull NSNumber *)reactTag JSONString
                  : (nonnull NSString *)JSONString resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateView
                  : (nonnull NSNumber *)reactTag brush
                  : (nonnull NSString *)JSONString resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(clearHighlights
                  : (nonnull NSNumber *)reactTag brush
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateMode
                  : (nonnull NSString *)JSONString resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(finishBrushForRecognizedBarcodeCallback : (nullable NSString *)jsonString)

RCT_EXTERN_METHOD(finishBrushForUnrecognizedBarcodeCallback : (nullable NSString *)jsonString)

RCT_EXTERN_METHOD(finishBrushForRecognizedBarcodeNotInListCallback
                  : (nullable NSString *)jsonString)

RCT_EXTERN_METHOD(finishOnScan)

RCT_EXTERN_METHOD(resetSession
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(resetBarcodeCount
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(startScanningPhase
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(endScanningPhase
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setBarcodeCountCaptureList
                  : (nonnull NSString *)jsonString resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

@end
