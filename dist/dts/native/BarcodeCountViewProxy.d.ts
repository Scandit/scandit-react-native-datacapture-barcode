import { BarcodeCountView } from '../BarcodeCountView';
import { BaseNativeProxy } from 'scandit-datacapture-frameworks-core';
import { BarcodeCountViewProxy } from 'scandit-datacapture-frameworks-barcode';
export declare class NativeBarcodeCountViewProxy extends BaseNativeProxy implements BarcodeCountViewProxy {
    private nativeListeners;
    clearHighlights(): Promise<void>;
    createView(nativeView: BarcodeCountView, viewJson: string): Promise<void>;
    updateView(viewJson: string): Promise<void>;
    finishBrushForRecognizedBarcodeCallback(nativeView: BarcodeCountView, brushJson: string, trackedBarcodeIdentifier: number): Promise<void>;
    finishBrushForRecognizedBarcodeNotInListCallback(nativeView: BarcodeCountView, brushJson: string, trackedBarcodeIdentifier: number): Promise<void>;
    finishBrushForAcceptedBarcodeCallback(nativeView: BarcodeCountView, brushJson: string, trackedBarcodeIdentifier: number): Promise<void>;
    finishBrushForRejectedBarcodeCallback(nativeView: BarcodeCountView, brushJson: string, trackedBarcodeIdentifier: number): Promise<void>;
    hide(): Promise<void>;
    setPositionAndSize(top: number, left: number, width: number, height: number, shouldBeUnderWebView: boolean): Promise<void>;
    show(): Promise<void>;
    registerBarcodeCountViewListener(): Promise<void>;
    registerBarcodeCountViewUiListener(): Promise<void>;
    unregisterBarcodeCountViewListener(): Promise<void>;
    unregisterBarcodeCountViewUiListener(): Promise<void>;
    enableHardwareTrigger(hardwareTriggerKeyCode: number | null): Promise<void>;
    subscribeListeners(): Promise<void>;
    unsubscribeListeners(): Promise<void>;
}
