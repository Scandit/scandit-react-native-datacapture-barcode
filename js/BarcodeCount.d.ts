import { BarcodeCountFeedback } from './BarcodeCountFeedback';
import { BarcodeCountListener } from './BarcodeCountListener';
import { BarcodeCountSettings } from './BarcodeCountSettings';
import { CameraSettings } from 'scandit-react-native-datacapture-core/js/Camera+Related';
import { DataCaptureContext, DataCaptureMode } from 'scandit-react-native-datacapture-core/js/DataCaptureContext';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { BarcodeCountCaptureList } from './BarcodeCountCaptureList';
import { Barcode } from './Barcode';
export declare class BarcodeCount extends DefaultSerializeable implements DataCaptureMode {
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    get context(): DataCaptureContext | null;
    get feedback(): BarcodeCountFeedback;
    set feedback(feedback: BarcodeCountFeedback);
    private type;
    private _feedback;
    private _isEnabled;
    private settings;
    private listeners;
    private _additionalBarcodes;
    private isInListenerCallback;
    private privateContext;
    private get _context();
    private set _context(value);
    private listenerProxy;
    static forContext(context: DataCaptureContext, settings: BarcodeCountSettings): BarcodeCount;
    private constructor();
    applySettings(settings: BarcodeCountSettings): Promise<void>;
    addListener(listener: BarcodeCountListener): void;
    removeListener(listener: BarcodeCountListener): void;
    private checkAndUnsubscribeListeners;
    reset(): Promise<void>;
    startScanningPhase(): void;
    endScanningPhase(): void;
    setBarcodeCountCaptureList(barcodeCountCaptureList: BarcodeCountCaptureList): void;
    setAdditionalBarcodes(barcodes: Barcode[]): Promise<void>;
    clearAdditionalBarcodes(): Promise<void>;
    static get recommendedCameraSettings(): CameraSettings;
    private didChange;
    private unsubscribeNativeListeners;
}
