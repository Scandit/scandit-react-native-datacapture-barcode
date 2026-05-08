import { BarcodePickProductProxy } from 'scandit-datacapture-frameworks-barcode';
import { BaseNativeProxy } from 'scandit-datacapture-frameworks-core';
export declare class NativeBarcodePickProductProxy extends BaseNativeProxy implements BarcodePickProductProxy {
    private nativeListeners;
    finishOnProductIdentifierForItems(jsonData: string): Promise<void>;
    subscribeProductIdentifierForItemsListener(): void;
    unsubscribeListeners(): void;
}
