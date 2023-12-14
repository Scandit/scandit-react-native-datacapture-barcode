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
    function SparkScanViewSuccessFeedback(visualFeedbackColor) {
        var _this = _super.call(this) || this;
        _this.type = 'success';
        _this._visualFeedbackColor = visualFeedbackColor;
        return _this;
    }
    Object.defineProperty(SparkScanViewSuccessFeedback.prototype, "visualFeedbackColor", {
        get: function () {
            return this._visualFeedbackColor;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0, Serializeable_1.nameForSerialization)('visualFeedbackColor')
    ], SparkScanViewSuccessFeedback.prototype, "_visualFeedbackColor", void 0);
    return SparkScanViewSuccessFeedback;
}(SparkScanViewFeedback));
exports.SparkScanViewSuccessFeedback = SparkScanViewSuccessFeedback;
var SparkScanViewErrorFeedback = /** @class */ (function (_super) {
    __extends(SparkScanViewErrorFeedback, _super);
    function SparkScanViewErrorFeedback(message, resumeCapturingDelay, visualFeedbackColor, errorBrush) {
        var _this = _super.call(this) || this;
        _this.type = 'error';
        _this._message = message;
        _this._resumeCapturingDelay = resumeCapturingDelay;
        _this._visualFeedbackColor = visualFeedbackColor;
        _this._errorBrush = errorBrush;
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
    Object.defineProperty(SparkScanViewErrorFeedback.prototype, "visualFeedbackColor", {
        get: function () {
            return this._visualFeedbackColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanViewErrorFeedback.prototype, "brush", {
        get: function () {
            return this._errorBrush;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0, Serializeable_1.nameForSerialization)('message')
    ], SparkScanViewErrorFeedback.prototype, "_message", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('resumeCapturingDelay')
    ], SparkScanViewErrorFeedback.prototype, "_resumeCapturingDelay", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('visualFeedbackColor')
    ], SparkScanViewErrorFeedback.prototype, "_visualFeedbackColor", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('brush')
    ], SparkScanViewErrorFeedback.prototype, "_errorBrush", void 0);
    return SparkScanViewErrorFeedback;
}(SparkScanViewFeedback));
exports.SparkScanViewErrorFeedback = SparkScanViewErrorFeedback;
//# sourceMappingURL=SparkScanViewFeedback.js.map