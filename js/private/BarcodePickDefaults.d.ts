import { CameraSettings } from 'scandit-react-native-datacapture-core/js/Camera+Related';
import { SymbologySettings } from '../Symbology+Related';
import { BrushForStateObject } from '../private/PrivateBarcodePick';
import { BarcodePickIconStyle } from '../BarcodePickIconStyle';
export declare const BarcodePickDefaults: {
    RecommendedCameraSettings: CameraSettings;
    BarcodePickSettings: {
        hapticsEnabled: any;
        soundEnabled: any;
    };
    ViewSettings: {
        highlightStyle: any;
        initialGuidelineText: any;
        moveCloserGuidelineText: any;
        loadingDialogText: any;
        showLoadingDialog: any;
        onFirstItemPickCompletedHintText: any;
        onFirstItemToPickFoundHintText: any;
        onFirstItemUnpickCompletedHintText: any;
        onFirstUnmarkedItemPickCompletedHintText: any;
        showGuidelines: any;
        showHints: any;
    };
    ViewHighlightStyle: {
        Rectangular: {
            brushesForState: BrushForStateObject[];
        };
        RectangularWithIcon: {
            iconStyle: BarcodePickIconStyle;
            brushesForState: BrushForStateObject[];
        };
    };
    SymbologySettings: {
        [key: string]: SymbologySettings;
    };
};
