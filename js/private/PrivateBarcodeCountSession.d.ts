import { Barcode } from '../Barcode';
import { BarcodeCountCaptureListSession } from '../BarcodeCountCaptureListSession';
import { BarcodeCountSession } from '../BarcodeCountSession';
import { BarcodeCountCaptureListSessionJSON } from './PrivateBarcodeCount';
export interface BarcodeCountSessionJSON {
    recognizedBarcodes: string;
    additionalBarcodes: Barcode[];
    frameSequenceId: number;
}
export interface PrivateBarcodeCountSession {
    fromJSON(json: BarcodeCountSessionJSON): BarcodeCountSession;
}
export interface PrivateBarcodeCountCaptureListSession {
    fromJSON(json: BarcodeCountCaptureListSessionJSON): BarcodeCountCaptureListSession;
}
export interface BarcodeCountSessionEventPayload {
    session: string;
}
