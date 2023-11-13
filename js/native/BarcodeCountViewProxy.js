"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeCountViewProxy = void 0;
var react_native_1 = require("react-native");
var Barcode_1 = require("../Barcode");
// tslint:disable:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureBarcodeCount;
var EventEmitter = new react_native_1.NativeEventEmitter(NativeModule);
// tslint:enable:variable-name
var BarcodeCountViewEventName;
(function (BarcodeCountViewEventName) {
    BarcodeCountViewEventName["singleScanButtonTapped"] = "BarcodeCountViewUiListener.onSingleScanButtonTapped";
    BarcodeCountViewEventName["listButtonTapped"] = "BarcodeCountViewUiListener.onListButtonTapped";
    BarcodeCountViewEventName["exitButtonTapped"] = "BarcodeCountViewUiListener.onExitButtonTapped";
    BarcodeCountViewEventName["brushForRecognizedBarcode"] = "BarcodeCountViewListener.brushForRecognizedBarcode";
    BarcodeCountViewEventName["brushForRecognizedBarcodeNotInList"] = "BarcodeCountViewListener.brushForRecognizedBarcodeNotInList";
    BarcodeCountViewEventName["brushForUnrecognizedBarcode"] = "BarcodeCountViewListener.brushForUnrecognizedBarcode";
    BarcodeCountViewEventName["filteredBarcodeTapped"] = "BarcodeCountViewListener.didTapFilteredBarcode";
    BarcodeCountViewEventName["recognizedBarcodeNotInListTapped"] = "BarcodeCountViewListener.didTapRecognizedBarcodeNotInList";
    BarcodeCountViewEventName["recognizedBarcodeTapped"] = "BarcodeCountViewListener.didTapRecognizedBarcode";
    BarcodeCountViewEventName["unrecognizedBarcodeTapped"] = "BarcodeCountViewListener.didTapUnrecognizedBarcode";
    BarcodeCountViewEventName["captureListCompleted"] = "BarcodeCountViewListener.didCompleteCaptureList";
})(BarcodeCountViewEventName || (BarcodeCountViewEventName = {}));
var BarcodeCountViewProxy = /** @class */ (function () {
    function BarcodeCountViewProxy() {
        this.isInListenerCallback = false;
        this.nativeListeners = [];
    }
    BarcodeCountViewProxy.forBarcodeCount = function (view) {
        var viewProxy = new BarcodeCountViewProxy();
        viewProxy.view = view;
        // First we need to initialize the context, so it will set up the DataCaptureContextProxy.
        view.props.context.initialize();
        // We call update because it returns a promise, this guarantees, that by the time
        // we need the deserialized context, it will be set in the native layer.
        view.props.context.update().then(function () {
            viewProxy.create();
        });
        viewProxy.subscribeListeners();
        return viewProxy;
    };
    BarcodeCountViewProxy.prototype.update = function () {
        var barcodeCountView = this.view.toJSON();
        var json = JSON.stringify(barcodeCountView);
        var id = react_native_1.findNodeHandle(this.view);
        return NativeModule.update(id, json);
    };
    BarcodeCountViewProxy.prototype.create = function () {
        var barcodeCountView = this.view.toJSON();
        // const json = JSON.stringify({
        //   BarcodeCount: this.view.props.barcodeCount.toJSON(),
        //   BarcodeCountView: barcodeCountView
        // });
        var json = JSON.stringify(barcodeCountView);
        var id = react_native_1.findNodeHandle(this.view);
        return NativeModule.createView(id, json);
    };
    BarcodeCountViewProxy.prototype.dispose = function () {
        this.unsubscribeListeners();
    };
    BarcodeCountViewProxy.prototype.setUiListener = function (listener) {
        if (!!listener) {
            NativeModule.registerBarcodeCountViewUiListener();
        }
        else {
            NativeModule.unregisterBarcodeCountViewUiListener();
        }
    };
    BarcodeCountViewProxy.prototype.setViewListener = function (listener) {
        if (!!listener) {
            NativeModule.registerBarcodeCountViewListener();
        }
        else {
            NativeModule.unregisterBarcodeCountViewListener();
        }
    };
    BarcodeCountViewProxy.prototype.clearHighlights = function () {
        NativeModule.clearHighlights();
    };
    BarcodeCountViewProxy.prototype.subscribeListeners = function () {
        var _this = this;
        NativeModule.registerBarcodeCountViewListener();
        NativeModule.registerBarcodeCountViewUiListener();
        var singleScanButtonTappedListener = EventEmitter.addListener(BarcodeCountViewEventName.singleScanButtonTapped, function () {
            var _a, _b;
            _this.isInListenerCallback = true;
            (_b = (_a = _this.view.uiListener) === null || _a === void 0 ? void 0 : _a.didTapSingleScanButton) === null || _b === void 0 ? void 0 : _b.call(_a, _this.view);
            _this.isInListenerCallback = false;
        });
        var listButtonTappedListener = EventEmitter.addListener(BarcodeCountViewEventName.listButtonTapped, function () {
            var _a, _b;
            _this.isInListenerCallback = true;
            (_b = (_a = _this.view.uiListener) === null || _a === void 0 ? void 0 : _a.didTapListButton) === null || _b === void 0 ? void 0 : _b.call(_a, _this.view);
            _this.isInListenerCallback = false;
        });
        var exitButtonTappedListener = EventEmitter.addListener(BarcodeCountViewEventName.exitButtonTapped, function () {
            var _a, _b;
            _this.isInListenerCallback = true;
            (_b = (_a = _this.view.uiListener) === null || _a === void 0 ? void 0 : _a.didTapExitButton) === null || _b === void 0 ? void 0 : _b.call(_a, _this.view);
            _this.isInListenerCallback = false;
        });
        var brushForRecognizedBarcodeListener = EventEmitter.addListener(BarcodeCountViewEventName.brushForRecognizedBarcode, function (body) {
            var payload = JSON.parse(body);
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            var brush = _this.view.recognizedBrush;
            if (_this.view.listener && _this.view.listener.brushForRecognizedBarcode) {
                brush = _this.view.listener.brushForRecognizedBarcode(_this.view, trackedBarcode);
            }
            var id = react_native_1.findNodeHandle(_this.view);
            NativeModule.finishBrushForRecognizedBarcodeCallback(id, brush ? JSON.stringify(brush.toJSON()) : null, trackedBarcode.identifier);
        });
        var brushForRecognizedBarcodeNotInListListener = EventEmitter.addListener(BarcodeCountViewEventName.brushForRecognizedBarcodeNotInList, function (body) {
            var payload = JSON.parse(body);
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            var brush = _this.view.notInListBrush;
            if (_this.view.listener && _this.view.listener.brushForRecognizedBarcodeNotInList) {
                brush = _this.view.listener.brushForRecognizedBarcodeNotInList(_this.view, trackedBarcode);
            }
            var id = react_native_1.findNodeHandle(_this.view);
            NativeModule.finishBrushForRecognizedBarcodeNotInListCallback(id, brush ? JSON.stringify(brush.toJSON()) : null, trackedBarcode.identifier);
        });
        var brushForUnrecognizedBarcodeListener = EventEmitter.addListener(BarcodeCountViewEventName.brushForUnrecognizedBarcode, function (body) {
            var payload = JSON.parse(body);
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            var brush = _this.view.unrecognizedBrush;
            if (_this.view.listener && _this.view.listener.brushForUnrecognizedBarcode) {
                brush = _this.view.listener.brushForUnrecognizedBarcode(_this.view, trackedBarcode);
            }
            var id = react_native_1.findNodeHandle(_this.view);
            NativeModule.finishBrushForUnrecognizedBarcodeCallback(id, brush ? JSON.stringify(brush.toJSON()) : null, trackedBarcode.identifier);
        });
        var filteredBarcodeTappedListener = EventEmitter.addListener(BarcodeCountViewEventName.filteredBarcodeTapped, function (body) {
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(JSON.parse(body));
            if (_this.view.listener && _this.view.listener.didTapFilteredBarcode) {
                _this.view.listener.didTapFilteredBarcode(_this.view, trackedBarcode);
            }
        });
        var recognizedBarcodeNotInListTappedListener = EventEmitter.addListener(BarcodeCountViewEventName.recognizedBarcodeNotInListTapped, function (body) {
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(JSON.parse(body));
            if (_this.view.listener && _this.view.listener.didTapRecognizedBarcodeNotInList) {
                _this.view.listener.didTapRecognizedBarcodeNotInList(_this.view, trackedBarcode);
            }
        });
        var recognizedBarcodeTappedListener = EventEmitter.addListener(BarcodeCountViewEventName.recognizedBarcodeTapped, function (body) {
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(JSON.parse(body));
            if (_this.view.listener && _this.view.listener.didTapRecognizedBarcode) {
                _this.view.listener.didTapRecognizedBarcode(_this.view, trackedBarcode);
            }
        });
        var unrecognizedBarcodeTappedListener = EventEmitter.addListener(BarcodeCountViewEventName.unrecognizedBarcodeTapped, function (body) {
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(JSON.parse(body));
            if (_this.view.listener && _this.view.listener.didTapUnrecognizedBarcode) {
                _this.view.listener.didTapUnrecognizedBarcode(_this.view, trackedBarcode);
            }
        });
        var captureListCompletedListener = EventEmitter.addListener(BarcodeCountViewEventName.captureListCompleted, function () {
            if (_this.view.listener && _this.view.listener.didCompleteCaptureList) {
                _this.view.listener.didCompleteCaptureList(_this.view);
            }
        });
        this.nativeListeners.push(singleScanButtonTappedListener);
        this.nativeListeners.push(listButtonTappedListener);
        this.nativeListeners.push(exitButtonTappedListener);
        this.nativeListeners.push(brushForRecognizedBarcodeListener);
        this.nativeListeners.push(brushForRecognizedBarcodeNotInListListener);
        this.nativeListeners.push(brushForUnrecognizedBarcodeListener);
        this.nativeListeners.push(filteredBarcodeTappedListener);
        this.nativeListeners.push(recognizedBarcodeNotInListTappedListener);
        this.nativeListeners.push(recognizedBarcodeTappedListener);
        this.nativeListeners.push(unrecognizedBarcodeTappedListener);
        this.nativeListeners.push(captureListCompletedListener);
    };
    BarcodeCountViewProxy.prototype.unsubscribeListeners = function () {
        NativeModule.unregisterBarcodeCountViewListener();
        NativeModule.unregisterBarcodeCountViewUiListener();
        this.nativeListeners.forEach(function (listener) {
            listener.remove();
        });
        this.nativeListeners = [];
    };
    return BarcodeCountViewProxy;
}());
exports.BarcodeCountViewProxy = BarcodeCountViewProxy;
//# sourceMappingURL=BarcodeCountViewProxy.js.map