import { BarcodeSelectionBrushProvider } from '../BarcodeSelectionOverlay';
export declare class BarcodeSelectionOverlayProxy {
    private brushForAimedBarcodeProvider;
    private brushForTrackedBarcodeProvider;
    setAimedBarcodeBrushProvider(brushProvider: BarcodeSelectionBrushProvider | null): Promise<void>;
    setTrackedBarcodeBrushProvider(brushProvider: BarcodeSelectionBrushProvider | null): Promise<void>;
    unsubscribeProviders(): void;
}
