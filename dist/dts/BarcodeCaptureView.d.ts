import React from 'react';
import { View, ViewProps } from 'react-native';
import { Brush, CameraPosition, CameraSettings, DataCaptureContext, FrameData, FrameSourceState, TorchState, TorchSwitchControl, ZoomSwitchControl } from 'scandit-react-native-datacapture-core';
import { BarcodeCapture, BarcodeCaptureSession, BarcodeCaptureSettings } from 'scandit-datacapture-frameworks-barcode';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
interface BarcodeCaptureViewProps extends ViewProps {
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
    navigation?: NavigationProp<ParamListBase>;
    didScan?(barcodeCapture: BarcodeCapture, session: BarcodeCaptureSession, getFrameData: () => Promise<FrameData>): Promise<void>;
}
export declare const BarcodeCaptureView: React.ForwardRefExoticComponent<BarcodeCaptureViewProps & React.RefAttributes<View>>;
export {};
