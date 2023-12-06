import { BarcodeCaptureSession } from '../BarcodeCaptureSession';
import { BarcodeJSON, LocalizedOnlyBarcodeJSON } from './PrivateBarcode';
export interface BarcodeCaptureSessionJSON {
    newlyRecognizedBarcodes: BarcodeJSON[];
    newlyLocalizedBarcodes: LocalizedOnlyBarcodeJSON[];
    frameSequenceId: number;
}
export interface PrivateBarcodeCaptureSession {
    fromJSON(json: BarcodeCaptureSessionJSON): BarcodeCaptureSession;
}
