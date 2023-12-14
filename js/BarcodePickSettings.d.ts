import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { Symbology } from './Symbology';
import { SymbologySettings } from './Symbology+Related';
export declare class BarcodePickSettings extends DefaultSerializeable {
    private symbologies;
    private properties;
    private _soundEnabled;
    private _hapticsEnabled;
    constructor();
    settingsForSymbology(symbology: Symbology): SymbologySettings;
    get enabledSymbologies(): Symbology[];
    enableSymbologies(symbologies: Symbology[]): void;
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
    get soundEnabled(): boolean;
    set soundEnabled(enabled: boolean);
    get hapticsEnabled(): boolean;
    set hapticsEnabled(enabled: boolean);
}
