/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2026- Scandit AG. All rights reserved.
 */

#import "ScanditDataCaptureBarcodeViews.h"

/// Old Architecture stubs for the Fabric containers bridge classes.
/// Return empty arrays since Fabric views are not used in old architecture.

@implementation RCTFabricSparkScanViewContainers
+ (NSArray<UIView *> *)containers {
    return @[];
}
@end

@implementation RCTFabricBarcodeCountViewContainers
+ (NSArray<UIView *> *)containers {
    return @[];
}
@end

@implementation RCTFabricBarcodePickViewContainers
+ (NSArray<UIView *> *)containers {
    return @[];
}
@end

@implementation RCTFabricBarcodeFindViewContainers
+ (NSArray<UIView *> *)containers {
    return @[];
}
@end

@implementation RCTFabricBarcodeArViewContainers
+ (NSArray<UIView *> *)containers {
    return @[];
}
@end
