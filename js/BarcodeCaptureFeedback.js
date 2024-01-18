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
exports.BarcodeCaptureFeedback = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var Feedback_1 = require("scandit-react-native-datacapture-core/js/Feedback");
var BarcodeCaptureFeedback = /** @class */ (function (_super) {
    __extends(BarcodeCaptureFeedback, _super);
    function BarcodeCaptureFeedback() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.success = Feedback_1.Feedback.defaultFeedback;
        return _this;
    }
    Object.defineProperty(BarcodeCaptureFeedback, "default", {
        get: function () {
            return new BarcodeCaptureFeedback();
        },
        enumerable: false,
        configurable: true
    });
    return BarcodeCaptureFeedback;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeCaptureFeedback = BarcodeCaptureFeedback;
//# sourceMappingURL=BarcodeCaptureFeedback.js.map