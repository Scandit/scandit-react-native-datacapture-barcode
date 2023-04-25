import { BarcodeCountCaptureList } from './BarcodeCountCaptureList';
import { BarcodeCountCaptureListSession } from './BarcodeCountCaptureListSession';
export interface BarcodeCountCaptureListListener {
    didUpdateSession?(barcodeCountCaptureList: BarcodeCountCaptureList, session: BarcodeCountCaptureListSession): void;
}
