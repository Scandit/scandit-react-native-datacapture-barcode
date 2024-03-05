import { BarcodeSelectionOverlayProxy } from 'scandit-datacapture-frameworks-barcode';
export declare class NativeBarcodeSelectionOverlayProxy implements BarcodeSelectionOverlayProxy {
    private brushForAimedBarcodeProvider;
    private brushForTrackedBarcodeProvider;
    private eventEmitter;
    constructor();
    isModeEnabled: () => boolean;
    setTextForAimToSelectAutoHint(text: string): Promise<void>;
    removeAimedBarcodeBrushProvider(): Promise<void>;
    setAimedBarcodeBrushProvider(): Promise<void>;
    finishBrushForAimedBarcodeCallback(brushStr: string | null, selectionIdentifier: string): void;
    subscribeBrushForAimedBarcode(): void;
    removeTrackedBarcodeBrushProvider(): Promise<void>;
    setTrackedBarcodeBrushProvider(): Promise<void>;
    finishBrushForTrackedBarcodeCallback(brushStr: string | null, selectionIdentifier: string): void;
    subscribeBrushForTrackedBarcode(): void;
}
