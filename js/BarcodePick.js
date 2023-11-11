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
exports.BarcodePick = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodePickDefaults_1 = require("./private/BarcodePickDefaults");
var BarcodePick = /** @class */ (function (_super) {
    __extends(BarcodePick, _super);
    function BarcodePick(dataCaptureContext, settings, productProvider) {
        var _this = _super.call(this) || this;
        _this.type = 'msFulfill';
        _this.privateContext = dataCaptureContext;
        _this._settings = settings;
        _this._productProvider = productProvider;
        return _this;
    }
    BarcodePick.createRecommendedCameraSettings = function () {
        return BarcodePickDefaults_1.BarcodePickDefaults.RecommendedCameraSettings;
    };
    BarcodePick.prototype.unsubscribeNativeListeners = function () {
        this._productProvider._productProxy.dispose();
    };
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodePick.prototype, "privateContext", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('settings')
    ], BarcodePick.prototype, "_settings", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('ProductProvider')
    ], BarcodePick.prototype, "_productProvider", void 0);
    return BarcodePick;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodePick = BarcodePick;
//# sourceMappingURL=BarcodePick.js.map