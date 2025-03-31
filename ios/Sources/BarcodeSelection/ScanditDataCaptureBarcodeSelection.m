#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE (ScanditDataCaptureBarcodeSelection, RCTEventEmitter)

RCT_EXTERN_METHOD(finishBarcodeSelectionDidUpdateSession : (NSDictionary *)data)

RCT_EXTERN_METHOD(finishBarcodeSelectionDidSelect : (NSDictionary *)data)

RCT_EXTERN_METHOD(registerBarcodeSelectionListenerForEvents)

RCT_EXTERN_METHOD(unregisterBarcodeSelectionListenerForEvents)

RCT_EXTERN_METHOD(getCountForBarcodeInBarcodeSelectionSession
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(increaseCountForBarcodes
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(unselectBarcodes
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setSelectBarcodeEnabled
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setAimedBarcodeBrushProvider
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(finishBrushForAimedBarcodeCallback
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(removeAimedBarcodeBrushProvider
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setTrackedBarcodeBrushProvider
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(finishBrushForTrackedBarcodeCallback
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(removeTrackedBarcodeBrushProvider
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(resetBarcodeSelectionSession
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(unfreezeCameraInBarcodeSelection
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(selectAimedBarcode
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(resetBarcodeSelection
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setTextForAimToSelectAutoHint
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setBarcodeSelectionModeEnabledState : (NSDictionary *)data)

RCT_EXTERN_METHOD(updateBarcodeSelectionBasicOverlay
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateBarcodeSelectionMode
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(applyBarcodeSelectionModeSettings
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateBarcodeSelectionFeedback
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

@end
