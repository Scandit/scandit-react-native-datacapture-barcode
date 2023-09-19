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
exports.SparkScanToastSettings = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var SparkScanToastSettings = /** @class */ (function (_super) {
    __extends(SparkScanToastSettings, _super);
    function SparkScanToastSettings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._toastEnabled = false;
        _this._toastBackgroundColor = null;
        _this._toastTextColor = null;
        _this._targetModeEnabledMessage = null;
        _this._targetModeDisabledMessage = null;
        _this._continuousModeEnabledMessage = null;
        _this._continuousModeDisabledMessage = null;
        _this._cameraTimeoutMessage = null;
        return _this;
    }
    Object.defineProperty(SparkScanToastSettings.prototype, "toastEnabled", {
        get: function () {
            return this._toastEnabled;
        },
        set: function (isEnabled) {
            this._toastEnabled = isEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanToastSettings.prototype, "toastBackgroundColor", {
        get: function () {
            return this._toastBackgroundColor;
        },
        set: function (backgroundColor) {
            this._toastBackgroundColor = backgroundColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanToastSettings.prototype, "toastTextColor", {
        get: function () {
            return this._toastTextColor;
        },
        set: function (textColor) {
            this._toastTextColor = textColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanToastSettings.prototype, "targetModeEnabledMessage", {
        get: function () {
            return this._targetModeEnabledMessage;
        },
        set: function (message) {
            this._targetModeEnabledMessage = message;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanToastSettings.prototype, "targetModeDisabledMessage", {
        get: function () {
            return this._targetModeDisabledMessage;
        },
        set: function (message) {
            this._targetModeDisabledMessage = message;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanToastSettings.prototype, "continuousModeEnabledMessage", {
        get: function () {
            return this._continuousModeEnabledMessage;
        },
        set: function (message) {
            this._continuousModeEnabledMessage = message;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanToastSettings.prototype, "continuousModeDisabledMessage", {
        get: function () {
            return this._continuousModeDisabledMessage;
        },
        set: function (message) {
            this._continuousModeDisabledMessage = message;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanToastSettings.prototype, "cameraTimeoutMessage", {
        get: function () {
            return this._cameraTimeoutMessage;
        },
        set: function (message) {
            this._cameraTimeoutMessage = message;
        },
        enumerable: false,
        configurable: true
    });
    SparkScanToastSettings.fromJSON = function (json) {
        var toastSettings = new SparkScanToastSettings();
        toastSettings._toastEnabled = json.toastEnabled;
        toastSettings._toastBackgroundColor = json.toastBackgroundColor;
        toastSettings._toastTextColor = json.toastTextColor;
        toastSettings._targetModeEnabledMessage = json.targetModeEnabledMessage;
        toastSettings._targetModeDisabledMessage = json.targetModeDisabledMessage;
        toastSettings._continuousModeEnabledMessage = json.continuousModeEnabledMessage;
        toastSettings._continuousModeDisabledMessage = json.continuousModeDisabledMessage;
        toastSettings._cameraTimeoutMessage = json.cameraTimeoutMessage;
        return toastSettings;
    };
    __decorate([
        (0, Serializeable_1.nameForSerialization)('toastEnabled')
    ], SparkScanToastSettings.prototype, "_toastEnabled", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('toastBackgroundColor')
    ], SparkScanToastSettings.prototype, "_toastBackgroundColor", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('toastTextColor')
    ], SparkScanToastSettings.prototype, "_toastTextColor", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('targetModeEnabledMessage')
    ], SparkScanToastSettings.prototype, "_targetModeEnabledMessage", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('targetModeDisabledMessage')
    ], SparkScanToastSettings.prototype, "_targetModeDisabledMessage", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('continuousModeEnabledMessage')
    ], SparkScanToastSettings.prototype, "_continuousModeEnabledMessage", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('continuousModeDisabledMessage')
    ], SparkScanToastSettings.prototype, "_continuousModeDisabledMessage", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('cameraTimeoutMessage')
    ], SparkScanToastSettings.prototype, "_cameraTimeoutMessage", void 0);
    return SparkScanToastSettings;
}(Serializeable_1.DefaultSerializeable));
exports.SparkScanToastSettings = SparkScanToastSettings;
//# sourceMappingURL=SparkScanToastSettings.js.map