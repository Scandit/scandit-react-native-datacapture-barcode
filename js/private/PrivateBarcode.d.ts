import { QuadrilateralJSON } from 'scandit-react-native-datacapture-core/js/private/PrivateCommon';
import { Barcode, LocalizedOnlyBarcode, TrackedBarcode } from '../Barcode';
import { EncodingRangeJSON } from './PrivateSymbology+Related';
export interface BarcodeJSON {
    symbology: string;
    data: Optional<string>;
    rawData: string;
    addOnData: Optional<string>;
    compositeData: Optional<string>;
    compositeRawData: string;
    isGS1DataCarrier: boolean;
    compositeFlag: string;
    isColorInverted: boolean;
    symbolCount: number;
    frameId: number;
    encodingRanges: EncodingRangeJSON[];
    location: QuadrilateralJSON;
}
export interface PrivateBarcode {
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
    sessionFrameSequenceID: Optional<number>;
    fromJSON(json: TrackedBarcodeJSON): TrackedBarcode;
}
