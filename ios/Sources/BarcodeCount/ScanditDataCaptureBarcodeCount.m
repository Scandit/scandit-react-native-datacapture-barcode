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
                  : (nonnull NSString *)JSONString resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(clearHighlights
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateMode
                  : (nonnull NSString *)JSONString resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(finishBrushForRecognizedBarcodeCallback
                  : (nonnull NSNumber *)reactTag jsonString
                  : (nullable NSString *)jsonString trackedBarcodeId
                  : (NSInteger)trackedBarcodeId resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(finishBrushForUnrecognizedBarcodeCallback
                  : (nonnull NSNumber *)reactTag jsonString
                  : (nullable NSString *)jsonString trackedBarcodeId
                  : (NSInteger)trackedBarcodeId resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(finishBrushForRecognizedBarcodeNotInListCallback
                  : (nonnull NSNumber *)reactTag jsonString
                  : (nullable NSString *)jsonString trackedBarcodeId
                  : (NSInteger)trackedBarcodeId resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

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

RCT_EXTERN_METHOD(getSpatialMap
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(getSpatialMapWithHints
                  : (NSInteger)expectedNumberOfRows expectedNumberOfColumns
                  : (NSInteger)expectedNumberOfColumns resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setModeEnabledState : (BOOL)enabled)

RCT_EXTERN_METHOD(updateBarcodeCountFeedback
                  : (nonnull NSString *)feedbackJson resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

@end
