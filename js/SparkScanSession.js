"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparkScanSession = void 0;
var Barcode_1 = require("./Barcode");
var SparkScanSession = /** @class */ (function () {
    function SparkScanSession() {
    }
    SparkScanSession.fromJSON = function (json) {
        var session = new SparkScanSession();
        session._newlyRecognizedBarcodes = json.newlyRecognizedBarcodes.map(Barcode_1.Barcode.fromJSON);
        session._frameSequenceID = json.frameSequenceId;
        return session;
    };
    Object.defineProperty(SparkScanSession.prototype, "newlyRecognizedBarcodes", {
        get: function () {
            return this._newlyRecognizedBarcodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanSession.prototype, "frameSequenceID", {
        get: function () {
            return this._frameSequenceID;
        },
        enumerable: false,
        configurable: true
    });
    SparkScanSession.prototype.reset = function () {
        return this.listenerProxy.reset();
    };
    return SparkScanSession;
}());
exports.SparkScanSession = SparkScanSession;
//# sourceMappingURL=SparkScanSession.js.map