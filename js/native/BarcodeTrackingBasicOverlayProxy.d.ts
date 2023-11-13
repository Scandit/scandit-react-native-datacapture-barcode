import { Brush } from 'scandit-react-native-datacapture-core/js/Common';
import { TrackedBarcode } from '../Barcode';
import { BarcodeTrackingBasicOverlay } from '../BarcodeTrackingBasicOverlay';
export declare class BarcodeTrackingBasicOverlayProxy {
    private overlay;
    private nativeListeners;
    static forOverlay(overlay: BarcodeTrackingBasicOverlay): BarcodeTrackingBasicOverlayProxy;
    setBrushForTrackedBarcode(brush: Brush, trackedBarcode: TrackedBarcode): Promise<void>;
    clearTrackedBarcodeBrushes(): Promise<void>;
    subscribeListener(): void;
    unsubscribeListener(): void;
}
