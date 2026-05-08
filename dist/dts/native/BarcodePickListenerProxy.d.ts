import { BarcodePickListenerProxy } from 'scandit-datacapture-frameworks-barcode';
import { BaseNativeProxy } from 'scandit-datacapture-frameworks-core';
export declare class NativeBarcodePickListenerProxy extends BaseNativeProxy implements BarcodePickListenerProxy {
    private nativeListeners;
    subscribeBarcodePickListeners(): void;
    unsubscribeBarcodePickListeners(): void;
    subscribeDidCompleteScanningSessionListener(): void;
    subscribeDidUpdateScanningSessionListener(): void;
}
