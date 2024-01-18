import { Brush } from 'scandit-react-native-datacapture-core/js/Common';
import { BarcodePickViewHighlightStyle } from './BarcodePickViewHighlightStyle';
import { BarcodePickState } from './BarcodePickState';
export declare class Rectangular implements BarcodePickViewHighlightStyle {
    private _type;
    private _brushesForState;
    constructor();
    getBrushForState(state: BarcodePickState): Brush;
    setBrushForState(brush: Brush, state: BarcodePickState): void;
}
