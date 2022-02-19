import { FrameData } from 'scandit-react-native-datacapture-core/js/Camera+Related';
import { BarcodeCapture } from './BarcodeCapture';
import { BarcodeCaptureSession } from './BarcodeCaptureSession';
export interface BarcodeCaptureListener {
    didUpdateSession?(barcodeCapture: BarcodeCapture, session: BarcodeCaptureSession, getFrameData: () => Promise<FrameData>): void;
    didScan?(barcodeCapture: BarcodeCapture, session: BarcodeCaptureSession, getFrameData: () => Promise<FrameData>): void;
}
