import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { Symbology } from './Symbology';
export declare class BarcodeFilterSettings extends DefaultSerializeable {
    get excludeEan13(): boolean;
    set excludeEan13(value: boolean);
    get excludeUpca(): boolean;
    set excludeUpca(value: boolean);
    get excludedCodesRegex(): string;
    set excludedCodesRegex(value: string);
    get excludedSymbologies(): Symbology[];
    set excludedSymbologies(values: Symbology[]);
    private _excludeEan13;
    private _excludeUpca;
    private _excludedCodesRegex;
    private _excludedSymbolCounts;
    private _excludedSymbologies;
    private static fromJSON;
    private constructor();
    getExcludedSymbolCountsForSymbology(symbology: Symbology): number[];
    setExcludedSymbolCounts(excludedSymbolCounts: number[], symbology: Symbology): void;
}
