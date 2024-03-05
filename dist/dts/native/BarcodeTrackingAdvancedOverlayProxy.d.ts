import { Anchor } from 'scandit-react-native-datacapture-core';
import { BarcodeTrackingAdvancedOverlayProxy } from 'scandit-datacapture-frameworks-barcode';
import { BarcodeTrackingAdvancedOverlayView } from '../BarcodeTrackingAdvancedOverlayView';
export declare class NativeBarcodeTrackingAdvancedOverlayProxy implements BarcodeTrackingAdvancedOverlayProxy {
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
    getJSONStringForView(view: BarcodeTrackingAdvancedOverlayView | null): string | null;
    private isSerializeable;
}
