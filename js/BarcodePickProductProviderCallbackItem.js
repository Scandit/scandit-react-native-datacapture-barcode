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
exports.BarcodePickProductProviderCallbackItem = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodePickProductProviderCallbackItem = /** @class */ (function (_super) {
    __extends(BarcodePickProductProviderCallbackItem, _super);
    function BarcodePickProductProviderCallbackItem(itemData, productIdentifier) {
        var _this = _super.call(this) || this;
        _this._productIdentifier = null;
        _this._itemData = itemData;
        _this._productIdentifier = productIdentifier;
        return _this;
    }
    Object.defineProperty(BarcodePickProductProviderCallbackItem.prototype, "itemData", {
        get: function () {
            return this._itemData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodePickProductProviderCallbackItem.prototype, "productIdentifier", {
        get: function () {
            return this._productIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0, Serializeable_1.nameForSerialization)('itemData')
    ], BarcodePickProductProviderCallbackItem.prototype, "_itemData", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('productIdentifier')
    ], BarcodePickProductProviderCallbackItem.prototype, "_productIdentifier", void 0);
    return BarcodePickProductProviderCallbackItem;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodePickProductProviderCallbackItem = BarcodePickProductProviderCallbackItem;
//# sourceMappingURL=BarcodePickProductProviderCallbackItem.js.map