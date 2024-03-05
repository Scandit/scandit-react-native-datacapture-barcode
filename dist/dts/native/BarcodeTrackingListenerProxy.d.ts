import { BarcodeTrackingListenerProxy } from 'scandit-datacapture-frameworks-barcode';
export declare class NativeBarcodeTrackingListenerProxy implements BarcodeTrackingListenerProxy {
    private nativeListeners;
    private eventEmitter;
    constructor();
    isModeEnabled: () => boolean;
    resetSession(): Promise<void>;
    registerListenerForEvents(): void;
    unregisterListenerForEvents(): void;
    subscribeDidUpdateSession(): void;
    finishDidUpdateSessionCallback(enabled: boolean): void;
    setModeEnabledState(enabled: boolean): void;
}
