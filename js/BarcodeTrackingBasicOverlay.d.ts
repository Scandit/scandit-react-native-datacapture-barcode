import { Brush } from 'scandit-react-native-datacapture-core/js/Common';
import { DataCaptureOverlay, DataCaptureView } from 'scandit-react-native-datacapture-core/js/DataCaptureView';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { TrackedBarcode } from './Barcode';
import { BarcodeTracking } from './BarcodeTracking';
export interface BarcodeTrackingBasicOverlayListener {
    brushForTrackedBarcode?(overlay: BarcodeTrackingBasicOverlay, trackedBarcode: TrackedBarcode): Optional<Brush>;
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
    get brush(): Optional<Brush>;
    set brush(newBrush: Optional<Brush>);
    private _shouldShowScanAreaGuides;
    listener: Optional<BarcodeTrackingBasicOverlayListener>;
    private proxy;
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    static withBarcodeTracking(barcodeTracking: BarcodeTracking): BarcodeTrackingBasicOverlay;
    static withBarcodeTrackingForView(barcodeTracking: BarcodeTracking, view: Optional<DataCaptureView>): BarcodeTrackingBasicOverlay;
    private constructor();
    setBrushForTrackedBarcode(brush: Brush, trackedBarcode: TrackedBarcode): Promise<void>;
    clearTrackedBarcodeBrushes(): Promise<void>;
}
