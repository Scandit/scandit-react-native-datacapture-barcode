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
exports.BarcodeCaptureSettings = void 0;
var LocationSelection_1 = require("scandit-react-native-datacapture-core/js/LocationSelection");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeCaptureDefaults_1 = require("./private/BarcodeCaptureDefaults");
var BarcodeDefaults_1 = require("./private/BarcodeDefaults");
var BarcodeCaptureSettings = /** @class */ (function (_super) {
    __extends(BarcodeCaptureSettings, _super);
    function BarcodeCaptureSettings() {
        var _this = _super.call(this) || this;
        _this.codeDuplicateFilter = BarcodeCaptureDefaults_1.BarcodeCaptureDefaults.BarcodeCaptureSettings.codeDuplicateFilter;
        _this.locationSelection = null;
        _this.enabledCompositeTypes = [];
        _this.properties = {};
        _this.symbologies = {};
        _this._arucoDictionary = null;
        return _this;
    }
    Object.defineProperty(BarcodeCaptureSettings.prototype, "enabledSymbologies", {
        get: function () {
            var _this = this;
            return Object.keys(this.symbologies)
                .filter(function (symbology) { return _this.symbologies[symbology].isEnabled; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCaptureSettings.prototype, "compositeTypeDescriptions", {
        get: function () {
            return BarcodeDefaults_1.BarcodeDefaults.CompositeTypeDescriptions.reduce(function (descriptions, description) {
                descriptions[description.types[0]] = description;
                return descriptions;
            }, {});
        },
        enumerable: false,
        configurable: true
    });
    BarcodeCaptureSettings.prototype.settingsForSymbology = function (symbology) {
        if (!this.symbologies[symbology]) {
            var symbologySettings = BarcodeDefaults_1.BarcodeDefaults.SymbologySettings[symbology];
            symbologySettings._symbology = symbology;
            this.symbologies[symbology] = symbologySettings;
        }
        return this.symbologies[symbology];
    };
    BarcodeCaptureSettings.prototype.setProperty = function (name, value) {
        this.properties[name] = value;
    };
    BarcodeCaptureSettings.prototype.getProperty = function (name) {
        return this.properties[name];
    };
    BarcodeCaptureSettings.prototype.enableSymbologies = function (symbologies) {
        var _this = this;
        symbologies.forEach(function (symbology) { return _this.enableSymbology(symbology, true); });
    };
    BarcodeCaptureSettings.prototype.enableSymbology = function (symbology, enabled) {
        this.settingsForSymbology(symbology).isEnabled = enabled;
    };
    BarcodeCaptureSettings.prototype.enableSymbologiesForCompositeTypes = function (compositeTypes) {
        var _this = this;
        compositeTypes.forEach(function (compositeType) {
            _this.enableSymbologies(_this.compositeTypeDescriptions[compositeType].symbologies);
        });
    };
    BarcodeCaptureSettings.prototype.setArucoDictionary = function (dictionary) {
        this._arucoDictionary = dictionary;
    };
    __decorate([
        (0, Serializeable_1.serializationDefault)(LocationSelection_1.NoneLocationSelection)
    ], BarcodeCaptureSettings.prototype, "locationSelection", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('arucoDictionary')
    ], BarcodeCaptureSettings.prototype, "_arucoDictionary", void 0);
    return BarcodeCaptureSettings;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeCaptureSettings = BarcodeCaptureSettings;
//# sourceMappingURL=BarcodeCaptureSettings.js.map