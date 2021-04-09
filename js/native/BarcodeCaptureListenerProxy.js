"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeCaptureListenerProxy = void 0;
var react_native_1 = require("react-native");
var BarcodeCaptureSession_1 = require("../BarcodeCaptureSession");
// tslint:disable:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureBarcodeCapture;
var EventEmitter = new react_native_1.NativeEventEmitter(NativeModule);
// tslint:enable:variable-name
var BarcodeCaptureListenerEventName;
(function (BarcodeCaptureListenerEventName) {
    BarcodeCaptureListenerEventName["didUpdateSession"] = "barcodeCaptureListener-didUpdateSession";
    BarcodeCaptureListenerEventName["didScan"] = "barcodeCaptureListener-didScan";
})(BarcodeCaptureListenerEventName || (BarcodeCaptureListenerEventName = {}));
var BarcodeCaptureListenerProxy = /** @class */ (function () {
    function BarcodeCaptureListenerProxy() {
        this.nativeListeners = [];
    }
    BarcodeCaptureListenerProxy.forBarcodeCapture = function (barcodeCapture) {
        var proxy = new BarcodeCaptureListenerProxy();
        proxy.barcodeCapture = barcodeCapture;
        return proxy;
    };
    BarcodeCaptureListenerProxy.prototype.subscribeListener = function () {
        var _this = this;
        NativeModule.registerListenerForEvents();
        var didUpdateSessionListener = EventEmitter.addListener(BarcodeCaptureListenerEventName.didUpdateSession, function (body) {
            var session = BarcodeCaptureSession_1.BarcodeCaptureSession.fromJSON(JSON.parse(body.session));
            _this.notifyListenersOfDidUpdateSession(session);
            NativeModule.finishDidUpdateSessionCallback(_this.barcodeCapture.isEnabled);
        });
        var didScanListener = EventEmitter.addListener(BarcodeCaptureListenerEventName.didScan, function (body) {
            var session = BarcodeCaptureSession_1.BarcodeCaptureSession.fromJSON(JSON.parse(body.session));
            _this.notifyListenersOfDidScan(session);
            NativeModule.finishDidScanCallback(_this.barcodeCapture.isEnabled);
        });
        this.nativeListeners.push(didUpdateSessionListener);
        this.nativeListeners.push(didScanListener);
    };
    BarcodeCaptureListenerProxy.prototype.unsubscribeListener = function () {
        NativeModule.unregisterListenerForEvents();
        this.nativeListeners.forEach(function (listener) { return listener.remove(); });
        this.nativeListeners = [];
    };
    BarcodeCaptureListenerProxy.prototype.notifyListenersOfDidUpdateSession = function (session) {
        var _this = this;
        var mode = this.barcodeCapture;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(function (listener) {
            if (listener.didUpdateSession) {
                listener.didUpdateSession(_this.barcodeCapture, session);
            }
        });
        mode.isInListenerCallback = false;
    };
    BarcodeCaptureListenerProxy.prototype.notifyListenersOfDidScan = function (session) {
        var _this = this;
        var mode = this.barcodeCapture;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(function (listener) {
            if (listener.didScan) {
                listener.didScan(_this.barcodeCapture, session);
            }
        });
        mode.isInListenerCallback = false;
    };
    return BarcodeCaptureListenerProxy;
}());
exports.BarcodeCaptureListenerProxy = BarcodeCaptureListenerProxy;
//# sourceMappingURL=BarcodeCaptureListenerProxy.js.map