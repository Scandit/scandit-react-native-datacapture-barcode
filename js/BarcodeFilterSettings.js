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
exports.BarcodeFilterSettings = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeFilterSettings = /** @class */ (function (_super) {
    __extends(BarcodeFilterSettings, _super);
    function BarcodeFilterSettings(excludeEan13, excludeUpca, excludedCodesRegex, excludedSymbolCounts, excludedSymbologies) {
        var _this = _super.call(this) || this;
        _this._excludeEan13 = false;
        _this._excludeUpca = false;
        _this._excludedCodesRegex = '';
        _this._excludedSymbolCounts = {};
        _this._excludedSymbologies = [];
        _this.excludeEan13 = excludeEan13;
        _this.excludeUpca = excludeUpca;
        _this.excludedCodesRegex = excludedCodesRegex;
        _this._excludedSymbolCounts = excludedSymbolCounts;
        _this.excludedSymbologies = excludedSymbologies;
        return _this;
    }
    Object.defineProperty(BarcodeFilterSettings.prototype, "excludeEan13", {
        get: function () {
            return this._excludeEan13;
        },
        set: function (value) {
            this._excludeEan13 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeFilterSettings.prototype, "excludeUpca", {
        get: function () {
            return this._excludeUpca;
        },
        set: function (value) {
            this._excludeUpca = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeFilterSettings.prototype, "excludedCodesRegex", {
        get: function () {
            return this._excludedCodesRegex;
        },
        set: function (value) {
            this._excludedCodesRegex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeFilterSettings.prototype, "excludedSymbologies", {
        get: function () {
            return this._excludedSymbologies;
        },
        set: function (values) {
            this._excludedSymbologies = values;
        },
        enumerable: false,
        configurable: true
    });
    BarcodeFilterSettings.fromJSON = function (json) {
        var excludeEan13 = json.excludeEan13;
        var excludeUpca = json.excludeUpca;
        var excludedCodesRegex = json.excludedCodesRegex;
        var excludedSymbologies = json.excludedSymbologies;
        var excludedSymbolCounts = json.excludedSymbolCounts;
        return new BarcodeFilterSettings(excludeEan13, excludeUpca, excludedCodesRegex, excludedSymbolCounts, excludedSymbologies);
    };
    // @ts-ignore
    BarcodeFilterSettings.prototype.getExcludedSymbolCountsForSymbology = function (symbology) {
        return this._excludedSymbolCounts[symbology] || [];
    };
    // @ts-ignore
    BarcodeFilterSettings.prototype.setExcludedSymbolCounts = function (excludedSymbolCounts, symbology) {
        this._excludedSymbolCounts[symbology] = excludedSymbolCounts;
    };
    __decorate([
        Serializeable_1.nameForSerialization('excludeEan13')
    ], BarcodeFilterSettings.prototype, "_excludeEan13", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('excludeUpca')
    ], BarcodeFilterSettings.prototype, "_excludeUpca", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('excludedCodesRegex')
    ], BarcodeFilterSettings.prototype, "_excludedCodesRegex", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('excludedSymbolCounts')
    ], BarcodeFilterSettings.prototype, "_excludedSymbolCounts", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('excludedSymbologies')
    ], BarcodeFilterSettings.prototype, "_excludedSymbologies", void 0);
    return BarcodeFilterSettings;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeFilterSettings = BarcodeFilterSettings;
//# sourceMappingURL=BarcodeFilterSettings.js.map