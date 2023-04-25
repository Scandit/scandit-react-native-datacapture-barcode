import { Barcode } from '../Barcode';
export declare class BarcodeSelectionProxy {
    unfreezeCamera(): Promise<void>;
    reset(): Promise<void>;
    selectAimedBarcode(): Promise<void>;
    unselectBarcodes(barcodes: Barcode[]): Promise<void>;
    increaseCountForBarcodes(barcodes: Barcode[]): Promise<void>;
    private convertBarcodesToJSON;
}
