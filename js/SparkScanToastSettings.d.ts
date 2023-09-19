import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { Color } from 'scandit-react-native-datacapture-core/js/Common';
export declare class SparkScanToastSettings extends DefaultSerializeable {
    private _toastEnabled;
    private _toastBackgroundColor;
    private _toastTextColor;
    private _targetModeEnabledMessage;
    private _targetModeDisabledMessage;
    private _continuousModeEnabledMessage;
    private _continuousModeDisabledMessage;
    private _cameraTimeoutMessage;
    set toastEnabled(isEnabled: boolean);
    get toastEnabled(): boolean;
    set toastBackgroundColor(backgroundColor: Color | null);
    get toastBackgroundColor(): Color | null;
    set toastTextColor(textColor: Color | null);
    get toastTextColor(): Color | null;
    set targetModeEnabledMessage(message: string | null);
    get targetModeEnabledMessage(): string | null;
    set targetModeDisabledMessage(message: string | null);
    get targetModeDisabledMessage(): string | null;
    set continuousModeEnabledMessage(message: string | null);
    get continuousModeEnabledMessage(): string | null;
    set continuousModeDisabledMessage(message: string | null);
    get continuousModeDisabledMessage(): string | null;
    set cameraTimeoutMessage(message: string | null);
    get cameraTimeoutMessage(): string | null;
    private static fromJSON;
}
