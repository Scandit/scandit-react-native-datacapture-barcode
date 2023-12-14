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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeCountFeedback = void 0;
var BarcodeCountDefaults_1 = require("./private/BarcodeCountDefaults");
var Feedback_1 = require("scandit-react-native-datacapture-core/js/Feedback");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeCountFeedback = /** @class */ (function (_super) {
    __extends(BarcodeCountFeedback, _super);
    function BarcodeCountFeedback(success, error) {
        var _this = _super.call(this) || this;
        _this.success = BarcodeCountDefaults_1.BarcodeCountDefaults.Feedback.success;
        _this.failure = BarcodeCountDefaults_1.BarcodeCountDefaults.Feedback.success;
        _this.success = success;
        _this.failure = error;
        return _this;
    }
    Object.defineProperty(BarcodeCountFeedback, "default", {
        get: function () {
            return new BarcodeCountFeedback(BarcodeCountDefaults_1.BarcodeCountDefaults.Feedback.success, BarcodeCountDefaults_1.BarcodeCountDefaults.Feedback.failure);
        },
        enumerable: false,
        configurable: true
    });
    BarcodeCountFeedback.fromJSON = function (json) {
        var success = Feedback_1.Feedback.fromJSON(json.success);
        var failure = Feedback_1.Feedback.fromJSON(json.failure);
        return new BarcodeCountFeedback(success, failure);
    };
    return BarcodeCountFeedback;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeCountFeedback = BarcodeCountFeedback;
//# sourceMappingURL=BarcodeCountFeedback.js.map