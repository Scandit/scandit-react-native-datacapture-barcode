/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

#import <Foundation/Foundation.h>
#import <React/RCTEventEmitter.h>

// Block type for TurboModule event emission (Swift interop)
// Defined unconditionally for Swift header generation, used only in new arch
typedef void (^SDCEventEmitBlock)(NSDictionary *_Nonnull payload);

#ifdef RCT_NEW_ARCH_ENABLED
#import <ScanditReactNativeDatacaptureBarcodeSpec/ScanditReactNativeDatacaptureBarcodeSpec.h>
#import <React/RCTInitializing.h>
#import <React/RCTInvalidating.h>
#endif

/// Native module for Scandit Data Capture Barcode.
/// This Obj-C++ class conforms to the TurboModule spec and delegates to
/// ScanditDataCaptureBarcodeImpl (Swift). Following the Adapter Pattern from React Native's
/// TurboModule Swift guide.
#ifdef RCT_NEW_ARCH_ENABLED
@interface NativeScanditDataCaptureBarcode
    : NativeScanditDataCaptureBarcodeSpecBase <NativeScanditDataCaptureBarcodeSpec, RCTInitializing,
                                               RCTInvalidating>
#else
@interface NativeScanditDataCaptureBarcode : RCTEventEmitter <RCTBridgeModule>
#endif
@end
