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
exports.BarcodeCaptureOverlay = exports.BarcodeCaptureOverlayStyle = void 0;
var Common_1 = require("scandit-react-native-datacapture-core/js/Common");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var Viewfinder_1 = require("scandit-react-native-datacapture-core/js/Viewfinder");
var BarcodeCaptureDefaults_1 = require("./private/BarcodeCaptureDefaults");
var BarcodeCaptureOverlayStyle;
(function (BarcodeCaptureOverlayStyle) {
    BarcodeCaptureOverlayStyle["Frame"] = "frame";
    BarcodeCaptureOverlayStyle["Legacy"] = "legacy";
})(BarcodeCaptureOverlayStyle = exports.BarcodeCaptureOverlayStyle || (exports.BarcodeCaptureOverlayStyle = {}));
var BarcodeCaptureOverlay = /** @class */ (function (_super) {
    __extends(BarcodeCaptureOverlay, _super);
    function BarcodeCaptureOverlay() {
        var _this = _super.call(this) || this;
        _this.type = 'barcodeCapture';
        _this._shouldShowScanAreaGuides = false;
        _this._viewfinder = null;
        _this._brush = BarcodeCaptureOverlay.defaultBrush;
        return _this;
    }
    Object.defineProperty(BarcodeCaptureOverlay, "defaultBrush", {
        get: function () {
            // tslint:disable-next-line:no-console
            console.warn('defaultBrush is deprecated and will be removed in a future release. ' +
                'Use .brush to get the default for your selected style');
            return new Common_1.Brush(BarcodeCaptureDefaults_1.BarcodeCaptureDefaults.BarcodeCaptureOverlay.styles[BarcodeCaptureDefaults_1.BarcodeCaptureDefaults.BarcodeCaptureOverlay.defaultStyle].DefaultBrush.fillColor, BarcodeCaptureDefaults_1.BarcodeCaptureDefaults.BarcodeCaptureOverlay.styles[BarcodeCaptureDefaults_1.BarcodeCaptureDefaults.BarcodeCaptureOverlay.defaultStyle].DefaultBrush.strokeColor, BarcodeCaptureDefaults_1.BarcodeCaptureDefaults.BarcodeCaptureOverlay.styles[BarcodeCaptureDefaults_1.BarcodeCaptureDefaults.BarcodeCaptureOverlay.defaultStyle].DefaultBrush.strokeWidth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCaptureOverlay.prototype, "brush", {
        get: function () {
            return this._brush;
        },
        set: function (newBrush) {
            this._brush = newBrush;
            this.barcodeCapture.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCaptureOverlay.prototype, "viewfinder", {
        get: function () {
            return this._viewfinder;
        },
        set: function (newViewfinder) {
            this._viewfinder = newViewfinder;
            this.barcodeCapture.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCaptureOverlay.prototype, "shouldShowScanAreaGuides", {
        get: function () {
            return this._shouldShowScanAreaGuides;
        },
        set: function (shouldShow) {
            this._shouldShowScanAreaGuides = shouldShow;
            this.barcodeCapture.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCaptureOverlay.prototype, "style", {
        get: function () {
            return this._style;
        },
        enumerable: false,
        configurable: true
    });
    BarcodeCaptureOverlay.withBarcodeCapture = function (barcodeCapture) {
        return BarcodeCaptureOverlay.withBarcodeCaptureForView(barcodeCapture, null);
    };
    BarcodeCaptureOverlay.withBarcodeCaptureForView = function (barcodeCapture, view) {
        return this.withBarcodeCaptureForViewWithStyle(barcodeCapture, view, BarcodeCaptureDefaults_1.BarcodeCaptureDefaults.BarcodeCaptureOverlay.defaultStyle);
    };
    BarcodeCaptureOverlay.withBarcodeCaptureForViewWithStyle = function (barcodeCapture, view, style) {
        var overlay = new BarcodeCaptureOverlay();
        overlay.barcodeCapture = barcodeCapture;
        overlay._style = style;
        overlay._brush = new Common_1.Brush(BarcodeCaptureDefaults_1.BarcodeCaptureDefaults.BarcodeCaptureOverlay.styles[style].DefaultBrush.fillColor, BarcodeCaptureDefaults_1.BarcodeCaptureDefaults.BarcodeCaptureOverlay.styles[style].DefaultBrush.strokeColor, BarcodeCaptureDefaults_1.BarcodeCaptureDefaults.BarcodeCaptureOverlay.styles[style].DefaultBrush.strokeWidth);
        if (view) {
            view.addOverlay(overlay);
        }
        return overlay;
    };
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeCaptureOverlay.prototype, "barcodeCapture", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeCaptureOverlay.prototype, "view", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('shouldShowScanAreaGuides')
    ], BarcodeCaptureOverlay.prototype, "_shouldShowScanAreaGuides", void 0);
    __decorate([
        Serializeable_1.serializationDefault(Viewfinder_1.NoViewfinder),
        Serializeable_1.nameForSerialization('viewfinder')
    ], BarcodeCaptureOverlay.prototype, "_viewfinder", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('style')
    ], BarcodeCaptureOverlay.prototype, "_style", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('brush')
    ], BarcodeCaptureOverlay.prototype, "_brush", void 0);
    return BarcodeCaptureOverlay;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeCaptureOverlay = BarcodeCaptureOverlay;
//# sourceMappingURL=BarcodeCaptureOverlay.js.map