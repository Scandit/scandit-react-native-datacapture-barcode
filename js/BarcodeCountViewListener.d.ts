import { TrackedBarcode } from './Barcode';
import { BarcodeCountView } from './BarcodeCountView';
import { Brush } from 'scandit-react-native-datacapture-core/js/Common';
export interface BarcodeCountViewListener {
    brushForRecognizedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): Brush | null;
    brushForUnrecognizedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): Brush | null;
    brushForRecognizedBarcodeNotInList?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): Brush | null;
    didTapRecognizedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): void;
    didTapUnrecognizedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): void;
    didTapFilteredBarcode?(view: BarcodeCountView, filteredBarcode: TrackedBarcode): void;
    didTapRecognizedBarcodeNotInList?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): void;
    didCompleteCaptureList?(view: BarcodeCountView): void;
}
