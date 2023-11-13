/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

#import <Foundation/Foundation.h>
#import <ScanditCaptureCore/SDCBase.h>
#import <ScanditBarcodeCapture/ScanditBarcodeCapture.h>

NS_ASSUME_NONNULL_BEGIN

NS_SWIFT_NAME(BarcodeSelectionBasicOverlay)
@interface SDCBarcodeSelectionBasicOverlay ()

- (void)setBrush:(SDCBrush *)brush forBarcode:(SDCBarcode *)barcode;

@end

NS_ASSUME_NONNULL_END
