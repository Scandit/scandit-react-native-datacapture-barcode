import { BarcodePickAsyncMapperProductProviderCallback } from './BarcodePickAsyncMapperProductProviderCallback';
import { BarcodePickProductProvider } from './BarcodePickProductProvider';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { BarcodePickProduct } from './BarcodePickProduct';
export declare class BarcodePickAsyncMapperProductProvider extends DefaultSerializeable implements BarcodePickProductProvider {
    private _callback;
    private _productProxy;
    private _productsToPick;
    private _productsToPickForSerialization;
    constructor(productsToPick: BarcodePickProduct[], callback: BarcodePickAsyncMapperProductProviderCallback);
}
