/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2026- Scandit AG. All rights reserved.
 */

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

/// Bridge classes to expose Fabric (new arch) containers to Swift code.
/// These return containers from Fabric architecture when new arch is enabled,
/// or an empty array when using the legacy architecture.

@interface RCTFabricBarcodeCountViewContainers : NSObject
+ (NSArray<UIView *> *)containers;
@end

@interface RCTFabricBarcodePickViewContainers : NSObject
+ (NSArray<UIView *> *)containers;
@end

@interface RCTFabricSparkScanViewContainers : NSObject
+ (NSArray<UIView *> *)containers;
@end

@interface RCTFabricBarcodeArViewContainers : NSObject
+ (NSArray<UIView *> *)containers;
@end

@interface RCTFabricBarcodeFindViewContainers : NSObject
+ (NSArray<UIView *> *)containers;
@end
