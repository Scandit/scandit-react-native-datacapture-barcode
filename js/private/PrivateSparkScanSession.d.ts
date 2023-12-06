import { SparkScanSession } from '../SparkScanSession';
import { BarcodeJSON } from './PrivateBarcode';
export interface SparkScanSessionJSON {
    newlyRecognizedBarcodes: BarcodeJSON[];
    frameSequenceId: number;
}
export interface PrivateSparkScanSession {
    fromJSON(json: SparkScanSessionJSON): SparkScanSession;
}
