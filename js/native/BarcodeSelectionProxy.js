"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeSelectionProxy = void 0;
var react_native_1 = require("react-native");
// tslint:disable:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureBarcodeSelection;
var EventEmitter = new react_native_1.NativeEventEmitter(NativeModule);
// tslint:enable:variable-name
var BarcodeSelectionProxy = /** @class */ (function () {
    function BarcodeSelectionProxy() {
    }
    BarcodeSelectionProxy.prototype.unfreezeCamera = function () {
        return NativeModule.unfreezeCamera();
    };
    BarcodeSelectionProxy.prototype.reset = function () {
        return NativeModule.resetMode();
    };
    BarcodeSelectionProxy.prototype.selectAimedBarcode = function () {
        return NativeModule.selectAimedBarcode();
    };
    BarcodeSelectionProxy.prototype.unselectBarcodes = function (barcodes) {
        var barcodesJSON = this.convertBarcodesToJSON(barcodes);
        return NativeModule.unselectBarcodes(JSON.stringify({ barcodes: barcodesJSON }));
    };
    BarcodeSelectionProxy.prototype.increaseCountForBarcodes = function (barcodes) {
        var barcodesJSON = this.convertBarcodesToJSON(barcodes);
        return NativeModule.increaseCountForBarcodes(JSON.stringify({ barcodes: barcodesJSON }));
    };
    BarcodeSelectionProxy.prototype.convertBarcodesToJSON = function (barcodes) {
        return barcodes.flat().map(function (barcode) { return ({
            data: barcode.data,
            rawData: barcode.rawData,
            symbology: barcode.symbology,
            symbolCount: barcode.symbolCount
        }); });
    };
    return BarcodeSelectionProxy;
}());
exports.BarcodeSelectionProxy = BarcodeSelectionProxy;
//# sourceMappingURL=BarcodeSelectionProxy.js.map