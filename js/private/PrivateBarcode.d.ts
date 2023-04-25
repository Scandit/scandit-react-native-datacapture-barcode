import { QuadrilateralJSON } from 'scandit-react-native-datacapture-core/js/private/PrivateCommon';
import { Barcode, LocalizedOnlyBarcode, StructuredAppendData, TrackedBarcode } from '../Barcode';
import { EncodingRangeJSON } from './PrivateSymbology+Related';
export interface BarcodeJSON {
    symbology: string;
    data: string | null;
    rawData: string;
    addOnData: string | null;
    compositeData: string | null;
    compositeRawData: string;
    isGS1DataCarrier: boolean;
    compositeFlag: string;
    isColorInverted: boolean;
    symbolCount: number;
    frameId: number;
    encodingRanges: EncodingRangeJSON[];
    location: QuadrilateralJSON;
    structuredAppendData: StructuredAppendDataJSON | null;
}
export interface PrivateBarcode {
    readonly selectionIdentifier: string;
    fromJSON(json: BarcodeJSON): Barcode;
}
export interface LocalizedOnlyBarcodeJSON {
    location: QuadrilateralJSON;
    frameId: number;
}
export interface PrivateLocalizedOnlyBarcode {
    fromJSON(json: LocalizedOnlyBarcodeJSON): LocalizedOnlyBarcode;
}
export interface TrackedBarcodeJSON {
    identifier: number;
    shouldAnimateFromPreviousToNextState: boolean;
    barcode: BarcodeJSON;
    location: QuadrilateralJSON;
}
export interface PrivateTrackedBarcode {
    sessionFrameSequenceID: number | null;
    fromJSON(json: TrackedBarcodeJSON, frameSequenceID?: number): TrackedBarcode;
}
export interface PrivateStructuredAppendData {
    fromJSON(json: StructuredAppendDataJSON | null): StructuredAppendData;
}
export interface StructuredAppendDataJSON {
    barcodeSetId: string;
    scannedSegmentCount: number;
    totalSegmentCount: number;
    complete: boolean;
    completeDataEncodings: EncodingRangeJSON[];
    completeDataRaw: string;
    completeDataUtf8String: string | null;
}
