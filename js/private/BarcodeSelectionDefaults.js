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
exports.BarcodeSelectionDefaults = void 0;
var react_native_1 = require("react-native");
var Camera_Related_1 = require("scandit-react-native-datacapture-core/js/Camera+Related");
var Common_1 = require("scandit-react-native-datacapture-core/js/Common");
var Feedback_1 = require("scandit-react-native-datacapture-core/js/Feedback");
// tslint:disable-next-line:variable-name
var BarcodeSelection = react_native_1.NativeModules.ScanditDataCaptureBarcodeSelection;
// tslint:disable-next-line:variable-name
exports.BarcodeSelectionDefaults = {
    RecommendedCameraSettings: Camera_Related_1.CameraSettings
        .fromJSON(BarcodeSelection.Defaults.RecommendedCameraSettings),
    Feedback: ({
        selection: Feedback_1.Feedback
            .fromJSON(JSON.parse(BarcodeSelection.Defaults.Feedback).selection),
    }),
    BarcodeSelectionSettings: {
        codeDuplicateFilter: BarcodeSelection.Defaults.BarcodeSelectionSettings.codeDuplicateFilter,
        singleBarcodeAutoDetection: BarcodeSelection.Defaults.BarcodeSelectionSettings.singleBarcodeAutoDetection,
        selectionType: function (fromJSON) {
            return fromJSON(JSON.parse(BarcodeSelection.Defaults.BarcodeSelectionSettings.selectionType));
        },
    },
    BarcodeSelectionTapSelection: {
        defaultFreezeBehavior: BarcodeSelection.Defaults.BarcodeSelectionTapSelection
            .defaultFreezeBehavior,
        defaultTapBehavior: BarcodeSelection.Defaults.BarcodeSelectionTapSelection
            .defaultTapBehavior,
    },
    BarcodeSelectionAimerSelection: {
        defaultSelectionStrategy: function (fromJSON) {
            return fromJSON(JSON.parse(BarcodeSelection.Defaults.BarcodeSelectionAimerSelection.defaultSelectionStrategy));
        },
    },
    BarcodeSelectionBasicOverlay: {
        defaultStyle: BarcodeSelection.Defaults.BarcodeSelectionBasicOverlay.defaultStyle,
        styles: Object
            .keys(BarcodeSelection.Defaults.BarcodeSelectionBasicOverlay.styles)
            .reduce(function (previousValue, currentValue) {
            var _a;
            return __assign(__assign({}, previousValue), (_a = {}, _a[currentValue] = {
                DefaultTrackedBrush: {
                    fillColor: Common_1.Color
                        .fromJSON(BarcodeSelection.Defaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                        .DefaultTrackedBrush.fillColor),
                    strokeColor: Common_1.Color
                        .fromJSON(BarcodeSelection.Defaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                        .DefaultTrackedBrush.strokeColor),
                    strokeWidth: BarcodeSelection.Defaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                        .DefaultTrackedBrush.strokeWidth,
                },
                DefaultAimedBrush: {
                    fillColor: Common_1.Color
                        .fromJSON(BarcodeSelection.Defaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                        .DefaultAimedBrush.fillColor),
                    strokeColor: Common_1.Color
                        .fromJSON(BarcodeSelection.Defaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                        .DefaultAimedBrush.strokeColor),
                    strokeWidth: BarcodeSelection.Defaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                        .DefaultAimedBrush.strokeWidth,
                },
                DefaultSelectedBrush: {
                    fillColor: Common_1.Color
                        .fromJSON(BarcodeSelection.Defaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                        .DefaultSelectedBrush.fillColor),
                    strokeColor: Common_1.Color
                        .fromJSON(BarcodeSelection.Defaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                        .DefaultSelectedBrush.strokeColor),
                    strokeWidth: BarcodeSelection.Defaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                        .DefaultSelectedBrush.strokeWidth,
                },
                DefaultSelectingBrush: {
                    fillColor: Common_1.Color
                        .fromJSON(BarcodeSelection.Defaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                        .DefaultSelectingBrush.fillColor),
                    strokeColor: Common_1.Color
                        .fromJSON(BarcodeSelection.Defaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                        .DefaultSelectingBrush.strokeColor),
                    strokeWidth: BarcodeSelection.Defaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                        .DefaultSelectingBrush.strokeWidth,
                },
            }, _a));
        }, {}),
    }
};
//# sourceMappingURL=BarcodeSelectionDefaults.js.map