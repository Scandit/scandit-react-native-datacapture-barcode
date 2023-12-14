import { Feedback } from 'scandit-react-native-datacapture-core/js/Feedback';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
export declare class BarcodeSelectionFeedback extends DefaultSerializeable {
    selection: Feedback;
    static get default(): BarcodeSelectionFeedback;
}
