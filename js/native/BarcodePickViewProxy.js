"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodePickViewProxy = void 0;
var react_native_1 = require("react-native");
var PrivateBarcodePickEvents_1 = require("../private/PrivateBarcodePickEvents");
var BarcodePickActionCallback_1 = require("../BarcodePickActionCallback");
// tslint:disable:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureBarcodePick;
var EventEmitter = new react_native_1.NativeEventEmitter(NativeModule);
// tslint:enable:variable-name
var BarcodePickViewProxy = /** @class */ (function () {
    function BarcodePickViewProxy() {
        this.isInListenerCallback = false;
        this.nativeListeners = [];
    }
    BarcodePickViewProxy.forBarcodePick = function (view) {
        var viewProxy = new BarcodePickViewProxy();
        viewProxy.view = view;
        // First we need to initialize the context, so it will set up the DataCaptureContextProxy.
        view.props.context.initialize();
        // We call update because it returns a promise, this guarantees, that by the time
        // we need the deserialized context, it will be set in the native layer.
        view.props.context
            .update()
            .then(function () {
            viewProxy.create();
        });
        viewProxy.subscribeListeners();
        return viewProxy;
    };
    BarcodePickViewProxy.prototype.start = function () {
        return NativeModule.viewStart();
    };
    BarcodePickViewProxy.prototype.pause = function () {
        return NativeModule.viewPause();
    };
    BarcodePickViewProxy.prototype.finishPickAction = function (code, result) {
        return NativeModule.finishPickAction(code, result);
    };
    BarcodePickViewProxy.prototype.create = function () {
        var barcodePickView = this.view.toJSON();
        var json = JSON.stringify(barcodePickView);
        var id = (0, react_native_1.findNodeHandle)(this.view);
        return NativeModule.createView(id, json);
    };
    BarcodePickViewProxy.prototype.update = function () {
        var barcodePickView = this.view.toJSON();
        var json = JSON.stringify(barcodePickView);
        return NativeModule.updateView(json);
    };
    BarcodePickViewProxy.prototype.dispose = function () {
        this.unsubscribeListeners();
    };
    BarcodePickViewProxy.prototype.subscribeListeners = function () {
        var _this = this;
        var barcodePickActionCallback = new BarcodePickActionCallback_1.BarcodePickActionCallback();
        barcodePickActionCallback._viewProxy = this;
        var didPickItemListener = EventEmitter.addListener(PrivateBarcodePickEvents_1.BarcodePickEvents.DidPick, function (data) {
            _this.isInListenerCallback = true;
            var payload = JSON.parse(data);
            _this.view._actionListeners
                .forEach(function (listener) { return listener.didPickItem(payload.itemData, barcodePickActionCallback); });
            _this.isInListenerCallback = false;
        });
        var didUnpickItemListener = EventEmitter.addListener(PrivateBarcodePickEvents_1.BarcodePickEvents.DidUnpick, function (data) {
            _this.isInListenerCallback = true;
            var payload = JSON.parse(data);
            _this.view._actionListeners
                .forEach(function (listener) { return listener.didUnpickItem(payload.itemData, barcodePickActionCallback); });
            _this.isInListenerCallback = false;
        });
        this.nativeListeners.push(didPickItemListener);
        this.nativeListeners.push(didUnpickItemListener);
        NativeModule.addActionListener();
    };
    BarcodePickViewProxy.prototype.unsubscribeListeners = function () {
        this.nativeListeners.forEach(function (listener) {
            listener.remove();
        });
        this.nativeListeners = [];
        EventEmitter.removeAllListeners(PrivateBarcodePickEvents_1.BarcodePickEvents.DidPick);
        EventEmitter.removeAllListeners(PrivateBarcodePickEvents_1.BarcodePickEvents.DidUnpick);
        NativeModule.removeActionListener();
    };
    return BarcodePickViewProxy;
}());
exports.BarcodePickViewProxy = BarcodePickViewProxy;
//# sourceMappingURL=BarcodePickViewProxy.js.map