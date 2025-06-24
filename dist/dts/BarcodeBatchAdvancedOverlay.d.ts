import { Anchor, DataCaptureOverlay, DataCaptureView, PointWithUnit } from 'scandit-datacapture-frameworks-core';
import { BarcodeBatch, BarcodeBatchAdvancedOverlayListener, BarcodeBatchAdvancedOverlayView, TrackedBarcode } from 'scandit-datacapture-frameworks-barcode';
export declare class BarcodeBatchAdvancedOverlay implements DataCaptureOverlay {
    private baseBarcodeBatch;
    get listener(): BarcodeBatchAdvancedOverlayListener | null;
    set listener(listener: BarcodeBatchAdvancedOverlayListener | null);
    private get type();
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    private set view(value);
    private get view();
    static withBarcodeBatchForView(barcodeBatch: BarcodeBatch, view: DataCaptureView | null): BarcodeBatchAdvancedOverlay;
    protected constructor();
    setViewForTrackedBarcode(view: BarcodeBatchAdvancedOverlayView, trackedBarcode: TrackedBarcode): Promise<void>;
    setAnchorForTrackedBarcode(anchor: Anchor, trackedBarcode: TrackedBarcode): Promise<void>;
    setOffsetForTrackedBarcode(offset: PointWithUnit, trackedBarcode: TrackedBarcode): Promise<void>;
    clearTrackedBarcodeViews(): Promise<void>;
    toJSON(): object;
}
