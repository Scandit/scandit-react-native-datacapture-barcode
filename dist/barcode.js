import { nameForSerialization, serializationDefault, NoViewfinder, NoneLocationSelection, DefaultSerializeable, ignoreFromSerialization, FactoryMaker, Feedback, Quadrilateral, CameraController, Brush, AimerViewfinder, Anchor, PointWithUnit, BaseController, CameraSettings, Color } from 'scandit-react-native-datacapture-core/dist/core';

var Symbology;
(function (Symbology) {
    Symbology["EAN13UPCA"] = "ean13Upca";
    Symbology["UPCE"] = "upce";
    Symbology["EAN8"] = "ean8";
    Symbology["Code39"] = "code39";
    Symbology["Code93"] = "code93";
    Symbology["Code128"] = "code128";
    Symbology["Code11"] = "code11";
    Symbology["Code25"] = "code25";
    Symbology["Codabar"] = "codabar";
    Symbology["InterleavedTwoOfFive"] = "interleavedTwoOfFive";
    Symbology["MSIPlessey"] = "msiPlessey";
    Symbology["QR"] = "qr";
    Symbology["DataMatrix"] = "dataMatrix";
    Symbology["Aztec"] = "aztec";
    Symbology["MaxiCode"] = "maxicode";
    Symbology["DotCode"] = "dotcode";
    Symbology["KIX"] = "kix";
    Symbology["RM4SCC"] = "rm4scc";
    Symbology["GS1Databar"] = "databar";
    Symbology["GS1DatabarExpanded"] = "databarExpanded";
    Symbology["GS1DatabarLimited"] = "databarLimited";
    Symbology["PDF417"] = "pdf417";
    Symbology["MicroPDF417"] = "microPdf417";
    Symbology["MicroQR"] = "microQr";
    Symbology["Code32"] = "code32";
    Symbology["Lapa4SC"] = "lapa4sc";
    Symbology["IATATwoOfFive"] = "iata2of5";
    Symbology["MatrixTwoOfFive"] = "matrix2of5";
    Symbology["USPSIntelligentMail"] = "uspsIntelligentMail";
    Symbology["ArUco"] = "aruco";
    Symbology["Upu4State"] = "upu-4state";
    Symbology["AustralianPost"] = "australian-post-4state";
    Symbology["FrenchPost"] = "french-post";
})(Symbology || (Symbology = {}));

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

class Range extends DefaultSerializeable {
    get minimum() {
        return this._minimum;
    }
    get maximum() {
        return this._maximum;
    }
    get step() {
        return this._step;
    }
    get isFixed() {
        return this.minimum === this.maximum || this.step <= 0;
    }
    static fromJSON(json) {
        const range = new Range();
        range._minimum = json.minimum;
        range._maximum = json.maximum;
        range._step = json.step;
        return range;
    }
}
__decorate([
    nameForSerialization('minimum')
], Range.prototype, "_minimum", void 0);
__decorate([
    nameForSerialization('maximum')
], Range.prototype, "_maximum", void 0);
__decorate([
    nameForSerialization('step')
], Range.prototype, "_step", void 0);

class SymbologyDescription {
    static get all() {
        return this.defaults().SymbologyDescriptions;
    }
    get identifier() { return this._identifier; }
    get symbology() { return this.identifier; }
    get readableName() { return this._readableName; }
    get isAvailable() { return this._isAvailable; }
    get isColorInvertible() { return this._isColorInvertible; }
    get activeSymbolCountRange() { return this._activeSymbolCountRange; }
    get defaultSymbolCountRange() { return this._defaultSymbolCountRange; }
    get supportedExtensions() { return this._supportedExtensions; }
    static fromJSON(json) {
        const symbologyDescription = new SymbologyDescription();
        symbologyDescription._identifier = json.identifier;
        symbologyDescription._readableName = json.readableName;
        symbologyDescription._isAvailable = json.isAvailable;
        symbologyDescription._isColorInvertible = json.isColorInvertible;
        symbologyDescription._activeSymbolCountRange = Range.fromJSON(json.activeSymbolCountRange);
        symbologyDescription._defaultSymbolCountRange = Range.fromJSON(json.defaultSymbolCountRange);
        symbologyDescription._supportedExtensions = json.supportedExtensions;
        return symbologyDescription;
    }
    static forIdentifier(identifier) {
        const identifierIndex = SymbologyDescription.all
            .findIndex(description => description.identifier === identifier);
        if (identifierIndex === -1) {
            return null;
        }
        return new SymbologyDescription(identifier);
    }
    constructor(symbology) {
        if (!symbology) {
            return;
        }
        return SymbologyDescription.all[SymbologyDescription.all
            .findIndex(description => description.identifier === symbology)];
    }
}

var CompositeType;
(function (CompositeType) {
    CompositeType["A"] = "A";
    CompositeType["B"] = "B";
    CompositeType["C"] = "C";
})(CompositeType || (CompositeType = {}));

var Checksum;
(function (Checksum) {
    Checksum["Mod10"] = "mod10";
    Checksum["Mod11"] = "mod11";
    Checksum["Mod16"] = "mod16";
    Checksum["Mod43"] = "mod43";
    Checksum["Mod47"] = "mod47";
    Checksum["Mod103"] = "mod103";
    Checksum["Mod10AndMod11"] = "mod1110";
    Checksum["Mod10AndMod10"] = "mod1010";
})(Checksum || (Checksum = {}));

class SymbologySettings extends DefaultSerializeable {
    get symbology() {
        return this._symbology;
    }
    get enabledExtensions() {
        return this.extensions;
    }
    static fromJSON(identifier, json) {
        const symbologySettings = new SymbologySettings();
        symbologySettings.extensions = json.extensions;
        symbologySettings.isEnabled = json.enabled;
        symbologySettings.isColorInvertedEnabled = json.colorInvertedEnabled;
        symbologySettings.checksums = json.checksums;
        symbologySettings.activeSymbolCounts = json.activeSymbolCounts;
        symbologySettings._symbology = identifier;
        return symbologySettings;
    }
    setExtensionEnabled(extension, enabled) {
        const included = this.extensions.includes(extension);
        if (enabled && !included) {
            this.extensions.push(extension);
        }
        else if (!enabled && included) {
            this.extensions.splice(this.extensions.indexOf(extension), 1);
        }
    }
}
__decorate([
    ignoreFromSerialization
], SymbologySettings.prototype, "_symbology", void 0);
__decorate([
    nameForSerialization('enabled')
], SymbologySettings.prototype, "isEnabled", void 0);
__decorate([
    nameForSerialization('colorInvertedEnabled')
], SymbologySettings.prototype, "isColorInvertedEnabled", void 0);

class Ean13UpcaClassification {
    static isUpca(barcode) {
        var _a, _b, _c;
        if (barcode.symbology !== Symbology.EAN13UPCA) {
            return false;
        }
        return ((_a = barcode.data) === null || _a === void 0 ? void 0 : _a.length) === 12 || (((_b = barcode.data) === null || _b === void 0 ? void 0 : _b.length) === 13 && ((_c = barcode.data) === null || _c === void 0 ? void 0 : _c.charAt(0)) === '0');
    }
    static isEan13(barcode) {
        var _a, _b;
        if (barcode.symbology !== Symbology.EAN13UPCA) {
            return false;
        }
        return ((_a = barcode.data) === null || _a === void 0 ? void 0 : _a.length) === 13 && ((_b = barcode.data) === null || _b === void 0 ? void 0 : _b.charAt(0)) !== '0';
    }
}

class ArucoDictionary {
    constructor() {
        this._preset = null;
        this._markers = null;
        this._markerSize = null;
    }
    static fromPreset(preset) {
        const arucoDictionary = new ArucoDictionary();
        arucoDictionary._preset = preset;
        return arucoDictionary;
    }
    static createWithMarkers(markerSize, markers) {
        const arucoDictionary = new ArucoDictionary();
        arucoDictionary._markerSize = markerSize;
        arucoDictionary._markers = markers;
        return arucoDictionary;
    }
}
__decorate([
    nameForSerialization('preset')
], ArucoDictionary.prototype, "_preset", void 0);
__decorate([
    nameForSerialization('markers')
], ArucoDictionary.prototype, "_markers", void 0);
__decorate([
    nameForSerialization('markerSize')
], ArucoDictionary.prototype, "_markerSize", void 0);

var ArucoDictionaryPreset;
(function (ArucoDictionaryPreset) {
    ArucoDictionaryPreset["ArucoDictionaryPreset_5X5_50"] = "5X5_50";
    ArucoDictionaryPreset["ArucoDictionaryPreset_5X5_100"] = "5X5_100";
    ArucoDictionaryPreset["ArucoDictionaryPreset_5X5_250"] = "5X5_250";
    ArucoDictionaryPreset["ArucoDictionaryPreset_5X5_1000"] = "5X5_1000";
    ArucoDictionaryPreset["ArucoDictionaryPreset_5X5_1023"] = "5X5_1023";
    ArucoDictionaryPreset["ArucoDictionaryPreset_4X4_250"] = "4X4_250";
    ArucoDictionaryPreset["ArucoDictionaryPreset_6X6_250"] = "6X6_250";
})(ArucoDictionaryPreset || (ArucoDictionaryPreset = {}));

class ArucoMarker extends DefaultSerializeable {
    get size() {
        return this._markerSize;
    }
    get data() {
        return this._markerData;
    }
    static create(markerSize, markerData) {
        const arucoMarker = new ArucoMarker();
        arucoMarker._markerSize = markerSize || 0;
        arucoMarker._markerData = markerData || '';
        return arucoMarker;
    }
}
__decorate([
    nameForSerialization('markerData')
], ArucoMarker.prototype, "_markerData", void 0);
__decorate([
    nameForSerialization('markerSize')
], ArucoMarker.prototype, "_markerSize", void 0);

function getBarcodeDefaults() {
    return FactoryMaker.getInstance('BarcodeDefaults');
}
function parseBarcodeDefaults(jsonDefaults) {
    const barcodeDefaults = {
        SymbologySettings: Object.keys(jsonDefaults.SymbologySettings)
            .reduce((settings, identifier) => {
            const symbologySettings = SymbologySettings
                .fromJSON(identifier, JSON.parse(jsonDefaults.SymbologySettings[identifier]));
            settings[identifier] = symbologySettings;
            return settings;
        }, {}),
        SymbologyDescriptions: jsonDefaults.SymbologyDescriptions.map((description) => SymbologyDescription.fromJSON(JSON.parse(description))),
        CompositeTypeDescriptions: jsonDefaults.CompositeTypeDescriptions.map(JSON.parse),
    };
    SymbologyDescription.defaults = () => barcodeDefaults;
    return barcodeDefaults;
}

function getBarcodeCaptureDefaults() {
    return FactoryMaker.getInstance('BarcodeCaptureDefaults');
}
function parseBarcodeCaptureDefaults(jsonDefaults) {
    const barcodeCaptureDefaults = {
        RecommendedCameraSettings: CameraSettings
            .fromJSON(jsonDefaults.RecommendedCameraSettings),
        BarcodeCaptureSettings: {
            codeDuplicateFilter: jsonDefaults.BarcodeCaptureSettings.codeDuplicateFilter,
            batterySaving: jsonDefaults.BarcodeCaptureSettings.batterySaving,
            scanIntention: jsonDefaults.BarcodeCaptureSettings.scanIntention,
        },
        BarcodeCaptureOverlay: {
            defaultStyle: jsonDefaults.BarcodeCaptureOverlay.defaultStyle,
            DefaultBrush: new Brush(Color.fromJSON(jsonDefaults.BarcodeCaptureOverlay.DefaultBrush.fillColor), Color.fromJSON(jsonDefaults.BarcodeCaptureOverlay.DefaultBrush.strokeColor), jsonDefaults.BarcodeCaptureOverlay.DefaultBrush.strokeWidth),
            styles: Object
                .keys(jsonDefaults.BarcodeCaptureOverlay.Brushes)
                .reduce((previousValue, currentValue) => {
                return Object.assign(Object.assign({}, previousValue), { [currentValue]: {
                        DefaultBrush: {
                            fillColor: Color
                                .fromJSON(jsonDefaults.BarcodeCaptureOverlay.Brushes[currentValue].fillColor),
                            strokeColor: Color
                                .fromJSON(jsonDefaults.BarcodeCaptureOverlay.Brushes[currentValue].strokeColor),
                            strokeWidth: jsonDefaults.BarcodeCaptureOverlay.Brushes[currentValue].strokeWidth,
                        },
                    } });
            }, {}),
        }
    };
    return barcodeCaptureDefaults;
}

function getBarcodeSelectionDefaults() {
    return FactoryMaker.getInstance('BarcodeSelectionDefaults');
}
function parseBarcodeSelectionDefaults(jsonDefaults) {
    const barcodeSelectionDefaults = {
        RecommendedCameraSettings: CameraSettings
            .fromJSON(jsonDefaults.RecommendedCameraSettings),
        Feedback: ({
            selection: Feedback
                .fromJSON(JSON.parse(jsonDefaults.Feedback).selection),
        }),
        BarcodeSelectionSettings: {
            codeDuplicateFilter: jsonDefaults.BarcodeSelectionSettings.codeDuplicateFilter,
            singleBarcodeAutoDetection: jsonDefaults.BarcodeSelectionSettings.singleBarcodeAutoDetection,
            selectionType: (fromJSON) => fromJSON(JSON.parse(jsonDefaults.BarcodeSelectionSettings.selectionType)),
        },
        BarcodeSelectionTapSelection: {
            defaultFreezeBehavior: jsonDefaults.BarcodeSelectionTapSelection
                .defaultFreezeBehavior,
            defaultTapBehavior: jsonDefaults.BarcodeSelectionTapSelection
                .defaultTapBehavior,
        },
        BarcodeSelectionAimerSelection: {
            defaultSelectionStrategy: (fromJSON) => fromJSON(JSON.parse(jsonDefaults.BarcodeSelectionAimerSelection.defaultSelectionStrategy)),
        },
        BarcodeSelectionBasicOverlay: {
            defaultStyle: jsonDefaults.BarcodeSelectionBasicOverlay.defaultStyle,
            styles: Object
                .keys(jsonDefaults.BarcodeSelectionBasicOverlay.styles)
                .reduce((previousValue, currentValue) => {
                return Object.assign(Object.assign({}, previousValue), { [currentValue]: {
                        DefaultTrackedBrush: {
                            fillColor: Color
                                .fromJSON(jsonDefaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                                .DefaultTrackedBrush.fillColor),
                            strokeColor: Color
                                .fromJSON(jsonDefaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                                .DefaultTrackedBrush.strokeColor),
                            strokeWidth: jsonDefaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                                .DefaultTrackedBrush.strokeWidth,
                        },
                        DefaultAimedBrush: {
                            fillColor: Color
                                .fromJSON(jsonDefaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                                .DefaultAimedBrush.fillColor),
                            strokeColor: Color
                                .fromJSON(jsonDefaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                                .DefaultAimedBrush.strokeColor),
                            strokeWidth: jsonDefaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                                .DefaultAimedBrush.strokeWidth,
                        },
                        DefaultSelectedBrush: {
                            fillColor: Color
                                .fromJSON(jsonDefaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                                .DefaultSelectedBrush.fillColor),
                            strokeColor: Color
                                .fromJSON(jsonDefaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                                .DefaultSelectedBrush.strokeColor),
                            strokeWidth: jsonDefaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                                .DefaultSelectedBrush.strokeWidth,
                        },
                        DefaultSelectingBrush: {
                            fillColor: Color
                                .fromJSON(jsonDefaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                                .DefaultSelectingBrush.fillColor),
                            strokeColor: Color
                                .fromJSON(jsonDefaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                                .DefaultSelectingBrush.strokeColor),
                            strokeWidth: jsonDefaults.BarcodeSelectionBasicOverlay.styles[currentValue]
                                .DefaultSelectingBrush.strokeWidth,
                        },
                    } });
            }, {}),
        }
    };
    return barcodeSelectionDefaults;
}

class BarcodeCountFeedback extends DefaultSerializeable {
    static get default() {
        return new BarcodeCountFeedback(BarcodeCountFeedback.barcodeCountDefaults.Feedback.success, BarcodeCountFeedback.barcodeCountDefaults.Feedback.failure);
    }
    get success() {
        return this._success;
    }
    set success(success) {
        this._success = success;
        this.updateFeedback();
    }
    get failure() {
        return this._failure;
    }
    set failure(failure) {
        this._failure = failure;
        this.updateFeedback();
    }
    updateFeedback() {
        var _a;
        (_a = this.listenerController) === null || _a === void 0 ? void 0 : _a.updateFeedback(JSON.stringify(this.toJSON()));
    }
    static fromJSON(json) {
        const success = Feedback.fromJSON(json.success);
        const failure = Feedback.fromJSON(json.failure);
        return new BarcodeCountFeedback(success, failure);
    }
    static get barcodeCountDefaults() {
        return getBarcodeCountDefaults();
    }
    constructor(success, error) {
        super();
        this.listenerController = null;
        this._success = BarcodeCountFeedback.barcodeCountDefaults.Feedback.success;
        this._failure = BarcodeCountFeedback.barcodeCountDefaults.Feedback.failure;
        this.success = success;
        this.failure = error;
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeCountFeedback.prototype, "listenerController", void 0);
__decorate([
    nameForSerialization('success')
], BarcodeCountFeedback.prototype, "_success", void 0);
__decorate([
    nameForSerialization('failure')
], BarcodeCountFeedback.prototype, "_failure", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeCountFeedback, "barcodeCountDefaults", null);

class BarcodeCountCaptureListSession extends DefaultSerializeable {
    get correctBarcodes() {
        return this._correctBarcodes;
    }
    get wrongBarcodes() {
        return this._wrongBarcodes;
    }
    get missingBarcodes() {
        return this._missingBarcodes;
    }
    get additionalBarcodes() {
        return this._additionalBarcodes;
    }
    static fromJSON(json) {
        const correctBarcodes = json.correctBarcodes;
        const wrongBarcodes = json.wrongBarcodes;
        const missingBarcodes = json.missingBarcodes;
        const additionalBarcodes = json.additionalBarcodes;
        return new BarcodeCountCaptureListSession(correctBarcodes, wrongBarcodes, missingBarcodes, additionalBarcodes);
    }
    constructor(correctBarcodes, wrongBarcodes, missingBarcodes, additionalBarcodes) {
        super();
        this._correctBarcodes = correctBarcodes;
        this._wrongBarcodes = wrongBarcodes;
        this._missingBarcodes = missingBarcodes;
        this._additionalBarcodes = additionalBarcodes;
    }
}
__decorate([
    nameForSerialization('correctBarcodes')
], BarcodeCountCaptureListSession.prototype, "_correctBarcodes", void 0);
__decorate([
    nameForSerialization('wrongBarcodes')
], BarcodeCountCaptureListSession.prototype, "_wrongBarcodes", void 0);
__decorate([
    nameForSerialization('missingBarcodes')
], BarcodeCountCaptureListSession.prototype, "_missingBarcodes", void 0);
__decorate([
    nameForSerialization('additionalBarcodes')
], BarcodeCountCaptureListSession.prototype, "_additionalBarcodes", void 0);

class EncodingRange {
    get ianaName() { return this._ianaName; }
    get startIndex() { return this._startIndex; }
    get endIndex() { return this._endIndex; }
    static fromJSON(json) {
        const encodingRange = new EncodingRange();
        encodingRange._ianaName = json.ianaName;
        encodingRange._startIndex = json.startIndex;
        encodingRange._endIndex = json.endIndex;
        return encodingRange;
    }
}

class StructuredAppendData {
    get isComplete() { return this._isComplete; }
    get barcodeSetId() { return this._barcodeSetId; }
    get scannedSegmentCount() { return this._scannedSegmentCount; }
    get totalSegmentCount() { return this._totalSegmentCount; }
    get encodingRanges() { return this._encodingRanges; }
    get completeData() { return this._completeData; }
    get rawCompleteData() { return this._rawCompleteData; }
    static fromJSON(json) {
        const structuredAppendData = new StructuredAppendData();
        if (!json)
            return null;
        structuredAppendData._isComplete = json.complete;
        structuredAppendData._barcodeSetId = json.barcodeSetId;
        structuredAppendData._scannedSegmentCount = json.scannedSegmentCount;
        structuredAppendData._totalSegmentCount = json.totalSegmentCount;
        structuredAppendData._encodingRanges =
            json.completeDataEncodings.map(EncodingRange.fromJSON);
        structuredAppendData._completeData = json.completeDataUtf8String;
        structuredAppendData._rawCompleteData = json.completeDataRaw;
        return structuredAppendData;
    }
}

class Barcode extends DefaultSerializeable {
    get symbology() { return this._symbology; }
    get data() { return this._data; }
    get rawData() { return this._rawData; }
    get compositeData() { return this._compositeData; }
    get compositeRawData() { return this._compositeRawData; }
    get addOnData() { return this._addOnData; }
    get encodingRanges() { return this._encodingRanges; }
    get location() { return this._location; }
    get isGS1DataCarrier() { return this._isGS1DataCarrier; }
    get compositeFlag() { return this._compositeFlag; }
    get isColorInverted() { return this._isColorInverted; }
    get symbolCount() { return this._symbolCount; }
    get frameID() { return this._frameID; }
    get isStructuredAppend() { return this._structuredAppendData !== null; }
    get structuredAppendData() { return this._structuredAppendData; }
    get selectionIdentifier() { return this.data + this.symbology; }
    static fromJSON(json) {
        const barcode = new Barcode();
        barcode._symbology = json.symbology;
        barcode._data = json.data;
        barcode._rawData = json.rawData;
        barcode._compositeData = json.compositeData;
        barcode._compositeRawData = json.compositeRawData;
        barcode._addOnData = json.addOnData === undefined ? null : json.addOnData;
        barcode._isGS1DataCarrier = json.isGS1DataCarrier;
        barcode._compositeFlag = json.compositeFlag;
        barcode._isColorInverted = json.isColorInverted;
        barcode._symbolCount = json.symbolCount;
        barcode._frameID = json.frameId;
        barcode._encodingRanges = json.encodingRanges.map(EncodingRange.fromJSON);
        barcode._location = Quadrilateral.fromJSON(json.location);
        barcode._structuredAppendData =
            StructuredAppendData.fromJSON(json.structuredAppendData);
        return barcode;
    }
}
__decorate([
    nameForSerialization('symbology')
], Barcode.prototype, "_symbology", void 0);
__decorate([
    nameForSerialization('data')
], Barcode.prototype, "_data", void 0);
__decorate([
    nameForSerialization('rawData')
], Barcode.prototype, "_rawData", void 0);
__decorate([
    nameForSerialization('compositeData')
], Barcode.prototype, "_compositeData", void 0);
__decorate([
    nameForSerialization('compositeRawData')
], Barcode.prototype, "_compositeRawData", void 0);
__decorate([
    nameForSerialization('addOnData')
], Barcode.prototype, "_addOnData", void 0);
__decorate([
    nameForSerialization('encodingRanges')
], Barcode.prototype, "_encodingRanges", void 0);
__decorate([
    nameForSerialization('location')
], Barcode.prototype, "_location", void 0);
__decorate([
    nameForSerialization('isGS1DataCarrier')
], Barcode.prototype, "_isGS1DataCarrier", void 0);
__decorate([
    nameForSerialization('compositeFlag')
], Barcode.prototype, "_compositeFlag", void 0);
__decorate([
    nameForSerialization('isColorInverted')
], Barcode.prototype, "_isColorInverted", void 0);
__decorate([
    nameForSerialization('symbolCount')
], Barcode.prototype, "_symbolCount", void 0);
__decorate([
    nameForSerialization('frameID')
], Barcode.prototype, "_frameID", void 0);
__decorate([
    nameForSerialization('structuredAppendData')
], Barcode.prototype, "_structuredAppendData", void 0);

class TrackedBarcode {
    constructor() {
        /**
         * @deprecated
         */
        this._deltaTime = 0;
        /**
         * @deprecated
         */
        this._predictedLocation = undefined;
    }
    get barcode() { return this._barcode; }
    get location() { return this._location; }
    get identifier() { return this._identifier; }
    get sessionFrameSequenceID() {
        return this._sessionFrameSequenceID;
    }
    /**
     * @deprecated
     */
    get deltaTime() {
        return this._deltaTime;
    }
    /**
     * @deprecated
     */
    get predictedLocation() {
        return this._predictedLocation;
    }
    get shouldAnimateFromPreviousToNextState() {
        // tslint:disable-next-line:no-console
        console.warn('shouldAnimateFromPreviousToNextState is deprecated and returns "false" when accessed');
        return false;
    }
    static fromJSON(json, sessionFrameSequenceID) {
        const trackedBarcode = new TrackedBarcode();
        // The serialization returns the identifier as a string, not a number, which it originally is.
        // This is because the identifier needs to be used as a key in a dictionary, which in JSON can only be a string.
        // We can assume that it is a number in the string that we can safely parse.
        trackedBarcode._identifier = parseInt(json.identifier, 10);
        trackedBarcode._barcode = Barcode.fromJSON(json.barcode);
        trackedBarcode._location = Quadrilateral.fromJSON(json.location);
        trackedBarcode._sessionFrameSequenceID = sessionFrameSequenceID ? sessionFrameSequenceID : null;
        trackedBarcode._deltaTime = json.deltaTime;
        trackedBarcode._predictedLocation = trackedBarcode._location;
        return trackedBarcode;
    }
}

var BatterySavingMode;
(function (BatterySavingMode) {
    BatterySavingMode["On"] = "on";
    BatterySavingMode["Off"] = "off";
    BatterySavingMode["Auto"] = "auto";
})(BatterySavingMode || (BatterySavingMode = {}));

var CompositeFlag;
(function (CompositeFlag) {
    CompositeFlag["None"] = "none";
    CompositeFlag["Unknown"] = "unknown";
    CompositeFlag["Linked"] = "linked";
    CompositeFlag["GS1TypeA"] = "gs1TypeA";
    CompositeFlag["GS1TypeB"] = "gs1TypeB";
    CompositeFlag["GS1TypeC"] = "gs1TypeC";
})(CompositeFlag || (CompositeFlag = {}));

class LocalizedOnlyBarcode {
    get location() {
        return this._location;
    }
    get frameID() {
        return this._frameID;
    }
    static fromJSON(json) {
        const localizedBarcode = new LocalizedOnlyBarcode();
        localizedBarcode._location = Quadrilateral.fromJSON(json.location);
        localizedBarcode._frameID = json.frameId;
        return localizedBarcode;
    }
}

class TargetBarcode extends DefaultSerializeable {
    get data() {
        return this._data;
    }
    get quantity() {
        return this._quantity;
    }
    static create(data, quantity) {
        return new TargetBarcode(data, quantity);
    }
    static fromJSON(json) {
        const data = json.data;
        const quantity = json.quantity;
        return TargetBarcode.create(data, quantity);
    }
    constructor(data, quantity) {
        super();
        this._data = data;
        this._quantity = quantity;
    }
}
__decorate([
    nameForSerialization('data')
], TargetBarcode.prototype, "_data", void 0);
__decorate([
    nameForSerialization('quantity')
], TargetBarcode.prototype, "_quantity", void 0);

class BarcodeSpatialGrid extends DefaultSerializeable {
    static fromJSON(json) {
        const spatialGrid = new BarcodeSpatialGrid();
        spatialGrid._rows = json.rows;
        spatialGrid._columns = json.columns;
        spatialGrid._grid = json.grid;
        return spatialGrid;
    }
    get rows() {
        return this._rows;
    }
    get columns() {
        return this._columns;
    }
    barcodeAt(row, column) {
        const barcodeJSON = this._grid[row][column];
        if (barcodeJSON) {
            return Barcode.fromJSON(barcodeJSON);
        }
        return null;
    }
    row(index) {
        const barcodesJSON = this._grid[index];
        if (barcodesJSON) {
            return (barcodesJSON.map(Barcode.fromJSON));
        }
        return [];
    }
    column(index) {
        const barcodesJSON = this._grid.map(barcodes => barcodes[index]);
        if (barcodesJSON) {
            return (barcodesJSON.map(Barcode.fromJSON));
        }
        return [];
    }
}
__decorate([
    nameForSerialization('rows')
], BarcodeSpatialGrid.prototype, "_rows", void 0);
__decorate([
    nameForSerialization('columns')
], BarcodeSpatialGrid.prototype, "_columns", void 0);
__decorate([
    nameForSerialization('grid')
], BarcodeSpatialGrid.prototype, "_grid", void 0);

class BarcodeCountSessionController {
    get _proxy() {
        return FactoryMaker.getInstance('BarcodeCountSessionProxy');
    }
    resetSession() {
        return this._proxy.resetSession();
    }
    getSpatialMap() {
        return __awaiter(this, void 0, void 0, function* () {
            const barcodeSpatialGridJSON = yield this._proxy.getSpatialMap();
            if (barcodeSpatialGridJSON) {
                const payload = JSON.parse(barcodeSpatialGridJSON);
                return BarcodeSpatialGrid.fromJSON(payload);
            }
        });
    }
    getSpatialMapWithHints(expectedNumberOfRows, expectedNumberOfColumns) {
        return __awaiter(this, void 0, void 0, function* () {
            const barcodeSpatialGridJSON = yield this._proxy.getSpatialMapWithHints(expectedNumberOfRows, expectedNumberOfColumns);
            if (barcodeSpatialGridJSON) {
                const payload = JSON.parse(barcodeSpatialGridJSON);
                return BarcodeSpatialGrid.fromJSON(payload);
            }
        });
    }
}

class BarcodeCountSession extends DefaultSerializeable {
    static fromJSON(json) {
        const session = new BarcodeCountSession();
        session._frameSequenceID = json.frameSequenceId;
        session._additionalBarcodes = json.additionalBarcodes;
        session._recognizedBarcodes = {};
        Object.entries(json.recognizedBarcodes)
            .forEach(([key, value]) => {
            const trackedBarcode = TrackedBarcode.fromJSON(value, session._frameSequenceID);
            session._recognizedBarcodes[parseInt(key, 10)] = trackedBarcode;
        });
        return session;
    }
    constructor() {
        super();
        this.sessionController = new BarcodeCountSessionController();
    }
    get recognizedBarcodes() {
        return this._recognizedBarcodes;
    }
    get additionalBarcodes() {
        return this._additionalBarcodes;
    }
    get frameSequenceID() {
        return this._frameSequenceID;
    }
    reset() {
        return this.sessionController.resetSession();
    }
    getSpatialMap() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = yield this.sessionController.getSpatialMap()) !== null && _a !== void 0 ? _a : null;
        });
    }
    getSpatialMapWithHints(expectedNumberOfRows, expectedNumberOfColumns) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = yield this.sessionController.getSpatialMapWithHints(expectedNumberOfRows, expectedNumberOfColumns)) !== null && _a !== void 0 ? _a : null;
        });
    }
}
__decorate([
    nameForSerialization('recognizedBarcodes')
], BarcodeCountSession.prototype, "_recognizedBarcodes", void 0);
__decorate([
    nameForSerialization('additionalBarcodes')
], BarcodeCountSession.prototype, "_additionalBarcodes", void 0);
__decorate([
    nameForSerialization('frameSequenceID')
], BarcodeCountSession.prototype, "_frameSequenceID", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeCountSession.prototype, "sessionController", void 0);

var BarcodeCountListenerEvents;
(function (BarcodeCountListenerEvents) {
    BarcodeCountListenerEvents["inCallback"] = "BarcodeCountCaptureListListener.inCallback";
    BarcodeCountListenerEvents["didListSessionUpdate"] = "BarcodeCountCaptureListListener.didUpdateSession";
    BarcodeCountListenerEvents["didScan"] = "BarcodeCountListener.onScan";
})(BarcodeCountListenerEvents || (BarcodeCountListenerEvents = {}));
class BarcodeCountListenerController {
    get _proxy() {
        return FactoryMaker.getInstance('BarcodeCountListenerProxy');
    }
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    static forBarcodeCount(barcodeCount) {
        const controller = new BarcodeCountListenerController();
        controller.barcodeCount = barcodeCount;
        controller._proxy.isModeEnabled = () => barcodeCount.isEnabled;
        return controller;
    }
    update() {
        const barcodeCount = this.barcodeCount.toJSON();
        const json = JSON.stringify(barcodeCount);
        return this._proxy.updateMode(json);
    }
    reset() {
        return this._proxy.resetBarcodeCount();
    }
    setModeEnabledState(enabled) {
        this._proxy.setModeEnabledState(enabled);
    }
    subscribeListener() {
        this._proxy.registerBarcodeCountListener();
        this._proxy.subscribeDidScan();
        this._proxy.subscribeDidListSessionUpdate();
        this.eventEmitter.on(BarcodeCountListenerEvents.didScan, (body) => {
            const payload = JSON.parse(body);
            const session = BarcodeCountSession.fromJSON(JSON.parse(payload.session));
            this.notifyListenersOfDidScanSession(session);
            this._proxy.finishOnScan();
        });
        this.eventEmitter.on(BarcodeCountListenerEvents.didListSessionUpdate, (body) => {
            const payload = JSON.parse(body);
            const session = BarcodeCountCaptureListSession
                .fromJSON(JSON.parse(payload.session));
            this.notifyListenersOfDidListSessionUpdate(session);
        });
    }
    unsubscribeListener() {
        this._proxy.unregisterBarcodeCountListener();
        this.eventEmitter.removeAllListeners(BarcodeCountListenerEvents.didScan);
        this.eventEmitter.removeAllListeners(BarcodeCountListenerEvents.didListSessionUpdate);
    }
    startScanningPhase() {
        this._proxy.startScanningPhase();
    }
    endScanningPhase() {
        this._proxy.endScanningPhase();
    }
    updateFeedback(feedbackJson) {
        this._proxy.updateFeedback(feedbackJson);
    }
    setBarcodeCountCaptureList(barcodeCountCaptureList) {
        this._barcodeCountCaptureList = barcodeCountCaptureList;
        this._proxy.setBarcodeCountCaptureList(JSON.stringify(barcodeCountCaptureList.targetBarcodes));
    }
    notifyListenersOfDidScanSession(session) {
        const mode = this.barcodeCount;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(listener => {
            if (listener.didScan) {
                listener.didScan(this.barcodeCount, session, CameraController.getLastFrame);
            }
        });
        mode.isInListenerCallback = false;
    }
    notifyListenersOfDidListSessionUpdate(session) {
        var _a;
        const mode = this.barcodeCount;
        const barcodeCountCaptureListListener = (_a = this._barcodeCountCaptureList) === null || _a === void 0 ? void 0 : _a.listener;
        mode.isInListenerCallback = true;
        if (barcodeCountCaptureListListener && (barcodeCountCaptureListListener === null || barcodeCountCaptureListListener === void 0 ? void 0 : barcodeCountCaptureListListener.didUpdateSession)) {
            barcodeCountCaptureListListener === null || barcodeCountCaptureListListener === void 0 ? void 0 : barcodeCountCaptureListListener.didUpdateSession(this._barcodeCountCaptureList, session);
        }
        mode.isInListenerCallback = false;
    }
}

class BarcodeCount extends DefaultSerializeable {
    get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(isEnabled) {
        this._isEnabled = isEnabled;
        this.listenerController.setModeEnabledState(isEnabled);
    }
    get context() {
        return this._context;
    }
    get feedback() {
        return this._feedback;
    }
    set feedback(feedback) {
        this._feedback = feedback;
        this._feedback.listenerController = this.listenerController;
        this.listenerController.updateFeedback(JSON.stringify(feedback.toJSON()));
    }
    get _context() {
        return this.privateContext;
    }
    set _context(newContext) {
        this.privateContext = newContext;
    }
    static forContext(context, settings) {
        const barcodeCount = new BarcodeCount();
        barcodeCount.settings = settings;
        return barcodeCount;
    }
    static get barcodeCountDefaults() {
        return getBarcodeCountDefaults();
    }
    constructor() {
        super();
        this.type = 'barcodeCount';
        this._feedback = BarcodeCountFeedback.default;
        this._isEnabled = true;
        this.listeners = [];
        this._additionalBarcodes = [];
        this.isInListenerCallback = false;
        this.privateContext = null;
        this.listenerController = BarcodeCountListenerController.forBarcodeCount(this);
        this._feedback.listenerController = this.listenerController;
    }
    applySettings(settings) {
        this.settings = settings;
        return this.didChange();
    }
    addListener(listener) {
        this.checkAndSubscribeListeners();
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    }
    checkAndSubscribeListeners() {
        if (this.listeners.length === 0) {
            this.listenerController.subscribeListener();
        }
    }
    removeListener(listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener));
        this.checkAndUnsubscribeListeners();
    }
    checkAndUnsubscribeListeners() {
        if (this.listeners.length === 0) {
            this.listenerController.unsubscribeListener();
        }
    }
    reset() {
        return this.listenerController.reset();
    }
    startScanningPhase() {
        this.listenerController.startScanningPhase();
    }
    endScanningPhase() {
        this.listenerController.endScanningPhase();
    }
    setBarcodeCountCaptureList(barcodeCountCaptureList) {
        this.listenerController.setBarcodeCountCaptureList(barcodeCountCaptureList);
    }
    setAdditionalBarcodes(barcodes) {
        this._additionalBarcodes = barcodes;
        return this.didChange();
    }
    clearAdditionalBarcodes() {
        this._additionalBarcodes = [];
        return this.didChange();
    }
    static get recommendedCameraSettings() {
        return BarcodeCount.barcodeCountDefaults.RecommendedCameraSettings;
    }
    didChange() {
        return this.listenerController.update();
    }
    unsubscribeNativeListeners() {
        this.listenerController.unsubscribeListener();
    }
}
__decorate([
    nameForSerialization('feedback')
], BarcodeCount.prototype, "_feedback", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeCount.prototype, "_isEnabled", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeCount.prototype, "listeners", void 0);
__decorate([
    nameForSerialization('additionalBarcodes')
], BarcodeCount.prototype, "_additionalBarcodes", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeCount.prototype, "isInListenerCallback", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeCount.prototype, "privateContext", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeCount.prototype, "listenerController", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeCount, "barcodeCountDefaults", null);

class BarcodeCountCaptureList {
    static create(listener, targetBarcodes) {
        return new BarcodeCountCaptureList(listener, targetBarcodes);
    }
    constructor(listener, targetBarcodes) {
        this.listener = listener;
        this.targetBarcodes = targetBarcodes;
    }
}

var BarcodeCountViewStyle;
(function (BarcodeCountViewStyle) {
    BarcodeCountViewStyle["Icon"] = "icon";
    BarcodeCountViewStyle["Dot"] = "dot";
})(BarcodeCountViewStyle || (BarcodeCountViewStyle = {}));

var BarcodeFilterHighlightType;
(function (BarcodeFilterHighlightType) {
    BarcodeFilterHighlightType["Brush"] = "brush";
})(BarcodeFilterHighlightType || (BarcodeFilterHighlightType = {}));

class BarcodeCountSettings extends DefaultSerializeable {
    static get barcodeCountDefaults() {
        return getBarcodeCountDefaults();
    }
    static get barcodeDefaults() {
        return getBarcodeDefaults();
    }
    constructor() {
        super();
        this.symbologies = {};
        this.properties = {};
        this._filterSettings = BarcodeCountSettings.barcodeCountDefaults.BarcodeCountSettings.barcodeFilterSettings;
        this._expectsOnlyUniqueBarcodes = BarcodeCountSettings.barcodeCountDefaults.BarcodeCountSettings.expectOnlyUniqueBarcodes;
        this._mappingEnabled = BarcodeCountSettings.barcodeCountDefaults.BarcodeCountSettings.mappingEnabled;
    }
    get expectsOnlyUniqueBarcodes() {
        return this._expectsOnlyUniqueBarcodes;
    }
    set expectsOnlyUniqueBarcodes(expectsOnlyUniqueBarcodes) {
        this._expectsOnlyUniqueBarcodes = expectsOnlyUniqueBarcodes;
    }
    get mappingEnabled() {
        return this._mappingEnabled;
    }
    set mappingEnabled(mappingEnabled) {
        this._mappingEnabled = mappingEnabled;
    }
    get filterSettings() {
        return this._filterSettings;
    }
    get enabledSymbologies() {
        return Object.keys(this.symbologies)
            .filter(symbology => this.symbologies[symbology].isEnabled);
    }
    settingsForSymbology(symbology) {
        if (!this.symbologies[symbology]) {
            const symbologySettings = BarcodeCountSettings.barcodeDefaults.SymbologySettings[symbology];
            symbologySettings._symbology = symbology;
            this.symbologies[symbology] = symbologySettings;
        }
        return this.symbologies[symbology];
    }
    enableSymbologies(symbologies) {
        symbologies.forEach(symbology => this.enableSymbology(symbology, true));
    }
    enableSymbology(symbology, enabled) {
        this.settingsForSymbology(symbology).isEnabled = enabled;
    }
    setProperty(name, value) {
        this.properties[name] = value;
    }
    getProperty(name) {
        return this.properties[name];
    }
}
__decorate([
    nameForSerialization('barcodeFilterSettings')
], BarcodeCountSettings.prototype, "_filterSettings", void 0);
__decorate([
    nameForSerialization('expectOnlyUniqueBarcodes')
], BarcodeCountSettings.prototype, "_expectsOnlyUniqueBarcodes", void 0);
__decorate([
    nameForSerialization('mappingEnabled')
], BarcodeCountSettings.prototype, "_mappingEnabled", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeCountSettings, "barcodeCountDefaults", null);
__decorate([
    ignoreFromSerialization
], BarcodeCountSettings, "barcodeDefaults", null);

class BarcodeCountToolbarSettings extends DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.audioOnButtonText = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.audioOnButtonText;
        this.audioOffButtonText = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.audioOffButtonText;
        this.audioButtonContentDescription = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.audioButtonContentDescription;
        this.audioButtonAccessibilityHint = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.audioButtonAccessibilityHint;
        this.audioButtonAccessibilityLabel = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.audioButtonAccessibilityLabel;
        this.vibrationOnButtonText = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.vibrationOnButtonText;
        this.vibrationOffButtonText = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.vibrationOffButtonText;
        this.vibrationButtonContentDescription = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.vibrationButtonContentDescription;
        this.vibrationButtonAccessibilityHint = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.vibrationButtonAccessibilityHint;
        this.vibrationButtonAccessibilityLabel = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.vibrationButtonAccessibilityLabel;
        this.strapModeOnButtonText = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.strapModeOnButtonText;
        this.strapModeOffButtonText = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.strapModeOffButtonText;
        this.strapModeButtonContentDescription = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.strapModeButtonContentDescription;
        this.strapModeButtonAccessibilityHint = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.strapModeButtonAccessibilityHint;
        this.strapModeButtonAccessibilityLabel = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.strapModeButtonAccessibilityLabel;
        this.colorSchemeOnButtonText = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.colorSchemeOnButtonText;
        this.colorSchemeOffButtonText = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.colorSchemeOffButtonText;
        this.colorSchemeButtonContentDescription = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.colorSchemeButtonContentDescription;
        this.colorSchemeButtonAccessibilityHint = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.colorSchemeButtonAccessibilityHint;
        this.colorSchemeButtonAccessibilityLabel = BarcodeCountToolbarSettings.barcodeCountDefaults.BarcodeCountView.toolbarSettings.colorSchemeButtonAccessibilityLabel;
    }
    static get barcodeCountDefaults() {
        return getBarcodeCountDefaults();
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeCountToolbarSettings, "barcodeCountDefaults", null);

var BarcodeCountViewEvents;
(function (BarcodeCountViewEvents) {
    BarcodeCountViewEvents["singleScanButtonTapped"] = "BarcodeCountViewUiListener.onSingleScanButtonTapped";
    BarcodeCountViewEvents["listButtonTapped"] = "BarcodeCountViewUiListener.onListButtonTapped";
    BarcodeCountViewEvents["exitButtonTapped"] = "BarcodeCountViewUiListener.onExitButtonTapped";
    BarcodeCountViewEvents["brushForRecognizedBarcode"] = "BarcodeCountViewListener.brushForRecognizedBarcode";
    BarcodeCountViewEvents["brushForRecognizedBarcodeNotInList"] = "BarcodeCountViewListener.brushForRecognizedBarcodeNotInList";
    BarcodeCountViewEvents["brushForUnrecognizedBarcode"] = "BarcodeCountViewListener.brushForUnrecognizedBarcode";
    BarcodeCountViewEvents["filteredBarcodeTapped"] = "BarcodeCountViewListener.didTapFilteredBarcode";
    BarcodeCountViewEvents["recognizedBarcodeNotInListTapped"] = "BarcodeCountViewListener.didTapRecognizedBarcodeNotInList";
    BarcodeCountViewEvents["recognizedBarcodeTapped"] = "BarcodeCountViewListener.didTapRecognizedBarcode";
    BarcodeCountViewEvents["unrecognizedBarcodeTapped"] = "BarcodeCountViewListener.didTapUnrecognizedBarcode";
    BarcodeCountViewEvents["captureListCompleted"] = "BarcodeCountViewListener.didCompleteCaptureList";
})(BarcodeCountViewEvents || (BarcodeCountViewEvents = {}));

class BarcodeFilterHighlightSettingsBrush extends DefaultSerializeable {
    static create(brush) {
        return new BarcodeFilterHighlightSettingsBrush(brush);
    }
    constructor(brush) {
        super();
        this._brush = null;
        this._highlightType = BarcodeFilterHighlightType.Brush;
        this._brush = brush;
    }
    get highlightType() {
        return this._highlightType;
    }
    get brush() {
        return this._brush;
    }
}
__decorate([
    nameForSerialization('highlightType')
], BarcodeFilterHighlightSettingsBrush.prototype, "_highlightType", void 0);
__decorate([
    nameForSerialization('brush')
], BarcodeFilterHighlightSettingsBrush.prototype, "_brush", void 0);

class BarcodeFilterSettings extends DefaultSerializeable {
    get excludeEan13() {
        return this._excludeEan13;
    }
    set excludeEan13(value) {
        this._excludeEan13 = value;
    }
    get excludeUpca() {
        return this._excludeUpca;
    }
    set excludeUpca(value) {
        this._excludeUpca = value;
    }
    get excludedCodesRegex() {
        return this._excludedCodesRegex;
    }
    set excludedCodesRegex(value) {
        this._excludedCodesRegex = value;
    }
    get excludedSymbologies() {
        return this._excludedSymbologies;
    }
    set excludedSymbologies(values) {
        this._excludedSymbologies = values;
    }
    static fromJSON(json) {
        const excludeEan13 = json.excludeEan13;
        const excludeUpca = json.excludeUpca;
        const excludedCodesRegex = json.excludedCodesRegex;
        const excludedSymbologies = json.excludedSymbologies;
        const excludedSymbolCounts = json.excludedSymbolCounts;
        return new BarcodeFilterSettings(excludeEan13, excludeUpca, excludedCodesRegex, excludedSymbolCounts, excludedSymbologies);
    }
    constructor(excludeEan13, excludeUpca, excludedCodesRegex, excludedSymbolCounts, excludedSymbologies) {
        super();
        this._excludeEan13 = false;
        this._excludeUpca = false;
        this._excludedCodesRegex = '';
        this._excludedSymbolCounts = {};
        this._excludedSymbologies = [];
        this.excludeEan13 = excludeEan13;
        this.excludeUpca = excludeUpca;
        this.excludedCodesRegex = excludedCodesRegex;
        this._excludedSymbolCounts = excludedSymbolCounts;
        this.excludedSymbologies = excludedSymbologies;
    }
    getExcludedSymbolCountsForSymbology(symbology) {
        return this._excludedSymbolCounts[symbology] || [];
    }
    setExcludedSymbolCounts(excludedSymbolCounts, symbology) {
        this._excludedSymbolCounts[symbology] = excludedSymbolCounts;
    }
}
__decorate([
    nameForSerialization('excludeEan13')
], BarcodeFilterSettings.prototype, "_excludeEan13", void 0);
__decorate([
    nameForSerialization('excludeUpca')
], BarcodeFilterSettings.prototype, "_excludeUpca", void 0);
__decorate([
    nameForSerialization('excludedCodesRegex')
], BarcodeFilterSettings.prototype, "_excludedCodesRegex", void 0);
__decorate([
    nameForSerialization('excludedSymbolCounts')
], BarcodeFilterSettings.prototype, "_excludedSymbolCounts", void 0);
__decorate([
    nameForSerialization('excludedSymbologies')
], BarcodeFilterSettings.prototype, "_excludedSymbologies", void 0);

function getBarcodeCountDefaults() {
    return FactoryMaker.getInstance('BarcodeCountDefaults');
}
function parseBarcodeCountToolbarDefaults(jsonDefaults) {
    const barcodeCountToolbarSettingsDefault = {
        audioOnButtonText: jsonDefaults.audioOnButtonText,
        audioOffButtonText: jsonDefaults.audioOffButtonText,
        audioButtonContentDescription: jsonDefaults.audioButtonContentDescription,
        audioButtonAccessibilityHint: jsonDefaults.audioButtonAccessibilityHint,
        audioButtonAccessibilityLabel: jsonDefaults.audioButtonAccessibilityLabel,
        vibrationOnButtonText: jsonDefaults.vibrationOnButtonText,
        vibrationOffButtonText: jsonDefaults.vibrationOffButtonText,
        vibrationButtonContentDescription: jsonDefaults.vibrationButtonContentDescription,
        vibrationButtonAccessibilityHint: jsonDefaults.vibrationButtonAccessibilityHint,
        vibrationButtonAccessibilityLabel: jsonDefaults.vibrationButtonAccessibilityLabel,
        strapModeOnButtonText: jsonDefaults.strapModeOnButtonText,
        strapModeOffButtonText: jsonDefaults.strapModeOffButtonText,
        strapModeButtonContentDescription: jsonDefaults.strapModeButtonContentDescription,
        strapModeButtonAccessibilityHint: jsonDefaults.strapModeButtonAccessibilityHint,
        strapModeButtonAccessibilityLabel: jsonDefaults.strapModeButtonAccessibilityLabel,
        colorSchemeOnButtonText: jsonDefaults.colorSchemeOnButtonText,
        colorSchemeOffButtonText: jsonDefaults.colorSchemeOffButtonText,
        colorSchemeButtonContentDescription: jsonDefaults.colorSchemeButtonContentDescription,
        colorSchemeButtonAccessibilityHint: jsonDefaults.colorSchemeButtonAccessibilityHint,
        colorSchemeButtonAccessibilityLabel: jsonDefaults.colorSchemeButtonAccessibilityLabel,
    };
    return barcodeCountToolbarSettingsDefault;
}
function parseBarcodeCountDefaults(jsonDefaults) {
    const viewJsonDefaults = jsonDefaults.BarcodeCountView;
    const toolbarJsonDefaults = viewJsonDefaults.toolbarSettings;
    const barcodeCountDefaults = {
        RecommendedCameraSettings: CameraSettings
            .fromJSON(jsonDefaults.RecommendedCameraSettings),
        Feedback: {
            success: Feedback.fromJSON(JSON.parse(jsonDefaults.BarcodeCountFeedback).success),
            failure: Feedback.fromJSON(JSON.parse(jsonDefaults.BarcodeCountFeedback).failure)
        },
        BarcodeCountSettings: {
            expectOnlyUniqueBarcodes: jsonDefaults.BarcodeCountSettings.expectOnlyUniqueBarcodes,
            disableModeWhenCaptureListCompleted: jsonDefaults.BarcodeCountSettings.disableModeWhenCaptureListCompleted,
            barcodeFilterSettings: BarcodeFilterSettings
                .fromJSON(jsonDefaults.BarcodeCountSettings.barcodeFilterSettings),
            mappingEnabled: jsonDefaults.BarcodeCountSettings.mappingEnabled
        },
        BarcodeCountView: {
            style: viewJsonDefaults.style,
            shouldDisableModeOnExitButtonTapped: viewJsonDefaults.shouldDisableModeOnExitButtonTapped,
            shouldShowUserGuidanceView: viewJsonDefaults.shouldShowUserGuidanceView,
            shouldShowListButton: viewJsonDefaults.shouldShowListButton,
            shouldShowExitButton: viewJsonDefaults.shouldShowExitButton,
            shouldShowShutterButton: viewJsonDefaults.shouldShowShutterButton,
            shouldShowHints: viewJsonDefaults.shouldShowHints,
            shouldShowClearHighlightsButton: viewJsonDefaults.shouldShowClearHighlightsButton,
            shouldShowSingleScanButton: viewJsonDefaults.shouldShowSingleScanButton,
            shouldShowFloatingShutterButton: viewJsonDefaults.shouldShowFloatingShutterButton,
            shouldShowToolbar: viewJsonDefaults.shouldShowToolbar,
            defaultNotInListBrush: viewJsonDefaults.defaultNotInListBrush,
            defaultRecognizedBrush: viewJsonDefaults.defaultRecognizedBrush,
            defaultUnrecognizedBrush: viewJsonDefaults.defaultUnrecognizedBrush,
            shouldShowScanAreaGuides: viewJsonDefaults.shouldShowScanAreaGuides,
            clearHighlightsButtonText: viewJsonDefaults.clearHighlightsButtonText,
            exitButtonText: viewJsonDefaults.exitButtonText,
            textForUnrecognizedBarcodesDetectedHint: viewJsonDefaults.textForUnrecognizedBarcodesDetectedHint,
            textForTapShutterToScanHint: viewJsonDefaults.textForTapShutterToScanHint,
            textForScanningHint: viewJsonDefaults.textForScanningHint,
            textForMoveCloserAndRescanHint: viewJsonDefaults.textForMoveCloserAndRescanHint,
            textForMoveFurtherAndRescanHint: viewJsonDefaults.textForMoveFurtherAndRescanHint,
            shouldShowListProgressBar: viewJsonDefaults.shouldShowListProgressBar,
            toolbarSettings: parseBarcodeCountToolbarDefaults(toolbarJsonDefaults),
            listButtonAccessibilityHint: viewJsonDefaults.listButtonAccessibilityHint || null,
            listButtonAccessibilityLabel: viewJsonDefaults.listButtonAccessibilityLabel || null,
            listButtonContentDescription: viewJsonDefaults.listButtonContentDescription || null,
            exitButtonAccessibilityHint: viewJsonDefaults.exitButtonAccessibilityHint || null,
            exitButtonAccessibilityLabel: viewJsonDefaults.exitButtonAccessibilityLabel || null,
            exitButtonContentDescription: viewJsonDefaults.exitButtonContentDescription || null,
            shutterButtonAccessibilityHint: viewJsonDefaults.shutterButtonAccessibilityHint || null,
            shutterButtonAccessibilityLabel: viewJsonDefaults.shutterButtonAccessibilityLabel || null,
            shutterButtonContentDescription: viewJsonDefaults.shutterButtonContentDescription || null,
            floatingShutterButtonAccessibilityHint: viewJsonDefaults.floatingShutterButtonAccessibilityHint || null,
            floatingShutterButtonAccessibilityLabel: viewJsonDefaults.floatingShutterButtonAccessibilityLabel || null,
            floatingShutterButtonContentDescription: viewJsonDefaults.floatingShutterButtonContentDescription || null,
            clearHighlightsButtonAccessibilityHint: viewJsonDefaults.clearHighlightsButtonAccessibilityHint || null,
            clearHighlightsButtonAccessibilityLabel: viewJsonDefaults.clearHighlightsButtonAccessibilityLabel || null,
            clearHighlightsButtonContentDescription: viewJsonDefaults.clearHighlightsButtonContentDescription || null,
            singleScanButtonAccessibilityHint: viewJsonDefaults.singleScanButtonAccessibilityHint || null,
            singleScanButtonAccessibilityLabel: viewJsonDefaults.singleScanButtonAccessibilityLabel || null,
            singleScanButtonContentDescription: viewJsonDefaults.singleScanButtonContentDescription || null,
            shouldShowTorchControl: viewJsonDefaults.shouldShowTorchControl,
            torchControlPosition: viewJsonDefaults.torchControlPosition,
        }
    };
    return barcodeCountDefaults;
}

function getBarcodeTrackingDefaults() {
    return FactoryMaker.getInstance('BarcodeTrackingDefaults');
}
function parseBarcodeTrackingDefaults(jsonDefaults) {
    const barcodeTrackingDefaults = {
        RecommendedCameraSettings: CameraSettings
            .fromJSON(jsonDefaults.RecommendedCameraSettings),
        BarcodeTrackingBasicOverlay: {
            defaultStyle: jsonDefaults.BarcodeTrackingBasicOverlay.defaultStyle,
            styles: Object
                .keys(jsonDefaults.BarcodeTrackingBasicOverlay.Brushes)
                .reduce((previousValue, currentValue) => {
                return Object.assign(Object.assign({}, previousValue), { [currentValue]: {
                        DefaultBrush: {
                            fillColor: Color
                                .fromJSON(jsonDefaults.BarcodeTrackingBasicOverlay.
                                Brushes[currentValue].fillColor),
                            strokeColor: Color
                                .fromJSON(jsonDefaults.BarcodeTrackingBasicOverlay.
                                Brushes[currentValue].strokeColor),
                            strokeWidth: jsonDefaults.BarcodeTrackingBasicOverlay.
                                Brushes[currentValue].strokeWidth,
                        },
                    } });
            }, {}),
        }
    };
    return barcodeTrackingDefaults;
}

function getSparkScanDefaults() {
    return FactoryMaker.getInstance('SparkScanDefaults');
}

function getBarcodePickDefaults() {
    return FactoryMaker.getInstance('BarcodePickDefaults');
}
function parseBarcodePickViewHighlightStyle(jsonStyles) {
    const styles = {};
    Object.entries(jsonStyles).forEach(([key, value]) => {
        styles[key] = JSON.parse(value);
    });
    return styles;
}
function parseBarcodePickDefaults(jsonDefaults) {
    const barcodePickDefaults = {
        RecommendedCameraSettings: CameraSettings
            .fromJSON(jsonDefaults.RecommendedCameraSettings),
        BarcodePickSettings: {
            arucoDictionary: jsonDefaults.BarcodePickSettings.arucoDictionary,
            cachingEnabled: jsonDefaults.BarcodePickSettings.cachingEnabled,
            hapticsEnabled: jsonDefaults.BarcodePickSettings.hapticsEnabled,
            soundEnabled: jsonDefaults.BarcodePickSettings.soundEnabled,
        },
        ViewSettings: {
            highlightStyle: JSON.parse(jsonDefaults.ViewSettings.HighlightStyle),
            initialGuidelineText: jsonDefaults.ViewSettings.initialGuidelineText,
            moveCloserGuidelineText: jsonDefaults.ViewSettings.moveCloserGuidelineText,
            loadingDialogText: jsonDefaults.ViewSettings.loadingDialogText,
            showLoadingDialog: jsonDefaults.ViewSettings.showLoadingDialog,
            onFirstItemPickCompletedHintText: jsonDefaults.ViewSettings.onFirstItemPickCompletedHintText,
            onFirstItemToPickFoundHintText: jsonDefaults.ViewSettings.onFirstItemToPickFoundHintText,
            onFirstItemUnpickCompletedHintText: jsonDefaults.ViewSettings.onFirstItemUnpickCompletedHintText,
            onFirstUnmarkedItemPickCompletedHintText: jsonDefaults.ViewSettings.onFirstUnmarkedItemPickCompletedHintText,
            showGuidelines: jsonDefaults.ViewSettings.showGuidelines,
            showHints: jsonDefaults.ViewSettings.showHints,
            showFinishButton: jsonDefaults.ViewSettings.showFinishButton,
            showPauseButton: jsonDefaults.ViewSettings.showPauseButton,
            showZoomButton: jsonDefaults.ViewSettings.showZoomButton,
        },
        BarcodePickViewHighlightStyle: parseBarcodePickViewHighlightStyle(jsonDefaults.BarcodePickViewHighlightStyle),
        SymbologySettings: Object.keys(jsonDefaults.SymbologySettings)
            .reduce((settings, identifier) => {
            settings[identifier] = SymbologySettings
                .fromJSON(identifier, JSON.parse(jsonDefaults.SymbologySettings[identifier]));
            return settings;
        }, {}),
        BarcodePickStatusIconSettings: {
            maxSize: jsonDefaults.maxSize,
            minSize: jsonDefaults.minSize,
            ratioToHighlightSize: jsonDefaults.ratioToHighlightSize,
        }
    };
    return barcodePickDefaults;
}

function getBarcodeFindDefaults() {
    return FactoryMaker.getInstance('BarcodeFindDefaults');
}
function parseBarcodeFindDefaults(jsonDefaults) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return {
        RecommendedCameraSettings: CameraSettings
            .fromJSON(jsonDefaults.RecommendedCameraSettings),
        Feedback: {
            found: Feedback.fromJSON(JSON.parse(jsonDefaults.BarcodeFindFeedback).found),
            itemListUpdated: Feedback
                .fromJSON(JSON.parse(jsonDefaults.BarcodeFindFeedback).itemListUpdated),
        },
        BarcodeFindView: {
            shouldShowCarousel: jsonDefaults.shouldShowCarousel,
            shouldShowFinishButton: jsonDefaults.shouldShowFinishButton,
            shouldShowHints: jsonDefaults.shouldShowHints,
            shouldShowPauseButton: jsonDefaults.shouldShowPauseButton,
            shouldShowProgressBar: jsonDefaults.shouldShowProgressBar,
            shouldShowUserGuidanceView: jsonDefaults.shouldShowUserGuidanceView,
            shouldShowTorchControl: jsonDefaults.shouldShowTorchControl,
            textForAllItemsFoundSuccessfullyHint: (_a = jsonDefaults.textForAllItemsFoundSuccessfullyHint) !== null && _a !== void 0 ? _a : null,
            textForItemListUpdatedHint: (_b = jsonDefaults.textForItemListUpdatedHint) !== null && _b !== void 0 ? _b : null,
            textForItemListUpdatedWhenPausedHint: (_c = jsonDefaults.textForItemListUpdatedWhenPausedHint) !== null && _c !== void 0 ? _c : null,
            textForCollapseCardsButton: (_d = jsonDefaults.textForCollapseCardsButton) !== null && _d !== void 0 ? _d : null,
            textForMoveCloserToBarcodesHint: (_e = jsonDefaults.textForMoveCloserToBarcodesHint) !== null && _e !== void 0 ? _e : null,
            textForPointAtBarcodesToSearchHint: (_f = jsonDefaults.textForPointAtBarcodesToSearchHint) !== null && _f !== void 0 ? _f : null,
            textForTapShutterToPauseScreenHint: (_g = jsonDefaults.textForTapShutterToPauseScreenHint) !== null && _g !== void 0 ? _g : null,
            textForTapShutterToResumeSearchHint: (_h = jsonDefaults.textForTapShutterToResumeSearchHint) !== null && _h !== void 0 ? _h : null,
            torchControlPosition: jsonDefaults.torchControlPosition,
        }
    };
}

function parseSparkScanDefaults(jsonDefaults) {
    const sparkScanViewSettingsDefaults = JSON.parse(jsonDefaults.SparkScanView.SparkScanViewSettings);
    const toastSettingsDefaults = JSON.parse(sparkScanViewSettingsDefaults.toastSettings);
    const sparkScanDefaults = {
        Feedback: ({
            success: {
                visualFeedbackColor: Color.fromJSON(JSON.parse(jsonDefaults.Feedback.success).barcodeFeedback.visualFeedbackColor),
                brush: new Brush(Color.fromJSON(JSON.parse(jsonDefaults.Feedback.success).barcodeFeedback.brush.fill.color), Color.fromJSON(JSON.parse(jsonDefaults.Feedback.success).barcodeFeedback.brush.stroke.color), JSON.parse(JSON.parse(jsonDefaults.Feedback.success).barcodeFeedback.brush.stroke.width)),
                feedbackDefault: Feedback.fromJSON(JSON.parse(jsonDefaults.Feedback.success).barcodeFeedback.feedback),
            },
            error: {
                visualFeedbackColor: JSON.parse(jsonDefaults.Feedback.error).barcodeFeedback.visualFeedbackColor,
                brush: new Brush(Color.fromJSON(JSON.parse(jsonDefaults.Feedback.error).barcodeFeedback.brush.fill.color), Color.fromJSON(JSON.parse(jsonDefaults.Feedback.error).barcodeFeedback.brush.stroke.color), JSON.parse(JSON.parse(jsonDefaults.Feedback.error).barcodeFeedback.brush.stroke.width)),
                feedbackDefault: Feedback.fromJSON(JSON.parse(jsonDefaults.Feedback.error).barcodeFeedback.feedback),
            }
        }),
        SparkScanSettings: {
            batterySaving: jsonDefaults.SparkScanSettings.batterySaving,
            codeDuplicateFilter: jsonDefaults.SparkScanSettings.codeDuplicateFilter,
            locationSelection: (fromJSON) => {
                return fromJSON(JSON.parse(jsonDefaults.SparkScanSettings.locationSelection));
            },
            singleBarcodeAutoDetection: jsonDefaults.SparkScanSettings.singleBarcodeAutoDetection,
            scanIntention: jsonDefaults.SparkScanSettings.scanIntention,
        },
        SparkScanView: {
            shouldShowScanAreaGuides: jsonDefaults.SparkScanView.shouldShowScanAreaGuides,
            brush: new Brush(Color.fromJSON(jsonDefaults.SparkScanView.brush.fillColor), Color.fromJSON(jsonDefaults.SparkScanView.brush.strokeColor), jsonDefaults.SparkScanView.brush.strokeWidth),
            torchButtonVisible: jsonDefaults.SparkScanView.torchButtonVisible,
            scanningBehaviorButtonVisible: jsonDefaults.SparkScanView.scanningBehaviorButtonVisible,
            handModeButtonVisible: jsonDefaults.SparkScanView.handModeButtonVisible,
            barcodeCountButtonVisible: jsonDefaults.SparkScanView.barcodeCountButtonVisible,
            barcodeFindButtonVisible: jsonDefaults.SparkScanView.barcodeFindButtonVisible,
            targetModeButtonVisible: jsonDefaults.SparkScanView.targetModeButtonVisible,
            soundModeButtonVisible: false, // Deprecated, will be removed in the next version
            hapticModeButtonVisible: false, // Deprecated, will be removed in the next version
            previewSizeControlVisible: jsonDefaults.SparkScanView.previewSizeControlVisible,
            stopCapturingText: jsonDefaults.SparkScanView.stopCapturingText || null,
            startCapturingText: jsonDefaults.SparkScanView.stopCapturingText || null,
            resumeCapturingText: jsonDefaults.SparkScanView.resumeCapturingText || null,
            scanningCapturingText: jsonDefaults.SparkScanView.scanningCapturingText || null,
            targetModeHintText: jsonDefaults.SparkScanView.scanningCapturingText || null,
            shouldShowTargetModeHint: jsonDefaults.SparkScanView.shouldShowTargetModeHint,
            captureButtonBackgroundColor: jsonDefaults.SparkScanView.captureButtonBackgroundColor ? Color
                .fromJSON(jsonDefaults.SparkScanView.captureButtonBackgroundColor) : null,
            captureButtonActiveBackgroundColor: jsonDefaults.SparkScanView.captureButtonActiveBackgroundColor ? Color
                .fromJSON(jsonDefaults.SparkScanView.captureButtonActiveBackgroundColor) : null,
            captureButtonTintColor: jsonDefaults.SparkScanView.captureButtonTintColor ? Color
                .fromJSON(jsonDefaults.SparkScanView.captureButtonTintColor) : null,
            toolbarBackgroundColor: jsonDefaults.SparkScanView.toolbarBackgroundColor ? Color
                .fromJSON(jsonDefaults.SparkScanView.toolbarBackgroundColor) : null,
            toolbarIconActiveTintColor: jsonDefaults.SparkScanView.toolbarIconActiveTintColor ? Color
                .fromJSON(jsonDefaults.SparkScanView.toolbarIconActiveTintColor) : null,
            toolbarIconInactiveTintColor: jsonDefaults.SparkScanView.toolbarIconInactiveTintColor ? Color
                .fromJSON(jsonDefaults.SparkScanView.toolbarIconInactiveTintColor) : null,
            cameraSwitchButtonVisible: jsonDefaults.SparkScanView.cameraSwitchButtonVisible,
            SparkScanViewSettings: {
                triggerButtonCollapseTimeout: sparkScanViewSettingsDefaults.triggerButtonCollapseTimeout,
                continuousCaptureTimeout: sparkScanViewSettingsDefaults.continuousCaptureTimeout,
                defaultScanningMode: (fromJSON) => {
                    return fromJSON(JSON.parse(sparkScanViewSettingsDefaults.defaultScanningMode));
                },
                defaultTorchState: sparkScanViewSettingsDefaults.defaultTorchState,
                soundEnabled: sparkScanViewSettingsDefaults.soundEnabled,
                hapticEnabled: sparkScanViewSettingsDefaults.hapticEnabled,
                defaultHandMode: sparkScanViewSettingsDefaults.defaultHandMode,
                holdToScanEnabled: sparkScanViewSettingsDefaults.holdToScanEnabled,
                hardwareTriggerEnabled: sparkScanViewSettingsDefaults.hardwareTriggerEnabled,
                hardwareTriggerKeyCode: sparkScanViewSettingsDefaults.hardwareTriggerKeyCode,
                visualFeedbackEnabled: sparkScanViewSettingsDefaults.visualFeedbackEnabled ? sparkScanViewSettingsDefaults.visualFeedbackEnabled : false,
                toastSettings: {
                    toastEnabled: toastSettingsDefaults.toastEnabled,
                    toastBackgroundColor: toastSettingsDefaults.toastBackgroundColor ? Color
                        .fromJSON(toastSettingsDefaults.toastBackgroundColor) : null,
                    toastTextColor: toastSettingsDefaults.toastTextColor ? Color
                        .fromJSON(toastSettingsDefaults.toastTextColor) : null,
                    targetModeEnabledMessage: toastSettingsDefaults.targetModeEnabledMessage,
                    targetModeDisabledMessage: toastSettingsDefaults.targetModeDisabledMessage,
                    continuousModeEnabledMessage: toastSettingsDefaults.continuousModeEnabledMessage,
                    continuousModeDisabledMessage: toastSettingsDefaults.continuousModeDisabledMessage,
                    cameraTimeoutMessage: toastSettingsDefaults.cameraTimeoutMessage,
                    worldFacingCameraEnabledMessage: toastSettingsDefaults.worldFacingCameraEnabledMessage,
                    userFacingCameraEnabledMessage: toastSettingsDefaults.userFacingCameraEnabledMessage,
                    scanPausedMessage: toastSettingsDefaults.scanPausedMessage,
                    zoomedInMessage: toastSettingsDefaults.zoomedInMessage,
                    zoomedOutMessage: toastSettingsDefaults.zoomedOutMessage,
                    torchEnabledMessage: toastSettingsDefaults.torchEnabledMessage,
                    torchDisabledMessage: toastSettingsDefaults.torchDisabledMessage,
                },
                targetZoomFactorOut: sparkScanViewSettingsDefaults.targetZoomFactorOut,
                targetZoomFactorIn: sparkScanViewSettingsDefaults.targetZoomFactorIn,
                zoomFactorOut: sparkScanViewSettingsDefaults.zoomFactorOut,
                zoomFactorIn: sparkScanViewSettingsDefaults.zoomFactorIn,
                inactiveStateTimeout: sparkScanViewSettingsDefaults.inactiveStateTimeout,
                defaultCameraPosition: sparkScanViewSettingsDefaults.defaultCameraPosition,
            }
        },
    };
    return sparkScanDefaults;
}

function loadBarcodeDefaults(jsonDefaults) {
    const barcodeDefaults = parseBarcodeDefaults(jsonDefaults);
    FactoryMaker.bindInstanceIfNotExists('BarcodeDefaults', barcodeDefaults);
}
function loadBarcodeCaptureDefaults(jsonDefaults) {
    const defaults = parseBarcodeCaptureDefaults(jsonDefaults);
    FactoryMaker.bindInstanceIfNotExists('BarcodeCaptureDefaults', defaults);
}
function loadBarcodeCountDefaults(jsonDefaults) {
    const defaults = parseBarcodeCountDefaults(jsonDefaults);
    FactoryMaker.bindInstanceIfNotExists('BarcodeCountDefaults', defaults);
}
function loadBarcodePickDefaults(jsonDefaults) {
    const defaults = parseBarcodePickDefaults(jsonDefaults);
    FactoryMaker.bindInstanceIfNotExists('BarcodePickDefaults', defaults);
}
function loadBarcodeSelectionDefaults(jsonDefaults) {
    const defaults = parseBarcodeSelectionDefaults(jsonDefaults);
    FactoryMaker.bindInstanceIfNotExists('BarcodeSelectionDefaults', defaults);
}
function loadBarcodeTrackingDefaults(jsonDefaults) {
    const defaults = parseBarcodeTrackingDefaults(jsonDefaults);
    FactoryMaker.bindInstanceIfNotExists('BarcodeTrackingDefaults', defaults);
}
function loadSparkScanDefaults(jsonDefaults) {
    const defaults = parseSparkScanDefaults(jsonDefaults);
    FactoryMaker.bindInstanceIfNotExists('SparkScanDefaults', defaults);
}
function loadBarcodeFindDefaults(jsonDefaults) {
    const defaults = parseBarcodeFindDefaults(jsonDefaults);
    FactoryMaker.bindInstanceIfNotExists('BarcodeFindDefaults', defaults);
}

class BarcodeCaptureSession {
    /**
     * @deprecated Prefer use of the property `newlyRecognizedBarcode` instead.
     */
    get newlyRecognizedBarcodes() {
        // tslint:disable-next-line:no-console
        console.warn('The newlyRecognizedBarcodes has been deprecated. Prefer use of the property `newlyRecognizedBarcode` instead.');
        return this._newlyRecognizedBarcodes;
    }
    get newlyRecognizedBarcode() {
        return this._newlyRecognizedBarcode;
    }
    get newlyLocalizedBarcodes() {
        return this._newlyLocalizedBarcodes;
    }
    get frameSequenceID() {
        return this._frameSequenceID;
    }
    static fromJSON(json) {
        const session = new BarcodeCaptureSession();
        session._newlyRecognizedBarcode = json.newlyRecognizedBarcode != null ?
            Barcode.fromJSON(json.newlyRecognizedBarcode) :
            null;
        session._newlyRecognizedBarcodes = json.newlyRecognizedBarcodes
            .map(Barcode.fromJSON);
        session._newlyLocalizedBarcodes = json.newlyLocalizedBarcodes
            .map(LocalizedOnlyBarcode.fromJSON);
        session._frameSequenceID = json.frameSequenceId;
        return session;
    }
    reset() {
        return this.controller.reset();
    }
}

var BarcodeCaptureListenerEvents;
(function (BarcodeCaptureListenerEvents) {
    BarcodeCaptureListenerEvents["inCallback"] = "BarcodeCaptureListener.inCallback";
    BarcodeCaptureListenerEvents["didUpdateSession"] = "BarcodeCaptureListener.didUpdateSession";
    BarcodeCaptureListenerEvents["didScan"] = "BarcodeCaptureListener.didScan";
})(BarcodeCaptureListenerEvents || (BarcodeCaptureListenerEvents = {}));
class BarcodeCaptureListenerController {
    get _proxy() {
        return FactoryMaker.getInstance('BarcodeCaptureListenerProxy');
    }
    static forBarcodeCapture(barcodeCapture) {
        const controller = new BarcodeCaptureListenerController();
        controller.barcodeCapture = barcodeCapture;
        controller._proxy.isModeEnabled = () => barcodeCapture.isEnabled;
        return controller;
    }
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    reset() {
        return this._proxy.resetSession();
    }
    setModeEnabledState(enabled) {
        this._proxy.setModeEnabledState(enabled);
    }
    updateBarcodeCaptureMode() {
        return this._proxy.updateBarcodeCaptureMode(JSON.stringify(this.barcodeCapture.toJSON()));
    }
    applyBarcodeCaptureModeSettings(newSettings) {
        return this._proxy.applyBarcodeCaptureModeSettings(JSON.stringify(newSettings.toJSON()));
    }
    updateBarcodeCaptureOverlay(overlay) {
        return this._proxy.updateBarcodeCaptureOverlay(JSON.stringify(overlay.toJSON()));
    }
    subscribeListener() {
        var _a, _b, _c, _d;
        this._proxy.registerListenerForEvents();
        (_b = (_a = this._proxy).subscribeDidUpdateSessionListener) === null || _b === void 0 ? void 0 : _b.call(_a);
        (_d = (_c = this._proxy).subscribeDidScanListener) === null || _d === void 0 ? void 0 : _d.call(_c);
        this.eventEmitter.on(BarcodeCaptureListenerEvents.inCallback, (value) => {
            this.barcodeCapture.isInListenerCallback = value;
        });
        this.eventEmitter.on(BarcodeCaptureListenerEvents.didUpdateSession, (body) => {
            const payload = JSON.parse(body);
            const session = BarcodeCaptureSession.fromJSON(JSON.parse(payload.session));
            this.notifyListenersOfDidUpdateSession(session);
            this._proxy.finishDidUpdateSessionCallback(this.barcodeCapture.isEnabled);
        });
        this.eventEmitter.on(BarcodeCaptureListenerEvents.didScan, (body) => {
            const payload = JSON.parse(body);
            const session = BarcodeCaptureSession.fromJSON(JSON.parse(payload.session));
            this.notifyListenersOfDidScan(session);
            this._proxy.finishDidScanCallback(this.barcodeCapture.isEnabled);
        });
    }
    unsubscribeListener() {
        this._proxy.unregisterListenerForEvents();
        this.eventEmitter.removeAllListeners(BarcodeCaptureListenerEvents.inCallback);
        this.eventEmitter.removeAllListeners(BarcodeCaptureListenerEvents.didUpdateSession);
        this.eventEmitter.removeAllListeners(BarcodeCaptureListenerEvents.didScan);
    }
    notifyListenersOfDidUpdateSession(session) {
        const mode = this.barcodeCapture;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(listener => {
            if (listener.didUpdateSession) {
                listener.didUpdateSession(this.barcodeCapture, session, CameraController.getLastFrame);
            }
        });
        mode.isInListenerCallback = false;
    }
    notifyListenersOfDidScan(session) {
        const mode = this.barcodeCapture;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(listener => {
            if (listener.didScan) {
                listener.didScan(this.barcodeCapture, session, CameraController.getLastFrame);
            }
        });
        mode.isInListenerCallback = false;
    }
}

class BarcodeCapture extends DefaultSerializeable {
    get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(isEnabled) {
        this._isEnabled = isEnabled;
        this.controller.setModeEnabledState(isEnabled);
    }
    get context() {
        return this._context;
    }
    get feedback() {
        return this._feedback;
    }
    set feedback(feedback) {
        this._feedback = feedback;
        this.controller.updateBarcodeCaptureMode();
    }
    static get recommendedCameraSettings() {
        return BarcodeCapture.barcodeCaptureDefaults.RecommendedCameraSettings;
    }
    get _context() {
        return this.privateContext;
    }
    set _context(newContext) {
        if (newContext == null) {
            this.controller.unsubscribeListener();
        }
        else if (this.privateContext == null) {
            this.controller.subscribeListener();
        }
        this.privateContext = newContext;
    }
    static get barcodeCaptureDefaults() {
        return getBarcodeCaptureDefaults();
    }
    static forContext(context, settings) {
        const barcodeCapture = new BarcodeCapture();
        barcodeCapture.settings = settings;
        if (context) {
            context.addMode(barcodeCapture);
        }
        return barcodeCapture;
    }
    constructor() {
        super();
        this.type = 'barcodeCapture';
        this._isEnabled = true;
        this.privateContext = null;
        this.listeners = [];
        this.isInListenerCallback = false;
        this.controller = BarcodeCaptureListenerController.forBarcodeCapture(this);
    }
    applySettings(settings) {
        this.settings = settings;
        return this.controller.applyBarcodeCaptureModeSettings(settings);
    }
    addListener(listener) {
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    }
    removeListener(listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeCapture.prototype, "_isEnabled", void 0);
__decorate([
    nameForSerialization('feedback')
], BarcodeCapture.prototype, "_feedback", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeCapture.prototype, "privateContext", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeCapture.prototype, "listeners", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeCapture.prototype, "controller", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeCapture.prototype, "isInListenerCallback", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeCapture, "barcodeCaptureDefaults", null);

class BarcodeCaptureFeedback extends DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.success = Feedback.defaultFeedback;
    }
    static get default() {
        return new BarcodeCaptureFeedback();
    }
}

class BarcodeCaptureOverlay extends DefaultSerializeable {
    static get barcodeCaptureDefaults() {
        return getBarcodeCaptureDefaults();
    }
    static get defaultBrush() {
        // tslint:disable-next-line:no-console
        console.warn('defaultBrush is deprecated and will be removed in a future release. ' +
            'Use .brush to get the default for your selected style');
        return new Brush(BarcodeCaptureOverlay.barcodeCaptureDefaults.BarcodeCaptureOverlay.styles[BarcodeCaptureOverlay.barcodeCaptureDefaults.BarcodeCaptureOverlay.defaultStyle].DefaultBrush.fillColor, BarcodeCaptureOverlay.barcodeCaptureDefaults.BarcodeCaptureOverlay.styles[BarcodeCaptureOverlay.barcodeCaptureDefaults.BarcodeCaptureOverlay.defaultStyle].DefaultBrush.strokeColor, BarcodeCaptureOverlay.barcodeCaptureDefaults.BarcodeCaptureOverlay.styles[BarcodeCaptureOverlay.barcodeCaptureDefaults.BarcodeCaptureOverlay.defaultStyle].DefaultBrush.strokeWidth);
    }
    get brush() {
        return this._brush;
    }
    set brush(newBrush) {
        this._brush = newBrush;
        this.barcodeCapture.controller.updateBarcodeCaptureOverlay(this);
    }
    get viewfinder() {
        return this._viewfinder;
    }
    set viewfinder(newViewfinder) {
        this._viewfinder = newViewfinder;
        if (newViewfinder) {
            this.eventEmitter.on('viewfinder.update', this.handleViewFinderUpdate);
        }
        else {
            this.eventEmitter.off('viewfinder.update');
        }
        this.barcodeCapture.controller.updateBarcodeCaptureOverlay(this);
    }
    get shouldShowScanAreaGuides() {
        return this._shouldShowScanAreaGuides;
    }
    set shouldShowScanAreaGuides(shouldShow) {
        this._shouldShowScanAreaGuides = shouldShow;
        this.barcodeCapture.controller.updateBarcodeCaptureOverlay(this);
    }
    get style() {
        return this._style;
    }
    static withBarcodeCapture(barcodeCapture) {
        return BarcodeCaptureOverlay.withBarcodeCaptureForView(barcodeCapture, null);
    }
    static withBarcodeCaptureForView(barcodeCapture, view) {
        return this.withBarcodeCaptureForViewWithStyle(barcodeCapture, view, BarcodeCaptureOverlay.barcodeCaptureDefaults.BarcodeCaptureOverlay.defaultStyle);
    }
    static withBarcodeCaptureForViewWithStyle(barcodeCapture, view, style) {
        const overlay = new BarcodeCaptureOverlay();
        overlay.barcodeCapture = barcodeCapture;
        overlay._style = style;
        const barcodeCaptureOverlayDefaults = BarcodeCaptureOverlay.barcodeCaptureDefaults.BarcodeCaptureOverlay;
        const styles = barcodeCaptureOverlayDefaults.styles ? barcodeCaptureOverlayDefaults.styles : barcodeCaptureOverlayDefaults.Brushes;
        overlay._brush = new Brush(styles[style].DefaultBrush.fillColor, styles[style].DefaultBrush.strokeColor, styles[style].DefaultBrush.strokeWidth);
        if (view) {
            view.addOverlay(overlay);
        }
        return overlay;
    }
    constructor() {
        super();
        this.type = 'barcodeCapture';
        this._shouldShowScanAreaGuides = false;
        this._viewfinder = null;
        this._brush = BarcodeCaptureOverlay.barcodeCaptureDefaults.BarcodeCaptureOverlay.DefaultBrush;
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
        this.handleViewFinderUpdate = this.handleViewFinderUpdate.bind(this);
    }
    handleViewFinderUpdate() {
        this.barcodeCapture.controller.updateBarcodeCaptureOverlay(this);
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeCaptureOverlay.prototype, "barcodeCapture", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeCaptureOverlay.prototype, "view", void 0);
__decorate([
    nameForSerialization('shouldShowScanAreaGuides')
], BarcodeCaptureOverlay.prototype, "_shouldShowScanAreaGuides", void 0);
__decorate([
    serializationDefault(NoViewfinder),
    nameForSerialization('viewfinder')
], BarcodeCaptureOverlay.prototype, "_viewfinder", void 0);
__decorate([
    nameForSerialization('style')
], BarcodeCaptureOverlay.prototype, "_style", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeCaptureOverlay.prototype, "eventEmitter", void 0);
__decorate([
    nameForSerialization('brush')
], BarcodeCaptureOverlay.prototype, "_brush", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeCaptureOverlay, "barcodeCaptureDefaults", null);

var BarcodeCaptureOverlayStyle;
(function (BarcodeCaptureOverlayStyle) {
    BarcodeCaptureOverlayStyle["Frame"] = "frame";
    /**
     * @deprecated The legacy is deprecated.
     */
    BarcodeCaptureOverlayStyle["Legacy"] = "legacy";
})(BarcodeCaptureOverlayStyle || (BarcodeCaptureOverlayStyle = {}));

class BarcodeCaptureSettings extends DefaultSerializeable {
    get enabledSymbologies() {
        return Object.keys(this.symbologies)
            .filter(symbology => this.symbologies[symbology].isEnabled);
    }
    get compositeTypeDescriptions() {
        return BarcodeCaptureSettings.barcodeDefaults.CompositeTypeDescriptions.reduce((descriptions, description) => {
            descriptions[description.types[0]] = description;
            return descriptions;
        }, {});
    }
    static get barcodeDefaults() {
        return getBarcodeDefaults();
    }
    static get barcodeCaptureDefaults() {
        return getBarcodeCaptureDefaults();
    }
    constructor() {
        super();
        this.locationSelection = null;
        this.enabledCompositeTypes = [];
        this.properties = {};
        this.symbologies = {};
        this._codeDuplicateFilter = BarcodeCaptureSettings.barcodeCaptureDefaults.BarcodeCaptureSettings.codeDuplicateFilter;
        this._arucoDictionary = null;
        /**
         * @deprecated replaced with batterySaving
         */
        this.batterySavingMode = BarcodeCaptureSettings.barcodeCaptureDefaults.BarcodeCaptureSettings.batterySaving;
        this.batterySaving = BarcodeCaptureSettings.barcodeCaptureDefaults.BarcodeCaptureSettings.batterySaving;
        this.scanIntention = BarcodeCaptureSettings.barcodeCaptureDefaults.BarcodeCaptureSettings.scanIntention;
    }
    settingsForSymbology(symbology) {
        if (!this.symbologies[symbology]) {
            const symbologySettings = BarcodeCaptureSettings.barcodeDefaults.SymbologySettings[symbology];
            symbologySettings._symbology = symbology;
            this.symbologies[symbology] = symbologySettings;
        }
        return this.symbologies[symbology];
    }
    setProperty(name, value) {
        this.properties[name] = value;
    }
    getProperty(name) {
        return this.properties[name];
    }
    enableSymbologies(symbologies) {
        symbologies.forEach(symbology => this.enableSymbology(symbology, true));
    }
    enableSymbology(symbology, enabled) {
        this.settingsForSymbology(symbology).isEnabled = enabled;
    }
    enableSymbologiesForCompositeTypes(compositeTypes) {
        compositeTypes.forEach(compositeType => {
            this.enableSymbologies(this.compositeTypeDescriptions[compositeType].symbologies);
        });
    }
    setArucoDictionary(dictionary) {
        this._arucoDictionary = dictionary;
    }
    get codeDuplicateFilter() {
        return this._codeDuplicateFilter;
    }
    set codeDuplicateFilter(value) {
        this._codeDuplicateFilter = value;
    }
}
__decorate([
    serializationDefault(NoneLocationSelection)
], BarcodeCaptureSettings.prototype, "locationSelection", void 0);
__decorate([
    nameForSerialization('codeDuplicateFilter')
], BarcodeCaptureSettings.prototype, "_codeDuplicateFilter", void 0);
__decorate([
    nameForSerialization('arucoDictionary')
], BarcodeCaptureSettings.prototype, "_arucoDictionary", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeCaptureSettings, "barcodeDefaults", null);
__decorate([
    ignoreFromSerialization
], BarcodeCaptureSettings, "barcodeCaptureDefaults", null);

class BarcodeSelectionSession {
    get selectedBarcodes() {
        return this._selectedBarcodes;
    }
    get newlySelectedBarcodes() {
        return this._newlySelectedBarcodes;
    }
    get newlyUnselectedBarcodes() {
        return this._newlyUnselectedBarcodes;
    }
    get frameSequenceID() {
        return this._frameSequenceID;
    }
    static fromJSON(json) {
        const session = new BarcodeSelectionSession();
        session._selectedBarcodes = json.selectedBarcodes
            .map(Barcode.fromJSON);
        session._newlySelectedBarcodes = json.newlySelectedBarcodes
            .map(Barcode.fromJSON);
        session._newlyUnselectedBarcodes = json.newlyUnselectedBarcodes
            .map(Barcode.fromJSON);
        session._frameSequenceID = json.frameSequenceId;
        return session;
    }
    getCount(barcode) {
        return this.listenerController.getCount(barcode);
    }
    reset() {
        return this.listenerController.reset();
    }
}

var BarcodeSelectionListenerEvents;
(function (BarcodeSelectionListenerEvents) {
    BarcodeSelectionListenerEvents["inCallback"] = "BarcodeSelectionListener.inCallback";
    BarcodeSelectionListenerEvents["didUpdateSelection"] = "BarcodeSelectionListener.didUpdateSelection";
    BarcodeSelectionListenerEvents["didUpdateSession"] = "BarcodeSelectionListener.didUpdateSession";
})(BarcodeSelectionListenerEvents || (BarcodeSelectionListenerEvents = {}));
class BarcodeSelectionListenerController {
    get _proxy() {
        return FactoryMaker.getInstance('BarcodeSelectionListenerProxy');
    }
    static forBarcodeSelection(barcodeSelection) {
        const controller = new BarcodeSelectionListenerController();
        controller.barcodeSelection = barcodeSelection;
        controller._proxy.isModeEnabled = () => barcodeSelection.isEnabled;
        return controller;
    }
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    getCount(barcode) {
        return this._proxy.getCount(barcode.selectionIdentifier);
    }
    reset() {
        return this._proxy.resetSession();
    }
    subscribeListener() {
        var _a, _b, _c, _d;
        this._proxy.registerListenerForEvents();
        (_b = (_a = this._proxy).subscribeDidUpdateSelectionListener) === null || _b === void 0 ? void 0 : _b.call(_a);
        (_d = (_c = this._proxy).subscribeDidUpdateSession) === null || _d === void 0 ? void 0 : _d.call(_c);
        this.eventEmitter.on(BarcodeSelectionListenerEvents.didUpdateSelection, (body) => {
            const payload = JSON.parse(body);
            const session = BarcodeSelectionSession.fromJSON(JSON.parse(payload.session));
            session.listenerController = this;
            this.notifyListenersOfDidUpdateSelection(session);
            this._proxy.finishDidUpdateSelectionCallback(this.barcodeSelection.isEnabled);
        });
        this.eventEmitter.on(BarcodeSelectionListenerEvents.didUpdateSession, (body) => {
            const payload = JSON.parse(body);
            const session = BarcodeSelectionSession.fromJSON(JSON.parse(payload.session));
            session.listenerController = this;
            this.notifyListenersOfDidUpdateSession(session);
            this._proxy.finishDidUpdateSessionCallback(this.barcodeSelection.isEnabled);
        });
    }
    unsubscribeListener() {
        this._proxy.unregisterListenerForEvents();
        this.eventEmitter.removeAllListeners(BarcodeSelectionListenerEvents.didUpdateSelection);
        this.eventEmitter.removeAllListeners(BarcodeSelectionListenerEvents.didUpdateSession);
    }
    notifyListenersOfDidUpdateSelection(session) {
        const mode = this.barcodeSelection;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(listener => {
            if (listener.didUpdateSelection) {
                listener.didUpdateSelection(this.barcodeSelection, session, CameraController.getLastFrame);
            }
        });
        mode.isInListenerCallback = false;
    }
    notifyListenersOfDidUpdateSession(session) {
        const mode = this.barcodeSelection;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(listener => {
            if (listener.didUpdateSession) {
                listener.didUpdateSession(this.barcodeSelection, session, CameraController.getLastFrame);
            }
        });
        mode.isInListenerCallback = false;
    }
}

class BarcodeSelectionController {
    get _proxy() {
        return FactoryMaker.getInstance('BarcodeSelectionProxy');
    }
    unfreezeCamera() {
        return this._proxy.unfreezeCamera();
    }
    reset() {
        return this._proxy.resetMode();
    }
    selectAimedBarcode() {
        return this._proxy.selectAimedBarcode();
    }
    unselectBarcodes(barcodes) {
        const barcodesJson = this.convertBarcodesToJson(barcodes);
        return this._proxy.unselectBarcodes(JSON.stringify({ barcodes: barcodesJson }));
    }
    setSelectBarcodeEnabled(barcode, enabled) {
        const barcodesJson = this.convertBarcodesToJson([barcode]);
        return this._proxy.setSelectBarcodeEnabled(JSON.stringify(barcodesJson[0]), enabled);
    }
    increaseCountForBarcodes(barcodes) {
        const barcodesJson = this.convertBarcodesToJson(barcodes);
        return this._proxy.increaseCountForBarcodes(JSON.stringify({ barcodes: barcodesJson }));
    }
    setModeEnabledState(enabled) {
        this._proxy.setModeEnabledState(enabled);
    }
    updateBarcodeSelectionMode(barcodeSelection) {
        return this._proxy.updateBarcodeSelectionMode(JSON.stringify(barcodeSelection.toJSON()));
    }
    applyBarcodeSelectionModeSettings(newSettings) {
        return this._proxy.applyBarcodeSelectionModeSettings(JSON.stringify(newSettings.toJSON()));
    }
    convertBarcodesToJson(barcodes) {
        return barcodes.flat().map((barcode) => ({
            data: barcode.data,
            rawData: barcode.rawData,
            symbology: barcode.symbology,
            symbolCount: barcode.symbolCount
        }));
    }
}

class BarcodeSelection extends DefaultSerializeable {
    get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(isEnabled) {
        this._isEnabled = isEnabled;
        this.modeController.setModeEnabledState(isEnabled);
    }
    get context() {
        return this._context;
    }
    get feedback() {
        return this._feedback;
    }
    set feedback(feedback) {
        this._feedback = feedback;
        this.modeController.updateBarcodeSelectionMode(this);
    }
    get pointOfInterest() {
        return this._pointOfInterest;
    }
    set pointOfInterest(pointOfInterest) {
        this._pointOfInterest = pointOfInterest;
        this.modeController.updateBarcodeSelectionMode(this);
    }
    static get recommendedCameraSettings() {
        return BarcodeSelection.barcodeSelectionDefaults.RecommendedCameraSettings;
    }
    get _context() {
        return this.privateContext;
    }
    set _context(newContext) {
        if (newContext == null) {
            this.listenerController.unsubscribeListener();
        }
        else if (this.privateContext == null) {
            this.listenerController.subscribeListener();
        }
        this.privateContext = newContext;
    }
    static get barcodeSelectionDefaults() {
        return getBarcodeSelectionDefaults();
    }
    static forContext(context, settings) {
        const barcodeSelection = new BarcodeSelection();
        barcodeSelection.settings = settings;
        if (context) {
            context.addMode(barcodeSelection);
        }
        return barcodeSelection;
    }
    constructor() {
        super();
        this.type = 'barcodeSelection';
        this._isEnabled = true;
        this._pointOfInterest = null;
        this.privateContext = null;
        this.listeners = [];
        this.modeController = new BarcodeSelectionController();
        this.isInListenerCallback = false;
        this.listenerController = BarcodeSelectionListenerController.forBarcodeSelection(this);
    }
    applySettings(settings) {
        this.settings = settings;
        return this.modeController.applyBarcodeSelectionModeSettings(settings);
    }
    addListener(listener) {
        if (listener == undefined) {
            return;
        }
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    }
    removeListener(listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
    reset() {
        return this.modeController.reset();
    }
    unfreezeCamera() {
        return this.modeController.unfreezeCamera();
    }
    selectAimedBarcode() {
        return this.modeController.selectAimedBarcode();
    }
    unselectBarcodes(barcodes) {
        return this.modeController.unselectBarcodes(barcodes);
    }
    setSelectBarcodeEnabled(barcode, enabled) {
        return this.modeController.setSelectBarcodeEnabled(barcode, enabled);
    }
    increaseCountForBarcodes(barcodes) {
        return this.modeController.increaseCountForBarcodes(barcodes);
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeSelection.prototype, "_isEnabled", void 0);
__decorate([
    nameForSerialization('feedback')
], BarcodeSelection.prototype, "_feedback", void 0);
__decorate([
    nameForSerialization('pointOfInterest')
], BarcodeSelection.prototype, "_pointOfInterest", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeSelection.prototype, "privateContext", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeSelection.prototype, "listeners", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeSelection.prototype, "listenerController", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeSelection.prototype, "modeController", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeSelection.prototype, "isInListenerCallback", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeSelection, "barcodeSelectionDefaults", null);

var BarcodeSelectionBasicOverlayStyle;
(function (BarcodeSelectionBasicOverlayStyle) {
    BarcodeSelectionBasicOverlayStyle["Frame"] = "frame";
    BarcodeSelectionBasicOverlayStyle["Dot"] = "dot";
})(BarcodeSelectionBasicOverlayStyle || (BarcodeSelectionBasicOverlayStyle = {}));

var BarcodeSelectionFreezeBehavior;
(function (BarcodeSelectionFreezeBehavior) {
    BarcodeSelectionFreezeBehavior["Manual"] = "manual";
    BarcodeSelectionFreezeBehavior["ManualAndAutomatic"] = "manualAndAutomatic";
})(BarcodeSelectionFreezeBehavior || (BarcodeSelectionFreezeBehavior = {}));

var BarcodeSelectionStrategyType;
(function (BarcodeSelectionStrategyType) {
    BarcodeSelectionStrategyType["Auto"] = "autoSelectionStrategy";
    BarcodeSelectionStrategyType["Manual"] = "manualSelectionStrategy";
})(BarcodeSelectionStrategyType || (BarcodeSelectionStrategyType = {}));

var BarcodeSelectionTapBehavior;
(function (BarcodeSelectionTapBehavior) {
    BarcodeSelectionTapBehavior["ToggleSelection"] = "toggleSelection";
    BarcodeSelectionTapBehavior["RepeatSelection"] = "repeatSelection";
})(BarcodeSelectionTapBehavior || (BarcodeSelectionTapBehavior = {}));

var BarcodeSelectionTypeName;
(function (BarcodeSelectionTypeName) {
    BarcodeSelectionTypeName["Aimer"] = "aimerSelection";
    BarcodeSelectionTypeName["Tap"] = "tapSelection";
})(BarcodeSelectionTypeName || (BarcodeSelectionTypeName = {}));

class BarcodeSelectionFeedback extends DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.selection = BarcodeSelectionFeedback.barcodeSelectionDefaults.Feedback.selection;
    }
    static get barcodeSelectionDefaults() {
        return getBarcodeSelectionDefaults();
    }
    static get default() {
        return new BarcodeSelectionFeedback();
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeSelectionFeedback, "barcodeSelectionDefaults", null);

var BarcodeSelectionBrushProviderEvents;
(function (BarcodeSelectionBrushProviderEvents) {
    BarcodeSelectionBrushProviderEvents["inCallback"] = "BarcodeSelectionAimedBrushProvider.inCallback";
    BarcodeSelectionBrushProviderEvents["brushForAimedBarcode"] = "BarcodeSelectionAimedBrushProvider.brushForBarcode";
    BarcodeSelectionBrushProviderEvents["brushForTrackedBarcode"] = "BarcodeSelectionTrackedBrushProvider.brushForBarcode";
})(BarcodeSelectionBrushProviderEvents || (BarcodeSelectionBrushProviderEvents = {}));
class BarcodeSelectionOverlayController {
    get _proxy() {
        return FactoryMaker.getInstance('BarcodeSelectionOverlayProxy');
    }
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    setTextForAimToSelectAutoHint(text) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._proxy.setTextForAimToSelectAutoHint(text);
        });
    }
    setAimedBarcodeBrushProvider(brushProvider) {
        if (!brushProvider) {
            this.eventEmitter.removeAllListeners(BarcodeSelectionBrushProviderEvents.brushForAimedBarcode);
            return this._proxy.removeAimedBarcodeBrushProvider();
        }
        const subscriptionResult = this._proxy.setAimedBarcodeBrushProvider();
        this._proxy.subscribeBrushForAimedBarcode();
        this.eventEmitter.on(BarcodeSelectionBrushProviderEvents.brushForAimedBarcode, (body) => {
            const payload = JSON.parse(body);
            const barcode = Barcode
                .fromJSON(JSON.parse(payload.barcode));
            let brush = null;
            if (brushProvider.brushForBarcode) {
                brush = brushProvider.brushForBarcode(barcode);
            }
            this._proxy.finishBrushForAimedBarcodeCallback(brush ? JSON.stringify(brush.toJSON()) : null, barcode.selectionIdentifier);
        });
        return subscriptionResult;
    }
    setTrackedBarcodeBrushProvider(brushProvider) {
        if (!brushProvider) {
            this.eventEmitter.removeAllListeners(BarcodeSelectionBrushProviderEvents.brushForTrackedBarcode);
            return this._proxy.removeTrackedBarcodeBrushProvider();
        }
        const subscriptionResult = this._proxy.setTrackedBarcodeBrushProvider();
        this._proxy.subscribeBrushForTrackedBarcode();
        this.eventEmitter.on(BarcodeSelectionBrushProviderEvents.brushForTrackedBarcode, (body) => {
            const payload = JSON.parse(body);
            const barcode = Barcode
                .fromJSON(JSON.parse(payload.barcode));
            let brush = null;
            if (brushProvider.brushForBarcode) {
                brush = brushProvider.brushForBarcode(barcode);
            }
            this._proxy.finishBrushForTrackedBarcodeCallback(brush ? JSON.stringify(brush.toJSON()) : null, barcode.selectionIdentifier);
        });
        return subscriptionResult;
    }
    updateBarcodeSelectionBasicOverlay(overlay) {
        return this._proxy.updateBarcodeSelectionBasicOverlay(JSON.stringify(overlay.toJSON()));
    }
    // TODO: We need to unsubscribe from the providers when the overlay is removed. Need spec.
    // https://scandit.atlassian.net/browse/SDC-16608
    unsubscribeProviders() {
        this.eventEmitter.removeAllListeners(BarcodeSelectionBrushProviderEvents.brushForAimedBarcode);
        this.eventEmitter.removeAllListeners(BarcodeSelectionBrushProviderEvents.brushForTrackedBarcode);
        this._proxy.removeAimedBarcodeBrushProvider();
        this._proxy.removeTrackedBarcodeBrushProvider();
    }
}

class BarcodeSelectionBasicOverlay extends DefaultSerializeable {
    get trackedBrush() {
        return this._trackedBrush;
    }
    set trackedBrush(newBrush) {
        this._trackedBrush = newBrush;
        this.overlayController.updateBarcodeSelectionBasicOverlay(this);
    }
    get aimedBrush() {
        return this._aimedBrush;
    }
    set aimedBrush(newBrush) {
        this._aimedBrush = newBrush;
        this.overlayController.updateBarcodeSelectionBasicOverlay(this);
    }
    get selectedBrush() {
        return this._selectedBrush;
    }
    set selectedBrush(newBrush) {
        this._selectedBrush = newBrush;
        this.overlayController.updateBarcodeSelectionBasicOverlay(this);
    }
    get selectingBrush() {
        return this._selectingBrush;
    }
    set selectingBrush(newBrush) {
        this._selectingBrush = newBrush;
        this.overlayController.updateBarcodeSelectionBasicOverlay(this);
    }
    get shouldShowScanAreaGuides() {
        return this._shouldShowScanAreaGuides;
    }
    set shouldShowScanAreaGuides(shouldShow) {
        this._shouldShowScanAreaGuides = shouldShow;
        this.overlayController.updateBarcodeSelectionBasicOverlay(this);
    }
    get shouldShowHints() {
        return this._shouldShowHints;
    }
    set shouldShowHints(shouldShow) {
        this._shouldShowHints = shouldShow;
        this.overlayController.updateBarcodeSelectionBasicOverlay(this);
    }
    get viewfinder() {
        return this._viewfinder;
    }
    get style() {
        return this._style;
    }
    static withBarcodeSelection(barcodeSelection) {
        return BarcodeSelectionBasicOverlay.withBarcodeSelectionForView(barcodeSelection, null);
    }
    static withBarcodeSelectionForView(barcodeSelection, view) {
        return this.withBarcodeSelectionForViewWithStyle(barcodeSelection, view, BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle);
    }
    static withBarcodeSelectionForViewWithStyle(barcodeSelection, view, style) {
        const overlay = new BarcodeSelectionBasicOverlay();
        overlay.barcodeSelection = barcodeSelection;
        overlay._style = style;
        overlay._trackedBrush = new Brush(BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultTrackedBrush.fillColor, BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultTrackedBrush.strokeColor, BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultTrackedBrush.strokeWidth);
        overlay._aimedBrush = new Brush(BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultAimedBrush.fillColor, BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultAimedBrush.strokeColor, BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultAimedBrush.strokeWidth);
        overlay._selectedBrush = new Brush(BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultSelectedBrush.fillColor, BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultSelectedBrush.strokeColor, BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultSelectedBrush.strokeWidth);
        overlay._selectingBrush = new Brush(BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultSelectingBrush.fillColor, BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultSelectingBrush.strokeColor, BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[style].DefaultSelectingBrush.strokeWidth);
        if (view) {
            view.addOverlay(overlay);
        }
        return overlay;
    }
    static get barcodeSelectionDefaults() {
        return getBarcodeSelectionDefaults();
    }
    constructor() {
        super();
        this.type = 'barcodeSelectionBasic';
        this.overlayController = new BarcodeSelectionOverlayController();
        this._shouldShowScanAreaGuides = false;
        this._shouldShowHints = true;
        this._viewfinder = new AimerViewfinder();
        this._trackedBrush = new Brush(BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultTrackedBrush.fillColor, BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultTrackedBrush.strokeColor, BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultTrackedBrush.strokeWidth);
        this._aimedBrush = new Brush(BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultAimedBrush.fillColor, BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultAimedBrush.strokeColor, BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultAimedBrush.strokeWidth);
        this._selectedBrush = new Brush(BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultSelectedBrush.fillColor, BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultSelectedBrush.strokeColor, BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultSelectedBrush.strokeWidth);
        this._selectingBrush = new Brush(BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultSelectingBrush.fillColor, BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultSelectingBrush.strokeColor, BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.styles[BarcodeSelectionBasicOverlay.barcodeSelectionDefaults.BarcodeSelectionBasicOverlay.defaultStyle].DefaultSelectingBrush.strokeWidth);
    }
    setTextForAimToSelectAutoHint(text) {
        return this.overlayController.setTextForAimToSelectAutoHint(text);
    }
    setAimedBarcodeBrushProvider(brushProvider) {
        return this.overlayController.setAimedBarcodeBrushProvider(brushProvider);
    }
    setTrackedBarcodeBrushProvider(brushProvider) {
        return this.overlayController.setTrackedBarcodeBrushProvider(brushProvider);
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeSelectionBasicOverlay.prototype, "barcodeSelection", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeSelectionBasicOverlay.prototype, "overlayController", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeSelectionBasicOverlay.prototype, "view", void 0);
__decorate([
    nameForSerialization('shouldShowScanAreaGuides')
], BarcodeSelectionBasicOverlay.prototype, "_shouldShowScanAreaGuides", void 0);
__decorate([
    nameForSerialization('shouldShowHints')
], BarcodeSelectionBasicOverlay.prototype, "_shouldShowHints", void 0);
__decorate([
    nameForSerialization('viewfinder')
], BarcodeSelectionBasicOverlay.prototype, "_viewfinder", void 0);
__decorate([
    nameForSerialization('style')
], BarcodeSelectionBasicOverlay.prototype, "_style", void 0);
__decorate([
    nameForSerialization('trackedBrush')
], BarcodeSelectionBasicOverlay.prototype, "_trackedBrush", void 0);
__decorate([
    nameForSerialization('aimedBrush')
], BarcodeSelectionBasicOverlay.prototype, "_aimedBrush", void 0);
__decorate([
    nameForSerialization('selectedBrush')
], BarcodeSelectionBasicOverlay.prototype, "_selectedBrush", void 0);
__decorate([
    nameForSerialization('selectingBrush')
], BarcodeSelectionBasicOverlay.prototype, "_selectingBrush", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeSelectionBasicOverlay, "barcodeSelectionDefaults", null);

class BarcodeSelectionAutoSelectionStrategy extends DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.type = BarcodeSelectionStrategyType.Auto;
    }
    static get autoSelectionStrategy() {
        return new BarcodeSelectionAutoSelectionStrategy();
    }
}
class BarcodeSelectionManualSelectionStrategy extends DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.type = BarcodeSelectionStrategyType.Manual;
    }
    static get manualSelectionStrategy() {
        return new BarcodeSelectionManualSelectionStrategy();
    }
}
class PrivateBarcodeSelectionStrategy {
    static fromJSON(json) {
        switch (json.type) {
            case BarcodeSelectionStrategyType.Auto:
                return BarcodeSelectionAutoSelectionStrategy.autoSelectionStrategy;
            case BarcodeSelectionStrategyType.Manual:
                return BarcodeSelectionManualSelectionStrategy.manualSelectionStrategy;
            default:
                throw new Error('Unknown selection strategy type: ' + json.type);
        }
    }
}

class BarcodeSelectionTapSelection extends DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.type = BarcodeSelectionTypeName.Tap;
        this.freezeBehavior = BarcodeSelectionTapSelection.barcodeSelectionDefaults.BarcodeSelectionTapSelection.defaultFreezeBehavior;
        this.tapBehavior = BarcodeSelectionTapSelection.barcodeSelectionDefaults.BarcodeSelectionTapSelection.defaultTapBehavior;
    }
    static get tapSelection() {
        return new BarcodeSelectionTapSelection();
    }
    static get barcodeSelectionDefaults() {
        return getBarcodeSelectionDefaults();
    }
    static withFreezeBehaviorAndTapBehavior(freezeBehavior, tapBehavior) {
        const selection = this.tapSelection;
        selection.freezeBehavior = freezeBehavior;
        selection.tapBehavior = tapBehavior;
        return selection;
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeSelectionTapSelection, "barcodeSelectionDefaults", null);
class BarcodeSelectionAimerSelection extends DefaultSerializeable {
    static get aimerSelection() {
        return new BarcodeSelectionAimerSelection();
    }
    static get barcodeSelectionDefaults() {
        return getBarcodeSelectionDefaults();
    }
    constructor() {
        super();
        this.type = BarcodeSelectionTypeName.Aimer;
        this.selectionStrategy = BarcodeSelectionAimerSelection.barcodeSelectionDefaults.BarcodeSelectionAimerSelection
            .defaultSelectionStrategy(PrivateBarcodeSelectionStrategy.fromJSON);
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeSelectionAimerSelection, "barcodeSelectionDefaults", null);
class PrivateBarcodeSelectionType {
    static fromJSON(json) {
        switch (json.type) {
            case BarcodeSelectionTypeName.Aimer:
                return PrivateBarcodeSelectionAimerSelection.fromJSON(json);
            case BarcodeSelectionTypeName.Tap:
                return PrivateBarcodeSelectionTapSelection.fromJSON(json);
            default:
                throw new Error('Unknown selection strategy type: ' + json.type);
        }
    }
}
class PrivateBarcodeSelectionAimerSelection {
    static fromJSON(json) {
        const selection = BarcodeSelectionAimerSelection.aimerSelection;
        selection.selectionStrategy = PrivateBarcodeSelectionStrategy.fromJSON(json.selectionStrategy);
        return selection;
    }
}
class PrivateBarcodeSelectionTapSelection {
    static fromJSON(json) {
        const selection = BarcodeSelectionTapSelection.tapSelection;
        selection.freezeBehavior = json.freezeBehavior;
        selection.tapBehavior = json.tapBehavior;
        return selection;
    }
}

class BarcodeSelectionSettings extends DefaultSerializeable {
    static get barcodeSelectionDefaults() {
        return getBarcodeSelectionDefaults();
    }
    static get barcodeDefaults() {
        return getBarcodeDefaults();
    }
    get enabledSymbologies() {
        return Object.keys(this.symbologies)
            .filter(symbology => this.symbologies[symbology].isEnabled);
    }
    constructor() {
        super();
        this.codeDuplicateFilter = BarcodeSelectionSettings.barcodeSelectionDefaults.BarcodeSelectionSettings.codeDuplicateFilter;
        this.singleBarcodeAutoDetection = BarcodeSelectionSettings.barcodeSelectionDefaults.BarcodeSelectionSettings.singleBarcodeAutoDetection;
        this.selectionType = BarcodeSelectionSettings.barcodeSelectionDefaults.BarcodeSelectionSettings.selectionType(PrivateBarcodeSelectionType.fromJSON);
        this.properties = {};
        this.symbologies = {};
    }
    settingsForSymbology(symbology) {
        if (!this.symbologies[symbology]) {
            const symbologySettings = BarcodeSelectionSettings.barcodeDefaults.SymbologySettings[symbology];
            symbologySettings._symbology = symbology;
            this.symbologies[symbology] = symbologySettings;
        }
        return this.symbologies[symbology];
    }
    setProperty(name, value) {
        this.properties[name] = value;
    }
    getProperty(name) {
        return this.properties[name];
    }
    enableSymbologies(symbologies) {
        symbologies.forEach(symbology => this.enableSymbology(symbology, true));
    }
    enableSymbology(symbology, enabled) {
        this.settingsForSymbology(symbology).isEnabled = enabled;
    }
}
__decorate([
    nameForSerialization('singleBarcodeAutoDetectionEnabled')
], BarcodeSelectionSettings.prototype, "singleBarcodeAutoDetection", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeSelectionSettings, "barcodeSelectionDefaults", null);
__decorate([
    ignoreFromSerialization
], BarcodeSelectionSettings, "barcodeDefaults", null);

var BarcodeTrackingBasicOverlayStyle;
(function (BarcodeTrackingBasicOverlayStyle) {
    BarcodeTrackingBasicOverlayStyle["Frame"] = "frame";
    BarcodeTrackingBasicOverlayStyle["Dot"] = "dot";
    /**
     * @deprecated The legacy style of the BarcodeTrackingBasicOverlay is deprecated.
     */
    BarcodeTrackingBasicOverlayStyle["Legacy"] = "legacy";
})(BarcodeTrackingBasicOverlayStyle || (BarcodeTrackingBasicOverlayStyle = {}));

/**
 * @deprecated Setting a scenario is no longer recommended, use the BarcodeTrackingSettings empty constructor instead.
 */
var BarcodeTrackingScenario;
(function (BarcodeTrackingScenario) {
    BarcodeTrackingScenario["A"] = "A";
    BarcodeTrackingScenario["B"] = "B";
})(BarcodeTrackingScenario || (BarcodeTrackingScenario = {}));

class BarcodeTrackingSession {
    get addedTrackedBarcodes() {
        return this._addedTrackedBarcodes;
    }
    get removedTrackedBarcodes() {
        return this._removedTrackedBarcodes;
    }
    get updatedTrackedBarcodes() {
        return this._updatedTrackedBarcodes;
    }
    get trackedBarcodes() {
        return this._trackedBarcodes;
    }
    get frameSequenceID() {
        return this._frameSequenceID;
    }
    static fromJSON(json) {
        const session = new BarcodeTrackingSession();
        session._frameSequenceID = json.frameSequenceId;
        session._addedTrackedBarcodes = json.addedTrackedBarcodes
            .map((trackedBarcodeJSON) => {
            return TrackedBarcode
                .fromJSON(trackedBarcodeJSON, json.frameSequenceId);
        });
        session._removedTrackedBarcodes = json.removedTrackedBarcodes;
        session._updatedTrackedBarcodes = json.updatedTrackedBarcodes
            .map((trackedBarcodeJSON) => {
            return TrackedBarcode
                .fromJSON(trackedBarcodeJSON, json.frameSequenceId);
        });
        session._trackedBarcodes = Object.keys(json.trackedBarcodes)
            .reduce((trackedBarcodes, identifier) => {
            trackedBarcodes[identifier] = TrackedBarcode
                .fromJSON(json.trackedBarcodes[identifier], json.frameSequenceId);
            return trackedBarcodes;
        }, {});
        return session;
    }
    reset() {
        return this.listenerController.resetSession();
    }
}

var BarcodeTrackingListenerEvents;
(function (BarcodeTrackingListenerEvents) {
    BarcodeTrackingListenerEvents["inCallback"] = "BarcodeTrackingListener.inCallback";
    BarcodeTrackingListenerEvents["didUpdateSession"] = "BarcodeTrackingListener.didUpdateSession";
})(BarcodeTrackingListenerEvents || (BarcodeTrackingListenerEvents = {}));
class BarcodeTrackingListenerController {
    get _proxy() {
        return FactoryMaker.getInstance("BarcodeTrackingListenerProxy");
    }
    static forBarcodeTracking(barcodeTracking) {
        const controller = new BarcodeTrackingListenerController();
        controller.barcodeTracking = barcodeTracking;
        controller._proxy.isModeEnabled = () => barcodeTracking.isEnabled;
        return controller;
    }
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    resetSession() {
        return this._proxy.resetSession();
    }
    subscribeListener() {
        var _a, _b;
        this._proxy.registerListenerForEvents();
        (_b = (_a = this._proxy).subscribeDidUpdateSession) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.eventEmitter.on(BarcodeTrackingListenerEvents.inCallback, (value) => {
            this.barcodeTracking.isInListenerCallback = value;
        });
        this.eventEmitter.on(BarcodeTrackingListenerEvents.didUpdateSession, (body) => {
            const payload = JSON.parse(body);
            const session = BarcodeTrackingSession.fromJSON(JSON.parse(payload.session));
            this.notifyListenersOfDidUpdateSession(session);
            this._proxy.finishDidUpdateSessionCallback(this.barcodeTracking.isEnabled);
        });
    }
    unsubscribeListener() {
        this._proxy.unregisterListenerForEvents();
        this.eventEmitter.removeAllListeners(BarcodeTrackingListenerEvents.inCallback);
        this.eventEmitter.removeAllListeners(BarcodeTrackingListenerEvents.didUpdateSession);
    }
    setModeEnabledState(enabled) {
        this._proxy.setModeEnabledState(enabled);
    }
    updateBarcodeTrackingMode() {
        return this._proxy.updateBarcodeTrackingMode(JSON.stringify(this.barcodeTracking.toJSON()));
    }
    applyBarcodeTrackingModeSettings(newSettings) {
        return this._proxy.applyBarcodeTrackingModeSettings(JSON.stringify(newSettings.toJSON()));
    }
    notifyListenersOfDidUpdateSession(session) {
        const mode = this.barcodeTracking;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(listener => {
            if (listener.didUpdateSession) {
                listener.didUpdateSession(this.barcodeTracking, session, CameraController.getLastFrame);
            }
        });
        mode.isInListenerCallback = false;
    }
}

class BarcodeTracking extends DefaultSerializeable {
    get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(isEnabled) {
        this._isEnabled = isEnabled;
        this.listenerController.setModeEnabledState(isEnabled);
    }
    get context() {
        return this._context;
    }
    static get recommendedCameraSettings() {
        return BarcodeTracking.barcodeTrackingDefaults.RecommendedCameraSettings;
    }
    get _context() {
        return this.privateContext;
    }
    set _context(newContext) {
        if (newContext == null) {
            this.listenerController.unsubscribeListener();
        }
        else if (this.privateContext == null) {
            this.listenerController.subscribeListener();
        }
        this.privateContext = newContext;
    }
    static get barcodeTrackingDefaults() {
        return getBarcodeTrackingDefaults();
    }
    static forContext(context, settings) {
        const barcodeTracking = new BarcodeTracking();
        barcodeTracking.settings = settings;
        if (context) {
            context.addMode(barcodeTracking);
        }
        return barcodeTracking;
    }
    constructor() {
        super();
        this.type = 'barcodeTracking';
        this._isEnabled = true;
        this.privateContext = null;
        this.listeners = [];
        this.isInListenerCallback = false;
        this.listenerController = BarcodeTrackingListenerController.forBarcodeTracking(this);
    }
    applySettings(settings) {
        this.settings = settings;
        return this.listenerController.applyBarcodeTrackingModeSettings(settings);
    }
    addListener(listener) {
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    }
    removeListener(listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
    reset() {
        var _a, _b;
        return (_b = (_a = this.listenerController) === null || _a === void 0 ? void 0 : _a.resetSession()) !== null && _b !== void 0 ? _b : Promise.resolve();
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeTracking.prototype, "_isEnabled", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeTracking.prototype, "privateContext", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeTracking.prototype, "listeners", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeTracking.prototype, "listenerController", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeTracking.prototype, "isInListenerCallback", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeTracking, "barcodeTrackingDefaults", null);

var BarcodeTrackingAdvancedOverlayListenerEvents;
(function (BarcodeTrackingAdvancedOverlayListenerEvents) {
    BarcodeTrackingAdvancedOverlayListenerEvents["didTapViewForTrackedBarcode"] = "BarcodeTrackingAdvancedOverlayListener.didTapViewForTrackedBarcode";
    BarcodeTrackingAdvancedOverlayListenerEvents["viewForTrackedBarcode"] = "BarcodeTrackingAdvancedOverlayListener.viewForTrackedBarcode";
    BarcodeTrackingAdvancedOverlayListenerEvents["anchorForTrackedBarcode"] = "BarcodeTrackingAdvancedOverlayListener.anchorForTrackedBarcode";
    BarcodeTrackingAdvancedOverlayListenerEvents["offsetForTrackedBarcode"] = "BarcodeTrackingAdvancedOverlayListener.offsetForTrackedBarcode";
})(BarcodeTrackingAdvancedOverlayListenerEvents || (BarcodeTrackingAdvancedOverlayListenerEvents = {}));
class BarcodeTrackingAdvancedOverlayController {
    get _proxy() {
        return FactoryMaker.getInstance("BarcodeTrackingAdvancedOverlayProxy");
    }
    static forOverlay(overlay) {
        const controller = new BarcodeTrackingAdvancedOverlayController();
        controller.overlay = overlay;
        return controller;
    }
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    setBrushForTrackedBarcode(brush, trackedBarcode) {
        return this._proxy.setBrushForTrackedBarcode(JSON.stringify(brush.toJSON()), trackedBarcode.sessionFrameSequenceID, trackedBarcode.identifier);
    }
    setViewForTrackedBarcode(view, trackedBarcode) {
        return __awaiter(this, void 0, void 0, function* () {
            const awitedView = yield view;
            const viewJson = this._proxy.getJSONStringForView(awitedView);
            return this._proxy.setViewForTrackedBarcode(viewJson, trackedBarcode.identifier, trackedBarcode.sessionFrameSequenceID);
        });
    }
    setAnchorForTrackedBarcode(anchor, trackedBarcode) {
        return this._proxy.setAnchorForTrackedBarcode(anchor, trackedBarcode.identifier, trackedBarcode.sessionFrameSequenceID);
    }
    setOffsetForTrackedBarcode(offset, trackedBarcode) {
        return this._proxy.setOffsetForTrackedBarcode(JSON.stringify(offset.toJSON()), trackedBarcode.identifier, trackedBarcode.sessionFrameSequenceID);
    }
    clearTrackedBarcodeViews() {
        return this._proxy.clearTrackedBarcodeViews();
    }
    updateBarcodeTrackingAdvancedOverlay() {
        return this._proxy.updateBarcodeTrackingAdvancedOverlay(JSON.stringify(this.overlay.toJSON()));
    }
    subscribeListener() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this._proxy.registerListenerForAdvancedOverlayEvents();
        (_b = (_a = this._proxy).subscribeViewForTrackedBarcode) === null || _b === void 0 ? void 0 : _b.call(_a);
        (_d = (_c = this._proxy).subscribeAnchorForTrackedBarcode) === null || _d === void 0 ? void 0 : _d.call(_c);
        (_f = (_e = this._proxy).subscribeOffsetForTrackedBarcode) === null || _f === void 0 ? void 0 : _f.call(_e);
        (_h = (_g = this._proxy).subscribeDidTapViewForTrackedBarcode) === null || _h === void 0 ? void 0 : _h.call(_g);
        this.eventEmitter.on(BarcodeTrackingAdvancedOverlayListenerEvents.viewForTrackedBarcode, (body) => __awaiter(this, void 0, void 0, function* () {
            const payload = JSON.parse(body);
            const trackedBarcode = TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            if (this.overlay.listener && this.overlay.listener.viewForTrackedBarcode) {
                const view = yield this.overlay.listener.viewForTrackedBarcode(this.overlay, trackedBarcode);
                this._proxy.setViewForTrackedBarcode(this._proxy.getJSONStringForView(view), trackedBarcode.identifier, trackedBarcode.sessionFrameSequenceID);
            }
        }));
        this.eventEmitter.on(BarcodeTrackingAdvancedOverlayListenerEvents.anchorForTrackedBarcode, (body) => {
            const payload = JSON.parse(body);
            const trackedBarcode = TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            let anchor = Anchor.Center;
            if (this.overlay.listener && this.overlay.listener.anchorForTrackedBarcode) {
                anchor = this.overlay.listener.anchorForTrackedBarcode(this.overlay, trackedBarcode);
            }
            this.setAnchorForTrackedBarcode(anchor, trackedBarcode);
        });
        this.eventEmitter.on(BarcodeTrackingAdvancedOverlayListenerEvents.offsetForTrackedBarcode, (body) => {
            const payload = JSON.parse(body);
            const trackedBarcode = TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            let offset = PointWithUnit.zero;
            if (this.overlay.listener && this.overlay.listener.offsetForTrackedBarcode) {
                offset = this.overlay.listener.offsetForTrackedBarcode(this.overlay, trackedBarcode);
            }
            this.setOffsetForTrackedBarcode(offset, trackedBarcode);
        });
        this.eventEmitter.on(BarcodeTrackingAdvancedOverlayListenerEvents.didTapViewForTrackedBarcode, (body) => {
            var _a, _b;
            const payload = JSON.parse(body);
            const trackedBarcode = TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            (_b = (_a = this.overlay.listener) === null || _a === void 0 ? void 0 : _a.didTapViewForTrackedBarcode) === null || _b === void 0 ? void 0 : _b.call(_a, this.overlay, trackedBarcode);
        });
    }
    unsubscribeListener() {
        this._proxy.unregisterListenerForAdvancedOverlayEvents();
        this.eventEmitter.removeAllListeners(BarcodeTrackingAdvancedOverlayListenerEvents.anchorForTrackedBarcode);
        this.eventEmitter.removeAllListeners(BarcodeTrackingAdvancedOverlayListenerEvents.offsetForTrackedBarcode);
        this.eventEmitter.removeAllListeners(BarcodeTrackingAdvancedOverlayListenerEvents.viewForTrackedBarcode);
    }
}

var BarcodeTrackingBasicOverlayListenerEvents;
(function (BarcodeTrackingBasicOverlayListenerEvents) {
    BarcodeTrackingBasicOverlayListenerEvents["brushForTrackedBarcode"] = "BarcodeTrackingBasicOverlayListener.brushForTrackedBarcode";
    BarcodeTrackingBasicOverlayListenerEvents["didTapTrackedBarcode"] = "BarcodeTrackingBasicOverlayListener.didTapTrackedBarcode";
})(BarcodeTrackingBasicOverlayListenerEvents || (BarcodeTrackingBasicOverlayListenerEvents = {}));
class BarcodeTrackingBasicOverlayController {
    get _proxy() {
        return FactoryMaker.getInstance("BarcodeTrackingBasicOverlayProxy");
    }
    static forOverlay(overlay) {
        const controller = new BarcodeTrackingBasicOverlayController();
        controller.overlay = overlay;
        return controller;
    }
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    setBrushForTrackedBarcode(brush, trackedBarcode) {
        return this._proxy.setBrushForTrackedBarcode(brush ? JSON.stringify(brush.toJSON()) : null, trackedBarcode.identifier, trackedBarcode.sessionFrameSequenceID);
    }
    clearTrackedBarcodeBrushes() {
        return this._proxy.clearTrackedBarcodeBrushes();
    }
    updateBarcodeTrackingBasicOverlay() {
        return this._proxy.updateBarcodeTrackingBasicOverlay(JSON.stringify(this.overlay.toJSON()));
    }
    subscribeListener() {
        var _a, _b, _c, _d;
        this._proxy.registerListenerForBasicOverlayEvents();
        (_b = (_a = this._proxy).subscribeBrushForTrackedBarcode) === null || _b === void 0 ? void 0 : _b.call(_a);
        (_d = (_c = this._proxy).subscribeDidTapTrackedBarcode) === null || _d === void 0 ? void 0 : _d.call(_c);
        this.eventEmitter.on(BarcodeTrackingBasicOverlayListenerEvents.brushForTrackedBarcode, (body) => {
            const payload = JSON.parse(body);
            const trackedBarcode = TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            let brush = this.overlay.brush;
            if (this.overlay.listener && this.overlay.listener.brushForTrackedBarcode) {
                brush = this.overlay.listener.brushForTrackedBarcode(this.overlay, trackedBarcode);
                this.setBrushForTrackedBarcode(brush, trackedBarcode);
            }
        });
        this.eventEmitter.on(BarcodeTrackingBasicOverlayListenerEvents.didTapTrackedBarcode, (body) => {
            const payload = JSON.parse(body);
            const trackedBarcode = TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            if (this.overlay.listener && this.overlay.listener.didTapTrackedBarcode) {
                this.overlay.listener.didTapTrackedBarcode(this.overlay, trackedBarcode);
            }
        });
    }
    unsubscribeListener() {
        this._proxy.unregisterListenerForBasicOverlayEvents();
        this.eventEmitter.removeAllListeners(BarcodeTrackingBasicOverlayListenerEvents.brushForTrackedBarcode);
        this.eventEmitter.removeAllListeners(BarcodeTrackingBasicOverlayListenerEvents.didTapTrackedBarcode);
    }
}

class BarcodeTrackingBasicOverlay extends DefaultSerializeable {
    set view(newView) {
        if (newView == null) {
            this.controller.unsubscribeListener();
        }
        else if (this._view == null) {
            this.controller.subscribeListener();
        }
        this._view = newView;
    }
    get view() {
        return this._view;
    }
    static get defaultBrush() {
        // tslint:disable-next-line:no-console
        console.warn('defaultBrush is deprecated and will be removed in a future release. ' +
            'Use .brush to get the default for your selected style');
        return new Brush(BarcodeTrackingBasicOverlay.barcodeTrackingDefaults.BarcodeTrackingBasicOverlay.styles[BarcodeTrackingBasicOverlay.barcodeTrackingDefaults.BarcodeTrackingBasicOverlay.defaultStyle].DefaultBrush.fillColor, BarcodeTrackingBasicOverlay.barcodeTrackingDefaults.BarcodeTrackingBasicOverlay.styles[BarcodeTrackingBasicOverlay.barcodeTrackingDefaults.BarcodeTrackingBasicOverlay.defaultStyle].DefaultBrush.strokeColor, BarcodeTrackingBasicOverlay.barcodeTrackingDefaults.BarcodeTrackingBasicOverlay.styles[BarcodeTrackingBasicOverlay.barcodeTrackingDefaults.BarcodeTrackingBasicOverlay.defaultStyle].DefaultBrush.strokeWidth);
    }
    get defaultBrush() {
        return this.brush;
    }
    set defaultBrush(newBrush) {
        this.brush = newBrush;
    }
    get brush() {
        return this._brush;
    }
    set brush(newBrush) {
        this._brush = newBrush;
        this.controller.updateBarcodeTrackingBasicOverlay();
    }
    get shouldShowScanAreaGuides() {
        return this._shouldShowScanAreaGuides;
    }
    set shouldShowScanAreaGuides(shouldShow) {
        this._shouldShowScanAreaGuides = shouldShow;
        this.controller.updateBarcodeTrackingBasicOverlay();
    }
    get style() {
        return this._style;
    }
    static withBarcodeTracking(barcodeTracking) {
        return BarcodeTrackingBasicOverlay.withBarcodeTrackingForView(barcodeTracking, null);
    }
    static withBarcodeTrackingForView(barcodeTracking, view) {
        return this.withBarcodeTrackingForViewWithStyle(barcodeTracking, view, BarcodeTrackingBasicOverlay.barcodeTrackingDefaults.BarcodeTrackingBasicOverlay.defaultStyle);
    }
    static withBarcodeTrackingForViewWithStyle(barcodeTracking, view, style) {
        const overlay = new BarcodeTrackingBasicOverlay();
        overlay.barcodeTracking = barcodeTracking;
        overlay._style = style;
        overlay._brush = new Brush(BarcodeTrackingBasicOverlay.barcodeTrackingDefaults.BarcodeTrackingBasicOverlay.styles[style].DefaultBrush.fillColor, BarcodeTrackingBasicOverlay.barcodeTrackingDefaults.BarcodeTrackingBasicOverlay.styles[style].DefaultBrush.strokeColor, BarcodeTrackingBasicOverlay.barcodeTrackingDefaults.BarcodeTrackingBasicOverlay.styles[style].DefaultBrush.strokeWidth);
        if (view) {
            view.addOverlay(overlay);
        }
        return overlay;
    }
    static get barcodeTrackingDefaults() {
        return getBarcodeTrackingDefaults();
    }
    constructor() {
        super();
        this.type = 'barcodeTrackingBasic';
        this._brush = BarcodeTrackingBasicOverlay.barcodeTrackingDefaults.BarcodeTrackingBasicOverlay.DefaultBrush;
        this._shouldShowScanAreaGuides = false;
        this.listener = null;
        this.controller = BarcodeTrackingBasicOverlayController.forOverlay(this);
    }
    setBrushForTrackedBarcode(brush, trackedBarcode) {
        return this.controller.setBrushForTrackedBarcode(brush, trackedBarcode);
    }
    clearTrackedBarcodeBrushes() {
        return this.controller.clearTrackedBarcodeBrushes();
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeTrackingBasicOverlay.prototype, "barcodeTracking", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeTrackingBasicOverlay.prototype, "_view", void 0);
__decorate([
    nameForSerialization('style')
], BarcodeTrackingBasicOverlay.prototype, "_style", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeTrackingBasicOverlay.prototype, "defaultBrush", null);
__decorate([
    nameForSerialization('defaultBrush')
], BarcodeTrackingBasicOverlay.prototype, "_brush", void 0);
__decorate([
    nameForSerialization('shouldShowScanAreaGuides')
], BarcodeTrackingBasicOverlay.prototype, "_shouldShowScanAreaGuides", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeTrackingBasicOverlay.prototype, "listener", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeTrackingBasicOverlay.prototype, "controller", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeTrackingBasicOverlay, "barcodeTrackingDefaults", null);

class BarcodeTrackingSettings extends DefaultSerializeable {
    get enabledSymbologies() {
        return Object.keys(this.symbologies)
            .filter(symbology => this.symbologies[symbology].isEnabled);
    }
    /**
    * @deprecated Setting a scenario is no longer recommended, use the BarcodeTrackingSettings empty constructor instead.
    */
    static forScenario(scenario) {
        console.warn('Setting a scenario is no longer recommended, use the BarcodeTrackingSettings empty constructor instead.');
        const settings = new BarcodeTrackingSettings();
        settings.scenario = scenario;
        return settings;
    }
    static get barcodeDefaults() {
        return getBarcodeDefaults();
    }
    constructor() {
        super();
        this.scenario = null;
        this.properties = {};
        this.symbologies = {};
        this._arucoDictionary = null;
    }
    settingsForSymbology(symbology) {
        if (!this.symbologies[symbology]) {
            const symbologySettings = BarcodeTrackingSettings.barcodeDefaults.SymbologySettings[symbology];
            symbologySettings._symbology = symbology;
            this.symbologies[symbology] = symbologySettings;
        }
        return this.symbologies[symbology];
    }
    setProperty(name, value) {
        this.properties[name] = value;
    }
    getProperty(name) {
        return this.properties[name];
    }
    enableSymbologies(symbologies) {
        symbologies.forEach(symbology => this.enableSymbology(symbology, true));
    }
    enableSymbology(symbology, enabled) {
        this.settingsForSymbology(symbology).isEnabled = enabled;
    }
    setArucoDictionary(dictionary) {
        this._arucoDictionary = dictionary;
    }
}
__decorate([
    nameForSerialization('arucoDictionary')
], BarcodeTrackingSettings.prototype, "_arucoDictionary", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeTrackingSettings, "barcodeDefaults", null);

class BaseBarcodeTrackingAdvancedOverlay extends DefaultSerializeable {
    get shouldShowScanAreaGuides() {
        return this._shouldShowScanAreaGuides;
    }
    set shouldShowScanAreaGuides(shouldShow) {
        this._shouldShowScanAreaGuides = shouldShow;
        this.controller.updateBarcodeTrackingAdvancedOverlay();
    }
    set view(newView) {
        if (newView == null) {
            this.controller.unsubscribeListener();
        }
        else if (this._view == null) {
            this.controller.subscribeListener();
        }
        this._view = newView;
    }
    get view() {
        return this._view;
    }
    initialize(barcodeTracking, view) {
        this.barcodeTracking = barcodeTracking;
        if (view) {
            view.addOverlay(this);
        }
    }
    constructor() {
        super();
        this.type = 'barcodeTrackingAdvanced';
        this._shouldShowScanAreaGuides = false;
        this.listener = null;
        this.controller = BarcodeTrackingAdvancedOverlayController.forOverlay(this);
    }
    setViewForTrackedBarcode(view, trackedBarcode) {
        return this.controller.setViewForTrackedBarcode(view, trackedBarcode);
    }
    setAnchorForTrackedBarcode(anchor, trackedBarcode) {
        return this.controller.setAnchorForTrackedBarcode(anchor, trackedBarcode);
    }
    setOffsetForTrackedBarcode(offset, trackedBarcode) {
        return this.controller.setOffsetForTrackedBarcode(offset, trackedBarcode);
    }
    clearTrackedBarcodeViews() {
        return this.controller.clearTrackedBarcodeViews();
    }
}
__decorate([
    nameForSerialization('shouldShowScanAreaGuides')
], BaseBarcodeTrackingAdvancedOverlay.prototype, "_shouldShowScanAreaGuides", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodeTrackingAdvancedOverlay.prototype, "barcodeTracking", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodeTrackingAdvancedOverlay.prototype, "listener", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodeTrackingAdvancedOverlay.prototype, "controller", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodeTrackingAdvancedOverlay.prototype, "_view", void 0);

// @Deprecated('This class is not used anymore. Use SparkScanBarcodeFeedback and FeedbackDelegate instead.')
class SparkScanFeedback extends DefaultSerializeable {
    static get sparkScanDefaults() {
        return getSparkScanDefaults();
    }
    static get default() {
        return new SparkScanFeedback(Feedback.defaultFeedback, Feedback.defaultFeedback);
    }
    constructor(success, error) {
        super();
        this.success = success;
        this.error = error;
        console.warn('This class is not used anymore. Use SparkScanBarcodeFeedback and FeedbackDelegate instead.');
    }
}
__decorate([
    ignoreFromSerialization
], SparkScanFeedback, "sparkScanDefaults", null);

class SparkScanSession {
    static fromJSON(json) {
        const session = new SparkScanSession();
        session._newlyRecognizedBarcode = json.newlyRecognizedBarcode != null ?
            Barcode.fromJSON(json.newlyRecognizedBarcode) :
            null;
        session._newlyRecognizedBarcodes = json.newlyRecognizedBarcodes.map(Barcode.fromJSON);
        session._frameSequenceID = json.frameSequenceId;
        return session;
    }
    get newlyRecognizedBarcode() {
        return this._newlyRecognizedBarcode;
    }
    /**
     * @deprecated Prefer use of the property `newlyRecognizedBarcode` instead.
     */
    get newlyRecognizedBarcodes() {
        // tslint:disable-next-line:no-console
        console.warn('The newlyRecognizedBarcodes has been deprecated. Prefer use of the property `newlyRecognizedBarcode` instead.');
        return this._newlyRecognizedBarcodes;
    }
    get frameSequenceID() {
        return this._frameSequenceID;
    }
    reset() {
        return this.listenerController.reset();
    }
}

var SparkScanListenerEvents;
(function (SparkScanListenerEvents) {
    SparkScanListenerEvents["didUpdateSession"] = "SparkScanListener.didUpdateSession";
    SparkScanListenerEvents["didScan"] = "SparkScanListener.didScan";
})(SparkScanListenerEvents || (SparkScanListenerEvents = {}));
class SparkScanListenerController extends BaseController {
    static forSparkScan(sparkScan) {
        const controller = new SparkScanListenerController();
        controller.sparkScan = sparkScan;
        return controller;
    }
    constructor() {
        super('SparkScanListenerProxy');
    }
    reset() {
        return this._proxy.resetSession();
    }
    update() {
        const sparkScanJson = this.sparkScan.toJSON();
        const json = JSON.stringify(sparkScanJson);
        return this._proxy.updateMode(json);
    }
    subscribeListener() {
        this._proxy.registerListenerForEvents();
        this._proxy.subscribeDidScanListener();
        this._proxy.subscribeDidUpdateSessionListener();
        this.eventEmitter.on(SparkScanListenerEvents.didUpdateSession, (body) => {
            const payload = JSON.parse(body);
            const session = SparkScanSession.fromJSON(JSON.parse(payload.session));
            this.notifyListenersOfDidUpdateSession(session);
            this._proxy.finishDidUpdateSessionCallback(this.sparkScan.isEnabled);
        });
        this.eventEmitter.on(SparkScanListenerEvents.didScan, (body) => {
            const payload = JSON.parse(body);
            const session = SparkScanSession.fromJSON(JSON.parse(payload.session));
            this.notifyListenersOfDidScan(session);
            this._proxy.finishDidScanCallback(this.sparkScan.isEnabled);
        });
    }
    unsubscribeListener() {
        this._proxy.unregisterListenerForEvents();
        this.eventEmitter.removeAllListeners(SparkScanListenerEvents.didUpdateSession);
        this.eventEmitter.removeAllListeners(SparkScanListenerEvents.didScan);
    }
    setModeEnabledState(enabled) {
        this._proxy.setModeEnabledState(enabled);
    }
    notifyListenersOfDidUpdateSession(session) {
        const mode = this.sparkScan;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(listener => {
            if (listener.didUpdateSession) {
                listener.didUpdateSession(this.sparkScan, session, CameraController.getLastFrameOrNull);
            }
        });
        mode.isInListenerCallback = false;
    }
    notifyListenersOfDidScan(session) {
        const mode = this.sparkScan;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(listener => {
            if (listener.didScan) {
                listener.didScan(this.sparkScan, session, CameraController.getLastFrameOrNull);
            }
        });
        mode.isInListenerCallback = false;
    }
}

class SparkScan extends DefaultSerializeable {
    get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(isEnabled) {
        this._isEnabled = isEnabled;
        this.listenerController.setModeEnabledState(isEnabled);
    }
    get context() {
        return this._context;
    }
    get feedback() {
        return this._feedback;
    }
    set feedback(feedback) {
        this._feedback = feedback;
        this.didChange();
    }
    get _context() {
        return this.privateContext;
    }
    set _context(newContext) {
        this.privateContext = newContext;
    }
    static forSettings(settings) {
        const sparkScan = new SparkScan();
        sparkScan.settings = settings;
        return sparkScan;
    }
    constructor() {
        super();
        this.type = 'sparkScan';
        this._isEnabled = true;
        this._feedback = SparkScanFeedback.default;
        this.privateContext = null;
        this.listeners = [];
        this.isInListenerCallback = false;
        this.listenerController = SparkScanListenerController.forSparkScan(this);
    }
    applySettings(settings) {
        this.settings = settings;
        return this.didChange();
    }
    addListener(listener) {
        this.checkAndSubscribeListeners();
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    }
    checkAndSubscribeListeners() {
        if (this.listeners.length === 0) {
            this.listenerController.subscribeListener();
        }
    }
    checkAndUnsubscribeListeners() {
        if (this.listeners.length === 0) {
            this.listenerController.unsubscribeListener();
        }
    }
    removeListener(listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener));
        this.checkAndUnsubscribeListeners();
    }
    didChange() {
        if (this.listenerController) {
            return this.listenerController.update();
        }
        else {
            return Promise.resolve();
        }
    }
    unsubscribeNativeListeners() {
        this.listenerController.unsubscribeListener();
    }
}
__decorate([
    ignoreFromSerialization
], SparkScan.prototype, "_isEnabled", void 0);
__decorate([
    nameForSerialization('feedback')
], SparkScan.prototype, "_feedback", void 0);
__decorate([
    ignoreFromSerialization
], SparkScan.prototype, "privateContext", void 0);
__decorate([
    ignoreFromSerialization
], SparkScan.prototype, "listeners", void 0);
__decorate([
    ignoreFromSerialization
], SparkScan.prototype, "listenerController", void 0);
__decorate([
    ignoreFromSerialization
], SparkScan.prototype, "isInListenerCallback", void 0);

var SparkScanPreviewBehavior;
(function (SparkScanPreviewBehavior) {
    SparkScanPreviewBehavior["Persistent"] = "accurate";
    SparkScanPreviewBehavior["Default"] = "default";
})(SparkScanPreviewBehavior || (SparkScanPreviewBehavior = {}));

class SparkScanToastSettings extends DefaultSerializeable {
    constructor() {
        super(...arguments);
        this._toastEnabled = SparkScanToastSettings.toastSettings.toastEnabled;
        this._toastBackgroundColor = SparkScanToastSettings.toastSettings.toastBackgroundColor;
        this._toastTextColor = SparkScanToastSettings.toastSettings.toastTextColor;
        this._targetModeEnabledMessage = SparkScanToastSettings.toastSettings.targetModeEnabledMessage;
        this._targetModeDisabledMessage = SparkScanToastSettings.toastSettings.targetModeDisabledMessage;
        this._continuousModeEnabledMessage = SparkScanToastSettings.toastSettings.continuousModeEnabledMessage;
        this._continuousModeDisabledMessage = SparkScanToastSettings.toastSettings.continuousModeDisabledMessage;
        this._cameraTimeoutMessage = SparkScanToastSettings.toastSettings.cameraTimeoutMessage;
        this._scanPausedMessage = SparkScanToastSettings.toastSettings.scanPausedMessage;
        this._zoomedInMessage = SparkScanToastSettings.toastSettings.zoomedInMessage;
        this._zoomedOutMessage = SparkScanToastSettings.toastSettings.zoomedOutMessage;
        this._torchEnabledMessage = SparkScanToastSettings.toastSettings.torchEnabledMessage;
        this._torchDisabledMessage = SparkScanToastSettings.toastSettings.torchDisabledMessage;
        this._userFacingCameraEnabledMessage = SparkScanToastSettings.toastSettings.userFacingCameraEnabledMessage;
        this._worldFacingCameraEnabledMessage = SparkScanToastSettings.toastSettings.worldFacingCameraEnabledMessage;
    }
    set toastEnabled(isEnabled) {
        this._toastEnabled = isEnabled;
    }
    get toastEnabled() {
        return this._toastEnabled;
    }
    set toastBackgroundColor(backgroundColor) {
        this._toastBackgroundColor = backgroundColor;
    }
    get toastBackgroundColor() {
        return this._toastBackgroundColor;
    }
    set toastTextColor(textColor) {
        this._toastTextColor = textColor;
    }
    get toastTextColor() {
        return this._toastTextColor;
    }
    set targetModeEnabledMessage(message) {
        this._targetModeEnabledMessage = message;
    }
    get targetModeEnabledMessage() {
        return this._targetModeEnabledMessage;
    }
    set targetModeDisabledMessage(message) {
        this._targetModeDisabledMessage = message;
    }
    get targetModeDisabledMessage() {
        return this._targetModeDisabledMessage;
    }
    set continuousModeEnabledMessage(message) {
        this._continuousModeEnabledMessage = message;
    }
    get continuousModeEnabledMessage() {
        return this._continuousModeEnabledMessage;
    }
    set continuousModeDisabledMessage(message) {
        this._continuousModeDisabledMessage = message;
    }
    get continuousModeDisabledMessage() {
        return this._continuousModeDisabledMessage;
    }
    set cameraTimeoutMessage(message) {
        this._cameraTimeoutMessage = message;
    }
    get cameraTimeoutMessage() {
        return this._cameraTimeoutMessage;
    }
    set scanPausedMessage(message) {
        this._scanPausedMessage = message;
    }
    get scanPausedMessage() {
        return this._scanPausedMessage;
    }
    set zoomedInMessage(message) {
        this._zoomedInMessage = message;
    }
    get zoomedInMessage() {
        return this._zoomedInMessage;
    }
    set zoomedOutMessage(message) {
        this._zoomedOutMessage = message;
    }
    get zoomedOutMessage() {
        return this._zoomedOutMessage;
    }
    set torchEnabledMessage(message) {
        this._torchEnabledMessage = message;
    }
    get torchEnabledMessage() {
        return this._torchEnabledMessage;
    }
    set torchDisabledMessage(message) {
        this._torchDisabledMessage = message;
    }
    get torchDisabledMessage() {
        return this._torchDisabledMessage;
    }
    set worldFacingCameraEnabledMessage(message) {
        this._worldFacingCameraEnabledMessage = message;
    }
    get worldFacingCameraEnabledMessage() {
        return this._worldFacingCameraEnabledMessage;
    }
    set userFacingCameraEnabledMessage(message) {
        this._userFacingCameraEnabledMessage = message;
    }
    get userFacingCameraEnabledMessage() {
        return this._userFacingCameraEnabledMessage;
    }
    static get sparkScanDefaults() {
        return getSparkScanDefaults();
    }
    static get toastSettings() {
        return SparkScanToastSettings.sparkScanDefaults.SparkScanView.SparkScanViewSettings.toastSettings;
    }
}
__decorate([
    nameForSerialization('toastEnabled')
], SparkScanToastSettings.prototype, "_toastEnabled", void 0);
__decorate([
    nameForSerialization('toastBackgroundColor')
], SparkScanToastSettings.prototype, "_toastBackgroundColor", void 0);
__decorate([
    nameForSerialization('toastTextColor')
], SparkScanToastSettings.prototype, "_toastTextColor", void 0);
__decorate([
    nameForSerialization('targetModeEnabledMessage')
], SparkScanToastSettings.prototype, "_targetModeEnabledMessage", void 0);
__decorate([
    nameForSerialization('targetModeDisabledMessage')
], SparkScanToastSettings.prototype, "_targetModeDisabledMessage", void 0);
__decorate([
    nameForSerialization('continuousModeEnabledMessage')
], SparkScanToastSettings.prototype, "_continuousModeEnabledMessage", void 0);
__decorate([
    nameForSerialization('continuousModeDisabledMessage')
], SparkScanToastSettings.prototype, "_continuousModeDisabledMessage", void 0);
__decorate([
    nameForSerialization('cameraTimeoutMessage')
], SparkScanToastSettings.prototype, "_cameraTimeoutMessage", void 0);
__decorate([
    nameForSerialization('scanPausedMessage')
], SparkScanToastSettings.prototype, "_scanPausedMessage", void 0);
__decorate([
    nameForSerialization('zoomedInMessage')
], SparkScanToastSettings.prototype, "_zoomedInMessage", void 0);
__decorate([
    nameForSerialization('zoomedOutMessage')
], SparkScanToastSettings.prototype, "_zoomedOutMessage", void 0);
__decorate([
    nameForSerialization('torchEnabledMessage')
], SparkScanToastSettings.prototype, "_torchEnabledMessage", void 0);
__decorate([
    nameForSerialization('torchDisabledMessage')
], SparkScanToastSettings.prototype, "_torchDisabledMessage", void 0);
__decorate([
    nameForSerialization('userFacingCameraEnabledMessage')
], SparkScanToastSettings.prototype, "_userFacingCameraEnabledMessage", void 0);
__decorate([
    nameForSerialization('worldFacingCameraEnabledMessage')
], SparkScanToastSettings.prototype, "_worldFacingCameraEnabledMessage", void 0);
__decorate([
    ignoreFromSerialization
], SparkScanToastSettings, "sparkScanDefaults", null);

var SparkScanScanningBehavior;
(function (SparkScanScanningBehavior) {
    SparkScanScanningBehavior["Single"] = "single";
    SparkScanScanningBehavior["Continuous"] = "continuous";
})(SparkScanScanningBehavior || (SparkScanScanningBehavior = {}));

class PrivateSparkScanScanningModeSettings extends DefaultSerializeable {
    get scanningBehavior() {
        return this._scanningBehavior;
    }
    get previewBehavior() {
        return this._previewBehavior;
    }
    constructor(scanScanningBehavior, scanPreviewBehavior) {
        super();
        this._scanningBehavior = scanScanningBehavior;
        this._previewBehavior = scanPreviewBehavior;
    }
}
__decorate([
    nameForSerialization('scanningBehavior')
], PrivateSparkScanScanningModeSettings.prototype, "_scanningBehavior", void 0);
__decorate([
    nameForSerialization('scanningBehavior')
], PrivateSparkScanScanningModeSettings.prototype, "_previewBehavior", void 0);

class SparkScanScanningModeDefault extends DefaultSerializeable {
    get scanningBehavior() {
        return this._settings.scanningBehavior;
    }
    get previewBehavior() {
        return this._settings.previewBehavior;
    }
    constructor(scanningBehavior, previewBehavior) {
        super();
        this.type = 'default';
        if (previewBehavior) {
            this._settings = new PrivateSparkScanScanningModeSettings(scanningBehavior, previewBehavior);
        }
        else {
            const previewBehavior = SparkScanPreviewBehavior.Default;
            this._settings = new PrivateSparkScanScanningModeSettings(scanningBehavior, previewBehavior);
            console.warn('SparkScanScanningModeDefault(scanningBehavior: SparkScanScanningBehavior) is deprecated.');
        }
    }
}
__decorate([
    nameForSerialization('settings')
], SparkScanScanningModeDefault.prototype, "_settings", void 0);

class SparkScanScanningModeTarget extends DefaultSerializeable {
    get scanningBehavior() {
        return this._settings.scanningBehavior;
    }
    get previewBehavior() {
        return this._settings.previewBehavior;
    }
    constructor(scanningBehavior, previewBehavior) {
        super();
        this.type = 'target';
        if (previewBehavior) {
            this._settings = new PrivateSparkScanScanningModeSettings(scanningBehavior, previewBehavior);
        }
        else {
            const previewBehavior = SparkScanPreviewBehavior.Default;
            this._settings = new PrivateSparkScanScanningModeSettings(scanningBehavior, previewBehavior);
            console.warn('SparkScanScanningModeTarget(scanningBehavior: SparkScanScanningBehavior) is deprecated.');
        }
    }
}
__decorate([
    nameForSerialization('settings')
], SparkScanScanningModeTarget.prototype, "_settings", void 0);

var SparkScanScanningPrecision;
(function (SparkScanScanningPrecision) {
    SparkScanScanningPrecision["Default"] = "default";
    SparkScanScanningPrecision["Accurate"] = "accurate";
})(SparkScanScanningPrecision || (SparkScanScanningPrecision = {}));

class SparkScanSettings extends DefaultSerializeable {
    get singleBarcodeAutoDetection() {
        // tslint:disable-next-line:no-console
        console.warn('singleBarcodeAutoDetection is deprecated and will be removed in a future release.');
        return this._singleBarcodeAutoDetection;
    }
    set singleBarcodeAutoDetection(isEnabled) {
        // tslint:disable-next-line:no-console
        console.warn('singleBarcodeAutoDetection is deprecated and will be removed in a future release.');
        this._singleBarcodeAutoDetection = isEnabled;
    }
    get batterySaving() {
        return this._batterySaving;
    }
    set batterySaving(newValue) {
        this._batterySaving = newValue;
    }
    get locationSelection() {
        // tslint:disable-next-line:no-console
        console.warn('locationSelection is deprecated and will be removed in a future release.');
        return this._locationSelection;
    }
    set locationSelection(newValue) {
        // tslint:disable-next-line:no-console
        console.warn('locationSelection is deprecated and will be removed in a future release.');
        this._locationSelection = newValue;
    }
    get enabledSymbologies() {
        return Object.keys(this.symbologies)
            .filter(symbology => this.symbologies[symbology].isEnabled);
    }
    static get sparkScanDefaults() {
        return getSparkScanDefaults();
    }
    static get barcodeDefaults() {
        return getBarcodeDefaults();
    }
    constructor() {
        super();
        this.codeDuplicateFilter = SparkScanSettings.sparkScanDefaults.SparkScanSettings.codeDuplicateFilter;
        this._singleBarcodeAutoDetection = SparkScanSettings.sparkScanDefaults.SparkScanSettings.singleBarcodeAutoDetection;
        this._batterySaving = SparkScanSettings.sparkScanDefaults.SparkScanSettings.batterySaving;
        this._locationSelection = null;
        this.properties = {};
        this.symbologies = {};
        this.scanIntention = SparkScanSettings.sparkScanDefaults.SparkScanSettings.scanIntention;
    }
    settingsForSymbology(symbology) {
        if (!this.symbologies[symbology]) {
            const symbologySettings = SparkScanSettings.barcodeDefaults.SymbologySettings[symbology];
            symbologySettings._symbology = symbology;
            this.symbologies[symbology] = symbologySettings;
        }
        return this.symbologies[symbology];
    }
    setProperty(name, value) {
        this.properties[name] = value;
    }
    getProperty(name) {
        return this.properties[name];
    }
    enableSymbologies(symbologies) {
        symbologies.forEach(symbology => this.enableSymbology(symbology, true));
    }
    enableSymbology(symbology, enabled) {
        this.settingsForSymbology(symbology).isEnabled = enabled;
    }
}
__decorate([
    nameForSerialization('singleBarcodeAutoDetection')
], SparkScanSettings.prototype, "_singleBarcodeAutoDetection", void 0);
__decorate([
    nameForSerialization('batterySaving')
], SparkScanSettings.prototype, "_batterySaving", void 0);
__decorate([
    ignoreFromSerialization
], SparkScanSettings.prototype, "_locationSelection", void 0);
__decorate([
    ignoreFromSerialization
], SparkScanSettings, "sparkScanDefaults", null);
__decorate([
    ignoreFromSerialization
], SparkScanSettings, "barcodeDefaults", null);

class SparkScanViewFeedback extends DefaultSerializeable {
    constructor() {
        super();
    }
}

class SparkScanViewErrorFeedback extends SparkScanViewFeedback {
    get message() {
        return this._message;
    }
    get resumeCapturingDelay() {
        return this._resumeCapturingDelay;
    }
    get visualFeedbackColor() {
        return this._visualFeedbackColor;
    }
    get brush() {
        return this._errorBrush;
    }
    constructor(message, resumeCapturingDelay, visualFeedbackColor, errorBrush) {
        super();
        this.type = 'error';
        this._message = message;
        this._resumeCapturingDelay = resumeCapturingDelay;
        this._visualFeedbackColor = visualFeedbackColor;
        this._errorBrush = errorBrush;
    }
}
__decorate([
    nameForSerialization('message')
], SparkScanViewErrorFeedback.prototype, "_message", void 0);
__decorate([
    nameForSerialization('resumeCapturingDelay')
], SparkScanViewErrorFeedback.prototype, "_resumeCapturingDelay", void 0);
__decorate([
    nameForSerialization('visualFeedbackColor')
], SparkScanViewErrorFeedback.prototype, "_visualFeedbackColor", void 0);
__decorate([
    nameForSerialization('brush')
], SparkScanViewErrorFeedback.prototype, "_errorBrush", void 0);

var SparkScanViewHandMode;
(function (SparkScanViewHandMode) {
    SparkScanViewHandMode["Right"] = "right";
    SparkScanViewHandMode["Left"] = "left";
})(SparkScanViewHandMode || (SparkScanViewHandMode = {}));

class SparkScanViewSuccessFeedback extends SparkScanViewFeedback {
    get visualFeedbackColor() {
        return this._visualFeedbackColor;
    }
    constructor(visualFeedbackColor) {
        super();
        this.type = 'success';
        this._visualFeedbackColor = visualFeedbackColor;
    }
}
__decorate([
    nameForSerialization('visualFeedbackColor')
], SparkScanViewSuccessFeedback.prototype, "_visualFeedbackColor", void 0);

class SparkScanViewSettings extends DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.triggerButtonCollapseTimeout = SparkScanViewSettings.viewSettingsDefaults.triggerButtonCollapseTimeout;
        this.continuousCaptureTimeout = SparkScanViewSettings.viewSettingsDefaults.continuousCaptureTimeout;
        this.defaultTorchState = SparkScanViewSettings.viewSettingsDefaults.defaultTorchState;
        this.defaultScanningMode = SparkScanViewSettings.viewSettingsDefaults.defaultScanningMode;
        this.defaultHandMode = SparkScanViewSettings.viewSettingsDefaults.defaultHandMode;
        this.holdToScanEnabled = SparkScanViewSettings.viewSettingsDefaults.holdToScanEnabled;
        this.soundEnabled = SparkScanViewSettings.viewSettingsDefaults.soundEnabled;
        this.hapticEnabled = SparkScanViewSettings.viewSettingsDefaults.hapticEnabled;
        this.hardwareTriggerEnabled = SparkScanViewSettings.viewSettingsDefaults.hardwareTriggerEnabled;
        this.hardwareTriggerKeyCode = SparkScanViewSettings.viewSettingsDefaults.hardwareTriggerKeyCode;
        this.visualFeedbackEnabled = SparkScanViewSettings.viewSettingsDefaults.visualFeedbackEnabled;
        this.ignoreDragLimits = true;
        this.toastSettings = new SparkScanToastSettings();
        this.targetZoomFactorOut = SparkScanViewSettings.viewSettingsDefaults.targetZoomFactorOut;
        this.targetZoomFactorIn = SparkScanViewSettings.viewSettingsDefaults.targetZoomFactorIn;
        this.zoomFactorOut = SparkScanViewSettings.viewSettingsDefaults.zoomFactorOut;
        this.zoomFactorIn = SparkScanViewSettings.viewSettingsDefaults.zoomFactorIn;
        this.inactiveStateTimeout = SparkScanViewSettings.viewSettingsDefaults.inactiveStateTimeout;
        this.defaultCameraPosition = SparkScanViewSettings.viewSettingsDefaults.defaultCameraPosition;
    }
    scanModeFromJSON(json) {
        const scanningBehavior = json.settings.scanningBehavior;
        const previewBehavior = json.settings.previewBehavior;
        if (json.type === 'default') {
            return new SparkScanScanningModeDefault(scanningBehavior, previewBehavior);
        }
        else {
            return new SparkScanScanningModeTarget(scanningBehavior, previewBehavior);
        }
    }
    static get sparkScanDefaults() {
        return getSparkScanDefaults();
    }
    static get viewSettingsDefaults() {
        return SparkScanViewSettings.sparkScanDefaults.SparkScanView.SparkScanViewSettings;
    }
}
__decorate([
    ignoreFromSerialization
], SparkScanViewSettings, "sparkScanDefaults", null);

var SparkScanViewEvents;
(function (SparkScanViewEvents) {
    SparkScanViewEvents["fastFindButtonTapped"] = "SparkScanViewUiListener.fastFindButtonTapped";
    SparkScanViewEvents["barcodeFindButtonTapped"] = "SparkScanViewUiListener.barcodeFindButtonTapped";
    SparkScanViewEvents["barcodeCountButtonTapped"] = "SparkScanViewUiListener.barcodeCountButtonTapped";
})(SparkScanViewEvents || (SparkScanViewEvents = {}));
var SparkScanFeedbackDelegateEvents;
(function (SparkScanFeedbackDelegateEvents) {
    SparkScanFeedbackDelegateEvents["feedbackForBarcode"] = "SparkScanFeedbackDelegate.feedbackForBarcode";
})(SparkScanFeedbackDelegateEvents || (SparkScanFeedbackDelegateEvents = {}));
class SparkScanViewController extends BaseController {
    static forSparkScanView(view, sparkScan, autoCreateNativeView = true) {
        const controller = new SparkScanViewController();
        controller.view = view;
        controller.sparkScan = sparkScan;
        // We call update because it returns a promise, this guarantees, that by the time
        // we need the deserialized context, it will be set in the native layer.
        controller.initialize(autoCreateNativeView);
        return controller;
    }
    constructor() {
        super('SparkScanViewProxy');
        this.hasFeedbackDelegateListener = false;
    }
    initialize(autoCreateNativeView) {
        return __awaiter(this, void 0, void 0, function* () {
            this.subscribeListeners();
            yield this.view.context.update();
            if (autoCreateNativeView) {
                yield this.create();
            }
            this._proxy.prepareSparkScanViewScanning();
        });
    }
    emitFeedback(feedback) {
        const json = JSON.stringify(feedback.toJSON());
        return this._proxy.emitSparkScanViewFeedback(json);
    }
    dispose() {
        this.sparkScan.unsubscribeNativeListeners();
        this.unsubscribeListeners();
        this.removeFeedbackDelegate();
        this._proxy.disposeSparkScanView();
    }
    subscribeListeners() {
        this._proxy.registerSparkScanViewListenerEvents();
        this.eventEmitter.on(SparkScanViewEvents.barcodeCountButtonTapped, () => {
            var _a, _b;
            (_b = (_a = this.view.uiListener) === null || _a === void 0 ? void 0 : _a.didTapBarcodeCountButton) === null || _b === void 0 ? void 0 : _b.call(_a, this.view);
        });
        this.eventEmitter.on(SparkScanViewEvents.fastFindButtonTapped, () => {
            var _a, _b;
            (_b = (_a = this.view.uiListener) === null || _a === void 0 ? void 0 : _a.didTapFastFindButton) === null || _b === void 0 ? void 0 : _b.call(_a, this.view);
        });
        this.eventEmitter.on(SparkScanViewEvents.barcodeFindButtonTapped, () => {
            var _a, _b;
            (_b = (_a = this.view.uiListener) === null || _a === void 0 ? void 0 : _a.didTapBarcodeFindButton) === null || _b === void 0 ? void 0 : _b.call(_a, this.view);
        });
    }
    unsubscribeListeners() {
        this._proxy.unregisterSparkScanViewListenerEvents();
        this.eventEmitter.off(SparkScanViewEvents.barcodeCountButtonTapped);
        this.eventEmitter.off(SparkScanViewEvents.fastFindButtonTapped);
    }
    create() {
        const viewJson = {
            SparkScan: this.sparkScan.toJSON(),
            SparkScanView: this.view.toJSON()
        };
        const json = JSON.stringify(viewJson);
        return this._proxy.createSparkScanView(json);
    }
    update() {
        const sparkScanViewJson = this.view.toJSON();
        const json = JSON.stringify({ View: sparkScanViewJson });
        return this._proxy.updateSparkScanView(json);
    }
    stopScanning() {
        return this._proxy.stopSparkScanViewScanning();
    }
    pauseScanning() {
        return this._proxy.pauseSparkScanViewScanning();
    }
    startScanning() {
        return this._proxy.startSparkScanViewScanning();
    }
    prepareScanning() {
        return this._proxy.prepareSparkScanViewScanning();
    }
    showToast(text) {
        return this._proxy.showToast(text);
    }
    show() {
        return this._proxy.showSparkScanView ? this._proxy.showSparkScanView() : Promise.resolve();
    }
    hide() {
        return this._proxy.hideSparkScanView ? this._proxy.hideSparkScanView() : Promise.resolve();
    }
    addFeedbackDelegate() {
        if (this.hasFeedbackDelegateListener) {
            return;
        }
        this._proxy.registerDelegateForEvents();
        this.eventEmitter.on(SparkScanFeedbackDelegateEvents.feedbackForBarcode, (body) => {
            var _a, _b;
            const payload = JSON.parse(body);
            const barcode = Barcode.fromJSON(JSON.parse(payload.barcode));
            const feedback = (_b = (_a = this.view.feedbackDelegate) === null || _a === void 0 ? void 0 : _a.feedbackForBarcode) === null || _b === void 0 ? void 0 : _b.call(_a, barcode);
            this._proxy.submitFeedbackForBarcode(JSON.stringify(feedback === null || feedback === void 0 ? void 0 : feedback.toJSON()));
        });
        this.hasFeedbackDelegateListener = true;
    }
    removeFeedbackDelegate() {
        if (!this.hasFeedbackDelegateListener) {
            return;
        }
        this._proxy.unregisterDelegateForEvents();
        this.eventEmitter.off(SparkScanFeedbackDelegateEvents.feedbackForBarcode);
        this.hasFeedbackDelegateListener = false;
    }
}

class BaseSparkScanView {
    static forContext(context, sparkScan, settings, autoCreateNativeView = true) {
        const view = new BaseSparkScanView({ context, sparkScan, settings, autoCreateNativeView });
        return view;
    }
    static get defaultBrush() {
        return BaseSparkScanView.sparkScanDefaults.SparkScanView.brush;
    }
    constructor({ context, sparkScan, settings, autoCreateNativeView }) {
        this.uiListener = null;
        this._brush = BaseSparkScanView.defaultBrush;
        this._feedbackDelegate = null;
        this._previewSizeControlVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.previewSizeControlVisible;
        this._cameraSwitchButtonVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.cameraSwitchButtonVisible;
        this._shouldShowScanAreaGuides = BaseSparkScanView.sparkScanDefaults.SparkScanView.shouldShowScanAreaGuides;
        this._torchButtonVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.torchButtonVisible;
        this._scanningBehaviorButtonVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.scanningBehaviorButtonVisible;
        this._handModeButtonVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.handModeButtonVisible;
        this._barcodeCountButtonVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.barcodeCountButtonVisible;
        this._fastFindButtonVisible = false;
        this._barcodeFindButtonVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.barcodeFindButtonVisible;
        this._targetModeButtonVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.targetModeButtonVisible;
        this._soundModeButtonVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.soundModeButtonVisible;
        this._hapticModeButtonVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.hapticModeButtonVisible;
        this._stopCapturingText = BaseSparkScanView.sparkScanDefaults.SparkScanView.stopCapturingText;
        this._startCapturingText = BaseSparkScanView.sparkScanDefaults.SparkScanView.startCapturingText;
        this._resumeCapturingText = BaseSparkScanView.sparkScanDefaults.SparkScanView.resumeCapturingText;
        this._scanningCapturingText = BaseSparkScanView.sparkScanDefaults.SparkScanView.scanningCapturingText;
        this._captureButtonActiveBackgroundColor = BaseSparkScanView.sparkScanDefaults.SparkScanView.captureButtonActiveBackgroundColor;
        this._captureButtonBackgroundColor = BaseSparkScanView.sparkScanDefaults.SparkScanView.captureButtonBackgroundColor;
        this._captureButtonTintColor = BaseSparkScanView.sparkScanDefaults.SparkScanView.captureButtonTintColor;
        this._toolbarBackgroundColor = BaseSparkScanView.sparkScanDefaults.SparkScanView.toolbarBackgroundColor;
        this._toolbarIconActiveTintColor = BaseSparkScanView.sparkScanDefaults.SparkScanView.toolbarIconActiveTintColor;
        this._toolbarIconInactiveTintColor = BaseSparkScanView.sparkScanDefaults.SparkScanView.toolbarIconInactiveTintColor;
        this._targetModeHintText = BaseSparkScanView.sparkScanDefaults.SparkScanView.targetModeHintText;
        this._shouldShowTargetModeHint = BaseSparkScanView.sparkScanDefaults.SparkScanView.shouldShowTargetModeHint;
        this._sparkScan = sparkScan;
        this.context = context;
        this._viewSettings = settings !== null && settings !== void 0 ? settings : new SparkScanViewSettings();
        this._controller = SparkScanViewController.forSparkScanView(this, sparkScan, autoCreateNativeView);
    }
    get brush() {
        return this._brush;
    }
    set brush(newValue) {
        this._brush = newValue;
        this.update();
    }
    get previewSizeControlVisible() {
        return this._previewSizeControlVisible;
    }
    set previewSizeControlVisible(newValue) {
        this._previewSizeControlVisible = newValue;
        this.update();
    }
    /**
     * @deprecated This property is deprecated as it's no longer needed.
     */
    get shouldShowScanAreaGuides() {
        console.warn('This property is deprecated as it\'s no longer needed.');
        return this._shouldShowScanAreaGuides;
    }
    /**
     * @deprecated This property is deprecated as it's no longer needed.
     */
    set shouldShowScanAreaGuides(newValue) {
        console.warn('This property is deprecated as it\'s no longer needed.');
        this._shouldShowScanAreaGuides = newValue;
        this.update();
    }
    get torchButtonVisible() {
        return this._torchButtonVisible;
    }
    set torchButtonVisible(newValue) {
        this._torchButtonVisible = newValue;
        this.update();
    }
    get scanningBehaviorButtonVisible() {
        return this._scanningBehaviorButtonVisible;
    }
    set scanningBehaviorButtonVisible(newValue) {
        this._scanningBehaviorButtonVisible = newValue;
        this.update();
    }
    get handModeButtonVisible() {
        return this._handModeButtonVisible;
    }
    set handModeButtonVisible(newValue) {
        this._handModeButtonVisible = newValue;
        this.update();
    }
    get barcodeCountButtonVisible() {
        return this._barcodeCountButtonVisible;
    }
    set barcodeCountButtonVisible(newValue) {
        this._barcodeCountButtonVisible = newValue;
        this.update();
    }
    /**
     * @deprecated This method was renamed. Use onBarcodeFindButtonTappedIn instead.
     */
    get fastFindButtonVisible() {
        console.warn('This property was renamed. Use the property `barcodeFindButtonVisible` instead.');
        return this._fastFindButtonVisible;
    }
    /**
     * @deprecated This method was renamed. Use onBarcodeFindButtonTappedIn instead.
     */
    set fastFindButtonVisible(newValue) {
        // NOOP
        console.warn('This property was renamed. Use the property `barcodeFindButtonVisible` instead.');
    }
    get barcodeFindButtonVisible() {
        return this._barcodeFindButtonVisible;
    }
    set barcodeFindButtonVisible(newValue) {
        this._barcodeFindButtonVisible = newValue;
        this.update();
    }
    get targetModeButtonVisible() {
        return this._targetModeButtonVisible;
    }
    set targetModeButtonVisible(newValue) {
        this._targetModeButtonVisible = newValue;
        this.update();
    }
    /**
     * @deprecated This property is deprecated as sound mode button will be removed in the future.
     */
    get soundModeButtonVisible() {
        console.warn('This property is deprecated as sound mode button will be removed in the future.');
        return this._soundModeButtonVisible;
    }
    /**
     * @deprecated This property is deprecated as sound mode button will be removed in the future.
     */
    set soundModeButtonVisible(newValue) {
        console.warn('This property is deprecated as sound mode button will be removed in the future.');
        this._soundModeButtonVisible = newValue;
        this.update();
    }
    /**
     * @deprecated This property is deprecated as haptic mode button will be removed in the future.
     */
    get hapticModeButtonVisible() {
        console.warn('This property is deprecated as haptic mode button will be removed in the future.');
        return this._hapticModeButtonVisible;
    }
    /**
     * @deprecated This property is deprecated as haptic mode button will be removed in the future.
     */
    set hapticModeButtonVisible(newValue) {
        console.warn('This property is deprecated as haptic mode button will be removed in the future.');
        this._hapticModeButtonVisible = newValue;
        this.update();
    }
    get stopCapturingText() {
        return this._stopCapturingText;
    }
    set stopCapturingText(newValue) {
        this._stopCapturingText = newValue;
        this.update();
    }
    get startCapturingText() {
        return this._startCapturingText;
    }
    set startCapturingText(newValue) {
        this._startCapturingText = newValue;
        this.update();
    }
    get resumeCapturingText() {
        return this._resumeCapturingText;
    }
    set resumeCapturingText(newValue) {
        this._resumeCapturingText = newValue;
        this.update();
    }
    get scanningCapturingText() {
        return this._scanningCapturingText;
    }
    set scanningCapturingText(newValue) {
        this._scanningCapturingText = newValue;
        this.update();
    }
    get captureButtonActiveBackgroundColor() {
        return this._captureButtonActiveBackgroundColor;
    }
    set captureButtonActiveBackgroundColor(newValue) {
        this._captureButtonActiveBackgroundColor = newValue;
        this.update();
    }
    get captureButtonBackgroundColor() {
        return this._captureButtonBackgroundColor;
    }
    set captureButtonBackgroundColor(newValue) {
        this._captureButtonBackgroundColor = newValue;
        this.update();
    }
    get captureButtonTintColor() {
        return this._captureButtonTintColor;
    }
    set captureButtonTintColor(newValue) {
        this._captureButtonTintColor = newValue;
        this.update();
    }
    get toolbarBackgroundColor() {
        return this._toolbarBackgroundColor;
    }
    set toolbarBackgroundColor(newValue) {
        this._toolbarBackgroundColor = newValue;
        this.update();
    }
    get toolbarIconActiveTintColor() {
        return this._toolbarIconActiveTintColor;
    }
    set toolbarIconActiveTintColor(newValue) {
        this._toolbarIconActiveTintColor = newValue;
        this.update();
    }
    get toolbarIconInactiveTintColor() {
        return this._toolbarIconInactiveTintColor;
    }
    set toolbarIconInactiveTintColor(newValue) {
        this._toolbarIconInactiveTintColor = newValue;
        this.update();
    }
    get targetModeHintText() {
        return this._targetModeHintText;
    }
    set targetModeHintText(newValue) {
        this._targetModeHintText = newValue;
        this.update();
    }
    get shouldShowTargetModeHint() {
        return this._shouldShowTargetModeHint;
    }
    set shouldShowTargetModeHint(newValue) {
        this._shouldShowTargetModeHint = newValue;
        this.update();
    }
    get cameraSwitchButtonVisible() {
        return this._cameraSwitchButtonVisible;
    }
    set cameraSwitchButtonVisible(newValue) {
        this._cameraSwitchButtonVisible = newValue;
        this.update();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    emitFeedback(feedback) {
        console.warn('emitFeedback is deprecated and does nothing. Use the property feedbackDelegate instead.');
    }
    showToast(text) {
        this._controller.showToast(text);
    }
    prepareScanning() {
        this._controller.prepareScanning();
    }
    startScanning() {
        this._controller.startScanning();
    }
    pauseScanning() {
        this._controller.pauseScanning();
    }
    stopScanning() {
        this._controller.stopScanning();
    }
    update() {
        return this._controller.update();
    }
    dispose() {
        this._controller.dispose();
    }
    show() {
        return this._show();
    }
    hide() {
        return this._hide();
    }
    get feedbackDelegate() {
        return this._feedbackDelegate;
    }
    set feedbackDelegate(delegate) {
        if (this._feedbackDelegate) {
            this._controller.removeFeedbackDelegate();
        }
        this._feedbackDelegate = delegate;
        if (delegate) {
            this._controller.addFeedbackDelegate();
        }
    }
    _show() {
        if (!this.context) {
            throw new Error('There should be a context attached to a view that should be shown');
        }
        return this._controller.show();
    }
    _hide() {
        if (!this.context) {
            throw new Error('There should be a context attached to a view that should be shown');
        }
        return this._controller.hide();
    }
    static get sparkScanDefaults() {
        return getSparkScanDefaults();
    }
    toJSON() {
        var _a;
        const json = {
            brush: this._brush.toJSON(),
            torchButtonVisible: this.torchButtonVisible,
            scanningBehaviorButtonVisible: this.scanningBehaviorButtonVisible,
            handModeButtonVisible: this.handModeButtonVisible,
            barcodeCountButtonVisible: this.barcodeCountButtonVisible,
            barcodeFindButtonVisible: this.barcodeFindButtonVisible,
            targetModeButtonVisible: this.targetModeButtonVisible,
            soundModeButtonVisible: this.soundModeButtonVisible,
            hapticModeButtonVisible: this.hapticModeButtonVisible,
            stopCapturingText: this.stopCapturingText,
            startCapturingText: this.startCapturingText,
            resumeCapturingText: this.resumeCapturingText,
            scanningCapturingText: this.scanningCapturingText,
            captureButtonActiveBackgroundColor: this.captureButtonActiveBackgroundColor,
            captureButtonBackgroundColor: this.captureButtonBackgroundColor,
            captureButtonTintColor: this.captureButtonTintColor,
            toolbarBackgroundColor: this.toolbarBackgroundColor,
            toolbarIconActiveTintColor: this.toolbarIconActiveTintColor,
            toolbarIconInactiveTintColor: this.toolbarIconInactiveTintColor,
            targetModeHintText: this.targetModeHintText,
            shouldShowTargetModeHint: this.shouldShowTargetModeHint,
            hasFeedbackDelegate: this._feedbackDelegate != null,
            cameraSwitchButtonVisible: this.cameraSwitchButtonVisible,
        };
        if (this._viewSettings != null) {
            json.viewSettings = (_a = this._viewSettings) === null || _a === void 0 ? void 0 : _a.toJSON();
        }
        return json;
    }
}

class SparkScanBarcodeFeedback extends DefaultSerializeable {
    constructor() {
        super();
    }
}

class SparkScanBarcodeErrorFeedback extends SparkScanBarcodeFeedback {
    get message() {
        return this._barcodeFeedback.message;
    }
    get resumeCapturingDelay() {
        return this._barcodeFeedback.resumeCapturingDelay;
    }
    get visualFeedbackColor() {
        return this._barcodeFeedback.visualFeedbackColor;
    }
    get brush() {
        return this._barcodeFeedback.brush;
    }
    get feedback() {
        return this._barcodeFeedback.feedback;
    }
    constructor(message, resumeCapturingDelay, visualFeedbackColor, brush, feedback) {
        super();
        this.type = 'error';
        this._barcodeFeedback = {
            message: message,
            resumeCapturingDelay: resumeCapturingDelay,
            visualFeedbackColor: visualFeedbackColor,
            brush: brush,
            feedback: feedback
        };
    }
    static fromMessage(message, resumeCapturingDelay) {
        return new SparkScanBarcodeErrorFeedback(message, resumeCapturingDelay, SparkScanBarcodeErrorFeedback.sparkScanDefaults.Feedback.error.visualFeedbackColor, SparkScanBarcodeErrorFeedback.sparkScanDefaults.Feedback.error.brush, SparkScanBarcodeErrorFeedback.sparkScanDefaults.Feedback.error.feedbackDefault);
    }
    static get sparkScanDefaults() {
        return getSparkScanDefaults();
    }
}
__decorate([
    nameForSerialization('barcodeFeedback')
], SparkScanBarcodeErrorFeedback.prototype, "_barcodeFeedback", void 0);
__decorate([
    ignoreFromSerialization
], SparkScanBarcodeErrorFeedback, "sparkScanDefaults", null);

class SparkScanBarcodeSuccessFeedback extends SparkScanBarcodeFeedback {
    get visualFeedbackColor() {
        return this._barcodeFeedback.visualFeedbackColor;
    }
    get brush() {
        return this._barcodeFeedback.brush;
    }
    get feedback() {
        return this._barcodeFeedback.feedback;
    }
    constructor() {
        super();
        this.type = 'success';
        this._barcodeFeedback = {
            visualFeedbackColor: SparkScanBarcodeSuccessFeedback.sparkScanDefaults.Feedback.success.visualFeedbackColor,
            brush: SparkScanBarcodeSuccessFeedback.sparkScanDefaults.Feedback.success.brush,
            feedback: SparkScanBarcodeSuccessFeedback.sparkScanDefaults.Feedback.success.feedbackDefault
        };
    }
    static fromVisualFeedbackColor(visualFeedbackColor, brush, feedback) {
        const successFeedback = new SparkScanBarcodeSuccessFeedback();
        successFeedback._barcodeFeedback = {
            visualFeedbackColor: visualFeedbackColor,
            brush: brush,
            feedback: feedback
        };
        return successFeedback;
    }
    static get sparkScanDefaults() {
        return getSparkScanDefaults();
    }
}
__decorate([
    nameForSerialization('barcodeFeedback')
], SparkScanBarcodeSuccessFeedback.prototype, "_barcodeFeedback", void 0);
__decorate([
    ignoreFromSerialization
], SparkScanBarcodeSuccessFeedback, "sparkScanDefaults", null);

class BarcodePickScanningSession {
    get pickedItems() {
        return this._pickedItems;
    }
    get scannedItems() {
        return this._scannedItems;
    }
    static fromJSON(json) {
        const session = new BarcodePickScanningSession();
        session._pickedItems = json.pickedObjects;
        session._scannedItems = json.scannedObjects;
        return session;
    }
}

var BarcodePickListenerEvents;
(function (BarcodePickListenerEvents) {
    BarcodePickListenerEvents["DidCompleteScanningSession"] = "BarcodePickScanningListener.didCompleteScanningSession";
    BarcodePickListenerEvents["DidUpdateScanningSession"] = "BarcodePickScanningListener.didUpdateScanningSession";
})(BarcodePickListenerEvents || (BarcodePickListenerEvents = {}));
class BarcodePickListenerController extends BaseController {
    constructor(barcodePick) {
        super('BarcodePickListenerProxy');
        this._barcodePick = barcodePick;
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    static forBarcodePick(barcodePick) {
        return new BarcodePickListenerController(barcodePick);
    }
    subscribeListeners() {
        this._proxy.subscribeBarcodePickListeners();
        this.eventEmitter.on(BarcodePickListenerEvents.DidCompleteScanningSession, (body) => {
            const payload = JSON.parse(body);
            const session = BarcodePickScanningSession
                .fromJSON(JSON.parse(payload.session));
            this.notifyListenersOfDidCompleteScanningSession(session);
        });
        this.eventEmitter.on(BarcodePickListenerEvents.DidUpdateScanningSession, (body) => {
            const payload = JSON.parse(body);
            const session = BarcodePickScanningSession
                .fromJSON(JSON.parse(payload.session));
            this.notifyListenersOfDidUpdateScanningSession(session);
        });
    }
    notifyListenersOfDidCompleteScanningSession(session) {
        const mode = this._barcodePick;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(listener => {
            if (listener.didCompleteScanningSession) {
                listener.didCompleteScanningSession(this._barcodePick, session);
            }
        });
        mode.isInListenerCallback = false;
    }
    notifyListenersOfDidUpdateScanningSession(session) {
        const mode = this._barcodePick;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(listener => {
            if (listener.didUpdateScanningSession) {
                listener.didUpdateScanningSession(this._barcodePick, session);
            }
        });
        mode.isInListenerCallback = false;
    }
    unsubscribeListeners() {
        this.eventEmitter.removeAllListeners(BarcodePickListenerEvents.DidCompleteScanningSession);
        this.eventEmitter.removeAllListeners(BarcodePickListenerEvents.DidUpdateScanningSession);
        this._proxy.unsubscribeBarcodePickListeners();
    }
}

class BarcodePick extends DefaultSerializeable {
    static createRecommendedCameraSettings() {
        return BarcodePick.barcodePickDefaults.RecommendedCameraSettings;
    }
    static get barcodePickDefaults() {
        return getBarcodePickDefaults();
    }
    static get recommendedCameraSettings() {
        return BarcodePick.barcodePickDefaults.RecommendedCameraSettings;
    }
    constructor(dataCaptureContext, settings, productProvider) {
        super();
        this.type = 'barcodePick';
        this.listeners = [];
        this.privateContext = dataCaptureContext;
        this._settings = settings;
        this._productProvider = productProvider;
        this._listenerController = BarcodePickListenerController.forBarcodePick(this);
    }
    addScanningListener(listener) {
        this.checkAndSubscribeListeners();
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    }
    checkAndSubscribeListeners() {
        if (this.listeners.length === 0) {
            this._listenerController.subscribeListeners();
        }
    }
    removeScanningListener(listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener));
        this.checkAndUnsubscribeListeners();
    }
    checkAndUnsubscribeListeners() {
        if (this.listeners.length === 0) {
            this._listenerController.unsubscribeListeners();
        }
    }
    unsubscribeNativeListeners() {
        this._productProvider._productController.dispose();
    }
}
__decorate([
    ignoreFromSerialization
], BarcodePick.prototype, "privateContext", void 0);
__decorate([
    ignoreFromSerialization
], BarcodePick.prototype, "_listenerController", void 0);
__decorate([
    ignoreFromSerialization
], BarcodePick.prototype, "listeners", void 0);
__decorate([
    nameForSerialization('settings')
], BarcodePick.prototype, "_settings", void 0);
__decorate([
    nameForSerialization('ProductProvider')
], BarcodePick.prototype, "_productProvider", void 0);
__decorate([
    ignoreFromSerialization
], BarcodePick, "barcodePickDefaults", null);

class BarcodePickActionCallback {
    onFinish(result) {
        this._viewController.finishPickAction(this._itemData, result);
    }
}

var BarcodePickViewListenerEvents;
(function (BarcodePickViewListenerEvents) {
    BarcodePickViewListenerEvents["DidStartScanning"] = "BarcodePickViewListener.didStartScanning";
    BarcodePickViewListenerEvents["DidFreezeScanning"] = "BarcodePickViewListener.didFreezeScanning";
    BarcodePickViewListenerEvents["DidPauseScanning"] = "BarcodePickViewListener.didPauseScanning";
    BarcodePickViewListenerEvents["DidStopScanning"] = "BarcodePickViewListener.didStopScanning";
})(BarcodePickViewListenerEvents || (BarcodePickViewListenerEvents = {}));
var BarcodePickViewUiListenerEvents;
(function (BarcodePickViewUiListenerEvents) {
    BarcodePickViewUiListenerEvents["DidTapFinishButton"] = "BarcodePickViewUiListener.didTapFinishButton";
})(BarcodePickViewUiListenerEvents || (BarcodePickViewUiListenerEvents = {}));
var BarcodePickEvents;
(function (BarcodePickEvents) {
    BarcodePickEvents["DidPick"] = "BarcodePickActionListener.didPick";
    BarcodePickEvents["DidUnpick"] = "BarcodePickActionListener.didUnpick";
    BarcodePickEvents["OnProductIdentifierForItems"] = "BarcodePickAsyncMapperProductProviderCallback.onProductIdentifierForItems";
})(BarcodePickEvents || (BarcodePickEvents = {}));
class BarcodePickViewController extends BaseController {
    static forBarcodePick(view, nativeView) {
        const viewController = new BarcodePickViewController();
        viewController.view = view;
        viewController.nativeView = nativeView;
        viewController.initialize();
        return viewController;
    }
    constructor() {
        super('BarcodePickViewProxy');
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            // We call update because it returns a promise, this guarantees, that by the time
            // we need the deserialized context, it will be set in the native layer.
            yield this.view.context.update();
            this.create();
        });
    }
    start() {
        return this._proxy.viewStart();
    }
    stop() {
        return this._proxy.viewStop();
    }
    freeze() {
        return this._proxy.viewFreeze();
    }
    pause() {
        return this._proxy.viewPause();
    }
    resume() {
        return this._proxy.viewResume();
    }
    finishPickAction(itemData, result) {
        return this._proxy.finishPickAction(itemData, result);
    }
    create() {
        const barcodePickView = this.view.toJSON();
        const json = JSON.stringify(barcodePickView);
        const id = this._proxy.findNodeHandle(this.nativeView);
        return this._proxy.createView(id, json);
    }
    dispose() {
        this.unsubscribeListeners();
    }
    setUiListener(listener) {
        return __awaiter(this, void 0, void 0, function* () {
            if (listener) {
                yield this._proxy.subscribeBarcodePickViewUiListener();
            }
            if (listener == null) {
                yield this._proxy.unsubscribeBarcodePickViewUiListener();
            }
        });
    }
    subscribeListeners() {
        this._proxy.registerFrameworkEvents();
        this.eventEmitter.on(BarcodePickEvents.DidPick, (data) => {
            const payload = JSON.parse(data);
            const barcodePickActionCallback = new BarcodePickActionCallback();
            barcodePickActionCallback._viewController = this;
            barcodePickActionCallback._itemData = payload.itemData;
            this.view.actionListeners
                .forEach(listener => listener.didPickItem(payload.itemData, barcodePickActionCallback));
        });
        this.eventEmitter.on(BarcodePickEvents.DidUnpick, (data) => {
            const payload = JSON.parse(data);
            const barcodePickActionCallback = new BarcodePickActionCallback();
            barcodePickActionCallback._viewController = this;
            barcodePickActionCallback._itemData = payload.itemData;
            this.view.actionListeners
                .forEach(listener => listener.didUnpickItem(payload.itemData, barcodePickActionCallback));
        });
        this.eventEmitter.on(BarcodePickViewUiListenerEvents.DidTapFinishButton, () => {
            var _a, _b;
            if (!this.view.uiListener) {
                return;
            }
            (_b = (_a = this.view) === null || _a === void 0 ? void 0 : _a.uiListener) === null || _b === void 0 ? void 0 : _b.didTapFinishButton(this);
        });
        this.eventEmitter.on(BarcodePickViewListenerEvents.DidStartScanning, () => {
            this.view.listeners
                .forEach(listener => listener.didStartScanning(this.view));
        });
        this.eventEmitter.on(BarcodePickViewListenerEvents.DidFreezeScanning, () => {
            this.view.listeners
                .forEach(listener => listener.didFreezeScanning(this.view));
        });
        this.eventEmitter.on(BarcodePickViewListenerEvents.DidPauseScanning, () => {
            this.view.listeners
                .forEach(listener => listener.didPauseScanning(this.view));
        });
        this.eventEmitter.on(BarcodePickViewListenerEvents.DidStopScanning, () => {
            this.view.listeners
                .forEach(listener => listener.didStopScanning(this.view));
        });
    }
    unsubscribeListeners() {
        this._proxy.unregisterFrameworkEvents();
        this.eventEmitter.removeAllListeners(BarcodePickEvents.DidPick);
        this.eventEmitter.removeAllListeners(BarcodePickEvents.DidUnpick);
        this.eventEmitter.removeAllListeners(BarcodePickViewListenerEvents.DidFreezeScanning);
        this.eventEmitter.removeAllListeners(BarcodePickViewListenerEvents.DidPauseScanning);
        this.eventEmitter.removeAllListeners(BarcodePickViewListenerEvents.DidStartScanning);
        this.eventEmitter.removeAllListeners(BarcodePickViewListenerEvents.DidStopScanning);
        this.eventEmitter.removeAllListeners(BarcodePickViewUiListenerEvents.DidTapFinishButton);
    }
}

class BarcodePickProductController extends BaseController {
    static create(callback) {
        const controller = new BarcodePickProductController();
        controller.barcodePickMapperCallback = callback;
        controller.subscribeListeners();
        return controller;
    }
    constructor() {
        super('BarcodePickProductProxy');
    }
    finishOnProductIdentifierForItems(data) {
        return this._proxy.finishOnProductIdentifierForItems(JSON.stringify(data));
    }
    dispose() {
        this.unsubscribeListeners();
    }
    subscribeListeners() {
        this._proxy.subscribeProductIdentifierForItemsListener();
        this.eventEmitter.on(BarcodePickEvents.OnProductIdentifierForItems, (data) => {
            const payload = JSON.parse(data);
            this.barcodePickMapperCallback.productIdentifierForItems(payload.itemsData, {
                onData: (callbackItems) => {
                    this.finishOnProductIdentifierForItems(callbackItems);
                }
            });
        });
    }
    unsubscribeListeners() {
        this.eventEmitter.removeAllListeners(BarcodePickEvents.OnProductIdentifierForItems);
        this._proxy.unsubscribeListeners();
    }
}

class BarcodePickAsyncMapperProductProvider extends DefaultSerializeable {
    constructor(productsToPick, callback) {
        super();
        this._productsToPickForSerialization = {};
        this._productController = BarcodePickProductController.create(callback);
        this._productsToPick = productsToPick;
        productsToPick.forEach((product) => {
            this._productsToPickForSerialization[product.identifier] = product.quantityToPick;
        });
        this._callback = callback;
    }
}
__decorate([
    ignoreFromSerialization
], BarcodePickAsyncMapperProductProvider.prototype, "_callback", void 0);
__decorate([
    ignoreFromSerialization
], BarcodePickAsyncMapperProductProvider.prototype, "_productController", void 0);
__decorate([
    ignoreFromSerialization
], BarcodePickAsyncMapperProductProvider.prototype, "_productsToPick", void 0);
__decorate([
    nameForSerialization('products')
], BarcodePickAsyncMapperProductProvider.prototype, "_productsToPickForSerialization", void 0);

var BarcodePickIconStyle;
(function (BarcodePickIconStyle) {
    BarcodePickIconStyle["Preset_1"] = "preset1";
    BarcodePickIconStyle["Preset_2"] = "preset2";
})(BarcodePickIconStyle || (BarcodePickIconStyle = {}));

class BarcodePickProduct extends DefaultSerializeable {
    constructor(identifier, quantityToPick) {
        super();
        this._identifier = identifier;
        this._quantityToPick = quantityToPick;
    }
    get identifier() {
        return this._identifier;
    }
    get quantityToPick() {
        return this._quantityToPick;
    }
}
__decorate([
    nameForSerialization('identifier')
], BarcodePickProduct.prototype, "_identifier", void 0);
__decorate([
    nameForSerialization('quantityToPick')
], BarcodePickProduct.prototype, "_quantityToPick", void 0);

class BarcodePickProductProviderCallback {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    onData(data) {
    }
}

class BarcodePickProductProviderCallbackItem extends DefaultSerializeable {
    constructor(itemData, productIdentifier) {
        super();
        this._productIdentifier = null;
        this._itemData = itemData;
        this._productIdentifier = productIdentifier;
    }
    get itemData() {
        return this._itemData;
    }
    get productIdentifier() {
        return this._productIdentifier;
    }
}
__decorate([
    nameForSerialization('itemData')
], BarcodePickProductProviderCallbackItem.prototype, "_itemData", void 0);
__decorate([
    nameForSerialization('productIdentifier')
], BarcodePickProductProviderCallbackItem.prototype, "_productIdentifier", void 0);

class BarcodePickSettings extends DefaultSerializeable {
    static get barcodePickDefaults() {
        return FactoryMaker.getInstance('BarcodePickDefaults');
    }
    constructor() {
        super();
        this.symbologies = {};
        this.properties = {};
        this._soundEnabled = BarcodePickSettings.barcodePickDefaults.BarcodePickSettings.soundEnabled;
        this._hapticsEnabled = BarcodePickSettings.barcodePickDefaults.BarcodePickSettings.hapticsEnabled;
        this._cachingEnabled = BarcodePickSettings.barcodePickDefaults.BarcodePickSettings.cachingEnabled;
        this._arucoDictionary = BarcodePickSettings.barcodePickDefaults.BarcodePickSettings.arucoDictionary;
    }
    settingsForSymbology(symbology) {
        if (!this.symbologies[symbology]) {
            const symbologySettings = BarcodePickSettings.barcodePickDefaults.SymbologySettings[symbology];
            symbologySettings._symbology = symbology;
            this.symbologies[symbology] = symbologySettings;
        }
        return this.symbologies[symbology];
    }
    get enabledSymbologies() {
        return Object.keys(this.symbologies)
            .filter(symbology => this.symbologies[symbology].isEnabled);
    }
    enableSymbologies(symbologies) {
        symbologies.forEach(symbology => this.enableSymbology(symbology, true));
    }
    enableSymbology(symbology, enabled) {
        this.settingsForSymbology(symbology).isEnabled = enabled;
    }
    setProperty(name, value) {
        this.properties[name] = value;
    }
    getProperty(name) {
        return this.properties[name];
    }
    get soundEnabled() {
        return this._soundEnabled;
    }
    set soundEnabled(enabled) {
        this._soundEnabled = enabled;
    }
    get hapticsEnabled() {
        return this._hapticsEnabled;
    }
    set hapticsEnabled(enabled) {
        this._hapticsEnabled = enabled;
    }
    setArucoDictionary(dictionary) {
        this._arucoDictionary = dictionary;
    }
    get cachingEnabled() {
        return this._cachingEnabled;
    }
    set cachingEnabled(enabled) {
        this._cachingEnabled = enabled;
    }
}
__decorate([
    nameForSerialization('soundEnabled')
], BarcodePickSettings.prototype, "_soundEnabled", void 0);
__decorate([
    nameForSerialization('hapticEnabled')
], BarcodePickSettings.prototype, "_hapticsEnabled", void 0);
__decorate([
    nameForSerialization('cachingEnabled')
], BarcodePickSettings.prototype, "_cachingEnabled", void 0);
__decorate([
    nameForSerialization('arucoDictionary')
], BarcodePickSettings.prototype, "_arucoDictionary", void 0);
__decorate([
    ignoreFromSerialization
], BarcodePickSettings, "barcodePickDefaults", null);

var BarcodePickState;
(function (BarcodePickState) {
    BarcodePickState["Ignore"] = "ignore";
    BarcodePickState["Picked"] = "picked";
    BarcodePickState["ToPick"] = "toPick";
    BarcodePickState["Unknown"] = "unknown";
})(BarcodePickState || (BarcodePickState = {}));

class BaseBarcodePickView extends DefaultSerializeable {
    get context() {
        return this._context;
    }
    set context(context) {
        this._context = context;
    }
    get uiListener() {
        return this._barcodePickViewUiListener;
    }
    set uiListener(value) {
        this._barcodePickViewUiListener = value;
        this.viewController.setUiListener(value);
    }
    constructor({ context, barcodePick, settings, cameraSettings }) {
        super();
        this.actionListeners = [];
        this.listeners = [];
        this.isStarted = false;
        this._context = null;
        this._barcodePickViewUiListener = null;
        this.context = context;
        this.barcodePick = barcodePick;
        this.settings = settings;
        this.cameraSettings = cameraSettings;
        this.barcodePick.privateContext = context;
    }
    initialize(nativeView) {
        this.viewController = BarcodePickViewController.forBarcodePick(this, nativeView);
    }
    dispose() {
        this.viewController.dispose();
        this.barcodePick.unsubscribeNativeListeners();
    }
    start() {
        this.isStarted = true;
        this.viewController.start();
    }
    stop() {
        this.viewController.stop();
    }
    freeze() {
        this.viewController.freeze();
    }
    pause() {
        this.viewController.pause();
    }
    resume() {
        this.viewController.resume();
    }
    addActionListener(listener) {
        if (this.actionListeners.findIndex(l => l === listener) === -1) {
            this.actionListeners.push(listener);
        }
    }
    removeActionListener(listener) {
        if (this.actionListeners.findIndex(l => l === listener) === -1) {
            return;
        }
        this.actionListeners.splice(this.actionListeners.indexOf(listener), 1);
    }
    addListener(listener) {
        this.checkAndSubscribeListeners();
        if (this.listeners.findIndex(l => l === listener) === -1) {
            this.listeners.push(listener);
        }
    }
    checkAndSubscribeListeners() {
        if (this.listeners.length === 0) {
            this.viewController.subscribeListeners();
        }
    }
    removeListener(listener) {
        if (this.listeners.findIndex(l => l === listener) === -1) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener), 1);
        this.checkAndUnsubscribeListeners();
    }
    checkAndUnsubscribeListeners() {
        if (this.listeners.length === 0) {
            this.viewController.unsubscribeListeners();
        }
    }
    toJSON() {
        return {
            View: {
                hasActionListeners: this.actionListeners.length > 0,
                hasViewListeners: this.listeners.length > 0,
                hasViewUiListener: this.uiListener ? true : false,
                isStarted: this.isStarted,
                viewSettings: this.settings.toJSON(),
                cameraSettings: this.cameraSettings.toJSON(),
            },
            BarcodePick: this.barcodePick.toJSON()
        };
    }
}
__decorate([
    ignoreFromSerialization
], BaseBarcodePickView.prototype, "viewController", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodePickView.prototype, "actionListeners", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodePickView.prototype, "listeners", void 0);
__decorate([
    nameForSerialization('isStarted')
], BaseBarcodePickView.prototype, "isStarted", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodePickView.prototype, "_context", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodePickView.prototype, "_barcodePickViewUiListener", void 0);

class BarcodePickViewSettings extends DefaultSerializeable {
    static get barcodePickDefaults() {
        return getBarcodePickDefaults();
    }
    constructor() {
        super();
        this._highlightStyle = BarcodePickViewSettings.barcodePickDefaults.ViewSettings.highlightStyle;
        this._showLoadingDialog = BarcodePickViewSettings.barcodePickDefaults.ViewSettings.showLoadingDialog;
        this._showFinishButton = BarcodePickViewSettings.barcodePickDefaults.ViewSettings.showFinishButton;
        this._showPauseButton = BarcodePickViewSettings.barcodePickDefaults.ViewSettings.showPauseButton;
        this._showZoomButton = BarcodePickViewSettings.barcodePickDefaults.ViewSettings.showZoomButton;
        this._loadingDialogText = BarcodePickViewSettings.barcodePickDefaults.ViewSettings.loadingDialogText;
        this._showGuidelines = BarcodePickViewSettings.barcodePickDefaults.ViewSettings.showGuidelines;
        this._initialGuidelineText = BarcodePickViewSettings.barcodePickDefaults.ViewSettings.initialGuidelineText;
        this._moveCloserGuidelineText = BarcodePickViewSettings.barcodePickDefaults.ViewSettings.moveCloserGuidelineText;
        this._showHints = BarcodePickViewSettings.barcodePickDefaults.ViewSettings.showHints;
        this._onFirstItemToPickFoundHintText = BarcodePickViewSettings.barcodePickDefaults.ViewSettings.onFirstItemToPickFoundHintText;
        this._onFirstItemPickCompletedHintText = BarcodePickViewSettings.barcodePickDefaults.ViewSettings.onFirstItemUnpickCompletedHintText;
        this._onFirstUnmarkedItemPickCompletedHintText = BarcodePickViewSettings.barcodePickDefaults.ViewSettings.onFirstUnmarkedItemPickCompletedHintText;
        this._onFirstItemUnpickCompletedHintText = BarcodePickViewSettings.barcodePickDefaults.ViewSettings.onFirstItemUnpickCompletedHintText;
    }
    get highlightStyle() {
        return this._highlightStyle;
    }
    set highlightStyle(style) {
        this._highlightStyle = style;
    }
    get showLoadingDialog() {
        return this._showLoadingDialog;
    }
    set showLoadingDialog(style) {
        this._showLoadingDialog = style;
    }
    get showFinishButton() {
        return this._showFinishButton;
    }
    set showFinishButton(show) {
        this._showFinishButton = show;
    }
    get showPauseButton() {
        return this._showPauseButton;
    }
    set showPauseButton(show) {
        this._showPauseButton = show;
    }
    get showZoomButton() {
        return this._showZoomButton;
    }
    set showZoomButton(show) {
        this._showZoomButton = show;
    }
    get loadingDialogText() {
        return this._loadingDialogText;
    }
    set loadingDialogText(text) {
        this._loadingDialogText = text;
    }
    get showGuidelines() {
        return this._showGuidelines;
    }
    set showGuidelines(show) {
        this._showGuidelines = show;
    }
    get initialGuidelineText() {
        return this._initialGuidelineText;
    }
    set initialGuidelineText(text) {
        this._initialGuidelineText = text;
    }
    get moveCloserGuidelineText() {
        return this._moveCloserGuidelineText;
    }
    set moveCloserGuidelineText(text) {
        this._moveCloserGuidelineText = text;
    }
    get showHints() {
        return this._showHints;
    }
    set showHints(show) {
        this._showHints = show;
    }
    get onFirstItemToPickFoundHintText() {
        return this._onFirstItemToPickFoundHintText;
    }
    set onFirstItemToPickFoundHintText(text) {
        this._onFirstItemToPickFoundHintText = text;
    }
    get onFirstItemPickCompletedHintText() {
        return this._onFirstItemPickCompletedHintText;
    }
    set onFirstItemPickCompletedHintText(text) {
        this._onFirstItemPickCompletedHintText = text;
    }
    get onFirstUnmarkedItemPickCompletedHintText() {
        return this._onFirstUnmarkedItemPickCompletedHintText;
    }
    set onFirstUnmarkedItemPickCompletedHintText(text) {
        this._onFirstUnmarkedItemPickCompletedHintText = text;
    }
    get onFirstItemUnpickCompletedHintText() {
        return this._onFirstItemUnpickCompletedHintText;
    }
    set onFirstItemUnpickCompletedHintText(text) {
        this._onFirstItemUnpickCompletedHintText = text;
    }
}
__decorate([
    nameForSerialization('highlightStyle')
], BarcodePickViewSettings.prototype, "_highlightStyle", void 0);
__decorate([
    nameForSerialization('shouldShowLoadingDialog')
], BarcodePickViewSettings.prototype, "_showLoadingDialog", void 0);
__decorate([
    nameForSerialization('showFinishButton')
], BarcodePickViewSettings.prototype, "_showFinishButton", void 0);
__decorate([
    nameForSerialization('showPauseButton')
], BarcodePickViewSettings.prototype, "_showPauseButton", void 0);
__decorate([
    nameForSerialization('showZoomButton')
], BarcodePickViewSettings.prototype, "_showZoomButton", void 0);
__decorate([
    nameForSerialization('showLoadingDialogText')
], BarcodePickViewSettings.prototype, "_loadingDialogText", void 0);
__decorate([
    nameForSerialization('shouldShowGuidelines')
], BarcodePickViewSettings.prototype, "_showGuidelines", void 0);
__decorate([
    nameForSerialization('initialGuidelineText')
], BarcodePickViewSettings.prototype, "_initialGuidelineText", void 0);
__decorate([
    nameForSerialization('moveCloserGuidelineText')
], BarcodePickViewSettings.prototype, "_moveCloserGuidelineText", void 0);
__decorate([
    nameForSerialization('shouldShowHints')
], BarcodePickViewSettings.prototype, "_showHints", void 0);
__decorate([
    nameForSerialization('onFirstItemToPickFoundHintText')
], BarcodePickViewSettings.prototype, "_onFirstItemToPickFoundHintText", void 0);
__decorate([
    nameForSerialization('onFirstItemPickCompletedHintText')
], BarcodePickViewSettings.prototype, "_onFirstItemPickCompletedHintText", void 0);
__decorate([
    nameForSerialization('onFirstUnmarkedItemPickCompletedHintText')
], BarcodePickViewSettings.prototype, "_onFirstUnmarkedItemPickCompletedHintText", void 0);
__decorate([
    nameForSerialization('onFirstItemUnpickCompletedHintText')
], BarcodePickViewSettings.prototype, "_onFirstItemUnpickCompletedHintText", void 0);
__decorate([
    ignoreFromSerialization
], BarcodePickViewSettings, "barcodePickDefaults", null);

class BrushForStateObject extends DefaultSerializeable {
}
__decorate([
    nameForSerialization('barcodePickState')
], BrushForStateObject.prototype, "barcodePickState", void 0);
__decorate([
    nameForSerialization('brush')
], BrushForStateObject.prototype, "brush", void 0);

class BarcodePickStatusIconSettings extends DefaultSerializeable {
    constructor() {
        super(...arguments);
        this._ratioToHighlightSize = BarcodePickStatusIconSettings.barcodePickDefaults.BarcodePickStatusIconSettings.ratioToHighlightSize;
        this._minSize = BarcodePickStatusIconSettings.barcodePickDefaults.BarcodePickStatusIconSettings.minSize;
        this._maxSize = BarcodePickStatusIconSettings.barcodePickDefaults.BarcodePickStatusIconSettings.maxSize;
    }
    get ratioToHighlightSize() {
        return this._ratioToHighlightSize;
    }
    set ratioToHighlightSize(value) {
        this._ratioToHighlightSize = value;
    }
    get minSize() {
        return this._minSize;
    }
    set minSize(value) {
        this._minSize = value;
    }
    get maxSize() {
        return this._maxSize;
    }
    set maxSize(value) {
        this._maxSize = value;
    }
    static get barcodePickDefaults() {
        return getBarcodePickDefaults();
    }
    static fromJSON(json) {
        if (json == undefined) {
            return null;
        }
        const barcodePickStatusIconSettings = new BarcodePickStatusIconSettings();
        barcodePickStatusIconSettings._ratioToHighlightSize = json === null || json === void 0 ? void 0 : json.ratioToHighlightSize;
        barcodePickStatusIconSettings._minSize = json === null || json === void 0 ? void 0 : json.minSize;
        barcodePickStatusIconSettings._maxSize = json === null || json === void 0 ? void 0 : json.maxSize;
        return barcodePickStatusIconSettings;
    }
}
__decorate([
    nameForSerialization('ratioToHighlightSize')
], BarcodePickStatusIconSettings.prototype, "_ratioToHighlightSize", void 0);
__decorate([
    nameForSerialization('minSize')
], BarcodePickStatusIconSettings.prototype, "_minSize", void 0);
__decorate([
    nameForSerialization('maxSize')
], BarcodePickStatusIconSettings.prototype, "_maxSize", void 0);
__decorate([
    ignoreFromSerialization
], BarcodePickStatusIconSettings, "barcodePickDefaults", null);

class Dot extends DefaultSerializeable {
    static get barcodePickDefaults() {
        return getBarcodePickDefaults();
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
        super();
        this._type = 'dot';
        this._brushesForState = Dot.barcodePickDefaults.BarcodePickViewHighlightStyle.Dot.brushesForState;
    }
    getBrushForState(state) {
        return (this._brushesForState.filter(item => item.barcodePickState === state)[0] || {}).brush;
    }
    setBrushForState(brush, state) {
        const indexToUpdate = this._brushesForState.findIndex(item => item.barcodePickState === state);
        this._brushesForState[indexToUpdate].brush = brush;
    }
}
__decorate([
    nameForSerialization('type')
], Dot.prototype, "_type", void 0);
__decorate([
    nameForSerialization('brushesForState')
], Dot.prototype, "_brushesForState", void 0);
__decorate([
    ignoreFromSerialization
], Dot, "barcodePickDefaults", null);

class IconForStateObject extends DefaultSerializeable {
    constructor(barcodePickState, icon) {
        super();
        this._barcodePickState = barcodePickState;
        this._icon = icon;
    }
    get barcodePickState() {
        return this._barcodePickState;
    }
    get icon() {
        return this._icon;
    }
}
__decorate([
    nameForSerialization('barcodePickState')
], IconForStateObject.prototype, "_barcodePickState", void 0);
__decorate([
    nameForSerialization('icon')
], IconForStateObject.prototype, "_icon", void 0);

class DotWithIcons extends DefaultSerializeable {
    static get barcodePickDefaults() {
        return getBarcodePickDefaults();
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
        super();
        this._type = 'dotWithIcons';
        this._brushesForState = DotWithIcons.barcodePickDefaults.BarcodePickViewHighlightStyle.DotWithIcons.brushesForState;
        this._iconsForState = [];
        this._iconStyle = DotWithIcons.barcodePickDefaults.BarcodePickViewHighlightStyle.DotWithIcons.iconStyle;
    }
    getBrushForState(state) {
        return (this._brushesForState.filter(item => item.barcodePickState === state)[0] || {}).brush;
    }
    setBrushForState(brush, state) {
        const indexToUpdate = this._brushesForState.findIndex(item => item.barcodePickState === state);
        this._brushesForState[indexToUpdate].brush = brush;
    }
    setIconForState(image, state) {
        const indexToUpdate = this._iconsForState.findIndex(item => item.barcodePickState === state);
        if (indexToUpdate > -1) {
            this._iconsForState.splice(indexToUpdate, 1);
        }
        this._iconsForState.push(new IconForStateObject(state, image));
    }
    get iconStyle() {
        return this._iconStyle;
    }
    set iconStyle(style) {
        this._iconStyle = style;
    }
}
__decorate([
    nameForSerialization('type')
], DotWithIcons.prototype, "_type", void 0);
__decorate([
    nameForSerialization('brushesForState')
], DotWithIcons.prototype, "_brushesForState", void 0);
__decorate([
    nameForSerialization('iconsForState')
], DotWithIcons.prototype, "_iconsForState", void 0);
__decorate([
    nameForSerialization('iconStyle')
], DotWithIcons.prototype, "_iconStyle", void 0);
__decorate([
    ignoreFromSerialization
], DotWithIcons, "barcodePickDefaults", null);

class Rectangular extends DefaultSerializeable {
    static get barcodePickDefaults() {
        return getBarcodePickDefaults();
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
        super();
        this._type = 'rectangular';
        this._brushesForState = Rectangular.barcodePickDefaults.BarcodePickViewHighlightStyle.Rectangular.brushesForState;
        this._minimumHighlightWidth = Rectangular.barcodePickDefaults.BarcodePickViewHighlightStyle.RectangularWithIcons.minimumHighlightWidth;
        this._minimumHighlightHeight = Rectangular.barcodePickDefaults.BarcodePickViewHighlightStyle.RectangularWithIcons.minimumHighlightHeight;
    }
    getBrushForState(state) {
        return (this._brushesForState.filter(item => item.barcodePickState === state)[0] || {}).brush;
    }
    setBrushForState(brush, state) {
        const indexToUpdate = this._brushesForState.findIndex(item => item.barcodePickState === state);
        this._brushesForState[indexToUpdate].brush = brush;
    }
    get minimumHighlightHeight() {
        return this._minimumHighlightHeight;
    }
    set minimumHighlightHeight(value) {
        this._minimumHighlightHeight = value;
    }
    get minimumHighlightWidth() {
        return this._minimumHighlightWidth;
    }
    set minimumHighlightWidth(value) {
        this._minimumHighlightWidth = value;
    }
}
__decorate([
    nameForSerialization('type')
], Rectangular.prototype, "_type", void 0);
__decorate([
    nameForSerialization('brushesForState')
], Rectangular.prototype, "_brushesForState", void 0);
__decorate([
    nameForSerialization('minimumHighlightWidth')
], Rectangular.prototype, "_minimumHighlightWidth", void 0);
__decorate([
    nameForSerialization('minimumHighlightHeight')
], Rectangular.prototype, "_minimumHighlightHeight", void 0);
__decorate([
    ignoreFromSerialization
], Rectangular, "barcodePickDefaults", null);

class RectangularWithIcons extends DefaultSerializeable {
    static get barcodePickDefaults() {
        return getBarcodePickDefaults();
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
        super();
        this._type = 'rectangularWithIcons';
        this._brushesForState = RectangularWithIcons.barcodePickDefaults.BarcodePickViewHighlightStyle.RectangularWithIcons.brushesForState;
        this._iconsForState = [];
        this._iconStyle = RectangularWithIcons.barcodePickDefaults.BarcodePickViewHighlightStyle.RectangularWithIcons.iconStyle;
        this._minimumHighlightWidth = RectangularWithIcons.barcodePickDefaults.BarcodePickViewHighlightStyle.RectangularWithIcons.minimumHighlightWidth;
        this._minimumHighlightHeight = RectangularWithIcons.barcodePickDefaults.BarcodePickViewHighlightStyle.RectangularWithIcons.minimumHighlightHeight;
    }
    getBrushForState(state) {
        return (this._brushesForState.filter(item => item.barcodePickState === state)[0] || {}).brush;
    }
    setBrushForState(brush, state) {
        const indexToUpdate = this._brushesForState.findIndex(item => item.barcodePickState === state);
        this._brushesForState[indexToUpdate].brush = brush;
    }
    setIconForState(image, state) {
        const indexToUpdate = this._iconsForState.findIndex(item => item.barcodePickState === state);
        if (indexToUpdate > -1) {
            this._iconsForState.splice(indexToUpdate, 1);
        }
        this._iconsForState.push(new IconForStateObject(state, image));
    }
    get iconStyle() {
        return this._iconStyle;
    }
    set iconStyle(style) {
        this._iconStyle = style;
    }
    get statusIconSettings() {
        return this._statusIconSettings;
    }
    set statusIconSettings(value) {
        this._statusIconSettings = value;
    }
    get minimumHighlightHeight() {
        return this._minimumHighlightHeight;
    }
    set minimumHighlightHeight(value) {
        this._minimumHighlightHeight = value;
    }
    get minimumHighlightWidth() {
        return this._minimumHighlightWidth;
    }
    set minimumHighlightWidth(value) {
        this._minimumHighlightWidth = value;
    }
}
__decorate([
    nameForSerialization('type')
], RectangularWithIcons.prototype, "_type", void 0);
__decorate([
    nameForSerialization('brushesForState')
], RectangularWithIcons.prototype, "_brushesForState", void 0);
__decorate([
    nameForSerialization('iconsForState')
], RectangularWithIcons.prototype, "_iconsForState", void 0);
__decorate([
    nameForSerialization('iconStyle')
], RectangularWithIcons.prototype, "_iconStyle", void 0);
__decorate([
    nameForSerialization('statusIconSettings')
], RectangularWithIcons.prototype, "_statusIconSettings", void 0);
__decorate([
    nameForSerialization('minimumHighlightWidth')
], RectangularWithIcons.prototype, "_minimumHighlightWidth", void 0);
__decorate([
    nameForSerialization('minimumHighlightHeight')
], RectangularWithIcons.prototype, "_minimumHighlightHeight", void 0);
__decorate([
    ignoreFromSerialization
], RectangularWithIcons, "barcodePickDefaults", null);

class BarcodeFindFeedback extends DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.controller = null;
        this._found = BarcodeFindFeedback.barcodeFindDefaults.Feedback.found;
        this._itemListUpdated = BarcodeFindFeedback.barcodeFindDefaults.Feedback.itemListUpdated;
    }
    get found() {
        return this._found;
    }
    set found(success) {
        this._found = success;
        this.updateFeedback();
    }
    get itemListUpdated() {
        return this._itemListUpdated;
    }
    set itemListUpdated(failure) {
        this._itemListUpdated = failure;
        this.updateFeedback();
    }
    updateFeedback() {
        var _a;
        (_a = this.controller) === null || _a === void 0 ? void 0 : _a.updateFeedback(JSON.stringify(this.toJSON()));
    }
    static get barcodeFindDefaults() {
        return getBarcodeFindDefaults();
    }
    static get defaultFeedback() {
        return new BarcodeFindFeedback();
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeFindFeedback.prototype, "controller", void 0);
__decorate([
    nameForSerialization('found')
], BarcodeFindFeedback.prototype, "_found", void 0);
__decorate([
    nameForSerialization('itemListUpdated')
], BarcodeFindFeedback.prototype, "_itemListUpdated", void 0);

var BarcodeFindListenerEvents;
(function (BarcodeFindListenerEvents) {
    BarcodeFindListenerEvents["inCallback"] = "BarcodeFindListener.inCallback";
    BarcodeFindListenerEvents["onSearchStartedEvent"] = "BarcodeFindListener.onSearchStarted";
    BarcodeFindListenerEvents["onSearchPausedEvent"] = "BarcodeFindListener.onSearchPaused";
    BarcodeFindListenerEvents["onSearchStoppedEvent"] = "BarcodeFindListener.onSearchStopped";
    BarcodeFindListenerEvents["onTransformBarcodeData"] = "BarcodeFindTransformer.transformBarcodeData";
})(BarcodeFindListenerEvents || (BarcodeFindListenerEvents = {}));
class BarcodeFindController extends BaseController {
    constructor(barcodeFind) {
        super('BarcodeFindProxy');
        this._barcodeFind = barcodeFind;
        this._proxy.isModeEnabled = () => this._barcodeFind.isEnabled;
    }
    static forBarcodeFind(barcodeFind) {
        return new BarcodeFindController(barcodeFind);
    }
    updateMode() {
        return this._proxy.updateFindMode(JSON.stringify(this._barcodeFind.toJSON()));
    }
    setItemList(items) {
        const jsonString = items.map(item => item.toJSON());
        return this._proxy.setItemList(JSON.stringify(jsonString));
    }
    start() {
        return this._proxy.barcodeFindModeStart();
    }
    pause() {
        return this._proxy.barcodeFindModePause();
    }
    stop() {
        return this._proxy.barcodeFindModeStop();
    }
    setModeEnabledState(isEnabled) {
        this._proxy.setModeEnabledState(isEnabled);
    }
    setBarcodeTransformer() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._proxy.setBarcodeTransformer();
            this.subscribeBarcodeFindTransformerEvent();
        });
    }
    filterFoundItemsFromEvent(eventBody) {
        const foundItemsData = JSON.parse(eventBody).foundItems;
        const itemsToFind = JSON.parse(this._barcodeFind.itemsToFind);
        const foundItems = itemsToFind.filter((item) => foundItemsData.includes(item.searchOptions.barcodeData));
        return foundItems;
    }
    subscribeBarcodeFindTransformerEvent() {
        this.eventEmitter.on(BarcodeFindListenerEvents.onTransformBarcodeData, (body) => {
            var _a;
            const transformed = (_a = this._barcodeFind.barcodeTransformer) === null || _a === void 0 ? void 0 : _a.transformBarcodeData(body);
            this._proxy.submitBarcodeFindTransformerResult(transformed);
        });
    }
    subscribeListeners() {
        this._proxy.subscribeBarcodeFindListener();
        this.eventEmitter.on(BarcodeFindListenerEvents.onSearchStartedEvent, () => {
            var _a;
            const listeners = this._barcodeFind.listeners;
            for (const listener of listeners) {
                (_a = listener === null || listener === void 0 ? void 0 : listener.didStartSearch) === null || _a === void 0 ? void 0 : _a.call(listener);
            }
        });
        this.eventEmitter.on(BarcodeFindListenerEvents.onSearchPausedEvent, (body) => {
            var _a;
            const foundItems = this.filterFoundItemsFromEvent(body);
            for (const listener of this._barcodeFind.listeners) {
                (_a = listener === null || listener === void 0 ? void 0 : listener.didPauseSearch) === null || _a === void 0 ? void 0 : _a.call(listener, foundItems);
            }
        });
        this.eventEmitter.on(BarcodeFindListenerEvents.onSearchStoppedEvent, (body) => {
            var _a;
            const foundItems = this.filterFoundItemsFromEvent(body);
            for (const listener of this._barcodeFind.listeners) {
                (_a = listener === null || listener === void 0 ? void 0 : listener.didStopSearch) === null || _a === void 0 ? void 0 : _a.call(listener, foundItems);
            }
        });
    }
    unsubscribeListeners() {
        this._proxy.unsubscribeBarcodeFindListener();
        this.eventEmitter.off(BarcodeFindListenerEvents.onSearchPausedEvent);
        this.eventEmitter.off(BarcodeFindListenerEvents.onSearchStartedEvent);
        this.eventEmitter.off(BarcodeFindListenerEvents.onSearchStoppedEvent);
        this.eventEmitter.off(BarcodeFindListenerEvents.onTransformBarcodeData);
    }
    dispose() {
        this.unsubscribeListeners();
    }
    updateFeedback(feedbackJson) {
        return this._proxy.updateFeedback(feedbackJson);
    }
}

class BarcodeFind extends DefaultSerializeable {
    constructor(dataCaptureContext, settings) {
        super();
        this.type = 'barcodeFind';
        this._feedback = BarcodeFindFeedback.defaultFeedback;
        this._enabled = true;
        this._isInCallback = false;
        this.itemsToFind = null;
        this._hasBarcodeTransformer = false;
        this.listeners = [];
        this.barcodeTransformer = null;
        this._settings = settings;
        this._controller = BarcodeFindController.forBarcodeFind(this);
        this._dataCaptureContext = dataCaptureContext;
        this._feedback.controller = this._controller;
        // No need to add the mode to the context
    }
    static forContext(dataCaptureContext, settings) {
        return new BarcodeFind(dataCaptureContext, settings);
    }
    static get barcodeFindDefaults() {
        return getBarcodeFindDefaults();
    }
    static get recommendedCameraSettings() {
        return BarcodeFind.barcodeFindDefaults.RecommendedCameraSettings;
    }
    get context() {
        return this._dataCaptureContext;
    }
    get isEnabled() {
        return this._enabled;
    }
    set isEnabled(value) {
        this._enabled = value;
        this._controller.setModeEnabledState(value);
    }
    get feedback() {
        return this._feedback;
    }
    set feedback(value) {
        this._feedback = value;
        this._feedback.controller = this._controller;
        this._controller.updateFeedback(JSON.stringify(value.toJSON()));
    }
    applySettings(settings) {
        this._settings = settings;
        return this.update();
    }
    addListener(listener) {
        this.checkAndSubscribeListeners();
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    }
    checkAndSubscribeListeners() {
        if (this.listeners.length === 0) {
            this._controller.subscribeListeners();
        }
    }
    removeListener(listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener));
        this.checkAndUnsubscribeListeners();
    }
    setBarcodeTransformer(barcodeTransformer) {
        this.barcodeTransformer = barcodeTransformer;
        this._hasBarcodeTransformer = this.barcodeTransformer != undefined;
        this._controller.setBarcodeTransformer();
    }
    checkAndUnsubscribeListeners() {
        if (this.listeners.length > 0) {
            return;
        }
        this._controller.unsubscribeListeners();
    }
    setItemList(items) {
        this.itemsToFind = JSON.stringify(items.map(item => item.toJSON()));
        return this._controller.setItemList(items);
    }
    start() {
        return this._controller.start();
    }
    pause() {
        return this._controller.pause();
    }
    stop() {
        return this._controller.stop();
    }
    update() {
        return this._controller.updateMode();
    }
    unsubscribeNativeListeners() {
        this._controller.dispose();
    }
}
__decorate([
    nameForSerialization('feedback')
], BarcodeFind.prototype, "_feedback", void 0);
__decorate([
    nameForSerialization('enabled')
], BarcodeFind.prototype, "_enabled", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeFind.prototype, "_isInCallback", void 0);
__decorate([
    nameForSerialization('settings')
], BarcodeFind.prototype, "_settings", void 0);
__decorate([
    nameForSerialization('hasBarcodeTransformer')
], BarcodeFind.prototype, "_hasBarcodeTransformer", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeFind.prototype, "listeners", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeFind.prototype, "_controller", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeFind.prototype, "_dataCaptureContext", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeFind, "barcodeFindDefaults", null);

class BarcodeFindItem extends DefaultSerializeable {
    constructor(searchOptions, content) {
        super();
        this._searchOptions = searchOptions;
        this._content = content;
    }
    get searchOptions() {
        return this._searchOptions;
    }
    get content() {
        return this._content;
    }
}
__decorate([
    nameForSerialization('searchOptions')
], BarcodeFindItem.prototype, "_searchOptions", void 0);
__decorate([
    nameForSerialization('content')
], BarcodeFindItem.prototype, "_content", void 0);

class BarcodeFindItemContent extends DefaultSerializeable {
    constructor(info, additionalInfo, image) {
        super();
        this._info = info;
        this._additionalInfo = additionalInfo;
        this._image = image;
    }
    get info() {
        var _a;
        return (_a = this._info) !== null && _a !== void 0 ? _a : null;
    }
    get additionalInfo() {
        var _a;
        return (_a = this._additionalInfo) !== null && _a !== void 0 ? _a : null;
    }
    get image() {
        var _a;
        return (_a = this._image) !== null && _a !== void 0 ? _a : null;
    }
}
__decorate([
    nameForSerialization('info')
], BarcodeFindItemContent.prototype, "_info", void 0);
__decorate([
    nameForSerialization('additionalInfo')
], BarcodeFindItemContent.prototype, "_additionalInfo", void 0);
__decorate([
    nameForSerialization('image')
], BarcodeFindItemContent.prototype, "_image", void 0);

class BarcodeFindItemSearchOptions extends DefaultSerializeable {
    constructor(barcodeData) {
        super();
        this._barcodeData = barcodeData;
    }
    get barcodeData() {
        return this._barcodeData;
    }
}
__decorate([
    nameForSerialization("barcodeData")
], BarcodeFindItemSearchOptions.prototype, "_barcodeData", void 0);

class BarcodeFindSettings extends DefaultSerializeable {
    constructor() {
        super();
        this._symbologies = {};
        this._properties = {};
    }
    static get barcodeDefaults() {
        return getBarcodeDefaults();
    }
    settingsForSymbology(symbology) {
        const identifier = symbology.toString();
        if (!this._symbologies[identifier]) {
            const symbologySettings = BarcodeFindSettings.barcodeDefaults.SymbologySettings[identifier];
            this._symbologies[identifier] = symbologySettings;
        }
        return this._symbologies[identifier];
    }
    enableSymbologies(symbologies) {
        symbologies.forEach(symbology => this.enableSymbology(symbology, true));
    }
    enableSymbology(symbology, enabled) {
        this.settingsForSymbology(symbology).isEnabled = enabled;
    }
    get enabledSymbologies() {
        return Object.keys(this._symbologies)
            .filter(symbology => this._symbologies[symbology].isEnabled);
    }
    setProperty(name, value) {
        this._properties[name] = value;
    }
    getProperty(name) {
        return this._properties[name];
    }
}
__decorate([
    nameForSerialization('symbologies')
], BarcodeFindSettings.prototype, "_symbologies", void 0);
__decorate([
    nameForSerialization('properties')
], BarcodeFindSettings.prototype, "_properties", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeFindSettings, "barcodeDefaults", null);

class BarcodeFindViewSettings extends DefaultSerializeable {
    constructor(inListItemColor, notInListItemColor, soundEnabled, hapticEnabled) {
        super();
        this._inListItemColor = inListItemColor;
        this._notInListItemColor = notInListItemColor;
        this._soundEnabled = soundEnabled;
        this._hapticEnabled = hapticEnabled;
    }
    get inListItemColor() {
        return this._inListItemColor;
    }
    get notInListItemColor() {
        return this._notInListItemColor;
    }
    get soundEnabled() {
        return this._soundEnabled;
    }
    get hapticEnabled() {
        return this._hapticEnabled;
    }
}
__decorate([
    nameForSerialization('inListItemColor')
], BarcodeFindViewSettings.prototype, "_inListItemColor", void 0);
__decorate([
    nameForSerialization('notInListItemColor')
], BarcodeFindViewSettings.prototype, "_notInListItemColor", void 0);
__decorate([
    nameForSerialization('soundEnabled')
], BarcodeFindViewSettings.prototype, "_soundEnabled", void 0);
__decorate([
    nameForSerialization('hapticEnabled')
], BarcodeFindViewSettings.prototype, "_hapticEnabled", void 0);

var BarcodeFindViewEvents;
(function (BarcodeFindViewEvents) {
    BarcodeFindViewEvents["onFinishButtonTappedEventName"] = "BarcodeFindViewUiListener.onFinishButtonTapped";
})(BarcodeFindViewEvents || (BarcodeFindViewEvents = {}));
class BarcodeFindViewController extends BaseController {
    constructor() {
        super('BarcodeFindViewProxy');
        this.isListenerEnabled = false;
    }
    static forBarcodeFindView(baseView, nativeView) {
        const viewController = new BarcodeFindViewController();
        viewController.baseView = baseView;
        viewController.nativeView = nativeView;
        viewController.initialize();
        return viewController;
    }
    setUiListener(listener) {
        return __awaiter(this, void 0, void 0, function* () {
            if (listener && !this.isListenerEnabled) {
                this.isListenerEnabled = true;
                this.subscribeToEvents();
            }
            if (listener == null) {
                this.isListenerEnabled = false;
                this.unsubscribeToEvents();
            }
        });
    }
    viewPaused() {
        return this._proxy.onPause();
    }
    viewResumed() {
        return this._proxy.onResume();
    }
    startSearching() {
        return this._proxy.startSearching();
    }
    stopSearching() {
        return this._proxy.stopSearching();
    }
    pauseSearching() {
        return this._proxy.pauseSearching();
    }
    updateView() {
        const barcodeFindViewJson = this.baseView.toJSON();
        return this._proxy.updateView(JSON.stringify(barcodeFindViewJson));
    }
    showView() {
        return this._proxy.showView();
    }
    hideView() {
        return this._proxy.hideView();
    }
    create() {
        const barcodePickView = this.baseView.toJSON();
        const json = JSON.stringify(barcodePickView);
        const id = this._proxy.findNodeHandle(this.nativeView);
        return this._proxy.createView(id, json);
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.baseView.context.update();
            yield this.create();
        });
    }
    subscribeToEvents() {
        this._proxy.subscribeBarcodeFindViewListener();
        this.eventEmitter.on(BarcodeFindViewEvents.onFinishButtonTappedEventName, (body) => {
            var _a, _b;
            if (!this.baseView.barcodeFindViewUiListener) {
                return;
            }
            const barcodeFindItems = JSON.parse(body);
            (_b = (_a = this.baseView) === null || _a === void 0 ? void 0 : _a.barcodeFindViewUiListener) === null || _b === void 0 ? void 0 : _b.didTapFinishButton(barcodeFindItems);
        });
    }
    unsubscribeToEvents() {
        this._proxy.unsubscribeBarcodeFindViewListener();
        this.eventEmitter.off(BarcodeFindViewEvents.onFinishButtonTappedEventName);
    }
    dispose() {
        this.unsubscribeToEvents();
    }
}

class BaseBarcodeFindView {
    get barcodeFindViewUiListener() {
        return this._barcodeFindViewUiListener;
    }
    set barcodeFindViewUiListener(value) {
        this._barcodeFindViewUiListener = value;
        this.controller.setUiListener(value);
    }
    get context() {
        return this._dataCaptureContext;
    }
    constructor(context, barcodeFind, barcodeFindViewSettings, cameraSettings) {
        this._startSearching = false;
        this._isInitialized = false;
        this._barcodeFindViewUiListener = null;
        this._dataCaptureContext = context;
        this._barcodeFind = barcodeFind;
        this._barcodeFindViewSettings = barcodeFindViewSettings;
        this._cameraSettings = cameraSettings;
    }
    initialize(nativeView) {
        this.controller = BarcodeFindViewController.forBarcodeFindView(this, nativeView);
        this._isInitialized = true;
    }
    static forMode(dataCaptureContext, barcodeFind) {
        return new BaseBarcodeFindView(dataCaptureContext, barcodeFind);
    }
    static forModeWithViewSettings(dataCaptureContext, barcodeFind, viewSettings) {
        return new BaseBarcodeFindView(dataCaptureContext, barcodeFind, viewSettings);
    }
    static forModeWithViewSettingsAndCameraSettings(dataCaptureContext, barcodeFind, viewSettings, cameraSettings) {
        return new BaseBarcodeFindView(dataCaptureContext, barcodeFind, viewSettings, cameraSettings);
    }
    static get barcodeFindViewDefaults() {
        return getBarcodeFindDefaults().BarcodeFindView;
    }
    viewPaused() {
        return this.controller.viewPaused();
    }
    viewResumed() {
        return this.controller.viewResumed();
    }
    stopSearching() {
        this._startSearching = false;
        return this.controller.stopSearching();
    }
    startSearching() {
        this._startSearching = true;
        return this.controller.startSearching();
    }
    pauseSearching() {
        this._startSearching = false;
        return this.controller.pauseSearching();
    }
    show() {
        return this.controller.showView();
    }
    hide() {
        return this.controller.hideView();
    }
    get shouldShowUserGuidanceView() {
        return BaseBarcodeFindView.barcodeFindViewDefaults.shouldShowUserGuidanceView;
    }
    set shouldShowUserGuidanceView(value) {
        BaseBarcodeFindView.barcodeFindViewDefaults.shouldShowUserGuidanceView = value;
        this.update();
    }
    get shouldShowHints() {
        return BaseBarcodeFindView.barcodeFindViewDefaults.shouldShowHints;
    }
    set shouldShowHints(value) {
        BaseBarcodeFindView.barcodeFindViewDefaults.shouldShowHints = value;
        this.update();
    }
    get shouldShowCarousel() {
        return BaseBarcodeFindView.barcodeFindViewDefaults.shouldShowCarousel;
    }
    set shouldShowCarousel(value) {
        BaseBarcodeFindView.barcodeFindViewDefaults.shouldShowCarousel = value;
        this.update();
    }
    get shouldShowPauseButton() {
        return BaseBarcodeFindView.barcodeFindViewDefaults.shouldShowPauseButton;
    }
    set shouldShowPauseButton(value) {
        BaseBarcodeFindView.barcodeFindViewDefaults.shouldShowPauseButton = value;
        this.update();
    }
    get shouldShowFinishButton() {
        return BaseBarcodeFindView.barcodeFindViewDefaults.shouldShowFinishButton;
    }
    set shouldShowFinishButton(value) {
        BaseBarcodeFindView.barcodeFindViewDefaults.shouldShowFinishButton = value;
        this.update();
    }
    get shouldShowProgressBar() {
        return BaseBarcodeFindView.barcodeFindViewDefaults.shouldShowProgressBar;
    }
    set shouldShowProgressBar(value) {
        BaseBarcodeFindView.barcodeFindViewDefaults.shouldShowProgressBar = value;
        this.update();
    }
    get shouldShowTorchControl() {
        return BaseBarcodeFindView.barcodeFindViewDefaults.shouldShowTorchControl;
    }
    set shouldShowTorchControl(value) {
        BaseBarcodeFindView.barcodeFindViewDefaults.shouldShowTorchControl = value;
        this.update();
    }
    get torchControlPosition() {
        return BaseBarcodeFindView.barcodeFindViewDefaults.torchControlPosition;
    }
    set torchControlPosition(value) {
        BaseBarcodeFindView.barcodeFindViewDefaults.torchControlPosition = value;
        this.update();
    }
    get textForCollapseCardsButton() {
        return BaseBarcodeFindView.barcodeFindViewDefaults.textForCollapseCardsButton;
    }
    set textForCollapseCardsButton(value) {
        BaseBarcodeFindView.barcodeFindViewDefaults.textForCollapseCardsButton = value;
        this.update();
    }
    get textForAllItemsFoundSuccessfullyHint() {
        return BaseBarcodeFindView.barcodeFindViewDefaults.textForAllItemsFoundSuccessfullyHint;
    }
    set textForAllItemsFoundSuccessfullyHint(value) {
        BaseBarcodeFindView.barcodeFindViewDefaults.textForAllItemsFoundSuccessfullyHint = value;
        this.update();
    }
    get textForItemListUpdatedHint() {
        return BaseBarcodeFindView.barcodeFindViewDefaults.textForItemListUpdatedHint;
    }
    set textForItemListUpdatedHint(value) {
        BaseBarcodeFindView.barcodeFindViewDefaults.textForItemListUpdatedHint = value;
        this.update();
    }
    get textForItemListUpdatedWhenPausedHint() {
        return BaseBarcodeFindView.barcodeFindViewDefaults.textForItemListUpdatedWhenPausedHint;
    }
    set textForItemListUpdatedWhenPausedHint(value) {
        BaseBarcodeFindView.barcodeFindViewDefaults.textForItemListUpdatedWhenPausedHint = value;
        this.update();
    }
    get textForPointAtBarcodesToSearchHint() {
        return BaseBarcodeFindView.barcodeFindViewDefaults.textForPointAtBarcodesToSearchHint;
    }
    set textForPointAtBarcodesToSearchHint(value) {
        BaseBarcodeFindView.barcodeFindViewDefaults.textForPointAtBarcodesToSearchHint = value;
        this.update();
    }
    get textForMoveCloserToBarcodesHint() {
        return BaseBarcodeFindView.barcodeFindViewDefaults.textForMoveCloserToBarcodesHint;
    }
    set textForMoveCloserToBarcodesHint(value) {
        BaseBarcodeFindView.barcodeFindViewDefaults.textForMoveCloserToBarcodesHint = value;
        this.update();
    }
    get textForTapShutterToPauseScreenHint() {
        return BaseBarcodeFindView.barcodeFindViewDefaults.textForTapShutterToPauseScreenHint;
    }
    set textForTapShutterToPauseScreenHint(value) {
        BaseBarcodeFindView.barcodeFindViewDefaults.textForTapShutterToPauseScreenHint = value;
        this.update();
    }
    get textForTapShutterToResumeSearchHint() {
        return BaseBarcodeFindView.barcodeFindViewDefaults.textForTapShutterToResumeSearchHint;
    }
    set textForTapShutterToResumeSearchHint(value) {
        BaseBarcodeFindView.barcodeFindViewDefaults.textForTapShutterToResumeSearchHint = value;
        this.update();
    }
    update() {
        if (!this._isInitialized) {
            return Promise.resolve();
        }
        return this.controller.updateView();
    }
    dispose() {
        this.controller.dispose();
        this._barcodeFind.unsubscribeNativeListeners();
    }
    toJSON() {
        var _a, _b, _c;
        const json = {
            View: {
                shouldShowUserGuidanceView: this.shouldShowUserGuidanceView,
                shouldShowHints: this.shouldShowHints,
                shouldShowCarousel: this.shouldShowCarousel,
                shouldShowPauseButton: this.shouldShowPauseButton,
                shouldShowFinishButton: this.shouldShowFinishButton,
                shouldShowProgressBar: this.shouldShowProgressBar,
                shouldShowTorchControl: this.shouldShowTorchControl,
                torchControlPosition: (_a = this.torchControlPosition) === null || _a === void 0 ? void 0 : _a.toString(),
                textForCollapseCardsButton: this.textForCollapseCardsButton,
                textForAllItemsFoundSuccessfullyHint: this.textForAllItemsFoundSuccessfullyHint,
                textForItemListUpdatedHint: this.textForItemListUpdatedHint,
                textForItemListUpdatedWhenPausedHint: this.textForItemListUpdatedWhenPausedHint,
                textForPointAtBarcodesToSearchHint: this.textForPointAtBarcodesToSearchHint,
                textForMoveCloserToBarcodesHint: this.textForMoveCloserToBarcodesHint,
                textForTapShutterToPauseScreenHint: this.textForTapShutterToPauseScreenHint,
                textForTapShutterToResumeSearchHint: this.textForTapShutterToResumeSearchHint,
                startSearching: this._startSearching,
                viewSettings: undefined,
                CameraSettings: undefined
            },
            BarcodeFind: this._barcodeFind.toJSON()
        };
        if (this._barcodeFindViewSettings != null) {
            json.View.viewSettings = (_b = this._barcodeFindViewSettings) === null || _b === void 0 ? void 0 : _b.toJSON();
        }
        if (this._cameraSettings != null) {
            json.View.cameraSettings = (_c = this._cameraSettings) === null || _c === void 0 ? void 0 : _c.toJSON();
        }
        return json;
    }
}

class BarcodeGeneratorCreationOptions {
    constructor(backgroundColor = null, foregroundColor = null, errorCorrectionLevel = null, versionNumber = null) {
        this.backgroundColor = backgroundColor;
        this.foregroundColor = foregroundColor;
        this.errorCorrectionLevel = errorCorrectionLevel;
        this.versionNumber = versionNumber;
    }
}

class BarcodeGeneratorBuilder {
    constructor(type, dataCaptureContext) {
        this.options = new BarcodeGeneratorCreationOptions();
        this.type = type;
        this.dataCaptureContext = dataCaptureContext;
    }
    withBackgroundColor(color) {
        this.options.backgroundColor = color;
        return this;
    }
    withForegroundColor(color) {
        this.options.foregroundColor = color;
        return this;
    }
    build() {
        return BarcodeGenerator.create(this.type, this.options, this.dataCaptureContext);
    }
}

class Code39BarcodeGeneratorBuilder extends BarcodeGeneratorBuilder {
    constructor(dataCaptureContext) {
        super('code39Generator', dataCaptureContext);
    }
}

class Code128BarcodeGeneratorBuilder extends BarcodeGeneratorBuilder {
    constructor(dataCaptureContext) {
        super('code128Generator', dataCaptureContext);
    }
}

class Ean13BarcodeGeneratorBuilder extends BarcodeGeneratorBuilder {
    constructor(dataCaptureContext) {
        super('ean13Generator', dataCaptureContext);
    }
}

class UpcaBarcodeGeneratorBuilder extends BarcodeGeneratorBuilder {
    constructor(dataCaptureContext) {
        super('upcaGenerator', dataCaptureContext);
    }
}

class InterleavedTwoOfFiveBarcodeGeneratorBuilder extends BarcodeGeneratorBuilder {
    constructor(dataCaptureContext) {
        super('interleavedTwoOfFiveGenerator', dataCaptureContext);
    }
}

class QrCodeBarcodeGeneratorBuilder extends BarcodeGeneratorBuilder {
    constructor(dataCaptureContext) {
        super('qrCodeGenerator', dataCaptureContext);
    }
    withErrorCorrectionLevel(errorCorrectionLevel) {
        this.options.errorCorrectionLevel = errorCorrectionLevel;
        return this;
    }
    withVersionNumber(versionNumber) {
        this.options.versionNumber = versionNumber;
        return this;
    }
}

class DataMatrixBarcodeGeneratorBuilder extends BarcodeGeneratorBuilder {
    constructor(dataCaptureContext) {
        super('dataMatrixGenerator', dataCaptureContext);
    }
}

class BarcodeGeneratorController {
    get _proxy() {
        return FactoryMaker.getInstance('BarcodeGeneratorProxy');
    }
    static forBarcodeGenerator(generator) {
        const controller = new BarcodeGeneratorController();
        controller.generator = generator;
        controller.initialize();
        return controller;
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            // We call update because it returns a promise, this guarantees, that by the time
            // we need the deserialized context, it will be set in the native layer.
            yield this.generator.dataCaptureContext.update();
            this.create();
        });
    }
    create() {
        return this._proxy.create(JSON.stringify(this.generator.toJSON()));
    }
    generateFromBase64EncodedData(data, imageWidth) {
        return this._proxy.generateFromBase64EncodedData(this.generator.id, data, imageWidth);
    }
    generate(text, imageWidth) {
        return this._proxy.generate(this.generator.id, text, imageWidth);
    }
    dispose() {
        return this._proxy.dispose(this.generator.id);
    }
}

class BarcodeGenerator extends DefaultSerializeable {
    get id() {
        return this._id;
    }
    constructor(dataCaptureContext, type, backgroundColor, foregroundColor, errorCorrectionLevel, versionNumber) {
        super();
        this._id = `${Date.now()}`;
        this.errorCorrectionLevel = null;
        this.dataCaptureContext = dataCaptureContext;
        this.type = type;
        this.backgroundColor = backgroundColor;
        this.foregroundColor = foregroundColor;
        this.errorCorrectionLevel = errorCorrectionLevel;
        this.versionNumber = versionNumber;
        this.controller = BarcodeGeneratorController.forBarcodeGenerator(this);
    }
    static create(type, options, dataCaptureContext) {
        return new BarcodeGenerator(dataCaptureContext, type, options.backgroundColor, options.backgroundColor, options.errorCorrectionLevel, options.versionNumber);
    }
    generate(text, imageWidth) {
        return this.controller.generate(text, imageWidth);
    }
    generateFromBase64EncodedData(data, imageWidth) {
        return this.controller.generateFromBase64EncodedData(data, imageWidth);
    }
    dispose() {
        this.controller.dispose();
    }
    static code39BarcodeGeneratorBuilder(dataCaptureContext) {
        return new Code39BarcodeGeneratorBuilder(dataCaptureContext);
    }
    static code128BarcodeGeneratorBuilder(dataCaptureContext) {
        return new Code128BarcodeGeneratorBuilder(dataCaptureContext);
    }
    static ean13BarcodeGeneratorBuilder(dataCaptureContext) {
        return new Ean13BarcodeGeneratorBuilder(dataCaptureContext);
    }
    static upcaBarcodeGeneratorBuilder(dataCaptureContext) {
        return new UpcaBarcodeGeneratorBuilder(dataCaptureContext);
    }
    static interleavedTwoOfFiveBarcodeGeneratorBuilder(dataCaptureContext) {
        return new InterleavedTwoOfFiveBarcodeGeneratorBuilder(dataCaptureContext);
    }
    static qrCodeBarcodeGeneratorBuilder(dataCaptureContext) {
        return new QrCodeBarcodeGeneratorBuilder(dataCaptureContext);
    }
    static dataMatrixBarcodeGeneratorBuilder(dataCaptureContext) {
        return new DataMatrixBarcodeGeneratorBuilder(dataCaptureContext);
    }
}
__decorate([
    nameForSerialization('id')
], BarcodeGenerator.prototype, "_id", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeGenerator.prototype, "dataCaptureContext", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeGenerator.prototype, "controller", void 0);

var QrCodeErrorCorrectionLevel;
(function (QrCodeErrorCorrectionLevel) {
    QrCodeErrorCorrectionLevel["Low"] = "low";
    QrCodeErrorCorrectionLevel["Medium"] = "medium";
    QrCodeErrorCorrectionLevel["Quartile"] = "quartile";
    QrCodeErrorCorrectionLevel["High"] = "high";
})(QrCodeErrorCorrectionLevel || (QrCodeErrorCorrectionLevel = {}));

export { ArucoDictionary, ArucoDictionaryPreset, ArucoMarker, Barcode, BarcodeCapture, BarcodeCaptureFeedback, BarcodeCaptureListenerController, BarcodeCaptureListenerEvents, BarcodeCaptureOverlay, BarcodeCaptureOverlayStyle, BarcodeCaptureSession, BarcodeCaptureSettings, BarcodeCount, BarcodeCountCaptureList, BarcodeCountCaptureListSession, BarcodeCountFeedback, BarcodeCountListenerController, BarcodeCountListenerEvents, BarcodeCountSession, BarcodeCountSessionController, BarcodeCountSettings, BarcodeCountToolbarSettings, BarcodeCountViewEvents, BarcodeCountViewStyle, BarcodeFilterHighlightSettingsBrush, BarcodeFilterHighlightType, BarcodeFilterSettings, BarcodeFind, BarcodeFindController, BarcodeFindFeedback, BarcodeFindItem, BarcodeFindItemContent, BarcodeFindItemSearchOptions, BarcodeFindListenerEvents, BarcodeFindSettings, BarcodeFindViewEvents, BarcodeFindViewSettings, BarcodeGenerator, BarcodeGeneratorBuilder, BarcodeGeneratorController, BarcodePick, BarcodePickActionCallback, BarcodePickAsyncMapperProductProvider, BarcodePickEvents, BarcodePickIconStyle, BarcodePickListenerController, BarcodePickListenerEvents, BarcodePickProduct, BarcodePickProductController, BarcodePickProductProviderCallback, BarcodePickProductProviderCallbackItem, BarcodePickScanningSession, BarcodePickSettings, BarcodePickState, BarcodePickStatusIconSettings, BarcodePickViewController, BarcodePickViewListenerEvents, BarcodePickViewSettings, BarcodePickViewUiListenerEvents, BarcodeSelection, BarcodeSelectionAimerSelection, BarcodeSelectionAutoSelectionStrategy, BarcodeSelectionBasicOverlay, BarcodeSelectionBasicOverlayStyle, BarcodeSelectionBrushProviderEvents, BarcodeSelectionController, BarcodeSelectionFeedback, BarcodeSelectionFreezeBehavior, BarcodeSelectionListenerController, BarcodeSelectionListenerEvents, BarcodeSelectionManualSelectionStrategy, BarcodeSelectionOverlayController, BarcodeSelectionSession, BarcodeSelectionSettings, BarcodeSelectionStrategyType, BarcodeSelectionTapBehavior, BarcodeSelectionTapSelection, BarcodeSelectionTypeName, BarcodeSpatialGrid, BarcodeTracking, BarcodeTrackingAdvancedOverlayController, BarcodeTrackingAdvancedOverlayListenerEvents, BarcodeTrackingBasicOverlay, BarcodeTrackingBasicOverlayController, BarcodeTrackingBasicOverlayListenerEvents, BarcodeTrackingBasicOverlayStyle, BarcodeTrackingListenerController, BarcodeTrackingListenerEvents, BarcodeTrackingScenario, BarcodeTrackingSession, BarcodeTrackingSettings, BaseBarcodeFindView, BaseBarcodePickView, BaseBarcodeTrackingAdvancedOverlay, BaseSparkScanView, BatterySavingMode, BrushForStateObject, Checksum, Code128BarcodeGeneratorBuilder, Code39BarcodeGeneratorBuilder, CompositeFlag, CompositeType, DataMatrixBarcodeGeneratorBuilder, Dot, DotWithIcons, Ean13BarcodeGeneratorBuilder, Ean13UpcaClassification, EncodingRange, InterleavedTwoOfFiveBarcodeGeneratorBuilder, LocalizedOnlyBarcode, PrivateBarcodeSelectionStrategy, PrivateBarcodeSelectionType, QrCodeBarcodeGeneratorBuilder, QrCodeErrorCorrectionLevel, Range, Rectangular, RectangularWithIcons, SparkScan, SparkScanBarcodeErrorFeedback, SparkScanBarcodeFeedback, SparkScanBarcodeSuccessFeedback, SparkScanFeedback, SparkScanFeedbackDelegateEvents, SparkScanListenerController, SparkScanListenerEvents, SparkScanPreviewBehavior, SparkScanScanningBehavior, SparkScanScanningModeDefault, SparkScanScanningModeTarget, SparkScanScanningPrecision, SparkScanSession, SparkScanSettings, SparkScanToastSettings, SparkScanViewController, SparkScanViewErrorFeedback, SparkScanViewEvents, SparkScanViewFeedback, SparkScanViewHandMode, SparkScanViewSettings, SparkScanViewSuccessFeedback, StructuredAppendData, Symbology, SymbologyDescription, SymbologySettings, TargetBarcode, TrackedBarcode, UpcaBarcodeGeneratorBuilder, getBarcodeCaptureDefaults, getBarcodeCountDefaults, getBarcodeDefaults, getBarcodeFindDefaults, getBarcodePickDefaults, getBarcodeSelectionDefaults, getBarcodeTrackingDefaults, getSparkScanDefaults, loadBarcodeCaptureDefaults, loadBarcodeCountDefaults, loadBarcodeDefaults, loadBarcodeFindDefaults, loadBarcodePickDefaults, loadBarcodeSelectionDefaults, loadBarcodeTrackingDefaults, loadSparkScanDefaults };
