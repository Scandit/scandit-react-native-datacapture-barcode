import { BarcodePickView } from '../BarcodePickView';
import { BaseNativeProxy } from 'scandit-datacapture-frameworks-core';
import { BarcodePickViewProxy } from 'scandit-datacapture-frameworks-barcode';
export declare class NativeBarcodePickViewProxy extends BaseNativeProxy implements BarcodePickViewProxy {
    private nativeListeners;
    viewStart(): Promise<void>;
    viewPause(): Promise<void>;
    finishPickAction(code: string, result: boolean): Promise<void>;
    findNodeHandle(view: BarcodePickView): number | null;
    createView(id: number | null, json: string): Promise<void>;
    updateView(json: string): Promise<void>;
    addActionListener(): Promise<void>;
    unsubscribeListeners(): Promise<void>;
    subscribeDidPickItemListener(): void;
    subscribeDidUnpickItemListener(): void;
}
