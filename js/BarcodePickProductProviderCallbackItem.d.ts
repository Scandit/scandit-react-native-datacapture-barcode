import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
export declare class BarcodePickProductProviderCallbackItem extends DefaultSerializeable {
    private _itemData;
    private _productIdentifier;
    constructor(itemData: string, productIdentifier: string | null);
    get itemData(): string;
    get productIdentifier(): string | null;
}
