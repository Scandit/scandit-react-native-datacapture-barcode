import React from 'react';
import { Brush, CameraPosition, CameraSettings, DataCaptureContext, FrameData, FrameSourceState, PointWithUnit, TorchState, TorchSwitchControl, ZoomSwitchControl } from 'scandit-react-native-datacapture-core';
import { BarcodeSelection, BarcodeSelectionBasicOverlayStyle, BarcodeSelectionFeedback, BarcodeSelectionSession, BarcodeSelectionSettings } from 'scandit-datacapture-frameworks-barcode';
interface BarcodeSelectionViewProps {
    context: DataCaptureContext;
    isEnabled: boolean;
    barcodeSelectionSettings?: BarcodeSelectionSettings | null;
    aimedBrush?: Brush | null;
    selectedBrush?: Brush | null;
    selectingBrush?: Brush | null;
    trackedBrush?: Brush | null;
    basicOverlayStyle?: BarcodeSelectionBasicOverlayStyle | null;
    cameraSettings?: CameraSettings | null;
    desiredCameraState?: FrameSourceState | null;
    desiredCameraPosition?: CameraPosition | null;
    desiredTorchState?: TorchState | null;
    torchSwitchControl?: TorchSwitchControl | null;
    zoomSwitchControl?: ZoomSwitchControl | null;
    pointOfInterest?: PointWithUnit | null;
    feedback?: BarcodeSelectionFeedback;
    navigation?: any;
    shouldUnfreezeCamera?: boolean | null;
    didUpdateSelection?(barcodeSelection: BarcodeSelection, session: BarcodeSelectionSession, getFrameData: () => Promise<FrameData>): Promise<void>;
}
export declare const BarcodeSelectionView: React.ForwardRefExoticComponent<BarcodeSelectionViewProps & React.RefAttributes<unknown>>;
export {};
