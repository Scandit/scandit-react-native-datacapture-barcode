import { BarcodeCountView } from './BarcodeCountView';
export interface BarcodeCountViewUiListener {
    didTapListButton?(view: BarcodeCountView): void;
    didTapExitButton?(view: BarcodeCountView): void;
    didTapSingleScanButton?(view: BarcodeCountView): void;
}
