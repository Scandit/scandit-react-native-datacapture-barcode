import { TrackedBarcode } from './Barcode';
export declare class BarcodeTrackingSession {
    private _addedTrackedBarcodes;
    private _removedTrackedBarcodes;
    private _updatedTrackedBarcodes;
    private _trackedBarcodes;
    private _frameSequenceID;
    get addedTrackedBarcodes(): TrackedBarcode[];
    get removedTrackedBarcodes(): string[];
    get updatedTrackedBarcodes(): TrackedBarcode[];
    get trackedBarcodes(): {
        [key: string]: TrackedBarcode;
    };
    get frameSequenceID(): number;
    private listenerProxy;
    private static fromJSON;
    reset(): Promise<void>;
}
