import { BarcodeCountCaptureListListener } from './BarcodeCountCaptureListListener';
import { TargetBarcode } from './TargetBarcode';
export declare class BarcodeCountCaptureList {
    private listener;
    private targetBarcodes;
    static create(listener: BarcodeCountCaptureListListener, targetBarcodes: TargetBarcode[]): BarcodeCountCaptureList;
    private constructor();
}
