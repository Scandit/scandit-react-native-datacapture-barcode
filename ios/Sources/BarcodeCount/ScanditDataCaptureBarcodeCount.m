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

RCT_EXTERN_METHOD(registerBarcodeCountViewListener
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(unregisterBarcodeCountViewListener
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(registerBarcodeCountViewUiListener
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(unregisterBarcodeCountViewUiListener
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(createBarcodeCountView
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateBarcodeCountView
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(clearBarcodeCountHighlights
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateBarcodeCountMode
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(finishBarcodeCountBrushForRecognizedBarcode
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(finishBarcodeCountBrushForRecognizedBarcodeNotInList
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(finishBarcodeCountOnScan)

RCT_EXTERN_METHOD(resetBarcodeCountSession
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(resetBarcodeCount
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(startBarcodeCountScanningPhase
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(endBarcodeCountScanningPhase
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setBarcodeCountCaptureList
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(getBarcodeCountSpatialMap
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(getBarcodeCountSpatialMapWithHints
                  : (nonnull NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setBarcodeCountModeEnabledState : (nonnull NSDictionary *)data)

RCT_EXTERN_METHOD(updateBarcodeCountFeedback
                  : (nonnull NSString *)feedbackJson resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)
@end
