import { DataCaptureContext } from 'scandit-react-native-datacapture-core';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { SparkScanSettings } from './SparkScanSettings';
import { SparkScanListener } from './SparkScanListener';
import { SparkScanFeedback } from './SparkScanFeedback';
export declare class SparkScan extends DefaultSerializeable {
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    get context(): DataCaptureContext | null;
    get feedback(): SparkScanFeedback;
    set feedback(feedback: SparkScanFeedback);
    private type;
    private _isEnabled;
    private _feedback;
    private settings;
    private privateContext;
    private get _context();
    private set _context(value);
    private listeners;
    private listenerProxy;
    private isInListenerCallback;
    static forSettings(settings: SparkScanSettings): SparkScan;
    private constructor();
    applySettings(settings: SparkScanSettings): Promise<void>;
    addListener(listener: SparkScanListener): void;
    removeListener(listener: SparkScanListener): void;
    private didChange;
    private unsubscribeNativeListeners;
}
