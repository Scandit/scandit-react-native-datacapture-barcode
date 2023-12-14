import { DataCaptureContext } from 'scandit-react-native-datacapture-core/ts/DataCaptureContext';
import { PrivateDataCaptureMode } from 'scandit-react-native-datacapture-core/ts/private/PrivateDataCaptureContext';
import { BarcodeSelectionListener } from '../BarcodeSelectionListener';
export interface PrivateBarcodeSelection extends PrivateDataCaptureMode {
    _context: DataCaptureContext | null;
    listeners: BarcodeSelectionListener[];
    isInListenerCallback: boolean;
    didChange: () => Promise<void>;
}
