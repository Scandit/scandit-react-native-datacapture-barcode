#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE (ScanditDataCaptureBarcodeGenerator, RCTEventEmitter)

RCT_EXTERN_METHOD(create
                  : (NSString *)barcodeGeneratorJson resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(disposeGenerator
                  : (NSString *)generatorId resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(generateFromBase64EncodedData
                  : (NSString *)generatorId data
                  : (NSString *)data imageWidth
                  : (NSInteger *)imageWidth resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(generate
                  : (NSString *)generatorId text
                  : (NSString *)text imageWidth
                  : (NSInteger *)imageWidth resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

@end
