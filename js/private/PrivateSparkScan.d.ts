import { DataCaptureContext } from 'scandit-react-native-datacapture-core/js/DataCaptureContext';
import { SparkScanListener } from '../SparkScanListener';
import { SparkScanToastSettings } from '../SparkScanToastSettings';
import { Color } from 'scandit-react-native-datacapture-core/js/Common';
export interface PrivateSparkScan {
    _context: DataCaptureContext | null;
    listeners: SparkScanListener[];
    isInListenerCallback: boolean;
    didChange: () => Promise<void>;
    unsubscribeNativeListeners: () => void;
}
export interface SparkScanToastSettingsJSON {
    toastEnabled: boolean;
    toastBackgroundColor: Color | null;
    toastTextColor: Color | null;
    targetModeEnabledMessage: string | null;
    targetModeDisabledMessage: string | null;
    continuousModeEnabledMessage: string | null;
    continuousModeDisabledMessage: string | null;
    cameraTimeoutMessage: string | null;
}
export interface PrivateSparkScanToastSettings {
    fromJSON(json: SparkScanToastSettingsJSON): SparkScanToastSettings;
}
