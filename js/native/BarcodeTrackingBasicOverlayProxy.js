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
    BarcodeTrackingBasicOverlayListenerEventName["brushForTrackedBarcode"] = "barcodeTrackingBasicOverlayListener-brushForTrackedBarcode";
    BarcodeTrackingBasicOverlayListenerEventName["didTapTrackedBarcode"] = "barcodeTrackingBasicOverlayListener-didTapTrackedBarcode";
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
        return NativeModule.setBrushForTrackedBarcode(JSON.stringify(brush.toJSON()), trackedBarcode.sessionFrameSequenceID, trackedBarcode.identifier);
    };
    BarcodeTrackingBasicOverlayProxy.prototype.clearTrackedBarcodeBrushes = function () {
        return NativeModule.clearTrackedBarcodeBrushes();
    };
    BarcodeTrackingBasicOverlayProxy.prototype.subscribeListener = function () {
        var _this = this;
        // We don't need to register as a Listener to the native side on iOS, as it's done automatically by RN under the hood.
        if (react_native_1.Platform.OS === 'android') {
            NativeModule.registerListenerForBasicOverlayEvents();
        }
        var brushForTrackedBarcodeListener = EventEmitter.addListener(BarcodeTrackingBasicOverlayListenerEventName.brushForTrackedBarcode, function (body) {
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(JSON.parse(body.trackedBarcode));
            var brush = _this.overlay.brush;
            if (_this.overlay.listener && _this.overlay.listener.brushForTrackedBarcode) {
                brush = _this.overlay.listener.brushForTrackedBarcode(_this.overlay, trackedBarcode);
            }
            NativeModule.finishBrushForTrackedBarcodeCallback(brush ? JSON.stringify(brush.toJSON()) : null);
        });
        var didTapTrackedBarcodeListener = EventEmitter.addListener(BarcodeTrackingBasicOverlayListenerEventName.didTapTrackedBarcode, function (body) {
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(JSON.parse(body.trackedBarcode));
            if (_this.overlay.listener && _this.overlay.listener.didTapTrackedBarcode) {
                _this.overlay.listener.didTapTrackedBarcode(_this.overlay, trackedBarcode);
            }
        });
        this.nativeListeners.push(brushForTrackedBarcodeListener);
        this.nativeListeners.push(didTapTrackedBarcodeListener);
    };
    BarcodeTrackingBasicOverlayProxy.prototype.unsubscribeListener = function () {
        // We don't need to unregister as a Listener to the native side on iOS, as it's done automatically by RN under the hood.
        if (react_native_1.Platform.OS === 'android') {
            NativeModule.unregisterListenerForBasicOverlayEvents();
        }
        this.nativeListeners.forEach(function (listener) { return listener.remove(); });
        this.nativeListeners = [];
    };
    return BarcodeTrackingBasicOverlayProxy;
}());
exports.BarcodeTrackingBasicOverlayProxy = BarcodeTrackingBasicOverlayProxy;
//# sourceMappingURL=BarcodeTrackingBasicOverlayProxy.js.map