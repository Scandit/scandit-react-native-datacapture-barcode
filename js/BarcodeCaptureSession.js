"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeCaptureSession = void 0;
var Barcode_1 = require("./Barcode");
var BarcodeCaptureSession = /** @class */ (function () {
    function BarcodeCaptureSession() {
    }
    Object.defineProperty(BarcodeCaptureSession.prototype, "newlyRecognizedBarcodes", {
        get: function () {
            return this._newlyRecognizedBarcodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCaptureSession.prototype, "newlyLocalizedBarcodes", {
        get: function () {
            return this._newlyLocalizedBarcodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCaptureSession.prototype, "frameSequenceID", {
        get: function () {
            return this._frameSequenceID;
        },
        enumerable: false,
        configurable: true
    });
    BarcodeCaptureSession.fromJSON = function (json) {
        var session = new BarcodeCaptureSession();
        session._newlyRecognizedBarcodes = json.newlyRecognizedBarcodes
            .map(Barcode_1.Barcode.fromJSON);
        session._newlyLocalizedBarcodes = json.newlyLocalizedBarcodes
            .map(Barcode_1.LocalizedOnlyBarcode.fromJSON);
        session._frameSequenceID = json.frameSequenceId;
        return session;
    };
    BarcodeCaptureSession.prototype.reset = function () {
        return this.listenerProxy.reset();
    };
    return BarcodeCaptureSession;
}());
exports.BarcodeCaptureSession = BarcodeCaptureSession;
//# sourceMappingURL=BarcodeCaptureSession.js.map