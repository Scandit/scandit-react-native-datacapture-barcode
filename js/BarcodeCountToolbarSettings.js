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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeCountToolbarSettings = void 0;
var BarcodeCountDefaults_1 = require("./private/BarcodeCountDefaults");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeCountToolbarSettings = /** @class */ (function (_super) {
    __extends(BarcodeCountToolbarSettings, _super);
    function BarcodeCountToolbarSettings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioOnButtonText = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.audioOnButtonText;
        _this.audioOffButtonText = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.audioOffButtonText;
        _this.audioButtonContentDescription = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.audioButtonContentDescription;
        _this.audioButtonAccessibilityHint = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.audioButtonAccessibilityHint;
        _this.audioButtonAccessibilityLabel = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.audioButtonAccessibilityLabel;
        _this.vibrationOnButtonText = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.vibrationOnButtonText;
        _this.vibrationOffButtonText = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.vibrationOffButtonText;
        _this.vibrationButtonContentDescription = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.vibrationButtonContentDescription;
        _this.vibrationButtonAccessibilityHint = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.vibrationButtonAccessibilityHint;
        _this.vibrationButtonAccessibilityLabel = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.vibrationButtonAccessibilityLabel;
        _this.strapModeOnButtonText = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.strapModeOnButtonText;
        _this.strapModeOffButtonText = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.strapModeOffButtonText;
        _this.strapModeButtonContentDescription = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.strapModeButtonContentDescription;
        _this.strapModeButtonAccessibilityHint = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.strapModeButtonAccessibilityHint;
        _this.strapModeButtonAccessibilityLabel = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.strapModeButtonAccessibilityLabel;
        _this.colorSchemeOnButtonText = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.colorSchemeOnButtonText;
        _this.colorSchemeOffButtonText = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.colorSchemeOffButtonText;
        _this.colorSchemeButtonContentDescription = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.colorSchemeButtonContentDescription;
        _this.colorSchemeButtonAccessibilityHint = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.colorSchemeButtonAccessibilityHint;
        _this.colorSchemeButtonAccessibilityLabel = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.toolbarSettings.colorSchemeButtonAccessibilityLabel;
        return _this;
    }
    return BarcodeCountToolbarSettings;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeCountToolbarSettings = BarcodeCountToolbarSettings;
//# sourceMappingURL=BarcodeCountToolbarSettings.js.map