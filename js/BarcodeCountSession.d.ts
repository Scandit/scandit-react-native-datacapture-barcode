import { Barcode, TrackedBarcode } from './Barcode';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { BarcodeSpatialGrid } from './BarcodeSpatialGrid';
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
    getSpatialMap(): Promise<BarcodeSpatialGrid | null>;
    getSpatialMapWithHints(expectedNumberOfRows: number, expectedNumberOfColumns: number): Promise<BarcodeSpatialGrid | null>;
}
