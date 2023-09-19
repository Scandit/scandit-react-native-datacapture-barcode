"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeCountSession = void 0;
var react_native_1 = require("react-native");
var Barcode_1 = require("./Barcode");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeSpatialGrid_1 = require("./BarcodeSpatialGrid");
// tslint:disable:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureBarcodeCount;
// tslint:enable:variable-name
var BarcodeCountSession = /** @class */ (function (_super) {
    __extends(BarcodeCountSession, _super);
    function BarcodeCountSession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarcodeCountSession.fromJSON = function (json) {
        var session = new BarcodeCountSession();
        session._frameSequenceID = json.frameSequenceId;
        session._additionalBarcodes = json.additionalBarcodes;
        session._recognizedBarcodes = {};
        Object.entries(json.recognizedBarcodes)
            .forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var trackedBarcode = Barcode_1.TrackedBarcode.fromJSON(value, session._frameSequenceID);
            session._recognizedBarcodes[parseInt(key, 10)] = trackedBarcode;
        });
        return session;
    };
    Object.defineProperty(BarcodeCountSession.prototype, "recognizedBarcodes", {
        get: function () {
            return this._recognizedBarcodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountSession.prototype, "additionalBarcodes", {
        get: function () {
            return this._additionalBarcodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountSession.prototype, "frameSequenceID", {
        get: function () {
            return this._frameSequenceID;
        },
        enumerable: false,
        configurable: true
    });
    BarcodeCountSession.prototype.reset = function () {
        return NativeModule.resetSession();
    };
    BarcodeCountSession.prototype.getSpatialMap = function () {
        return NativeModule.getSpatialMap().then(function (barcodeSpatialGridJSON) {
            if (barcodeSpatialGridJSON) {
                var payload = JSON.parse(barcodeSpatialGridJSON);
                return BarcodeSpatialGrid_1.BarcodeSpatialGrid.fromJSON(payload);
            }
            return null;
        });
    };
    BarcodeCountSession.prototype.getSpatialMapWithHints = function (expectedNumberOfRows, expectedNumberOfColumns) {
        return NativeModule.getSpatialMapWithHints(expectedNumberOfRows, expectedNumberOfColumns).then(function (barcodeSpatialGridJSON) {
            if (barcodeSpatialGridJSON) {
                var payload = JSON.parse(barcodeSpatialGridJSON);
                return BarcodeSpatialGrid_1.BarcodeSpatialGrid.fromJSON(payload);
            }
            return null;
        });
    };
    __decorate([
        (0, Serializeable_1.nameForSerialization)('recognizedBarcodes')
    ], BarcodeCountSession.prototype, "_recognizedBarcodes", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('additionalBarcodes')
    ], BarcodeCountSession.prototype, "_additionalBarcodes", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('frameSequenceID')
    ], BarcodeCountSession.prototype, "_frameSequenceID", void 0);
    return BarcodeCountSession;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeCountSession = BarcodeCountSession;
//# sourceMappingURL=BarcodeCountSession.js.map