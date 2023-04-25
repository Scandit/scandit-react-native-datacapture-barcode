import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { TargetBarcode } from './TargetBarcode';
import { Barcode, TrackedBarcode } from './Barcode';
export declare class BarcodeCountCaptureListSession extends DefaultSerializeable {
    get correctBarcodes(): TrackedBarcode[];
    get wrongBarcodes(): TrackedBarcode[];
    get missingBarcodes(): TargetBarcode[];
    get additionalBarcodes(): Barcode[];
    private _correctBarcodes;
    private _wrongBarcodes;
    private _missingBarcodes;
    private _additionalBarcodes;
    private static fromJSON;
    private constructor();
}
