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
exports.SparkScanFeedback = void 0;
var SparkScanDefaults_1 = require("./private/SparkScanDefaults");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var SparkScanFeedback = /** @class */ (function (_super) {
    __extends(SparkScanFeedback, _super);
    function SparkScanFeedback(success, error) {
        var _this = _super.call(this) || this;
        _this.success = success;
        _this.error = error;
        return _this;
    }
    Object.defineProperty(SparkScanFeedback, "default", {
        get: function () {
            return new SparkScanFeedback(SparkScanDefaults_1.SparkScanDefaults.Feedback.success, SparkScanDefaults_1.SparkScanDefaults.Feedback.error);
        },
        enumerable: false,
        configurable: true
    });
    return SparkScanFeedback;
}(Serializeable_1.DefaultSerializeable));
exports.SparkScanFeedback = SparkScanFeedback;
//# sourceMappingURL=SparkScanFeedback.js.map