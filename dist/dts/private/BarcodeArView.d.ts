import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { CameraSettings, FrameData } from 'scandit-datacapture-frameworks-core';
import { BarcodeArAnnotationProvider, BarcodeArFilter, BarcodeArHighlightProvider, BarcodeArSession, BarcodeArSettings, BarcodeArViewSettings, BarcodeArViewUiListener, Symbology } from 'scandit-datacapture-frameworks-barcode';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
/**
 * Mode lifecycle state.
 *
 * - `'enabled'` (default): the view is created and scanning runs.
 * - `'disabled'`: the view is created but paused (no scans delivered).
 * - `'detached'`: native view disposed.
 */
export type BarcodeArLifecycleState = 'enabled' | 'disabled' | 'detached';
interface BarcodeArViewProps {
    /** Mode lifecycle state. Defaults to `'enabled'`. */
    state?: BarcodeArLifecycleState;
    /** Symbologies to enable. Ignored when `settings` is set. */
    symbologies?: Symbology[];
    /** Full settings object. Takes precedence over `symbologies`. */
    settings?: BarcodeArSettings | null;
    /** View-level settings (haptics, sound, etc.). */
    viewSettings?: BarcodeArViewSettings | null;
    /** Camera settings. */
    cameraSettings?: CameraSettings | null;
    /**
     * Raw `BarcodeArListener.didUpdateSession` passthrough. Fires on every
     * session update.
     */
    didUpdateSession?: (session: BarcodeArSession, getFrameData: () => Promise<FrameData>) => void | Promise<void>;
    /** Highlight provider. */
    highlightProvider?: BarcodeArHighlightProvider | null;
    /** Annotation provider. */
    annotationProvider?: BarcodeArAnnotationProvider | null;
    /** UI listener for taps on highlights. */
    uiListener?: BarcodeArViewUiListener | null;
    /** Pre-tracking barcode filter applied to the mode. */
    barcodeFilter?: BarcodeArFilter | null;
    /**
     * Optional `@react-navigation/native` prop. When provided, scanning is
     * paused on `blur` and resumed on `focus`.
     */
    navigation?: NavigationProp<ParamListBase>;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}
/** Imperative methods exposed via `ref`. */
export interface BarcodeArViewHandle {
    start(): Promise<void>;
    stop(): Promise<void>;
    pause(): Promise<void>;
    reset(): Promise<void>;
}
export declare const BarcodeArView: React.ForwardRefExoticComponent<BarcodeArViewProps & React.RefAttributes<BarcodeArViewHandle>>;
export {};
