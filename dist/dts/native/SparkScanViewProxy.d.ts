import { SparkScanView } from '../SparkScanView';
import { SparkScanViewFeedback } from 'scandit-datacapture-frameworks-barcode';
export declare class SparkScanViewProxy {
    private view;
    private nativeListeners;
    private feedbackForBarcodeListener;
    static forSparkScanView(view: SparkScanView): SparkScanViewProxy;
    startScanning(): Promise<void>;
    pauseScanning(): Promise<void>;
    emitFeedback(feedback: SparkScanViewFeedback): Promise<void>;
    dispose(): void;
    private subscribeListeners;
    private unsubscribeListeners;
    private create;
    update(): Promise<void>;
    prepareScanning(): Promise<void>;
    stopScanning(): Promise<void>;
    addFeedbackDelegate(): Promise<void>;
    removeFeedbackDelegate(): Promise<void>;
    showToast(text: string): Promise<void>;
}
export interface FeedbackForBarcodeEventPayload {
    barcode: string;
}
