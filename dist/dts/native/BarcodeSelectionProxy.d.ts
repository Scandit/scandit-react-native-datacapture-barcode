import { BarcodeSelectionProxy } from 'scandit-datacapture-frameworks-barcode';
export declare class NativeBarcodeSelectionProxy implements BarcodeSelectionProxy {
    unfreezeCamera(): Promise<void>;
    resetMode(): Promise<void>;
    selectAimedBarcode(): Promise<void>;
    unselectBarcodes(barcodesStr: string): Promise<void>;
    setSelectBarcodeEnabled(barcodeStr: string, enabled: boolean): Promise<void>;
    increaseCountForBarcodes(barcodesStr: string): Promise<void>;
    setModeEnabledState(enabled: boolean): void;
    updateBarcodeSelectionMode(modeJson: string): Promise<void>;
    applyBarcodeSelectionModeSettings(newSettingsJson: string): Promise<void>;
}
