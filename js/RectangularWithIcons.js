"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RectangularWithIcons = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodePickDefaults_1 = require("./private/BarcodePickDefaults");
var RectangularWithIcons = /** @class */ (function () {
    // tslint:disable-next-line:no-empty
    function RectangularWithIcons() {
        this._type = 'rectangularWithIcons';
        this._brushesForState = BarcodePickDefaults_1.BarcodePickDefaults.ViewHighlightStyle.RectangularWithIcon.brushesForState;
        this._iconStyle = BarcodePickDefaults_1.BarcodePickDefaults.ViewHighlightStyle.RectangularWithIcon.iconStyle;
    }
    RectangularWithIcons.prototype.getBrushForState = function (state) {
        return (this._brushesForState.filter(function (item) { return item.barcodePickState === state; })[0] || {}).brush;
    };
    RectangularWithIcons.prototype.setBrushForState = function (brush, state) {
        var indexToUpdate = this._brushesForState.findIndex(function (item) { return item.barcodePickState === state; });
        this._brushesForState[indexToUpdate].brush = brush;
    };
    Object.defineProperty(RectangularWithIcons.prototype, "iconStyle", {
        get: function () {
            return this._iconStyle;
        },
        set: function (style) {
            this._iconStyle = style;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0, Serializeable_1.nameForSerialization)('type')
    ], RectangularWithIcons.prototype, "_type", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('brushesForState')
    ], RectangularWithIcons.prototype, "_brushesForState", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('iconStyle')
    ], RectangularWithIcons.prototype, "_iconStyle", void 0);
    return RectangularWithIcons;
}());
exports.RectangularWithIcons = RectangularWithIcons;
//# sourceMappingURL=RectangularWithIcons.js.map