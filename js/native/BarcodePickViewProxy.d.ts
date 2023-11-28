import { BarcodePickView } from '../BarcodePickView';
export declare class BarcodePickViewProxy {
    private view;
    private nativeListeners;
    static forBarcodePick(view: BarcodePickView): BarcodePickViewProxy;
    start(): Promise<void>;
    pause(): Promise<void>;
    finishPickAction(itemData: String, result: boolean): Promise<void>;
    dispose(): void;
    private create;
    update(): Promise<void>;
    subscribeListeners(): void;
    private unsubscribeListeners;
}
