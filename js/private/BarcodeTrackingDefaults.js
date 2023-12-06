"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeTrackingDefaults = void 0;
var react_native_1 = require("react-native");
var Camera_Related_1 = require("scandit-react-native-datacapture-core/js/Camera+Related");
var Common_1 = require("scandit-react-native-datacapture-core/js/Common");
// tslint:disable-next-line:variable-name
var BarcodeTracking = react_native_1.NativeModules.ScanditDataCaptureBarcodeTracking;
// tslint:disable-next-line:variable-name
exports.BarcodeTrackingDefaults = {
    RecommendedCameraSettings: Camera_Related_1.CameraSettings
        .fromJSON(BarcodeTracking.Defaults.RecommendedCameraSettings),
    BarcodeTrackingBasicOverlay: {
        defaultStyle: BarcodeTracking.Defaults.BarcodeTrackingBasicOverlay.defaultStyle,
        DefaultBrush: {
            fillColor: Common_1.Color
                .fromJSON(BarcodeTracking.Defaults.BarcodeTrackingBasicOverlay.DefaultBrush.fillColor),
            strokeColor: Common_1.Color
                .fromJSON(BarcodeTracking.Defaults.BarcodeTrackingBasicOverlay.DefaultBrush.strokeColor),
            strokeWidth: BarcodeTracking.Defaults.BarcodeTrackingBasicOverlay.DefaultBrush.strokeWidth,
        },
        styles: Object
            .keys(BarcodeTracking.Defaults.BarcodeTrackingBasicOverlay.styles)
            .reduce(function (previousValue, currentValue) {
            var _a;
            return __assign(__assign({}, previousValue), (_a = {}, _a[currentValue] = {
                DefaultBrush: {
                    fillColor: Common_1.Color
                        .fromJSON(BarcodeTracking.Defaults.BarcodeTrackingBasicOverlay.
                        styles[currentValue].DefaultBrush.fillColor),
                    strokeColor: Common_1.Color
                        .fromJSON(BarcodeTracking.Defaults.BarcodeTrackingBasicOverlay.
                        styles[currentValue].DefaultBrush.strokeColor),
                    strokeWidth: BarcodeTracking.Defaults.BarcodeTrackingBasicOverlay.
                        styles[currentValue].DefaultBrush.strokeWidth,
                },
            }, _a));
        }, {}),
    }
};
//# sourceMappingURL=BarcodeTrackingDefaults.js.map