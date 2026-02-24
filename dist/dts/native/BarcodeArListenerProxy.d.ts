import { BarcodeArListenerProxy } from 'scandit-datacapture-frameworks-barcode';
export declare class NativeBarcodeArListenerProxy implements BarcodeArListenerProxy {
    private nativeListeners;
    private eventEmitter;
    constructor();
    isModeEnabled: () => boolean;
    setModeEnabledState(enabled: boolean): void;
    updateMode(barcodeArJson: string): Promise<void>;
    updateFeedback(feedbackJson: string): void;
    resetBarcodeAr(): Promise<void>;
    registerBarcodeArListener(): Promise<void>;
    unregisterBarcodeArListener(): Promise<void>;
    finishOnDidUpdateSession(): Promise<void>;
    subscribeDidUpdateSession(): Promise<void>;
}
