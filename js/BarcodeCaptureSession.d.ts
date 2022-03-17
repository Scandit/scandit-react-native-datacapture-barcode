import { Barcode, LocalizedOnlyBarcode } from './Barcode';
export declare class BarcodeCaptureSession {
    private _newlyRecognizedBarcodes;
    private _newlyLocalizedBarcodes;
    private _frameSequenceID;
    private listenerProxy;
    get newlyRecognizedBarcodes(): Barcode[];
    get newlyLocalizedBarcodes(): LocalizedOnlyBarcode[];
    get frameSequenceID(): number;
    private static fromJSON;
    reset(): Promise<void>;
}
