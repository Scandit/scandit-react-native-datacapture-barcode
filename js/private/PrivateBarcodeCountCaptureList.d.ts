import { BarcodeCountCaptureListListener } from '../BarcodeCountCaptureListListener';
import { TargetBarcode } from '../TargetBarcode';
export interface PrivateBarcodeCountCaptureList {
    targetBarcodes: TargetBarcode[];
    listener: BarcodeCountCaptureListListener;
}
