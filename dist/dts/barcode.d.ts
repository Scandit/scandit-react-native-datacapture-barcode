import { DefaultSerializeable, Quadrilateral, QuadrilateralJSON, ScanIntention as ScanIntention$1, SelectionMode as SelectionMode$1, CameraSettings as CameraSettings$1, Feedback as Feedback$1, Color as Color$1, CameraPosition, Anchor as Anchor$1, ScanditIcon, ZoomSwitchOrientation, LogoStyle as LogoStyle$1, PointWithUnit, ClusteringMode, TorchState, LocationSelection as LocationSelection$1, NumberWithUnit, FrameSourceState, BaseProxy, BaseController, EventPayload, ModeBase, DataCaptureMode, PrivateDataCaptureMode, Viewfinder as Viewfinder$1, Point, Observable, TextAlignment, FontFamily, FrameDataController, BaseDataCaptureView, DataCaptureComponent, NativeCallerProvider } from 'scandit-react-native-datacapture-core/dist/dts/core';
import type { Brush as Brush$1, FrameData, DataCaptureContext, DataCaptureOverlay } from 'scandit-react-native-datacapture-core/dist/dts/core';

/**
 * An enumeration of barcode types (symbologies) supported by the Scandit Data Capture SDK.
 *
 * The availability of the symbology depends on the licensed features.
 *
 * @since 6.5.0
 */
declare enum Symbology {
    /**
     * EAN-13/UPC-12/UPC-A 1D barcode symbology.
     *
     * @since 6.5.0
     */
    EAN13UPCA = "ean13Upca",
    /**
     * UPC-E 1D barcode symbology.
     *
     * @since 6.5.0
     */
    UPCE = "upce",
    /**
     * Ean8 1D barcode symbology.
     *
     * @since 6.5.0
     */
    EAN8 = "ean8",
    /**
     * Code39 1D barcode symbology.
     *
     * @since 6.5.0
     */
    Code39 = "code39",
    /**
     * Code93 1D barcode symbology.
     *
     * @since 6.5.0
     */
    Code93 = "code93",
    /**
     * Code128 1D barcode symbology.
     *
     * @since 6.5.0
     */
    Code128 = "code128",
    /**
     * Code11 1D barcode symbology.
     *
     * @since 6.5.0
     */
    Code11 = "code11",
    /**
     * Code25 1D barcode symbology.
     *
     * @since 6.5.0
     */
    Code25 = "code25",
    /**
     * Codabar 1D barcode symbology.
     *
     * @since 6.5.0
     */
    Codabar = "codabar",
    /**
     * Interleaved two of five (ITF) 1D barcode symbology.
     *
     * @since 6.5.0
     */
    InterleavedTwoOfFive = "interleavedTwoOfFive",
    /**
     * MSI-Plessey 1D barcode symbology.
     *
     * @since 6.5.0
     */
    MSIPlessey = "msiPlessey",
    /**
     * QR Code 2D barcode symbology.
     *
     * @since 6.5.0
     */
    QR = "qr",
    /**
     * Data Matrix 2D barcode symbology.
     *
     * @since 6.5.0
     */
    DataMatrix = "dataMatrix",
    /**
     * Aztec Code 2D barcode symbology.
     *
     * @since 6.5.0
     */
    Aztec = "aztec",
    /**
     * MaxiCode 2D barcode symbology.
     *
     * @since 6.5.0
     */
    MaxiCode = "maxicode",
    /**
     * Dot Code symbology.
     *
     * @since 6.5.0
     */
    DotCode = "dotcode",
    /**
     * Royal Dutch TPG Post KIX.
     *
     * @since 6.5.0
     */
    KIX = "kix",
    /**
     * Royal Mail 4 State Customer Code (RM4SCC).
     *
     * @since 6.5.0
     */
    RoyalMail4state = "royal-mail-4state",
    /**
     * GS1 DataBar 14 1D barcode symbology.
     *
     * @since 6.5.0
     */
    GS1Databar = "databar",
    /**
     * GS1 DataBar Expanded 1D barcode symbology.
     *
     * @since 6.5.0
     */
    GS1DatabarExpanded = "databarExpanded",
    /**
     * GS1 DataBarLimited 1D barcode symbology.
     *
     * @since 6.5.0
     */
    GS1DatabarLimited = "databarLimited",
    /**
     * PDF417 barcode symbology.
     *
     * @since 6.5.0
     */
    PDF417 = "pdf417",
    /**
     * MicroPDF417 barcode symbology.
     *
     * @since 6.5.0
     */
    MicroPDF417 = "microPdf417",
    /**
     * MicroQR Code 2D barcode symbology.
     *
     * @since 6.5.0
     */
    MicroQR = "microQr",
    /**
     * Code32 1D barcode symbology.
     *
     * @since 6.5.0
     */
    Code32 = "code32",
    /**
     * Posi LAPA Reed Solomon 4-state code postal code symbology.
     *
     * @since 6.5.0
     */
    Lapa4SC = "lapa4sc",
    /**
     * IATA 2 of 5 barcode symbology.
     *
     * @since 6.5.0
     */
    IATATwoOfFive = "iata2of5",
    /**
     * Matrix 2 of 5 barcode symbology.
     *
     * @since 6.6.0
     */
    MatrixTwoOfFive = "matrix2of5",
    /**
     * Intelligent Mail symbology.
     *
     * @since 6.7.0
     */
    USPSIntelligentMail = "uspsIntelligentMail",
    /**
     * ArUco symbology.
     *
     * @since 6.19.0
     */
    ArUco = "aruco",
    /**
     * UPU-4State symbology.
     *
     * @since 6.23.0
     */
    Upu4State = "upu-4state",
    /**
     * Australian Post symbology.
     *
     * @since 6.23.0
     */
    AustralianPost = "australian-post-4state",
    /**
     * French Post symbology.
     *
     * @since 6.24.0
     */
    FrenchPost = "french-post",
    /**
     * Han Xin Code symbology.
     *
     * @since 8.7.0
     */
    HanXin = "hanXin"
}

/** @since 6.5.0 */
declare class Range extends DefaultSerializeable {
    private _minimum;
    private _maximum;
    private _step;
    /**
     * Minimum of the range.
     *
     * @since 6.5.0
     */
    get minimum(): number;
    /**
     * Maximum of the range.
     *
     * @since 6.5.0
     */
    get maximum(): number;
    /**
     * Step of the range.
     *
     * @since 6.5.0
     */
    get step(): number;
    /**
     * If the range is fixed.
     *
     * @since 6.5.0
     */
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

/**
 * Description specific to a particular {@link Symbology|barcode symbology}.
 *
 * @since 6.5.0
 */
declare class SymbologyDescription {
    private static defaults;
    /**
     * Gets a description of each available {@link Symbology|barcode symbology}.
     *
     * @since 6.5.0
     */
    static get all(): SymbologyDescription[];
    private _identifier;
    /**
     * Identifier of the {@link Symbology} associated with this description.
     *
     * @since 6.5.0
     */
    get identifier(): string;
    /**
     * The {@link Symbology} associated with this description.
     *
     * @since 6.5.0
     */
    get symbology(): Symbology;
    private _readableName;
    /**
     * The human readable name of the {@link Symbology} associated with this description.
     *
     * @since 6.5.0
     */
    get readableName(): string;
    private _isAvailable;
    /**
     * Determines whether the {@link Symbology} associated with this description is available.
     *
     * @since 6.5.0
     */
    get isAvailable(): boolean;
    private _isColorInvertible;
    /**
     * Determines whether decoding of color-inverted (bright on dark) codes for the {@link Symbology} associated with this description is available.
     *
     * @since 6.5.0
     */
    get isColorInvertible(): boolean;
    private _activeSymbolCountRange;
    /**
     * The supported active symbol count range for the {@link Symbology} associated with this description.
     *
     * @since 6.5.0
     */
    get activeSymbolCountRange(): Range;
    private _defaultSymbolCountRange;
    /**
     * The default symbol count range for the {@link Symbology} associated with this description.
     *
     * @since 6.5.0
     */
    get defaultSymbolCountRange(): Range;
    private _supportedExtensions;
    /**
     * A list of extensions supported by the {@link Symbology} associated with this description.
     *
     * @since 6.5.0
     */
    get supportedExtensions(): string[];
    /**
     * Gets the symbology description for a given {@link SymbologyDescription.identifier}.
     *
     * @since 6.5.0
     */
    static forIdentifier(identifier: string): SymbologyDescription | null;
    private static fromJSON;
    /**
     * Creates a new symbology description for a given {@link Symbology|barcode symbology}.
     *
     * @since 6.5.0
     */
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

/**
 * An enumeration of composite code presets.
 *
 * @since 6.6.0
 */
declare enum CompositeType {
    /**
     * Composite Code A
     *
     * @since 6.6.0
     */
    A = "A",
    /**
     * Composite Code B
     *
     * @since 6.6.0
     */
    B = "B",
    /**
     * Composite Code C
     *
     * @since 6.6.0
     */
    C = "C"
}

/**
 * An enumeration of possible checksum algorithms. The enumeration only lists optional checksum algorithms; mandatory checksums that can’t be changed are not listed here. Use the values below to set {@link SymbologySettings.checksums|optional checksums} for a symbology. The exact implementation chosen depends on the symbology *and* checksum algorithm. Only a subset of algorithms is supported for each symbology. Check the symbology documentation to see which checksums are supported.
 *
 * @since 6.5.0
 */
declare enum Checksum {
    /**
     * Checksum is calculated using modulo of 10.
     *
     * @since 6.5.0
     */
    Mod10 = "mod10",
    /**
     * Checksum is calculated using modulo of 11.
     *
     * @since 6.5.0
     */
    Mod11 = "mod11",
    /**
     * Checksum is calculated using modulo of 16.
     *
     * @since 6.5.0
     */
    Mod16 = "mod16",
    /**
     * Checksum is calculated using modulo of 43.
     *
     * @since 6.5.0
     */
    Mod43 = "mod43",
    /**
     * Checksum is calculated using modulo of 47.
     *
     * @since 6.5.0
     */
    Mod47 = "mod47",
    /**
     * Checksum is calculated using modulo of 103.
     *
     * @since 6.5.0
     */
    Mod103 = "mod103",
    /**
     * Checksum is calculated using two checksums, one using modulo of 10 and one using modulo of 11.
     *
     * @since 6.5.0
     */
    Mod10AndMod11 = "mod1110",
    /**
     * Checksum is calculated using two different modulo of 10 checksums.
     *
     * @since 6.5.0
     */
    Mod10AndMod10 = "mod1010"
}

/**
 * Settings specific to a particular {@link Symbology|barcode symbology}.
 *
 * Learn more on how to use symbology settings in our [Configure Barcode Symbologies](https://docs.scandit.com/sdks/react-native/barcode-capture/configure-barcode-symbologies) guide.
 *
 * @since 6.5.0
 */
declare class SymbologySettings$1 extends DefaultSerializeable {
    /**
     * By default decoding of all symbologies is disabled. To enable decoding of a symbology, set this property to *true*. It is advised to only enable symbologies that are required by the application as every enabled symbology adds processing overhead.
     *
     * This property only enables decoding of dark codes on bright background. If color-inverted (bright on dark) codes for this symbology are required, enable them by changing the {@link SymbologySettings.isColorInvertedEnabled} property.
     *
     * @since 6.5.0
     */
    isEnabled: boolean;
    /**
     * Determines whether decoding of color-inverted (bright on dark) codes for this symbology is enabled. By default, decoding of color inverted codes is disabled. Currently, the {@link SymbologySettings.isEnabled} property will also have to be set to *true* for bright on dark codes to be scanned, though this may change in a future release.
     *
     * @since 6.5.0
     */
    isColorInvertedEnabled: boolean;
    /**
     * Sets of optional checksums to be used for this symbology. The code is accepted if any of the checksums matches in addition to any mandatory checksum of the symbology.
     *
     * @since 6.5.0
     */
    checksums: Checksum[];
    /**
     * This property determines the active symbol counts of the symbology, e.g. the supported length of barcodes to be decoded. Change this property to include symbol counts that are not enabled by default, or to optimize decoding performance for a certain number of symbols.
     *
     * The mapping from characters to symbols is symbology-specific. For some symbologies, the start and end characters are included, others include checksums characters in the symbol counts.
     *
     * The active symbol count setting is ignored for fixed-size barcodes (the EAN and UPC family of codes) as well as 2d codes. For other symbologies, refer to [Symbology Properties](https://docs.scandit.com/symbology-properties).
     *
     * When changing the active symbol count, the provided active symbol count values are intersected with the supported active symbol count values of the symbology. Values that are not part of the supported symbol count range are ignored.
     *
     * @since 6.5.0
     */
    activeSymbolCounts: number[];
    private _symbology;
    private extensions;
    /**
     * The symbology that this symbology settings affect.
     *
     * @since 6.5.0
     */
    get symbology(): Symbology;
    /**
     * The set of enabled extensions of this symbology. Extensions allow to configure features that are specific to a small number of symbologies. For example, there is an extension to configure how to treat the leading zero for UPC-A codes. For a list of supported extensions, refer to [Symbology Properties](https://docs.scandit.com/symbology-properties).
     *
     * @since 6.5.0
     */
    get enabledExtensions(): string[];
    private static fromJSON;
    /**
     * Activates/Deactivates a custom extension for the symbology.
     *
     * @since 6.5.0
     */
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
    fromJSON: (identifier: string, json: SymbologySettingsJSON) => SymbologySettings$1;
    _symbology: Symbology;
}

/**
 * Defines the encoding of a range of bytes.
 *
 * @since 6.5.0
 */
declare class EncodingRange {
    private _ianaName;
    /**
     * Charset encoding name as defined by [IANA](http://www.iana.org/assignments/character-sets/character-sets.xhtml).
     *
     * @since 6.5.0
     */
    get ianaName(): string;
    private _startIndex;
    /**
     * Start index of this encoding range.
     *
     * @since 6.5.0
     */
    get startIndex(): number;
    private _endIndex;
    /**
     * End index (first index after the last) of this encoding range.
     *
     * @since 6.5.0
     */
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

/**
 * Indicates whether the code is part of a composite code.
 *
 * @since 6.5.0
 */
declare enum CompositeFlag {
    /**
     * Code is not part of a composite code.
     *
     * @since 6.5.0
     */
    None = "none",
    /**
     * Code could be part of a composite code. This flag is set by linear (1d) symbologies that have no composite flag support but can be part of a composite code like the EAN/UPC symbology family.
     *
     * @since 6.5.0
     */
    Unknown = "unknown",
    /**
     * Code is the linear component of a composite code. This flag can be set by {@link Symbology.GS1Databar|GS1 DataBar} or GS1-128 ({@link Symbology.Code128|Code 128}).
     *
     * @since 6.5.0
     */
    Linked = "linked",
    /**
     * Code is a GS1 Composite Code Type A (CC-A). This flag can be set by {@link Symbology.MicroPDF417} codes.
     *
     * @since 6.5.0
     */
    GS1TypeA = "gs1TypeA",
    /**
     * Code is a GS1 Composite Code Type B (CC-B). This flag can be set by {@link Symbology.MicroPDF417} codes.
     *
     * @since 6.5.0
     */
    GS1TypeB = "gs1TypeB",
    /**
     * Code is a GS1 Composite Code Type C (CC-C). This flag can be set by {@link Symbology.PDF417} codes.
     *
     * @since 6.5.0
     */
    GS1TypeC = "gs1TypeC"
}

/**
 * Structured append data associated with a barcode. returns the structured append data associated with this barcode. In structured append mode data is encoded across multiple 1D or 2D barcodes where each barcode contains only one segment of the complete data. Once all segment-containing barcodes are scanned the complete data can be read out.
 *
 * Only a few symbologies (pdf417, microPdf417, QR, DataMatrix, Aztec, DotCode, MaxiCode) can use this mode, and each has a different set of limitations, like included metadata or the maximum number of barcodes that can form a set.
 *
 * @since 6.15.0
 */
declare class StructuredAppendData {
    private _isComplete;
    /**
     * Whether all the barcodes in this set have been scanned.
     *
     * @since 6.15.0
     */
    get isComplete(): boolean;
    private _barcodeSetId;
    /**
     * The id of the barcode set.
     *
     * @since 6.15.0
     */
    get barcodeSetId(): string;
    private _scannedSegmentCount;
    /**
     * How many barcodes in the set have been scanned.
     *
     * @since 6.15.0
     */
    get scannedSegmentCount(): number;
    private _totalSegmentCount;
    /**
     * How many barcodes belong to the set. Depending on the symbology this might not be available and reported as 0.
     *
     * @since 6.15.0
     */
    get totalSegmentCount(): number;
    private _encodingRanges;
    /**
     * Array of encoding ranges. Each entry of the returned encoding array points into bytes of {@link StructuredAppendData.rawCompleteData} and indicates what encoding is used for these bytes. This information can then be used to convert the bytes to unicode, or other representations. For most codes, a single encoding range covers the whole data, but certain 2d symbologies, such as {@link Symbology.QR} allow to switch the encoding in the middle of the code.
     *
     * The returned encoding ranges are sorted from lowest to highest index. Each byte in {@link StructuredAppendData.rawCompleteData} is contained in exactly one range, e.g. there are no holes or overlapping ranges.
     *
     * The encoding ranges array is only available when all of the barcodes/segments belonging to the set have been scanned and empty otherwise.
     *
     * @since 6.15.0
     */
    get encodingRanges(): EncodingRange[];
    private _completeData;
    /**
     * String representation of the complete data. The complete data is only available when all of the barcodes/segments belonging to the set have been scanned.
     *
     * @since 6.15.0
     */
    get completeData(): string | null;
    private _rawCompleteData;
    /**
     * The raw data contained in all of the scanned barcodes. The raw data is only available when all of the barcodes/segments belonging to the set have been scanned.
     *
     * Use this property instead of {@link StructuredAppendData.completeData} if you are relying on binary-encoded data that cannot be represented as unicode strings.
     *
     * Unlike {@link StructuredAppendData.completeData} which returns the data in Unicode representation, the {@link StructuredAppendData.rawCompleteData} returns the data with the encoding that was used in the barcode. See {@link StructuredAppendData.encodingRanges} for more information.
     *
     * @since 6.15.0
     */
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

/**
 * A class used to instantiate a barcode with the specified information. Can be used to create {@link Barcode} mocks for unit testing.
 *
 * @since 8.3.0
 */
declare class BarcodeInfo extends DefaultSerializeable {
    private _symbology;
    /**
     * The symbology of the barcode.
     *
     * @since 8.3.0
     */
    get symbology(): Symbology;
    private _data;
    /**
     * The data of a barcode as a unicode string.
     *
     * @since 8.3.0
     */
    get data(): string;
    private _location;
    /**
     * The location of the code. For more info see {@link Barcode}
     *
     * @since 8.3.0
     */
    get location(): Quadrilateral;
    /** @since 8.3.0 */
    static create(symbology: Symbology, data: string, location?: Quadrilateral): BarcodeInfo;
    private constructor();
    static fromJSON(json: BarcodeInfoJSON): BarcodeInfo;
}
interface BarcodeInfoJSON {
    symbology: string;
    data: string;
    location: QuadrilateralJSON;
}

/**
 * A recognized barcode.
 *
 * @since 6.5.0
 */
declare class Barcode extends DefaultSerializeable {
    private _barcodeId;
    private _symbology;
    /**
     * The symbology of the barcode.
     *
     * @since 6.5.0
     */
    get symbology(): Symbology;
    private _data;
    /**
     * The data of this code as a unicode string.
     *
     * For some types of barcodes/2d codes (for example Data Matrix, Aztec, Pdf417), the data may contain non-printable characters, characters that cannot be represented as unicode code points, or nul-bytes in the middle of the string. {@link Barcode.data} may be *null* for such codes. How invalid code points are handled is platform-specific and should not be relied upon. If your applications relies on scanning of such codes, use {@link Barcode.rawData} instead which is capable of representing this data without loss of information.
     *
     * @since 6.5.0
     */
    get data(): string | null;
    private _rawData;
    /**
     * The raw data contained in the barcode.
     *
     * Use this property instead of {@link Barcode.data} if you are relying on binary-encoded data that cannot be represented as unicode strings.
     *
     * Unlike {@link Barcode.data} which returns the data in Unicode representation, the {@link Barcode.rawData} returns the data with the encoding that was used in the barcode. See {@link Barcode.encodingRanges} for more information.
     *
     * The raw data is base64 encoded as a string and might need to be decoded to be used.
     *
     * @since 6.5.0
     */
    get rawData(): string;
    private _compositeData;
    /** @since 6.6.0 */
    get compositeData(): string | null;
    private _compositeRawData;
    /**
     * The raw data is base64 encoded as a string and might need to be decoded to be used.
     *
     * @since 6.6.0
     */
    get compositeRawData(): string;
    private _addOnData;
    /**
     * If present, this property returns the add-on code (also known as extension code) associated with this barcode. See [Add-on Codes](https://docs.scandit.com/extension-codes) to understand how add-ons can be enabled.
     *
     * @since 6.5.0
     */
    get addOnData(): string | null;
    private _encodingRanges;
    /**
     * Array of encoding ranges. Each entry of the returned encoding array points into bytes of {@link Barcode.rawData} and indicates what encoding is used for these bytes. This information can then be used to convert the bytes to unicode, or other representations. For most codes, a single encoding range covers the whole data, but certain 2d symbologies, such as {@link Symbology.QR} allow to switch the encoding in the middle of the code.
     *
     * The returned encoding ranges are sorted from lowest to highest index. Each byte in {@link Barcode.rawData} is contained in exactly one range, e.g. there are no holes or overlapping ranges.
     *
     * @since 6.5.0
     */
    get encodingRanges(): EncodingRange[];
    private _location;
    /**
     * The location of the code. The coordinates are in image-space, meaning that the coordinates correspond to actual pixels in the image. For display, the coordinates need first to be converted into screen-space using the data capture view. See the Coordinate Conversion Guide for details and examples.
     *
     * The meaning of the values of {@link Quadrilateral.topLeft} etc is such that the top left point corresponds to the top left corner of the barcode, independent of how the code is oriented in the image.
     *
     * If you use {@link BarcodeBatch} you should not use this location at all. Instead use the always up-to-date {@link TrackedBarcode.location}.
     *
     * In case the feature is not licensed, a quadrilateral with all corners set to 0, 0 is returned.
     *
     * @since 6.5.0
     */
    get location(): Quadrilateral;
    private _isGS1DataCarrier;
    /**
     * *True* for codes that carry GS1 data.
     *
     * @since 6.5.0
     */
    get isGS1DataCarrier(): boolean;
    private _compositeFlag;
    /**
     * Flag to hint whether the barcode is part of a composite code.
     *
     * @since 6.5.0
     */
    get compositeFlag(): CompositeFlag;
    private _isColorInverted;
    /**
     * Whether the recognized code is color inverted (printed bright on dark background).
     *
     * @since 6.5.0
     */
    get isColorInverted(): boolean;
    private _symbolCount;
    /**
     * The symbol count of this barcode. Use this value to determine the symbol count of a particular barcode, e.g. to configure the active symbol counts.
     *
     * @since 6.5.0
     */
    get symbolCount(): number;
    private _frameID;
    /**
     * Id of the frame from which this barcode information was obtained.
     *
     * @since 6.5.0
     */
    get frameID(): number;
    private _moduleCountX;
    /**
     * The number of modules in the X direction (horizontal) of the barcode.
     *
     * @since 8.3.0
     */
    get moduleCountX(): number;
    private _moduleCountY;
    /**
     * The number of modules in the Y direction (vertical) of the barcode.
     *
     * @since 8.3.0
     */
    get moduleCountY(): number;
    /**
     * Whether the barcode is a structured append barcode.
     *
     * @since 6.15.0
     */
    get isStructuredAppend(): boolean;
    private _structuredAppendData;
    /**
     * If present, this property returns the structured append data associated with this barcode. In structured append mode data is encoded across multiple 1D or 2D barcodes where each barcode contains only one segment of the complete data. Once all segment-containing barcodes are scanned the complete data can be read out.
     *
     * Only a few symbologies (pdf417, microPdf417, QR, DataMatrix, Aztec, DotCode, MaxiCode) can use this mode, and each has a different set of limitations, like included metadata or the maximum number of barcodes that can form a set.
     *
     * @since 6.15.0
     */
    get structuredAppendData(): StructuredAppendData | null;
    private get selectionIdentifier();
    static fromJSON(json: BarcodeJSON): Barcode;
    /**
     * Constructs a Barcode instance using the specified information.
     *
     * @since 8.3.0
     */
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



/**
 * Helper class to distinguish between UPC-A and EAN13 barcodes. Normally they are both returned as an {@link Symbology.EAN13UPCA} because UPC-A codes are a subset of EAN-13 instead of an entirely separate symbology.
 *
 * @since 6.15.0
 */
declare class Ean13UpcaClassification {
    /**
     * Returns true if barcode is UPC-A.
     *
     * @since 6.15.0
     */
    static isUpca(barcode: Barcode): boolean;
    /**
     * Returns true if barcode is EAN 13.
     *
     * @since 6.15.0
     */
    static isEan13(barcode: Barcode): boolean;
}

/**
 * Description specific to a particular {@link CompositeType|composite type}.
 *
 * @since 8.7.0
 */
declare class CompositeTypeDescription {
    private static defaults;
    /**
     * A list of descriptions, one for each individual {@link CompositeType}.
     *
     * @since 8.7.0
     */
    static get all(): CompositeTypeDescription[];
    private _types;
    /**
     * The {@link CompositeType|composite types} described by the description.
     *
     * @since 8.7.0
     */
    get types(): CompositeType[];
    private _symbologies;
    /**
     * All symbologies that can be part of a composite code with the given {@link CompositeType|composite type}.
     *
     * @since 8.7.0
     */
    get symbologies(): Symbology[];
    /**
     * Creates a new composite type description for a given {@link CompositeType|composite type}.
     *
     * @since 8.7.0
     */
    static create(types: CompositeType[]): CompositeTypeDescription;
    private static fromJSON;
    private constructor();
}
interface CompositeTypeDescriptionJSON {
    types: CompositeType[];
    symbologies: Symbology[];
}
interface PrivateCompositeTypeDescription {
    defaults: () => {
        CompositeTypeDescriptions: CompositeTypeDescription[];
    };
    fromJSON(json: CompositeTypeDescriptionJSON): CompositeTypeDescription;
}

/**
 * Lists presets that can be used to create a {@link ArucoDictionary}
 *
 * @since 6.19.0
 */
declare enum ArucoDictionaryPreset {
    /**
     * Dictionary that contains 50 markers of size 5.
     *
     * @since 6.19.0
     */
    ArucoDictionaryPreset_5X5_50 = "5X5_50",
    /**
     * Dictionary that contains 100 markers of size 5.
     *
     * @since 6.19.0
     */
    ArucoDictionaryPreset_5X5_100 = "5X5_100",
    /**
     * Dictionary that contains 250 markers of size 5.
     *
     * @since 6.19.0
     */
    ArucoDictionaryPreset_5X5_250 = "5X5_250",
    /**
     * Dictionary that contains 1000 markers of size 5.
     *
     * @since 6.19.0
     */
    ArucoDictionaryPreset_5X5_1000 = "5X5_1000",
    /**
     * Dictionary that contains 1023 markers of size 5.
     *
     * @since 6.19.0
     */
    ArucoDictionaryPreset_5X5_1023 = "5X5_1023",
    /**
     * Dictionary that contains 250 markers of size 4.
     *
     * @since 6.19.0
     */
    ArucoDictionaryPreset_4X4_250 = "4X4_250",
    /**
     * Dictionary that contains 250 markers of size 6.
     *
     * @since 6.19.0
     */
    ArucoDictionaryPreset_6X6_250 = "6X6_250"
}

/** @since 6.19.0 */
declare class ArucoMarker$1 extends DefaultSerializeable {
    private _markerData;
    private _markerSize;
    /**
     * The size of the ArucoMarker.
     *
     * @since 6.19.0
     */
    get size(): number;
    /**
     * The data of the ArucoMarker.
     *
     * @since 6.19.0
     */
    get data(): string;
    /**
     * Constructs an ArUco marker definition. Used to create a custom {@link ArucoDictionary}.
     *
     * - *markerSize* is the length of the side of the barcode. For a 5 by 5 marker it will be 5.
     * - *markerData* is the data used to build the marker. It needs to contain only the values 0 or 1 as 8-bit values. The order is row major. For a 5 by 5 marker it needs to contain 25 bytes.
     *
     * The markerData has to be base64 encoded as a string in our Javascript APIs.
     *
     * ```javascript
     * const data = 'AQAAAQAAAQEB';
     * const marker = ArucoMarker.create(5, data);
     * ```
     *
     * @since 6.19.0
     */
    static create(markerSize: number, markerData: string): ArucoMarker$1;
}

/** @since 6.19.0 */
declare class ArucoDictionary$1 {
    private _preset;
    private _markers;
    private _markerSize;
    /**
     * Constructs an {@link ArucoDictionary} using a preset.
     *
     * @since 6.19.0
     */
    static fromPreset(preset: ArucoDictionaryPreset): ArucoDictionary$1;
    /**
     * Constructs an {@link ArucoDictionary} using custom data.
     *
     * - *markerSize* is the length of the side of the barcode. For a 5 by 5 marker it will be 5.
     *
     * @since 6.19.0
     */
    static createWithMarkers(markerSize: number, markers: ArucoMarker$1[]): ArucoDictionary$1;
}

interface BarcodeDefaults {
    SymbologySettings: {
        [key: string]: SymbologySettings$1;
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
declare function getSymbologySettingsFromDefaults(symbology: Symbology, errorPrefix: string): SymbologySettings$1;

/**
 * A feature that can help you extend the battery life of your phone when you are running low on power. It reduces some of the functions and features that consume more energy.
 *
 * @since 6.21.0
 */
declare enum BatterySavingMode$1 {
    /**
     * The battery saving mode is always on, maximising the battery lifetime.
     *
     * @since 6.21.0
     */
    On = "on",
    /**
     * The battery saving mode is always off, ensuring the standard performance.
     *
     * @since 6.21.0
     */
    Off = "off",
    /**
     * The battery saving mode is automatically enabled when a higher than usual consumption of the battery is detected, balancing performance and battery lifetime.
     *
     * @since 6.21.0
     */
    Auto = "auto"
}



interface BarcodeCaptureDefaults {
    BarcodeCaptureOverlay: {
        DefaultBrush: Brush$1;
    };
    BarcodeCaptureSettings: {
        codeDuplicateFilter: number;
        batterySaving: BatterySavingMode$1;
        scanIntention: ScanIntention$1;
        selectionMode: SelectionMode$1;
    };
    RecommendedCameraSettings: CameraSettings$1;
}

declare function getBarcodeCaptureDefaults(): BarcodeCaptureDefaults;

/**
 * The conditions that trigger an annotation to be displayed.
 *
 * @since 7.1.0
 */
declare enum BarcodeArAnnotationTrigger {
    /**
     * The annotation is shown when the user taps on the highlight.
     *
     * @since 7.1.0
     */
    HighlightTap = "highlightTap",
    /**
     * The annotation is shown immediately when the barcode is scanned, and can be hidden and shown again by tapping on the highlight.
     *
     * @since 7.1.0
     */
    HighlightTapAndBarcodeScan = "highlightTapAndBarcodeScan",
    /**
     * The annotation is shown immediately when the barcode is scanned. It cannot be toggled by user interaction and remains visible once shown, as long as the barcode is being scanned.
     *
     * @since 8.6.0
     */
    BarcodeScan = "barcodeScan"
}

/**
 * The available anchor options for an info annotation.
 *
 * @since 7.1.0
 */
declare enum BarcodeArInfoAnnotationAnchor {
    /**
     * The annotation is anchored at its top-center point.
     *
     * @since 7.1.0
     */
    Top = "top",
    /**
     * The annotation is anchored at its bottom-center point.
     *
     * @since 7.1.0
     */
    Bottom = "bottom",
    /**
     * The annotation is anchored at its left edge.
     *
     * @since 7.1.0
     */
    Left = "left",
    /**
     * The annotation is anchored at its right edge.
     *
     * @since 7.1.0
     */
    Right = "right"
}

/**
 * The available width options for an info annotation.
 *
 * @since 7.1.0
 */
declare enum BarcodeArInfoAnnotationWidthPreset {
    /**
     * Small width. Recommended for annotations that contain only text or icon, and do not include a header or footer.
     *
     * @since 7.1.0
     */
    Small = "small",
    /**
     * Medium width.
     *
     * @since 7.1.0
     */
    Medium = "medium",
    /**
     * Large width.
     *
     * @since 7.1.0
     */
    Large = "large"
}

/**
 * The circle highlight presets.
 *
 * @since 7.1.0
 */
declare enum BarcodeArCircleHighlightPreset {
    /**
     * Dot style. By default a smaller blue circle.
     *
     * @since 7.1.0
     */
    Dot = "dot",
    /**
     * Icon style. By default a larger blue circle.
     *
     * @since 7.1.0
     */
    Icon = "icon"
}

/**
 * The available anchor options for a status icon annotation.
 *
 * @since 8.6.0
 */
declare enum BarcodeArStatusIconAnnotationAnchor {
    /**
     * The annotation is anchored at its top-center point.
     *
     * @since 8.6.0
     */
    Top = "top",
    /**
     * The annotation is anchored at its bottom-center point.
     *
     * @since 8.6.0
     */
    Bottom = "bottom",
    /**
     * The annotation is anchored at its left edge.
     *
     * @since 8.6.0
     */
    Left = "left",
    /**
     * The annotation is anchored at its right edge.
     *
     * @since 8.6.0
     */
    Right = "right"
}

/**
 * The available anchor options for a popover annotation.
 *
 * @since 8.6.0
 */
declare enum BarcodeArPopoverAnnotationAnchor {
    /**
     * The annotation is anchored at its left edge.
     *
     * @since 8.6.0
     */
    Left = "left",
    /**
     * The annotation is anchored at its right edge.
     *
     * @since 8.6.0
     */
    Right = "right",
    /**
     * The annotation is anchored at its bottom-center point.
     *
     * @since 8.6.0
     */
    Bottom = "bottom",
    /**
     * The annotation is anchored at its top-center point.
     *
     * @since 8.6.0
     */
    Top = "top"
}








interface BarcodeArCircleHighlightDefaults {
    brush: Brush$1;
    size: number;
}
interface BarcodeArViewDefaults {
    circleHighlightPresets: {
        [key in BarcodeArCircleHighlightPreset]: BarcodeArCircleHighlightDefaults;
    };
    defaultBarcodeArPopoverAnnotationButtonEnabled: boolean;
    defaultBarcodeArPopoverAnnotationButtonTextColor: Color$1;
    defaultBarcodeArPopoverAnnotationButtonTextSize: number;
    defaultCameraPosition: CameraPosition;
    defaultCameraSwitchControlPosition: Anchor$1;
    defaultHighlightIcon: ScanditIcon | null;
    defaultHapticsEnabled: boolean;
    defaultInfoAnnotationAnchor: BarcodeArInfoAnnotationAnchor;
    defaultInfoAnnotationBackgroundColor: Color$1;
    defaultInfoAnnotationBodyElementLeftIcon: ScanditIcon | null;
    defaultInfoAnnotationBodyElementLeftIconTappable: boolean;
    defaultInfoAnnotationBodyElementRightIcon: ScanditIcon | null;
    defaultInfoAnnotationBodyElementRightIconTappable: boolean;
    defaultInfoAnnotationBodyElementStyledText: string | null;
    defaultInfoAnnotationBodyElementText: string | null;
    defaultInfoAnnotationBodyElementTextColor: Color$1;
    defaultInfoAnnotationBodyElementTextSize: number;
    defaultInfoAnnotationEntireAnnotationTappable: boolean;
    defaultInfoAnnotationFooterBackgroundColor: Color$1;
    defaultInfoAnnotationFooterIcon: ScanditIcon | null;
    defaultInfoAnnotationFooterText: string | null;
    defaultInfoAnnotationFooterTextColor: Color$1;
    defaultInfoAnnotationFooterTextSize: number;
    defaultInfoAnnotationHasTip: boolean;
    defaultInfoAnnotationHeaderBackgroundColor: Color$1;
    defaultInfoAnnotationHeaderIcon: ScanditIcon | null;
    defaultInfoAnnotationHeaderText: string | null;
    defaultInfoAnnotationHeaderTextColor: Color$1;
    defaultInfoAnnotationHeaderTextSize: number;
    defaultInfoAnnotationTrigger: BarcodeArAnnotationTrigger;
    defaultInfoAnnotationWidth: BarcodeArInfoAnnotationWidthPreset;
    defaultResponsiveAnnotationThreshold: number;
    defaultResponsiveAnnotationTrigger: BarcodeArAnnotationTrigger;
    defaultIsEntirePopoverTappable: boolean;
    defaultPopoverAnnotationAnchor: BarcodeArPopoverAnnotationAnchor;
    defaultPopoverAnnotationTrigger: BarcodeArAnnotationTrigger;
    defaultRectangleHighlightBrush: Brush$1;
    defaultShouldShowCameraSwitchControl: boolean;
    defaultShouldShowTorchControl: boolean;
    defaultShouldShowZoomControl: boolean;
    defaultSoundEnabled: boolean;
    defaultStatusIconAnnotationBackgroundColor: Color$1;
    defaultStatusIconAnnotationHasTip: boolean;
    defaultStatusIconAnnotationIcon: ScanditIcon;
    defaultStatusIconAnnotationText: string | null;
    defaultStatusIconAnnotationTextColor: Color$1;
    defaultStatusIconAnnotationTrigger: BarcodeArAnnotationTrigger;
    defaultStatusIconAnnotationAnchor: BarcodeArStatusIconAnnotationAnchor;
    defaultZoomControlOrientation: ZoomSwitchOrientation;
    defaultLogoStyle: LogoStyle$1;
    defaultLogoAnchor: Anchor$1;
    defaultLogoOffset: PointWithUnit;
    defaultTorchControlPosition: Anchor$1;
    defaultZoomControlPosition: Anchor$1;
}
interface BarcodeArDefaults {
    RecommendedCameraSettings: CameraSettings$1;
    Feedback: {
        scanned: Feedback$1;
        tapped: Feedback$1;
    };
    BarcodeArView: BarcodeArViewDefaults;
    BarcodeArSettings: {
        expectOnlyUniqueBarcodes: boolean;
    };
}

declare function getBarcodeArDefaults(): BarcodeArDefaults;

interface BarcodeSelectionDefaults {
    RecommendedCameraSettings: CameraSettings$1;
    Feedback: {
        selection: Feedback$1;
    };
    BarcodeSelectionSettings: {
        codeDuplicateFilter: number;
        singleBarcodeAutoDetection: boolean;
        tapGestureForSelectionEnabled: boolean;
        selectionType: <T>(fromJSON: (json: unknown) => T) => T;
    };
    BarcodeSelectionTapSelection: {
        defaultFreezeBehavior: 'manual' | 'manualAndAutomatic';
        defaultTapBehavior: 'toggleSelection' | 'repeatSelection';
    };
    BarcodeSelectionAimerSelection: {
        defaultSelectionStrategy: <T>(fromJSON: (json: unknown) => T) => T;
        defaultAimerBehavior: 'toggleSelection' | 'repeatSelection';
    };
    BarcodeSelectionBasicOverlay: {
        defaultStyle: 'frame' | 'dot';
        frozenBackgroundColor: Color$1;
        styles: any;
    };
}

declare function getBarcodeSelectionDefaults(): BarcodeSelectionDefaults;

/**
 * The style of the {@link BarcodeCountView}
 *
 * @since 6.17.0
 */
declare enum BarcodeCountViewStyle {
    /**
     * Style that draws the highlights as icons and adds an animation for when a code newly appears.
     *
     * @since 6.17.0
     */
    Icon = "icon",
    /**
     * Style that draws the highlights as a dot and adds an animation for when a code newly appears.
     *
     * @since 6.17.0
     */
    Dot = "dot"
}

/**
 * These settings are used to select barcodes that will be filtered out in the view. Any barcode that matches any of the provided settings will be covered by a colored layer.
 *
 * @since 6.17.0
 */
declare class BarcodeFilterSettings extends DefaultSerializeable {
    /**
     * When set to *true*, EAN 13 barcodes will be excluded.
     *
     * @since 6.17.0
     */
    get excludeEan13(): boolean;
    set excludeEan13(value: boolean);
    /**
     * When set to *true*, UPC-A barcodes will be excluded.
     *
     * @since 6.17.0
     */
    get excludeUpca(): boolean;
    set excludeUpca(value: boolean);
    /**
     * A regular expression to be matched against `Data`.
     *
     * @since 6.17.0
     */
    get excludedCodesRegex(): string;
    set excludedCodesRegex(value: string);
    /**
     * A set of {@link Symbology} to exclude. If an excluded {@link Symbology} is not part of the set of active symbologies in the mode, this setting will have no effect on that Symbology.
     *
     * @since 6.17.0
     */
    get excludedSymbologies(): Symbology[];
    set excludedSymbologies(values: Symbology[]);
    private _excludeEan13;
    private _excludeUpca;
    private _excludedCodesRegex;
    /**
     * A map of excluded symbol counts, indexed by {@link Symbology}. Each {@link Symbology} will have assigned a set of all the character counts for the barcode’s `Data` that will be matched.
     *
     * @since 8.3.0
     */
    excludedSymbolCounts: Partial<Record<Symbology, number[]>>;
    private _excludedSymbologies;
    /** @since 8.3.0 */
    constructor();
    private static fromJSON;
    /** @since 6.17.0 */
    getExcludedSymbolCountsForSymbology(symbology: Symbology): number[];
    /** @since 6.17.0 */
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

/**
 * Wraps a pair of {@link ScanditIcon} instances used as a highlight icon by {@link BarcodeCountView}. The recognized and not-in-list highlights use {@link BarcodeCountIcon} only when the view {@link BarcodeCountView.style} is {@link BarcodeCountViewStyle.Icon}. Accepted and rejected highlights always use {@link BarcodeCountIcon}, regardless of the view style. As a consequence, in {@link BarcodeCountViewStyle.Dot} {@link BarcodeCountView.acceptedBrush} and {@link BarcodeCountView.rejectedBrush} no longer drive the per-barcode highlight (they still tint the barcode quad outline when manual clustering is enabled); to hide an accepted or rejected highlight, return *null* from the corresponding listener callback instead of setting the brush to *null*.
 *
 * The icon to render is selected at runtime based on the overlay’s color scheme. When the chosen variant is *null*, no highlight is drawn for that color scheme.
 *
 * @since 8.7.0
 */
declare class BarcodeCountIcon extends DefaultSerializeable {
    private _defaultIcon;
    private _accessibleIcon;
    private static fromJSON;
    /**
     * Constructs a new {@link BarcodeCountIcon} with separate variants for the default and accessible color schemes. Either argument may be *null*.
     *
     * @since 8.7.0
     */
    constructor(defaultIcon: ScanditIcon | null, accessibleIcon: ScanditIcon | null);
    /**
     * The icon used when the overlay is in the default color scheme. If *null*, no highlight is drawn in the default color scheme.
     *
     * @since 8.7.0
     */
    get defaultIcon(): ScanditIcon | null;
    /**
     * The icon used when the overlay is in the accessible color scheme. If *null*, no highlight is drawn in the accessible color scheme.
     *
     * @since 8.7.0
     */
    get accessibleIcon(): ScanditIcon | null;
}

/** @since 6.17.0 */
interface BarcodeCountToolbarSettings$1 {
    /**
     * If populated sets the text of the audio setting button when in “on” state. Otherwise a default “Audio on” value will be used.
     *
     * @since 6.17.0
     */
    audioOnButtonText: string;
    /**
     * If populated sets the text of the audio setting button when in “off” state. Otherwise a default “Audio off” value will be used.
     *
     * @since 6.17.0
     */
    audioOffButtonText: string;
    /**
     * If populated sets the content description of the audio setting button. Otherwise a default “Audio” value will be used.
     *
     * This property is applied only when running on Android.
     *
     * @since 6.17.0
     */
    audioButtonContentDescription: string | null;
    /**
     * If populated sets the accessibility hint of the audio setting button. Otherwise a default “Audio” value will be used.
     *
     * This property is applied only when running on iOS.
     *
     * @since 6.17.0
     */
    audioButtonAccessibilityHint: string | null;
    /**
     * If populated sets the accessibility label of the audio setting button. Otherwise a default “Audio” value will be used.
     *
     * This property is applied only when running on iOS.
     *
     * @since 6.17.0
     */
    audioButtonAccessibilityLabel: string | null;
    /**
     * If populated sets the text of the vibration setting button when in “on” state. Otherwise a default “Haptic on” value will be used.
     *
     * @since 6.17.0
     */
    vibrationOnButtonText: string;
    /**
     * If populated sets the text of the vibration setting button when in “off” state. Otherwise a default “Haptic off” value will be used.
     *
     * @since 6.17.0
     */
    vibrationOffButtonText: string;
    /**
     * If populated sets the content description of the vibration setting button. Otherwise a default “Vibration” value will be used.
     *
     * This property is applied only when running on Android.
     *
     * @since 6.17.0
     */
    vibrationButtonContentDescription: string | null;
    /**
     * If populated sets the accessibility hint of the vibration setting button. Otherwise a default “Vibration” value will be used.
     *
     * This property is applied only when running on iOS.
     *
     * @since 6.17.0
     */
    vibrationButtonAccessibilityHint: string | null;
    /**
     * If populated sets the accessibility label of the vibration setting button. Otherwise a default “Vibration” value will be used.
     *
     * This property is applied only when running on iOS.
     *
     * @since 6.17.0
     */
    vibrationButtonAccessibilityLabel: string | null;
    /**
     * If populated sets the text of the strap mode setting button when in “on” state. Otherwise a default “Strap mode” value will be used.
     *
     * @since 6.17.0
     */
    strapModeOnButtonText: string;
    /**
     * If populated sets the text of the strap mode setting button when in “off” state. Otherwise a default “Strap mode” value will be used.
     *
     * @since 6.17.0
     */
    strapModeOffButtonText: string;
    /**
     * If populated sets the content description of the strap mode setting button. Otherwise a default “Strap mode” value will be used.
     *
     * This property is applied only when running on Android.
     *
     * @since 6.17.0
     */
    strapModeButtonContentDescription: string | null;
    /**
     * If populated sets the accessibility hint of the strap mode setting button. Otherwise a default “Strap mode” value will be used.
     *
     * This property is applied only when running on iOS.
     *
     * @since 6.17.0
     */
    strapModeButtonAccessibilityHint: string | null;
    /**
     * If populated sets the accessibility label of the strap mode setting button. Otherwise a default “Strap mode” value will be used.
     *
     * This property is applied only when running on iOS.
     *
     * @since 6.17.0
     */
    strapModeButtonAccessibilityLabel: string | null;
    /**
     * If populated sets the text of the color scheme setting button when in “on” state. Otherwise a default “Color scheme” value will be used.
     *
     * @since 6.17.0
     */
    colorSchemeOnButtonText: string;
    /**
     * If populated sets the text of the color scheme setting button when in “off” state. Otherwise a default “Color scheme” value will be used.
     *
     * @since 6.17.0
     */
    colorSchemeOffButtonText: string;
    /**
     * If populated sets the content description of the color scheme setting button. Otherwise a default “Color scheme” value will be used.
     *
     * @since 6.17.0
     */
    colorSchemeButtonContentDescription: string | null;
    /**
     * If populated sets the accessibility hint of the color scheme setting button. Otherwise a default “Color scheme” value will be used.
     *
     * This property is applied only when running on iOS.
     *
     * @since 6.17.0
     */
    colorSchemeButtonAccessibilityHint: string | null;
    /**
     * If populated sets the accessibility label of the color scheme setting button. Otherwise a default “Color scheme” value will be used.
     *
     * This property is applied only when running on iOS.
     *
     * @since 6.17.0
     */
    colorSchemeButtonAccessibilityLabel: string | null;
}
/**
 * Settings used with the BarcodeCount mapping flow.
 *
 * @since 8.3.0
 */
interface BarcodeCountMappingFlowSettings$1 {
    /**
     * Text displayed for the initial guidance during the mapping flow. Defaults to “Tap shutter to scan all codes in batches”.
     *
     * @since 8.3.0
     */
    scanBarcodesGuidanceText: string;
    /**
     * Text displayed on the “Next” button. Defaults to “Next”.
     *
     * @since 8.3.0
     */
    nextButtonText: string;
    /**
     * Text displayed during the mapping flow on the last screen. Defaults to “Step back to fit all codes into camera view”.
     *
     * @since 8.3.0
     */
    stepBackGuidanceText: string;
    /**
     * Text displayed on the “Redo map” button. Defaults to “Redo map”.
     *
     * @since 8.3.0
     */
    redoScanButtonText: string;
    /**
     * Text displayed on the “Restart” button. Defaults to “Restart”.
     *
     * @since 8.3.0
     */
    restartButtonText: string;
    /**
     * Text displayed on the “Finish” button. Defaults to “Finish”.
     *
     * @since 8.3.0
     */
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
    defaultNotInListBrush: Brush$1;
    defaultRecognizedBrush: Brush$1;
    defaultAcceptedBrush: Brush$1;
    defaultRejectedBrush: Brush$1;
    defaultRecognizedIcon: BarcodeCountIcon;
    defaultNotInListIcon: BarcodeCountIcon;
    defaultAcceptedIcon: BarcodeCountIcon;
    defaultRejectedIcon: BarcodeCountIcon;
    logoStyle: LogoStyle$1;
    logoAnchor: Anchor$1;
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
    torchControlPosition: Anchor$1;
    tapToUncountEnabled: boolean;
    textForTapToUncountHint: string;
    hardwareTriggerSupported: boolean;
}
interface BarcodeCountDefaults {
    RecommendedCameraSettings: CameraSettings$1;
    Feedback: {
        success: Feedback$1;
        failure: Feedback$1;
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

/**
 * The style of the {@link BarcodeBatchBasicOverlay}
 *
 * @since 7.0.0
 */
declare enum BarcodeBatchBasicOverlayStyle {
    /**
     * Style that draws the highlights as a rectangular frame and adds an animation for when a code newly appears.
     *
     * @since 7.0.0
     */
    Frame = "frame",
    /**
     * Style that draws the highlights as a dot and adds an animation for when a code newly appears.
     *
     * @since 7.0.0
     */
    Dot = "dot"
}



interface BarcodeBatchDefaults {
    RecommendedCameraSettings: CameraSettings$1;
    BarcodeBatchBasicOverlay: {
        defaultStyle: BarcodeBatchBasicOverlayStyle;
        styles: {
            [key: string]: {
                DefaultBrush: {
                    fillColor: Color$1;
                    strokeColor: Color$1;
                    strokeWidth: number;
                };
            };
        };
    };
}

declare function getBarcodeBatchDefaults(): BarcodeBatchDefaults;

/**
 * The capture mode type of the {@link SparkScanView}.
 *
 * @since 6.16.0
 */
declare enum SparkScanScanningBehavior {
    /**
     * Barcode capturing session is stopped after each scan.
     *
     * @since 6.16.0
     */
    Single = "single",
    /**
     * Keeps the barcode capturing session active for longer time.
     *
     * @since 6.16.0
     */
    Continuous = "continuous"
}

/**
 * The preview behavior type of the {@link SparkScanView}.
 *
 * @since 6.23.0
 */
declare enum SparkScanPreviewBehavior {
    /**
     * After a scan with scanning behavior {@link SparkScanScanningBehavior.Single}, or stopping scanning with scanning behavior {@link SparkScanScanningBehavior.Continuous}, camera stays active and preview is visible for maximum precision.
     *
     * @since 6.23.0
     */
    Persistent = "persistent",
    /**
     * After a scan with scanning behavior {@link SparkScanScanningBehavior.Single}, or stopping scanning with scanning behavior {@link SparkScanScanningBehavior.Continuous}, camera moves to standby state and preview is hidden for maximum efficiency.
     *
     * @since 6.23.0
     */
    Default = "default"
}

/**
 * The base class for setting a default scanning mode to {@link SparkScanViewSettings}. Can be either {@link SparkScanScanningModeTarget} or {@link SparkScanScanningModeDefault}.
 *
 * @since 6.16.0
 */
interface SparkScanScanningMode$1 {
    /**
     * The scanning behavior of this mode.
     *
     * @since 8.7.0
     */
    readonly scanningBehavior: SparkScanScanningBehavior;
    /**
     * The preview behavior of this mode.
     *
     * @since 8.7.0
     */
    readonly previewBehavior: SparkScanPreviewBehavior;
}

/**
 * The size of the mini preview in {@link SparkScanView}.
 *
 * Used in {@link SparkScanViewSettings.defaultMiniPreviewSize}.
 *
 * @since 7.0.0
 */
declare enum SparkScanMiniPreviewSize {
    /**
     * Regular, smaller size of the mini preview.
     *
     * @since 7.0.0
     */
    Regular = "regular",
    /**
     * Expanded, larger size of the mini preview.
     *
     * @since 7.0.0
     */
    Expanded = "expanded"
}




interface SparkScanViewSettingsDefaults {
    triggerButtonCollapseTimeout: number;
    defaultScanningMode: SparkScanScanningMode$1;
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
    toastBackgroundColor: Color$1 | null;
    toastTextColor: Color$1 | null;
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
            visualFeedbackColor: Color$1;
            brush: Brush$1;
            feedbackDefault: Feedback$1;
        };
        error: {
            visualFeedbackColor: Color$1;
            brush: Brush$1;
            feedbackDefault: Feedback$1;
        };
    };
    SparkScanSettings: {
        batterySaving: BatterySavingMode$1;
        codeDuplicateFilter: number;
        locationSelection: LocationSelection$1;
        scanIntention: ScanIntention$1;
        selectionMode: SelectionMode$1;
    };
    SparkScanView: {
        brush: Brush$1;
        scanningBehaviorButtonVisible: boolean;
        barcodeCountButtonVisible: boolean;
        barcodeFindButtonVisible: boolean;
        targetModeButtonVisible: boolean;
        selectionModeButtonVisible: boolean;
        labelCaptureButtonVisible: boolean;
        previewSizeControlVisible: boolean;
        previewCloseControlVisible: boolean;
        triggerButtonAnimationColor: Color$1 | null;
        triggerButtonExpandedColor: Color$1 | null;
        triggerButtonCollapsedColor: Color$1 | null;
        triggerButtonTintColor: Color$1 | null;
        triggerButtonVisible: boolean;
        triggerButtonImage: string | null;
        toolbarBackgroundColor: Color$1 | null;
        toolbarIconActiveTintColor: Color$1 | null;
        toolbarIconInactiveTintColor: Color$1 | null;
        SparkScanViewSettings: SparkScanViewSettingsDefaults;
        cameraSwitchButtonVisible: boolean;
        torchControlVisible: boolean;
        zoomSwitchControlVisible: boolean;
    };
}

declare function getSparkScanDefaults(): SparkScanDefaults;

/**
 * The possible states of an item.
 *
 * @since 6.19.0
 */
declare enum BarcodePickState {
    /**
     * The item should be ignored in this session.
     *
     * @since 6.19.0
     */
    Ignore = "ignore",
    /**
     * The item has been picked.
     *
     * @since 6.19.0
     */
    Picked = "picked",
    /**
     * The item should be picked.
     *
     * @since 6.19.0
     */
    ToPick = "toPick",
    /**
     * The item has not been mapped to a product.
     *
     * @since 6.19.0
     */
    Unknown = "unknown"
}

declare class BrushForStateObject extends DefaultSerializeable {
    barcodePickState: BarcodePickState;
    brush: Brush$1;
}

/**
 * Common interface for {@link BarcodePickView} styles.
 *
 * @since 6.19.0
 */
interface BarcodePickViewHighlightStyle {
}

/**
 * The type of highlight applied to the filtered barcodes.
 *
 * @since 6.17.0
 */
declare enum BarcodeFilterHighlightType {
    /**
     * A quadrilateral filled with a solid color will be drawn over filtered barcodes.
     *
     * @since 6.17.0
     */
    Brush = "brush"
}

/** @since 6.17.0 */
interface BarcodeFilterHighlightSettings extends DefaultSerializeable {
    /**
     * Returns the type of highlight that will be applied to filtered barcodes.
     *
     * @since 6.17.0
     */
    readonly highlightType: BarcodeFilterHighlightType;
    /**
     * Returns the {@link Brush} applied to filtered barcodes when {@link BarcodeFilterHighlightSettings.highlightType} is set to {@link BarcodeFilterHighlightType.Brush}.
     *
     * @since 6.17.0
     */
    readonly brush: Brush$1 | null;
}



/**
 * Use this class to customize the status icons in styles that support it.
 *
 * @since 6.28.0
 */
interface BarcodePickStatusIconSettings$1 {
    /**
     * The maximum size allowed for status icons.
     *
     * Default is no maximum, INT_MAX.
     *
     * @since 6.28.0
     */
    maxSize: number;
    /**
     * The minimum size allowed for status icons.
     *
     * Default is 20 dp.
     *
     * @since 6.28.0
     */
    minSize: number;
    /**
     * The ratio between the shortest highlight dimension and the base size for the status icon. This base size will then be clamped between {@link BarcodePickStatusIconSettings.minSize} and {@link BarcodePickStatusIconSettings.maxSize}. For example, for a highlight with a size of 90x60 dp, a ratio of 0.6 means the base size for the status icon will be calculated as 60 (shortest dimension) * 0.6 = 36 dp, before being clamped between the minimum and maximum allowed sizes.
     *
     * Default is 0.5.
     *
     * @since 6.28.0
     */
    ratioToHighlightSize: number;
}
interface BarcodePickDefaults {
    RecommendedCameraSettings: CameraSettings$1;
    BarcodePickSettings: {
        arucoDictionary: ArucoDictionary$1;
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
        logoStyle: LogoStyle$1;
        logoAnchor: Anchor$1;
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
        [key: string]: SymbologySettings$1;
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
declare function getSymbologySettingsFromBarcodePickDefaults(symbology: Symbology | string, errorPrefix: string): SymbologySettings$1;

interface BarcodeFindDefaults {
    RecommendedCameraSettings: CameraSettings$1;
    Feedback: {
        found: Feedback$1;
        itemListUpdated: Feedback$1;
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
    torchControlPosition: Anchor$1;
    logoStyle: LogoStyle$1;
    logoAnchor: Anchor$1;
    cameraStateOnStop: FrameSourceState;
}
interface BarcodeFindViewSettingsDefaults {
    progressBarStartColor: Color$1;
    progressBarFinishColor: Color$1;
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

/**
 * Builds the static (build-time-knowable) portion of each barcode submodule's nested JSON
 * defaults, out of the flat generated consts.
 *
 * The top-level "Barcode" block (SymbologySettings / SymbologyDescriptions /
 * CompositeTypeDescriptions) is entirely engine-owned/dynamic and is intentionally absent from
 * every one of these — see BarcodeModule.kt#getDynamicDefaults.
 *
 * Per submodule, the excluded (dynamic, native-only) keys mirror BarcodeModule.getDynamicDefaults
 * on Android:
 * - BarcodeCapture: RecommendedCameraSettings
 * - BarcodeBatch: RecommendedCameraSettings
 * - BarcodeSelection: RecommendedCameraSettings
 * - BarcodeCount: RecommendedCameraSettings, BarcodeCountView (whole)
 * - BarcodeFind: RecommendedCameraSettings, BarcodeFindView (whole)
 * - BarcodePick: RecommendedCameraSettings, SymbologySettings, BarcodePickViewHighlightStyle,
 *   ViewSettings (whole)
 * - SparkScan: SparkScanView (whole, RecommendedCameraSettings n/a for this mode)
 * - BarcodeAr: RecommendedCameraSettings, BarcodeArView (whole — scoped out of this pass because
 *   its nested field names diverge substantially from the generated consts; left fully dynamic
 *   rather than risk staticizing it incorrectly)
 */
declare function buildStaticBarcodeCaptureDefaultsJson(_platform: 'android' | 'ios'): unknown;
declare function buildStaticBarcodeBatchDefaultsJson(platform: 'android' | 'ios'): unknown;
declare function buildStaticBarcodeSelectionDefaultsJson(platform: 'android' | 'ios'): unknown;
declare function buildStaticBarcodeCountDefaultsJson(platform: 'android' | 'ios'): unknown;
declare function buildStaticBarcodeFindDefaultsJson(platform: 'android' | 'ios'): unknown;
declare function buildStaticBarcodePickDefaultsJson(_platform: 'android' | 'ios'): unknown;
declare function buildStaticSparkScanDefaultsJson(platform: 'android' | 'ios'): unknown;
declare function buildStaticBarcodeArDefaultsJson(platform: 'android' | 'ios'): unknown;

declare const barcodeCapturePlaceholderCameraSettings: unknown;
declare const barcodeBatchPlaceholderCameraSettings: unknown;
declare const barcodeSelectionPlaceholderCameraSettings: unknown;
declare const barcodeCountPlaceholderCameraSettings: unknown;
declare const barcodeFindPlaceholderCameraSettings: unknown;
declare const barcodePickPlaceholderCameraSettings: unknown;
declare const barcodeArPlaceholderCameraSettings: unknown;
declare function placeholderBarcodeCountView(platform: 'android' | 'ios'): unknown;
declare function placeholderBarcodeFindView(_platform: 'android' | 'ios'): unknown;
declare function placeholderBarcodePickViewSettings(_platform: 'android' | 'ios'): unknown;
declare function placeholderBarcodePickViewHighlightStyle(_platform: 'android' | 'ios'): unknown;
/**
 * A structurally-valid (not production-accurate) stand-in for BarcodeArView, whose field names
 * diverge substantially from BarcodeArViewGeneratedDefaults (see staticDefaults.ts's BarcodeAr
 * doc comment for why it isn't staticized). Used only until the Capacitor wiring's one-off full
 * getDefaults() fetch replaces this module's data wholesale — see Capacitor.ts.
 */
declare function placeholderBarcodeArView(): unknown;
declare function placeholderBarcodeSparkScanView(platform: 'android' | 'ios'): unknown;

/**
 * Transformer interface for Barcode matching.
 *
 * @since 8.3.0
 */
interface BarcodeDataTransformer {
    /**
     * Invoked for each detected barcode. The implementation should return the same barcode data, which may or may not be transformed from the original, or *null* if the barcode should be ignored entirely. Note that this method is executed on a background thread.
     *
     * @since 8.3.0
     */
    transformBarcodeData(data: string | null): string | null;
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
/**
 * A recognized cluster.
 *
 * @since 8.3.0
 */
declare class Cluster {
    private _barcodes;
    /**
     * The array of barcodes that form the cluster.
     *
     * @since 8.3.0
     */
    get barcodes(): Barcode[];
    private static fromJSON;
    private constructor();
}

/**
 * An enumeration of the presets available to simplify configuring symbologies.
 *
 * @since 8.3.0
 */
declare enum CapturePreset {
    /**
     * Automatically enables and optimizes symbologies most used in the Transport vertical. This includes {@link Symbology.Code128}, {@link Symbology.QR}, {@link Symbology.Code39}, {@link Symbology.DataMatrix}, {@link Symbology.EAN13UPCA}, {@link Symbology.InterleavedTwoOfFive}, {@link Symbology.Aztec}, {@link Symbology.EAN8}, {@link Symbology.PDF417}, {@link Symbology.UPCE}.
     *
     * @since 8.3.0
     */
    Transport = "transport",
    /**
     * Automatically enables and optimizes symbologies most used in the Logistics vertical. This includes {@link Symbology.Code128}, {@link Symbology.QR}, {@link Symbology.Code39}, {@link Symbology.DataMatrix}, {@link Symbology.EAN13UPCA}, {@link Symbology.InterleavedTwoOfFive}, {@link Symbology.Codabar}, {@link Symbology.EAN8}, {@link Symbology.PDF417}, {@link Symbology.UPCE}.
     *
     * @since 8.3.0
     */
    Logistics = "logistics",
    /**
     * Automatically enables and optimizes symbologies most used in the Retail vertical. This includes {@link Symbology.EAN13UPCA}, {@link Symbology.Code128}, {@link Symbology.QR}, {@link Symbology.Code39}, {@link Symbology.EAN8}, {@link Symbology.DataMatrix}, {@link Symbology.InterleavedTwoOfFive}, {@link Symbology.UPCE}, {@link Symbology.GS1Databar}, {@link Symbology.GS1DatabarExpanded}.
     *
     * @since 8.3.0
     */
    Retail = "retail",
    /**
     * Automatically enables and optimizes symbologies most used in the Healthcare vertical. This includes {@link Symbology.Code128}, {@link Symbology.DataMatrix}, {@link Symbology.QR}, {@link Symbology.EAN13UPCA}, {@link Symbology.Code39}, {@link Symbology.MicroPDF417}, {@link Symbology.InterleavedTwoOfFive}, {@link Symbology.MSIPlessey}, {@link Symbology.EAN8}.
     *
     * @since 8.3.0
     */
    Healthcare = "healthcare",
    /**
     * Automatically enables and optimizes symbologies most used in the Manufacturing vertical. This includes {@link Symbology.Code128}, {@link Symbology.DataMatrix}, {@link Symbology.Code39}, {@link Symbology.QR}, {@link Symbology.EAN13UPCA}, {@link Symbology.InterleavedTwoOfFive}, {@link Symbology.PDF417}, {@link Symbology.UPCE}, {@link Symbology.EAN8}.
     *
     * @since 8.3.0
     */
    Manufacturing = "manufacturing"
}

/**
 * A barcode that was only localized but not recognized yet. This means there is no data or symbology associated with it.
 *
 * @since 6.5.0
 */
declare class LocalizedOnlyBarcode {
    private _location;
    private _frameID;
    /**
     * The location of the code. The coordinates are in image-space, meaning that the coordinates correspond to actual pixels in the image. For display, the coordinates need first to be converted into screen-space.
     *
     * The meaning of the values of {@link Quadrilateral.topLeft} etc is such that the top left point corresponds to the top left corner of the barcode, independent of how the code is oriented in the image.
     *
     * In case the feature is not licensed, a quadrilateral with all corners set to 0, 0 is returned.
     *
     * @since 6.5.0
     */
    get location(): Quadrilateral;
    /**
     * Id of the frame from which this barcode information was obtained.
     *
     * @since 6.5.0
     */
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

/**
 * A barcode that’s part of a list of targets for {@link BarcodeCountCaptureList}.
 *
 * @since 6.17.0
 */
declare class TargetBarcode extends DefaultSerializeable {
    /**
     * The data of the target barcode, as a sequence of characters.
     *
     * @since 6.17.0
     */
    get data(): string;
    /**
     * The number of times that the target barcode is expected to be scanned.
     *
     * @since 6.17.0
     */
    get quantity(): number;
    private _data;
    private _quantity;
    /**
     * Constructs a new target barcode to be added to a {@link BarcodeCountCaptureList}.
     *
     * @since 6.17.0
     */
    static create(data: string, quantity: number): TargetBarcode;
    private static fromJSON;
    private constructor();
}
interface TargetBarcodeJSON {
    data: string;
    quantity: number;
}

/**
 * A barcode tracked over the course of multiple frames.
 *
 * The state of a {@link TrackedBarcode} can be observed using a {@link BarcodeBatchListener}.
 *
 * The BarcodeBatchListener.didUpdateSession() callback will be invoked every time a new frame is processed and at least one of the following events took place:
 *
 * 1. A track is established.
 * 2. A track location has changed.
 * 3. A track is lost and can no longer be tracked.
 *
 * @since 6.5.0
 */
declare class TrackedBarcode {
    private _barcode;
    /**
     * The barcode associated to this track.
     *
     * @since 6.5.0
     */
    get barcode(): Barcode;
    private _location;
    /**
     * The location of the code. The coordinates are in image-space, meaning that the coordinates correspond to actual pixels in the image. For display, the coordinates need first to be converted into screen-space using the data capture view. See the Coordinate Conversion Guide for details and examples.
     *
     * The meaning of the values of {@link Quadrilateral.topLeft} is such that the top left point corresponds to the top left corner of the barcode, independent of how the code is oriented in the image. Same for the other corners.
     *
     * Using this property requires the MatrixScan AR add-on. In case the feature is not licensed, a quadrilateral with all corners set to 0, 0 is returned.
     *
     * @since 6.5.0
     */
    get location(): Quadrilateral;
    private _identifier;
    /**
     * The unique identifier for the tracked barcode. The identifier is unique for each barcode. The same identifier may be reused once the barcode is lost for another barcode.
     *
     * @since 6.5.0
     */
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

/**
 * A barcode or a cluster tracked over the course of multiple frames.
 *
 * @since 8.2.0
 */
declare class TrackedObject {
    private _location;
    /**
     * The location of the code. The coordinates are in image-space, meaning that the coordinates correspond to actual pixels in the image. For display, the coordinates need first to be converted into screen-space using the data capture view.
     *
     * The meaning of the values of {@link Quadrilateral.topLeft} is such that the top left point corresponds to the top left corner of the barcode, independent of how the code is oriented in the image. Same for the other corners.
     *
     * @since 8.2.0
     */
    get location(): Quadrilateral;
    private _identifier;
    /**
     * The unique identifier for the tracked object. The identifier is unique for each object. The same identifier may be reused once the object is lost for another object.
     *
     * @since 8.2.0
     */
    get identifier(): number;
    private _data;
    /**
     * The data associated with this object.
     *
     * @since 8.2.0
     */
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
/**
 * Object that is returned by {@link BarcodeCountSession.getSpatialMap}. Represents the result of mapping the barcodes, and sub-barcodes if present, in a grid.
 *
 * Depending on the scanned barcodes the grid could be incomplete so for some coordinates the returned barcode could be *null*.
 *
 * @since 6.19.0
 */
declare class BarcodeSpatialGrid extends DefaultSerializeable {
    private _rows;
    private _columns;
    private _grid;
    private static fromJSON;
    /**
     * Returns the number of rows in the grid.
     *
     * @since 6.19.0
     */
    get rows(): number;
    /**
     * Returns the number of columns in the grid.
     *
     * @since 6.19.0
     */
    get columns(): number;
    /**
     * Returns the barcode at the specified coordinates. If there is no barcode *null* is returned.
     *
     * @since 6.19.0
     */
    barcodeAt(row: number, column: number): Barcode | null;
    /**
     * Returns an array of Barcodes corresponding to the selected row.
     *
     * @since 6.19.0
     */
    row(index: number): Barcode[];
    /**
     * Returns an array of barcodes corresponding to the selected column.
     *
     * @since 6.19.0
     */
    column(index: number): Barcode[];
}
interface BarcodeSpatialGridJSON {
    rows: number;
    columns: number;
    grid: BarcodeSpatialGridElementJSON[][];
}

/** @since 6.17.0 */
declare class BarcodeFilterHighlightSettingsBrush extends DefaultSerializeable implements BarcodeFilterHighlightSettings {
    private _highlightType;
    private _brush;
    /** @since 8.3.0 */
    constructor(brush?: Brush$1);
    /**
     * Creates a new BarcodeFilterHighlightSettings instance with {@link BarcodeFilterHighlightType.Brush} type, with the specified brush.
     *
     * @since 6.17.0
     */
    static create(brush: Brush$1): BarcodeFilterHighlightSettingsBrush;
    get highlightType(): BarcodeFilterHighlightType;
    get brush(): Brush$1 | null;
}

/**
 * Reason an adaptive recognition dispatch failed, delivered to an {@link AdaptiveRecognitionServiceListener}.
 *
 * @since 8.7.0
 */
declare enum AdaptiveRecognitionErrorReason {
    /**
     * The dispatch failed for an unspecified reason, such as a network, backend, or pre-dispatch failure.
     *
     * @since 8.7.0
     */
    Unknown = "unknown",
    /**
     * The dispatch did not complete within the allotted time.
     *
     * @since 8.7.0
     */
    Timeout = "timeout"
}

/**
 * Correlation metadata delivered with every {@link AdaptiveRecognitionServiceListener} callback. It ties an asynchronously-delivered adaptive recognition outcome back to the frame that produced the dispatch. The SDK produces these; applications do not construct them.
 *
 * @since 8.7.0
 */
declare class AdaptiveRecognitionFrameMetadata {
    private _frameId;
    private _barcodes;
    private constructor();
    /**
     * Monotonic per-mode ordinal identifying the frame within a capture session.
     *
     * @since 8.7.0
     */
    get frameId(): number;
    /**
     * The barcodes recognized in the dispatched frame.
     *
     * @since 8.7.0
     */
    get barcodes(): Barcode[];
    private static fromJSON;
}

/**
 * Interface for the outcome of adaptive recognition dispatches performed by a capture mode’s adaptive recognition service. Register it on the mode with {@link BarcodeCapture.addAdaptiveRecognitionServiceListener}. Each callback receives the {@link AdaptiveRecognitionFrameMetadata} of the originating frame, so an asynchronously-delivered outcome can be correlated back to the frame that produced it.
 *
 * All callbacks are optional, so an implementor overrides only the ones it needs.
 *
 * For any given frame, its response or error callback always follows that frame’s dispatch-started callback.
 *
 * @since 8.7.0
 */
interface AdaptiveRecognitionServiceListener {
    /**
     * Invoked when a frame is dispatched to the adaptive recognition service. The frame data is provided for the mode’s own use, for example to display the dispatched frame.
     *
     * @since 8.7.0
     */
    onAdaptiveRecognitionServiceDispatchStarted?(getFrameData: () => Promise<FrameData | null>, frameMetadata: AdaptiveRecognitionFrameMetadata): void | Promise<void>;
    /**
     * Invoked when an adaptive recognition dispatch completes successfully. The response is a JSON string whose shape is defined by the task’s response schema and is opaque to the SDK.
     *
     * @since 8.7.0
     */
    onAdaptiveRecognitionServiceResponse?(response: string, frameMetadata: AdaptiveRecognitionFrameMetadata): void | Promise<void>;
    /**
     * Invoked when an adaptive recognition dispatch fails.
     *
     * @since 8.7.0
     */
    onAdaptiveRecognitionServiceError?(reason: AdaptiveRecognitionErrorReason, frameMetadata: AdaptiveRecognitionFrameMetadata): void | Promise<void>;
}

/**
 * Determines what feedback (vibration, sound) should be emitted when reading barcodes. The feedback is specified for each {@link BarcodeCapture} instance separately and can be changed through the {@link BarcodeCapture.feedback} property by either modifying an existing instance of this class, or by assigning a new one.
 *
 * As of now, this class only allows to configure the feedback that gets emitted when a barcode is read successfully, through the {@link BarcodeCaptureFeedback.success} property.
 *
 * See documentation on the {@link BarcodeCapture.feedback} property for usage samples.
 *
 * @since 6.5.0
 */
declare class BarcodeCaptureFeedback$1 extends DefaultSerializeable {
    /**
     * A {@link Feedback} for a success event.
     *
     * @since 6.5.0
     */
    success: Feedback$1;
    /**
     * Returns a barcode capture feedback with default configuration:
     *
     * - default beep sound is loaded,
     * - beeping for the success event is enabled,
     * - vibration for the success event is enabled.
     *
     * @since 6.5.0
     */
    static get default(): BarcodeCaptureFeedback$1;
}

/**
 * Contains information about barcode-capture-specific licensing.
 *
 * @since 8.6.0
 */
declare class BarcodeCaptureLicenseInfo {
    private _licensedSymbologies;
    /**
     * Which symbologies are licensed and can be used for barcode capture.
     *
     * @since 8.6.0
     */
    get licensedSymbologies(): Symbology[];
    static fromJSON(json: {
        licensedSymbologies?: string[];
    }): BarcodeCaptureLicenseInfo;
}

/**
 * The capture session is responsible for determining the list of *relevant* barcodes by filtering out duplicates. This filtering of duplicates is completely time-based and doesn’t use any information about the location of the barcode. By default, all the codes scanned in a frame are always reported. It is possible to filter out codes recently scanned by changing {@link BarcodeCaptureSettings.codeDuplicateFilter}.
 *
 * For location-based tracking over multiple frames, you may be better off using {@link BarcodeBatch}.
 *
 * When {@link DataCaptureMode.isEnabled|the barcode capture mode is disabled}, the session’s duplicate filter is reset.
 *
 * The capture session should only be accessed from within didScan() or didUpdateSession() to which it is provided as an argument. It is not safe to be accessed from anywhere else since it may be concurrently modified.Specifically no reference to {@link BarcodeCaptureSession.newlyRecognizedBarcode} or {@link BarcodeCaptureSession.newlyLocalizedBarcodes} should be kept and traversed outside of didScan() or didUpdateSession(). Instead a copy of the lists should be made to avoid concurrent modification. The individual barcodes can be referenced without copying as they are not further modified.
 *
 * @since 6.5.0
 */
declare class BarcodeCaptureSession {
    private _newlyRecognizedBarcode;
    private _newlyLocalizedBarcodes;
    private _frameSequenceID;
    private frameId;
    private controller;
    /**
     * Last newly recognized barcode in the last processed frame.
     *
     * @since 6.26.0
     */
    get newlyRecognizedBarcode(): Barcode | null;
    /**
     * List of codes that were newly localized (but not recognized) in the last processed frame.
     *
     * @since 6.5.0
     */
    get newlyLocalizedBarcodes(): LocalizedOnlyBarcode[];
    /**
     * The identifier of the current frame sequence.
     *
     * As long as there is no interruptions of frames coming from the camera, the {@link BarcodeCaptureSession.frameSequenceID} will stay the same.
     *
     * @since 6.5.0
     */
    get frameSequenceID(): number;
    private static fromJSON;
    /**
     * Resets the barcode capture session, effectively clearing the history of scanned codes. This affects duplicate filtering: when calling {@link BarcodeCaptureSession.reset} every frame has the same effect as setting the {@link BarcodeCaptureSettings.codeDuplicateFilter} to 0. This function should only be called inside the listeners’ callback.
     *
     * @since 6.12.0
     */
    reset(): Promise<void>;
}
interface BarcodeCaptureSessionJSON {
    newlyRecognizedBarcode: BarcodeJSON | null;
    newlyLocalizedBarcodes: LocalizedOnlyBarcodeJSON[];
    frameSequenceId: number;
}




/**
 * Listener interface for traditional barcode capture.
 *
 * @since 6.5.0
 */
interface BarcodeCaptureListener {
    /**
     * Invoked after a frame has been processed by barcode capture and the session has been updated. In contrast to didScan(), this method is invoked, regardless whether a code was scanned or not. If codes were recognized in this frame, this method is invoked after didScan().
     *
     * This callback will be blocking the further processing of frames, so you should return from it as quickly as possible. Therefore, if you need to perform a time-consuming operation, like querying a database or opening an URL encoded in the barcode data, consider moving it out of this callback, e.g. by using a timeout to let this function return before you do any more work. It is advised to disable the capture mode while you’re doing additional work and enabling it again once that work is done.
     *
     * See the documentation in didScan() for information on how to properly stop recognition of barcodes.
     *
     * @since 6.5.0
     */
    didUpdateSession?(barcodeCapture: BarcodeCapture, session: BarcodeCaptureSession, getFrameData: () => Promise<FrameData>): Promise<void>;
    /**
     * Invoked whenever a code has been scanned. The newly scanned barcode can be retrieved from {@link BarcodeCaptureSession.newlyRecognizedBarcode}.
     *
     * This callback will be blocking the further processing of frames, so you should return from it as quickly as possible. Therefore, if you need to perform a time-consuming operation, like querying a database or opening an URL encoded in the barcode data, consider moving it out of this callback, e.g. by using a timeout to let this function return before you do any more work. It is advised to disable the capture mode while you’re doing additional work and enabling it again once that work is done.
     *
     * Sometimes, after receiving this callback, you may want to pause scanning or to stop scanning completely.
     *
     * - To pause scanning, but keep the camera (frame source) running, just set the barcode capture’s {@link DataCaptureMode.isEnabled|enabled property} to *false*.
     *
     * ```jsx
     * captureMode.isEnabled = false
     * ```
     *
     * - To stop scanning, you will need to both {@link DataCaptureMode.isEnabled|disable the capture mode} and stop the frame source.
     *
     * While it’s possible to only stop the camera and keep the capture mode enabled, this may lead to additional scan events being delivered, which is typically not desired. The following lines of code show how to disable the capture mode and stop the frame source as well:
     *
     * ```jsx
     * // no more didScan callbacks will be invoked after this call.
     * captureMode.isEnabled = false
     * // asynchronously turn off the camera as quickly as possible.
     * captureMode.context.frameSource.switchToDesiredState(Scandit.FrameSourceState.Off);
     * ```
     *
     * @since 6.5.0
     */
    didScan?(barcodeCapture: BarcodeCapture, session: BarcodeCaptureSession, getFrameData: () => Promise<FrameData>): Promise<void>;
}

/**
 * Holds all the barcode recognition related settings, such as enabled symbologies and location selection. For the settings to take effect, they must be applied to a {@link BarcodeCapture|barcode capture} instance using BarcodeCapture.applySettings().
 *
 * By default, all types of barcodes (symbologies) are disabled. To scan barcodes, you need to manually enable all the symbologies you want to scan in your application.
 *
 * The following lines of code show how to enable {@link Symbology.Code128} and apply the settings to {@link BarcodeCapture|barcode capture}.
 *
 * ```jsx
 * const settings = new BarcodeCaptureSettings();
 * settings.enableSymbology(Symbology.Code128, true);
 * barcodeCapture.applySettings(settings);
 * ```
 *
 * @since 6.5.0
 */
declare class BarcodeCaptureSettings$1 extends DefaultSerializeable {
    /**
     * Defines the strategy with which to select one out of many visible barcodes. By default, this property is *null* and code selection is disabled.
     *
     * @since 6.5.0
     */
    locationSelection: LocationSelection$1 | null;
    /**
     * The enabled {@link CompositeType|composite types}. To enable composite codes scanning it is also needed to enable the symbologies that make up the specific type of composite code through {@link BarcodeCaptureSettings.enableSymbologiesForCompositeTypes}.
     *
     * @since 6.6.0
     */
    enabledCompositeTypes: CompositeType[];
    /**
     * The battery saving mode to use with BarcodeCapture. Defaults to {@link BatterySavingMode.Auto}, to automatically enable the battery saving mode when a higher than usual consumption of the battery is detected, balancing performance and battery lifetime. Sets to {@link BatterySavingMode.Off} to revert to the standard performance.
     *
     * @since 6.26.0
     */
    batterySaving: BatterySavingMode$1;
    /**
     * The scan intention algorithm to use with BarcodeCapture. Defaults to {@link ScanIntention.Smart}, enabling the automatic algorithm that intelligently identifies and then scans the barcode that the user intends to capture, reducing errors. Sets to {@link ScanIntention.Manual} to disable.
     *
     * When the deprecated `ScanIntention.SmartSelection` is used, the progress indicator drawn on scan candidates uses the stroke color of the brush set on {@link BarcodeCaptureOverlay}.
     *
     * A frame source that supplies a single image requires {@link ScanIntention.Manual}. {@link ScanIntention.Smart} has to observe a barcode across several frames before it returns it.
     *
     * While {@link BarcodeCaptureSettings.selectionMode} is set to {@link SelectionMode.On}, this property is recorded but does not take effect — the SDK forces smart selection internally so that the aimer is shown and the tap-to-confirm contract of {@link SelectionMode.On} holds. The value supplied here is remembered and applied automatically when {@link BarcodeCaptureSettings.selectionMode} leaves {@link SelectionMode.On}.
     *
     * @since 6.24.0
     */
    scanIntention: ScanIntention$1;
    /**
     * Controls whether the aimed-at barcode is scanned without user confirmation. Defaults to {@link SelectionMode.Off} — barcodes are scanned automatically when aimed at. Set to {@link SelectionMode.On} to always require an explicit tap on the preview to confirm the scan.
     *
     * Set to {@link SelectionMode.Auto} to let the SDK decide dynamically.
     *
     * {@link SelectionMode.Auto} is the recommended replacement for the deprecated `ScanIntention.SmartSelection`.
     *
     * When {@link SelectionMode.On} is used, we recommend making it explicit to the user that they need to tap the preview to scan — for example via a toast message or similar UI hint.
     *
     * {@link SelectionMode.Auto} requires {@link BarcodeCaptureSettings.scanIntention} to be set to {@link ScanIntention.Smart}; with {@link ScanIntention.Manual} it behaves like {@link SelectionMode.Off}. Automatic selection only activates on devices that support Smart.
     *
     * @since 8.5.0
     */
    selectionMode: SelectionMode$1;
    private properties;
    private symbologies;
    private _codeDuplicateFilter;
    private _codeDuplicateFilterExplicitlySet;
    private _arucoDictionary;
    /**
     * Returns the set of enabled symbologies.
     *
     * @since 6.5.0
     */
    get enabledSymbologies(): Symbology[];
    private get compositeTypeDescriptions();
    private static get barcodeDefaults();
    private static get barcodeCaptureDefaults();
    /**
     * Creates new default settings instance. Recognition is setup for recognizing codes in the full image. Symbologies are all disabled. Before passing the settings to the {@link BarcodeCapture} instance, make sure to enable the symbologies required by your application.
     *
     * @since 6.5.0
     */
    constructor();
    /**
     * Gets {@link SymbologySettings} specific for the given {@link Symbology}.
     *
     * Note that modifying the returned object doesn’t automatically apply the changes to {@link BarcodeCapture}. After you made changes to the symbology settings, call BarcodeCapture.applySettings() with these {@link BarcodeCaptureSettings} to apply them.
     *
     * @since 6.5.0
     */
    settingsForSymbology(symbology: Symbology): SymbologySettings$1;
    /**
     * Sets a property to the provided value. Use this method to set properties that are not yet part of a stable API. Properties set through this method may or may not be used or change in a future release.
     *
     * @since 6.5.0
     */
    setProperty(name: string, value: any): void;
    /**
     * Retrieves the value of a previously set property.
     *
     * @since 6.5.0
     */
    getProperty(name: string): any;
    /**
     * Provides a convenient shortcut to enable decoding of particular symbologies without having to go through {@link SymbologySettings}. By default, all symbologies are turned off and symbologies need to be explicitly enabled.
     *
     * @since 6.5.0
     */
    enableSymbologies(symbologies: Symbology[]): void;
    /**
     * Provides a convenient shortcut to enable/disable decoding of a particular symbology without having to go through {@link SymbologySettings}.
     *
     * Some 1d barcode symbologies allow you to encode variable-length data. By default, the Scandit Data Capture SDK only scans barcodes in a certain length range.
     *
     * If your application requires scanning of one of these symbologies, and the length is falling outside the default range, you may need to adjust the {@link SymbologySettings.activeSymbolCounts|active symbol counts} for the symbology in addition to enabling it.
     *
     * @since 6.5.0
     */
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    /**
     * Enables all symbologies needed for the given {@link CompositeType|composite types}. To enable composite codes scanning it is also needed to enable the composite types through {@link BarcodeCaptureSettings.enabledCompositeTypes}. By default, all symbologies are turned off and symbologies need to be explicitly enabled.
     *
     * @since 6.6.0
     */
    enableSymbologiesForCompositeTypes(compositeTypes: CompositeType[]): void;
    /**
     * Sets the {@link ArucoDictionary} to be used while scanning ArUco codes. When the symbology is enabled the dictionary {@link ArucoDictionaryPreset.ArucoDictionaryPreset_5X5_1000} is loaded as default.
     *
     * @since 6.19.0
     */
    setArucoDictionary(dictionary: ArucoDictionary$1): void;
    /**
     * Determines the time interval in which codes with the same symbology/data are filtered out as duplicates. Use this property to change the interval or completely turn off duplicate filtering:
     *
     * - Setting this property to the special value -2 (default from SDK version 7.1.0) will result in a behavior that depends on {@link BarcodeCaptureSettings.scanIntention}. - If {@link ScanIntention.Smart} (default from 7.0), it enables the Smart Duplicate Filter algorithm that intelligently reports a duplicate when the user intends to scan it again, reducing errors and speeding up the workflow. - If {@link ScanIntention.Manual}, it acts as when setting {@link BarcodeCaptureSettings.codeDuplicateFilter} to 1.5s (check the following). This behavior applies also to the cases in which the Android device doesn’t support {@link ScanIntention.Smart}.
     * - Since SDK version 8.5, when {@link BarcodeCaptureSettings.selectionMode} is {@link SelectionMode.On} and this property is left at its smart default (-2), the filter is internally treated as 0 (filtering disabled) so the user can re-select the same barcode via the selection gesture. Setting this property to any value explicitly — including -2 — opts out of this override.
     * - Setting this property to the special value -1 means that the same code will not be reported again until the scanning has been stopped.
     *
     * - Setting this property to a value of 0 means that the same code will be reported every time it is found.
     * - Setting this property to a value larger than zero indicates the time that must pass between the same code to be reported again.
     *
     * The filtering is reset any time the capture mode is disabled ({@link DataCaptureMode.isEnabled} is set to false) as this is when the session is cleaned and restarts from zero.
     *
     * @since 6.5.0
     */
    get codeDuplicateFilter(): number;
    set codeDuplicateFilter(value: number);
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
     * Register persistent event listener for barcode capture adaptive recognition service events
     * @param modeId Unique identifier of the barcode capture mode
     */
    registerBarcodeCaptureAdaptiveRecognitionServiceListener({ modeId }: {
        modeId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for barcode capture adaptive recognition service events
     * @param modeId Unique identifier of the barcode capture mode
     */
    unregisterBarcodeCaptureAdaptiveRecognitionServiceListener({ modeId, }: {
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
     * Register persistent event listener for barcode count adaptive recognition service events
     * @param viewId Unique identifier of the BarcodeCount view
     */
    registerBarcodeCountAdaptiveRecognitionServiceListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for barcode count adaptive recognition service events
     * @param viewId Unique identifier of the BarcodeCount view
     */
    unregisterBarcodeCountAdaptiveRecognitionServiceListener({ viewId }: {
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
     * Stops delivering barcode count status requests to the framework
     * @param viewId Unique identifier of the BarcodeCount view
     */
    removeBarcodeCountStatusProvider({ viewId }: {
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
     * Returns the SparkScanScanningMode JSON of the view, or null when not available
     * @param viewId Unique identifier of the SparkScan view
     */
    getSparkScanScanningMode({ viewId }: {
        viewId: number;
    }): Promise<string | null>;
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
     * @param itemsJson Item list as JSON string; each element conforms to barcode-capture/barcode_find_item.json.
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
     * Register persistent event listener for BarcodeAr augmentation eviction events
     * @param viewId Unique identifier of the BarcodeAr view
     */
    registerBarcodeArAugmentationsListener({ viewId }: {
        viewId: number;
    }): Promise<void>;
    /**
     * Unregister event listener for BarcodeAr augmentation eviction events
     * @param viewId Unique identifier of the BarcodeAr view
     */
    unregisterBarcodeArAugmentationsListener({ viewId }: {
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

/**
 * Capture mode for single barcode scanning. This capture mode uses the *barcode scanning* capability.
 *
 * Learn more on how to use barcode capture in our [Get Started](https://docs.scandit.com/sdks/react-native/barcode-capture/get-started) guide.
 *
 * For MatrixScan-based barcode capture, use {@link BarcodeBatch} instead.
 *
 * @since 6.5.0
 */
interface BarcodeCapture$1 {
    type: 'barcodeCapture';
    /**
     * Instance of {@link BarcodeCaptureFeedback} that is used by the barcode scanner to notify users about Success and Failure events.
     *
     * The default instance of the Feedback will have both sound and vibration enabled. A default beep sound will be used for the sound.
     *
     * To change the feedback emitted, the {@link BarcodeCaptureFeedback} can be modified as shown below, or a new one can be assigned.
     *
     * ```jsx
     * const barcodeCapture = ...;
     * const feedback = BarcodeCaptureFeedback.defaultFeedback;
     * feedback.success = new Feedback(Vibration.defaultVibration, null);
     * barcodeCapture.feedback = feedback;
     * ```
     *
     * @since 6.5.0
     */
    feedback?: BarcodeCaptureFeedback;
    settings?: BarcodeCaptureSettings;
    enabled?: boolean;
    modeId?: number;
    parentId?: number | null;
    hasListeners?: boolean;
}
/**
 * Determines what feedback (vibration, sound) should be emitted when reading barcodes. The feedback is specified for each {@link BarcodeCapture} instance separately and can be changed through the {@link BarcodeCapture.feedback} property by either modifying an existing instance of this class, or by assigning a new one.
 *
 * As of now, this class only allows to configure the feedback that gets emitted when a barcode is read successfully, through the {@link BarcodeCaptureFeedback.success} property.
 *
 * See documentation on the {@link BarcodeCapture.feedback} property for usage samples.
 *
 * @since 6.5.0
 */
interface BarcodeCaptureFeedback {
    /**
     * A {@link Feedback} for a success event.
     *
     * @since 6.5.0
     */
    success?: Feedback;
}
/**
 * A feedback consisting of a sound and vibration, for example to be provided by a device when a code has been successfully scanned.
 *
 * @since 6.5.0
 */
interface Feedback {
    /**
     * The sound to be played when a feedback is required. If *null*, no sound is played. Depending on the device’s ring mode and/or volume settings, no sound may be played even if this property is properly set to a non-*null* instance.
     *
     * @since 6.5.0
     */
    sound?: Sound | null;
    /**
     * The vibration to be emitted when a feedback is required. If *null*, no vibration is emitted. This property is further influenced by the device’s ring mode: the device may not vibrate even if this property is properly set to a non-*null* instance.
     *
     * @since 6.5.0
     */
    vibration?: Vibration | null;
}
/**
 * A sound, to be played for example when a code has been successfully scanned.
 *
 * @since 6.5.0
 */
interface Sound {
    /**
     * The name of the resource file, including the extension.
     *
     * On iOS, the file must be added as a resource file, on Android it must be added specifically under app/src/main/assets.
     *
     * @since 6.5.0
     */
    resource?: string;
}
/**
 * A vibration, to be emitted for example when a code has been successfully scanned.
 *
 * @since 6.5.0
 */
interface Vibration {
    type?: 'default' | 'selectionHaptic' | 'successHaptic' | 'impactHaptic' | 'impactHapticLight' | 'failureHaptic' | 'waveForm';
    timings?: number[];
    amplitudes?: number[];
}
/**
 * Holds all the barcode recognition related settings, such as enabled symbologies and location selection. For the settings to take effect, they must be applied to a {@link BarcodeCapture|barcode capture} instance using BarcodeCapture.applySettings().
 *
 * By default, all types of barcodes (symbologies) are disabled. To scan barcodes, you need to manually enable all the symbologies you want to scan in your application.
 *
 * The following lines of code show how to enable {@link Symbology.Code128} and apply the settings to {@link BarcodeCapture|barcode capture}.
 *
 * ```jsx
 * const settings = new BarcodeCaptureSettings();
 * settings.enableSymbology(Symbology.Code128, true);
 * barcodeCapture.applySettings(settings);
 * ```
 *
 * @since 6.5.0
 */
interface BarcodeCaptureSettings {
    /**
     * Determines the time interval in which codes with the same symbology/data are filtered out as duplicates. Use this property to change the interval or completely turn off duplicate filtering:
     *
     * - Setting this property to the special value -2 (default from SDK version 7.1.0) will result in a behavior that depends on {@link BarcodeCaptureSettings.scanIntention}. - If {@link ScanIntention.Smart} (default from 7.0), it enables the Smart Duplicate Filter algorithm that intelligently reports a duplicate when the user intends to scan it again, reducing errors and speeding up the workflow. - If {@link ScanIntention.Manual}, it acts as when setting {@link BarcodeCaptureSettings.codeDuplicateFilter} to 1.5s (check the following). This behavior applies also to the cases in which the Android device doesn’t support {@link ScanIntention.Smart}.
     * - Since SDK version 8.5, when {@link BarcodeCaptureSettings.selectionMode} is {@link SelectionMode.On} and this property is left at its smart default (-2), the filter is internally treated as 0 (filtering disabled) so the user can re-select the same barcode via the selection gesture. Setting this property to any value explicitly — including -2 — opts out of this override.
     * - Setting this property to the special value -1 means that the same code will not be reported again until the scanning has been stopped.
     *
     * - Setting this property to a value of 0 means that the same code will be reported every time it is found.
     * - Setting this property to a value larger than zero indicates the time that must pass between the same code to be reported again.
     *
     * The filtering is reset any time the capture mode is disabled ({@link DataCaptureMode.isEnabled} is set to false) as this is when the session is cleaned and restarts from zero.
     *
     * @since 6.5.0
     */
    codeDuplicateFilter?: number;
    symbologies?: SymbologySettings;
    /**
     * Defines the strategy with which to select one out of many visible barcodes. By default, this property is *null* and code selection is disabled.
     *
     * @since 6.5.0
     */
    locationSelection?: LocationSelection | null;
    /**
     * The enabled {@link CompositeType|composite types}. To enable composite codes scanning it is also needed to enable the symbologies that make up the specific type of composite code through {@link BarcodeCaptureSettings.enableSymbologiesForCompositeTypes}.
     *
     * @since 6.6.0
     */
    enabledCompositeTypes?: ('a' | 'b' | 'c')[];
    arucoDictionary?: ArucoDictionary | null;
    batterySavingMode?: BatterySavingMode;
    /**
     * The battery saving mode to use with BarcodeCapture. Defaults to {@link BatterySavingMode.Auto}, to automatically enable the battery saving mode when a higher than usual consumption of the battery is detected, balancing performance and battery lifetime. Sets to {@link BatterySavingMode.Off} to revert to the standard performance.
     *
     * @since 6.26.0
     */
    batterySaving?: BatterySavingMode;
    /**
     * The scan intention algorithm to use with BarcodeCapture. Defaults to {@link ScanIntention.Smart}, enabling the automatic algorithm that intelligently identifies and then scans the barcode that the user intends to capture, reducing errors. Sets to {@link ScanIntention.Manual} to disable.
     *
     * When the deprecated `ScanIntention.SmartSelection` is used, the progress indicator drawn on scan candidates uses the stroke color of the brush set on {@link BarcodeCaptureOverlay}.
     *
     * A frame source that supplies a single image requires {@link ScanIntention.Manual}. {@link ScanIntention.Smart} has to observe a barcode across several frames before it returns it.
     *
     * While {@link BarcodeCaptureSettings.selectionMode} is set to {@link SelectionMode.On}, this property is recorded but does not take effect — the SDK forces smart selection internally so that the aimer is shown and the tap-to-confirm contract of {@link SelectionMode.On} holds. The value supplied here is remembered and applied automatically when {@link BarcodeCaptureSettings.selectionMode} leaves {@link SelectionMode.On}.
     *
     * @since 6.24.0
     */
    scanIntention?: ScanIntention;
    /**
     * Controls whether the aimed-at barcode is scanned without user confirmation. Defaults to {@link SelectionMode.Off} — barcodes are scanned automatically when aimed at. Set to {@link SelectionMode.On} to always require an explicit tap on the preview to confirm the scan.
     *
     * Set to {@link SelectionMode.Auto} to let the SDK decide dynamically.
     *
     * {@link SelectionMode.Auto} is the recommended replacement for the deprecated `ScanIntention.SmartSelection`.
     *
     * When {@link SelectionMode.On} is used, we recommend making it explicit to the user that they need to tap the preview to scan — for example via a toast message or similar UI hint.
     *
     * {@link SelectionMode.Auto} requires {@link BarcodeCaptureSettings.scanIntention} to be set to {@link ScanIntention.Smart}; with {@link ScanIntention.Manual} it behaves like {@link SelectionMode.Off}. Automatic selection only activates on devices that support Smart.
     *
     * @since 8.5.0
     */
    selectionMode?: SelectionMode;
}
/**
 * Settings specific to a particular {@link Symbology|barcode symbology}.
 *
 * Learn more on how to use symbology settings in our [Configure Barcode Symbologies](https://docs.scandit.com/sdks/react-native/barcode-capture/configure-barcode-symbologies) guide.
 *
 * @since 6.5.0
 */
type SymbologySettings = unknown;
/**
 * Interface for location selection. Location selections implement a specific strategy how a data object (like a barcode or text) is selected out of multiple visible ones by for example only selecting objects inside a certain area or objects that intersect a certain area. Implementations are provided by {@link RadiusLocationSelection} and {@link RectangularLocationSelection}.
 *
 * Location selection implementations are restricted to the set of location selections provided by the Scandit Data Capture SDK, it is not possible to implement this interface with a custom implementations of location selection. This interface does not expose any methods or properties, it just serves as a unifying type for different selection strategies.
 *
 * @since 6.5.0
 */
type LocationSelection = NoLocationSelection | RadiusLocationSelection | RectangularLocationSelection;
interface NoLocationSelection {
    type: 'none';
}
/**
 * Location selection for selecting codes inside a circle with the given radius, centered on the {@link DataCaptureView.pointOfInterest|point of interest}. Any object that touches the circle is returned, objects that do not intersect the circle are filtered out.
 *
 * @since 6.5.0
 */
interface RadiusLocationSelection {
    type: 'radius';
    /**
     * The radius of the circle. When using fractional coordinates, the radius is measured relative to the view’s width.
     *
     * @since 6.5.0
     */
    radius: UIValue;
}
interface UIValue {
    value?: number;
    unit?: 'fraction' | 'pixel' | 'dip';
}
/**
 * Location selection for selecting codes inside a rectangle centered on the {@link DataCaptureView.pointOfInterest|point of interest}. Any object that is fully inside the rectangle is returned, objects that are partially or entirely outside of the rectangle are filtered out.
 *
 * @since 6.5.0
 */
interface RectangularLocationSelection {
    type: 'rectangular';
    size: UIAspectSize;
}
interface UIAspectSize {
    width?: UIValue;
    height?: UIValue;
    shorterDimension?: UIValue;
    aspect?: number;
}
/** @since 6.19.0 */
interface ArucoDictionary {
    preset?: '4X4_250' | '5X5_50' | '5X5_100' | '5X5_250' | '5X5_1000' | '5X5_1023' | '6X6_250';
    markerSize?: number;
    markers?: ArucoMarker[];
}
/** @since 6.19.0 */
interface ArucoMarker {
    markerSize?: number;
    markerData?: string;
}
/**
 * A feature that can help you extend the battery life of your phone when you are running low on power. It reduces some of the functions and features that consume more energy.
 *
 * @since 6.21.0
 */
type BatterySavingMode = 'on' | 'off' | 'auto';
/**
 * Allows enabling of the {@link ScanIntention.Smart} algorithm that intelligently identifies and scans the intended barcode without requiring precise aiming, eliminating the need to constantly look at the screen and reducing errors.
 *
 * @since 6.24.0
 */
type ScanIntention = 'manual' | 'smart' | 'smartSelection';
/**
 * Controls whether the aimed-at barcode is scanned without user confirmation. Used by {@link BarcodeCaptureSettings} and {@link SparkScanSettings}.
 *
 * @since 8.5.0
 */
type SelectionMode = 'off' | 'on' | 'auto';
/**
 * Overlay for the {@link BarcodeCapture} capture mode that displays recognized barcodes on top of a {@link DataCaptureView|data capture view}.
 *
 * The appearance of the visualized barcodes can be configured or turned off completely through the {@link BarcodeCaptureOverlay.brush} property.
 *
 * @since 6.5.0
 */
interface BarcodeCaptureOverlay$1 {
    type: 'barcodeCapture';
    /**
     * The brush used for visualizing a recognized barcode in the UI. To turn off drawing of locations, set the brush to use both a transparent fill and stroke color. By default, the brush has a transparent fill color, a “Scandit”-blue stroke color, and a stroke width of 1.
     *
     * @since 6.5.0
     */
    brush?: Brush;
    selectionBrush?: Brush;
    /**
     * Sets the viewfinder. By default, the viewfinder is *null*. Set this to an instance of {@link Viewfinder} if you want to draw a viewfinder.
     *
     * @since 6.5.0
     */
    viewfinder?: Viewfinder;
    /**
     * Whether to show scan area guides on top of the preview. This property is useful during development to visualize the current scan areas on screen. It is not meant to be used for production. By default this property is *false*.
     *
     * @since 6.5.0
     */
    shouldShowScanAreaGuides?: boolean;
    drawLocalizedOnlyBarcodes?: boolean;
    shouldRemoveLocationsAfterScan?: boolean;
    modeId?: number;
}
/**
 * Brushes define how objects are drawn on screen and allow to change their fill and stroke color as well as the stroke width. They are, for example, used to change the styling of barcode locations, or other objects drawn on top of the video preview. Brushes are immutable. Once created none of the members can be modified.
 *
 * @since 6.5.0
 */
interface Brush {
    fill?: Fill;
    stroke?: Stroke;
}
interface Fill {
    color?: Color;
}
/** @since 6.5.0 */
type Color = string;
interface Stroke {
    color?: Color;
    width?: number;
}
/**
 * Interface for viewfinders. Viewfinders are restricted to the set of viewfinders provided by the Scandit Data Capture SDK, it is not possible for customers to implement this interface and provide custom viewfinder implementations. This interface does not expose any methods or properties, it just serves as a tag for different viewfinder styles.
 *
 * Possible viewfinders are:
 *
 * - {@link AimerViewfinder}
 * - {@link RectangularViewfinder}
 * - {@link LaserlineViewfinder}
 *
 * @since 6.5.0
 */
type Viewfinder = NoneViewfinder | RectangularViewfinder | LaserlineViewfinder | SpotlightViewfinder | AimerViewfinder | TargetAimerViewfinder;
interface NoneViewfinder {
    type: 'none';
    pointOfInterest?: UIPoint | null;
}
interface UIPoint {
    x: UIValue;
    y: UIValue;
}
/**
 * Rectangular viewfinder with an embedded Scandit logo. The rectangle is always centered on the {@link DataCaptureView.pointOfInterest|point of interest} of the view.
 *
 * The rectangular viewfinder is displayed when the recognition is active and hidden when it is not.
 *
 * To use this viewfinder, create a new instance and assign it to the overlay, e.g. the barcode capture overlay via the {@link BarcodeCaptureOverlay.viewfinder} property.
 *
 * @since 6.5.0
 */
interface RectangularViewfinder {
    type: 'rectangular';
    /**
     * The style of the viewfinder.
     *
     * @since 6.8.0
     */
    style?: 'rounded' | 'square';
    size?: UIAspectSize;
    /**
     * The color used to draw the logo and viewfinder when the mode is enabled. The color is always used at full opacity, changing the alpha value has no effect.
     *
     * @since 6.5.0
     */
    color?: Color;
    /**
     * The color used to draw the logo and viewfinder when the mode is disabled. By default transparent.
     *
     * @since 6.11.0
     */
    disabledColor?: Color;
    /**
     * The style of the viewfinder’s lines.
     *
     * @since 6.8.0
     */
    lineStyle?: 'light' | 'bold';
    /**
     * The amount the area outside the viewfinder’s rectangle is dimmed by. Accepts values between 0 (no dimming) and 1 (fully blacked out).
     *
     * @since 6.8.0
     */
    dimming?: number;
    /**
     * The amount the area outside the viewfinder’s rectangle is dimmed by when the mode is disabled. Accepts values between 0 (no dimming) and 1 (fully blacked out).
     *
     * @since 6.11.0
     */
    disabledDimming?: number;
    /**
     * The animation used for the viewfinder, if any.
     *
     * @since 6.8.0
     */
    animation?: RectangularViewfinderAnimation;
    pointOfInterest?: UIPoint | null;
}
/**
 * Standard rectangular viewfinder animation made up of an appear animation as well as a looping animation following the appearance.
 *
 * @since 6.8.0
 */
interface RectangularViewfinderAnimation {
    looping?: boolean;
}
/**
 * A horizontal laser line with a Scandit logo underneath. Toggles color depending on the {@link DataCaptureMode.isEnabled|capture mode enabled} property. The laserline is centered on the data capture view’s {@link DataCaptureView.pointOfInterest|point of interest}.
 *
 * To use this viewfinder, create a new instance and assign it to the overlay, e.g. the barcode capture overlay via the {@link BarcodeCaptureOverlay.viewfinder} property.
 *
 * @since 7.4.0
 */
interface LaserlineViewfinder {
    type: 'laserline';
    style?: 'legacy' | 'animated';
    /**
     * The width of the laser line. The laser line is centered on the {@link DataCaptureView.pointOfInterest|point of interest} of the view. When specifying the width with relative units, the width is measured relative to the view’s width minus the horizontal scan area margins.
     *
     * @since 7.4.0
     */
    width?: UIValue;
    /**
     * The color to be used when recognition is enabled/active.
     *
     * @since 7.4.0
     */
    enabledColor?: Color;
    /**
     * The color to be used when recognition is disabled/inactive.
     *
     * @since 7.4.0
     */
    disabledColor?: Color;
    pointOfInterest?: UIPoint | null;
}
interface SpotlightViewfinder {
    type: 'spotlight';
    size?: UIAspectSize;
    enabledBorderColor?: Color;
    disabledBorderColor?: Color;
    pointOfInterest?: UIPoint | null;
}
/**
 * To use this viewfinder, create a new instance and assign it to the overlay, e.g. the barcode capture overlay via the {@link BarcodeCaptureOverlay.viewfinder} property.
 *
 * @since 6.7.0
 */
interface AimerViewfinder {
    type: 'aimer';
    /**
     * The color of the outer frame.
     *
     * @since 6.7.0
     */
    frameColor?: Color;
    /**
     * The color of the central dot. The alpha value is ignored and remains at 70%.
     *
     * @since 6.7.0
     */
    dotColor?: Color;
    pointOfInterest?: UIPoint | null;
}
interface TargetAimerViewfinder {
    type: 'targetAimer';
    lineColor?: Color;
    lineStrokeWidth?: number;
    aimerColor?: Color;
    radius?: UIValue;
}
/**
 * Data capture mode that implements barcode selection.
 *
 * Learn more on how to use Barcode Selection in our [Get Started](https://docs.scandit.com/sdks/react-native/barcode-selection/get-started) guide.
 *
 * @since 6.10.0
 */
interface BarcodeSelection$1 {
    type: 'barcodeSelection';
    /**
     * Instance of {@link BarcodeSelectionFeedback} that is used by barcode selection to notify users about the selection of a barcode.
     *
     * The default instance of the Feedback will have the sound enabled but no vibration. A default click tone will be used for the sound.
     *
     * To change the feedback emitted, the {@link BarcodeSelectionFeedback} can be modified as shown below, or a new one can be assigned.
     *
     * ```jsx
     * const barcodeSelection = ...;
     * const feedback = BarcodeSelectionFeedback.defaultFeedback;
     * feedback.success = new Feedback(Vibration.defaultVibration, null);
     * barcodeSelection.feedback = feedback;
     * ```
     *
     * @since 6.10.0
     */
    feedback?: BarcodeSelectionFeedback$1;
    settings?: BarcodeSelectionSettings$1;
    enabled?: boolean;
    /**
     * The point of interest overwriting the {@link DataCaptureView.pointOfInterest|point of interest of the data capture view}. By default, this overwriting point of interest is not set and the one from the data capture view is used.
     *
     * @since 6.10.0
     */
    pointOfInterest?: UIPoint | null;
    modeId?: number;
    parentId?: number | null;
    hasListeners?: boolean;
}
/**
 * Determines what feedback (vibration, sound) should be emitted when reading barcodes. The feedback is specified for each {@link BarcodeSelection} instance separately and can be changed through the {@link BarcodeSelection.feedback} property by either modifying an existing instance of this class, or by assigning a new one.As of now, this class only allows to configure the feedback that gets emitted when a barcode is selected, through the {@link BarcodeSelectionFeedback.selection} property.See documentation on the {@link BarcodeSelection.feedback} property for usage samples.
 *
 * @since 6.10.0
 */
interface BarcodeSelectionFeedback$1 {
    /**
     * A {@link Feedback} for a selection event.
     *
     * @since 6.10.0
     */
    selection?: Feedback;
}
/**
 * Holds all the barcode selection related settings, such as enabled symbologies and tap behavior. For the settings to take effect, they must be applied to a {@link BarcodeSelection|barcode selection} instance using BarcodeSelection.applySettings().
 *
 * @since 6.10.0
 */
interface BarcodeSelectionSettings$1 {
    symbologies?: SymbologySettings;
    /**
     * This setting is used to define the method that {@link BarcodeSelection} will use to select barcodes. Defaults to {@link BarcodeSelectionTapSelection}.
     *
     * @since 6.10.0
     */
    selectionType?: SelectionType;
    singleBarcodeAutoDetectionEnabled?: boolean;
    /**
     * Determines the time interval in which codes with the same symbology/data are considered not automatically selectable again (automatic selection can happen through {@link BarcodeSelectionSettings.singleBarcodeAutoDetection}). By default, when the same code (data, symbology) stays in view after just having been selected (manually or automatically) it will not be automatically selected again for 500 milliseconds. This property has no influence on manual selection by tapping. Use this property to change the interval or completely turn off duplicate filtering:
     *
     * - Setting this property to value smaller than zero, means that the same code will not be automatically selectable again until the selection has been stopped.
     * - Setting this property to a value of zero means that the same code will be automatically selectable again immediately. In use cases that includes automatic selection this is likely never wanted.
     * - Setting this property to a value larger than zero indicates the time that must pass between the same code to be automatically selected again.
     *
     * @since 6.10.0
     */
    codeDuplicateFilter?: number;
    /**
     * If false, selection through tap is disabled. Defaults to *true*. This property only has its effect when used with manual aimer selection.
     *
     * @since 8.6.0
     */
    tapGestureForSelectionEnabled?: boolean;
    swipeGesturesEnabled?: boolean;
}
type SelectionType = TapSelection | AimerSelection;
interface TapSelection {
    type: 'tapSelection';
    tapBehavior?: 'toggleSelection' | 'repeatSelection';
    freezeBehavior?: 'manual' | 'manualAndAutomatic';
    shouldFreezeOnDoubleTap?: boolean;
}
interface AimerSelection {
    type: 'aimerSelection';
    selectionStrategy?: SelectionStrategy;
    aimerBehavior?: 'toggleSelection' | 'repeatSelection';
}
type SelectionStrategy = ManualSelectionStrategy | AutoSelectionStrategy;
interface ManualSelectionStrategy {
    type: 'manualSelectionStrategy';
}
interface AutoSelectionStrategy {
    type: 'autoSelectionStrategy';
}
/**
 * An overlay for {@link DataCaptureView} that shows a simple augmentation over each selected barcode.
 *
 * To display the augmentations, this overlay must be attached to a {@link DataCaptureView}. This can be done by passing this overlay to {@link DataCaptureView.addOverlay}.
 *
 * A user of this class may configure the appearance of the augmentations by configuring the brush properties.
 *
 * @since 6.10.0
 */
interface BarcodeSelectionBasicOverlay$1 {
    type: 'barcodeSelectionBasic';
    /**
     * The brush applied to recognized tracked barcodes. Setting this brush to {@link Brush.transparent} hides all tracked barcodes.
     *
     * @since 6.10.0
     */
    trackedBrush?: Brush;
    /**
     * The brush applied to the barcode that is currently being aimed at.
     *
     * @since 6.10.0
     */
    aimedBrush?: Brush;
    /**
     * The brush applied to the barcodes for the short moment when they are being selected.
     *
     * @since 6.10.0
     */
    selectingBrush?: Brush;
    /**
     * The brush applied to selected barcodes. Setting this brush to {@link Brush.transparent} hides all selected barcodes.
     *
     * @since 6.10.0
     */
    selectedBrush?: Brush;
    /**
     * When set to *true*, this overlay will visualize some hints explaining how to use barcode selection.
     *
     * By default this property is *true*.
     *
     * @since 6.10.0
     */
    shouldShowHints?: boolean;
    /**
     * When set to *true*, this overlay will visualize the active scan area used for BarcodeSelection. This is useful to check {@link DataCaptureView.scanAreaMargins|margins} defined on the {@link DataCaptureView} are set correctly. This property is meant for debugging during development and is not intended for use in production.
     *
     * By default this property is *false*.
     *
     * @since 6.10.0
     */
    shouldShowScanAreaGuides?: boolean;
    /**
     * The viewfinder of the overlay. The viewfinder is only visible when the selection type is {@link BarcodeSelectionAimerSelection}.
     *
     * @since 6.10.0
     */
    viewfinder?: Viewfinder;
    /**
     * The overlay style. Defaults to Frame.
     *
     * @since 6.10.0
     */
    style?: 'dot' | 'frame';
    /**
     * The overlay’s background color when in frozen state. This color will be on top of the video preview but below the highlights. Semitransparent black by default.
     *
     * @since 8.7.0
     */
    frozenBackgroundColor?: Color;
    textForSelectOrDoubleTapToFreezeHint?: string;
    textForTapToSelectHint?: string;
    textForDoubleTapToUnfreezeHint?: string;
    textForTapAnywhereToSelectHint?: string;
    textForAimToSelectAutoHint?: string;
    modeId?: number;
    hasAimedBrushProvider?: boolean;
    hasTrackedBrushProvider?: boolean;
}
interface BarcodeTracking {
    type: 'barcodeTracking';
    settings?: BarcodeTrackingSettings;
    enabled?: boolean;
    modeId?: number;
    hasListeners?: boolean;
    parentId?: number | null;
}
interface BarcodeTrackingSettings {
    /** @deprecated since 6.26 */
    scenario?: string;
    symbologies?: SymbologySettings;
    expectOnlyUniqueBarcodes?: boolean;
    arucoDictionary?: ArucoDictionary | null;
}
interface BarcodeTrackingBasicOverlay {
    type: 'barcodeTrackingBasic';
    /** @deprecated since 7.0 */
    defaultBrush?: Brush;
    brush?: Brush;
    shouldShowScanAreaGuides?: boolean;
    drawLocalizedOnlyBarcodes?: boolean;
    style?: 'frame' | 'dot';
    dotRadius?: UIValue;
    modeId?: number;
    hasListener?: boolean;
}
/**
 * An enumeration of possible anchoring points in a geometric object such as {@link Quadrilateral|quadrilaterals}. Values of this enumeration are typically used to determine where elements are placed on the screen. For example, it is used to place the logo on screen.
 *
 * @since 6.5.0
 */
type Anchor = 'topLeft' | 'topCenter' | 'topRight' | 'centerLeft' | 'center' | 'centerRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
interface BarcodeTrackingAdvancedOverlay {
    type: 'barcodeTrackingAdvanced';
    shouldShowScanAreaGuides?: boolean;
    modeId?: number;
    hasListener?: boolean;
}
/**
 * Enumeration of possible logo styles shown by the {@link DataCaptureView|view} if no viewfinder that includes the logo is shown.
 *
 * @since 6.8.0
 */
type LogoStyle = 'minimal' | 'extended';
/**
 * {@link SparkScan} comes with a ready-to-use UI and scanning modes that are purpose-built to tackle high-volume scanning at close range. The SparkScanView integrates with any app without requiring app redesign or customization. It includes:
 *
 * camera preview screenlarge-sized scan buttonquick access toolbar to adjust scanning settings
 *
 * @since 6.16.0
 */
interface SparkScanView$1 {
    /** @deprecated since 6.26 */
    shouldShowScanAreaGuides?: boolean;
    viewSettings?: SparkScanViewSettings$1;
    /** @deprecated since 7.0 */
    stopCapturingText?: string;
    /** @deprecated since 7.0 */
    startCapturingText?: string;
    /** @deprecated since 7.0 */
    resumeCapturingText?: string;
    /** @deprecated since 7.0 */
    scanningCapturingText?: string;
    /**
     * Sets the background color of the trigger button when button is collapsed.
     *
     * @since 7.0.0
     */
    triggerButtonCollapsedColor?: Color | null;
    /**
     * Sets the background color of the trigger button when button is expanded.
     *
     * @since 7.0.0
     */
    triggerButtonExpandedColor?: Color | null;
    /**
     * Sets the color of the pulsing animation around the trigger button, which is shown when the scanner is active.
     *
     * @since 7.0.0
     */
    triggerButtonAnimationColor?: Color | null;
    /**
     * Sets the trigger button tint color.
     *
     * @since 7.0.0
     */
    triggerButtonTintColor?: Color | null;
    /** @deprecated since 7.0 */
    captureButtonBackgroundColor?: Color;
    /** @deprecated since 7.0 */
    captureButtonActiveBackgroundColor?: Color;
    /** @deprecated since 7.0 */
    captureButtonTintColor?: Color;
    /**
     * Sets the toolbar background color.
     *
     * Default is *null*.
     *
     * @since 6.16.0
     */
    toolbarBackgroundColor?: Color | null;
    /**
     * Sets the toolbar icon active color.
     *
     * Default is *null*.
     *
     * @since 6.16.0
     */
    toolbarIconActiveTintColor?: Color | null;
    /**
     * Sets the toolbar icon inactive color.
     *
     * Default is *null*.
     *
     * @since 6.16.0
     */
    toolbarIconInactiveTintColor?: Color | null;
    /** @deprecated since 6.26 */
    soundModeButtonVisible?: boolean;
    /** @deprecated since 6.26 */
    hapticModeButtonVisible?: boolean;
    /**
     * Indicates whether the barcode count button should be shown to the user.
     *
     * Default is *false*.
     *
     * @since 6.16.0
     */
    barcodeCountButtonVisible?: boolean;
    /**
     * Indicates whether the barcode find button should be shown to the user.
     *
     * Default is *false*.
     *
     * @since 6.26.0
     */
    barcodeFindButtonVisible?: boolean;
    /** @deprecated since 6.26 */
    fastFindButtonVisible?: boolean;
    /**
     * Indicates whether the target mode button should be shown to the user.
     *
     * Default is *false*.
     *
     * @since 6.16.0
     */
    targetModeButtonVisible?: boolean;
    /** @deprecated since 7.0 */
    torchButtonVisible?: boolean;
    /**
     * Indicates whether the scanning behavior button should be shown to the user.
     *
     * Default is *false*.
     *
     * @since 6.16.0
     */
    scanningBehaviorButtonVisible?: boolean;
    /** @deprecated since 7.0 */
    handModeButtonVisible?: boolean;
    /** @deprecated since 6.23 */
    targetModeHintText?: string;
    /** @deprecated since 6.23 */
    shouldShowTargetModeHint?: boolean;
    /**
     * Indicates whether the zoom switch control should be shown to the user.
     *
     * Default is *true*.
     *
     * @since 8.4.0
     */
    zoomSwitchControlVisible?: boolean;
    /**
     * Indicates whether the mini preview size control should be shown to the user.
     *
     * Default is *true*.
     *
     * @since 6.23.0
     */
    previewSizeControlVisible?: boolean;
    /**
     * Indicates whether the camera switch button should be shown to the user.
     *
     * Default is *false*.
     *
     * This API is still in beta and may change in future versions of Scandit Data Capture SDK.
     *
     * @since 6.24.0
     */
    cameraSwitchButtonVisible?: boolean;
    /**
     * Indicates whether the torch control should be shown to the user.
     *
     * Default is *true*.
     *
     * If {@link SparkScanViewSettings.defaultTorchState} is set to {@link TorchState.Auto}, torch control is hidden.
     *
     * @since 7.0.0
     */
    torchControlVisible?: boolean;
    /**
     * Indicates whether the mini preview close control should be shown to the user.
     *
     * Default is *true*.
     *
     * @since 7.0.0
     */
    previewCloseControlVisible?: boolean;
    /**
     * The image displayed in the trigger button.
     *
     * @since 7.0.0
     */
    triggerButtonImage?: string | null;
    /**
     * Indicates whether the trigger button should be shown to the user.
     *
     * Default is *true*.
     *
     * @since 7.0.0
     */
    triggerButtonVisible?: boolean;
    /**
     * Indicates whether the label capture button should be shown to the user.
     *
     * Default is *false*.
     *
     * @since 7.4.0
     */
    labelCaptureButtonVisible?: boolean;
    /**
     * Indicates whether the selection mode button should be shown to the user. The button toggles {@link SparkScanSettings.selectionMode} between {@link SelectionMode.On} and {@link SelectionMode.Off}.
     *
     * Renamed replacement for the deprecated {@link SparkScanView.targetModeButtonVisible}. Both properties share the same underlying state; when a deserialised JSON snapshot contains both keys, `selectionModeButtonVisible` wins.
     *
     * Default is *false*.
     *
     * @since 8.5.0
     */
    selectionModeButtonVisible?: boolean;
    brush?: Brush;
    hasFeedbackDelegate?: boolean;
    hasUiListener?: boolean;
    viewId?: number;
    shouldHandleAndroidLifecycleAutomatically?: boolean;
}
/**
 * Changing the values of SparkScanViewSettings instance after the creation of {@link SparkScanView} does not result in applying the changed settings to the corresponding view.
 *
 * @since 6.16.0
 */
interface SparkScanViewSettings$1 {
    /**
     * The timeout to automatically switch to idle state. When set to negative value timeout is infinite.
     *
     * Default is 5 seconds.
     *
     * @since 6.16.0
     */
    triggerButtonCollapseTimeout?: number;
    /** @deprecated since 6.23 */
    continuousCaptureTimeout?: number;
    /**
     * The timeout to automatically stop capturing.
     *
     * Default is 10 seconds.
     *
     * @since 6.23.0
     */
    inactiveStateTimeout?: number;
    /**
     * Sets the default torch state of the camera.
     *
     * Default is {@link TorchState.Off}.
     *
     * @since 6.16.0
     */
    defaultTorchState?: 'off' | 'on' | 'auto';
    /**
     * Sets the default scanning mode of the view.
     *
     * Default is {@link SparkScanScanningModeDefault}.
     *
     * @since 6.16.0
     * @deprecated since 8.5
     */
    defaultScanningMode?: SparkScanScanningMode;
    /**
     * Whether the SparkScan view scans a single barcode per trigger or keeps scanning continuously while the trigger is held. Replaces the embedded `scanningBehavior` field on the deprecated {@link SparkScanViewSettings.defaultScanningMode}.
     *
     * Default is {@link SparkScanScanningBehavior.Single}.
     *
     * @since 8.7.0
     */
    scanningBehavior?: 'single' | 'continuous';
    /**
     * Whether the SparkScan preview returns to its idle state after a scan or stays expanded.
     *
     * Replaces the embedded `previewBehavior` field on the deprecated {@link SparkScanViewSettings.defaultScanningMode}.
     *
     * Default is {@link SparkScanPreviewBehavior.Default}.
     *
     * @since 8.7.0
     */
    previewBehavior?: 'default' | 'persistent';
    /** @deprecated since 7.0 */
    defaultHandMode?: 'left' | 'right';
    /**
     * Indicates whether to keep scanning as long as the scan button is pressed.
     *
     * Default is *true*.
     *
     * Hold-to-scan is automatically disabled by the SDK when {@link SparkScanSettings.selectionMode} is set to {@link SelectionMode.On}, since that mode requires explicit user confirmation for every scan. The value of this property is ignored while `SelectionMode.On` is active.
     *
     * @since 6.16.0
     */
    holdToScanEnabled?: boolean;
    /**
     * Indicates whether the feedback should have sound enabled.
     *
     * Default is *true*.
     *
     * @since 6.16.0
     */
    soundEnabled?: boolean;
    /**
     * Indicates whether the feedback should have haptics enabled.
     *
     * Default is *true*.
     *
     * @since 6.16.0
     */
    hapticEnabled?: boolean;
    /** @since 6.16.0 */
    hardwareTriggerEnabled?: boolean;
    /**
     * The button that acts as a scan trigger. Leave *null* to use the default button (The default button will be the dedicated HW button on XCover devices, and “volume down” key for other devices). This is only taken into consideration if {@link SparkScanViewSettings.hardwareTriggerEnabled} is true.
     *
     * @since 6.16.0
     */
    hardwareTriggerKeyCode?: number | null;
    /**
     * Indicates whether the visual feedback on scan should be displayed.
     *
     * Default is *true*.
     *
     * @since 6.16.0
     */
    visualFeedbackEnabled?: boolean;
    /**
     * Sets the toast settings. See {@link SparkScanToastSettings} for details.
     *
     * @since 6.19.0
     */
    toastSettings?: SparkScanToastSettings$1;
    /** @deprecated since 6.23 */
    targetZoomFactorIn?: number;
    /** @deprecated since 6.23 */
    targetZoomFactorOut?: number;
    /**
     * The zoom factor to move to when the zoom switch control was tapped.
     *
     * Default is 2.
     *
     * @since 6.23.0
     */
    zoomFactorIn?: number;
    /**
     * The zoom factor to use for the camera.
     *
     * Default is 1.
     *
     * @since 6.23.0
     */
    zoomFactorOut?: number;
    /**
     * Sets the default camera position.
     *
     * Default is {@link CameraPosition.WorldFacing}.
     *
     * This API is still in beta and may change in future versions of Scandit Data Capture SDK.
     *
     * @since 6.24.0
     */
    defaultCameraPosition?: string;
    /**
     * Sets the default size of the mini preview.
     *
     * Default is {@link SparkScanMiniPreviewSize.Regular}.
     *
     * @since 7.0.0
     */
    defaultMiniPreviewSize?: 'regular' | 'expanded';
    /**
     * Controls the mirroring of the camera feed to support the use of a periscope device.
     *
     * Default is *false*.
     *
     * This property only has an effect on iOS. It does not affect the camera feed on Android.
     *
     * @since 8.3.0
     */
    periscopeModeEnabled?: boolean;
    /**
     * Sets the brush to be used for potential candidates when automatic selection is active — that is, when the {@link SparkScanSettings.selectionMode} property is set to {@link SelectionMode.Auto}, or when the deprecated `ScanIntention.SmartSelection` is used. If null, the default brush will be used.
     *
     * The brush’s stroke colour is also used for the aimer’s dwell-progress indicator, falling back to the fill colour when the stroke is transparent.
     *
     * @since 8.5.0
     */
    selectionModeCandidateBrush?: Brush | null;
    /**
     * Deprecated alias of {@link SparkScanViewSettings.selectionModeCandidateBrush}.
     *
     * @since 8.1.0
     * @deprecated since 8.5
     */
    smartSelectionCandidateBrush?: Brush | null;
    ignoreDragLimits?: boolean;
    shouldShowOnTopAlways?: boolean;
}
/**
 * The base class for setting a default scanning mode to {@link SparkScanViewSettings}. Can be either {@link SparkScanScanningModeTarget} or {@link SparkScanScanningModeDefault}.
 *
 * @since 6.16.0
 */
interface SparkScanScanningMode {
    type: 'default' | 'target';
    settings?: SparkScanScanningModeSettings;
}
interface SparkScanScanningModeSettings {
    scanningBehavior?: 'single' | 'continuous';
    /** @deprecated since 6.23 */
    scanningPrecision?: 'default' | 'accurate';
    previewBehavior?: 'default' | 'persistent';
}
/** @since 6.19.0 */
interface SparkScanToastSettings$1 {
    /**
     * Should toasts be shown or not.
     *
     * Default is *true*.
     *
     * @since 6.19.0
     */
    toastEnabled?: boolean;
    /**
     * Background color of the toast. If this property is *null*, a default color will be used.
     *
     * Default is *null*.
     *
     * @since 6.19.0
     */
    toastBackgroundColor?: Color | null;
    /**
     * Text color of the toast. If this property is *null*, a default color will be used.
     *
     * Default is *null*.
     *
     * @since 6.19.0
     */
    toastTextColor?: Color | null;
    /**
     * Shown when {@link SparkScanSettings.selectionMode} is set to {@link SelectionMode.On}. Replaces the deprecated `TargetModeEnabledMessage`.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 8.5.0
     */
    selectionModeOnMessage?: string;
    /**
     * Shown when {@link SparkScanSettings.selectionMode} is set to {@link SelectionMode.Off}. Replaces the deprecated `TargetModeDisabledMessage`.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 8.5.0
     */
    selectionModeOffMessage?: string;
    /**
     * Text of the toast when target mode enabled.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 6.19.0
     * @deprecated since 8.5
     */
    targetModeEnabledMessage?: string;
    /**
     * Text of the toast when target mode disabled.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 6.19.0
     * @deprecated since 8.5
     */
    targetModeDisabledMessage?: string;
    /**
     * Text of the toast when {@link SparkScanScanningBehavior.Continuous} capturing mode enabled.
     *
     * Default is *null*. If this property is *null*, a default message will be shown.
     *
     * If this property is an empty string, the toast will not be shown.
     *
     * @since 6.19.0
     */
    continuousModeEnabledMessage?: string;
    /**
     * Text of the toast when {@link SparkScanScanningBehavior.Continuous} capturing mode disabled.
     *
     * Default is *null*. If this property is *null*, a default message will be shown.
     *
     * If this property is an empty string, the toast will not be shown.
     *
     * @since 6.19.0
     */
    continuousModeDisabledMessage?: string;
    /**
     * Text of the toast when {@link SparkScanPreviewBehavior.Persistent} capturing mode is enabled and scanning is paused.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 6.23.0
     */
    scanPausedMessage?: string;
    /**
     * Text of the toast when zooming in.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 6.23.0
     */
    zoomedInMessage?: string;
    /**
     * Text of the toast when zooming out.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 6.23.0
     */
    zoomedOutMessage?: string;
    /**
     * Text of the toast when torch is enabled.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 6.23.0
     */
    torchEnabledMessage?: string;
    /**
     * Text of the toast when torch is disabled.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 6.23.0
     */
    torchDisabledMessage?: string;
    /**
     * Text of the toast when user facing camera is enabled.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 6.24.0
     */
    userFacingCameraEnabledMessage?: string;
    /**
     * Text of the toast when world facing camera is enabled.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 6.24.0
     */
    worldFacingCameraEnabledMessage?: string;
}
/**
 * Holds camera-specific settings such as preferred resolution, maximum frame rate etc. The defaults are chosen such that they work for a wide variety of use cases. You may apply custom settings to further optimize scan performance for your particular use case. There is typically no need to customize the camera settings beyond changing the {@link CameraSettings.preferredResolution|preferred resolution}.
 *
 * For best performance use the camera settings returned by the capture mode you are using, e.g. {@link BarcodeCapture.createRecommendedCameraSettings}, or {@link BarcodeBatch.createRecommendedCameraSettings} etc.
 *
 * @since 6.5.0
 */
interface CameraSettings {
    recommendedForMode?: string;
    /**
     * The preferred resolution to use for the camera. The camera will use the resolution that is closests to the resolution preference. For example, if only lower resolutions than the preferred resolution are available, the highest available resolution will be used.
     *
     * The resolution chosen by the camera only takes the {@link CameraSettings.preferredResolution} into account, it does not consider the resolution limit of your license key. When the device selects a resolution that is larger than what you have licensed, the data capture context will report a license status error.
     *
     * The default value is {@link VideoResolution.FullHD}.
     *
     * @since 6.5.0
     */
    preferredResolution?: 'auto' | 'hd' | 'fullHd' | 'uhd4k' | 'maxResolution' | 'quadHd';
    preferredAspectRatio?: 'auto' | 'sixteenToNine' | 'fourToThree';
    minFrameRate?: number;
    maxFrameRate?: number;
    preferredFrameRateRange?: 'highestWidest' | 'highestNarrowest';
    /**
     * The zoom factor to use for the camera. This value is a multiplier, a value of 1.0 means no zoom, while a value of 2.0 doubles the size of the image, but halves the field of view.
     *
     * Values less than 1.0 are treated as 1.0. Values greater than the maximum available zoom factor are clamped to the maximum accepted value.
     *
     * The default zoom factor is 1.0.
     *
     * @since 6.5.0
     */
    zoomFactor?: number;
    /**
     * The zoom factor to move to when the zoom in gesture was performed. This value is a multiplier, a value of 1.0 means no zoom, while a value of 2.0 doubles the size of the image, but halves the field of view. See also {@link CameraSettings.zoomFactor}.
     *
     * The default zoom factor for the zoom in gesture is 2.0.
     *
     * @since 6.7.0
     * @deprecated since 8.4
     */
    zoomGestureZoomFactor?: number;
    /**
     * The set of zoom levels available for zoom gestures and controls. Each value corresponds to a zoom factor that will be applied to the camera when zooming in our out. The camera automatically filters this list based on the camera hardware capabilities, so zoom levels unsupported by the device are omitted.
     *
     * The default value is `[1, 2]`.
     *
     * @since 8.4.0
     */
    zoomLevels?: number[];
    /**
     * The macro mode to use, if supported by the device.
     *
     * The default value is {@link MacroMode.Auto}.
     *
     * On Android this property has no effect.
     *
     * @since 8.3.0
     */
    macroMode?: 'auto' | 'off' | 'on';
    manualUntilCaptureTimeout?: number;
    /**
     * Enables adaptive exposure optimization for low-light conditions. When enabled, the camera can trade frame rate for brighter images by allowing longer exposure times. In low-light environments, the frame rate may drop from approximately 30fps to 10fps, while the maximum exposure duration increases from ~33ms to up to 100ms. In well-lit conditions, this setting has no impact on frame rate or exposure.
     *
     * This feature is particularly useful for scanning in challenging lighting conditions where image brightness is more critical than maintaining the highest frame rate.
     *
     * The default value is *false*.
     *
     * On Android this property has no effect.
     *
     * @since 8.3.0
     */
    adaptiveExposure?: boolean;
    /**
     * The torch intensity level. This value must be a number between 0.0 and 1.0. If a number outside the range is provided, either 0.0 or 1.0 will be used instead. Setting the torch level to 0.0 is equivalent to having the torch off.
     *
     * On Android this property has no effect.
     *
     * @since 8.3.0
     */
    torchLevel?: number;
    focus?: FocusSettings;
    api?: number;
    exposureTargetBias?: number;
    colorCorrection?: boolean;
    toneMappingCurve?: 'none' | 'gamma22' | 'linear' | 'srgb';
    noiseReductionMode?: 'off' | 'fast' | 'highQuality';
    edgeEnhancementMode?: 'off' | 'fast' | 'highQuality';
    regionStrategy?: 'default' | 'point' | 'spot' | 'area' | 'matchWithScanArea';
    arbitraryVideoResolution?: CameraSettingsArbitraryVideoResolution;
}
interface FocusSettings {
    range?: 'full' | 'far' | 'near';
    manualLensPosition?: number;
    shouldPreferSmoothAutoFocus?: boolean;
    focusStrategy?: 'auto' | 'onlyOnRequest' | 'forceContinuous' | 'forceRetrigger' | 'retriggerUntilScan' | 'continuousUntilNoScan';
    focusGestureStrategy?: 'none' | 'manual' | 'manualUntilCapture' | 'autoOnLocation';
}
interface CameraSettingsArbitraryVideoResolution {
    width: number;
    height: number;
}
/**
 * {@link BarcodeFind} comes with a ready-to-use search UI that uses augmented reality overlays to highlight items that match predefined criteria. The BarcodeFindView integrates with any app in just a few lines of code.
 *
 * @since 6.22.0
 */
interface BarcodeFindView {
    viewSettings?: BarcodeFindViewSettings$1;
    cameraSettings?: CameraSettings;
    /**
     * Indicates whether guidance should be shown to the user.
     *
     * Default is *true*.
     *
     * @since 6.22.0
     */
    shouldShowUserGuidanceView?: boolean;
    /**
     * Indicates whether hints should be shown to the user.
     *
     * Default is *true*.
     *
     * @since 6.22.0
     */
    shouldShowHints?: boolean;
    /**
     * Indicates whether the item carousel should be shown to the user.
     *
     * Default is *true*.
     *
     * @since 6.22.0
     */
    shouldShowCarousel?: boolean;
    /**
     * Indicates whether the pause button should be shown to the user.
     *
     * Default is *true*.
     *
     * @since 6.22.0
     */
    shouldShowPauseButton?: boolean;
    /**
     * Indicates whether the finish button should be shown to the user.
     *
     * Default is *true*.
     *
     * @since 6.22.0
     */
    shouldShowFinishButton?: boolean;
    /**
     * Indicates whether the progress bar should be shown to the user.
     *
     * Default is *false*.
     *
     * @since 6.22.0
     */
    shouldShowProgressBar?: boolean;
    /**
     * Indicates whether the torch control button should be shown to the user.
     *
     * Default is *false*.
     *
     * @since 6.22.0
     */
    shouldShowTorchControl?: boolean;
    /**
     * Updates the position of the torch control button.
     *
     * Only {@link Anchor.TopLeft}, {@link Anchor.TopCenter}, {@link Anchor.TopRight} and {@link Anchor.BottomLeft} are supported.
     *
     * Any other value will default to {@link Anchor.TopLeft}.
     *
     * @since 6.22.0
     */
    torchControlPosition?: Anchor;
    /**
     * Indicates whether the zoom control should be shown to the user, allowing them to switch between the normal and ultra-wide lenses.
     *
     * Default is *false*.
     *
     * The zoom control requires a device with an ultra-wide camera. On devices without an ultra-wide camera, setting this property to *true* has no effect.
     *
     * @since 7.1.0
     */
    shouldShowZoomControl?: boolean;
    /**
     * Overrides the default text displayed in the button for collapsing the item carousel.
     *
     * Default is *null*.
     *
     * @since 6.22.0
     */
    textForCollapseCardsButton?: string | null;
    /**
     * Overrides the default text displayed in the green confirmation view shown when all items have been found.
     *
     * Default is *null*.
     *
     * @since 6.22.0
     */
    textForAllItemsFoundSuccessfullyHint?: string | null;
    /**
     * Overrides the default text for the “Point at barcodes to search” hint.
     *
     * Default is *null*.
     *
     * @since 6.22.0
     */
    textForPointAtBarcodesToSearchHint?: string | null;
    /**
     * Overrides the default text for the “Move closer” hint.
     *
     * Default is *null*.
     *
     * @since 6.22.0
     */
    textForMoveCloserToBarcodesHint?: string | null;
    /**
     * Overrides the default text for “Tap shutter to pause” hint.
     *
     * Default is *null*.
     *
     * @since 6.22.0
     */
    textForTapShutterToPauseScreenHint?: string | null;
    /**
     * Overrides the default text for “Tap shutter to resume” hint.
     *
     * Default is *null*.
     *
     * @since 6.22.0
     */
    textForTapShutterToResumeSearchHint?: string | null;
    /**
     * Overrides the default text displayed in the confirmation view shown when the item list has been updated.
     *
     * Default is *null*.
     *
     * @since 6.24.0
     */
    textForItemListUpdatedHint?: string | null;
    /**
     * Overrides the default text displayed in the confirmation view shown when the item list has been updated and search is paused.
     *
     * Default is *null*.
     *
     * @since 6.24.0
     */
    textForItemListUpdatedWhenPausedHint?: string | null;
    /**
     * The style of the logo, either the extended “Scanning By Scandit” or the minimal “Scandit”.
     *
     * Default is {@link LogoStyle.Extended}.
     *
     * @since 8.6.0
     */
    logoStyle?: LogoStyle;
    /**
     * The anchor point used to position the Scandit logo.
     *
     * Default is {@link Anchor.BottomRight}.
     *
     * @since 8.6.0
     */
    logoAnchor?: Anchor;
    /**
     * Specifies the desired camera state when BarcodeFind stops searching. This property allows optimization of camera transitions when switching between different capture modes.
     *
     * On Flutter, Capacitor, Cordova and React Native this property is only effective on iOS; it is ignored on Android.
     *
     * For example, setting this to {@link FrameSourceState.Standby} instead of the default {@link FrameSourceState.Off} can improve camera startup times when transitioning to another mode (such as SparkScan) that uses standby state, as it avoids the On→Off→Standby transition sequence.
     *
     * Default is {@link FrameSourceState.Off}.
     *
     * @since 8.6.0
     */
    cameraStateOnStop?: 'on' | 'off' | 'starting' | 'stopping' | 'standby' | 'bootingUp' | 'wakingUp' | 'goingToSleep' | 'shuttingDown';
    viewId?: number;
    /**
     * Starts the searching process. You can call this method if you want to trigger the searching process without any user interaction.
     *
     * @since 6.22.0
     */
    startSearching?: boolean;
    hasListener?: boolean;
}
/** @since 6.22.0 */
interface BarcodeFindViewSettings$1 {
    /**
     * The color for the overlay of an item that is in the list of items to find.
     *
     * Default is #2EC1CE.
     *
     * @since 6.22.0
     */
    inListItemColor?: Color;
    /**
     * The color for the overlay of an item that is not in the list of items to find.
     *
     * Default is #FFFFFF.
     *
     * @since 6.22.0
     */
    notInListItemColor?: Color;
    /**
     * The color used at the start of the progress bar. The progress bar will diplay a gradient from {@link BarcodeFindViewSettings.progressBarStartColor} to {@link BarcodeFindViewSettings.progressBarFinishColor}.
     *
     * Default is #2EC1CE.
     *
     * @since 7.4.0
     */
    progressBarStartColor?: Color;
    /**
     * The color used at the end of the progress bar. The progress bar will diplay a gradient from {@link BarcodeFindViewSettings.progressBarStartColor} to {@link BarcodeFindViewSettings.progressBarFinishColor}.
     *
     * Default is #97e0e6.
     *
     * @since 7.4.0
     */
    progressBarFinishColor?: Color;
    /**
     * Indicates whether audio feedback should be enabled.
     *
     * Default is *true*.
     *
     * @since 6.22.0
     */
    soundEnabled?: boolean;
    /**
     * Indicates whether haptic feedback should be enabled.
     *
     * Default is *true*.
     *
     * @since 6.22.0
     */
    hapticEnabled?: boolean;
    /** @since 7.1.0 */
    hardwareTriggerEnabled?: boolean;
    /**
     * The button that acts as a scan trigger. Leave *null* to use the default button (The default button will be the dedicated HW button on XCover devices, and “volume down” key for other devices). This is only taken into consideration if {@link BarcodeFindViewSettings.hardwareTriggerEnabled} is true.
     *
     * @since 7.1.0
     */
    hardwareTriggerKeyCode?: number | null;
    screenCategory?: 'small' | 'mid' | 'large' | null;
}
/**
 * Capture mode that implements BarcodeFind.
 *
 * @since 6.22.0
 */
interface BarcodeFind$1 {
    type: 'barcodeFind';
    settings?: BarcodeFindSettings$1;
    /**
     * Instance of {@link BarcodeFindFeedback} that is used by the barcode scanner to notify users about Found events.
     *
     * The default instance of the Feedback will have both sound and vibration enabled. A default beep sound will be used for the sound.
     *
     * @since 6.22.0
     */
    feedback?: BarcodeFindFeedback$1;
    enabled?: boolean;
    itemsToFind?: string | null;
    hasBarcodeTransformer?: boolean;
    hasListeners?: boolean;
    barcodeTransformer?: unknown | null;
}
/** @since 6.22.0 */
interface BarcodeFindSettings$1 {
    symbologies?: SymbologySettings;
}
/**
 * Determines what feedback (vibration, sound) should be emitted when barcodes are scanned.
 *
 * The feedback is specified for each BarcodeFind instance separately and can be changed through the feedback property by either modifying an existing instance of this class, or by assigning a new one.
 *
 * As of now, this class allows to configure the feedback that gets emitted when barcodes are found successfully, through the {@link BarcodeFindFeedback.found} property.
 *
 * See documentation on the {@link BarcodeFind.feedback} property for usage samples.
 *
 * @since 6.22.0
 */
interface BarcodeFindFeedback$1 {
    /**
     * A {@link Feedback} for a barcode found event.
     *
     * @since 6.22.0
     */
    found?: Feedback;
    /**
     * A {@link Feedback} for the item list updated event.
     *
     * @since 6.24.0
     */
    itemListUpdated?: Feedback;
}
/**
 * An object that represents an item in Barcode Find.
 *
 * @since 6.22.0
 */
interface BarcodeFindItem$1 {
    /**
     * The item data to search, and any other option that control the search.
     *
     * @since 6.22.0
     */
    searchOptions: BarcodeFindItemSearchOptions$1;
    /**
     * Optional info about the item.
     *
     * @since 6.22.0
     */
    content?: BarcodeFindItemContent$1 | null;
}
/**
 * An object that defines the search options.
 *
 * @since 6.22.0
 */
interface BarcodeFindItemSearchOptions$1 {
    /**
     * The barcode data as a string.
     *
     * @since 6.22.0
     */
    barcodeData: string;
    /**
     * The {@link Brush} to be applied to the dot shown over the barcode, when detected.
     *
     * @since 7.2.0
     */
    brush?: Brush | null;
}
/**
 * An object that contains additional info about the product.
 *
 * @since 6.22.0
 */
interface BarcodeFindItemContent$1 {
    /**
     * Optional item name.
     *
     * @since 6.22.0
     */
    info?: string;
    /**
     * Optional item details.
     *
     * @since 6.22.0
     */
    additionalInfo?: string;
    /**
     * Optional item image.
     *
     * @since 6.22.0
     */
    image?: string;
}
/**
 * Barcode AR comes with a ready-to-use UI that allows highlighting barcodes and displaying additional information over them. The BarcodeArView integrates with any app in just a few lines of code.
 *
 * @since 7.1.0
 */
interface BarcodeArView$1 {
    viewSettings?: BarcodeArViewSettings$1 | null;
    cameraSettings?: CameraSettings | null;
    /**
     * Indicates whether the torch control button should be shown to the user.
     *
     * Default is *false*.
     *
     * @since 7.1.0
     */
    shouldShowTorchControl?: boolean;
    /**
     * Updates the position of the torch control button.
     *
     * Default is {@link Anchor.TopLeft}.
     *
     * @since 7.1.0
     */
    torchControlPosition?: Anchor;
    /**
     * Indicates whether the zoom control button should be shown to the user.
     *
     * @since 7.1.0
     */
    shouldShowZoomControl?: boolean;
    /**
     * Updates the position of the zoom control button.
     *
     * Default is {@link Anchor.BottomRight}.
     *
     * @since 7.1.0
     */
    zoomControlPosition?: Anchor;
    /**
     * Indicates whether the camera switch control button should be shown to the user.
     *
     * @since 7.1.0
     */
    shouldShowCameraSwitchControl?: boolean;
    /**
     * Updates the position of the camera switch control button.
     *
     * Default is {@link Anchor.TopRight}.
     *
     * @since 7.1.0
     */
    cameraSwitchControlPosition?: Anchor;
    /**
     * Indicates whether the macro mode control button should be shown to the user.
     *
     * @since 7.1.0
     */
    shouldShowMacroModeControl?: boolean;
    /**
     * Updates the position of the macro mode control button.
     *
     * Default is {@link Anchor.TopRight}.
     *
     * @since 7.1.0
     */
    macroModeControlPosition?: Anchor;
    /**
     * Sets the visual offset of the torch control button.
     *
     * Assign null to reset the offset to its default position.
     *
     * @since 8.6.0
     */
    torchControlOffset?: UIPoint | null;
    /**
     * Sets the visual offset of the zoom control button.
     *
     * Assign null to reset the offset to its default position.
     *
     * @since 8.6.0
     */
    zoomControlOffset?: UIPoint | null;
    /**
     * Sets the visual offset of the camera switch control button.
     *
     * Assign null to reset the offset to its default position.
     *
     * @since 8.6.0
     */
    cameraSwitchControlOffset?: UIPoint | null;
    /**
     * Sets the visual offset of the macro mode control button.
     *
     * Assign null to reset the offset to its default position.
     *
     * @since 8.6.0
     */
    macroModeControlOffset?: UIPoint | null;
    /**
     * The style of the logo, either the extended “Scanning By Scandit” or the minimal “Scandit”.
     *
     * Default is {@link LogoStyle.Extended}.
     *
     * @since 8.6.0
     */
    logoStyle?: LogoStyle;
    /**
     * The anchor point used to position the Scandit logo. To shift the logo relative to the anchor, use {@link BarcodeArView.logoOffset}.
     *
     * Default is {@link Anchor.BottomRight}.
     *
     * @since 8.6.0
     */
    logoAnchor?: Anchor;
    /**
     * The offset applied to the Scandit logo relative to the {@link BarcodeArView.logoAnchor|logo anchor}. When specified in pixels ({@link MeasureUnit.Pixel}) the offset is used as-is. When specified as a fraction ({@link MeasureUnit.Fraction}) the offset is computed relative to the view size minus the scan area margins.
     *
     * Default is a zero offset.
     *
     * @since 8.6.0
     */
    logoOffset?: UIPoint;
    /**
     * Sets the orientation of the zoom control button.
     *
     * Default is {@link ZoomSwitchOrientation.Default}.
     *
     * @since 8.6.0
     */
    zoomControlOrientation?: 'default' | 'horizontal' | 'vertical';
    viewId?: number;
    isStarted?: boolean;
    hasModeListener?: boolean;
    hasUiListener?: boolean;
    hasHighlightProvider?: boolean;
    hasAnnotationProvider?: boolean;
    /**
     * Sets the provider which supplies annotation information for barcodes in the view. If *null*, no annotation will be displayed for any barcode.
     *
     * @since 7.1.0
     */
    annotationProvider?: unknown | null;
    /**
     * Sets the provider which supplies highlight information for barcodes in the view. If *null*, a default provider is used, which returns a predefined highlight for each barcode.
     *
     * @since 7.1.0
     */
    highlightProvider?: unknown | null;
    barcodeArViewUiListener?: unknown | null;
}
/** @since 7.1.0 */
interface BarcodeArViewSettings$1 {
    /**
     * Indicates whether the feedback should have sound enabled.
     *
     * Default is *true*.
     *
     * @since 7.1.0
     */
    soundEnabled?: boolean;
    /**
     * Indicates whether the feedback should have haptics enabled.
     *
     * Default is *true*.
     *
     * @since 7.1.0
     */
    hapticEnabled?: boolean;
    /**
     * Sets the default camera position.
     *
     * Default is {@link CameraPosition.WorldFacing}.
     *
     * @since 7.1.0
     */
    defaultCameraPosition?: 'worldFacing' | 'userFacing';
}
/** @since 7.1.0 */
interface BarcodeArSettings$1 {
    symbologies?: SymbologySettings;
    expectOnlyUniqueBarcodes?: boolean;
}
/**
 * Capture mode that implements Barcode AR.
 *
 * @since 7.1.0
 */
interface BarcodeAr$1 {
    type: 'barcodeAr';
    settings?: BarcodeArSettings$1;
    /**
     * Instance of {@link BarcodeArFeedback} that is used by the barcode scanner to notify users about Ar events.
     *
     * The default instance of the Feedback will have both sound and vibration enabled. A default beep sound will be used for the sound.
     *
     * @since 7.1.0
     */
    feedback?: BarcodeArFeedback$1;
    hasModeListener?: boolean;
    hasBarcodeFilter?: boolean;
}
/**
 * Determines what feedback (vibration, sound) should be emitted when barcodes are checked.
 *
 * The feedback is specified for each BarcodeAr instance separately and can be changed through the feedback property by either modifying an existing instance of this class, or by assigning a new one.
 *
 * See documentation on the {@link BarcodeAr.feedback} property for usage samples.
 *
 * @since 7.1.0
 */
interface BarcodeArFeedback$1 {
    /**
     * A {@link Feedback} for a barcode scanned event.
     *
     * @since 7.1.0
     */
    scanned?: Feedback;
    /**
     * A {@link Feedback} for an element tapped event.
     *
     * @since 7.1.0
     */
    tapped?: Feedback;
}



interface BarcodeCaptureListenerControllerHost {
    readonly modeId: number;
    readonly isEnabled: boolean;
    toJSON(): BarcodeCapture$1;
}



declare enum BarcodeCaptureListenerEvents {
    didUpdateSession = "BarcodeCaptureListener.didUpdateSession",
    didScan = "BarcodeCaptureListener.didScan"
}
declare enum BarcodeCaptureAdaptiveRecognitionEvents {
    dispatchStarted = "BarcodeCaptureAdaptiveRecognitionListener.dispatchStarted",
    response = "BarcodeCaptureAdaptiveRecognitionListener.response",
    error = "BarcodeCaptureAdaptiveRecognitionListener.error"
}
declare class BarcodeCaptureListenerController extends BaseController<BarcodeProxy> {
    private host;
    private frameDataController;
    private adapter;
    constructor(host: BarcodeCaptureListenerControllerHost);
    private get modeId();
    reset(): Promise<void>;
    setModeEnabledState(enabled: boolean): Promise<void>;
    updateBarcodeCaptureMode(): Promise<void>;
    getBarcodeCaptureLicenseInfo(): Promise<BarcodeCaptureLicenseInfo | null>;
    applyBarcodeCaptureModeSettings(modeSettings: BarcodeCaptureSettings$1): Promise<void>;
    getFrame(frameId: string): Promise<FrameData>;
    private parsePayloadTolerantly;
    handleDidUpdateSession(data: Record<string, unknown>, notify: (session: BarcodeCaptureSession) => Promise<void>): Promise<void>;
    handleDidScan(data: Record<string, unknown>, notify: (session: BarcodeCaptureSession) => Promise<void>): Promise<void>;
    private parseDidUpdateSession;
    private parseDidScan;
    private parseArePayloadOrLog;
    handleAdaptiveRecognitionDispatchStarted(activeListeners: AdaptiveRecognitionServiceListener[], _ev: EventPayload, raw: Record<string, unknown>): Promise<void>;
    handleAdaptiveRecognitionResponse(activeListeners: AdaptiveRecognitionServiceListener[], _ev: EventPayload, raw: Record<string, unknown>): Promise<void>;
    handleAdaptiveRecognitionError(activeListeners: AdaptiveRecognitionServiceListener[], _ev: EventPayload, raw: Record<string, unknown>): Promise<void>;
    private notifyEachAreListener;
    private finishDidUpdateSession;
    private finishDidScan;
}



/**
 * Capture mode for single barcode scanning. This capture mode uses the *barcode scanning* capability.
 *
 * Learn more on how to use barcode capture in our [Get Started](https://docs.scandit.com/sdks/react-native/barcode-capture/get-started) guide.
 *
 * For MatrixScan-based barcode capture, use {@link BarcodeBatch} instead.
 *
 * @since 6.5.0
 */
declare class BarcodeCapture extends ModeBase<BarcodeCaptureListenerController> implements DataCaptureMode {
    private static get barcodeCaptureDefaults();
    protected type: string;
    private _isEnabled;
    private _feedback;
    private settings;
    private parentId;
    private get listeners();
    private get asControllerHost();
    protected createController(): BarcodeCaptureListenerController;
    /**
     * Returns the recommended camera settings for use with barcode capture.
     *
     * @since 7.6.0
     */
    static createRecommendedCameraSettings(): CameraSettings$1;
    /**
     * Constructs a new BarcodeCapture instance with the provided settings.
     *
     * @since 7.6.0
     */
    constructor(settings: BarcodeCaptureSettings$1);
    /**
     * Implemented from {@link DataCaptureMode}. See {@link DataCaptureMode.context}.
     *
     * @since 6.5.0
     */
    get context(): DataCaptureContext | null;
    /**
     * Implemented from {@link DataCaptureMode}. See {@link DataCaptureMode.isEnabled}.
     *
     * @since 6.5.0
     */
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    /**
     * Instance of {@link BarcodeCaptureFeedback} that is used by the barcode scanner to notify users about Success and Failure events.
     *
     * The default instance of the Feedback will have both sound and vibration enabled. A default beep sound will be used for the sound.
     *
     * To change the feedback emitted, the {@link BarcodeCaptureFeedback} can be modified as shown below, or a new one can be assigned.
     *
     * ```jsx
     * const barcodeCapture = ...;
     * const feedback = BarcodeCaptureFeedback.defaultFeedback;
     * feedback.success = new Feedback(Vibration.defaultVibration, null);
     * barcodeCapture.feedback = feedback;
     * ```
     *
     * @since 6.5.0
     */
    get feedback(): BarcodeCaptureFeedback$1;
    set feedback(feedback: BarcodeCaptureFeedback$1);
    /**
     * Asynchronously applies the new settings to the barcode scanner. If the scanner is currently running, the task will complete when the next frame is processed, and will use the new settings for that frame. If the scanner is currently *not* running, the task will complete as soon as the settings have been stored and won’t wait until the next frame is going to be processed.
     *
     * @since 6.5.0
     */
    applySettings(settings: BarcodeCaptureSettings$1): Promise<void>;
    /**
     * Async getter for the barcode-capture license info. Returns *null* until the mode has been added to a {@link DataCaptureContext} with a license that covers barcode capture.
     *
     * @since 8.6.0
     */
    getBarcodeCaptureLicenseInfo(): Promise<BarcodeCaptureLicenseInfo | null>;
    /**
     * Adds the listener to this barcode capture instance.
     *
     * In case the same listener is already observing this instance, calling this method will not add the listener again.
     *
     * @since 6.5.0
     */
    addListener(listener: BarcodeCaptureListener): Promise<void>;
    private notifyListenersOfDidUpdateSession;
    private notifyListenersOfDidScan;
    /**
     * Removes a previously added listener from this barcode capture instance.
     *
     * In case the listener is not currently observing this instance, calling this method has no effect.
     *
     * @since 6.5.0
     */
    removeListener(listener: BarcodeCaptureListener): Promise<void>;
    /**
     * Adds the listener to observe the outcome of adaptive recognition dispatches performed by this mode’s adaptive recognition service. See {@link AdaptiveRecognitionServiceListener}.
     *
     * @since 8.7.0
     */
    addAdaptiveRecognitionServiceListener(listener: AdaptiveRecognitionServiceListener): Promise<void>;
    /**
     * Removes a previously added adaptive recognition service listener from this barcode capture instance.
     *
     * @since 8.7.0
     */
    removeAdaptiveRecognitionServiceListener(listener: AdaptiveRecognitionServiceListener): Promise<void>;
}
interface PrivateBarcodeCapture extends PrivateDataCaptureMode {
    _context: DataCaptureContext | null;
    listeners: BarcodeCaptureListener[];
    parentId: number | null;
}

/**
 * Overlay for the {@link BarcodeCapture} capture mode that displays recognized barcodes on top of a {@link DataCaptureView|data capture view}.
 *
 * The appearance of the visualized barcodes can be configured or turned off completely through the {@link BarcodeCaptureOverlay.brush} property.
 *
 * @since 6.5.0
 */
declare class BarcodeCaptureOverlay extends DefaultSerializeable implements DataCaptureOverlay {
    private type;
    private modeId;
    private controller;
    private _view;
    private get asHost();
    private get view();
    private set view(value);
    private _shouldShowScanAreaGuides;
    private _viewfinder;
    private static get barcodeCaptureDefaults();
    private _brush;
    /**
     * The brush used for visualizing a recognized barcode in the UI. To turn off drawing of locations, set the brush to use both a transparent fill and stroke color. By default, the brush has a transparent fill color, a “Scandit”-blue stroke color, and a stroke width of 1.
     *
     * @since 6.5.0
     */
    get brush(): Brush$1;
    set brush(newBrush: Brush$1);
    /**
     * Sets the viewfinder. By default, the viewfinder is *null*. Set this to an instance of {@link Viewfinder} if you want to draw a viewfinder.
     *
     * @since 6.5.0
     */
    get viewfinder(): Viewfinder$1 | null;
    set viewfinder(newViewfinder: Viewfinder$1 | null);
    /**
     * Whether to show scan area guides on top of the preview. This property is useful during development to visualize the current scan areas on screen. It is not meant to be used for production. By default this property is *false*.
     *
     * @since 6.5.0
     */
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    /**
     * Constructs a new BarcodeCaptureOverlay. For the overlay to be displayed on screen, it must be added to a {@link DataCaptureView}.
     *
     * @since 7.6.0
     */
    constructor(mode: BarcodeCapture);
}



interface BarcodeCaptureOverlayControllerHost {
    readonly view: {
        viewId: number;
    } | null;
    toJSON(): BarcodeCaptureOverlay$1;
}



declare class BarcodeCaptureOverlayController extends BaseController<BarcodeProxy> {
    private overlay;
    private adapter;
    constructor(overlay: BarcodeCaptureOverlayControllerHost);
    updateBarcodeCaptureOverlay(overlay: BarcodeCaptureOverlayControllerHost): Promise<void>;
    dispose(): void;
}

/** @since 7.1.0 */
declare class BarcodeArSettings extends DefaultSerializeable {
    private static get barcodeArDefaults();
    private symbologies;
    private properties;
    private _expectsOnlyUniqueBarcodes;
    /**
     * Creates a new Barcode AR settings instance. All symbologies are disabled. Make sure to enable the symbologies required by your app before applying the settings to {@link BarcodeAr} with BarcodeAr.applySettings().
     *
     * @since 8.6.0
     */
    constructor();
    /**
     * Declares whether or not the barcodes to be tracked are expected to be unique. If enabled optimizations can be used to improve Barcode AR.
     *
     * @since 8.6.0
     */
    get expectsOnlyUniqueBarcodes(): boolean;
    set expectsOnlyUniqueBarcodes(expectsOnlyUniqueBarcodes: boolean);
    /**
     * Returns the set of enabled symbologies.
     *
     * @since 7.1.0
     */
    get enabledSymbologies(): Symbology[];
    /**
     * Gets {@link SymbologySettings} specific for the given {@link Symbology}.
     *
     * Note that modifying the returned object doesn’t automatically apply the changes to {@link BarcodeAr}. After you made changes to the symbology settings, call BarcodeAr.applySettings() with these {@link BarcodeArSettings} to apply them.
     *
     * @since 7.1.0
     */
    settingsForSymbology(symbology: Symbology): SymbologySettings$1;
    /**
     * This function provides a convenient shortcut to enabling decoding of particular symbologies without having to go through {@link SymbologySettings}. By default, all symbologies are turned off and symbologies need to be explicitly enabled.
     *
     * @since 7.1.0
     */
    enableSymbologies(symbologies: Symbology[]): void;
    /**
     * This function provides a convenient shortcut to enabling/disabling decoding of a particular symbology without having to go through {@link SymbologySettings}.
     *
     * Some 1d barcode symbologies allow you to encode variable-length data. By default, the Scandit Data Capture SDK only scans barcodes in a certain length range.If your application requires scanning of one of these symbologies, and the length is falling outside the default range, you may need to adjust the {@link SymbologySettings.activeSymbolCounts|active symbol counts} for the symbology in addition to enabling it.
     *
     * @since 7.1.0
     */
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    /**
     * Sets property to the provided value. Use this method to set properties that are not yet part of a stable API. Properties set through this method may or may not be used or change in a future release.
     *
     * @since 7.1.0
     */
    setProperty(name: string, value: object): void;
    /**
     * Retrieves the value of a previously set property.
     *
     * @since 7.1.0
     */
    getProperty(name: string): object;
}

/**
 * Common interface for Barcode AR highlights. Highlights let the user identify the scanned barcode. They are shown on top of the respective barcode and are displayed as soon as the respective barcode is scanned. They are available in different shapes and have configurable styles. Currently, two types of highlights are supported: {@link BarcodeArCircleHighlight} and {@link BarcodeArRectangleHighlight}.
 *
 * @since 7.1.0
 */
interface BarcodeArHighlight extends DefaultSerializeable {
}

/**
 * Common interface for Barcode Ar annotations. Annotations are used to display additional information and/or trigger actions. They are displayed outside of the area of a barcode, and attach to the scanned barcode. They are available in different types and have configurable styles. Currently, three types of highlights are supported: {@link BarcodeArInfoAnnotation}, {@link BarcodeArPopoverAnnotation} and {@link BarcodeArStatusIconAnnotation}.
 *
 * <div style="margin-bottom: 20px"></div>
 *
 * You can also create your own custom annotation by extending {@link BarcodeArAnnotation}. For instance, the following code creates a custom annotation that displays a custom image on top of the barcode:
 *
 * @since 7.1.0
 */
interface BarcodeArAnnotation extends DefaultSerializeable {
    /**
     * The trigger that causes the annotation to be presented.
     *
     * @since 7.1.0
     */
    annotationTrigger: BarcodeArAnnotationTrigger;
}

/**
 * The Barcode AR session holds the ongoing state of a running {@link BarcodeAr}.
 *
 * @since 7.1.0
 */
declare class BarcodeArSession extends DefaultSerializeable {
    private _addedTrackedBarcodes;
    private _removedTrackedBarcodes;
    private _trackedBarcodes;
    private sessionController;
    private static fromJSON;
    private constructor();
    /**
     * Newly tracked barcodes.
     *
     * @since 7.1.0
     */
    get addedTrackedBarcodes(): TrackedBarcode[];
    /**
     * An array of identifiers of lost barcodes that were removed in the last frame.
     *
     * @since 7.1.0
     */
    get removedTrackedBarcodes(): string[];
    /**
     * A map from identifiers to barcodes. It contains all currently tracked barcodes.
     *
     * @since 7.1.0
     */
    get trackedBarcodes(): {
        [key: string]: TrackedBarcode;
    };
    /**
     * Resets the session, clearing all barcodes and their states.
     *
     * @since 7.1.0
     */
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

/**
 * Interface for filtering barcodes in {@link BarcodeAr}.
 *
 * Implement this interface to provide custom barcode filtering logic that determines which barcodes should be visible in the {@link BarcodeArSession}. This allows you to selectively show only barcodes that meet certain criteria (e.g., specific symbologies, data patterns, or business logic).
 *
 * The filter is evaluated:
 *
 * - Every time barcodes are added to or removed from the session
 * - When the filter is first set or changed via {@link BarcodeAr.setBarcodeFilter}
 *
 * It is **not** re-evaluated when only barcode positions are updated.
 *
 * @since 8.5.0
 */
interface BarcodeArFilter {
    /**
     * Filters the provided barcodes and returns which ones should be visible.
     *
     * Param barcodesAll currently visible barcodes.ReturnsA subset of the input barcodes that should be shown to the user. The returned list must only contain barcodes from the input; any other barcodes will be ignored.
     *
     * This method is called on an internal recognition thread and must return quickly to avoid impacting frame processing performance.
     *
     * @since 8.5.0
     */
    filterBarcodes(barcodes: Barcode[]): Promise<Barcode[]>;
}











interface BarcodeArViewControllerViewHost {
    readonly viewId: number;
    toJSON(): {
        View: BarcodeArView$1;
    };
    hasUiListener(): boolean;
    hasAnnotationProvider(): boolean;
    hasHighlightProvider(): boolean;
    notifyDidTapHighlightForBarcode(barcode: Barcode, highlight: BarcodeArHighlight): void;
    provideAnnotationForBarcode(barcode: Barcode): Promise<BarcodeArAnnotation | null | undefined>;
    provideHighlightForBarcode(barcode: Barcode): Promise<BarcodeArHighlight | null | undefined>;
}
interface BarcodeArModeEventHost {
    toJSON(): BarcodeAr$1;
    readonly listeners: ReadonlyArray<{
        didUpdateSession?(barcodeAr: unknown, session: BarcodeArSession, getFrameData: () => Promise<FrameData>): Promise<void> | void;
    }>;
    readonly _barcodeFilter: BarcodeArFilter | null;
    readonly feedback: {
        toJSON(): object;
    };
}





interface BarcodeArViewControllerModeHost extends BarcodeArModeEventHost {
    controller: BarcodeArViewController | null;
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
declare enum BarcodeArAugmentationsEvents {
    evicted = "BarcodeArAugmentations.evicted"
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
    private shownNestedCustomSlots;
    static forBarcodeArView(barcodeAr: BarcodeArViewControllerModeHost, baseView: BarcodeArViewControllerViewHost): BarcodeArViewController;
    private constructor();
    dispose(): Promise<void>;
    createNativeView(): Promise<void>;
    setPositionAndSize(top: number, left: number, width: number, height: number, shouldBeUnderWebView: boolean): Promise<void>;
    registerModeListener(): Promise<void>;
    unregisterModeListener(viewId?: number): Promise<void>;
    registerUiListener(): Promise<void>;
    unregisterUiListener(viewId?: number): Promise<void>;
    registerAnnotationProvider(): Promise<void>;
    unregisterAnnotationProvider(viewId?: number): Promise<void>;
    registerHighlightProvider(): Promise<void>;
    registerCustomHighlightCreateEvent(onCreate: (barcode: Barcode, barcodeId: string) => void): () => void;
    registerCustomHighlightUpdateEvent(onUpdate: (centerPosition: Point, barcodeId: string) => void, barcodeId: string): () => void;
    registerCustomHighlightHideEvent(onHide: (barcodeId: string) => void, barcodeId: string): () => void;
    registerCustomHighlightShowEvent(onShow: (barcodeId: string) => void, barcodeId: string): () => void;
    registerCustomHighlightDisposeEvent(onDispose: (barcodeId: string) => void): () => void;
    subscribeForCustomHighlightEvents(): void;
    unsubscribeFromCustomHighlightEvents(): void;
    onCustomHighlightClicked(barcodeId: string): Promise<void>;
    registerCustomAnnotationCreateEvent(onCreate: (barcode: Barcode, barcodeId: string, threshold?: number) => void): () => void;
    registerCustomAnnotationUpdateEvent(onUpdate: (centerPosition: Point, barcodeId: string) => void, barcodeId: string, threshold?: number): () => void;
    registerCustomAnnotationHideEvent(onHide: (barcodeId: string) => void, barcodeId: string, threshold?: number): () => void;
    registerCustomAnnotationShowEvent(onShow: (barcodeId: string) => void, barcodeId: string, threshold?: number): () => void;
    registerCustomAnnotationDisposeEvent(onDispose: (barcodeId: string, threshold?: number) => void): () => void;
    subscribeForCustomAnnotationEvents(): void;
    unsubscribeFromCustomAnnotationEvents(): void;
    private trackNestedCustomSlotShown;
    private trackNestedCustomSlotHidden;
    private recordNestedCustomSlot;
    private stopTrackingNestedCustomSlots;
    unregisterHighlightProvider(viewId?: number): Promise<void>;
    registerBarcodeFilter(): Promise<void>;
    unregisterBarcodeFilter(viewId?: number): Promise<void>;
    start(): Promise<void>;
    stop(): Promise<void>;
    pause(): Promise<void>;
    show(): Promise<void>;
    hide(): Promise<void>;
    update(): Promise<void>;
    removeNativeView(viewId?: number): Promise<void>;
    removeOrphanedNativeView(viewId: number): Promise<void>;
    reset(): Promise<void>;
    updateMode(): Promise<void>;
    applyNewSettings(settings: BarcodeArSettings): Promise<void>;
    updateFeedback(feedbackJson: string): Promise<void>;
    private initialize;
    private createView;
    private get isViewCreated();
    private handleDidUpdateSessionWrapper;
    private handleAugmentationsEvictedWrapper;
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



/**
 * Determines what feedback (vibration, sound) should be emitted when barcodes are checked.
 *
 * The feedback is specified for each BarcodeAr instance separately and can be changed through the feedback property by either modifying an existing instance of this class, or by assigning a new one.
 *
 * See documentation on the {@link BarcodeAr.feedback} property for usage samples.
 *
 * @since 7.1.0
 */
declare class BarcodeArFeedback extends DefaultSerializeable {
    private static get barcodeArDefaults();
    /**
     * Returns a Barcode AR feedback with default configuration:
     *
     * - default beep sound is loaded,
     * - beeping for the success event is enabled,
     * - vibration for the success event is enabled.
     *
     * @since 7.1.0
     */
    static get defaultFeedback(): BarcodeArFeedback;
    private _scanned;
    private _tapped;
    private controller;
    private static fromJSON;
    /**
     * A {@link Feedback} for a barcode scanned event.
     *
     * @since 7.1.0
     */
    get scanned(): Feedback$1;
    set scanned(scanned: Feedback$1);
    /**
     * A {@link Feedback} for an element tapped event.
     *
     * @since 7.1.0
     */
    get tapped(): Feedback$1;
    set tapped(tapped: Feedback$1);
    /**
     * Empty constructor. Constructs a new feedback that will not emit any sound, nor vibration.
     *
     * @since 7.1.0
     */
    constructor();
    private updateFeedback;
}
interface BarcodeArFeedbackJSON {
    scanned: Feedback$1;
    tapped: Feedback$1;
}
interface PrivateBarcodeArFeedback {
    controller: BarcodeArViewController | null;
}



/**
 * Listener interface for BarcodeAr.
 *
 * @since 7.1.0
 */
interface BarcodeArListener {
    /**
     * Invoked whenever the session has been updated.
     *
     * @since 7.1.0
     */
    didUpdateSession?(barcodeAr: BarcodeAr, session: BarcodeArSession, getFrameData: () => Promise<FrameData>): Promise<void>;
}




/**
 * Capture mode that implements Barcode AR.
 *
 * @since 7.1.0
 */
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
    /**
     * Returns the recommended camera settings for use with Barcode AR.
     *
     * @since 7.6.0
     */
    static createRecommendedCameraSettings(): CameraSettings$1;
    /**
     * Constructs a new BarcodeAr instance with the provided settings.
     *
     * @since 7.6.0
     */
    constructor(settings: BarcodeArSettings);
    /**
     * Asynchronously applies the new settings to the barcode scanner. If the scanner is currently running, the task will complete when the next frame is processed, and will use the new settings for that frame. If the scanner is currently *not* running, the task will complete as soon as the settings have been stored and won’t wait until the next frame is going to be processed.
     *
     * @since 7.1.0
     */
    applySettings(settings: BarcodeArSettings): Promise<void>;
    /**
     * Adds a listener to receive Barcode AR events.
     *
     * In case the same listener is already observing this instance, calling this method will not add the listener again.
     *
     * @since 7.1.0
     */
    addListener(listener: BarcodeArListener): void;
    /**
     * Removes a previously added listener from this BarcodeAr instance.
     *
     * In case the listener is not currently observing this instance, calling this method has no effect.
     *
     * @since 7.1.0
     */
    removeListener(listener: BarcodeArListener): void;
    /**
     * Sets a filter that determines which barcodes should be visible in the {@link BarcodeArSession}.
     *
     * Pass *null* to remove the filter and show all barcodes.
     *
     * See {@link BarcodeArFilter} for details on implementing a custom filter.
     *
     * @since 8.5.0
     */
    setBarcodeFilter(filter: BarcodeArFilter | null): Promise<void>;
    toJSON(): BarcodeAr$1;
    private checkAndSubscribeListeners;
    private checkAndUnsubscribeListeners;
    private subscribeNativeListeners;
    private unsubscribeNativeListeners;
    private didChange;
    private get _context();
    private set _context(value);
    /**
     * Instance of {@link BarcodeArFeedback} that is used by the barcode scanner to notify users about Ar events.
     *
     * The default instance of the Feedback will have both sound and vibration enabled. A default beep sound will be used for the sound.
     *
     * @since 7.1.0
     */
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

/**
 * An object used to retrieve the annotations for scanned barcodes.
 *
 * @since 7.1.0
 */
interface BarcodeArAnnotationProvider {
    /**
     * Asks the provider for an annotation to display for the given barcode. If *null* is provided, no annotation will be shown.
     *
     * @since 7.1.0
     */
    annotationForBarcode(barcode: Barcode): Promise<BarcodeArAnnotation | null>;
}

/**
 * A type of highlight that draws circles on top of barcodes. Highlight styles are customizable. Here are some examples:
 *
 * |  |  |  |
 * | --- | --- | --- |
 * | *Dot preset.* | *Icon preset.* | *Icon preset with different border color.* |
 *
 * @since 7.1.0
 */
declare class BarcodeArCircleHighlight extends Observable implements BarcodeArHighlight {
    private static get barcodeArDefaults();
    private _type;
    private _barcode;
    private _brush;
    private _icon;
    private _preset;
    private _size;
    private _isPulsing;
    /**
     * Creates a new instance with default values for the specified preset.
     *
     * @since 7.1.0
     */
    constructor(barcode: Barcode, preset: BarcodeArCircleHighlightPreset);
    /**
     * The barcode instance for the annotation.
     *
     * @since 7.1.0
     */
    get barcode(): Barcode;
    /**
     * The brush used for visualizing a recognized barcode in the UI. By default, the brush has a blue fill color with 45% alpha, blue stroke and a stroke width of 2.
     *
     * @since 7.1.0
     */
    get brush(): Brush$1;
    set brush(brush: Brush$1);
    /**
     * The icon used for visualizing a recognized barcode in the UI.
     *
     * @since 7.1.0
     */
    get icon(): ScanditIcon | null;
    set icon(value: ScanditIcon | null);
    /**
     * The size of the circle highlight in device-independent pixels. Minimum value is 18. If specified value is less than the minimum value, it will be coerced to the minimum value.
     *
     * @since 7.1.0
     */
    get size(): number;
    set size(value: number);
    /**
     * Whether the highlight is showing a pulsing animation.
     *
     * @since 8.6.0
     */
    get isPulsing(): boolean;
    set isPulsing(value: boolean);
}

/**
 * An object used to retrieve the highlights for scanned barcodes.
 *
 * @since 7.1.0
 */
interface BarcodeArHighlightProvider {
    /**
     * Asks the provider for a highlight to display for the given barcode. If *null* is provided, no highlight will be shown.
     *
     * @since 7.1.0
     */
    highlightForBarcode(barcode: Barcode): Promise<BarcodeArHighlight | null>;
}

/**
 * A component that forms the body of an {@link BarcodeArInfoAnnotation|info annotation}. Each component represents a “row,” containing text with optional icons on the left and/or right sides.
 *
 * @since 7.1.0
 */
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
    /**
     * Constructs a new instance of the body component.
     *
     * @since 8.6.0
     */
    constructor();
    /**
     * Whether the right icon is tappable. Default is *true*.
     *
     * @since 7.1.0
     */
    get isRightIconTappable(): boolean;
    set isRightIconTappable(value: boolean);
    /**
     * Whether the left icon is tappable. Default is *true*.
     *
     * @since 7.1.0
     */
    get isLeftIconTappable(): boolean;
    set isLeftIconTappable(value: boolean);
    /**
     * The icon displayed on the right side of the component. If *null*, no button is shown. The default value is *null*.
     *
     * @since 7.1.0
     */
    get rightIcon(): ScanditIcon | null;
    set rightIcon(value: ScanditIcon | null);
    /**
     * The icon displayed on the left side of the component. If *null*, no button is shown. The default value is *null*.
     *
     * @since 7.1.0
     */
    get leftIcon(): ScanditIcon | null;
    set leftIcon(value: ScanditIcon | null);
    /**
     * The text shown in the component.
     *
     * @since 7.1.0
     */
    get text(): string | null;
    set text(value: string | null);
    /**
     * The text alignment. The default value is center.
     *
     * @since 7.1.0
     */
    get textAlign(): TextAlignment;
    set textAlign(value: TextAlignment);
    /**
     * The color of the text. The default value is #121619.
     *
     * @since 7.1.0
     */
    get textColor(): Color$1;
    set textColor(value: Color$1);
    /**
     * The size of the text. Default is 14 scale-independent pixels.
     *
     * @since 7.1.0
     */
    get textSize(): number;
    set textSize(value: number);
    /**
     * The font used for the text.
     *
     * @since 7.1.0
     */
    get fontFamily(): FontFamily;
    set fontFamily(value: FontFamily);
}



/**
 * The listener for the info annotation.
 *
 * @since 7.1.0
 */
interface BarcodeArInfoAnnotationListener {
    /**
     * Called when the annotation header is tapped. Called only if {@link BarcodeArInfoAnnotation.isEntireAnnotationTappable} is *false*.
     *
     * @since 7.1.0
     */
    didTapHeader(annotation: BarcodeArInfoAnnotation): void;
    /**
     * Called when the annotation footer is tapped. Called only if {@link BarcodeArInfoAnnotation.isEntireAnnotationTappable} is *false*.
     *
     * @since 7.1.0
     */
    didTapFooter(annotation: BarcodeArInfoAnnotation): void;
    /**
     * Called when the left icon of an annotation component is tapped. componentIndex specifies the index of the component containing the tapped icon within the {@link BarcodeArInfoAnnotation.body} array. Called only if {@link BarcodeArInfoAnnotation.isEntireAnnotationTappable} is *false*.
     *
     * @since 7.1.0
     */
    didTapLeftIcon(annotation: BarcodeArInfoAnnotation, component: BarcodeArInfoAnnotationBodyComponent, componentIndex: number): void;
    /**
     * Called when the right icon of an annotation component is tapped. componentIndex specifies the index of the component containing the tapped icon within the {@link BarcodeArInfoAnnotation.body} array. Called only if {@link BarcodeArInfoAnnotation.isEntireAnnotationTappable} is *false*.
     *
     * @since 7.1.0
     */
    didTapRightIcon(annotation: BarcodeArInfoAnnotation, component: BarcodeArInfoAnnotationBodyComponent, componentIndex: number): void;
    /**
     * Called when the annotation is tapped. Called only if {@link BarcodeArInfoAnnotation.isEntireAnnotationTappable} is *true*.
     *
     * @since 7.1.0
     */
    didTap(annotation: BarcodeArInfoAnnotation): void;
}

/**
 * The header of an {@link BarcodeArInfoAnnotation|info annotation}.
 *
 * @since 7.1.0
 */
declare class BarcodeArInfoAnnotationHeader extends Observable {
    private static get barcodeArDefaults();
    private _text;
    private _icon;
    private _textSize;
    private _textColor;
    private _backgroundColor;
    private _fontFamily;
    /**
     * Constructs a new instance of the info annotation header.
     *
     * @since 7.1.0
     */
    constructor();
    /**
     * The text. Default is *null*.
     *
     * @since 7.1.0
     */
    get text(): string | null;
    set text(value: string | null);
    /**
     * The icon. Default is *null*.
     *
     * @since 7.1.0
     */
    get icon(): ScanditIcon | null;
    set icon(value: ScanditIcon | null);
    /**
     * The size of the text. Default is 16 scale-independent pixels.
     *
     * @since 7.1.0
     */
    get textSize(): number;
    set textSize(value: number);
    /**
     * The color of the text. Default is #000000.
     *
     * @since 7.1.0
     */
    get textColor(): Color$1 | null;
    set textColor(value: Color$1 | null);
    /**
     * The background color. Default is #00FFFF.
     *
     * @since 7.1.0
     */
    get backgroundColor(): Color$1 | null;
    set backgroundColor(value: Color$1 | null);
    /**
     * The font used for the text.
     *
     * @since 7.1.0
     */
    get fontFamily(): FontFamily;
    set fontFamily(value: FontFamily);
}

/**
 * The footer of an {@link BarcodeArInfoAnnotation|info annotation}.
 *
 * @since 7.1.0
 */
declare class BarcodeArInfoAnnotationFooter extends Observable {
    private static get barcodeArDefaults();
    private _text;
    private _icon;
    private _textSize;
    private _textColor;
    private _backgroundColor;
    private _fontFamily;
    /**
     * Constructs a new instance of the info annotation footer.
     *
     * @since 7.1.0
     */
    constructor();
    /**
     * The text. Default is *null*.
     *
     * @since 7.1.0
     */
    get text(): string | null;
    set text(value: string | null);
    /**
     * The icon. Default is *null*.
     *
     * @since 7.1.0
     */
    get icon(): ScanditIcon | null;
    set icon(value: ScanditIcon | null);
    /**
     * The size of the text. Default is 16 scale-independent pixels.
     *
     * @since 7.1.0
     */
    get textSize(): number;
    set textSize(value: number);
    /**
     * The color of the text. Default is #FFFFFF.
     *
     * @since 7.1.0
     */
    get textColor(): Color$1 | null;
    set textColor(value: Color$1 | null);
    /**
     * The background color. Default is #000000.
     *
     * @since 7.1.0
     */
    get backgroundColor(): Color$1 | null;
    set backgroundColor(value: Color$1 | null);
    /**
     * The font used for the text.
     *
     * @since 7.1.0
     */
    get fontFamily(): FontFamily;
    set fontFamily(value: FontFamily);
}



/**
 * Info annotations are tooltips that display text and icons, structured as an array of {@link BarcodeArInfoAnnotationBodyComponent|body components}. Each body component contains text and may include optional tappable icons on both the left and right sides.
 *
 * In addition to the body components, info annotations can include an optional header, and footer. By default, they appear automatically when the corresponding barcode is scanned. Info annotations are available in three predefined widths, with their height dynamically adjusting to fit the content. Here are some examples:
 *
 * |  |  |  |
 * | --- | --- | --- |
 * | *Body component only.* | *Body component and header.* | *Body component with attributed text and tappable icon.* |
 *
 * @since 7.1.0
 */
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
    /**
     * Constructs a new instance with the given barcode.
     *
     * @since 7.1.0
     */
    constructor(barcode: Barcode);
    /**
     * The annotation anchor. The default value is {@link BarcodeArInfoAnnotationAnchor.Bottom}.
     *
     * @since 7.1.0
     */
    get anchor(): BarcodeArInfoAnnotationAnchor;
    set anchor(newValue: BarcodeArInfoAnnotationAnchor);
    /**
     * The trigger that causes the annotation to be presented. By default is {@link BarcodeArAnnotationTrigger.HighlightTapAndBarcodeScan}.
     *
     * @since 7.1.0
     */
    get annotationTrigger(): BarcodeArAnnotationTrigger;
    set annotationTrigger(newValue: BarcodeArAnnotationTrigger);
    /**
     * The background color. The default value is #CCFFFFFF.
     *
     * @since 7.1.0
     */
    get backgroundColor(): Color$1;
    set backgroundColor(newValue: Color$1);
    /**
     * The barcode instance for the annotation.
     *
     * @since 7.1.0
     */
    get barcode(): Barcode;
    /**
     * The annotation body, represented as an array of {@link BarcodeArInfoAnnotationBodyComponent|body components}. The default value is [].
     *
     * @since 7.1.0
     */
    get body(): ReadonlyArray<BarcodeArInfoAnnotationBodyComponent>;
    set body(newValue: ReadonlyArray<BarcodeArInfoAnnotationBodyComponent>);
    /**
     * The annotation footer. The default value is *null*.
     *
     * @since 7.1.0
     */
    get footer(): BarcodeArInfoAnnotationFooter | null;
    private footerChangedListener;
    set footer(newValue: BarcodeArInfoAnnotationFooter | null);
    /**
     * Whether the annotation has a tip. The default value is *true*.
     *
     * @since 7.1.0
     */
    get hasTip(): boolean;
    set hasTip(newValue: boolean);
    /**
     * The annotation header. The default value is *null*.
     *
     * @since 7.1.0
     */
    get header(): BarcodeArInfoAnnotationHeader | null;
    private headerChangedListener;
    set header(newValue: BarcodeArInfoAnnotationHeader | null);
    /**
     * If *false*, each individual element within the annotation (header, footer, icons in body components) is tappable. If *true*, the entire annotation is tappable.
     *
     * @since 7.1.0
     */
    get isEntireAnnotationTappable(): boolean;
    set isEntireAnnotationTappable(newValue: boolean);
    /**
     * An object that receives notifications for UI-related events.
     *
     * @since 7.1.0
     */
    get listener(): BarcodeArInfoAnnotationListener | null;
    set listener(newValue: BarcodeArInfoAnnotationListener | null);
    /**
     * The annotation width. The default value is {@link BarcodeArInfoAnnotationWidthPreset.Small}.
     *
     * @since 7.1.0
     */
    get width(): BarcodeArInfoAnnotationWidthPreset;
    set width(newValue: BarcodeArInfoAnnotationWidthPreset);
}

/**
 * Responsive annotations dynamically switch between different annotation variations based on the barcode’s size relative to the screen. This allows for different display styles as a barcode gets closer to or further from the camera.
 *
 * Each variation is gated by an area-ratio upper bound (the barcode area as a percentage of the screen area). The variations are evaluated from far to close, and the one whose upper bound is the first at or above the current ratio is displayed.
 *
 * Each variation is a {@link BarcodeArAnnotation} — an info, popover or status icon annotation, or a custom annotation on React Native — and any can be set to *null* to display nothing in that range.
 *
 * A {@link BarcodeArResponsiveAnnotation} passed as a variation is ignored with a warning.
 *
 * A {@link BarcodeArPopoverAnnotation} is not fully supported as a variation. {@link BarcodeArView} only applies popover-specific handling — dark scrim, exclusive visibility, hiding on tap — to a popover the annotation provider returns directly, so a popover used as a variation does not receive it.
 *
 * @since 8.2.0
 */
declare class BarcodeArResponsiveAnnotation extends Observable implements BarcodeArAnnotation {
    private static get barcodeArDefaults();
    private _barcode;
    private _annotationsByThreshold;
    private _usesLegacyTwoStateApi;
    private _listenedAnnotations;
    private _legacyThreshold;
    private _legacyCloseUpAnnotation;
    private _legacyFarAwayAnnotation;
    private _type;
    private _annotationTrigger;
    /**
     * Constructs a new responsive annotation whose displayed variation depends on the barcode's area
     * relative to the view. Each key is the area-ratio upper bound (in the range (0.0, 1.0]) at or
     * below which the associated annotation is shown; ranges are evaluated from far to close. A null
     * value suppresses the annotation in that range. Keys outside (0.0, 1.0] are dropped with a
     * warning.
     *
     * Constructs a new responsive annotation with the given barcode and annotation variations.
     *
     * @since 8.2.0
     */
    constructor(barcode: Barcode, annotationsByThreshold: Record<number, BarcodeArAnnotation | null>);
    /**
     * @deprecated Use the constructor that accepts an annotationsByThreshold map instead. Maps to
     * `{ [defaultResponsiveAnnotationThreshold]: farAway, 1.0: closeUp }`. Will be removed in 9.0.
     */
    constructor(barcode: Barcode, closeUp: BarcodeArInfoAnnotation | null, farAway: BarcodeArInfoAnnotation | null);
    /**
     * The annotations keyed by the area-ratio upper bound (in (0.0, 1.0]) at or below which each is
     * shown. A null value means no annotation is shown in that range.
     *
     * The annotations keyed by the area-ratio upper bound (in (0.0, 1.0]) at or below which each is shown, with *null* for a range that shows nothing. Keys passed to the initializer outside (0.0, 1.0] are dropped.
     *
     * @since 8.7.0
     */
    get annotationsByThreshold(): Record<number, BarcodeArAnnotation | null>;
    /**
     * The annotation displayed when the barcode appears close-up (when the barcode area exceeds the {@link BarcodeArResponsiveAnnotation.threshold}).
     *
     * Can be *null* to display nothing for close-up barcodes.
     *
     * @since 8.2.0
     * @deprecated Use annotationsByThreshold instead. Will be removed in 9.0.
     */
    get closeUpAnnotation(): BarcodeArInfoAnnotation | null;
    /**
     * The annotation displayed when the barcode appears far away (when the barcode area is below or equal to the {@link BarcodeArResponsiveAnnotation.threshold}).
     *
     * Can be *null* to display nothing for far-away barcodes.
     *
     * @since 8.2.0
     * @deprecated Use annotationsByThreshold instead. Will be removed in 9.0.
     */
    get farAwayAnnotation(): BarcodeArInfoAnnotation | null;
    /**
     * The trigger that causes the annotation to be presented. By default is {@link BarcodeArAnnotationTrigger.HighlightTapAndBarcodeScan}.
     *
     * @since 8.2.0
     */
    get annotationTrigger(): BarcodeArAnnotationTrigger;
    set annotationTrigger(newValue: BarcodeArAnnotationTrigger);
    /**
     * The barcode instance for the annotation.
     *
     * @since 8.2.0
     */
    get barcode(): Barcode;
    /**
     * The threshold (percentage of the barcode area vs screen area) that determines when to display close-up vs far-away annotations.
     *
     * The value should be between 0.0 and 1.0, where 0.1 represents 10% of the screen area.
     *
     * The default value is 0.05.
     *
     * The threshold is a class-level property that applies to all instances of {@link BarcodeArResponsiveAnnotation}.
     *
     * @since 8.2.0
     * @deprecated Use annotationsByThreshold instead. Will be removed in 9.0.
     */
    set threshold(newValue: number);
    /**
     * @deprecated Use annotationsByThreshold instead. Will be removed in 9.0.
     */
    get threshold(): number;
    toJSON(): object;
    private replaceAnnotationsByThreshold;
    private thresholdOf;
    private notificationPropertyFor;
    private legacyFarAwayThreshold;
    private sortedThresholds;
    private static thresholdKey;
    private static infoOrNull;
    private static isValidThreshold;
    private static dropOutOfBoundThresholds;
}

/** @since 7.1.0 */
declare class BarcodeArPopoverAnnotationButton extends Observable {
    private static get barcodeArDefaults();
    private _textColor;
    private _textSize;
    private _fontFamily;
    private _icon;
    private _text;
    private _enabled;
    /**
     * Constructs a new instance with the given icon and text.
     *
     * @since 7.1.0
     */
    constructor(icon: ScanditIcon, text: string);
    /**
     * Whether the button is enabled. Default is *true*.
     *
     * @since 8.6.0
     */
    get enabled(): boolean;
    set enabled(value: boolean);
    /**
     * The color of the text. Default is #3D4852.
     *
     * @since 7.1.0
     */
    get textColor(): Color$1;
    set textColor(value: Color$1);
    /**
     * The size of the text. Default is 10 scale-independent pixels.
     *
     * @since 7.1.0
     */
    get textSize(): number;
    set textSize(value: number);
    /**
     * The font used for the text.
     *
     * @since 7.1.0
     */
    get fontFamily(): FontFamily;
    set fontFamily(value: FontFamily);
    /**
     * The icon provided in the constructor.
     *
     * @since 7.1.0
     */
    get icon(): ScanditIcon;
    /**
     * The text provided in the constructor.
     *
     * @since 7.1.0
     */
    get text(): string;
}



/**
 * The listener for the popover annotation.
 *
 * @since 7.1.0
 */
interface BarcodeArPopoverAnnotationListener {
    /**
     * Called when a button is tapped. The buttonIndex parameter can be used to identify which button was tapped. Called only if {@link BarcodeArPopoverAnnotation.isEntirePopoverTappable} is *false*.
     *
     * @since 7.1.0
     */
    didTapButton?(popover: BarcodeArPopoverAnnotation, button: BarcodeArPopoverAnnotationButton, buttonIndex: number): void;
    /**
     * Called when the popover is tapped. Called only if {@link BarcodeArPopoverAnnotation.isEntirePopoverTappable} is *true*.
     *
     * @since 7.1.0
     */
    didTap?(popover: BarcodeArPopoverAnnotation): void;
}



/**
 * An annotation comprising a set of buttons, each containing an icon and text, which appears only when the user taps on the corresponding barcode highlight.
 *
 * @since 7.1.0
 */
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
    /**
     * Constructs a new instance with the given buttons and barcode.
     *
     * @since 7.1.0
     */
    constructor(barcode: Barcode, buttons: BarcodeArPopoverAnnotationButton[]);
    private buttonChangedListener;
    /**
     * Returns the barcode provided in the constructor.
     *
     * @since 7.1.0
     */
    get barcode(): Barcode;
    /**
     * If *false* each individual button in the popover is tappable. If *true* the entire popover is tappable. Default is *false*.
     *
     * @since 7.1.0
     */
    get isEntirePopoverTappable(): boolean;
    set isEntirePopoverTappable(value: boolean);
    /**
     * The annotation anchor. The default value is {@link BarcodeArPopoverAnnotationAnchor.Bottom}.
     *
     * @since 8.6.0
     */
    get anchor(): BarcodeArPopoverAnnotationAnchor;
    set anchor(value: BarcodeArPopoverAnnotationAnchor);
    /**
     * An object that receives notifications for UI-related events, such as tapping on a button.
     *
     * @since 7.1.0
     */
    get listener(): BarcodeArPopoverAnnotationListener | null;
    set listener(value: BarcodeArPopoverAnnotationListener | null);
    /**
     * The trigger that causes the annotation to be presented. By default is {@link BarcodeArAnnotationTrigger.HighlightTap}.
     *
     * @since 7.1.0
     */
    get annotationTrigger(): BarcodeArAnnotationTrigger;
    set annotationTrigger(value: BarcodeArAnnotationTrigger);
    /**
     * Returns the buttons provided in the constructor.
     *
     * @since 7.1.0
     */
    get buttons(): ReadonlyArray<BarcodeArPopoverAnnotationButton>;
}

/**
 * A type of highlight that draws rectangles on top of barcodes. Highlight styles are customizable. Here are some examples:
 *
 * |  |  |
 * | --- | --- |
 * | *Default style.* | *Customized brush and icon.* |
 *
 * @since 7.1.0
 */
declare class BarcodeArRectangleHighlight extends Observable implements BarcodeArHighlight {
    private static get barcodeArDefaults();
    private _barcode;
    private _type;
    private _brush;
    private _icon;
    /**
     * Creates a new instance with default values.
     *
     * @since 7.1.0
     */
    constructor(barcode: Barcode);
    /**
     * The barcode instance for the annotation.
     *
     * @since 7.1.0
     */
    get barcode(): Barcode;
    /**
     * The brush used for visualizing a recognized barcode in the UI. By default, the brush has a blue fill color with 45% alpha, blue stroke and a stroke width of 2.
     *
     * @since 7.1.0
     */
    get brush(): Brush$1;
    set brush(brush: Brush$1);
    /**
     * The icon used for visualizing a recognized barcode in the UI. Is *null* by default.
     *
     * @since 7.1.0
     */
    get icon(): ScanditIcon | null;
    set icon(icon: ScanditIcon | null);
}

/**
 * A tooltip annotation that toggles between collapsed and expanded states upon tap. In the collapsed state, only the icon is visible. In the expanded state, both the icon and text are displayed.
 *
 * |  |  |
 * | --- | --- |
 * | *Collapsed state.* | *Expanded state.* |
 *
 * @since 7.1.0
 */
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
    /**
     * Constructs a new instance of this class.
     *
     * @since 7.1.0
     */
    constructor(barcode: Barcode);
    /**
     * The barcode instance for the annotation.
     *
     * @since 7.1.0
     */
    get barcode(): Barcode;
    /**
     * Whether the status icon has a tip. Default is *true*.
     *
     * @since 7.1.0
     */
    get hasTip(): boolean;
    set hasTip(value: boolean);
    /**
     * The icon. Default value is black {@link ScanditIconType.ExclamationMark} with a background color of #FBC02C.
     *
     * @since 7.1.0
     */
    get icon(): ScanditIcon;
    set icon(value: ScanditIcon);
    /**
     * The text shown in the expanded state. Maximum allowed length is 20 characters, including whitespaces. If *null*, the status icon doesn’t expand on tap. Default is *null*.
     *
     * @since 7.1.0
     */
    get text(): string | null;
    set text(value: string | null);
    /**
     * The color of the text. Default is #121619.
     *
     * @since 7.1.0
     */
    get textColor(): Color$1;
    set textColor(value: Color$1);
    /**
     * The annotation background color. Default is #FFFFFF.
     *
     * @since 7.1.0
     */
    get backgroundColor(): Color$1;
    set backgroundColor(value: Color$1);
    /**
     * The trigger that causes the annotation to be presented. By default is {@link BarcodeArAnnotationTrigger.HighlightTapAndBarcodeScan}.
     *
     * @since 7.1.0
     */
    get annotationTrigger(): BarcodeArAnnotationTrigger;
    set annotationTrigger(value: BarcodeArAnnotationTrigger);
    /**
     * The annotation anchor. The default value is {@link BarcodeArStatusIconAnnotationAnchor.Bottom}.
     *
     * @since 8.6.0
     */
    get anchor(): BarcodeArStatusIconAnnotationAnchor;
    set anchor(value: BarcodeArStatusIconAnnotationAnchor);
}

/** @since 7.1.0 */
declare class BarcodeArViewSettings extends DefaultSerializeable {
    private static get barcodeArDefaults();
    private _soundEnabled;
    private _hapticEnabled;
    private _defaultCameraPosition;
    /**
     * Constructs a new Barcode AR view settings to use when creating an instance of BarcodeArView.
     *
     * @since 7.1.0
     */
    constructor();
    /**
     * Indicates whether the feedback should have sound enabled.
     *
     * Default is *true*.
     *
     * @since 7.1.0
     */
    get soundEnabled(): boolean;
    set soundEnabled(value: boolean);
    /**
     * Indicates whether the feedback should have haptics enabled.
     *
     * Default is *true*.
     *
     * @since 7.1.0
     */
    get hapticEnabled(): boolean;
    set hapticEnabled(value: boolean);
    /**
     * Sets the default camera position.
     *
     * Default is {@link CameraPosition.WorldFacing}.
     *
     * @since 7.1.0
     */
    get defaultCameraPosition(): CameraPosition;
    set defaultCameraPosition(value: CameraPosition);
}



/** @since 7.1.0 */
interface BarcodeArViewUiListener {
    /**
     * Callback method that is called when a barcode highlight is tapped in the view.
     *
     * @since 7.1.0
     */
    didTapHighlightForBarcode(barcodeAr: BarcodeAr, barcode: Barcode, highlight: BarcodeArHighlight): void;
}











/**
 * Barcode AR comes with a ready-to-use UI that allows highlighting barcodes and displaying additional information over them. The BarcodeArView integrates with any app in just a few lines of code.
 *
 * @since 7.1.0
 */
interface BarcodeArView {
}
declare class BaseBarcodeArView extends DefaultSerializeable implements BarcodeArViewControllerViewHost {
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
    private viewCreationGate;
    /**
     * Resolves true once this view's native counterpart exists, false if it
     * never will (creation failed, timed out, or the view was torn down).
     *
     * Callers that arrive before creation has been kicked off park until it is,
     * bounded by VIEW_CREATION_PRE_BEGIN_TIMEOUT_MS; once a creation cycle is in
     * flight the bound is VIEW_CREATION_TIMEOUT_MS. Reachable on Cordova/Capacitor
     * when a view method runs before connectToElement().
     *
     * @internal Not part of the documented API surface: it exists so the base
     * view's own action methods can await creation, and is public only because
     * the framework plugins reach it across package boundaries.
     */
    whenViewCreated(): Promise<boolean>;
    private controller;
    private _viewId;
    constructor(context: DataCaptureContext, barcodeAr: BarcodeAr, nativeView?: BarcodeArView | null, barcodeArViewSettings?: BarcodeArViewSettings, cameraSettings?: CameraSettings$1, annotationProvider?: BarcodeArAnnotationProvider, highlightProvider?: BarcodeArHighlightProvider, uiListener?: BarcodeArViewUiListener);
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
    /** @internal */
    hasUiListener(): boolean;
    /** @internal */
    hasAnnotationProvider(): boolean;
    /** @internal */
    hasHighlightProvider(): boolean;
    /** @internal */
    notifyDidTapHighlightForBarcode(barcode: Barcode, highlight: BarcodeArHighlight): void;
    /** @internal */
    provideAnnotationForBarcode(barcode: Barcode): Promise<BarcodeArAnnotation | null | undefined>;
    /** @internal */
    provideHighlightForBarcode(barcode: Barcode): Promise<BarcodeArHighlight | null | undefined>;
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
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    start(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    stop(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    pause(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    reset(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    show(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    hide(): Promise<void>;
    get shouldShowTorchControl(): boolean;
    set shouldShowTorchControl(value: boolean);
    get torchControlPosition(): Anchor$1;
    set torchControlPosition(value: Anchor$1);
    get shouldShowZoomControl(): boolean;
    set shouldShowZoomControl(value: boolean);
    get zoomControlPosition(): Anchor$1;
    set zoomControlPosition(value: Anchor$1);
    get torchControlOffset(): PointWithUnit | null;
    set torchControlOffset(value: PointWithUnit | null);
    get zoomControlOffset(): PointWithUnit | null;
    set zoomControlOffset(value: PointWithUnit | null);
    get cameraSwitchControlOffset(): PointWithUnit | null;
    set cameraSwitchControlOffset(value: PointWithUnit | null);
    get macroModeControlOffset(): PointWithUnit | null;
    set macroModeControlOffset(value: PointWithUnit | null);
    get logoStyle(): LogoStyle$1;
    set logoStyle(value: LogoStyle$1);
    get zoomControlOrientation(): ZoomSwitchOrientation;
    set zoomControlOrientation(value: ZoomSwitchOrientation);
    get logoAnchor(): Anchor$1;
    set logoAnchor(value: Anchor$1);
    get logoOffset(): PointWithUnit;
    set logoOffset(value: PointWithUnit);
    get shouldShowCameraSwitchControl(): boolean;
    set shouldShowCameraSwitchControl(value: boolean);
    get cameraSwitchControlPosition(): Anchor$1;
    set cameraSwitchControlPosition(value: Anchor$1);
    get shouldShowMacroModeControl(): boolean;
    set shouldShowMacroModeControl(value: boolean);
    get macroModeControlPosition(): Anchor$1;
    set macroModeControlPosition(value: Anchor$1);
    setPositionAndSize(top: number, left: number, width: number, height: number, shouldBeUnderWebView: boolean): Promise<void>;
    toJSON(): {
        View: BarcodeArView$1;
        BarcodeAr: BarcodeAr$1;
    };
    private updateNative;
}

declare class BarcodeArSessionController extends BaseController<BarcodeProxy> {
    private viewId;
    private adapter;
    constructor(viewId: number);
    $resetBarcodeArSession(): Promise<void>;
}

/**
 * Determines what feedback (vibration, sound) should be emitted when reading barcodes. The feedback is specified for each {@link BarcodeSelection} instance separately and can be changed through the {@link BarcodeSelection.feedback} property by either modifying an existing instance of this class, or by assigning a new one.As of now, this class only allows to configure the feedback that gets emitted when a barcode is selected, through the {@link BarcodeSelectionFeedback.selection} property.See documentation on the {@link BarcodeSelection.feedback} property for usage samples.
 *
 * @since 6.10.0
 */
declare class BarcodeSelectionFeedback extends DefaultSerializeable {
    private withController;
    private _selection;
    /**
     * A {@link Feedback} for a selection event.
     *
     * @since 6.10.0
     */
    get selection(): Feedback$1;
    set selection(selection: Feedback$1);
    private static get barcodeSelectionDefaults();
    /**
     * Returns a barcode selection feedback with default configuration:
     *
     * - default click sound
     * - no vibration
     *
     * @since 6.10.0
     */
    static get default(): BarcodeSelectionFeedback;
    /**
     * Creates new default barcode selection feedback instance.
     *
     * This differs from the native platforms on purpose: on Android, iOS and KMP the empty constructor is silent, while here it returns the default feedback. The framework constructor has always behaved this way, and aligning it would silently drop the selection click for existing callers, so it is kept as is. For a silent feedback on these platforms, assign an empty {@link Feedback} to {@link BarcodeSelectionFeedback.selection}.
     *
     * @since 6.10.0
     */
    constructor();
    private updateFeedback;
}

/**
 * Contains information about barcode-selection-specific licensing.
 *
 * @since 8.6.0
 */
declare class BarcodeSelectionLicenseInfo {
    private _licensedSymbologies;
    /**
     * Which symbologies are licensed and can be used for barcode selection.
     *
     * @since 8.6.0
     */
    get licensedSymbologies(): Symbology[];
    static fromJSON(json: {
        licensedSymbologies?: string[];
    }): BarcodeSelectionLicenseInfo;
}

/** @internal */
interface BarcodeSelectionSessionControllerHost {
    getCount(barcode: Barcode): Promise<number>;
    reset(): Promise<void>;
    selectUnselectedBarcodes(): Promise<void>;
}
/**
 * Holds the ongoing state of a running {@link BarcodeSelection}. An instance of this class is passed to BarcodeSelectionListener.didUpdateSelection() when new barcodes are selected or currently selected barcodes are unselected.
 *
 * The barcode selection session should only be accessed from within didUpdateSelection() to which it is provided as an argument. It is not safe to be accessed from anywhere else since it may be concurrently modified.Specifically no reference to {@link BarcodeSelectionSession.selectedBarcodes} should be kept and traversed outside of didUpdateSelection(). Instead a copy of the list should be made to avoid concurrent modification. The individual barcodes can be referenced without copying as they are not further modified.
 *
 * @since 6.10.0
 */
declare class BarcodeSelectionSession {
    private _selectedBarcodes;
    private _newlySelectedBarcodes;
    private _newlyUnselectedBarcodes;
    private _frameSequenceID;
    private frameId;
    private listenerController;
    /**
     * List of currently selected codes.
     *
     * @since 6.10.0
     */
    get selectedBarcodes(): Barcode[];
    /**
     * List of codes that were newly selected in the last processed frame.
     *
     * @since 6.10.0
     */
    get newlySelectedBarcodes(): Barcode[];
    /**
     * List of codes that were unselected in the last processed frame.
     *
     * @since 6.10.0
     */
    get newlyUnselectedBarcodes(): Barcode[];
    /**
     * The identifier of the current frame sequence.
     *
     * As long as there is no interruptions of frames coming from the camera, the {@link BarcodeSelectionSession.frameSequenceID} will stay the same.
     *
     * @since 6.10.0
     */
    get frameSequenceID(): number;
    private static fromJSON;
    /**
     * Returns how many times the given {@link Barcode} was selected.
     *
     * @since 6.10.0
     */
    getCount(barcode: Barcode): Promise<number>;
    /**
     * Resets the barcode selection session, effectively clearing the history of selected codes. This function should only be called inside the listeners’ callback. To call it from another thread, use {@link BarcodeSelection.reset}.
     *
     * @since 6.10.0
     */
    reset(): Promise<void>;
    /**
     * Select all the unselected barcodes that are currently being tracked in this barcode selection session.
     *
     * @since 8.7.0
     */
    selectUnselectedBarcodes(): Promise<void>;
}
interface BarcodeSelectionSessionJSON {
    selectedBarcodes: BarcodeJSON[];
    newlySelectedBarcodes: BarcodeJSON[];
    newlyUnselectedBarcodes: BarcodeJSON[];
    frameSequenceId: number;
}




/**
 * The BarcodeSelection listener is the main way for hooking into BarcodeSelection. It provides a callback that is invoked when the state of selected barcodes changes.
 *
 * @since 6.10.0
 */
interface BarcodeSelectionListener {
    /**
     * Invoked whenever a barcode is selected or a previously selected barcode is unselected.
     *
     * {@link FrameData} is *null* if the camera is frozen and the selection is changed.
     *
     * @since 6.10.0
     */
    didUpdateSelection?(barcodeSelection: BarcodeSelection, session: BarcodeSelectionSession, getFrameData: () => Promise<FrameData | null>): Promise<void>;
    /**
     * Invoked after a frame has been processed by barcode selection and the session has been updated. In contrast to didUpdateSelection(), this method is invoked, regardless whether a code was selected or not.
     *
     * {@link FrameData} is *null* if the camera is frozen and the selection is changed.
     *
     * @since 6.10.0
     */
    didUpdateSession?(barcodeSelection: BarcodeSelection, session: BarcodeSelectionSession, getFrameData: () => Promise<FrameData | null>): Promise<void>;
}

/**
 * Enum used to specify how freezing of the frame preview should be handled. Freezing the preview helps the user select multiple codes which might be difficult to do on a live preview where the codes constantly move around a bit.
 *
 * @since 6.10.0
 */
declare enum BarcodeSelectionFreezeBehavior {
    /**
     * The frame preview can only be frozen manually by double tapping anywhere on the screen.
     *
     * @since 6.10.0
     */
    Manual = "manual",
    /**
     * The frame preview is automatically frozen when all barcodes in view are recognized. It can also be frozen manually by double tapping anywhere on the screen.
     *
     * This setting is still in beta and may not yet work reliably in all situations.
     *
     * @since 6.10.0
     */
    ManualAndAutomatic = "manualAndAutomatic"
}

/**
 * Enum used to specify what happens when the user taps a barcode.
 *
 * @since 6.10.0
 */
declare enum BarcodeSelectionTapBehavior {
    /**
     * Tapping an unselected barcode selects it. Tapping an already selected barcode will unselect it.
     *
     * @since 6.10.0
     */
    ToggleSelection = "toggleSelection",
    /**
     * Tapping an unselected barcode selects it. Tapping on an already selected barcode will increment the count returned by {@link BarcodeSelectionSession.getCount}.
     *
     * @since 6.10.0
     */
    RepeatSelection = "repeatSelection"
}

/**
 * Enum used to specify what happens when the user aims a barcode.
 *
 * @since 8.7.0
 */
declare enum BarcodeSelectionAimerBehavior {
    /**
     * Aiming and tapping an unselected barcode select it. Aiming and tapping an already selected barcode unselect it. The behavior does not apply when using {@link BarcodeSelectionAutoSelectionStrategy}. In this case, {@link BarcodeSelectionAimerBehavior.RepeatSelection} is always in used.
     *
     * @since 8.7.0
     */
    ToggleSelection = "toggleSelection",
    /**
     * Aiming an unselected barcode selects it. Aiming on an already selected barcode will increment the count returned by {@link BarcodeSelectionSession.getCount}.
     *
     * @since 8.7.0
     */
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

/**
 * The interface for all barcode selection strategies. These strategies are used to configure {@link BarcodeSelectionAimerSelection}.
 *
 * @since 6.10.0
 */
interface BarcodeSelectionStrategy {
}
/**
 * Barcodes are selected automatically when aiming at them as soon as the intention is understood by our internal algorithms.
 *
 * @since 6.10.0
 */
declare class BarcodeSelectionAutoSelectionStrategy extends DefaultSerializeable implements BarcodeSelectionStrategy {
    private type;
    /**
     * Creates a new {@link BarcodeSelectionAutoSelectionStrategy} instance.
     *
     * @since 6.10.0
     */
    static get autoSelectionStrategy(): BarcodeSelectionAutoSelectionStrategy;
}
/**
 * Barcodes are selected when aiming at them and tapping anywhere on the screen.
 *
 * @since 6.10.0
 */
declare class BarcodeSelectionManualSelectionStrategy extends DefaultSerializeable implements BarcodeSelectionStrategy {
    private type;
    /**
     * Creates a new {@link BarcodeSelectionManualSelectionStrategy} instance.
     *
     * @since 6.10.0
     */
    static get manualSelectionStrategy(): BarcodeSelectionManualSelectionStrategy;
}
declare class PrivateBarcodeSelectionStrategy {
    static fromJSON(json: {
        type: BarcodeSelectionStrategyType;
    }): BarcodeSelectionStrategy;
}

/**
 * The interface for all barcode selection types. Possible selection types are:
 *
 * - {@link BarcodeSelectionAimerSelection}
 * - {@link BarcodeSelectionTapSelection}
 *
 * @since 6.10.0
 */
interface BarcodeSelectionType {
}
type BarcodeSelectionTypeJSON = {
    type: BarcodeSelectionTypeName.Aimer;
    selectionStrategy: BarcodeSelectionStrategyType;
    aimerBehavior?: BarcodeSelectionAimerBehavior;
} | {
    type: BarcodeSelectionTypeName.Tap;
    freezeBehavior: BarcodeSelectionFreezeBehavior;
    tapBehavior: BarcodeSelectionTapBehavior;
};
/**
 * Tap based selection, customizable via {@link BarcodeSelectionTapSelection.freezeBehavior} and {@link BarcodeSelectionTapSelection.tapBehavior}.
 *
 * @since 6.10.0
 */
declare class BarcodeSelectionTapSelection extends DefaultSerializeable implements BarcodeSelectionType {
    /**
     * Freeze behavior to use, defaults to {@link BarcodeSelectionFreezeBehavior.Manual}
     *
     * @since 6.10.0
     */
    freezeBehavior: BarcodeSelectionFreezeBehavior;
    /** @since 6.10.0 */
    tapBehavior: BarcodeSelectionTapBehavior;
    private type;
    /**
     * Creates a new {@link BarcodeSelectionTapSelection} instance.
     *
     * @since 6.10.0
     */
    static get tapSelection(): BarcodeSelectionTapSelection;
    private static get barcodeSelectionDefaults();
    /**
     * Creates a new {@link BarcodeSelectionTapSelection} instance with the specified {@link BarcodeSelectionFreezeBehavior} and {@link BarcodeSelectionTapBehavior}.
     *
     * @since 6.10.0
     */
    static withFreezeBehaviorAndTapBehavior(freezeBehavior: BarcodeSelectionFreezeBehavior, tapBehavior: BarcodeSelectionTapBehavior): BarcodeSelectionTapSelection;
}
/**
 * Aimer based selection, customizable via {@link BarcodeSelectionAimerSelection.selectionStrategy}.
 *
 * @since 6.10.0
 */
declare class BarcodeSelectionAimerSelection extends DefaultSerializeable implements BarcodeSelectionType {
    /**
     * The selection strategy to use. Defaults to {@link BarcodeSelectionManualSelectionStrategy}.
     *
     * @since 6.10.0
     */
    selectionStrategy: BarcodeSelectionStrategy;
    /**
     * Aimer behavior to use. Defaults to {@link BarcodeSelectionAimerBehavior.RepeatSelection}.
     *
     * @since 8.7.0
     */
    aimerBehavior: BarcodeSelectionAimerBehavior;
    private type;
    /**
     * Creates a new {@link BarcodeSelectionAimerSelection} instance.
     *
     * @since 6.10.0
     */
    static get aimerSelection(): BarcodeSelectionAimerSelection;
    private static get barcodeSelectionDefaults();
    /**
     * Creates a new {@link BarcodeSelectionAimerSelection} instance with the specified {@link BarcodeSelectionAimerBehavior}.
     *
     * @since 8.7.0
     */
    static withAimerBehavior(aimerBehavior: BarcodeSelectionAimerBehavior): BarcodeSelectionAimerSelection;
    private constructor();
}
declare class PrivateBarcodeSelectionType {
    static fromJSON(json: BarcodeSelectionTypeJSON): BarcodeSelectionType;
}

/**
 * Holds all the barcode selection related settings, such as enabled symbologies and tap behavior. For the settings to take effect, they must be applied to a {@link BarcodeSelection|barcode selection} instance using BarcodeSelection.applySettings().
 *
 * @since 6.10.0
 */
declare class BarcodeSelectionSettings extends DefaultSerializeable {
    /**
     * Determines the time interval in which codes with the same symbology/data are considered not automatically selectable again (automatic selection can happen through {@link BarcodeSelectionSettings.singleBarcodeAutoDetection}). By default, when the same code (data, symbology) stays in view after just having been selected (manually or automatically) it will not be automatically selected again for 500 milliseconds. This property has no influence on manual selection by tapping. Use this property to change the interval or completely turn off duplicate filtering:
     *
     * - Setting this property to value smaller than zero, means that the same code will not be automatically selectable again until the selection has been stopped.
     * - Setting this property to a value of zero means that the same code will be automatically selectable again immediately. In use cases that includes automatic selection this is likely never wanted.
     * - Setting this property to a value larger than zero indicates the time that must pass between the same code to be automatically selected again.
     *
     * @since 6.10.0
     */
    codeDuplicateFilter: number;
    /**
     * If true, when a single barcode is tracked it’s automatically selected. Defaults to *false*.
     *
     * @since 6.10.0
     */
    singleBarcodeAutoDetection: boolean;
    /**
     * If false, selection through tap is disabled. Defaults to *true*. This property only has its effect when used with manual aimer selection.
     *
     * @since 8.6.0
     */
    tapGestureForSelectionEnabled: boolean;
    /**
     * This setting is used to define the method that {@link BarcodeSelection} will use to select barcodes. Defaults to {@link BarcodeSelectionTapSelection}.
     *
     * @since 6.10.0
     */
    selectionType: BarcodeSelectionType;
    private properties;
    private symbologies;
    private static get barcodeSelectionDefaults();
    /**
     * Returns the set of enabled symbologies.
     *
     * @since 6.10.0
     */
    get enabledSymbologies(): Symbology[];
    /**
     * Creates a new barcode selection settings instance. All symbologies are disabled. Make sure to enable the symbologies required by your app before applying the settings to {@link BarcodeSelection} with BarcodeSelection.applySettings().
     *
     * @since 6.10.0
     */
    constructor();
    /**
     * Gets {@link SymbologySettings} specific for the given {@link Symbology}.
     *
     * Note that modifying the returned object doesn’t automatically apply the changes to {@link BarcodeSelection}. After you made changes to the symbology settings, call BarcodeSelection.applySettings() with these {@link BarcodeSelectionSettings} to apply them.
     *
     * @since 6.10.0
     */
    settingsForSymbology(symbology: Symbology): SymbologySettings$1;
    /**
     * Sets property to the provided value. Use this method to set properties that are not yet part of a stable API. Properties set through this method may or may not be used or change in a future release.
     *
     * @since 6.10.0
     */
    setProperty(name: string, value: any): void;
    /**
     * Retrieves the value of a previously set property.
     *
     * @since 6.10.0
     */
    getProperty(name: string): any;
    /**
     * This function provides a convenient shortcut to enabling decoding of particular symbologies without having to go through {@link SymbologySettings}. By default, all symbologies are turned off and symbologies need to be explicitly enabled.
     *
     * @since 6.10.0
     */
    enableSymbologies(symbologies: Symbology[]): void;
    /**
     * This function provides a convenient shortcut to enabling/disabling decoding of a particular symbology without having to go through {@link SymbologySettings}.
     *
     * Some 1d barcode symbologies allow you to encode variable-length data. By default, the Scandit Data Capture SDK only scans barcodes in a certain length range.
     *
     * If your application requires scanning of one of these symbologies, and the length is falling outside the default range, you may need to adjust the {@link SymbologySettings.activeSymbolCounts|active symbol counts} for the symbology in addition to enabling it.
     *
     * @since 6.10.0
     */
    enableSymbology(symbology: Symbology, enabled: boolean): void;
}

interface BarcodeSelectionListenerControllerHost {
    readonly modeId: number;
    readonly isEnabled: boolean;
}



declare enum BarcodeSelectionListenerEvents {
    didUpdateSelection = "BarcodeSelectionListener.didUpdateSelection",
    didUpdateSession = "BarcodeSelectionListener.didUpdateSession"
}
declare class BarcodeSelectionListenerController extends BaseController<BarcodeProxy> {
    private host;
    private frameDataController;
    private adapter;
    private warnedOnceKeys;
    constructor(host: BarcodeSelectionListenerControllerHost);
    getCount(barcode: Barcode): Promise<number>;
    reset(): Promise<void>;
    selectUnselectedBarcodes(): Promise<void>;
    getFrameOrNull(frameId: string): ReturnType<FrameDataController['getFrameOrNull']>;
    private parsePayloadTolerantly;
    private logOnce;
    handleDidUpdateSelection(data: Record<string, unknown>, notify: (session: BarcodeSelectionSession) => Promise<void>): Promise<void>;
    handleDidUpdateSession(data: Record<string, unknown>, notify: (session: BarcodeSelectionSession) => Promise<void>): Promise<void>;
    private parseDidUpdateSession;
    private parseDidUpdateSelection;
    private finishDidUpdateSession;
    private finishDidUpdateSelection;
    private logHandlerFailure;
    private get modeId();
}



interface BarcodeSelectionControllerModeHost {
    readonly modeId: number;
    toJSON(): BarcodeSelection$1;
}



declare class BarcodeSelectionController extends BaseController<BarcodeProxy> {
    private barcodeSelection;
    private adapter;
    constructor(barcodeSelection: BarcodeSelectionControllerModeHost);
    unfreezeCamera(): Promise<void>;
    reset(): Promise<void>;
    selectAimedBarcode(): Promise<void>;
    unselectBarcodes(barcodes: Barcode[]): Promise<void>;
    setSelectBarcodeEnabled(barcode: Barcode, enabled: boolean): Promise<void>;
    increaseCountForBarcodes(barcodes: Barcode[]): Promise<void>;
    setModeEnabledState(enabled: boolean): Promise<void>;
    updateBarcodeSelectionMode(barcodeSelection: BarcodeSelectionControllerModeHost): Promise<void>;
    applyBarcodeSelectionModeSettings(newSettings: BarcodeSelectionSettings): Promise<void>;
    updateFeedback(feedbackJson: string): Promise<void>;
    getBarcodeSelectionLicenseInfo(): Promise<BarcodeSelectionLicenseInfo | null>;
    private get modeId();
    private convertBarcodesToJson;
}



/**
 * Data capture mode that implements barcode selection.
 *
 * Learn more on how to use Barcode Selection in our [Get Started](https://docs.scandit.com/sdks/react-native/barcode-selection/get-started) guide.
 *
 * @since 6.10.0
 */
declare class BarcodeSelection extends ModeBase<BarcodeSelectionController, BarcodeSelectionListenerController> implements DataCaptureMode {
    private static get barcodeSelectionDefaults();
    protected type: string;
    private parentId;
    private _isEnabled;
    private _feedback;
    private _pointOfInterest;
    private settings;
    private get asHost();
    /**
     * Returns the recommended camera settings for use with barcode selection.
     *
     * @since 7.6.0
     */
    static createRecommendedCameraSettings(): CameraSettings$1;
    protected createController(): BarcodeSelectionController;
    private get asListenerControllerHost();
    protected createListenerController(): BarcodeSelectionListenerController;
    /**
     * Constructs a new BarcodeSelection instance with the provided settings.
     *
     * @since 7.6.0
     */
    constructor(settings: BarcodeSelectionSettings);
    /**
     * Implemented from {@link DataCaptureMode}. See {@link DataCaptureMode.context}.
     *
     * @since 6.10.0
     */
    get context(): DataCaptureContext | null;
    /**
     * Implemented from {@link DataCaptureMode}. See {@link DataCaptureMode.isEnabled}.
     *
     * @since 6.10.0
     */
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    /**
     * Instance of {@link BarcodeSelectionFeedback} that is used by barcode selection to notify users about the selection of a barcode.
     *
     * The default instance of the Feedback will have the sound enabled but no vibration. A default click tone will be used for the sound.
     *
     * To change the feedback emitted, the {@link BarcodeSelectionFeedback} can be modified as shown below, or a new one can be assigned.
     *
     * ```jsx
     * const barcodeSelection = ...;
     * const feedback = BarcodeSelectionFeedback.defaultFeedback;
     * feedback.success = new Feedback(Vibration.defaultVibration, null);
     * barcodeSelection.feedback = feedback;
     * ```
     *
     * @since 6.10.0
     */
    get feedback(): BarcodeSelectionFeedback;
    set feedback(feedback: BarcodeSelectionFeedback);
    /**
     * The point of interest overwriting the {@link DataCaptureView.pointOfInterest|point of interest of the data capture view}. By default, this overwriting point of interest is not set and the one from the data capture view is used.
     *
     * @since 6.10.0
     */
    get pointOfInterest(): PointWithUnit | null;
    set pointOfInterest(pointOfInterest: PointWithUnit | null);
    /**
     * Asynchronously applies the new settings to the barcode selection. If the barcode selection is currently running, the task will complete when the next frame is processed, and will use the new settings for that frame. If the barcode selection is currently *not* running, the task will complete as soon as the settings have been stored and won’t wait until the next frame is going to be processed.
     *
     * @since 6.10.0
     */
    applySettings(settings: BarcodeSelectionSettings): Promise<void>;
    private get listeners();
    /**
     * Adds the listener to this barcode selection instance.
     *
     * In case the same listener is already observing this instance, calling this method will not add the listener again.
     *
     * @since 6.10.0
     */
    addListener(listener: BarcodeSelectionListener): Promise<void>;
    private notifyListenersOfDidUpdateSelection;
    private notifyListenersOfDidUpdateSession;
    /**
     * Removes a previously added listener from this barcode selection instance.
     *
     * In case the listener is not currently observing this instance, calling this method has no effect.
     *
     * @since 6.10.0
     */
    removeListener(listener: BarcodeSelectionListener): Promise<void>;
    /**
     * Asynchronously resets the barcode selection session, effectively clearing the history of selected codes.
     *
     * @since 6.10.0
     */
    reset(): Promise<void>;
    /**
     * Unfreeze the camera.
     *
     * @since 6.10.0
     */
    unfreezeCamera(): Promise<void>;
    /**
     * Select the barcode being aimed at. Only use this with manual aimer selection.
     *
     * @since 6.16.0
     */
    selectAimedBarcode(): Promise<void>;
    /**
     * Removes the barcodes from the list of selected barcodes.
     *
     * @since 6.17.0
     */
    unselectBarcodes(barcodes: Barcode[]): Promise<void>;
    /**
     * Enables or disables the selection of a barcode.
     *
     * @since 6.17.0
     */
    setSelectBarcodeEnabled(barcode: Barcode, enabled: boolean): Promise<void>;
    /**
     * Increments the count of how many times the given barcodes have been selected.
     *
     * @since 6.17.0
     */
    increaseCountForBarcodes(barcodes: Barcode[]): Promise<void>;
    /**
     * Async getter for the barcode-selection license info. Returns *null* until the mode has been added to a {@link DataCaptureContext} with a license that covers barcode selection.
     *
     * @since 8.6.0
     */
    getBarcodeSelectionLicenseInfo(): Promise<BarcodeSelectionLicenseInfo | null>;
}

/**
 * The style of the {@link BarcodeSelectionBasicOverlay}.
 *
 * @since 6.10.0
 */
declare enum BarcodeSelectionBasicOverlayStyle {
    /**
     * Style that draws the highlights as a rectangular frame and adds an animation for when a code newly appears.
     *
     * @since 6.10.0
     */
    Frame = "frame",
    /**
     * Style that draws the highlights as a dot and adds an animation for when a code newly appears.
     *
     * @since 6.10.0
     */
    Dot = "dot"
}

/**
 * Interface for applying custom brushes to recognized barcodes.
 *
 * @since 6.17.0
 */
interface BarcodeSelectionBrushProvider {
    /**
     * Returns the brush to apply to the given barcode. A non-*null* brush returned by this method overrides any other brush set for the barcode.
     *
     * @since 6.17.0
     */
    brushForBarcode?(barcode: Barcode): Brush$1 | null;
}



/**
 * An overlay for {@link DataCaptureView} that shows a simple augmentation over each selected barcode.
 *
 * To display the augmentations, this overlay must be attached to a {@link DataCaptureView}. This can be done by passing this overlay to {@link DataCaptureView.addOverlay}.
 *
 * A user of this class may configure the appearance of the augmentations by configuring the brush properties.
 *
 * @since 6.10.0
 */
declare class BarcodeSelectionBasicOverlay extends DefaultSerializeable implements DataCaptureOverlay {
    private type;
    private aimedBrushProvider;
    private trackedBrushProvider;
    private hasAimedBrushProvider;
    private hasTrackedBrushProvider;
    private controller;
    private _view;
    private modeId;
    private get asHost();
    private get view();
    private set view(value);
    private _shouldShowScanAreaGuides;
    private _shouldShowHints;
    private _viewfinder;
    private _style;
    private _textForSelectOrDoubleTapToFreezeHint?;
    private _textForTapToSelectHint?;
    private _textForDoubleTapToUnfreezeHint?;
    private _textForTapAnywhereToSelectHint?;
    private _trackedBrush;
    private _aimedBrush;
    private _selectedBrush;
    private _selectingBrush;
    /**
     * The brush applied to recognized tracked barcodes. Setting this brush to {@link Brush.transparent} hides all tracked barcodes.
     *
     * @since 6.10.0
     */
    get trackedBrush(): Brush$1;
    set trackedBrush(newBrush: Brush$1);
    /**
     * The brush applied to the barcode that is currently being aimed at.
     *
     * @since 6.10.0
     */
    get aimedBrush(): Brush$1;
    set aimedBrush(newBrush: Brush$1);
    /**
     * The brush applied to selected barcodes. Setting this brush to {@link Brush.transparent} hides all selected barcodes.
     *
     * @since 6.10.0
     */
    get selectedBrush(): Brush$1;
    set selectedBrush(newBrush: Brush$1);
    /**
     * The brush applied to the barcodes for the short moment when they are being selected.
     *
     * @since 6.10.0
     */
    get selectingBrush(): Brush$1;
    set selectingBrush(newBrush: Brush$1);
    /**
     * When set to *true*, this overlay will visualize the active scan area used for BarcodeSelection. This is useful to check {@link DataCaptureView.scanAreaMargins|margins} defined on the {@link DataCaptureView} are set correctly. This property is meant for debugging during development and is not intended for use in production.
     *
     * By default this property is *false*.
     *
     * @since 6.10.0
     */
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    /**
     * When set to *true*, this overlay will visualize some hints explaining how to use barcode selection.
     *
     * By default this property is *true*.
     *
     * @since 6.10.0
     */
    get shouldShowHints(): boolean;
    set shouldShowHints(shouldShow: boolean);
    /**
     * The viewfinder of the overlay. The viewfinder is only visible when the selection type is {@link BarcodeSelectionAimerSelection}.
     *
     * @since 6.10.0
     */
    get viewfinder(): Viewfinder$1;
    /**
     * The overlay style. Defaults to Frame.
     *
     * @since 6.10.0
     */
    get style(): BarcodeSelectionBasicOverlayStyle;
    private _frozenBackgroundColor;
    /**
     * The overlay’s background color when in frozen state. This color will be on top of the video preview but below the highlights. Semitransparent black by default.
     *
     * @since 8.7.0
     */
    get frozenBackgroundColor(): Color$1;
    set frozenBackgroundColor(newColor: Color$1);
    private static get barcodeSelectionDefaults();
    /**
     * Constructs a new BarcodeSelectionBasicOverlay. For the overlay to be displayed on screen, it must be added to a {@link DataCaptureView}.
     *
     * @since 7.6.0
     */
    constructor(mode: BarcodeSelection, style?: BarcodeSelectionBasicOverlayStyle);
    private static brushForStyle;
    /**
     * Returns the default tracked brush for the given style.
     *
     * @since 8.7.0
     */
    static defaultTrackedBrushForStyle(style: BarcodeSelectionBasicOverlayStyle): Brush$1;
    /**
     * Returns the default aimed brush for the given style.
     *
     * @since 8.7.0
     */
    static defaultAimedBrushForStyle(style: BarcodeSelectionBasicOverlayStyle): Brush$1;
    /**
     * Returns the default selected brush for the given style.
     *
     * @since 8.7.0
     */
    static defaultSelectedBrushForStyle(style: BarcodeSelectionBasicOverlayStyle): Brush$1;
    /**
     * Returns the default selecting brush for the given style.
     *
     * @since 8.7.0
     */
    static defaultSelectingBrushForStyle(style: BarcodeSelectionBasicOverlayStyle): Brush$1;
    /**
     * Sets the text of the hint which suggests to aim at a barcode to scan it.
     *
     * @since 6.19.0
     */
    setTextForAimToSelectAutoHint(text: string): Promise<void>;
    /**
     * Sets the select-or-double-tap-to-freeze hint text.
     *
     * Takes effect only while the overlay has not yet been added to a DataCaptureView:
     * native reads this text from the overlay's own JSON at overlay-add time, and no bridge
     * command exists to update it afterwards. Setting it on an already-attached overlay
     * resolves without changing the displayed hint.
     *
     * The controller push below is kept for symmetry with the other serialized setters, and so the
     * value rides along on any later overlay re-serialization; it is deliberately not the mechanism
     * that delivers the hint.
     *
     * Sets the text of the hint which suggests to use double tap gesture to freeze capture view.
     *
     * On JavaScript-based frameworks and Flutter, this takes effect only if called before the overlay is added to the {@link DataCaptureView}.
     *
     * @since 8.7.0
     */
    setTextForSelectOrDoubleTapToFreezeHint(text: string): Promise<void>;
    /**
     * Sets the tap-to-select hint text.
     *
     * Takes effect only while the overlay has not yet been added to a DataCaptureView:
     * native reads this text from the overlay's own JSON at overlay-add time, and no bridge
     * command exists to update it afterwards. Setting it on an already-attached overlay
     * resolves without changing the displayed hint.
     *
     * The controller push below is kept for symmetry with the other serialized setters, and so the
     * value rides along on any later overlay re-serialization; it is deliberately not the mechanism
     * that delivers the hint.
     *
     * Sets the text of the hint which suggests to use tap gesture to select barcodes.
     *
     * On JavaScript-based frameworks and Flutter, this takes effect only if called before the overlay is added to the {@link DataCaptureView}.
     *
     * @since 8.7.0
     */
    setTextForTapToSelectHint(text: string): Promise<void>;
    /**
     * Sets the double-tap-to-unfreeze hint text.
     *
     * Takes effect only while the overlay has not yet been added to a DataCaptureView:
     * native reads this text from the overlay's own JSON at overlay-add time, and no bridge
     * command exists to update it afterwards. Setting it on an already-attached overlay
     * resolves without changing the displayed hint.
     *
     * The controller push below is kept for symmetry with the other serialized setters, and so the
     * value rides along on any later overlay re-serialization; it is deliberately not the mechanism
     * that delivers the hint.
     *
     * Sets the text of the hint which suggests to use double tap gesture to unfreeze capture view.
     *
     * On JavaScript-based frameworks and Flutter, this takes effect only if called before the overlay is added to the {@link DataCaptureView}.
     *
     * @since 8.7.0
     */
    setTextForDoubleTapToUnfreezeHint(text: string): Promise<void>;
    /**
     * Sets the tap-anywhere-to-select hint text.
     *
     * Takes effect only while the overlay has not yet been added to a DataCaptureView:
     * native reads this text from the overlay's own JSON at overlay-add time, and no bridge
     * command exists to update it afterwards. Setting it on an already-attached overlay
     * resolves without changing the displayed hint.
     *
     * The controller push below is kept for symmetry with the other serialized setters, and so the
     * value rides along on any later overlay re-serialization; it is deliberately not the mechanism
     * that delivers the hint.
     *
     * Sets the text of the hint which suggests to use tap gesture anywhere on the screen to select.
     *
     * On JavaScript-based frameworks and Flutter, this takes effect only if called before the overlay is added to the {@link DataCaptureView}.
     *
     * @since 8.7.0
     */
    setTextForTapAnywhereToSelectHint(text: string): Promise<void>;
    /**
     * Clears all currently displayed visualizations for the on screen barcodes.
     *
     * This only applies to the currently displayed barcodes, the visualizations for the new ones will still appear.
     *
     * @since 8.7.0
     */
    clearSelectedBarcodeBrushes(): Promise<void>;
    /**
     * Sets the brush provider for aimed barcode.
     *
     * @since 6.17.0
     */
    setAimedBarcodeBrushProvider(brushProvider: BarcodeSelectionBrushProvider | null): Promise<void>;
    /**
     * Sets the brush provider for tracked barcode.
     *
     * @since 6.17.0
     */
    setTrackedBarcodeBrushProvider(brushProvider: BarcodeSelectionBrushProvider | null): Promise<void>;
}



interface BarcodeSelectionOverlayControllerHost {
    readonly modeId: number;
    toJSON(): BarcodeSelectionBasicOverlay$1;
}



declare enum BarcodeSelectionBrushProviderEvents {
    brushForAimedBarcode = "BarcodeSelectionAimedBrushProvider.brushForBarcode",
    brushForTrackedBarcode = "BarcodeSelectionTrackedBrushProvider.brushForBarcode"
}
declare class BarcodeSelectionOverlayController extends BaseController<BarcodeProxy> {
    private overlay;
    private adapter;
    private isTrackedBrushProviderRegistered;
    private aimedBrushProvider;
    private trackedBrushProvider;
    private warnedOnceKeys;
    constructor(overlay: BarcodeSelectionOverlayControllerHost);
    setTextForAimToSelectAutoHint(text: string): Promise<void>;
    clearSelectedBarcodeBrushes(): Promise<void>;
    setAimedBarcodeBrushProvider(brushProvider: BarcodeSelectionBrushProvider | null): Promise<void>;
    setTrackedBarcodeBrushProvider(brushProvider: BarcodeSelectionBrushProvider | null): Promise<void>;
    updateBarcodeSelectionBasicOverlay(overlay: BarcodeSelectionOverlayControllerHost): Promise<void>;
    unsubscribeProviders(): Promise<void>;
    dispose(): void;
    private initialize;
    private parsePayloadTolerantly;
    private logOnce;
    private handleBrushForAimedBarcode;
    private handleBrushForTrackedBarcode;
    private handleBrushForTrackedBarcodeWrapper;
}

/**
 * Determines what feedback (vibration, sound) should be emitted when barcodes are scanned.
 *
 * The feedback is specified for each BarcodeCount instance separately and can be changed through the feedback property by either modifying an existing instance of this class, or by assigning a new one.
 *
 * As of now, this class allows to configure the feedback that gets emitted when barcodes are read successfully, through the {@link BarcodeCountFeedback.success} property, and a feedback that gets emitted when barcodes are not read successfully, through the {@link BarcodeCountFeedback.failure} property.
 *
 * See documentation on the {@link BarcodeCount.feedback} property for usage samples.
 *
 * @since 6.17.0
 */
declare class BarcodeCountFeedback extends DefaultSerializeable {
    private static get barcodeCountDefaults();
    private dispatchUpdate;
    private _success;
    private _failure;
    /**
     * Returns a barcode count feedback with default configuration:
     *
     * - default beep sound is loaded,
     * - beeping for the success event is enabled,
     * - vibration for the success event is enabled,
     * - beeping for the failure event is enabled,
     * - vibration for the failure event is enabled.
     *
     * @since 6.17.0
     */
    static get default(): BarcodeCountFeedback;
    /**
     * Empty constructor. Constructs a new feedback that will not emit any sound, nor vibration.
     *
     * @since 7.1.0
     */
    static get emptyFeedback(): BarcodeCountFeedback;
    private static fromJSON;
    private constructor();
    /**
     * A {@link Feedback} for a success event.
     *
     * @since 6.17.0
     */
    get success(): Feedback$1;
    set success(success: Feedback$1);
    /**
     * A {@link Feedback} for a failure event.
     *
     * @since 6.17.0
     */
    get failure(): Feedback$1;
    set failure(failure: Feedback$1);
    private updateFeedback;
}
interface BarcodeCountFeedbackJSON {
    success: Feedback$1;
    failure: Feedback$1;
}

/** @since 6.17.0 */
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
    /**
     * Creates a new barcode count settings instance. This initializer allows enabling or disabling the scan preview at construction. When using the default initializer, scan preview is disabled by default.
     *
     * Scan preview allows you to see the barcodes that are being detected before pressing the shutter button, but these won’t be added to the scanning result yet. Pressing the shutter button will scan the barcodes that are visible in the preview.
     *
     * When scan preview is enabled, basic scanning, scanning against a list, status mode, group scanning, and the not-in-list action are supported. Filtering is not supported with scan preview.
     *
     * The Barcode Count scan preview API is still in beta and may change in future versions of Scandit Data Capture SDK.
     *
     * @since 6.17.0
     */
    constructor(scanPreviewEnabled?: boolean);
    /**
     * Declares whether or not the barcodes to be tracked are expected to be unique. If enabled optimizations can be used to improve Barcode Count.
     *
     * Default value is *false*.
     *
     * Do not enable this if you are expecting to scan multiple barcodes with the same content within one batch.
     *
     * @since 6.17.0
     */
    get expectsOnlyUniqueBarcodes(): boolean;
    set expectsOnlyUniqueBarcodes(expectsOnlyUniqueBarcodes: boolean);
    /**
     * Use this property to enable barcode mapping.
     *
     * Default value is *false*.
     *
     * The Barcode Count mapping API is still in beta and may change in future versions of Scandit Data Capture SDK.
     *
     * @since 6.19.0
     */
    get mappingEnabled(): boolean;
    set mappingEnabled(mappingEnabled: boolean);
    /**
     * Declares whether or not the mode will be disabled automatically when the provided capture list has been completed. If no list has been provided, this has no effect.
     *
     * Default value is *false*.
     *
     * @since 8.3.0
     */
    get disableModeWhenCaptureListCompleted(): boolean;
    set disableModeWhenCaptureListCompleted(disable: boolean);
    /**
     * Clustering mode allows smart grouping of neighbouring barcodes. Default to {@link ClusteringMode.Disabled}.
     *
     * @since 8.3.0
     */
    get clusteringMode(): ClusteringMode;
    set clusteringMode(mode: ClusteringMode);
    /**
     * Returns the state of the scan preview. Can only be set during initialization.
     *
     * @since 8.3.0
     */
    get scanPreviewEnabled(): boolean;
    /**
     * Returns the current settings for barcode filtering.
     *
     * @since 6.17.0
     */
    get filterSettings(): BarcodeFilterSettings;
    /**
     * Returns the set of enabled symbologies.
     *
     * @since 6.17.0
     */
    get enabledSymbologies(): Symbology[];
    /**
     * Gets {@link SymbologySettings} specific for the given {@link Symbology}.
     *
     * Note that modifying the returned object doesn’t automatically apply the changes to {@link BarcodeCount}. After you made changes to the symbology settings, call BarcodeCount.applySettings() with these {@link BarcodeCountSettings} to apply them.
     *
     * @since 6.17.0
     */
    settingsForSymbology(symbology: Symbology): SymbologySettings$1;
    /**
     * This function provides a convenient shortcut to enabling decoding of particular symbologies without having to go through {@link SymbologySettings}. By default, all symbologies are turned off and symbologies need to be explicitly enabled.
     *
     * @since 6.17.0
     */
    enableSymbologies(symbologies: Symbology[]): void;
    /**
     * This function provides a convenient shortcut to enabling/disabling decoding of a particular symbology without having to go through {@link SymbologySettings}.
     *
     * Some 1d barcode symbologies allow you to encode variable-length data. By default, the Scandit Data Capture SDK only scans barcodes in a certain length range.If your application requires scanning of one of these symbologies, and the length is falling outside the default range, you may need to adjust the {@link SymbologySettings.activeSymbolCounts|active symbol counts} for the symbology in addition to enabling it.
     *
     * @since 6.17.0
     */
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    /**
     * Sets property to the provided value. Use this method to set properties that are not yet part of a stable API. Properties set through this method may or may not be used or change in a future release.
     *
     * @since 6.17.0
     */
    setProperty(name: string, value: any): void;
    /**
     * Retrieves the value of a previously set property.
     *
     * @since 6.17.0
     */
    getProperty(name: string): any;
}

/**
 * The count session contains all the currently tracked barcodes and changes that were made specifically in the last processed frame.
 *
 * The count session should only be accessed from within didScan() to which it is provided as an argument. It is not safe to be accessed from anywhere else since it may be concurrently modified.Specifically no reference to {@link BarcodeCountSession.recognizedBarcodes} should be kept and traversed outside of didScan(). Instead a copy of the lists should be made to avoid concurrent modification. The individual tracked barcodes can be referenced without copying as they are not further modified.
 *
 * @since 6.17.0
 */
declare class BarcodeCountSession extends DefaultSerializeable {
    private _recognizedBarcodes;
    private _additionalBarcodes;
    private _recognizedClusters;
    private _frameSequenceID;
    private sessionController;
    private frameId;
    private static fromJSON;
    private constructor();
    /**
     * A list containing all currently recognized barcodes.
     *
     * @since 7.0.0
     */
    get recognizedBarcodes(): Barcode[];
    /**
     * The array of additional barcodes injected with {@link BarcodeCount.setAdditionalBarcodes}.
     *
     * @since 6.17.0
     */
    get additionalBarcodes(): Barcode[];
    /**
     * A list containing all currently recognized clusters.
     *
     * @since 8.3.0
     */
    get recognizedClusters(): Cluster[];
    /**
     * The identifier of the current frame sequence.
     *
     * As long as there is no interruptions of frames coming from the camera, the {@link BarcodeCountSession.frameSequenceID} will stay the same.
     *
     * @since 6.17.0
     */
    get frameSequenceID(): number;
    /**
     * Resets the barcode count session, effectively clearing the history of recognized barcodes. This function should only be called inside the listeners’ callback.
     *
     * @since 6.17.0
     */
    reset(): Promise<void>;
    /**
     * Computes the spatial map with the current session data. If a value is returned by this method the scanning is automatically suspended. Returns *null* if {@link BarcodeCountSettings.mappingEnabled} is *false*.
     *
     * The Barcode Count mapping API is still in beta and may change in future versions of Scandit Data Capture SDK.
     *
     * @since 6.19.0
     */
    getSpatialMap(): Promise<BarcodeSpatialGrid | null>;
    /**
     * Computes the spatial map with the current session data, using the passed values as hints. If a value is returned by this method the scanning is automatically suspended. Returns *null* if {@link BarcodeCountSettings.mappingEnabled} is *false*.
     *
     * The Barcode Count mapping API is still in beta and may change in future versions of Scandit Data Capture SDK.
     *
     * @since 6.19.0
     */
    getSpatialMapWithHints(expectedNumberOfRows: number, expectedNumberOfColumns: number): Promise<BarcodeSpatialGrid | null>;
}
interface BarcodeCountSessionJSON {
    recognizedBarcodes: BarcodeJSON[];
    additionalBarcodes: Barcode[];
    recognizedClusters?: any[];
    frameSequenceId: number;
}




/**
 * The BarcodeCount listener is the main way for hooking into BarcodeCount. It provides a callback that is invoked when the state of tracked barcodes changes.
 *
 * @since 6.17.0
 */
interface BarcodeCountListener {
    /**
     * Invoked once scanning phase is over.
     *
     * @since 6.17.0
     */
    didScan?(barcodeCount: BarcodeCount, session: BarcodeCountSession, getFrameData: () => Promise<FrameData | null>): Promise<void>;
    /**
     * Invoked whenever the session has been updated.
     *
     * @since 8.3.0
     */
    onSessionUpdated?(barcodeCount: BarcodeCount, session: BarcodeCountSession, getFrameData: () => Promise<FrameData | null>): Promise<void>;
}

/**
 * The capture list session contains all the barcodes recognised so far, and how they match against the target list.
 *
 * @since 6.17.0
 */
declare class BarcodeCountCaptureListSession extends DefaultSerializeable {
    /**
     * A list of tracked barcodes that have been correctly matched to the target data provided in the list.
     *
     * @since 6.17.0
     */
    get correctBarcodes(): TrackedBarcode[];
    /**
     * A list of tracked barcodes that have been correctly scanned, but that don’t match any of the ones provided in the list.
     *
     * @since 6.17.0
     */
    get wrongBarcodes(): TrackedBarcode[];
    /**
     * A list of the barcodes in the target list that have not yet been correctly scanned. If no list was provided to {@link BarcodeCountCaptureList}, this list will be empty.
     *
     * @since 6.17.0
     */
    get missingBarcodes(): TargetBarcode[];
    /**
     * The array of additional barcodes injected with {@link BarcodeCount.setAdditionalBarcodes}.
     *
     * @since 6.17.0
     */
    get additionalBarcodes(): Barcode[];
    /**
     * A list of tracked barcodes that have been marked as accepted.
     *
     * @since 7.1.0
     */
    get acceptedBarcodes(): TrackedBarcode[];
    /**
     * A list of tracked barcodes that have been marked as rejected.
     *
     * @since 7.1.0
     */
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




/**
 * The BarcodeCountCaptureList listener is the main way for hooking into {@link BarcodeCountCaptureList}. It provides a callback that is invoked when the state of target barcodes changes.
 *
 * @since 6.17.0
 */
interface BarcodeCountCaptureListListener {
    /**
     * Called after a frame processed by {@link BarcodeCountCaptureList} has caused the list to be updated.
     *
     * @since 6.17.0
     */
    didUpdateSession?(barcodeCountCaptureList: BarcodeCountCaptureList, session: BarcodeCountCaptureListSession): void;
    /**
     * Called after when all the barcodes in the {@link BarcodeCountCaptureList} have been scanned.
     *
     * @since 8.3.0
     */
    didCompleteCaptureList?(barcodeCountCaptureList: BarcodeCountCaptureList, session: BarcodeCountCaptureListSession): void;
}



/**
 * Component for {@link BarcodeCount} that allows it to scan against a list of expected barcodes.
 *
 * @since 6.17.0
 */
declare class BarcodeCountCaptureList {
    private listener;
    private targetBarcodes;
    private _barcodeDataTransformer;
    /**
     * Constructs a new capture list component and sets an initial list of target barcodes to search for. This list may be null.
     *
     * @since 6.17.0
     */
    static create(listener: BarcodeCountCaptureListListener, targetBarcodes: TargetBarcode[]): BarcodeCountCaptureList;
    private constructor();
    /**
     * Sets a barcode data transformer for this instance of BarcodeCountCaptureList. The transformer will be applied to transform the barcode data before matching to the target barcodes.
     *
     * @since 8.3.0
     */
    setBarcodeDataTransformer(transformer: BarcodeDataTransformer | null): void;
}
interface PrivateBarcodeCountCaptureList {
    targetBarcodes: TargetBarcode[];
    listener: BarcodeCountCaptureListListener;
    _barcodeDataTransformer: BarcodeDataTransformer | null;
}

/**
 * Immutable copy of a {@link BarcodeCountSession} captured at a specific point in time. Provided to button-tap delegate callbacks on {@link BarcodeCountViewUiListener} so the host app can inspect the session state on the main thread without violating the requirement that {@link BarcodeCountSession} only be accessed inside didScan().
 *
 * The snapshot mirrors the public read-only state of the session at construction time. The SDK does not mutate the snapshot afterwards; subsequent scans do not affect any previously delivered snapshot.
 *
 * @since 8.7.0
 */
declare class BarcodeCountSessionSnapshot extends DefaultSerializeable {
    /**
     * A list of the barcodes that were recognized when the snapshot was taken. This mirrors {@link BarcodeCountSession.recognizedBarcodes} semantics — both currently tracked and cleared barcodes are included.
     *
     * On these platforms the list comes from the session’s own serialization, which does not include cleared barcodes — matching what {@link BarcodeCountSession} already exposes here.
     *
     * @since 8.7.0
     */
    get recognizedBarcodes(): Barcode[];
    /**
     * The additional barcodes injected with {@link BarcodeCount.setAdditionalBarcodes} at the time of the snapshot.
     *
     * @since 8.7.0
     */
    get additionalBarcodes(): Barcode[];
    /**
     * A list containing the clusters that were recognized when the snapshot was taken.
     *
     * @since 8.7.0
     */
    get recognizedClusters(): Cluster[];
    /**
     * The identifier of the frame sequence at the time of the snapshot.
     *
     * @since 8.7.0
     */
    get frameSequenceId(): number;
    private _recognizedBarcodes;
    private _additionalBarcodes;
    private _recognizedClusters;
    private _frameSequenceId;
    private static fromJSON;
    private constructor();
}
interface BarcodeCountSessionSnapshotJSON {
    recognizedBarcodes?: BarcodeJSON[];
    additionalBarcodes?: BarcodeJSON[];
    recognizedClusters?: ClusterJSON[];
    frameSequenceId?: number;
}
interface PrivateBarcodeCountSessionSnapshot {
    fromJSON(json: BarcodeCountSessionSnapshotJSON): BarcodeCountSessionSnapshot;
}










interface BarcodeCountViewControllerUiListenerHost {
    didTapListButton?(view: unknown, snapshot: BarcodeCountSessionSnapshot | null): void;
    didTapExitButton?(view: unknown, snapshot: BarcodeCountSessionSnapshot | null): void;
    didTapSingleScanButton?(view: unknown): void;
}
interface BarcodeCountViewControllerListenerHost {
    brushForRecognizedBarcode?(view: unknown, trackedBarcode: TrackedBarcode): Brush$1 | null;
    brushForRecognizedBarcodeNotInList?(view: unknown, trackedBarcode: TrackedBarcode): Brush$1 | null;
    brushForAcceptedBarcode?(view: unknown, trackedBarcode: TrackedBarcode): Brush$1 | null;
    brushForRejectedBarcode?(view: unknown, trackedBarcode: TrackedBarcode): Brush$1 | null;
    iconForRecognizedBarcode?(view: unknown, trackedBarcode: TrackedBarcode): BarcodeCountIcon | null;
    iconForRecognizedBarcodeNotInList?(view: unknown, trackedBarcode: TrackedBarcode): BarcodeCountIcon | null;
    iconForAcceptedBarcode?(view: unknown, trackedBarcode: TrackedBarcode): BarcodeCountIcon | null;
    iconForRejectedBarcode?(view: unknown, trackedBarcode: TrackedBarcode): BarcodeCountIcon | null;
    didTapRecognizedBarcode?(view: unknown, trackedBarcode: TrackedBarcode): void;
    didTapFilteredBarcode?(view: unknown, filteredBarcode: TrackedBarcode): void;
    didTapRecognizedBarcodeNotInList?(view: unknown, trackedBarcode: TrackedBarcode): void;
    didTapAcceptedBarcode?(view: unknown, trackedBarcode: TrackedBarcode): void;
    didTapRejectedBarcode?(view: unknown, trackedBarcode: TrackedBarcode): void;
    didTapCluster?(view: unknown, cluster: Cluster): void;
    didCompleteCaptureList?(view: unknown): void;
}
interface BarcodeCountViewControllerViewHost {
    readonly viewId: number;
    readonly context: DataCaptureContext;
    readonly uiListener: BarcodeCountViewControllerUiListenerHost | null;
    readonly listener: BarcodeCountViewControllerListenerHost | null;
    readonly platformView: any;
    readonly recognizedBrush: Brush$1 | null;
    readonly notInListBrush: Brush$1 | null;
    readonly acceptedBrush: Brush$1 | null;
    readonly rejectedBrush: Brush$1 | null;
    whenViewCreated(): Promise<boolean>;
}

/**
 * A status for a {@link Barcode}
 *
 * @since 8.3.0
 */
declare enum BarcodeCountStatus {
    /**
     * No status.
     *
     * @since 8.3.0
     */
    None = "none",
    /**
     * Status that indicates an error retrieving the status.
     *
     * @since 8.3.0
     */
    NotAvailable = "notAvailable",
    /**
     * Status that indicates an expired item.
     *
     * @since 8.3.0
     */
    Expired = "expired",
    /**
     * Status that indicates a fragile item.
     *
     * @since 8.3.0
     */
    Fragile = "fragile",
    /**
     * Status that indicates a quality check is needed.
     *
     * @since 8.3.0
     */
    QualityCheck = "qualityCheck",
    /**
     * Status that indicates low stock of an item.
     *
     * @since 8.3.0
     */
    LowStock = "lowStock",
    /**
     * Status that indicates a wrong item.
     *
     * @since 8.3.0
     */
    Wrong = "wrong",
    /**
     * Status that indicates an item that will expire soon.
     *
     * @since 8.3.0
     */
    ExpiringSoon = "expiringSoon"
}

/**
 * A class that stores a {@link TrackedBarcode} alongside its associated status.
 *
 * @since 8.3.0
 */
declare class BarcodeCountStatusItem extends DefaultSerializeable {
    private _barcode;
    private _barcodeId;
    private _status;
    private _icon;
    /**
     * Constructs a new barcode count status item with a status.
     *
     * @since 8.3.0
     */
    static create(barcode: TrackedBarcode, status: BarcodeCountStatus): BarcodeCountStatusItem;
    /**
     * Constructs a new barcode count status item with an icon. Pass *null* for the icon to indicate that the barcode should not show any icon.
     *
     * @since 8.7.0
     */
    static createWithIcon(barcode: TrackedBarcode, icon: ScanditIcon | null): BarcodeCountStatusItem;
    private constructor();
    /**
     * The tracked barcode.
     *
     * @since 8.3.0
     */
    get barcode(): TrackedBarcode;
    /**
     * The status associated to the barcode. Items constructed with an icon instead of a status report {@link BarcodeCountStatus}.None.
     *
     * @since 8.3.0
     */
    get status(): BarcodeCountStatus;
    /**
     * The icon associated to the barcode.
     *
     * @since 8.7.0
     */
    get icon(): ScanditIcon | null;
}

/**
 * An interface representing an object used to provide a status list when calling {@link BarcodeCountStatusProviderCallback.onStatusReady}. Can be created using one of the creator methods {@link BarcodeCountStatusResultSuccess.create}, {@link BarcodeCountStatusResultError.create} or {@link BarcodeCountStatusResultAbort.create}.
 *
 * @since 8.3.0
 */
interface BarcodeCountStatusResult {
}
/** @since 8.3.0 */
declare class BarcodeCountStatusResultSuccess extends DefaultSerializeable implements BarcodeCountStatusResult {
    private _statusList;
    private _statusModeEnabledMessage;
    private _statusModeDisabledMessage;
    private readonly _type;
    /**
     * Creator method that constructs a {@link BarcodeCountStatusResult} representing success when retrieving the status for the required barcodes. statusModeEnabledMessage will be presented to the user after successfully enabling status mode, and statusModeDisabledMessage will be displayed when exiting it.
     *
     * @since 8.3.0
     */
    static create(statusList: BarcodeCountStatusItem[], statusModeEnabledMessage: string, statusModeDisabledMessage: string): BarcodeCountStatusResult;
    private constructor();
}
/** @since 8.3.0 */
declare class BarcodeCountStatusResultError extends DefaultSerializeable implements BarcodeCountStatusResult {
    private _statusList;
    private _errorMessage;
    private _statusModeDisabledMessage;
    private readonly _type;
    /**
     * Creator method that constructs a {@link BarcodeCountStatusResult} representing an error when retrieving the status for the required barcodes. errorMessage will be presented to the user after successfully enabling status mode, and statusModeDisabledMessage will be displayed when exiting it.
     *
     * @since 8.3.0
     */
    static create(statusList: BarcodeCountStatusItem[], errorMessage: string, statusModeDisabledMessage: string): BarcodeCountStatusResult;
    private constructor();
}
/** @since 8.3.0 */
declare class BarcodeCountStatusResultAbort extends DefaultSerializeable implements BarcodeCountStatusResult {
    private _errorMessage;
    private readonly _type;
    /**
     * Creator method that constructs a {@link BarcodeCountStatusResult} representing a critical failure when retrieving the status for the required barcodes. Will abort the status mode immediately, displaying errorMessage to the user.
     *
     * @since 8.3.0
     */
    static create(errorMessage: string): BarcodeCountStatusResult;
    private constructor();
}



interface BarcodeCountStatusProviderCallbackControllerHost {
    submitBarcodeCountStatusProviderCallback(statusResult: BarcodeCountStatusResult, requestId: string): Promise<void>;
}
/**
 * When BarcodeCount queries for a status list with {@link BarcodeCountStatusProvider.onStatusRequested}, an instance of this interface is provided to inform BarcodeCount of the result.
 *
 * @since 8.3.0
 */
declare class BarcodeCountStatusProviderCallback {
    private _controller;
    private _requestId;
    /**
     * This method must be called with the {@link BarcodeCountStatusResult} in order to enter status mode.
     *
     * @since 8.3.0
     */
    onStatusReady(statusResult: BarcodeCountStatusResult): Promise<void>;
}
interface PrivateBarcodeCountStatusProviderCallback {
    _controller: BarcodeCountStatusProviderCallbackControllerHost;
    _requestId: string;
}




/**
 * When enabling status mode, an instance of this interface must be provided.
 *
 * @since 8.3.0
 */
interface BarcodeCountStatusProvider {
    /**
     * This method will be called when the status for a group of barcodes is required. The implementation must call the callback to provide the status list.
     *
     * @since 8.3.0
     */
    onStatusRequested(barcodes: TrackedBarcode[], callback: BarcodeCountStatusProviderCallback): void;
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
    iconForRecognizedBarcode = "BarcodeCountViewListener.iconForRecognizedBarcode",
    iconForRecognizedBarcodeNotInList = "BarcodeCountViewListener.iconForRecognizedBarcodeNotInList",
    iconForAcceptedBarcode = "BarcodeCountViewListener.iconForAcceptedBarcode",
    iconForRejectedBarcode = "BarcodeCountViewListener.iconForRejectedBarcode",
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
declare enum BarcodeCountAdaptiveRecognitionEvents {
    dispatchStarted = "BarcodeCountAdaptiveRecognitionListener.dispatchStarted",
    response = "BarcodeCountAdaptiveRecognitionListener.response",
    error = "BarcodeCountAdaptiveRecognitionListener.error"
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
    private static readonly iconViewListenerEvents;
    private static readonly nonIconViewListenerEvents;
    private areIconEventsSubscribed;
    private isViewListenerRegistered;
    private isModeListenerRegistered;
    private isStatusProviderRegistered;
    private isAreListenerRegistered;
    private isAreListenerWanted;
    private areReconciliation;
    private _barcodeCountCaptureList;
    private _statusProvider;
    private adapter;
    constructor(view: BarcodeCountViewControllerViewHost, barcodeCount: BarcodeCount);
    registerModeListener(): Promise<void>;
    registerAdaptiveRecognitionServiceListener(): Promise<void>;
    unregisterAdaptiveRecognitionServiceListener(): Promise<void>;
    private reconcileAreListener;
    private attachAreHandlers;
    private detachAreHandlers;
    private get isUiListenerRegistered();
    registerUiListener(): Promise<void>;
    registerViewListener(): Promise<void>;
    update(): Promise<void>;
    createNativeView(): Promise<void>;
    removeNativeView(viewId?: number): Promise<void>;
    setUiListener(listener: BarcodeCountViewControllerUiListenerHost | null): Promise<void>;
    setViewListener(listener: BarcodeCountViewControllerListenerHost | null): Promise<void>;
    unregisterModeListener(): Promise<void>;
    clearHighlights(): Promise<void>;
    dispose(): Promise<void>;
    setPositionAndSize(top: number, left: number, width: number, height: number, shouldBeUnderWebView: boolean): Promise<void>;
    show(): Promise<void>;
    hide(): Promise<void>;
    setBrushForRecognizedBarcode(trackedBarcode: TrackedBarcode, brush: Brush$1 | null): Promise<void>;
    setBrushForRecognizedBarcodeNotInList(trackedBarcode: TrackedBarcode, brush: Brush$1 | null): Promise<void>;
    setBrushForAcceptedBarcode(trackedBarcode: TrackedBarcode, brush: Brush$1 | null): Promise<void>;
    setBrushForRejectedBarcode(trackedBarcode: TrackedBarcode, brush: Brush$1 | null): Promise<void>;
    setIconForRecognizedBarcode(trackedBarcode: TrackedBarcode, icon: BarcodeCountIcon | null): Promise<void>;
    setIconForRecognizedBarcodeNotInList(trackedBarcode: TrackedBarcode, icon: BarcodeCountIcon | null): Promise<void>;
    setIconForAcceptedBarcode(trackedBarcode: TrackedBarcode, icon: BarcodeCountIcon | null): Promise<void>;
    setIconForRejectedBarcode(trackedBarcode: TrackedBarcode, icon: BarcodeCountIcon | null): Promise<void>;
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
    private listenerWantsIconEvents;
    private syncIconEventSubscription;
    private unregisterViewScopedListeners;
    private unregisterViewListener;
    private unregisterUiListener;
    private buildTrackedBarcodeBrushPayload;
    private get isViewCreated();
    private handleBrushForRecognizedBarcodeWrapper;
    private handleBrushForRecognizedBarcodeNotInListWrapper;
    private handleBrushForAcceptedBarcodeWrapper;
    private handleBrushForRejectedBarcodeWrapper;
    private handleIconForRecognizedBarcodeWrapper;
    private handleIconForRecognizedBarcodeNotInListWrapper;
    private handleIconForAcceptedBarcodeWrapper;
    private handleIconForRejectedBarcodeWrapper;
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
    private handleAdaptiveRecognitionDispatchStartedWrapper;
    private handleAdaptiveRecognitionResponseWrapper;
    private handleAdaptiveRecognitionErrorWrapper;
    private transformBarcodeData;
}




/**
 * Barcode Count is a data capture mode that implements MatrixScan Count in use cases that include a counting workflow such as receiving, inventory count, and stock taking. MatrixScan Count is an out-of-the-box scan and count solution that enables faster and more accurate counting of multiple items at once.
 *
 * Learn more on how to use Barcode Count in our [Get Started](https://docs.scandit.com/sdks/react-native/matrixscan-count/get-started) guide.
 *
 * @since 6.17.0
 */
declare class BarcodeCount extends DefaultSerializeable implements DataCaptureMode {
    private static get barcodeCountDefaults();
    private type;
    private _feedback;
    private _isEnabled;
    private _hasListeners;
    private _additionalBarcodes;
    private settings;
    private listeners;
    private areListeners;
    private privateContext;
    private _controller;
    private _pendingCaptureList;
    /**
     * Returns the recommended camera settings for use with barcode count.
     *
     * @since 7.6.0
     */
    static createRecommendedCameraSettings(): CameraSettings$1;
    /**
     * Constructs a new BarcodeCount instance with the provided settings.
     *
     * @since 7.6.0
     */
    constructor(settings: BarcodeCountSettings);
    /**
     * Implemented from {@link DataCaptureMode}. See {@link DataCaptureMode.isEnabled}.
     *
     * @since 6.17.0
     */
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    /**
     * Implemented from {@link DataCaptureMode}. See {@link DataCaptureMode.context}.
     *
     * @since 6.17.0
     */
    get context(): DataCaptureContext | null;
    /**
     * Instance of {@link BarcodeCountFeedback} that is used by the barcode scanner to notify users about Success and Failure events.
     *
     * The default instance of the Feedback will have both sound and vibration enabled. A default beep sound will be used for the sound.
     *
     * @since 6.17.0
     */
    get feedback(): BarcodeCountFeedback;
    set feedback(feedback: BarcodeCountFeedback);
    private syncFeedbackDispatch;
    private get _context();
    private set _context(value);
    private get controller();
    private set controller(value);
    /**
     * Asynchronously applies the new settings to the barcode scanner, then calls whenDone. If the scanner is currently running, the task will complete when the next frame is processed, and will use the new settings for that frame. If the scanner is currently *not* running, the task will complete as soon as the settings have been stored and won’t wait until the next frame is going to be processed.
     *
     * @since 6.17.0
     */
    applySettings(settings: BarcodeCountSettings): Promise<void>;
    /**
     * Adds the listener to observe this barcode capture instance.
     *
     * If the listener is already observing the barcode count instance, calling this method has no effect.
     *
     * @since 6.17.0
     */
    addListener(listener: BarcodeCountListener): void;
    /**
     * Removes a previously added listener from this barcode count instance.
     *
     * If the listener is not currently observing the barcode count instance, calling this method has no effect.
     *
     * @since 6.17.0
     */
    removeListener(listener: BarcodeCountListener): void;
    /**
     * Adds the listener to observe the outcome of adaptive recognition dispatches performed by this mode’s adaptive recognition service. See {@link AdaptiveRecognitionServiceListener}.
     *
     * @since 8.7.0
     */
    addAdaptiveRecognitionServiceListener(listener: AdaptiveRecognitionServiceListener): void;
    /**
     * Removes a previously added adaptive recognition service listener from this barcode count instance.
     *
     * @since 8.7.0
     */
    removeAdaptiveRecognitionServiceListener(listener: AdaptiveRecognitionServiceListener): void;
    private dispatchDidScan;
    private dispatchOnSessionUpdated;
    /**
     * Resets the session, effectively clearing the history of tracked and unscanned barcodes.
     *
     * @since 6.17.0
     */
    reset(): Promise<void>;
    /**
     * Starts the capture session. If the {@link BarcodeCount.isEnabled} is false, this call has no effect.
     *
     * @since 6.17.0
     */
    startScanningPhase(): void;
    /**
     * Disables this mode and switches off the current {@link FrameSource}.
     *
     * @since 6.17.0
     */
    endScanningPhase(): void;
    /**
     * Enables “Scanning against a list” mode, which provides additional functionality when looking for a specific set of Barcodes.
     *
     * @since 6.17.0
     */
    setBarcodeCountCaptureList(barcodeCountCaptureList: BarcodeCountCaptureList): void;
    /**
     * Use this method to inject barcodes that will be used as partial scanning result. {@link BarcodeCountView} will consider these barcodes when updating the UI. Note that, if scanning against a list where multiple instances of the same barcode are expected, each entry in this list will only count as 1 towards the expected total. In order to specify that several instances of a barcode were scanned in previous sessions, this list should include one entry per each of those instances.
     *
     * @since 6.17.0
     */
    setAdditionalBarcodes(barcodes: Barcode[]): Promise<void>;
    /**
     * Clears the additional barcodes.
     *
     * @since 6.17.0
     */
    clearAdditionalBarcodes(): Promise<void>;
    private checkAndSubscribeListeners;
    private checkAndUnsubscribeListeners;
    private subscribeAreListener;
    private checkAndUnsubscribeAreListeners;
    private didChange;
    private unsubscribeNativeListeners;
}
interface PrivateBarcodeCount {
    _context: DataCaptureContext | null;
    listeners: BarcodeCountListener[];
    areListeners: AdaptiveRecognitionServiceListener[];
    didChange: () => Promise<void>;
    subscribeNativeListeners: () => void;
    unsubscribeNativeListeners: () => void;
    controller: BarcodeCountViewController | null;
    _hasListeners: boolean;
}

/**
 * Settings used with the BarcodeCount mapping flow.
 *
 * @since 8.3.0
 */
declare class BarcodeCountMappingFlowSettings extends DefaultSerializeable {
    private static get barcodeCountDefaults();
    /**
     * Text displayed for the initial guidance during the mapping flow. Defaults to “Tap shutter to scan all codes in batches”.
     *
     * @since 8.3.0
     */
    scanBarcodesGuidanceText: string;
    /**
     * Text displayed on the “Next” button. Defaults to “Next”.
     *
     * @since 8.3.0
     */
    nextButtonText: string;
    /**
     * Text displayed during the mapping flow on the last screen. Defaults to “Step back to fit all codes into camera view”.
     *
     * @since 8.3.0
     */
    stepBackGuidanceText: string;
    /**
     * Text displayed on the “Redo map” button. Defaults to “Redo map”.
     *
     * @since 8.3.0
     */
    redoScanButtonText: string;
    /**
     * Text displayed on the “Restart” button. Defaults to “Restart”.
     *
     * @since 8.3.0
     */
    restartButtonText: string;
    /**
     * Text displayed on the “Finish” button. Defaults to “Finish”.
     *
     * @since 8.3.0
     */
    finishButtonText: string;
    /**
     * Creates a new BarcodeCountMappingFlowSettings instance.
     *
     * @since 8.3.0
     */
    constructor();
}

/** @since 6.17.0 */
declare class BarcodeCountToolbarSettings extends DefaultSerializeable {
    private static get barcodeCountDefaults();
    /**
     * Creates an instance of BarcodeCountToolbarSettings.
     *
     * @since 8.3.0
     */
    constructor();
    /**
     * If populated sets the text of the audio setting button when in “on” state. Otherwise a default “Audio on” value will be used.
     *
     * @since 6.17.0
     */
    audioOnButtonText: string;
    /**
     * If populated sets the text of the audio setting button when in “off” state. Otherwise a default “Audio off” value will be used.
     *
     * @since 6.17.0
     */
    audioOffButtonText: string;
    /**
     * If populated sets the content description of the audio setting button. Otherwise a default “Audio” value will be used.
     *
     * This property is applied only when running on Android.
     *
     * @since 6.17.0
     */
    audioButtonContentDescription: string | null;
    /**
     * If populated sets the accessibility hint of the audio setting button. Otherwise a default “Audio” value will be used.
     *
     * This property is applied only when running on iOS.
     *
     * @since 6.17.0
     */
    audioButtonAccessibilityHint: string | null;
    /**
     * If populated sets the accessibility label of the audio setting button. Otherwise a default “Audio” value will be used.
     *
     * This property is applied only when running on iOS.
     *
     * @since 6.17.0
     */
    audioButtonAccessibilityLabel: string | null;
    /**
     * If populated sets the text of the vibration setting button when in “on” state. Otherwise a default “Haptic on” value will be used.
     *
     * @since 6.17.0
     */
    vibrationOnButtonText: string;
    /**
     * If populated sets the text of the vibration setting button when in “off” state. Otherwise a default “Haptic off” value will be used.
     *
     * @since 6.17.0
     */
    vibrationOffButtonText: string;
    /**
     * If populated sets the content description of the vibration setting button. Otherwise a default “Vibration” value will be used.
     *
     * This property is applied only when running on Android.
     *
     * @since 6.17.0
     */
    vibrationButtonContentDescription: string | null;
    /**
     * If populated sets the accessibility hint of the vibration setting button. Otherwise a default “Vibration” value will be used.
     *
     * This property is applied only when running on iOS.
     *
     * @since 6.17.0
     */
    vibrationButtonAccessibilityHint: string | null;
    /**
     * If populated sets the accessibility label of the vibration setting button. Otherwise a default “Vibration” value will be used.
     *
     * This property is applied only when running on iOS.
     *
     * @since 6.17.0
     */
    vibrationButtonAccessibilityLabel: string | null;
    /**
     * If populated sets the text of the strap mode setting button when in “on” state. Otherwise a default “Strap mode” value will be used.
     *
     * @since 6.17.0
     */
    strapModeOnButtonText: string;
    /**
     * If populated sets the text of the strap mode setting button when in “off” state. Otherwise a default “Strap mode” value will be used.
     *
     * @since 6.17.0
     */
    strapModeOffButtonText: string;
    /**
     * If populated sets the content description of the strap mode setting button. Otherwise a default “Strap mode” value will be used.
     *
     * This property is applied only when running on Android.
     *
     * @since 6.17.0
     */
    strapModeButtonContentDescription: string | null;
    /**
     * If populated sets the accessibility hint of the strap mode setting button. Otherwise a default “Strap mode” value will be used.
     *
     * This property is applied only when running on iOS.
     *
     * @since 6.17.0
     */
    strapModeButtonAccessibilityHint: string | null;
    /**
     * If populated sets the accessibility label of the strap mode setting button. Otherwise a default “Strap mode” value will be used.
     *
     * This property is applied only when running on iOS.
     *
     * @since 6.17.0
     */
    strapModeButtonAccessibilityLabel: string | null;
    /**
     * If populated sets the text of the color scheme setting button when in “on” state. Otherwise a default “Color scheme” value will be used.
     *
     * @since 6.17.0
     */
    colorSchemeOnButtonText: string;
    /**
     * If populated sets the text of the color scheme setting button when in “off” state. Otherwise a default “Color scheme” value will be used.
     *
     * @since 6.17.0
     */
    colorSchemeOffButtonText: string;
    /**
     * If populated sets the content description of the color scheme setting button. Otherwise a default “Color scheme” value will be used.
     *
     * @since 6.17.0
     */
    colorSchemeButtonContentDescription: string | null;
    /**
     * If populated sets the accessibility hint of the color scheme setting button. Otherwise a default “Color scheme” value will be used.
     *
     * This property is applied only when running on iOS.
     *
     * @since 6.17.0
     */
    colorSchemeButtonAccessibilityHint: string | null;
    /**
     * If populated sets the accessibility label of the color scheme setting button. Otherwise a default “Color scheme” value will be used.
     *
     * This property is applied only when running on iOS.
     *
     * @since 6.17.0
     */
    colorSchemeButtonAccessibilityLabel: string | null;
}



/** @since 6.17.0 */
interface BarcodeCountViewUiListener {
    /**
     * `snapshot` is `null` when the native SDK has no usable snapshot to offer — Android passes
     * `null` until a session has been cached, and its listener parameter is nullable
     * (`BarcodeCountSessionSnapshot?`) for that reason. It is kept nullable here rather than
     * substituted with an empty snapshot, because on Android "no session cached yet" and "session
     * present but empty" are genuinely different states and collapsing them would discard
     * information the platform provides.
     *
     * Callback method that can be used to define an action that should be performed once the list button is tapped. Receives an immutable {@link BarcodeCountSessionSnapshot} of the session at the moment of the tap. Called from the main thread.
     *
     * The `snapshot` parameter was added in 8.7. The callback itself is available since react-native=6.17, capacitor=6.18, cordova=6.24.
     *
     * @since 8.7.0
     */
    didTapListButton?(view: BarcodeCountView, snapshot: BarcodeCountSessionSnapshot | null): void;
    /**
     * Callback method that can be used to define an action that should be performed once the exit button is tapped. Receives an immutable {@link BarcodeCountSessionSnapshot} of the session at the moment of the tap. Called from the main thread.
     *
     * The `snapshot` parameter was added in 8.7. The callback itself is available since react-native=6.17, capacitor=6.18, cordova=6.24.
     *
     * @since 8.7.0
     */
    didTapExitButton?(view: BarcodeCountView, snapshot: BarcodeCountSessionSnapshot | null): void;
    /**
     * Callback method that can be used to define an action that should be performed once the single scan button is tapped. Called from the main thread.
     *
     * @since 6.17.0
     */
    didTapSingleScanButton?(view: BarcodeCountView): void;
}



/** @since 6.17.0 */
interface BarcodeCountViewListener {
    /**
     * This method is called only when the view uses the {@link BarcodeCountViewStyle.Dot} style.
     *
     * Callback method that can be used to set a {@link Brush} for a recognized barcode. When setting a {@link BarcodeCountCaptureList} to the mode, this brush will be used for recognized barcodes that are part of the target list. It is called when a new recognized barcode appears. Called from the rendering thread. If the callback returns *null*, then no visualization will be drawn for the recognized barcode. Additionally, tapping on the barcode will have no effect - the action defined by didTapRecognizedBarcode() callback will not be performed.
     *
     * @since 6.17.0
     */
    brushForRecognizedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): Brush$1 | null;
    /**
     * This method is called only when the view uses the {@link BarcodeCountViewStyle.Dot} style.
     *
     * Callback method that can be used to set a {@link Brush} for a recognized barcode that’s not part of the target {@link BarcodeCountCaptureList}. It is called when a new recognized barcode that is not part of the target :type:barcode.count.BarcodeCountCaptureList appears. When {@link BarcodeCountCaptureList} is not set, this method will never be called. Called from the rendering thread. If the callback returns *null*, then no visualization will be drawn for the recognized barcode. Additionally, tapping on the barcode will have no effect - the action defined by didTapRecognizedBarcodeNotInList() callback will not be performed.
     *
     * @since 6.17.0
     */
    brushForRecognizedBarcodeNotInList?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): Brush$1 | null;
    /**
     * This method is called only when the view uses the {@link BarcodeCountViewStyle.Dot} style.
     *
     * Callback method that can be used to set a {@link Brush} for an accepted barcode. It is called when a barcode is accepted. Called from the rendering thread. If the callback returns *null*, then no visualization will be drawn for the accepted barcode. Additionally, tapping on the barcode will have no effect - the action defined by didTapAcceptedBarcode() callback will not be performed.
     *
     * @since 7.1.0
     */
    brushForAcceptedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): Brush$1 | null;
    /**
     * This method is called only when the view uses the {@link BarcodeCountViewStyle.Dot} style.
     *
     * Callback method that can be used to set a {@link Brush} for a rejected barcode. It is called when a barcode is rejected. Called from the rendering thread. If the callback returns *null*, then no visualization will be drawn for the accepted barcode. Additionally, tapping on the barcode will have no effect - the action defined by didTapRejectedBarcode() callback will not be performed.
     *
     * @since 7.1.0
     */
    brushForRejectedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): Brush$1 | null;
    /**
     * This method is called only when the view uses the {@link BarcodeCountViewStyle.Icon} style.
     *
     * Callback method that can be used to set a {@link BarcodeCountIcon} for a recognized barcode. When setting a {@link BarcodeCountCaptureList} to the mode, this icon will be used for recognized barcodes that are part of the target list. If the callback returns *null*, no icon is drawn for that barcode and tapping the barcode’s location has no effect.
     *
     * @since 8.7.0
     */
    iconForRecognizedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): BarcodeCountIcon | null;
    /**
     * This method is called only when the view uses the {@link BarcodeCountViewStyle.Icon} style.
     *
     * Callback method that can be used to set a {@link BarcodeCountIcon} for a recognized barcode that’s not part of the target {@link BarcodeCountCaptureList}. When {@link BarcodeCountCaptureList} is not set, this method will never be called. If the callback returns *null*, no icon is drawn for that barcode and tapping the barcode’s location has no effect.
     *
     * @since 8.7.0
     */
    iconForRecognizedBarcodeNotInList?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): BarcodeCountIcon | null;
    /**
     * This method is called regardless of the view’s {@link BarcodeCountView.style}. Accepted barcodes are always rendered as {@link BarcodeCountIcon} instances.
     *
     * Callback method that can be used to set a {@link BarcodeCountIcon} for an accepted barcode. If the callback returns *null*, no icon is drawn for that barcode and tapping the barcode’s location has no effect.
     *
     * @since 8.7.0
     */
    iconForAcceptedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): BarcodeCountIcon | null;
    /**
     * This method is called regardless of the view’s {@link BarcodeCountView.style}. Rejected barcodes are always rendered as {@link BarcodeCountIcon} instances.
     *
     * Callback method that can be used to set a {@link BarcodeCountIcon} for a rejected barcode. If the callback returns *null*, no icon is drawn for that barcode and tapping the barcode’s location has no effect.
     *
     * @since 8.7.0
     */
    iconForRejectedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): BarcodeCountIcon | null;
    /**
     * Callback method that can be used to define an action that should be performed once a recognized barcode is tapped. When setting a {@link BarcodeCountCaptureList} to the mode, this method will be called only when tapping recognized barcodes that are part of the target list. Called from the main thread.
     *
     * @since 6.17.0
     */
    didTapRecognizedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): void;
    /**
     * Callback method that can be used to define an action that should be performed once a filtered barcode is tapped. Called from the main thread.
     *
     * @since 6.17.0
     */
    didTapFilteredBarcode?(view: BarcodeCountView, filteredBarcode: TrackedBarcode): void;
    /**
     * Callback method that can be used to define an action that should be performed once a recognized barcode that’s not part of the target {@link BarcodeCountCaptureList} is tapped. When {@link BarcodeCountCaptureList} is not set, this method will never be called. Called from the main thread.
     *
     * @since 6.17.0
     */
    didTapRecognizedBarcodeNotInList?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): void;
    /**
     * Callback method that can be used to define an action that should be performed once an accepted barcode is tapped. Called from the main thread.
     *
     * @since 7.1.0
     */
    didTapAcceptedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): void;
    /**
     * Callback method that can be used to define an action that should be performed once a rejected barcode is tapped. Called from the main thread.
     *
     * @since 7.1.0
     */
    didTapRejectedBarcode?(view: BarcodeCountView, trackedBarcode: TrackedBarcode): void;
    /**
     * Callback method that can be used to define an action that should be performed once a cluster is tapped. Called from the main thread.
     *
     * @since 8.3.0
     */
    didTapCluster?(view: BarcodeCountView, cluster: Cluster): void;
    /**
     * Callback method that can be used to define an action that should be performed when all the items of a capture list have been correctly scanned. If there is no capture list set, this method will never be called. Called from the main thread.
     *
     * @since 6.17.0
     */
    didCompleteCaptureList?(view: BarcodeCountView): void;
}

/** @since 7.1.0 */
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
    /**
     * Build a new instance of this class, with default values.
     *
     * @since 8.3.0
     */
    constructor();
    /**
     * Use this property to enable the not in list actions. Defaults to *false*.
     *
     * @since 7.1.0
     */
    get enabled(): boolean;
    set enabled(newValue: boolean);
    /**
     * The text for the label associated with the accept button.
     *
     * Default value is “Accept”.
     *
     * @since 7.1.0
     */
    get acceptButtonText(): string;
    set acceptButtonText(newValue: string);
    /**
     * The accept button accessibility label.
     *
     * Default value is “Accept barcode button”.
     *
     * This feature is only available on iOS devices.
     *
     * @since 7.1.0
     */
    get acceptButtonAccessibilityLabel(): string;
    set acceptButtonAccessibilityLabel(newValue: string);
    /**
     * The accept button accessibility hint.
     *
     * Default value is “Accept barcode button”.
     *
     * This feature is only available on iOS devices.
     *
     * @since 7.1.0
     */
    get acceptButtonAccessibilityHint(): string;
    set acceptButtonAccessibilityHint(value: string);
    /**
     * The accept button content description.
     *
     * Default value is “Accept barcode button”.
     *
     * This feature is only available on Android devices.
     *
     * @since 7.1.0
     */
    get acceptButtonContentDescription(): string;
    set acceptButtonContentDescription(value: string);
    /**
     * The text for the label associated with the reject button.
     *
     * Default value is “Reject”.
     *
     * @since 7.1.0
     */
    get rejectButtonText(): string;
    set rejectButtonText(value: string);
    /**
     * The reject button accessibility label.
     *
     * Default value is “Reject barcode button”.
     *
     * This feature is only available on iOS devices.
     *
     * @since 7.1.0
     */
    get rejectButtonAccessibilityLabel(): string;
    set rejectButtonAccessibilityLabel(value: string);
    /**
     * The reject button accessibility hint.
     *
     * Default value is “Reject barcode button”.
     *
     * This feature is only available on iOS devices.
     *
     * @since 7.1.0
     */
    get rejectButtonAccessibilityHint(): string;
    set rejectButtonAccessibilityHint(value: string);
    /**
     * The reject button content description.
     *
     * Default value is “Reject barcode button”.
     *
     * This feature is only available on Android devices.
     *
     * @since 7.1.0
     */
    get rejectButtonContentDescription(): string;
    set rejectButtonContentDescription(value: string);
    /**
     * The text for the label associated with the cancel button.
     *
     * Default value is “Cancel”.
     *
     * @since 7.1.0
     */
    get cancelButtonText(): string;
    set cancelButtonText(value: string);
    /**
     * The cancel button accessibility label.
     *
     * Default value is “Cancel popover button”.
     *
     * This feature is only available on iOS devices.
     *
     * @since 7.1.0
     */
    get cancelButtonAccessibilityLabel(): string;
    set cancelButtonAccessibilityLabel(value: string);
    /**
     * The cancel button accessibility hint.
     *
     * Default value is “Cancel popover button”.
     *
     * @since 7.1.0
     */
    get cancelButtonAccessibilityHint(): string;
    set cancelButtonAccessibilityHint(value: string);
    /**
     * The cancel button content description.
     *
     * Default value is “Cancel popover button”.
     *
     * This feature is only available on Android devices.
     *
     * @since 7.1.0
     */
    get cancelButtonContentDescription(): string;
    set cancelButtonContentDescription(value: string);
    /**
     * The text for the hint that will be shown when a barcode is accepted.
     *
     * Default value is “Item accepted”.
     *
     * @since 7.1.0
     */
    get barcodeAcceptedHint(): string;
    set barcodeAcceptedHint(value: string);
    /**
     * The text for the hint that will be shown when a barcode is rejected.
     *
     * Default value is “Item rejected”.
     *
     * @since 7.1.0
     */
    get barcodeRejectedHint(): string;
    set barcodeRejectedHint(value: string);
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
    logoStyle?: LogoStyle$1;
    logoAnchor?: Anchor$1;
    tapToUncountEnabled?: boolean;
    textForTapToUncountHint?: string;
    barcodeNotInListActionSettings?: BarcodeCountNotInListActionSettings;
    hardwareTriggerEnabled?: boolean;
    mappingFlowSettings?: BarcodeCountMappingFlowSettings;
}






/**
 * {@link BarcodeCount} comes with a ready-to-use UI. Add {@link BarcodeCountView} to the view hierarchy. Please note that this view should be presented full screen.
 *
 * @since 6.17.0
 */
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
    private _logoStyle;
    private _logoAnchor;
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
    private viewCreationGate;
    /**
     * Resolves true once this view's native counterpart exists, false if it
     * never will (creation failed, timed out, or the view was torn down).
     *
     * Callers that arrive before creation has been kicked off park until it is,
     * bounded by VIEW_CREATION_PRE_BEGIN_TIMEOUT_MS; once a creation cycle is in
     * flight the bound is VIEW_CREATION_TIMEOUT_MS. Reachable on Cordova/Capacitor
     * when a view method runs before connectToElement().
     *
     * @internal Not part of the documented API surface: it exists so the base
     * view's own action methods can await creation, and is public only because
     * the framework plugins reach it across package boundaries.
     */
    whenViewCreated(): Promise<boolean>;
    private static get barcodeCountDefaults();
    static get defaultRecognizedBrush(): Brush$1;
    static get defaultNotInListBrush(): Brush$1;
    static get defaultAcceptedBrush(): Brush$1;
    static get defaultRejectedBrush(): Brush$1;
    static get defaultRecognizedIcon(): BarcodeCountIcon;
    static get defaultNotInListIcon(): BarcodeCountIcon;
    static get defaultAcceptedIcon(): BarcodeCountIcon;
    static get defaultRejectedIcon(): BarcodeCountIcon;
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
    get recognizedBrush(): Brush$1 | null;
    set recognizedBrush(newValue: Brush$1 | null);
    get notInListBrush(): Brush$1 | null;
    set notInListBrush(newValue: Brush$1 | null);
    get acceptedBrush(): Brush$1 | null;
    set acceptedBrush(value: Brush$1 | null);
    get rejectedBrush(): Brush$1 | null;
    set rejectedBrush(value: Brush$1 | null);
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
    get torchControlPosition(): Anchor$1;
    set torchControlPosition(newValue: Anchor$1);
    get logoStyle(): LogoStyle$1;
    set logoStyle(newValue: LogoStyle$1);
    get logoAnchor(): Anchor$1;
    set logoAnchor(newValue: Anchor$1);
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
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    show(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    hide(): Promise<void>;
    setBrushForRecognizedBarcode(trackedBarcode: TrackedBarcode, brush: Brush$1 | null): Promise<void>;
    setBrushForRecognizedBarcodeNotInList(trackedBarcode: TrackedBarcode, brush: Brush$1 | null): Promise<void>;
    setBrushForAcceptedBarcode(trackedBarcode: TrackedBarcode, brush: Brush$1 | null): Promise<void>;
    setBrushForRejectedBarcode(trackedBarcode: TrackedBarcode, brush: Brush$1 | null): Promise<void>;
    setIconForRecognizedBarcode(trackedBarcode: TrackedBarcode, icon: BarcodeCountIcon | null): Promise<void>;
    setIconForRecognizedBarcodeNotInList(trackedBarcode: TrackedBarcode, icon: BarcodeCountIcon | null): Promise<void>;
    setIconForAcceptedBarcode(trackedBarcode: TrackedBarcode, icon: BarcodeCountIcon | null): Promise<void>;
    setIconForRejectedBarcode(trackedBarcode: TrackedBarcode, icon: BarcodeCountIcon | null): Promise<void>;
    enableHardwareTrigger(hardwareTriggerKeyCode: number | null): Promise<void>;
    createNativeView(viewId: number): Promise<void>;
    removeNativeView(): Promise<void>;
    toJSON(): object;
    updateWithProps(prevProps: BaseBarcodeCountViewProps, props: BaseBarcodeCountViewProps): void;
    private updateNative;
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

/**
 * Contains information about barcode-batch-specific licensing.
 *
 * @since 8.6.0
 */
declare class BarcodeBatchLicenseInfo {
    private _licensedSymbologies;
    /**
     * Which symbologies are licensed and can be used for Barcode Batch.
     *
     * @since 8.6.0
     */
    get licensedSymbologies(): Symbology[];
    static fromJSON(json: {
        licensedSymbologies?: string[];
    }): BarcodeBatchLicenseInfo;
}

interface BarcodeBatchSessionEventPayload {
    session: string;
    frameId: string | null;
    modeId: number | null;
}



/**
 * The batch session contains all the currently tracked barcodes and changes that were made specifically in the last processed frame.
 *
 * The batch session should only be accessed from within didUpdateSession() to which it is provided as an argument. It is not safe to be accessed from anywhere else since it may be concurrently modified.Specifically no reference to {@link BarcodeBatchSession.trackedBarcodes}, {@link BarcodeBatchSession.addedTrackedBarcodes}, {@link BarcodeBatchSession.removedTrackedBarcodes} or {@link BarcodeBatchSession.updatedTrackedBarcodes} should be kept and traversed outside of didUpdateSession(). Instead a copy of the lists should be made to avoid concurrent modification. The individual tracked barcodes can be referenced without copying as they are not further modified.
 *
 * @since 7.0.0
 */
declare class BarcodeBatchSession {
    private _addedTrackedBarcodes;
    private _removedTrackedBarcodes;
    private _updatedTrackedBarcodes;
    private _trackedBarcodes;
    private _frameSequenceID;
    private frameId;
    /**
     * Newly tracked barcodes.
     *
     * @since 7.0.0
     */
    get addedTrackedBarcodes(): TrackedBarcode[];
    /**
     * The identifiers of lost tracked barcodes that were removed.
     *
     * @since 7.0.0
     */
    get removedTrackedBarcodes(): string[];
    /**
     * Updated tracked barcodes (new location).
     *
     * @since 7.0.0
     */
    get updatedTrackedBarcodes(): TrackedBarcode[];
    /**
     * A map from identifiers to tracked barcodes. It contains all currently tracked barcodes.
     *
     * @since 7.0.0
     */
    get trackedBarcodes(): {
        [key: string]: TrackedBarcode;
    };
    /**
     * The identifier of the current frame sequence.
     *
     * As long as there is no interruptions of frames coming from the camera, the {@link BarcodeBatchSession.frameSequenceID} will stay the same.
     *
     * @since 7.0.0
     */
    get frameSequenceID(): number;
    private listenerController;
    private static fromJSON;
    /**
     * Resets the Barcode Batch session, effectively clearing the history of tracked barcodes. This function should only be called inside the listeners’ callback.
     *
     * @since 7.0.0
     */
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




/**
 * The BarcodeBatch listener is the main way for hooking into BarcodeBatch. It provides a callback that is invoked when the state of tracked barcodes changes.
 *
 * @since 7.0.0
 */
interface BarcodeBatchListener {
    /**
     * Invoked after Barcode Batch has completed to process a frame.
     *
     * @since 7.0.0
     */
    didUpdateSession?(barcodeBatch: BarcodeBatch, session: BarcodeBatchSession, getFrameData: () => Promise<FrameData>): Promise<void>;
}

/** @since 7.0.0 */
declare class BarcodeBatchSettings extends DefaultSerializeable {
    private properties;
    private symbologies;
    private _arucoDictionary;
    /**
     * Returns the set of enabled symbologies.
     *
     * @since 7.0.0
     */
    get enabledSymbologies(): Symbology[];
    /**
     * Creates a new Barcode Batch settings instance. All symbologies are disabled. Make sure to enable the symbologies required by your app before applying the settings to {@link BarcodeBatch} with BarcodeBatch.applySettings().
     *
     * @since 7.0.0
     */
    constructor();
    /**
     * Gets {@link SymbologySettings} specific for the given {@link Symbology}.
     *
     * Note that modifying the returned object doesn’t automatically apply the changes to {@link BarcodeBatch}. After you made changes to the symbology settings,
     *
     * call BarcodeBatch.applySettings()
     *
     * with these {@link BarcodeBatchSettings} to apply them.
     *
     * @since 7.0.0
     */
    settingsForSymbology(symbology: Symbology): SymbologySettings$1;
    /**
     * Sets property to the provided value. Use this method to set properties that are not yet part of a stable API. Properties set through this method may or may not be used or change in a future release.
     *
     * @since 7.0.0
     */
    setProperty(name: string, value: any): void;
    /**
     * Retrieves the value of a previously set property.
     *
     * @since 7.0.0
     */
    getProperty(name: string): any;
    /**
     * This function provides a convenient shortcut to enabling decoding of particular symbologies without having to go through {@link SymbologySettings}. By default, all symbologies are turned off and symbologies need to be explicitly enabled.
     *
     * @since 7.0.0
     */
    enableSymbologies(symbologies: Symbology[]): void;
    /**
     * This function provides a convenient shortcut to enabling/disabling decoding of a particular symbology without having to go through {@link SymbologySettings}.
     *
     * Some 1d barcode symbologies allow you to encode variable-length data. By default, the Scandit Data Capture SDK only scans barcodes in a certain length range.If your application requires scanning of one of these symbologies, and the length is falling outside the default range, you may need to adjust the {@link SymbologySettings.activeSymbolCounts|active symbol counts} for the symbology in addition to enabling it.
     *
     * @since 7.0.0
     */
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    /**
     * Sets the {@link ArucoDictionary} to be used while scanning ArUco codes. When the symbology is enabled the dictionary {@link ArucoDictionaryPreset.ArucoDictionaryPreset_5X5_1000} is loaded as default.
     *
     * @since 7.0.0
     */
    setArucoDictionary(dictionary: ArucoDictionary$1): void;
    toJSON(): BarcodeTrackingSettings;
}



interface BarcodeBatchListenerControllerHost {
    readonly modeId: number;
    readonly isEnabled: boolean;
    toJSON(): BarcodeTracking;
}




declare enum BarcodeBatchListenerEvents {
    didUpdateSession = "BarcodeBatchListener.didUpdateSession"
}
declare class BarcodeBatchListenerController extends BaseController<BarcodeProxy> {
    private host;
    private frameDataController;
    private adapter;
    constructor(host: BarcodeBatchListenerControllerHost);
    resetSession(): Promise<void>;
    setModeEnabledState(enabled: boolean): Promise<void>;
    updateBarcodeBatchMode(): Promise<void>;
    getBarcodeBatchLicenseInfo(): Promise<BarcodeBatchLicenseInfo | null>;
    applyBarcodeBatchModeSettings(newSettings: BarcodeBatchSettings): Promise<void>;
    getFrame(frameId: string): Promise<FrameData>;
    private parsePayloadTolerantly;
    handleDidUpdateSession(data: Record<string, unknown>, notify: (session: BarcodeBatchSession) => Promise<void>): Promise<void>;
    private parseDidUpdateSession;
    private finishDidUpdateSession;
}



/**
 * Data capture mode that implements MatrixScan (Barcode Batch).
 *
 * Learn more on how to use Barcode Batch in our [Get Started](https://docs.scandit.com/sdks/react-native/matrixscan/get-started) guide.
 *
 * @since 6.5.0
 */
declare class BarcodeBatch extends ModeBase<BarcodeBatchListenerController> implements DataCaptureMode {
    private static get barcodeBatchDefaults();
    protected type: string;
    private _isEnabled;
    private settings;
    private parentId;
    private get listeners();
    /**
     * Returns the recommended camera settings for use with Barcode Batch.
     *
     * @since 7.6.0
     */
    static createRecommendedCameraSettings(): CameraSettings$1;
    private get asControllerHost();
    protected createController(): BarcodeBatchListenerController;
    /**
     * Constructs a new BarcodeBatch instance with the provided settings.
     *
     * @since 7.6.0
     */
    constructor(settings: BarcodeBatchSettings);
    /**
     * Implemented from {@link DataCaptureMode}. See {@link DataCaptureMode.context}.
     *
     * @since 7.0.0
     */
    get context(): DataCaptureContext | null;
    /**
     * Implemented from {@link DataCaptureMode}. See {@link DataCaptureMode.isEnabled}.
     *
     * @since 7.0.0
     */
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    /**
     * Asynchronously applies the new settings to the barcode scanner. If the scanner is currently running, the task will complete when the next frame is processed, and will use the new settings for that frame. If the scanner is currently *not* running, the task will complete as soon as the settings have been stored and won’t wait until the next frame is going to be processed.
     *
     * @since 7.0.0
     */
    applySettings(settings: BarcodeBatchSettings): Promise<void>;
    /**
     * Adds the listener to observe this barcode capture instance.
     *
     * In case the same listener is already observing this instance, calling this method will not add the listener again.
     *
     * @since 7.0.0
     */
    addListener(listener: BarcodeBatchListener): Promise<void>;
    private notifyListenersOfDidUpdateSession;
    /**
     * Removes a previously added listener from this Barcode Batch instance.
     *
     * In case the listener is not currently observing this instance, calling this method has no effect.
     *
     * @since 7.0.0
     */
    removeListener(listener: BarcodeBatchListener): Promise<void>;
    /**
     * Resets the object tracker.
     *
     * @since 7.0.0
     */
    reset(): Promise<void>;
    toJSON(): BarcodeTracking;
    /**
     * Async getter for the Barcode Batch license info. Returns *null* until the mode has been added to a {@link DataCaptureContext} with a license that covers Barcode Batch.
     *
     * @since 8.6.0
     */
    getBarcodeBatchLicenseInfo(): Promise<BarcodeBatchLicenseInfo | null>;
}
interface PrivateBarcodeBatch extends PrivateDataCaptureMode {
    _context: DataCaptureContext | null;
    listeners: BarcodeBatchListener[];
    parentId: number | null;
}

/**
 * A view that can be shown for a {@link TrackedBarcode} through a {@link BarcodeBatchAdvancedOverlay}.
 *
 * @since 7.0.0
 */
interface BarcodeBatchAdvancedOverlayView {
}



/**
 * An overlay for {@link DataCaptureView} that allows anchoring a single user-provided View to each tracked barcode.The provided view is visible on the top of the camera preview as long as its tracked barcode is and for all this time retains its relative position to it. This is useful when an additional information should be provided to tracked barcodes in real time. For instance, a user may overlay the price of an item or its expiry date for each corresponding barcode.To display the views, this overlay must be attached to a {@link DataCaptureView}. This can be done by passing this overlay to {@link DataCaptureView.addOverlay}.A user of this class may configure what view is displayed for the given barcode and the relative position between the two by implementing {@link BarcodeBatchAdvancedOverlayListener} or by calling {@link BarcodeBatchAdvancedOverlay.setViewForTrackedBarcode}, {@link BarcodeBatchAdvancedOverlay.setAnchorForTrackedBarcode} or {@link BarcodeBatchAdvancedOverlay.setOffsetForTrackedBarcode}.
 *
 * For additional information about using this overlay, refer to [Adding AR Overlays](https://docs.scandit.com/sdks/react-native/matrixscan/advanced) .
 *
 * When using the new React Native architecture, on iOS, ensure that your React Native version is >= 0.79 and that your app delegate implements the ScanditReactNativeFactoryContainer protocol available in our React-Native core module. In case you have followed the [React Native upgrade guide](https://raw.githubusercontent.com/react-native-community/rn-diff-purge/release/0.79.2/RnDiffApp/ios/RnDiffApp/AppDelegate.swift), you should already have the required property implemented.
 *
 * @since 7.0.0
 */
interface BarcodeBatchAdvancedOverlay extends DataCaptureOverlay {
    /** @since 7.0.0 */
    listener: BarcodeBatchAdvancedOverlayListener | null;
}
/** @since 7.0.0 */
interface BarcodeBatchAdvancedOverlayListener {
    /**
     * Callback method that can be used to define an action that should be performed when a view for a tracked barcode is tapped.
     *
     * @since 7.0.0
     */
    didTapViewForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): void;
    /**
     * View to be drawn corresponding to the given {@link TrackedBarcode}. This method will be called before {@link BarcodeBatchAdvancedOverlayListener.anchorForTrackedBarcode} and {@link BarcodeBatchAdvancedOverlayListener.offsetForTrackedBarcode}. Beware that this view can be overridden with {@link BarcodeBatchAdvancedOverlay.setViewForTrackedBarcode} method. This method will only be called for new tracked barcodes that do not have a view yet, e.g. a view set by a call to {@link BarcodeBatchAdvancedOverlay.setViewForTrackedBarcode}.
     *
     * Called from the main thread.
     *
     * @since 7.0.0
     */
    viewForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): BarcodeBatchAdvancedOverlayView | null | Promise<BarcodeBatchAdvancedOverlayView | null>;
    /**
     * Anchor point that should be used for the view corresponding to the given {@link TrackedBarcode}. This method will be called after {@link BarcodeBatchAdvancedOverlayListener.viewForTrackedBarcode} and before {@link BarcodeBatchAdvancedOverlayListener.offsetForTrackedBarcode}. Beware that this anchor can be overridden with {@link BarcodeBatchAdvancedOverlay.setAnchorForTrackedBarcode} method. This method will only be called for new tracked barcodes that do not have an anchor yet, e.g. an anchor set by a call to {@link BarcodeBatchAdvancedOverlay.setAnchorForTrackedBarcode}.
     *
     * Called from the main thread.
     *
     * @since 7.0.0
     */
    anchorForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): Anchor$1;
    /**
     * Offset to be set to the view corresponding to the given {@link TrackedBarcode}. The offset is relative to the anchor point of the tracked barcode. This method will be called after {@link BarcodeBatchAdvancedOverlayListener.viewForTrackedBarcode} and {@link BarcodeBatchAdvancedOverlayListener.anchorForTrackedBarcode}. Beware that this offset can be overridden with {@link BarcodeBatchAdvancedOverlay.setOffsetForTrackedBarcode} method. This method will only be called for new tracked barcodes that do not have an offset yet, e.g. an offset set by a call to {@link BarcodeBatchAdvancedOverlay.setOffsetForTrackedBarcode}.
     *
     * Called from the main thread.
     *
     * @since 7.0.0
     */
    offsetForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): PointWithUnit;
}



declare enum BarcodeBatchAdvancedOverlayListenerEvents {
    didTapViewForTrackedBarcode = "BarcodeBatchAdvancedOverlayListener.didTapViewForTrackedBarcode",
    viewForTrackedBarcode = "BarcodeBatchAdvancedOverlayListener.viewForTrackedBarcode",
    anchorForTrackedBarcode = "BarcodeBatchAdvancedOverlayListener.anchorForTrackedBarcode",
    offsetForTrackedBarcode = "BarcodeBatchAdvancedOverlayListener.offsetForTrackedBarcode"
}
interface BarcodeBatchAdvancedOverlayControllerHost extends BarcodeBatchAdvancedOverlay {
    readonly view: {
        viewId: number;
    } | null;
    toJSON(): object;
}
declare class BarcodeBatchAdvancedOverlayController extends BaseController<BarcodeProxy> {
    private overlay;
    private adapter;
    private hasListeners;
    private hasPendingListenerRegistration;
    private trackedBarcodeCache;
    private static readonly maxTrackedBarcodeCacheSize;
    constructor(overlay: BarcodeBatchAdvancedOverlayControllerHost);
    setViewForTrackedBarcode(view: BarcodeBatchAdvancedOverlayView | Promise<BarcodeBatchAdvancedOverlayView>, trackedBarcode: TrackedBarcode): Promise<void>;
    updateSizeOfTrackedBarcodeView(trackedBarcodeIdentifier: number, width: number, height: number): Promise<void>;
    setAnchorForTrackedBarcode(anchor: Anchor$1, trackedBarcode: TrackedBarcode): Promise<void>;
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



/** @since 7.0.0 */
interface BarcodeBatchBasicOverlayListener {
    /**
     * Callback method that can be used to set a {@link Brush} for a tracked barcode. It is called when a new tracked barcode appears. Called from the rendering thread. If the callback returns *null*, then no visualization will be drawn for the tracked barcode. Additionally, tapping on the barcode will have no effect - the action defined by didTapTrackedBarcode() callback will not be performed.
     *
     * @since 7.0.0
     */
    brushForTrackedBarcode?(overlay: BarcodeBatchBasicOverlay, trackedBarcode: TrackedBarcode): Brush$1 | null;
    /**
     * Callback method that can be used to define an action that should be performed once a tracked barcode is tapped. Called from the main thread.
     *
     * @since 7.0.0
     */
    didTapTrackedBarcode?(overlay: BarcodeBatchBasicOverlay, trackedBarcode: TrackedBarcode): void;
}



/**
 * An overlay for SDCDataCaptureView that shows a simple augmentation over each tracked barcode.
 *
 * To display the augmentations, this overlay must be attached to a {@link DataCaptureView}. This can be done by passing this overlay to {@link DataCaptureView.addOverlay}.
 *
 * A user of this class may configure the appearance of the augmentations by implementing {@link BarcodeBatchBasicOverlayListener} or by calling {@link BarcodeBatchBasicOverlay.setBrushForTrackedBarcode}.
 *
 * For additional information about using this overlay, refer to [MatrixScan Get Started](https://docs.scandit.com/sdks/react-native/matrixscan/get-started) guide.
 *
 * @since 7.0.0
 */
declare class BarcodeBatchBasicOverlay extends DefaultSerializeable implements DataCaptureOverlay {
    private type;
    private modeId;
    private _view;
    private get view();
    private set view(value);
    private get asHost();
    private get hasListener();
    private dispatchBrushForTrackedBarcode;
    private dispatchDidTapTrackedBarcode;
    private _style;
    private _hasListener;
    private get _dataCaptureViewId();
    private _listener;
    /**
     * The listener which is called whenever a new TrackedBarcode is newly tracked or newly recognized.
     *
     * Using this listener requires the MatrixScan AR add-on.
     *
     * @since 7.0.0
     */
    get listener(): BarcodeBatchBasicOverlayListener | null;
    set listener(newListener: BarcodeBatchBasicOverlayListener | null);
    /**
     * The default brush applied to recognized tracked barcodes. This is the brush used if {@link BarcodeBatchBasicOverlayListener} is not implemented. Setting this brush to *null* hides all tracked barcodes, unless {@link BarcodeBatchBasicOverlay.setBrushForTrackedBarcode} is called.
     *
     * @since 7.0.0
     */
    get defaultBrush(): Brush$1 | null;
    set defaultBrush(newBrush: Brush$1 | null);
    private _brush;
    /**
     * The brush applied to recognized tracked barcodes if {@link BarcodeBatchBasicOverlayListener} is not implemented. Setting this brush to *null* hides all tracked barcodes, unless {@link BarcodeBatchBasicOverlay.setBrushForTrackedBarcode} is called.
     *
     * @since 7.0.0
     */
    get brush(): Brush$1 | null;
    set brush(newBrush: Brush$1 | null);
    private _shouldShowScanAreaGuides;
    private controller;
    /**
     * When set to *true*, this overlay will visualize the active scan area used for BarcodeBatch. This is useful to check {@link DataCaptureView.scanAreaMargins|margins} defined on the {@link DataCaptureView} are set correctly. This property is meant for debugging during development and is not intended for use in production.
     *
     * By default this property is *false*.
     *
     * @since 7.0.0
     */
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    /**
     * The overlay style. Defaults to Frame.
     *
     * @since 7.0.0
     */
    get style(): BarcodeBatchBasicOverlayStyle;
    private static get barcodeBatchDefaults();
    /**
     * Constructs a new BarcodeBatchBasicOverlay. For the overlay to be displayed on screen, it must be added to a {@link DataCaptureView}.
     *
     * @since 7.6.0
     */
    constructor(mode: BarcodeBatch, style: BarcodeBatchBasicOverlayStyle);
    toJSON(): BarcodeTrackingBasicOverlay;
    /**
     * The method can be called to change the visualization style of a tracked barcode. This method is thread-safe, it can be called from any thread. If the brush is *null*, then no visualization will be drawn for the tracked barcode. Additionally, tapping on the barcode will have no effect - the action defined by BarcodeBatchBasicOverlayListener.didTapTrackedBarcode() callback will not be performed.
     *
     * Setting a brush for a tracked barcode that is not part of the currently active session will be ignored.
     *
     * Using this function requires the MatrixScan AR add-on.
     *
     * @since 7.0.0
     */
    setBrushForTrackedBarcode(brush: Brush$1 | null, trackedBarcode: TrackedBarcode): Promise<void>;
    /**
     * Clears all currently displayed visualizations for the tracked barcodes.
     *
     * This only applies to the currently tracked barcodes, the visualizations for the new ones will still appear.
     *
     * @since 7.0.0
     */
    clearTrackedBarcodeBrushes(): Promise<void>;
    private onViewIdChanged;
}





interface BarcodeBatchBasicOverlayControllerHost {
    readonly view: {
        viewId: number;
    } | null;
    readonly brush: Brush$1 | null;
    readonly hasListener: boolean;
    toJSON(): BarcodeTrackingBasicOverlay;
    dispatchBrushForTrackedBarcode(trackedBarcode: TrackedBarcode): Brush$1 | null | undefined;
    dispatchDidTapTrackedBarcode(trackedBarcode: TrackedBarcode): void;
}



declare enum BarcodeBatchBasicOverlayListenerEvents {
    brushForTrackedBarcode = "BarcodeBatchBasicOverlayListener.brushForTrackedBarcode",
    didTapTrackedBarcode = "BarcodeBatchBasicOverlayListener.didTapTrackedBarcode"
}
declare class BarcodeBatchBasicOverlayController extends BaseController<BarcodeProxy> {
    private readonly overlay;
    private adapter;
    private registeredViewId;
    private subscribed;
    constructor(overlay: BarcodeBatchBasicOverlayControllerHost);
    setBrushForTrackedBarcode(brush: Brush$1 | null, trackedBarcode: TrackedBarcode): Promise<void>;
    clearTrackedBarcodeBrushes(): Promise<void>;
    updateBarcodeBatchBasicOverlay(): Promise<void>;
    onViewChanged(): Promise<void>;
    private addRegistrations;
    private removeRegistrations;
    subscribeListener(): Promise<void>;
    unsubscribeListener(): Promise<void>;
    dispose(): void;
    private get dataCaptureViewId();
    private initialize;
    private handleBrushForTrackedBarcode;
    private handleDidTapTrackedBarcode;
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
    toJSON(): BarcodeTrackingAdvancedOverlay;
    setViewForTrackedBarcode(view: BarcodeBatchAdvancedOverlayView | Promise<BarcodeBatchAdvancedOverlayView>, trackedBarcode: TrackedBarcode): Promise<void>;
    setAnchorForTrackedBarcode(anchor: Anchor$1, trackedBarcode: TrackedBarcode): Promise<void>;
    setOffsetForTrackedBarcode(offset: PointWithUnit, trackedBarcode: TrackedBarcode): Promise<void>;
    clearTrackedBarcodeViews(): Promise<void>;
    updateSizeOfTrackedBarcodeView(trackedBarcodeIdentifier: number, width: number, height: number): Promise<void>;
    onViewIdChanged(): void;
}

/**
 * A unique identifier for scan item definitions in the item-based scanning APIs. This identifier is automatically generated as a UUID and is used to distinguish between different scan item definitions within the system.
 *
 * @since 8.1.0
 */
declare class ScanItemIdentifier extends DefaultSerializeable {
    private identifier;
    static fromJSON(definitionId: string): ScanItemIdentifier;
    /**
     * Creates a new scan item identifier with an automatically generated UUID.
     *
     * @since 8.1.0
     */
    constructor();
}

/**
 * A unique identifier for scanned items in the item-based scanning APIs. This identifier is automatically generated as a UUID and is used to distinguish between different scanned items within the system.
 *
 * @since 8.1.0
 */
declare class ScannedItemIdentifier {
    private _identifier;
    static fromJSON(identifier: string): ScannedItemIdentifier;
    /**
     * Creates a new scanned item identifier with an automatically generated UUID.
     *
     * @since 8.1.0
     */
    constructor();
}

/**
 * A unique identifier for scanned components in the item-based scanning APIs. This identifier is automatically generated as a UUID and is used to distinguish between different scanned components within the system.
 *
 * @since 8.1.0
 */
declare class ScannedComponentIdentifier {
    private _identifier;
    static fromJSON(identifier: string): ScannedComponentIdentifier;
    /**
     * Creates a new scanned component identifier with an automatically generated UUID.
     *
     * @since 8.1.0
     */
    constructor();
}

/**
 * A unique identifier for barcode components in the item-based scanning APIs. This identifier is automatically generated as a UUID and is used to distinguish between different barcode scan components within the system.
 *
 * @since 8.1.0
 */
declare class BarcodeIdentifier {
    private identifier;
    static fromJSON(definitionId: string): BarcodeIdentifier;
    /**
     * Creates a new barcode identifier with an automatically generated UUID.
     *
     * @since 8.1.0
     */
    constructor();
}

/**
 * A unique identifier for text components in the item-based scanning APIs. This identifier is automatically generated as a UUID and is used to distinguish between different text scan components within the system.
 *
 * @since 8.1.0
 */
declare class TextIdentifier extends DefaultSerializeable {
    private identifier;
    static fromJSON(identifier: string): TextIdentifier;
    /**
     * Creates a new text identifier with an automatically generated UUID.
     *
     * @since 8.1.0
     */
    constructor();
}

/**
 * interface implemented by the different kinds of components that can be used to define a {@link ScanItemDefinition}.
 *
 * @since 8.1.0
 */
interface ScanComponentDefinition<T> {
    /**
     * The unique identifier for this scanned item. May be either {@link BarcodeIdentifier} or {@link TextIdentifier}
     *
     * @since 8.1.0
     */
    identifier: T;
    /**
     * The expected location of the code.
     *
     * @since 8.1.0
     */
    location: Quadrilateral | null;
    /**
     * Whether the code is optional in the {@link ScanItemDefinition}.
     *
     * @since 8.1.0
     */
    optional: boolean;
}

/**
 * A protocol that defines the common interface for scanned components in the item-based scanning APIs. Scanned components represent individual scan results such as barcodes or text that have been detected and localized in the camera frame.
 *
 * @since 8.1.0
 */
interface ScannedComponent<T> {
    /**
     * The unique identifier identifying this instance of the component.
     *
     * @since 8.1.0
     */
    identifier: ScannedComponentIdentifier;
    /**
     * The identifier corresponding to this component’s definition. The type of the identifier depends on the specific component type (e.g., {@link BarcodeIdentifier} for barcode components, {@link TextIdentifier} for text components).
     *
     * @since 8.1.0
     */
    definitionIdentifier: T;
    /**
     * The location of the component. The quadrilateral represents the four corner points of the detected component’s bounding area.
     *
     * @since 8.1.0
     */
    location: Quadrilateral;
}

/**
 * A scanned barcode component in the item-based scanning APIs. This class represents a detected and decoded barcode with all its associated data and metadata.
 *
 * ScannedBarcode implements the {@link ScannedComponent} protocol, providing a unique identifier and location information, along with barcode-specific properties such as symbology, payload data, and decoding metadata.
 *
 * @since 8.1.0
 */
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
    /**
     * The unique identifier for this instance of the barcode component.
     *
     * @since 8.1.0
     */
    get identifier(): ScannedComponentIdentifier;
    /**
     * The unique identifier for the definition of this barcode component.
     *
     * @since 8.1.0
     */
    get definitionIdentifier(): BarcodeIdentifier;
    /**
     * The location of the barcode as a quadrilateral.
     *
     * @since 8.1.0
     */
    get location(): Quadrilateral;
    /**
     * The symbology of the scanned barcode.
     *
     * @since 8.1.0
     */
    get symbology(): Symbology;
    /**
     * The data of this barcode as a unicode string. May be *null* for barcodes containing non-printable characters, or characters that cannot be represented as unicode code points, or nul-bytes in the middle of the string
     *
     * @since 8.1.0
     */
    get payloadString(): string | null;
    /**
     * The add-on payload string if the barcode has an add-on. *null* if the barcode does not have an add-on.
     *
     * @since 8.1.0
     */
    get addOnPayloadString(): string | null;
    /**
     * The composite payload string if the barcode is part of a composite barcode. *null* if the barcode is not composite.
     *
     * @since 8.1.0
     */
    get compositePayloadString(): string | null;
    /**
     * *True* for codes that carry GS1 data.
     *
     * @since 8.1.0
     */
    get isGS1DataCarrier(): boolean;
    /**
     * Flag to hint whether the barcode is part of a composite code.
     *
     * @since 8.1.0
     */
    get compositeFlag(): CompositeFlag;
    /**
     * Whether the recognized code is color inverted (printed bright on dark background).
     *
     * @since 8.1.0
     */
    get isColorInverted(): boolean;
    /**
     * The symbol count of this barcode.
     *
     * @since 8.1.0
     */
    get symbolCount(): number;
    /**
     * Id of the frame from which this barcode information was obtained.
     *
     * @since 8.1.0
     */
    get frameId(): number;
    /**
     * Whether the barcode is a structured append barcode.
     *
     * @since 8.1.0
     */
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

/**
 * A scanned text component in the item-based scanning APIs. This class represents detected and recognized text with its associated location and identification information.
 *
 * ScannedText implements the {@link ScannedComponent} protocol, providing a unique identifier and location information, along with the recognized text content.
 *
 * @since 8.1.0
 */
declare class ScannedText implements ScannedComponent<TextIdentifier> {
    private _identifier;
    private _definitionIdentifier;
    private _location;
    private _text;
    static fromJSON(json: ScannedTextJSON): ScannedText;
    private constructor();
    /**
     * The unique identifier for this instance of the text component.
     *
     * @since 8.1.0
     */
    get identifier(): ScannedComponentIdentifier;
    /**
     * The unique identifier for the definition of this text component.
     *
     * @since 8.1.0
     */
    get definitionIdentifier(): TextIdentifier;
    /**
     * The location of the text in the image as a quadrilateral.
     *
     * @since 8.1.0
     */
    get location(): Quadrilateral;
    /**
     * The recognized text content.
     *
     * @since 8.1.0
     */
    get text(): string;
}
interface ScannedTextJSON {
    identifier: string;
    definitionId: string;
    location: QuadrilateralJSON;
    text: string;
}

/**
 * A scanned item in the item-based scanning APIs that represents a collection of related scan components. A scanned item can contain multiple barcode and text components that are logically grouped together.
 *
 * This class provides access to all the individual {@link ScannedComponent} objects that make up the item, as well as convenient methods to retrieve specific components by their identifiers.
 *
 * @since 8.1.0
 */
declare class ScannedItem {
    private _identifier;
    private _definitionIdentifier;
    private _components;
    static fromJSON(json: ScannedItemJSON): ScannedItem;
    private constructor();
    /**
     * The unique identifier for this scanned item. May be *null* if the item doesn’t have a specific identifier.
     *
     * @since 8.1.0
     */
    get identifier(): ScannedItemIdentifier | null;
    /**
     * The unique identifier corresponding to the {@link ScanItemDefinition} for this item. May be *null* if item is located but not defined.
     *
     * @since 8.1.0
     */
    get definitionIdentifier(): ScanItemIdentifier | null;
    /**
     * An array of all scan components that make up this item. Components can be either {@link ScannedBarcode} or {@link ScannedText} objects.
     *
     * @since 8.1.0
     */
    get components(): ScannedComponent<any>[];
    /**
     * Retrieves a specific barcode component from this item by its identifier.
     *
     * Param BarcodeIdentifier identifierThe identifier associated with the barcode definition of the barcode component to retrieve.ReturnsThe {@link ScannedBarcode} with the given identifier, or *null* if no such barcode exists in this item.
     *
     * @since 8.1.0
     */
    barcodeForIdentifier(identifier: BarcodeIdentifier): ScannedBarcode | null;
    /**
     * Retrieves a specific text component from this item by its identifier.
     *
     * Param TextIdentifier identifierThe identifier associated with the text definition of the text component to retrieve.ReturnsThe {@link ScannedText} with the given identifier, or *null* if no such text exists in this item.
     *
     * @since 8.1.0
     */
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

/**
 * A definition for a target scan item in the item-based scanning APIs that represents a collection of related scan components. A scan item definition can contain multiple barcode and text components that are logically grouped together.
 *
 * @since 8.1.0
 */
declare class ScanItemDefinition extends DefaultSerializeable {
    /**
     * A callback that gets called every time a new scan item is detected.
     *
     * @since 8.1.0
     */
    onScan?: (item: ScannedItem) => void;
    private _scanItemIdentifier;
    private _identifier;
    private _components;
    /**
     * A constructor that requires an identifier and a list of {@link ScannedComponent} objects that make up the item.
     *
     * @since 8.1.0
     */
    constructor(identifier: ScanItemIdentifier, components: ScanComponentDefinition<any>[]);
    /**
     * A constructor that requires a list of {@link ScannedComponent} objects that make up the item. It uses default identifier.
     *
     * @since 8.3.0
     */
    static fromComponents(components: ScanComponentDefinition<any>[]): ScanItemDefinition;
    /**
     * The unique identifier for this scanned item.
     *
     * @since 8.1.0
     */
    get identifier(): ScanItemIdentifier;
    /**
     * An array of all scan components that make up this item. Components can be either {@link ScannedBarcode} or {@link ScannedText} objects.
     *
     * @since 8.1.0
     */
    get components(): ScanComponentDefinition<any>[];
}

/**
 * A semantic type to be applied to a {@link TextDefinition}.
 *
 * @since 8.1.0
 */
declare enum ScanComponentTextSemanticType {
    /** @since 8.1.0 */
    Custom = "custom",
    /** @since 8.1.0 */
    ExpiryDate = "expiryDate",
    /** @since 8.1.0 */
    PackingDate = "packingDate",
    /** @since 8.1.0 */
    TotalPrice = "totalPrice",
    /** @since 8.1.0 */
    UnitPrice = "unitPrice",
    /** @since 8.1.0 */
    Weight = "weight"
}

/**
 * A class that holds the definition for a text expected to be scanned as part of a certain {@link ScanItemDefinition}.
 *
 * @since 8.1.0
 */
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
    /**
     * Creates a builder object that can be used to fluently create a TextDefinition instance.
     *
     * @since 8.1.0
     */
    static builder(identifier: TextIdentifier): TextDefinitionBuilder;
    /**
     * A constructor that receives the identifier for the text definition.
     *
     * @since 8.1.0
     */
    constructor(identifier: TextIdentifier);
    /**
     * The unique identifier for this component.
     *
     * @since 8.1.0
     */
    get identifier(): TextIdentifier;
    /**
     * The expected location of the text.
     *
     * @since 8.1.0
     */
    get location(): Quadrilateral | null;
    set location(value: Quadrilateral | null);
    /**
     * Whether the text is optional.
     *
     * @since 8.1.0
     */
    get optional(): boolean;
    set optional(value: boolean);
    /**
     * A semantic type to be applied to the text definition.
     *
     * @since 8.1.0
     */
    get semantics(): ScanComponentTextSemanticType | null;
    set semantics(value: ScanComponentTextSemanticType | null);
    /**
     * A list of hidden properties to set on the text definition.
     *
     * @since 8.1.0
     */
    get hiddenProperties(): string;
    set hiddenProperties(value: string);
    /**
     * A list of value regex to use when searching for the text.
     *
     * @since 8.1.0
     */
    get valueRegexes(): string[];
    set valueRegexes(value: string[]);
    /**
     * A list of anchor regexes to use when searching for the text.
     *
     * @since 8.1.0
     */
    get anchorRegexes(): string[];
    set anchorRegexes(value: string[]);
}
/**
 * A fluent builder class for creating {@link TextDefinition} objects with a convenient, chainable interface. This builder provides methods to add various field types and configure their properties in a structured manner.
 *
 * @since 8.1.0
 */
declare class TextDefinitionBuilder {
    private textDefinition;
    /**
     * Creates a new builder for the given identifier.
     *
     * @since 8.1.0
     */
    constructor(identifier: TextIdentifier);
    /**
     * Sets whether the text component is optional in the item definition. Returns the builder for configuring the rest of the properties.
     *
     * @since 8.1.0
     */
    setOptional(optional: boolean): TextDefinitionBuilder;
    /**
     * Sets a predefined semantics type for the text. Returns the builder for configuring the rest of the properties.
     *
     * @since 8.1.0
     */
    setSemantics(semantics: ScanComponentTextSemanticType): TextDefinitionBuilder;
    /**
     * Sets an expected location for the text. Returns the builder for configuring the rest of the properties.
     *
     * @since 8.1.0
     */
    setLocation(location: Quadrilateral | null): TextDefinitionBuilder;
    /**
     * Sets the hidden properties for the component. Returns the builder for configuring the rest of the properties.
     *
     * @since 8.1.0
     */
    setHiddenProperties(hiddenProperties: string): TextDefinitionBuilder;
    /**
     * Sets the value regexes for the text. Returns the builder for configuring the rest of the properties.
     *
     * @since 8.1.0
     */
    setValueRegexes(valueRegexes: string[]): TextDefinitionBuilder;
    /**
     * Sets the anchor regexes for the text. Returns the builder for configuring the rest of the properties.
     *
     * @since 8.1.0
     */
    setAnchorRegexes(anchorRegexes: string[]): TextDefinitionBuilder;
    /**
     * Builds the {@link TextDefinition} object.
     *
     * @since 8.1.0
     */
    build(): TextDefinition;
}

/**
 * A preset to be applied to a {@link BarcodeDefinition}.
 *
 * @since 8.1.0
 */
declare enum ScanComponentBarcodePreset {
    /** @since 8.1.0 */
    CustomBarcode = "customBarcode",
    /** @since 8.1.0 */
    ImeiOneBarcode = "imeiOneBarcode",
    /** @since 8.1.0 */
    ImeiTwoBarcode = "imeiTwoBarcode",
    /** @since 8.1.0 */
    PartNumberBarcode = "partNumberBarcode",
    /** @since 8.1.0 */
    SerialNumberBarcode = "serialNumberBarcode"
}

/**
 * A class that holds the definition for a barcode expected to be scanned as part of a certain {@link ScanItemDefinition}.
 *
 * @since 8.1.0
 */
declare class BarcodeDefinition extends DefaultSerializeable implements ScanComponentDefinition<BarcodeIdentifier> {
    /**
     * The expected location of the barcode.
     *
     * @since 8.1.0
     */
    location: Quadrilateral | null;
    /**
     * A preset to be applied to the barcode definition.
     *
     * @since 8.1.0
     */
    preset: ScanComponentBarcodePreset | null;
    /**
     * A list of hidden properties to set on the barcode definition.
     *
     * @since 8.1.0
     */
    hiddenProperties: string | null;
    /**
     * A list of value regexes to use when searching for the barcode.
     *
     * @since 8.1.0
     */
    valueRegexes: string[];
    /**
     * A list of anchor regexes to use when searching for the barcode.
     *
     * @since 8.1.0
     */
    anchorRegexes: string[];
    private type;
    private _barcodeIdentifier;
    private _identifier;
    private _symbologiesArray;
    private _optional;
    private _mandatoryInstances;
    /**
     * Creates a builder object that can be used to fluently create a BarcodeDefinition instance.
     *
     * @since 8.1.0
     */
    static builder(identifier: BarcodeIdentifier): BarcodeDefinitionBuilder;
    /**
     * The unique identifier for this component.
     *
     * @since 8.1.0
     */
    get identifier(): BarcodeIdentifier;
    /**
     * The list of symbologies that the barcode could be using.
     *
     * @since 8.1.0
     */
    get symbologies(): Set<Symbology>;
    /**
     * Whether the barcode is optional.
     *
     * @since 8.1.0
     */
    get optional(): boolean;
    set optional(value: boolean);
    /**
     * A constructor that receives the identifier and symbologies for the barcode definition.
     *
     * @since 8.1.0
     */
    constructor(identifier: BarcodeIdentifier, symbologies: Set<Symbology>);
}
/**
 * A fluent builder class for creating {@link BarcodeDefinition} objects with a convenient, chainable interface. This builder provides methods to add various field types and configure their properties in a structured manner.
 *
 * @since 8.1.0
 */
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
    /**
     * Sets whether the barcode component is optional in the item definition. Returns the builder for configuring the rest of the properties.
     *
     * @since 8.1.0
     */
    setOptional(optional: boolean): BarcodeDefinitionBuilder;
    /**
     * Sets the barcode symbologies for the component. Returns the builder for configuring the rest of the properties.
     *
     * @since 8.1.0
     */
    setSymbologies(symbologies: Set<Symbology>): BarcodeDefinitionBuilder;
    /**
     * Sets a predefined preset for the component. Returns the builder for configuring the rest of the properties.
     *
     * @since 8.1.0
     */
    setPreset(preset: ScanComponentBarcodePreset | null): BarcodeDefinitionBuilder;
    /**
     * Sets an expected location for the barcode. Returns the builder for configuring the rest of the properties.
     *
     * @since 8.1.0
     */
    setLocation(location: Quadrilateral | null): BarcodeDefinitionBuilder;
    /**
     * Sets the hidden properties for the component. Returns the builder for configuring the rest of the properties.
     *
     * @since 8.1.0
     */
    setHiddenProperties(hiddenProperties: string): BarcodeDefinitionBuilder;
    /**
     * Sets the value regexes for the barcode. Returns the builder for configuring the rest of the properties.
     *
     * @since 8.1.0
     */
    setValueRegexes(valueRegexes: string[]): BarcodeDefinitionBuilder;
    /**
     * Sets the anchor regexes for the barcode. Returns the builder for configuring the rest of the properties.
     *
     * @since 8.1.0
     */
    setAnchorRegexes(anchorRegexes: string[]): BarcodeDefinitionBuilder;
    /**
     * Builds the {@link BarcodeDefinition} object.
     *
     * @since 8.1.0
     */
    build(): BarcodeDefinition;
}

/**
 * Holds all the SparkScan settings, such as enabled symbologies and scan intention.
 *
 * For the settings to take effect, they must be applied to a {@link SparkScan} instance using SparkScan.applySettings().
 *
 * By default, all types of barcodes (symbologies) are disabled. To scan barcodes, you need to manually enable all the symbologies you want to scan in your application.
 *
 * The following lines of code show how to enable {@link Symbology.Code128} and apply the settings to {@link SparkScan}.
 *
 * ```jsx
 * const settings = new SparkScanSettings();
 * settings.enableSymbology(Symbology.Code128, true);
 * sparkScan.applySettings(settings);
 * ```
 *
 * @since 6.16.0
 */
declare class SparkScanSettings extends DefaultSerializeable {
    private _codeDuplicateFilter;
    private _codeDuplicateFilterExplicitlySet;
    /**
     * The scan intention algorithm to use with SparkScan. Defaults to {@link ScanIntention.Smart}. Setting this property to `ScanIntention.SmartSelection` is deprecated in 8.5 and will be removed in a future release; the smart-selection behavior will be exposed through a `SelectionMode.Auto` setting on `SparkScanSettings` in a future framework release.
     *
     * While {@link SparkScanSettings.selectionMode} is set to {@link SelectionMode.On}, this property is recorded but does not take effect — the SDK forces smart selection internally so that the aimer is shown and the tap-to-confirm contract of {@link SelectionMode.On} holds. The value supplied here is remembered and applied automatically when {@link SparkScanSettings.selectionMode} leaves {@link SelectionMode.On}.
     *
     * @since 6.24.0
     */
    scanIntention: ScanIntention$1;
    /**
     * Controls whether the aimed-at barcode is scanned without user confirmation. Defaults to {@link SelectionMode.Auto}, letting the SDK decide dynamically — the recommended replacement for the deprecated `ScanIntention.SmartSelection`.
     *
     * Set to {@link SelectionMode.Off} to scan barcodes automatically as soon as they are aimed at. Set to {@link SelectionMode.On} to always require an explicit tap on the SparkScan trigger button to confirm the scan.
     *
     * {@link SelectionMode.Auto} requires {@link SparkScanSettings.scanIntention} to be set to {@link ScanIntention.Smart}; with {@link ScanIntention.Manual} it behaves like {@link SelectionMode.Off}. Automatic selection only activates on devices that support Smart.
     *
     * When {@link SelectionMode.On} is active, the hold-to-scan gesture on the trigger button is automatically disabled by the SDK — continuous scanning would contradict the explicit-confirmation contract of Selection On. {@link SparkScanViewSettings.holdToScanEnabled} is ignored in this mode and integrators do not need to disable it themselves.
     *
     * @since 8.5.0
     */
    selectionMode: SelectionMode$1;
    private _batterySaving;
    private _locationSelection;
    /**
     * The enabled {@link CompositeType|composite types}. To enable composite codes scanning it is also needed to enable the symbologies that make up the specific type of composite code through {@link SparkScanSettings.enableSymbologiesForCompositeTypes}.
     *
     * @since 8.3.0
     */
    enabledCompositeTypes: CompositeType[];
    /**
     * The battery saving mode to use with SparkScan. Default to {@link BatterySavingMode.Auto}, automatically enabling the battery saving mode when a higher than usual consumption of the battery is detected, balancing performance and battery lifetime.
     *
     * @since 6.21.0
     */
    get batterySaving(): BatterySavingMode$1;
    set batterySaving(newValue: BatterySavingMode$1);
    /**
     * Defines the strategy with which to select one out of many visible barcodes. By default, this property is *null* and code selection is disabled.
     *
     * @since 6.16.0
     */
    get locationSelection(): LocationSelection$1 | null;
    set locationSelection(newValue: LocationSelection$1 | null);
    /**
     * Determines the time interval in which codes with the same symbology/data are filtered out as duplicates. Use this property to change the interval or completely turn off duplicate filtering:
     *
     * - Setting this property to the special value -2 (default from SDK version 7.1.0) will result in a behavior that depends on {@link SparkScanSettings.scanIntention}. - If {@link ScanIntention.Smart} (default from 8.1), it enables the Smart Duplicate Filter algorithm that intelligently reports a duplicate when the user intends to scan it again, reducing errors and speeding up the workflow. - If {@link ScanIntention.Manual}, it acts as when setting {@link SparkScanSettings.codeDuplicateFilter} to 1.5s (check the following). This behavior applies also to the cases in which the Android device doesn’t support {@link ScanIntention.Smart}.
     * - Since SDK version 8.5, when {@link SparkScanSettings.selectionMode} is {@link SelectionMode.On} and this property is left at its smart default (-2), the filter is internally treated as 0 (filtering disabled) so the user can re-select the same barcode via the selection gesture. Setting this property to any value explicitly — including -2 — opts out of this override.
     * - Setting this property to the special value -1 means that the same code will not be reported again until the scanning has been stopped.
     *
     * - Setting this property to a value of 0 means that the same code will be reported every time it is found.
     * - Setting this property to a value larger than zero indicates the time that must pass between the same code to be reported again.
     *
     * @since 6.16.0
     */
    get codeDuplicateFilter(): number;
    set codeDuplicateFilter(newValue: number);
    private properties;
    private symbologies;
    /**
     * Returns the set of enabled symbologies.
     *
     * @since 6.16.0
     */
    get enabledSymbologies(): Symbology[];
    private _itemDefinitions;
    /**
     * A list of {@link ScanItemDefinition} objects used to configure this settings instance using item-based scanning API. If you set this property, the {@link SparkScanSettings.enabledSymbologies} property will be ignored. If set to null, the {@link SparkScanSettings.enabledSymbologies} property will be used.
     *
     * This API is still in beta and may change in future versions of Scandit Data Capture SDK.
     *
     * @since 8.1.0
     */
    get itemDefinitions(): ScanItemDefinition[] | null;
    set itemDefinitions(value: ScanItemDefinition[] | null);
    private _capturePresets;
    private static get sparkScanDefaults();
    private static get barcodeDefaults();
    /**
     * Constructs new Spark Scan settings based on the provided presets, enabling relevant symbologies and optimizations. See {@link CapturePreset} for more information on how to use capture presets.
     *
     * @since 8.3.0
     */
    constructor(capturePresets?: Set<CapturePreset>);
    /**
     * Gets {@link SymbologySettings} specific for the given {@link Symbology}.
     *
     * Note that modifying the returned object doesn’t automatically apply the changes to {@link SparkScan}. After you made changes to the symbology settings, call SparkScan.applySettings() with these {@link SparkScanSettings} to apply them.
     *
     * @since 6.16.0
     */
    settingsForSymbology(symbology: Symbology): SymbologySettings$1;
    /**
     * Sets a property to the provided value. Use this method to set properties that are not yet part of a stable API. Properties set through this method may or may not be used or change in a future release.
     *
     * @since 6.16.0
     */
    setProperty(name: string, value: any): void;
    /**
     * Retrieves the value of a previously set property.
     *
     * @since 6.16.0
     */
    getProperty(name: string): any;
    /**
     * Provides a convenient shortcut to enable decoding of particular symbologies without having to go through {@link SymbologySettings}. By default, all symbologies are turned off and symbologies need to be explicitly enabled.
     *
     * @since 6.16.0
     */
    enableSymbologies(symbologies: Symbology[]): void;
    /**
     * Provides a convenient shortcut to enable/disable decoding of a particular symbology without having to go through {@link SymbologySettings}.
     *
     * Some 1d barcode symbologies allow you to encode variable-length data. By default, the Scandit Data Capture SDK only scans barcodes in a certain length range.
     *
     * If your application requires scanning of one of these symbologies, and the length is falling outside the default range, you may need to adjust the {@link SymbologySettings.activeSymbolCounts|active symbol counts} for the symbology in addition to enabling it.
     *
     * @since 6.16.0
     */
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    /**
     * Enables all symbologies needed for the given {@link CompositeType|composite types}. To enable composite codes scanning it is also needed to enable the composite types through {@link SparkScanSettings.enabledCompositeTypes}. By default, all symbologies are turned off and symbologies need to be explicitly enabled.
     *
     * @since 8.3.0
     */
    enableSymbologiesForCompositeTypes(compositeTypes: CompositeType[]): void;
    private get compositeTypeDescriptions();
}

/**
 * Contains information about spark-scan-specific licensing.
 *
 * @since 8.6.0
 */
declare class SparkScanLicenseInfo {
    private _licensedSymbologies;
    /**
     * Which symbologies are licensed and can be used for SparkScan.
     *
     * @since 8.6.0
     */
    get licensedSymbologies(): Symbology[];
    static fromJSON(json: {
        licensedSymbologies?: string[];
    }): SparkScanLicenseInfo;
}

/** @internal */
interface SparkScanSessionControllerHost {
    resetSession(): Promise<void>;
}
/**
 * The SparkScan session is responsible for determining the list of *relevant* barcodes by filtering out duplicates. This filtering of duplicates is completely time-based and does not use any information about the location of the barcode. By default, all the codes scanned in a frame are always reported. It is possible to filter out codes recently scanned by changing {@link SparkScanSettings.codeDuplicateFilter}.
 *
 * When {@link SparkScan.isEnabled|the SparkScan mode is disabled}, the session’s duplicate filter is reset.
 *
 * The SparkScan session should only be accessed from within didScan() or didUpdateSession() and from the thread these methods are called from. It is not safe to be accessed from anywhere else since it may be concurrently modified.
 *
 * @since 6.16.0
 */
declare class SparkScanSession {
    private _newlyRecognizedBarcode;
    private _frameSequenceID;
    private _allScannedItems;
    private _newlyRecognizedItems;
    private _controller;
    protected constructor(newlyRecognizedBarcode: Barcode | null, frameSequenceID: number, allScannedItems: ScannedItem[], newlyRecognizedItems: ScannedItem[], controller: SparkScanSessionControllerHost);
    /**
     * Last newly recognized barcode in the last processed frame.
     *
     * @since 6.26.0
     */
    get newlyRecognizedBarcode(): Barcode | null;
    /**
     * The identifier of the current frame sequence.
     *
     * As long as there is no interruption of frames coming from the camera, the {@link SparkScanSession.frameSequenceID} will stay the same. Note that every time target mode is switched on or off, this number will change.
     *
     * @since 6.16.0
     */
    get frameSequenceID(): number;
    /**
     * An array containing all scanned items detected during the current session. Each {@link ScannedItem} represents a logical grouping of scan components (barcodes and text) that were recognized together.
     *
     * This API is still in beta and may change in future versions of Scandit Data Capture SDK.
     *
     * @since 8.1.0
     */
    get allScannedItems(): ScannedItem[];
    /**
     * An array containing newly recognized items detected in the last processed frame. Each {@link ScannedItem} represents a logical grouping of scan components (barcodes and text) that were recognized together.
     *
     * This API is still in beta and may change in future versions of Scandit Data Capture SDK.
     *
     * @since 8.1.0
     */
    get newlyRecognizedItems(): ScannedItem[];
    /**
     * Resets the SparkScan session, effectively clearing the history of scanned codes. This affects duplicate filtering: when calling {@link SparkScanSession.reset} every frame has the same effect as setting the {@link SparkScanSettings.codeDuplicateFilter} to 0. This function should only be called inside the listeners’ callback.
     *
     * @since 6.16.0
     */
    reset(): Promise<void>;
}
interface SparkScanSessionJSON {
    newlyRecognizedBarcode: BarcodeJSON | null;
    frameSequenceId: number;
    allScannedItems: ScannedItemJSON[];
    newlyRecognizedItems: ScannedItemJSON[];
}




/**
 * Listener interface for traditional SparkScan.
 *
 * @since 6.16.0
 */
interface SparkScanListener {
    /**
     * Invoked after a frame has been processed by SparkScan and the session has been updated. In contrast to didScan(), this method is invoked, regardless whether a code was scanned or not. If codes were recognized in this frame, this method is invoked after didScan().
     *
     * This method is invoked from a recognition internal thread. To perform UI work, you must dispatch to the main thread first. Further recognition is blocked until this method completes. It is thus recommended to do as little work as possible in this method.
     *
     * {@link FrameData} is *null* if the camera is frozen and the selection is changed.
     *
     * @since 6.16.0
     */
    didUpdateSession?(sparkScan: SparkScan, session: SparkScanSession, getFrameData: () => Promise<FrameData | null>): Promise<void>;
    /**
     * Invoked whenever a code has been scanned. The newly scanned barcode can be retrieved from {@link SparkScanSession.newlyRecognizedBarcode}.
     *
     * This method is invoked from a recognition internal thread. To perform UI work, you must dispatch to the main thread first. After receiving this callback, you will typically want to start processing the scanned barcodes. Keep in mind however, that any further recognition is blocked until this method completes. Therefore, if you need to perform a time-consuming operation, like querying a database or opening an URL encoded in the barcode data, consider switching to another thread.
     *
     * Sometimes, after receiving this callback, you may want to stop scanning. You can do that by {@link SparkScan.isEnabled|disabling the SparkScan}.
     *
     * {@link FrameData} is *null* if the camera is frozen and the selection is changed.
     *
     * @since 6.16.0
     */
    didScan?(sparkScan: SparkScan, session: SparkScanSession, getFrameData: () => Promise<FrameData | null>): Promise<void>;
}



/**
 * Capture mode that implements SparkScan.
 *
 * This capture mode uses the *barcode scanning* capability. It cannot be used together with other capture modes that require the same capabilities, e.g. {@link BarcodeCapture}.
 *
 * @since 6.16.0
 */
declare class SparkScan extends DefaultSerializeable {
    private type;
    /**
     * This flag indicates whether the SparkScan mode is currently processing frames to recognise barcodes.
     *
     * Changing this property from *false* to *true* causes the connected {@link SparkScanView} to start its scanning flow.
     *
     * Changing this property from *true* to *false* causes the connected {@link SparkScanView} to stop its scanning flow and go to idle mode.
     *
     * @since 6.16.0
     */
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    /**
     * The context this mode is attached to. When the data capture mode is not attached to a context, *null* is returned.
     *
     * @since 6.16.0
     */
    get context(): DataCaptureContext | null;
    private _isEnabled;
    private settings;
    private hasListeners;
    private privateContext;
    private get _context();
    private set _context(value);
    private listeners;
    private controller;
    /**
     * Constructs a new SparkScan mode with the provided settings.
     *
     * @since 7.6.0
     */
    constructor(settings?: SparkScanSettings);
    /**
     * Asynchronously applies the new settings to the barcode scanner. If the scanner is currently running, the task will complete when the next frame is processed, and will use the new settings for that frame. If the scanner is currently *not* running, the task will complete as soon as the settings have been stored and won’t wait until the next frame is going to be processed.
     *
     * @since 6.16.0
     */
    applySettings(settings: SparkScanSettings): Promise<void>;
    /**
     * Async getter for the SparkScan license info. Returns *null* until the mode has been added to a {@link DataCaptureContext} with a license that covers SparkScan.
     *
     * @since 8.6.0
     */
    getSparkScanLicenseInfo(): Promise<SparkScanLicenseInfo | null>;
    /**
     * Adds the listener to this SparkScan instance.
     *
     * In case the same listener is already observing this instance, calling this method will not add the listener again.
     *
     * @since 6.16.0
     */
    addListener(listener: SparkScanListener): void;
    /**
     * Removes a previously added listener from this SparkScan instance.
     *
     * In case the listener is not currently observing this instance, calling this method has no effect.
     *
     * @since 6.16.0
     */
    removeListener(listener: SparkScanListener): void;
    private didChange;
    private hasItemDefinitions;
}

/** @since 6.19.0 */
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
    /**
     * Should toasts be shown or not.
     *
     * Default is *true*.
     *
     * @since 6.19.0
     */
    set toastEnabled(isEnabled: boolean);
    get toastEnabled(): boolean;
    /**
     * Background color of the toast. If this property is *null*, a default color will be used.
     *
     * Default is *null*.
     *
     * @since 6.19.0
     */
    set toastBackgroundColor(backgroundColor: Color$1 | null);
    get toastBackgroundColor(): Color$1 | null;
    /**
     * Text color of the toast. If this property is *null*, a default color will be used.
     *
     * Default is *null*.
     *
     * @since 6.19.0
     */
    set toastTextColor(textColor: Color$1 | null);
    get toastTextColor(): Color$1 | null;
    /**
     * Text of the toast when target mode enabled.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 6.19.0
     * @deprecated Use selectionModeOnMessage instead. Will be removed in 9.0.
     */
    set targetModeEnabledMessage(message: string | null);
    /**
     * @deprecated Use selectionModeOnMessage instead. Will be removed in 9.0.
     */
    get targetModeEnabledMessage(): string | null;
    /**
     * Text of the toast when target mode disabled.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 6.19.0
     * @deprecated Use selectionModeOffMessage instead. Will be removed in 9.0.
     */
    set targetModeDisabledMessage(message: string | null);
    /**
     * @deprecated Use selectionModeOffMessage instead. Will be removed in 9.0.
     */
    get targetModeDisabledMessage(): string | null;
    /**
     * Shown when {@link SparkScanSettings.selectionMode} is set to {@link SelectionMode.On}. Replaces the deprecated `TargetModeEnabledMessage`.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 8.5.0
     */
    set selectionModeOnMessage(message: string | null);
    get selectionModeOnMessage(): string | null;
    /**
     * Shown when {@link SparkScanSettings.selectionMode} is set to {@link SelectionMode.Off}. Replaces the deprecated `TargetModeDisabledMessage`.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 8.5.0
     */
    set selectionModeOffMessage(message: string | null);
    get selectionModeOffMessage(): string | null;
    /**
     * Text of the toast when {@link SparkScanScanningBehavior.Continuous} capturing mode enabled.
     *
     * Default is *null*. If this property is *null*, a default message will be shown.
     *
     * If this property is an empty string, the toast will not be shown.
     *
     * @since 6.19.0
     */
    set continuousModeEnabledMessage(message: string | null);
    get continuousModeEnabledMessage(): string | null;
    /**
     * Text of the toast when {@link SparkScanScanningBehavior.Continuous} capturing mode disabled.
     *
     * Default is *null*. If this property is *null*, a default message will be shown.
     *
     * If this property is an empty string, the toast will not be shown.
     *
     * @since 6.19.0
     */
    set continuousModeDisabledMessage(message: string | null);
    get continuousModeDisabledMessage(): string | null;
    /**
     * Text of the toast when {@link SparkScanPreviewBehavior.Persistent} capturing mode is enabled and scanning is paused.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 6.23.0
     */
    set scanPausedMessage(message: string | null);
    get scanPausedMessage(): string | null;
    /**
     * Text of the toast when zooming in.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 6.23.0
     */
    set zoomedInMessage(message: string | null);
    get zoomedInMessage(): string | null;
    /**
     * Text of the toast when zooming out.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 6.23.0
     */
    set zoomedOutMessage(message: string | null);
    get zoomedOutMessage(): string | null;
    /**
     * Text of the toast when torch is enabled.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 6.23.0
     */
    set torchEnabledMessage(message: string | null);
    get torchEnabledMessage(): string | null;
    /**
     * Text of the toast when torch is disabled.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 6.23.0
     */
    set torchDisabledMessage(message: string | null);
    get torchDisabledMessage(): string | null;
    /**
     * Text of the toast when world facing camera is enabled.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 6.24.0
     */
    set worldFacingCameraEnabledMessage(message: string | null);
    get worldFacingCameraEnabledMessage(): string | null;
    /**
     * Text of the toast when user facing camera is enabled.
     *
     * Default is *null*. If this property is *null*, a default message will be shown. If this property is an empty string, the toast will not be shown.
     *
     * @since 6.24.0
     */
    set userFacingCameraEnabledMessage(message: string | null);
    get userFacingCameraEnabledMessage(): string | null;
    /**
     * Constructs a new SparkScan toast settings with all parameters specified. When called with no parameters (or all parameters as undefined/null), defaults from native will be used. Parameters not provided will use their default values from the native platform.
     *
     * @since 8.3.0
     */
    constructor(toastEnabled?: boolean, toastBackgroundColor?: Color$1 | null, toastTextColor?: Color$1 | null, targetModeEnabledMessage?: string | null, targetModeDisabledMessage?: string | null, selectionModeOnMessage?: string | null, selectionModeOffMessage?: string | null, continuousModeEnabledMessage?: string | null, continuousModeDisabledMessage?: string | null, scanPausedMessage?: string | null, zoomedInMessage?: string | null, zoomedOutMessage?: string | null, torchEnabledMessage?: string | null, torchDisabledMessage?: string | null, userFacingCameraEnabledMessage?: string | null, worldFacingCameraEnabledMessage?: string | null);
    private static get sparkScanDefaults();
    private static get toastSettings();
}

/**
 * This is the standard scanning mode for SparkScan.
 *
 * @since 6.16.0
 * @deprecated Use SparkScanSettings.selectionMode = SelectionMode.Off instead. Will be removed in 9.0.
 */
declare class SparkScanScanningModeDefault extends DefaultSerializeable implements SparkScanScanningMode$1 {
    private type;
    private _settings;
    /**
     * The scanning mode provided in the constructor.
     *
     * @since 6.16.0
     */
    get scanningBehavior(): SparkScanScanningBehavior;
    /**
     * The preview behavior provided in the constructor.
     *
     * @since 6.23.0
     */
    get previewBehavior(): SparkScanPreviewBehavior;
    /**
     * Constructs a new default scanning mode with the provided capture mode and preview behavior.
     *
     * @since 6.23.0
     */
    constructor(scanningBehavior: SparkScanScanningBehavior, previewBehavior?: SparkScanPreviewBehavior);
}

/**
 * Target scanning mode. This is meant and optimized to scan codes further away.
 *
 * @since 6.16.0
 * @deprecated Use SparkScanSettings.selectionMode = SelectionMode.On instead. Will be removed in 9.0.
 */
declare class SparkScanScanningModeTarget extends DefaultSerializeable implements SparkScanScanningMode$1 {
    private type;
    private _settings;
    /**
     * The scanning mode provided in the constructor.
     *
     * @since 6.16.0
     */
    get scanningBehavior(): SparkScanScanningBehavior;
    /**
     * The preview behavior provided in the constructor.
     *
     * @since 6.23.0
     */
    get previewBehavior(): SparkScanPreviewBehavior;
    /**
     * Constructs a new target scanning mode with the provided capture mode and preview behavior.
     *
     * @since 6.23.0
     */
    constructor(scanningBehavior: SparkScanScanningBehavior, previewBehavior?: SparkScanPreviewBehavior);
}

/**
 * Changing the values of SparkScanViewSettings instance after the creation of {@link SparkScanView} does not result in applying the changed settings to the corresponding view.
 *
 * @since 6.16.0
 */
declare class SparkScanViewSettings extends DefaultSerializeable {
    /**
     * The timeout to automatically switch to idle state. When set to negative value timeout is infinite.
     *
     * Default is 5 seconds.
     *
     * @since 6.16.0
     */
    triggerButtonCollapseTimeout: number;
    /**
     * Sets the default torch state of the camera.
     *
     * Default is {@link TorchState.Off}.
     *
     * @since 6.16.0
     */
    defaultTorchState: TorchState;
    /**
     * Sets the default scanning mode of the view.
     *
     * Default is {@link SparkScanScanningModeDefault}.
     *
     * @since 6.16.0
     * @deprecated Use SparkScanSettings.selectionMode plus SparkScanViewSettings.scanningBehavior / previewBehavior instead. Will be removed in 9.0.
     */
    defaultScanningMode: SparkScanScanningMode$1;
    /**
     * Whether the SparkScan view scans a single barcode per trigger or keeps scanning continuously while the trigger is held. Replaces the embedded `scanningBehavior` field on the deprecated {@link SparkScanViewSettings.defaultScanningMode}.
     *
     * Default is {@link SparkScanScanningBehavior.Single}.
     *
     * @since 8.7.0
     */
    get scanningBehavior(): SparkScanScanningBehavior;
    set scanningBehavior(value: SparkScanScanningBehavior);
    /**
     * Whether the SparkScan preview returns to its idle state after a scan or stays expanded.
     *
     * Replaces the embedded `previewBehavior` field on the deprecated {@link SparkScanViewSettings.defaultScanningMode}.
     *
     * Default is {@link SparkScanPreviewBehavior.Default}.
     *
     * @since 8.7.0
     */
    get previewBehavior(): SparkScanPreviewBehavior;
    set previewBehavior(value: SparkScanPreviewBehavior);
    /**
     * Indicates whether to keep scanning as long as the scan button is pressed.
     *
     * Default is *true*.
     *
     * Hold-to-scan is automatically disabled by the SDK when {@link SparkScanSettings.selectionMode} is set to {@link SelectionMode.On}, since that mode requires explicit user confirmation for every scan. The value of this property is ignored while `SelectionMode.On` is active.
     *
     * @since 6.16.0
     */
    holdToScanEnabled: boolean;
    /**
     * Indicates whether the feedback should have sound enabled.
     *
     * Default is *true*.
     *
     * @since 6.16.0
     */
    soundEnabled: boolean;
    /**
     * Indicates whether the feedback should have haptics enabled.
     *
     * Default is *true*.
     *
     * @since 6.16.0
     */
    hapticEnabled: boolean;
    /** @since 6.16.0 */
    hardwareTriggerEnabled: boolean;
    /**
     * The button that acts as a scan trigger. Leave *null* to use the default button (The default button will be the dedicated HW button on XCover devices, and “volume down” key for other devices). This is only taken into consideration if {@link SparkScanViewSettings.hardwareTriggerEnabled} is true.
     *
     * @since 6.16.0
     */
    hardwareTriggerKeyCode: number | null;
    /**
     * Indicates whether the visual feedback on scan should be displayed.
     *
     * Default is *true*.
     *
     * @since 6.16.0
     */
    visualFeedbackEnabled: boolean;
    /**
     * Sets the toast settings. See {@link SparkScanToastSettings} for details.
     *
     * @since 6.19.0
     */
    toastSettings: SparkScanToastSettings;
    /**
     * The zoom factor to use for the camera.
     *
     * Default is 1.
     *
     * @since 6.23.0
     */
    zoomFactorOut: number;
    /**
     * The zoom factor to move to when the zoom switch control was tapped.
     *
     * Default is 2.
     *
     * @since 6.23.0
     */
    zoomFactorIn: number;
    /**
     * The timeout to automatically stop capturing.
     *
     * Default is 10 seconds.
     *
     * @since 6.23.0
     */
    inactiveStateTimeout: number;
    /**
     * Sets the default camera position.
     *
     * Default is {@link CameraPosition.WorldFacing}.
     *
     * This API is still in beta and may change in future versions of Scandit Data Capture SDK.
     *
     * @since 6.24.0
     */
    defaultCameraPosition: CameraPosition;
    /**
     * Sets the default size of the mini preview.
     *
     * Default is {@link SparkScanMiniPreviewSize.Regular}.
     *
     * @since 7.0.0
     */
    defaultMiniPreviewSize: SparkScanMiniPreviewSize;
    /**
     * Sets the brush to be used for potential candidates when automatic selection is active — that is, when the {@link SparkScanSettings.selectionMode} property is set to {@link SelectionMode.Auto}, or when the deprecated `ScanIntention.SmartSelection` is used. If null, the default brush will be used.
     *
     * The brush’s stroke colour is also used for the aimer’s dwell-progress indicator, falling back to the fill colour when the stroke is transparent.
     *
     * @since 8.5.0
     */
    selectionModeCandidateBrush: Brush$1 | null;
    /**
     * Controls the mirroring of the camera feed to support the use of a periscope device.
     *
     * Default is *false*.
     *
     * This property only has an effect on iOS. It does not affect the camera feed on Android.
     *
     * @since 8.3.0
     */
    periscopeModeEnabled: boolean;
    /**
     * Deprecated alias of {@link SparkScanViewSettings.selectionModeCandidateBrush}.
     *
     * @since 8.1.0
     * @deprecated Use selectionModeCandidateBrush instead. Will be removed in 9.0.
     */
    get smartSelectionCandidateBrush(): Brush$1 | null;
    /**
     * @deprecated Use selectionModeCandidateBrush instead. Will be removed in 9.0.
     */
    set smartSelectionCandidateBrush(value: Brush$1 | null);
    /**
     * Constructs a new SparkScan view settings to use when creating an instance of the {@link SparkScanView}.
     *
     * @since 8.3.0
     */
    constructor();
    private replaceScanningMode;
    toJSON(): object;
    private static get sparkScanDefaults();
    private static get viewSettingsDefaults();
}

/**
 * The view state of {@link SparkScanView}.
 *
 * @since 7.0.0
 */
declare enum SparkScanViewState {
    /**
     * The initial view state for a few moments after SparkScanView is created.
     *
     * @since 7.0.0
     */
    Initial = "initial",
    /**
     * SparkScan is displaying only the collapsed capture button.
     *
     * @since 7.0.0
     */
    Idle = "idle",
    /**
     * SparkScan is displaying an expanded capture button, and if the {@link SparkScanPreviewBehavior} of the current scanning mode is {@link SparkScanPreviewBehavior.Persistent}, we are also displaying camera feed through the mini preview but no actual scanning is taking place. This state is reachable after scanning.
     *
     * It is also reachable after a {@link SparkScanViewSettings.inactiveStateTimeout} timeout.
     *
     * @since 7.0.0
     */
    Inactive = "inactive",
    /**
     * We are actively recognising barcodes, mini preview and expanded capture button are visible.
     *
     * @since 7.0.0
     */
    Active = "active",
    /**
     * User returns {@link Error|SparkScanBarcodeFeedback.Error} from the {@link SparkScanView.feedbackDelegate}. Mini preview is visible with a frozen frame and expanded capture button is visible. If capture button is tapped or after a {@link Error.ResumeCapturingDelay|SparkScanBarcodeErrorFeedback.resumeCapturingDelay} timeout is reached we move to {@link SparkScanViewState.Active} state.
     *
     * @since 7.0.0
     */
    Error = "error"
}



/**
 * Used to emit feedback when capturing barcodes.
 *
 * @since 6.23.0
 */
declare class SparkScanBarcodeFeedback extends DefaultSerializeable {
    protected constructor();
    /**
     * The default success feedback object.
     *
     * @since 8.3.0
     */
    static defaultSuccessFeedback(): Feedback$1;
    /**
     * The default error feedback object.
     *
     * @since 8.3.0
     */
    static defaultErrorFeedback(): Feedback$1;
    protected static get sparkScanDefaults(): SparkScanDefaults;
}

/**
 * Feedback delegate interface for SparkScan. This can be used to customize the emitted feedback for each detected barcode. See {@link SparkScanView.feedbackDelegate}.
 *
 * @since 6.23.0
 */
interface SparkScanFeedbackDelegate {
    /**
     * Invoked for each detected barcode. The implementation should return {@link Success|SparkScanBarcodeFeedback.Success}, {@link Error|SparkScanBarcodeFeedback.Error}, or *null*. If *null* is returned, the default brush is used to visualize the barcode and no other feedback (visual, sound, or haptic) is emitted. By default returns {@link Success|SparkScanBarcodeFeedback.Success}.
     *
     * Note that this method is executed on a background thread.
     *
     * @since 6.23.0
     */
    feedbackForBarcode?(barcode: Barcode): SparkScanBarcodeFeedback | null;
    /**
     * Invoked for each detected scanned item. The implementation should return {@link Success|SparkScanBarcodeFeedback.Success}, {@link Error|SparkScanBarcodeFeedback.Error}, or *null*. If *null* is returned, the default brush is used to visualize the item and no other feedback (visual, sound, or haptic) is emitted. By default returns {@link Success|SparkScanBarcodeFeedback.Success}.
     *
     * Note that this method is executed on a background thread.
     *
     * @since 8.2.0
     */
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
    toolbarBackgroundColor?: Color$1 | null;
    toolbarIconActiveTintColor?: Color$1 | null;
    toolbarIconInactiveTintColor?: Color$1 | null;
    triggerButtonAnimationColor?: Color$1 | null;
    triggerButtonExpandedColor?: Color$1 | null;
    triggerButtonCollapsedColor?: Color$1 | null;
    triggerButtonTintColor?: Color$1 | null;
    triggerButtonImage?: string | null;
    feedbackDelegate?: SparkScanFeedbackDelegate | null;
    shouldHandleAndroidLifecycleAutomatically?: boolean;
}







/**
 * {@link SparkScan} comes with a ready-to-use UI and scanning modes that are purpose-built to tackle high-volume scanning at close range. The SparkScanView integrates with any app without requiring app redesign or customization. It includes:
 *
 * camera preview screenlarge-sized scan buttonquick access toolbar to adjust scanning settings
 *
 * @since 6.16.0
 */
interface SparkScanView {
}



declare class BaseSparkScanView implements SparkScanView {
    context: DataCaptureContext;
    _feedbackDelegate: SparkScanFeedbackDelegate | null;
    shouldHandleAndroidLifecycleAutomatically: boolean;
    private _sparkScan;
    private _controller;
    private _viewId;
    get viewId(): number;
    private viewCreationGate;
    /**
     * Resolves true once this view's native counterpart exists, false if it
     * never will (creation failed, timed out, or the view was torn down).
     *
     * Callers that arrive before creation has been kicked off park until it is,
     * bounded by VIEW_CREATION_PRE_BEGIN_TIMEOUT_MS; once a creation cycle is in
     * flight the bound is VIEW_CREATION_TIMEOUT_MS. Reachable on Cordova/Capacitor
     * when a view method runs before connectToElement().
     *
     * @internal Not part of the documented API surface: it exists so the base
     * view's own action methods can await creation, and is public only because
     * the framework plugins reach it across package boundaries.
     */
    whenViewCreated(): Promise<boolean>;
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
    static get defaultBrush(): Brush$1;
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
    get toolbarBackgroundColor(): Color$1 | null;
    set toolbarBackgroundColor(newValue: Color$1 | null);
    get toolbarIconActiveTintColor(): Color$1 | null;
    set toolbarIconActiveTintColor(newValue: Color$1 | null);
    get toolbarIconInactiveTintColor(): Color$1 | null;
    set toolbarIconInactiveTintColor(newValue: Color$1 | null);
    get cameraSwitchButtonVisible(): boolean;
    set cameraSwitchButtonVisible(newValue: boolean);
    get triggerButtonAnimationColor(): Color$1 | null;
    set triggerButtonAnimationColor(newValue: Color$1 | null);
    get triggerButtonExpandedColor(): Color$1 | null;
    set triggerButtonExpandedColor(newValue: Color$1 | null);
    get triggerButtonCollapsedColor(): Color$1 | null;
    set triggerButtonCollapsedColor(newValue: Color$1 | null);
    get triggerButtonTintColor(): Color$1 | null;
    set triggerButtonTintColor(newValue: Color$1 | null);
    get triggerButtonImage(): string | null;
    set triggerButtonImage(newValue: string | null);
    get triggerButtonVisible(): boolean;
    set triggerButtonVisible(newValue: boolean);
    showToast(text: string): Promise<void>;
    getScanningMode(): Promise<SparkScanScanningMode$1>;
    prepareScanning(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    startScanning(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    pauseScanning(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    stopScanning(): Promise<void>;
    onHostPause(): Promise<void>;
    dispose(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    show(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    hide(): Promise<void>;
    createNativeView(viewId: number): Promise<void>;
    get feedbackDelegate(): SparkScanFeedbackDelegate | null;
    set feedbackDelegate(delegate: SparkScanFeedbackDelegate | null);
    updateWithProps(prevProps: BaseSparkScanViewProps, props: BaseSparkScanViewProps): void;
    toJSON(): SparkScanView$1;
    private update;
    private _show;
    private _hide;
    private static get sparkScanDefaults();
}



/** @since 6.16.0 */
interface SparkScanViewUiListener {
    /**
     * Callback method that can be used to define an action that should be performed when barcode count button is tapped from the toolbar. Called from the main thread.
     *
     * @since 8.3.0
     */
    didTapBarcodeCountButton?(view: SparkScanView): void;
    /**
     * Callback method that can be used to define an action that should be performed when barcode find button is tapped from the toolbar. Called from the main thread.
     *
     * @since 8.3.0
     */
    didTapBarcodeFindButton?(view: SparkScanView): void;
    /**
     * Callback method that can be used to define an action that should be performed when label capture button is tapped from the toolbar. Called from the main thread.
     *
     * @since 8.3.0
     */
    didTapLabelCaptureButton?(view: SparkScanView): void;
    /**
     * Callback method that will be called when {@link SparkScanViewState} changes. Called from the main thread.
     *
     * @since 7.0.0
     */
    didChangeViewState?(newState: SparkScanViewState): void;
    /**
     * Callback method that will be called when the currently used SparkScanScanningMode changes. Called from the main thread.
     *
     * @since 8.3.0
     */
    didChangeScanningMode?(newScanningMode: SparkScanScanningMode$1): void;
}

/**
 * Used to display and emit an error feedback when capturing barcodes.
 *
 * @since 6.23.0
 */
declare class SparkScanBarcodeErrorFeedback extends SparkScanBarcodeFeedback {
    private type;
    private _barcodeFeedback;
    /**
     * The error message to display when a wrong barcode was captured.
     *
     * @since 6.23.0
     */
    get message(): string;
    /**
     * The time interval after which to resume the capturing process.
     *
     * @since 6.23.0
     */
    get resumeCapturingDelay(): number;
    /**
     * The color of the visual error feedback.
     *
     * @since 6.23.0
     */
    get visualFeedbackColor(): Color$1;
    /**
     * The brush used for the error feedback.
     *
     * @since 6.23.0
     */
    get brush(): Brush$1;
    /**
     * The feedback used for the error feedback.
     *
     * @since 6.23.0
     */
    get feedback(): Feedback$1 | null;
    /**
     * Constructs an error feedback.
     *
     * @since 6.23.0
     */
    static fromMessage(message: string, resumeCapturingDelay: number): SparkScanBarcodeErrorFeedback;
    /**
     * Constructs an error feedback.
     *
     * @since 6.23.0
     */
    constructor(message: string, resumeCapturingDelay: number, visualFeedbackColor: Color$1, brush: Brush$1, feedback: Feedback$1 | null);
}

/**
 * Used to display and emit a success feedback when capturing barcodes.
 *
 * @since 6.23.0
 */
declare class SparkScanBarcodeSuccessFeedback extends SparkScanBarcodeFeedback {
    private type;
    private _barcodeFeedback;
    /**
     * The color of the visual success feedback.
     *
     * @since 6.23.0
     */
    get visualFeedbackColor(): Color$1;
    /**
     * The brush used for the success feedback.
     *
     * @since 6.23.0
     */
    get brush(): Brush$1;
    /**
     * The feedback used for the success feedback.
     *
     * @since 6.23.0
     */
    get feedback(): Feedback$1 | null;
    /**
     * Constructs a success feedback.
     *
     * @since 6.23.0
     */
    static fromVisualFeedbackColor(visualFeedbackColor: Color$1, brush: Brush$1, feedback: Feedback$1 | null): SparkScanBarcodeSuccessFeedback;
    /**
     * Constructs a success feedback.
     *
     * @since 6.23.0
     */
    constructor();
}






interface SparkScanViewControllerHost {
    readonly viewId: number;
    readonly viewSettings: SparkScanViewSettings;
    uiListener: SparkScanViewUiListener | null;
    feedbackDelegate: SparkScanFeedbackDelegate | null;
    toJSON(): SparkScanView$1;
}

interface SparkScanSessionEventPayload {
    session: string;
    frameId?: string | null;
    viewId: number;
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
    didChangeScanningMode = "SparkScanViewUiListener.didChangeScanningMode",
    feedbackForBarcode = "SparkScanFeedbackDelegate.feedbackForBarcode",
    feedbackForScannedItem = "SparkScanFeedbackDelegate.feedbackForScannedItem",
    didUpdateSession = "SparkScanListener.didUpdateSession",
    didScan = "SparkScanListener.didScan"
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
    static forSparkScanView(view: SparkScanViewControllerHost, sparkScan: SparkScan): SparkScanViewController;
    private constructor();
    dispose(): Promise<void>;
    disposeOrphanedNativeView(viewId: number): Promise<void>;
    subscribeViewListeners(): Promise<void>;
    unsubscribeViewListeners(): Promise<void>;
    createView(isCurrent?: () => boolean, onNativeViewExists?: () => void): Promise<void>;
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
    getScanningMode(): Promise<SparkScanScanningMode$1>;
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
    private didChangeScanningModeListener;
    private parsePayloadTolerantly;
    private handleFeedbackForBarcodeWrapper;
    private handleFeedbackForScannedItemWrapper;
    private didUpdateSessionListenerWrapper;
    private didScanListenerWrapper;
    private barcodeCountButtonTappedListenerWrapper;
    private barcodeFindButtonTappedListenerWrapper;
    private didChangeScanningModeListenerWrapper;
    private labelCaptureButtonTappedListenerWrapper;
    private didChangeViewStateListenerWrapper;
}

interface PrivateSparkScanView {
    _context: DataCaptureContext;
    _sparkScan: SparkScan;
    toJSON(): object;
}

/**
 * Contains the scanning options for an {@link BarcodePick} mode.
 *
 * @since 6.19.0
 */
declare class BarcodePickSettings extends DefaultSerializeable {
    private symbologies;
    private properties;
    private _soundEnabled;
    private _hapticsEnabled;
    private _cachingEnabled;
    private _arucoDictionary;
    private _filterSettings;
    private static get barcodePickDefaults();
    /**
     * Constructs a new instance with default values.
     *
     * @since 6.19.0
     */
    constructor();
    /**
     * Gets {@link SymbologySettings} specific for the given {@link Symbology}.
     *
     * @since 6.19.0
     */
    settingsForSymbology(symbology: Symbology): SymbologySettings$1;
    /**
     * Returns the set of enabled symbologies.
     *
     * @since 6.19.0
     */
    get enabledSymbologies(): Symbology[];
    /**
     * This function provides a convenient shortcut to enabling decoding of particular symbologies without having to go through {@link SymbologySettings}. By default, all symbologies are turned off and symbologies need to be explicitly enabled.
     *
     * @since 6.19.0
     */
    enableSymbologies(symbologies: Symbology[]): void;
    /**
     * This function provides a convenient shortcut to enabling/disabling decoding of a particular symbology without having to go through {@link SymbologySettings}.
     *
     * Some 1d barcode symbologies allow you to encode variable-length data. By default, the Scandit Data Capture SDK only scans barcodes in a certain length range.If your application requires scanning of one of these symbologies, and the length is falling outside the default range, you may need to adjust the {@link SymbologySettings.activeSymbolCounts|active symbol counts} for the symbology in addition to enabling it.
     *
     * @since 6.19.0
     */
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    /**
     * Sets property to the provided value. Use this method to set properties that are not yet part of a stable API. Properties set through this method may or may not be used or change in a future release.
     *
     * @since 6.19.0
     */
    setProperty(name: string, value: any): void;
    /**
     * Retrieves the value of a previously set property.
     *
     * @since 6.19.0
     */
    getProperty(name: string): any;
    /**
     * Enables or disables the audio feedback. By default *true*.
     *
     * @since 6.19.0
     */
    get soundEnabled(): boolean;
    set soundEnabled(enabled: boolean);
    /**
     * Enables or disables the haptic feedback. By default *true*.
     *
     * @since 6.19.0
     */
    get hapticsEnabled(): boolean;
    set hapticsEnabled(enabled: boolean);
    /**
     * Sets the {@link ArucoDictionary} to be used while scanning ArUco codes. When the symbology is enabled the dictionary {@link ArucoDictionaryPreset.ArucoDictionaryPreset_5X5_1000} is loaded as default.
     *
     * @since 6.23.0
     */
    setArucoDictionary(dictionary: ArucoDictionary$1): void;
    /**
     * Enables or disables the caching of scanned barcodes to a specific product identifier. Once enabled, the request for product identifier won’t be made if scanned barcodes could be found in cache. By default *true*.
     *
     * @since 6.23.0
     */
    get cachingEnabled(): boolean;
    set cachingEnabled(enabled: boolean);
    /**
     * Sets and access the barcode filter settings.
     *
     * @since 8.2.0
     */
    get filterSettings(): BarcodeFilterSettings;
    set filterSettings(filterSettings: BarcodeFilterSettings);
}

/**
 * BarcodePickView.
 *
 * @since 6.19.0
 */
interface BarcodePickView {
}



/** @since 6.23.0 */
interface BarcodePickViewUiListener {
    /**
     * Callback method that can be used to define an action that should be performed when the finish button is tapped from the view. Called from the main thread.
     *
     * @since 6.23.0
     */
    didTapFinishButton(view: BarcodePickView): void;
}

/**
 * A container class consisting of an *itemData* (i.e. the data of a scanned code) and a *productIdentifier* (i.e. the string identifier of the product of which *itemData* consists of)
 *
 * @since 6.19.0
 */
declare class BarcodePickProductProviderCallbackItem extends DefaultSerializeable {
    private _itemData;
    private _productIdentifier;
    /**
     * Constructs a new instance containing the provided itemData and nullable productIdentifier.
     *
     * @since 6.19.0
     */
    constructor(itemData: string, productIdentifier: string | null);
    /**
     * Returns the itemData provided on construction.
     *
     * @since 6.19.0
     */
    get itemData(): string;
    /**
     * Returns the productIdentifier provided on construction. May be *null*.
     *
     * @since 6.19.0
     */
    get productIdentifier(): string | null;
}

/**
 * Callback to notify that products for the given itemsData have been retrieved.
 *
 * @since 6.19.0
 */
declare class BarcodePickProductProviderCallback {
    /**
     * The function to call in order to notify that products for the given scanned items have been retrieved. Each entry in the *data* list contains the scanned code and the (nullable) identifier of its corresponding product.
     *
     * @since 6.19.0
     */
    onData(data: BarcodePickProductProviderCallbackItem[]): void;
}

/**
 * A callback to be provided to a {@link BarcodePickAsyncMapperProductProvider} object. This callback allows to retrieve asynchronously product identifiers for the given itemsData ( i.e. the scanned codes ).
 *
 * @since 6.19.0
 */
interface BarcodePickAsyncMapperProductProviderCallback {
    /**
     * From this callback async operations can be fired to retrieve the product identifiers for the provided itemsData. Once retrieved, *callback.onData* should be invoked with a list of {@link BarcodePickProductProviderCallbackItem}, consisting each of an itemData string and its product identifier. The product identifier can be null if not found.
     *
     * @since 6.19.0
     */
    productIdentifierForItems(itemsData: string[], callback: BarcodePickProductProviderCallback): void;
}

/**
 * An enumeration of possible actions.
 *
 * @since 8.2.0
 */
declare enum BarcodePickAction {
    /**
     * No action.
     *
     * @since 8.2.0
     */
    None = "none",
    /**
     * Pick action.
     *
     * @since 8.2.0
     */
    Pick = "pick",
    /**
     * Unpick action.
     *
     * @since 8.2.0
     */
    Unpick = "unpick"
}

/**
 * Settings used to configure {@link BarcodePickView}.
 *
 * @since 6.19.0
 */
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
    /**
     * Constructs a new *BarcodePickViewSettings* object with default values.
     *
     * @since 6.22.0
     */
    constructor();
    /**
     * The highlight style used by the view. Default is `RectangularWithIcons`.
     *
     * @since 6.19.0
     */
    get highlightStyle(): BarcodePickViewHighlightStyle;
    set highlightStyle(style: BarcodePickViewHighlightStyle);
    /**
     * Enables or disables the loading dialog. Default is *true*.
     *
     * @since 6.19.0
     */
    get showLoadingDialog(): boolean;
    set showLoadingDialog(style: boolean);
    /**
     * Indicates whether the finish button should be shown to the user. Default is *true*.
     *
     * @since 6.22.0
     */
    get showFinishButton(): boolean;
    set showFinishButton(show: boolean);
    /**
     * Indicates whether the pause button should be shown to the user. Default is *true*.
     *
     * @since 6.22.0
     */
    get showPauseButton(): boolean;
    set showPauseButton(show: boolean);
    /**
     * Indicates whether the zoom button should be shown to the user. When clicked, it will switch between {@link CameraSettings.zoomFactor} and {@link CameraSettings.zoomGestureZoomFactor}, which default to 1x and 2x respectively when using {@link BarcodePick.createRecommendedCameraSettings}. Default is *false*.
     *
     * @since 6.22.0
     */
    get showZoomButton(): boolean;
    set showZoomButton(show: boolean);
    /**
     * Configures the text shown by the loading dialog when picking.
     *
     * @since 7.3.0
     */
    get loadingDialogTextForPicking(): string;
    set loadingDialogTextForPicking(text: string);
    /**
     * Configures the text shown by the loading dialog when unpicking.
     *
     * @since 7.3.0
     */
    get loadingDialogTextForUnpicking(): string;
    set loadingDialogTextForUnpicking(text: string);
    /**
     * Enables or disables the messages shown in the center of the view. Default is *true*.
     *
     * @since 6.19.0
     */
    get showGuidelines(): boolean;
    set showGuidelines(show: boolean);
    /**
     * Configures the text shown when the mode is first launched.
     *
     * @since 6.19.0
     */
    get initialGuidelineText(): string;
    set initialGuidelineText(text: string);
    /**
     * Configures the text shown when there are no barcodes detected on screen.
     *
     * @since 6.19.0
     */
    get moveCloserGuidelineText(): string;
    set moveCloserGuidelineText(text: string);
    /**
     * Enables or disables the messages shown at the top of the view. Default is *true*.
     *
     * @since 6.19.0
     */
    get showHints(): boolean;
    set showHints(show: boolean);
    /**
     * Configures the text shown when the first item to pick is recognized and shown on screen.
     *
     * @since 6.19.0
     */
    get onFirstItemToPickFoundHintText(): string;
    set onFirstItemToPickFoundHintText(text: string);
    /**
     * Configures the text shown when the first item pick is completed.
     *
     * @since 6.19.0
     */
    get onFirstItemPickCompletedHintText(): string;
    set onFirstItemPickCompletedHintText(text: string);
    /**
     * Configures the text shown when the first item that was not a target is picked.
     *
     * @since 6.19.0
     */
    get onFirstUnmarkedItemPickCompletedHintText(): string;
    set onFirstUnmarkedItemPickCompletedHintText(text: string);
    /**
     * Configures the text shown when the user reverses a pick.
     *
     * @since 6.19.0
     */
    get onFirstItemUnpickCompletedHintText(): string;
    set onFirstItemUnpickCompletedHintText(text: string);
    /**
     * Indicates the position where the zoom button will be shown to the user. If this position is shared with other controls, all of them will be shown in a row. Default is {@link Anchor.BottomRight}.
     *
     * Only {@link Anchor.TopLeft}, {@link Anchor.TopCenter}, {@link Anchor.TopRight}, {@link Anchor.BottomLeft} and {@link Anchor.BottomRight} are supported.
     *
     * Any other value will default to {@link Anchor.BottomRight}.
     *
     * @since 8.2.0
     */
    get zoomButtonPosition(): Anchor$1;
    set zoomButtonPosition(position: Anchor$1);
    /**
     * Indicates whether the torch button should be shown to the user. Default is *false*.
     *
     * @since 8.2.0
     */
    get showTorchButton(): boolean;
    set showTorchButton(show: boolean);
    /**
     * Indicates the position where the torch button will be shown to the user. If this position is shared with other controls, all of them will be shown in a row. Default is {@link Anchor.TopLeft}.
     *
     * Only {@link Anchor.TopLeft}, {@link Anchor.TopCenter}, {@link Anchor.TopRight}, {@link Anchor.BottomLeft} and {@link Anchor.BottomRight} are supported.
     *
     * Any other value will default to {@link Anchor.TopLeft}.
     *
     * @since 8.2.0
     */
    get torchButtonPosition(): Anchor$1;
    set torchButtonPosition(position: Anchor$1);
    /**
     * The style of the logo, either the extended “Scanning By Scandit” or the minimal “Scandit”.
     *
     * Default is {@link LogoStyle.Extended}.
     *
     * @since 8.6.0
     */
    get logoStyle(): LogoStyle$1;
    set logoStyle(style: LogoStyle$1);
    /**
     * The anchor point used to position the Scandit logo.
     *
     * Default is {@link Anchor.BottomRight}.
     *
     * @since 8.6.0
     */
    get logoAnchor(): Anchor$1;
    set logoAnchor(anchor: Anchor$1);
    /**
     * Configures the text shown to suggest the user to pause the scanning to pick items.
     *
     * @since 8.2.0
     */
    get tapShutterToPauseGuidelineText(): string;
    set tapShutterToPauseGuidelineText(text: string);
    /** @since 8.2.0 */
    get hardwareTriggerEnabled(): boolean;
    set hardwareTriggerEnabled(enabled: boolean);
    /**
     * Use this property to configure the appearance of the barcodes that are filtered. Default is *null*, filtered barcodes won’t be visualized.
     *
     * @since 8.2.0
     */
    get filterHighlightSettings(): BarcodeFilterHighlightSettings | null;
    set filterHighlightSettings(settings: BarcodeFilterHighlightSettings | null);
    /**
     * Can be used to specify the vertical offset (for Portrait, horizontal for Landscape) for the UI buttons.
     *
     * Will be applied only when running on Android. Default value is 32dp.
     *
     * @since 8.2.0
     */
    get uiButtonsOffset(): NumberWithUnit | null;
    set uiButtonsOffset(offset: NumberWithUnit | null);
    /**
     * The button that acts as a scan trigger. Leave *null* to use the default button (The default button will be the dedicated HW button on XCover devices, and “volume down” key for other devices). This is only taken into consideration if {@link BarcodePickViewSettings.hardwareTriggerEnabled} is true.
     *
     * @since 8.2.0
     */
    get hardwareTriggerKeyCode(): number | null;
    set hardwareTriggerKeyCode(keyCode: number | null);
}



/** @since 6.23.0 */
interface BarcodePickViewListener {
    /**
     * Callback method invoked when the view starts scanning. Called from the main thread.
     *
     * @since 6.23.0
     */
    didStartScanning(view: BarcodePickView): void;
    /**
     * Callback method invoked when the scanning is stopped. Called from the main thread.
     *
     * @since 6.23.0
     */
    didStopScanning(view: BarcodePickView): void;
    /**
     * Callback method invoked the scanning is freezed. Called from the main thread.
     *
     * @since 6.23.0
     */
    didFreezeScanning(view: BarcodePickView): void;
    /**
     * Callback method invoked when the scanning is paused. Called from the main thread.
     *
     * @since 6.23.0
     */
    didPauseScanning(view: BarcodePickView): void;
}

/** @internal */
interface BarcodePickActionCallbackControllerHost {
    finishPickAction(itemData: string, result: boolean): Promise<void>;
}
/**
 * Used by the user to confirm actions.
 *
 * @since 6.19.0
 */
declare class BarcodePickActionCallback {
    private _viewController;
    private _itemData;
    /**
     * Invoke this method to provide the result of the action.
     *
     * - *response* If *true* the action is confirmed.
     *
     * @since 6.19.0
     */
    onFinish(result: boolean): void;
}
interface PrivateBarcodePickCallback {
    _viewController: BarcodePickActionCallbackControllerHost;
    _itemData: string;
}



/**
 * Will be notified when an action is performed by the user.
 *
 * @since 6.19.0
 */
interface BarcodePickActionListener {
    /**
     * This method will be called when the user taps on a code that is not picked.
     *
     * @since 6.19.0
     */
    didPickItem(data: string, callback: BarcodePickActionCallback): void;
    /**
     * This method will be called when the user taps on a code that is already picked.
     *
     * @since 6.19.0
     */
    didUnpickItem(data: string, callback: BarcodePickActionCallback): void;
}







interface BarcodePickViewControllerHost {
    readonly viewId: number;
    readonly barcodePick: BarcodePick;
    readonly settings: BarcodePickViewSettings;
    readonly uiListener: BarcodePickViewUiListener | null;
    readonly listeners: BarcodePickViewListener[];
    readonly actionListeners: BarcodePickActionListener[];
    toJSON(): object;
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
    constructor(view: BarcodePickViewControllerHost);
    start(): Promise<void>;
    stop(): Promise<void>;
    freeze(): Promise<void>;
    reset(): Promise<void>;
    pause(): Promise<void>;
    resume(): Promise<void>;
    finishPickAction(itemData: string, result: boolean): Promise<void>;
    createNativeView(): Promise<void>;
    removeNativeView(viewId?: number): Promise<void>;
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



/**
 * Base interface to which each product provider needs to conform to.
 *
 * This interface might change in the future and should only be used through Scandit-provided implementations: [{@link BarcodePickAsyncMapperProductProvider}].
 *
 * @since 6.19.0
 */
interface BarcodePickProductProvider {
}
interface PrivateBarcodePickProductProvider {
    _controller: BarcodePickViewController | null;
}

/**
 * The BarcodePick scanning session holds the ongoing state of a running {@link BarcodePick}.
 *
 * @since 6.23.0
 */
declare class BarcodePickScanningSession {
    private _pickedItems;
    private _scannedItems;
    /**
     * Sets of barcodes represented by their data that are picked.
     *
     * @since 6.23.0
     */
    get pickedItems(): string[];
    /**
     * Sets of barcodes represented by their data that are scanned.
     *
     * @since 6.23.0
     */
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



/**
 * Will be notified when a scanning session is updated.
 *
 * @since 6.23.0
 */
interface BarcodePickScanningListener {
    /**
     * This method will be called whenever an item is picked or unpicked or new items scanned.
     *
     * @since 6.23.0
     */
    didUpdateScanningSession(barcodePick: BarcodePick, session: BarcodePickScanningSession): void;
    /**
     * This method will be called when scanning session is completed.
     *
     * That is, when BarcodePickView.release() is called.
     *
     * @since 6.23.0
     */
    didCompleteScanningSession(barcodePick: BarcodePick, session: BarcodePickScanningSession): void;
}

/**
 * The BarcodePick session holds the current state of a running {@link BarcodePick}.
 *
 * @since 7.5.0
 */
declare class BarcodePickSession {
    private _trackedItems;
    private _addedItems;
    private _trackedObjects;
    private _addedObjects;
    /**
     * A set containing the data of all the barcodes that are currently tracked on screen.
     *
     * @since 7.5.0
     */
    get trackedItems(): string[];
    /**
     * A set containing the data of the barcodes that were scanned in the last frame.
     *
     * @since 7.5.0
     */
    get addedItems(): string[];
    /**
     * A set containing all of the objects that are currently tracked on screen.
     *
     * @since 8.2.0
     */
    get trackedObjects(): TrackedObject[];
    /**
     * A set containing all of the objects that were scanned in the last frame.
     *
     * @since 8.2.0
     */
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



/**
 * A listener that will be called every frame.
 *
 * @since 7.5.0
 */
interface BarcodePickListener {
    /**
     * This method will be called every time a frame is processed. An updated session object is passed.
     *
     * @since 7.5.0
     */
    didUpdateSession(barcodePick: BarcodePick, session: BarcodePickSession): void;
}







/**
 * Capture mode that implements barcode pick.
 *
 * @since 6.19.0
 */
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
    /**
     * Returns the recommended camera settings to use with the mode.
     *
     * @since 6.19.0
     */
    static createRecommendedCameraSettings(): CameraSettings$1;
    /**
     * Constructs a new {@link BarcodePick} instance:
     *
     * - *dataCaptureContext* A {@link DataCaptureContext}
     * - *settings* An instance of {@link BarcodePickSettings} used to configure the mode.
     * - *productProvider* The product provider responsible for retrieving and mapping products. Available product provider types: [{@link BarcodePickAsyncMapperProductProvider}]
     *
     * @since 6.19.0
     */
    constructor(dataCaptureContext: DataCaptureContext, settings: BarcodePickSettings, productProvider: BarcodePickProductProvider);
    /**
     * Adds a scanning listener to this {@link BarcodePick} instance.
     *
     * @since 6.23.0
     */
    addScanningListener(listener: BarcodePickScanningListener): Promise<void>;
    /**
     * Removes the scanning listener from this {@link BarcodePick} instance.
     *
     * @since 6.23.0
     */
    removeScanningListener(listener: BarcodePickScanningListener): Promise<void>;
    /**
     * Adds a listener to this {@link BarcodePick} instance.
     *
     * @since 7.5.0
     */
    addListener(listener: BarcodePickListener): Promise<void>;
    /**
     * Removes the listener from this {@link BarcodePick} instance.
     *
     * @since 7.5.0
     */
    removeListener(listener: BarcodePickListener): Promise<void>;
    /**
     * Selects the item with the given data. Will return a promise that will resolve to the type of {@link BarcodePickAction|action} that will be performed.
     *
     * @since 8.2.0
     */
    selectItem(data: string): Promise<BarcodePickAction>;
    /**
     * Confirms the action for the item with the given data. No action is performed if the item is not currently selected.
     *
     * @since 8.2.0
     */
    confirmActionForItem(data: string): Promise<void>;
    /**
     * Cancels the action for the item with the given data.
     *
     * @since 8.2.0
     */
    cancelActionForItem(data: string): Promise<void>;
    private dispatchDidCompleteScanningSession;
    private dispatchDidUpdateScanningSession;
    private dispatchDidUpdateSession;
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

/**
 * Represents a product to be picked.
 *
 * @since 6.19.0
 */
declare class BarcodePickProduct extends DefaultSerializeable {
    private _identifier;
    private _quantityToPick;
    /**
     * Constructs a {@link BarcodePickProduct}.
     *
     * - *identifier* The unique identifier for this product.
     * - *quantityToPick* How many of this product need to be picked.
     *
     * @since 6.19.0
     */
    constructor(identifier: string, quantityToPick: number);
    /**
     * The unique identifier for this product.
     *
     * @since 6.19.0
     */
    get identifier(): string;
    /**
     * How many of this product need to be picked.
     *
     * @since 6.19.0
     */
    get quantityToPick(): number;
}

declare const asyncMapperProductProviderBrand: unique symbol;





/**
 * Usage example:
 *
 * ```javascript
 * const products = [
 *   new BarcodePickProduct("780846124122", 2),
 *   new BarcodePickProduct("750865926478", 1),
 *   new BarcodePickProduct("984579832123", 4),
 * ]
 *
 * const productProviderCallback = {
 *   productIdentifierForItems: (itemsData, callback) => {
 *     myDb.findAndMapProductsForItemsData(items).then((value) => {
 *       callback.onData(value);
 *     });
 *   }
 * };
 *
 * const productProvider = new BarcodePickAsyncMapperProductProvider(products, productProviderCallback);
 * ```
 *
 * @since 6.19.0
 */
declare class BarcodePickAsyncMapperProductProvider extends DefaultSerializeable implements BarcodePickProductProvider {
    private readonly [asyncMapperProductProviderBrand];
    private _callback;
    private _controller;
    private _productsToPick;
    private _productsToPickForSerialization;
    /**
     * Creates a new instance with the given set of {@link BarcodePickProduct} and callback to map items to products asynchronously.
     *
     * @since 6.19.0
     */
    constructor(productsToPick: BarcodePickProduct[], callback: BarcodePickAsyncMapperProductProviderCallback);
    /**
     * Replaces the products database to the newly provided list. This will reset scanning and all the previous picking progress will be lost.
     *
     * @since 8.2.0
     */
    updateProductList(products: BarcodePickProduct[]): Promise<void>;
}








declare class BaseBarcodePickView extends DefaultSerializeable implements BarcodePickView {
    barcodePick: BarcodePick;
    settings: BarcodePickViewSettings;
    cameraSettings: CameraSettings$1;
    private viewController;
    private actionListeners;
    private listeners;
    private isStarted;
    private _context;
    private isViewCreated;
    private viewCreationGate;
    /**
     * Resolves true once this view's native counterpart exists, false if it
     * never will (creation failed, timed out, or the view was torn down).
     *
     * Callers that arrive before creation has been kicked off park until it is,
     * bounded by VIEW_CREATION_PRE_BEGIN_TIMEOUT_MS; once a creation cycle is in
     * flight the bound is VIEW_CREATION_TIMEOUT_MS. Reachable on Cordova/Capacitor
     * when a view method runs before connectToElement().
     *
     * @internal Not part of the documented API surface: it exists so the base
     * view's own action methods can await creation, and is public only because
     * the framework plugins reach it across package boundaries.
     */
    whenViewCreated(): Promise<boolean>;
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
        cameraSettings: CameraSettings$1;
    });
    createNativeView(viewId: number): Promise<void>;
    removeNativeView(): Promise<void>;
    dispose(): void;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    start(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    stop(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    freeze(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    pause(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    resume(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
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

/**
 * This class encapsulates a style request for an highlight. It provides the item data, the product identifier if already mapped and the state.
 *
 * @since 8.2.0
 */
declare class BarcodePickViewHighlightStyleRequest {
    private _requestId;
    private _itemData;
    private _productIdentifier;
    private _state;
    /**
     * The barcode data.
     *
     * @since 8.2.0
     */
    get itemData(): string;
    /**
     * The item data that was provided during the mapping, if available.
     *
     * @since 8.2.0
     */
    get productIdentifier(): string | null;
    /**
     * The state of the the scanned item.
     *
     * @since 8.2.0
     */
    get state(): BarcodePickState;
    private static fromJSON;
    private constructor();
}

/**
 * This holds the style data for the status icons.
 *
 * @since 8.2.0
 */
declare class BarcodePickStatusIconStyle extends DefaultSerializeable {
    private _type;
    private _icon;
    private _scanditIcon;
    private _iconColor;
    private _iconBackgroundColor;
    private _text;
    /**
     * Constructs a new instance that will display the provided icon and text.
     *
     * @since 8.2.0
     */
    static withIcon(iconBase64: string, text: string): BarcodePickStatusIconStyle;
    /**
     * Constructs a new instance that will display the provided icon and text.
     *
     * @since 8.2.0
     */
    static withScanditIcon(icon: ScanditIcon, text: string): BarcodePickStatusIconStyle;
    /**
     * Constructs a new instance that will display the default icon, an exclamation mark. The icon will be customized with the provided colors.
     *
     * @since 8.2.0
     */
    static withColors(iconColor: Color$1, iconBackgroundColor: Color$1, text: string): BarcodePickStatusIconStyle;
    private static fromJSON;
    private constructor();
}

/**
 * Create this object to respond to highlight style queries.
 *
 * @since 8.2.0
 */
declare class BarcodePickViewHighlightStyleResponse extends DefaultSerializeable {
    private _brush;
    private _selectedBrush;
    private _iconBase64;
    private _iconScandit;
    private _selectedIconBase64;
    private _selectedIconScandit;
    private _statusIconStyle;
    /**
     * Constructs a new instance with the passed brush and icon.
     *
     * @since 8.2.0
     */
    static withBrushAndIcon(brush: Brush$1 | null, icon: string | null, statusIconStyle: BarcodePickStatusIconStyle | null): BarcodePickViewHighlightStyleResponse;
    /**
     * Constructs a new instance with the passed brushes and icons.
     *
     * @since 8.2.0
     */
    static withSelectedBrushAndIcon(brush: Brush$1 | null, selectedBrush: Brush$1 | null, icon: string | null, selectedIcon: string | null, statusIconStyle: BarcodePickStatusIconStyle | null): BarcodePickViewHighlightStyleResponse;
    /**
     * Constructs a new instance with the passed brush and {@link ScanditIcon}.
     *
     * @since 8.2.0
     */
    static withBrushAndScanditIcon(brush: Brush$1 | null, scanditIcon: ScanditIcon | null, statusIconStyle: BarcodePickStatusIconStyle | null): BarcodePickViewHighlightStyleResponse;
    /**
     * Constructs a new instance with the passed brush and {@link ScanditIcon} icons.
     *
     * @since 8.2.0
     */
    static withSelectedBrushAndScanditIcon(brush: Brush$1 | null, selectedBrush: Brush$1 | null, scanditIcon: ScanditIcon | null, selectedScanditIcon: ScanditIcon | null, statusIconStyle: BarcodePickStatusIconStyle | null): BarcodePickViewHighlightStyleResponse;
    /**
     * Creates a new builder for constructing a BarcodePickViewHighlightStyleResponse.
     *
     * @since 8.2.0
     */
    static builder(): BarcodePickViewHighlightStyleResponseBuilder;
    private static fromJSON;
    private constructor();
}
/**
 * Builder for creating BarcodePickViewHighlightStyleResponse instances with various configurations.
 *
 * @since 8.2.0
 */
declare class BarcodePickViewHighlightStyleResponseBuilder {
    private _brush;
    private _selectedBrush;
    private _iconBase64;
    private _iconScandit;
    private _selectedIconBase64;
    private _selectedIconScandit;
    private _statusIconStyle;
    /**
     * Creates a new instance of the builder.
     *
     * @since 8.2.0
     */
    constructor();
    /**
     * Sets the brush to be used for highlighting barcodes.
     *
     * @since 8.2.0
     */
    withBrush(brush: Brush$1 | null): this;
    /**
     * Sets the brush to be used for highlighting selected barcodes.
     *
     * @since 8.2.0
     */
    withSelectedBrush(selectedBrush: Brush$1 | null): this;
    /**
     * Sets the icon to be displayed using a bitmap.
     *
     * @since 8.2.0
     */
    withIcon(icon: string | null): this;
    /**
     * Sets the icon to be displayed for selected items using a bitmap.
     *
     * @since 8.2.0
     */
    withSelectedIcon(selectedIcon: string | null): this;
    /**
     * Sets the icon to be displayed using a ScanditIcon.
     *
     * @since 8.2.0
     */
    withScanditIcon(scanditIcon: ScanditIcon | null): this;
    /**
     * Sets the icon to be displayed for selected items using a ScanditIcon.
     *
     * @since 8.2.0
     */
    withSelectedScanditIcon(selectedScanditIcon: ScanditIcon | null): this;
    /**
     * Sets the style for status icons.
     *
     * @since 8.2.0
     */
    withStatusIconStyle(statusIconStyle: BarcodePickStatusIconStyle | null): this;
    /**
     * Builds and returns a new BarcodePickViewHighlightStyleResponse with the configured settings.
     *
     * @since 8.2.0
     */
    build(): BarcodePickViewHighlightStyleResponse;
}

/** @since 8.2.0 */
interface BarcodePickViewHighlightStyleAsyncProvider {
    /**
     * This method will be called every time a style for an item is needed.
     *
     * @since 8.2.0
     */
    styleForRequest(request: BarcodePickViewHighlightStyleRequest): Promise<BarcodePickViewHighlightStyleResponse | null>;
}

/**
 * Use this class to customize the status icons in styles that support it.
 *
 * @since 6.28.0
 */
declare class BarcodePickStatusIconSettings extends DefaultSerializeable {
    /**
     * Creates a new BarcodePickStatusIconSettings instance with default values.
     *
     * @since 8.2.0
     */
    constructor();
    private _ratioToHighlightSize;
    /**
     * The ratio between the shortest highlight dimension and the base size for the status icon. This base size will then be clamped between {@link BarcodePickStatusIconSettings.minSize} and {@link BarcodePickStatusIconSettings.maxSize}. For example, for a highlight with a size of 90x60 dp, a ratio of 0.6 means the base size for the status icon will be calculated as 60 (shortest dimension) * 0.6 = 36 dp, before being clamped between the minimum and maximum allowed sizes.
     *
     * Default is 0.5.
     *
     * @since 6.28.0
     */
    get ratioToHighlightSize(): number;
    set ratioToHighlightSize(value: number);
    private _minSize;
    /**
     * The minimum size allowed for status icons.
     *
     * Default is 20 dp.
     *
     * @since 6.28.0
     */
    get minSize(): number;
    set minSize(value: number);
    private _maxSize;
    /**
     * The maximum size allowed for status icons.
     *
     * Default is no maximum, INT_MAX.
     *
     * @since 6.28.0
     */
    get maxSize(): number;
    set maxSize(value: number);
    private static get barcodePickDefaults();
    private static fromJSON;
}
interface PrivateBarcodePickStatusIconSettings {
    fromJSON(json: any): BarcodePickStatusIconSettings;
}

/**
 * A style that will draw dots on top of barcodes.
 *
 * @since 6.23.0
 */
declare class Dot extends DefaultSerializeable implements BarcodePickViewHighlightStyle {
    private _type;
    private _brushesForState;
    private _selectedBrushesForState;
    private static get barcodePickDefaults();
    /**
     * Creates a new instance with default values.
     *
     * @since 6.23.0
     */
    constructor();
    /**
     * Gets the brush used for the passed pick state.
     *
     * @since 6.23.0
     */
    getBrushForState(state: BarcodePickState): Brush$1;
    /**
     * Use this method to configure the brush used for the specific pick state.
     *
     * @since 6.23.0
     */
    setBrushForState(brush: Brush$1, state: BarcodePickState): void;
    /**
     * Gets the brush used when items in the passed pick state are selected. If *null*, selected items are drawn with the same brush as non-selected items in the same state. Default is *null* for all states.
     *
     * @since 8.2.0
     */
    getSelectedBrushForState(state: BarcodePickState): Brush$1 | null;
    /**
     * Use this method to configure the brush used when items in the specific pick state are selected. Pass *null* to draw selected items with the same brush as non-selected items in the same state.
     *
     * @since 8.2.0
     */
    setSelectedBrushForState(brush: Brush$1 | null, state: BarcodePickState): void;
}

/**
 * A style that will draw dots on top of barcodes, the highlights also have icons drawn on top.
 *
 * @since 6.23.0
 */
declare class DotWithIcons extends DefaultSerializeable implements BarcodePickViewHighlightStyle {
    private _type;
    private _brushesForState;
    private _iconsForState;
    private _selectedBrushesForState;
    private _selectedIconsForState;
    private _styleResponseCacheEnabled;
    private _hasAsyncStleProvider;
    private _asyncStyleProvider;
    /**
     * Sets a delegate to override asynchronously the style of the highlights depending on each item’s code and state.
     *
     * @since 8.2.0
     */
    get asyncStyleProvider(): BarcodePickViewHighlightStyleAsyncProvider | null;
    set asyncStyleProvider(provider: BarcodePickViewHighlightStyleAsyncProvider | null);
    private static get barcodePickDefaults();
    /**
     * Creates a new instance with default values.
     *
     * @since 6.23.0
     */
    constructor();
    /**
     * Gets the brush used for the passed pick state.
     *
     * @since 6.23.0
     */
    getBrushForState(state: BarcodePickState): Brush$1;
    /**
     * Use this method to configure the brush used for the specific pick state.
     *
     * @since 6.23.0
     */
    setBrushForState(brush: Brush$1, state: BarcodePickState): void;
    /**
     * Use this method to configure the icon used for the specific pick state.
     *
     * A base64 encoded image string. For example: iVBORw0KGgoAAAANS….
     *
     * The icon is shown with a size of 18x18 dp.
     *
     * @since 6.23.0
     */
    setIconForState(image: string, state: BarcodePickState): void;
    /**
     * Gets the brush used when items in the passed pick state are selected. If *null*, selected items are drawn with the same brush as non-selected items in the same state. Default is *null* for all states.
     *
     * @since 8.2.0
     */
    getSelectedBrushForState(state: BarcodePickState): Brush$1 | null;
    /**
     * Use this method to configure the brush used when items in the specific pick state are selected. Pass *null* to draw selected items with the same brush as non-selected items in the same state.
     *
     * @since 8.2.0
     */
    setSelectedBrushForState(brush: Brush$1 | null, state: BarcodePickState): void;
    /**
     * Use this method to configure the icon used for the specific pick state using a resource.
     *
     * The icon is shown with a size of 18x18 dp.
     *
     * @since 8.2.0
     */
    setIconForStateWithScanditIcon(icon: ScanditIcon, state: BarcodePickState): void;
    /**
     * Use this method to configure the icon used when items in the specific pick state are selected. If *null*, selected items use the same icon as non-selected items in the same state. Default is *null* for all states.
     *
     * A base64 encoded image string. For example: iVBORw0KGgoAAAANS….
     *
     * @since 8.2.0
     */
    setSelectedIconForState(icon: string | null, state: BarcodePickState): void;
    /**
     * Use this method to configure the {@link ScanditIcon} used when items in the specific pick state are selected. Default is *null* for all states.
     *
     * @since 8.2.0
     */
    setSelectedIconForStateWithScanditIcon(icon: ScanditIcon | null, state: BarcodePickState): void;
    /**
     * If enabled the {@link DotWithIcons.asyncStyleProvider} responses will be cached, otherwise the style will be asked every time. Defaults to *true*.
     *
     * @since 8.2.0
     */
    get styleResponseCacheEnabled(): boolean;
    set styleResponseCacheEnabled(value: boolean);
}

/**
 * A style that will draw rectangles on top of barcodes.
 *
 * @since 6.19.0
 */
declare class Rectangular extends DefaultSerializeable implements BarcodePickViewHighlightStyle {
    private _type;
    private _brushesForState;
    private _selectedBrushesForState;
    private _minimumHighlightWidth;
    private _minimumHighlightHeight;
    private static get barcodePickDefaults();
    /**
     * Creates a new instance with default values.
     *
     * @since 6.19.0
     */
    constructor();
    /**
     * Gets the brush used for the passed pick state.
     *
     * @since 6.19.0
     */
    getBrushForState(state: BarcodePickState): Brush$1;
    /**
     * Use this method to configure the brush used for the specific pick state.
     *
     * @since 6.19.0
     */
    setBrushForState(brush: Brush$1, state: BarcodePickState): void;
    /**
     * Gets the brush used when items in the passed pick state are selected. If *null*, selected items are drawn with the same brush as non-selected items in the same state. Default is *null* for all states.
     *
     * @since 8.2.0
     */
    getSelectedBrushForState(state: BarcodePickState): Brush$1 | null;
    /**
     * Use this method to configure the brush used when items in the specific pick state are selected. Pass *null* to draw selected items with the same brush as non-selected items in the same state.
     *
     * @since 8.2.0
     */
    setSelectedBrushForState(brush: Brush$1 | null, state: BarcodePickState): void;
    /**
     * Minimum height for the highlights. Default is 40dp.
     *
     * @since 6.28.0
     */
    get minimumHighlightHeight(): number;
    set minimumHighlightHeight(value: number);
    /**
     * Minimum width for the highlights. Default is 40dp.
     *
     * @since 6.28.0
     */
    get minimumHighlightWidth(): number;
    set minimumHighlightWidth(value: number);
}

/**
 * A style that will draw rectangles on top of barcodes, the highlights can also have icons drawn on top.
 *
 * @since 6.19.0
 */
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
    /**
     * Creates a new instance with default values.
     *
     * @since 6.19.0
     */
    constructor();
    /**
     * Gets the brush used for the passed pick state.
     *
     * @since 6.19.0
     */
    getBrushForState(state: BarcodePickState): Brush$1;
    /**
     * Use this method to configure the brush used for the specific pick state.
     *
     * @since 6.19.0
     */
    setBrushForState(brush: Brush$1, state: BarcodePickState): void;
    /**
     * Use this method to configure the icon used for the specific pick state.
     *
     * A base64 encoded image string. For example: data:image/png;base64,iVBORw0KGgoAAAANS….
     *
     * @since 6.23.0
     */
    setIconForState(image: string, state: BarcodePickState): void;
    /**
     * Gets the brush used when items in the passed pick state are selected. If *null*, selected items are drawn with the same brush as non-selected items in the same state. Default is *null* for all states.
     *
     * @since 8.2.0
     */
    getSelectedBrushForState(state: BarcodePickState): Brush$1 | null;
    /**
     * Use this method to configure the brush used when items in the specific pick state are selected. Pass *null* to draw selected items with the same brush as non-selected items in the same state.
     *
     * @since 8.2.0
     */
    setSelectedBrushForState(brush: Brush$1 | null, state: BarcodePickState): void;
    /**
     * Use this method to configure the icon used for the specific pick state using a resource.
     *
     * @since 8.2.0
     */
    setIconForStateWithScanditIcon(icon: ScanditIcon, state: BarcodePickState): void;
    /**
     * Use this method to configure the icon used when items in the specific pick state are selected. If *null*, selected items use the same icon as non-selected items in the same state. Default is *null* for all states.
     *
     * @since 8.2.0
     */
    setSelectedIconForState(icon: string | null, state: BarcodePickState): void;
    /**
     * Use this method to configure the {@link ScanditIcon} used when items in the specific pick state are selected. Default is *null* for all states.
     *
     * @since 8.2.0
     */
    setSelectedIconForStateWithScanditIcon(icon: ScanditIcon | null, state: BarcodePickState): void;
    /**
     * The settings used to customize the status icons.
     *
     * @since 6.28.0
     */
    get statusIconSettings(): BarcodePickStatusIconSettings;
    set statusIconSettings(value: BarcodePickStatusIconSettings);
    /**
     * Minimum height for the highlights. Default is 40dp.
     *
     * @since 6.28.0
     */
    get minimumHighlightHeight(): number;
    set minimumHighlightHeight(value: number);
    /**
     * Minimum width for the highlights. Default is 40dp.
     *
     * @since 6.28.0
     */
    get minimumHighlightWidth(): number;
    set minimumHighlightWidth(value: number);
    /**
     * Sets a delegate to override asynchronously the style of the highlights depending on each item’s code and state.
     *
     * @since 8.2.0
     */
    get asyncStyleProvider(): BarcodePickViewHighlightStyleAsyncProvider | null;
    set asyncStyleProvider(provider: BarcodePickViewHighlightStyleAsyncProvider | null);
    /**
     * If enabled the {@link RectangularWithIcons.asyncStyleProvider} responses will be cached, otherwise the style will be asked every time. Defaults to *true*.
     *
     * @since 8.2.0
     */
    get styleResponseCacheEnabled(): boolean;
    set styleResponseCacheEnabled(value: boolean);
}

/**
 * Create this object to respond to {@link CustomView|BarcodePickViewHighlightStyleCustomView} queries.
 *
 * @since 8.4.0
 */
declare class BarcodePickViewHighlightStyleCustomViewResponse extends DefaultSerializeable {
    private _view;
    private _statusIconStyle;
    /**
     * Creates a new instance with the provided view. A {@link BarcodePickStatusIconStyle} instance can also be provided to display a status icon.
     *
     * @since 8.4.0
     */
    static create(view: string | null, statusIconStyle: BarcodePickStatusIconStyle | null): BarcodePickViewHighlightStyleCustomViewResponse;
    private constructor();
}

/**
 * An object that will provide the views to the {@link CustomView|BarcodePickViewHighlightStyleCustomView} style.
 *
 * @since 8.4.0
 */
interface BarcodePickViewHighlightStyleCustomViewProvider {
    /**
     * This method will be called every time the view for an item is needed.
     *
     * @since 8.4.0
     */
    viewForRequest(request: BarcodePickViewHighlightStyleRequest): Promise<BarcodePickViewHighlightStyleCustomViewResponse | null>;
}

/**
 * A style that will allow the user to provide their own views to be displayed on top of barcodes.
 *
 * @since 8.4.0
 */
declare class BarcodePickViewHighlightStyleCustomView extends DefaultSerializeable implements BarcodePickViewHighlightStyle {
    private _type;
    private _fitViewsToBarcode;
    private _statusIconSettings;
    private _minimumHighlightWidth;
    private _minimumHighlightHeight;
    private _hasAsyncProvider;
    private _asyncCustomViewProvider;
    private static get barcodePickDefaults();
    /**
     * Creates a new instance with default values and no view provider.
     *
     * @since 8.4.0
     */
    constructor();
    /**
     * If *true* the view size will be adjusted to cover the barcode. Defaults to *false*.
     *
     * @since 8.4.0
     */
    get fitViewsToBarcode(): boolean;
    set fitViewsToBarcode(value: boolean);
    /**
     * The settings used to customize the status icons.
     *
     * @since 8.4.0
     */
    get statusIconSettings(): BarcodePickStatusIconSettings;
    set statusIconSettings(value: BarcodePickStatusIconSettings);
    /**
     * Minimum width for the highlights. Default is 40dp.
     *
     * @since 8.4.0
     */
    get minimumHighlightWidth(): number;
    set minimumHighlightWidth(value: number);
    /**
     * Minimum height for the highlights. Default is 40dp.
     *
     * @since 8.4.0
     */
    get minimumHighlightHeight(): number;
    set minimumHighlightHeight(value: number);
    /**
     * Sets a delegate that will provide the views to be displayed.
     *
     * @since 8.4.0
     */
    get asyncCustomViewProvider(): BarcodePickViewHighlightStyleCustomViewProvider | null;
    set asyncCustomViewProvider(provider: BarcodePickViewHighlightStyleCustomViewProvider | null);
}







interface BarcodePickModeHost {
    dispatchDidCompleteScanningSession(session: BarcodePickScanningSession): void;
    dispatchDidUpdateScanningSession(session: BarcodePickScanningSession): void;
    dispatchDidUpdateSession(session: BarcodePickSession): void;
}
interface BarcodePickViewEventHandlersViewHost {
    readonly viewId: number;
    readonly settings: BarcodePickViewSettings;
    readonly uiListener: BarcodePickViewUiListener | null;
    readonly listeners: BarcodePickViewListener[];
    readonly actionListeners: BarcodePickActionListener[];
}
declare class BarcodePickViewEventHandlers {
    private view;
    private barcodePick;
    private adapter;
    private viewController;
    private barcodePickMapperCallback?;
    constructor(view: BarcodePickViewEventHandlersViewHost, barcodePick: BarcodePickModeHost, adapter: BarcodeProxyAdapter, viewController: BarcodePickActionCallbackControllerHost);
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
    private parsePayloadTolerantly;
    private finishOnProductIdentifierForItems;
    private notifyListenersOfDidCompleteScanningSession;
    private notifyListenersOfDidUpdateScanningSession;
    private notifyListenersOfDidUpdateSession;
}

/**
 * Determines what feedback (vibration, sound) should be emitted when barcodes are scanned.
 *
 * The feedback is specified for each BarcodeFind instance separately and can be changed through the feedback property by either modifying an existing instance of this class, or by assigning a new one.
 *
 * As of now, this class allows to configure the feedback that gets emitted when barcodes are found successfully, through the {@link BarcodeFindFeedback.found} property.
 *
 * See documentation on the {@link BarcodeFind.feedback} property for usage samples.
 *
 * @since 6.22.0
 */
declare class BarcodeFindFeedback extends DefaultSerializeable {
    private dispatchUpdate;
    private _found;
    /**
     * A {@link Feedback} for a barcode found event.
     *
     * @since 6.22.0
     */
    get found(): Feedback$1;
    set found(success: Feedback$1);
    private _itemListUpdated;
    /**
     * A {@link Feedback} for the item list updated event.
     *
     * @since 6.24.0
     */
    get itemListUpdated(): Feedback$1;
    set itemListUpdated(failure: Feedback$1);
    private updateFeedback;
    private static get barcodeFindDefaults();
    /**
     * Returns a barcode find feedback with default configuration:
     *
     * - default beep sound is loaded,
     * - beeping for the success event is enabled,
     * - vibration for the success event is enabled.
     *
     * @since 6.22.0
     */
    static get defaultFeedback(): BarcodeFindFeedback;
}

/** @since 6.22.0 */
declare class BarcodeFindSettings extends DefaultSerializeable {
    private _symbologies;
    private _properties;
    /**
     * Creates a new barcode find settings instance. All symbologies are disabled. Make sure to enable the symbologies required by your app before applying the settings to {@link BarcodeFind} with BarcodeFind.applySettings().
     *
     * @since 6.22.0
     */
    constructor();
    /**
     * Gets {@link SymbologySettings} specific for the given {@link Symbology}.
     *
     * Note that modifying the returned object doesn’t automatically apply the changes to {@link BarcodeFind}. After you made changes to the symbology settings, call BarcodeFind.applySettings() with these {@link BarcodeFindSettings} to apply them.
     *
     * @since 6.22.0
     */
    settingsForSymbology(symbology: Symbology): SymbologySettings$1;
    /**
     * This function provides a convenient shortcut to enabling decoding of particular symbologies without having to go through {@link SymbologySettings}. By default, all symbologies are turned off and symbologies need to be explicitly enabled.
     *
     * @since 6.22.0
     */
    enableSymbologies(symbologies: Symbology[]): void;
    /**
     * This function provides a convenient shortcut to enabling/disabling decoding of a particular symbology without having to go through {@link SymbologySettings}.
     *
     * Some 1d barcode symbologies allow you to encode variable-length data. By default, the Scandit Data Capture SDK only scans barcodes in a certain length range.If your application requires scanning of one of these symbologies, and the length is falling outside the default range, you may need to adjust the {@link SymbologySettings.activeSymbolCounts|active symbol counts} for the symbology in addition to enabling it.
     *
     * @since 6.22.0
     */
    enableSymbology(symbology: Symbology, enabled: boolean): void;
    /**
     * Returns the set of enabled symbologies.
     *
     * @since 6.22.0
     */
    get enabledSymbologies(): Symbology[];
    /**
     * Sets property to the provided value. Use this method to set properties that are not yet part of a stable API. Properties set through this method may or may not be used or change in a future release.
     *
     * @since 6.22.0
     */
    setProperty(name: string, value: any): void;
    /**
     * Retrieves the value of a previously set property.
     *
     * @since 6.22.0
     */
    getProperty(name: string): any;
}

/**
 * An object that defines the search options.
 *
 * @since 6.22.0
 */
declare class BarcodeFindItemSearchOptions extends DefaultSerializeable {
    private _barcodeData;
    private _brush;
    /**
     * Creates a new BarcodeFindItemSearchOptions object with the provided barcode data and a custom {@link Brush} to be applied to the shown dot.
     *
     * @since 7.2.0
     */
    static withBrush(barcodeData: string, brush: Brush$1 | null): BarcodeFindItemSearchOptions;
    /**
     * Creates a new BarcodeFindItemSearchOptions object with the provided barcode data.
     *
     * @since 6.22.0
     */
    constructor(barcodeData: string);
    /**
     * The barcode data as a string.
     *
     * @since 6.22.0
     */
    get barcodeData(): string;
    /**
     * The {@link Brush} to be applied to the dot shown over the barcode, when detected.
     *
     * @since 7.2.0
     */
    get brush(): Brush$1 | null;
}

/**
 * An object that contains additional info about the product.
 *
 * @since 6.22.0
 */
declare class BarcodeFindItemContent extends DefaultSerializeable {
    private _info?;
    private _additionalInfo?;
    private _image?;
    /** @since 6.22.0 */
    constructor(info?: string, additionalInfo?: string, image?: string);
    /**
     * Optional item name.
     *
     * @since 6.22.0
     */
    get info(): string | null;
    /**
     * Optional item details.
     *
     * @since 6.22.0
     */
    get additionalInfo(): string | null;
    /**
     * Optional item image.
     *
     * @since 6.22.0
     */
    get image(): string | null;
}

/**
 * An object that represents an item in Barcode Find.
 *
 * @since 6.22.0
 */
declare class BarcodeFindItem extends DefaultSerializeable {
    private _searchOptions;
    private _content;
    /** @since 6.22.0 */
    constructor(searchOptions: BarcodeFindItemSearchOptions, content: BarcodeFindItemContent | null);
    /**
     * The item data to search, and any other option that control the search.
     *
     * @since 6.22.0
     */
    get searchOptions(): BarcodeFindItemSearchOptions;
    /**
     * Optional info about the item.
     *
     * @since 6.22.0
     */
    get content(): BarcodeFindItemContent | null;
    toJSON(): BarcodeFindItem$1;
}

/** @since 7.4.0 */
declare class BarcodeFindSession {
    private _trackedBarcodes;
    /**
     * An array containing all the tracked barcodes.
     *
     * @since 7.4.0
     */
    get trackedBarcodes(): TrackedBarcode[];
    private static fromJSON;
}

/**
 * Listener interface for BarcodeFind.
 *
 * @since 6.22.0
 */
interface BarcodeFindListener {
    /**
     * Invoked whenever the search process has been started.
     *
     * This method is invoked from a recognition internal thread. To perform UI work, you must dispatch to the main thread first.
     *
     * @since 6.22.0
     */
    didStartSearch(): void;
    /**
     * Invoked whenever the search process has been paused. The foundItems parameter contains all the items found on the last processed camera frame.
     *
     * This method is invoked from a recognition internal thread. To perform UI work, you must dispatch to the main thread first.
     *
     * @since 6.22.0
     */
    didPauseSearch(foundItems: BarcodeFindItem[]): void;
    /**
     * Invoked whenever the search process has been stopped. The foundItems parameter contains all the items found since the start of the process.
     *
     * This method is invoked from a recognition internal thread. To perform UI work, you must dispatch to the main thread first.
     *
     * @since 6.22.0
     */
    didStopSearch(foundItems: BarcodeFindItem[]): void;
    /**
     * Invoked on each frame. The session parameter contains the currently tracked barcodes.
     *
     * This method is invoked from a recognition internal thread. To perform UI work, you must dispatch to the main thread first.
     *
     * @since 7.4.0
     */
    didUpdateSession(session: BarcodeFindSession): void;
}

/**
 * Transformer interface for Barcode Find.
 *
 * @since 6.24.0
 */
interface BarcodeFindTransformer {
    /**
     * Invoked for each detected barcode. The implementation should return the same barcode data, which may or may not be transformed from the original, or *null* if the barcode should be ignored entirely. Note that this method is executed on a background thread.
     *
     * @since 6.24.0
     */
    transformBarcodeData(data: string | null): string | null;
}

/** @since 6.22.0 */
interface BarcodeFindViewUiListener {
    /**
     * Callback method that can be used to define an action that should be performed when the finish button is tapped from the view. The foundItems parameter contains all the items found since the start of the searching process. Called from the main thread.
     *
     * @since 6.22.0
     */
    didTapFinishButton(foundItems: BarcodeFindItem[]): void;
}







interface BarcodeFindViewControllerHost {
    readonly viewId: number;
    readonly barcodeFind: BarcodeFind;
    readonly barcodeFindViewUiListener: BarcodeFindViewUiListener | null;
    toJSON(): {
        View: BarcodeFindView;
        BarcodeFind: BarcodeFind$1;
    };
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
    static forBarcodeFindView(baseView: BarcodeFindViewControllerHost): BarcodeFindViewController;
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
    removeNativeView(viewId?: number): Promise<void>;
    removeOrphanedNativeView(viewId: number): Promise<void>;
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
    private rehydrateFoundItems;
    private get isViewCreated();
    private handleOnFinishButtonTappedEventWrapper;
    private handleOnTransformBarcodeDataEventWrapper;
    private handleDidUpdateSessionWrapper;
    private handleOnSearchStartedEventWrapper;
    private handleOnSearchPausedEventWrapper;
    private handleOnSearchStoppedEventWrapper;
}



/**
 * Capture mode that implements BarcodeFind.
 *
 * @since 6.22.0
 */
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
    /**
     * Returns the recommended camera settings to use with the mode.
     *
     * @since 7.6.0
     */
    static createRecommendedCameraSettings(): CameraSettings$1;
    /**
     * Constructs a new BarcodeFind mode with the provided settings.
     *
     * @since 7.6.0
     */
    constructor(settings: BarcodeFindSettings);
    private syncFeedbackDispatch;
    private static get barcodeFindDefaults();
    /**
     * The context this mode is attached to. When the data capture mode is not attached to a context, *null* is returned.
     *
     * @since 6.22.0
     */
    get context(): DataCaptureContext | null;
    /**
     * This flag indicates whether the BarcodeFind mode is currently processing frames to recognise barcodes.
     *
     * Changing this property from *false* to *true* causes the connected {@link BarcodeFindView} to start its scanning flow.
     *
     * Changing this property from *true* to *false* causes the connected {@link BarcodeFindView} to stop its scanning flow and go to idle mode.
     *
     * @since 6.22.0
     */
    get isEnabled(): boolean;
    set isEnabled(value: boolean);
    /**
     * Instance of {@link BarcodeFindFeedback} that is used by the barcode scanner to notify users about Found events.
     *
     * The default instance of the Feedback will have both sound and vibration enabled. A default beep sound will be used for the sound.
     *
     * @since 6.22.0
     */
    get feedback(): BarcodeFindFeedback;
    set feedback(value: BarcodeFindFeedback);
    /**
     * Asynchronously applies the new settings to the barcode scanner. If the scanner is currently running, the task will complete when the next frame is processed, and will use the new settings for that frame. If the scanner is currently *not* running, the task will complete as soon as the settings have been stored and won’t wait until the next frame is going to be processed.
     *
     * @since 6.22.0
     */
    applySettings(settings: BarcodeFindSettings): Promise<void>;
    /**
     * Adds the listener to this BarcodeFind instance.
     *
     * In case the same listener is already observing this instance, calling this method will not add the listener again.
     *
     * @since 6.22.0
     */
    addListener(listener: BarcodeFindListener): void;
    /**
     * Removes a previously added listener from this BarcodeFind instance.
     *
     * In case the listener is not currently observing this instance, calling this method has no effect.
     *
     * @since 6.22.0
     */
    removeListener(listener: BarcodeFindListener): void;
    /**
     * Sets a transformer for this instance of BarcodeFind.
     *
     * @since 6.24.0
     */
    setBarcodeTransformer(barcodeTransformer: BarcodeFindTransformer | null): void;
    /**
     * Sets the list of items to search. This method runs asynchronously.
     *
     * @since 6.22.0
     */
    setItemList(items: BarcodeFindItem[]): Promise<void>;
    /**
     * Starts or resumes the search process.
     *
     * @since 6.22.0
     */
    start(): Promise<void>;
    /**
     * Pauses the search process.
     *
     * @since 6.22.0
     */
    pause(): Promise<void>;
    /**
     * Stops the search process and clears the list of found items. If this is not called, the BarcodeFind instance will remember all found items.
     *
     * @since 6.22.0
     */
    stop(): Promise<void>;
    private checkAndSubscribeListeners;
    private checkAndUnsubscribeListeners;
    private update;
    toJSON(): BarcodeFind$1;
    private get controller();
    private set controller(value);
}

/** @since 6.22.0 */
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
    /**
     * Constructs a new BarcodeFind view settings to use when creating an instance of the {@link BarcodeFindView}.
     *
     * @since 7.1.0
     */
    static withHardwareTriggers(inListItemColor: Color$1, notInListItemColor: Color$1, soundEnabled: boolean, hapticEnabled: boolean, hardwareTriggerEnabled: boolean, hardwareTriggerKeyCode: number): BarcodeFindViewSettings;
    /**
     * Constructs a new BarcodeFind view settings to use when creating an instance of the {@link BarcodeFindView}.
     *
     * @since 7.4.0
     */
    static withProgressBarColor(inListItemColor: Color$1, notInListItemColor: Color$1, soundEnabled: boolean, hapticEnabled: boolean, progressBarStartColor: Color$1, progressBarFinishColor: Color$1): BarcodeFindViewSettings;
    /**
     * Constructs a new BarcodeFind view settings to use when creating an instance of the {@link BarcodeFindView}.
     *
     * @since 7.4.0
     */
    static withProgressBarColorAndHardwareTriggers(inListItemColor: Color$1, notInListItemColor: Color$1, soundEnabled: boolean, hapticEnabled: boolean, hardwareTriggerEnabled: boolean, hardwareTriggerKeyCode: number, progressBarStartColor: Color$1, progressBarFinishColor: Color$1): BarcodeFindViewSettings;
    /**
     * Constructs a new BarcodeFind view settings to use when creating an instance of the {@link BarcodeFindView}.
     *
     * @since 6.22.0
     */
    constructor(inListItemColor: Color$1, notInListItemColor: Color$1, soundEnabled: boolean, hapticEnabled: boolean, hardwareTriggerEnabled?: boolean, hardwareTriggerKeyCode?: number, progressBarStartColor?: Color$1, progressBarFinishColor?: Color$1);
    /**
     * The color for the overlay of an item that is in the list of items to find.
     *
     * Default is #2EC1CE.
     *
     * @since 6.22.0
     */
    get inListItemColor(): Color$1;
    /**
     * The color for the overlay of an item that is not in the list of items to find.
     *
     * Default is #FFFFFF.
     *
     * @since 6.22.0
     */
    get notInListItemColor(): Color$1;
    /**
     * Indicates whether audio feedback should be enabled.
     *
     * Default is *true*.
     *
     * @since 6.22.0
     */
    get soundEnabled(): boolean;
    /**
     * Indicates whether haptic feedback should be enabled.
     *
     * Default is *true*.
     *
     * @since 6.22.0
     */
    get hapticEnabled(): boolean;
    /** @since 7.1.0 */
    get hardwareTriggerEnabled(): boolean;
    /**
     * The button that acts as a scan trigger. Leave *null* to use the default button (The default button will be the dedicated HW button on XCover devices, and “volume down” key for other devices). This is only taken into consideration if {@link BarcodeFindViewSettings.hardwareTriggerEnabled} is true.
     *
     * @since 7.1.0
     */
    get hardwareTriggerKeyCode(): number | null;
    /**
     * The color used at the start of the progress bar. The progress bar will diplay a gradient from {@link BarcodeFindViewSettings.progressBarStartColor} to {@link BarcodeFindViewSettings.progressBarFinishColor}.
     *
     * Default is #2EC1CE.
     *
     * @since 7.4.0
     */
    get progressBarStartColor(): Color$1;
    /**
     * The color used at the end of the progress bar. The progress bar will diplay a gradient from {@link BarcodeFindViewSettings.progressBarStartColor} to {@link BarcodeFindViewSettings.progressBarFinishColor}.
     *
     * Default is #97e0e6.
     *
     * @since 7.4.0
     */
    get progressBarFinishColor(): Color$1;
}



/**
 * Configuration interface for defining the properties of a {@link BarcodeFindView} component. This interface specifies the required and optional parameters for initializing a BarcodeFind view.
 *
 * @since 7.6.0
 */
interface BarcodeFindViewProps {
    /**
     * The data capture context that manages the camera and processing pipeline. This context coordinates the barcode find mode with other capture modes and provides access to the camera.
     *
     * @since 7.6.0
     */
    context: DataCaptureContext;
    /**
     * The barcode find mode instance that defines the scanning behavior and settings. This mode handles the barcode detection logic and manages the list of items to find.
     *
     * @since 7.6.0
     */
    barcodeFind: BarcodeFind;
    /**
     * Optional view settings that control the appearance and behavior of the barcode find view. If not provided, the view will use default settings for colors, sounds, haptic feedback, and UI elements.
     *
     * @since 7.6.0
     */
    viewSettings?: BarcodeFindViewSettings;
    /**
     * Optional camera settings to customize the camera behavior. If not provided, the view will use the recommended camera settings optimized for barcode find operations. These settings control aspects like resolution, frame rate, and focus behavior.
     *
     * @since 7.6.0
     */
    cameraSettings?: CameraSettings$1;
    /**
     * Optional style object for customizing the appearance of the BarcodeFind view component. This property allows you to apply custom styles and follows the styling conventions of the respective framework.
     *
     * @since 7.6.0
     */
    style?: any;
    /**
     * Navigation object from React Navigation library, used specifically in React Native applications. This property enables the BarcodeFind view to integrate with React Navigation’s navigation system for better handling camera access.
     *
     * @since 8.0.0
     */
    navigation?: any;
}




declare class BaseBarcodeFindView {
    private isViewCreated;
    private viewCreationGate;
    /**
     * Resolves true once this view's native counterpart exists, false if it
     * never will (creation failed, timed out, or the view was torn down).
     *
     * Callers that arrive before creation has been kicked off park until it is,
     * bounded by VIEW_CREATION_PRE_BEGIN_TIMEOUT_MS; once a creation cycle is in
     * flight the bound is VIEW_CREATION_TIMEOUT_MS. Reachable on Cordova/Capacitor
     * when a view method runs before connectToElement().
     *
     * @internal Not part of the documented API surface: it exists so the base
     * view's own action methods can await creation, and is public only because
     * the framework plugins reach it across package boundaries.
     */
    whenViewCreated(): Promise<boolean>;
    private _dataCaptureContext;
    private _barcodeFind;
    private _barcodeFindViewSettings?;
    private _cameraSettings?;
    private _startSearching;
    private controller;
    private _logoStyle;
    private _logoAnchor;
    private _cameraStateOnStop;
    private _shouldShowUserGuidanceView;
    private _shouldShowHints;
    private _shouldShowCarousel;
    private _shouldShowPauseButton;
    private _shouldShowFinishButton;
    private _shouldShowProgressBar;
    private _shouldShowTorchControl;
    private _shouldShowZoomControl;
    private _torchControlPosition;
    private _textForCollapseCardsButton;
    private _textForAllItemsFoundSuccessfullyHint;
    private _textForItemListUpdatedHint;
    private _textForItemListUpdatedWhenPausedHint;
    private _textForPointAtBarcodesToSearchHint;
    private _textForMoveCloserToBarcodesHint;
    private _textForTapShutterToPauseScreenHint;
    private _textForTapShutterToResumeSearchHint;
    private _viewId;
    get viewId(): number;
    get barcodeFind(): BarcodeFind;
    private _barcodeFindViewUiListener;
    get barcodeFindViewUiListener(): BarcodeFindViewUiListener | null;
    set barcodeFindViewUiListener(value: BarcodeFindViewUiListener | null);
    get context(): DataCaptureContext;
    constructor(props: BarcodeFindViewProps);
    private get asHost();
    private static get barcodeFindViewDefaults();
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    stopSearching(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    startSearching(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    pauseSearching(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
    show(): Promise<void>;
    /**
     * No-ops if native view creation never completes (it failed, timed out, or
     * the view was torn down); the gate emits a Warn in that case. There is
     * currently no public hook to detect it: `whenViewCreated()` is internal to
     * this base view, and the React Native components do not re-expose it.
     */
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
    get torchControlPosition(): Anchor$1;
    set torchControlPosition(value: Anchor$1);
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
    get logoStyle(): LogoStyle$1;
    set logoStyle(value: LogoStyle$1);
    get logoAnchor(): Anchor$1;
    set logoAnchor(value: Anchor$1);
    get cameraStateOnStop(): FrameSourceState;
    set cameraStateOnStop(value: FrameSourceState);
    dispose(): void;
    toJSON(): {
        View: BarcodeFindView;
        BarcodeFind: BarcodeFind$1;
    };
    private update;
}

/**
 * The level of error correction to use in generating a QR code, specifying how much the code can be damaged while remaining readable.
 *
 * @since 6.24.0
 */
declare enum QrCodeErrorCorrectionLevel {
    /**
     * “Low” (up to 7% damage)
     *
     * @since 6.24.0
     */
    Low = "low",
    /**
     * “Medium” (up to 15% damage) (default if not set)
     *
     * @since 6.24.0
     */
    Medium = "medium",
    /**
     * “Quartile” (up to 25% damage)
     *
     * @since 6.24.0
     */
    Quartile = "quartile",
    /**
     * “High” (up to 30% damage)
     *
     * @since 6.24.0
     */
    High = "high"
}

/**
 * The compaction mode for PDF417 barcode generation. The compaction mode determines how the data is encoded in the barcode.
 *
 * @since 8.4.0
 */
declare enum Pdf417CompactionMode {
    /**
     * Automatically select the best compaction mode based on the input data. This is the default mode.
     *
     * @since 8.4.0
     */
    Auto = "auto",
    /**
     * Text compaction mode, optimized for alphanumeric data. This mode is efficient for encoding text with letters, numbers, and common punctuation.
     *
     * @since 8.4.0
     */
    Text = "text",
    /**
     * Byte compaction mode, can encode any 8-bit byte data. This mode provides the most flexibility but may be less efficient for text data.
     *
     * @since 8.4.0
     */
    Byte = "byte",
    /**
     * Numeric compaction mode, optimized for numeric data. This mode is most efficient when encoding only numbers.
     *
     * @since 8.4.0
     */
    Numeric = "numeric"
}

/**
 * Dimensions configuration for PDF417 barcode generation. This class allows you to control the minimum and maximum number of rows and columns in the generated barcode. All properties are optional and can be left unset (null).
 *
 * Encoding will fail if incompatible dimensions are defined (e.g., if the data cannot fit within the specified constraints).
 *
 * @since 8.4.0
 */
declare class Pdf417Dimensions {
    /**
     * Minimum number of columns in the PDF417 barcode. Default is null (unset).
     *
     * @since 8.4.0
     */
    minCols: number | null;
    /**
     * Maximum number of columns in the PDF417 barcode. Default is null (unset).
     *
     * @since 8.4.0
     */
    maxCols: number | null;
    /**
     * Minimum number of rows in the PDF417 barcode. Default is null (unset).
     *
     * @since 8.4.0
     */
    minRows: number | null;
    /**
     * Maximum number of rows in the PDF417 barcode. Default is null (unset).
     *
     * @since 8.4.0
     */
    maxRows: number | null;
    /**
     * Creates a new PDF417Dimensions instance with all properties set to null.
     *
     * @since 8.4.0
     */
    constructor(minCols?: number | null, maxCols?: number | null, minRows?: number | null, maxRows?: number | null);
}

declare class BarcodeGeneratorCreationOptions {
    backgroundColor: Color$1 | null;
    foregroundColor: Color$1 | null;
    errorCorrectionLevel: QrCodeErrorCorrectionLevel | number | null;
    versionNumber: number | null;
    minimumErrorCorrectionPercent: number | null;
    layers: number | null;
    compact: boolean | null;
    compactionMode: Pdf417CompactionMode | null;
    dimensions: Pdf417Dimensions | null;
    constructor(backgroundColor?: Color$1 | null, foregroundColor?: Color$1 | null, errorCorrectionLevel?: QrCodeErrorCorrectionLevel | number | null, versionNumber?: number | null, minimumErrorCorrectionPercent?: number | null, layers?: number | null, compact?: boolean | null, compactionMode?: Pdf417CompactionMode | null, dimensions?: Pdf417Dimensions | null);
}

/** @since 6.24.0 */
declare class BarcodeGeneratorBuilder<T> {
    protected options: BarcodeGeneratorCreationOptions;
    private type;
    private dataCaptureContext;
    protected constructor(type: string, dataCaptureContext: DataCaptureContext);
    /**
     * Sets the background color for the generated codes. Default is Color.WHITE.
     *
     * @since 6.24.0
     */
    withBackgroundColor(color: Color$1): BarcodeGeneratorBuilder<T>;
    /**
     * Sets the foreground color for the generated codes. Default is Color.BLACK.
     *
     * @since 6.24.0
     */
    withForegroundColor(color: Color$1): BarcodeGeneratorBuilder<T>;
    /**
     * Constructs a {@link BarcodeGenerator} with the properties set on the builder.
     *
     * @since 6.24.0
     */
    build(): BarcodeGenerator;
}
/** @since 6.24.0 */
declare class Code39BarcodeGeneratorBuilder extends BarcodeGeneratorBuilder<Code39BarcodeGeneratorBuilder> {
    constructor(dataCaptureContext: DataCaptureContext);
}
/** @since 6.24.0 */
declare class Code128BarcodeGeneratorBuilder extends BarcodeGeneratorBuilder<Code128BarcodeGeneratorBuilder> {
    constructor(dataCaptureContext: DataCaptureContext);
}
/** @since 6.24.0 */
declare class Ean13BarcodeGeneratorBuilder extends BarcodeGeneratorBuilder<Ean13BarcodeGeneratorBuilder> {
    constructor(dataCaptureContext: DataCaptureContext);
}
/** @since 6.24.0 */
declare class UpcaBarcodeGeneratorBuilder extends BarcodeGeneratorBuilder<UpcaBarcodeGeneratorBuilder> {
    constructor(dataCaptureContext: DataCaptureContext);
}
/** @since 6.24.0 */
declare class InterleavedTwoOfFiveBarcodeGeneratorBuilder extends BarcodeGeneratorBuilder<InterleavedTwoOfFiveBarcodeGeneratorBuilder> {
    constructor(dataCaptureContext: DataCaptureContext);
}
/** @since 6.24.0 */
declare class QrCodeBarcodeGeneratorBuilder extends BarcodeGeneratorBuilder<QrCodeBarcodeGeneratorBuilder> {
    constructor(dataCaptureContext: DataCaptureContext);
    /**
     * Configure how much error correction to use in the generated code.
     *
     * @since 6.24.0
     */
    withErrorCorrectionLevel(errorCorrectionLevel: QrCodeErrorCorrectionLevel): QrCodeBarcodeGeneratorBuilder;
    /**
     * The version number for the QR code. Version number determines the size of the QR code, with a larger size allowing more data to be stored. The value must be greater than 0, and if the value is too small for the data being encoded, code generation will fail.
     *
     * @since 6.24.0
     */
    withVersionNumber(versionNumber: number): QrCodeBarcodeGeneratorBuilder;
}
/** @since 6.24.0 */
declare class DataMatrixBarcodeGeneratorBuilder extends BarcodeGeneratorBuilder<DataMatrixBarcodeGeneratorBuilder> {
    constructor(dataCaptureContext: DataCaptureContext);
}
/** @since 7.0.0 */
declare class AztecBarcodeGeneratorBuilder extends BarcodeGeneratorBuilder<AztecBarcodeGeneratorBuilder> {
    constructor(dataCaptureContext: DataCaptureContext);
    /**
     * Optional parameter to configure how much error correction to use in the generated code. The value must be greater than 0.
     *
     * @since 7.0.0
     */
    withMinimumErrorCorrectionPercent(minimumErrorCorrectionPercent: number): AztecBarcodeGeneratorBuilder;
    /**
     * Optional parameter to configure how many layers, each one containing two rings of pixels, to use in the generated code. The value must be between -4 and 32. Negative values create compact codes.
     *
     * @since 7.0.0
     */
    withLayers(layers: number): AztecBarcodeGeneratorBuilder;
}
/** @since 8.4.0 */
declare class Pdf417BarcodeGeneratorBuilder extends BarcodeGeneratorBuilder<Pdf417BarcodeGeneratorBuilder> {
    constructor(dataCaptureContext: DataCaptureContext);
    /**
     * Sets the error correction level for PDF417 barcode generation. Valid values are 0 to 8, where a higher number increases the error correction data in the code. Default is 2.
     *
     * @since 8.4.0
     */
    withErrorCorrectionLevel(errorCorrectionLevel: number): Pdf417BarcodeGeneratorBuilder;
    /**
     * Switches between normal and compact code layout. When set to true, a compact PDF417 code is generated, which reduces the size but may decrease scanning reliability. Default is false.
     *
     * @since 8.4.0
     */
    withCompact(compact: boolean): Pdf417BarcodeGeneratorBuilder;
    /**
     * Sets the compaction mode for PDF417 barcode generation. The compaction mode determines how the data is encoded. Default is {@link Pdf417CompactionMode.Auto}.
     *
     * @since 8.4.0
     */
    withCompactionMode(compactionMode: Pdf417CompactionMode): Pdf417BarcodeGeneratorBuilder;
    /**
     * Sets the symbol dimensions for the PDF417 barcode. The dimensions control the minimum and maximum number of rows and columns. Encoding fails if incompatible dimensions are defined.
     *
     * @since 8.4.0
     */
    withDimensions(dimensions: Pdf417Dimensions): Pdf417BarcodeGeneratorBuilder;
}
/** @since 6.24.0 */
declare class BarcodeGenerator extends DefaultSerializeable implements DataCaptureComponent {
    private _id;
    /**
     * Gets the data capture component ID for the barcode generator.
     *
     * @since 6.24.0
     */
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
    /**
     * Creates a Code 39 Barcode Generator builder for the provided context.
     *
     * @since 6.24.0
     */
    static code39BarcodeGeneratorBuilder(dataCaptureContext: DataCaptureContext): Code39BarcodeGeneratorBuilder;
    /**
     * Creates a Code 128 Barcode Generator builder for the provided context.
     *
     * @since 6.24.0
     */
    static code128BarcodeGeneratorBuilder(dataCaptureContext: DataCaptureContext): Code128BarcodeGeneratorBuilder;
    /**
     * Creates an EAN13 Barcode Generator builder for the provided context.
     *
     * EAN13 codes are composed of 13 symbols. If 12 symbols are provided, it is assumed that the checksum is missing and it is generated and appended to the end.
     *
     * @since 6.24.0
     */
    static ean13BarcodeGeneratorBuilder(dataCaptureContext: DataCaptureContext): Ean13BarcodeGeneratorBuilder;
    /**
     * Creates a UPCA Barcode Generator builder for the provided context.
     *
     * @since 6.24.0
     */
    static upcaBarcodeGeneratorBuilder(dataCaptureContext: DataCaptureContext): UpcaBarcodeGeneratorBuilder;
    /**
     * Creates an Interleaved Two-of-Five Barcode Generator builder for the provided context.
     *
     * @since 6.24.0
     */
    static interleavedTwoOfFiveBarcodeGeneratorBuilder(dataCaptureContext: DataCaptureContext): InterleavedTwoOfFiveBarcodeGeneratorBuilder;
    /**
     * Creates a QRCode Barcode Generator builder for the provided context.
     *
     * @since 6.24.0
     */
    static qrCodeBarcodeGeneratorBuilder(dataCaptureContext: DataCaptureContext): QrCodeBarcodeGeneratorBuilder;
    /**
     * Creates a DataMatrix Barcode Generator builder for the provided context.
     *
     * @since 6.24.0
     */
    static dataMatrixBarcodeGeneratorBuilder(dataCaptureContext: DataCaptureContext): DataMatrixBarcodeGeneratorBuilder;
    /**
     * Creates an Aztec Barcode Generator builder for the provided context.
     *
     * @since 7.0.0
     */
    static aztecBarcodeGeneratorBuilder(dataCaptureContext: DataCaptureContext): AztecBarcodeGeneratorBuilder;
    /**
     * Creates a PDF417 Barcode Generator builder for the provided context.
     *
     * @since 8.4.0
     */
    static pdf417BarcodeGeneratorBuilder(dataCaptureContext: DataCaptureContext): Pdf417BarcodeGeneratorBuilder;
    private constructor();
    /**
     * Generate a code of the given width for the supplied text. If the text is not compatible with the generator’s symbology, an exception is thrown.
     *
     * imageWidth specifies the width of the image in pixels.
     *
     * When running on iOS, the resulting UIImage will use the same scale as the device screen.
     *
     * @since 6.24.0
     */
    generate(text: string, imageWidth: number): Promise<string>;
    /**
     * Generate a code of the given width for the supplied data. If the data is not compatible with the generator’s symbology, an exception is thrown.
     *
     * imageWidth specifies the width of the image in pixels.
     *
     * When running on iOS, the resulting UIImage will use the same scale as the device screen.
     *
     * @since 6.24.0
     */
    generateFromBase64EncodedData(data: string, imageWidth: number): Promise<string>;
    /**
     * Disposes the barcode generator.
     *
     * @since 6.24.0
     */
    dispose(): void;
    private initialize;
}

interface BarcodeGeneratorControllerHost {
    readonly id: string;
    toJSON(): object;
}



declare class BarcodeGeneratorController extends BaseController<BarcodeProxy> {
    private generator;
    private adapter;
    constructor(generator: BarcodeGeneratorControllerHost);
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

export { AdaptiveRecognitionErrorReason, AdaptiveRecognitionFrameMetadata, ArucoDictionary$1 as ArucoDictionary, ArucoDictionaryPreset, ArucoMarker$1 as ArucoMarker, AztecBarcodeGeneratorBuilder, BARCODE_PROXY_TYPE_NAMES, BarcodeArAnnotationLifecycleEvents, BarcodeArAnnotationProviderEvents, BarcodeArAugmentationsEvents, BarcodeArCircleHighlight, BarcodeArEvents, BarcodeArFeedback, BarcodeArFilterEvents, BarcodeArHighlightLifecycleEvents, BarcodeArHighlightProviderEvents, BarcodeArInfoAnnotationBodyComponent, BarcodeArInfoAnnotationFooter, BarcodeArInfoAnnotationHeader, BarcodeArPopoverAnnotationButton, BarcodeArRectangleHighlight, BarcodeArResponsiveAnnotation, BarcodeArSessionController, BarcodeArSettings, BarcodeArStatusIconAnnotation, BarcodeArViewEvents, BarcodeBatchAdvancedOverlayController, BarcodeBatchAdvancedOverlayListenerEvents, BarcodeBatchBasicOverlayController, BarcodeBatchBasicOverlayListenerEvents, BarcodeBatchLicenseInfo, BarcodeBatchListenerController, BarcodeBatchListenerEvents, BarcodeBatchSettings, BarcodeCaptureAdaptiveRecognitionEvents, BarcodeCaptureFeedback$1 as BarcodeCaptureFeedback, BarcodeCaptureLicenseInfo, BarcodeCaptureListenerController, BarcodeCaptureListenerEvents, BarcodeCaptureOverlay, BarcodeCaptureOverlayController, BarcodeCaptureSettings$1 as BarcodeCaptureSettings, BarcodeCountAdaptiveRecognitionEvents, BarcodeCountFeedback, BarcodeCountMappingFlowSettings, BarcodeCountModeListenerEvents, BarcodeCountNotInListActionSettings, BarcodeCountSessionController, BarcodeCountSettings, BarcodeCountStatus, BarcodeCountStatusItem, BarcodeCountStatusResultAbort, BarcodeCountStatusResultError, BarcodeCountStatusResultSuccess, BarcodeCountToolbarSettings, BarcodeCountUiListenerEvents, BarcodeCountViewListenerEvents, BarcodeCountViewStyle, BarcodeDefaultsType, BarcodeDefinition, BarcodeDefinitionBuilder, BarcodeFilterHighlightSettingsBrush, BarcodeFilterHighlightType, BarcodeFilterSettings, BarcodeFindFeedback, BarcodeFindItem, BarcodeFindItemContent, BarcodeFindItemSearchOptions, BarcodeFindListenerEvents, BarcodeFindSession, BarcodeFindSettings, BarcodeFindViewEvents, BarcodeFindViewSettings, BarcodeGenerator, BarcodeGeneratorBuilder, BarcodeGeneratorController, BarcodeIdentifier, BarcodeInfo, BarcodePickAction, BarcodePickActionEvents, BarcodePickAsyncMapperProductProvider, BarcodePickAsyncMapperProductProviderEvents, BarcodePickListenerEvents, BarcodePickProductProviderCallback, BarcodePickScanningEvents, BarcodePickScanningSession, BarcodePickSession, BarcodePickState, BarcodePickStatusIconSettings, BarcodePickStatusIconStyle, BarcodePickViewEventHandlers, BarcodePickViewEvents, BarcodePickViewHighlightStyleCustomView, BarcodePickViewHighlightStyleCustomViewEvents, BarcodePickViewHighlightStyleCustomViewResponse, BarcodePickViewHighlightStyleEvents, BarcodePickViewHighlightStyleRequest, BarcodePickViewHighlightStyleResponse, BarcodePickViewHighlightStyleResponseBuilder, BarcodePickViewUiEvents, BarcodeSelectionAimerBehavior, BarcodeSelectionAimerSelection, BarcodeSelectionAutoSelectionStrategy, BarcodeSelectionBasicOverlay, BarcodeSelectionBasicOverlayStyle, BarcodeSelectionBrushProviderEvents, BarcodeSelectionController, BarcodeSelectionFeedback, BarcodeSelectionFreezeBehavior, BarcodeSelectionLicenseInfo, BarcodeSelectionListenerController, BarcodeSelectionListenerEvents, BarcodeSelectionManualSelectionStrategy, BarcodeSelectionOverlayController, BarcodeSelectionSettings, BarcodeSelectionStrategyType, BarcodeSelectionTapBehavior, BarcodeSelectionTapSelection, BarcodeSelectionTypeName, BarcodeSpatialGrid, BaseBarcodeArView, BaseBarcodeBatchAdvancedOverlay, BaseBarcodeCountView, BaseBarcodeFindView, BaseBarcodePickView, BaseSparkScanView, BrushForStateObject, CapturePreset, Checksum, Code128BarcodeGeneratorBuilder, Code39BarcodeGeneratorBuilder, CompositeFlag, CompositeType, CompositeTypeDescription, DataMatrixBarcodeGeneratorBuilder, Dot, DotWithIcons, Ean13BarcodeGeneratorBuilder, Ean13UpcaClassification, EncodingRange, InterleavedTwoOfFiveBarcodeGeneratorBuilder, LocalizedOnlyBarcode, Pdf417BarcodeGeneratorBuilder, Pdf417CompactionMode, Pdf417Dimensions, PrivateBarcodeSelectionStrategy, PrivateBarcodeSelectionType, QrCodeBarcodeGeneratorBuilder, QrCodeErrorCorrectionLevel, Range, Rectangular, RectangularWithIcons, ScanComponentBarcodePreset, ScanComponentTextSemanticType, ScanItemDefinition, ScanItemIdentifier, ScannedBarcode, ScannedComponentIdentifier, ScannedItem, ScannedItemIdentifier, ScannedText, SparkScanBarcodeErrorFeedback, SparkScanBarcodeFeedback, SparkScanBarcodeSuccessFeedback, SparkScanLicenseInfo, SparkScanPreviewBehavior, SparkScanScanningBehavior, SparkScanScanningModeDefault, SparkScanScanningModeTarget, SparkScanSettings, SparkScanToastSettings, SparkScanViewController, SparkScanViewEvents, SparkScanViewState, StructuredAppendData, Symbology, SymbologyDescription, SymbologySettings$1 as SymbologySettings, TargetBarcode, TextDefinition, TextDefinitionBuilder, TextIdentifier, TrackedObject, UpcaBarcodeGeneratorBuilder, barcodeArPlaceholderCameraSettings, barcodeBatchPlaceholderCameraSettings, barcodeCapturePlaceholderCameraSettings, barcodeCountPlaceholderCameraSettings, barcodeFindPlaceholderCameraSettings, barcodePickPlaceholderCameraSettings, barcodeSelectionPlaceholderCameraSettings, buildStaticBarcodeArDefaultsJson, buildStaticBarcodeBatchDefaultsJson, buildStaticBarcodeCaptureDefaultsJson, buildStaticBarcodeCountDefaultsJson, buildStaticBarcodeFindDefaultsJson, buildStaticBarcodePickDefaultsJson, buildStaticBarcodeSelectionDefaultsJson, buildStaticSparkScanDefaultsJson, ensureBarcodeDefaults, ensureBarcodeDefaultsFor, getBarcodeArDefaults, getBarcodeBatchDefaults, getBarcodeCaptureDefaults, getBarcodeCountDefaults, getBarcodeDefaults, getBarcodeFindDefaults, getBarcodePickDefaults, getBarcodeSelectionDefaults, getSparkScanDefaults, getSymbologySettingsFromBarcodePickDefaults, getSymbologySettingsFromDefaults, loadAllBarcodeDefaults, loadBarcodeArDefaults, loadBarcodeBatchDefaults, loadBarcodeCaptureDefaults, loadBarcodeCountDefaults, loadBarcodeDefaults, loadBarcodeFindDefaults, loadBarcodePickDefaults, loadBarcodeSelectionDefaults, loadSparkScanDefaults, placeholderBarcodeArView, placeholderBarcodeCountView, placeholderBarcodeFindView, placeholderBarcodePickViewHighlightStyle, placeholderBarcodePickViewSettings, placeholderBarcodeSparkScanView, registerBarcodeProxies, setBarcodeDefaultsLoader };
export type { AdaptiveRecognitionServiceListener, BarcodeArAnnotation, BarcodeArAnnotationProvider, BarcodeArDefaults, BarcodeArFeedbackJSON, BarcodeArFilter, BarcodeArHighlight, BarcodeArHighlightProvider, BarcodeArInfoAnnotationListener, BarcodeArListener, BarcodeArPopoverAnnotationListener, BarcodeArSessionJSON, BarcodeArView, BarcodeArViewControllerModeHost, BarcodeArViewProxy, BarcodeArViewUiListener, BarcodeBatchAdvancedOverlay, BarcodeBatchAdvancedOverlayListener, BarcodeBatchAdvancedOverlayView, BarcodeBatchBasicOverlayListener, BarcodeBatchDefaults, BarcodeBatchListener, BarcodeBatchSessionEventPayload, BarcodeBatchSessionJSON, BarcodeCaptureDefaults, BarcodeCaptureListener, BarcodeCaptureSessionJSON, BarcodeCountCaptureListListener, BarcodeCountCaptureListSessionJSON, BarcodeCountDefaults, BarcodeCountFeedbackJSON, BarcodeCountListener, BarcodeCountSessionJSON, BarcodeCountSessionSnapshotJSON, BarcodeCountStatusProvider, BarcodeCountStatusResult, BarcodeCountView, BarcodeCountViewListener, BarcodeCountViewProxy, BarcodeCountViewSettingsDefaults, BarcodeCountViewUiListener, BarcodeDataTransformer, BarcodeDefaults, BarcodeFilterHighlightSettings, BarcodeFilterSettingsJSON, BarcodeFindDefaults, BarcodeFindListener, BarcodeFindTransformer, BarcodeFindViewProps, BarcodeFindViewProxy, BarcodeFindViewUiListener, BarcodeInfoJSON, BarcodeJSON, BarcodeNativeCallerProvider, BarcodePickActionCallbackControllerHost, BarcodePickActionListener, BarcodePickAsyncMapperProductProviderCallback, BarcodePickDefaults, BarcodePickListener, BarcodePickModeHost, BarcodePickProductProvider, BarcodePickScanningListener, BarcodePickScanningSessionJSON, BarcodePickSessionJSON, BarcodePickView, BarcodePickViewEventHandlersViewHost, BarcodePickViewHighlightStyle, BarcodePickViewHighlightStyleAsyncProvider, BarcodePickViewHighlightStyleCustomViewProvider, BarcodePickViewListener, BarcodePickViewProxy, BarcodePickViewUiListener, BarcodeProxyType, BarcodeSelectionBrushProvider, BarcodeSelectionDefaults, BarcodeSelectionListener, BarcodeSelectionSessionControllerHost, BarcodeSelectionSessionJSON, BarcodeSelectionStrategy, BarcodeSelectionType, BarcodeSelectionTypeJSON, BarcodeSpatialGridElementJSON, BarcodeSpatialGridJSON, BaseBarcodeCountViewProps, BaseSparkScanViewProps, ClusterJSON, CompositeTypeDescriptionJSON, EncodingRangeJSON, LocalizedOnlyBarcodeJSON, PrivateBarcodeAr, PrivateBarcodeArFeedback, PrivateBarcodeArSession, PrivateBarcodeBatch, PrivateBarcodeBatchSession, PrivateBarcodeCapture, PrivateBarcodeCount, PrivateBarcodeCountCaptureList, PrivateBarcodeCountCaptureListSession, PrivateBarcodeCountSessionSnapshot, PrivateBarcodeCountStatusProviderCallback, PrivateBarcodeCountView, PrivateBarcodeFilterSettings, PrivateBarcodePick, PrivateBarcodePickCallback, PrivateBarcodePickProductProvider, PrivateBarcodePickScanningSession, PrivateBarcodePickSession, PrivateBarcodePickStatusIconSettings, PrivateBarcodePickView, PrivateCompositeTypeDescription, PrivateEncodingRange, PrivateLocalizedOnlyBarcode, PrivateRange, PrivateSparkScanView, PrivateStructuredAppendData, PrivateSymbologyDescription, PrivateSymbologySettings, RangeJSON, ScanComponentDefinition, ScannedBarcodeJSON, ScannedComponent, ScannedItemJSON, ScannedTextJSON, SparkScanDefaults, SparkScanFeedbackDelegate, SparkScanListener, SparkScanScanningMode$1 as SparkScanScanningMode, SparkScanSessionControllerHost, SparkScanSessionEventPayload, SparkScanSessionJSON, SparkScanToastSettingsDefaults, SparkScanView, SparkScanView$1 as SparkScanViewJSON, SparkScanViewProxy, SparkScanViewSettingsDefaults, SparkScanViewUiListener, StructuredAppendDataJSON, SymbologyDescriptionJSON, SymbologySettingsJSON, TargetBarcodeJSON, TrackedBarcodeJSON, TrackedObjectJSON };
export { Barcode, BarcodeAr, BarcodeArAnnotationTrigger, BarcodeArCircleHighlightPreset, BarcodeArInfoAnnotation, BarcodeArInfoAnnotationAnchor, BarcodeArInfoAnnotationWidthPreset, BarcodeArPopoverAnnotation, BarcodeArPopoverAnnotationAnchor, BarcodeArSession, BarcodeArStatusIconAnnotationAnchor, BarcodeArViewController, BarcodeArViewSettings, BarcodeBatch, BarcodeBatchBasicOverlay, BarcodeBatchBasicOverlayStyle, BarcodeBatchSession, BarcodeCapture, BarcodeCaptureSession, BarcodeCount, BarcodeCountCaptureList, BarcodeCountCaptureListSession, BarcodeCountIcon, BarcodeCountSession, BarcodeCountSessionSnapshot, BarcodeCountStatusProviderCallback, BarcodeCountViewController, BarcodeFind, BarcodeFindViewController, BarcodePick, BarcodePickActionCallback, BarcodePickProduct, BarcodePickProductProviderCallbackItem, BarcodePickSettings, BarcodePickViewController, BarcodePickViewSettings, BarcodeSelection, BarcodeSelectionSession, BatterySavingMode$1 as BatterySavingMode, Cluster, SparkScan, SparkScanMiniPreviewSize, SparkScanSession, SparkScanViewSettings, TrackedBarcode };
