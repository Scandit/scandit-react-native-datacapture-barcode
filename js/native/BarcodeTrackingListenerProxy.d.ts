import { BarcodeTracking } from '../BarcodeTracking';
export declare class BarcodeTrackingListenerProxy {
    private barcodeTracking;
    private nativeListeners;
    static forBarcodeTracking(barcodeTracking: BarcodeTracking): BarcodeTrackingListenerProxy;
    reset(): Promise<void>;
    subscribeListener(): void;
    unsubscribeListener(): void;
    private notifyListenersOfDidUpdateSession;
}
