import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { Color } from 'scandit-react-native-datacapture-core/js/Common';
export declare class SparkScanViewFeedback extends DefaultSerializeable {
    protected constructor();
}
export declare class SparkScanViewSuccessFeedback extends SparkScanViewFeedback {
    private type;
    private _visualFeedbackColor;
    get visualFeedbackColor(): Color | null;
    constructor(visualFeedbackColor: Color | null);
}
export declare class SparkScanViewErrorFeedback extends SparkScanViewFeedback {
    private type;
    private _message;
    get message(): string;
    private _resumeCapturingDelay;
    get resumeCapturingDelay(): number;
    private _visualFeedbackColor;
    get visualFeedbackColor(): Color | null;
    constructor(message: string, resumeCapturingDelay: number, visualFeedbackColor: Color | null);
}
