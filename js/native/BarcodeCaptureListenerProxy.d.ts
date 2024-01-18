import { BarcodeCapture } from '../BarcodeCapture';
export declare class BarcodeCaptureListenerProxy {
    private barcodeCapture;
    private nativeListeners;
    static forBarcodeCapture(barcodeCapture: BarcodeCapture): BarcodeCaptureListenerProxy;
    reset(): Promise<void>;
    subscribeListener(): void;
    unsubscribeListener(): void;
    private notifyListenersOfDidUpdateSession;
    private notifyListenersOfDidScan;
}
