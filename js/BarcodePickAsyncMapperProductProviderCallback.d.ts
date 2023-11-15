import { BarcodePickProductProviderCallback } from './BarcodePickProductProviderCallback';
export interface BarcodePickAsyncMapperProductProviderCallback {
    productIdentifierForItems(itemsData: string[], callback: BarcodePickProductProviderCallback): void;
}
