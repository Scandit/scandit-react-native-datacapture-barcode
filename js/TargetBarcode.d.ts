import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
export declare class TargetBarcode extends DefaultSerializeable {
    get data(): string;
    get quantity(): number;
    private _data;
    private _quantity;
    static create(data: string, quantity: number): TargetBarcode;
    private static fromJSON;
    private constructor();
}
