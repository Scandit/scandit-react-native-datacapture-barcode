"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeSelectionListenerProxy = void 0;
var react_native_1 = require("react-native");
var BarcodeSelectionSession_1 = require("../BarcodeSelectionSession");
// tslint:disable:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureBarcodeSelection;
var EventEmitter = new react_native_1.NativeEventEmitter(NativeModule);
// tslint:enable:variable-name
var BarcodeSelectionListenerEventName;
(function (BarcodeSelectionListenerEventName) {
    BarcodeSelectionListenerEventName["didUpdateSelection"] = "barcodeSelectionListener-didUpdateSelection";
    BarcodeSelectionListenerEventName["didUpdateSession"] = "barcodeSelectionListener-didUpdateSession";
})(BarcodeSelectionListenerEventName || (BarcodeSelectionListenerEventName = {}));
var BarcodeSelectionListenerProxy = /** @class */ (function () {
    function BarcodeSelectionListenerProxy() {
        this.nativeListeners = [];
    }
    BarcodeSelectionListenerProxy.forBarcodeSelection = function (barcodeSelection) {
        var proxy = new BarcodeSelectionListenerProxy();
        proxy.barcodeSelection = barcodeSelection;
        return proxy;
    };
    BarcodeSelectionListenerProxy.prototype.getCount = function (barcode) {
        return NativeModule.getCount(barcode.selectionIdentifier);
    };
    BarcodeSelectionListenerProxy.prototype.reset = function () {
        return NativeModule.resetSession();
    };
    BarcodeSelectionListenerProxy.prototype.subscribeListener = function () {
        var _this = this;
        NativeModule.registerListenerForEvents();
        var didUpdateSelectionListener = EventEmitter.addListener(BarcodeSelectionListenerEventName.didUpdateSelection, function (body) {
            var session = BarcodeSelectionSession_1.BarcodeSelectionSession.fromJSON(JSON.parse(body.session));
            session.listenerProxy = _this;
            _this.notifyListenersOfDidUpdateSelection(session);
            NativeModule.finishDidUpdateSelectionCallback(_this.barcodeSelection.isEnabled);
        });
        var didUpdateSession = EventEmitter.addListener(BarcodeSelectionListenerEventName.didUpdateSession, function (body) {
            var session = BarcodeSelectionSession_1.BarcodeSelectionSession.fromJSON(JSON.parse(body.session));
            session.listenerProxy = _this;
            _this.notifyListenersOfDidUpdateSession(session);
            NativeModule.finishDidUpdateSessionCallback(_this.barcodeSelection.isEnabled);
        });
        this.nativeListeners.push(didUpdateSelectionListener);
        this.nativeListeners.push(didUpdateSession);
    };
    BarcodeSelectionListenerProxy.prototype.unsubscribeListener = function () {
        NativeModule.unregisterListenerForEvents();
        this.nativeListeners.forEach(function (listener) { return listener.remove(); });
        this.nativeListeners = [];
    };
    BarcodeSelectionListenerProxy.prototype.notifyListenersOfDidUpdateSelection = function (session) {
        var _this = this;
        var mode = this.barcodeSelection;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(function (listener) {
            if (listener.didUpdateSelection) {
                listener.didUpdateSelection(_this.barcodeSelection, session);
            }
        });
        mode.isInListenerCallback = false;
    };
    BarcodeSelectionListenerProxy.prototype.notifyListenersOfDidUpdateSession = function (session) {
        var _this = this;
        var mode = this.barcodeSelection;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(function (listener) {
            if (listener.didUpdateSession) {
                listener.didUpdateSession(_this.barcodeSelection, session);
            }
        });
        mode.isInListenerCallback = false;
    };
    return BarcodeSelectionListenerProxy;
}());
exports.BarcodeSelectionListenerProxy = BarcodeSelectionListenerProxy;
//# sourceMappingURL=BarcodeSelectionListenerProxy.js.map