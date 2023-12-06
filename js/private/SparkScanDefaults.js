"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparkScanDefaults = void 0;
var react_native_1 = require("react-native");
var Common_1 = require("scandit-react-native-datacapture-core/js/Common");
var Feedback_1 = require("scandit-react-native-datacapture-core/js/Feedback");
// tslint:disable-next-line:variable-name
var SparkScan = {};
if (react_native_1.Platform.OS === 'ios') {
    SparkScan = react_native_1.NativeModules.RNTSparkScanView;
}
else {
    SparkScan = react_native_1.NativeModules.ScanditDataCaptureSparkScan;
}
// tslint:disable-next-line:variable-name
var ViewSettings = JSON.parse(SparkScan.Defaults.SparkScanView.SparkScanViewSettings);
var SparkScanView = SparkScan.Defaults.SparkScanView;
// tslint:disable-next-line:variable-name
exports.SparkScanDefaults = {
    Feedback: ({
        success: Feedback_1.Feedback.fromJSON(JSON.parse(SparkScan.Defaults.Feedback.success)),
        error: Feedback_1.Feedback.fromJSON(JSON.parse(SparkScan.Defaults.Feedback.error))
    }),
    SparkScanSettings: {
        codeDuplicateFilter: SparkScan.Defaults.SparkScanSettings.codeDuplicateFilter,
        locationSelection: function (fromJSON) {
            return fromJSON(JSON.parse(SparkScan.Defaults.SparkScanSettings.locationSelection));
        },
        singleBarcodeAutoDetection: SparkScan.Defaults.SparkScanSettings.singleBarcodeAutoDetection
    },
    SparkScanView: {
        shouldShowScanAreaGuides: SparkScan.Defaults.SparkScanView.shouldShowScanAreaGuides,
        brush: {
            fillColor: Common_1.Color.fromJSON(SparkScanView.brush.fillColor),
            strokeColor: Common_1.Color.fromJSON(SparkScanView.brush.strokeColor),
            strokeWidth: SparkScanView.brush.strokeWidth
        },
        torchButtonVisible: SparkScanView.torchButtonVisible,
        scanningBehaviorButtonVisible: SparkScanView.scanningBehaviorButtonVisible,
        handModeButtonVisible: SparkScanView.handModeButtonVisible,
        barcodeCountButtonVisible: SparkScanView.barcodeCountButtonVisible,
        fastFindButtonVisible: SparkScanView.fastFindButtonVisible,
        targetModeButtonVisible: SparkScanView.targetModeButtonVisible,
        soundModeButtonVisible: SparkScanView.soundModeButtonVisible,
        hapticModeButtonVisible: SparkScanView.hapticModeButtonVisible,
        stopCapturingText: SparkScanView.stopCapturingText || null,
        startCapturingText: SparkScanView.stopCapturingText || null,
        resumeCapturingText: SparkScanView.resumeCapturingText || null,
        scanningCapturingText: SparkScanView.scanningCapturingText || null,
        captureButtonBackgroundColor: !!SparkScanView.captureButtonBackgroundColor ? Common_1.Color
            .fromJSON(SparkScanView.captureButtonBackgroundColor) : null,
        captureButtonActiveBackgroundColor: !!SparkScanView.captureButtonActiveBackgroundColor ? Common_1.Color
            .fromJSON(SparkScanView.captureButtonActiveBackgroundColor) : null,
        captureButtonTintColor: !!SparkScanView.captureButtonTintColor ? Common_1.Color
            .fromJSON(SparkScanView.captureButtonTintColor) : null,
        toolbarBackgroundColor: !!SparkScanView.toolbarBackgroundColor ? Common_1.Color
            .fromJSON(SparkScanView.toolbarBackgroundColor) : null,
        toolbarIconActiveTintColor: !!SparkScanView.toolbarIconActiveTintColor ? Common_1.Color
            .fromJSON(SparkScanView.toolbarIconActiveTintColor) : null,
        toolbarIconInactiveTintColor: !!SparkScanView.toolbarIconInactiveTintColor ? Common_1.Color
            .fromJSON(SparkScanView.toolbarIconInactiveTintColor) : null,
        SparkScanViewSettings: {
            triggerButtonCollapseTimeout: ViewSettings.triggerButtonCollapseTimeout,
            continuousCaptureTimeout: ViewSettings.continuousCaptureTimeout,
            defaultScanningMode: function (fromJSON) {
                return fromJSON(JSON.parse(ViewSettings.defaultScanningMode));
            },
            defaultTorchState: ViewSettings.defaultTorchState,
            soundEnabled: ViewSettings.soundEnabled,
            hapticEnabled: ViewSettings.hapticEnabled,
            defaultHandMode: ViewSettings.defaultHandMode,
            holdToScanEnabled: ViewSettings.holdToScanEnabled,
            hardwareTriggerEnabled: ViewSettings.hardwareTriggerEnabled,
            hardwareTriggerKeyCode: !!ViewSettings.hardwareTriggerKeyCode ? ViewSettings.hardwareTriggerKeyCode : -1,
            visualFeedbackEnabled: !!ViewSettings.visualFeedbackEnabled ? ViewSettings.visualFeedbackEnabled : false
        }
    },
};
//# sourceMappingURL=SparkScanDefaults.js.map