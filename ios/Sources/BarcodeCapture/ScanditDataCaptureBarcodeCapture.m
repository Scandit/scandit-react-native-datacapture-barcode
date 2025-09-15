#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE (ScanditDataCaptureBarcodeCapture, RCTEventEmitter)

RCT_EXTERN_METHOD(finishBarcodeCaptureDidUpdateSession : (NSDictionary *)data)

RCT_EXTERN_METHOD(finishBarcodeCaptureDidScan : (NSDictionary *)data)

RCT_EXTERN_METHOD(registerBarcodeCaptureListenerForEvents : (NSDictionary *)data)

RCT_EXTERN_METHOD(unregisterBarcodeCaptureListenerForEvents : (NSDictionary *)data)

RCT_EXTERN_METHOD(resetBarcodeCaptureSession
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setBarcodeCaptureModeEnabledState : (NSDictionary *)data)

RCT_EXTERN_METHOD(updateBarcodeCaptureOverlay
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateBarcodeCaptureMode
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(applyBarcodeCaptureModeSettings
                  : (NSDictionary *)data resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)
@end
