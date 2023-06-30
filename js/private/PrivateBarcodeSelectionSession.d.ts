import { BarcodeSelectionSession } from '../BarcodeSelectionSession';
import { BarcodeSelectionListenerProxy } from '../native/BarcodeSelectionListenerProxy';
import { BarcodeJSON } from './PrivateBarcode';
export interface BarcodeSelectionSessionJSON {
    selectedBarcodes: BarcodeJSON[];
    newlySelectedBarcodes: BarcodeJSON[];
    newlyUnselectedBarcodes: BarcodeJSON[];
    frameSequenceId: number;
}
export interface PrivateBarcodeSelectionSession {
    listenerProxy: BarcodeSelectionListenerProxy;
    fromJSON(json: BarcodeSelectionSessionJSON): BarcodeSelectionSession;
}
export interface BarcodeSelectionSessionEventPayload {
    session: string;
}
