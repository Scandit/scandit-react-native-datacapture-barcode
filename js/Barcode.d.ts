import { Quadrilateral } from 'scandit-react-native-datacapture-core/js/Common';
import { Symbology } from './Symbology';
import { CompositeFlag, EncodingRange } from './Symbology+Related';
export declare class Barcode {
    private _symbology;
    get symbology(): Symbology;
    private _data;
    get data(): Optional<string>;
    private _rawData;
    get rawData(): string;
    private _compositeData;
    get compositeData(): Optional<string>;
    private _compositeRawData;
    get compositeRawData(): string;
    private _addOnData;
    get addOnData(): Optional<string>;
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
    private sessionFrameSequenceID;
    private _shouldAnimateFromPreviousToNextState;
    get shouldAnimateFromPreviousToNextState(): boolean;
    private static fromJSON;
}
