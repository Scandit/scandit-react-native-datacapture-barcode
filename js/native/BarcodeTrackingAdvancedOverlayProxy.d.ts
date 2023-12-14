import { Brush, PointWithUnit } from 'scandit-react-native-datacapture-core/js/Common';
import { Anchor } from 'scandit-react-native-datacapture-core/js/CommonEnums';
import { TrackedBarcode } from '../Barcode';
import { BarcodeTrackingAdvancedOverlay } from '../BarcodeTrackingAdvancedOverlay';
import { BarcodeTrackingAdvancedOverlayView } from '../BarcodeTrackingAdvancedOverlayView';
export declare class BarcodeTrackingAdvancedOverlayProxy {
    private overlay;
    private nativeListeners;
    static forOverlay(overlay: BarcodeTrackingAdvancedOverlay): BarcodeTrackingAdvancedOverlayProxy;
    setBrushForTrackedBarcode(brush: Brush, trackedBarcode: TrackedBarcode): Promise<void>;
    setViewForTrackedBarcode(view: BarcodeTrackingAdvancedOverlayView, trackedBarcode: TrackedBarcode): Promise<void>;
    setAnchorForTrackedBarcode(anchor: Anchor, trackedBarcode: TrackedBarcode): Promise<void>;
    setOffsetForTrackedBarcode(offset: PointWithUnit, trackedBarcode: TrackedBarcode): Promise<void>;
    clearTrackedBarcodeViews(): Promise<void>;
    subscribeListener(): void;
    unsubscribeListener(): void;
    private getJSONStringForView;
    private isSerializeable;
}
