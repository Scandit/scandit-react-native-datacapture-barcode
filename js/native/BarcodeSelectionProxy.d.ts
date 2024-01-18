import { Barcode } from '../Barcode';
export declare class BarcodeSelectionProxy {
    unfreezeCamera(): Promise<void>;
    reset(): Promise<void>;
    selectAimedBarcode(): Promise<void>;
    unselectBarcodes(barcodes: Barcode[]): Promise<void>;
    setSelectBarcodeEnabled(barcode: Barcode, enabled: boolean): Promise<void>;
    increaseCountForBarcodes(barcodes: Barcode[]): Promise<void>;
    private convertBarcodesToJson;
}
