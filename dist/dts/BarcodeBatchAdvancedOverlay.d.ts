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
    /**
     * @deprecated Since 7.6. This factory will be removed in 8.0.
     * Create the overlay and add it to the view manually instead:
     * ```ts
     * const overlay = new BarcodeBatchAdvancedOverlay();
     * view.addOverlay(overlay);
     * ```
     */
    static withBarcodeBatchForView(barcodeBatch: BarcodeBatch, view: DataCaptureView | null): BarcodeBatchAdvancedOverlay;
    constructor(mode: BarcodeBatch);
    setViewForTrackedBarcode(view: BarcodeBatchAdvancedOverlayView, trackedBarcode: TrackedBarcode): Promise<void>;
    setAnchorForTrackedBarcode(anchor: Anchor, trackedBarcode: TrackedBarcode): Promise<void>;
    setOffsetForTrackedBarcode(offset: PointWithUnit, trackedBarcode: TrackedBarcode): Promise<void>;
    clearTrackedBarcodeViews(): Promise<void>;
    updateSizeOfTrackedBarcodeView(trackedBarcodeIdentifier: number, width: number, height: number): Promise<void>;
    toJSON(): object;
}
