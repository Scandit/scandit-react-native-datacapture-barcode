import { BarcodeFilterHighlightSettings } from './BarcodeFilterHighlightSettings';
import { BarcodeFilterHighlightType } from './BarcodeFilterHighlightType';
import { Brush } from 'scandit-react-native-datacapture-core/js/Common';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
export declare class BarcodeFilterHighlightSettingsBrush extends DefaultSerializeable implements BarcodeFilterHighlightSettings {
    private _highlightType;
    private _brush;
    static create(brush: Brush): BarcodeFilterHighlightSettingsBrush;
    private constructor();
    get highlightType(): BarcodeFilterHighlightType;
    get brush(): Brush | null;
}
