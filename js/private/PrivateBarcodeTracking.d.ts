import { DataCaptureContext } from 'scandit-react-native-datacapture-core/ts/DataCaptureContext';
import { PrivateDataCaptureMode } from 'scandit-react-native-datacapture-core/ts/private/PrivateDataCaptureContext';
import { BarcodeTrackingListener } from '../BarcodeTrackingListener';
export interface PrivateBarcodeTracking extends PrivateDataCaptureMode {
    _context: Optional<DataCaptureContext>;
    listeners: BarcodeTrackingListener[];
    isInListenerCallback: boolean;
    didChange: () => Promise<void>;
}
