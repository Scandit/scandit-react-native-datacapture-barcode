import { BarcodeSelection } from './BarcodeSelection';
import { BarcodeSelectionSession } from './BarcodeSelectionSession';
export interface BarcodeSelectionListener {
    didUpdateSelection?(barcodeSelection: BarcodeSelection, session: BarcodeSelectionSession): void;
    didUpdateSession?(barcodeSelection: BarcodeSelection, session: BarcodeSelectionSession): void;
}
