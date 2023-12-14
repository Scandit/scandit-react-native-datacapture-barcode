import { Barcode } from './Barcode';
export declare class SparkScanSession {
    private _newlyRecognizedBarcodes;
    private _frameSequenceID;
    private listenerProxy;
    private static fromJSON;
    get newlyRecognizedBarcodes(): Barcode[];
    get frameSequenceID(): number;
    reset(): Promise<void>;
}
