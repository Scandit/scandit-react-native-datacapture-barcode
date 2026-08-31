import { DefaultSerializeable, Quadrilateral, QuadrilateralJSON, Brush, ScanIntention, SelectionMode, CameraSettings, CameraPosition, DataCaptureContext, Anchor, PointWithUnit, LogoStyle, ZoomSwitchOrientation, BaseProxy, BaseController, Point, Feedback, FrameData, Observable, ScanditIcon, TextAlignment, Color, FontFamily, DataCaptureMode, DataCaptureOverlay, Viewfinder, ClusteringMode, PrivateDataCaptureMode, BaseDataCaptureView, LocationSelection, TorchState, NumberWithUnit, FrameSourceState, EventPayload, DataCaptureComponent, NativeCallerProvider } from 'scandit-react-native-datacapture-core/dist/dts/core';

declare enum Symbology {
    EAN13UPCA = "ean13Upca",
    UPCE = "upce",
    EAN8 = "ean8",
    Code39 = "code39",
    Code93 = "code93",
    Code128 = "code128",
    Code11 = "code11",
    Code25 = "code25",
    Codabar = "codabar",
    InterleavedTwoOfFive = "interleavedTwoOfFive",
    MSIPlessey = "msiPlessey",
    QR = "qr",
    DataMatrix = "dataMatrix",
    Aztec = "aztec",
    MaxiCode = "maxicode",
    DotCode = "dotcode",
    KIX = "kix",
    RoyalMail4state = "royal-mail-4state",
    GS1Databar = "databar",
    GS1DatabarExpanded = "databarExpanded",
    GS1DatabarLimited = "databarLimited",
    PDF417 = "pdf417",
    MicroPDF417 = "microPdf417",
    MicroQR = "microQr",
    Code32 = "code32",
    Lapa4SC = "lapa4sc",
    IATATwoOfFive = "iata2of5",
    MatrixTwoOfFive = "matrix2of5",
    USPSIntelligentMail = "uspsIntelligentMail",
    ArUco = "aruco",
    Upu4State = "upu-4state",
    AustralianPost = "australian-post-4state",
    FrenchPost = "french-post"
}

declare class Range extends DefaultSerializeable {
    private _minimum;
    private _maximum;
    private _step;
    get minimum(): number;
    get maximum(): number;
    get step(): number;
    get isFixed(): boolean;
    private static fromJSON;
}
interface RangeJSON {
    minimum: number;
    maximum: number;
    step: number;
}
interface PrivateRange {
    _minimum: number;
    _maximum: number;
    _step: number;
}

declare class SymbologyDescription {
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
    static forIdentifier(identifier: string): SymbologyDescription | null;
    private static fromJSON;
    constructor(symbology: Symbology);
    constructor();
}
interface SymbologyDescriptionJSON {
    identifier: string;
    readableName: string;
    isAvailable: boolean;
    isColorInvertible: boolean;
    activeSymbolCountRange: RangeJSON;
    defaultSymbolCountRange: RangeJSON;
    supportedExtensions: string[];
}
interface PrivateSymbologyDescription {
    defaults: () => {
        SymbologyDescriptions: SymbologyDescription[];
    };
    fromJSON(json: SymbologyDescriptionJSON): SymbologyDescription;
}

declare enum CompositeType {
    A = "A",
    B = "B",
    C = "C"
}

declare enum Checksum {
    Mod10 = "mod10",
    Mod11 = "mod11",
    Mod16 = "mod16",
    Mod43 = "mod43",
    Mod47 = "mod47",
    Mod103 = "mod103",
    Mod10AndMod11 = "mod1110",
    Mod10AndMod10 = "mod1010"
}

declare class SymbologySettings extends DefaultSerializeable {
    isEnabled: boolean;
    isColorInvertedEnabled: boolean;
    checksums: Checksum[];
    activeSymbolCounts: number[];
    private _symbology;
    private extensions;
    get symbology(): Symbology;
    get enabledExtensions(): string[];
    private static fromJSON;
    setExtensionEnabled(extension: string, enabled: boolean): void;
}
interface SymbologySettingsJSON {
    enabled: boolean;
    colorInvertedEnabled: boolean;
    activeSymbolCounts: number[];
    checksums: string[];
    extensions: string[];
}
interface PrivateSymbologySettings {
    fromJSON: (identifier: string, json: SymbologySettingsJSON) => SymbologySettings;
    _symbology: Symbology;
}

declare class EncodingRange {
    private _ianaName;
    get ianaName(): string;
    private _startIndex;
    get startIndex(): number;
    private _endIndex;
    get endIndex(): number;
    private static fromJSON;
}
interface EncodingRangeJSON {
    ianaName: string;
    startIndex: number;
    endIndex: number;
}
interface PrivateEncodingRange {
    fromJSON(json: any): EncodingRange;
}

declare enum CompositeFlag {
    None = "none",
    Unknown = "unknown",
    Linked = "linked",
    GS1TypeA = "gs1TypeA",
    GS1TypeB = "gs1TypeB",
    GS1TypeC = "gs1TypeC"
}

declare class StructuredAppendData {
    private _isComplete;
    get isComplete(): boolean;
    private _barcodeSetId;
    get barcodeSetId(): string;
    private _scannedSegmentCount;
    get scannedSegmentCount(): number;
    private _totalSegmentCount;
    get totalSegmentCount(): number;
    private _encodingRanges;
    get encodingRanges(): EncodingRange[];
    private _completeData;
    get completeData(): string | null;
    private _rawCompleteData;
    get rawCompleteData(): string;
    private static fromJSON;
}
interface PrivateStructuredAppendData {
    fromJSON(json: StructuredAppendDataJSON | null): StructuredAppendData;
}
interface StructuredAppendDataJSON {
    barcodeSetId: string;
    scannedSegmentCount: number;
    totalSegmentCount: number;
    complete: boolean;
    completeDataEncodings: EncodingRangeJSON[];
    completeDataRaw: string;
    completeDataUtf8String: string | null;
}

declare class BarcodeInfo extends DefaultSerializeable {
    private _symbology;
    get symbology(): Symbology;
    private _data;
    get data(): string;
    private _location;
    get location(): Quadrilateral;
    static create(symbology: Symbology, data: string, location?: Quadrilateral): BarcodeInfo;
    private constructor();
    static fromJSON(json: BarcodeInfoJSON): BarcodeInfo;
}
interface BarcodeInfoJSON {
    symbology: string;
    data: string;
    location: QuadrilateralJSON;
}

declare class Barcode extends DefaultSerializeable {
    private _barcodeId;
    private _symbology;
    get symbology(): Symbology;
    private _data;
    get data(): string | null;
    private _rawData;
    get rawData(): string;
    private _compositeData;
    get compositeData(): string | null;
    private _compositeRawData;
    get compositeRawData(): string;
    private _addOnData;
    get addOnData(): string | null;
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
    private _moduleCountX;
    get moduleCountX(): number;
    private _moduleCountY;
    get moduleCountY(): number;
    get isStructuredAppend(): boolean;
    private _structuredAppendData;
    get structuredAppendData(): StructuredAppendData | null;
    private get selectionIdentifier();
    static fromJSON(json: BarcodeJSON): Barcode;
    static create(info: BarcodeInfo): Promise<Barcode>;
}
interface BarcodeJSON {
    identifier: string;
    symbology: string;
    data: string | null;
    rawData: string;
    addOnData: string | null;
    compositeData: string | null;
    compositeRawData: string;
    isGS1DataCarrier: boolean;
    compositeFlag: string;
    isColorInverted: boolean;
    symbolCount: number;
    frameId: number;
    moduleCountX: number;
    moduleCountY: number;
    encodingRanges: EncodingRangeJSON[];
    location: QuadrilateralJSON;
    structuredAppendData: StructuredAppendDataJSON | null;
}

interface BarcodeDataTransformer {
    transformBarcodeData(data: string | null): string | null;
}

declare enum BatterySavingMode {
    On = "on",
    Off = "off",
    Auto = "auto"
}

/**
 * Supports two JSON formats:
 * 1. From BarcodeCountSession: `{ barcodeIdentifiers: ["0", "2"], identifier: "0", _barcodeMap: {...} }`
 * 2. From didTapCluster event: `{ barcodes: [<full barcode json>, ...] }`
 */
interface ClusterJSON {
    identifier?: string;
    barcodes?: BarcodeJSON[];
    barcodeIdentifiers?: string[];
    _barcodeMap?: Map<string, Barcode>;
}
declare class Cluster {
    private _barcodes;
    get barcodes(): Barcode[];
    private static fromJSON;
    private constructor();
}

declare enum CapturePreset {
    Transport = "transport",
    Logistics = "logistics",
    Retail = "retail",
    Healthcare = "healthcare",
    Manufacturing = "manufacturing"
}

declare class LocalizedOnlyBarcode {
    private _location;
    private _frameID;
    get location(): Quadrilateral;
    get frameID(): number;
    private static fromJSON;
}
interface LocalizedOnlyBarcodeJSON {
    location: QuadrilateralJSON;
    frameId: number;
}
interface PrivateLocalizedOnlyBarcode {
    fromJSON(json: LocalizedOnlyBarcodeJSON): LocalizedOnlyBarcode;
}

declare class TargetBarcode extends DefaultSerializeable {
    get data(): string;
    get quantity(): number;
    private _data;
    private _quantity;
    static create(data: string, quantity: number): TargetBarcode;
    private static fromJSON;
    private constructor();
}
interface TargetBarcodeJSON {
    data: string;
    quantity: number;
}

declare class TrackedBarcode {
    private _barcode;
    get barcode(): Barcode;
    private _location;
    get location(): Quadrilateral;
    private _identifier;
    get identifier(): number;
    private _sessionFrameSequenceID;
    private get sessionFrameSequenceID();
    private static fromJSON;
    private _updateLocation;
}
interface TrackedBarcodeJSON {
    identifier: number;
    barcode: BarcodeJSON;
    location: QuadrilateralJSON;
}

declare class TrackedObject {
    private _location;
    get location(): Quadrilateral;
    private _identifier;
    get identifier(): number;
    private _data;
    get data(): string | null;
    private constructor();
    private static fromJSON;
    toJSON(): string;
}
interface TrackedObjectJSON {
    identifier: number | string;
    location: QuadrilateralJSON;
    data?: string | null;
}

interface BarcodeSpatialGridElementJSON {
    mainBarcode: BarcodeJSON;
    subBarcode: BarcodeJSON | null;
}
declare class BarcodeSpatialGrid extends DefaultSerializeable {
    private _rows;
    private _columns;
    private _grid;
    private static fromJSON;
    get rows(): number;
    get columns(): number;
    barcodeAt(row: number, column: number): Barcode | null;
    row(index: number): Barcode[];
    column(index: number): Barcode[];
}
interface BarcodeSpatialGridJSON {
    rows: number;
    columns: number;
    grid: BarcodeSpatialGridElementJSON[][];
}

declare class BarcodeFilterSettings extends DefaultSerializeable {
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
    excludedSymbolCounts: Partial<Record<Symbology, number[]>>;
    private _excludedSymbologies;
    constructor();
    private static fromJSON;
    getExcludedSymbolCountsForSymbology(symbology: Symbology): number[];
    setExcludedSymbolCounts(excludedSymbolCounts: number[], symbology: Symbology): void;
}
interface BarcodeFilterSettingsJSON {
    excludeEan13: boolean;
    excludeUpca: boolean;
    excludedCodesRegex: string;
    excludedSymbolCounts: Partial<Record<Symbology, number[]>>;
    excludedSymbologies: Symbology[];
}
interface PrivateBarcodeFilterSettings {
    fromJSON(json: BarcodeFilterSettingsJSON): BarcodeFilterSettings;
}

declare enum BarcodeFilterHighlightType {
    Brush = "brush"
}

interface BarcodeFilterHighlightSettings extends DefaultSerializeable {
    readonly highlightType: BarcodeFilterHighlightType;
    readonly brush: Brush | null;
}

declare class BarcodeFilterHighlightSettingsBrush extends DefaultSerializeable implements BarcodeFilterHighlightSettings {
    private _highlightType;
    private _brush;
    constructor(brush?: Brush);
    static create(brush: Brush): BarcodeFilterHighlightSettingsBrush;
    get highlightType(): BarcodeFilterHighlightType;
    get brush(): Brush | null;
}

declare class Ean13UpcaClassification {
    static isUpca(barcode: Barcode): boolean;
    static isEan13(barcode: Barcode): boolean;
}

interface CompositeTypeDescription {
    types: CompositeType[];
    symbologies: Symbology[];
}

declare enum ArucoDictionaryPreset {
    ArucoDictionaryPreset_5X5_50 = "5X5_50",
    ArucoDictionaryPreset_5X5_100 = "5X5_100",
    ArucoDictionaryPreset_5X5_250 = "5X5_250",
    ArucoDictionaryPreset_5X5_1000 = "5X5_1000",
    ArucoDictionaryPreset_5X5_1023 = "5X5_1023",
    ArucoDictionaryPreset_4X4_250 = "4X4_250",
    ArucoDictionaryPreset_6X6_250 = "6X6_250"
}

declare class ArucoMarker extends DefaultSerializeable {
    private _markerData;
    private _markerSize;
    get size(): number;
    get data(): string;
    static create(markerSize: number, markerData: string): ArucoMarker;
}

declare class ArucoDictionary {
    private _preset;
    private _markers;
    private _markerSize;
    static fromPreset(preset: ArucoDictionaryPreset): ArucoDictionary;
    static createWithMarkers(markerSize: number, markers: ArucoMarker[]): ArucoDictionary;
}

interface BarcodeDefaults {
    SymbologySettings: {
        [key: string]: SymbologySettings;
    };
    SymbologyDescriptions: SymbologyDescription[];
    CompositeTypeDescriptions: CompositeTypeDescription[];
}

declare function getBarcodeDefaults(): BarcodeDefaults;
/**
 * Helper function to get symbology settings from BarcodeDefaults with proper error handling.
 * This centralizes the common pattern used across various Settings classes.
 *
 * @param symbology - The symbology to get settings for (Symbology enum or string identifier)
 * @param errorPrefix - Prefix for error messages (e.g., "Barcode", "Barcode batch", "Barcode selection")
 * @returns SymbologySettings instance with _symbology property set (if symbology is an enum)
 * @throws Error if defaults are missing or symbology settings are not found
 */
declare function getSymbologySettingsFromDefaults(symbology: Symbology, errorPrefix: string): SymbologySettings;

interface BarcodeCaptureDefaults {
    BarcodeCaptureOverlay: {
        DefaultBrush: Brush;
    };
    BarcodeCaptureSettings: {
        codeDuplicateFilter: number;
        batterySaving: BatterySavingMode;
        scanIntention: ScanIntention;
        selectionMode: SelectionMode;
    };
    RecommendedCameraSettings: CameraSettings;
}

declare function getBarcodeCaptureDefaults(): BarcodeCaptureDefaults;

declare class BarcodeArViewSettings extends DefaultSerializeable {
    private static get barcodeArDefaults();
    private _soundEnabled;
    private _hapticEnabled;
    private _defaultCameraPosition;
    constructor();
    get soundEnabled(): boolean;
    set soundEnabled(value: boolean);
    get hapticEnabled(): boolean;
    set hapticEnabled(value: boolean);
    get defaultCameraPosition(): CameraPosition;
    set defaultCameraPosition(value: CameraPosition);
}

interface BarcodeArHighlight extends DefaultSerializeable {
}

interface BarcodeArViewUiListener {
    didTapHighlightForBarcode(barcodeAr: BarcodeAr, barcode: Barcode, highlight: BarcodeArHighlight): void;
}

declare enum BarcodeArAnnotationTrigger {
    HighlightTap = "highlightTap",
    HighlightTapAndBarcodeScan = "highlightTapAndBarcodeScan",
    BarcodeScan = "barcodeScan"
}

interface BarcodeArAnnotation extends DefaultSerializeable {
    annotationTrigger: BarcodeArAnnotationTrigger;
}

interface BarcodeArAnnotationProvider {
    annotationForBarcode(barcode: Barcode): Promise<BarcodeArAnnotation | null>;
}

interface BarcodeArHighlightProvider {
    highlightForBarcode(barcode: Barcode): Promise<BarcodeArHighlight | null>;
}

interface BarcodeArView {
}
declare class BaseBarcodeArView extends DefaultSerializeable {
    nativeView: BarcodeArView | null;
    private static get barcodeArDefaults();
    private _annotationProvider;
    private _barcodeArViewUiListener;
    private _highlightProvider;
    private _barcodeAr;
    private _isStarted;
    private _barcodeArViewSettings?;
    private _cameraSettings?;
    private _dataCaptureContext;
    private _shouldShowCameraSwitchControl;
    private _cameraSwitchControlPosition;
    private _shouldShowMacroModeControl;
    private _macroModeControlPosition;
    private _shouldShowTorchControl;
    private _torchControlPosition;
    private _shouldShowZoomControl;
    private _zoomControlPosition;
    private _torchControlOffset;
    private _zoomControlOffset;
    private _cameraSwitchControlOffset;
    private _macroModeControlOffset;
    private _zoomControlOrientation;
    private _logoStyle;
    private _logoAnchor;
    private _logoOffset;
    private isViewCreated;
    private controller;
    private _viewId;
    constructor(context: DataCaptureContext, barcodeAr: BarcodeAr, nativeView?: BarcodeArView | null, barcodeArViewSettings?: BarcodeArViewSettings, cameraSettings?: CameraSettings, annotationProvider?: BarcodeArAnnotationProvider, highlightProvider?: BarcodeArHighlightProvider, uiListener?: BarcodeArViewUiListener);
    dispose(): Promise<void>;
    createNativeView(viewId: number): Promise<void>;
    removeNativeView(): Promise<void>;
    get viewId(): number;
    get barcodeArViewUiListener(): BarcodeArViewUiListener | null;
    set barcodeArViewUiListener(value: BarcodeArViewUiListener | null);
    get annotationProvider(): BarcodeArAnnotationProvider | null;
    set annotationProvider(value: BarcodeArAnnotationProvider | null);
    get highlightProvider(): BarcodeArHighlightProvider | null;
    set highlightProvider(value: BarcodeArHighlightProvider | null);
    registerCustomHighlightCreateEvent: BarcodeArViewController['registerCustomHighlightCreateEvent'];
    registerCustomHighlightUpdateEvent: BarcodeArViewController['registerCustomHighlightUpdateEvent'];
    registerCustomHighlightHideEvent: BarcodeArViewController['registerCustomHighlightHideEvent'];
    registerCustomHighlightShowEvent: BarcodeArViewController['registerCustomHighlightShowEvent'];
    registerCustomHighlightDisposeEvent: BarcodeArViewController['registerCustomHighlightDisposeEvent'];
    subscribeForCustomHighlightEvents: BarcodeArViewController['subscribeForCustomHighlightEvents'];
    unsubscribeFromCustomHighlightEvents: BarcodeArViewController['unsubscribeFromCustomHighlightEvents'];
    onCustomHighlightClicked: BarcodeArViewController['onCustomHighlightClicked'];
    registerCustomAnnotationCreateEvent: BarcodeArViewController['registerCustomAnnotationCreateEvent'];
    registerCustomAnnotationUpdateEvent: BarcodeArViewController['registerCustomAnnotationUpdateEvent'];
    registerCustomAnnotationHideEvent: BarcodeArViewController['registerCustomAnnotationHideEvent'];
    registerCustomAnnotationShowEvent: BarcodeArViewController['registerCustomAnnotationShowEvent'];
    registerCustomAnnotationDisposeEvent: BarcodeArViewController['registerCustomAnnotationDisposeEvent'];
    subscribeForCustomAnnotationEvents: BarcodeArViewController['subscribeForCustomAnnotationEvents'];
    unsubscribeFromCustomAnnotationEvents: BarcodeArViewController['unsubscribeFromCustomAnnotationEvents'];
    get context(): DataCaptureContext;
    start(): Promise<void>;
    stop(): Promise<void>;
    pause(): Promise<void>;
    reset(): Promise<void>;
    show(): Promise<void>;
    hide(): Promise<void>;
    get shouldShowTorchControl(): boolean;
    set shouldShowTorchControl(value: boolean);
    get torchControlPosition(): Anchor;
    set torchControlPosition(value: Anchor);
    get shouldShowZoomControl(): boolean;
    set shouldShowZoomControl(value: boolean);
    get zoomControlPosition(): Anchor;
    set zoomControlPosition(value: Anchor);
    get torchControlOffset(): PointWithUnit | null;
    set torchControlOffset(value: PointWithUnit | null);
    get zoomControlOffset(): PointWithUnit | null;
    set zoomControlOffset(value: PointWithUnit | null);
    get cameraSwitchControlOffset(): PointWithUnit | null;
    set cameraSwitchControlOffset(value: PointWithUnit | null);
    get macroModeControlOffset(): PointWithUnit | null;
    set macroModeControlOffset(value: PointWithUnit | null);
    get logoStyle(): LogoStyle;
    set logoStyle(value: LogoStyle);
    get zoomControlOrientation(): ZoomSwitchOrientation;
    set zoomControlOrientation(value: ZoomSwitchOrientation);
    get logoAnchor(): Anchor;
    set logoAnchor(value: Anchor);
    get logoOffset(): PointWithUnit;
    set logoOffset(value: PointWithUnit);
    get shouldShowCameraSwitchControl(): boolean;
    set shouldShowCameraSwitchControl(value: boolean);
    get cameraSwitchControlPosition(): Anchor;
    set cameraSwitchControlPosition(value: Anchor);
    get shouldShowMacroModeControl(): boolean;
    set shouldShowMacroModeControl(value: boolean);
    get macroModeControlPosition(): Anchor;
    set macroModeControlPosition(value: Anchor);
    setPositionAndSize(top: number, left: number, width: number, height: number, shouldBeUnderWebView: boolean): Promise<void>;
    toJSON(): object;
    private updateNative;
}

declare class BarcodeArSettings extends DefaultSerializeable {
    private static get barcodeArDefaults();
    private symbologies;
    private properties;
    private _expectsOnlyUniqueBarcodes;
    constructor();
    get expectsOnlyUniqueBarcodes(): boolean;
    set expectsOnlyUniqueBarcodes(expectsOnlyUniqueBarcodes: boolean);
    get enabledSymbologies(): Symbology[];
    settingsForSymbology(symbology: Symbology): SymbologySettings;
    enableSymbologies(symbologies: Symbology[]): void;
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    setProperty(name: string, value: object): void;
    getProperty(name: string): object;
}

/**
 * Barcode module - barcode capture, tracking, selection, and related functionality
 * Generated from schema definition.
 *
 * Single entry point interface - all operations go through $executeBarcode.
 * The BarcodeController handles method-specific logic and calls this proxy.
 * The NativeProxy automatically handles the `$` prefix for native method calls.
 */
interface BarcodeProxy extends BaseProxy {
    /**
     * Single entry point for all Barcode operations.
     * Routes to appropriate native command based on moduleName and methodName.
     *
     * @param params Object containing:
     *   - moduleName: The name of the module to execute against
     *   - methodName: The name of the method to execute
     *   - ...other parameters specific to the method
     *
     * @returns Promise resolving to the result (type depends on methodName)
     *
     * Note: This method is called with the `$` prefix ($executeBarcode) which is
     * automatically handled by NativeProxy to route to native implementation.
     */
    $executeBarcode(params: {
        moduleName: string;
        methodName: string;
        [key: string]: any;
    }): Promise<any>;
}

/**
 * Adapter class for Barcode operations.
 * Provides typed methods that internally call $executeBarcode.
 * Generated from schema definition to ensure parameter and method name consistency.
 */
declare class BarcodeProxyAdapter {
    private proxy;
    constructor(proxy: BarcodeProxy);
    /**
     * Creates a new barcode generator instance
     * @param barcodeGeneratorJson Barcode generator configuration as JSON string
     */
    createBarcodeGenerator({ barcodeGeneratorJson }: {
        barcodeGeneratorJson: string;
    }): Promise<void>;
    /**
     * Generates a barcode image from base64 encoded data
     * @param generatorId Unique identifier of the barcode generator
     * @param data Base64 encoded data to generate barcode from
     * @param imageWidth Width of the generated barcode image in pixels
     */
    generateFromBase64EncodedData({ generatorId, data, imageWidth, }: {
        generatorId: string;
        data: string;
        imageWidth: number;
    }): Promise<string>;
    /**
     * Generates a barcode image from a text string
     * @param generatorId Unique identifier of the barcode generator
     * @param text Text string to encode in the barcode
     * @param imageWidth Width of the generated barcode image in pixels
     */
    generateFromString({ generatorId, text, imageWidth, }: {
        generatorId: string;
        text: string;
        imageWidth: number;
    }): Promise<string>;
    /**
     * Disposes the barcode generator and releases resources
     * @param generatorId Unique identifier of the barcode generator to dispose
     */
    disposeBarcodeGenerator({ generatorId }: {
        generatorId: string;
    }): Promise<void>;
    /**
     * Resets the barcode capture session
     */
    resetBarcodeCaptureSession(): Promise<void>;
    /**
     * Returns the BarcodeCaptureLicenseInfo JSON, or null when not available
     * @param modeId Unique identifier of the barcode capture mode
     */
    getBarcodeCaptureLicenseInfo({ modeId }: {
        modeId: number;
    }): Promise<string>;
    /**
     * Register persistent event listener for barcode capture events
     * @param modeId Unique identifier of the barcode capture mode
     */
    registerBarcodeCaptureListenerForEvents({ modeId }: {
        modeId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for barcode capture events
     * @param modeId Unique identifier of the barcode capture mode
     */
    unregisterBarcodeCaptureListenerForEvents({ modeId }: {
        modeId: number;
    }): Promise<void>;
    /**
     * Finish callback for barcode capture did update session event
     * @param modeId Unique identifier of the barcode capture mode
     * @param enabled Whether the mode is enabled
     */
    finishBarcodeCaptureDidUpdateSession({ modeId, enabled, }: {
        modeId: number;
        enabled: boolean;
    }): Promise<void>;
    /**
     * Finish callback for barcode capture did scan event
     * @param modeId Unique identifier of the barcode capture mode
     * @param enabled Whether the mode is enabled
     */
    finishBarcodeCaptureDidScan({ modeId, enabled }: {
        modeId: number;
        enabled: boolean;
    }): Promise<void>;
    /**
     * Sets the enabled state of the barcode capture mode
     * @param modeId Unique identifier of the barcode capture mode
     * @param enabled Whether the mode should be enabled
     */
    setBarcodeCaptureModeEnabledState({ modeId, enabled, }: {
        modeId: number;
        enabled: boolean;
    }): Promise<void>;
    /**
     * Updates the barcode capture mode configuration
     * @param modeJson Barcode capture mode configuration as JSON string
     */
    updateBarcodeCaptureMode({ modeJson }: {
        modeJson: string;
    }): Promise<void>;
    /**
     * Applies new settings to the barcode capture mode
     * @param modeId Unique identifier of the barcode capture mode
     * @param modeSettingsJson Barcode capture mode settings as JSON string
     */
    applyBarcodeCaptureModeSettings({ modeId, modeSettingsJson, }: {
        modeId: number;
        modeSettingsJson: string;
    }): Promise<void>;
    /**
     * Updates the barcode capture overlay configuration
     * @param viewId Unique identifier of the data capture view
     * @param overlayJson Barcode capture overlay configuration as JSON string
     */
    updateBarcodeCaptureOverlay({ viewId, overlayJson, }: {
        viewId: number;
        overlayJson: string;
    }): Promise<void>;
    /**
     * Unfreezes the camera in barcode selection mode
     * @param modeId Unique identifier of the barcode selection mode
     */
    unfreezeCameraInBarcodeSelection({ modeId }: {
        modeId: number;
    }): Promise<void>;
    /**
     * Freezes the camera in barcode selection mode
     * @param modeId Unique identifier of the barcode selection mode
     */
    freezeCameraInBarcodeSelection({ modeId }: {
        modeId: number;
    }): Promise<void>;
    /**
     * Selects the unselected barcodes in the current selection session
     * @param modeId Unique identifier of the barcode selection mode
     */
    selectUnselectedBarcodes({ modeId }: {
        modeId: number;
    }): Promise<void>;
    /**
     * Resets the barcode selection
     * @param modeId Unique identifier of the barcode selection mode
     */
    resetBarcodeSelection({ modeId }: {
        modeId: number;
    }): Promise<void>;
    /**
     * Selects the aimed barcode
     * @param modeId Unique identifier of the barcode selection mode
     */
    selectAimedBarcode({ modeId }: {
        modeId: number;
    }): Promise<void>;
    /**
     * Unselects specified barcodes
     * @param modeId Unique identifier of the barcode selection mode
     * @param barcodesJson Barcodes to unselect as JSON string
     */
    unselectBarcodes({ modeId, barcodesJson }: {
        modeId: number;
        barcodesJson: string;
    }): Promise<void>;
    /**
     * Sets whether a barcode can be selected
     * @param modeId Unique identifier of the barcode selection mode
     * @param barcodeJson Barcode configuration as JSON string
     * @param enabled Whether the barcode can be selected
     */
    setSelectBarcodeEnabled({ modeId, barcodeJson, enabled, }: {
        modeId: number;
        barcodeJson: string;
        enabled: boolean;
    }): Promise<void>;
    /**
     * Increases the count for specified barcodes
     * @param modeId Unique identifier of the barcode selection mode
     * @param barcodeJson Barcodes to increase count for as JSON string
     */
    increaseCountForBarcodes({ modeId, barcodeJson, }: {
        modeId: number;
        barcodeJson: string;
    }): Promise<void>;
    /**
     * Sets the enabled state of the barcode selection mode
     * @param modeId Unique identifier of the barcode selection mode
     * @param enabled Whether the mode should be enabled
     */
    setBarcodeSelectionModeEnabledState({ modeId, enabled, }: {
        modeId: number;
        enabled: boolean;
    }): Promise<void>;
    /**
     * Updates the barcode selection mode configuration
     * @param modeId Unique identifier of the barcode selection mode
     * @param modeJson Barcode selection mode configuration as JSON string
     */
    updateBarcodeSelectionMode({ modeId, modeJson }: {
        modeId: number;
        modeJson: string;
    }): Promise<void>;
    /**
     * Applies new settings to the barcode selection mode
     * @param modeId Unique identifier of the barcode selection mode
     * @param modeSettingsJson Barcode selection mode settings as JSON string
     */
    applyBarcodeSelectionModeSettings({ modeId, modeSettingsJson, }: {
        modeId: number;
        modeSettingsJson: string;
    }): Promise<void>;
    /**
     * Updates the barcode selection feedback configuration
     * @param modeId Unique identifier of the barcode selection mode
     * @param feedbackJson Barcode selection feedback configuration as JSON string
     */
    updateBarcodeSelectionFeedback({ modeId, feedbackJson, }: {
        modeId: number;
        feedbackJson: string;
    }): Promise<void>;
    /**
     * Gets the count for a barcode in the selection session
     * @param modeId Unique identifier of the barcode selection mode
     * @param selectionIdentifier Identifier of the selected barcode
     */
    getCountForBarcodeInBarcodeSelectionSession({ modeId, selectionIdentifier, }: {
        modeId: number;
        selectionIdentifier: string;
    }): Promise<number>;
    /**
     * Resets the barcode selection session
     * @param modeId Unique identifier of the barcode selection mode
     */
    resetBarcodeSelectionSession({ modeId }: {
        modeId: number;
    }): Promise<void>;
    /**
     * Selects the unselected barcodes currently tracked in the barcode selection session
     * @param modeId Unique identifier of the barcode selection mode
     */
    selectUnselectedBarcodesInBarcodeSelectionSession({ modeId }: {
        modeId: number;
    }): Promise<void>;
    /**
     * Returns the BarcodeSelectionLicenseInfo JSON, or null when not available
     * @param modeId Unique identifier of the barcode selection mode
     */
    getBarcodeSelectionLicenseInfo({ modeId }: {
        modeId: number;
    }): Promise<string>;
    /**
     * Finish callback for barcode selection did select event
     * @param modeId Unique identifier of the barcode selection mode
     * @param enabled Whether the mode is enabled
     */
    finishBarcodeSelectionDidSelect({ modeId, enabled, }: {
        modeId: number;
        enabled: boolean;
    }): Promise<void>;
    /**
     * Finish callback for barcode selection did update session event
     * @param modeId Unique identifier of the barcode selection mode
     * @param enabled Whether the mode is enabled
     */
    finishBarcodeSelectionDidUpdateSession({ modeId, enabled, }: {
        modeId: number;
        enabled: boolean;
    }): Promise<void>;
    /**
     * Register persistent event listener for barcode selection events
     * @param modeId Unique identifier of the barcode selection mode
     */
    registerBarcodeSelectionListenerForEvents({ modeId }: {
        modeId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for barcode selection events
     * @param modeId Unique identifier of the barcode selection mode
     */
    unregisterBarcodeSelectionListenerForEvents({ modeId }: {
        modeId: number;
    }): Promise<void>;
    /**
     * Sets the text for aim to select auto hint
     * @param text Text to display in the hint
     */
    setTextForAimToSelectAutoHint({ text }: {
        text: string;
    }): Promise<void>;
    /**
     * Clears the brushes applied to selected barcodes
     */
    clearSelectedBarcodeBrushes(): Promise<void>;
    /**
     * Removes the aimed barcode brush provider
     */
    removeAimedBarcodeBrushProvider(): Promise<void>;
    /**
     * Sets the aimed barcode brush provider
     */
    setAimedBarcodeBrushProvider(): Promise<void>;
    /**
     * Finish callback for aimed barcode brush
     * @param selectionIdentifier Identifier of the selected barcode
     * @param brushJson Brush configuration as JSON string, or null
     */
    finishBrushForAimedBarcodeCallback({ selectionIdentifier, brushJson, }: {
        selectionIdentifier: string;
        brushJson?: string | null;
    }): Promise<void>;
    /**
     * Removes the tracked barcode brush provider
     */
    removeTrackedBarcodeBrushProvider(): Promise<void>;
    /**
     * Sets the tracked barcode brush provider
     */
    setTrackedBarcodeBrushProvider(): Promise<void>;
    /**
     * Finish callback for tracked barcode brush
     * @param selectionIdentifier Identifier of the selected barcode
     * @param brushJson Brush configuration as JSON string, or null
     */
    finishBrushForTrackedBarcodeCallback({ selectionIdentifier, brushJson, }: {
        selectionIdentifier: string;
        brushJson?: string | null;
    }): Promise<void>;
    /**
     * Updates the barcode selection basic overlay configuration
     * @param overlayJson Barcode selection overlay configuration as JSON string
     */
    updateBarcodeSelectionBasicOverlay({ overlayJson }: {
        overlayJson: string;
    }): Promise<void>;
    /**
     * Resets the barcode batch session
     */
    resetBarcodeBatchSession(): Promise<void>;
    /**
     * Returns the BarcodeBatchLicenseInfo JSON, or null when not available
     * @param modeId Unique identifier of the barcode batch mode
     */
    getBarcodeBatchLicenseInfo({ modeId }: {
        modeId: number;
    }): Promise<string>;
    /**
     * Register persistent event listener for barcode batch events
     * @param modeId Unique identifier of the barcode batch mode
     */
    registerBarcodeBatchListenerForEvents({ modeId }: {
        modeId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for barcode batch events
     * @param modeId Unique identifier of the barcode batch mode
     */
    unregisterBarcodeBatchListenerForEvents({ modeId }: {
        modeId: number;
    }): Promise<void>;
    /**
     * Finish callback for barcode batch did update session event
     * @param modeId Unique identifier of the barcode batch mode
     * @param enabled Whether the mode is enabled
     */
    finishBarcodeBatchDidUpdateSessionCallback({ modeId, enabled, }: {
        modeId: number;
        enabled: boolean;
    }): Promise<void>;
    /**
     * Sets the enabled state of the barcode batch mode
     * @param modeId Unique identifier of the barcode batch mode
     * @param enabled Whether the mode should be enabled
     */
    setBarcodeBatchModeEnabledState({ modeId, enabled, }: {
        modeId: number;
        enabled: boolean;
    }): Promise<void>;
    /**
     * Updates the barcode batch mode configuration
     * @param modeJson Barcode batch mode configuration as JSON string
     */
    updateBarcodeBatchMode({ modeJson }: {
        modeJson: string;
    }): Promise<void>;
    /**
     * Applies new settings to the barcode batch mode
     * @param modeId Unique identifier of the barcode batch mode
     * @param modeSettingsJson Barcode batch mode settings as JSON string
     */
    applyBarcodeBatchModeSettings({ modeId, modeSettingsJson, }: {
        modeId: number;
        modeSettingsJson: string;
    }): Promise<void>;
    /**
     * Sets the brush for a tracked barcode in basic overlay
     * @param dataCaptureViewId Unique identifier of the data capture view
     * @param brushJson Brush configuration as JSON string, or null
     * @param trackedBarcodeIdentifier Unique identifier of the tracked barcode
     */
    setBrushForTrackedBarcode({ dataCaptureViewId, brushJson, trackedBarcodeIdentifier, }: {
        dataCaptureViewId: number;
        brushJson?: string | null;
        trackedBarcodeIdentifier: number;
    }): Promise<void>;
    /**
     * Clears all tracked barcode brushes in basic overlay
     * @param dataCaptureViewId Unique identifier of the data capture view
     */
    clearTrackedBarcodeBrushes({ dataCaptureViewId }: {
        dataCaptureViewId: number;
    }): Promise<void>;
    /**
     * Register persistent event listener for barcode batch basic overlay events
     * @param dataCaptureViewId Unique identifier of the data capture view
     */
    registerListenerForBasicOverlayEvents({ dataCaptureViewId, }: {
        dataCaptureViewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for barcode batch basic overlay events
     * @param dataCaptureViewId Unique identifier of the data capture view
     */
    unregisterListenerForBasicOverlayEvents({ dataCaptureViewId, }: {
        dataCaptureViewId: number;
    }): Promise<void>;
    /**
     * Updates the barcode batch basic overlay configuration
     * @param dataCaptureViewId Unique identifier of the data capture view
     * @param overlayJson Barcode batch basic overlay configuration as JSON string
     */
    updateBarcodeBatchBasicOverlay({ dataCaptureViewId, overlayJson, }: {
        dataCaptureViewId: number;
        overlayJson: string;
    }): Promise<void>;
    /**
     * Sets the view for a tracked barcode in advanced overlay
     * @param dataCaptureViewId Unique identifier of the data capture view
     * @param viewJson View configuration as JSON string, or null
     * @param trackedBarcodeIdentifier Unique identifier of the tracked barcode
     */
    setViewForTrackedBarcode({ dataCaptureViewId, viewJson, trackedBarcodeIdentifier, }: {
        dataCaptureViewId: number;
        viewJson?: object | string | null;
        trackedBarcodeIdentifier: number;
    }): Promise<void>;
    /**
     * Updates the size of a tracked barcode view in advanced overlay
     * @param trackedBarcodeIdentifier Unique identifier of the tracked barcode
     * @param width Width of the view in pixels
     * @param height Height of the view in pixels
     */
    updateSizeOfTrackedBarcodeView({ trackedBarcodeIdentifier, width, height, }: {
        trackedBarcodeIdentifier: number;
        width: number;
        height: number;
    }): Promise<void>;
    /**
     * Sets the anchor for a tracked barcode in advanced overlay
     * @param dataCaptureViewId Unique identifier of the data capture view
     * @param anchorJson Anchor configuration as JSON string
     * @param trackedBarcodeIdentifier Unique identifier of the tracked barcode
     */
    setAnchorForTrackedBarcode({ dataCaptureViewId, anchorJson, trackedBarcodeIdentifier, }: {
        dataCaptureViewId: number;
        anchorJson: string;
        trackedBarcodeIdentifier: number;
    }): Promise<void>;
    /**
     * Sets the offset for a tracked barcode in advanced overlay
     * @param dataCaptureViewId Unique identifier of the data capture view
     * @param offsetJson Offset configuration as JSON string
     * @param trackedBarcodeIdentifier Unique identifier of the tracked barcode
     */
    setOffsetForTrackedBarcode({ dataCaptureViewId, offsetJson, trackedBarcodeIdentifier, }: {
        dataCaptureViewId: number;
        offsetJson: string;
        trackedBarcodeIdentifier: number;
    }): Promise<void>;
    /**
     * Clears all tracked barcode views in advanced overlay
     * @param dataCaptureViewId Unique identifier of the data capture view
     */
    clearTrackedBarcodeViews({ dataCaptureViewId }: {
        dataCaptureViewId: number;
    }): Promise<void>;
    /**
     * Register persistent event listener for barcode batch advanced overlay events
     * @param dataCaptureViewId Unique identifier of the data capture view
     */
    registerListenerForAdvancedOverlayEvents({ dataCaptureViewId, }: {
        dataCaptureViewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for barcode batch advanced overlay events
     * @param dataCaptureViewId Unique identifier of the data capture view
     */
    unregisterListenerForAdvancedOverlayEvents({ dataCaptureViewId, }: {
        dataCaptureViewId: number;
    }): Promise<void>;
    /**
     * Updates the barcode batch advanced overlay configuration
     * @param dataCaptureViewId Unique identifier of the data capture view
     * @param overlayJson Barcode batch advanced overlay configuration as JSON string
     */
    updateBarcodeBatchAdvancedOverlay({ dataCaptureViewId, overlayJson, }: {
        dataCaptureViewId: number;
        overlayJson: string;
    }): Promise<void>;
    /**
     * Updates the BarcodeCount view configuration
     * @param viewId Unique identifier of the BarcodeCount view
     * @param viewJson BarcodeCount view configuration as JSON string
     */
    updateBarcodeCountView({ viewId, viewJson, }: {
        viewId: number;
        viewJson: object | string;
    }): Promise<void>;
    /**
     * Register persistent event listener for BarcodeCount view events
     * @param viewId Unique identifier of the BarcodeCount view
     */
    registerBarcodeCountViewListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for BarcodeCount view events
     * @param viewId Unique identifier of the BarcodeCount view
     */
    unregisterBarcodeCountViewListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Register persistent event listener for BarcodeCount view UI events
     * @param viewId Unique identifier of the BarcodeCount view
     */
    registerBarcodeCountViewUiListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for BarcodeCount view UI events
     * @param viewId Unique identifier of the BarcodeCount view
     */
    unregisterBarcodeCountViewUiListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Clears all barcode highlights in the BarcodeCount view
     * @param viewId Unique identifier of the BarcodeCount view
     */
    clearBarcodeCountHighlights({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Finish callback for recognized barcode brush
     * @param viewId Unique identifier of the BarcodeCount view
     * @param brushJson Brush configuration as JSON string, or null
     * @param trackedBarcodeId Unique identifier of the tracked barcode
     */
    finishBarcodeCountBrushForRecognizedBarcode({ viewId, brushJson, trackedBarcodeId, }: {
        viewId: number;
        brushJson?: string | null;
        trackedBarcodeId: number;
    }): Promise<void>;
    /**
     * Finish callback for recognized barcode not in list brush
     * @param viewId Unique identifier of the BarcodeCount view
     * @param brushJson Brush configuration as JSON string, or null
     * @param trackedBarcodeId Unique identifier of the tracked barcode
     */
    finishBarcodeCountBrushForRecognizedBarcodeNotInList({ viewId, brushJson, trackedBarcodeId, }: {
        viewId: number;
        brushJson?: string | null;
        trackedBarcodeId: number;
    }): Promise<void>;
    /**
     * Finish callback for accepted barcode brush
     * @param viewId Unique identifier of the BarcodeCount view
     * @param brushJson Brush configuration as JSON string, or null
     * @param trackedBarcodeId Unique identifier of the tracked barcode
     */
    finishBarcodeCountBrushForAcceptedBarcode({ viewId, brushJson, trackedBarcodeId, }: {
        viewId: number;
        brushJson?: string | null;
        trackedBarcodeId: number;
    }): Promise<void>;
    /**
     * Finish callback for rejected barcode brush
     * @param viewId Unique identifier of the BarcodeCount view
     * @param brushJson Brush configuration as JSON string, or null
     * @param trackedBarcodeId Unique identifier of the tracked barcode
     */
    finishBarcodeCountBrushForRejectedBarcode({ viewId, brushJson, trackedBarcodeId, }: {
        viewId: number;
        brushJson?: string | null;
        trackedBarcodeId: number;
    }): Promise<void>;
    /**
     * Finish callback for recognized barcode icon
     * @param viewId Unique identifier of the BarcodeCount view
     * @param iconJson BarcodeCountIcon configuration as JSON string, or null
     * @param trackedBarcodeId Unique identifier of the tracked barcode
     */
    finishBarcodeCountIconForRecognizedBarcode({ viewId, iconJson, trackedBarcodeId, }: {
        viewId: number;
        iconJson?: string | null;
        trackedBarcodeId: number;
    }): Promise<void>;
    /**
     * Finish callback for recognized barcode not in list icon
     * @param viewId Unique identifier of the BarcodeCount view
     * @param iconJson BarcodeCountIcon configuration as JSON string, or null
     * @param trackedBarcodeId Unique identifier of the tracked barcode
     */
    finishBarcodeCountIconForRecognizedBarcodeNotInList({ viewId, iconJson, trackedBarcodeId, }: {
        viewId: number;
        iconJson?: string | null;
        trackedBarcodeId: number;
    }): Promise<void>;
    /**
     * Finish callback for accepted barcode icon
     * @param viewId Unique identifier of the BarcodeCount view
     * @param iconJson BarcodeCountIcon configuration as JSON string, or null
     * @param trackedBarcodeId Unique identifier of the tracked barcode
     */
    finishBarcodeCountIconForAcceptedBarcode({ viewId, iconJson, trackedBarcodeId, }: {
        viewId: number;
        iconJson?: string | null;
        trackedBarcodeId: number;
    }): Promise<void>;
    /**
     * Finish callback for rejected barcode icon
     * @param viewId Unique identifier of the BarcodeCount view
     * @param iconJson BarcodeCountIcon configuration as JSON string, or null
     * @param trackedBarcodeId Unique identifier of the tracked barcode
     */
    finishBarcodeCountIconForRejectedBarcode({ viewId, iconJson, trackedBarcodeId, }: {
        viewId: number;
        iconJson?: string | null;
        trackedBarcodeId: number;
    }): Promise<void>;
    /**
     * Shows the BarcodeCount view
     * @param viewId Unique identifier of the BarcodeCount view
     */
    showBarcodeCountView({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Hides the BarcodeCount view
     * @param viewId Unique identifier of the BarcodeCount view
     */
    hideBarcodeCountView({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Enables hardware trigger for BarcodeCount
     * @param viewId Unique identifier of the BarcodeCount view
     * @param hardwareTriggerKeyCode Key code for hardware trigger, or null to disable
     */
    enableBarcodeCountHardwareTrigger({ viewId, hardwareTriggerKeyCode, }: {
        viewId: number;
        hardwareTriggerKeyCode?: number | null;
    }): Promise<void>;
    /**
     * Updates the BarcodeCount mode configuration
     * @param viewId Unique identifier of the BarcodeCount view
     * @param barcodeCountJson BarcodeCount mode configuration as JSON string
     */
    updateBarcodeCountMode({ viewId, barcodeCountJson, }: {
        viewId: number;
        barcodeCountJson: string;
    }): Promise<void>;
    /**
     * Resets the BarcodeCount mode
     * @param viewId Unique identifier of the BarcodeCount view
     */
    resetBarcodeCount({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Register persistent event listener for BarcodeCount mode events
     * @param viewId Unique identifier of the BarcodeCount view
     */
    registerBarcodeCountListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for BarcodeCount mode events
     * @param viewId Unique identifier of the BarcodeCount view
     */
    unregisterBarcodeCountListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Finish callback for BarcodeCount on scan event
     * @param viewId Unique identifier of the BarcodeCount view
     */
    finishBarcodeCountOnScan({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Finish callback for BarcodeCount on session updated event
     * @param viewId Unique identifier of the BarcodeCount view
     */
    finishBarcodeCountOnSessionUpdated({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Starts the BarcodeCount scanning phase
     * @param viewId Unique identifier of the BarcodeCount view
     */
    startBarcodeCountScanningPhase({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Ends the BarcodeCount scanning phase
     * @param viewId Unique identifier of the BarcodeCount view
     */
    endBarcodeCountScanningPhase({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Sets the capture list for BarcodeCount
     * @param viewId Unique identifier of the BarcodeCount view
     * @param captureListJson Capture list configuration as JSON string
     * @param hasTransformer Whether the capture list has a transformer
     */
    setBarcodeCountCaptureList({ viewId, captureListJson, hasTransformer, }: {
        viewId: number;
        captureListJson: string;
        hasTransformer: boolean;
    }): Promise<void>;
    /**
     * Submits the barcode data transformer result for BarcodeCount
     * @param viewId Unique identifier of the BarcodeCount view
     * @param transformedData Transformed barcode data string, or null
     */
    submitBarcodeDataTransformerResult({ viewId, transformedData, }: {
        viewId: number;
        transformedData?: string | null;
    }): Promise<void>;
    /**
     * Sets the enabled state of the BarcodeCount mode
     * @param viewId Unique identifier of the BarcodeCount view
     * @param isEnabled Whether the mode should be enabled
     */
    setBarcodeCountModeEnabledState({ viewId, isEnabled, }: {
        viewId: number;
        isEnabled: boolean;
    }): Promise<void>;
    /**
     * Updates the BarcodeCount feedback configuration
     * @param viewId Unique identifier of the BarcodeCount view
     * @param feedbackJson Feedback configuration as JSON string
     */
    updateBarcodeCountFeedback({ viewId, feedbackJson, }: {
        viewId: number;
        feedbackJson: string;
    }): Promise<void>;
    /**
     * Resets the BarcodeCount session
     * @param viewId Unique identifier of the BarcodeCount view
     */
    resetBarcodeCountSession({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Gets the BarcodeCount spatial map
     * @param viewId Unique identifier of the BarcodeCount view
     */
    getBarcodeCountSpatialMap({ viewId }: {
        viewId: number;
    }): Promise<Record<string, any> | null>;
    /**
     * Gets the BarcodeCount spatial map with hints for expected grid dimensions
     * @param viewId Unique identifier of the BarcodeCount view
     * @param expectedNumberOfRows Expected number of rows in the spatial grid
     * @param expectedNumberOfColumns Expected number of columns in the spatial grid
     */
    getBarcodeCountSpatialMapWithHints({ viewId, expectedNumberOfRows, expectedNumberOfColumns, }: {
        viewId: number;
        expectedNumberOfRows: number;
        expectedNumberOfColumns: number;
    }): Promise<Record<string, any> | null>;
    /**
     * Adds a barcode count status provider
     * @param viewId Unique identifier of the BarcodeCount view
     */
    addBarcodeCountStatusProvider({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Submits the barcode count status provider callback
     * @param viewId Unique identifier of the BarcodeCount view
     * @param statusJson The status json
     */
    submitBarcodeCountStatusProviderCallback({ viewId, statusJson, }: {
        viewId: number;
        statusJson: string;
    }): Promise<void>;
    /**
     * Updates the SparkScan view configuration
     * @param viewId Unique identifier of the SparkScan view
     * @param viewJson SparkScan view configuration as JSON string
     */
    updateSparkScanView({ viewId, viewJson }: {
        viewId: number;
        viewJson: object | string;
    }): Promise<void>;
    /**
     * Shows the SparkScan view
     * @param viewId Unique identifier of the SparkScan view
     */
    showSparkScanView({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Hides the SparkScan view
     * @param viewId Unique identifier of the SparkScan view
     */
    hideSparkScanView({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Disposes the SparkScan view
     * @param viewId Unique identifier of the SparkScan view
     */
    disposeSparkScanView({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Shows a toast message in the SparkScan view
     * @param viewId Unique identifier of the SparkScan view
     * @param text Text to display in the toast
     */
    showSparkScanViewToast({ viewId, text }: {
        viewId: number;
        text: string;
    }): Promise<void>;
    /**
     * Stops scanning in the SparkScan view
     * @param viewId Unique identifier of the SparkScan view
     */
    stopSparkScanViewScanning({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Handles host pause event for SparkScan view
     * @param viewId Unique identifier of the SparkScan view
     */
    onHostPauseSparkScanView({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Starts scanning in the SparkScan view
     * @param viewId Unique identifier of the SparkScan view
     */
    startSparkScanViewScanning({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Pauses scanning in the SparkScan view
     * @param viewId Unique identifier of the SparkScan view
     */
    pauseSparkScanViewScanning({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Prepares the SparkScan view for scanning
     * @param viewId Unique identifier of the SparkScan view
     */
    prepareSparkScanViewScanning({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Register persistent event listener for SparkScan feedback delegate events
     * @param viewId Unique identifier of the SparkScan view
     */
    registerSparkScanFeedbackDelegateForEvents({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for SparkScan feedback delegate events
     * @param viewId Unique identifier of the SparkScan view
     */
    unregisterSparkScanFeedbackDelegateForEvents({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Submits feedback for a scanned barcode
     * @param viewId Unique identifier of the SparkScan view
     * @param feedbackJson Feedback configuration as JSON string
     */
    submitSparkScanFeedbackForBarcode({ viewId, feedbackJson, }: {
        viewId: number;
        feedbackJson?: string | null;
    }): Promise<void>;
    /**
     * Submits feedback for a scanned item
     * @param viewId Unique identifier of the SparkScan view
     * @param feedbackJson Feedback configuration as JSON string
     */
    submitSparkScanFeedbackForScannedItem({ viewId, feedbackJson, }: {
        viewId: number;
        feedbackJson?: string | null;
    }): Promise<void>;
    /**
     * Register persistent event listener for SparkScan view events
     * @param viewId Unique identifier of the SparkScan view
     */
    registerSparkScanViewListenerEvents({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for SparkScan view events
     * @param viewId Unique identifier of the SparkScan view
     */
    unregisterSparkScanViewListenerEvents({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Resets the SparkScan session
     * @param viewId Unique identifier of the SparkScan view
     */
    resetSparkScanSession({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Returns the SparkScanLicenseInfo JSON, or null when not available
     * @param viewId Unique identifier of the SparkScan view
     */
    getSparkScanLicenseInfo({ viewId }: {
        viewId: number;
    }): Promise<string>;
    /**
     * Updates the SparkScan mode configuration
     * @param viewId Unique identifier of the SparkScan view
     * @param modeJson SparkScan mode configuration as JSON string
     */
    updateSparkScanMode({ viewId, modeJson }: {
        viewId: number;
        modeJson: string;
    }): Promise<void>;
    /**
     * Register persistent event listener for SparkScan mode events
     * @param viewId Unique identifier of the SparkScan view
     */
    registerSparkScanListenerForEvents({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for SparkScan mode events
     * @param viewId Unique identifier of the SparkScan view
     */
    unregisterSparkScanListenerForEvents({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Finish callback for SparkScan did update session event
     * @param viewId Unique identifier of the SparkScan view
     * @param isEnabled Whether the mode is enabled
     */
    finishSparkScanDidUpdateSession({ viewId, isEnabled, }: {
        viewId: number;
        isEnabled: boolean;
    }): Promise<void>;
    /**
     * Finish callback for SparkScan did scan event
     * @param viewId Unique identifier of the SparkScan view
     * @param isEnabled Whether the mode is enabled
     */
    finishSparkScanDidScan({ viewId, isEnabled }: {
        viewId: number;
        isEnabled: boolean;
    }): Promise<void>;
    /**
     * Sets the enabled state of the SparkScan mode
     * @param viewId Unique identifier of the SparkScan view
     * @param isEnabled Whether the mode should be enabled
     */
    setSparkScanModeEnabledState({ viewId, isEnabled, }: {
        viewId: number;
        isEnabled: boolean;
    }): Promise<void>;
    /**
     * Starts the BarcodePick view scanning
     * @param viewId Unique identifier of the BarcodePick view
     */
    pickViewStart({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Freezes the BarcodePick view scanning
     * @param viewId Unique identifier of the BarcodePick view
     */
    pickViewFreeze({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Stops the BarcodePick view scanning
     * @param viewId Unique identifier of the BarcodePick view
     */
    pickViewStop({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Resets the BarcodePick view
     * @param viewId Unique identifier of the BarcodePick view
     */
    pickViewReset({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Pauses the BarcodePick view scanning
     * @param viewId Unique identifier of the BarcodePick view
     */
    pickViewPause({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Resumes the BarcodePick view scanning
     * @param viewId Unique identifier of the BarcodePick view
     */
    pickViewResume({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Finish callback for pick action
     * @param viewId Unique identifier of the BarcodePick view
     * @param itemData Item data
     * @param actionResult Pick action result
     */
    finishPickAction({ viewId, itemData, actionResult, }: {
        viewId: number;
        itemData: string;
        actionResult: boolean;
    }): Promise<void>;
    /**
     * Updates the BarcodePick view configuration
     * @param viewId Unique identifier of the BarcodePick view
     * @param json BarcodePick view configuration as JSON string
     */
    updatePickView({ viewId, json }: {
        viewId: number;
        json: string;
    }): Promise<void>;
    /**
     * Register persistent event listener for BarcodePick mode events
     * @param viewId Unique identifier of the BarcodePick view
     */
    addBarcodePickListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for BarcodePick mode events
     * @param viewId Unique identifier of the BarcodePick view
     */
    removeBarcodePickListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Register persistent event listener for BarcodePick scanning events
     * @param viewId Unique identifier of the BarcodePick view
     */
    addBarcodePickScanningListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for BarcodePick scanning events
     * @param viewId Unique identifier of the BarcodePick view
     */
    removeBarcodePickScanningListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Register persistent event listener for BarcodePick action events
     * @param viewId Unique identifier of the BarcodePick view
     */
    addPickActionListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for BarcodePick action events
     * @param viewId Unique identifier of the BarcodePick view
     */
    removePickActionListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Register persistent event listener for BarcodePick view lifecycle events
     * @param viewId Unique identifier of the BarcodePick view
     */
    addPickViewListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for BarcodePick view lifecycle events
     * @param viewId Unique identifier of the BarcodePick view
     */
    removePickViewListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Register persistent event listener for BarcodePick view UI events
     * @param viewId Unique identifier of the BarcodePick view
     */
    registerBarcodePickViewUiListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for BarcodePick view UI events
     * @param viewId Unique identifier of the BarcodePick view
     */
    unregisterBarcodePickViewUiListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Register persistent event listener for product identifier provider events
     * @param viewId Unique identifier of the BarcodePick view
     */
    registerOnProductIdentifierForItemsListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for product identifier provider events
     * @param viewId Unique identifier of the BarcodePick view
     */
    unregisterOnProductIdentifierForItemsListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Register persistent event listener for highlight style async provider events
     * @param viewId Unique identifier of the BarcodePick view
     */
    registerHighlightStyleAsyncProviderListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for highlight style async provider events
     * @param viewId Unique identifier of the BarcodePick view
     */
    unregisterHighlightStyleAsyncProviderListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Register persistent event listener for custom view provider events
     * @param viewId Unique identifier of the BarcodePick view
     */
    registerCustomViewProviderListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for custom view provider events
     * @param viewId Unique identifier of the BarcodePick view
     */
    unregisterCustomViewProviderListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Finish callback for product identifier for items
     * @param viewId Unique identifier of the BarcodePick view
     * @param itemsJson Product items as JSON string
     */
    finishOnProductIdentifierForItems({ viewId, itemsJson, }: {
        viewId: number;
        itemsJson: string;
    }): Promise<void>;
    /**
     * Finish callback for barcode pick view highlight style custom view provider view for request
     * @param viewId Unique identifier of the BarcodePick view
     * @param requestId Request id
     * @param responseJson Response as JSON string
     */
    finishBarcodePickViewHighlightStyleCustomViewProviderViewForRequest({ viewId, requestId, responseJson, }: {
        viewId: number;
        requestId: number;
        responseJson?: string | null;
    }): Promise<void>;
    /**
     * Finish callback for barcode pick view highlight style async provider style for request
     * @param viewId Unique identifier of the BarcodePick view
     * @param requestId Request id
     * @param responseJson Response as Map<String, dynamic>
     */
    finishBarcodePickViewHighlightStyleAsyncProviderStyleForRequest({ viewId, requestId, responseJson, }: {
        viewId: number;
        requestId: number;
        responseJson?: string | null;
    }): Promise<void>;
    /**
     * Selects an item with the specified data
     * @param viewId Unique identifier of the BarcodePick view
     * @param data Item data to select
     */
    selectItemWithData({ viewId, data }: {
        viewId: number;
        data: string;
    }): Promise<string>;
    /**
     * Confirms the action for an item with the specified data
     * @param viewId Unique identifier of the BarcodePick view
     * @param data Item data to confirm action for
     */
    confirmActionForItemWithData({ viewId, data }: {
        viewId: number;
        data: string;
    }): Promise<void>;
    /**
     * Cancels the action for an item with the specified data
     * @param viewId Unique identifier of the BarcodePick view
     * @param data Item data to cancel action for
     */
    cancelActionForItemWithData({ viewId, data }: {
        viewId: number;
        data: string;
    }): Promise<void>;
    /**
     * Updates the product list for the BarcodePick view
     * @param viewId Unique identifier of the BarcodePick view
     * @param productsJson JSON string representing the updated product list
     */
    updateProductList({ viewId, productsJson }: {
        viewId: number;
        productsJson: string;
    }): Promise<void>;
    /**
     * Register persistent event listener for BarcodeFind view UI events
     * @param viewId Unique identifier of the BarcodeFind view
     */
    registerBarcodeFindViewListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for BarcodeFind view UI events
     * @param viewId Unique identifier of the BarcodeFind view
     */
    unregisterBarcodeFindViewListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Updates the BarcodeFind view configuration
     * @param viewId Unique identifier of the BarcodeFind view
     * @param barcodeFindViewJson BarcodeFind view configuration as JSON string
     */
    updateFindView({ viewId, barcodeFindViewJson, }: {
        viewId: number;
        barcodeFindViewJson: string;
    }): Promise<void>;
    /**
     * Starts searching in the BarcodeFind view
     * @param viewId Unique identifier of the BarcodeFind view
     */
    barcodeFindViewStartSearching({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Stops searching in the BarcodeFind view
     * @param viewId Unique identifier of the BarcodeFind view
     */
    barcodeFindViewStopSearching({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Pauses searching in the BarcodeFind view
     * @param viewId Unique identifier of the BarcodeFind view
     */
    barcodeFindViewPauseSearching({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Shows the BarcodeFind view
     * @param viewId Unique identifier of the BarcodeFind view
     */
    showFindView({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Hides the BarcodeFind view
     * @param viewId Unique identifier of the BarcodeFind view
     */
    hideFindView({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Updates the BarcodeFind mode configuration
     * @param viewId Unique identifier of the BarcodeFind view
     * @param barcodeFindJson BarcodeFind mode configuration as JSON string
     */
    updateFindMode({ viewId, barcodeFindJson }: {
        viewId: number;
        barcodeFindJson: string;
    }): Promise<void>;
    /**
     * Starts the BarcodeFind mode
     * @param viewId Unique identifier of the BarcodeFind view
     */
    barcodeFindModeStart({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Pauses the BarcodeFind mode
     * @param viewId Unique identifier of the BarcodeFind view
     */
    barcodeFindModePause({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Stops the BarcodeFind mode
     * @param viewId Unique identifier of the BarcodeFind view
     */
    barcodeFindModeStop({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Sets the item list for BarcodeFind
     * @param viewId Unique identifier of the BarcodeFind view
     * @param itemsJson Item list as JSON string
     */
    barcodeFindSetItemList({ viewId, itemsJson }: {
        viewId: number;
        itemsJson: string;
    }): Promise<void>;
    /**
     * Register persistent event listener for BarcodeFind mode events
     * @param viewId Unique identifier of the BarcodeFind view
     */
    registerBarcodeFindListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for BarcodeFind mode events
     * @param viewId Unique identifier of the BarcodeFind view
     */
    unregisterBarcodeFindListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Sets the enabled state of the BarcodeFind mode
     * @param viewId Unique identifier of the BarcodeFind view
     * @param enabled Whether the mode should be enabled
     */
    setBarcodeFindModeEnabledState({ viewId, enabled, }: {
        viewId: number;
        enabled: boolean;
    }): Promise<void>;
    /**
     * Sets the barcode transformer for BarcodeFind
     * @param viewId Unique identifier of the BarcodeFind view
     */
    setBarcodeTransformer({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unsets the barcode transformer for BarcodeFind
     * @param viewId Unique identifier of the BarcodeFind view
     */
    unsetBarcodeTransformer({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Submits the barcode transformer result
     * @param viewId Unique identifier of the BarcodeFind view
     * @param transformedBarcode Transformed barcode string, or null
     */
    submitBarcodeFindTransformerResult({ viewId, transformedBarcode, }: {
        viewId: number;
        transformedBarcode?: string | null;
    }): Promise<void>;
    /**
     * Updates the BarcodeFind feedback configuration
     * @param viewId Unique identifier of the BarcodeFind view
     * @param feedbackJson Feedback configuration as JSON string
     */
    updateBarcodeFindFeedback({ viewId, feedbackJson, }: {
        viewId: number;
        feedbackJson: string;
    }): Promise<void>;
    /**
     * Register persistent event listener for BarcodeAr view UI events
     * @param viewId Unique identifier of the BarcodeAr view
     */
    registerBarcodeArViewUiListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for BarcodeAr view UI events
     * @param viewId Unique identifier of the BarcodeAr view
     */
    unregisterBarcodeArViewUiListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Register persistent event listener for BarcodeAr annotation provider events
     * @param viewId Unique identifier of the BarcodeAr view
     */
    registerBarcodeArAnnotationProvider({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for BarcodeAr annotation provider events
     * @param viewId Unique identifier of the BarcodeAr view
     */
    unregisterBarcodeArAnnotationProvider({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Register persistent event listener for BarcodeAr highlight provider events
     * @param viewId Unique identifier of the BarcodeAr view
     */
    registerBarcodeArHighlightProvider({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for BarcodeAr highlight provider events
     * @param viewId Unique identifier of the BarcodeAr view
     */
    unregisterBarcodeArHighlightProvider({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Register persistent event callback for BarcodeAr filter events
     * @param viewId Unique identifier of the BarcodeAr view
     */
    registerBarcodeArFilter({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event callback for BarcodeAr filter events
     * @param viewId Unique identifier of the BarcodeAr view
     */
    unregisterBarcodeArFilter({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Finish callback for BarcodeAr filter barcodes
     * @param viewId Unique identifier of the BarcodeAr view
     * @param filteredBarcodesJson JSON array of barcode IDs to keep
     */
    finishBarcodeArFilterBarcodes({ viewId, filteredBarcodesJson, }: {
        viewId: number;
        filteredBarcodesJson: string;
    }): Promise<void>;
    /**
     * Handles custom highlight click event
     * @param viewId Unique identifier of the BarcodeAr view
     * @param barcodeId Barcode identifier
     */
    onCustomHighlightClicked({ viewId, barcodeId }: {
        viewId: number;
        barcodeId: string;
    }): Promise<void>;
    /**
     * Starts the BarcodeAr view
     * @param viewId Unique identifier of the BarcodeAr view
     */
    barcodeArViewStart({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Stops the BarcodeAr view
     * @param viewId Unique identifier of the BarcodeAr view
     */
    barcodeArViewStop({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Pauses the BarcodeAr view
     * @param viewId Unique identifier of the BarcodeAr view
     */
    barcodeArViewPause({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Shows the BarcodeAr view
     * @param viewId Unique identifier of the BarcodeAr view
     */
    showBarcodeArView({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Hides the BarcodeAr view
     * @param viewId Unique identifier of the BarcodeAr view
     */
    hideBarcodeArView({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Resets the BarcodeAr view
     * @param viewId Unique identifier of the BarcodeAr view
     */
    barcodeArViewReset({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Updates the BarcodeAr view configuration
     * @param viewId Unique identifier of the BarcodeAr view
     * @param viewJson BarcodeAr view configuration as JSON string
     */
    updateBarcodeArView({ viewId, viewJson }: {
        viewId: number;
        viewJson: object | string;
    }): Promise<void>;
    /**
     * Finish callback for BarcodeAr annotation for barcode
     * @param viewId Unique identifier of the BarcodeAr view
     * @param annotationJson Annotation configuration as JSON string
     */
    finishBarcodeArAnnotationForBarcode({ viewId, annotationJson, }: {
        viewId: number;
        annotationJson: string;
    }): Promise<void>;
    /**
     * Finish callback for BarcodeAr highlight for barcode
     * @param viewId Unique identifier of the BarcodeAr view
     * @param highlightJson Highlight configuration as JSON string
     */
    finishBarcodeArHighlightForBarcode({ viewId, highlightJson, }: {
        viewId: number;
        highlightJson: string;
    }): Promise<void>;
    /**
     * Updates the BarcodeAr highlight
     * @param viewId Unique identifier of the BarcodeAr view
     * @param highlightJson Highlight configuration as JSON string
     */
    updateBarcodeArHighlight({ viewId, highlightJson, }: {
        viewId: number;
        highlightJson: string;
    }): Promise<void>;
    /**
     * Updates the BarcodeAr annotation
     * @param viewId Unique identifier of the BarcodeAr view
     * @param annotationJson Annotation configuration as JSON string
     */
    updateBarcodeArAnnotation({ viewId, annotationJson, }: {
        viewId: number;
        annotationJson: string;
    }): Promise<void>;
    /**
     * Updates the BarcodeAr popover button at specific index
     * @param viewId Unique identifier of the BarcodeAr view
     * @param updateJson Update configuration as JSON string
     */
    updateBarcodeArPopoverButtonAtIndex({ viewId, updateJson, }: {
        viewId: number;
        updateJson: string;
    }): Promise<void>;
    /**
     * Applies BarcodeAr settings
     * @param viewId Unique identifier of the BarcodeAr view
     * @param settings Settings as JSON string
     */
    applyBarcodeArSettings({ viewId, settings }: {
        viewId: number;
        settings: string;
    }): Promise<void>;
    /**
     * Updates the BarcodeAr mode configuration
     * @param viewId Unique identifier of the BarcodeAr view
     * @param modeJson BarcodeAr mode configuration as JSON string
     */
    updateBarcodeArMode({ viewId, modeJson }: {
        viewId: number;
        modeJson: string;
    }): Promise<void>;
    /**
     * Updates the BarcodeAr feedback configuration
     * @param viewId Unique identifier of the BarcodeAr view
     * @param feedbackJson Feedback configuration as JSON string
     */
    updateBarcodeArFeedback({ viewId, feedbackJson, }: {
        viewId: number;
        feedbackJson: string;
    }): Promise<void>;
    /**
     * Register persistent event listener for BarcodeAr mode events
     * @param viewId Unique identifier of the BarcodeAr view
     */
    registerBarcodeArListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for BarcodeAr mode events
     * @param viewId Unique identifier of the BarcodeAr view
     */
    unregisterBarcodeArListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Finish callback for BarcodeAr did update session event
     * @param viewId Unique identifier of the BarcodeAr view
     */
    finishBarcodeArOnDidUpdateSession({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Resets the BarcodeAr session
     * @param viewId Unique identifier of the BarcodeAr view
     */
    resetBarcodeArSession({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Creates a Barcode instance from BarcodeInfo
     * @param barcodeInfoJson Barcode information as JSON string
     */
    createFromBarcodeInfo({ barcodeInfoJson }: {
        barcodeInfoJson: string;
    }): Promise<string>;
}

declare enum BarcodeArViewEvents {
    didTapHighlightForBarcode = "BarcodeArViewUiListener.didTapHighlightForBarcode"
}
declare enum BarcodeArHighlightProviderEvents {
    highlightForBarcode = "BarcodeArHighlightProvider.highlightForBarcode"
}
declare enum BarcodeArHighlightLifecycleEvents {
    create = "BarcodeArCustomHighlight.create",
    update = "BarcodeArCustomHighlight.update",
    hide = "BarcodeArCustomHighlight.hide",
    show = "BarcodeArCustomHighlight.show",
    dispose = "BarcodeArCustomHighlight.dispose"
}
declare enum BarcodeArAnnotationLifecycleEvents {
    create = "BarcodeArCustomAnnotation.create",
    update = "BarcodeArCustomAnnotation.update",
    hide = "BarcodeArCustomAnnotation.hide",
    show = "BarcodeArCustomAnnotation.show",
    dispose = "BarcodeArCustomAnnotation.dispose"
}
declare enum BarcodeArAnnotationProviderEvents {
    annotationForBarcode = "BarcodeArAnnotationProvider.annotationForBarcode",
    didTapInfoAnnotationRightIconEvent = "BarcodeArInfoAnnotationListener.didTapInfoAnnotationRightIcon",
    didTapInfoAnnotationLeftIconEvent = "BarcodeArInfoAnnotationListener.didTapInfoAnnotationLeftIcon",
    didTapInfoAnnotationEvent = "BarcodeArInfoAnnotationListener.didTapInfoAnnotation",
    didTapInfoAnnotationHeaderEvent = "BarcodeArInfoAnnotationListener.didTapInfoAnnotationHeader",
    didTapInfoAnnotationFooterEvent = "BarcodeArInfoAnnotationListener.didTapInfoAnnotationFooter",
    didTapPopoverEvent = "BarcodeArPopoverAnnotationListener.didTapPopover",
    didTapPopoverButtonEvent = "BarcodeArPopoverAnnotationListener.didTapPopoverButton"
}
declare enum BarcodeArFilterEvents {
    filterBarcodes = "BarcodeArFilter.filterBarcodes"
}
declare enum BarcodeArEvents {
    didUpdateSession = "BarcodeArListener.didUpdateSession"
}
interface BarcodeArViewProxy extends BarcodeProxy {
    $createBarcodeArView({ viewId, viewJson }: {
        viewId: number;
        viewJson: string;
    }): Promise<void>;
    $removeBarcodeArView({ viewId }: {
        viewId: number;
    }): Promise<void>;
    $setArViewPositionAndSize({ top, left, width, height, shouldBeUnderWebView, }: {
        top: number;
        left: number;
        width: number;
        height: number;
        shouldBeUnderWebView: boolean;
    }): Promise<void>;
}
declare class BarcodeArViewController extends BaseController<BarcodeArViewProxy> {
    private baseView;
    private adapter;
    private barcodeAr;
    private eventHandlers;
    private isModeListenerRegistered;
    private isUiListenerRegistered;
    private isAnnotationProviderRegistered;
    private isHighlightProviderRegistered;
    private isBarcodeFilterRegistered;
    static forBarcodeArView(barcodeAr: BarcodeAr, baseView: BaseBarcodeArView): BarcodeArViewController;
    private constructor();
    dispose(): Promise<void>;
    createNativeView(): Promise<void>;
    setPositionAndSize(top: number, left: number, width: number, height: number, shouldBeUnderWebView: boolean): Promise<void>;
    registerModeListener(): Promise<void>;
    unregisterModeListener(): Promise<void>;
    registerUiListener(): Promise<void>;
    unregisterUiListener(): Promise<void>;
    registerAnnotationProvider(): Promise<void>;
    unregisterAnnotationProvider(): Promise<void>;
    registerHighlightProvider(): Promise<void>;
    registerCustomHighlightCreateEvent(onCreate: (barcode: Barcode, barcodeId: string) => void): () => void;
    registerCustomHighlightUpdateEvent(onUpdate: (centerPosition: Point, barcodeId: string) => void, barcodeId: string): () => void;
    registerCustomHighlightHideEvent(onHide: (barcodeId: string) => void, barcodeId: string): () => void;
    registerCustomHighlightShowEvent(onShow: (barcodeId: string) => void, barcodeId: string): () => void;
    registerCustomHighlightDisposeEvent(onDispose: (barcodeId: string) => void): () => void;
    subscribeForCustomHighlightEvents(): void;
    unsubscribeFromCustomHighlightEvents(): void;
    onCustomHighlightClicked(barcodeId: string): Promise<void>;
    registerCustomAnnotationCreateEvent(onCreate: (barcode: Barcode, barcodeId: string) => void): () => void;
    registerCustomAnnotationUpdateEvent(onUpdate: (centerPosition: Point, barcodeId: string) => void, barcodeId: string): () => void;
    registerCustomAnnotationHideEvent(onHide: (barcodeId: string) => void, barcodeId: string): () => void;
    registerCustomAnnotationShowEvent(onShow: (barcodeId: string) => void, barcodeId: string): () => void;
    registerCustomAnnotationDisposeEvent(onDispose: (barcodeId: string) => void): () => void;
    subscribeForCustomAnnotationEvents(): void;
    unsubscribeFromCustomAnnotationEvents(): void;
    unregisterHighlightProvider(): Promise<void>;
    registerBarcodeFilter(): Promise<void>;
    unregisterBarcodeFilter(): Promise<void>;
    start(): Promise<void>;
    stop(): Promise<void>;
    pause(): Promise<void>;
    show(): Promise<void>;
    hide(): Promise<void>;
    update(): Promise<void>;
    removeNativeView(): Promise<void>;
    reset(): Promise<void>;
    updateMode(): Promise<void>;
    applyNewSettings(settings: BarcodeArSettings): Promise<void>;
    updateFeedback(feedbackJson: string): Promise<void>;
    private initialize;
    private createView;
    private get isViewCreated();
    private handleDidUpdateSessionWrapper;
    private handleDidTapHighlightForBarcodeWrapper;
    private handleAnnotationForBarcodeWrapper;
    private handleDidTapPopoverEventWrapper;
    private handleDidTapPopoverButtonEventWrapper;
    private handleDidTapInfoAnnotationRightIconEventWrapper;
    private handleDidTapInfoAnnotationLeftIconEventWrapper;
    private handleDidTapInfoAnnotationEventWrapper;
    private handleDidTapInfoAnnotationHeaderEventWrapper;
    private handleDidTapInfoAnnotationFooterEventWrapper;
    private handleHighlightForBarcodeWrapper;
    private handleFilterBarcodesWrapper;
}

declare class BarcodeArFeedback extends DefaultSerializeable {
    private static get barcodeArDefaults();
    static get defaultFeedback(): BarcodeArFeedback;
    private _scanned;
    private _tapped;
    private controller;
    private static fromJSON;
    get scanned(): Feedback;
    set scanned(scanned: Feedback);
    get tapped(): Feedback;
    set tapped(tapped: Feedback);
    constructor();
    private updateFeedback;
}
interface BarcodeArFeedbackJSON {
    scanned: Feedback;
    tapped: Feedback;
}
interface PrivateBarcodeArFeedback {
    controller: BarcodeArViewController | null;
}

interface BarcodeArFilter {
    filterBarcodes(barcodes: Barcode[]): Promise<Barcode[]>;
}

declare class BarcodeArSession extends DefaultSerializeable {
    private _addedTrackedBarcodes;
    private _removedTrackedBarcodes;
    private _trackedBarcodes;
    private sessionController;
    private static fromJSON;
    private constructor();
    get addedTrackedBarcodes(): TrackedBarcode[];
    get removedTrackedBarcodes(): string[];
    get trackedBarcodes(): {
        [key: string]: TrackedBarcode;
    };
    reset(): Promise<void>;
}
interface BarcodeArSessionJSON {
    addedTrackedBarcodes: TrackedBarcodeJSON[];
    removedTrackedBarcodes: string[];
    allTrackedBarcodes: {
        [key: string]: TrackedBarcodeJSON;
    };
    frameSequenceId?: number;
}
interface PrivateBarcodeArSession {
    fromJSON(json: string): BarcodeArSession;
    frameId: string;
}

interface BarcodeArListener {
    didUpdateSession?(barcodeAr: BarcodeAr, session: BarcodeArSession, getFrameData: () => Promise<FrameData>): Promise<void>;
}

declare class BarcodeAr extends DefaultSerializeable {
    private type;
    private privateContext;
    private _feedback;
    private _settings;
    private listeners;
    private _barcodeFilter;
    private _controller;
    private get controller();
    private set controller(value);
    private static get barcodeArDefaults();
    static createRecommendedCameraSettings(): CameraSettings;
    constructor(settings: BarcodeArSettings);
    applySettings(settings: BarcodeArSettings): Promise<void>;
    addListener(listener: BarcodeArListener): void;
    removeListener(listener: BarcodeArListener): void;
    setBarcodeFilter(filter: BarcodeArFilter | null): Promise<void>;
    toJSON(): object;
    private checkAndSubscribeListeners;
    private checkAndUnsubscribeListeners;
    private subscribeNativeListeners;
    private unsubscribeNativeListeners;
    private didChange;
    private get _context();
    private set _context(value);
    get feedback(): BarcodeArFeedback;
    set feedback(feedback: BarcodeArFeedback);
}
interface PrivateBarcodeAr {
    _context: DataCaptureContext | null;
    listeners: BarcodeArListener[];
    isInListenerCallback: boolean;
    didChange: () => Promise<void>;
    subscribeNativeListeners: () => void;
    unsubscribeNativeListeners: () => void;
    controller: BarcodeArViewController | null;
}

declare enum BarcodeArCircleHighlightPreset {
    Dot = "dot",
    Icon = "icon"
}

declare class BarcodeArCircleHighlight extends Observable implements BarcodeArHighlight {
    private static get barcodeArDefaults();
    private _type;
    private _barcode;
    private _brush;
    private _icon;
    private _preset;
    private _size;
    private _isPulsing;
    constructor(barcode: Barcode, preset: BarcodeArCircleHighlightPreset);
    get barcode(): Barcode;
    get brush(): Brush;
    set brush(brush: Brush);
    get icon(): ScanditIcon | null;
    set icon(value: ScanditIcon | null);
    get size(): number;
    set size(value: number);
    get isPulsing(): boolean;
    set isPulsing(value: boolean);
}

declare class BarcodeArInfoAnnotationBodyComponent extends Observable {
    private static get barcodeArDefaults();
    private _isRightIconTappable;
    private _isLeftIconTappable;
    private _rightIcon;
    private _leftIcon;
    private _text;
    private _textAlign;
    private _textColor;
    private _textSize;
    private _fontFamily;
    constructor();
    get isRightIconTappable(): boolean;
    set isRightIconTappable(value: boolean);
    get isLeftIconTappable(): boolean;
    set isLeftIconTappable(value: boolean);
    get rightIcon(): ScanditIcon | null;
    set rightIcon(value: ScanditIcon | null);
    get leftIcon(): ScanditIcon | null;
    set leftIcon(value: ScanditIcon | null);
    get text(): string | null;
    set text(value: string | null);
    get textAlign(): TextAlignment;
    set textAlign(value: TextAlignment);
    get textColor(): Color;
    set textColor(value: Color);
    get textSize(): number;
    set textSize(value: number);
    get fontFamily(): FontFamily;
    set fontFamily(value: FontFamily);
}

interface BarcodeArInfoAnnotationListener {
    didTapHeader(annotation: BarcodeArInfoAnnotation): void;
    didTapFooter(annotation: BarcodeArInfoAnnotation): void;
    didTapLeftIcon(annotation: BarcodeArInfoAnnotation, component: BarcodeArInfoAnnotationBodyComponent, componentIndex: number): void;
    didTapRightIcon(annotation: BarcodeArInfoAnnotation, component: BarcodeArInfoAnnotationBodyComponent, componentIndex: number): void;
    didTap(annotation: BarcodeArInfoAnnotation): void;
}

declare class BarcodeArInfoAnnotationHeader extends Observable {
    private static get barcodeArDefaults();
    private _text;
    private _icon;
    private _textSize;
    private _textColor;
    private _backgroundColor;
    private _fontFamily;
    constructor();
    get text(): string | null;
    set text(value: string | null);
    get icon(): ScanditIcon | null;
    set icon(value: ScanditIcon | null);
    get textSize(): number;
    set textSize(value: number);
    get textColor(): Color | null;
    set textColor(value: Color | null);
    get backgroundColor(): Color | null;
    set backgroundColor(value: Color | null);
    get fontFamily(): FontFamily;
    set fontFamily(value: FontFamily);
}

declare class BarcodeArInfoAnnotationFooter extends Observable {
    private static get barcodeArDefaults();
    private _text;
    private _icon;
    private _textSize;
    private _textColor;
    private _backgroundColor;
    private _fontFamily;
    constructor();
    get text(): string | null;
    set text(value: string | null);
    get icon(): ScanditIcon | null;
    set icon(value: ScanditIcon | null);
    get textSize(): number;
    set textSize(value: number);
    get textColor(): Color | null;
    set textColor(value: Color | null);
    get backgroundColor(): Color | null;
    set backgroundColor(value: Color | null);
    get fontFamily(): FontFamily;
    set fontFamily(value: FontFamily);
}

declare enum BarcodeArInfoAnnotationAnchor {
    Top = "top",
    Bottom = "bottom",
    Left = "left",
    Right = "right"
}

declare enum BarcodeArInfoAnnotationWidthPreset {
    Small = "small",
    Medium = "medium",
    Large = "large"
}

declare class BarcodeArInfoAnnotation extends Observable implements BarcodeArAnnotation {
    private static get barcodeArDefaults();
    private _barcode;
    private _type;
    private _annotationTrigger;
    private _anchor;
    private _backgroundColor;
    private _body;
    private _footer;
    private _hasTip;
    private _header;
    private _isEntireAnnotationTappable;
    private _listener;
    private _hasListener;
    private _width;
    constructor(barcode: Barcode);
    get anchor(): BarcodeArInfoAnnotationAnchor;
    set anchor(newValue: BarcodeArInfoAnnotationAnchor);
    get annotationTrigger(): BarcodeArAnnotationTrigger;
    set annotationTrigger(newValue: BarcodeArAnnotationTrigger);
    get backgroundColor(): Color;
    set backgroundColor(newValue: Color);
    get barcode(): Barcode;
    get body(): ReadonlyArray<BarcodeArInfoAnnotationBodyComponent>;
    set body(newValue: ReadonlyArray<BarcodeArInfoAnnotationBodyComponent>);
    get footer(): BarcodeArInfoAnnotationFooter | null;
    private footerChangedListener;
    set footer(newValue: BarcodeArInfoAnnotationFooter | null);
    get hasTip(): boolean;
    set hasTip(newValue: boolean);
    get header(): BarcodeArInfoAnnotationHeader | null;
    private headerChangedListener;
    set header(newValue: BarcodeArInfoAnnotationHeader | null);
    get isEntireAnnotationTappable(): boolean;
    set isEntireAnnotationTappable(newValue: boolean);
    get listener(): BarcodeArInfoAnnotationListener | null;
    set listener(newValue: BarcodeArInfoAnnotationListener | null);
    get width(): BarcodeArInfoAnnotationWidthPreset;
    set width(newValue: BarcodeArInfoAnnotationWidthPreset);
}

declare class BarcodeArResponsiveAnnotation extends Observable implements BarcodeArAnnotation {
    private static get barcodeArDefaults();
    private _barcode;
    private _closeUpAnnotation;
    private _farAwayAnnotation;
    private _threshold;
    private _type;
    private _annotationTrigger;
    constructor(barcode: Barcode, closeUp: BarcodeArInfoAnnotation | null, farAway: BarcodeArInfoAnnotation | null);
    get closeUpAnnotation(): BarcodeArInfoAnnotation | null;
    get farAwayAnnotation(): BarcodeArInfoAnnotation | null;
    get annotationTrigger(): BarcodeArAnnotationTrigger;
    set annotationTrigger(newValue: BarcodeArAnnotationTrigger);
    get barcode(): Barcode;
    set threshold(newValue: number);
    get threshold(): number;
}

declare class BarcodeArPopoverAnnotationButton extends Observable {
    private static get barcodeArDefaults();
    private _textColor;
    private _textSize;
    private _fontFamily;
    private _icon;
    private _text;
    private _enabled;
    constructor(icon: ScanditIcon, text: string);
    get enabled(): boolean;
    set enabled(value: boolean);
    get textColor(): Color;
    set textColor(value: Color);
    get textSize(): number;
    set textSize(value: number);
    get fontFamily(): FontFamily;
    set fontFamily(value: FontFamily);
    get icon(): ScanditIcon;
    get text(): string;
}

interface BarcodeArPopoverAnnotationListener {
    didTapButton?(popover: BarcodeArPopoverAnnotation, button: BarcodeArPopoverAnnotationButton, buttonIndex: number): void;
    didTap?(popover: BarcodeArPopoverAnnotation): void;
}

declare enum BarcodeArPopoverAnnotationAnchor {
    Left = "left",
    Right = "right",
    Bottom = "bottom",
    Top = "top"
}

declare class BarcodeArPopoverAnnotation extends Observable implements BarcodeArAnnotation {
    private static get barcodeArDefaults();
    private _type;
    private _isEntirePopoverTappable;
    private _anchor;
    private _listener;
    private _hasListener;
    private _annotationTrigger;
    private _barcode;
    private _buttons;
    constructor(barcode: Barcode, buttons: BarcodeArPopoverAnnotationButton[]);
    private buttonChangedListener;
    get barcode(): Barcode;
    get isEntirePopoverTappable(): boolean;
    set isEntirePopoverTappable(value: boolean);
    get anchor(): BarcodeArPopoverAnnotationAnchor;
    set anchor(value: BarcodeArPopoverAnnotationAnchor);
    get listener(): BarcodeArPopoverAnnotationListener | null;
    set listener(value: BarcodeArPopoverAnnotationListener | null);
    get annotationTrigger(): BarcodeArAnnotationTrigger;
    set annotationTrigger(value: BarcodeArAnnotationTrigger);
    get buttons(): ReadonlyArray<BarcodeArPopoverAnnotationButton>;
}

declare class BarcodeArRectangleHighlight extends Observable implements BarcodeArHighlight {
    private static get barcodeArDefaults();
    private _barcode;
    private _type;
    private _brush;
    private _icon;
    constructor(barcode: Barcode);
    get barcode(): Barcode;
    get brush(): Brush;
    set brush(brush: Brush);
    get icon(): ScanditIcon | null;
    set icon(icon: ScanditIcon | null);
}

declare enum BarcodeArStatusIconAnnotationAnchor {
    Top = "top",
    Bottom = "bottom",
    Left = "left",
    Right = "right"
}

declare class BarcodeArStatusIconAnnotation extends Observable implements BarcodeArAnnotation {
    private static get barcodeArDefaults();
    private _type;
    private _barcode;
    private _hasTip;
    private _icon;
    private _text;
    private _textColor;
    private _backgroundColor;
    private _annotationTrigger;
    private _anchor;
    constructor(barcode: Barcode);
    get barcode(): Barcode;
    get hasTip(): boolean;
    set hasTip(value: boolean);
    get icon(): ScanditIcon;
    set icon(value: ScanditIcon);
    get text(): string | null;
    set text(value: string | null);
    get textColor(): Color;
    set textColor(value: Color);
    get backgroundColor(): Color;
    set backgroundColor(value: Color);
    get annotationTrigger(): BarcodeArAnnotationTrigger;
    set annotationTrigger(value: BarcodeArAnnotationTrigger);
    get anchor(): BarcodeArStatusIconAnnotationAnchor;
    set anchor(value: BarcodeArStatusIconAnnotationAnchor);
}

declare class BarcodeArSessionController extends BaseController<BarcodeProxy> {
    private viewId;
    private adapter;
    constructor(viewId: number);
    $resetBarcodeArSession(): Promise<void>;
}

interface BarcodeArCircleHighlightDefaults {
    brush: Brush;
    size: number;
}
interface BarcodeArViewDefaults {
    circleHighlightPresets: {
        [key in BarcodeArCircleHighlightPreset]: BarcodeArCircleHighlightDefaults;
    };
    defaultBarcodeArPopoverAnnotationButtonEnabled: boolean;
    defaultBarcodeArPopoverAnnotationButtonTextColor: Color;
    defaultBarcodeArPopoverAnnotationButtonTextSize: number;
    defaultCameraPosition: CameraPosition;
    defaultCameraSwitchControlPosition: Anchor;
    defaultHighlightIcon: ScanditIcon | null;
    defaultHapticsEnabled: boolean;
    defaultInfoAnnotationAnchor: BarcodeArInfoAnnotationAnchor;
    defaultInfoAnnotationBackgroundColor: Color;
    defaultInfoAnnotationBodyElementLeftIcon: ScanditIcon | null;
    defaultInfoAnnotationBodyElementLeftIconTappable: boolean;
    defaultInfoAnnotationBodyElementRightIcon: ScanditIcon | null;
    defaultInfoAnnotationBodyElementRightIconTappable: boolean;
    defaultInfoAnnotationBodyElementStyledText: string | null;
    defaultInfoAnnotationBodyElementText: string | null;
    defaultInfoAnnotationBodyElementTextColor: Color;
    defaultInfoAnnotationBodyElementTextSize: number;
    defaultInfoAnnotationEntireAnnotationTappable: boolean;
    defaultInfoAnnotationFooterBackgroundColor: Color;
    defaultInfoAnnotationFooterIcon: ScanditIcon | null;
    defaultInfoAnnotationFooterText: string | null;
    defaultInfoAnnotationFooterTextColor: Color;
    defaultInfoAnnotationFooterTextSize: number;
    defaultInfoAnnotationHasTip: boolean;
    defaultInfoAnnotationHeaderBackgroundColor: Color;
    defaultInfoAnnotationHeaderIcon: ScanditIcon | null;
    defaultInfoAnnotationHeaderText: string | null;
    defaultInfoAnnotationHeaderTextColor: Color;
    defaultInfoAnnotationHeaderTextSize: number;
    defaultInfoAnnotationTrigger: BarcodeArAnnotationTrigger;
    defaultInfoAnnotationWidth: BarcodeArInfoAnnotationWidthPreset;
    defaultResponsiveAnnotationThreshold: number;
    defaultResponsiveAnnotationTrigger: BarcodeArAnnotationTrigger;
    defaultIsEntirePopoverTappable: boolean;
    defaultPopoverAnnotationAnchor: BarcodeArPopoverAnnotationAnchor;
    defaultPopoverAnnotationTrigger: string;
    defaultRectangleHighlightBrush: Brush;
    defaultShouldShowCameraSwitchControl: boolean;
    defaultShouldShowTorchControl: boolean;
    defaultShouldShowZoomControl: boolean;
    defaultSoundEnabled: boolean;
    defaultStatusIconAnnotationBackgroundColor: Color;
    defaultStatusIconAnnotationHasTip: boolean;
    defaultStatusIconAnnotationIcon: ScanditIcon;
    defaultStatusIconAnnotationText: string | null;
    defaultStatusIconAnnotationTextColor: Color;
    defaultStatusIconAnnotationTrigger: BarcodeArAnnotationTrigger;
    defaultStatusIconAnnotationAnchor: BarcodeArStatusIconAnnotationAnchor;
    defaultZoomControlOrientation: ZoomSwitchOrientation;
    defaultLogoStyle: LogoStyle;
    defaultLogoAnchor: Anchor;
    defaultLogoOffset: PointWithUnit;
    defaultTorchControlPosition: Anchor;
    defaultZoomControlPosition: Anchor;
}
interface BarcodeArDefaults {
    RecommendedCameraSettings: CameraSettings;
    Feedback: {
        scanned: Feedback;
        tapped: Feedback;
    };
    BarcodeArView: BarcodeArViewDefaults;
    BarcodeArSettings: {
        expectOnlyUniqueBarcodes: boolean;
    };
}

declare function getBarcodeArDefaults(): BarcodeArDefaults;

declare class BarcodeSelectionFeedback extends DefaultSerializeable {
    private controller;
    private _selection;
    get selection(): Feedback;
    set selection(selection: Feedback);
    private static get barcodeSelectionDefaults();
    static get default(): BarcodeSelectionFeedback;
    private updateFeedback;
}

declare class BarcodeSelectionLicenseInfo {
    private _licensedSymbologies;
    get licensedSymbologies(): Symbology[];
    static fromJSON(json: {
        licensedSymbologies?: string[];
    }): BarcodeSelectionLicenseInfo;
}

declare class BarcodeSelectionSession {
    private _selectedBarcodes;
    private _newlySelectedBarcodes;
    private _newlyUnselectedBarcodes;
    private _frameSequenceID;
    private frameId;
    private listenerController;
    get selectedBarcodes(): Barcode[];
    get newlySelectedBarcodes(): Barcode[];
    get newlyUnselectedBarcodes(): Barcode[];
    get frameSequenceID(): number;
    private static fromJSON;
    getCount(barcode: Barcode): Promise<number>;
    reset(): Promise<void>;
}
interface BarcodeSelectionSessionJSON {
    selectedBarcodes: BarcodeJSON[];
    newlySelectedBarcodes: BarcodeJSON[];
    newlyUnselectedBarcodes: BarcodeJSON[];
    frameSequenceId: number;
}

interface BarcodeSelectionListener {
    didUpdateSelection?(barcodeSelection: BarcodeSelection, session: BarcodeSelectionSession, getFrameData: () => Promise<FrameData | null>): Promise<void>;
    didUpdateSession?(barcodeSelection: BarcodeSelection, session: BarcodeSelectionSession, getFrameData: () => Promise<FrameData | null>): Promise<void>;
}

declare enum BarcodeSelectionFreezeBehavior {
    Manual = "manual",
    ManualAndAutomatic = "manualAndAutomatic"
}

declare enum BarcodeSelectionTapBehavior {
    ToggleSelection = "toggleSelection",
    RepeatSelection = "repeatSelection"
}

declare enum BarcodeSelectionTypeName {
    Aimer = "aimerSelection",
    Tap = "tapSelection"
}

declare enum BarcodeSelectionStrategyType {
    Auto = "autoSelectionStrategy",
    Manual = "manualSelectionStrategy"
}

interface BarcodeSelectionStrategy {
}
declare class BarcodeSelectionAutoSelectionStrategy extends DefaultSerializeable implements BarcodeSelectionStrategy {
    private type;
    static get autoSelectionStrategy(): BarcodeSelectionAutoSelectionStrategy;
}
declare class BarcodeSelectionManualSelectionStrategy extends DefaultSerializeable implements BarcodeSelectionStrategy {
    private type;
    static get manualSelectionStrategy(): BarcodeSelectionManualSelectionStrategy;
}
declare class PrivateBarcodeSelectionStrategy {
    static fromJSON(json: {
        type: BarcodeSelectionStrategyType;
    }): BarcodeSelectionStrategy;
}

interface BarcodeSelectionType {
}
type BarcodeSelectionTypeJSON = {
    type: BarcodeSelectionTypeName.Aimer;
    selectionStrategy: BarcodeSelectionStrategyType;
} | {
    type: BarcodeSelectionTypeName.Tap;
    freezeBehavior: BarcodeSelectionFreezeBehavior;
    tapBehavior: BarcodeSelectionTapBehavior;
};
declare class BarcodeSelectionTapSelection extends DefaultSerializeable implements BarcodeSelectionType {
    freezeBehavior: BarcodeSelectionFreezeBehavior;
    tapBehavior: BarcodeSelectionTapBehavior;
    private type;
    static get tapSelection(): BarcodeSelectionTapSelection;
    private static get barcodeSelectionDefaults();
    static withFreezeBehaviorAndTapBehavior(freezeBehavior: BarcodeSelectionFreezeBehavior, tapBehavior: BarcodeSelectionTapBehavior): BarcodeSelectionTapSelection;
}
declare class BarcodeSelectionAimerSelection extends DefaultSerializeable implements BarcodeSelectionType {
    selectionStrategy: BarcodeSelectionStrategy;
    private type;
    static get aimerSelection(): BarcodeSelectionAimerSelection;
    private static get barcodeSelectionDefaults();
    private constructor();
}
declare class PrivateBarcodeSelectionType {
    static fromJSON(json: BarcodeSelectionTypeJSON): BarcodeSelectionType;
}

declare class BarcodeSelectionSettings extends DefaultSerializeable {
    codeDuplicateFilter: number;
    singleBarcodeAutoDetection: boolean;
    tapGestureForSelectionEnabled: boolean;
    selectionType: BarcodeSelectionType;
    private properties;
    private symbologies;
    private static get barcodeSelectionDefaults();
    get enabledSymbologies(): Symbology[];
    constructor();
    settingsForSymbology(symbology: Symbology): SymbologySettings;
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
    enableSymbologies(symbologies: Symbology[]): void;
    enableSymbology(symbology: Symbology, enabled: boolean): void;
}

declare class BarcodeSelection extends DefaultSerializeable implements DataCaptureMode {
    private static get barcodeSelectionDefaults();
    private type;
    private modeId;
    private parentId;
    private _isEnabled;
    private _feedback;
    private _pointOfInterest;
    private settings;
    private privateContext;
    private get _context();
    private set _context(value);
    private listeners;
    private listenerController;
    private modeController;
    static createRecommendedCameraSettings(): CameraSettings;
    constructor(settings: BarcodeSelectionSettings);
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    get context(): DataCaptureContext | null;
    get feedback(): BarcodeSelectionFeedback;
    set feedback(feedback: BarcodeSelectionFeedback);
    get pointOfInterest(): PointWithUnit | null;
    set pointOfInterest(pointOfInterest: PointWithUnit | null);
    applySettings(settings: BarcodeSelectionSettings): Promise<void>;
    addListener(listener: BarcodeSelectionListener): Promise<void>;
    removeListener(listener: BarcodeSelectionListener): Promise<void>;
    reset(): Promise<void>;
    unfreezeCamera(): Promise<void>;
    selectAimedBarcode(): Promise<void>;
    unselectBarcodes(barcodes: Barcode[]): Promise<void>;
    setSelectBarcodeEnabled(barcode: Barcode, enabled: boolean): Promise<void>;
    increaseCountForBarcodes(barcodes: Barcode[]): Promise<void>;
    getBarcodeSelectionLicenseInfo(): Promise<BarcodeSelectionLicenseInfo | null>;
}

declare enum BarcodeSelectionBasicOverlayStyle {
    Frame = "frame",
    Dot = "dot"
}

interface BarcodeSelectionBrushProvider {
    brushForBarcode?(barcode: Barcode): Brush | null;
}

declare class BarcodeSelectionBasicOverlay extends DefaultSerializeable implements DataCaptureOverlay {
    private type;
    private aimedBrushProvider;
    private trackedBrushProvider;
    private hasAimedBrushProvider;
    private hasTrackedBrushProvider;
    private controller;
    private _view;
    private modeId;
    private get view();
    private set view(value);
    private _shouldShowScanAreaGuides;
    private _shouldShowHints;
    private _viewfinder;
    private _style;
    private _trackedBrush;
    private _aimedBrush;
    private _selectedBrush;
    private _selectingBrush;
    get trackedBrush(): Brush;
    set trackedBrush(newBrush: Brush);
    get aimedBrush(): Brush;
    set aimedBrush(newBrush: Brush);
    get selectedBrush(): Brush;
    set selectedBrush(newBrush: Brush);
    get selectingBrush(): Brush;
    set selectingBrush(newBrush: Brush);
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    get shouldShowHints(): boolean;
    set shouldShowHints(shouldShow: boolean);
    get viewfinder(): Viewfinder;
    get style(): BarcodeSelectionBasicOverlayStyle;
    private static get barcodeSelectionDefaults();
    constructor(mode: BarcodeSelection, style?: BarcodeSelectionBasicOverlayStyle);
    setTextForAimToSelectAutoHint(text: string): Promise<void>;
    setAimedBarcodeBrushProvider(brushProvider: BarcodeSelectionBrushProvider | null): Promise<void>;
    setTrackedBarcodeBrushProvider(brushProvider: BarcodeSelectionBrushProvider | null): Promise<void>;
}

declare class BarcodeSelectionController extends BaseController<BarcodeProxy> {
    private barcodeSelection;
    private adapter;
    constructor(barcodeSelection: BarcodeSelection);
    unfreezeCamera(): Promise<void>;
    reset(): Promise<void>;
    selectAimedBarcode(): Promise<void>;
    unselectBarcodes(barcodes: Barcode[]): Promise<void>;
    setSelectBarcodeEnabled(barcode: Barcode, enabled: boolean): Promise<void>;
    increaseCountForBarcodes(barcodes: Barcode[]): Promise<void>;
    setModeEnabledState(enabled: boolean): Promise<void>;
    updateBarcodeSelectionMode(barcodeSelection: BarcodeSelection): Promise<void>;
    applyBarcodeSelectionModeSettings(newSettings: BarcodeSelectionSettings): Promise<void>;
    updateFeedback(feedbackJson: string): Promise<void>;
    getBarcodeSelectionLicenseInfo(): Promise<BarcodeSelectionLicenseInfo | null>;
    private get modeId();
    private convertBarcodesToJson;
}

declare enum BarcodeSelectionListenerEvents {
    didUpdateSelection = "BarcodeSelectionListener.didUpdateSelection",
    didUpdateSession = "BarcodeSelectionListener.didUpdateSession"
}
interface BarcodeSelectionSessionEventPayload {
    session: string;
    frameId: string | null;
    modeId: number | null;
}
declare class BarcodeSelectionListenerController extends BaseController<BarcodeProxy> {
    private barcodeSelection;
    private hasListeners;
    private frameDataController;
    private adapter;
    constructor(barcodeSelection: BarcodeSelection);
    getCount(barcode: Barcode): Promise<number>;
    reset(): Promise<void>;
    subscribeListener(): Promise<void>;
    unsubscribeListener(): Promise<void>;
    dispose(): void;
    private initialize;
    private handleDidUpdateSession;
    private handleDidUpdateSelection;
    private get modeId();
    private notifyListenersOfDidUpdateSelection;
    private notifyListenersOfDidUpdateSession;
    private handleDidUpdateSelectionWrapper;
    private handleDidUpdateSessionWrapper;
}

declare enum BarcodeSelectionBrushProviderEvents {
    brushForAimedBarcode = "BarcodeSelectionAimedBrushProvider.brushForBarcode",
    brushForTrackedBarcode = "BarcodeSelectionTrackedBrushProvider.brushForBarcode"
}
declare class BarcodeSelectionOverlayController extends BaseController<BarcodeProxy> {
    private overlay;
    private adapter;
    private isAimedBrushProviderRegistered;
    private isTrackedBrushProviderRegistered;
    private aimedBrushProvider;
    private trackedBrushProvider;
    constructor(overlay: BarcodeSelectionBasicOverlay);
    setTextForAimToSelectAutoHint(text: string): Promise<void>;
    setAimedBarcodeBrushProvider(brushProvider: BarcodeSelectionBrushProvider | null): Promise<void>;
    setTrackedBarcodeBrushProvider(brushProvider: BarcodeSelectionBrushProvider | null): Promise<void>;
    updateBarcodeSelectionBasicOverlay(overlay: BarcodeSelectionBasicOverlay): Promise<void>;
    unsubscribeProviders(): Promise<void>;
    dispose(): void;
    private initialize;
    private handleBrushForAimedBarcode;
    private handleBrushForTrackedBarcode;
    private handleBrushForAimedBarcodeWrapper;
    private handleBrushForTrackedBarcodeWrapper;
}

interface BarcodeSelectionDefaults {
    RecommendedCameraSettings: CameraSettings;
    Feedback: BarcodeSelectionFeedback;
    BarcodeSelectionSettings: {
        codeDuplicateFilter: number;
        singleBarcodeAutoDetection: boolean;
        tapGestureForSelectionEnabled: boolean;
        selectionType: (fromJSON: (json: unknown) => BarcodeSelectionType) => BarcodeSelectionType;
    };
    BarcodeSelectionTapSelection: {
        defaultFreezeBehavior: BarcodeSelectionFreezeBehavior;
        defaultTapBehavior: BarcodeSelectionTapBehavior;
    };
    BarcodeSelectionAimerSelection: {
        defaultSelectionStrategy: (fromJSON: (json: unknown) => BarcodeSelectionStrategy) => BarcodeSelectionStrategy;
    };
    BarcodeSelectionBasicOverlay: {
        defaultStyle: BarcodeSelectionBasicOverlayStyle;
        styles: any;
    };
}

declare function getBarcodeSelectionDefaults(): BarcodeSelectionDefaults;

declare enum BarcodeCountViewStyle {
    Icon = "icon",
    Dot = "dot"
}

interface BarcodeCountToolbarSettings$1 {
    audioOnButtonText: string;
    audioOffButtonText: string;
    audioButtonContentDescription: string | null;
    audioButtonAccessibilityHint: string | null;
    audioButtonAccessibilityLabel: string | null;
    vibrationOnButtonText: string;
    vibrationOffButtonText: string;
    vibrationButtonContentDescription: string | null;
    vibrationButtonAccessibilityHint: string | null;
    vibrationButtonAccessibilityLabel: string | null;
    strapModeOnButtonText: string;
    strapModeOffButtonText: string;
    strapModeButtonContentDescription: string | null;
    strapModeButtonAccessibilityHint: string | null;
    strapModeButtonAccessibilityLabel: string | null;
    colorSchemeOnButtonText: string;
    colorSchemeOffButtonText: string;
    colorSchemeButtonContentDescription: string | null;
    colorSchemeButtonAccessibilityHint: string | null;
    colorSchemeButtonAccessibilityLabel: string | null;
}
interface BarcodeCountMappingFlowSettings$1 {
    scanBarcodesGuidanceText: string;
    nextButtonText: string;
    stepBackGuidanceText: string;
    redoScanButtonText: string;
    restartButtonText: string;
    finishButtonText: string;
}
interface BarcodeCountViewSettingsDefaults {
    style: BarcodeCountViewStyle;
    shouldShowUserGuidanceView: boolean;
    shouldShowListButton: boolean;
    shouldShowExitButton: boolean;
    shouldShowShutterButton: boolean;
    shouldShowHints: boolean;
    shouldShowClearHighlightsButton: boolean;
    shouldShowSingleScanButton: boolean;
    shouldShowFloatingShutterButton: boolean;
    shouldShowToolbar: boolean;
    shouldShowStatusModeButton: boolean;
    shouldShowStatusIconsOnScan: boolean;
    shouldDisableModeOnExitButtonTapped: boolean;
    defaultNotInListBrush: Brush;
    defaultRecognizedBrush: Brush;
    defaultAcceptedBrush: Brush;
    defaultRejectedBrush: Brush;
    shouldShowScanAreaGuides: boolean;
    clearHighlightsButtonText: string;
    exitButtonText: string;
    textForTapShutterToScanHint: string;
    textForScanningHint: string;
    textForMoveCloserAndRescanHint: string;
    textForMoveFurtherAndRescanHint: string;
    textForBarcodesNotInListDetectedHint: string;
    textForScreenCleanedUpHint: string;
    textForClusteringGestureHint: string;
    shouldShowListProgressBar: boolean;
    toolbarSettings: BarcodeCountToolbarSettings$1;
    mappingFlowSettings: BarcodeCountMappingFlowSettings$1;
    listButtonAccessibilityHint: string;
    listButtonAccessibilityLabel: string;
    listButtonContentDescription: string;
    exitButtonAccessibilityHint: string;
    exitButtonAccessibilityLabel: string;
    exitButtonContentDescription: string;
    shutterButtonAccessibilityHint: string;
    shutterButtonAccessibilityLabel: string;
    shutterButtonContentDescription: string;
    floatingShutterButtonAccessibilityHint: string;
    floatingShutterButtonAccessibilityLabel: string;
    floatingShutterButtonContentDescription: string;
    clearHighlightsButtonAccessibilityHint: string;
    clearHighlightsButtonAccessibilityLabel: string;
    clearHighlightsButtonContentDescription: string;
    singleScanButtonAccessibilityHint: string;
    singleScanButtonAccessibilityLabel: string;
    singleScanButtonContentDescription: string;
    statusModeButtonAccessibilityHint: string;
    statusModeButtonAccessibilityLabel: string;
    statusModeButtonContentDescription: string;
    shouldShowTorchControl: boolean;
    torchControlPosition: Anchor;
    tapToUncountEnabled: boolean;
    textForTapToUncountHint: string;
    hardwareTriggerSupported: boolean;
}
interface BarcodeCountDefaults {
    RecommendedCameraSettings: CameraSettings;
    Feedback: {
        success: Feedback;
        failure: Feedback;
    };
    BarcodeCountSettings: {
        expectOnlyUniqueBarcodes: boolean;
        barcodeFilterSettings: BarcodeFilterSettings;
        disableModeWhenCaptureListCompleted: boolean;
        clusteringMode: ClusteringMode;
        mappingEnabled: boolean;
        scanPreviewEnabled: boolean;
    };
    BarcodeCountView: BarcodeCountViewSettingsDefaults;
}

declare function getBarcodeCountDefaults(): BarcodeCountDefaults;

declare enum BarcodeBatchBasicOverlayStyle {
    Frame = "frame",
    Dot = "dot"
}

declare class BarcodeBatchLicenseInfo {
    private _licensedSymbologies;
    get licensedSymbologies(): Symbology[];
    static fromJSON(json: {
        licensedSymbologies?: string[];
    }): BarcodeBatchLicenseInfo;
}

declare class BarcodeBatchSettings extends DefaultSerializeable {
    private properties;
    private symbologies;
    private _arucoDictionary;
    get enabledSymbologies(): Symbology[];
    constructor();
    settingsForSymbology(symbology: Symbology): SymbologySettings;
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
    enableSymbologies(symbologies: Symbology[]): void;
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    setArucoDictionary(dictionary: ArucoDictionary): void;
}

declare enum BarcodeBatchListenerEvents {
    didUpdateSession = "BarcodeBatchListener.didUpdateSession"
}
interface BarcodeBatchSessionEventPayload {
    session: string;
    frameId: string | null;
    modeId: number | null;
}
declare class BarcodeBatchListenerController extends BaseController<BarcodeProxy> {
    private mode;
    private hasListeners;
    private frameDataController;
    private adapter;
    constructor(barcodeBatch: BarcodeBatch);
    resetSession(): Promise<void>;
    setModeEnabledState(enabled: boolean): Promise<void>;
    updateBarcodeBatchMode(): Promise<void>;
    getBarcodeBatchLicenseInfo(): Promise<BarcodeBatchLicenseInfo | null>;
    applyBarcodeBatchModeSettings(newSettings: BarcodeBatchSettings): Promise<void>;
    subscribeListener(): Promise<void>;
    unsubscribeListener(): Promise<void>;
    dispose(): void;
    private initialize;
    private handleDidUpdateSessionEvent;
    private notifyListenersOfDidUpdateSession;
    private handleDidUpdateSessionEventWrapper;
}

declare class BarcodeBatchSession {
    private _addedTrackedBarcodes;
    private _removedTrackedBarcodes;
    private _updatedTrackedBarcodes;
    private _trackedBarcodes;
    private _frameSequenceID;
    private frameId;
    get addedTrackedBarcodes(): TrackedBarcode[];
    get removedTrackedBarcodes(): string[];
    get updatedTrackedBarcodes(): TrackedBarcode[];
    get trackedBarcodes(): {
        [key: string]: TrackedBarcode;
    };
    get frameSequenceID(): number;
    private listenerController;
    private static fromJSON;
    reset(): Promise<void>;
}
interface BarcodeBatchSessionJSON {
    addedTrackedBarcodes: TrackedBarcodeJSON[];
    removedTrackedBarcodes: string[];
    updatedTrackedBarcodes: TrackedBarcodeJSON[];
    trackedBarcodes: {
        [key: string]: TrackedBarcodeJSON;
    };
    frameSequenceId: number;
}
interface PrivateBarcodeBatchSession {
    fromJSON(json: BarcodeBatchSessionEventPayload): BarcodeBatchSession;
    frameId: string;
}

interface BarcodeBatchListener {
    didUpdateSession?(barcodeBatch: BarcodeBatch, session: BarcodeBatchSession, getFrameData: () => Promise<FrameData>): Promise<void>;
}

declare class BarcodeBatch extends DefaultSerializeable implements DataCaptureMode {
    private static get barcodeBatchDefaults();
    private type;
    private modeId;
    private _isEnabled;
    private settings;
    private privateContext;
    private parentId;
    private listeners;
    private hasListeners;
    private controller;
    static createRecommendedCameraSettings(): CameraSettings;
    private get _context();
    private set _context(value);
    constructor(settings: BarcodeBatchSettings);
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    get context(): DataCaptureContext | null;
    applySettings(settings: BarcodeBatchSettings): Promise<void>;
    addListener(listener: BarcodeBatchListener): Promise<void>;
    removeListener(listener: BarcodeBatchListener): Promise<void>;
    reset(): Promise<void>;
    getBarcodeBatchLicenseInfo(): Promise<BarcodeBatchLicenseInfo | null>;
}
interface PrivateBarcodeBatch extends PrivateDataCaptureMode {
    _context: DataCaptureContext | null;
    listeners: BarcodeBatchListener[];
    parentId: number | null;
}

interface BarcodeBatchAdvancedOverlayView {
}

interface BarcodeBatchAdvancedOverlayListener {
    didTapViewForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): void;
    viewForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): BarcodeBatchAdvancedOverlayView | null | Promise<BarcodeBatchAdvancedOverlayView | null>;
    anchorForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): Anchor;
    offsetForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): PointWithUnit;
}

interface BarcodeBatchAdvancedOverlay extends DataCaptureOverlay {
    listener: BarcodeBatchAdvancedOverlayListener | null;
}
declare class BaseBarcodeBatchAdvancedOverlay extends DefaultSerializeable implements BarcodeBatchAdvancedOverlay {
    type: string;
    private controller;
    private _view;
    private modeId;
    get view(): BaseDataCaptureView | null;
    set view(newView: BaseDataCaptureView | null);
    private _shouldShowScanAreaGuides;
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    private _hasListener;
    private get _dataCaptureViewId();
    private _listener;
    get listener(): BarcodeBatchAdvancedOverlayListener | null;
    set listener(newListener: BarcodeBatchAdvancedOverlayListener | null);
    constructor(mode: BarcodeBatch);
    setViewForTrackedBarcode(view: BarcodeBatchAdvancedOverlayView | Promise<BarcodeBatchAdvancedOverlayView>, trackedBarcode: TrackedBarcode): Promise<void>;
    setAnchorForTrackedBarcode(anchor: Anchor, trackedBarcode: TrackedBarcode): Promise<void>;
    setOffsetForTrackedBarcode(offset: PointWithUnit, trackedBarcode: TrackedBarcode): Promise<void>;
    clearTrackedBarcodeViews(): Promise<void>;
    updateSizeOfTrackedBarcodeView(trackedBarcodeIdentifier: number, width: number, height: number): Promise<void>;
    onViewIdChanged(): void;
}

declare enum BarcodeBatchAdvancedOverlayListenerEvents {
    didTapViewForTrackedBarcode = "BarcodeBatchAdvancedOverlayListener.didTapViewForTrackedBarcode",
    viewForTrackedBarcode = "BarcodeBatchAdvancedOverlayListener.viewForTrackedBarcode",
    anchorForTrackedBarcode = "BarcodeBatchAdvancedOverlayListener.anchorForTrackedBarcode",
    offsetForTrackedBarcode = "BarcodeBatchAdvancedOverlayListener.offsetForTrackedBarcode"
}
interface TrackedBarcodeFullEventPayload {
    trackedBarcode: string;
}
interface TrackedBarcodeRepeatEventPayload {
    identifier: number;
    location: string;
}
type TrackedBarcodeAdvancedEventPayload = TrackedBarcodeFullEventPayload | TrackedBarcodeRepeatEventPayload;
declare class BarcodeBatchAdvancedOverlayController extends BaseController<BarcodeProxy> {
    private overlay;
    private adapter;
    private hasListeners;
    private hasPendingListenerRegistration;
    private trackedBarcodeCache;
    private static readonly maxTrackedBarcodeCacheSize;
    constructor(overlay: BaseBarcodeBatchAdvancedOverlay);
    setViewForTrackedBarcode(view: BarcodeBatchAdvancedOverlayView | Promise<BarcodeBatchAdvancedOverlayView>, trackedBarcode: TrackedBarcode): Promise<void>;
    updateSizeOfTrackedBarcodeView(trackedBarcodeIdentifier: number, width: number, height: number): Promise<void>;
    setAnchorForTrackedBarcode(anchor: Anchor, trackedBarcode: TrackedBarcode): Promise<void>;
    setOffsetForTrackedBarcode(offset: PointWithUnit, trackedBarcode: TrackedBarcode): Promise<void>;
    clearTrackedBarcodeViews(): Promise<void>;
    updateBarcodeBatchAdvancedOverlay(): Promise<void>;
    onViewChanged(): Promise<void>;
    subscribeListener(): Promise<void>;
    unsubscribeListener(): Promise<void>;
    dispose(): void;
    private getJSONStringForView;
    private isSerializeable;
    private resolveTrackedBarcode;
    private handleViewForTrackedBarcode;
    private handleAnchorForTrackedBarcode;
    private handleOffsetForTrackedBarcode;
    private handleDidTapViewForTrackedBarcode;
    private get dataCaptureViewId();
    private initialize;
    private handleViewForTrackedBarcodeWrapper;
    private handleAnchorForTrackedBarcodeWrapper;
    private handleOffsetForTrackedBarcodeWrapper;
    private handleDidTapViewForTrackedBarcodeWrapper;
}

interface BarcodeBatchBasicOverlayListener {
    brushForTrackedBarcode?(overlay: BarcodeBatchBasicOverlay, trackedBarcode: TrackedBarcode): Brush | null;
    didTapTrackedBarcode?(overlay: BarcodeBatchBasicOverlay, trackedBarcode: TrackedBarcode): void;
}

declare class BarcodeBatchBasicOverlay extends DefaultSerializeable implements DataCaptureOverlay {
    private type;
    private modeId;
    private _view;
    private get view();
    private set view(value);
    private _style;
    private _hasListener;
    private get _dataCaptureViewId();
    private _listener;
    get listener(): BarcodeBatchBasicOverlayListener | null;
    set listener(newListener: BarcodeBatchBasicOverlayListener | null);
    get defaultBrush(): Brush | null;
    set defaultBrush(newBrush: Brush | null);
    private _brush;
    get brush(): Brush | null;
    set brush(newBrush: Brush | null);
    private _shouldShowScanAreaGuides;
    private controller;
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    get style(): BarcodeBatchBasicOverlayStyle;
    private static get barcodeBatchDefaults();
    constructor(mode: BarcodeBatch, style: BarcodeBatchBasicOverlayStyle);
    setBrushForTrackedBarcode(brush: Brush | null, trackedBarcode: TrackedBarcode): Promise<void>;
    clearTrackedBarcodeBrushes(): Promise<void>;
    private onViewIdChanged;
}

declare enum BarcodeBatchBasicOverlayListenerEvents {
    brushForTrackedBarcode = "BarcodeBatchBasicOverlayListener.brushForTrackedBarcode",
    didTapTrackedBarcode = "BarcodeBatchBasicOverlayListener.didTapTrackedBarcode"
}
interface TrackedBarcodeEventPayload {
    trackedBarcode: string;
}
declare class BarcodeBatchBasicOverlayController extends BaseController<BarcodeProxy> {
    private readonly overlay;
    private adapter;
    private hasListeners;
    private hasPendingListenerRegistration;
    constructor(overlay: BarcodeBatchBasicOverlay);
    setBrushForTrackedBarcode(brush: Brush | null, trackedBarcode: TrackedBarcode): Promise<void>;
    clearTrackedBarcodeBrushes(): Promise<void>;
    updateBarcodeBatchBasicOverlay(): Promise<void>;
    onViewChanged(): Promise<void>;
    subscribeListener(): Promise<void>;
    unsubscribeListener(): Promise<void>;
    dispose(): void;
    private get dataCaptureViewId();
    private initialize;
    private handleBrushForTrackedBarcode;
    private handleDidTapTrackedBarcode;
    private handleBrushForTrackedBarcodeWrapper;
    private handleDidTapTrackedBarcodeWrapper;
}

interface BarcodeBatchDefaults {
    RecommendedCameraSettings: CameraSettings;
    BarcodeBatchBasicOverlay: {
        defaultStyle: BarcodeBatchBasicOverlayStyle;
        styles: {
            [key: string]: {
                DefaultBrush: {
                    fillColor: Color;
                    strokeColor: Color;
                    strokeWidth: number;
                };
            };
        };
    };
}

declare function getBarcodeBatchDefaults(): BarcodeBatchDefaults;

interface SparkScanScanningMode {
}

declare class ScanItemIdentifier extends DefaultSerializeable {
    private identifier;
    static fromJSON(definitionId: string): ScanItemIdentifier;
    constructor();
}

declare class ScannedItemIdentifier {
    private _identifier;
    static fromJSON(identifier: string): ScannedItemIdentifier;
    constructor();
}

declare class ScannedComponentIdentifier {
    private _identifier;
    static fromJSON(identifier: string): ScannedComponentIdentifier;
    constructor();
}

declare class BarcodeIdentifier {
    private identifier;
    static fromJSON(definitionId: string): BarcodeIdentifier;
    constructor();
}

declare class TextIdentifier extends DefaultSerializeable {
    private identifier;
    static fromJSON(identifier: string): TextIdentifier;
    constructor();
}

interface ScanComponentDefinition<T> {
    identifier: T;
    location: Quadrilateral | null;
    optional: boolean;
}

interface ScannedComponent<T> {
    identifier: ScannedComponentIdentifier;
    definitionIdentifier: T;
    location: Quadrilateral;
}

declare class ScannedBarcode implements ScannedComponent<BarcodeIdentifier> {
    private _definitionIdentifier;
    private _identifier;
    private _location;
    private _symbology;
    private _payloadString;
    private _addOnPayloadString;
    private _compositePayloadString;
    private _isGS1DataCarrier;
    private _compositeFlag;
    private _isColorInverted;
    private _symbolCount;
    private _frameId;
    private _isStructuredAppend;
    static fromJSON(json: ScannedBarcodeJSON): ScannedBarcode;
    private constructor();
    get identifier(): ScannedComponentIdentifier;
    get definitionIdentifier(): BarcodeIdentifier;
    get location(): Quadrilateral;
    get symbology(): Symbology;
    get payloadString(): string | null;
    get addOnPayloadString(): string | null;
    get compositePayloadString(): string | null;
    get isGS1DataCarrier(): boolean;
    get compositeFlag(): CompositeFlag;
    get isColorInverted(): boolean;
    get symbolCount(): number;
    get frameId(): number;
    get isStructuredAppend(): boolean;
}
interface ScannedBarcodeJSON {
    identifier: string;
    definitionId: string;
    location: QuadrilateralJSON;
    symbology: string;
    payloadString: string | null;
    addOnPayloadString: string | null;
    compositePayloadString: string | null;
    isGS1DataCarrier: boolean;
    compositeFlag: string;
    isColorInverted: boolean;
    symbolCount: number;
    frameId: number;
    isStructuredAppend: boolean;
}

declare class ScannedText implements ScannedComponent<TextIdentifier> {
    private _identifier;
    private _definitionIdentifier;
    private _location;
    private _text;
    static fromJSON(json: ScannedTextJSON): ScannedText;
    private constructor();
    get identifier(): ScannedComponentIdentifier;
    get definitionIdentifier(): TextIdentifier;
    get location(): Quadrilateral;
    get text(): string;
}
interface ScannedTextJSON {
    identifier: string;
    definitionId: string;
    location: QuadrilateralJSON;
    text: string;
}

declare class ScannedItem {
    private _identifier;
    private _definitionIdentifier;
    private _components;
    static fromJSON(json: ScannedItemJSON): ScannedItem;
    private constructor();
    get identifier(): ScannedItemIdentifier | null;
    get definitionIdentifier(): ScanItemIdentifier | null;
    get components(): ScannedComponent<any>[];
    barcodeForIdentifier(identifier: BarcodeIdentifier): ScannedBarcode | null;
    textForIdentifier(identifier: TextIdentifier): ScannedText | null;
}
type ScannedComponentJSON = {
    type: 'barcode';
    barcode: Omit<ScannedBarcodeJSON, 'identifier' | 'definitionId' | 'location'>;
    identifier: string;
    definitionId: string;
    location: QuadrilateralJSON;
} | {
    type: 'text';
    text: Omit<ScannedTextJSON, 'identifier' | 'definitionId' | 'location'>;
    identifier: string;
    definitionId: string;
    location: QuadrilateralJSON;
};
interface ScannedItemJSON {
    identifier: string;
    definitionId: string;
    components: ScannedComponentJSON[];
}

declare class ScanItemDefinition extends DefaultSerializeable {
    onScan?: (item: ScannedItem) => void;
    private _scanItemIdentifier;
    private _identifier;
    private _components;
    constructor(identifier: ScanItemIdentifier, components: ScanComponentDefinition<any>[]);
    static fromComponents(components: ScanComponentDefinition<any>[]): ScanItemDefinition;
    get identifier(): ScanItemIdentifier;
    get components(): ScanComponentDefinition<any>[];
}

declare enum ScanComponentTextSemanticType {
    Custom = "custom",
    ExpiryDate = "expiryDate",
    PackingDate = "packingDate",
    TotalPrice = "totalPrice",
    UnitPrice = "unitPrice",
    Weight = "weight"
}

declare class TextDefinitionBuilder {
    private textDefinition;
    constructor(identifier: TextIdentifier);
    setOptional(optional: boolean): TextDefinitionBuilder;
    setSemantics(semantics: ScanComponentTextSemanticType): TextDefinitionBuilder;
    setLocation(location: Quadrilateral | null): TextDefinitionBuilder;
    setHiddenProperties(hiddenProperties: string): TextDefinitionBuilder;
    setValueRegexes(valueRegexes: string[]): TextDefinitionBuilder;
    setAnchorRegexes(anchorRegexes: string[]): TextDefinitionBuilder;
    build(): TextDefinition;
}

declare class TextDefinition extends DefaultSerializeable implements ScanComponentDefinition<TextIdentifier> {
    private type;
    private _textIdentifier;
    private _identifier;
    private _location;
    private _optional;
    private _semantics;
    private _hiddenProperties;
    private _valueRegexes;
    private _anchorRegexes;
    private _mandatoryInstances;
    static builder(identifier: TextIdentifier): TextDefinitionBuilder;
    constructor(identifier: TextIdentifier);
    get identifier(): TextIdentifier;
    get location(): Quadrilateral | null;
    set location(value: Quadrilateral | null);
    get optional(): boolean;
    set optional(value: boolean);
    get semantics(): ScanComponentTextSemanticType | null;
    set semantics(value: ScanComponentTextSemanticType | null);
    get hiddenProperties(): string;
    set hiddenProperties(value: string);
    get valueRegexes(): string[];
    set valueRegexes(value: string[]);
    get anchorRegexes(): string[];
    set anchorRegexes(value: string[]);
}

declare enum ScanComponentBarcodePreset {
    CustomBarcode = "customBarcode",
    ImeiOneBarcode = "imeiOneBarcode",
    ImeiTwoBarcode = "imeiTwoBarcode",
    PartNumberBarcode = "partNumberBarcode",
    SerialNumberBarcode = "serialNumberBarcode"
}

declare class BarcodeDefinitionBuilder {
    private readonly identifier;
    private symbologies;
    private optional;
    private preset;
    private location;
    private hiddenProperties;
    private valueRegexes;
    private anchorRegexes;
    constructor(identifier: BarcodeIdentifier);
    setOptional(optional: boolean): BarcodeDefinitionBuilder;
    setSymbologies(symbologies: Set<Symbology>): BarcodeDefinitionBuilder;
    setPreset(preset: ScanComponentBarcodePreset | null): BarcodeDefinitionBuilder;
    setLocation(location: Quadrilateral | null): BarcodeDefinitionBuilder;
    setHiddenProperties(hiddenProperties: string): BarcodeDefinitionBuilder;
    setValueRegexes(valueRegexes: string[]): BarcodeDefinitionBuilder;
    setAnchorRegexes(anchorRegexes: string[]): BarcodeDefinitionBuilder;
    build(): BarcodeDefinition;
}

declare class BarcodeDefinition extends DefaultSerializeable implements ScanComponentDefinition<BarcodeIdentifier> {
    location: Quadrilateral | null;
    preset: ScanComponentBarcodePreset | null;
    hiddenProperties: string | null;
    valueRegexes: string[];
    anchorRegexes: string[];
    private type;
    private _barcodeIdentifier;
    private _identifier;
    private _symbologiesArray;
    private _optional;
    private _mandatoryInstances;
    static builder(identifier: BarcodeIdentifier): BarcodeDefinitionBuilder;
    get identifier(): BarcodeIdentifier;
    get symbologies(): Set<Symbology>;
    get optional(): boolean;
    set optional(value: boolean);
    constructor(identifier: BarcodeIdentifier, symbologies: Set<Symbology>);
}

declare class SparkScanSettings extends DefaultSerializeable {
    codeDuplicateFilter: number;
    scanIntention: ScanIntention;
    selectionMode: SelectionMode;
    private _batterySaving;
    private _locationSelection;
    enabledCompositeTypes: CompositeType[];
    get batterySaving(): BatterySavingMode;
    set batterySaving(newValue: BatterySavingMode);
    get locationSelection(): LocationSelection | null;
    set locationSelection(newValue: LocationSelection | null);
    private properties;
    private symbologies;
    get enabledSymbologies(): Symbology[];
    private _itemDefinitions;
    get itemDefinitions(): ScanItemDefinition[] | null;
    set itemDefinitions(value: ScanItemDefinition[] | null);
    private _capturePresets;
    private static get sparkScanDefaults();
    private static get barcodeDefaults();
    constructor(capturePresets?: Set<CapturePreset>);
    settingsForSymbology(symbology: Symbology): SymbologySettings;
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
    enableSymbologies(symbologies: Symbology[]): void;
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    enableSymbologiesForCompositeTypes(compositeTypes: CompositeType[]): void;
    private get compositeTypeDescriptions();
}

declare class SparkScanLicenseInfo {
    private _licensedSymbologies;
    get licensedSymbologies(): Symbology[];
    static fromJSON(json: {
        licensedSymbologies?: string[];
    }): SparkScanLicenseInfo;
}

declare enum SparkScanViewState {
    Initial = "initial",
    Idle = "idle",
    Inactive = "inactive",
    Active = "active",
    Error = "error"
}

interface SparkScanViewUiListener {
    didTapBarcodeCountButton?(view: SparkScanView): void;
    didTapBarcodeFindButton?(view: SparkScanView): void;
    didTapLabelCaptureButton?(view: SparkScanView): void;
    didChangeViewState?(newState: SparkScanViewState): void;
    didChangeScanningMode?(newScanningMode: SparkScanScanningMode): void;
}

declare class SparkScanToastSettings extends DefaultSerializeable {
    private _toastEnabled;
    private _toastBackgroundColor;
    private _toastTextColor;
    private _targetModeEnabledMessage;
    private _targetModeDisabledMessage;
    private _selectionModeOnMessage;
    private _selectionModeOffMessage;
    private _continuousModeEnabledMessage;
    private _continuousModeDisabledMessage;
    private _scanPausedMessage;
    private _zoomedInMessage;
    private _zoomedOutMessage;
    private _torchEnabledMessage;
    private _torchDisabledMessage;
    private _userFacingCameraEnabledMessage;
    private _worldFacingCameraEnabledMessage;
    set toastEnabled(isEnabled: boolean);
    get toastEnabled(): boolean;
    set toastBackgroundColor(backgroundColor: Color | null);
    get toastBackgroundColor(): Color | null;
    set toastTextColor(textColor: Color | null);
    get toastTextColor(): Color | null;
    /**
     * @deprecated Use selectionModeOnMessage instead. Will be removed in 9.0.
     */
    set targetModeEnabledMessage(message: string | null);
    /**
     * @deprecated Use selectionModeOnMessage instead. Will be removed in 9.0.
     */
    get targetModeEnabledMessage(): string | null;
    /**
     * @deprecated Use selectionModeOffMessage instead. Will be removed in 9.0.
     */
    set targetModeDisabledMessage(message: string | null);
    /**
     * @deprecated Use selectionModeOffMessage instead. Will be removed in 9.0.
     */
    get targetModeDisabledMessage(): string | null;
    set selectionModeOnMessage(message: string | null);
    get selectionModeOnMessage(): string | null;
    set selectionModeOffMessage(message: string | null);
    get selectionModeOffMessage(): string | null;
    set continuousModeEnabledMessage(message: string | null);
    get continuousModeEnabledMessage(): string | null;
    set continuousModeDisabledMessage(message: string | null);
    get continuousModeDisabledMessage(): string | null;
    set scanPausedMessage(message: string | null);
    get scanPausedMessage(): string | null;
    set zoomedInMessage(message: string | null);
    get zoomedInMessage(): string | null;
    set zoomedOutMessage(message: string | null);
    get zoomedOutMessage(): string | null;
    set torchEnabledMessage(message: string | null);
    get torchEnabledMessage(): string | null;
    set torchDisabledMessage(message: string | null);
    get torchDisabledMessage(): string | null;
    set worldFacingCameraEnabledMessage(message: string | null);
    get worldFacingCameraEnabledMessage(): string | null;
    set userFacingCameraEnabledMessage(message: string | null);
    get userFacingCameraEnabledMessage(): string | null;
    constructor(toastEnabled?: boolean, toastBackgroundColor?: Color | null, toastTextColor?: Color | null, targetModeEnabledMessage?: string | null, targetModeDisabledMessage?: string | null, selectionModeOnMessage?: string | null, selectionModeOffMessage?: string | null, continuousModeEnabledMessage?: string | null, continuousModeDisabledMessage?: string | null, scanPausedMessage?: string | null, zoomedInMessage?: string | null, zoomedOutMessage?: string | null, torchEnabledMessage?: string | null, torchDisabledMessage?: string | null, userFacingCameraEnabledMessage?: string | null, worldFacingCameraEnabledMessage?: string | null);
    private static get sparkScanDefaults();
    private static get toastSettings();
}

declare enum SparkScanMiniPreviewSize {
    Regular = "regular",
    Expanded = "expanded"
}

declare class SparkScanViewSettings extends DefaultSerializeable {
    triggerButtonCollapseTimeout: number;
    defaultTorchState: TorchState;
    /**
     * @deprecated Use SparkScanSettings.selectionMode instead. Will be removed in 9.0.
     */
    defaultScanningMode: SparkScanScanningMode;
    holdToScanEnabled: boolean;
    soundEnabled: boolean;
    hapticEnabled: boolean;
    hardwareTriggerEnabled: boolean;
    hardwareTriggerKeyCode: number | null;
    visualFeedbackEnabled: boolean;
    toastSettings: SparkScanToastSettings;
    zoomFactorOut: number;
    zoomFactorIn: number;
    inactiveStateTimeout: number;
    defaultCameraPosition: CameraPosition;
    defaultMiniPreviewSize: SparkScanMiniPreviewSize;
    selectionModeCandidateBrush: Brush | null;
    periscopeModeEnabled: boolean;
    /**
     * @deprecated Use selectionModeCandidateBrush instead. Will be removed in 9.0.
     */
    get smartSelectionCandidateBrush(): Brush | null;
    /**
     * @deprecated Use selectionModeCandidateBrush instead. Will be removed in 9.0.
     */
    set smartSelectionCandidateBrush(value: Brush | null);
    constructor();
    private scanModeFromJSON;
    private static get sparkScanDefaults();
    private static get viewSettingsDefaults();
}

declare class SparkScanBarcodeFeedback extends DefaultSerializeable {
    protected constructor();
    static defaultSuccessFeedback(): Feedback;
    static defaultErrorFeedback(): Feedback;
    protected static get sparkScanDefaults(): SparkScanDefaults;
}

interface SparkScanFeedbackDelegate {
    feedbackForBarcode?(barcode: Barcode): SparkScanBarcodeFeedback | null;
    feedbackForScannedItem?(item: ScannedItem): Promise<SparkScanBarcodeFeedback | null>;
}

interface BaseSparkScanViewProps {
    context: DataCaptureContext;
    sparkScan: SparkScan;
    sparkScanViewSettings: SparkScanViewSettings;
    uiListener?: SparkScanViewUiListener;
    previewSizeControlVisible?: boolean;
    scanningBehaviorButtonVisible?: boolean;
    barcodeCountButtonVisible?: boolean;
    barcodeFindButtonVisible?: boolean;
    /**
     * @deprecated Use selectionModeButtonVisible instead. Will be removed in 9.0.
     */
    targetModeButtonVisible?: boolean;
    selectionModeButtonVisible?: boolean;
    labelCaptureButtonVisible?: boolean;
    cameraSwitchButtonVisible?: boolean;
    torchControlVisible?: boolean;
    zoomSwitchControlVisible?: boolean;
    previewCloseControlVisible?: boolean;
    triggerButtonVisible?: boolean;
    toolbarBackgroundColor?: Color | null;
    toolbarIconActiveTintColor?: Color | null;
    toolbarIconInactiveTintColor?: Color | null;
    triggerButtonAnimationColor?: Color | null;
    triggerButtonExpandedColor?: Color | null;
    triggerButtonCollapsedColor?: Color | null;
    triggerButtonTintColor?: Color | null;
    triggerButtonImage?: string | null;
    feedbackDelegate?: SparkScanFeedbackDelegate | null;
    shouldHandleAndroidLifecycleAutomatically?: boolean;
}

interface SparkScanView {
}
interface SparkScanViewJSON {
    brush: object;
    toolbarBackgroundColor: Color | null;
    toolbarIconActiveTintColor: Color | null;
    toolbarIconInactiveTintColor: Color | null;
    triggerButtonAnimationColor: Color | null;
    triggerButtonExpandedColor: Color | null;
    triggerButtonCollapsedColor: Color | null;
    triggerButtonTintColor: Color | null;
    triggerButtonVisible: boolean;
    triggerButtonImage: string | null;
    torchControlVisible: boolean;
    scanningBehaviorButtonVisible: boolean;
    barcodeCountButtonVisible: boolean;
    barcodeFindButtonVisible: boolean;
    targetModeButtonVisible: boolean;
    selectionModeButtonVisible: boolean;
    labelCaptureButtonVisible: boolean;
    hasFeedbackDelegate: boolean;
    cameraSwitchButtonVisible: boolean;
    zoomSwitchControlVisible: boolean;
    previewCloseControlVisible: boolean;
    previewSizeControlVisible: boolean;
    hasUiListener: boolean;
    viewId: number;
    shouldHandleAndroidLifecycleAutomatically: boolean;
    viewSettings?: object;
}
declare class BaseSparkScanView implements SparkScanView {
    context: DataCaptureContext;
    _feedbackDelegate: SparkScanFeedbackDelegate | null;
    shouldHandleAndroidLifecycleAutomatically: boolean;
    private _sparkScan;
    private _controller;
    private _viewId;
    get viewId(): number;
    private _uiListener;
    get uiListener(): SparkScanViewUiListener | null;
    set uiListener(listener: SparkScanViewUiListener | null);
    private _viewSettings;
    get viewSettings(): SparkScanViewSettings;
    private _brush;
    private _previewSizeControlVisible;
    private _cameraSwitchButtonVisible;
    private _scanningBehaviorButtonVisible;
    private _barcodeCountButtonVisible;
    private _barcodeFindButtonVisible;
    private _targetModeButtonVisible;
    private _labelCaptureButtonVisible;
    private _toolbarBackgroundColor;
    private _toolbarIconActiveTintColor;
    private _toolbarIconInactiveTintColor;
    private _triggerButtonAnimationColor;
    private _triggerButtonExpandedColor;
    private _triggerButtonCollapsedColor;
    private _triggerButtonTintColor;
    private _triggerButtonVisible;
    private _triggerButtonImage;
    private _torchControlVisible;
    private _zoomSwitchControlVisible;
    private _previewCloseControlVisible;
    static withProps(props: BaseSparkScanViewProps): BaseSparkScanView;
    static get defaultBrush(): Brush;
    constructor({ context, sparkScan, settings, }: {
        context: DataCaptureContext;
        sparkScan: SparkScan;
        settings: SparkScanViewSettings | null;
    });
    get previewSizeControlVisible(): boolean;
    set previewSizeControlVisible(newValue: boolean);
    get torchControlVisible(): boolean;
    set torchControlVisible(newValue: boolean);
    get previewCloseControlVisible(): boolean;
    set previewCloseControlVisible(newValue: boolean);
    get zoomSwitchControlVisible(): boolean;
    set zoomSwitchControlVisible(newValue: boolean);
    get scanningBehaviorButtonVisible(): boolean;
    set scanningBehaviorButtonVisible(newValue: boolean);
    get barcodeCountButtonVisible(): boolean;
    set barcodeCountButtonVisible(newValue: boolean);
    get barcodeFindButtonVisible(): boolean;
    set barcodeFindButtonVisible(newValue: boolean);
    /**
     * @deprecated Use selectionModeButtonVisible instead. Will be removed in 9.0.
     */
    get targetModeButtonVisible(): boolean;
    /**
     * @deprecated Use selectionModeButtonVisible instead. Will be removed in 9.0.
     */
    set targetModeButtonVisible(newValue: boolean);
    get selectionModeButtonVisible(): boolean;
    set selectionModeButtonVisible(newValue: boolean);
    get labelCaptureButtonVisible(): boolean;
    set labelCaptureButtonVisible(newValue: boolean);
    get toolbarBackgroundColor(): Color | null;
    set toolbarBackgroundColor(newValue: Color | null);
    get toolbarIconActiveTintColor(): Color | null;
    set toolbarIconActiveTintColor(newValue: Color | null);
    get toolbarIconInactiveTintColor(): Color | null;
    set toolbarIconInactiveTintColor(newValue: Color | null);
    get cameraSwitchButtonVisible(): boolean;
    set cameraSwitchButtonVisible(newValue: boolean);
    get triggerButtonAnimationColor(): Color | null;
    set triggerButtonAnimationColor(newValue: Color | null);
    get triggerButtonExpandedColor(): Color | null;
    set triggerButtonExpandedColor(newValue: Color | null);
    get triggerButtonCollapsedColor(): Color | null;
    set triggerButtonCollapsedColor(newValue: Color | null);
    get triggerButtonTintColor(): Color | null;
    set triggerButtonTintColor(newValue: Color | null);
    get triggerButtonImage(): string | null;
    set triggerButtonImage(newValue: string | null);
    get triggerButtonVisible(): boolean;
    set triggerButtonVisible(newValue: boolean);
    showToast(text: string): Promise<void>;
    prepareScanning(): Promise<void>;
    startScanning(): Promise<void>;
    pauseScanning(): Promise<void>;
    stopScanning(): Promise<void>;
    onHostPause(): Promise<void>;
    dispose(): Promise<void>;
    show(): Promise<void>;
    hide(): Promise<void>;
    createNativeView(viewId: number): Promise<void>;
    get feedbackDelegate(): SparkScanFeedbackDelegate | null;
    set feedbackDelegate(delegate: SparkScanFeedbackDelegate | null);
    updateWithProps(prevProps: BaseSparkScanViewProps, props: BaseSparkScanViewProps): void;
    toJSON(): SparkScanViewJSON;
    private update;
    private _show;
    private _hide;
    private static get sparkScanDefaults();
}

interface SparkScanViewProxy extends BarcodeProxy {
    $createSparkScanView({ viewId, viewJson }: {
        viewId: number;
        viewJson: string;
    }): Promise<void>;
}
declare enum SparkScanViewEvents {
    barcodeFindButtonTapped = "SparkScanViewUiListener.barcodeFindButtonTapped",
    barcodeCountButtonTapped = "SparkScanViewUiListener.barcodeCountButtonTapped",
    labelCaptureButtonTapped = "SparkScanViewUiListener.labelCaptureButtonTapped",
    didChangeViewState = "SparkScanViewUiListener.didChangeViewState",
    feedbackForBarcode = "SparkScanFeedbackDelegate.feedbackForBarcode",
    feedbackForScannedItem = "SparkScanFeedbackDelegate.feedbackForScannedItem",
    didUpdateSession = "SparkScanListener.didUpdateSession",
    didScan = "SparkScanListener.didScan"
}
interface SparkScanSessionEventPayload {
    session: string;
    frameId: string | null;
    viewId: number;
}
declare class SparkScanViewController extends BaseController<SparkScanViewProxy> {
    private view;
    private sparkScan;
    private frameDataController;
    private hasFeedbackDelegateListener;
    private hasNativeViewListenerSubscriptions;
    private hasNativeModeListenerSubscriptions;
    private viewInstanceId;
    private adapter;
    static forSparkScanView(view: BaseSparkScanView, sparkScan: SparkScan): SparkScanViewController;
    private constructor();
    dispose(): Promise<void>;
    subscribeViewListeners(): Promise<void>;
    unsubscribeViewListeners(): Promise<void>;
    createView(): Promise<void>;
    updateView(): Promise<void>;
    stopScanning(): Promise<void>;
    pauseScanning(): Promise<void>;
    startScanning(): Promise<void>;
    prepareScanning(): Promise<void>;
    onHostPause(): Promise<void>;
    showToast(text: string): Promise<void>;
    showView(): Promise<void>;
    hideView(): Promise<void>;
    addFeedbackDelegate(): Promise<void>;
    removeFeedbackDelegate(): Promise<void>;
    resetSession(): Promise<void>;
    updateMode(): Promise<void>;
    getSparkScanLicenseInfo(): Promise<SparkScanLicenseInfo | null>;
    subscribeModeListener(): Promise<void>;
    unsubscribeModeListener(): Promise<void>;
    setModeEnabledState(enabled: boolean): Promise<void>;
    private initialize;
    private get isViewCreated();
    private handleFeedbackForBarcode;
    private handleFeedbackForScannedItem;
    private didUpdateSessionListener;
    private notifyListenersOfDidUpdateSession;
    private didScanListener;
    private notifyListenersOfDidScan;
    private barcodeCountButtonTappedListener;
    private barcodeFindButtonTappedListener;
    private labelCaptureButtonTappedListener;
    private didChangeViewStateListener;
    private handleFeedbackForBarcodeWrapper;
    private handleFeedbackForScannedItemWrapper;
    private didUpdateSessionListenerWrapper;
    private didScanListenerWrapper;
    private barcodeCountButtonTappedListenerWrapper;
    private barcodeFindButtonTappedListenerWrapper;
    private labelCaptureButtonTappedListenerWrapper;
    private didChangeViewStateListenerWrapper;
}

declare class SparkScanSession {
    private _newlyRecognizedBarcode;
    private _frameSequenceID;
    private _allScannedItems;
    private _newlyRecognizedItems;
    private _controller;
    protected constructor(newlyRecognizedBarcode: Barcode | null, frameSequenceID: number, allScannedItems: ScannedItem[], newlyRecognizedItems: ScannedItem[], controller: SparkScanViewController);
    get newlyRecognizedBarcode(): Barcode | null;
    get frameSequenceID(): number;
    get allScannedItems(): ScannedItem[];
    get newlyRecognizedItems(): ScannedItem[];
    reset(): Promise<void>;
}
interface SparkScanSessionJSON {
    newlyRecognizedBarcode: BarcodeJSON | null;
    frameSequenceId: number;
    allScannedItems: ScannedItemJSON[];
    newlyRecognizedItems: ScannedItemJSON[];
}

interface SparkScanListener {
    didUpdateSession?(sparkScan: SparkScan, session: SparkScanSession, getFrameData: () => Promise<FrameData | null>): Promise<void>;
    didScan?(sparkScan: SparkScan, session: SparkScanSession, getFrameData: () => Promise<FrameData | null>): Promise<void>;
}

declare class SparkScan extends DefaultSerializeable {
    private type;
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    get context(): DataCaptureContext | null;
    private _isEnabled;
    private settings;
    private hasListeners;
    private privateContext;
    private get _context();
    private set _context(value);
    private listeners;
    private controller;
    constructor(settings?: SparkScanSettings);
    applySettings(settings: SparkScanSettings): Promise<void>;
    getSparkScanLicenseInfo(): Promise<SparkScanLicenseInfo | null>;
    addListener(listener: SparkScanListener): void;
    removeListener(listener: SparkScanListener): void;
    private didChange;
    private hasItemDefinitions;
}

declare enum SparkScanPreviewBehavior {
    Persistent = "accurate",
    Default = "default"
}

declare enum SparkScanScanningBehavior {
    Single = "single",
    Continuous = "continuous"
}

/**
 * @deprecated Use SparkScanSettings.selectionMode = SelectionMode.Off instead. Will be removed in 9.0.
 */
declare class SparkScanScanningModeDefault extends DefaultSerializeable implements SparkScanScanningMode {
    private type;
    private _settings;
    get scanningBehavior(): SparkScanScanningBehavior;
    get previewBehavior(): SparkScanPreviewBehavior;
    constructor(scanningBehavior: SparkScanScanningBehavior, previewBehavior?: SparkScanPreviewBehavior);
}

/**
 * @deprecated Use SparkScanSettings.selectionMode = SelectionMode.On instead. Will be removed in 9.0.
 */
declare class SparkScanScanningModeTarget extends DefaultSerializeable implements SparkScanScanningMode {
    private type;
    private _settings;
    get scanningBehavior(): SparkScanScanningBehavior;
    get previewBehavior(): SparkScanPreviewBehavior;
    constructor(scanningBehavior: SparkScanScanningBehavior, previewBehavior?: SparkScanPreviewBehavior);
}

declare class SparkScanBarcodeErrorFeedback extends SparkScanBarcodeFeedback {
    private type;
    private _barcodeFeedback;
    get message(): string;
    get resumeCapturingDelay(): number;
    get visualFeedbackColor(): Color;
    get brush(): Brush;
    get feedback(): Feedback | null;
    static fromMessage(message: string, resumeCapturingDelay: number): SparkScanBarcodeErrorFeedback;
    constructor(message: string, resumeCapturingDelay: number, visualFeedbackColor: Color, brush: Brush, feedback: Feedback | null);
}

declare class SparkScanBarcodeSuccessFeedback extends SparkScanBarcodeFeedback {
    private type;
    private _barcodeFeedback;
    get visualFeedbackColor(): Color;
    get brush(): Brush;
    get feedback(): Feedback | null;
    static fromVisualFeedbackColor(visualFeedbackColor: Color, brush: Brush, feedback: Feedback | null): SparkScanBarcodeSuccessFeedback;
    constructor();
}

interface PrivateSparkScanView {
    _context: DataCaptureContext;
    _sparkScan: SparkScan;
    toJSON(): object;
}

interface SparkScanViewSettingsDefaults {
    triggerButtonCollapseTimeout: number;
    defaultScanningMode: SparkScanScanningMode;
    defaultTorchState: TorchState;
    soundEnabled: boolean;
    hapticEnabled: boolean;
    holdToScanEnabled: boolean;
    hardwareTriggerEnabled: boolean;
    hardwareTriggerKeyCode: number | null;
    visualFeedbackEnabled: boolean;
    toastSettings: SparkScanToastSettingsDefaults;
    zoomFactorOut: number;
    zoomFactorIn: number;
    inactiveStateTimeout: number;
    defaultCameraPosition: CameraPosition;
    defaultMiniPreviewSize: SparkScanMiniPreviewSize;
    periscopeModeEnabled: boolean;
}
interface SparkScanToastSettingsDefaults {
    toastEnabled: boolean;
    toastBackgroundColor: Color | null;
    toastTextColor: Color | null;
    targetModeEnabledMessage: string | null;
    targetModeDisabledMessage: string | null;
    selectionModeOnMessage: string | null;
    selectionModeOffMessage: string | null;
    continuousModeEnabledMessage: string | null;
    continuousModeDisabledMessage: string | null;
    worldFacingCameraEnabledMessage: string | null;
    userFacingCameraEnabledMessage: string | null;
    scanPausedMessage: string | null;
    zoomedInMessage: string | null;
    zoomedOutMessage: string | null;
    torchEnabledMessage: string | null;
    torchDisabledMessage: string | null;
}
interface SparkScanDefaults {
    Feedback: {
        success: {
            visualFeedbackColor: Color;
            brush: Brush;
            feedbackDefault: Feedback;
        };
        error: {
            visualFeedbackColor: Color;
            brush: Brush;
            feedbackDefault: Feedback;
        };
    };
    SparkScanSettings: {
        batterySaving: BatterySavingMode;
        codeDuplicateFilter: number;
        locationSelection: LocationSelection;
        scanIntention: ScanIntention;
        selectionMode: SelectionMode;
    };
    SparkScanView: {
        brush: Brush;
        scanningBehaviorButtonVisible: boolean;
        barcodeCountButtonVisible: boolean;
        barcodeFindButtonVisible: boolean;
        targetModeButtonVisible: boolean;
        selectionModeButtonVisible: boolean;
        labelCaptureButtonVisible: boolean;
        previewSizeControlVisible: boolean;
        previewCloseControlVisible: boolean;
        triggerButtonAnimationColor: Color | null;
        triggerButtonExpandedColor: Color | null;
        triggerButtonCollapsedColor: Color | null;
        triggerButtonTintColor: Color | null;
        triggerButtonVisible: boolean;
        triggerButtonImage: string | null;
        toolbarBackgroundColor: Color | null;
        toolbarIconActiveTintColor: Color | null;
        toolbarIconInactiveTintColor: Color | null;
        SparkScanViewSettings: SparkScanViewSettingsDefaults;
        cameraSwitchButtonVisible: boolean;
        torchControlVisible: boolean;
        zoomSwitchControlVisible: boolean;
    };
}

declare function getSparkScanDefaults(): SparkScanDefaults;

declare enum BarcodePickState {
    Ignore = "ignore",
    Picked = "picked",
    ToPick = "toPick",
    Unknown = "unknown"
}

declare class BrushForStateObject extends DefaultSerializeable {
    barcodePickState: BarcodePickState;
    brush: Brush;
}

interface BarcodePickViewHighlightStyle {
}

interface BarcodePickStatusIconSettings$1 {
    maxSize: number;
    minSize: number;
    ratioToHighlightSize: number;
}
interface BarcodePickDefaults {
    RecommendedCameraSettings: CameraSettings;
    BarcodePickSettings: {
        arucoDictionary: ArucoDictionary;
        cachingEnabled: boolean;
        hapticsEnabled: boolean;
        soundEnabled: boolean;
        barcodeFilterSettings: BarcodeFilterSettings;
        filterHighlightSettings: BarcodeFilterHighlightSettings | null;
    };
    ViewSettings: {
        loadingDialogTextForPicking: string;
        loadingDialogTextForUnpicking: string;
        highlightStyle: BarcodePickViewHighlightStyle;
        initialGuidelineText: string;
        moveCloserGuidelineText: string;
        showLoadingDialog: boolean;
        onFirstItemPickCompletedHintText: string;
        onFirstItemToPickFoundHintText: string;
        onFirstItemUnpickCompletedHintText: string;
        onFirstUnmarkedItemPickCompletedHintText: string;
        showGuidelines: boolean;
        showHints: boolean;
        showFinishButton: boolean;
        showPauseButton: boolean;
        showZoomButton: boolean;
        zoomButtonPosition: string;
        showTorchButton: boolean;
        torchButtonPosition: string;
        logoStyle: LogoStyle;
        logoAnchor: Anchor;
        tapShutterToPauseGuidelineText: string;
        hardwareTriggerEnabled: boolean;
        uiButtonsOffset: NumberWithUnit | null;
        hardwareTriggerKeyCode: number | null;
    };
    BarcodePickViewHighlightStyle: {
        Dot: {
            brushesForState: BrushForStateObject[];
        };
        DotWithIcons: {
            brushesForState: BrushForStateObject[];
            styleResponseCacheEnabled: boolean;
        };
        Rectangular: {
            brushesForState: BrushForStateObject[];
            minimumHighlightWidth: number;
            minimumHighlightHeight: number;
        };
        RectangularWithIcons: {
            brushesForState: BrushForStateObject[];
            statusIconSettings: BarcodePickStatusIconSettings$1;
            minimumHighlightWidth: number;
            minimumHighlightHeight: number;
            styleResponseCacheEnabled: boolean;
        };
        CustomView: {
            fitViewsToBarcode: boolean;
            statusIconSettings: BarcodePickStatusIconSettings$1;
            minimumHighlightWidth: number;
            minimumHighlightHeight: number;
        };
    };
    SymbologySettings: {
        [key: string]: SymbologySettings;
    };
    BarcodePickStatusIconSettings: BarcodePickStatusIconSettings$1;
}

declare function getBarcodePickDefaults(): BarcodePickDefaults;
/**
 * Helper function to get symbology settings from BarcodePickDefaults with proper error handling.
 *
 * @param symbology - The symbology to get settings for (Symbology enum or string identifier)
 * @param errorPrefix - Prefix for error messages (e.g., "Barcode pick")
 * @returns SymbologySettings instance with _symbology property set (if symbology is an enum)
 * @throws Error if defaults are missing or symbology settings are not found
 */
declare function getSymbologySettingsFromBarcodePickDefaults(symbology: Symbology | string, errorPrefix: string): SymbologySettings;

interface BarcodeFindDefaults {
    RecommendedCameraSettings: CameraSettings;
    Feedback: {
        found: Feedback;
        itemListUpdated: Feedback;
    };
    BarcodeFindView: BarcodeFindViewDefaults;
    BarcodeFindViewSettings: BarcodeFindViewSettingsDefaults;
}
interface BarcodeFindViewDefaults {
    hardwareTriggerSupported: boolean;
    shouldShowCarousel: boolean;
    shouldShowFinishButton: boolean;
    shouldShowHints: boolean;
    shouldShowPauseButton: boolean;
    shouldShowProgressBar: boolean;
    shouldShowUserGuidanceView: boolean;
    shouldShowTorchControl: boolean;
    shouldShowZoomControl: boolean;
    textForAllItemsFoundSuccessfullyHint: string | null;
    textForItemListUpdatedHint: string | null;
    textForItemListUpdatedWhenPausedHint: string | null;
    textForCollapseCardsButton: string | null;
    textForMoveCloserToBarcodesHint: string | null;
    textForPointAtBarcodesToSearchHint: string | null;
    textForTapShutterToPauseScreenHint: string | null;
    textForTapShutterToResumeSearchHint: string | null;
    torchControlPosition: Anchor;
    logoStyle: LogoStyle;
    logoAnchor: Anchor;
    cameraStateOnStop: FrameSourceState;
}
interface BarcodeFindViewSettingsDefaults {
    progressBarStartColor: Color;
    progressBarFinishColor: Color;
}

declare function getBarcodeFindDefaults(): BarcodeFindDefaults;

declare enum BarcodeDefaultsType {
    Barcode = "BarcodeDefaults",
    BarcodeCapture = "BarcodeCaptureDefaults",
    BarcodeCount = "BarcodeCountDefaults",
    BarcodePick = "BarcodePickDefaults",
    BarcodeSelection = "BarcodeSelectionDefaults",
    BarcodeBatch = "BarcodeBatchDefaults",
    SparkScan = "SparkScanDefaults",
    BarcodeFind = "BarcodeFindDefaults",
    BarcodeAr = "BarcodeArDefaults"
}
declare function setBarcodeDefaultsLoader(loader: () => void): void;
declare function ensureBarcodeDefaultsFor<T>(type: BarcodeDefaultsType): T;
declare function ensureBarcodeDefaults(): BarcodeDefaults;
/**
 * @internal
 * Loads barcode defaults. For internal use and testing only.
 * Use loadAllBarcodeDefaults() instead for production code.
 */
declare function loadBarcodeDefaults(jsonDefaults: any): void;
/**
 * @internal
 * Loads barcode capture defaults. For internal use and testing only.
 * Use loadAllBarcodeDefaults() instead for production code.
 */
declare function loadBarcodeCaptureDefaults(jsonDefaults: any): void;
/**
 * @internal
 * Loads barcode AR defaults. For internal use and testing only.
 * Use loadAllBarcodeDefaults() instead for production code.
 */
declare function loadBarcodeArDefaults(jsonDefaults: any): void;
/**
 * @internal
 * Loads barcode count defaults. For internal use and testing only.
 * Use loadAllBarcodeDefaults() instead for production code.
 */
declare function loadBarcodeCountDefaults(jsonDefaults: any): void;
/**
 * @internal
 * Loads barcode pick defaults. For internal use and testing only.
 * Use loadAllBarcodeDefaults() instead for production code.
 */
declare function loadBarcodePickDefaults(jsonDefaults: any): void;
/**
 * @internal
 * Loads barcode selection defaults. For internal use and testing only.
 * Use loadAllBarcodeDefaults() instead for production code.
 */
declare function loadBarcodeSelectionDefaults(jsonDefaults: any): void;
/**
 * @internal
 * Loads barcode batch defaults. For internal use and testing only.
 * Use loadAllBarcodeDefaults() instead for production code.
 */
declare function loadBarcodeBatchDefaults(jsonDefaults: any): void;
/**
 * @internal
 * Loads SparkScan defaults. For internal use and testing only.
 * Use loadAllBarcodeDefaults() instead for production code.
 */
declare function loadSparkScanDefaults(jsonDefaults: any): void;
/**
 * @internal
 * Loads BarcodeFind defaults. For internal use and testing only.
 * Use loadAllBarcodeDefaults() instead for production code.
 */
declare function loadBarcodeFindDefaults(jsonDefaults: any): void;
/**
 * Loads all barcode-related defaults from the provided JSON object.
 * This is the main entry point for initializing barcode defaults across all frameworks.
 *
 * @param jsonDefaults - The JSON object containing all barcode defaults from the native layer
 */
declare function loadAllBarcodeDefaults(jsonDefaults: any): void;

declare class BarcodeCaptureFeedback extends DefaultSerializeable {
    success: Feedback;
    static get default(): BarcodeCaptureFeedback;
}

declare class BarcodeCaptureLicenseInfo {
    private _licensedSymbologies;
    get licensedSymbologies(): Symbology[];
    static fromJSON(json: {
        licensedSymbologies?: string[];
    }): BarcodeCaptureLicenseInfo;
}

declare class BarcodeCaptureSession {
    private _newlyRecognizedBarcode;
    private _newlyLocalizedBarcodes;
    private _frameSequenceID;
    private frameId;
    private controller;
    get newlyRecognizedBarcode(): Barcode | null;
    get newlyLocalizedBarcodes(): LocalizedOnlyBarcode[];
    get frameSequenceID(): number;
    private static fromJSON;
    reset(): Promise<void>;
}
interface BarcodeCaptureSessionJSON {
    newlyRecognizedBarcode: BarcodeJSON | null;
    newlyLocalizedBarcodes: LocalizedOnlyBarcodeJSON[];
    frameSequenceId: number;
}

interface BarcodeCaptureListener {
    didUpdateSession?(barcodeCapture: BarcodeCapture, session: BarcodeCaptureSession, getFrameData: () => Promise<FrameData>): Promise<void>;
    didScan?(barcodeCapture: BarcodeCapture, session: BarcodeCaptureSession, getFrameData: () => Promise<FrameData>): Promise<void>;
}

declare class BarcodeCaptureSettings extends DefaultSerializeable {
    locationSelection: LocationSelection | null;
    enabledCompositeTypes: CompositeType[];
    batterySaving: BatterySavingMode;
    scanIntention: ScanIntention;
    selectionMode: SelectionMode;
    private properties;
    private symbologies;
    private _codeDuplicateFilter;
    private _arucoDictionary;
    get enabledSymbologies(): Symbology[];
    private get compositeTypeDescriptions();
    private static get barcodeDefaults();
    private static get barcodeCaptureDefaults();
    constructor();
    settingsForSymbology(symbology: Symbology): SymbologySettings;
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
    enableSymbologies(symbologies: Symbology[]): void;
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    enableSymbologiesForCompositeTypes(compositeTypes: CompositeType[]): void;
    setArucoDictionary(dictionary: ArucoDictionary): void;
    get codeDuplicateFilter(): number;
    set codeDuplicateFilter(value: number);
}

declare class BarcodeCapture extends DefaultSerializeable implements DataCaptureMode {
    private static get barcodeCaptureDefaults();
    private type;
    private modeId;
    private _isEnabled;
    private _feedback;
    private settings;
    private privateContext;
    private get _context();
    private set _context(value);
    private parentId;
    private listeners;
    private hasListeners;
    private controller;
    static createRecommendedCameraSettings(): CameraSettings;
    constructor(settings: BarcodeCaptureSettings);
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    get context(): DataCaptureContext | null;
    get feedback(): BarcodeCaptureFeedback;
    set feedback(feedback: BarcodeCaptureFeedback);
    applySettings(settings: BarcodeCaptureSettings): Promise<void>;
    getBarcodeCaptureLicenseInfo(): Promise<BarcodeCaptureLicenseInfo | null>;
    addListener(listener: BarcodeCaptureListener): void;
    removeListener(listener: BarcodeCaptureListener): void;
}
interface PrivateBarcodeCapture extends PrivateDataCaptureMode {
    _context: DataCaptureContext | null;
    listeners: BarcodeCaptureListener[];
    isInListenerCallback: boolean;
    parentId: number | null;
}

declare class BarcodeCaptureOverlay extends DefaultSerializeable implements DataCaptureOverlay {
    private type;
    private modeId;
    private controller;
    private _view;
    private get view();
    private set view(value);
    private _shouldShowScanAreaGuides;
    private _viewfinder;
    private static get barcodeCaptureDefaults();
    private _brush;
    get brush(): Brush;
    set brush(newBrush: Brush);
    get viewfinder(): Viewfinder | null;
    set viewfinder(newViewfinder: Viewfinder | null);
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    constructor(mode: BarcodeCapture);
}

declare enum BarcodeCaptureListenerEvents {
    didUpdateSession = "BarcodeCaptureListener.didUpdateSession",
    didScan = "BarcodeCaptureListener.didScan"
}
interface BarcodeCaptureSessionEventPayload {
    session: string;
    frameId: string | null;
    modeId: number | null;
}
declare class BarcodeCaptureListenerController extends BaseController<BarcodeProxy> {
    private mode;
    private isListeningForEvents;
    private frameDataController;
    private adapter;
    constructor(barcodeCapture: BarcodeCapture);
    private get modeId();
    reset(): Promise<void>;
    setModeEnabledState(enabled: boolean): Promise<void>;
    updateBarcodeCaptureMode(): Promise<void>;
    getBarcodeCaptureLicenseInfo(): Promise<BarcodeCaptureLicenseInfo | null>;
    applyBarcodeCaptureModeSettings(modeSettings: BarcodeCaptureSettings): Promise<void>;
    subscribeListener(): Promise<void>;
    unsubscribeListener(): Promise<void>;
    dispose(): void;
    private initialize;
    private handleDidUpdateSession;
    private handleDidScan;
    private notifyListenersOfDidUpdateSession;
    private notifyListenersOfDidScan;
    private handleDidUpdateSessionWrapper;
    private handleDidScanWrapper;
}

declare class BarcodeCaptureOverlayController extends BaseController<BarcodeProxy> {
    private overlay;
    private adapter;
    constructor(overlay: BarcodeCaptureOverlay);
    updateBarcodeCaptureOverlay(overlay: BarcodeCaptureOverlay): Promise<void>;
    dispose(): void;
}

declare class BarcodeCountFeedback extends DefaultSerializeable {
    private static get barcodeCountDefaults();
    private controller;
    private _success;
    private _failure;
    static get default(): BarcodeCountFeedback;
    static get emptyFeedback(): BarcodeCountFeedback;
    private static fromJSON;
    private constructor();
    get success(): Feedback;
    set success(success: Feedback);
    get failure(): Feedback;
    set failure(failure: Feedback);
    private updateFeedback;
}
interface BarcodeCountFeedbackJSON {
    success: Feedback;
    failure: Feedback;
}

declare class BarcodeCountSettings extends DefaultSerializeable {
    private symbologies;
    private properties;
    private _filterSettings;
    private _expectsOnlyUniqueBarcodes;
    private _mappingEnabled;
    private _disableModeWhenCaptureListCompleted;
    private _clusteringMode;
    private readonly _scanPreviewEnabled;
    private static get barcodeCountDefaults();
    constructor(scanPreviewEnabled?: boolean);
    get expectsOnlyUniqueBarcodes(): boolean;
    set expectsOnlyUniqueBarcodes(expectsOnlyUniqueBarcodes: boolean);
    get mappingEnabled(): boolean;
    set mappingEnabled(mappingEnabled: boolean);
    get disableModeWhenCaptureListCompleted(): boolean;
    set disableModeWhenCaptureListCompleted(disable: boolean);
    get clusteringMode(): ClusteringMode;
    set clusteringMode(mode: ClusteringMode);
    get scanPreviewEnabled(): boolean;
    get filterSettings(): BarcodeFilterSettings;
    get enabledSymbologies(): Symbology[];
    settingsForSymbology(symbology: Symbology): SymbologySettings;
    enableSymbologies(symbologies: Symbology[]): void;
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
}

declare class BarcodeCountSession extends DefaultSerializeable {
    private _recognizedBarcodes;
    private _additionalBarcodes;
    private _recognizedClusters;
    private _frameSequenceID;
    private sessionController;
    private frameId;
    private static fromJSON;
    private constructor();
    get recognizedBarcodes(): Barcode[];
    get additionalBarcodes(): Barcode[];
    get recognizedClusters(): Cluster[];
    get frameSequenceID(): number;
    reset(): Promise<void>;
    getSpatialMap(): Promise<BarcodeSpatialGrid | null>;
    getSpatialMapWithHints(expectedNumberOfRows: number, expectedNumberOfColumns: number): Promise<BarcodeSpatialGrid | null>;
}
interface BarcodeCountSessionJSON {
    recognizedBarcodes: BarcodeJSON[];
    additionalBarcodes: Barcode[];
    recognizedClusters?: any[];
    frameSequenceId: number;
}

interface BarcodeCountListener {
    didScan?(barcodeCount: BarcodeCount, session: BarcodeCountSession, getFrameData: () => Promise<FrameData | null>): Promise<void>;
    onSessionUpdated?(barcodeCount: BarcodeCount, session: BarcodeCountSession, getFrameData: () => Promise<FrameData | null>): Promise<void>;
}

declare class BarcodeCountCaptureListSession extends DefaultSerializeable {
    get correctBarcodes(): TrackedBarcode[];
    get wrongBarcodes(): TrackedBarcode[];
    get missingBarcodes(): TargetBarcode[];
    get additionalBarcodes(): Barcode[];
    get acceptedBarcodes(): TrackedBarcode[];
    get rejectedBarcodes(): TrackedBarcode[];
    private _correctBarcodes;
    private _wrongBarcodes;
    private _missingBarcodes;
    private _additionalBarcodes;
    private _acceptedBarcodes;
    private _rejectedBarcodes;
    private static fromJSON;
    private constructor();
}
interface BarcodeCountCaptureListSessionJSON {
    correctBarcodes: TrackedBarcode[];
    wrongBarcodes: TrackedBarcode[];
    missingBarcodes: TargetBarcode[];
    additionalBarcodes: Barcode[];
    acceptedBarcodes: TrackedBarcode[];
    rejectedBarcodes: TrackedBarcode[];
}
interface PrivateBarcodeCountCaptureListSession {
    fromJSON(json: BarcodeCountCaptureListSessionJSON): BarcodeCountCaptureListSession;
}

interface BarcodeCountCaptureListListener {
    didUpdateSession?(barcodeCountCaptureList: BarcodeCountCaptureList, session: BarcodeCountCaptureListSession): void;
    didCompleteCaptureList?(barcodeCountCaptureList: BarcodeCountCaptureList, session: BarcodeCountCaptureListSession): void;
}

declare class BarcodeCountCaptureList {
    private listener;
    private targetBarcodes;
    private _barcodeDataTransformer;
    static create(listener: BarcodeCountCaptureListListener, targetBarcodes: TargetBarcode[]): BarcodeCountCaptureList;
    private constructor();
    setBarcodeDataTransformer(transformer: BarcodeDataTransformer | null): void;
}
interface PrivateBarcodeCountCaptureList {
    targetBarcodes: TargetBarcode[];
    listener: BarcodeCountCaptureListListener;
    _barcodeDataTransformer: BarcodeDataTransformer | null;
}

interface BarcodeCountViewUiListener {
    didTapListButton?(view: BarcodeCountView): void;
    didTapExitButton?(view: BarcodeCountView): void;
    didTapSingleScanButton?(view: BarcodeCountView): void;
}

interface BarcodeCountViewListener {
    brushForRecognizedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): Brush | null;
    brushForRecognizedBarcodeNotInList?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): Brush | null;
    brushForAcceptedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): Brush | null;
    brushForRejectedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): Brush | null;
    didTapRecognizedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): void;
    didTapFilteredBarcode?(view: BarcodeCountView, filteredBarcode: TrackedBarcode): void;
    didTapRecognizedBarcodeNotInList?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): void;
    didTapAcceptedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): void;
    didTapRejectedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): void;
    didTapCluster?(view: BarcodeCountView, cluster: Cluster): void;
    didCompleteCaptureList?(view: BarcodeCountView): void;
}

declare class BarcodeCountToolbarSettings extends DefaultSerializeable {
    private static get barcodeCountDefaults();
    constructor();
    audioOnButtonText: string;
    audioOffButtonText: string;
    audioButtonContentDescription: string | null;
    audioButtonAccessibilityHint: string | null;
    audioButtonAccessibilityLabel: string | null;
    vibrationOnButtonText: string;
    vibrationOffButtonText: string;
    vibrationButtonContentDescription: string | null;
    vibrationButtonAccessibilityHint: string | null;
    vibrationButtonAccessibilityLabel: string | null;
    strapModeOnButtonText: string;
    strapModeOffButtonText: string;
    strapModeButtonContentDescription: string | null;
    strapModeButtonAccessibilityHint: string | null;
    strapModeButtonAccessibilityLabel: string | null;
    colorSchemeOnButtonText: string;
    colorSchemeOffButtonText: string;
    colorSchemeButtonContentDescription: string | null;
    colorSchemeButtonAccessibilityHint: string | null;
    colorSchemeButtonAccessibilityLabel: string | null;
}

declare class BarcodeCountNotInListActionSettings extends DefaultSerializeable {
    private _enabled;
    private _acceptButtonText;
    private _acceptButtonAccessibilityLabel;
    private _acceptButtonAccessibilityHint;
    private _acceptButtonContentDescription;
    private _rejectButtonText;
    private _rejectButtonAccessibilityLabel;
    private _rejectButtonAccessibilityHint;
    private _rejectButtonContentDescription;
    private _cancelButtonText;
    private _cancelButtonAccessibilityLabel;
    private _cancelButtonAccessibilityHint;
    private _cancelButtonContentDescription;
    private _barcodeAcceptedHint;
    private _barcodeRejectedHint;
    private static barcodeCountDefaults;
    constructor();
    get enabled(): boolean;
    set enabled(newValue: boolean);
    get acceptButtonText(): string;
    set acceptButtonText(newValue: string);
    get acceptButtonAccessibilityLabel(): string;
    set acceptButtonAccessibilityLabel(newValue: string);
    get acceptButtonAccessibilityHint(): string;
    set acceptButtonAccessibilityHint(value: string);
    get acceptButtonContentDescription(): string;
    set acceptButtonContentDescription(value: string);
    get rejectButtonText(): string;
    set rejectButtonText(value: string);
    get rejectButtonAccessibilityLabel(): string;
    set rejectButtonAccessibilityLabel(value: string);
    get rejectButtonAccessibilityHint(): string;
    set rejectButtonAccessibilityHint(value: string);
    get rejectButtonContentDescription(): string;
    set rejectButtonContentDescription(value: string);
    get cancelButtonText(): string;
    set cancelButtonText(value: string);
    get cancelButtonAccessibilityLabel(): string;
    set cancelButtonAccessibilityLabel(value: string);
    get cancelButtonAccessibilityHint(): string;
    set cancelButtonAccessibilityHint(value: string);
    get cancelButtonContentDescription(): string;
    set cancelButtonContentDescription(value: string);
    get barcodeAcceptedHint(): string;
    set barcodeAcceptedHint(value: string);
    get barcodeRejectedHint(): string;
    set barcodeRejectedHint(value: string);
}

declare class BarcodeCountMappingFlowSettings extends DefaultSerializeable {
    private static get barcodeCountDefaults();
    scanBarcodesGuidanceText: string;
    nextButtonText: string;
    stepBackGuidanceText: string;
    redoScanButtonText: string;
    restartButtonText: string;
    finishButtonText: string;
    constructor();
}

interface BaseBarcodeCountViewProps {
    context: DataCaptureContext;
    barcodeCount: BarcodeCount;
    viewStyle: BarcodeCountViewStyle;
    uiListener?: BarcodeCountViewUiListener | null;
    listener?: BarcodeCountViewListener | null;
    shouldDisableModeOnExitButtonTapped?: boolean;
    shouldShowUserGuidanceView?: boolean;
    shouldShowListButton?: boolean;
    shouldShowExitButton?: boolean;
    shouldShowShutterButton?: boolean;
    shouldShowHints?: boolean;
    shouldShowClearHighlightsButton?: boolean;
    shouldShowSingleScanButton?: boolean;
    shouldShowFloatingShutterButton?: boolean;
    shouldShowToolbar?: boolean;
    shouldShowStatusModeButton?: boolean;
    shouldShowStatusIconsOnScan?: boolean;
    shouldShowScanAreaGuides?: boolean;
    recognizedBrush?: any;
    notInListBrush?: any;
    acceptedBrush?: any;
    rejectedBrush?: any;
    filterSettings?: any;
    listButtonAccessibilityHint?: string;
    listButtonAccessibilityLabel?: string;
    listButtonContentDescription?: string;
    exitButtonAccessibilityHint?: string;
    exitButtonAccessibilityLabel?: string;
    exitButtonContentDescription?: string;
    shutterButtonAccessibilityHint?: string;
    shutterButtonAccessibilityLabel?: string;
    shutterButtonContentDescription?: string;
    floatingShutterButtonAccessibilityHint?: string;
    floatingShutterButtonAccessibilityLabel?: string;
    floatingShutterButtonContentDescription?: string;
    clearHighlightsButtonAccessibilityHint?: string;
    clearHighlightsButtonAccessibilityLabel?: string;
    clearHighlightsButtonContentDescription?: string;
    singleScanButtonAccessibilityHint?: string;
    singleScanButtonAccessibilityLabel?: string;
    singleScanButtonContentDescription?: string;
    statusModeButtonAccessibilityHint?: string;
    statusModeButtonAccessibilityLabel?: string;
    statusModeButtonContentDescription?: string;
    clearHighlightsButtonText?: string;
    exitButtonText?: string;
    textForTapShutterToScanHint?: string;
    textForScanningHint?: string;
    textForMoveCloserAndRescanHint?: string;
    textForMoveFurtherAndRescanHint?: string;
    textForBarcodesNotInListDetectedHint?: string;
    textForScreenCleanedUpHint?: string;
    textForClusteringGestureHint?: string;
    shouldShowListProgressBar?: boolean;
    shouldShowTorchControl?: boolean;
    torchControlPosition?: any;
    tapToUncountEnabled?: boolean;
    textForTapToUncountHint?: string;
    barcodeNotInListActionSettings?: BarcodeCountNotInListActionSettings;
    hardwareTriggerEnabled?: boolean;
    mappingFlowSettings?: BarcodeCountMappingFlowSettings;
}

declare enum BarcodeCountStatus {
    None = "none",
    NotAvailable = "notAvailable",
    Expired = "expired",
    Fragile = "fragile",
    QualityCheck = "qualityCheck",
    LowStock = "lowStock",
    Wrong = "wrong",
    ExpiringSoon = "expiringSoon"
}

declare class BarcodeCountStatusItem extends DefaultSerializeable {
    private _barcode;
    private _barcodeId;
    private _status;
    static create(barcode: TrackedBarcode, status: BarcodeCountStatus): BarcodeCountStatusItem;
    private constructor();
    get barcode(): TrackedBarcode;
    get status(): BarcodeCountStatus;
}

interface BarcodeCountStatusResult {
}
declare class BarcodeCountStatusResultSuccess extends DefaultSerializeable implements BarcodeCountStatusResult {
    private _statusList;
    private _statusModeEnabledMessage;
    private _statusModeDisabledMessage;
    private readonly _type;
    static create(statusList: BarcodeCountStatusItem[], statusModeEnabledMessage: string, statusModeDisabledMessage: string): BarcodeCountStatusResult;
    private constructor();
}
declare class BarcodeCountStatusResultError extends DefaultSerializeable implements BarcodeCountStatusResult {
    private _statusList;
    private _errorMessage;
    private _statusModeDisabledMessage;
    private readonly _type;
    static create(statusList: BarcodeCountStatusItem[], errorMessage: string, statusModeDisabledMessage: string): BarcodeCountStatusResult;
    private constructor();
}
declare class BarcodeCountStatusResultAbort extends DefaultSerializeable implements BarcodeCountStatusResult {
    private _errorMessage;
    private readonly _type;
    static create(errorMessage: string): BarcodeCountStatusResult;
    private constructor();
}

declare class BarcodeCountStatusProviderCallback {
    private _controller;
    private _requestId;
    onStatusReady(statusResult: BarcodeCountStatusResult): Promise<void>;
}
interface PrivateBarcodeCountStatusProviderCallback {
    _controller: BarcodeCountViewController;
    _requestId: string;
}

interface BarcodeCountStatusProvider {
    onStatusRequested(barcodes: TrackedBarcode[], callback: BarcodeCountStatusProviderCallback): void;
}

interface BarcodeCountView {
}
declare class BaseBarcodeCountView implements BarcodeCountView {
    platformView: any;
    private _viewId;
    private _controller;
    private _uiListener;
    private _listener;
    private _barcodeCount;
    private _context;
    private _mappingFlowSettings;
    private _shouldDisableModeOnExitButtonTapped;
    private _shouldShowUserGuidanceView;
    private _shouldShowListButton;
    private _shouldShowExitButton;
    private _shouldShowShutterButton;
    private _shouldShowHints;
    private _shouldShowClearHighlightsButton;
    private _shouldShowSingleScanButton;
    private _shouldShowFloatingShutterButton;
    private _shouldShowToolbar;
    private _shouldShowStatusModeButton;
    private _shouldShowStatusIconsOnScan;
    private _shouldShowScanAreaGuides;
    private _shouldShowListProgressBar;
    private _shouldShowTorchControl;
    private _tapToUncountEnabled;
    private _hardwareTriggerEnabled;
    private _recognizedBrush;
    private _notInListBrush;
    private _acceptedBrush;
    private _rejectedBrush;
    private _filterSettings;
    private _listButtonAccessibilityHint;
    private _listButtonAccessibilityLabel;
    private _listButtonContentDescription;
    private _exitButtonAccessibilityHint;
    private _exitButtonAccessibilityLabel;
    private _exitButtonContentDescription;
    private _shutterButtonAccessibilityHint;
    private _shutterButtonAccessibilityLabel;
    private _shutterButtonContentDescription;
    private _floatingShutterButtonAccessibilityHint;
    private _floatingShutterButtonAccessibilityLabel;
    private _floatingShutterButtonContentDescription;
    private _clearHighlightsButtonAccessibilityHint;
    private _clearHighlightsButtonAccessibilityLabel;
    private _clearHighlightsButtonContentDescription;
    private _singleScanButtonAccessibilityHint;
    private _singleScanButtonAccessibilityLabel;
    private _singleScanButtonContentDescription;
    private _statusModeButtonAccessibilityHint;
    private _statusModeButtonAccessibilityLabel;
    private _statusModeButtonContentDescription;
    private _clearHighlightsButtonText;
    private _exitButtonText;
    private _textForTapShutterToScanHint;
    private _textForScanningHint;
    private _textForMoveCloserAndRescanHint;
    private _textForMoveFurtherAndRescanHint;
    private _textForBarcodesNotInListDetectedHint;
    private _textForScreenCleanedUpHint;
    private _textForClusteringGestureHint;
    private _textForTapToUncountHint;
    private _toolbarSettings;
    private _torchControlPosition;
    private _viewStyle;
    private _barcodeNotInListActionSettings;
    private isViewCreated;
    private static get barcodeCountDefaults();
    static get defaultRecognizedBrush(): Brush;
    static get defaultNotInListBrush(): Brush;
    static get defaultAcceptedBrush(): Brush;
    static get defaultRejectedBrush(): Brush;
    static get hardwareTriggerSupported(): boolean;
    static withProps(props: BaseBarcodeCountViewProps, platformView?: any): BaseBarcodeCountView;
    constructor({ context, barcodeCount, viewStyle, platformView, mappingFlowSettings, }: {
        context: DataCaptureContext;
        barcodeCount: BarcodeCount;
        viewStyle: BarcodeCountViewStyle;
        platformView?: any;
        mappingFlowSettings?: BarcodeCountMappingFlowSettings;
    });
    get viewId(): number;
    get context(): DataCaptureContext;
    get uiListener(): BarcodeCountViewUiListener | null;
    set uiListener(listener: BarcodeCountViewUiListener | null);
    get listener(): BarcodeCountViewListener | null;
    set listener(listener: BarcodeCountViewListener | null);
    get shouldDisableModeOnExitButtonTapped(): boolean;
    set shouldDisableModeOnExitButtonTapped(newValue: boolean);
    get shouldShowUserGuidanceView(): boolean;
    set shouldShowUserGuidanceView(newValue: boolean);
    get shouldShowListButton(): boolean;
    set shouldShowListButton(newValue: boolean);
    get shouldShowExitButton(): boolean;
    set shouldShowExitButton(newValue: boolean);
    get shouldShowShutterButton(): boolean;
    set shouldShowShutterButton(newValue: boolean);
    get shouldShowHints(): boolean;
    set shouldShowHints(newValue: boolean);
    get shouldShowClearHighlightsButton(): boolean;
    set shouldShowClearHighlightsButton(newValue: boolean);
    get shouldShowSingleScanButton(): boolean;
    set shouldShowSingleScanButton(newValue: boolean);
    get shouldShowFloatingShutterButton(): boolean;
    set shouldShowFloatingShutterButton(newValue: boolean);
    get shouldShowToolbar(): boolean;
    set shouldShowToolbar(newValue: boolean);
    get shouldShowStatusModeButton(): boolean;
    set shouldShowStatusModeButton(newValue: boolean);
    get shouldShowStatusIconsOnScan(): boolean;
    set shouldShowStatusIconsOnScan(newValue: boolean);
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(newValue: boolean);
    get recognizedBrush(): Brush | null;
    set recognizedBrush(newValue: Brush | null);
    get notInListBrush(): Brush | null;
    set notInListBrush(newValue: Brush | null);
    get acceptedBrush(): Brush | null;
    set acceptedBrush(value: Brush | null);
    get rejectedBrush(): Brush | null;
    set rejectedBrush(value: Brush | null);
    get filterSettings(): BarcodeFilterHighlightSettings | null;
    set filterSettings(newValue: BarcodeFilterHighlightSettings | null);
    get style(): BarcodeCountViewStyle;
    get listButtonAccessibilityHint(): string;
    set listButtonAccessibilityHint(newValue: string);
    get listButtonAccessibilityLabel(): string;
    set listButtonAccessibilityLabel(newValue: string);
    get listButtonContentDescription(): string;
    set listButtonContentDescription(newValue: string);
    get exitButtonAccessibilityHint(): string;
    set exitButtonAccessibilityHint(newValue: string);
    get exitButtonAccessibilityLabel(): string;
    set exitButtonAccessibilityLabel(newValue: string);
    get exitButtonContentDescription(): string;
    set exitButtonContentDescription(newValue: string);
    get shutterButtonAccessibilityHint(): string;
    set shutterButtonAccessibilityHint(newValue: string);
    get shutterButtonAccessibilityLabel(): string;
    set shutterButtonAccessibilityLabel(newValue: string);
    get shutterButtonContentDescription(): string;
    set shutterButtonContentDescription(newValue: string);
    get floatingShutterButtonAccessibilityHint(): string;
    set floatingShutterButtonAccessibilityHint(newValue: string);
    get floatingShutterButtonAccessibilityLabel(): string;
    set floatingShutterButtonAccessibilityLabel(newValue: string);
    get floatingShutterButtonContentDescription(): string;
    set floatingShutterButtonContentDescription(newValue: string);
    get clearHighlightsButtonAccessibilityHint(): string;
    set clearHighlightsButtonAccessibilityHint(newValue: string);
    get clearHighlightsButtonAccessibilityLabel(): string;
    set clearHighlightsButtonAccessibilityLabel(newValue: string);
    get clearHighlightsButtonContentDescription(): string;
    set clearHighlightsButtonContentDescription(newValue: string);
    get singleScanButtonAccessibilityHint(): string;
    set singleScanButtonAccessibilityHint(newValue: string);
    get singleScanButtonAccessibilityLabel(): string;
    set singleScanButtonAccessibilityLabel(newValue: string);
    get singleScanButtonContentDescription(): string;
    set singleScanButtonContentDescription(newValue: string);
    get statusModeButtonAccessibilityHint(): string;
    set statusModeButtonAccessibilityHint(newValue: string);
    get statusModeButtonAccessibilityLabel(): string;
    set statusModeButtonAccessibilityLabel(newValue: string);
    get statusModeButtonContentDescription(): string;
    set statusModeButtonContentDescription(newValue: string);
    get clearHighlightsButtonText(): string;
    set clearHighlightsButtonText(newValue: string);
    get exitButtonText(): string;
    set exitButtonText(newValue: string);
    get textForTapShutterToScanHint(): string;
    set textForTapShutterToScanHint(newValue: string);
    get textForScanningHint(): string;
    set textForScanningHint(newValue: string);
    get textForMoveCloserAndRescanHint(): string;
    set textForMoveCloserAndRescanHint(newValue: string);
    get textForMoveFurtherAndRescanHint(): string;
    set textForMoveFurtherAndRescanHint(newValue: string);
    get textForBarcodesNotInListDetectedHint(): string;
    set textForBarcodesNotInListDetectedHint(newValue: string);
    get textForScreenCleanedUpHint(): string;
    set textForScreenCleanedUpHint(newValue: string);
    get textForClusteringGestureHint(): string;
    set textForClusteringGestureHint(newValue: string);
    get shouldShowListProgressBar(): boolean;
    set shouldShowListProgressBar(newValue: boolean);
    get shouldShowTorchControl(): boolean;
    set shouldShowTorchControl(newValue: boolean);
    get torchControlPosition(): Anchor;
    set torchControlPosition(newValue: Anchor);
    get tapToUncountEnabled(): boolean;
    set tapToUncountEnabled(newValue: boolean);
    get textForTapToUncountHint(): string;
    set textForTapToUncountHint(newValue: string);
    get barcodeNotInListActionSettings(): BarcodeCountNotInListActionSettings;
    set barcodeNotInListActionSettings(value: BarcodeCountNotInListActionSettings);
    get hardwareTriggerEnabled(): boolean;
    set hardwareTriggerEnabled(newValue: boolean);
    dispose(): Promise<void>;
    clearHighlights(): Promise<void>;
    setToolbarSettings(settings: BarcodeCountToolbarSettings): void;
    setStatusProvider(provider: BarcodeCountStatusProvider): void;
    setPositionAndSize(top: number, left: number, width: number, height: number, shouldBeUnderWebView: boolean): Promise<void>;
    show(): Promise<void>;
    hide(): Promise<void>;
    setBrushForRecognizedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    setBrushForRecognizedBarcodeNotInList(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    setBrushForAcceptedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    setBrushForRejectedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    enableHardwareTrigger(hardwareTriggerKeyCode: number | null): Promise<void>;
    createNativeView(viewId: number): Promise<void>;
    removeNativeView(): Promise<void>;
    toJSON(): object;
    updateWithProps(prevProps: BaseBarcodeCountViewProps, props: BaseBarcodeCountViewProps): void;
    private updateNative;
}

declare enum BarcodeCountUiListenerEvents {
    singleScanButtonTapped = "BarcodeCountViewUiListener.onSingleScanButtonTapped",
    listButtonTapped = "BarcodeCountViewUiListener.onListButtonTapped",
    exitButtonTapped = "BarcodeCountViewUiListener.onExitButtonTapped"
}
declare enum BarcodeCountViewListenerEvents {
    brushForRecognizedBarcode = "BarcodeCountViewListener.brushForRecognizedBarcode",
    brushForRecognizedBarcodeNotInList = "BarcodeCountViewListener.brushForRecognizedBarcodeNotInList",
    brushForAcceptedBarcode = "BarcodeCountViewListener.brushForAcceptedBarcode",
    brushForRejectedBarcode = "BarcodeCountViewListener.brushForRejectedBarcode",
    filteredBarcodeTapped = "BarcodeCountViewListener.didTapFilteredBarcode",
    recognizedBarcodeNotInListTapped = "BarcodeCountViewListener.didTapRecognizedBarcodeNotInList",
    recognizedBarcodeTapped = "BarcodeCountViewListener.didTapRecognizedBarcode",
    acceptedBarcodeTapped = "BarcodeCountViewListener.didTapAcceptedBarcode",
    rejectedBarcodeTapped = "BarcodeCountViewListener.didTapRejectedBarcode",
    captureListCompleted = "BarcodeCountViewListener.didCompleteCaptureList"
}
declare enum BarcodeCountModeListenerEvents {
    didUpdateCaptureListSession = "BarcodeCountCaptureListListener.didUpdateSession",
    didScan = "BarcodeCountListener.onScan",
    didUpdateSession = "BarcodeCountListener.didUpdateSession",
    transformBarcodeData = "BarcodeDataTransformer.transformBarcodeData",
    onStatusRequested = "BarcodeCountStatusProvider.onStatusRequested"
}
interface BarcodeCountViewProxy extends BarcodeProxy {
    $createBarcodeCountView({ viewId, viewJson }: {
        viewId: number;
        viewJson: string;
    }): Promise<void>;
    $removeBarcodeCountView({ viewId }: {
        viewId: number;
    }): Promise<void>;
    $setBarcodeCountViewPositionAndSize({ top, left, width, height, shouldBeUnderWebView, }: {
        top: number;
        left: number;
        width: number;
        height: number;
        shouldBeUnderWebView: boolean;
    }): Promise<void>;
}
declare class BarcodeCountViewController extends BaseController<BarcodeCountViewProxy> {
    private view;
    private barcodeCount;
    private eventHandlers;
    private isUiListenerRegistered;
    private isViewListenerRegistered;
    private isModeListenerRegistered;
    private isStatusProviderRegistered;
    private _barcodeCountCaptureList;
    private _statusProvider;
    private adapter;
    constructor(view: BaseBarcodeCountView, barcodeCount: BarcodeCount);
    registerModeListener(): Promise<void>;
    registerUiListener(): Promise<void>;
    registerViewListener(): Promise<void>;
    update(): Promise<void>;
    createNativeView(): Promise<void>;
    removeNativeView(): Promise<void>;
    setUiListener(listener: BarcodeCountViewUiListener | null): Promise<void>;
    setViewListener(listener: BarcodeCountViewListener | null): Promise<void>;
    unregisterModeListener(): Promise<void>;
    clearHighlights(): Promise<void>;
    dispose(): Promise<void>;
    setPositionAndSize(top: number, left: number, width: number, height: number, shouldBeUnderWebView: boolean): Promise<void>;
    show(): Promise<void>;
    hide(): Promise<void>;
    setBrushForRecognizedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    setBrushForRecognizedBarcodeNotInList(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    setBrushForAcceptedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    setBrushForRejectedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    enableHardwareTrigger(hardwareTriggerKeyCode: number | null): Promise<void>;
    updateMode(): Promise<void>;
    reset(): Promise<void>;
    setModeEnabledState(enabled: boolean): Promise<void>;
    startScanningPhase(): Promise<void>;
    endScanningPhase(): Promise<void>;
    updateFeedback(feedbackJson: string): Promise<void>;
    setBarcodeCountCaptureList(barcodeCountCaptureList: BarcodeCountCaptureList): void;
    setStatusProvider(provider: BarcodeCountStatusProvider | null): Promise<void>;
    submitBarcodeCountStatusProviderCallback(statusResult: BarcodeCountStatusResult, requestId: string): Promise<void>;
    private registerStatusProviderListener;
    private unregisterStatusProviderListener;
    private handleOnStatusRequestedWrapper;
    private handleOnStatusRequested;
    private initialize;
    private createView;
    private applyCaptureListToNative;
    private unregisterViewListener;
    private unregisterUiListener;
    private buildTrackedBarcodeBrushPayload;
    private get isViewCreated();
    private handleSingleScanButtonTappedWrapper;
    private handleListButtonTappedWrapper;
    private handleExitButtonTappedWrapper;
    private handleBrushForRecognizedBarcodeWrapper;
    private handleBrushForRecognizedBarcodeNotInListWrapper;
    private handleBrushForAcceptedBarcodeWrapper;
    private handleBrushForRejectedBarcodeWrapper;
    private handleFilteredBarcodeTappedWrapper;
    private handleRecognizedBarcodeNotInListTappedWrapper;
    private handleRecognizedBarcodeTappedWrapper;
    private handleAcceptedBarcodeTappedWrapper;
    private handleRejectedBarcodeTappedWrapper;
    private handleCaptureListCompletedWrapper;
    private handleDidScanWrapper;
    private handleDidUpdateCaptureListSessionWrapper;
    private handleDidUpdateBarcodeCountSessionWrapper;
    private handleTransformBarcodeDataWrapper;
    private transformBarcodeData;
}

declare class BarcodeCount extends DefaultSerializeable implements DataCaptureMode {
    private static get barcodeCountDefaults();
    private type;
    private _feedback;
    private _isEnabled;
    private _hasListeners;
    private _additionalBarcodes;
    private settings;
    private listeners;
    private privateContext;
    private _controller;
    private _pendingCaptureList;
    static createRecommendedCameraSettings(): CameraSettings;
    constructor(settings: BarcodeCountSettings);
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    get context(): DataCaptureContext | null;
    get feedback(): BarcodeCountFeedback;
    set feedback(feedback: BarcodeCountFeedback);
    private get _context();
    private set _context(value);
    private get controller();
    private set controller(value);
    applySettings(settings: BarcodeCountSettings): Promise<void>;
    addListener(listener: BarcodeCountListener): void;
    removeListener(listener: BarcodeCountListener): void;
    reset(): Promise<void>;
    startScanningPhase(): void;
    endScanningPhase(): void;
    setBarcodeCountCaptureList(barcodeCountCaptureList: BarcodeCountCaptureList): void;
    setAdditionalBarcodes(barcodes: Barcode[]): Promise<void>;
    clearAdditionalBarcodes(): Promise<void>;
    private checkAndSubscribeListeners;
    private checkAndUnsubscribeListeners;
    private didChange;
    private unsubscribeNativeListeners;
}
interface PrivateBarcodeCount {
    _context: DataCaptureContext | null;
    listeners: BarcodeCountListener[];
    didChange: () => Promise<void>;
    subscribeNativeListeners: () => void;
    unsubscribeNativeListeners: () => void;
    controller: BarcodeCountViewController | null;
    _hasListeners: boolean;
}

declare class BarcodeCountSessionController extends BaseController<BarcodeProxy> {
    private viewId;
    private adapter;
    constructor(viewId: number);
    resetSession(): Promise<void>;
    getSpatialMap(): Promise<BarcodeSpatialGrid | undefined>;
    getSpatialMapWithHints(expectedNumberOfRows: number, expectedNumberOfColumns: number): Promise<BarcodeSpatialGrid | undefined>;
}

interface PrivateBarcodeCountView {
}
interface PrivateBarcodeCountView {
    _context: DataCaptureContext;
    _barcodeCount: BarcodeCount;
    toJSON(): object;
}

declare class BarcodePickSettings extends DefaultSerializeable {
    private symbologies;
    private properties;
    private _soundEnabled;
    private _hapticsEnabled;
    private _cachingEnabled;
    private _arucoDictionary;
    private _filterSettings;
    private static get barcodePickDefaults();
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
    setArucoDictionary(dictionary: ArucoDictionary): void;
    get cachingEnabled(): boolean;
    set cachingEnabled(enabled: boolean);
    get filterSettings(): BarcodeFilterSettings;
    set filterSettings(filterSettings: BarcodeFilterSettings);
}

declare class BarcodePickActionCallback {
    private _viewController;
    private _itemData;
    onFinish(result: boolean): void;
}
interface PrivateBarcodePickCallback {
    _viewController: BarcodePickViewController;
    _itemData: string;
}

interface BarcodePickActionListener {
    didPickItem(data: string, callback: BarcodePickActionCallback): void;
    didUnpickItem(data: string, callback: BarcodePickActionCallback): void;
}

declare class BarcodePickViewSettings extends DefaultSerializeable {
    private _highlightStyle;
    private _showLoadingDialog;
    private _showFinishButton;
    private _showPauseButton;
    private _showZoomButton;
    private _loadingDialogTextForPicking;
    private _loadingDialogTextForUnpicking;
    private _showGuidelines;
    private _initialGuidelineText;
    private _moveCloserGuidelineText;
    private _showHints;
    private _onFirstItemToPickFoundHintText;
    private _onFirstItemPickCompletedHintText;
    private _onFirstUnmarkedItemPickCompletedHintText;
    private _onFirstItemUnpickCompletedHintText;
    private _zoomButtonPosition;
    private _showTorchButton;
    private _torchButtonPosition;
    private _logoStyle;
    private _logoAnchor;
    private _tapShutterToPauseGuidelineText;
    private _hardwareTriggerEnabled;
    private _filterHighlightSettings;
    private _uiButtonsOffset;
    private _hardwareTriggerKeyCode;
    private static get barcodePickDefaults();
    constructor();
    get highlightStyle(): BarcodePickViewHighlightStyle;
    set highlightStyle(style: BarcodePickViewHighlightStyle);
    get showLoadingDialog(): boolean;
    set showLoadingDialog(style: boolean);
    get showFinishButton(): boolean;
    set showFinishButton(show: boolean);
    get showPauseButton(): boolean;
    set showPauseButton(show: boolean);
    get showZoomButton(): boolean;
    set showZoomButton(show: boolean);
    get loadingDialogTextForPicking(): string;
    set loadingDialogTextForPicking(text: string);
    get loadingDialogTextForUnpicking(): string;
    set loadingDialogTextForUnpicking(text: string);
    get showGuidelines(): boolean;
    set showGuidelines(show: boolean);
    get initialGuidelineText(): string;
    set initialGuidelineText(text: string);
    get moveCloserGuidelineText(): string;
    set moveCloserGuidelineText(text: string);
    get showHints(): boolean;
    set showHints(show: boolean);
    get onFirstItemToPickFoundHintText(): string;
    set onFirstItemToPickFoundHintText(text: string);
    get onFirstItemPickCompletedHintText(): string;
    set onFirstItemPickCompletedHintText(text: string);
    get onFirstUnmarkedItemPickCompletedHintText(): string;
    set onFirstUnmarkedItemPickCompletedHintText(text: string);
    get onFirstItemUnpickCompletedHintText(): string;
    set onFirstItemUnpickCompletedHintText(text: string);
    get zoomButtonPosition(): Anchor;
    set zoomButtonPosition(position: Anchor);
    get showTorchButton(): boolean;
    set showTorchButton(show: boolean);
    get torchButtonPosition(): Anchor;
    set torchButtonPosition(position: Anchor);
    get logoStyle(): LogoStyle;
    set logoStyle(style: LogoStyle);
    get logoAnchor(): Anchor;
    set logoAnchor(anchor: Anchor);
    get tapShutterToPauseGuidelineText(): string;
    set tapShutterToPauseGuidelineText(text: string);
    get hardwareTriggerEnabled(): boolean;
    set hardwareTriggerEnabled(enabled: boolean);
    get filterHighlightSettings(): BarcodeFilterHighlightSettings | null;
    set filterHighlightSettings(settings: BarcodeFilterHighlightSettings | null);
    get uiButtonsOffset(): NumberWithUnit | null;
    set uiButtonsOffset(offset: NumberWithUnit | null);
    get hardwareTriggerKeyCode(): number | null;
    set hardwareTriggerKeyCode(keyCode: number | null);
}

interface BarcodePickViewUiListener {
    didTapFinishButton(view: BarcodePickView): void;
}

interface BarcodePickViewListener {
    didStartScanning(view: BarcodePickView): void;
    didStopScanning(view: BarcodePickView): void;
    didFreezeScanning(view: BarcodePickView): void;
    didPauseScanning(view: BarcodePickView): void;
}

interface BarcodePickView {
}
declare class BaseBarcodePickView extends DefaultSerializeable implements BarcodePickView {
    barcodePick: BarcodePick;
    settings: BarcodePickViewSettings;
    cameraSettings: CameraSettings;
    private viewController;
    private actionListeners;
    private listeners;
    private isStarted;
    private _context;
    private isViewCreated;
    private _viewId;
    get viewId(): number;
    get context(): DataCaptureContext | null;
    set context(context: DataCaptureContext | null);
    private _barcodePickViewUiListener;
    get uiListener(): BarcodePickViewUiListener | null;
    set uiListener(value: BarcodePickViewUiListener | null);
    constructor({ context, barcodePick, settings, cameraSettings, }: {
        context: DataCaptureContext | null;
        barcodePick: BarcodePick;
        settings: BarcodePickViewSettings;
        cameraSettings: CameraSettings;
    });
    createNativeView(viewId: number): Promise<void>;
    removeNativeView(): Promise<void>;
    dispose(): void;
    start(): Promise<void>;
    stop(): Promise<void>;
    freeze(): Promise<void>;
    pause(): Promise<void>;
    resume(): Promise<void>;
    reset(): Promise<void>;
    addActionListener(listener: BarcodePickActionListener): void;
    removeActionListener(listener: BarcodePickActionListener): void;
    addListener(listener: BarcodePickViewListener): void;
    removeListener(listener: BarcodePickViewListener): void;
    setPickViewPositionAndSize(top: number, left: number, width: number, height: number, shouldBeUnderWebView: boolean): Promise<void>;
    toJSON(): object;
    private checkAndSubscribeActionListeners;
    private checkAndUnsubscribeActionListeners;
    private checkAndSubscribeListeners;
    private checkAndUnsubscribeListeners;
}
interface PrivateBarcodePickView {
    listeners: BarcodePickViewListener[];
    actionListeners: BarcodePickActionListener[];
    toJSON(): object;
}

declare class BarcodePickProductProviderCallbackItem extends DefaultSerializeable {
    private _itemData;
    private _productIdentifier;
    constructor(itemData: string, productIdentifier: string | null);
    get itemData(): string;
    get productIdentifier(): string | null;
}

declare class BarcodePickProductProviderCallback {
    onData(data: BarcodePickProductProviderCallbackItem[]): void;
}

interface BarcodePickAsyncMapperProductProviderCallback {
    productIdentifierForItems(itemsData: string[], callback: BarcodePickProductProviderCallback): void;
}

declare enum BarcodePickAction {
    None = "none",
    Pick = "pick",
    Unpick = "unpick"
}

interface BarcodePickViewProxy extends BarcodeProxy {
    $createPickView({ viewId, json }: {
        viewId: number;
        json: string;
    }): Promise<void>;
    $removePickView({ viewId }: {
        viewId: number;
    }): Promise<void>;
    $setPickViewPositionAndSize({ top, left, width, height, shouldBeUnderWebView, }: {
        top: number;
        left: number;
        width: number;
        height: number;
        shouldBeUnderWebView: boolean;
    }): Promise<void>;
}
interface PrivateBarcodeItemDataEventPayload {
    itemData: string;
}
declare enum BarcodePickViewEvents {
    didStartScanning = "BarcodePickViewListener.didStartScanning",
    didFreezeScanning = "BarcodePickViewListener.didFreezeScanning",
    didPauseScanning = "BarcodePickViewListener.didPauseScanning",
    didStopScanning = "BarcodePickViewListener.didStopScanning"
}
declare enum BarcodePickViewUiEvents {
    didTapFinishButton = "BarcodePickViewUiListener.didTapFinishButton"
}
declare enum BarcodePickAsyncMapperProductProviderEvents {
    onProductIdentifierForItems = "BarcodePickAsyncMapperProductProviderCallback.onProductIdentifierForItems"
}
declare enum BarcodePickScanningEvents {
    didCompleteScanningSession = "BarcodePickScanningListener.didCompleteScanningSession",
    didUpdateScanningSession = "BarcodePickScanningListener.didUpdateScanningSession"
}
declare enum BarcodePickActionEvents {
    didPick = "BarcodePickActionListener.didPick",
    didUnpick = "BarcodePickActionListener.didUnpick"
}
declare enum BarcodePickListenerEvents {
    didUpdateSession = "BarcodePickListener.didUpdateSession"
}
declare enum BarcodePickViewHighlightStyleEvents {
    requestHighlightStyle = "BarcodePickViewHighlightStyleAsyncProvider.styleForRequest"
}
declare enum BarcodePickViewHighlightStyleCustomViewEvents {
    requestCustomView = "BarcodePickViewHighlightStyleCustomViewProvider.viewForRequest"
}
declare class BarcodePickViewController extends BaseController<BarcodePickViewProxy> {
    private view;
    private barcodePick;
    private adapter;
    private eventHandlers;
    private isListeningForPickListeners;
    private isListeningForScanningListeners;
    private isListeningForActionListeners;
    private isListeningForViewListeners;
    private isListeningForViewUiListeners;
    private isListeningForProductListeners;
    private isListeningForHighlightStyleListeners;
    private isListeningForCustomViewStyleListeners;
    constructor(view: BaseBarcodePickView);
    start(): Promise<void>;
    stop(): Promise<void>;
    freeze(): Promise<void>;
    reset(): Promise<void>;
    pause(): Promise<void>;
    resume(): Promise<void>;
    finishPickAction(itemData: string, result: boolean): Promise<void>;
    createNativeView(): Promise<void>;
    removeNativeView(): Promise<void>;
    setPositionAndSize(top: number, left: number, width: number, height: number, shouldBeUnderWebView: boolean): Promise<void>;
    dispose(): void;
    subscribeScanningListener(): Promise<void>;
    unsubscribeScanningListener(): Promise<void>;
    subscribePickListener(): Promise<void>;
    unsubscribePickListener(): Promise<void>;
    registerUiListener(): Promise<void>;
    unregisterUiListener(): Promise<void>;
    setUiListener(listener: BarcodePickViewUiListener | null): Promise<void>;
    subscribeActionListeners(): Promise<void>;
    unsubscribeActionListeners(): Promise<void>;
    subscribePickViewListeners(): Promise<void>;
    unsubscribePickViewListeners(): Promise<void>;
    registerProductListener(callback: BarcodePickAsyncMapperProductProviderCallback): Promise<void>;
    unregisterProductListener(): Promise<void>;
    subscribeHighlightStyleListener(): Promise<void>;
    unsubscribeHighlightStyleListener(): Promise<void>;
    subscribeCustomViewStyleListener(): Promise<void>;
    unsubscribeCustomViewStyleListener(): Promise<void>;
    finishOnProductIdentifierForItems(data: BarcodePickProductProviderCallbackItem[]): Promise<void>;
    confirmActionForItem(data: string): Promise<void>;
    cancelActionForItem(data: string): Promise<void>;
    selectItem(data: string): Promise<BarcodePickAction>;
    updateProductList(products: {
        [key: string]: number;
    }): Promise<void>;
    private initialize;
    private create;
    private get isViewCreated();
    private handleDidCompleteScanningSessionWrapper;
    private handleDidUpdateScanningSessionWrapper;
    private handleDidUpdateSessionWrapper;
    private handleDidTapFinishButtonWrapper;
    private handleDidPickWrapper;
    private handleDidUnpickWrapper;
    private handleDidStartScanningWrapper;
    private handleDidFreezeScanningWrapper;
    private handleDidPauseScanningWrapper;
    private handleDidStopScanningWrapper;
    private handleProductIdentifierForItemsWrapper;
    private handleRequestHighlightStyleWrapper;
    private handleRequestCustomViewWrapper;
}

interface BarcodePickProductProvider {
}
interface PrivateBarcodePickProductProvider {
    _controller: BarcodePickViewController | null;
}

declare class BarcodePickScanningSession {
    private _pickedItems;
    private _scannedItems;
    get pickedItems(): string[];
    get scannedItems(): string[];
    private static fromJSON;
}
interface BarcodePickScanningSessionJSON {
    pickedObjects: string[];
    scannedObjects: string[];
}
interface PrivateBarcodePickScanningSession {
    fromJSON(json: BarcodePickScanningSessionJSON): BarcodePickScanningSession;
}

interface BarcodePickScanningListener {
    didUpdateScanningSession(barcodePick: BarcodePick, session: BarcodePickScanningSession): void;
    didCompleteScanningSession(barcodePick: BarcodePick, session: BarcodePickScanningSession): void;
}

declare class BarcodePickSession {
    private _trackedItems;
    private _addedItems;
    private _trackedObjects;
    private _addedObjects;
    get trackedItems(): string[];
    get addedItems(): string[];
    get trackedObjects(): TrackedObject[];
    get addedObjects(): TrackedObject[];
    private static fromJSON;
}
interface BarcodePickSessionJSON {
    trackedItems: string[];
    addedItems: string[];
    trackedObjects: TrackedObjectJSON[];
    addedObjects: TrackedObjectJSON[];
}
interface PrivateBarcodePickSession {
    fromJSON(json: BarcodePickSessionJSON): BarcodePickSession;
}

interface BarcodePickListener {
    didUpdateSession(barcodePick: BarcodePick, session: BarcodePickSession): void;
}

declare class BarcodePick extends DefaultSerializeable {
    private type;
    private privateContext;
    private listeners;
    private _hasScanningListeners;
    private modeListeners;
    private _hasListeners;
    private isInListenerCallback;
    private _settings;
    private _productProvider;
    private _controller;
    private get controller();
    private set controller(value);
    private static get barcodePickDefaults();
    static createRecommendedCameraSettings(): CameraSettings;
    constructor(dataCaptureContext: DataCaptureContext, settings: BarcodePickSettings, productProvider: BarcodePickProductProvider);
    addScanningListener(listener: BarcodePickScanningListener): Promise<void>;
    removeScanningListener(listener: BarcodePickScanningListener): Promise<void>;
    addListener(listener: BarcodePickListener): Promise<void>;
    removeListener(listener: BarcodePickListener): Promise<void>;
    selectItem(data: string): Promise<BarcodePickAction>;
    confirmActionForItem(data: string): Promise<void>;
    cancelActionForItem(data: string): Promise<void>;
    private checkAndSubscribeScanningListeners;
    private checkAndUnsubscribeScanningListeners;
    private checkAndSubscribeListeners;
    private checkAndUnsubscribeListeners;
}
interface PrivateBarcodePick {
    privateContext: DataCaptureContext | null;
    controller: BarcodePickViewController | null;
    listeners: BarcodePickScanningListener[];
    modeListeners: BarcodePickListener[];
    _productProvider: BarcodePickProductProvider;
    isInListenerCallback: boolean;
    didChange: () => Promise<void>;
    _hasScanningListeners: boolean;
    _hasListeners: boolean;
}

declare class BarcodePickProduct extends DefaultSerializeable {
    private _identifier;
    private _quantityToPick;
    constructor(identifier: string, quantityToPick: number);
    get identifier(): string;
    get quantityToPick(): number;
}

declare class BarcodePickAsyncMapperProductProvider extends DefaultSerializeable implements BarcodePickProductProvider {
    private _callback;
    private _controller;
    private _productsToPick;
    private _productsToPickForSerialization;
    constructor(productsToPick: BarcodePickProduct[], callback: BarcodePickAsyncMapperProductProviderCallback);
    updateProductList(products: BarcodePickProduct[]): Promise<void>;
}

declare class BarcodePickViewHighlightStyleRequest {
    private _requestId;
    private _itemData;
    private _productIdentifier;
    private _state;
    get itemData(): string;
    get productIdentifier(): string | null;
    get state(): BarcodePickState;
    private static fromJSON;
    private constructor();
}

declare class BarcodePickStatusIconStyle extends DefaultSerializeable {
    private _type;
    private _icon;
    private _scanditIcon;
    private _iconColor;
    private _iconBackgroundColor;
    private _text;
    static withIcon(iconBase64: string, text: string): BarcodePickStatusIconStyle;
    static withScanditIcon(icon: ScanditIcon, text: string): BarcodePickStatusIconStyle;
    static withColors(iconColor: Color, iconBackgroundColor: Color, text: string): BarcodePickStatusIconStyle;
    private static fromJSON;
    private constructor();
}

declare class BarcodePickViewHighlightStyleResponse extends DefaultSerializeable {
    private _brush;
    private _selectedBrush;
    private _iconBase64;
    private _iconScandit;
    private _selectedIconBase64;
    private _selectedIconScandit;
    private _statusIconStyle;
    static withBrushAndIcon(brush: Brush | null, icon: string | null, statusIconStyle: BarcodePickStatusIconStyle | null): BarcodePickViewHighlightStyleResponse;
    static withSelectedBrushAndIcon(brush: Brush | null, selectedBrush: Brush | null, icon: string | null, selectedIcon: string | null, statusIconStyle: BarcodePickStatusIconStyle | null): BarcodePickViewHighlightStyleResponse;
    static withBrushAndScanditIcon(brush: Brush | null, scanditIcon: ScanditIcon | null, statusIconStyle: BarcodePickStatusIconStyle | null): BarcodePickViewHighlightStyleResponse;
    static withSelectedBrushAndScanditIcon(brush: Brush | null, selectedBrush: Brush | null, scanditIcon: ScanditIcon | null, selectedScanditIcon: ScanditIcon | null, statusIconStyle: BarcodePickStatusIconStyle | null): BarcodePickViewHighlightStyleResponse;
    static builder(): BarcodePickViewHighlightStyleResponseBuilder;
    private static fromJSON;
    private constructor();
}
declare class BarcodePickViewHighlightStyleResponseBuilder {
    private _brush;
    private _selectedBrush;
    private _iconBase64;
    private _iconScandit;
    private _selectedIconBase64;
    private _selectedIconScandit;
    private _statusIconStyle;
    constructor();
    withBrush(brush: Brush | null): this;
    withSelectedBrush(selectedBrush: Brush | null): this;
    withIcon(icon: string | null): this;
    withSelectedIcon(selectedIcon: string | null): this;
    withScanditIcon(scanditIcon: ScanditIcon | null): this;
    withSelectedScanditIcon(selectedScanditIcon: ScanditIcon | null): this;
    withStatusIconStyle(statusIconStyle: BarcodePickStatusIconStyle | null): this;
    build(): BarcodePickViewHighlightStyleResponse;
}

interface BarcodePickViewHighlightStyleAsyncProvider {
    styleForRequest(request: BarcodePickViewHighlightStyleRequest): Promise<BarcodePickViewHighlightStyleResponse | null>;
}

declare class BarcodePickStatusIconSettings extends DefaultSerializeable {
    constructor();
    private _ratioToHighlightSize;
    get ratioToHighlightSize(): number;
    set ratioToHighlightSize(value: number);
    private _minSize;
    get minSize(): number;
    set minSize(value: number);
    private _maxSize;
    get maxSize(): number;
    set maxSize(value: number);
    private static get barcodePickDefaults();
    private static fromJSON;
}
interface PrivateBarcodePickStatusIconSettings {
    fromJSON(json: any): BarcodePickStatusIconSettings;
}

declare class Dot extends DefaultSerializeable implements BarcodePickViewHighlightStyle {
    private _type;
    private _brushesForState;
    private _selectedBrushesForState;
    private static get barcodePickDefaults();
    constructor();
    getBrushForState(state: BarcodePickState): Brush;
    setBrushForState(brush: Brush, state: BarcodePickState): void;
    getSelectedBrushForState(state: BarcodePickState): Brush | null;
    setSelectedBrushForState(brush: Brush | null, state: BarcodePickState): void;
}

declare class DotWithIcons extends DefaultSerializeable implements BarcodePickViewHighlightStyle {
    private _type;
    private _brushesForState;
    private _iconsForState;
    private _selectedBrushesForState;
    private _selectedIconsForState;
    private _styleResponseCacheEnabled;
    private _hasAsyncStleProvider;
    private _asyncStyleProvider;
    get asyncStyleProvider(): BarcodePickViewHighlightStyleAsyncProvider | null;
    set asyncStyleProvider(provider: BarcodePickViewHighlightStyleAsyncProvider | null);
    private static get barcodePickDefaults();
    constructor();
    getBrushForState(state: BarcodePickState): Brush;
    setBrushForState(brush: Brush, state: BarcodePickState): void;
    setIconForState(image: string, state: BarcodePickState): void;
    getSelectedBrushForState(state: BarcodePickState): Brush | null;
    setSelectedBrushForState(brush: Brush | null, state: BarcodePickState): void;
    setIconForStateWithScanditIcon(icon: ScanditIcon, state: BarcodePickState): void;
    setSelectedIconForState(icon: string | null, state: BarcodePickState): void;
    setSelectedIconForStateWithScanditIcon(icon: ScanditIcon | null, state: BarcodePickState): void;
    get styleResponseCacheEnabled(): boolean;
    set styleResponseCacheEnabled(value: boolean);
}

declare class Rectangular extends DefaultSerializeable implements BarcodePickViewHighlightStyle {
    private _type;
    private _brushesForState;
    private _selectedBrushesForState;
    private _minimumHighlightWidth;
    private _minimumHighlightHeight;
    private static get barcodePickDefaults();
    constructor();
    getBrushForState(state: BarcodePickState): Brush;
    setBrushForState(brush: Brush, state: BarcodePickState): void;
    getSelectedBrushForState(state: BarcodePickState): Brush | null;
    setSelectedBrushForState(brush: Brush | null, state: BarcodePickState): void;
    get minimumHighlightHeight(): number;
    set minimumHighlightHeight(value: number);
    get minimumHighlightWidth(): number;
    set minimumHighlightWidth(value: number);
}

declare class RectangularWithIcons extends DefaultSerializeable implements BarcodePickViewHighlightStyle {
    private _type;
    private _brushesForState;
    private _iconsForState;
    private _selectedBrushesForState;
    private _selectedIconsForState;
    private _statusIconSettings;
    private _minimumHighlightWidth;
    private _minimumHighlightHeight;
    private _styleResponseCacheEnabled;
    private _hasAsyncStleProvider;
    private _asyncStyleProvider;
    private static get barcodePickDefaults();
    constructor();
    getBrushForState(state: BarcodePickState): Brush;
    setBrushForState(brush: Brush, state: BarcodePickState): void;
    setIconForState(image: string, state: BarcodePickState): void;
    getSelectedBrushForState(state: BarcodePickState): Brush | null;
    setSelectedBrushForState(brush: Brush | null, state: BarcodePickState): void;
    setIconForStateWithScanditIcon(icon: ScanditIcon, state: BarcodePickState): void;
    setSelectedIconForState(icon: string | null, state: BarcodePickState): void;
    setSelectedIconForStateWithScanditIcon(icon: ScanditIcon | null, state: BarcodePickState): void;
    get statusIconSettings(): BarcodePickStatusIconSettings;
    set statusIconSettings(value: BarcodePickStatusIconSettings);
    get minimumHighlightHeight(): number;
    set minimumHighlightHeight(value: number);
    get minimumHighlightWidth(): number;
    set minimumHighlightWidth(value: number);
    get asyncStyleProvider(): BarcodePickViewHighlightStyleAsyncProvider | null;
    set asyncStyleProvider(provider: BarcodePickViewHighlightStyleAsyncProvider | null);
    get styleResponseCacheEnabled(): boolean;
    set styleResponseCacheEnabled(value: boolean);
}

declare class BarcodePickViewHighlightStyleCustomViewResponse extends DefaultSerializeable {
    private _view;
    private _statusIconStyle;
    static create(view: string | null, statusIconStyle: BarcodePickStatusIconStyle | null): BarcodePickViewHighlightStyleCustomViewResponse;
    private constructor();
}

interface BarcodePickViewHighlightStyleCustomViewProvider {
    viewForRequest(request: BarcodePickViewHighlightStyleRequest): Promise<BarcodePickViewHighlightStyleCustomViewResponse | null>;
}

declare class BarcodePickViewHighlightStyleCustomView extends DefaultSerializeable implements BarcodePickViewHighlightStyle {
    private _type;
    private _fitViewsToBarcode;
    private _statusIconSettings;
    private _minimumHighlightWidth;
    private _minimumHighlightHeight;
    private _hasAsyncProvider;
    private _asyncCustomViewProvider;
    private static get barcodePickDefaults();
    constructor();
    get fitViewsToBarcode(): boolean;
    set fitViewsToBarcode(value: boolean);
    get statusIconSettings(): BarcodePickStatusIconSettings;
    set statusIconSettings(value: BarcodePickStatusIconSettings);
    get minimumHighlightWidth(): number;
    set minimumHighlightWidth(value: number);
    get minimumHighlightHeight(): number;
    set minimumHighlightHeight(value: number);
    get asyncCustomViewProvider(): BarcodePickViewHighlightStyleCustomViewProvider | null;
    set asyncCustomViewProvider(provider: BarcodePickViewHighlightStyleCustomViewProvider | null);
}

declare class BarcodePickViewEventHandlers {
    private view;
    private barcodePick;
    private adapter;
    private viewController;
    private barcodePickMapperCallback?;
    constructor(view: BaseBarcodePickView, barcodePick: BarcodePick, adapter: BarcodeProxyAdapter, viewController: BarcodePickViewController);
    setBarcodePickMapperCallback(callback: BarcodePickAsyncMapperProductProviderCallback): void;
    handleDidCompleteScanningSession(ev: EventPayload): void;
    handleDidUpdateScanningSession(ev: EventPayload): void;
    handleDidPick(ev: EventPayload): void;
    handleDidUnpick(ev: EventPayload): void;
    handleDidTapFinishButton(ev: EventPayload): void;
    handleDidStartScanning(ev: EventPayload): void;
    handleDidFreezeScanning(ev: EventPayload): void;
    handleDidPauseScanning(ev: EventPayload): void;
    handleDidStopScanning(ev: EventPayload): void;
    handleProductIdentifierForItems(ev: EventPayload): void;
    handleDidUpdateSession(ev: EventPayload): void;
    handleRequestHighlightStyle(ev: EventPayload): Promise<void>;
    handleRequestCustomView(ev: EventPayload): Promise<void>;
    private finishOnProductIdentifierForItems;
    private notifyListenersOfDidCompleteScanningSession;
    private notifyListenersOfDidUpdateScanningSession;
    private notifyListenersOfDidUpdateSession;
}

declare class BarcodeFindFeedback extends DefaultSerializeable {
    private controller;
    private _found;
    get found(): Feedback;
    set found(success: Feedback);
    private _itemListUpdated;
    get itemListUpdated(): Feedback;
    set itemListUpdated(failure: Feedback);
    private updateFeedback;
    private static get barcodeFindDefaults();
    static get defaultFeedback(): BarcodeFindFeedback;
}

declare class BarcodeFindSettings extends DefaultSerializeable {
    private _symbologies;
    private _properties;
    constructor();
    settingsForSymbology(symbology: Symbology): SymbologySettings;
    enableSymbologies(symbologies: Symbology[]): void;
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    get enabledSymbologies(): Symbology[];
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
}

declare class BarcodeFindItemSearchOptions extends DefaultSerializeable {
    private _barcodeData;
    private _brush;
    static withBrush(barcodeData: string, brush: Brush | null): BarcodeFindItemSearchOptions;
    constructor(barcodeData: string);
    get barcodeData(): string;
    get brush(): Brush | null;
}

declare class BarcodeFindItemContent extends DefaultSerializeable {
    private _info?;
    private _additionalInfo?;
    private _image?;
    constructor(info?: string, additionalInfo?: string, image?: string);
    get info(): string | null;
    get additionalInfo(): string | null;
    get image(): string | null;
}

declare class BarcodeFindItem extends DefaultSerializeable {
    private _searchOptions;
    private _content;
    constructor(searchOptions: BarcodeFindItemSearchOptions, content: BarcodeFindItemContent | null);
    get searchOptions(): BarcodeFindItemSearchOptions;
    get content(): BarcodeFindItemContent | null;
}

declare class BarcodeFindSession {
    private _trackedBarcodes;
    get trackedBarcodes(): TrackedBarcode[];
    private static fromJSON;
}

interface BarcodeFindListener {
    didStartSearch(): void;
    didPauseSearch(foundItems: BarcodeFindItem[]): void;
    didStopSearch(foundItems: BarcodeFindItem[]): void;
    didUpdateSession(session: BarcodeFindSession): void;
}

interface BarcodeFindTransformer {
    transformBarcodeData(data: string | null): string | null;
}

interface BarcodeFindViewUiListener {
    didTapFinishButton(foundItems: BarcodeFindItem[]): void;
}

declare class BarcodeFindViewSettings extends DefaultSerializeable {
    private static get barcodeFindViewSettingsDefaults();
    private _inListItemColor;
    private _notInListItemColor;
    private _soundEnabled;
    private _hapticEnabled;
    private _hardwareTriggerEnabled;
    private _hardwareTriggerKeyCode;
    private _progressBarStartColor;
    private _progressBarFinishColor;
    static withHardwareTriggers(inListItemColor: Color, notInListItemColor: Color, soundEnabled: boolean, hapticEnabled: boolean, hardwareTriggerEnabled: boolean, hardwareTriggerKeyCode: number): BarcodeFindViewSettings;
    static withProgressBarColor(inListItemColor: Color, notInListItemColor: Color, soundEnabled: boolean, hapticEnabled: boolean, progressBarStartColor: Color, progressBarFinishColor: Color): BarcodeFindViewSettings;
    static withProgressBarColorAndHardwareTriggers(inListItemColor: Color, notInListItemColor: Color, soundEnabled: boolean, hapticEnabled: boolean, hardwareTriggerEnabled: boolean, hardwareTriggerKeyCode: number, progressBarStartColor: Color, progressBarFinishColor: Color): BarcodeFindViewSettings;
    constructor(inListItemColor: Color, notInListItemColor: Color, soundEnabled: boolean, hapticEnabled: boolean, hardwareTriggerEnabled?: boolean, hardwareTriggerKeyCode?: number, progressBarStartColor?: Color, progressBarFinishColor?: Color);
    get inListItemColor(): Color;
    get notInListItemColor(): Color;
    get soundEnabled(): boolean;
    get hapticEnabled(): boolean;
    get hardwareTriggerEnabled(): boolean;
    get hardwareTriggerKeyCode(): number | null;
    get progressBarStartColor(): Color;
    get progressBarFinishColor(): Color;
}

interface BarcodeFindViewProps {
    context: DataCaptureContext;
    barcodeFind: BarcodeFind;
    viewSettings?: BarcodeFindViewSettings;
    cameraSettings?: CameraSettings;
    style?: any;
    navigation?: any;
}

declare class BaseBarcodeFindView {
    private isViewCreated;
    private _dataCaptureContext;
    private _barcodeFind;
    private _barcodeFindViewSettings?;
    private _cameraSettings?;
    private _startSearching;
    private controller;
    private _isInitialized;
    private _logoStyle;
    private _logoAnchor;
    private _cameraStateOnStop;
    private _viewId;
    get viewId(): number;
    get barcodeFind(): BarcodeFind;
    private _barcodeFindViewUiListener;
    get barcodeFindViewUiListener(): BarcodeFindViewUiListener | null;
    set barcodeFindViewUiListener(value: BarcodeFindViewUiListener | null);
    get context(): DataCaptureContext;
    constructor(props: BarcodeFindViewProps);
    private static get barcodeFindViewDefaults();
    stopSearching(): Promise<void>;
    startSearching(): Promise<void>;
    pauseSearching(): Promise<void>;
    show(): Promise<void>;
    hide(): Promise<void>;
    setPositionAndSize(top: number, left: number, width: number, height: number, shouldBeUnderWebView: boolean): Promise<void>;
    static get hardwareTriggerSupported(): boolean;
    createNativeView(viewId: number): Promise<void>;
    removeNativeView(): Promise<void>;
    get shouldShowUserGuidanceView(): boolean;
    set shouldShowUserGuidanceView(value: boolean);
    get shouldShowHints(): boolean;
    set shouldShowHints(value: boolean);
    get shouldShowCarousel(): boolean;
    set shouldShowCarousel(value: boolean);
    get shouldShowPauseButton(): boolean;
    set shouldShowPauseButton(value: boolean);
    get shouldShowFinishButton(): boolean;
    set shouldShowFinishButton(value: boolean);
    get shouldShowProgressBar(): boolean;
    set shouldShowProgressBar(value: boolean);
    get shouldShowTorchControl(): boolean;
    set shouldShowTorchControl(value: boolean);
    get shouldShowZoomControl(): boolean;
    set shouldShowZoomControl(value: boolean);
    get torchControlPosition(): Anchor;
    set torchControlPosition(value: Anchor);
    get textForCollapseCardsButton(): string | null;
    set textForCollapseCardsButton(value: string | null);
    get textForAllItemsFoundSuccessfullyHint(): string | null;
    set textForAllItemsFoundSuccessfullyHint(value: string | null);
    get textForItemListUpdatedHint(): string | null;
    set textForItemListUpdatedHint(value: string | null);
    get textForItemListUpdatedWhenPausedHint(): string | null;
    set textForItemListUpdatedWhenPausedHint(value: string | null);
    get textForPointAtBarcodesToSearchHint(): string | null;
    set textForPointAtBarcodesToSearchHint(value: string | null);
    get textForMoveCloserToBarcodesHint(): string | null;
    set textForMoveCloserToBarcodesHint(value: string | null);
    get textForTapShutterToPauseScreenHint(): string | null;
    set textForTapShutterToPauseScreenHint(value: string | null);
    get textForTapShutterToResumeSearchHint(): string | null;
    set textForTapShutterToResumeSearchHint(value: string | null);
    get logoStyle(): LogoStyle;
    set logoStyle(value: LogoStyle);
    get logoAnchor(): Anchor;
    set logoAnchor(value: Anchor);
    get cameraStateOnStop(): FrameSourceState;
    set cameraStateOnStop(value: FrameSourceState);
    dispose(): void;
    toJSON(): object;
    private update;
}

declare enum BarcodeFindViewEvents {
    onFinishButtonTappedEventName = "BarcodeFindViewUiListener.onFinishButtonTapped"
}
declare enum BarcodeFindListenerEvents {
    onSearchStartedEvent = "BarcodeFindListener.onSearchStarted",
    onSearchPausedEvent = "BarcodeFindListener.onSearchPaused",
    onSearchStoppedEvent = "BarcodeFindListener.onSearchStopped",
    didUpdateSession = "BarcodeFindListener.didUpdateSession"
}
interface BarcodeFindViewProxy extends BarcodeProxy {
    $createFindView({ viewId, json }: {
        viewId: number;
        json: string;
    }): Promise<void>;
    $removeFindView({ viewId }: {
        viewId: number;
    }): Promise<void>;
    $setFindViewPositionAndSize({ top, left, width, height, shouldBeUnderWebView, }: {
        top: number;
        left: number;
        width: number;
        height: number;
        shouldBeUnderWebView: boolean;
    }): Promise<void>;
}
declare class BarcodeFindViewController extends BaseController<BarcodeFindViewProxy> {
    private baseView;
    private adapter;
    private isListenerEnabled;
    private isViewListenerRegistered;
    private isModeListenerRegistered;
    private isTransformerRegistered;
    static forBarcodeFindView(baseView: BaseBarcodeFindView): BarcodeFindViewController;
    private constructor();
    setUiListener(listener: BarcodeFindViewUiListener | null): void;
    startSearching(): Promise<void>;
    stopSearching(): Promise<void>;
    pauseSearching(): Promise<void>;
    updateView(): Promise<void>;
    showView(): Promise<void>;
    hideView(): Promise<void>;
    setPositionAndSize(top: number, left: number, width: number, height: number, shouldBeUnderWebView: boolean): Promise<void>;
    createNativeView(): Promise<void>;
    removeNativeView(): Promise<void>;
    subscribeViewEvents(): Promise<void>;
    unsubscribeViewEvents(): Promise<void>;
    updateMode(): Promise<void>;
    setItemList(items: BarcodeFindItem[]): Promise<void>;
    start(): Promise<void>;
    pause(): Promise<void>;
    stop(): Promise<void>;
    setModeEnabledState(isEnabled: boolean): Promise<void>;
    updateFeedback(feedbackJson: string): Promise<void>;
    setBarcodeTransformer(): Promise<void>;
    unsetBarcodeTransformer(): Promise<void>;
    subscribeModeEvents(): Promise<void>;
    unsubscribeModeEvents(): Promise<void>;
    dispose(): void;
    private handleOnFinishButtonTappedEvent;
    private handleOnTransformBarcodeDataEvent;
    private create;
    private initialize;
    private handleDidUpdateSession;
    private handleOnSearchStartedEvent;
    private handleOnSearchPausedEvent;
    private handleOnSearchStoppedEvent;
    private filterFoundItemsFromEvent;
    private get isViewCreated();
    private handleOnFinishButtonTappedEventWrapper;
    private handleOnTransformBarcodeDataEventWrapper;
    private handleDidUpdateSessionWrapper;
    private handleOnSearchStartedEventWrapper;
    private handleOnSearchPausedEventWrapper;
    private handleOnSearchStoppedEventWrapper;
}

declare class BarcodeFind extends DefaultSerializeable implements DataCaptureMode {
    private type;
    private _feedback;
    private _enabled;
    private _isInCallback;
    private _settings;
    private itemsToFind;
    private _hasBarcodeTransformer;
    private _hasListeners;
    private listeners;
    private _controller;
    private _dataCaptureContext;
    private barcodeTransformer;
    static createRecommendedCameraSettings(): CameraSettings;
    constructor(settings: BarcodeFindSettings);
    private static get barcodeFindDefaults();
    get context(): DataCaptureContext | null;
    get isEnabled(): boolean;
    set isEnabled(value: boolean);
    get feedback(): BarcodeFindFeedback;
    set feedback(value: BarcodeFindFeedback);
    applySettings(settings: BarcodeFindSettings): Promise<void>;
    addListener(listener: BarcodeFindListener): void;
    removeListener(listener: BarcodeFindListener): void;
    setBarcodeTransformer(barcodeTransformer: BarcodeFindTransformer | null): void;
    setItemList(items: BarcodeFindItem[]): Promise<void>;
    start(): Promise<void>;
    pause(): Promise<void>;
    stop(): Promise<void>;
    private checkAndSubscribeListeners;
    private checkAndUnsubscribeListeners;
    private update;
    private get controller();
    private set controller(value);
}

declare enum QrCodeErrorCorrectionLevel {
    Low = "low",
    Medium = "medium",
    Quartile = "quartile",
    High = "high"
}

declare enum Pdf417CompactionMode {
    Auto = "auto",
    Text = "text",
    Byte = "byte",
    Numeric = "numeric"
}

declare class Pdf417Dimensions {
    minCols: number | null;
    maxCols: number | null;
    minRows: number | null;
    maxRows: number | null;
    constructor(minCols?: number | null, maxCols?: number | null, minRows?: number | null, maxRows?: number | null);
}

declare class BarcodeGeneratorCreationOptions {
    backgroundColor: Color | null;
    foregroundColor: Color | null;
    errorCorrectionLevel: QrCodeErrorCorrectionLevel | number | null;
    versionNumber: number | null;
    minimumErrorCorrectionPercent: number | null;
    layers: number | null;
    compact: boolean | null;
    compactionMode: Pdf417CompactionMode | null;
    dimensions: Pdf417Dimensions | null;
    constructor(backgroundColor?: Color | null, foregroundColor?: Color | null, errorCorrectionLevel?: QrCodeErrorCorrectionLevel | number | null, versionNumber?: number | null, minimumErrorCorrectionPercent?: number | null, layers?: number | null, compact?: boolean | null, compactionMode?: Pdf417CompactionMode | null, dimensions?: Pdf417Dimensions | null);
}

declare class BarcodeGeneratorBuilder<T> {
    protected options: BarcodeGeneratorCreationOptions;
    private type;
    private dataCaptureContext;
    protected constructor(type: string, dataCaptureContext: DataCaptureContext);
    withBackgroundColor(color: Color): BarcodeGeneratorBuilder<T>;
    withForegroundColor(color: Color): BarcodeGeneratorBuilder<T>;
    build(): BarcodeGenerator;
}

declare class Code39BarcodeGeneratorBuilder extends BarcodeGeneratorBuilder<Code39BarcodeGeneratorBuilder> {
    constructor(dataCaptureContext: DataCaptureContext);
}

declare class Code128BarcodeGeneratorBuilder extends BarcodeGeneratorBuilder<Code128BarcodeGeneratorBuilder> {
    constructor(dataCaptureContext: DataCaptureContext);
}

declare class Ean13BarcodeGeneratorBuilder extends BarcodeGeneratorBuilder<Ean13BarcodeGeneratorBuilder> {
    constructor(dataCaptureContext: DataCaptureContext);
}

declare class UpcaBarcodeGeneratorBuilder extends BarcodeGeneratorBuilder<UpcaBarcodeGeneratorBuilder> {
    constructor(dataCaptureContext: DataCaptureContext);
}

declare class InterleavedTwoOfFiveBarcodeGeneratorBuilder extends BarcodeGeneratorBuilder<InterleavedTwoOfFiveBarcodeGeneratorBuilder> {
    constructor(dataCaptureContext: DataCaptureContext);
}

declare class QrCodeBarcodeGeneratorBuilder extends BarcodeGeneratorBuilder<QrCodeBarcodeGeneratorBuilder> {
    constructor(dataCaptureContext: DataCaptureContext);
    withErrorCorrectionLevel(errorCorrectionLevel: QrCodeErrorCorrectionLevel): QrCodeBarcodeGeneratorBuilder;
    withVersionNumber(versionNumber: number): QrCodeBarcodeGeneratorBuilder;
}

declare class DataMatrixBarcodeGeneratorBuilder extends BarcodeGeneratorBuilder<DataMatrixBarcodeGeneratorBuilder> {
    constructor(dataCaptureContext: DataCaptureContext);
}

declare class AztecBarcodeGeneratorBuilder extends BarcodeGeneratorBuilder<AztecBarcodeGeneratorBuilder> {
    constructor(dataCaptureContext: DataCaptureContext);
    withMinimumErrorCorrectionPercent(minimumErrorCorrectionPercent: number): AztecBarcodeGeneratorBuilder;
    withLayers(layers: number): AztecBarcodeGeneratorBuilder;
}

declare class Pdf417BarcodeGeneratorBuilder extends BarcodeGeneratorBuilder<Pdf417BarcodeGeneratorBuilder> {
    constructor(dataCaptureContext: DataCaptureContext);
    withErrorCorrectionLevel(errorCorrectionLevel: number): Pdf417BarcodeGeneratorBuilder;
    withCompact(compact: boolean): Pdf417BarcodeGeneratorBuilder;
    withCompactionMode(compactionMode: Pdf417CompactionMode): Pdf417BarcodeGeneratorBuilder;
    withDimensions(dimensions: Pdf417Dimensions): Pdf417BarcodeGeneratorBuilder;
}

declare class BarcodeGenerator extends DefaultSerializeable implements DataCaptureComponent {
    private _id;
    get id(): string;
    private type;
    private backgroundColor;
    private foregroundColor;
    private errorCorrectionLevel;
    private versionNumber;
    private dataCaptureContext;
    private controller;
    private initializationPromise;
    static create(type: string, options: BarcodeGeneratorCreationOptions, dataCaptureContext: DataCaptureContext): BarcodeGenerator;
    static code39BarcodeGeneratorBuilder(dataCaptureContext: DataCaptureContext): Code39BarcodeGeneratorBuilder;
    static code128BarcodeGeneratorBuilder(dataCaptureContext: DataCaptureContext): Code128BarcodeGeneratorBuilder;
    static ean13BarcodeGeneratorBuilder(dataCaptureContext: DataCaptureContext): Ean13BarcodeGeneratorBuilder;
    static upcaBarcodeGeneratorBuilder(dataCaptureContext: DataCaptureContext): UpcaBarcodeGeneratorBuilder;
    static interleavedTwoOfFiveBarcodeGeneratorBuilder(dataCaptureContext: DataCaptureContext): InterleavedTwoOfFiveBarcodeGeneratorBuilder;
    static qrCodeBarcodeGeneratorBuilder(dataCaptureContext: DataCaptureContext): QrCodeBarcodeGeneratorBuilder;
    static dataMatrixBarcodeGeneratorBuilder(dataCaptureContext: DataCaptureContext): DataMatrixBarcodeGeneratorBuilder;
    static aztecBarcodeGeneratorBuilder(dataCaptureContext: DataCaptureContext): AztecBarcodeGeneratorBuilder;
    static pdf417BarcodeGeneratorBuilder(dataCaptureContext: DataCaptureContext): Pdf417BarcodeGeneratorBuilder;
    private constructor();
    generate(text: string, imageWidth: number): Promise<string>;
    generateFromBase64EncodedData(data: string, imageWidth: number): Promise<string>;
    dispose(): void;
    private initialize;
}

declare class BarcodeGeneratorController extends BaseController<BarcodeProxy> {
    private generator;
    private adapter;
    constructor(generator: BarcodeGenerator);
    initialize(): Promise<void>;
    create(): Promise<void>;
    generateFromBase64EncodedData(data: string, imageWidth: number): Promise<string>;
    generate(text: string, imageWidth: number): Promise<string>;
    dispose(): Promise<void>;
}

declare const BARCODE_PROXY_TYPE_NAMES: readonly ["BarcodeProxy", "BarcodeCountViewProxy", "BarcodePickViewProxy", "BarcodeFindViewProxy", "SparkScanViewProxy", "BarcodeArSessionProxy", "BarcodeArViewProxy"];
type BarcodeProxyType = (typeof BARCODE_PROXY_TYPE_NAMES)[number];
interface BarcodeNativeCallerProvider extends NativeCallerProvider<BarcodeProxyType> {
}

declare function registerBarcodeProxies(provider: BarcodeNativeCallerProvider): void;

export { ArucoDictionary, ArucoDictionaryPreset, ArucoMarker, AztecBarcodeGeneratorBuilder, BARCODE_PROXY_TYPE_NAMES, Barcode, BarcodeAr, BarcodeArAnnotationLifecycleEvents, BarcodeArAnnotationProviderEvents, BarcodeArAnnotationTrigger, BarcodeArCircleHighlight, BarcodeArCircleHighlightPreset, BarcodeArEvents, BarcodeArFeedback, BarcodeArFilterEvents, BarcodeArHighlightLifecycleEvents, BarcodeArHighlightProviderEvents, BarcodeArInfoAnnotation, BarcodeArInfoAnnotationAnchor, BarcodeArInfoAnnotationBodyComponent, BarcodeArInfoAnnotationFooter, BarcodeArInfoAnnotationHeader, BarcodeArInfoAnnotationWidthPreset, BarcodeArPopoverAnnotation, BarcodeArPopoverAnnotationAnchor, BarcodeArPopoverAnnotationButton, BarcodeArRectangleHighlight, BarcodeArResponsiveAnnotation, BarcodeArSession, BarcodeArSessionController, BarcodeArSettings, BarcodeArStatusIconAnnotation, BarcodeArStatusIconAnnotationAnchor, BarcodeArViewController, BarcodeArViewEvents, BarcodeArViewSettings, BarcodeBatch, BarcodeBatchAdvancedOverlayController, BarcodeBatchAdvancedOverlayListenerEvents, BarcodeBatchBasicOverlay, BarcodeBatchBasicOverlayController, BarcodeBatchBasicOverlayListenerEvents, BarcodeBatchBasicOverlayStyle, BarcodeBatchLicenseInfo, BarcodeBatchListenerController, BarcodeBatchListenerEvents, BarcodeBatchSession, BarcodeBatchSettings, BarcodeCapture, BarcodeCaptureFeedback, BarcodeCaptureLicenseInfo, BarcodeCaptureListenerController, BarcodeCaptureListenerEvents, BarcodeCaptureOverlay, BarcodeCaptureOverlayController, BarcodeCaptureSession, BarcodeCaptureSettings, BarcodeCount, BarcodeCountCaptureList, BarcodeCountCaptureListSession, BarcodeCountFeedback, BarcodeCountMappingFlowSettings, BarcodeCountModeListenerEvents, BarcodeCountNotInListActionSettings, BarcodeCountSession, BarcodeCountSessionController, BarcodeCountSettings, BarcodeCountStatus, BarcodeCountStatusItem, BarcodeCountStatusProviderCallback, BarcodeCountStatusResultAbort, BarcodeCountStatusResultError, BarcodeCountStatusResultSuccess, BarcodeCountToolbarSettings, BarcodeCountUiListenerEvents, BarcodeCountViewController, BarcodeCountViewListenerEvents, BarcodeCountViewStyle, BarcodeDefaultsType, BarcodeDefinition, BarcodeDefinitionBuilder, BarcodeFilterHighlightSettingsBrush, BarcodeFilterHighlightType, BarcodeFilterSettings, BarcodeFind, BarcodeFindFeedback, BarcodeFindItem, BarcodeFindItemContent, BarcodeFindItemSearchOptions, BarcodeFindListenerEvents, BarcodeFindSession, BarcodeFindSettings, BarcodeFindViewController, BarcodeFindViewEvents, BarcodeFindViewSettings, BarcodeGenerator, BarcodeGeneratorBuilder, BarcodeGeneratorController, BarcodeIdentifier, BarcodeInfo, BarcodePick, BarcodePickAction, BarcodePickActionCallback, BarcodePickActionEvents, BarcodePickAsyncMapperProductProvider, BarcodePickAsyncMapperProductProviderEvents, BarcodePickListenerEvents, BarcodePickProduct, BarcodePickProductProviderCallback, BarcodePickProductProviderCallbackItem, BarcodePickScanningEvents, BarcodePickScanningSession, BarcodePickSession, BarcodePickSettings, BarcodePickState, BarcodePickStatusIconSettings, BarcodePickStatusIconStyle, BarcodePickViewController, BarcodePickViewEventHandlers, BarcodePickViewEvents, BarcodePickViewHighlightStyleCustomView, BarcodePickViewHighlightStyleCustomViewEvents, BarcodePickViewHighlightStyleCustomViewResponse, BarcodePickViewHighlightStyleEvents, BarcodePickViewHighlightStyleRequest, BarcodePickViewHighlightStyleResponse, BarcodePickViewHighlightStyleResponseBuilder, BarcodePickViewSettings, BarcodePickViewUiEvents, BarcodeSelection, BarcodeSelectionAimerSelection, BarcodeSelectionAutoSelectionStrategy, BarcodeSelectionBasicOverlay, BarcodeSelectionBasicOverlayStyle, BarcodeSelectionBrushProviderEvents, BarcodeSelectionController, BarcodeSelectionFeedback, BarcodeSelectionFreezeBehavior, BarcodeSelectionLicenseInfo, BarcodeSelectionListenerController, BarcodeSelectionListenerEvents, BarcodeSelectionManualSelectionStrategy, BarcodeSelectionOverlayController, BarcodeSelectionSession, BarcodeSelectionSettings, BarcodeSelectionStrategyType, BarcodeSelectionTapBehavior, BarcodeSelectionTapSelection, BarcodeSelectionTypeName, BarcodeSpatialGrid, BaseBarcodeArView, BaseBarcodeBatchAdvancedOverlay, BaseBarcodeCountView, BaseBarcodeFindView, BaseBarcodePickView, BaseSparkScanView, BatterySavingMode, BrushForStateObject, CapturePreset, Checksum, Cluster, Code128BarcodeGeneratorBuilder, Code39BarcodeGeneratorBuilder, CompositeFlag, CompositeType, DataMatrixBarcodeGeneratorBuilder, Dot, DotWithIcons, Ean13BarcodeGeneratorBuilder, Ean13UpcaClassification, EncodingRange, InterleavedTwoOfFiveBarcodeGeneratorBuilder, LocalizedOnlyBarcode, Pdf417BarcodeGeneratorBuilder, Pdf417CompactionMode, Pdf417Dimensions, PrivateBarcodeSelectionStrategy, PrivateBarcodeSelectionType, QrCodeBarcodeGeneratorBuilder, QrCodeErrorCorrectionLevel, Range, Rectangular, RectangularWithIcons, ScanComponentBarcodePreset, ScanComponentTextSemanticType, ScanItemDefinition, ScanItemIdentifier, ScannedBarcode, ScannedComponentIdentifier, ScannedItem, ScannedItemIdentifier, ScannedText, SparkScan, SparkScanBarcodeErrorFeedback, SparkScanBarcodeFeedback, SparkScanBarcodeSuccessFeedback, SparkScanLicenseInfo, SparkScanMiniPreviewSize, SparkScanPreviewBehavior, SparkScanScanningBehavior, SparkScanScanningModeDefault, SparkScanScanningModeTarget, SparkScanSession, SparkScanSettings, SparkScanToastSettings, SparkScanViewController, SparkScanViewEvents, SparkScanViewSettings, SparkScanViewState, StructuredAppendData, Symbology, SymbologyDescription, SymbologySettings, TargetBarcode, TextDefinition, TextDefinitionBuilder, TextIdentifier, TrackedBarcode, TrackedObject, UpcaBarcodeGeneratorBuilder, ensureBarcodeDefaults, ensureBarcodeDefaultsFor, getBarcodeArDefaults, getBarcodeBatchDefaults, getBarcodeCaptureDefaults, getBarcodeCountDefaults, getBarcodeDefaults, getBarcodeFindDefaults, getBarcodePickDefaults, getBarcodeSelectionDefaults, getSparkScanDefaults, getSymbologySettingsFromBarcodePickDefaults, getSymbologySettingsFromDefaults, loadAllBarcodeDefaults, loadBarcodeArDefaults, loadBarcodeBatchDefaults, loadBarcodeCaptureDefaults, loadBarcodeCountDefaults, loadBarcodeDefaults, loadBarcodeFindDefaults, loadBarcodePickDefaults, loadBarcodeSelectionDefaults, loadSparkScanDefaults, registerBarcodeProxies, setBarcodeDefaultsLoader };
export type { BarcodeArAnnotation, BarcodeArAnnotationProvider, BarcodeArDefaults, BarcodeArFeedbackJSON, BarcodeArFilter, BarcodeArHighlight, BarcodeArHighlightProvider, BarcodeArInfoAnnotationListener, BarcodeArListener, BarcodeArPopoverAnnotationListener, BarcodeArSessionJSON, BarcodeArView, BarcodeArViewProxy, BarcodeArViewUiListener, BarcodeBatchAdvancedOverlay, BarcodeBatchAdvancedOverlayListener, BarcodeBatchAdvancedOverlayView, BarcodeBatchBasicOverlayListener, BarcodeBatchDefaults, BarcodeBatchListener, BarcodeBatchSessionEventPayload, BarcodeBatchSessionJSON, BarcodeCaptureDefaults, BarcodeCaptureListener, BarcodeCaptureSessionEventPayload, BarcodeCaptureSessionJSON, BarcodeCountCaptureListListener, BarcodeCountCaptureListSessionJSON, BarcodeCountDefaults, BarcodeCountFeedbackJSON, BarcodeCountListener, BarcodeCountSessionJSON, BarcodeCountStatusProvider, BarcodeCountStatusResult, BarcodeCountView, BarcodeCountViewListener, BarcodeCountViewProxy, BarcodeCountViewSettingsDefaults, BarcodeCountViewUiListener, BarcodeDataTransformer, BarcodeDefaults, BarcodeFilterHighlightSettings, BarcodeFilterSettingsJSON, BarcodeFindDefaults, BarcodeFindListener, BarcodeFindTransformer, BarcodeFindViewProps, BarcodeFindViewProxy, BarcodeFindViewUiListener, BarcodeInfoJSON, BarcodeJSON, BarcodeNativeCallerProvider, BarcodePickActionListener, BarcodePickAsyncMapperProductProviderCallback, BarcodePickDefaults, BarcodePickListener, BarcodePickProductProvider, BarcodePickScanningListener, BarcodePickScanningSessionJSON, BarcodePickSessionJSON, BarcodePickView, BarcodePickViewHighlightStyle, BarcodePickViewHighlightStyleAsyncProvider, BarcodePickViewHighlightStyleCustomViewProvider, BarcodePickViewListener, BarcodePickViewProxy, BarcodePickViewUiListener, BarcodeProxyType, BarcodeSelectionBrushProvider, BarcodeSelectionDefaults, BarcodeSelectionListener, BarcodeSelectionSessionEventPayload, BarcodeSelectionSessionJSON, BarcodeSelectionStrategy, BarcodeSelectionType, BarcodeSelectionTypeJSON, BarcodeSpatialGridElementJSON, BarcodeSpatialGridJSON, BaseBarcodeCountViewProps, BaseSparkScanViewProps, ClusterJSON, CompositeTypeDescription, EncodingRangeJSON, LocalizedOnlyBarcodeJSON, PrivateBarcodeAr, PrivateBarcodeArFeedback, PrivateBarcodeArSession, PrivateBarcodeBatch, PrivateBarcodeBatchSession, PrivateBarcodeCapture, PrivateBarcodeCount, PrivateBarcodeCountCaptureList, PrivateBarcodeCountCaptureListSession, PrivateBarcodeCountStatusProviderCallback, PrivateBarcodeCountView, PrivateBarcodeFilterSettings, PrivateBarcodeItemDataEventPayload, PrivateBarcodePick, PrivateBarcodePickCallback, PrivateBarcodePickProductProvider, PrivateBarcodePickScanningSession, PrivateBarcodePickSession, PrivateBarcodePickStatusIconSettings, PrivateBarcodePickView, PrivateEncodingRange, PrivateLocalizedOnlyBarcode, PrivateRange, PrivateSparkScanView, PrivateStructuredAppendData, PrivateSymbologyDescription, PrivateSymbologySettings, RangeJSON, ScanComponentDefinition, ScannedBarcodeJSON, ScannedComponent, ScannedItemJSON, ScannedTextJSON, SparkScanDefaults, SparkScanFeedbackDelegate, SparkScanListener, SparkScanScanningMode, SparkScanSessionEventPayload, SparkScanSessionJSON, SparkScanToastSettingsDefaults, SparkScanView, SparkScanViewJSON, SparkScanViewProxy, SparkScanViewSettingsDefaults, SparkScanViewUiListener, StructuredAppendDataJSON, SymbologyDescriptionJSON, SymbologySettingsJSON, TargetBarcodeJSON, TrackedBarcodeAdvancedEventPayload, TrackedBarcodeEventPayload, TrackedBarcodeFullEventPayload, TrackedBarcodeJSON, TrackedBarcodeRepeatEventPayload, TrackedObjectJSON };
