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
exports.BarcodeTrackingSettings = exports.BarcodeTrackingScenario = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeDefaults_1 = require("./private/BarcodeDefaults");
var BarcodeTrackingScenario;
(function (BarcodeTrackingScenario) {
    BarcodeTrackingScenario["A"] = "A";
    BarcodeTrackingScenario["B"] = "B";
})(BarcodeTrackingScenario = exports.BarcodeTrackingScenario || (exports.BarcodeTrackingScenario = {}));
var BarcodeTrackingSettings = /** @class */ (function (_super) {
    __extends(BarcodeTrackingSettings, _super);
    function BarcodeTrackingSettings() {
        var _this = _super.call(this) || this;
        _this.scenario = null;
        _this.properties = {};
        _this.symbologies = {};
        return _this;
    }
    Object.defineProperty(BarcodeTrackingSettings.prototype, "enabledSymbologies", {
        get: function () {
            var _this = this;
            return Object.keys(this.symbologies)
                .filter(function (symbology) { return _this.symbologies[symbology].isEnabled; });
        },
        enumerable: false,
        configurable: true
    });
    BarcodeTrackingSettings.forScenario = function (scenario) {
        var settings = new BarcodeTrackingSettings();
        settings.scenario = scenario;
        return settings;
    };
    BarcodeTrackingSettings.prototype.settingsForSymbology = function (symbology) {
        if (!this.symbologies[symbology]) {
            var symbologySettings = BarcodeDefaults_1.BarcodeDefaults.SymbologySettings[symbology];
            symbologySettings._symbology = symbology;
            this.symbologies[symbology] = symbologySettings;
        }
        return this.symbologies[symbology];
    };
    BarcodeTrackingSettings.prototype.setProperty = function (name, value) {
        this.properties[name] = value;
    };
    BarcodeTrackingSettings.prototype.getProperty = function (name) {
        return this.properties[name];
    };
    BarcodeTrackingSettings.prototype.enableSymbologies = function (symbologies) {
        var _this = this;
        symbologies.forEach(function (symbology) { return _this.enableSymbology(symbology, true); });
    };
    BarcodeTrackingSettings.prototype.enableSymbology = function (symbology, enabled) {
        this.settingsForSymbology(symbology).isEnabled = enabled;
    };
    return BarcodeTrackingSettings;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeTrackingSettings = BarcodeTrackingSettings;
//# sourceMappingURL=BarcodeTrackingSettings.js.map