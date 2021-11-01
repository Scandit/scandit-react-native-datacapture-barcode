"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackedBarcode = exports.LocalizedOnlyBarcode = exports.Barcode = void 0;
var Common_1 = require("scandit-react-native-datacapture-core/js/Common");
var Symbology_Related_1 = require("./Symbology+Related");
var Barcode = /** @class */ (function () {
    function Barcode() {
    }
    Object.defineProperty(Barcode.prototype, "symbology", {
        get: function () { return this._symbology; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Barcode.prototype, "data", {
        get: function () { return this._data; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Barcode.prototype, "rawData", {
        get: function () { return this._rawData; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Barcode.prototype, "compositeData", {
        get: function () { return this._compositeData; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Barcode.prototype, "compositeRawData", {
        get: function () { return this._compositeRawData; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Barcode.prototype, "addOnData", {
        get: function () { return this._addOnData; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Barcode.prototype, "encodingRanges", {
        get: function () { return this._encodingRanges; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Barcode.prototype, "location", {
        get: function () { return this._location; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Barcode.prototype, "isGS1DataCarrier", {
        get: function () { return this._isGS1DataCarrier; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Barcode.prototype, "compositeFlag", {
        get: function () { return this._compositeFlag; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Barcode.prototype, "isColorInverted", {
        get: function () { return this._isColorInverted; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Barcode.prototype, "symbolCount", {
        get: function () { return this._symbolCount; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Barcode.prototype, "frameID", {
        get: function () { return this._frameID; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Barcode.prototype, "selectionIdentifier", {
        get: function () { return this.data + this.symbology; },
        enumerable: false,
        configurable: true
    });
    Barcode.fromJSON = function (json) {
        var barcode = new Barcode();
        barcode._symbology = json.symbology;
        barcode._data = json.data;
        barcode._rawData = json.rawData;
        barcode._compositeData = json.compositeData;
        barcode._compositeRawData = json.compositeRawData;
        barcode._addOnData = json.addOnData === undefined ? null : json.addOnData;
        barcode._isGS1DataCarrier = json.isGS1DataCarrier;
        barcode._compositeFlag = json.compositeFlag;
        barcode._isColorInverted = json.isColorInverted;
        barcode._symbolCount = json.symbolCount;
        barcode._frameID = json.frameId;
        barcode._encodingRanges = json.encodingRanges.map(Symbology_Related_1.EncodingRange.fromJSON);
        barcode._location = Common_1.Quadrilateral.fromJSON(json.location);
        return barcode;
    };
    return Barcode;
}());
exports.Barcode = Barcode;
var LocalizedOnlyBarcode = /** @class */ (function () {
    function LocalizedOnlyBarcode() {
    }
    Object.defineProperty(LocalizedOnlyBarcode.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LocalizedOnlyBarcode.prototype, "frameID", {
        get: function () {
            return this._frameID;
        },
        enumerable: false,
        configurable: true
    });
    LocalizedOnlyBarcode.fromJSON = function (json) {
        var localizedBarcode = new LocalizedOnlyBarcode();
        localizedBarcode._location = Common_1.Quadrilateral.fromJSON(json.location);
        localizedBarcode._frameID = json.frameId;
        return localizedBarcode;
    };
    return LocalizedOnlyBarcode;
}());
exports.LocalizedOnlyBarcode = LocalizedOnlyBarcode;
var TrackedBarcode = /** @class */ (function () {
    function TrackedBarcode() {
    }
    Object.defineProperty(TrackedBarcode.prototype, "barcode", {
        get: function () { return this._barcode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrackedBarcode.prototype, "location", {
        get: function () { return this._location; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrackedBarcode.prototype, "identifier", {
        get: function () { return this._identifier; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrackedBarcode.prototype, "shouldAnimateFromPreviousToNextState", {
        get: function () { return this._shouldAnimateFromPreviousToNextState; },
        enumerable: false,
        configurable: true
    });
    TrackedBarcode.fromJSON = function (json) {
        var trackedBarcode = new TrackedBarcode();
        // The serialization returns the identifier as a string, not a number, which it originally is.
        // This is because the identifier needs to be used as a key in a dictionary, which in JSON can only be a string.
        // We can assume that it is a number in the string that we can safely parse.
        trackedBarcode._identifier = parseInt(json.identifier, 10);
        trackedBarcode._shouldAnimateFromPreviousToNextState = json.shouldAnimateFromPreviousToNextState;
        trackedBarcode._barcode = Barcode.fromJSON(json.barcode);
        trackedBarcode._location = Common_1.Quadrilateral.fromJSON(json.location);
        return trackedBarcode;
    };
    return TrackedBarcode;
}());
exports.TrackedBarcode = TrackedBarcode;
//# sourceMappingURL=Barcode.js.map