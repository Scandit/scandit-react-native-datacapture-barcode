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
exports.BarcodeTrackingAdvancedOverlay = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeTrackingAdvancedOverlayProxy_1 = require("./native/BarcodeTrackingAdvancedOverlayProxy");
var BarcodeTrackingAdvancedOverlay = /** @class */ (function (_super) {
    __extends(BarcodeTrackingAdvancedOverlay, _super);
    function BarcodeTrackingAdvancedOverlay() {
        var _this = _super.call(this) || this;
        _this.type = 'barcodeTrackingAdvanced';
        _this._shouldShowScanAreaGuides = false;
        _this.listener = null;
        _this.proxy = BarcodeTrackingAdvancedOverlayProxy_1.BarcodeTrackingAdvancedOverlayProxy.forOverlay(_this);
        return _this;
    }
    Object.defineProperty(BarcodeTrackingAdvancedOverlay.prototype, "shouldShowScanAreaGuides", {
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
    Object.defineProperty(BarcodeTrackingAdvancedOverlay.prototype, "view", {
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
    BarcodeTrackingAdvancedOverlay.withBarcodeTrackingForView = function (barcodeTracking, view) {
        var overlay = new BarcodeTrackingAdvancedOverlay();
        overlay.barcodeTracking = barcodeTracking;
        if (view) {
            view.addOverlay(overlay);
        }
        return overlay;
    };
    BarcodeTrackingAdvancedOverlay.prototype.setViewForTrackedBarcode = function (view, trackedBarcode) {
        return this.proxy.setViewForTrackedBarcode(view, trackedBarcode);
    };
    BarcodeTrackingAdvancedOverlay.prototype.setAnchorForTrackedBarcode = function (anchor, trackedBarcode) {
        return this.proxy.setAnchorForTrackedBarcode(anchor, trackedBarcode);
    };
    BarcodeTrackingAdvancedOverlay.prototype.setOffsetForTrackedBarcode = function (offset, trackedBarcode) {
        return this.proxy.setOffsetForTrackedBarcode(offset, trackedBarcode);
    };
    BarcodeTrackingAdvancedOverlay.prototype.clearTrackedBarcodeViews = function () {
        return this.proxy.clearTrackedBarcodeViews();
    };
    __decorate([
        (0, Serializeable_1.nameForSerialization)('shouldShowScanAreaGuides')
    ], BarcodeTrackingAdvancedOverlay.prototype, "_shouldShowScanAreaGuides", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeTrackingAdvancedOverlay.prototype, "barcodeTracking", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeTrackingAdvancedOverlay.prototype, "listener", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeTrackingAdvancedOverlay.prototype, "proxy", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeTrackingAdvancedOverlay.prototype, "_view", void 0);
    return BarcodeTrackingAdvancedOverlay;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeTrackingAdvancedOverlay = BarcodeTrackingAdvancedOverlay;
//# sourceMappingURL=BarcodeTrackingAdvancedOverlay.js.map