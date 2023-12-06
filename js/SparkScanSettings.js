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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparkScanSettings = void 0;
var SparkScanDefaults_1 = require("./private/SparkScanDefaults");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeDefaults_1 = require("./private/BarcodeDefaults");
var LocationSelection_1 = require("scandit-react-native-datacapture-core/js/LocationSelection");
var SparkScanSettings = /** @class */ (function (_super) {
    __extends(SparkScanSettings, _super);
    function SparkScanSettings() {
        var _this = _super.call(this) || this;
        _this.codeDuplicateFilter = SparkScanDefaults_1.SparkScanDefaults.SparkScanSettings.codeDuplicateFilter;
        _this.singleBarcodeAutoDetection = SparkScanDefaults_1.SparkScanDefaults.SparkScanSettings.singleBarcodeAutoDetection;
        _this.locationSelection = SparkScanDefaults_1.SparkScanDefaults.SparkScanSettings.locationSelection(_this.locationSelectionFromJSON);
        _this.properties = {};
        _this.symbologies = {};
        return _this;
    }
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
    SparkScanSettings.prototype.locationSelectionFromJSON = function (json) {
        var type = json.type;
        if (type === 'none') {
            return LocationSelection_1.NoneLocationSelection;
        }
        else if (type === 'radius') {
            return LocationSelection_1.RadiusLocationSelection
                .fromJSON(json);
        }
        else {
            return LocationSelection_1.RectangularLocationSelection
                .fromJSON(json);
        }
    };
    return SparkScanSettings;
}(Serializeable_1.DefaultSerializeable));
exports.SparkScanSettings = SparkScanSettings;
//# sourceMappingURL=SparkScanSettings.js.map