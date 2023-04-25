import { TrackedBarcode } from './Barcode';
import { BarcodeCountView } from './BarcodeCountView';
export interface BarcodeCountViewListener {
    didTapRecognizedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): void;
    didTapUnrecognizedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): void;
    didTapFilteredBarcode?(view: BarcodeCountView, filteredBarcode: TrackedBarcode): void;
    didTapRecognizedBarcodeNotInList?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): void;
    didCompleteCaptureList?(view: BarcodeCountView): void;
}
