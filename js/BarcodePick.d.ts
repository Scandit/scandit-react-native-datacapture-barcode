import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { DataCaptureContext } from 'scandit-react-native-datacapture-core/js/DataCaptureContext';
import { CameraSettings } from 'scandit-react-native-datacapture-core/js/Camera+Related';
import { BarcodePickSettings } from './BarcodePickSettings';
import { BarcodePickProductProvider } from './BarcodePickProductProvider';
export declare class BarcodePick extends DefaultSerializeable {
    private type;
    private privateContext;
    private _settings;
    private _productProvider;
    static createRecommendedCameraSettings(): CameraSettings;
    constructor(dataCaptureContext: DataCaptureContext, settings: BarcodePickSettings, productProvider: BarcodePickProductProvider);
    private unsubscribeNativeListeners;
}
