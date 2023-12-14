import { BarcodeFilterHighlightType } from './BarcodeFilterHighlightType';
import { Brush } from 'scandit-react-native-datacapture-core/js/Common';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
export interface BarcodeFilterHighlightSettings extends DefaultSerializeable {
    readonly highlightType: BarcodeFilterHighlightType;
    readonly brush: Brush | null;
}
