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
exports.SparkScanSettings = void 0;
var SparkScanDefaults_1 = require("./private/SparkScanDefaults");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeDefaults_1 = require("./private/BarcodeDefaults");
var SparkScanSettings = /** @class */ (function (_super) {
    __extends(SparkScanSettings, _super);
    function SparkScanSettings() {
        var _this = _super.call(this) || this;
        _this.codeDuplicateFilter = SparkScanDefaults_1.SparkScanDefaults.SparkScanSettings.codeDuplicateFilter;
        _this._singleBarcodeAutoDetection = SparkScanDefaults_1.SparkScanDefaults.SparkScanSettings.singleBarcodeAutoDetection;
        _this._locationSelection = null;
        _this.properties = {};
        _this.symbologies = {};
        return _this;
    }
    Object.defineProperty(SparkScanSettings.prototype, "singleBarcodeAutoDetection", {
        get: function () {
            // tslint:disable-next-line:no-console
            console.warn('singleBarcodeAutoDetection is deprecated and will be removed in a future release.');
            return this._singleBarcodeAutoDetection;
        },
        set: function (isEnabled) {
            // tslint:disable-next-line:no-console
            console.warn('singleBarcodeAutoDetection is deprecated and will be removed in a future release.');
            this._singleBarcodeAutoDetection = isEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanSettings.prototype, "locationSelection", {
        get: function () {
            // tslint:disable-next-line:no-console
            console.warn('locationSelection is deprecated and will be removed in a future release.');
            return this._locationSelection;
        },
        set: function (newValue) {
            // tslint:disable-next-line:no-console
            console.warn('locationSelection is deprecated and will be removed in a future release.');
            this._locationSelection = newValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanSettings.prototype, "enabledSymbologies", {
        get: function () {
            var _this = this;
            return Object.keys(this.symbologies)
                .filter(function (symbology) { return _this.symbologies[symbology].isEnabled; });
        },
        enumerable: false,
        configurable: true
    });
    SparkScanSettings.prototype.settingsForSymbology = function (symbology) {
        if (!this.symbologies[symbology]) {
            var symbologySettings = BarcodeDefaults_1.BarcodeDefaults.SymbologySettings[symbology];
            symbologySettings._symbology = symbology;
            this.symbologies[symbology] = symbologySettings;
        }
        return this.symbologies[symbology];
    };
    SparkScanSettings.prototype.setProperty = function (name, value) {
        this.properties[name] = value;
    };
    SparkScanSettings.prototype.getProperty = function (name) {
        return this.properties[name];
    };
    SparkScanSettings.prototype.enableSymbologies = function (symbologies) {
        var _this = this;
        symbologies.forEach(function (symbology) { return _this.enableSymbology(symbology, true); });
    };
    SparkScanSettings.prototype.enableSymbology = function (symbology, enabled) {
        this.settingsForSymbology(symbology).isEnabled = enabled;
    };
    __decorate([
        (0, Serializeable_1.nameForSerialization)('singleBarcodeAutoDetection')
    ], SparkScanSettings.prototype, "_singleBarcodeAutoDetection", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], SparkScanSettings.prototype, "_locationSelection", void 0);
    return SparkScanSettings;
}(Serializeable_1.DefaultSerializeable));
exports.SparkScanSettings = SparkScanSettings;
//# sourceMappingURL=SparkScanSettings.js.map