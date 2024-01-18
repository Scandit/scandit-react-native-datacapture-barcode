"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeSelectionSession = void 0;
var Barcode_1 = require("./Barcode");
var BarcodeSelectionSession = /** @class */ (function () {
    function BarcodeSelectionSession() {
    }
    Object.defineProperty(BarcodeSelectionSession.prototype, "selectedBarcodes", {
        get: function () {
            return this._selectedBarcodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeSelectionSession.prototype, "newlySelectedBarcodes", {
        get: function () {
            return this._newlySelectedBarcodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeSelectionSession.prototype, "newlyUnselectedBarcodes", {
        get: function () {
            return this._newlyUnselectedBarcodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeSelectionSession.prototype, "frameSequenceID", {
        get: function () {
            return this._frameSequenceID;
        },
        enumerable: false,
        configurable: true
    });
    BarcodeSelectionSession.fromJSON = function (json) {
        var session = new BarcodeSelectionSession();
        session._selectedBarcodes = json.selectedBarcodes
            .map(Barcode_1.Barcode.fromJSON);
        session._newlySelectedBarcodes = json.newlySelectedBarcodes
            .map(Barcode_1.Barcode.fromJSON);
        session._newlyUnselectedBarcodes = json.newlyUnselectedBarcodes
            .map(Barcode_1.Barcode.fromJSON);
        session._frameSequenceID = json.frameSequenceId;
        return session;
    };
    BarcodeSelectionSession.prototype.getCount = function (barcode) {
        return this.listenerProxy.getCount(barcode);
    };
    BarcodeSelectionSession.prototype.reset = function () {
        return this.listenerProxy.reset();
    };
    return BarcodeSelectionSession;
}());
exports.BarcodeSelectionSession = BarcodeSelectionSession;
//# sourceMappingURL=BarcodeSelectionSession.js.map