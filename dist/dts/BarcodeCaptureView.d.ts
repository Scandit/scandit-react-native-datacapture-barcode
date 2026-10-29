import React from 'react';
import { ViewProps } from 'react-native';
import { Brush, DataCaptureView, Orientation, Size, TorchSwitchControl, Viewfinder, ZoomSwitchControl } from 'scandit-react-native-datacapture-core';
import { ArucoDictionary, Barcode, BarcodeCaptureSession, BarcodeCaptureSettings, BatterySavingMode, CompositeType, Symbology } from 'scandit-datacapture-frameworks-barcode';
import { FrameData, LocationSelection, ScanIntention } from 'scandit-datacapture-frameworks-core';
/**
 * Mode lifecycle state. Camera state (on / standby / off) is driven by the
 * surrounding `<ScanditProvider frameSourceState={...}>`, not by this prop.
 *
 * - `'enabled'` (default): mode attached, `isEnabled = true`.
 * - `'disabled'`: mode attached, `isEnabled = false` (no scans delivered).
 * - `'detached'`: mode removed from the context entirely.
 */
export type BarcodeCaptureViewState = 'enabled' | 'disabled' | 'detached';
/**
 * Basic-overlay configuration. The overlay is attached by default; pass
 * `{ enabled: false }` to skip it. `BarcodeCaptureOverlay` has no listener
 * interface, so this is purely a setter bag.
 *
 * @internal
 */
export interface BarcodeCaptureBasicOverlayProps {
    /** Whether to attach the basic overlay. Defaults to `true`. */
    enabled?: boolean;
    /** Default brush applied to recognized barcodes. */
    defaultBrush?: Brush | null;
    /** Viewfinder rendered on top of the camera preview. */
    viewfinder?: Viewfinder | null;
    /** Whether to render scan-area guides. */
    shouldShowScanAreaGuides?: boolean;
}
interface BarcodeCaptureViewProps extends ViewProps {
    /** Mode lifecycle state. Defaults to `'enabled'`. */
    state?: BarcodeCaptureViewState;
    /**
     * Called for each newly-recognized barcode. Return a `Promise` to keep the
     * frame alive while async work runs — `getFrameData()` becomes invalid once
     * the returned promise resolves. Sync handlers return immediately (1
     * microtask) and don't impact throughput.
     */
    onScan?: (barcodes: Barcode[], session: BarcodeCaptureSession, getFrameData: () => Promise<FrameData>) => void | Promise<void>;
    /**
     * Called on every session update (~once per processed frame), regardless of
     * whether a barcode was recognized.
     *
     * If the handler is `async`, the native pipeline awaits it — useful when
     * you need `getFrameData()` to stay valid through async work, but be aware
     * it can slow down frame processing. For "fire-and-forget" background
     * work that doesn't need frame data, keep the handler synchronous and
     * dispatch via your own queue.
     */
    onUpdateSession?: (session: BarcodeCaptureSession, getFrameData: () => Promise<FrameData>) => void | Promise<void>;
    /**
     * Raw `BarcodeCaptureListener.didScan` passthrough — receives the full
     * session (not just the newly-recognized barcode that `onScan` extracts).
     * Fires alongside `onScan` if both are set.
     */
    didScan?: (session: BarcodeCaptureSession, getFrameData: () => Promise<FrameData>) => void | Promise<void>;
    /**
     * Raw `BarcodeCaptureListener.didUpdateSession` passthrough. Fires alongside
     * `onUpdateSession` if both are set.
     */
    didUpdateSession?: (session: BarcodeCaptureSession, getFrameData: () => Promise<FrameData>) => void | Promise<void>;
    /** Symbologies to enable. Ignored when `barcodeCaptureSettings` is set. */
    symbologies?: Symbology[];
    /** Restrict the scan area within the camera frame. Ignored when `barcodeCaptureSettings` is set. */
    locationSelection?: LocationSelection | null;
    /** Composite barcode types to enable (e.g. GS1 composites). Ignored when `barcodeCaptureSettings` is set. */
    compositeTypes?: CompositeType[];
    /** Battery saving mode. Ignored when `barcodeCaptureSettings` is set. */
    batterySaving?: BatterySavingMode;
    /** Scan intention (smart or manual). Ignored when `barcodeCaptureSettings` is set. */
    scanIntention?: ScanIntention;
    /** Time interval in ms during which duplicate barcodes are filtered out. Ignored when `barcodeCaptureSettings` is set. */
    codeDuplicateFilter?: number;
    /** ArUco marker dictionary to use. Ignored when `barcodeCaptureSettings` is set. */
    arucoDictionary?: ArucoDictionary;
    /** Full settings object. Takes precedence over all shorthand settings props. */
    barcodeCaptureSettings?: BarcodeCaptureSettings | null;
    /**
     * Basic overlay configuration. Omit the prop (or pass `undefined`) to use
     * defaults. Pass `{ enabled: false }` to skip the overlay.
     */
    basicOverlay?: BarcodeCaptureBasicOverlayProps;
    /** Called when the view's size or orientation changes. */
    onDidChangeSize?: (view: DataCaptureView, size: Size, orientation: Orientation) => void;
    /** Native on-view torch toggle control. */
    torchSwitchControl?: TorchSwitchControl | null;
    /** Native on-view zoom toggle control. */
    zoomSwitchControl?: ZoomSwitchControl | null;
}
/**
 * Imperative methods exposed via `ref`. `BarcodeCaptureOverlay` has no
 * imperative API of its own, so there's no overlay-scoped namespace.
 *
 * @internal
 */
export interface BarcodeCaptureViewHandle {
    /**
     * Reset the current capture session (clears recently-recognized barcodes
     * tracked by the duplicate filter). No-op until the first session callback
     * has fired.
     */
    reset(): Promise<void>;
}
export declare const BarcodeCaptureView: React.ForwardRefExoticComponent<BarcodeCaptureViewProps & React.RefAttributes<BarcodeCaptureViewHandle>>;
export {};
