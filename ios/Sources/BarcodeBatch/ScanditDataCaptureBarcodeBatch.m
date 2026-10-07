#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE (ScanditDataCaptureBarcodeBatch, RCTEventEmitter)

RCT_EXTERN_METHOD(registerBarcodeBatchListenerForEvents : (NSDictionary *)data)

RCT_EXTERN_METHOD(unregisterBarcodeBatchListenerForEvents : (NSDictionary *)data)

RCT_EXTERN_METHOD(registerListenerForBasicOverlayEvents : (NSDictionary *)data)

RCT_EXTERN_METHOD(unregisterListenerForBasicOverlayEvents : (NSDictionary *)data)

RCT_EXTERN_METHOD(registerListenerForAdvancedOverlayEvents : (NSDictionary *)data)

RCT_EXTERN_METHOD(unregisterListenerForAdvancedOverlayEvents : (NSDictionary *)data)

RCT_EXTERN_METHOD(setBrushForTrackedBarcode
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(clearTrackedBarcodeBrushes
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(finishBarcodeBatchDidUpdateSessionCallback : (NSDictionary *)data)

RCT_EXTERN_METHOD(setViewForTrackedBarcode
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateSizeOfTrackedBarcodeView
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setAnchorForTrackedBarcode
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setOffsetForTrackedBarcode
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(clearTrackedBarcodeViews
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(resetBarcodeBatchSession
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setBarcodeBatchModeEnabledState : (NSDictionary *)data)

RCT_EXTERN_METHOD(updateBarcodeBatchBasicOverlay
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateBarcodeBatchAdvancedOverlay
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateBarcodeBatchMode
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(applyBarcodeBatchModeSettings
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)
@end
