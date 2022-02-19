import { FrameData } from 'scandit-react-native-datacapture-core/js/Camera+Related';
import { BarcodeTracking } from './BarcodeTracking';
import { BarcodeTrackingSession } from './BarcodeTrackingSession';
export interface BarcodeTrackingListener {
    didUpdateSession?(barcodeTracking: BarcodeTracking, session: BarcodeTrackingSession, getFrameData: () => Promise<FrameData>): void;
}
