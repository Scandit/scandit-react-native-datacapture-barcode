import React from 'react';
import { ViewProps } from 'react-native';
import { Anchor, Brush, PointWithUnit } from 'scandit-react-native-datacapture-core';
import { BarcodeBatchAdvancedOverlayView, BarcodeBatchBasicOverlayStyle, BarcodeBatchSession, BarcodeBatchSettings, Symbology, TrackedBarcode } from 'scandit-datacapture-frameworks-barcode';
import { FrameData } from 'scandit-datacapture-frameworks-core';
/**
 * Mode lifecycle state. Camera state (on / standby / off) is driven by the
 * surrounding `<ScanditProvider frameSourceState={...}>`, not by this prop.
 *
 * - `'enabled'` (default): mode attached, `isEnabled = true`.
 * - `'disabled'`: mode attached, `isEnabled = false` (no scans delivered).
 * - `'detached'`: mode removed from the context entirely.
 */
export type BarcodeBatchLifecycleState = 'enabled' | 'disabled' | 'detached';
/**
 * Basic-overlay configuration. The overlay is attached by default; pass
 * `{ enabled: false }` to skip it.
 */
export interface BarcodeBatchBasicOverlayProps {
    /** Whether to attach the basic overlay. Defaults to `true`. */
    enabled?: boolean;
    /** Overlay style (constructor arg). Defaults to `Frame`. Changing this recreates the overlay. */
    style?: BarcodeBatchBasicOverlayStyle | null;
    /** Default brush applied to every tracked barcode. */
    defaultBrush?: Brush | null;
    /** Whether to render scan-area guides. */
    shouldShowScanAreaGuides?: boolean;
    /** Per-barcode brush. Overrides `defaultBrush` per call. */
    brushForTrackedBarcode?: (trackedBarcode: TrackedBarcode) => Brush | null;
    /** Tap-on-tracked-barcode callback. */
    didTapTrackedBarcode?: (trackedBarcode: TrackedBarcode) => void;
}
/**
 * Advanced-overlay configuration. Renders custom views per tracked barcode.
 * The overlay is only attached when this prop is supplied — omit it entirely
 * if you don't need custom-view annotations. Pass `{ enabled: false }` to
 * keep the prop shape but disable the overlay (e.g. for runtime opt-out).
 */
export interface BarcodeBatchAdvancedOverlayProps {
    /** Whether to attach the advanced overlay. Defaults to `true` (when the prop is supplied). */
    enabled?: boolean;
    /** Whether to render scan-area guides. */
    shouldShowScanAreaGuides?: boolean;
    /**
     * View to render over each tracked barcode. Return `null` to skip. Returning
     * a `Promise` is supported.
     */
    viewForTrackedBarcode?: (trackedBarcode: TrackedBarcode) => BarcodeBatchAdvancedOverlayView | null | Promise<BarcodeBatchAdvancedOverlayView | null>;
    /** Tap callback for the custom view. */
    didTapViewForTrackedBarcode?: (trackedBarcode: TrackedBarcode) => void;
    /** Per-barcode anchor. */
    anchorForTrackedBarcode?: (trackedBarcode: TrackedBarcode) => Anchor;
    /** Per-barcode offset. */
    offsetForTrackedBarcode?: (trackedBarcode: TrackedBarcode) => PointWithUnit;
}
interface BarcodeBatchViewProps extends ViewProps {
    /** Mode lifecycle state. Defaults to `'enabled'`. */
    state?: BarcodeBatchLifecycleState;
    /** Symbologies to enable. Ignored when `barcodeBatchSettings` is set. */
    symbologies?: Symbology[];
    /** Full BarcodeBatch settings object. Takes precedence over `symbologies`. */
    barcodeBatchSettings?: BarcodeBatchSettings | null;
    /**
     * Convenience callback fired on each session update with all newly-added
     * tracked barcodes (`session.addedTrackedBarcodes`).
     */
    onScan?: (barcodes: TrackedBarcode[], session: BarcodeBatchSession, getFrameData: () => Promise<FrameData>) => void | Promise<void>;
    /** Raw `BarcodeBatchListener.didUpdateSession` passthrough. Fires alongside `onScan` if both are set. */
    onUpdateSession?: (session: BarcodeBatchSession, getFrameData: () => Promise<FrameData>) => void | Promise<void>;
    /**
     * Basic overlay configuration. Omit the prop (or pass `undefined`) to use
     * defaults. Pass `{ enabled: false }` to skip the overlay.
     */
    basicOverlay?: BarcodeBatchBasicOverlayProps;
    /**
     * Advanced overlay configuration. Omit the prop entirely to skip the overlay;
     * pass any object (even `{}`) to opt in to custom-view annotations.
     */
    advancedOverlay?: BarcodeBatchAdvancedOverlayProps;
}
/** Imperative methods scoped to the basic overlay. Present only when `basicOverlay.enabled !== false`. */
export interface BarcodeBatchBasicOverlayHandle {
    /** Override the brush for a specific tracked barcode. */
    setBrushForTrackedBarcode(brush: Brush | null, trackedBarcode: TrackedBarcode): Promise<void>;
    /** Clear all per-barcode brush overrides set via `setBrushForTrackedBarcode`. */
    clearTrackedBarcodeBrushes(): Promise<void>;
}
/** Imperative methods scoped to the advanced overlay. Present only when the `advancedOverlay` prop is supplied and enabled. */
export interface BarcodeBatchAdvancedOverlayHandle {
    /** Set the view for a tracked barcode. */
    setViewForTrackedBarcode(view: BarcodeBatchAdvancedOverlayView | Promise<BarcodeBatchAdvancedOverlayView>, trackedBarcode: TrackedBarcode): Promise<void>;
    /** Set the anchor for a tracked barcode. */
    setAnchorForTrackedBarcode(anchor: Anchor, trackedBarcode: TrackedBarcode): Promise<void>;
    /** Set the offset for a tracked barcode. */
    setOffsetForTrackedBarcode(offset: PointWithUnit, trackedBarcode: TrackedBarcode): Promise<void>;
    /** Clear all per-barcode views. */
    clearTrackedBarcodeViews(): Promise<void>;
    /** Update the recorded size of a tracked-barcode view (after layout). */
    updateSizeOfTrackedBarcodeView(trackedBarcodeIdentifier: number, width: number, height: number): Promise<void>;
}
/**
 * Imperative methods exposed via `ref`. Overlay-scoped methods live under
 * `basicOverlay` / `advancedOverlay` namespaces that are only present when
 * the corresponding overlay is configured + enabled — so consumers can't call
 * a method that has nothing to act on.
 */
export interface BarcodeBatchViewHandle {
    /** Reset the mode's tracking session. */
    reset(): Promise<void>;
    /** Basic overlay methods (omitted when `basicOverlay.enabled === false`). */
    basicOverlay?: BarcodeBatchBasicOverlayHandle;
    /** Advanced overlay methods (omitted when `advancedOverlay` is not supplied or `enabled === false`). */
    advancedOverlay?: BarcodeBatchAdvancedOverlayHandle;
}
export declare const BarcodeBatchView: React.ForwardRefExoticComponent<BarcodeBatchViewProps & React.RefAttributes<BarcodeBatchViewHandle>>;
export {};
