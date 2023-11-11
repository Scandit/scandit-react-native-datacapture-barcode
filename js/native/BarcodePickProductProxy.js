"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodePickProductProxy = void 0;
var react_native_1 = require("react-native");
var PrivateBarcodePickEvents_1 = require("../private/PrivateBarcodePickEvents");
// tslint:disable:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureBarcodePick;
var EventEmitter = new react_native_1.NativeEventEmitter(NativeModule);
// tslint:enable:variable-name
var BarcodePickProductProxy = /** @class */ (function () {
    function BarcodePickProductProxy() {
        this.isInListenerCallback = false;
        this.nativeListeners = [];
    }
    BarcodePickProductProxy.create = function (callback) {
        var proxy = new BarcodePickProductProxy();
        proxy.barcodePickMapperCallback = callback;
        proxy.subscribeListeners();
        return proxy;
    };
    BarcodePickProductProxy.prototype.finishOnProductIdentifierForItems = function (data) {
        var objects = data.map(function (item) { return item.toJSON(); });
        return NativeModule.finishOnProductIdentifierForItems(JSON.stringify(objects));
    };
    BarcodePickProductProxy.prototype.dispose = function () {
        this.unsubscribeListeners();
    };
    BarcodePickProductProxy.prototype.subscribeListeners = function () {
        var _this = this;
        var productIdentifierForItemsListener = EventEmitter.addListener(PrivateBarcodePickEvents_1.BarcodePickEvents.OnProductIdentifierForItems, function (data) {
            var payload = JSON.parse(data);
            _this.barcodePickMapperCallback.productIdentifierForItems(payload.itemsData, {
                onData: function (callbackItems) {
                    _this.finishOnProductIdentifierForItems(callbackItems);
                }
            });
            _this.isInListenerCallback = false;
        });
        this.nativeListeners.push(productIdentifierForItemsListener);
    };
    BarcodePickProductProxy.prototype.unsubscribeListeners = function () {
        this.nativeListeners.forEach(function (listener) {
            listener.remove();
        });
        this.nativeListeners = [];
        EventEmitter.removeAllListeners(PrivateBarcodePickEvents_1.BarcodePickEvents.OnProductIdentifierForItems);
    };
    return BarcodePickProductProxy;
}());
exports.BarcodePickProductProxy = BarcodePickProductProxy;
//# sourceMappingURL=BarcodePickProductProxy.js.map