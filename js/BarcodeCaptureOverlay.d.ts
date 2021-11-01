import { Brush } from 'scandit-react-native-datacapture-core/js/Common';
import { DataCaptureOverlay, DataCaptureView } from 'scandit-react-native-datacapture-core/js/DataCaptureView';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { Viewfinder } from 'scandit-react-native-datacapture-core/js/Viewfinder';
import { BarcodeCapture } from './BarcodeCapture';
export declare enum BarcodeCaptureOverlayStyle {
    Frame = "frame",
    Legacy = "legacy"
}
export declare class BarcodeCaptureOverlay extends DefaultSerializeable implements DataCaptureOverlay {
    private type;
    private barcodeCapture;
    private view;
    private _shouldShowScanAreaGuides;
    private _viewfinder;
    private _style;
    static get defaultBrush(): Brush;
    private _brush;
    get brush(): Brush;
    set brush(newBrush: Brush);
    get viewfinder(): Viewfinder | null;
    set viewfinder(newViewfinder: Viewfinder | null);
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    get style(): BarcodeCaptureOverlayStyle;
    static withBarcodeCapture(barcodeCapture: BarcodeCapture): BarcodeCaptureOverlay;
    static withBarcodeCaptureForView(barcodeCapture: BarcodeCapture, view: DataCaptureView | null): BarcodeCaptureOverlay;
    static withBarcodeCaptureForViewWithStyle(barcodeCapture: BarcodeCapture, view: DataCaptureView | null, style: BarcodeCaptureOverlayStyle): BarcodeCaptureOverlay;
    private constructor();
}
