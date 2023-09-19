"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeCountDefaults = void 0;
var react_native_1 = require("react-native");
var Feedback_1 = require("scandit-react-native-datacapture-core/js/Feedback");
// tslint:disable-next-line:variable-name
var BarcodeCount = react_native_1.NativeModules.ScanditDataCaptureBarcodeCount;
// tslint:disable-next-line:variable-name
var BarcodeCountView = BarcodeCount.Defaults.BarcodeCountView;
// tslint:disable-next-line:variable-name
var BarcodeCountToolbarSettings = BarcodeCountView.toolbarSettings;
// tslint:disable-next-line:variable-name
var BarcodeCountToolbarSettingsDefault = {
    audioOnButtonText: BarcodeCountToolbarSettings.audioOnButtonText,
    audioOffButtonText: BarcodeCountToolbarSettings.audioOffButtonText,
    audioButtonContentDescription: BarcodeCountToolbarSettings.audioButtonContentDescription,
    audioButtonAccessibilityHint: BarcodeCountToolbarSettings.audioButtonAccessibilityHint,
    audioButtonAccessibilityLabel: BarcodeCountToolbarSettings.audioButtonAccessibilityLabel,
    vibrationOnButtonText: BarcodeCountToolbarSettings.vibrationOnButtonText,
    vibrationOffButtonText: BarcodeCountToolbarSettings.vibrationOffButtonText,
    vibrationButtonContentDescription: BarcodeCountToolbarSettings.vibrationButtonContentDescription,
    vibrationButtonAccessibilityHint: BarcodeCountToolbarSettings.vibrationButtonAccessibilityHint,
    vibrationButtonAccessibilityLabel: BarcodeCountToolbarSettings.vibrationButtonAccessibilityLabel,
    strapModeOnButtonText: BarcodeCountToolbarSettings.strapModeOnButtonText,
    strapModeOffButtonText: BarcodeCountToolbarSettings.strapModeOffButtonText,
    strapModeButtonContentDescription: BarcodeCountToolbarSettings.strapModeButtonContentDescription,
    strapModeButtonAccessibilityHint: BarcodeCountToolbarSettings.strapModeButtonAccessibilityHint,
    strapModeButtonAccessibilityLabel: BarcodeCountToolbarSettings.strapModeButtonAccessibilityLabel,
    colorSchemeOnButtonText: BarcodeCountToolbarSettings.colorSchemeOnButtonText,
    colorSchemeOffButtonText: BarcodeCountToolbarSettings.colorSchemeOffButtonText,
    colorSchemeButtonContentDescription: BarcodeCountToolbarSettings.colorSchemeButtonContentDescription,
    colorSchemeButtonAccessibilityHint: BarcodeCountToolbarSettings.colorSchemeButtonAccessibilityHint,
    colorSchemeButtonAccessibilityLabel: BarcodeCountToolbarSettings.colorSchemeButtonAccessibilityLabel,
};
// tslint:disable-next-line:variable-name
exports.BarcodeCountDefaults = {
    Feedback: {
        success: Feedback_1.Feedback.fromJSON(JSON.parse(BarcodeCount.Defaults.BarcodeCountFeedback).success),
        failure: Feedback_1.Feedback.fromJSON(JSON.parse(BarcodeCount.Defaults.BarcodeCountFeedback).failure)
    },
    BarcodeCountSettings: {
        expectOnlyUniqueBarcodes: BarcodeCount.Defaults.BarcodeCountSettings.expectOnlyUniqueBarcodes,
        disableModeWhenCaptureListCompleted: BarcodeCount.Defaults.BarcodeCountSettings.disableModeWhenCaptureListCompleted,
        barcodeFilterSettings: BarcodeCountView.filterSettings,
        mappingEnabled: BarcodeCount.Defaults.BarcodeCountSettings.mappingEnabled
    },
    BarcodeCountView: {
        shouldDisableModeOnExitButtonTapped: BarcodeCountView.shouldDisableModeOnExitButtonTapped,
        shouldShowUserGuidanceView: BarcodeCountView.shouldShowUserGuidanceView,
        shouldShowListButton: BarcodeCountView.shouldShowListButton,
        shouldShowExitButton: BarcodeCountView.shouldShowExitButton,
        shouldShowShutterButton: BarcodeCountView.shouldShowShutterButton,
        shouldShowHints: BarcodeCountView.shouldShowHints,
        shouldShowClearHighlightsButton: BarcodeCountView.shouldShowClearHighlightsButton,
        shouldShowSingleScanButton: BarcodeCountView.shouldShowSingleScanButton,
        shouldShowFloatingShutterButton: BarcodeCountView.shouldShowFloatingShutterButton,
        shouldShowToolbar: BarcodeCountView.shouldShowToolbar,
        defaultNotInListBrush: BarcodeCountView.defaultNotInListBrush,
        defaultRecognizedBrush: BarcodeCountView.defaultRecognizedBrush,
        defaultUnrecognizedBrush: BarcodeCountView.defaultUnrecognizedBrush,
        shouldShowScanAreaGuides: BarcodeCountView.shouldShowScanAreaGuides,
        clearHighlightsButtonText: BarcodeCountView.clearHighlightsButtonText,
        exitButtonText: BarcodeCountView.exitButtonText,
        textForUnrecognizedBarcodesDetectedHint: BarcodeCountView.textForUnrecognizedBarcodesDetectedHint,
        textForTapShutterToScanHint: BarcodeCountView.textForTapShutterToScanHint,
        textForScanningHint: BarcodeCountView.textForScanningHint,
        textForMoveCloserAndRescanHint: BarcodeCountView.textForMoveCloserAndRescanHint,
        textForMoveFurtherAndRescanHint: BarcodeCountView.textForMoveFurtherAndRescanHint,
        toolbarSettings: BarcodeCountToolbarSettingsDefault,
        listButtonAccessibilityHint: BarcodeCountView.listButtonAccessibilityHint || null,
        listButtonAccessibilityLabel: BarcodeCountView.listButtonAccessibilityLabel || null,
        listButtonContentDescription: BarcodeCountView.listButtonContentDescription || null,
        exitButtonAccessibilityHint: BarcodeCountView.exitButtonAccessibilityHint || null,
        exitButtonAccessibilityLabel: BarcodeCountView.exitButtonAccessibilityLabel || null,
        exitButtonContentDescription: BarcodeCountView.exitButtonContentDescription || null,
        shutterButtonAccessibilityHint: BarcodeCountView.shutterButtonAccessibilityHint || null,
        shutterButtonAccessibilityLabel: BarcodeCountView.shutterButtonAccessibilityLabel || null,
        shutterButtonContentDescription: BarcodeCountView.shutterButtonContentDescription || null,
        floatingShutterButtonAccessibilityHint: BarcodeCountView.floatingShutterButtonAccessibilityHint || null,
        floatingShutterButtonAccessibilityLabel: BarcodeCountView.floatingShutterButtonAccessibilityLabel || null,
        floatingShutterButtonContentDescription: BarcodeCountView.floatingShutterButtonContentDescription || null,
        clearHighlightsButtonAccessibilityHint: BarcodeCountView.clearHighlightsButtonAccessibilityHint || null,
        clearHighlightsButtonAccessibilityLabel: BarcodeCountView.clearHighlightsButtonAccessibilityLabel || null,
        clearHighlightsButtonContentDescription: BarcodeCountView.clearHighlightsButtonContentDescription || null,
        singleScanButtonAccessibilityHint: BarcodeCountView.singleScanButtonAccessibilityHint || null,
        singleScanButtonAccessibilityLabel: BarcodeCountView.singleScanButtonAccessibilityLabel || null,
        singleScanButtonContentDescription: BarcodeCountView.singleScanButtonContentDescription || null,
    }
};
//# sourceMappingURL=BarcodeCountDefaults.js.map