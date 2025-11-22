#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE (ScanditDataCaptureBarcodeCapture, RCTEventEmitter)

RCT_EXTERN_METHOD(finishBarcodeCaptureDidUpdateSession : (NSDictionary *)data)

RCT_EXTERN_METHOD(finishBarcodeCaptureDidScan : (NSDictionary *)data)

RCT_EXTERN_METHOD(registerBarcodeCaptureListenerForEvents)

RCT_EXTERN_METHOD(unregisterBarcodeCaptureListenerForEvents)

RCT_EXTERN_METHOD(resetBarcodeCaptureSession
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setBarcodeCaptureModeEnabledState : (NSDictionary *)data)

RCT_EXTERN_METHOD(updateBarcodeCaptureOverlay
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateBarcodeCaptureMode
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(applyBarcodeCaptureModeSettings
                  : (NSDictionary *)data resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)
@end
