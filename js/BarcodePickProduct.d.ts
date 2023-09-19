import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
export declare class BarcodePickProduct extends DefaultSerializeable {
    private _identifier;
    private _quantityToPick;
    constructor(identifier: string, quantityToPick: number);
    get identifier(): string;
    get quantityToPick(): number;
}
