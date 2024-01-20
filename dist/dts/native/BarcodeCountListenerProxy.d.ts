import { BarcodeCountListenerProxy } from 'scandit-datacapture-frameworks-barcode';
export declare class NativeBarcodeCountListenerProxy implements BarcodeCountListenerProxy {
    private nativeListeners;
    private eventEmitter;
    constructor();
    isModeEnabled: () => boolean;
    resetBarcodeCount(): Promise<void>;
    updateMode(barcodeCountJson: string): Promise<void>;
    registerBarcodeCountListener(): Promise<void>;
    unregisterBarcodeCountListener(): Promise<void>;
    subscribeDidScan(): void;
    subscribeDidListSessionUpdate(): void;
    finishOnScan(): void;
    startScanningPhase(): void;
    endScanningPhase(): void;
    setBarcodeCountCaptureList(captureListStr: string): void;
    setModeEnabledState(enabled: boolean): void;
}
