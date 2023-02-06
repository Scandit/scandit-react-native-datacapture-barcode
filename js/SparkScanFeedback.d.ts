import { Feedback } from 'scandit-react-native-datacapture-core/js/Feedback';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
export declare class SparkScanFeedback extends DefaultSerializeable {
    success: Feedback;
    error: Feedback;
    static get default(): SparkScanFeedback;
    private constructor();
}
