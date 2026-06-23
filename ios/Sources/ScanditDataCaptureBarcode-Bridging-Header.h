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
#if __has_include(<React-RCTAppDelegate/RCTRootViewFactory.h>)
#    import <React-RCTAppDelegate/RCTRootViewFactory.h>
#    import <React-RCTAppDelegate/RCTReactNativeFactory.h>
#elif __has_include(<React_RCTAppDelegate/RCTRootViewFactory.h>)
#    import <React_RCTAppDelegate/RCTRootViewFactory.h>
#    import <React_RCTAppDelegate/RCTReactNativeFactory.h>
#endif
