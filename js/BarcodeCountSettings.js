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
exports.BarcodeCountSettings = void 0;
var BarcodeCountDefaults_1 = require("./private/BarcodeCountDefaults");
var BarcodeDefaults_1 = require("./private/BarcodeDefaults");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeCountSettings = /** @class */ (function (_super) {
    __extends(BarcodeCountSettings, _super);
    function BarcodeCountSettings() {
        var _this = _super.call(this) || this;
        _this.symbologies = {};
        _this.properties = {};
        _this._filterSettings = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountSettings.barcodeFilterSettings;
        _this._expectsOnlyUniqueBarcodes = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountSettings.expectOnlyUniqueBarcodes;
        _this._mappingEnabled = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountSettings.mappingEnabled;
        return _this;
    }
    Object.defineProperty(BarcodeCountSettings.prototype, "expectsOnlyUniqueBarcodes", {
        get: function () {
            return this._expectsOnlyUniqueBarcodes;
        },
        set: function (expectsOnlyUniqueBarcodes) {
            this._expectsOnlyUniqueBarcodes = expectsOnlyUniqueBarcodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountSettings.prototype, "mappingEnabled", {
        get: function () {
            return this._mappingEnabled;
        },
        set: function (mappingEnabled) {
            this._mappingEnabled = mappingEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountSettings.prototype, "filterSettings", {
        get: function () {
            return this._filterSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountSettings.prototype, "enabledSymbologies", {
        get: function () {
            var _this = this;
            return Object.keys(this.symbologies)
                .filter(function (symbology) { return _this.symbologies[symbology].isEnabled; });
        },
        enumerable: false,
        configurable: true
    });
    BarcodeCountSettings.prototype.settingsForSymbology = function (symbology) {
        if (!this.symbologies[symbology]) {
            var symbologySettings = BarcodeDefaults_1.BarcodeDefaults.SymbologySettings[symbology];
            symbologySettings._symbology = symbology;
            this.symbologies[symbology] = symbologySettings;
        }
        return this.symbologies[symbology];
    };
    BarcodeCountSettings.prototype.enableSymbologies = function (symbologies) {
        var _this = this;
        symbologies.forEach(function (symbology) { return _this.enableSymbology(symbology, true); });
    };
    BarcodeCountSettings.prototype.enableSymbology = function (symbology, enabled) {
        this.settingsForSymbology(symbology).isEnabled = enabled;
    };
    BarcodeCountSettings.prototype.setProperty = function (name, value) {
        this.properties[name] = value;
    };
    BarcodeCountSettings.prototype.getProperty = function (name) {
        return this.properties[name];
    };
    __decorate([
        (0, Serializeable_1.nameForSerialization)('filterSettings')
    ], BarcodeCountSettings.prototype, "_filterSettings", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('expectsOnlyUniqueBarcodes')
    ], BarcodeCountSettings.prototype, "_expectsOnlyUniqueBarcodes", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('mappingEnabled')
    ], BarcodeCountSettings.prototype, "_mappingEnabled", void 0);
    return BarcodeCountSettings;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeCountSettings = BarcodeCountSettings;
//# sourceMappingURL=BarcodeCountSettings.js.map