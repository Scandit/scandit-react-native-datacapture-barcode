import { BarcodeCountSessionProxy } from 'scandit-datacapture-frameworks-barcode';
import { NativeCallResult } from 'scandit-datacapture-frameworks-core';
export declare class NativeBarcodeCountSessionProxy implements BarcodeCountSessionProxy {
    resetSession(): Promise<void>;
    getSpatialMap(): Promise<NativeCallResult | null>;
    getSpatialMapWithHints(expectedNumberOfRows: number, expectedNumberOfColumns: number): Promise<NativeCallResult | null>;
}
