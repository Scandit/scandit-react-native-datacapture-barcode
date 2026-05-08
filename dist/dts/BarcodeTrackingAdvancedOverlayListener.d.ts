import { TrackedBarcode } from 'scandit-datacapture-frameworks-barcode';
import { BarcodeTrackingAdvancedOverlay } from './BarcodeTrackingAdvancedOverlay';
import { BarcodeTrackingAdvancedOverlayView } from './BarcodeTrackingAdvancedOverlayView';
import { Anchor, PointWithUnit } from 'scandit-datacapture-frameworks-core';
export interface BarcodeTrackingAdvancedOverlayListener {
    didTapViewForTrackedBarcode?(overlay: BarcodeTrackingAdvancedOverlay, trackedBarcode: TrackedBarcode): void;
    viewForTrackedBarcode?(overlay: BarcodeTrackingAdvancedOverlay, trackedBarcode: TrackedBarcode): BarcodeTrackingAdvancedOverlayView | null;
    anchorForTrackedBarcode?(overlay: BarcodeTrackingAdvancedOverlay, trackedBarcode: TrackedBarcode): Anchor;
    offsetForTrackedBarcode?(overlay: BarcodeTrackingAdvancedOverlay, trackedBarcode: TrackedBarcode): PointWithUnit;
}
