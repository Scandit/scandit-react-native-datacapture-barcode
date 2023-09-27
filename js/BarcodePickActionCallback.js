"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodePickActionCallback = void 0;
var BarcodePickActionCallback = /** @class */ (function () {
    function BarcodePickActionCallback() {
    }
    BarcodePickActionCallback.prototype.onFinish = function (result) {
        this._viewProxy.finishPickAction(this._itemData, result);
    };
    return BarcodePickActionCallback;
}());
exports.BarcodePickActionCallback = BarcodePickActionCallback;
//# sourceMappingURL=BarcodePickActionCallback.js.map