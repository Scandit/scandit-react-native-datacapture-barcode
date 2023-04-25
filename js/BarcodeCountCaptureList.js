"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeCountCaptureList = void 0;
var BarcodeCountCaptureList = /** @class */ (function () {
    function BarcodeCountCaptureList(listener, targetBarcodes) {
        this.listener = listener;
        this.targetBarcodes = targetBarcodes;
    }
    BarcodeCountCaptureList.create = function (listener, targetBarcodes) {
        return new BarcodeCountCaptureList(listener, targetBarcodes);
    };
    return BarcodeCountCaptureList;
}());
exports.BarcodeCountCaptureList = BarcodeCountCaptureList;
//# sourceMappingURL=BarcodeCountCaptureList.js.map