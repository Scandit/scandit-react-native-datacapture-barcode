"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodePickDefaults = void 0;
var react_native_1 = require("react-native");
var Camera_Related_1 = require("scandit-react-native-datacapture-core/js/Camera+Related");
var Symbology_Related_1 = require("../Symbology+Related");
// tslint:disable-next-line:variable-name
var BarcodePickModule = react_native_1.NativeModules.ScanditDataCaptureBarcodePick;
// tslint:disable-next-line:variable-name
var BarcodePickCameraSettings = BarcodePickModule.Defaults.RecommendedCameraSettings;
// tslint:disable-next-line:variable-name
var BarcodePickSettings = BarcodePickModule.Defaults.BarcodePickSettings;
// tslint:disable-next-line:variable-name
var BarcodePickView = BarcodePickModule.Defaults.ViewSettings;
// tslint:disable-next-line:variable-name
var BarcodePickViewHighlightStyle = BarcodePickModule.Defaults.BarcodePickViewHighlightStyle;
// tslint:disable-next-line:variable-name
exports.BarcodePickDefaults = {
    RecommendedCameraSettings: Camera_Related_1.CameraSettings
        .fromJSON(BarcodePickCameraSettings),
    BarcodePickSettings: {
        hapticsEnabled: BarcodePickSettings.hapticsEnabled,
        soundEnabled: BarcodePickSettings.soundEnabled,
    },
    ViewSettings: {
        highlightStyle: BarcodePickView.HighlightStyle,
        initialGuidelineText: BarcodePickView.initialGuidelineText,
        moveCloserGuidelineText: BarcodePickView.moveCloserGuidelineText,
        loadingDialogText: BarcodePickView.loadingDialogText,
        showLoadingDialog: BarcodePickView.showLoadingDialog,
        onFirstItemPickCompletedHintText: BarcodePickView.onFirstItemPickCompletedHintText,
        onFirstItemToPickFoundHintText: BarcodePickView.onFirstItemToPickFoundHintText,
        onFirstItemUnpickCompletedHintText: BarcodePickView.onFirstItemUnpickCompletedHintText,
        onFirstUnmarkedItemPickCompletedHintText: BarcodePickView.onFirstUnmarkedItemPickCompletedHintText,
        showGuidelines: BarcodePickView.showGuidelines,
        showHints: BarcodePickView.showHints,
    },
    ViewHighlightStyle: {
        Rectangular: {
            brushesForState: BarcodePickViewHighlightStyle.Rectangular.brushesForState
        },
        RectangularWithIcon: {
            iconStyle: BarcodePickViewHighlightStyle.RectangularWithIcon.iconStyle,
            brushesForState: BarcodePickViewHighlightStyle.RectangularWithIcon.brushesForState
        },
    },
    SymbologySettings: Object.keys(BarcodePickModule.Defaults.SymbologySettings)
        .reduce(function (settings, identifier) {
        settings[identifier] = Symbology_Related_1.SymbologySettings
            .fromJSON(JSON.parse(BarcodePickModule.Defaults.SymbologySettings[identifier]));
        return settings;
    }, {}),
};
//# sourceMappingURL=BarcodePickDefaults.js.map