import { AdvancedNativeProxy } from 'scandit-datacapture-frameworks-core';
import { BarcodeCountViewProxy } from 'scandit-datacapture-frameworks-barcode';
export declare class NativeBarcodeCountViewProxy extends AdvancedNativeProxy implements Partial<BarcodeCountViewProxy> {
    $hideBarcodeCountView(): Promise<void>;
    $setBarcodeCountViewPositionAndSize({ top, left, width, height, shouldBeUnderWebView }: {
        top: number;
        left: number;
        width: number;
        height: number;
        shouldBeUnderWebView: boolean;
    }): Promise<void>;
    $showBarcodeCountView(): Promise<void>;
    $enableBarcodeCountHardwareTrigger({ hardwareTriggerKeyCode }: {
        hardwareTriggerKeyCode: number | null;
    }): Promise<void>;
}
