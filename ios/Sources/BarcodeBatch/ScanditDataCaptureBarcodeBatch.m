#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE (ScanditDataCaptureBarcodeBatch, RCTEventEmitter)

RCT_EXTERN_METHOD(finishDidUpdateSessionCallback : (BOOL)enabled)

RCT_EXTERN_METHOD(setBrushForTrackedBarcode
                  : (NSString *)brushJSON barcodeId
                  : (NSInteger)barcodeId resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(clearTrackedBarcodeBrushes
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(finishBrushForTrackedBarcodeCallback : (NSString *)brushJSON)

RCT_EXTERN_METHOD(setViewForTrackedBarcode
                  : (NSString *)viewJSON trackedBarcodeId
                  : (NSInteger)trackedBarcodeId resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setAnchorForTrackedBarcode
                  : (NSString *)anchorJSON trackedBarcodeId
                  : (NSInteger)trackedBarcodeId resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setOffsetForTrackedBarcode
                  : (NSString *)offsetJSON trackedBarcodeId
                  : (NSInteger)trackedBarcodeId resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(clearTrackedBarcodeViews
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(finishViewForTrackedBarcodeCallback : (NSString *)viewJSON)

RCT_EXTERN_METHOD(finishAnchorForTrackedBarcodeCallback : (NSString *)anchorJSON)

RCT_EXTERN_METHOD(finishOffsetForTrackedBarcodeCallback : (NSString *)offsetJSON)

RCT_EXTERN_METHOD(registerListenerForEvents)

RCT_EXTERN_METHOD(unregisterListenerForEvents)

RCT_EXTERN_METHOD(registerListenerForAdvancedOverlayEvents)

RCT_EXTERN_METHOD(unregisterListenerForAdvancedOverlayEvents)

RCT_EXTERN_METHOD(registerListenerForBasicOverlayEvents)

RCT_EXTERN_METHOD(unregisterListenerForBasicOverlayEvents)

RCT_EXTERN_METHOD(resetSession
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setModeEnabledState : (BOOL)enabled)

RCT_EXTERN_METHOD(updateBarcodeBatchBasicOverlay
                  : (NSString *)overlayJson resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateBarcodeBatchAdvancedOverlay
                  : (NSString *)overlayJson resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateBarcodeBatchMode
                  : (NSString *)modeJson resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(applyBarcodeBatchModeSettings
                  : (NSString *)modeSettingsJson resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

@end
