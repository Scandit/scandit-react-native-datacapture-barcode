import { BarcodeCaptureListenerProxy } from 'scandit-datacapture-frameworks-barcode';
export declare class NativeBarcodeCaptureListenerProxy implements BarcodeCaptureListenerProxy {
    private nativeListeners;
    private eventEmitter;
    constructor();
    isModeEnabled: () => boolean;
    resetSession(): Promise<void>;
    registerListenerForEvents(): void;
    setModeEnabledState(enabled: boolean): void;
    unregisterListenerForEvents(): void;
    subscribeDidUpdateSessionListener(): void;
    subscribeDidScanListener(): void;
    finishDidUpdateSessionCallback(isFinished: boolean): void;
    finishDidScanCallback(isFinished: boolean): void;
}
