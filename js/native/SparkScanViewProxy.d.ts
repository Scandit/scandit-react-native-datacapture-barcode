import { SparkScanView } from '../SparkScanView';
import { SparkScanViewFeedback } from 'SparkScanViewFeedback';
export declare class SparkScanViewProxy {
    private view;
    private isInListenerCallback;
    private nativeListeners;
    static forSparkScanView(view: SparkScanView): SparkScanViewProxy;
    startScanning(): Promise<void>;
    pauseScanning(): Promise<void>;
    emitFeedback(feedback: SparkScanViewFeedback): Promise<void>;
    dispose(): void;
    private subscribeListeners;
    private unsubscribeListeners;
    private create;
    update(): Promise<void>;
}
