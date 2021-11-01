import { Barcode } from '../Barcode';
import { BarcodeSelection } from '../BarcodeSelection';
export declare class BarcodeSelectionListenerProxy {
    private barcodeSelection;
    private nativeListeners;
    static forBarcodeSelection(barcodeSelection: BarcodeSelection): BarcodeSelectionListenerProxy;
    getCount(barcode: Barcode): Promise<number>;
    reset(): Promise<void>;
    subscribeListener(): void;
    unsubscribeListener(): void;
    private notifyListenersOfDidUpdateSelection;
    private notifyListenersOfDidUpdateSession;
}
