"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeTrackingSession = void 0;
var Barcode_1 = require("./Barcode");
var BarcodeTrackingSession = /** @class */ (function () {
    function BarcodeTrackingSession() {
    }
    Object.defineProperty(BarcodeTrackingSession.prototype, "addedTrackedBarcodes", {
        get: function () {
            return this._addedTrackedBarcodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeTrackingSession.prototype, "removedTrackedBarcodes", {
        get: function () {
            return this._removedTrackedBarcodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeTrackingSession.prototype, "updatedTrackedBarcodes", {
        get: function () {
            return this._updatedTrackedBarcodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeTrackingSession.prototype, "trackedBarcodes", {
        get: function () {
            return this._trackedBarcodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeTrackingSession.prototype, "frameSequenceID", {
        get: function () {
            return this._frameSequenceID;
        },
        enumerable: false,
        configurable: true
    });
    BarcodeTrackingSession.fromJSON = function (json) {
        var session = new BarcodeTrackingSession();
        session._frameSequenceID = json.frameSequenceId;
        session._addedTrackedBarcodes = json.addedTrackedBarcodes
            .map(function (trackedBarcodeJSON) {
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(trackedBarcodeJSON);
            trackedBarcode.sessionFrameSequenceID = json.frameSequenceId;
            return trackedBarcode;
        });
        session._removedTrackedBarcodes = json.removedTrackedBarcodes;
        session._updatedTrackedBarcodes = json.updatedTrackedBarcodes
            .map(function (trackedBarcodeJSON) {
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(trackedBarcodeJSON);
            trackedBarcode.sessionFrameSequenceID = json.frameSequenceId;
            return trackedBarcode;
        });
        ;
        session._trackedBarcodes = Object.keys(json.trackedBarcodes)
            .reduce(function (trackedBarcodes, identifier) {
            var trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(json.trackedBarcodes[identifier]);
            trackedBarcode.sessionFrameSequenceID = json.frameSequenceId;
            trackedBarcodes[identifier] = trackedBarcode;
            return trackedBarcodes;
        }, {});
        return session;
    };
    BarcodeTrackingSession.prototype.reset = function () {
        return this.listenerProxy.reset();
    };
    return BarcodeTrackingSession;
}());
exports.BarcodeTrackingSession = BarcodeTrackingSession;
//# sourceMappingURL=BarcodeTrackingSession.js.map