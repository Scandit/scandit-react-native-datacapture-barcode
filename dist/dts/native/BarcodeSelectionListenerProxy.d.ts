import { BarcodeSelectionListenerProxy } from 'scandit-datacapture-frameworks-barcode';
export declare class NativeBarcodeSelectionListenerProxy implements BarcodeSelectionListenerProxy {
    private eventEmitter;
    private nativeListeners;
    constructor();
    isModeEnabled: () => boolean;
    getCount(selectionIdentifier: string): Promise<number>;
    resetSession(): Promise<void>;
    registerListenerForEvents(): void;
    subscribeDidUpdateSelectionListener(): void;
    subscribeDidUpdateSession(): void;
    finishDidUpdateSelectionCallback(isEnabled: boolean): void;
    finishDidUpdateSessionCallback(isEnabled: boolean): void;
    unregisterListenerForEvents(): void;
}
