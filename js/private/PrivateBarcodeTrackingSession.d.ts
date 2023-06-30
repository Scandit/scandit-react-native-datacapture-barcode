import { BarcodeTrackingSession } from '../BarcodeTrackingSession';
import { TrackedBarcodeJSON } from './PrivateBarcode';
export interface BarcodeTrackingSessionJSON {
    addedTrackedBarcodes: TrackedBarcodeJSON[];
    removedTrackedBarcodes: string[];
    updatedTrackedBarcodes: TrackedBarcodeJSON[];
    trackedBarcodes: {
        [key: string]: TrackedBarcodeJSON;
    };
    frameSequenceId: number;
}
export interface PrivateBarcodeTrackingSession {
    fromJSON(json: BarcodeTrackingSessionJSON): BarcodeTrackingSession;
}
export interface BarcodeTrackingSessionEventPayload {
    session: string;
}
