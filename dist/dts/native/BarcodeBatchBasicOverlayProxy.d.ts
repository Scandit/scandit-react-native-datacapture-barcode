import { BarcodeBatchBasicOverlayProxy } from 'scandit-datacapture-frameworks-barcode';
export declare class NativeBarcodeBatchBasicOverlayProxy implements BarcodeBatchBasicOverlayProxy {
    private nativeListeners;
    private eventEmitter;
    constructor();
    setBrushForTrackedBarcode(brushJson: string | null, trackedBarcodeIdentifer: number, _sessionFrameSequenceID: number | null): Promise<void>;
    clearTrackedBarcodeBrushes(): Promise<void>;
    registerListenerForBasicOverlayEvents(): void;
    unregisterListenerForBasicOverlayEvents(): void;
    updateBarcodeBatchBasicOverlay(overlayJson: string): Promise<void>;
    subscribeBrushForTrackedBarcode(): void;
    subscribeDidTapTrackedBarcode(): void;
}
