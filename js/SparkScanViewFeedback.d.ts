import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
export declare class SparkScanViewFeedback extends DefaultSerializeable {
    protected constructor();
}
export declare class SparkScanViewSuccessFeedback extends SparkScanViewFeedback {
    private type;
    constructor();
}
export declare class SparkScanViewErrorFeedback extends SparkScanViewFeedback {
    private type;
    private _message;
    get message(): string;
    private _resumeCapturingDelay;
    get resumeCapturingDelay(): number;
    constructor(message: string, resumeCapturingDelay: number);
}
