/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

#import <ScanditCaptureCore/SDCBase.h>
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

NS_SWIFT_NAME(SparkScanViewDefaults)
SDC_EXPORTED_SYMBOL
@interface SDCSparkScanViewDefaults : NSObject

@property (class, nonatomic, readonly) BOOL defaultBarcodeCountButtonVisibility;
@property (class, nonatomic, readonly) BOOL defaultFastFindButtonVisibility;
@property (class, nonatomic, readonly) BOOL defaultTargetModeButtonVisibility;
@property (class, nonatomic, readonly) BOOL defaultScanningBehaviorButtonVisibility;
@property (class, nonatomic, readonly) BOOL defaultTorchButtonVisibility;
@property (class, nonatomic, readonly) BOOL defaultSoundModeButtonVisibility;
@property (class, nonatomic, readonly) BOOL defaultHapticModeButtonVisibility;
@property (class, nonatomic, readonly) BOOL defaultHandModeButtonVisibility;
@property (class, nonatomic, readonly) UIColor *defaultCaptureButtonBackgroundColor;
@property (class, nonatomic, readonly) UIColor *defaultCaptureButtonActiveBackgroundColor;
@property (class, nonatomic, readonly) UIColor *defaultCaptureButtonTintColor;
@property (class, nonatomic, readonly) UIColor *defaultToolbarBackgroundColor;
@property (class, nonatomic, readonly) UIColor *defaultToolbarIconActiveTintColor;
@property (class, nonatomic, readonly) UIColor *defaultToolbarIconInactiveTintColor;
@property (class, nonatomic, readonly) NSString *defaultStopCapturingText;
@property (class, nonatomic, readonly) NSString *defaultStartCapturingText;
@property (class, nonatomic, readonly) NSString *defaultResumeCapturingText;
@property (class, nonatomic, readonly) NSString *defaultScanningCapturingText;

@end

NS_ASSUME_NONNULL_END
