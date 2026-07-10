import { BarcodeCountSessionProxy } from 'scandit-datacapture-frameworks-barcode';
export declare class NativeBarcodeCountSessionProxy implements BarcodeCountSessionProxy {
    resetSession(): Promise<void>;
    getSpatialMap(): Promise<string | null>;
    getSpatialMapWithHints(expectedNumberOfRows: number, expectedNumberOfColumns: number): Promise<string | null>;
}
