import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { FrameData } from 'scandit-datacapture-frameworks-core';
import { Barcode, BarcodeCountCaptureList, BarcodeCountSession, BarcodeCountSettings, BarcodeCountStatusProvider, BarcodeCountToolbarSettings, BarcodeCountViewListener, BarcodeCountViewUiListener, BaseBarcodeCountViewProps, Symbology, TrackedBarcode } from 'scandit-datacapture-frameworks-barcode';
import { Brush } from 'scandit-react-native-datacapture-core';
/**
 * Mode lifecycle state.
 *
 * - `'enabled'` (default): BarcodeCount attached, `isEnabled = true`.
 * - `'disabled'`: BarcodeCount attached, `isEnabled = false`.
 * - `'detached'`: native view disposed, mode removed.
 */
export type BarcodeCountLifecycleState = 'enabled' | 'disabled' | 'detached';
/**
 * Inherited pass-through props. `context`, `barcodeCount`, and the two
 * listeners are owned by the AIO component; everything else is forwarded as-is
 * to `BaseBarcodeCountView`.
 */
type InheritedBaseProps = Omit<Partial<BaseBarcodeCountViewProps>, 'context' | 'barcodeCount' | 'uiListener' | 'listener'>;
interface BarcodeCountViewAioProps extends InheritedBaseProps {
    /** Mode lifecycle state. Defaults to `'enabled'`. */
    state?: BarcodeCountLifecycleState;
    /**
     * Called on each `didScan` event. Receives `session.recognizedBarcodes`
     * as `barcodes` for convenience; the full session is also passed.
     */
    onScan?: (barcodes: Barcode[], session: BarcodeCountSession, getFrameData: () => Promise<FrameData | null>) => void | Promise<void>;
    /** Called on each session update. */
    onSessionUpdated?: (session: BarcodeCountSession, getFrameData: () => Promise<FrameData | null>) => void | Promise<void>;
    /** Shorthand: enabled symbologies. Ignored when `barcodeCountSettings` is set. */
    symbologies?: Symbology[];
    /** Full settings object. Takes precedence over `symbologies`. */
    barcodeCountSettings?: BarcodeCountSettings | null;
    /**
     * Capture list of `TargetBarcode`s to find. Applied to the mode whenever
     * this prop changes. Pass `null`/`undefined` to leave the list unset.
     */
    captureList?: BarcodeCountCaptureList | null;
    /** Additional barcodes to merge into the recognition results. */
    additionalBarcodes?: Barcode[] | null;
    /** UI listener (list/exit/single-scan button taps). */
    uiListener?: BarcodeCountViewUiListener;
    /** View listener (brushes + barcode taps + capture-list completion). */
    listener?: BarcodeCountViewListener;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}
/** Imperative methods exposed via `ref`. */
export interface BarcodeCountViewHandle {
    clearHighlights(): Promise<void>;
    setToolbarSettings(settings: BarcodeCountToolbarSettings): void;
    setStatusProvider(provider: BarcodeCountStatusProvider): void;
    setBrushForRecognizedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    setBrushForRecognizedBarcodeNotInList(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    setBrushForAcceptedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    setBrushForRejectedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    enableHardwareTrigger(hardwareTriggerKeyCode: number | null): Promise<void>;
}
export declare const BarcodeCountView: React.ForwardRefExoticComponent<BarcodeCountViewAioProps & React.RefAttributes<BarcodeCountViewHandle>>;
export {};
