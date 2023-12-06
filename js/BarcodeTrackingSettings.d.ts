import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { Symbology } from './Symbology';
import { SymbologySettings } from './Symbology+Related';
export declare enum BarcodeTrackingScenario {
    A = "A",
    B = "B"
}
export declare class BarcodeTrackingSettings extends DefaultSerializeable {
    private scenario;
    private properties;
    private symbologies;
    get enabledSymbologies(): Symbology[];
    static forScenario(scenario: BarcodeTrackingScenario): BarcodeTrackingSettings;
    constructor();
    settingsForSymbology(symbology: Symbology): SymbologySettings;
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
    enableSymbologies(symbologies: Symbology[]): void;
    enableSymbology(symbology: Symbology, enabled: boolean): void;
}
