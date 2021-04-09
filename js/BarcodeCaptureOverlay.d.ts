import { Brush } from 'scandit-react-native-datacapture-core/js/Common';
import { DataCaptureOverlay, DataCaptureView } from 'scandit-react-native-datacapture-core/js/DataCaptureView';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { Viewfinder } from 'scandit-react-native-datacapture-core/js/Viewfinder';
import { BarcodeCapture } from './BarcodeCapture';
export declare class BarcodeCaptureOverlay extends DefaultSerializeable implements DataCaptureOverlay {
    private type;
    private barcodeCapture;
    private view;
    private _shouldShowScanAreaGuides;
    private _viewfinder;
    static get defaultBrush(): Brush;
    private _brush;
    get brush(): Brush;
    set brush(newBrush: Brush);
    get viewfinder(): Optional<Viewfinder>;
    set viewfinder(newViewfinder: Optional<Viewfinder>);
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    static withBarcodeCapture(barcodeCapture: BarcodeCapture): BarcodeCaptureOverlay;
    static withBarcodeCaptureForView(barcodeCapture: BarcodeCapture, view: Optional<DataCaptureView>): BarcodeCaptureOverlay;
    private constructor();
}
