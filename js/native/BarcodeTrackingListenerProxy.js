"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var BarcodeTrackingSession_1 = require("../BarcodeTrackingSession");
// tslint:disable:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureBarcodeTracking;
var EventEmitter = new react_native_1.NativeEventEmitter(NativeModule);
// tslint:enable:variable-name
var BarcodeTrackingListenerEventName;
(function (BarcodeTrackingListenerEventName) {
    BarcodeTrackingListenerEventName["didUpdateSession"] = "barcodeTrackingListener-didUpdateSession";
})(BarcodeTrackingListenerEventName || (BarcodeTrackingListenerEventName = {}));
var BarcodeTrackingListenerProxy = /** @class */ (function () {
    function BarcodeTrackingListenerProxy() {
        this.nativeListeners = [];
    }
    BarcodeTrackingListenerProxy.forBarcodeTracking = function (barcodeTracking) {
        var proxy = new BarcodeTrackingListenerProxy();
        proxy.barcodeTracking = barcodeTracking;
        return proxy;
    };
    BarcodeTrackingListenerProxy.prototype.subscribeListener = function () {
        var _this = this;
        // We don't need to register as a Listener to the native side on iOS, as it's done automatically by RN under the hood.
        if (react_native_1.Platform.OS === 'android') {
            NativeModule.registerListenerForEvents();
        }
        var listener = EventEmitter.addListener(BarcodeTrackingListenerEventName.didUpdateSession, function (body) {
            var session = BarcodeTrackingSession_1.BarcodeTrackingSession.fromJSON(JSON.parse(body.session));
            _this.notifyListenersOfDidUpdateSession(session);
            NativeModule.finishDidUpdateSessionCallback(_this.barcodeTracking.isEnabled);
        });
        this.nativeListeners.push(listener);
    };
    BarcodeTrackingListenerProxy.prototype.unsubscribeListener = function () {
        // We don't need to unregister as a Listener to the native side on iOS, as it's done automatically by RN under the hood.
        if (react_native_1.Platform.OS === 'android') {
            NativeModule.unregisterListenerForEvents();
        }
        this.nativeListeners.forEach(function (listener) { return listener.remove(); });
        this.nativeListeners = [];
    };
    BarcodeTrackingListenerProxy.prototype.notifyListenersOfDidUpdateSession = function (session) {
        var _this = this;
        var mode = this.barcodeTracking;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(function (listener) {
            if (listener.didUpdateSession) {
                listener.didUpdateSession(_this.barcodeTracking, session);
            }
        });
        mode.isInListenerCallback = false;
    };
    return BarcodeTrackingListenerProxy;
}());
exports.BarcodeTrackingListenerProxy = BarcodeTrackingListenerProxy;
//# sourceMappingURL=BarcodeTrackingListenerProxy.js.map