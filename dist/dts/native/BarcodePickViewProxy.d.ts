import { BarcodePickView } from '../BarcodePickView';
import { BaseNativeProxy } from 'scandit-datacapture-frameworks-core';
import { BarcodePickViewProxy } from 'scandit-datacapture-frameworks-barcode';
export declare class NativeBarcodePickViewProxy extends BaseNativeProxy implements BarcodePickViewProxy {
    private nativeListeners;
    viewStart(): Promise<void>;
    viewPause(): Promise<void>;
    viewFreeze(): Promise<void>;
    finishPickAction(code: string, result: boolean): Promise<void>;
    findNodeHandle(view: BarcodePickView): number | null;
    createView(id: number | null, json: string): Promise<void>;
    updateView(json: string): Promise<void>;
    registerFrameworkEvents(): void;
    unregisterFrameworkEvents(): void;
    subscribeDidStartScanningListener(): void;
    subscribeDidFreezeScanningListener(): void;
    subscribeDidPauseScanningListener(): void;
    subscribeDidStopScanningListener(): void;
    subscribeDidPickItemListener(): void;
    subscribeDidUnpickItemListener(): void;
    subscribeBarcodePickViewUiListener(): Promise<void>;
    unsubscribeBarcodePickViewUiListener(): Promise<void>;
}
