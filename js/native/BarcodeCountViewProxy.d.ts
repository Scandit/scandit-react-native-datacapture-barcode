import { BarcodeCountView } from '../BarcodeCountView';
import { BarcodeCountViewUiListener } from '../BarcodeCountViewUiListener';
import { BarcodeCountViewListener } from 'BarcodeCountViewListener';
export declare class BarcodeCountViewProxy {
    private view;
    private isInListenerCallback;
    private nativeListeners;
    static forBarcodeCount(view: BarcodeCountView): BarcodeCountViewProxy;
    update(): Promise<void>;
    private create;
    dispose(): void;
    setUiListener(listener: BarcodeCountViewUiListener | null): void;
    setViewListener(listener: BarcodeCountViewListener | null): void;
    clearHighlights(): void;
    private subscribeListeners;
    private unsubscribeListeners;
}
