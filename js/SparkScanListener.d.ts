import { FrameData } from 'scandit-react-native-datacapture-core/js/private/PrivateCamera+Related';
import { SparkScan } from './SparkScan';
import { SparkScanSession } from './SparkScanSession';
export interface SparkScanListener {
    didUpdateSession?(sparkScan: SparkScan, session: SparkScanSession, getFrameData: () => Promise<FrameData | null>): void;
    didScan?(sparkScan: SparkScan, session: SparkScanSession, getFrameData: () => Promise<FrameData | null>): void;
}
