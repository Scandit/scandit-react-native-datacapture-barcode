"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
    BarcodeTrackingAdvancedOverlayListenerEventName["viewForTrackedBarcode"] = "BarcodeTrackingAdvancedOverlayListener.widgetForTrackedBarcode";
    BarcodeTrackingAdvancedOverlayListenerEventName["anchorForTrackedBarcode"] = "BarcodeTrackingAdvancedOverlayListener.anchorForTrackedBarcode";
    BarcodeTrackingAdvancedOverlayListenerEventName["offsetForTrackedBarcode"] = "BarcodeTrackingAdvancedOverlayListener.offsetForTrackedBarcode";
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
        var viewJson = this.getJSONStringForView(view);
        return NativeModule.setViewForTrackedBarcode(viewJson, trackedBarcode.identifier);
    };
    BarcodeTrackingAdvancedOverlayProxy.prototype.setAnchorForTrackedBarcode = function (anchor, trackedBarcode) {
        return NativeModule.setAnchorForTrackedBarcode(anchor, trackedBarcode.identifier);
    };
    BarcodeTrackingAdvancedOverlayProxy.prototype.setOffsetForTrackedBarcode = function (offset, trackedBarcode) {
        return NativeModule.setOffsetForTrackedBarcode(JSON.stringify(offset.toJSON()), trackedBarcode.identifier);
    };
    BarcodeTrackingAdvancedOverlayProxy.prototype.clearTrackedBarcodeViews = function () {
        return NativeModule.clearTrackedBarcodeViews();
    };
    BarcodeTrackingAdvancedOverlayProxy.prototype.subscribeListener = function () {
        var _this = this;
        NativeModule.registerListenerForAdvancedOverlayEvents();
        var viewForTrackedBarcodeListener = EventEmitter.addListener(BarcodeTrackingAdvancedOverlayListenerEventName.viewForTrackedBarcode, function (body) {
            var payload = JSON.parse(body);
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            if (_this.overlay.listener && _this.overlay.listener.viewForTrackedBarcode) {
                var view = _this.overlay.listener.viewForTrackedBarcode(_this.overlay, trackedBarcode);
                NativeModule.setViewForTrackedBarcode(_this.getJSONStringForView(view), trackedBarcode.identifier);
            }
        });
        var anchorForTrackedBarcodeListener = EventEmitter.addListener(BarcodeTrackingAdvancedOverlayListenerEventName.anchorForTrackedBarcode, function (body) {
            var payload = JSON.parse(body);
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            var anchor = CommonEnums_1.Anchor.Center;
            if (_this.overlay.listener && _this.overlay.listener.anchorForTrackedBarcode) {
                anchor = _this.overlay.listener.anchorForTrackedBarcode(_this.overlay, trackedBarcode);
            }
            _this.setAnchorForTrackedBarcode(anchor, trackedBarcode);
        });
        var offsetForTrackedBarcodeListener = EventEmitter.addListener(BarcodeTrackingAdvancedOverlayListenerEventName.offsetForTrackedBarcode, function (body) {
            var payload = JSON.parse(body);
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            var offset = Common_1.PointWithUnit.zero;
            if (_this.overlay.listener && _this.overlay.listener.offsetForTrackedBarcode) {
                offset = _this.overlay.listener.offsetForTrackedBarcode(_this.overlay, trackedBarcode);
            }
            _this.setOffsetForTrackedBarcode(offset, trackedBarcode);
        });
        this.nativeListeners.push(viewForTrackedBarcodeListener);
        this.nativeListeners.push(anchorForTrackedBarcodeListener);
        this.nativeListeners.push(offsetForTrackedBarcodeListener);
    };
    BarcodeTrackingAdvancedOverlayProxy.prototype.unsubscribeListener = function () {
        NativeModule.unregisterListenerForAdvancedOverlayEvents();
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
        var e_1, _a;
        if (o === undefined || o === null ||
            typeof o === 'boolean' || typeof o === 'number' || typeof o === 'string') {
            return true;
        }
        if (Object.prototype.toString.call(o) !== '[object Object]' &&
            !Array.isArray(o)) {
            return false;
        }
        if (Array.isArray(o)) {
            try {
                for (var o_1 = __values(o), o_1_1 = o_1.next(); !o_1_1.done; o_1_1 = o_1.next()) {
                    var it = o_1_1.value;
                    if (!this.isSerializeable(it)) {
                        return false;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (o_1_1 && !o_1_1.done && (_a = o_1.return)) _a.call(o_1);
                }
                finally { if (e_1) throw e_1.error; }
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