"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeTrackingListenerProxy = void 0;
var react_native_1 = require("react-native");
var CameraProxy_1 = require("scandit-react-native-datacapture-core/js/native/CameraProxy");
var BarcodeTrackingSession_1 = require("../BarcodeTrackingSession");
// tslint:disable:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureBarcodeTracking;
var EventEmitter = new react_native_1.NativeEventEmitter(NativeModule);
// tslint:enable:variable-name
var BarcodeTrackingListenerEventName;
(function (BarcodeTrackingListenerEventName) {
    BarcodeTrackingListenerEventName["didUpdateSession"] = "BarcodeTrackingListener.didUpdateSession";
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
    BarcodeTrackingListenerProxy.prototype.reset = function () {
        return NativeModule.resetSession();
    };
    BarcodeTrackingListenerProxy.prototype.subscribeListener = function () {
        var _this = this;
        NativeModule.registerListenerForEvents();
        var listener = EventEmitter.addListener(BarcodeTrackingListenerEventName.didUpdateSession, function (body) {
            var payload = JSON.parse(body);
            var session = BarcodeTrackingSession_1.BarcodeTrackingSession.fromJSON(JSON.parse(payload.session));
            _this.notifyListenersOfDidUpdateSession(session);
            NativeModule.finishDidUpdateSessionCallback(_this.barcodeTracking.isEnabled);
        });
        this.nativeListeners.push(listener);
    };
    BarcodeTrackingListenerProxy.prototype.unsubscribeListener = function () {
        NativeModule.unregisterListenerForEvents();
        this.nativeListeners.forEach(function (listener) { return listener.remove(); });
        this.nativeListeners = [];
    };
    BarcodeTrackingListenerProxy.prototype.notifyListenersOfDidUpdateSession = function (session) {
        var _this = this;
        var mode = this.barcodeTracking;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(function (listener) {
            if (listener.didUpdateSession) {
                listener.didUpdateSession(_this.barcodeTracking, session, CameraProxy_1.CameraProxy.getLastFrame);
            }
        });
        mode.isInListenerCallback = false;
    };
    return BarcodeTrackingListenerProxy;
}());
exports.BarcodeTrackingListenerProxy = BarcodeTrackingListenerProxy;
//# sourceMappingURL=BarcodeTrackingListenerProxy.js.map