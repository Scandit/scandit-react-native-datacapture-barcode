import { Anchor } from 'scandit-react-native-datacapture-core';
import { BarcodeBatchAdvancedOverlayProxy } from 'scandit-datacapture-frameworks-barcode';
import { BarcodeBatchAdvancedOverlayView } from '../BarcodeBatchAdvancedOverlayView';
export declare class NativeBarcodeBatchAdvancedOverlayProxy implements BarcodeBatchAdvancedOverlayProxy {
    private nativeListeners;
    private eventEmitter;
    constructor();
    isModeEnabled: () => boolean;
    setBrushForTrackedBarcode(brushJson: string, sessionFrameSequenceID: number | null, trackedBarcodeIdentifer: number): Promise<void>;
    setViewForTrackedBarcode(viewJson: string | null, trackedBarcodeIdentifer: number): Promise<void>;
    setAnchorForTrackedBarcode(anchor: Anchor, trackedBarcodeIdentifer: number): Promise<void>;
    setOffsetForTrackedBarcode(offsetJson: string, trackedBarcodeIdentifer: number): Promise<void>;
    clearTrackedBarcodeViews(): Promise<void>;
    registerListenerForAdvancedOverlayEvents(): void;
    unregisterListenerForAdvancedOverlayEvents(): void;
    subscribeViewForTrackedBarcode(): void;
    subscribeAnchorForTrackedBarcode(): void;
    subscribeOffsetForTrackedBarcode(): void;
    subscribeDidTapViewForTrackedBarcode(): void;
    updateBarcodeBatchAdvancedOverlay(overlayJson: string): Promise<void>;
    updateSizeOfTrackedBarcodeView(trackedBarcodeIdentifer: number, width: number, height: number): Promise<void>;
    getJSONStringForView(view: BarcodeBatchAdvancedOverlayView | null): string | null;
    private isSerializeable;
}
