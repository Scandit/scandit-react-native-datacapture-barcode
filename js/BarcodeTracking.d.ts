import { CameraSettings } from 'scandit-react-native-datacapture-core/js/Camera+Related';
import { DataCaptureContext, DataCaptureMode } from 'scandit-react-native-datacapture-core/js/DataCaptureContext';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { BarcodeTrackingListener } from './BarcodeTrackingListener';
import { BarcodeTrackingSettings } from './BarcodeTrackingSettings';
export declare class BarcodeTracking extends DefaultSerializeable implements DataCaptureMode {
    private type;
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    get context(): DataCaptureContext | null;
    static get recommendedCameraSettings(): CameraSettings;
    private _isEnabled;
    private settings;
    private privateContext;
    private get _context();
    private set _context(value);
    private listeners;
    private listenerProxy;
    private isInListenerCallback;
    static forContext(context: DataCaptureContext | null, settings: BarcodeTrackingSettings): BarcodeTracking;
    private constructor();
    applySettings(settings: BarcodeTrackingSettings): Promise<void>;
    addListener(listener: BarcodeTrackingListener): void;
    removeListener(listener: BarcodeTrackingListener): void;
    private didChange;
}
