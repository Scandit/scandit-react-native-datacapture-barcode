import { Symbology } from '../Symbology';
import { CompositeType, EncodingRange, SymbologyDescription, SymbologySettings } from '../Symbology+Related';
export interface SymbologyDescriptionJSON {
    identifier: string;
    readableName: string;
    isAvailable: boolean;
    isColorInvertible: boolean;
    activeSymbolCountRange: RangeJSON;
    defaultSymbolCountRange: RangeJSON;
    supportedExtensions: string[];
}
export interface CompositeTypeDescription {
    types: CompositeType[];
    symbologies: Symbology[];
}
export interface PrivateSymbologyDescription {
    defaults: () => {
        SymbologyDescriptions: SymbologyDescription[];
    };
    fromJSON(json: SymbologyDescriptionJSON): SymbologyDescription;
}
export interface SymbologySettingsJSON {
    enabled: boolean;
    colorInvertedEnabled: boolean;
    activeSymbolCounts: number[];
    checksums: string[];
    extensions: string[];
}
export interface PrivateSymbologySettings {
    fromJSON: (json: any) => SymbologySettings;
    _symbology: Symbology;
}
export interface PrivateEncodingRange {
    fromJSON(json: any): EncodingRange;
}
export interface EncodingRangeJSON {
    ianaName: string;
    startIndex: number;
    endIndex: number;
}
export interface RangeJSON {
    minimum: number;
    maximum: number;
    step: number;
}
export interface PrivateRange {
    _minimum: number;
    _maximum: number;
    _step: number;
}
