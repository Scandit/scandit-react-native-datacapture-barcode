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
exports.TargetBarcode = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var TargetBarcode = /** @class */ (function (_super) {
    __extends(TargetBarcode, _super);
    function TargetBarcode(data, quantity) {
        var _this = _super.call(this) || this;
        _this._data = data;
        _this._quantity = quantity;
        return _this;
    }
    Object.defineProperty(TargetBarcode.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TargetBarcode.prototype, "quantity", {
        get: function () {
            return this._quantity;
        },
        enumerable: false,
        configurable: true
    });
    TargetBarcode.create = function (data, quantity) {
        return new TargetBarcode(data, quantity);
    };
    TargetBarcode.fromJSON = function (json) {
        var data = json.data;
        var quantity = json.quantity;
        return TargetBarcode.create(data, quantity);
    };
    __decorate([
        Serializeable_1.nameForSerialization('data')
    ], TargetBarcode.prototype, "_data", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('quantity')
    ], TargetBarcode.prototype, "_quantity", void 0);
    return TargetBarcode;
}(Serializeable_1.DefaultSerializeable));
exports.TargetBarcode = TargetBarcode;
//# sourceMappingURL=TargetBarcode.js.map