import { Feedback } from 'scandit-react-native-datacapture-core/js/Feedback';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
export declare class BarcodeCountFeedback extends DefaultSerializeable {
    static get default(): BarcodeCountFeedback;
    success: Feedback;
    failure: Feedback;
    private static fromJSON;
    private constructor();
}
