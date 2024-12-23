import { Anchor, DataCaptureOverlay, DataCaptureView, PointWithUnit } from 'scandit-datacapture-frameworks-core';
import { BarcodeTracking, BarcodeTrackingAdvancedOverlayListener, BarcodeTrackingAdvancedOverlayView, TrackedBarcode } from 'scandit-datacapture-frameworks-barcode';
export declare class BarcodeTrackingAdvancedOverlay implements DataCaptureOverlay {
    private baseBarcodeTracking;
    get listener(): BarcodeTrackingAdvancedOverlayListener | null;
    set listener(listener: BarcodeTrackingAdvancedOverlayListener | null);
    private get type();
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    private set view(value);
    private get view();
    static withBarcodeTrackingForView(barcodeTracking: BarcodeTracking, view: DataCaptureView | null): BarcodeTrackingAdvancedOverlay;
    protected constructor();
    setViewForTrackedBarcode(view: BarcodeTrackingAdvancedOverlayView, trackedBarcode: TrackedBarcode): Promise<void>;
    setAnchorForTrackedBarcode(anchor: Anchor, trackedBarcode: TrackedBarcode): Promise<void>;
    setOffsetForTrackedBarcode(offset: PointWithUnit, trackedBarcode: TrackedBarcode): Promise<void>;
    clearTrackedBarcodeViews(): Promise<void>;
    toJSON(): object;
}
