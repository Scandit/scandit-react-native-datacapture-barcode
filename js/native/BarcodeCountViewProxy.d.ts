import { BarcodeCountView } from '../BarcodeCountView';
import { BarcodeCountViewUiListener } from '../BarcodeCountViewUiListener';
import { BarcodeCountViewListener } from '../BarcodeCountViewListener';
export declare class BarcodeCountViewProxy {
    private view;
    private nativeListeners;
    static forBarcodeCount(view: BarcodeCountView): BarcodeCountViewProxy;
    update(): Promise<void>;
    private create;
    setUiListener(listener: BarcodeCountViewUiListener | null): void;
    setViewListener(listener: BarcodeCountViewListener | null): void;
    clearHighlights(): void;
    dispose(): void;
    private subscribeListeners;
    private unsubscribeListeners;
}
