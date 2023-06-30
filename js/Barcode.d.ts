import { Quadrilateral } from 'scandit-react-native-datacapture-core/js/Common';
import { Symbology } from './Symbology';
import { CompositeFlag, EncodingRange } from './Symbology+Related';
export declare class Barcode {
    private _symbology;
    get symbology(): Symbology;
    private _data;
    get data(): string | null;
    private _rawData;
    get rawData(): string;
    private _compositeData;
    get compositeData(): string | null;
    private _compositeRawData;
    get compositeRawData(): string;
    private _addOnData;
    get addOnData(): string | null;
    private _encodingRanges;
    get encodingRanges(): EncodingRange[];
    private _location;
    get location(): Quadrilateral;
    private _isGS1DataCarrier;
    get isGS1DataCarrier(): boolean;
    private _compositeFlag;
    get compositeFlag(): CompositeFlag;
    private _isColorInverted;
    get isColorInverted(): boolean;
    private _symbolCount;
    get symbolCount(): number;
    private _frameID;
    get frameID(): number;
    get isStructuredAppend(): boolean;
    private _structuredAppendData;
    get structuredAppendData(): StructuredAppendData | null;
    private get selectionIdentifier();
    private static fromJSON;
}
export declare class LocalizedOnlyBarcode {
    private _location;
    private _frameID;
    get location(): Quadrilateral;
    get frameID(): number;
    private static fromJSON;
}
export declare class TrackedBarcode {
    private _barcode;
    get barcode(): Barcode;
    private _location;
    get location(): Quadrilateral;
    private _identifier;
    get identifier(): number;
    private _sessionFrameSequenceID;
    get sessionFrameSequenceID(): number | null;
    get shouldAnimateFromPreviousToNextState(): boolean;
    private static fromJSON;
}
export declare class StructuredAppendData {
    private _isComplete;
    get isComplete(): boolean;
    private _barcodeSetId;
    get barcodeSetId(): string;
    private _scannedSegmentCount;
    get scannedSegmentCount(): number;
    private _totalSegmentCount;
    get totalSegmentCount(): number;
    private _encodingRanges;
    get encodingRanges(): EncodingRange[];
    private _completeData;
    get completeData(): string | null;
    private _rawCompleteData;
    get rawCompleteData(): string;
    private static fromJSON;
}
