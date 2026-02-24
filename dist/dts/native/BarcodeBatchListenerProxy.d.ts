import { BarcodeBatchListenerProxy } from 'scandit-datacapture-frameworks-barcode';
export declare class NativeBarcodeBatchListenerProxy implements BarcodeBatchListenerProxy {
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
    updateBarcodeBatchMode(modeJson: string): Promise<void>;
    applyBarcodeBatchModeSettings(newSettingsJson: string): Promise<void>;
}
