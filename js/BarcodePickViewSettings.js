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
exports.BarcodePickViewSettings = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodePickDefaults_1 = require("./private/BarcodePickDefaults");
var BarcodePickViewSettings = /** @class */ (function (_super) {
    __extends(BarcodePickViewSettings, _super);
    function BarcodePickViewSettings() {
        var _this = _super.call(this) || this;
        _this._highlightStyle = BarcodePickDefaults_1.BarcodePickDefaults.ViewSettings.highlightStyle;
        _this._showLoadingDialog = BarcodePickDefaults_1.BarcodePickDefaults.ViewSettings.showLoadingDialog;
        _this._loadingDialogText = BarcodePickDefaults_1.BarcodePickDefaults.ViewSettings.loadingDialogText;
        _this._showGuidelines = BarcodePickDefaults_1.BarcodePickDefaults.ViewSettings.showGuidelines;
        _this._initialGuidelineText = BarcodePickDefaults_1.BarcodePickDefaults.ViewSettings.initialGuidelineText;
        _this._moveCloserGuidelineText = BarcodePickDefaults_1.BarcodePickDefaults.ViewSettings.moveCloserGuidelineText;
        _this._showHints = BarcodePickDefaults_1.BarcodePickDefaults.ViewSettings.showHints;
        _this._onFirstItemToPickFoundHintText = BarcodePickDefaults_1.BarcodePickDefaults.ViewSettings.onFirstItemToPickFoundHintText;
        _this._onFirstItemPickCompletedHintText = BarcodePickDefaults_1.BarcodePickDefaults.ViewSettings.onFirstItemUnpickCompletedHintText;
        _this._onFirstUnmarkedItemPickCompletedHintText = BarcodePickDefaults_1.BarcodePickDefaults.ViewSettings.onFirstUnmarkedItemPickCompletedHintText;
        _this._onFirstItemUnpickCompletedHintText = BarcodePickDefaults_1.BarcodePickDefaults.ViewSettings.onFirstItemUnpickCompletedHintText;
        return _this;
    }
    Object.defineProperty(BarcodePickViewSettings.prototype, "highlightStyle", {
        get: function () {
            return this._highlightStyle;
        },
        set: function (style) {
            this._highlightStyle = style;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodePickViewSettings.prototype, "showLoadingDialog", {
        get: function () {
            return this._showLoadingDialog;
        },
        set: function (style) {
            this._showLoadingDialog = style;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodePickViewSettings.prototype, "loadingDialogText", {
        get: function () {
            return this._loadingDialogText;
        },
        set: function (text) {
            this._loadingDialogText = text;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodePickViewSettings.prototype, "showGuidelines", {
        get: function () {
            return this._showGuidelines;
        },
        set: function (show) {
            this._showGuidelines = show;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodePickViewSettings.prototype, "initialGuidelineText", {
        get: function () {
            return this._initialGuidelineText;
        },
        set: function (text) {
            this._initialGuidelineText = text;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodePickViewSettings.prototype, "moveCloserGuidelineText", {
        get: function () {
            return this._moveCloserGuidelineText;
        },
        set: function (text) {
            this._moveCloserGuidelineText = text;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodePickViewSettings.prototype, "showHints", {
        get: function () {
            return this._showHints;
        },
        set: function (show) {
            this._showHints = show;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodePickViewSettings.prototype, "onFirstItemToPickFoundHintText", {
        get: function () {
            return this._onFirstItemToPickFoundHintText;
        },
        set: function (text) {
            this._onFirstItemToPickFoundHintText = text;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodePickViewSettings.prototype, "onFirstItemPickCompletedHintText", {
        get: function () {
            return this._onFirstItemPickCompletedHintText;
        },
        set: function (text) {
            this._onFirstItemPickCompletedHintText = text;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodePickViewSettings.prototype, "onFirstUnmarkedItemPickCompletedHintText", {
        get: function () {
            return this._onFirstUnmarkedItemPickCompletedHintText;
        },
        set: function (text) {
            this._onFirstUnmarkedItemPickCompletedHintText = text;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodePickViewSettings.prototype, "onFirstItemUnpickCompletedHintText", {
        get: function () {
            return this._onFirstItemUnpickCompletedHintText;
        },
        set: function (text) {
            this._onFirstItemUnpickCompletedHintText = text;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0, Serializeable_1.nameForSerialization)('highlightStyle')
    ], BarcodePickViewSettings.prototype, "_highlightStyle", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('showLoadingDialog')
    ], BarcodePickViewSettings.prototype, "_showLoadingDialog", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('loadingDialogText')
    ], BarcodePickViewSettings.prototype, "_loadingDialogText", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('showGuidelines')
    ], BarcodePickViewSettings.prototype, "_showGuidelines", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('initialGuidelineText')
    ], BarcodePickViewSettings.prototype, "_initialGuidelineText", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('moveCloserGuidelineText')
    ], BarcodePickViewSettings.prototype, "_moveCloserGuidelineText", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('showHints')
    ], BarcodePickViewSettings.prototype, "_showHints", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('onFirstItemToPickFoundHintText')
    ], BarcodePickViewSettings.prototype, "_onFirstItemToPickFoundHintText", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('onFirstItemPickCompletedHintText')
    ], BarcodePickViewSettings.prototype, "_onFirstItemPickCompletedHintText", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('onFirstUnmarkedItemPickCompletedHintText')
    ], BarcodePickViewSettings.prototype, "_onFirstUnmarkedItemPickCompletedHintText", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('onFirstItemUnpickCompletedHintText')
    ], BarcodePickViewSettings.prototype, "_onFirstItemUnpickCompletedHintText", void 0);
    return BarcodePickViewSettings;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodePickViewSettings = BarcodePickViewSettings;
//# sourceMappingURL=BarcodePickViewSettings.js.map