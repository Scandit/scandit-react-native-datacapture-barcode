import { BarcodeFindViewProxy } from 'scandit-datacapture-frameworks-barcode';
import { BarcodeFindView } from '../BarcodeFindView';
import { BaseNativeProxy } from 'scandit-datacapture-frameworks-core';
export declare class NativeBarcodeFindViewProxy extends BaseNativeProxy implements BarcodeFindViewProxy {
    private nativeListeners;
    updateView(barcodeFindViewJson: string): Promise<void>;
    onPause(): Promise<void>;
    onResume(): Promise<void>;
    startSearching(): Promise<void>;
    stopSearching(): Promise<void>;
    pauseSearching(): Promise<void>;
    findNodeHandle(view: BarcodeFindView): number | null;
    createView(id: number | null, json: string): Promise<void>;
    showView(): Promise<void>;
    hideView(): Promise<void>;
    subscribeBarcodeFindViewListener(): Promise<void>;
    unsubscribeBarcodeFindViewListener(): Promise<void>;
}
