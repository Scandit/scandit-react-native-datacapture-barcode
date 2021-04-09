"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeTrackingAdvancedOverlayProxy = void 0;
var react_native_1 = require("react-native");
var Common_1 = require("scandit-react-native-datacapture-core/js/Common");
var CommonEnums_1 = require("scandit-react-native-datacapture-core/js/CommonEnums");
var Barcode_1 = require("../Barcode");
// tslint:disable:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureBarcodeTracking;
var EventEmitter = new react_native_1.NativeEventEmitter(NativeModule);
// tslint:enable:variable-name
var BarcodeTrackingAdvancedOverlayListenerEventName;
(function (BarcodeTrackingAdvancedOverlayListenerEventName) {
    BarcodeTrackingAdvancedOverlayListenerEventName["viewForTrackedBarcode"] = "barcodeTrackingAdvancedOverlayListener-viewForTrackedBarcode";
    BarcodeTrackingAdvancedOverlayListenerEventName["anchorForTrackedBarcode"] = "barcodeTrackingAdvancedOverlayListener-anchorForTrackedBarcode";
    BarcodeTrackingAdvancedOverlayListenerEventName["offsetForTrackedBarcode"] = "barcodeTrackingAdvancedOverlayListener-offsetForTrackedBarcode";
})(BarcodeTrackingAdvancedOverlayListenerEventName || (BarcodeTrackingAdvancedOverlayListenerEventName = {}));
var BarcodeTrackingAdvancedOverlayProxy = /** @class */ (function () {
    function BarcodeTrackingAdvancedOverlayProxy() {
        this.nativeListeners = [];
    }
    BarcodeTrackingAdvancedOverlayProxy.forOverlay = function (overlay) {
        var proxy = new BarcodeTrackingAdvancedOverlayProxy();
        proxy.overlay = overlay;
        return proxy;
    };
    BarcodeTrackingAdvancedOverlayProxy.prototype.setBrushForTrackedBarcode = function (brush, trackedBarcode) {
        return NativeModule.setBrushForTrackedBarcode(JSON.stringify(brush.toJSON()), trackedBarcode.sessionFrameSequenceID, trackedBarcode.identifier);
    };
    BarcodeTrackingAdvancedOverlayProxy.prototype.setViewForTrackedBarcode = function (view, trackedBarcode) {
        return NativeModule.setViewForTrackedBarcode(this.getJSONStringForView(view), trackedBarcode.sessionFrameSequenceID, trackedBarcode.identifier);
    };
    BarcodeTrackingAdvancedOverlayProxy.prototype.setAnchorForTrackedBarcode = function (anchor, trackedBarcode) {
        return NativeModule.setAnchorForTrackedBarcode(anchor, trackedBarcode.sessionFrameSequenceID, trackedBarcode.identifier);
    };
    BarcodeTrackingAdvancedOverlayProxy.prototype.setOffsetForTrackedBarcode = function (offset, trackedBarcode) {
        return NativeModule.setOffsetForTrackedBarcode(JSON.stringify(offset.toJSON()), trackedBarcode.sessionFrameSequenceID, trackedBarcode.identifier);
    };
    BarcodeTrackingAdvancedOverlayProxy.prototype.clearTrackedBarcodeViews = function () {
        return NativeModule.clearTrackedBarcodeViews();
    };
    BarcodeTrackingAdvancedOverlayProxy.prototype.subscribeListener = function () {
        var _this = this;
        // We don't need to register as a Listener to the native side on iOS, as it's done automatically by RN under the hood.
        if (react_native_1.Platform.OS === 'android') {
            NativeModule.registerListenerForAdvancedOverlayEvents();
        }
        var viewForTrackedBarcodeListener = EventEmitter.addListener(BarcodeTrackingAdvancedOverlayListenerEventName.viewForTrackedBarcode, function (body) {
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(JSON.parse(body.trackedBarcode));
            var view = null;
            if (_this.overlay.listener && _this.overlay.listener.viewForTrackedBarcode) {
                view = _this.overlay.listener.viewForTrackedBarcode(_this.overlay, trackedBarcode);
            }
            NativeModule.finishViewForTrackedBarcodeCallback(_this.getJSONStringForView(view));
        });
        var anchorForTrackedBarcodeListener = EventEmitter.addListener(BarcodeTrackingAdvancedOverlayListenerEventName.anchorForTrackedBarcode, function (body) {
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(JSON.parse(body.trackedBarcode));
            var anchor = CommonEnums_1.Anchor.Center;
            if (_this.overlay.listener && _this.overlay.listener.anchorForTrackedBarcode) {
                anchor = _this.overlay.listener.anchorForTrackedBarcode(_this.overlay, trackedBarcode);
            }
            NativeModule.finishAnchorForTrackedBarcodeCallback(anchor);
        });
        var offsetForTrackedBarcodeListener = EventEmitter.addListener(BarcodeTrackingAdvancedOverlayListenerEventName.offsetForTrackedBarcode, function (body) {
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(JSON.parse(body.trackedBarcode));
            var offset = Common_1.PointWithUnit.zero;
            if (_this.overlay.listener && _this.overlay.listener.offsetForTrackedBarcode) {
                offset = _this.overlay.listener.offsetForTrackedBarcode(_this.overlay, trackedBarcode);
            }
            NativeModule.finishOffsetForTrackedBarcodeCallback(JSON.stringify(offset.toJSON()));
        });
        this.nativeListeners.push(viewForTrackedBarcodeListener);
        this.nativeListeners.push(anchorForTrackedBarcodeListener);
        this.nativeListeners.push(offsetForTrackedBarcodeListener);
    };
    BarcodeTrackingAdvancedOverlayProxy.prototype.unsubscribeListener = function () {
        // We don't need to unregister as a Listener to the native side on iOS, as it's done automatically by RN under the hood.
        if (react_native_1.Platform.OS === 'android') {
            NativeModule.unregisterListenerForAdvancedOverlayEvents();
        }
        this.nativeListeners.forEach(function (listener) { return listener.remove(); });
        this.nativeListeners = [];
    };
    BarcodeTrackingAdvancedOverlayProxy.prototype.getJSONStringForView = function (view) {
        if (view == null) {
            return null;
        }
        if (!view.moduleName) {
            throw new Error('View must have moduleName defined');
        }
        if (!this.isSerializeable(view.props)) {
            // react-navigation does something like this: https://reactnavigation.org/docs/troubleshooting/#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state
            throw new Error('Non-serializable values were found in the view passed passed to a BarcodeTrackingAdvancedOverlay, which can break usage. This might happen if you have non-serializable values such as function, class instances etc. in the props for the view component that you are passing.');
        }
        var viewJSON = {
            moduleName: view.moduleName,
            initialProperties: view.props,
        };
        return JSON.stringify(viewJSON);
    };
    BarcodeTrackingAdvancedOverlayProxy.prototype.isSerializeable = function (o) {
        if (o === undefined || o === null ||
            typeof o === 'boolean' || typeof o === 'number' || typeof o === 'string') {
            return true;
        }
        if (Object.prototype.toString.call(o) !== '[object Object]' &&
            !Array.isArray(o)) {
            return false;
        }
        if (Array.isArray(o)) {
            for (var _i = 0, o_1 = o; _i < o_1.length; _i++) {
                var it = o_1[_i];
                if (!this.isSerializeable(it)) {
                    return false;
                }
            }
        }
        else {
            for (var key in o) {
                if (!this.isSerializeable(o[key])) {
                    return false;
                }
            }
        }
        return true;
    };
    return BarcodeTrackingAdvancedOverlayProxy;
}());
exports.BarcodeTrackingAdvancedOverlayProxy = BarcodeTrackingAdvancedOverlayProxy;
//# sourceMappingURL=BarcodeTrackingAdvancedOverlayProxy.js.map