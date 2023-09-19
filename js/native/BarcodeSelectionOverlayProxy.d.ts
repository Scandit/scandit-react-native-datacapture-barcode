import { BarcodeSelectionBrushProvider } from '../BarcodeSelectionOverlay';
export declare class BarcodeSelectionOverlayProxy {
    private brushForAimedBarcodeProvider;
    private brushForTrackedBarcodeProvider;
    setTextForAimToSelectAutoHint(text: string): Promise<void>;
    setAimedBarcodeBrushProvider(brushProvider: BarcodeSelectionBrushProvider | null): Promise<void>;
    setTrackedBarcodeBrushProvider(brushProvider: BarcodeSelectionBrushProvider | null): Promise<void>;
    unsubscribeProviders(): void;
}
