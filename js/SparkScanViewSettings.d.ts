import { TorchState } from 'scandit-react-native-datacapture-core/js/Camera+Related';
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
    hardwareTriggerKeyCode: number;
    visualFeedbackEnabled: boolean;
    private scanModeFromJSON;
}