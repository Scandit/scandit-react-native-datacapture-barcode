import { Brush } from 'scandit-react-native-datacapture-core/js/Common';
import { DataCaptureOverlay, DataCaptureView } from 'scandit-react-native-datacapture-core/js/DataCaptureView';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { TrackedBarcode } from './Barcode';
import { BarcodeTracking } from './BarcodeTracking';
export interface BarcodeTrackingBasicOverlayListener {
    brushForTrackedBarcode?(overlay: BarcodeTrackingBasicOverlay, trackedBarcode: TrackedBarcode): Brush | null;
    didTapTrackedBarcode?(overlay: BarcodeTrackingBasicOverlay, trackedBarcode: TrackedBarcode): void;
}
export declare class BarcodeTrackingBasicOverlay extends DefaultSerializeable implements DataCaptureOverlay {
    private type;
    private barcodeTracking;
    private _view;
    private set view(value);
    private get view();
    static get defaultBrush(): Brush;
    private _brush;
    get brush(): Brush | null;
    set brush(newBrush: Brush | null);
    private _shouldShowScanAreaGuides;
    listener: BarcodeTrackingBasicOverlayListener | null;
    private proxy;
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    static withBarcodeTracking(barcodeTracking: BarcodeTracking): BarcodeTrackingBasicOverlay;
    static withBarcodeTrackingForView(barcodeTracking: BarcodeTracking, view: DataCaptureView | null): BarcodeTrackingBasicOverlay;
    private constructor();
    setBrushForTrackedBarcode(brush: Brush, trackedBarcode: TrackedBarcode): Promise<void>;
    clearTrackedBarcodeBrushes(): Promise<void>;
}
