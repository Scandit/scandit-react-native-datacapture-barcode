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
exports.SparkScanViewSettings = exports.SparkScanViewHandMode = exports.SparkScanScanningBehavior = exports.SparkScanScanningModeTarget = exports.SparkScanScanningModeDefault = void 0;
var SparkScanDefaults_1 = require("./private/SparkScanDefaults");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
// tslint:disable-next-line:variable-name
var ViewSettingsDefaults = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.SparkScanViewSettings;
var SparkScanScanningModeDefault = /** @class */ (function (_super) {
    __extends(SparkScanScanningModeDefault, _super);
    function SparkScanScanningModeDefault(scanningBehavior) {
        var _this = _super.call(this) || this;
        _this.type = 'default';
        _this._settings = new PrivateSparkScanScanningModeSettings(scanningBehavior);
        return _this;
    }
    Object.defineProperty(SparkScanScanningModeDefault.prototype, "scanningBehavior", {
        get: function () {
            return this._settings.scanningBehavior;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Serializeable_1.nameForSerialization('settings')
    ], SparkScanScanningModeDefault.prototype, "_settings", void 0);
    return SparkScanScanningModeDefault;
}(Serializeable_1.DefaultSerializeable));
exports.SparkScanScanningModeDefault = SparkScanScanningModeDefault;
var SparkScanScanningModeTarget = /** @class */ (function (_super) {
    __extends(SparkScanScanningModeTarget, _super);
    function SparkScanScanningModeTarget(scanningBehavior) {
        var _this = _super.call(this) || this;
        _this.type = 'target';
        _this._settings = new PrivateSparkScanScanningModeSettings(scanningBehavior);
        return _this;
    }
    Object.defineProperty(SparkScanScanningModeTarget.prototype, "scanningBehavior", {
        get: function () {
            return this._settings.scanningBehavior;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Serializeable_1.nameForSerialization('settings')
    ], SparkScanScanningModeTarget.prototype, "_settings", void 0);
    return SparkScanScanningModeTarget;
}(Serializeable_1.DefaultSerializeable));
exports.SparkScanScanningModeTarget = SparkScanScanningModeTarget;
var PrivateSparkScanScanningModeSettings = /** @class */ (function (_super) {
    __extends(PrivateSparkScanScanningModeSettings, _super);
    function PrivateSparkScanScanningModeSettings(scanScanningBehavior) {
        var _this = _super.call(this) || this;
        _this._scanningBehavior = scanScanningBehavior;
        return _this;
    }
    Object.defineProperty(PrivateSparkScanScanningModeSettings.prototype, "scanningBehavior", {
        get: function () {
            return this._scanningBehavior;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Serializeable_1.nameForSerialization('scanningBehavior')
    ], PrivateSparkScanScanningModeSettings.prototype, "_scanningBehavior", void 0);
    return PrivateSparkScanScanningModeSettings;
}(Serializeable_1.DefaultSerializeable));
var SparkScanScanningBehavior;
(function (SparkScanScanningBehavior) {
    SparkScanScanningBehavior["Single"] = "single";
    SparkScanScanningBehavior["Continuous"] = "continuous";
})(SparkScanScanningBehavior = exports.SparkScanScanningBehavior || (exports.SparkScanScanningBehavior = {}));
var SparkScanViewHandMode;
(function (SparkScanViewHandMode) {
    SparkScanViewHandMode["Right"] = "right";
    SparkScanViewHandMode["Left"] = "left";
})(SparkScanViewHandMode = exports.SparkScanViewHandMode || (exports.SparkScanViewHandMode = {}));
var SparkScanViewSettings = /** @class */ (function (_super) {
    __extends(SparkScanViewSettings, _super);
    function SparkScanViewSettings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.triggerButtonCollapseTimeout = ViewSettingsDefaults.triggerButtonCollapseTimeout;
        _this.continuousCaptureTimeout = ViewSettingsDefaults.continuousCaptureTimeout;
        _this.defaultTorchState = ViewSettingsDefaults.defaultTorchState;
        _this.defaultScanningMode = ViewSettingsDefaults.defaultScanningMode(_this.scanModeFromJSON);
        _this.defaultHandMode = ViewSettingsDefaults.defaultHandMode;
        _this.holdToScanEnabled = ViewSettingsDefaults.holdToScanEnabled;
        _this.soundEnabled = ViewSettingsDefaults.soundEnabled;
        _this.hapticEnabled = ViewSettingsDefaults.hapticEnabled;
        _this.hardwareTriggerEnabled = ViewSettingsDefaults.hardwareTriggerEnabled;
        _this.hardwareTriggerKeyCode = ViewSettingsDefaults.hardwareTriggerKeyCode;
        _this.visualFeedbackEnabled = ViewSettingsDefaults.visualFeedbackEnabled;
        return _this;
    }
    SparkScanViewSettings.prototype.scanModeFromJSON = function (json) {
        var scanningBehavior = json.settings.scanningBehavior;
        if (json.type === 'default') {
            return new SparkScanScanningModeDefault(scanningBehavior);
        }
        else {
            return new SparkScanScanningModeTarget(scanningBehavior);
        }
    };
    return SparkScanViewSettings;
}(Serializeable_1.DefaultSerializeable));
exports.SparkScanViewSettings = SparkScanViewSettings;
//# sourceMappingURL=SparkScanViewSettings.js.map