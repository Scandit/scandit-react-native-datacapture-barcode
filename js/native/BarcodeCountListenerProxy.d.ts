import { BarcodeCount } from '../BarcodeCount';
import { BarcodeCountCaptureList } from '../BarcodeCountCaptureList';
export declare class BarcodeCountListenerProxy {
    private barcodeCount;
    private nativeListeners;
    private _barcodeCountCaptureList;
    static forBarcodeCount(barcodeTracking: BarcodeCount): BarcodeCountListenerProxy;
    reset(): Promise<void>;
    subscribeListener(): void;
    unsubscribeListener(): void;
    startScanningPhase(): void;
    endScanningPhase(): void;
    setBarcodeCountCaptureList(barcodeCountCaptureList: BarcodeCountCaptureList): void;
    private notifyListenersOfDidScanSession;
    private notifyListenersOfDidListSessionUpdate;
}
