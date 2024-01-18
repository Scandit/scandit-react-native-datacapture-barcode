import { SparkScan } from '../SparkScan';
export declare class SparkScanListenerProxy {
    private sparkScan;
    private nativeListeners;
    static forSparkScan(sparkScan: SparkScan): SparkScanListenerProxy;
    reset(): Promise<void>;
    updateMode(): Promise<void>;
    subscribeListener(): void;
    unsubscribeListener(): void;
    private notifyListenersOfDidUpdateSession;
    private notifyListenersOfDidScan;
}
