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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeFilterHighlightSettingsBrush = void 0;
var BarcodeFilterHighlightType_1 = require("./BarcodeFilterHighlightType");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeFilterHighlightSettingsBrush = /** @class */ (function (_super) {
    __extends(BarcodeFilterHighlightSettingsBrush, _super);
    function BarcodeFilterHighlightSettingsBrush(brush) {
        var _this = _super.call(this) || this;
        _this._brush = null;
        _this._highlightType = BarcodeFilterHighlightType_1.BarcodeFilterHighlightType.Brush;
        _this._brush = brush;
        return _this;
    }
    BarcodeFilterHighlightSettingsBrush.create = function (brush) {
        return new BarcodeFilterHighlightSettingsBrush(brush);
    };
    Object.defineProperty(BarcodeFilterHighlightSettingsBrush.prototype, "highlightType", {
        get: function () {
            return this._highlightType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeFilterHighlightSettingsBrush.prototype, "brush", {
        get: function () {
            return this._brush;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0, Serializeable_1.nameForSerialization)('highlightType')
    ], BarcodeFilterHighlightSettingsBrush.prototype, "_highlightType", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('brush')
    ], BarcodeFilterHighlightSettingsBrush.prototype, "_brush", void 0);
    return BarcodeFilterHighlightSettingsBrush;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeFilterHighlightSettingsBrush = BarcodeFilterHighlightSettingsBrush;
//# sourceMappingURL=BarcodeFilterHighlightSettingsBrush.js.map