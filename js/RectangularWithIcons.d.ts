import { Brush } from 'scandit-react-native-datacapture-core/js/Common';
import { BarcodePickViewHighlightStyle } from './BarcodePickViewHighlightStyle';
import { BarcodePickIconStyle } from 'BarcodePickIconStyle';
import { BarcodePickState } from './BarcodePickState';
export declare class RectangularWithIcons implements BarcodePickViewHighlightStyle {
    private _type;
    private _brushesForState;
    private _iconStyle;
    constructor();
    getBrushForState(state: BarcodePickState): Brush;
    setBrushForState(brush: Brush, state: BarcodePickState): void;
    get iconStyle(): BarcodePickIconStyle;
    set iconStyle(style: BarcodePickIconStyle);
}
