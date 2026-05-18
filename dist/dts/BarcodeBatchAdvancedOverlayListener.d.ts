import { TrackedBarcode } from 'scandit-datacapture-frameworks-barcode';
import { BarcodeBatchAdvancedOverlay } from './BarcodeBatchAdvancedOverlay';
import { BarcodeBatchAdvancedOverlayView } from './BarcodeBatchAdvancedOverlayView';
import { Anchor, PointWithUnit } from 'scandit-datacapture-frameworks-core';
export interface BarcodeBatchAdvancedOverlayListener {
    didTapViewForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): void;
    viewForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): BarcodeBatchAdvancedOverlayView | null;
    anchorForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): Anchor;
    offsetForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): PointWithUnit;
}
