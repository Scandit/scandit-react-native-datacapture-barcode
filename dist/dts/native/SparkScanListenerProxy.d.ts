import { SparkScanListenerProxy } from 'scandit-datacapture-frameworks-barcode';
import { BaseNativeProxy } from 'scandit-datacapture-frameworks-core';
export declare class NativeSparkScanListenerProxy extends BaseNativeProxy implements SparkScanListenerProxy {
    private nativeListeners;
    resetSession(): Promise<void>;
    updateMode(sparkScanJson: string): Promise<void>;
    registerListenerForEvents(): void;
    unregisterListenerForEvents(): Promise<void>;
    subscribeDidUpdateSessionListener(): void;
    subscribeDidScanListener(): void;
    finishDidUpdateSessionCallback(enabled: boolean): Promise<void>;
    finishDidScanCallback(enabled: boolean): Promise<void>;
    setModeEnabledState(enabled: boolean): void;
}
