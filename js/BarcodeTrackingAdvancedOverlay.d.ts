import { PointWithUnit } from 'scandit-react-native-datacapture-core/js/Common';
import { Anchor } from 'scandit-react-native-datacapture-core/js/CommonEnums';
import { DataCaptureOverlay, DataCaptureView } from 'scandit-react-native-datacapture-core/js/DataCaptureView';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { TrackedBarcode } from './Barcode';
import { BarcodeTracking } from './BarcodeTracking';
import { BarcodeTrackingAdvancedOverlayView } from './BarcodeTrackingAdvancedOverlayView';
export interface BarcodeTrackingAdvancedOverlayListener {
    viewForTrackedBarcode?(overlay: BarcodeTrackingAdvancedOverlay, trackedBarcode: TrackedBarcode): BarcodeTrackingAdvancedOverlayView | null;
    anchorForTrackedBarcode?(overlay: BarcodeTrackingAdvancedOverlay, trackedBarcode: TrackedBarcode): Anchor;
    offsetForTrackedBarcode?(overlay: BarcodeTrackingAdvancedOverlay, trackedBarcode: TrackedBarcode): PointWithUnit;
}
export declare class BarcodeTrackingAdvancedOverlay extends DefaultSerializeable implements DataCaptureOverlay {
    private type;
    private _shouldShowScanAreaGuides;
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    private barcodeTracking;
    listener: BarcodeTrackingAdvancedOverlayListener | null;
    private proxy;
    private _view;
    private set view(value);
    private get view();
    static withBarcodeTrackingForView(barcodeTracking: BarcodeTracking, view: DataCaptureView | null): BarcodeTrackingAdvancedOverlay;
    private constructor();
    setViewForTrackedBarcode(view: BarcodeTrackingAdvancedOverlayView, trackedBarcode: TrackedBarcode): Promise<void>;
    setAnchorForTrackedBarcode(anchor: Anchor, trackedBarcode: TrackedBarcode): Promise<void>;
    setOffsetForTrackedBarcode(offset: PointWithUnit, trackedBarcode: TrackedBarcode): Promise<void>;
    clearTrackedBarcodeViews(): Promise<void>;
}
