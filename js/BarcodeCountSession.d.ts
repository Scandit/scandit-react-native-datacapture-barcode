import { Barcode, TrackedBarcode } from './Barcode';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
export declare class BarcodeCountSession extends DefaultSerializeable {
    private _recognizedBarcodes;
    private _additionalBarcodes;
    private _frameSequenceID;
    private static fromJSON;
    get recognizedBarcodes(): {
        [key: number]: TrackedBarcode;
    };
    get additionalBarcodes(): Barcode[];
    get frameSequenceID(): number;
    reset(): Promise<void>;
}
