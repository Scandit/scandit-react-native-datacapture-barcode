import { TorchState } from 'scandit-react-native-datacapture-core/js/Camera+Related';
import { SparkScanToastSettings } from './SparkScanToastSettings';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
export interface SparkScanScanningMode {
}
export declare class SparkScanScanningModeDefault extends DefaultSerializeable implements SparkScanScanningMode {
    private type;
    private _settings;
    get scanningBehavior(): SparkScanScanningBehavior;
    constructor(scanningBehavior: SparkScanScanningBehavior);
}
export declare class SparkScanScanningModeTarget extends DefaultSerializeable implements SparkScanScanningMode {
    private type;
    private _settings;
    get scanningBehavior(): SparkScanScanningBehavior;
    constructor(scanningBehavior: SparkScanScanningBehavior);
}
export declare enum SparkScanScanningBehavior {
    Single = "single",
    Continuous = "continuous"
}
export declare enum SparkScanViewHandMode {
    Right = "right",
    Left = "left"
}
export declare enum SparkScanScanningPrecision {
    Default = "default",
    Accurate = "accurate"
}
export declare class SparkScanViewSettings extends DefaultSerializeable {
    triggerButtonCollapseTimeout: number;
    continuousCaptureTimeout: number;
    defaultTorchState: TorchState;
    defaultScanningMode: SparkScanScanningMode;
    defaultHandMode: SparkScanViewHandMode;
    holdToScanEnabled: boolean;
    soundEnabled: boolean;
    hapticEnabled: boolean;
    hardwareTriggerEnabled: boolean;
    hardwareTriggerKeyCode: number | null;
    visualFeedbackEnabled: boolean;
    ignoreDragLimits: boolean;
    toastSettings: SparkScanToastSettings;
    targetZoomFactorOut: number;
    targetZoomFactorIn: number;
    private scanModeFromJSON;
}
