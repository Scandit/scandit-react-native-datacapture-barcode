import { BarcodeCheckListenerProxy } from 'scandit-datacapture-frameworks-barcode';
export declare class NativeBarcodeCheckListenerProxy implements BarcodeCheckListenerProxy {
    private nativeListeners;
    private eventEmitter;
    constructor();
    isModeEnabled: () => boolean;
    setModeEnabledState(enabled: boolean): void;
    updateMode(barcodeCheckJson: string): Promise<void>;
    updateFeedback(feedbackJson: string): void;
    resetBarcodeCheck(): Promise<void>;
    registerBarcodeCheckListener(): Promise<void>;
    unregisterBarcodeCheckListener(): Promise<void>;
    finishOnDidUpdateSession(): Promise<void>;
    subscribeDidUpdateSession(): Promise<void>;
}
