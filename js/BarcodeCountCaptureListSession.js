"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeCountCaptureListSession = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeCountCaptureListSession = /** @class */ (function (_super) {
    __extends(BarcodeCountCaptureListSession, _super);
    function BarcodeCountCaptureListSession(correctBarcodes, wrongBarcodes, missingBarcodes, additionalBarcodes) {
        var _this = _super.call(this) || this;
        _this._correctBarcodes = correctBarcodes;
        _this._wrongBarcodes = wrongBarcodes;
        _this._missingBarcodes = missingBarcodes;
        _this._additionalBarcodes = additionalBarcodes;
        return _this;
    }
    Object.defineProperty(BarcodeCountCaptureListSession.prototype, "correctBarcodes", {
        get: function () {
            return this._correctBarcodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountCaptureListSession.prototype, "wrongBarcodes", {
        get: function () {
            return this._wrongBarcodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountCaptureListSession.prototype, "missingBarcodes", {
        get: function () {
            return this._missingBarcodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountCaptureListSession.prototype, "additionalBarcodes", {
        get: function () {
            return this._additionalBarcodes;
        },
        enumerable: false,
        configurable: true
    });
    BarcodeCountCaptureListSession.fromJSON = function (json) {
        var correctBarcodes = json.correctBarcodes;
        var wrongBarcodes = json.wrongBarcodes;
        var missingBarcodes = json.missingBarcodes;
        var additionalBarcodes = json.additionalBarcodes;
        return new BarcodeCountCaptureListSession(correctBarcodes, wrongBarcodes, missingBarcodes, additionalBarcodes);
    };
    __decorate([
        Serializeable_1.nameForSerialization('correctBarcodes')
    ], BarcodeCountCaptureListSession.prototype, "_correctBarcodes", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('wrongBarcodes')
    ], BarcodeCountCaptureListSession.prototype, "_wrongBarcodes", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('missingBarcodes')
    ], BarcodeCountCaptureListSession.prototype, "_missingBarcodes", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('additionalBarcodes')
    ], BarcodeCountCaptureListSession.prototype, "_additionalBarcodes", void 0);
    return BarcodeCountCaptureListSession;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeCountCaptureListSession = BarcodeCountCaptureListSession;
//# sourceMappingURL=BarcodeCountCaptureListSession.js.map