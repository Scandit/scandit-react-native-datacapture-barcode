import { CameraSettings } from 'scandit-react-native-datacapture-core/js/Camera+Related';
import { Color } from 'scandit-react-native-datacapture-core/js/Common';
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
        DefaultTrackedBrush: {
            fillColor: Color;
            strokeColor: Color;
            strokeWidth: any;
        };
        DefaultAimedBrush: {
            fillColor: Color;
            strokeColor: Color;
            strokeWidth: any;
        };
        DefaultSelectedBrush: {
            fillColor: Color;
            strokeColor: Color;
            strokeWidth: any;
        };
        DefaultSelectingBrush: {
            fillColor: Color;
            strokeColor: Color;
            strokeWidth: any;
        };
        styles: {};
    };
};
