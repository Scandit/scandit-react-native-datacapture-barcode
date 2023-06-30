import { Barcode, TrackedBarcode } from '../Barcode';
import { BarcodeCountListener } from '../BarcodeCountListener';
import { DataCaptureContext } from 'scandit-react-native-datacapture-core/js/DataCaptureContext';
import { Feedback } from 'scandit-react-native-datacapture-core/js/Feedback';
import { TargetBarcode } from '../TargetBarcode';
import { Symbology } from '../Symbology';
export interface PrivateBarcodeCount {
    _context: DataCaptureContext | null;
    listeners: BarcodeCountListener[];
    isInListenerCallback: boolean;
    didChange: () => Promise<void>;
}
export interface PrivateBarcodeCountView {
    toJSON(): object;
}
export interface TargetBarcodeJSON {
    data: string;
    quantity: number;
}
export interface BarcodeCountCaptureListSessionJSON {
    correctBarcodes: TrackedBarcode[];
    wrongBarcodes: TrackedBarcode[];
    missingBarcodes: TargetBarcode[];
    additionalBarcodes: Barcode[];
}
export interface BarcodeFilterSettingsJSON {
    excludeEan13: boolean;
    excludeUpca: boolean;
    excludedCodesRegex: string;
    excludedSymbolCounts: {
        [key in Symbology]?: number[];
    };
    excludedSymbologies: Symbology[];
}
export interface BarcodeCountFeedbackJSON {
    success: Feedback;
    failure: Feedback;
}
export interface BarcodeBrushForTrackedBarcodeEventPayload {
    trackedBarcode: string;
}
