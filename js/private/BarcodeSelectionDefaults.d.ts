import { CameraSettings } from 'scandit-react-native-datacapture-core/js/Camera+Related';
import { BarcodeSelectionFeedback } from '../BarcodeSelectionFeedback';
import { BarcodeSelectionFreezeBehavior, BarcodeSelectionTapBehavior } from '../BarcodeSelectionSettings';
export declare const BarcodeSelectionDefaults: {
    RecommendedCameraSettings: CameraSettings;
    Feedback: BarcodeSelectionFeedback;
    BarcodeSelectionSettings: {
        codeDuplicateFilter: any;
        singleBarcodeAutoDetection: any;
        selectionType: (fromJSON: Function) => any;
    };
    BarcodeSelectionTapSelection: {
        defaultFreezeBehavior: BarcodeSelectionFreezeBehavior;
        defaultTapBehavior: BarcodeSelectionTapBehavior;
    };
    BarcodeSelectionAimerSelection: {
        defaultSelectionStrategy: (fromJSON: Function) => any;
    };
    BarcodeSelectionBasicOverlay: {
        defaultStyle: any;
        styles: {};
    };
};
