import { DataCaptureContext } from 'scandit-react-native-datacapture-core/ts/DataCaptureContext';
import { PrivateDataCaptureMode } from 'scandit-react-native-datacapture-core/ts/private/PrivateDataCaptureContext';
import { BarcodeCaptureListener } from '../BarcodeCaptureListener';
export interface PrivateBarcodeCapture extends PrivateDataCaptureMode {
    _context: DataCaptureContext | null;
    listeners: BarcodeCaptureListener[];
    isInListenerCallback: boolean;
    didChange: () => Promise<void>;
}
