import { FrameData } from 'scandit-react-native-datacapture-core/js/Camera+Related';
import { BarcodeSelection } from './BarcodeSelection';
import { BarcodeSelectionSession } from './BarcodeSelectionSession';
export interface BarcodeSelectionListener {
    didUpdateSelection?(barcodeSelection: BarcodeSelection, session: BarcodeSelectionSession, getFrameData: () => Promise<FrameData>): void;
    didUpdateSession?(barcodeSelection: BarcodeSelection, session: BarcodeSelectionSession, getFrameData: () => Promise<FrameData>): void;
}
