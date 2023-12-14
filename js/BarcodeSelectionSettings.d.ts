import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { Symbology } from './Symbology';
import { SymbologySettings } from './Symbology+Related';
export declare class BarcodeSelectionSettings extends DefaultSerializeable {
    codeDuplicateFilter: number;
    singleBarcodeAutoDetection: boolean;
    selectionType: BarcodeSelectionType;
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
export interface BarcodeSelectionStrategy {
}
export declare class BarcodeSelectionAutoSelectionStrategy extends DefaultSerializeable implements BarcodeSelectionStrategy {
    private type;
    static get autoSelectionStrategy(): BarcodeSelectionAutoSelectionStrategy;
}
export declare class BarcodeSelectionManualSelectionStrategy extends DefaultSerializeable implements BarcodeSelectionStrategy {
    private type;
    static get manualSelectionStrategy(): BarcodeSelectionManualSelectionStrategy;
}
export declare enum BarcodeSelectionFreezeBehavior {
    Manual = "manual",
    ManualAndAutomatic = "manualAndAutomatic"
}
export declare enum BarcodeSelectionTapBehavior {
    ToggleSelection = "toggleSelection",
    RepeatSelection = "repeatSelection"
}
export interface BarcodeSelectionType {
}
export declare class BarcodeSelectionAimerSelection extends DefaultSerializeable implements BarcodeSelectionType {
    private type;
    selectionStrategy: BarcodeSelectionStrategy;
    static get aimerSelection(): BarcodeSelectionAimerSelection;
    private constructor();
}
export declare class BarcodeSelectionTapSelection extends DefaultSerializeable implements BarcodeSelectionType {
    private type;
    freezeBehavior: BarcodeSelectionFreezeBehavior;
    tapBehavior: BarcodeSelectionTapBehavior;
    static get tapSelection(): BarcodeSelectionTapSelection;
    static withFreezeBehaviorAndTapBehavior(freezeBehavior: BarcodeSelectionFreezeBehavior, tapBehavior: BarcodeSelectionTapBehavior): BarcodeSelectionTapSelection;
}
