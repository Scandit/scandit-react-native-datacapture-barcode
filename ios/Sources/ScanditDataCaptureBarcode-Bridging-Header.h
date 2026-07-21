//
//  Use this file to import your target's public headers that you would like to expose to Swift.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTConstants.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTRootView.h>
#import <React/RCTRootViewDelegate.h>
#import <React/RCTUIManager.h>
#import <React/RCTViewManager.h>

#import "SDCBarcodeCountViewDefaults.h"
#import "ScanditDataCaptureBarcodeViews.h"

// SDC-30774: bridge React-RCTAppDelegate types (see core bridging header).
// RCTRootViewFactory.h exists since RN 0.74; RCTReactNativeFactory.h only since
// RN 0.78. Gate each on its own __has_include so RN 0.74–0.77 (where the first
// header exists but the second does not) still resolves (SDC-32584).
#if __has_include(<React-RCTAppDelegate/RCTRootViewFactory.h>)
#    import <React-RCTAppDelegate/RCTRootViewFactory.h>
#elif __has_include(<React_RCTAppDelegate/RCTRootViewFactory.h>)
#    import <React_RCTAppDelegate/RCTRootViewFactory.h>
#endif

#if __has_include(<React-RCTAppDelegate/RCTReactNativeFactory.h>)
#    import <React-RCTAppDelegate/RCTReactNativeFactory.h>
#elif __has_include(<React_RCTAppDelegate/RCTReactNativeFactory.h>)
#    import <React_RCTAppDelegate/RCTReactNativeFactory.h>
#endif
