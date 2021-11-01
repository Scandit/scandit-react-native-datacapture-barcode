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
exports.BarcodeSelectionBasicOverlay = exports.BarcodeSelectionBasicOverlayStyle = void 0;
var Common_1 = require("scandit-react-native-datacapture-core/js/Common");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var Viewfinder_1 = require("scandit-react-native-datacapture-core/js/Viewfinder");
var BarcodeSelectionDefaults_1 = require("./private/BarcodeSelectionDefaults");
var BarcodeSelectionBasicOverlayStyle;
(function (BarcodeSelectionBasicOverlayStyle) {
    BarcodeSelectionBasicOverlayStyle["Frame"] = "frame";
    BarcodeSelectionBasicOverlayStyle["Dot"] = "dot";
})(BarcodeSelectionBasicOverlayStyle = exports.BarcodeSelectionBasicOverlayStyle || (exports.BarcodeSelectionBasicOverlayStyle = {}));
var BarcodeSelectionBasicOverlay = /** @class */ (function (_super) {
    __extends(BarcodeSelectionBasicOverlay, _super);
    function BarcodeSelectionBasicOverlay() {
        var _this = _super.call(this) || this;
        _this.type = 'barcodeSelectionBasic';
        _this._shouldShowScanAreaGuides = false;
        _this._shouldShowHints = true;
        _this._viewfinder = new Viewfinder_1.AimerViewfinder();
        _this._trackedBrush = new Common_1.Brush(BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultTrackedBrush.fillColor, BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultTrackedBrush.strokeColor, BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultTrackedBrush.strokeWidth);
        _this._aimedBrush = new Common_1.Brush(BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultAimedBrush.fillColor, BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultAimedBrush.strokeColor, BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultAimedBrush.strokeWidth);
        _this._selectedBrush = new Common_1.Brush(BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultSelectedBrush.fillColor, BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultSelectedBrush.strokeColor, BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultSelectedBrush.strokeWidth);
        _this._selectingBrush = new Common_1.Brush(BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultSelectingBrush.fillColor, BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultSelectingBrush.strokeColor, BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultSelectingBrush.strokeWidth);
        return _this;
    }
    Object.defineProperty(BarcodeSelectionBasicOverlay.prototype, "trackedBrush", {
        get: function () {
            return this._trackedBrush;
        },
        set: function (newBrush) {
            this._trackedBrush = newBrush;
            this.barcodeSelection.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeSelectionBasicOverlay.prototype, "aimedBrush", {
        get: function () {
            return this._aimedBrush;
        },
        set: function (newBrush) {
            this._aimedBrush = newBrush;
            this.barcodeSelection.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeSelectionBasicOverlay.prototype, "selectedBrush", {
        get: function () {
            return this._selectedBrush;
        },
        set: function (newBrush) {
            this._selectedBrush = newBrush;
            this.barcodeSelection.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeSelectionBasicOverlay.prototype, "selectingBrush", {
        get: function () {
            return this._selectingBrush;
        },
        set: function (newBrush) {
            this._selectingBrush = newBrush;
            this.barcodeSelection.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeSelectionBasicOverlay.prototype, "shouldShowScanAreaGuides", {
        get: function () {
            return this._shouldShowScanAreaGuides;
        },
        set: function (shouldShow) {
            this._shouldShowScanAreaGuides = shouldShow;
            this.barcodeSelection.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeSelectionBasicOverlay.prototype, "shouldShowHints", {
        get: function () {
            return this._shouldShowHints;
        },
        set: function (shouldShow) {
            this._shouldShowHints = shouldShow;
            this.barcodeSelection.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeSelectionBasicOverlay.prototype, "viewfinder", {
        get: function () {
            return this._viewfinder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeSelectionBasicOverlay.prototype, "style", {
        get: function () {
            return this._style;
        },
        enumerable: false,
        configurable: true
    });
    BarcodeSelectionBasicOverlay.withBarcodeSelection = function (barcodeSelection) {
        return BarcodeSelectionBasicOverlay.withBarcodeSelectionForView(barcodeSelection, null);
    };
    BarcodeSelectionBasicOverlay.withBarcodeSelectionForView = function (barcodeSelection, view) {
        return this.withBarcodeSelectionForViewWithStyle(barcodeSelection, view, BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle);
    };
    BarcodeSelectionBasicOverlay.withBarcodeSelectionForViewWithStyle = function (barcodeSelection, view, style) {
        var overlay = new BarcodeSelectionBasicOverlay();
        overlay.barcodeSelection = barcodeSelection;
        overlay._style = style;
        overlay._trackedBrush = new Common_1.Brush(BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultTrackedBrush.fillColor, BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultTrackedBrush.strokeColor, BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultTrackedBrush.strokeWidth);
        overlay._aimedBrush = new Common_1.Brush(BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultAimedBrush.fillColor, BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultAimedBrush.strokeColor, BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultAimedBrush.strokeWidth);
        overlay._selectedBrush = new Common_1.Brush(BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultSelectedBrush.fillColor, BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultSelectedBrush.strokeColor, BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultSelectedBrush.strokeWidth);
        overlay._selectingBrush = new Common_1.Brush(BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultSelectingBrush.fillColor, BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultSelectingBrush.strokeColor, BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultSelectingBrush.strokeWidth);
        if (view) {
            view.addOverlay(overlay);
        }
        return overlay;
    };
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeSelectionBasicOverlay.prototype, "barcodeSelection", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeSelectionBasicOverlay.prototype, "view", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('shouldShowScanAreaGuides')
    ], BarcodeSelectionBasicOverlay.prototype, "_shouldShowScanAreaGuides", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('shouldShowHints')
    ], BarcodeSelectionBasicOverlay.prototype, "_shouldShowHints", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('viewfinder')
    ], BarcodeSelectionBasicOverlay.prototype, "_viewfinder", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('style')
    ], BarcodeSelectionBasicOverlay.prototype, "_style", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('trackedBrush')
    ], BarcodeSelectionBasicOverlay.prototype, "_trackedBrush", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('aimedBrush')
    ], BarcodeSelectionBasicOverlay.prototype, "_aimedBrush", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('selectedBrush')
    ], BarcodeSelectionBasicOverlay.prototype, "_selectedBrush", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('selectingBrush')
    ], BarcodeSelectionBasicOverlay.prototype, "_selectingBrush", void 0);
    return BarcodeSelectionBasicOverlay;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeSelectionBasicOverlay = BarcodeSelectionBasicOverlay;
//# sourceMappingURL=BarcodeSelectionOverlay.js.map