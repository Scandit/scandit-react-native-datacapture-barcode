import { BarcodeFilterSettings } from './BarcodeFilterSettings';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { Symbology } from './Symbology';
import { SymbologySettings } from './Symbology+Related';
export declare class BarcodeCountSettings extends DefaultSerializeable {
    private symbologies;
    private properties;
    private _filterSettings;
    private _expectsOnlyUniqueBarcodes;
    private _mappingEnabled;
    constructor();
    get expectsOnlyUniqueBarcodes(): boolean;
    set expectsOnlyUniqueBarcodes(expectsOnlyUniqueBarcodes: boolean);
    get mappingEnabled(): boolean;
    set mappingEnabled(mappingEnabled: boolean);
    get filterSettings(): BarcodeFilterSettings;
    get enabledSymbologies(): Symbology[];
    settingsForSymbology(symbology: Symbology): SymbologySettings;
    enableSymbologies(symbologies: Symbology[]): void;
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
}
