import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { Symbology } from './Symbology';
import { Barcode } from 'Barcode';
export declare class SymbologyDescription {
    private static defaults;
    static get all(): SymbologyDescription[];
    private _identifier;
    get identifier(): string;
    get symbology(): Symbology;
    private _readableName;
    get readableName(): string;
    private _isAvailable;
    get isAvailable(): boolean;
    private _isColorInvertible;
    get isColorInvertible(): boolean;
    private _activeSymbolCountRange;
    get activeSymbolCountRange(): Range;
    private _defaultSymbolCountRange;
    get defaultSymbolCountRange(): Range;
    private _supportedExtensions;
    get supportedExtensions(): string[];
    private static fromJSON;
    static forIdentifier(identifier: string): SymbologyDescription | null;
    constructor(symbology: Symbology);
    constructor();
}
export declare class SymbologySettings extends DefaultSerializeable {
    private _symbology;
    private extensions;
    isEnabled: boolean;
    isColorInvertedEnabled: boolean;
    checksums: Checksum[];
    activeSymbolCounts: number[];
    get symbology(): Symbology;
    get enabledExtensions(): string[];
    private static fromJSON;
    setExtensionEnabled(extension: string, enabled: boolean): void;
}
export declare enum CompositeType {
    A = "A",
    B = "B",
    C = "C"
}
export declare enum Checksum {
    Mod10 = "mod10",
    Mod11 = "mod11",
    Mod16 = "mod16",
    Mod43 = "mod43",
    Mod47 = "mod47",
    Mod103 = "mod103",
    Mod10AndMod11 = "mod1110",
    Mod10AndMod10 = "mod1010"
}
export declare class EncodingRange {
    private _ianaName;
    get ianaName(): string;
    private _startIndex;
    get startIndex(): number;
    private _endIndex;
    get endIndex(): number;
    private static fromJSON;
}
export declare enum CompositeFlag {
    None = "none",
    Unknown = "unknown",
    Linked = "linked",
    GS1TypeA = "gs1TypeA",
    GS1TypeB = "gs1TypeB",
    GS1TypeC = "gs1TypeC"
}
export declare class Range {
    private _minimum;
    private _maximum;
    private _step;
    get minimum(): number;
    get maximum(): number;
    get step(): number;
    get isFixed(): boolean;
    private static fromJSON;
}
export declare class Ean13UpcaClassification {
    static isUpca(barcode: Barcode): boolean;
    static isEan13(barcode: Barcode): boolean;
}
