"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeCountListenerProxy = void 0;
var BarcodeCountSession_1 = require("../BarcodeCountSession");
var react_native_1 = require("react-native");
var CameraProxy_1 = require("scandit-react-native-datacapture-core/js/native/CameraProxy");
var BarcodeCountCaptureListSession_1 = require("../BarcodeCountCaptureListSession");
// tslint:disable:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureBarcodeCount;
var EventEmitter = new react_native_1.NativeEventEmitter(NativeModule);
// tslint:enable:variable-name
var BarcodeCountListenerEventName;
(function (BarcodeCountListenerEventName) {
    BarcodeCountListenerEventName["didListSessionUpdate"] = "BarcodeCountCaptureListListener.didUpdateSession";
    BarcodeCountListenerEventName["didScan"] = "BarcodeCountListener.onScan";
})(BarcodeCountListenerEventName || (BarcodeCountListenerEventName = {}));
var BarcodeCountListenerProxy = /** @class */ (function () {
    function BarcodeCountListenerProxy() {
        this.nativeListeners = [];
    }
    BarcodeCountListenerProxy.forBarcodeCount = function (barcodeCount) {
        var proxy = new BarcodeCountListenerProxy();
        proxy.barcodeCount = barcodeCount;
        return proxy;
    };
    BarcodeCountListenerProxy.prototype.update = function () {
        var barcodeCount = this.barcodeCount.toJSON();
        var json = JSON.stringify(barcodeCount);
        return NativeModule.updateMode(json);
    };
    BarcodeCountListenerProxy.prototype.reset = function () {
        return NativeModule.resetBarcodeCount();
    };
    BarcodeCountListenerProxy.prototype.subscribeListener = function () {
        var _this = this;
        NativeModule.registerBarcodeCountListener();
        var didScanListener = EventEmitter.addListener(BarcodeCountListenerEventName.didScan, function (body) {
            var payload = JSON.parse(body);
            var session = BarcodeCountSession_1.BarcodeCountSession.fromJSON(JSON.parse(payload.session));
            _this.notifyListenersOfDidScanSession(session);
            NativeModule.finishOnScan();
        });
        var didUpdateSessionListener = EventEmitter.addListener(BarcodeCountListenerEventName.didListSessionUpdate, function (body) {
            var payload = JSON.parse(body);
            var session = BarcodeCountCaptureListSession_1.BarcodeCountCaptureListSession
                .fromJSON(JSON.parse(payload.session));
            _this.notifyListenersOfDidListSessionUpdate(session);
        });
        this.nativeListeners.push(didScanListener);
        this.nativeListeners.push(didUpdateSessionListener);
    };
    BarcodeCountListenerProxy.prototype.unsubscribeListener = function () {
        NativeModule.unregisterBarcodeCountListener();
        this.nativeListeners.forEach(function (listener) { return listener.remove(); });
        this.nativeListeners = [];
    };
    BarcodeCountListenerProxy.prototype.startScanningPhase = function () {
        NativeModule.startScanningPhase();
    };
    BarcodeCountListenerProxy.prototype.endScanningPhase = function () {
        NativeModule.endScanningPhase();
    };
    BarcodeCountListenerProxy.prototype.setBarcodeCountCaptureList = function (barcodeCountCaptureList) {
        this._barcodeCountCaptureList = barcodeCountCaptureList;
        NativeModule.setBarcodeCountCaptureList(JSON.stringify(barcodeCountCaptureList.targetBarcodes));
    };
    BarcodeCountListenerProxy.prototype.notifyListenersOfDidScanSession = function (session) {
        var _this = this;
        var mode = this.barcodeCount;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(function (listener) {
            if (listener.didScan) {
                listener.didScan(_this.barcodeCount, session, CameraProxy_1.CameraProxy.getLastFrame);
            }
        });
        mode.isInListenerCallback = false;
    };
    BarcodeCountListenerProxy.prototype.notifyListenersOfDidListSessionUpdate = function (session) {
        var _a;
        var mode = this.barcodeCount;
        var barcodeCountCaptureListListener = (_a = this._barcodeCountCaptureList) === null || _a === void 0 ? void 0 : _a.listener;
        mode.isInListenerCallback = true;
        if (barcodeCountCaptureListListener && (barcodeCountCaptureListListener === null || barcodeCountCaptureListListener === void 0 ? void 0 : barcodeCountCaptureListListener.didUpdateSession)) {
            barcodeCountCaptureListListener === null || barcodeCountCaptureListListener === void 0 ? void 0 : barcodeCountCaptureListListener.didUpdateSession(this._barcodeCountCaptureList, session);
        }
        mode.isInListenerCallback = false;
    };
    return BarcodeCountListenerProxy;
}());
exports.BarcodeCountListenerProxy = BarcodeCountListenerProxy;
//# sourceMappingURL=BarcodeCountListenerProxy.js.map