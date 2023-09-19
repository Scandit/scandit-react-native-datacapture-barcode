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
exports.BarcodePickSettings = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodePickDefaults_1 = require("./private/BarcodePickDefaults");
var BarcodePickSettings = /** @class */ (function (_super) {
    __extends(BarcodePickSettings, _super);
    function BarcodePickSettings() {
        var _this = _super.call(this) || this;
        _this.symbologies = {};
        _this.properties = {};
        _this._soundEnabled = BarcodePickDefaults_1.BarcodePickDefaults.BarcodePickSettings.soundEnabled;
        _this._hapticsEnabled = BarcodePickDefaults_1.BarcodePickDefaults.BarcodePickSettings.hapticsEnabled;
        return _this;
    }
    BarcodePickSettings.prototype.settingsForSymbology = function (symbology) {
        if (!this.symbologies[symbology]) {
            var symbologySettings = BarcodePickDefaults_1.BarcodePickDefaults.SymbologySettings[symbology];
            symbologySettings._symbology = symbology;
            this.symbologies[symbology] = symbologySettings;
        }
        return this.symbologies[symbology];
    };
    Object.defineProperty(BarcodePickSettings.prototype, "enabledSymbologies", {
        get: function () {
            var _this = this;
            return Object.keys(this.symbologies)
                .filter(function (symbology) { return _this.symbologies[symbology].isEnabled; });
        },
        enumerable: false,
        configurable: true
    });
    BarcodePickSettings.prototype.enableSymbologies = function (symbologies) {
        var _this = this;
        symbologies.forEach(function (symbology) { return _this.enableSymbology(symbology, true); });
    };
    BarcodePickSettings.prototype.enableSymbology = function (symbology, enabled) {
        this.settingsForSymbology(symbology).isEnabled = enabled;
    };
    BarcodePickSettings.prototype.setProperty = function (name, value) {
        this.properties[name] = value;
    };
    BarcodePickSettings.prototype.getProperty = function (name) {
        return this.properties[name];
    };
    Object.defineProperty(BarcodePickSettings.prototype, "soundEnabled", {
        get: function () {
            return this._soundEnabled;
        },
        set: function (enabled) {
            this._soundEnabled = enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodePickSettings.prototype, "hapticsEnabled", {
        get: function () {
            return this._hapticsEnabled;
        },
        set: function (enabled) {
            this._hapticsEnabled = enabled;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0, Serializeable_1.nameForSerialization)('soundEnabled')
    ], BarcodePickSettings.prototype, "_soundEnabled", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('hapticEnabled')
    ], BarcodePickSettings.prototype, "_hapticsEnabled", void 0);
    return BarcodePickSettings;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodePickSettings = BarcodePickSettings;
//# sourceMappingURL=BarcodePickSettings.js.map