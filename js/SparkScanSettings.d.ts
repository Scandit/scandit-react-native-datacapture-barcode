import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { Symbology } from './Symbology';
import { SymbologySettings } from './Symbology+Related';
import { LocationSelection } from 'scandit-react-native-datacapture-core/js/LocationSelection';
export declare class SparkScanSettings extends DefaultSerializeable {
    codeDuplicateFilter: number;
    private _singleBarcodeAutoDetection;
    get singleBarcodeAutoDetection(): boolean;
    set singleBarcodeAutoDetection(isEnabled: boolean);
    private _locationSelection;
    get locationSelection(): LocationSelection | null;
    set locationSelection(newValue: LocationSelection | null);
    private properties;
    private symbologies;
    get enabledSymbologies(): Symbology[];
    constructor();
    settingsForSymbology(symbology: Symbology): SymbologySettings;
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
    enableSymbologies(symbologies: Symbology[]): void;
    enableSymbology(symbology: Symbology, enabled: boolean): void;
}
