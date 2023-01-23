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
exports.SparkScanViewErrorFeedback = exports.SparkScanViewSuccessFeedback = exports.SparkScanViewFeedback = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var SparkScanViewFeedback = /** @class */ (function (_super) {
    __extends(SparkScanViewFeedback, _super);
    function SparkScanViewFeedback() {
        return _super.call(this) || this;
    }
    return SparkScanViewFeedback;
}(Serializeable_1.DefaultSerializeable));
exports.SparkScanViewFeedback = SparkScanViewFeedback;
var SparkScanViewSuccessFeedback = /** @class */ (function (_super) {
    __extends(SparkScanViewSuccessFeedback, _super);
    function SparkScanViewSuccessFeedback() {
        var _this = _super.call(this) || this;
        _this.type = 'success';
        return _this;
    }
    return SparkScanViewSuccessFeedback;
}(SparkScanViewFeedback));
exports.SparkScanViewSuccessFeedback = SparkScanViewSuccessFeedback;
var SparkScanViewErrorFeedback = /** @class */ (function (_super) {
    __extends(SparkScanViewErrorFeedback, _super);
    function SparkScanViewErrorFeedback(message, resumeCapturingDelay) {
        var _this = _super.call(this) || this;
        _this.type = 'error';
        _this._message = message;
        _this._resumeCapturingDelay = resumeCapturingDelay;
        return _this;
    }
    Object.defineProperty(SparkScanViewErrorFeedback.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanViewErrorFeedback.prototype, "resumeCapturingDelay", {
        get: function () {
            return this._resumeCapturingDelay;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Serializeable_1.nameForSerialization('message')
    ], SparkScanViewErrorFeedback.prototype, "_message", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('resumeCapturingDelay')
    ], SparkScanViewErrorFeedback.prototype, "_resumeCapturingDelay", void 0);
    return SparkScanViewErrorFeedback;
}(SparkScanViewFeedback));
exports.SparkScanViewErrorFeedback = SparkScanViewErrorFeedback;
//# sourceMappingURL=SparkScanViewFeedback.js.map