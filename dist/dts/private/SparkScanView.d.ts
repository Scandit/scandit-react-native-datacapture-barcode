import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { FrameData, ScanIntention } from 'scandit-datacapture-frameworks-core';
import { Barcode, BaseSparkScanViewProps, BatterySavingMode, CompositeType, ScanItemDefinition, SparkScanScanningMode, SparkScanSession, SparkScanSettings, SparkScanViewSettings, SparkScanViewState, Symbology } from 'scandit-datacapture-frameworks-barcode';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
/**
 * Mode lifecycle state.
 *
 * - `'enabled'` (default): SparkScan attached, `isEnabled = true`.
 * - `'disabled'`: SparkScan attached, `isEnabled = false` (no scans delivered).
 * - `'detached'`: native view disposed.
 */
export type SparkScanLifecycleState = 'enabled' | 'disabled' | 'detached';
/**
 * UI-listener callbacks fired by the native trigger/toolbar.
 *
 * The `view` parameter is the imperative handle.
 */
export interface SparkScanViewUiListener {
    didTapBarcodeCountButton?(view: SparkScanViewHandle): void;
    didTapBarcodeFindButton?(view: SparkScanViewHandle): void;
    didTapLabelCaptureButton?(view: SparkScanViewHandle): void;
    didChangeViewState?(newState: SparkScanViewState): void;
    didChangeScanningMode?(newScanningMode: SparkScanScanningMode): void;
}
/**
 * Props inherited from `BaseSparkScanViewProps`. We `Omit` the four fields
 * the AIO component owns (`context` + `sparkScan` are auto-resolved,
 * `sparkScanViewSettings` is optional, `uiListener` uses the local type).
 */
type InheritedBaseProps = Omit<Partial<BaseSparkScanViewProps>, 'context' | 'sparkScan' | 'sparkScanViewSettings' | 'uiListener'>;
interface SparkScanViewProps extends InheritedBaseProps {
    /** Mode lifecycle state. Defaults to `'enabled'`. */
    state?: SparkScanLifecycleState;
    /**
     * Called for each newly-recognized barcode. Receives the new barcode
     * extracted from `session.newlyRecognizedBarcode` (empty array if none).
     * Return a `Promise` to keep the frame alive while async work runs —
     * `getFrameData()` becomes invalid once the returned promise resolves.
     */
    onScan?: (barcodes: Barcode[], session: SparkScanSession, getFrameData: () => Promise<FrameData | null>) => void | Promise<void>;
    /** Called on every session update. */
    onUpdateSession?: (session: SparkScanSession, getFrameData: () => Promise<FrameData | null>) => void | Promise<void>;
    /**
     * Raw `SparkScanListener.didScan` passthrough. Fires alongside `onScan` if
     * both are set.
     */
    didScan?: (session: SparkScanSession, getFrameData: () => Promise<FrameData | null>) => void | Promise<void>;
    /**
     * Raw `SparkScanListener.didUpdateSession` passthrough. Fires alongside
     * `onUpdateSession` if both are set.
     */
    didUpdateSession?: (session: SparkScanSession, getFrameData: () => Promise<FrameData | null>) => void | Promise<void>;
    /** Symbologies to enable. Ignored when `sparkScanSettings` is set. */
    symbologies?: Symbology[];
    /** Scan intention. Ignored when `sparkScanSettings` is set. */
    scanIntention?: ScanIntention;
    /** Composite types to enable. Ignored when `sparkScanSettings` is set. */
    enabledCompositeTypes?: CompositeType[];
    /** Item definitions for USI-style scanning. Ignored when `sparkScanSettings` is set. */
    itemDefinitions?: ScanItemDefinition[];
    /** Time interval in ms during which duplicate barcodes are filtered out. Ignored when `sparkScanSettings` is set. */
    codeDuplicateFilter?: number;
    /** Battery saving mode. Ignored when `sparkScanSettings` is set. */
    batterySaving?: BatterySavingMode;
    /** Full settings object. Takes precedence over all shorthand settings props. */
    sparkScanSettings?: SparkScanSettings | null;
    /** View-level settings (mini preview, animation, etc.). */
    sparkScanViewSettings?: SparkScanViewSettings | null;
    /** UI listener. */
    uiListener?: SparkScanViewUiListener;
    /** Optional `@react-navigation/native` prop. Focus/blur drive `prepareScanning` / `onHostPause`. */
    navigation?: NavigationProp<ParamListBase>;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}
/** Imperative methods exposed via `ref`. */
export interface SparkScanViewHandle {
    showToast(text: string): Promise<void>;
    prepareScanning(): Promise<void>;
    startScanning(): Promise<void>;
    pauseScanning(): Promise<void>;
    stopScanning(): Promise<void>;
    onHostPause(): Promise<void>;
}
export declare const SparkScanView: React.ForwardRefExoticComponent<SparkScanViewProps & React.RefAttributes<SparkScanViewHandle>>;
export {};
