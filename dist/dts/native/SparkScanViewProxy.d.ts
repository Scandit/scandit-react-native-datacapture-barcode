import { SparkScanView } from '../SparkScanView';
import { BaseNativeProxy } from 'scandit-datacapture-frameworks-core';
import { SparkScanViewProxy } from 'scandit-datacapture-frameworks-barcode';
export declare class NativeSparkScanViewProxy extends BaseNativeProxy implements SparkScanViewProxy {
    private view;
    private nativeListeners;
    private feedbackForBarcodeListener;
    bindView(view: SparkScanView): void;
    createSparkScanView(viewJson: string): Promise<void>;
    disposeSparkScanView(): Promise<void>;
    prepareSparkScanViewScanning(): Promise<void>;
    registerSparkScanViewListenerEvents(): void;
    showToast(text: string): Promise<void>;
    startSparkScanViewScanning(): Promise<void>;
    stopSparkScanViewScanning(): Promise<void>;
    pauseSparkScanViewScanning(): Promise<void>;
    submitFeedbackForBarcode(feedbackJson: string): Promise<void>;
    registerDelegateForEvents(): Promise<void>;
    unregisterDelegateForEvents(): Promise<void>;
    unregisterSparkScanViewListenerEvents(): Promise<void>;
    updateSparkScanView(viewJson: string): Promise<void>;
}
