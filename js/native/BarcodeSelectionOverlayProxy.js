"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeSelectionOverlayProxy = void 0;
var react_native_1 = require("react-native");
var Barcode_1 = require("../Barcode");
// tslint:disable:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureBarcodeSelection;
var EventEmitter = new react_native_1.NativeEventEmitter(NativeModule);
// tslint:enable:variable-name
var BarcodeSelectionBrushProviderEventName;
(function (BarcodeSelectionBrushProviderEventName) {
    BarcodeSelectionBrushProviderEventName["brushForAimedBarcode"] = "barcodeSelectionAimedBrushProvider-brushForBarcode";
    BarcodeSelectionBrushProviderEventName["brushForTrackedBarcode"] = "barcodeSelectionTrackedBrushProvider-brushForBarcode";
})(BarcodeSelectionBrushProviderEventName || (BarcodeSelectionBrushProviderEventName = {}));
var BarcodeSelectionOverlayProxy = /** @class */ (function () {
    function BarcodeSelectionOverlayProxy() {
        this.brushForAimedBarcodeProvider = null;
        this.brushForTrackedBarcodeProvider = null;
    }
    BarcodeSelectionOverlayProxy.prototype.setAimedBarcodeBrushProvider = function (brushProvider) {
        var _a;
        if (!brushProvider) {
            (_a = this.brushForAimedBarcodeProvider) === null || _a === void 0 ? void 0 : _a.remove();
            return NativeModule.removeAimedBarcodeBrushProvider();
        }
        var subscriptionResult = NativeModule.setAimedBarcodeBrushProvider();
        this.brushForAimedBarcodeProvider = EventEmitter.addListener(BarcodeSelectionBrushProviderEventName.brushForAimedBarcode, function (body) {
            var barcode = Barcode_1.Barcode
                .fromJSON(JSON.parse(body.barcode));
            var brush = null;
            if (brushProvider.brushForBarcode) {
                brush = brushProvider.brushForBarcode(barcode);
            }
            NativeModule.finishBrushForAimedBarcodeCallback(brush ? JSON.stringify(brush.toJSON()) : null, barcode.selectionIdentifier);
        });
        return subscriptionResult;
    };
    BarcodeSelectionOverlayProxy.prototype.setTrackedBarcodeBrushProvider = function (brushProvider) {
        var _a;
        if (!brushProvider) {
            (_a = this.brushForTrackedBarcodeProvider) === null || _a === void 0 ? void 0 : _a.remove();
            return NativeModule.removeTrackedBarcodeBrushProvider();
        }
        var subscriptionResult = NativeModule.setTrackedBarcodeBrushProvider();
        this.brushForTrackedBarcodeProvider = EventEmitter.addListener(BarcodeSelectionBrushProviderEventName.brushForTrackedBarcode, function (body) {
            var barcode = Barcode_1.Barcode
                .fromJSON(JSON.parse(body.barcode));
            var brush = null;
            if (brushProvider.brushForBarcode) {
                brush = brushProvider.brushForBarcode(barcode);
            }
            NativeModule.finishBrushForTrackedBarcodeCallback(brush ? JSON.stringify(brush.toJSON()) : null, barcode.selectionIdentifier);
        });
        return subscriptionResult;
    };
    // TODO: We need to unsubscribe from the providers when the overlay is removed. Need spec.
    // https://scandit.atlassian.net/browse/SDC-16608
    BarcodeSelectionOverlayProxy.prototype.unsubscribeProviders = function () {
        var _a, _b;
        (_a = this.brushForAimedBarcodeProvider) === null || _a === void 0 ? void 0 : _a.remove();
        (_b = this.brushForTrackedBarcodeProvider) === null || _b === void 0 ? void 0 : _b.remove();
        this.brushForAimedBarcodeProvider = null;
        this.brushForTrackedBarcodeProvider = null;
        NativeModule.removeAimedBarcodeBrushProvider();
        NativeModule.removeTrackedBarcodeBrushProvider();
    };
    return BarcodeSelectionOverlayProxy;
}());
exports.BarcodeSelectionOverlayProxy = BarcodeSelectionOverlayProxy;
//# sourceMappingURL=BarcodeSelectionOverlayProxy.js.map