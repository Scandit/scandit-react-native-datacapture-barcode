import { BarcodeTrackingBasicOverlayProxy } from 'scandit-datacapture-frameworks-barcode';
export declare class NativeBarcodeTrackingBasicOverlayProxy implements BarcodeTrackingBasicOverlayProxy {
    private nativeListeners;
    private eventEmitter;
    constructor();
    setBrushForTrackedBarcode(brushJson: string | null, trackedBarcodeIdentifer: number, _sessionFrameSequenceID: number | null): Promise<void>;
    clearTrackedBarcodeBrushes(): Promise<void>;
    registerListenerForBasicOverlayEvents(): void;
    unregisterListenerForBasicOverlayEvents(): void;
    subscribeBrushForTrackedBarcode(): void;
    subscribeDidTapTrackedBarcode(): void;
}
