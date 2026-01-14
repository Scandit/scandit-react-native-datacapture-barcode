import React from 'react';
import { Brush, CameraPosition, CameraSettings, DataCaptureContext, FrameData, FrameSourceState, TorchState, TorchSwitchControl, ZoomSwitchControl } from 'scandit-react-native-datacapture-core';
import { BarcodeCapture, BarcodeCaptureSession, BarcodeCaptureSettings } from 'scandit-datacapture-frameworks-barcode';
interface BarcodeCaptureViewProps {
    context: DataCaptureContext;
    isEnabled: boolean;
    barcodeCaptureSettings?: BarcodeCaptureSettings | null;
    defaultBasicOverlayBrush?: Brush | null;
    cameraSettings?: CameraSettings | null;
    desiredCameraState?: FrameSourceState | null;
    desiredCameraPosition?: CameraPosition | null;
    desiredTorchState?: TorchState | null;
    torchSwitchControl?: TorchSwitchControl | null;
    zoomSwitchControl?: ZoomSwitchControl | null;
    navigation?: any;
    didScan?(barcodeCapture: BarcodeCapture, session: BarcodeCaptureSession, getFrameData: () => Promise<FrameData>): Promise<void>;
}
export declare const BarcodeCaptureView: React.ForwardRefExoticComponent<BarcodeCaptureViewProps & React.RefAttributes<unknown>>;
export {};
