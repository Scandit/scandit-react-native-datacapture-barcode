import React from 'react';
import { Anchor, Brush, CameraPosition, CameraSettings, DataCaptureContext, FrameData, FrameSourceState, PointWithUnit, TorchState, TorchSwitchControl, ZoomSwitchControl } from 'scandit-react-native-datacapture-core';
import { BarcodeTracking, BarcodeTrackingBasicOverlay, BarcodeTrackingBasicOverlayStyle, BarcodeTrackingSession, BarcodeTrackingSettings, TrackedBarcode } from 'scandit-datacapture-frameworks-barcode';
interface BarcodeTrackingViewProps {
    context: DataCaptureContext;
    isEnabled: boolean;
    barcodeTrackingSettings?: BarcodeTrackingSettings | null;
    defaultBasicOverlayBrush?: Brush | null;
    basicOverlayStyle?: BarcodeTrackingBasicOverlayStyle | null;
    shouldShowScanAreaGuides?: boolean;
    defaultAnchorForTrackedBarcode?: Anchor;
    defaultsOffsetForTrackedBarcode?: PointWithUnit;
    cameraSettings?: CameraSettings | null;
    desiredCameraState?: FrameSourceState | null;
    desiredCameraPosition?: CameraPosition | null;
    desiredTorchState?: TorchState | null;
    torchSwitchControl?: TorchSwitchControl | null;
    zoomSwitchControl?: ZoomSwitchControl | null;
    style: any;
    useCacheForViewsForTrackedBarcodes?: boolean;
    navigation?: any;
    didUpdateSession?(barcodeTracking: BarcodeTracking, session: BarcodeTrackingSession, getFrameData: () => Promise<FrameData>): void;
    brushForTrackedBarcode?(overlay: BarcodeTrackingBasicOverlay, trackedBarcode: TrackedBarcode): Brush | null;
    didTapTrackedBarcode?(overlay: BarcodeTrackingBasicOverlay, trackedBarcode: TrackedBarcode): void;
}
export declare const BarcodeTrackingView: React.ForwardRefExoticComponent<BarcodeTrackingViewProps & React.RefAttributes<unknown>>;
export {};
