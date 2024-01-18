import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { Feedback } from 'scandit-react-native-datacapture-core/js/Feedback';
export declare class BarcodeCaptureFeedback extends DefaultSerializeable {
    success: Feedback;
    static get default(): BarcodeCaptureFeedback;
}
