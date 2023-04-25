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
exports.BarcodeTrackingBasicOverlay = exports.BarcodeTrackingBasicOverlayStyle = void 0;
var Common_1 = require("scandit-react-native-datacapture-core/js/Common");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeTrackingBasicOverlayProxy_1 = require("./native/BarcodeTrackingBasicOverlayProxy");
var BarcodeTrackingDefaults_1 = require("./private/BarcodeTrackingDefaults");
var BarcodeTrackingBasicOverlayStyle;
(function (BarcodeTrackingBasicOverlayStyle) {
    BarcodeTrackingBasicOverlayStyle["Frame"] = "frame";
    BarcodeTrackingBasicOverlayStyle["Dot"] = "dot";
    BarcodeTrackingBasicOverlayStyle["Legacy"] = "legacy";
})(BarcodeTrackingBasicOverlayStyle = exports.BarcodeTrackingBasicOverlayStyle || (exports.BarcodeTrackingBasicOverlayStyle = {}));
var BarcodeTrackingBasicOverlay = /** @class */ (function (_super) {
    __extends(BarcodeTrackingBasicOverlay, _super);
    function BarcodeTrackingBasicOverlay() {
        var _this = _super.call(this) || this;
        _this.type = 'barcodeTrackingBasic';
        _this._brush = BarcodeTrackingDefaults_1.BarcodeTrackingDefaults.BarcodeTrackingBasicOverlay.DefaultBrush;
        _this._shouldShowScanAreaGuides = false;
        _this.listener = null;
        _this.proxy = BarcodeTrackingBasicOverlayProxy_1.BarcodeTrackingBasicOverlayProxy.forOverlay(_this);
        return _this;
    }
    Object.defineProperty(BarcodeTrackingBasicOverlay.prototype, "view", {
        get: function () {
            return this._view;
        },
        set: function (newView) {
            if (newView == null) {
                this.proxy.unsubscribeListener();
            }
            else if (this._view == null) {
                this.proxy.subscribeListener();
            }
            this._view = newView;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeTrackingBasicOverlay, "defaultBrush", {
        get: function () {
            // tslint:disable-next-line:no-console
            console.warn('defaultBrush is deprecated and will be removed in a future release. ' +
                'Use .brush to get the default for your selected style');
            return new Common_1.Brush(BarcodeTrackingDefaults_1.BarcodeTrackingDefaults.BarcodeTrackingBasicOverlay.styles[BarcodeTrackingDefaults_1.BarcodeTrackingDefaults.BarcodeTrackingBasicOverlay.defaultStyle].DefaultBrush.fillColor, BarcodeTrackingDefaults_1.BarcodeTrackingDefaults.BarcodeTrackingBasicOverlay.styles[BarcodeTrackingDefaults_1.BarcodeTrackingDefaults.BarcodeTrackingBasicOverlay.defaultStyle].DefaultBrush.strokeColor, BarcodeTrackingDefaults_1.BarcodeTrackingDefaults.BarcodeTrackingBasicOverlay.styles[BarcodeTrackingDefaults_1.BarcodeTrackingDefaults.BarcodeTrackingBasicOverlay.defaultStyle].DefaultBrush.strokeWidth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeTrackingBasicOverlay.prototype, "brush", {
        get: function () {
            return this._brush;
        },
        set: function (newBrush) {
            this._brush = newBrush;
            this.barcodeTracking.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeTrackingBasicOverlay.prototype, "shouldShowScanAreaGuides", {
        get: function () {
            return this._shouldShowScanAreaGuides;
        },
        set: function (shouldShow) {
            this._shouldShowScanAreaGuides = shouldShow;
            this.barcodeTracking.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeTrackingBasicOverlay.prototype, "style", {
        get: function () {
            return this._style;
        },
        enumerable: false,
        configurable: true
    });
    BarcodeTrackingBasicOverlay.withBarcodeTracking = function (barcodeTracking) {
        return BarcodeTrackingBasicOverlay.withBarcodeTrackingForView(barcodeTracking, null);
    };
    BarcodeTrackingBasicOverlay.withBarcodeTrackingForView = function (barcodeTracking, view) {
        return this.withBarcodeTrackingForViewWithStyle(barcodeTracking, view, BarcodeTrackingDefaults_1.BarcodeTrackingDefaults.BarcodeTrackingBasicOverlay.defaultStyle);
    };
    BarcodeTrackingBasicOverlay.withBarcodeTrackingForViewWithStyle = function (barcodeTracking, view, style) {
        var overlay = new BarcodeTrackingBasicOverlay();
        overlay.barcodeTracking = barcodeTracking;
        overlay._style = style;
        overlay._brush = new Common_1.Brush(BarcodeTrackingDefaults_1.BarcodeTrackingDefaults.BarcodeTrackingBasicOverlay.styles[style].DefaultBrush.fillColor, BarcodeTrackingDefaults_1.BarcodeTrackingDefaults.BarcodeTrackingBasicOverlay.styles[style].DefaultBrush.strokeColor, BarcodeTrackingDefaults_1.BarcodeTrackingDefaults.BarcodeTrackingBasicOverlay.styles[style].DefaultBrush.strokeWidth);
        if (view) {
            view.addOverlay(overlay);
        }
        return overlay;
    };
    BarcodeTrackingBasicOverlay.prototype.setBrushForTrackedBarcode = function (brush, trackedBarcode) {
        return this.proxy.setBrushForTrackedBarcode(brush, trackedBarcode);
    };
    BarcodeTrackingBasicOverlay.prototype.clearTrackedBarcodeBrushes = function () {
        return this.proxy.clearTrackedBarcodeBrushes();
    };
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeTrackingBasicOverlay.prototype, "barcodeTracking", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeTrackingBasicOverlay.prototype, "_view", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('style')
    ], BarcodeTrackingBasicOverlay.prototype, "_style", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('defaultBrush')
    ], BarcodeTrackingBasicOverlay.prototype, "_brush", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('shouldShowScanAreaGuides')
    ], BarcodeTrackingBasicOverlay.prototype, "_shouldShowScanAreaGuides", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeTrackingBasicOverlay.prototype, "listener", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeTrackingBasicOverlay.prototype, "proxy", void 0);
    return BarcodeTrackingBasicOverlay;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeTrackingBasicOverlay = BarcodeTrackingBasicOverlay;
//# sourceMappingURL=BarcodeTrackingBasicOverlay.js.map