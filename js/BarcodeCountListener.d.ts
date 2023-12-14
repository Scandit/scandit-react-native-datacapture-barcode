import { FrameData } from 'scandit-react-native-datacapture-core/js/private/PrivateCamera+Related';
import { BarcodeCount } from './BarcodeCount';
import { BarcodeCountSession } from './BarcodeCountSession';
export interface BarcodeCountListener {
    didScan?(barcodeCount: BarcodeCount, session: BarcodeCountSession, getFrameData: () => Promise<FrameData | null>): void;
}
