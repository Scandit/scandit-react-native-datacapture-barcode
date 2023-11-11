"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparkScanViewProxy = void 0;
var react_native_1 = require("react-native");
// tslint:disable:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureSparkScan;
var EventEmitter = new react_native_1.NativeEventEmitter(NativeModule);
// tslint:enable:variable-name
var SparkScanViewUiListenerEventName;
(function (SparkScanViewUiListenerEventName) {
    SparkScanViewUiListenerEventName["barcodeCountButtonTapped"] = "SparkScanViewUiListener.barcodeCountButtonTapped";
    SparkScanViewUiListenerEventName["fastFindButtonTapped"] = "SparkScanViewUiListener.fastFindButtonTapped";
})(SparkScanViewUiListenerEventName || (SparkScanViewUiListenerEventName = {}));
var SparkScanViewProxy = /** @class */ (function () {
    function SparkScanViewProxy() {
        this.isInListenerCallback = false;
        this.nativeListeners = [];
    }
    SparkScanViewProxy.forSparkScanView = function (view) {
        var viewProxy = new SparkScanViewProxy();
        viewProxy.view = view;
        // First we need to initialize the context, so it will set up the DataCaptureContextProxy.
        view.props.context.initialize();
        // We call update because it returns a promise, this guarantees, that by the time
        // we need the deserialized context, it will be set in the native layer.
        view.props.context.update().then(function () {
            viewProxy.create().then(function () {
                viewProxy.prepareScanning();
            });
        });
        viewProxy.subscribeListeners();
        return viewProxy;
    };
    SparkScanViewProxy.prototype.startScanning = function () {
        if (react_native_1.Platform.OS === 'ios') {
            var id = (0, react_native_1.findNodeHandle)(this.view);
            return NativeModule.startScanning(id);
        }
        return NativeModule.startScanning();
    };
    SparkScanViewProxy.prototype.pauseScanning = function () {
        if (react_native_1.Platform.OS === 'ios') {
            var id = (0, react_native_1.findNodeHandle)(this.view);
            return NativeModule.pauseScanning(id);
        }
        return NativeModule.pauseScanning();
    };
    SparkScanViewProxy.prototype.emitFeedback = function (feedback) {
        return NativeModule.emitFeedback((0, react_native_1.findNodeHandle)(this.view), JSON.stringify(feedback.toJSON()));
    };
    SparkScanViewProxy.prototype.dispose = function () {
        this.unsubscribeListeners();
    };
    SparkScanViewProxy.prototype.subscribeListeners = function () {
        var _this = this;
        NativeModule.registerListenerForViewEvents();
        var barcodeCountButtonTappedListener = EventEmitter.addListener(SparkScanViewUiListenerEventName.barcodeCountButtonTapped, function () {
            var _a, _b;
            _this.isInListenerCallback = true;
            (_b = (_a = _this.view.uiListener) === null || _a === void 0 ? void 0 : _a.onBarcodeCountButtonTappedIn) === null || _b === void 0 ? void 0 : _b.call(_a, _this.view);
            _this.isInListenerCallback = false;
        });
        var fastFindButtonTappedListener = EventEmitter.addListener(SparkScanViewUiListenerEventName.fastFindButtonTapped, function () {
            var _a, _b;
            _this.isInListenerCallback = true;
            (_b = (_a = _this.view.uiListener) === null || _a === void 0 ? void 0 : _a.onFastFindButtonTappedIn) === null || _b === void 0 ? void 0 : _b.call(_a, _this.view);
            _this.isInListenerCallback = false;
        });
        this.nativeListeners.push(barcodeCountButtonTappedListener);
        this.nativeListeners.push(fastFindButtonTappedListener);
    };
    SparkScanViewProxy.prototype.unsubscribeListeners = function () {
        NativeModule.unregisterListenerForViewEvents();
        this.nativeListeners.forEach(function (listener) {
            listener.remove();
        });
        this.nativeListeners = [];
    };
    SparkScanViewProxy.prototype.create = function () {
        var json = JSON.stringify({
            SparkScan: this.view.props.sparkScan.toJSON(),
            SparkScanView: __assign(__assign({}, this.view.toJSON()), { viewSettings: this.view.props.sparkScanViewSettings.toJSON() })
        });
        var id = (0, react_native_1.findNodeHandle)(this.view);
        return NativeModule.create(id, json);
    };
    SparkScanViewProxy.prototype.update = function () {
        var json = JSON.stringify(this.view.toJSON());
        var id = (0, react_native_1.findNodeHandle)(this.view);
        return NativeModule.update(id, json);
    };
    SparkScanViewProxy.prototype.prepareScanning = function () {
        if (react_native_1.Platform.OS === 'ios') {
            var id = (0, react_native_1.findNodeHandle)(this.view);
            return NativeModule.prepareScanning(id);
        }
        return NativeModule.onResume();
    };
    SparkScanViewProxy.prototype.stopScanning = function () {
        if (react_native_1.Platform.OS === 'ios') {
            var id = (0, react_native_1.findNodeHandle)(this.view);
            return NativeModule.stopScanning(id);
        }
        return NativeModule.onPause();
    };
    return SparkScanViewProxy;
}());
exports.SparkScanViewProxy = SparkScanViewProxy;
//# sourceMappingURL=SparkScanViewProxy.js.map