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
export declare enum ArucoDictionaryPreset {
    ArucoDictionaryPreset_5X5_50 = "5X5_50",
    ArucoDictionaryPreset_5X5_100 = "5X5_100",
    ArucoDictionaryPreset_5X5_250 = "5X5_250",
    ArucoDictionaryPreset_5X5_1000 = "5X5_1000",
    ArucoDictionaryPreset_5X5_1023 = "5X5_1023",
    ArucoDictionaryPreset_4X4_250 = "4X4_250",
    ArucoDictionaryPreset_6X6_250 = "6X6_250"
}
export declare class ArucoMarker extends DefaultSerializeable {
    private _markerData;
    private _markerSize;
    get size(): number;
    get data(): string;
    static create(markerSize: number, markerData: string): ArucoMarker;
}
export declare class ArucoDictionary {
    private _preset;
    private _markers;
    private _markerSize;
    static fromPreset(preset: ArucoDictionaryPreset): ArucoDictionary;
    static createWithMarkers(markerSize: number, markers: ArucoMarker[]): ArucoDictionary;
}
