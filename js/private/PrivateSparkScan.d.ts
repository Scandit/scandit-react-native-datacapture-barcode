import { DataCaptureContext } from 'scandit-react-native-datacapture-core/js/DataCaptureContext';
import { SparkScanListener } from '../SparkScanListener';
export interface PrivateSparkScan {
    _context: DataCaptureContext | null;
    listeners: SparkScanListener[];
    isInListenerCallback: boolean;
    didChange: () => Promise<void>;
}
