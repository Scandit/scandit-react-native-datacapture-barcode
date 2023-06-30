"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparkScanListenerProxy = void 0;
var react_native_1 = require("react-native");
var CameraProxy_1 = require("scandit-react-native-datacapture-core/js/native/CameraProxy");
var SparkScanSession_1 = require("../SparkScanSession");
// tslint:disable:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureSparkScan;
var EventEmitter = new react_native_1.NativeEventEmitter(NativeModule);
// tslint:enable:variable-name
var SparkScanListenerEventName;
(function (SparkScanListenerEventName) {
    SparkScanListenerEventName["didUpdateSession"] = "SparkScanListener.didUpdateSession";
    SparkScanListenerEventName["didScan"] = "SparkScanListener.didScan";
})(SparkScanListenerEventName || (SparkScanListenerEventName = {}));
var SparkScanListenerProxy = /** @class */ (function () {
    function SparkScanListenerProxy() {
        this.nativeListeners = [];
    }
    SparkScanListenerProxy.forSparkScan = function (sparkScan) {
        var proxy = new SparkScanListenerProxy();
        proxy.sparkScan = sparkScan;
        return proxy;
    };
    SparkScanListenerProxy.prototype.reset = function () {
        return NativeModule.resetSession();
    };
    SparkScanListenerProxy.prototype.subscribeListener = function () {
        var _this = this;
        NativeModule.registerListenerForEvents();
        var didUpdateSessionListener = EventEmitter.addListener(SparkScanListenerEventName.didUpdateSession, function (body) {
            var payload = JSON.parse(body);
            var session = SparkScanSession_1.SparkScanSession.fromJSON(JSON.parse(payload.session));
            _this.notifyListenersOfDidUpdateSession(session);
            NativeModule.finishDidUpdateSessionCallback(_this.sparkScan.isEnabled);
        });
        var didScanListener = EventEmitter.addListener(SparkScanListenerEventName.didScan, function (body) {
            var payload = JSON.parse(body);
            var session = SparkScanSession_1.SparkScanSession.fromJSON(JSON.parse(payload.session));
            _this.notifyListenersOfDidScan(session);
            NativeModule.finishDidScanCallback(_this.sparkScan.isEnabled);
        });
        this.nativeListeners.push(didUpdateSessionListener);
        this.nativeListeners.push(didScanListener);
    };
    SparkScanListenerProxy.prototype.unsubscribeListener = function () {
        NativeModule.unregisterListenerForEvents();
        this.nativeListeners.forEach(function (listener) { return listener.remove(); });
        this.nativeListeners = [];
    };
    SparkScanListenerProxy.prototype.notifyListenersOfDidUpdateSession = function (session) {
        var _this = this;
        var mode = this.sparkScan;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(function (listener) {
            if (listener.didUpdateSession) {
                listener.didUpdateSession(_this.sparkScan, session, CameraProxy_1.CameraProxy.getLastFrameOrNull);
            }
        });
        mode.isInListenerCallback = false;
    };
    SparkScanListenerProxy.prototype.notifyListenersOfDidScan = function (session) {
        var _this = this;
        var mode = this.sparkScan;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(function (listener) {
            if (listener.didScan) {
                listener.didScan(_this.sparkScan, session, CameraProxy_1.CameraProxy.getLastFrameOrNull);
            }
        });
        mode.isInListenerCallback = false;
    };
    return SparkScanListenerProxy;
}());
exports.SparkScanListenerProxy = SparkScanListenerProxy;
//# sourceMappingURL=SparkScanListenerProxy.js.map