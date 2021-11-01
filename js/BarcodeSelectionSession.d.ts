import { Barcode } from './Barcode';
export declare class BarcodeSelectionSession {
    private _selectedBarcodes;
    private _newlySelectedBarcodes;
    private _newlyUnselectedBarcodes;
    private _frameSequenceID;
    private listenerProxy;
    get selectedBarcodes(): Barcode[];
    get newlySelectedBarcodes(): Barcode[];
    get newlyUnselectedBarcodes(): Barcode[];
    get frameSequenceID(): number;
    private static fromJSON;
    getCount(barcode: Barcode): Promise<number>;
    reset(): Promise<void>;
}
