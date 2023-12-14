import { BarcodePickActionCallback } from './BarcodePickActionCallback';
export interface BarcodePickActionListener {
    didPickItem(data: string, callback: BarcodePickActionCallback): void;
    didUnpickItem(data: string, callback: BarcodePickActionCallback): void;
}
