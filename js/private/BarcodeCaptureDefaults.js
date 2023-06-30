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
exports.BarcodeCaptureDefaults = void 0;
var react_native_1 = require("react-native");
var Camera_Related_1 = require("scandit-react-native-datacapture-core/js/Camera+Related");
var Common_1 = require("scandit-react-native-datacapture-core/js/Common");
// tslint:disable-next-line:variable-name
var BarcodeCapture = react_native_1.NativeModules.ScanditDataCaptureBarcodeCapture;
// tslint:disable-next-line:variable-name
exports.BarcodeCaptureDefaults = {
    RecommendedCameraSettings: Camera_Related_1.CameraSettings
        .fromJSON(BarcodeCapture.Defaults.RecommendedCameraSettings),
    BarcodeCaptureSettings: {
        codeDuplicateFilter: BarcodeCapture.Defaults.BarcodeCaptureSettings.codeDuplicateFilter,
    },
    BarcodeCaptureOverlay: {
        defaultStyle: BarcodeCapture.Defaults.BarcodeCaptureOverlay.defaultStyle,
        DefaultBrush: {
            fillColor: Common_1.Color
                .fromJSON(BarcodeCapture.Defaults.BarcodeCaptureOverlay.DefaultBrush.fillColor),
            strokeColor: Common_1.Color
                .fromJSON(BarcodeCapture.Defaults.BarcodeCaptureOverlay.DefaultBrush.strokeColor),
            strokeWidth: BarcodeCapture.Defaults.BarcodeCaptureOverlay.DefaultBrush.strokeWidth,
        },
        styles: Object
            .keys(BarcodeCapture.Defaults.BarcodeCaptureOverlay.Brushes)
            .reduce(function (previousValue, currentValue) {
            var _a;
            return __assign(__assign({}, previousValue), (_a = {}, _a[currentValue] = {
                DefaultBrush: {
                    fillColor: Common_1.Color
                        .fromJSON(BarcodeCapture.Defaults.BarcodeCaptureOverlay.Brushes[currentValue].fillColor),
                    strokeColor: Common_1.Color
                        .fromJSON(BarcodeCapture.Defaults.BarcodeCaptureOverlay.Brushes[currentValue].strokeColor),
                    strokeWidth: BarcodeCapture.Defaults.BarcodeCaptureOverlay.Brushes[currentValue].strokeWidth,
                },
            }, _a));
        }, {}),
    }
};
//# sourceMappingURL=BarcodeCaptureDefaults.js.map