"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeTrackingBasicOverlayProxy = void 0;
var react_native_1 = require("react-native");
var Barcode_1 = require("../Barcode");
// tslint:disable:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureBarcodeTracking;
var EventEmitter = new react_native_1.NativeEventEmitter(NativeModule);
// tslint:enable:variable-name
var BarcodeTrackingBasicOverlayListenerEventName;
(function (BarcodeTrackingBasicOverlayListenerEventName) {
    BarcodeTrackingBasicOverlayListenerEventName["brushForTrackedBarcode"] = "BarcodeTrackingBasicOverlayListener.brushForTrackedBarcode";
    BarcodeTrackingBasicOverlayListenerEventName["didTapTrackedBarcode"] = "BarcodeTrackingBasicOverlayListener.didTapTrackedBarcode";
})(BarcodeTrackingBasicOverlayListenerEventName || (BarcodeTrackingBasicOverlayListenerEventName = {}));
var BarcodeTrackingBasicOverlayProxy = /** @class */ (function () {
    function BarcodeTrackingBasicOverlayProxy() {
        this.nativeListeners = [];
    }
    BarcodeTrackingBasicOverlayProxy.forOverlay = function (overlay) {
        var proxy = new BarcodeTrackingBasicOverlayProxy();
        proxy.overlay = overlay;
        return proxy;
    };
    BarcodeTrackingBasicOverlayProxy.prototype.setBrushForTrackedBarcode = function (brush, trackedBarcode) {
        return NativeModule.setBrushForTrackedBarcode(brush ? JSON.stringify(brush.toJSON()) : null, trackedBarcode.identifier);
    };
    BarcodeTrackingBasicOverlayProxy.prototype.clearTrackedBarcodeBrushes = function () {
        return NativeModule.clearTrackedBarcodeBrushes();
    };
    BarcodeTrackingBasicOverlayProxy.prototype.subscribeListener = function () {
        var _this = this;
        NativeModule.registerListenerForBasicOverlayEvents();
        var brushForTrackedBarcodeListener = EventEmitter.addListener(BarcodeTrackingBasicOverlayListenerEventName.brushForTrackedBarcode, function (body) {
            var payload = JSON.parse(body);
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            if (_this.overlay.listener && _this.overlay.listener.brushForTrackedBarcode) {
                var brush = _this.overlay.listener.brushForTrackedBarcode(_this.overlay, trackedBarcode);
                _this.setBrushForTrackedBarcode(brush, trackedBarcode);
            }
        });
        var didTapTrackedBarcodeListener = EventEmitter.addListener(BarcodeTrackingBasicOverlayListenerEventName.didTapTrackedBarcode, function (body) {
            var payload = JSON.parse(body);
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            if (_this.overlay.listener && _this.overlay.listener.didTapTrackedBarcode) {
                _this.overlay.listener.didTapTrackedBarcode(_this.overlay, trackedBarcode);
            }
        });
        this.nativeListeners.push(brushForTrackedBarcodeListener);
        this.nativeListeners.push(didTapTrackedBarcodeListener);
    };
    BarcodeTrackingBasicOverlayProxy.prototype.unsubscribeListener = function () {
        NativeModule.unregisterListenerForBasicOverlayEvents();
        this.nativeListeners.forEach(function (listener) { return listener.remove(); });
        this.nativeListeners = [];
    };
    return BarcodeTrackingBasicOverlayProxy;
}());
exports.BarcodeTrackingBasicOverlayProxy = BarcodeTrackingBasicOverlayProxy;
//# sourceMappingURL=BarcodeTrackingBasicOverlayProxy.js.map