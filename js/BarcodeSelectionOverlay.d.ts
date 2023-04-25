import { Brush } from 'scandit-react-native-datacapture-core/js/Common';
import { DataCaptureOverlay, DataCaptureView } from 'scandit-react-native-datacapture-core/js/DataCaptureView';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { Viewfinder } from 'scandit-react-native-datacapture-core/js/Viewfinder';
import { Barcode } from './Barcode';
import { BarcodeSelection } from './BarcodeSelection';
export declare enum BarcodeSelectionBasicOverlayStyle {
    Frame = "frame",
    Dot = "dot"
}
export interface BarcodeSelectionBrushProvider {
    brushForBarcode?(barcode: Barcode): Brush | null;
}
export declare class BarcodeSelectionBasicOverlay extends DefaultSerializeable implements DataCaptureOverlay {
    private type;
    private barcodeSelection;
    private overlayProxy;
    private view;
    private _shouldShowScanAreaGuides;
    private _shouldShowHints;
    private _viewfinder;
    private _style;
    private _trackedBrush;
    private _aimedBrush;
    private _selectedBrush;
    private _selectingBrush;
    get trackedBrush(): Brush;
    set trackedBrush(newBrush: Brush);
    get aimedBrush(): Brush;
    set aimedBrush(newBrush: Brush);
    get selectedBrush(): Brush;
    set selectedBrush(newBrush: Brush);
    get selectingBrush(): Brush;
    set selectingBrush(newBrush: Brush);
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    get shouldShowHints(): boolean;
    set shouldShowHints(shouldShow: boolean);
    get viewfinder(): Viewfinder;
    get style(): BarcodeSelectionBasicOverlayStyle;
    static withBarcodeSelection(barcodeSelection: BarcodeSelection): BarcodeSelectionBasicOverlay;
    static withBarcodeSelectionForView(barcodeSelection: BarcodeSelection, view: DataCaptureView | null): BarcodeSelectionBasicOverlay;
    static withBarcodeSelectionForViewWithStyle(barcodeSelection: BarcodeSelection, view: DataCaptureView | null, style: BarcodeSelectionBasicOverlayStyle): BarcodeSelectionBasicOverlay;
    private constructor();
    setAimedBarcodeBrushProvider(brushProvider: BarcodeSelectionBrushProvider | null): Promise<void>;
    setTrackedBarcodeBrushProvider(brushProvider: BarcodeSelectionBrushProvider | null): Promise<void>;
}
