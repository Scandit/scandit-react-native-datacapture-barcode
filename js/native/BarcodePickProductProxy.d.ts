import { BarcodePickAsyncMapperProductProviderCallback } from 'BarcodePickAsyncMapperProductProviderCallback';
import { BarcodePickProductProviderCallbackItem } from 'BarcodePickProductProviderCallbackItem';
export declare class BarcodePickProductProxy {
    private nativeListeners;
    private barcodePickMapperCallback;
    static create(callback: BarcodePickAsyncMapperProductProviderCallback): BarcodePickProductProxy;
    finishOnProductIdentifierForItems(data: BarcodePickProductProviderCallbackItem[]): Promise<void>;
    dispose(): void;
    private subscribeListeners;
    private unsubscribeListeners;
}
