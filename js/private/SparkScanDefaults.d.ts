import { TorchState } from 'scandit-react-native-datacapture-core/js/Camera+Related';
import { Color } from 'scandit-react-native-datacapture-core/js/Common';
import { Feedback } from 'scandit-react-native-datacapture-core/js/Feedback';
import { SparkScanToastSettings } from '../SparkScanToastSettings';
export declare const SparkScanDefaults: {
    Feedback: {
        success: Feedback;
        error: Feedback;
    };
    SparkScanSettings: {
        codeDuplicateFilter: any;
        locationSelection: (fromJSON: Function) => any;
        singleBarcodeAutoDetection: any;
    };
    SparkScanView: {
        shouldShowScanAreaGuides: any;
        brush: {
            fillColor: Color;
            strokeColor: Color;
            strokeWidth: any;
        };
        torchButtonVisible: any;
        scanningBehaviorButtonVisible: any;
        handModeButtonVisible: any;
        barcodeCountButtonVisible: any;
        fastFindButtonVisible: any;
        targetModeButtonVisible: any;
        soundModeButtonVisible: any;
        hapticModeButtonVisible: any;
        stopCapturingText: any;
        startCapturingText: any;
        resumeCapturingText: any;
        scanningCapturingText: any;
        targetModeHintText: any;
        shouldShowTargetModeHint: any;
        captureButtonBackgroundColor: Color | null;
        captureButtonActiveBackgroundColor: Color | null;
        captureButtonTintColor: Color | null;
        toolbarBackgroundColor: Color | null;
        toolbarIconActiveTintColor: Color | null;
        toolbarIconInactiveTintColor: Color | null;
        SparkScanViewSettings: {
            triggerButtonCollapseTimeout: any;
            continuousCaptureTimeout: any;
            defaultScanningMode: (fromJSON: Function) => any;
            defaultTorchState: TorchState;
            soundEnabled: any;
            hapticEnabled: any;
            defaultHandMode: any;
            holdToScanEnabled: any;
            hardwareTriggerEnabled: any;
            hardwareTriggerKeyCode: any;
            visualFeedbackEnabled: any;
            ignoreDragLimits: any;
            toastSettings: SparkScanToastSettings;
            targetZoomFactorOut: any;
            targetZoomFactorIn: any;
        };
    };
};
