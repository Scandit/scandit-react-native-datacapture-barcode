import { nameForSerialization, serializationDefault, NoViewfinder, NoneLocationSelection, DefaultSerializeable, ignoreFromSerialization, FactoryMaker, Feedback, Quadrilateral, BaseController, BaseNewController, Brush, Observable, TextAlignment, FontFamily, EventDataParser, AimerViewfinder, Anchor, PointWithUnit, CameraSettings, Color, ScanditIcon, CameraController } from 'scandit-react-native-datacapture-core/dist/core';

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
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


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

function getBarcodeArDefaults() {
    return FactoryMaker.getInstance('BarcodeArDefaults');
}
function parseCircleHighlightPresets(jsonPresets) {
    const presets = {};
    Object.entries(jsonPresets).forEach(([key, value]) => {
        presets[key] = value;
    });
    return presets;
}
function parseBrush$1(brushJson) {
    return new Brush(brushJson.fill.color, brushJson.stroke.color, brushJson.stroke.width);
}
function parseBarcodeArDefaults(jsonDefaults) {
    const viewJsonDefaults = jsonDefaults.BarcodeArView;
    const barcodeArDefaults = {
        RecommendedCameraSettings: CameraSettings
            .fromJSON(jsonDefaults.RecommendedCameraSettings),
        Feedback: {
            scanned: Feedback.fromJSON(JSON.parse(jsonDefaults.barcodeArFeedback).scanned),
            tapped: Feedback.fromJSON(JSON.parse(jsonDefaults.barcodeArFeedback).tapped)
        },
        BarcodeArView: {
            circleHighlightPresets: parseCircleHighlightPresets(viewJsonDefaults.circleHighlightPresets),
            defaultBarcodeArPopoverAnnotationButtonEnabled: viewJsonDefaults.defaultBarcodeArPopoverAnnotationButtonEnabled,
            defaultBarcodeArPopoverAnnotationButtonTextColor: Color
                .fromJSON(viewJsonDefaults.defaultBarcodeArPopoverAnnotationButtonTextColor),
            defaultBarcodeArPopoverAnnotationButtonTextSize: viewJsonDefaults.defaultBarcodeArPopoverAnnotationButtonTextSize,
            defaultCameraPosition: viewJsonDefaults.defaultCameraPosition,
            defaultCameraSwitchControlPosition: viewJsonDefaults.defaultCameraSwitchControlPosition,
            defaultHapticsEnabled: viewJsonDefaults.defaultHapticsEnabled,
            defaultInfoAnnotationAnchor: viewJsonDefaults.defaultInfoAnnotationAnchor,
            defaultInfoAnnotationBackgroundColor: Color
                .fromJSON(viewJsonDefaults.defaultInfoAnnotationBackgroundColor),
            defaultInfoAnnotationBodyElementLeftIcon: ScanditIcon
                .fromJSON(viewJsonDefaults.defaultInfoAnnotationBodyElementLeftIcon) || null,
            defaultInfoAnnotationBodyElementLeftIconTappable: viewJsonDefaults.defaultInfoAnnotationBodyElementLeftIconTappable,
            defaultInfoAnnotationBodyElementRightIcon: ScanditIcon
                .fromJSON(viewJsonDefaults.defaultInfoAnnotationBodyElementRightIcon) || null,
            defaultInfoAnnotationBodyElementRightIconTappable: viewJsonDefaults.defaultInfoAnnotationBodyElementRightIconTappable,
            defaultInfoAnnotationBodyElementStyledText: viewJsonDefaults.defaultInfoAnnotationBodyElementStyledText || null,
            defaultInfoAnnotationBodyElementText: viewJsonDefaults.defaultInfoAnnotationBodyElementText || null,
            defaultInfoAnnotationBodyElementTextColor: Color
                .fromJSON(viewJsonDefaults.defaultInfoAnnotationBodyElementTextColor),
            defaultInfoAnnotationBodyElementTextSize: viewJsonDefaults.defaultInfoAnnotationBodyElementTextSize,
            defaultInfoAnnotationEntireAnnotationTappable: viewJsonDefaults.defaultInfoAnnotationEntireAnnotationTappable,
            defaultInfoAnnotationFooterBackgroundColor: Color
                .fromJSON(viewJsonDefaults.defaultInfoAnnotationFooterBackgroundColor),
            defaultInfoAnnotationFooterIcon: ScanditIcon
                .fromJSON(viewJsonDefaults.defaultInfoAnnotationFooterIcon) || null,
            defaultInfoAnnotationFooterText: viewJsonDefaults.defaultInfoAnnotationFooterText || null,
            defaultInfoAnnotationFooterTextColor: Color
                .fromJSON(viewJsonDefaults.defaultInfoAnnotationFooterTextColor),
            defaultInfoAnnotationFooterTextSize: viewJsonDefaults.defaultInfoAnnotationFooterTextSize,
            defaultInfoAnnotationHasTip: viewJsonDefaults.defaultInfoAnnotationHasTip,
            defaultInfoAnnotationHeaderIcon: ScanditIcon
                .fromJSON(viewJsonDefaults.defaultInfoAnnotationHeaderIcon) || null,
            defaultInfoAnnotationHeaderBackgroundColor: Color
                .fromJSON(viewJsonDefaults.defaultInfoAnnotationHeaderBackgroundColor),
            defaultInfoAnnotationHeaderText: viewJsonDefaults.defaultInfoAnnotationHeaderText || null,
            defaultInfoAnnotationHeaderTextColor: Color
                .fromJSON(viewJsonDefaults.defaultInfoAnnotationHeaderTextColor),
            defaultInfoAnnotationHeaderTextSize: viewJsonDefaults.defaultInfoAnnotationHeaderTextSize,
            defaultInfoAnnotationTrigger: viewJsonDefaults.defaultInfoAnnotationTrigger,
            defaultInfoAnnotationWidth: viewJsonDefaults.defaultInfoAnnotationWidth,
            defaultIsEntirePopoverTappable: viewJsonDefaults.defaultIsEntirePopoverTappable,
            defaultPopoverAnnotationTrigger: viewJsonDefaults.defaultPopoverAnnotationTrigger,
            defaultRectangleHighlightBrush: parseBrush$1(JSON.parse(viewJsonDefaults.defaultRectangleHighlightBrush)),
            defaultShouldShowCameraSwitchControl: viewJsonDefaults.defaultShouldShowCameraSwitchControl,
            defaultShouldShowTorchControl: viewJsonDefaults.defaultShouldShowTorchControl,
            defaultShouldShowZoomControl: viewJsonDefaults.defaultShouldShowZoomControl,
            defaultSoundEnabled: viewJsonDefaults.defaultSoundEnabled,
            defaultStatusIconAnnotationBackgroundColor: Color
                .fromJSON(viewJsonDefaults.defaultStatusIconAnnotationBackgroundColor),
            defaultStatusIconAnnotationHasTip: viewJsonDefaults.defaultStatusIconAnnotationHasTip,
            defaultStatusIconAnnotationIcon: ScanditIcon
                .fromJSON(viewJsonDefaults.defaultStatusIconAnnotationIcon) || null,
            defaultStatusIconAnnotationText: viewJsonDefaults.defaultStatusIconAnnotationText || null,
            defaultStatusIconAnnotationTextColor: Color
                .fromJSON(viewJsonDefaults.defaultStatusIconAnnotationTextColor),
            defaultStatusIconAnnotationTrigger: viewJsonDefaults.defaultStatusIconAnnotationTrigger,
            defaultTorchControlPosition: viewJsonDefaults.defaultTorchControlPosition,
            defaultZoomControlPosition: viewJsonDefaults.defaultZoomControlPosition,
            defaultHighlightIcon: ScanditIcon
                .fromJSON(viewJsonDefaults.defaultHighlightIcon) || null,
        }
    };
    return barcodeArDefaults;
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
    static get emptyFeedback() {
        return new BarcodeCountFeedback(new Feedback(null, null), new Feedback(null, null));
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
    get acceptedBarcodes() {
        return this._acceptedBarcodes;
    }
    get rejectedBarcodes() {
        return this._rejectedBarcodes;
    }
    static fromJSON(json) {
        var _a, _b, _c, _d, _e, _f;
        const correctBarcodes = (_a = json.correctBarcodes) !== null && _a !== void 0 ? _a : [];
        const wrongBarcodes = (_b = json.wrongBarcodes) !== null && _b !== void 0 ? _b : [];
        const missingBarcodes = (_c = json.missingBarcodes) !== null && _c !== void 0 ? _c : [];
        const additionalBarcodes = (_d = json.additionalBarcodes) !== null && _d !== void 0 ? _d : [];
        const acceptedBarcodes = (_e = json.acceptedBarcodes) !== null && _e !== void 0 ? _e : [];
        const rejectedBarcodes = (_f = json.rejectedBarcodes) !== null && _f !== void 0 ? _f : [];
        return new BarcodeCountCaptureListSession({
            correctBarcodes,
            wrongBarcodes,
            missingBarcodes,
            additionalBarcodes,
            acceptedBarcodes,
            rejectedBarcodes
        });
    }
    constructor({ correctBarcodes, wrongBarcodes, missingBarcodes, additionalBarcodes, acceptedBarcodes, rejectedBarcodes }) {
        super();
        this._correctBarcodes = correctBarcodes;
        this._wrongBarcodes = wrongBarcodes;
        this._missingBarcodes = missingBarcodes;
        this._additionalBarcodes = additionalBarcodes;
        this._acceptedBarcodes = acceptedBarcodes;
        this._rejectedBarcodes = rejectedBarcodes;
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
__decorate([
    nameForSerialization('acceptedBarcodes')
], BarcodeCountCaptureListSession.prototype, "_acceptedBarcodes", void 0);
__decorate([
    nameForSerialization('rejectedBarcodes')
], BarcodeCountCaptureListSession.prototype, "_rejectedBarcodes", void 0);

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

class TrackedBarcode {
    get barcode() { return this._barcode; }
    get location() { return this._location; }
    get identifier() { return this._identifier; }
    get sessionFrameSequenceID() {
        return this._sessionFrameSequenceID;
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
        return trackedBarcode;
    }
}

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
        const barcodeJSON = this._grid[row][column]["mainBarcode"];
        if (barcodeJSON) {
            return Barcode.fromJSON(barcodeJSON);
        }
        return null;
    }
    row(index) {
        const elementsJSON = this._grid[index];
        if (elementsJSON) {
            return ((elementsJSON.map((it) => it.mainBarcode)).map(Barcode.fromJSON));
        }
        return [];
    }
    column(index) {
        const elementsJSON = this._grid.map(elements => elements[index]);
        if (elementsJSON) {
            return ((elementsJSON.map((it) => it.mainBarcode)).map(Barcode.fromJSON));
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

class BarcodeCountSessionController extends BaseController {
    constructor() {
        super('BarcodeCountSessionProxy');
    }
    resetSession() {
        return this._proxy.$resetSession();
    }
    getSpatialMap() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._proxy.$getSpatialMap();
            if (result) {
                const payload = JSON.parse(result.data);
                return BarcodeSpatialGrid.fromJSON(payload);
            }
        });
    }
    getSpatialMapWithHints(expectedNumberOfRows, expectedNumberOfColumns) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._proxy.$getSpatialMapWithHints({ expectedNumberOfRows, expectedNumberOfColumns });
            if (result) {
                const payload = JSON.parse(result.data);
                return BarcodeSpatialGrid.fromJSON(payload);
            }
        });
    }
}

class BarcodeCountSession extends DefaultSerializeable {
    static fromJSON(json) {
        var _a;
        const sessionJson = JSON.parse(json.session);
        const session = new BarcodeCountSession();
        session._frameSequenceID = sessionJson.frameSequenceId;
        session._additionalBarcodes = sessionJson.additionalBarcodes;
        session._recognizedBarcodes = sessionJson.recognizedBarcodes.map(Barcode.fromJSON);
        session.frameId = (_a = json.frameId) !== null && _a !== void 0 ? _a : '';
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
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            return (_a = yield this.sessionController.getSpatialMap()) !== null && _a !== void 0 ? _a : null;
        });
    }
    getSpatialMapWithHints(expectedNumberOfRows, expectedNumberOfColumns) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
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
__decorate([
    ignoreFromSerialization
], BarcodeCountSession.prototype, "frameId", void 0);

var BarcodeCountListenerEvents;
(function (BarcodeCountListenerEvents) {
    BarcodeCountListenerEvents["didUpdateSession"] = "BarcodeCountCaptureListListener.didUpdateSession";
    BarcodeCountListenerEvents["didScan"] = "BarcodeCountListener.onScan";
})(BarcodeCountListenerEvents || (BarcodeCountListenerEvents = {}));
class BarcodeCountListenerController extends BaseController {
    constructor() {
        super('BarcodeCountListenerProxy');
    }
    static forBarcodeCount(barcodeCount) {
        const controller = new BarcodeCountListenerController();
        controller.barcodeCount = barcodeCount;
        return controller;
    }
    update() {
        const barcodeCount = this.barcodeCount.toJSON();
        const json = JSON.stringify(barcodeCount);
        return this._proxy.$updateBarcodeCountMode({ barcodeCountJson: json });
    }
    reset() {
        return this._proxy.$resetBarcodeCount();
    }
    setModeEnabledState(enabled) {
        this._proxy.$setBarcodeCountModeEnabledState({ isEnabled: enabled });
    }
    subscribeListener() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._proxy.$registerBarcodeCountListener();
            this._proxy.on$didScan = (ev) => __awaiter(this, void 0, void 0, function* () {
                const payload = EventDataParser.parse(ev.data);
                if (payload === null) {
                    console.error('BarcodeCountListenerController didScan payload is null');
                    return;
                }
                const session = BarcodeCountSession.fromJSON(payload);
                yield this.notifyListenersOfDidScanSession(session);
                yield this._proxy.$finishBarcodeCountOnScan();
            });
            this._proxy.on$didUpdateSession = (ev) => __awaiter(this, void 0, void 0, function* () {
                const payload = EventDataParser.parse(ev.data);
                if (payload === null) {
                    console.error('BarcodeCountListenerController.subscribeListener: didListSessionUpdate payload is null');
                    return;
                }
                const session = BarcodeCountCaptureListSession
                    .fromJSON(JSON.parse(payload.session));
                this.notifyListenersOfDidListSessionUpdate(session);
            });
        });
    }
    unsubscribeListener() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._proxy.$unregisterBarcodeCountListener();
            this._proxy.dispose();
        });
    }
    startScanningPhase() {
        this._proxy.$startBarcodeCountScanningPhase();
    }
    endScanningPhase() {
        this._proxy.$endBarcodeCountScanningPhase();
    }
    updateFeedback(feedbackJson) {
        this._proxy.$updateBarcodeCountFeedback({ feedbackJson });
    }
    setBarcodeCountCaptureList(barcodeCountCaptureList) {
        this._barcodeCountCaptureList = barcodeCountCaptureList;
        this._proxy.$setBarcodeCountCaptureList({ captureListJson: JSON.stringify(barcodeCountCaptureList.targetBarcodes) });
    }
    notifyListenersOfDidScanSession(session) {
        return __awaiter(this, void 0, void 0, function* () {
            const mode = this.barcodeCount;
            for (const listener of mode.listeners) {
                if (listener.didScan) {
                    yield listener.didScan(this.barcodeCount, session, () => CameraController.getFrame(session.frameId));
                }
            }
        });
    }
    notifyListenersOfDidListSessionUpdate(session) {
        var _a;
        const barcodeCountCaptureListListener = (_a = this._barcodeCountCaptureList) === null || _a === void 0 ? void 0 : _a.listener;
        if (barcodeCountCaptureListListener && (barcodeCountCaptureListListener === null || barcodeCountCaptureListListener === void 0 ? void 0 : barcodeCountCaptureListListener.didUpdateSession)) {
            barcodeCountCaptureListListener === null || barcodeCountCaptureListListener === void 0 ? void 0 : barcodeCountCaptureListListener.didUpdateSession(this._barcodeCountCaptureList, session);
        }
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
    BarcodeCountViewEvents["brushForAcceptedBarcode"] = "BarcodeCountViewListener.brushForAcceptedBarcode";
    BarcodeCountViewEvents["brushForRejectedBarcode"] = "BarcodeCountViewListener.brushForRejectedBarcode";
    BarcodeCountViewEvents["filteredBarcodeTapped"] = "BarcodeCountViewListener.didTapFilteredBarcode";
    BarcodeCountViewEvents["recognizedBarcodeNotInListTapped"] = "BarcodeCountViewListener.didTapRecognizedBarcodeNotInList";
    BarcodeCountViewEvents["recognizedBarcodeTapped"] = "BarcodeCountViewListener.didTapRecognizedBarcode";
    BarcodeCountViewEvents["acceptedBarcodeTapped"] = "BarcodeCountViewListener.didTapAcceptedBarcode";
    BarcodeCountViewEvents["rejectedBarcodeTapped"] = "BarcodeCountViewListener.didTapRejectedBarcode";
    BarcodeCountViewEvents["captureListCompleted"] = "BarcodeCountViewListener.didCompleteCaptureList";
})(BarcodeCountViewEvents || (BarcodeCountViewEvents = {}));
class BarcodeCountViewController extends BaseController {
    static forBarcodeCountAndBarcodeCountView(view, barcodeCount) {
        const controller = new BarcodeCountViewController({ view, barcodeCount });
        // We call update because it returns a promise, this guarantees, that by the time
        // we need the deserialized context, it will be set in the native layer.
        return controller;
    }
    constructor({ view, barcodeCount }) {
        super('BarcodeCountViewProxy');
        this.view = view;
        this.barcodeCount = barcodeCount;
    }
    initialize(autoCreateNativeView) {
        return __awaiter(this, void 0, void 0, function* () {
            const context = this.view.context;
            yield context.update();
            if (autoCreateNativeView) {
                yield this.createView();
            }
            yield this.subscribeListeners();
        });
    }
    update() {
        const barcodeCountView = this.view.toJSON();
        const json = barcodeCountView.View;
        return this._proxy.$updateBarcodeCountView({ viewJson: JSON.stringify(json) });
    }
    createNativeView() {
        return this.createView();
    }
    removeNativeView() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this._proxy).$removeBarcodeCountView) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : Promise.resolve();
    }
    createView() {
        const barcodeCountViewJson = this.view.toJSON();
        return this._proxy.$createBarcodeCountView({ viewJson: JSON.stringify(barcodeCountViewJson) });
    }
    setUiListener(listener) {
        return __awaiter(this, void 0, void 0, function* () {
            if (listener != null) {
                yield this._proxy.$registerBarcodeCountViewUiListener();
            }
            else {
                yield this._proxy.$unregisterBarcodeCountViewUiListener();
            }
        });
    }
    setViewListener(listener) {
        return __awaiter(this, void 0, void 0, function* () {
            if (listener != null) {
                yield this._proxy.$registerBarcodeCountViewListener();
            }
            else {
                yield this._proxy.$unregisterBarcodeCountViewListener();
            }
        });
    }
    clearHighlights() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._proxy.$clearBarcodeCountHighlights();
        });
    }
    dispose() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.unsubscribeListeners();
        });
    }
    setPositionAndSize(top, left, width, height, shouldBeUnderWebView) {
        return this._proxy.$setBarcodeCountViewPositionAndSize({ top, left, width, height, shouldBeUnderWebView });
    }
    show() {
        if (!this.view.context) {
            throw new Error('There should be a context attached to a view that should be shown');
        }
        return this._proxy.$showBarcodeCountView();
    }
    hide() {
        if (!this.view.context) {
            throw new Error('There should be a context attached to a view that should be shown');
        }
        return this._proxy.$hideBarcodeCountView();
    }
    setBrushForRecognizedBarcode(trackedBarcode, brush) {
        const payload = this.buildTrackedBarcodeBrushPayload(trackedBarcode, brush);
        return this._proxy.$finishBarcodeCountBrushForRecognizedBarcode({ brushJson: payload.brush, trackedBarcodeId: payload.trackedBarcodeID });
    }
    setBrushForRecognizedBarcodeNotInList(trackedBarcode, brush) {
        const payload = this.buildTrackedBarcodeBrushPayload(trackedBarcode, brush);
        return this._proxy.$finishBarcodeCountBrushForRecognizedBarcodeNotInList({ brushJson: payload.brush, trackedBarcodeId: payload.trackedBarcodeID });
    }
    setBrushForAcceptedBarcode(trackedBarcode, brush) {
        const payload = this.buildTrackedBarcodeBrushPayload(trackedBarcode, brush);
        return this._proxy.$finishBarcodeCountBrushForAcceptedBarcode({ brushJson: payload.brush, trackedBarcodeId: payload.trackedBarcodeID });
    }
    setBrushForRejectedBarcode(trackedBarcode, brush) {
        const payload = this.buildTrackedBarcodeBrushPayload(trackedBarcode, brush);
        return this._proxy.$finishBarcodeCountBrushForRejectedBarcode({ brushJson: payload.brush, trackedBarcodeId: payload.trackedBarcodeID });
    }
    enableHardwareTrigger(hardwareTriggerKeyCode) {
        return this._proxy.$enableBarcodeCountHardwareTrigger({ hardwareTriggerKeyCode });
    }
    buildTrackedBarcodeBrushPayload(trackedBarcode, brush) {
        return {
            trackedBarcodeID: trackedBarcode.identifier,
            brush: brush ? JSON.stringify(brush.toJSON()) : null,
        };
    }
    subscribeListeners() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._proxy.$registerBarcodeCountViewListener();
            this._proxy.on$singleScanButtonTapped = () => {
                var _a, _b;
                (_b = (_a = this.view.uiListener) === null || _a === void 0 ? void 0 : _a.didTapSingleScanButton) === null || _b === void 0 ? void 0 : _b.call(_a, this.view.nativeView);
            };
            this._proxy.on$listButtonTapped = () => {
                var _a, _b;
                (_b = (_a = this.view.uiListener) === null || _a === void 0 ? void 0 : _a.didTapListButton) === null || _b === void 0 ? void 0 : _b.call(_a, this.view.nativeView);
            };
            this._proxy.on$exitButtonTapped = () => {
                var _a, _b;
                (_b = (_a = this.view.uiListener) === null || _a === void 0 ? void 0 : _a.didTapExitButton) === null || _b === void 0 ? void 0 : _b.call(_a, this.view.nativeView);
            };
            this._proxy.on$brushForRecognizedBarcode = (ev) => __awaiter(this, void 0, void 0, function* () {
                const payload = EventDataParser.parse(ev.data);
                if (payload === null) {
                    console.error('BarcodeCountViewController brushForRecognizedBarcode payload is null');
                    return;
                }
                const trackedBarcode = TrackedBarcode
                    .fromJSON(JSON.parse(payload.trackedBarcode));
                let brush = this.view.recognizedBrush;
                if (this.view.listener && this.view.listener.brushForRecognizedBarcode) {
                    brush = this.view.listener.brushForRecognizedBarcode(this.view.nativeView, trackedBarcode);
                }
                const finishPayload = this.buildTrackedBarcodeBrushPayload(trackedBarcode, brush);
                yield this._proxy.$finishBarcodeCountBrushForRecognizedBarcode({ brushJson: finishPayload.brush, trackedBarcodeId: finishPayload.trackedBarcodeID });
            });
            this._proxy.on$brushForRecognizedBarcodeNotInList = (ev) => __awaiter(this, void 0, void 0, function* () {
                const payload = EventDataParser.parse(ev.data);
                if (payload === null) {
                    console.error('BarcodeCountViewController brushForRecognizedBarcodeNotInList payload is null');
                    return;
                }
                const trackedBarcode = TrackedBarcode
                    .fromJSON(JSON.parse(payload.trackedBarcode));
                let brush = this.view.notInListBrush;
                if (this.view.listener && this.view.listener.brushForRecognizedBarcodeNotInList) {
                    brush = this.view.listener.brushForRecognizedBarcodeNotInList(this.view.nativeView, trackedBarcode);
                }
                const finishPayload = this.buildTrackedBarcodeBrushPayload(trackedBarcode, brush);
                yield this._proxy.$finishBarcodeCountBrushForRecognizedBarcodeNotInList({ brushJson: finishPayload.brush, trackedBarcodeId: finishPayload.trackedBarcodeID });
            });
            this._proxy.on$brushForAcceptedBarcode = (ev) => __awaiter(this, void 0, void 0, function* () {
                const payload = EventDataParser.parse(ev.data);
                if (payload === null) {
                    console.error('BarcodeCountViewController brushForAcceptedBarcode payload is null');
                    return;
                }
                const trackedBarcode = TrackedBarcode
                    .fromJSON(JSON.parse(payload.trackedBarcode));
                let brush = this.view.acceptedBrush;
                if (this.view.listener && this.view.listener.brushForAcceptedBarcode) {
                    brush = this.view.listener.brushForAcceptedBarcode(this.view.nativeView, trackedBarcode);
                }
                const finishPayload = this.buildTrackedBarcodeBrushPayload(trackedBarcode, brush);
                yield this._proxy.$finishBarcodeCountBrushForAcceptedBarcode({ brushJson: finishPayload.brush, trackedBarcodeId: finishPayload.trackedBarcodeID });
            });
            this._proxy.on$brushForRejectedBarcode = (ev) => __awaiter(this, void 0, void 0, function* () {
                const payload = EventDataParser.parse(ev.data);
                if (payload === null) {
                    console.error('BarcodeCountViewController brushForRejectedBarcode payload is null');
                    return;
                }
                const trackedBarcode = TrackedBarcode
                    .fromJSON(JSON.parse(payload.trackedBarcode));
                let brush = this.view.rejectedBrush;
                if (this.view.listener && this.view.listener.brushForRejectedBarcode) {
                    brush = this.view.listener.brushForRejectedBarcode(this.view.nativeView, trackedBarcode);
                }
                const finishPayload = this.buildTrackedBarcodeBrushPayload(trackedBarcode, brush);
                yield this._proxy.$finishBarcodeCountBrushForRejectedBarcode({ brushJson: finishPayload.brush, trackedBarcodeId: finishPayload.trackedBarcodeID });
            });
            this._proxy.on$filteredBarcodeTapped = (ev) => __awaiter(this, void 0, void 0, function* () {
                const payload = EventDataParser.parse(ev.data);
                if (payload === null) {
                    console.error('BarcodeCountViewController filteredBarcodeTapped payload is null');
                    return;
                }
                const trackedBarcode = TrackedBarcode
                    .fromJSON(JSON.parse(payload.trackedBarcode));
                if (this.view.listener && this.view.listener.didTapFilteredBarcode) {
                    this.view.listener.didTapFilteredBarcode(this.view.nativeView, trackedBarcode);
                }
            });
            this._proxy.on$recognizedBarcodeNotInListTapped = (ev) => __awaiter(this, void 0, void 0, function* () {
                const payload = EventDataParser.parse(ev.data);
                if (payload === null) {
                    console.error('BarcodeCountViewController recognizedBarcodeNotInListTapped payload is null');
                    return;
                }
                const trackedBarcode = TrackedBarcode
                    .fromJSON(JSON.parse(payload.trackedBarcode));
                if (this.view.listener && this.view.listener.didTapRecognizedBarcodeNotInList) {
                    this.view.listener.didTapRecognizedBarcodeNotInList(this.view.nativeView, trackedBarcode);
                }
            });
            this._proxy.on$recognizedBarcodeTapped = (ev) => __awaiter(this, void 0, void 0, function* () {
                const payload = EventDataParser.parse(ev.data);
                if (payload === null) {
                    console.error('BarcodeCountViewController recognizedBarcodeTapped payload is null');
                    return;
                }
                const trackedBarcode = TrackedBarcode
                    .fromJSON(JSON.parse(payload.trackedBarcode));
                if (this.view.listener && this.view.listener.didTapRecognizedBarcode) {
                    this.view.listener.didTapRecognizedBarcode(this.view.nativeView, trackedBarcode);
                }
            });
            this._proxy.on$acceptedBarcodeTapped = (ev) => __awaiter(this, void 0, void 0, function* () {
                const payload = EventDataParser.parse(ev.data);
                if (payload === null) {
                    console.error('BarcodeCountViewController acceptedBarcodeTapped payload is null');
                    return;
                }
                const trackedBarcode = TrackedBarcode
                    .fromJSON(JSON.parse(payload.trackedBarcode));
                if (this.view.listener && this.view.listener.didTapAcceptedBarcode) {
                    this.view.listener.didTapAcceptedBarcode(this.view.nativeView, trackedBarcode);
                }
            });
            this._proxy.on$rejectedBarcodeTapped = (ev) => __awaiter(this, void 0, void 0, function* () {
                const payload = EventDataParser.parse(ev.data);
                if (payload === null) {
                    console.error('BarcodeCountViewController rejectedBarcodeTapped payload is null');
                    return;
                }
                const trackedBarcode = TrackedBarcode
                    .fromJSON(JSON.parse(payload.trackedBarcode));
                if (this.view.listener && this.view.listener.didTapRejectedBarcode) {
                    this.view.listener.didTapRejectedBarcode(this.view.nativeView, trackedBarcode);
                }
            });
            this._proxy.on$captureListCompleted = () => {
                if (this.view.listener && this.view.listener.didCompleteCaptureList) {
                    this.view.listener.didCompleteCaptureList(this.view.nativeView);
                }
            };
        });
    }
    unsubscribeListeners() {
        return __awaiter(this, void 0, void 0, function* () {
            this._proxy.dispose();
            yield this._proxy.$unregisterBarcodeCountViewListener();
            yield this._proxy.$unregisterBarcodeCountViewUiListener();
        });
    }
}

class BarcodeCountNotInListActionSettings extends DefaultSerializeable {
    constructor() {
        super(...arguments);
        this._enabled = false;
        this._acceptButtonText = "";
        this._acceptButtonAccessibilityLabel = "";
        this._acceptButtonAccessibilityHint = "";
        this._acceptButtonContentDescription = "";
        this._rejectButtonText = "";
        this._rejectButtonAccessibilityLabel = "";
        this._rejectButtonAccessibilityHint = "";
        this._rejectButtonContentDescription = "";
        this._cancelButtonText = "";
        this._cancelButtonAccessibilityLabel = "";
        this._cancelButtonAccessibilityHint = "";
        this._cancelButtonContentDescription = "";
        this._barcodeAcceptedHint = "";
        this._barcodeRejectedHint = "";
    }
    static barcodeCountDefaults() {
        return getBarcodeCountDefaults();
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(newValue) {
        this._enabled = newValue;
    }
    get acceptButtonText() {
        return this._acceptButtonText;
    }
    set acceptButtonText(newValue) {
        this._acceptButtonText = newValue;
    }
    get acceptButtonAccessibilityLabel() {
        return this._acceptButtonAccessibilityLabel;
    }
    set acceptButtonAccessibilityLabel(newValue) {
        this._acceptButtonAccessibilityLabel = newValue;
    }
    get acceptButtonAccessibilityHint() {
        return this._acceptButtonAccessibilityHint;
    }
    set acceptButtonAccessibilityHint(value) {
        this._acceptButtonAccessibilityHint = value;
    }
    get acceptButtonContentDescription() {
        return this._acceptButtonContentDescription;
    }
    set acceptButtonContentDescription(value) {
        this._acceptButtonContentDescription = value;
    }
    get rejectButtonText() {
        return this._rejectButtonText;
    }
    set rejectButtonText(value) {
        this._rejectButtonText = value;
    }
    get rejectButtonAccessibilityLabel() {
        return this._rejectButtonAccessibilityLabel;
    }
    set rejectButtonAccessibilityLabel(value) {
        this._rejectButtonAccessibilityLabel = value;
    }
    get rejectButtonAccessibilityHint() {
        return this._rejectButtonAccessibilityHint;
    }
    set rejectButtonAccessibilityHint(value) {
        this._rejectButtonAccessibilityHint = value;
    }
    get rejectButtonContentDescription() {
        return this._rejectButtonContentDescription;
    }
    set rejectButtonContentDescription(value) {
        this._rejectButtonContentDescription = value;
    }
    get cancelButtonText() {
        return this._cancelButtonText;
    }
    set cancelButtonText(value) {
        this._cancelButtonText = value;
    }
    get cancelButtonAccessibilityLabel() {
        return this._cancelButtonAccessibilityLabel;
    }
    set cancelButtonAccessibilityLabel(value) {
        this._cancelButtonAccessibilityLabel = value;
    }
    get cancelButtonAccessibilityHint() {
        return this._cancelButtonAccessibilityHint;
    }
    set cancelButtonAccessibilityHint(value) {
        this._cancelButtonAccessibilityHint = value;
    }
    get cancelButtonContentDescription() {
        return this._cancelButtonContentDescription;
    }
    set cancelButtonContentDescription(value) {
        this._cancelButtonContentDescription = value;
    }
    get barcodeAcceptedHint() {
        return this._barcodeAcceptedHint;
    }
    set barcodeAcceptedHint(value) {
        this._barcodeAcceptedHint = value;
    }
    get barcodeRejectedHint() {
        return this._barcodeRejectedHint;
    }
    set barcodeRejectedHint(value) {
        this._barcodeRejectedHint = value;
    }
}
__decorate([
    nameForSerialization('enabled')
], BarcodeCountNotInListActionSettings.prototype, "_enabled", void 0);
__decorate([
    nameForSerialization('acceptButtonText')
], BarcodeCountNotInListActionSettings.prototype, "_acceptButtonText", void 0);
__decorate([
    nameForSerialization('acceptButtonAccessibilityLabel')
], BarcodeCountNotInListActionSettings.prototype, "_acceptButtonAccessibilityLabel", void 0);
__decorate([
    nameForSerialization('acceptButtonAccessibilityHint')
], BarcodeCountNotInListActionSettings.prototype, "_acceptButtonAccessibilityHint", void 0);
__decorate([
    nameForSerialization('acceptButtonContentDescription')
], BarcodeCountNotInListActionSettings.prototype, "_acceptButtonContentDescription", void 0);
__decorate([
    nameForSerialization('rejectButtonText')
], BarcodeCountNotInListActionSettings.prototype, "_rejectButtonText", void 0);
__decorate([
    nameForSerialization('rejectButtonAccessibilityLabel')
], BarcodeCountNotInListActionSettings.prototype, "_rejectButtonAccessibilityLabel", void 0);
__decorate([
    nameForSerialization('rejectButtonAccessibilityHint')
], BarcodeCountNotInListActionSettings.prototype, "_rejectButtonAccessibilityHint", void 0);
__decorate([
    nameForSerialization('rejectButtonContentDescription')
], BarcodeCountNotInListActionSettings.prototype, "_rejectButtonContentDescription", void 0);
__decorate([
    nameForSerialization('cancelButtonText')
], BarcodeCountNotInListActionSettings.prototype, "_cancelButtonText", void 0);
__decorate([
    nameForSerialization('cancelButtonAccessibilityLabel')
], BarcodeCountNotInListActionSettings.prototype, "_cancelButtonAccessibilityLabel", void 0);
__decorate([
    nameForSerialization('cancelButtonAccessibilityHint')
], BarcodeCountNotInListActionSettings.prototype, "_cancelButtonAccessibilityHint", void 0);
__decorate([
    nameForSerialization('cancelButtonContentDescription')
], BarcodeCountNotInListActionSettings.prototype, "_cancelButtonContentDescription", void 0);
__decorate([
    nameForSerialization('barcodeAcceptedHint')
], BarcodeCountNotInListActionSettings.prototype, "_barcodeAcceptedHint", void 0);
__decorate([
    nameForSerialization('barcodeRejectedHint')
], BarcodeCountNotInListActionSettings.prototype, "_barcodeRejectedHint", void 0);

class BaseBarcodeCountView {
    static get defaultRecognizedBrush() {
        return BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.defaultRecognizedBrush;
    }
    static get defaultNotInListBrush() {
        return BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.defaultNotInListBrush;
    }
    static get defaultAcceptedBrush() {
        return BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.defaultAcceptedBrush;
    }
    static get defaultRejectedBrush() {
        return BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.defaultRejectedBrush;
    }
    static get hardwareTriggerSupported() {
        return BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.hardwareTriggerSupported;
    }
    get uiListener() {
        return this._uiListener;
    }
    set uiListener(listener) {
        this._uiListener = listener;
        this._controller.setUiListener(listener);
    }
    get listener() {
        return this._listener;
    }
    set listener(listener) {
        this._listener = listener;
        this._controller.setViewListener(listener);
    }
    get shouldDisableModeOnExitButtonTapped() {
        return this._shouldDisableModeOnExitButtonTapped;
    }
    set shouldDisableModeOnExitButtonTapped(newValue) {
        this._shouldDisableModeOnExitButtonTapped = newValue;
        this.updateNative();
    }
    get shouldShowUserGuidanceView() {
        return this._shouldShowUserGuidanceView;
    }
    set shouldShowUserGuidanceView(newValue) {
        this._shouldShowUserGuidanceView = newValue;
        this.updateNative();
    }
    get shouldShowListButton() {
        return this._shouldShowListButton;
    }
    set shouldShowListButton(newValue) {
        this._shouldShowListButton = newValue;
        this.updateNative();
    }
    get shouldShowExitButton() {
        return this._shouldShowExitButton;
    }
    set shouldShowExitButton(newValue) {
        this._shouldShowExitButton = newValue;
        this.updateNative();
    }
    get shouldShowShutterButton() {
        return this._shouldShowShutterButton;
    }
    set shouldShowShutterButton(newValue) {
        this._shouldShowShutterButton = newValue;
        this.updateNative();
    }
    get shouldShowHints() {
        return this._shouldShowHints;
    }
    set shouldShowHints(newValue) {
        this._shouldShowHints = newValue;
        this.updateNative();
    }
    get shouldShowClearHighlightsButton() {
        return this._shouldShowClearHighlightsButton;
    }
    set shouldShowClearHighlightsButton(newValue) {
        this._shouldShowClearHighlightsButton = newValue;
        this.updateNative();
    }
    get shouldShowSingleScanButton() {
        return this._shouldShowSingleScanButton;
    }
    set shouldShowSingleScanButton(newValue) {
        this._shouldShowSingleScanButton = newValue;
        this.updateNative();
    }
    get shouldShowFloatingShutterButton() {
        return this._shouldShowFloatingShutterButton;
    }
    set shouldShowFloatingShutterButton(newValue) {
        this._shouldShowFloatingShutterButton = newValue;
        this.updateNative();
    }
    get shouldShowToolbar() {
        return this._shouldShowToolbar;
    }
    set shouldShowToolbar(newValue) {
        this._shouldShowToolbar = newValue;
        this.updateNative();
    }
    get shouldShowScanAreaGuides() {
        return this._shouldShowScanAreaGuides;
    }
    set shouldShowScanAreaGuides(newValue) {
        this._shouldShowScanAreaGuides = newValue;
        this.updateNative();
    }
    get recognizedBrush() {
        return this._recognizedBrush;
    }
    set recognizedBrush(newValue) {
        this._recognizedBrush = newValue;
        this.updateNative();
    }
    get notInListBrush() {
        return this._notInListBrush;
    }
    set notInListBrush(newValue) {
        this._notInListBrush = newValue;
        this.updateNative();
    }
    get acceptedBrush() {
        return this._acceptedBrush;
    }
    set acceptedBrush(value) {
        this._acceptedBrush = value;
        this.updateNative();
    }
    get rejectedBrush() {
        return this._rejectedBrush;
    }
    set rejectedBrush(value) {
        this._rejectedBrush = value;
        this.updateNative();
    }
    get filterSettings() {
        return this._filterSettings;
    }
    set filterSettings(newValue) {
        this._filterSettings = newValue;
        this.updateNative();
    }
    get style() {
        return this._style;
    }
    get listButtonAccessibilityHint() {
        return this._listButtonAccessibilityHint;
    }
    set listButtonAccessibilityHint(newValue) {
        this._listButtonAccessibilityHint = newValue;
        this.updateNative();
    }
    get listButtonAccessibilityLabel() {
        return this._listButtonAccessibilityLabel;
    }
    set listButtonAccessibilityLabel(newValue) {
        this._listButtonAccessibilityLabel = newValue;
        this.updateNative();
    }
    get listButtonContentDescription() {
        return this._listButtonContentDescription;
    }
    set listButtonContentDescription(newValue) {
        this._listButtonContentDescription = newValue;
        this.updateNative();
    }
    get exitButtonAccessibilityHint() {
        return this._exitButtonAccessibilityHint;
    }
    set exitButtonAccessibilityHint(newValue) {
        this._exitButtonAccessibilityHint = newValue;
        this.updateNative();
    }
    get exitButtonAccessibilityLabel() {
        return this._exitButtonAccessibilityLabel;
    }
    set exitButtonAccessibilityLabel(newValue) {
        this._exitButtonAccessibilityLabel = newValue;
        this.updateNative();
    }
    get exitButtonContentDescription() {
        return this._exitButtonContentDescription;
    }
    set exitButtonContentDescription(newValue) {
        this._exitButtonContentDescription = newValue;
        this.updateNative();
    }
    get shutterButtonAccessibilityHint() {
        return this._shutterButtonAccessibilityHint;
    }
    set shutterButtonAccessibilityHint(newValue) {
        this._shutterButtonAccessibilityHint = newValue;
        this.updateNative();
    }
    get shutterButtonAccessibilityLabel() {
        return this._shutterButtonAccessibilityLabel;
    }
    set shutterButtonAccessibilityLabel(newValue) {
        this._shutterButtonAccessibilityLabel = newValue;
        this.updateNative();
    }
    get shutterButtonContentDescription() {
        return this._shutterButtonContentDescription;
    }
    set shutterButtonContentDescription(newValue) {
        this._shutterButtonContentDescription = newValue;
        this.updateNative();
    }
    get floatingShutterButtonAccessibilityHint() {
        return this._floatingShutterButtonAccessibilityHint;
    }
    set floatingShutterButtonAccessibilityHint(newValue) {
        this._floatingShutterButtonAccessibilityHint = newValue;
        this.updateNative();
    }
    get floatingShutterButtonAccessibilityLabel() {
        return this._floatingShutterButtonAccessibilityLabel;
    }
    set floatingShutterButtonAccessibilityLabel(newValue) {
        this._floatingShutterButtonAccessibilityLabel = newValue;
        this.updateNative();
    }
    get floatingShutterButtonContentDescription() {
        return this._floatingShutterButtonContentDescription;
    }
    set floatingShutterButtonContentDescription(newValue) {
        this._floatingShutterButtonContentDescription = newValue;
        this.updateNative();
    }
    get clearHighlightsButtonAccessibilityHint() {
        return this._clearHighlightsButtonAccessibilityHint;
    }
    set clearHighlightsButtonAccessibilityHint(newValue) {
        this._clearHighlightsButtonAccessibilityHint = newValue;
        this.updateNative();
    }
    get clearHighlightsButtonAccessibilityLabel() {
        return this._clearHighlightsButtonAccessibilityLabel;
    }
    set clearHighlightsButtonAccessibilityLabel(newValue) {
        this._clearHighlightsButtonAccessibilityLabel = newValue;
        this.updateNative();
    }
    get clearHighlightsButtonContentDescription() {
        return this._clearHighlightsButtonContentDescription;
    }
    set clearHighlightsButtonContentDescription(newValue) {
        this._clearHighlightsButtonContentDescription = newValue;
        this.updateNative();
    }
    get singleScanButtonAccessibilityHint() {
        return this._singleScanButtonAccessibilityHint;
    }
    set singleScanButtonAccessibilityHint(newValue) {
        this._singleScanButtonAccessibilityHint = newValue;
        this.updateNative();
    }
    get singleScanButtonAccessibilityLabel() {
        return this._singleScanButtonAccessibilityLabel;
    }
    set singleScanButtonAccessibilityLabel(newValue) {
        this._singleScanButtonAccessibilityLabel = newValue;
        this.updateNative();
    }
    get singleScanButtonContentDescription() {
        return this._singleScanButtonContentDescription;
    }
    set singleScanButtonContentDescription(newValue) {
        this._singleScanButtonContentDescription = newValue;
        this.updateNative();
    }
    get clearHighlightsButtonText() {
        return this._clearHighlightsButtonText;
    }
    set clearHighlightsButtonText(newValue) {
        this._clearHighlightsButtonText = newValue;
        this.updateNative();
    }
    get exitButtonText() {
        return this._exitButtonText;
    }
    set exitButtonText(newValue) {
        this._exitButtonText = newValue;
        this.updateNative();
    }
    get textForTapShutterToScanHint() {
        return this._textForTapShutterToScanHint;
    }
    set textForTapShutterToScanHint(newValue) {
        this._textForTapShutterToScanHint = newValue;
        this.updateNative();
    }
    get textForScanningHint() {
        return this._textForScanningHint;
    }
    set textForScanningHint(newValue) {
        this._textForScanningHint = newValue;
        this.updateNative();
    }
    get textForMoveCloserAndRescanHint() {
        return this._textForMoveCloserAndRescanHint;
    }
    set textForMoveCloserAndRescanHint(newValue) {
        this._textForMoveCloserAndRescanHint = newValue;
        this.updateNative();
    }
    get textForMoveFurtherAndRescanHint() {
        return this._textForMoveFurtherAndRescanHint;
    }
    set textForMoveFurtherAndRescanHint(newValue) {
        this._textForMoveFurtherAndRescanHint = newValue;
        this.updateNative();
    }
    get shouldShowListProgressBar() {
        return this._shouldShowListProgressBar;
    }
    set shouldShowListProgressBar(newValue) {
        this._shouldShowListProgressBar = newValue;
        this.updateNative();
    }
    get shouldShowTorchControl() {
        return this._shouldShowTorchControl;
    }
    set shouldShowTorchControl(newValue) {
        this._shouldShowTorchControl = newValue;
        this.updateNative();
    }
    get torchControlPosition() {
        return this._torchControlPosition;
    }
    set torchControlPosition(newValue) {
        this._torchControlPosition = newValue;
        this.updateNative();
    }
    get tapToUncountEnabled() {
        return this._tapToUncountEnabled;
    }
    set tapToUncountEnabled(newValue) {
        this._tapToUncountEnabled = newValue;
        this.updateNative();
    }
    get textForTapToUncountHint() {
        return this._textForTapToUncountHint;
    }
    set textForTapToUncountHint(newValue) {
        this._textForTapToUncountHint = newValue;
        this.updateNative();
    }
    get barcodeNotInListActionSettings() {
        return this._barcodeNotInListActionSettings;
    }
    set barcodeNotInListActionSettings(value) {
        this._barcodeNotInListActionSettings = value;
        this.updateNative();
    }
    get hardwareTriggerEnabled() {
        return this._hardwareTriggerEnabled;
    }
    set hardwareTriggerEnabled(newValue) {
        this._hardwareTriggerEnabled = newValue;
        this.updateNative();
    }
    static get barcodeCountDefaults() {
        return getBarcodeCountDefaults();
    }
    get context() {
        return this._context;
    }
    constructor({ context, barcodeCount, style, nativeView, autoCreateNativeView = true }) {
        this._uiListener = null;
        this._listener = null;
        this._shouldDisableModeOnExitButtonTapped = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldDisableModeOnExitButtonTapped;
        this._shouldShowUserGuidanceView = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowUserGuidanceView;
        this._shouldShowListButton = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowListButton;
        this._shouldShowExitButton = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowExitButton;
        this._shouldShowShutterButton = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowShutterButton;
        this._shouldShowHints = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowHints;
        this._shouldShowClearHighlightsButton = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowClearHighlightsButton;
        this._shouldShowSingleScanButton = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowSingleScanButton;
        this._shouldShowFloatingShutterButton = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowFloatingShutterButton;
        this._shouldShowToolbar = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowToolbar;
        this._shouldShowScanAreaGuides = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowScanAreaGuides;
        this._recognizedBrush = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.defaultRecognizedBrush;
        this._notInListBrush = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.defaultNotInListBrush;
        this._acceptedBrush = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.defaultAcceptedBrush;
        this._rejectedBrush = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.defaultRejectedBrush;
        this._filterSettings = null;
        this._listButtonAccessibilityHint = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.listButtonAccessibilityHint;
        this._listButtonAccessibilityLabel = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.listButtonAccessibilityLabel;
        this._listButtonContentDescription = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.listButtonContentDescription;
        this._exitButtonAccessibilityHint = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.exitButtonAccessibilityHint;
        this._exitButtonAccessibilityLabel = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.exitButtonAccessibilityLabel;
        this._exitButtonContentDescription = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.exitButtonContentDescription;
        this._shutterButtonAccessibilityHint = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shutterButtonAccessibilityHint;
        this._shutterButtonAccessibilityLabel = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shutterButtonAccessibilityLabel;
        this._shutterButtonContentDescription = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shutterButtonContentDescription;
        this._floatingShutterButtonAccessibilityHint = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.floatingShutterButtonAccessibilityHint;
        this._floatingShutterButtonAccessibilityLabel = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.floatingShutterButtonAccessibilityLabel;
        this._floatingShutterButtonContentDescription = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.floatingShutterButtonContentDescription;
        this._clearHighlightsButtonAccessibilityHint = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.clearHighlightsButtonAccessibilityHint;
        this._clearHighlightsButtonAccessibilityLabel = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.clearHighlightsButtonAccessibilityLabel;
        this._clearHighlightsButtonContentDescription = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.clearHighlightsButtonContentDescription;
        this._singleScanButtonAccessibilityHint = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.singleScanButtonAccessibilityHint;
        this._singleScanButtonAccessibilityLabel = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.singleScanButtonAccessibilityLabel;
        this._singleScanButtonContentDescription = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.singleScanButtonContentDescription;
        this._clearHighlightsButtonText = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.clearHighlightsButtonText;
        this._exitButtonText = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.exitButtonText;
        this._textForTapShutterToScanHint = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForTapShutterToScanHint;
        this._textForScanningHint = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForScanningHint;
        this._textForMoveCloserAndRescanHint = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForMoveCloserAndRescanHint;
        this._textForMoveFurtherAndRescanHint = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForMoveFurtherAndRescanHint;
        this._shouldShowListProgressBar = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowListProgressBar;
        this._toolbarSettings = null;
        this._shouldShowTorchControl = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowTorchControl;
        this._torchControlPosition = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.torchControlPosition;
        this._tapToUncountEnabled = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.tapToUncountEnabled;
        this._textForTapToUncountHint = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForTapToUncountHint;
        this._style = BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.style;
        this._barcodeNotInListActionSettings = new BarcodeCountNotInListActionSettings();
        this._hardwareTriggerEnabled = false;
        this.isViewCreated = false;
        this.autoCreateNativeView = true;
        this._style = style;
        this._context = context;
        this._barcodeCount = barcodeCount;
        this.nativeView = nativeView;
        this.autoCreateNativeView = autoCreateNativeView;
        this.isViewCreated = autoCreateNativeView;
        barcodeCount._context = context;
        this._controller = BarcodeCountViewController.forBarcodeCountAndBarcodeCountView(this, this._barcodeCount);
        this._controller.initialize(autoCreateNativeView);
    }
    dispose() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._controller.dispose();
            this.isViewCreated = false;
        });
    }
    clearHighlights() {
        return this._controller.clearHighlights();
    }
    setToolbarSettings(settings) {
        this._toolbarSettings = settings;
        this.updateNative();
    }
    setPositionAndSize(top, left, width, height, shouldBeUnderWebView) {
        return this._controller.setPositionAndSize(top, left, width, height, shouldBeUnderWebView);
    }
    show() {
        return this._controller.show();
    }
    hide() {
        return this._controller.hide();
    }
    setBrushForRecognizedBarcode(trackedBarcode, brush) {
        return this._controller.setBrushForRecognizedBarcode(trackedBarcode, brush);
    }
    setBrushForRecognizedBarcodeNotInList(trackedBarcode, brush) {
        return this._controller.setBrushForRecognizedBarcodeNotInList(trackedBarcode, brush);
    }
    setBrushForAcceptedBarcode(trackedBarcode, brush) {
        return this._controller.setBrushForAcceptedBarcode(trackedBarcode, brush);
    }
    setBrushForRejectedBarcode(trackedBarcode, brush) {
        return this._controller.setBrushForRejectedBarcode(trackedBarcode, brush);
    }
    enableHardwareTrigger(hardwareTriggerKeyCode) {
        return this._controller.enableHardwareTrigger(hardwareTriggerKeyCode);
    }
    createNativeView() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isViewCreated) {
                return Promise.resolve();
            }
            yield this._controller.createNativeView();
            this.isViewCreated = true;
        });
    }
    removeNativeView() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._controller.removeNativeView();
            this.isViewCreated = false;
        });
    }
    updateNative() {
        return this._controller.update();
    }
    toJSON() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const json = {
            View: {
                style: this.style,
                shouldDisableModeOnExitButtonTapped: this.shouldDisableModeOnExitButtonTapped,
                shouldShowUserGuidanceView: this.shouldShowUserGuidanceView,
                shouldShowListButton: this.shouldShowListButton,
                shouldShowExitButton: this.shouldShowExitButton,
                shouldShowShutterButton: this.shouldShowShutterButton,
                shouldShowHints: this.shouldShowHints,
                shouldShowClearHighlightsButton: this.shouldShowClearHighlightsButton,
                shouldShowSingleScanButton: this.shouldShowSingleScanButton,
                shouldShowFloatingShutterButton: this.shouldShowFloatingShutterButton,
                shouldShowToolbar: this.shouldShowToolbar,
                shouldShowScanAreaGuides: this.shouldShowScanAreaGuides,
                toolbarSettings: (_a = this._toolbarSettings) === null || _a === void 0 ? void 0 : _a.toJSON(),
                shouldShowTorchControl: this.shouldShowTorchControl,
                torchControlPosition: this.torchControlPosition,
                tapToUncountEnabled: this.tapToUncountEnabled,
                textForTapToUncountHint: this.textForTapToUncountHint,
                barcodeNotInListActionSettings: this.barcodeNotInListActionSettings.toJSON(),
                recognizedBrush: (_b = this.recognizedBrush) === null || _b === void 0 ? void 0 : _b.toJSON(),
                notInListBrush: (_c = this.notInListBrush) === null || _c === void 0 ? void 0 : _c.toJSON(),
                acceptedBrush: (_d = this.acceptedBrush) === null || _d === void 0 ? void 0 : _d.toJSON(),
                rejectedBrush: (_e = this.rejectedBrush) === null || _e === void 0 ? void 0 : _e.toJSON(),
                hardwareTriggerEnabled: this._hardwareTriggerEnabled
            },
            BarcodeCount: this._barcodeCount.toJSON()
        };
        if (this.listButtonAccessibilityHint !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.listButtonAccessibilityHint) {
            json.View.listButtonAccessibilityHint = this.listButtonAccessibilityHint; // iOS Only
        }
        if (this.listButtonAccessibilityLabel !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.listButtonAccessibilityLabel) {
            json.View.listButtonAccessibilityHint = this.listButtonAccessibilityLabel; // iOS Only
        }
        if (this.listButtonContentDescription !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.listButtonContentDescription) {
            json.View.listButtonContentDescription = this.listButtonContentDescription; // Android Only
        }
        if (this.exitButtonAccessibilityHint !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.exitButtonAccessibilityHint) {
            json.View.exitButtonAccessibilityHint = this.exitButtonAccessibilityHint; // iOS Only
        }
        if (this.exitButtonAccessibilityLabel !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.exitButtonAccessibilityLabel) {
            json.View.exitButtonAccessibilityLabel = this.exitButtonAccessibilityLabel; // iOS Only
        }
        if (this.exitButtonContentDescription !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.exitButtonContentDescription) {
            json.View.exitButtonContentDescription = this.exitButtonContentDescription; // Android Only
        }
        if (this.shutterButtonAccessibilityHint !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shutterButtonAccessibilityHint) {
            json.View.shutterButtonAccessibilityHint = this.shutterButtonAccessibilityHint; // iOS Only
        }
        if (this.shutterButtonAccessibilityLabel !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shutterButtonAccessibilityLabel) {
            json.View.shutterButtonAccessibilityLabel = this.shutterButtonAccessibilityLabel; // iOS Only
        }
        if (this.shutterButtonContentDescription !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shutterButtonContentDescription) {
            json.View.shutterButtonContentDescription = this.shutterButtonContentDescription; // Android Only
        }
        if (this.floatingShutterButtonAccessibilityHint !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.floatingShutterButtonAccessibilityHint) {
            json.View.floatingShutterButtonAccessibilityHint = this.floatingShutterButtonAccessibilityHint; // iOS Only
        }
        if (this.floatingShutterButtonAccessibilityLabel !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.floatingShutterButtonAccessibilityLabel) {
            json.View.floatingShutterButtonAccessibilityLabel = this.floatingShutterButtonAccessibilityLabel; // iOS Only
        }
        if (this.floatingShutterButtonContentDescription !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.floatingShutterButtonContentDescription) {
            json.View.floatingShutterButtonContentDescription = this.floatingShutterButtonContentDescription; // Android Only
        }
        if (this.clearHighlightsButtonAccessibilityHint !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.clearHighlightsButtonAccessibilityHint) {
            json.View.clearHighlightsButtonAccessibilityHint = this.clearHighlightsButtonAccessibilityHint; // iOS Only
        }
        if (this.clearHighlightsButtonAccessibilityLabel !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.clearHighlightsButtonAccessibilityLabel) {
            json.View.clearHighlightsButtonAccessibilityLabel = this.clearHighlightsButtonAccessibilityLabel; // iOS Only
        }
        if (this.clearHighlightsButtonContentDescription !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.clearHighlightsButtonContentDescription) {
            json.View.clearHighlightsButtonContentDescription = this.clearHighlightsButtonContentDescription; // Android Only
        }
        if (this.singleScanButtonAccessibilityHint !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.singleScanButtonAccessibilityHint) {
            json.View.singleScanButtonAccessibilityHint = this.singleScanButtonAccessibilityHint; // iOS Only
        }
        if (this.singleScanButtonAccessibilityLabel !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.singleScanButtonAccessibilityLabel) {
            json.View.singleScanButtonAccessibilityLabel = this.singleScanButtonAccessibilityLabel; // iOS Only
        }
        if (this.singleScanButtonContentDescription !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.singleScanButtonContentDescription) {
            json.View.singleScanButtonContentDescription = this.singleScanButtonContentDescription; // Android Only
        }
        if (this.clearHighlightsButtonText !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.clearHighlightsButtonText) {
            json.View.clearHighlightsButtonText = this.clearHighlightsButtonText;
        }
        if (this.exitButtonText !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.exitButtonText) {
            json.View.exitButtonText = this.exitButtonText;
        }
        if (this.textForTapShutterToScanHint !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForTapShutterToScanHint) {
            json.View.textForTapShutterToScanHint = this.textForTapShutterToScanHint;
        }
        if (this.textForScanningHint !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForScanningHint) {
            json.View.textForScanningHint = this.textForScanningHint;
        }
        if (this.textForMoveCloserAndRescanHint !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForMoveCloserAndRescanHint) {
            json.View.textForMoveCloserAndRescanHint = this.textForMoveCloserAndRescanHint;
        }
        if (this.textForMoveFurtherAndRescanHint !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForMoveFurtherAndRescanHint) {
            json.View.textForMoveFurtherAndRescanHint = this.textForMoveFurtherAndRescanHint;
        }
        if (this.shouldShowListProgressBar !== BaseBarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowListProgressBar) {
            json.View.shouldShowListProgressBar = this.shouldShowListProgressBar;
        }
        if (this.recognizedBrush) {
            json.View.recognizedBrush = (_f = this.recognizedBrush) === null || _f === void 0 ? void 0 : _f.toJSON();
        }
        if (this.notInListBrush) {
            json.View.notInListBrush = (_g = this.notInListBrush) === null || _g === void 0 ? void 0 : _g.toJSON();
        }
        if (this.filterSettings) {
            json.View.filterSettings = (_h = this.filterSettings) === null || _h === void 0 ? void 0 : _h.toJSON();
        }
        return json;
    }
}
__decorate([
    ignoreFromSerialization
], BaseBarcodeCountView.prototype, "isViewCreated", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodeCountView.prototype, "autoCreateNativeView", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodeCountView, "barcodeCountDefaults", null);

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
function parseBrush(brushJson) {
    return new Brush(Color.fromHex(brushJson.fillColor), Color.fromHex(brushJson.strokeColor), brushJson.strokeWidth);
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
            mappingEnabled: jsonDefaults.BarcodeCountSettings.mappingEnabled,
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
            defaultNotInListBrush: parseBrush(viewJsonDefaults.notInListBrush),
            defaultRecognizedBrush: parseBrush(viewJsonDefaults.recognizedBrush),
            defaultAcceptedBrush: parseBrush(viewJsonDefaults.acceptedBrush),
            defaultRejectedBrush: parseBrush(viewJsonDefaults.rejectedBrush),
            shouldShowScanAreaGuides: viewJsonDefaults.shouldShowScanAreaGuides,
            clearHighlightsButtonText: viewJsonDefaults.clearHighlightsButtonText,
            exitButtonText: viewJsonDefaults.exitButtonText,
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
            tapToUncountEnabled: viewJsonDefaults.tapToUncountEnabled,
            textForTapToUncountHint: viewJsonDefaults.textForTapToUncountHint,
            hardwareTriggerSupported: viewJsonDefaults.hardwareTriggerSupported,
        }
    };
    return barcodeCountDefaults;
}

function getBarcodeBatchDefaults() {
    return FactoryMaker.getInstance('BarcodeBatchDefaults');
}
function parseBarcodeBatchDefaults(jsonDefaults) {
    const barcodeBatchDefaults = {
        RecommendedCameraSettings: CameraSettings
            .fromJSON(jsonDefaults.RecommendedCameraSettings),
        BarcodeBatchBasicOverlay: {
            defaultStyle: jsonDefaults.BarcodeBatchBasicOverlay.defaultStyle,
            styles: Object
                .keys(jsonDefaults.BarcodeBatchBasicOverlay.Brushes)
                .reduce((previousValue, currentValue) => {
                return Object.assign(Object.assign({}, previousValue), { [currentValue]: {
                        DefaultBrush: {
                            fillColor: Color
                                .fromJSON(jsonDefaults.BarcodeBatchBasicOverlay.
                                Brushes[currentValue].fillColor),
                            strokeColor: Color
                                .fromJSON(jsonDefaults.BarcodeBatchBasicOverlay.
                                Brushes[currentValue].strokeColor),
                            strokeWidth: jsonDefaults.BarcodeBatchBasicOverlay.
                                Brushes[currentValue].strokeWidth,
                        },
                    } });
            }, {}),
        }
    };
    return barcodeBatchDefaults;
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
            showLoadingDialog: jsonDefaults.ViewSettings.showLoadingDialog,
            loadingDialogTextForPicking: jsonDefaults.ViewSettings.loadingDialogTextForPicking,
            loadingDialogTextForUnpicking: jsonDefaults.ViewSettings.loadingDialogTextForUnpicking,
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
            hardwareTriggerSupported: jsonDefaults.hardwareTriggerSupported,
            shouldShowCarousel: jsonDefaults.shouldShowCarousel,
            shouldShowFinishButton: jsonDefaults.shouldShowFinishButton,
            shouldShowHints: jsonDefaults.shouldShowHints,
            shouldShowPauseButton: jsonDefaults.shouldShowPauseButton,
            shouldShowProgressBar: jsonDefaults.shouldShowProgressBar,
            shouldShowUserGuidanceView: jsonDefaults.shouldShowUserGuidanceView,
            shouldShowTorchControl: jsonDefaults.shouldShowTorchControl,
            shouldShowZoomControl: jsonDefaults.shouldShowZoomControl,
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
            scanIntention: jsonDefaults.SparkScanSettings.scanIntention,
        },
        SparkScanView: {
            brush: new Brush(Color.fromJSON(jsonDefaults.SparkScanView.brush.fillColor), Color.fromJSON(jsonDefaults.SparkScanView.brush.strokeColor), jsonDefaults.SparkScanView.brush.strokeWidth),
            torchControlVisible: jsonDefaults.SparkScanView.torchControlVisible,
            scanningBehaviorButtonVisible: jsonDefaults.SparkScanView.scanningBehaviorButtonVisible,
            barcodeCountButtonVisible: jsonDefaults.SparkScanView.barcodeCountButtonVisible,
            barcodeFindButtonVisible: jsonDefaults.SparkScanView.barcodeFindButtonVisible,
            targetModeButtonVisible: jsonDefaults.SparkScanView.targetModeButtonVisible,
            previewSizeControlVisible: jsonDefaults.SparkScanView.previewSizeControlVisible,
            triggerButtonAnimationColor: jsonDefaults.SparkScanView.triggerButtonAnimationColor || null,
            triggerButtonExpandedColor: jsonDefaults.SparkScanView.triggerButtonExpandedColor || null,
            triggerButtonCollapsedColor: jsonDefaults.SparkScanView.triggerButtonCollapsedColor || null,
            triggerButtonTintColor: jsonDefaults.SparkScanView.triggerButtonTintColor || null,
            triggerButtonVisible: jsonDefaults.SparkScanView.triggerButtonVisible || null,
            triggerButtonImage: jsonDefaults.SparkScanView.triggerButtonImage || null,
            toolbarBackgroundColor: jsonDefaults.SparkScanView.toolbarBackgroundColor ? Color
                .fromJSON(jsonDefaults.SparkScanView.toolbarBackgroundColor) : null,
            toolbarIconActiveTintColor: jsonDefaults.SparkScanView.toolbarIconActiveTintColor ? Color
                .fromJSON(jsonDefaults.SparkScanView.toolbarIconActiveTintColor) : null,
            toolbarIconInactiveTintColor: jsonDefaults.SparkScanView.toolbarIconInactiveTintColor ? Color
                .fromJSON(jsonDefaults.SparkScanView.toolbarIconInactiveTintColor) : null,
            cameraSwitchButtonVisible: jsonDefaults.SparkScanView.cameraSwitchButtonVisible,
            SparkScanViewSettings: {
                triggerButtonCollapseTimeout: sparkScanViewSettingsDefaults.triggerButtonCollapseTimeout,
                defaultScanningMode: (fromJSON) => {
                    return fromJSON(JSON.parse(sparkScanViewSettingsDefaults.defaultScanningMode));
                },
                defaultTorchState: sparkScanViewSettingsDefaults.defaultTorchState,
                soundEnabled: sparkScanViewSettingsDefaults.soundEnabled,
                hapticEnabled: sparkScanViewSettingsDefaults.hapticEnabled,
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
                defaultMiniPreviewSize: sparkScanViewSettingsDefaults.defaultMiniPreviewSize,
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
function loadBarcodeArDefaults(jsonDefaults) {
    const defaults = parseBarcodeArDefaults(jsonDefaults);
    FactoryMaker.bindInstanceIfNotExists('BarcodeArDefaults', defaults);
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
function loadBarcodeBatchDefaults(jsonDefaults) {
    const defaults = parseBarcodeBatchDefaults(jsonDefaults);
    FactoryMaker.bindInstanceIfNotExists('BarcodeBatchDefaults', defaults);
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
        var _a;
        const sessionJson = JSON.parse(json.session);
        const session = new BarcodeCaptureSession();
        session._newlyRecognizedBarcode = sessionJson.newlyRecognizedBarcode != null ?
            Barcode.fromJSON(sessionJson.newlyRecognizedBarcode) :
            null;
        session._newlyLocalizedBarcodes = sessionJson.newlyLocalizedBarcodes
            .map(LocalizedOnlyBarcode.fromJSON);
        session._frameSequenceID = sessionJson.frameSequenceId;
        session.frameId = (_a = json.frameId) !== null && _a !== void 0 ? _a : '';
        return session;
    }
    reset() {
        return this.controller.reset();
    }
}

var BarcodeCaptureListenerEvents;
(function (BarcodeCaptureListenerEvents) {
    BarcodeCaptureListenerEvents["didUpdateSession"] = "BarcodeCaptureListener.didUpdateSession";
    BarcodeCaptureListenerEvents["didScan"] = "BarcodeCaptureListener.didScan";
})(BarcodeCaptureListenerEvents || (BarcodeCaptureListenerEvents = {}));
class BarcodeCaptureListenerController extends BaseNewController {
    static forBarcodeCapture(barcodeCapture) {
        const controller = new BarcodeCaptureListenerController();
        controller.barcodeCapture = barcodeCapture;
        return controller;
    }
    constructor() {
        super('BarcodeCaptureListenerProxy');
    }
    reset() {
        return this._proxy.$resetBarcodeCaptureSession();
    }
    setModeEnabledState(enabled) {
        this._proxy.$setBarcodeCaptureModeEnabledState({ enabled: enabled });
    }
    updateBarcodeCaptureMode() {
        return this._proxy.$updateBarcodeCaptureMode({ modeJson: JSON.stringify(this.barcodeCapture.toJSON()) });
    }
    applyBarcodeCaptureModeSettings(newSettings) {
        return this._proxy.$applyBarcodeCaptureModeSettings({ modeSettingsJson: JSON.stringify(newSettings.toJSON()) });
    }
    updateBarcodeCaptureOverlay(overlay) {
        return this._proxy.$updateBarcodeCaptureOverlay({ overlayJson: JSON.stringify(overlay.toJSON()) });
    }
    subscribeListener() {
        this._proxy.$registerBarcodeCaptureListenerForEvents();
        this._proxy.on$didUpdateSession = (ev) => __awaiter(this, void 0, void 0, function* () {
            const payload = EventDataParser.parse(ev.data);
            if (payload === null) {
                console.error('BarcodeCaptureListenerController.subscribeListener: didUpdateSession payload is null');
                return;
            }
            const session = BarcodeCaptureSession.fromJSON(payload);
            yield this.notifyListenersOfDidUpdateSession(session);
            this._proxy.$finishBarcodeCaptureDidUpdateSession({ enabled: this.barcodeCapture.isEnabled });
        });
        this._proxy.on$didScan = (ev) => __awaiter(this, void 0, void 0, function* () {
            const payload = EventDataParser.parse(ev.data);
            if (payload === null) {
                console.error('BarcodeCaptureListenerController.subscribeListener: didScan payload is null');
                return;
            }
            const session = BarcodeCaptureSession.fromJSON(payload);
            yield this.notifyListenersOfDidScan(session);
            this._proxy.$finishBarcodeCaptureDidScan({ enabled: this.barcodeCapture.isEnabled });
        });
    }
    unsubscribeListener() {
        this._proxy.$unregisterBarcodeCaptureListenerForEvents();
        this._proxy.dispose();
    }
    notifyListenersOfDidUpdateSession(session) {
        return __awaiter(this, void 0, void 0, function* () {
            const mode = this.barcodeCapture;
            for (const listener of mode.listeners) {
                if (listener.didUpdateSession) {
                    listener.didUpdateSession(this.barcodeCapture, session, () => CameraController.getFrame(session.frameId));
                }
            }
        });
    }
    notifyListenersOfDidScan(session) {
        return __awaiter(this, void 0, void 0, function* () {
            const mode = this.barcodeCapture;
            for (const listener of mode.listeners) {
                if (listener.didScan) {
                    listener.didScan(this.barcodeCapture, session, () => CameraController.getFrame(session.frameId));
                }
            }
        });
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

class BarcodeArSessionController {
    get _proxy() {
        return FactoryMaker.getInstance('BarcodeArSessionProxy');
    }
    resetSession() {
        return this._proxy.resetSession();
    }
}

class BarcodeArSession extends DefaultSerializeable {
    static fromJSON(json) {
        const sessionJson = JSON.parse(json);
        const session = new BarcodeArSession();
        session._addedTrackedBarcodes = sessionJson.addedTrackedBarcodes
            .map((trackedBarcodeJSON) => {
            return TrackedBarcode
                .fromJSON(trackedBarcodeJSON, sessionJson.frameSequenceId);
        });
        session._removedTrackedBarcodes = sessionJson.removedTrackedBarcodes;
        session._trackedBarcodes = Object.keys(sessionJson.allTrackedBarcodes)
            .reduce((trackedBarcodes, identifier) => {
            trackedBarcodes[identifier] = TrackedBarcode
                .fromJSON(sessionJson.allTrackedBarcodes[identifier], sessionJson.frameSequenceId);
            return trackedBarcodes;
        }, {});
        return session;
    }
    constructor() {
        super();
        this.sessionController = new BarcodeArSessionController();
    }
    get addedTrackedBarcodes() {
        return this._addedTrackedBarcodes;
    }
    get removedTrackedBarcodes() {
        return this._removedTrackedBarcodes;
    }
    get trackedBarcodes() {
        return this._trackedBarcodes;
    }
    reset() {
        return this.sessionController.resetSession();
    }
}
__decorate([
    nameForSerialization('addedTrackedBarcodes')
], BarcodeArSession.prototype, "_addedTrackedBarcodes", void 0);
__decorate([
    nameForSerialization('removedTrackedBarcodes')
], BarcodeArSession.prototype, "_removedTrackedBarcodes", void 0);
__decorate([
    nameForSerialization('trackedBarcodes')
], BarcodeArSession.prototype, "_trackedBarcodes", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeArSession.prototype, "sessionController", void 0);

var BarcodeArListenerEvents;
(function (BarcodeArListenerEvents) {
    BarcodeArListenerEvents["didUpdateSession"] = "BarcodeArListener.didUpdateSession";
})(BarcodeArListenerEvents || (BarcodeArListenerEvents = {}));
class BarcodeArListenerController {
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    static forBarcodeAr(barcodeAr) {
        const controller = new BarcodeArListenerController();
        controller.barcodeAr = barcodeAr;
        return controller;
    }
    update() {
        const barcodeAr = this.barcodeAr.toJSON();
        const json = JSON.stringify(barcodeAr);
        return this._proxy.updateMode(json);
    }
    reset() {
        return this._proxy.resetBarcodeAr();
    }
    setModeEnabledState(enabled) {
        this._proxy.setModeEnabledState(enabled);
    }
    subscribeListener() {
        var _a, _b;
        this._proxy.registerBarcodeArListener();
        (_b = (_a = this._proxy).subscribeDidUpdateSession) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.eventEmitter.on(BarcodeArListenerEvents.didUpdateSession, (data) => __awaiter(this, void 0, void 0, function* () {
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeArListenerController didUpdateSession payload is null');
                return;
            }
            const session = BarcodeArSession.fromJSON(payload.session);
            yield this.notifyListenersOfDidUpdateSession(session, payload.frameId);
            this._proxy.finishOnDidUpdateSession();
        }));
    }
    unsubscribeListener() {
        this._proxy.unregisterBarcodeArListener();
        this.eventEmitter.removeAllListeners(BarcodeArListenerEvents.didUpdateSession);
    }
    updateFeedback(feedbackJson) {
        this._proxy.updateFeedback(feedbackJson);
    }
    get _proxy() {
        return FactoryMaker.getInstance('BarcodeArListenerProxy');
    }
    notifyListenersOfDidUpdateSession(session, frameId) {
        return __awaiter(this, void 0, void 0, function* () {
            const mode = this.barcodeAr;
            mode.isInListenerCallback = true;
            for (const listener of mode.listeners) {
                if (listener.didUpdateSession) {
                    yield listener.didUpdateSession(this.barcodeAr, session, () => CameraController.getFrame(frameId));
                }
            }
            mode.isInListenerCallback = false;
        });
    }
}

class BarcodeArFeedback extends DefaultSerializeable {
    static get defaultFeedback() {
        const feedback = new BarcodeArFeedback();
        feedback.scanned = BarcodeArFeedback.barcodeArDefaults.Feedback.scanned;
        feedback.tapped = BarcodeArFeedback.barcodeArDefaults.Feedback.tapped;
        return feedback;
    }
    static get barcodeArDefaults() {
        return getBarcodeArDefaults();
    }
    static fromJSON(json) {
        const scanned = Feedback.fromJSON(json.scanned);
        const tapped = Feedback.fromJSON(json.tapped);
        const feedback = new BarcodeArFeedback();
        feedback.scanned = scanned;
        feedback.tapped = tapped;
        return feedback;
    }
    get scanned() {
        return this._scanned;
    }
    set scanned(scanned) {
        this._scanned = scanned;
        this.updateFeedback();
    }
    get tapped() {
        return this._tapped;
    }
    set tapped(tapped) {
        this._tapped = tapped;
        this.updateFeedback();
    }
    updateFeedback() {
        var _a;
        (_a = this.listenerController) === null || _a === void 0 ? void 0 : _a.updateFeedback(JSON.stringify(this.toJSON()));
    }
    constructor() {
        super();
        this.listenerController = null;
        this._scanned = BarcodeArFeedback.barcodeArDefaults.Feedback.scanned;
        this._tapped = BarcodeArFeedback.barcodeArDefaults.Feedback.tapped;
        this.scanned = new Feedback(null, null);
        this.tapped = new Feedback(null, null);
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeArFeedback.prototype, "listenerController", void 0);
__decorate([
    nameForSerialization('scanned')
], BarcodeArFeedback.prototype, "_scanned", void 0);
__decorate([
    nameForSerialization('tapped')
], BarcodeArFeedback.prototype, "_tapped", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeArFeedback, "barcodeArDefaults", null);

class BarcodeAr extends DefaultSerializeable {
    static get barcodeArDefaults() {
        return getBarcodeArDefaults();
    }
    static get recommendedCameraSettings() {
        return BarcodeAr.barcodeArDefaults.RecommendedCameraSettings;
    }
    static forContext(context, settings) {
        return new BarcodeAr(context, settings);
    }
    constructor(context, settings) {
        super();
        this.type = 'barcodeAr';
        this.privateContext = null;
        this.isInListenerCallback = false;
        this._feedback = BarcodeArFeedback.defaultFeedback;
        this.listeners = [];
        this._context = context;
        this._settings = settings;
        this.listenerController = BarcodeArListenerController.forBarcodeAr(this);
        this._feedback.listenerController = this.listenerController;
    }
    applySettings(settings) {
        this._settings = settings;
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
    subscribeNativeListeners() {
        this.listenerController.subscribeListener();
    }
    unsubscribeNativeListeners() {
        this.listenerController.unsubscribeListener();
    }
    didChange() {
        return this.listenerController.update();
    }
    get _context() {
        return this.privateContext;
    }
    set _context(newContext) {
        this.privateContext = newContext;
    }
    get feedback() {
        return this._feedback;
    }
    set feedback(feedback) {
        this._feedback = feedback;
        this._feedback.listenerController = this.listenerController;
        this.listenerController.updateFeedback(JSON.stringify(feedback.toJSON()));
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeAr.prototype, "privateContext", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeAr.prototype, "listenerController", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeAr.prototype, "isInListenerCallback", void 0);
__decorate([
    nameForSerialization('feedback')
], BarcodeAr.prototype, "_feedback", void 0);
__decorate([
    nameForSerialization('settings')
], BarcodeAr.prototype, "_settings", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeAr.prototype, "listeners", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeAr, "barcodeArDefaults", null);

class BarcodeArCircleHighlight extends Observable {
    static get barcodeArDefaults() {
        return getBarcodeArDefaults();
    }
    constructor(barcode, preset) {
        super();
        this._type = 'barcodeArCircleHighlight';
        this._barcode = barcode;
        this._preset = preset;
        this._brush = BarcodeArCircleHighlight.barcodeArDefaults.BarcodeArView.circleHighlightPresets[preset].brush;
        this._size = BarcodeArCircleHighlight.barcodeArDefaults.BarcodeArView.circleHighlightPresets[preset].size;
        this._icon = BarcodeArCircleHighlight.barcodeArDefaults.BarcodeArView.defaultHighlightIcon;
    }
    get barcode() {
        return this._barcode;
    }
    get brush() {
        return this._brush;
    }
    set brush(brush) {
        this._brush = brush;
        this.notifyListeners('brush', brush);
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        this._icon = value;
        this.notifyListeners('icon', value);
    }
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
        this.notifyListeners('size', value);
    }
}
__decorate([
    nameForSerialization('type')
], BarcodeArCircleHighlight.prototype, "_type", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeArCircleHighlight.prototype, "_barcode", void 0);
__decorate([
    nameForSerialization('brush')
], BarcodeArCircleHighlight.prototype, "_brush", void 0);
__decorate([
    nameForSerialization('icon')
], BarcodeArCircleHighlight.prototype, "_icon", void 0);
__decorate([
    nameForSerialization('preset')
], BarcodeArCircleHighlight.prototype, "_preset", void 0);
__decorate([
    nameForSerialization('size')
], BarcodeArCircleHighlight.prototype, "_size", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeArCircleHighlight, "barcodeArDefaults", null);

class BarcodeArInfoAnnotation extends Observable {
    static get barcodeArDefaults() {
        return getBarcodeArDefaults();
    }
    constructor(barcode) {
        super();
        this._type = 'barcodeArInfoAnnotation';
        this._annotationTrigger = BarcodeArInfoAnnotation.barcodeArDefaults
            .BarcodeArView.defaultInfoAnnotationTrigger;
        this._anchor = BarcodeArInfoAnnotation.barcodeArDefaults
            .BarcodeArView.defaultInfoAnnotationAnchor;
        this._backgroundColor = BarcodeArInfoAnnotation.barcodeArDefaults
            .BarcodeArView.defaultInfoAnnotationBackgroundColor;
        this._body = [];
        this._footer = null;
        this._hasTip = BarcodeArInfoAnnotation.barcodeArDefaults
            .BarcodeArView.defaultInfoAnnotationHasTip;
        this._header = null;
        this._isEntireAnnotationTappable = BarcodeArInfoAnnotation.barcodeArDefaults
            .BarcodeArView.defaultInfoAnnotationEntireAnnotationTappable;
        this._listener = null;
        this._hasListener = false;
        this._width = BarcodeArInfoAnnotation.barcodeArDefaults.BarcodeArView.defaultInfoAnnotationWidth;
        this.footerChangedListener = () => {
            this.notifyListeners('footer', this._footer);
        };
        this.headerChangedListener = () => {
            this.notifyListeners('header', this._header);
        };
        this._barcode = barcode;
    }
    get anchor() {
        return this._anchor;
    }
    set anchor(newValue) {
        this._anchor = newValue;
        this.notifyListeners('anchor', newValue);
    }
    get annotationTrigger() {
        return this._annotationTrigger;
    }
    set annotationTrigger(newValue) {
        this._annotationTrigger = newValue;
        this.notifyListeners('annotationTrigger', newValue);
    }
    get backgroundColor() {
        return this._backgroundColor;
    }
    set backgroundColor(newValue) {
        this._backgroundColor = newValue;
        this.notifyListeners('backgroundColor', newValue);
    }
    get barcode() {
        return this._barcode;
    }
    get body() {
        return this._body;
    }
    set body(newValue) {
        this._body = newValue;
        for (const body of newValue) {
            body.addListener(() => {
                this.notifyListeners('body', newValue);
            });
        }
        this.notifyListeners('body', newValue);
    }
    get footer() {
        return this._footer;
    }
    set footer(newValue) {
        var _a, _b;
        (_a = this._footer) === null || _a === void 0 ? void 0 : _a.removeListener(this.footerChangedListener);
        this._footer = newValue;
        (_b = this._footer) === null || _b === void 0 ? void 0 : _b.addListener(this.footerChangedListener);
        this.notifyListeners('footer', newValue);
    }
    get hasTip() {
        return this._hasTip;
    }
    set hasTip(newValue) {
        this._hasTip = newValue;
        this.notifyListeners('hasTip', newValue);
    }
    get header() {
        return this._header;
    }
    set header(newValue) {
        var _a, _b;
        (_a = this._header) === null || _a === void 0 ? void 0 : _a.removeListener(this.headerChangedListener);
        this._header = newValue;
        (_b = this._header) === null || _b === void 0 ? void 0 : _b.addListener(this.headerChangedListener);
        this.notifyListeners('header', newValue);
    }
    get isEntireAnnotationTappable() {
        return this._isEntireAnnotationTappable;
    }
    set isEntireAnnotationTappable(newValue) {
        this._isEntireAnnotationTappable = newValue;
        this.notifyListeners('isEntireAnnotationTappable', newValue);
    }
    get listener() {
        return this._listener;
    }
    set listener(newValue) {
        this._listener = newValue;
        this._hasListener = newValue != null;
        this.notifyListeners('listener', newValue);
    }
    get width() {
        return this._width;
    }
    set width(newValue) {
        this._width = newValue;
        this.notifyListeners('width', newValue);
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeArInfoAnnotation.prototype, "_barcode", void 0);
__decorate([
    nameForSerialization('type')
], BarcodeArInfoAnnotation.prototype, "_type", void 0);
__decorate([
    nameForSerialization('annotationTrigger')
], BarcodeArInfoAnnotation.prototype, "_annotationTrigger", void 0);
__decorate([
    nameForSerialization('anchor')
], BarcodeArInfoAnnotation.prototype, "_anchor", void 0);
__decorate([
    nameForSerialization('backgroundColor')
], BarcodeArInfoAnnotation.prototype, "_backgroundColor", void 0);
__decorate([
    nameForSerialization('body')
], BarcodeArInfoAnnotation.prototype, "_body", void 0);
__decorate([
    nameForSerialization('footer')
], BarcodeArInfoAnnotation.prototype, "_footer", void 0);
__decorate([
    nameForSerialization('hasTip')
], BarcodeArInfoAnnotation.prototype, "_hasTip", void 0);
__decorate([
    nameForSerialization('header')
], BarcodeArInfoAnnotation.prototype, "_header", void 0);
__decorate([
    nameForSerialization('isEntireAnnotationTappable')
], BarcodeArInfoAnnotation.prototype, "_isEntireAnnotationTappable", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeArInfoAnnotation.prototype, "_listener", void 0);
__decorate([
    nameForSerialization('hasListener')
], BarcodeArInfoAnnotation.prototype, "_hasListener", void 0);
__decorate([
    nameForSerialization('width')
], BarcodeArInfoAnnotation.prototype, "_width", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeArInfoAnnotation, "barcodeArDefaults", null);

class BarcodeArInfoAnnotationBodyComponent extends Observable {
    constructor() {
        super(...arguments);
        this._isRightIconTappable = BarcodeArInfoAnnotationBodyComponent
            .barcodeArDefaults.BarcodeArView.defaultInfoAnnotationBodyElementRightIconTappable;
        this._isLeftIconTappable = BarcodeArInfoAnnotationBodyComponent
            .barcodeArDefaults.BarcodeArView.defaultInfoAnnotationBodyElementLeftIconTappable;
        this._rightIcon = BarcodeArInfoAnnotationBodyComponent
            .barcodeArDefaults.BarcodeArView.defaultInfoAnnotationBodyElementRightIcon;
        this._leftIcon = BarcodeArInfoAnnotationBodyComponent
            .barcodeArDefaults.BarcodeArView.defaultInfoAnnotationBodyElementLeftIcon;
        this._text = BarcodeArInfoAnnotationBodyComponent
            .barcodeArDefaults.BarcodeArView.defaultInfoAnnotationBodyElementText;
        this._textAlign = TextAlignment.Center;
        this._textColor = BarcodeArInfoAnnotationBodyComponent
            .barcodeArDefaults.BarcodeArView.defaultInfoAnnotationBodyElementTextColor;
        this._textSize = BarcodeArInfoAnnotationBodyComponent
            .barcodeArDefaults.BarcodeArView.defaultInfoAnnotationBodyElementTextSize;
        this._fontFamily = FontFamily.SystemDefault;
    }
    static get barcodeArDefaults() {
        return getBarcodeArDefaults();
    }
    get isRightIconTappable() {
        return this._isRightIconTappable;
    }
    set isRightIconTappable(value) {
        this._isRightIconTappable = value;
        this.notifyListeners('isRightIconTappable', value);
    }
    get isLeftIconTappable() {
        return this._isLeftIconTappable;
    }
    set isLeftIconTappable(value) {
        this._isLeftIconTappable = value;
        this.notifyListeners('isLeftIconTappable', value);
    }
    get rightIcon() {
        return this._rightIcon;
    }
    set rightIcon(value) {
        this._rightIcon = value;
        this.notifyListeners('rightIcon', value);
    }
    get leftIcon() {
        return this._leftIcon;
    }
    set leftIcon(value) {
        this._leftIcon = value;
        this.notifyListeners('leftIcon', value);
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
        this.notifyListeners('text', value);
    }
    get textAlign() {
        return this._textAlign;
    }
    set textAlign(value) {
        this._textAlign = value;
        this.notifyListeners('textAlign', value);
    }
    get textColor() {
        return this._textColor;
    }
    set textColor(value) {
        this._textColor = value;
        this.notifyListeners('textColor', value);
    }
    get textSize() {
        return this._textSize;
    }
    set textSize(value) {
        this._textSize = value;
        this.notifyListeners('textSize', value);
    }
    get fontFamily() {
        return this._fontFamily;
    }
    set fontFamily(value) {
        this._fontFamily = value;
        this.notifyListeners('fontFamily', value);
    }
}
__decorate([
    nameForSerialization('isRightIconTappable')
], BarcodeArInfoAnnotationBodyComponent.prototype, "_isRightIconTappable", void 0);
__decorate([
    nameForSerialization('isLeftIconTappable')
], BarcodeArInfoAnnotationBodyComponent.prototype, "_isLeftIconTappable", void 0);
__decorate([
    nameForSerialization('rightIcon')
], BarcodeArInfoAnnotationBodyComponent.prototype, "_rightIcon", void 0);
__decorate([
    nameForSerialization('leftIcon')
], BarcodeArInfoAnnotationBodyComponent.prototype, "_leftIcon", void 0);
__decorate([
    nameForSerialization('text')
], BarcodeArInfoAnnotationBodyComponent.prototype, "_text", void 0);
__decorate([
    nameForSerialization('textAlign')
], BarcodeArInfoAnnotationBodyComponent.prototype, "_textAlign", void 0);
__decorate([
    nameForSerialization('textColor')
], BarcodeArInfoAnnotationBodyComponent.prototype, "_textColor", void 0);
__decorate([
    nameForSerialization('textSize')
], BarcodeArInfoAnnotationBodyComponent.prototype, "_textSize", void 0);
__decorate([
    nameForSerialization('fontFamily')
], BarcodeArInfoAnnotationBodyComponent.prototype, "_fontFamily", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeArInfoAnnotationBodyComponent, "barcodeArDefaults", null);

class BarcodeArInfoAnnotationFooter extends Observable {
    static get barcodeArDefaults() {
        return getBarcodeArDefaults();
    }
    constructor() {
        super();
        this._text = BarcodeArInfoAnnotationFooter.barcodeArDefaults
            .BarcodeArView.defaultInfoAnnotationFooterText;
        this._icon = BarcodeArInfoAnnotationFooter.barcodeArDefaults
            .BarcodeArView.defaultInfoAnnotationFooterIcon;
        this._textSize = BarcodeArInfoAnnotationFooter.barcodeArDefaults
            .BarcodeArView.defaultInfoAnnotationFooterTextSize;
        this._textColor = BarcodeArInfoAnnotationFooter.barcodeArDefaults
            .BarcodeArView.defaultInfoAnnotationFooterTextColor;
        this._backgroundColor = BarcodeArInfoAnnotationFooter.barcodeArDefaults
            .BarcodeArView.defaultInfoAnnotationFooterBackgroundColor;
        this._fontFamily = FontFamily.SystemDefault;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
        this.notifyListeners('text', value);
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        this._icon = value;
        this.notifyListeners('icon', value);
    }
    get textSize() {
        return this._textSize;
    }
    set textSize(value) {
        this._textSize = value;
        this.notifyListeners('textSize', value);
    }
    get textColor() {
        return this._textColor;
    }
    set textColor(value) {
        this._textColor = value;
        this.notifyListeners('textColor', value);
    }
    get backgroundColor() {
        return this._backgroundColor;
    }
    set backgroundColor(value) {
        this._backgroundColor = value;
        this.notifyListeners('backgroundColor', value);
    }
    get fontFamily() {
        return this._fontFamily;
    }
    set fontFamily(value) {
        this._fontFamily = value;
        this.notifyListeners('fontFamily', value);
    }
}
__decorate([
    nameForSerialization('text')
], BarcodeArInfoAnnotationFooter.prototype, "_text", void 0);
__decorate([
    nameForSerialization('icon')
], BarcodeArInfoAnnotationFooter.prototype, "_icon", void 0);
__decorate([
    nameForSerialization('textSize')
], BarcodeArInfoAnnotationFooter.prototype, "_textSize", void 0);
__decorate([
    nameForSerialization('textColor')
], BarcodeArInfoAnnotationFooter.prototype, "_textColor", void 0);
__decorate([
    nameForSerialization('backgroundColor')
], BarcodeArInfoAnnotationFooter.prototype, "_backgroundColor", void 0);
__decorate([
    nameForSerialization('fontFamily')
], BarcodeArInfoAnnotationFooter.prototype, "_fontFamily", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeArInfoAnnotationFooter, "barcodeArDefaults", null);

class BarcodeArInfoAnnotationHeader extends Observable {
    static get barcodeArDefaults() {
        return getBarcodeArDefaults();
    }
    constructor() {
        super();
        this._text = BarcodeArInfoAnnotationHeader.barcodeArDefaults
            .BarcodeArView.defaultInfoAnnotationHeaderText;
        this._icon = BarcodeArInfoAnnotationHeader.barcodeArDefaults
            .BarcodeArView.defaultInfoAnnotationHeaderIcon;
        this._textSize = BarcodeArInfoAnnotationHeader.barcodeArDefaults
            .BarcodeArView.defaultInfoAnnotationHeaderTextSize;
        this._textColor = BarcodeArInfoAnnotationHeader.barcodeArDefaults
            .BarcodeArView.defaultInfoAnnotationHeaderTextColor;
        this._backgroundColor = BarcodeArInfoAnnotationHeader.barcodeArDefaults
            .BarcodeArView.defaultInfoAnnotationHeaderBackgroundColor;
        this._fontFamily = FontFamily.SystemDefault;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
        this.notifyListeners('text', value);
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        this._icon = value;
        this.notifyListeners('icon', value);
    }
    get textSize() {
        return this._textSize;
    }
    set textSize(value) {
        this._textSize = value;
        this.notifyListeners('textSize', value);
    }
    get textColor() {
        return this._textColor;
    }
    set textColor(value) {
        this._textColor = value;
        this.notifyListeners('textColor', value);
    }
    get backgroundColor() {
        return this._backgroundColor;
    }
    set backgroundColor(value) {
        this._backgroundColor = value;
        this.notifyListeners('backgroundColor', value);
    }
    get fontFamily() {
        return this._fontFamily;
    }
    set fontFamily(value) {
        this._fontFamily = value;
        this.notifyListeners('fontFamily', value);
    }
}
__decorate([
    nameForSerialization('text')
], BarcodeArInfoAnnotationHeader.prototype, "_text", void 0);
__decorate([
    nameForSerialization('icon')
], BarcodeArInfoAnnotationHeader.prototype, "_icon", void 0);
__decorate([
    nameForSerialization('textSize')
], BarcodeArInfoAnnotationHeader.prototype, "_textSize", void 0);
__decorate([
    nameForSerialization('textColor')
], BarcodeArInfoAnnotationHeader.prototype, "_textColor", void 0);
__decorate([
    nameForSerialization('backgroundColor')
], BarcodeArInfoAnnotationHeader.prototype, "_backgroundColor", void 0);
__decorate([
    nameForSerialization('fontFamily')
], BarcodeArInfoAnnotationHeader.prototype, "_fontFamily", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeArInfoAnnotationHeader, "barcodeArDefaults", null);

class BarcodeArPopoverAnnotation extends Observable {
    static get barcodeArDefaults() {
        return getBarcodeArDefaults();
    }
    constructor(barcode, buttons) {
        super();
        this._type = 'barcodeArPopoverAnnotation';
        this._isEntirePopoverTappable = BarcodeArPopoverAnnotation.barcodeArDefaults
            .BarcodeArView.defaultIsEntirePopoverTappable;
        this._listener = null;
        this._hasListener = false;
        this._annotationTrigger = BarcodeArPopoverAnnotation.barcodeArDefaults
            .BarcodeArView.defaultInfoAnnotationTrigger;
        this.buttonChangedListener = (property, index) => {
            this.notifyListeners(property, index);
        };
        this._barcode = barcode;
        this._buttons = buttons;
        for (const button of buttons) {
            button.addListener(() => {
                this.buttonChangedListener('BarcodeArPopoverAnnotation.button', buttons.indexOf(button));
            });
        }
    }
    get barcode() {
        return this._barcode;
    }
    get isEntirePopoverTappable() {
        return this._isEntirePopoverTappable;
    }
    set isEntirePopoverTappable(value) {
        this._isEntirePopoverTappable = value;
        this.notifyListeners('isEntirePopoverTappable', value);
    }
    get listener() {
        return this._listener;
    }
    set listener(value) {
        this._listener = value;
        this._hasListener = value != null;
        this.notifyListeners('listener', value);
    }
    get annotationTrigger() {
        return this._annotationTrigger;
    }
    set annotationTrigger(value) {
        this._annotationTrigger = value;
        this.notifyListeners('annotationTrigger', value);
    }
    get buttons() {
        return this._buttons;
    }
}
__decorate([
    nameForSerialization('type')
], BarcodeArPopoverAnnotation.prototype, "_type", void 0);
__decorate([
    nameForSerialization('isEntirePopoverTappable')
], BarcodeArPopoverAnnotation.prototype, "_isEntirePopoverTappable", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeArPopoverAnnotation.prototype, "_listener", void 0);
__decorate([
    nameForSerialization('hasListener')
], BarcodeArPopoverAnnotation.prototype, "_hasListener", void 0);
__decorate([
    nameForSerialization('annotationTrigger')
], BarcodeArPopoverAnnotation.prototype, "_annotationTrigger", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeArPopoverAnnotation.prototype, "_barcode", void 0);
__decorate([
    nameForSerialization('buttons')
], BarcodeArPopoverAnnotation.prototype, "_buttons", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeArPopoverAnnotation, "barcodeArDefaults", null);

class BarcodeArPopoverAnnotationButton extends Observable {
    static get barcodeArDefaults() {
        return getBarcodeArDefaults();
    }
    constructor(icon, text) {
        super();
        this._textColor = BarcodeArPopoverAnnotationButton
            .barcodeArDefaults.BarcodeArView.defaultBarcodeArPopoverAnnotationButtonTextColor;
        this._textSize = BarcodeArPopoverAnnotationButton
            .barcodeArDefaults.BarcodeArView.defaultBarcodeArPopoverAnnotationButtonTextSize;
        this._fontFamily = FontFamily.SystemDefault;
        this._icon = icon;
        this._text = text;
    }
    get textColor() {
        return this._textColor;
    }
    set textColor(value) {
        this._textColor = value;
        this.notifyListeners('textColor', value);
    }
    get textSize() {
        return this._textSize;
    }
    set textSize(value) {
        this._textSize = value;
        this.notifyListeners('textSize', value);
    }
    get fontFamily() {
        return this._fontFamily;
    }
    set fontFamily(value) {
        this._fontFamily = value;
        this.notifyListeners('fontFamily', value);
    }
    get icon() {
        return this._icon;
    }
    get text() {
        return this._text;
    }
}
__decorate([
    nameForSerialization('textColor')
], BarcodeArPopoverAnnotationButton.prototype, "_textColor", void 0);
__decorate([
    nameForSerialization('textSize')
], BarcodeArPopoverAnnotationButton.prototype, "_textSize", void 0);
__decorate([
    nameForSerialization('fontFamily')
], BarcodeArPopoverAnnotationButton.prototype, "_fontFamily", void 0);
__decorate([
    nameForSerialization('icon')
], BarcodeArPopoverAnnotationButton.prototype, "_icon", void 0);
__decorate([
    nameForSerialization('text')
], BarcodeArPopoverAnnotationButton.prototype, "_text", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeArPopoverAnnotationButton, "barcodeArDefaults", null);

class BarcodeArRectangleHighlight extends Observable {
    static get barcodeArDefaults() {
        return getBarcodeArDefaults();
    }
    constructor(barcode) {
        super();
        this._type = 'barcodeArRectangleHighlight';
        this._brush = BarcodeArRectangleHighlight
            .barcodeArDefaults.BarcodeArView.defaultRectangleHighlightBrush;
        this._icon = BarcodeArRectangleHighlight
            .barcodeArDefaults.BarcodeArView.defaultHighlightIcon;
        this._barcode = barcode;
    }
    get barcode() {
        return this._barcode;
    }
    get brush() {
        return this._brush;
    }
    set brush(brush) {
        this._brush = brush;
        this.notifyListeners('brush', brush);
    }
    get icon() {
        return this._icon;
    }
    set icon(icon) {
        this._icon = icon;
        this.notifyListeners('icon', icon);
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeArRectangleHighlight.prototype, "_barcode", void 0);
__decorate([
    nameForSerialization('type')
], BarcodeArRectangleHighlight.prototype, "_type", void 0);
__decorate([
    nameForSerialization('brush')
], BarcodeArRectangleHighlight.prototype, "_brush", void 0);
__decorate([
    nameForSerialization('icon')
], BarcodeArRectangleHighlight.prototype, "_icon", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeArRectangleHighlight, "barcodeArDefaults", null);

class BarcodeArSettings extends DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.symbologies = {};
        this.properties = {};
    }
    static get barcodeDefaults() {
        return getBarcodeDefaults();
    }
    get enabledSymbologies() {
        return Object.keys(this.symbologies)
            .filter(symbology => this.symbologies[symbology].isEnabled);
    }
    settingsForSymbology(symbology) {
        if (!this.symbologies[symbology]) {
            const symbologySettings = BarcodeArSettings.barcodeDefaults.SymbologySettings[symbology];
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
    ignoreFromSerialization
], BarcodeArSettings, "barcodeDefaults", null);

class BarcodeArStatusIconAnnotation extends Observable {
    static get barcodeArDefaults() {
        return getBarcodeArDefaults();
    }
    constructor(barcode) {
        super();
        this._type = 'barcodeArStatusIconAnnotation';
        this._hasTip = BarcodeArStatusIconAnnotation
            .barcodeArDefaults.BarcodeArView.defaultStatusIconAnnotationHasTip;
        this._icon = BarcodeArStatusIconAnnotation
            .barcodeArDefaults.BarcodeArView.defaultStatusIconAnnotationIcon;
        this._text = BarcodeArStatusIconAnnotation
            .barcodeArDefaults.BarcodeArView.defaultStatusIconAnnotationText;
        this._textColor = BarcodeArStatusIconAnnotation
            .barcodeArDefaults.BarcodeArView.defaultStatusIconAnnotationTextColor;
        this._backgroundColor = BarcodeArStatusIconAnnotation
            .barcodeArDefaults.BarcodeArView.defaultStatusIconAnnotationBackgroundColor;
        this._annotationTrigger = BarcodeArStatusIconAnnotation
            .barcodeArDefaults.BarcodeArView.defaultStatusIconAnnotationTrigger;
        this._barcode = barcode;
    }
    get barcode() {
        return this._barcode;
    }
    get hasTip() {
        return this._hasTip;
    }
    set hasTip(value) {
        this._hasTip = value;
        this.notifyListeners('hasTip', value);
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        this._icon = value;
        this.notifyListeners('icon', value);
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
        this.notifyListeners('text', value);
    }
    get textColor() {
        return this._textColor;
    }
    set textColor(value) {
        this._textColor = value;
        this.notifyListeners('textColor', value);
    }
    get backgroundColor() {
        return this._backgroundColor;
    }
    set backgroundColor(value) {
        this._backgroundColor = value;
        this.notifyListeners('backgroundColor', value);
    }
    get annotationTrigger() {
        return this._annotationTrigger;
    }
    set annotationTrigger(value) {
        this._annotationTrigger = value;
        this.notifyListeners('annotationTrigger', value);
    }
}
__decorate([
    nameForSerialization('type')
], BarcodeArStatusIconAnnotation.prototype, "_type", void 0);
__decorate([
    nameForSerialization('barcode')
], BarcodeArStatusIconAnnotation.prototype, "_barcode", void 0);
__decorate([
    nameForSerialization('hasTip')
], BarcodeArStatusIconAnnotation.prototype, "_hasTip", void 0);
__decorate([
    nameForSerialization('icon')
], BarcodeArStatusIconAnnotation.prototype, "_icon", void 0);
__decorate([
    nameForSerialization('text')
], BarcodeArStatusIconAnnotation.prototype, "_text", void 0);
__decorate([
    nameForSerialization('textColor')
], BarcodeArStatusIconAnnotation.prototype, "_textColor", void 0);
__decorate([
    nameForSerialization('backgroundColor')
], BarcodeArStatusIconAnnotation.prototype, "_backgroundColor", void 0);
__decorate([
    nameForSerialization('annotationTrigger')
], BarcodeArStatusIconAnnotation.prototype, "_annotationTrigger", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeArStatusIconAnnotation, "barcodeArDefaults", null);

var BarcodeArViewEvents;
(function (BarcodeArViewEvents) {
    BarcodeArViewEvents["didTapHighlightForBarcode"] = "BarcodeArViewUiListener.didTapHighlightForBarcode";
    BarcodeArViewEvents["highlightForBarcode"] = "BarcodeArHighlightProvider.highlightForBarcode";
    BarcodeArViewEvents["annotationForBarcode"] = "BarcodeArAnnotationProvider.annotationForBarcode";
    BarcodeArViewEvents["didTapPopoverEvent"] = "BarcodeArPopoverAnnotationListener.didTapPopover";
    BarcodeArViewEvents["didTapPopoverButtonEvent"] = "BarcodeArPopoverAnnotationListener.didTapPopoverButton";
    BarcodeArViewEvents["didTapInfoAnnotationRightIconEvent"] = "BarcodeArInfoAnnotationListener.didTapInfoAnnotationRightIcon";
    BarcodeArViewEvents["didTapInfoAnnotationLeftIconEvent"] = "BarcodeArInfoAnnotationListener.didTapInfoAnnotationLeftIcon";
    BarcodeArViewEvents["didTapInfoAnnotationEvent"] = "BarcodeArInfoAnnotationListener.didTapInfoAnnotation";
    BarcodeArViewEvents["didTapInfoAnnotationHeaderEvent"] = "BarcodeArInfoAnnotationListener.didTapInfoAnnotationHeader";
    BarcodeArViewEvents["didTapInfoAnnotationFooterEvent"] = "BarcodeArInfoAnnotationListener.didTapInfoAnnotationFooter";
})(BarcodeArViewEvents || (BarcodeArViewEvents = {}));
class BarcodeArViewController extends BaseController {
    constructor() {
        super('BarcodeArViewProxy');
        this.autoCreateNativeView = true;
        this.isListenerEnabled = false;
        this.highlightCache = {};
        this.annotationsCache = {};
    }
    dispose() {
        this.highlightCache = {};
        this.annotationsCache = {};
        this.setHighlightProvider(null);
        this.setAnnotationProvider(null);
        this.setUiListener(null);
    }
    static forBarcodeArView(barcodeAr, baseView, autoCreateNativeView = true) {
        const viewController = new BarcodeArViewController();
        viewController.baseView = baseView;
        viewController.autoCreateNativeView = autoCreateNativeView;
        viewController.barcodeAr = barcodeAr;
        viewController.initialize();
        if (baseView.barcodeArViewUiListener) {
            viewController.subscribeForUiListenerEvents();
        }
        if (baseView.annotationProvider) {
            viewController.subscribeForAnnotationProviderEvents();
        }
        if (baseView.highlightProvider) {
            viewController.subscribeForHighlightProviderEvents();
        }
        return viewController;
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.baseView.context.update();
            if (this.autoCreateNativeView) {
                yield this.createView();
            }
        });
    }
    createView() {
        return __awaiter(this, void 0, void 0, function* () {
            const barcodeArView = this.baseView.toJSON();
            const json = JSON.stringify(barcodeArView);
            return this._proxy.createView(this.baseView.nativeView, json);
        });
    }
    subscribeForUiListenerEvents() {
        this.unsubscribeForUiListenerEvents();
        this.eventEmitter.on(BarcodeArViewEvents.didTapHighlightForBarcode, (data) => {
            var _a, _b;
            if (!this.baseView.barcodeArViewUiListener) {
                return;
            }
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeArViewController didTapHighlightForBarcode payload is null');
                return;
            }
            const barcodeJson = JSON.parse(payload.barcode);
            const barcode = Barcode.fromJSON(barcodeJson);
            const highlight = this.highlightCache[payload.barcodeId];
            if (!highlight) {
                return;
            }
            (_b = (_a = this.baseView) === null || _a === void 0 ? void 0 : _a.barcodeArViewUiListener) === null || _b === void 0 ? void 0 : _b.didTapHighlightForBarcode(this.barcodeAr, barcode, highlight);
        });
        this._proxy.subscribeViewListeners();
    }
    unsubscribeForUiListenerEvents() {
        this._proxy.unsubscribeViewListeners();
        this.eventEmitter.off(BarcodeArViewEvents.didTapHighlightForBarcode);
    }
    subscribeForAnnotationProviderEvents() {
        this.unsubscribeForAnnotationProviderEvents();
        this.eventEmitter.on(BarcodeArViewEvents.annotationForBarcode, (data) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeArViewController annotationForBarcode payload is null');
                return;
            }
            const barcodeJson = JSON.parse(payload.barcode);
            const barcode = Barcode.fromJSON(barcodeJson);
            barcode.barcodeId = payload.barcodeId;
            const annotation = yield ((_b = (_a = this.baseView) === null || _a === void 0 ? void 0 : _a.annotationProvider) === null || _b === void 0 ? void 0 : _b.annotationForBarcode(barcode));
            if (annotation) {
                this.annotationsCache[payload.barcodeId] = annotation;
                annotation.addListener((property, value) => {
                    if (property === 'BarcodeArPopoverAnnotation.button') {
                        const popover = annotation;
                        const button = popover.buttons[value];
                        const buttonJson = button.toJSON();
                        buttonJson.index = value;
                        const popoverButtonPayload = {
                            'button': buttonJson,
                            'barcodeId': payload.barcodeId,
                        };
                        this._proxy.updatePopoverButton(JSON.stringify(popoverButtonPayload));
                        return;
                    }
                    const annotationJson = annotation.toJSON();
                    annotationJson.barcodeId = payload.barcodeId;
                    this._proxy.updateAnnotation(JSON.stringify(annotationJson));
                });
            }
            const result = {
                barcodeId: payload.barcodeId,
                annotation: annotation === null || annotation === void 0 ? void 0 : annotation.toJSON()
            };
            this._proxy.finishAnnotationForBarcode(JSON.stringify(result));
        }));
        this.eventEmitter.on(BarcodeArViewEvents.didTapPopoverEvent, (data) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeArViewController didTapPopoverEvent payload is null');
                return;
            }
            const popover = this.annotationsCache[payload.barcodeId];
            if (!popover) {
                return;
            }
            (_b = (_a = popover.listener) === null || _a === void 0 ? void 0 : _a.didTap) === null || _b === void 0 ? void 0 : _b.call(_a, popover);
        }));
        this.eventEmitter.on(BarcodeArViewEvents.didTapPopoverButtonEvent, (data) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeArViewController didTapPopoverButtonEvent payload is null');
                return;
            }
            const popover = this.annotationsCache[payload.barcodeId];
            if (!popover || !payload.index) {
                return;
            }
            const button = popover.buttons[payload.index];
            (_b = (_a = popover.listener) === null || _a === void 0 ? void 0 : _a.didTapButton) === null || _b === void 0 ? void 0 : _b.call(_a, popover, button, payload.index);
        }));
        this.eventEmitter.on(BarcodeArViewEvents.didTapInfoAnnotationRightIconEvent, (data) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeArViewController didTapInfoAnnotationRightIconEvent payload is null');
                return;
            }
            const infoAnnotation = this.annotationsCache[payload.barcodeId];
            if (infoAnnotation == null || payload.componentIndex == null) {
                return;
            }
            const component = infoAnnotation.body[payload.componentIndex];
            (_b = (_a = infoAnnotation.listener) === null || _a === void 0 ? void 0 : _a.didTapRightIcon) === null || _b === void 0 ? void 0 : _b.call(_a, infoAnnotation, component, payload.componentIndex);
        }));
        this.eventEmitter.on(BarcodeArViewEvents.didTapInfoAnnotationLeftIconEvent, (data) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeArViewController didTapInfoAnnotationLeftIconEvent payload is null');
                return;
            }
            const infoAnnotation = this.annotationsCache[payload.barcodeId];
            if (infoAnnotation == null || payload.componentIndex == null) {
                return;
            }
            const component = infoAnnotation.body[payload.componentIndex];
            (_b = (_a = infoAnnotation.listener) === null || _a === void 0 ? void 0 : _a.didTapLeftIcon) === null || _b === void 0 ? void 0 : _b.call(_a, infoAnnotation, component, payload.componentIndex);
        }));
        this.eventEmitter.on(BarcodeArViewEvents.didTapInfoAnnotationEvent, (data) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeArViewController didTapInfoAnnotationEvent payload is null');
                return;
            }
            const infoAnnotation = this.annotationsCache[payload.barcodeId];
            if (infoAnnotation == null) {
                return;
            }
            (_b = (_a = infoAnnotation.listener) === null || _a === void 0 ? void 0 : _a.didTap) === null || _b === void 0 ? void 0 : _b.call(_a, infoAnnotation);
        }));
        this.eventEmitter.on(BarcodeArViewEvents.didTapInfoAnnotationHeaderEvent, (data) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeArViewController didTapInfoAnnotationHeaderEvent payload is null');
                return;
            }
            const infoAnnotation = this.annotationsCache[payload.barcodeId];
            if (infoAnnotation == null) {
                return;
            }
            (_b = (_a = infoAnnotation.listener) === null || _a === void 0 ? void 0 : _a.didTapHeader) === null || _b === void 0 ? void 0 : _b.call(_a, infoAnnotation);
        }));
        this.eventEmitter.on(BarcodeArViewEvents.didTapInfoAnnotationFooterEvent, (data) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeArViewController didTapInfoAnnotationFooterEvent payload is null');
                return;
            }
            const infoAnnotation = this.annotationsCache[payload.barcodeId];
            if (infoAnnotation == null) {
                return;
            }
            (_b = (_a = infoAnnotation.listener) === null || _a === void 0 ? void 0 : _a.didTapFooter) === null || _b === void 0 ? void 0 : _b.call(_a, infoAnnotation);
        }));
        this._proxy.subscribeToAnnotationProviderEvents();
    }
    unsubscribeForAnnotationProviderEvents() {
        this._proxy.unsubscribeFromAnnotationProviderEvents();
        this.eventEmitter.off(BarcodeArViewEvents.annotationForBarcode);
    }
    subscribeForHighlightProviderEvents() {
        this.unsubscribeForHighlightProviderEvents();
        this.eventEmitter.on(BarcodeArViewEvents.highlightForBarcode, (data) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeArViewController highlightForBarcode payload is null');
                return;
            }
            const barcodeJson = JSON.parse(payload.barcode);
            const barcode = Barcode.fromJSON(barcodeJson);
            barcode.barcodeId = payload.barcodeId;
            const highlight = yield ((_b = (_a = this.baseView) === null || _a === void 0 ? void 0 : _a.highlightProvider) === null || _b === void 0 ? void 0 : _b.highlightForBarcode(barcode));
            if (highlight) {
                this.highlightCache[payload.barcodeId] = highlight;
                highlight.addListener(() => {
                    const highlightJson = highlight.toJSON();
                    highlightJson.barcodeId = payload.barcodeId;
                    this._proxy.updateHighlight(JSON.stringify(highlightJson));
                });
            }
            const result = {
                barcodeId: payload.barcodeId,
                highlight: highlight === null || highlight === void 0 ? void 0 : highlight.toJSON()
            };
            this._proxy.finishHighlightForBarcode(JSON.stringify(result));
        }));
        this._proxy.subscribeToHighlightProviderEvents();
    }
    unsubscribeForHighlightProviderEvents() {
        this._proxy.unsubscribeFromHighlightProviderEvents();
        this.eventEmitter.off(BarcodeArViewEvents.highlightForBarcode);
    }
    setUiListener(listener) {
        return __awaiter(this, void 0, void 0, function* () {
            if (listener && !this.isListenerEnabled) {
                this.isListenerEnabled = true;
                this.subscribeForUiListenerEvents();
            }
            if (listener == null) {
                this.isListenerEnabled = false;
                this.unsubscribeForUiListenerEvents();
            }
        });
    }
    setAnnotationProvider(provider) {
        return __awaiter(this, void 0, void 0, function* () {
            if (provider != null) {
                yield this._proxy.registerBarcodeArAnnotationProvider();
                this.subscribeForAnnotationProviderEvents();
            }
            else {
                yield this._proxy.unregisterBarcodeArAnnotationProvider();
                this.unsubscribeForAnnotationProviderEvents();
            }
        });
    }
    setHighlightProvider(provider) {
        return __awaiter(this, void 0, void 0, function* () {
            if (provider != null) {
                yield this._proxy.registerBarcodeArHighlightProvider();
                this.subscribeForHighlightProviderEvents();
            }
            else {
                yield this._proxy.unregisterBarcodeArHighlightProvider();
                this.unsubscribeForHighlightProviderEvents();
            }
        });
    }
    start() {
        this.highlightCache = {};
        this.annotationsCache = {};
        return this._proxy.start();
    }
    stop() {
        this.highlightCache = {};
        this.annotationsCache = {};
        return this._proxy.stop();
    }
    pause() {
        this.highlightCache = {};
        this.annotationsCache = {};
        return this._proxy.pause();
    }
    update() {
        const barcodeArView = this.baseView.toJSON().View;
        const json = JSON.stringify(barcodeArView);
        return this._proxy.update(json);
    }
    reset() {
        this.highlightCache = {};
        this.annotationsCache = {};
        return this._proxy.barcodeArViewReset();
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeArViewController.prototype, "autoCreateNativeView", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeArViewController.prototype, "highlightCache", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeArViewController.prototype, "annotationsCache", void 0);

class BaseBarcodeArView extends DefaultSerializeable {
    static get barcodeArDefaults() {
        return getBarcodeArDefaults();
    }
    constructor(context, barcodeAr, nativeView = null, barcodeArViewSettings, cameraSettings, annotationProvider, highlightProvider, uiListener, autoCreateNativeView = true) {
        super();
        this._autoCreateNativeView = true;
        this._annotationProvider = null;
        this._barcodeArViewUiListener = null;
        this._highlightProvider = null;
        this.nativeView = null;
        this._isStarted = false;
        this._shouldShowMacroControl = false;
        this._macroModeControlPosition = BaseBarcodeArView
            .barcodeArDefaults.BarcodeArView.defaultCameraSwitchControlPosition;
        this._shouldShowTorchControl = false;
        this._torchControlPosition = BaseBarcodeArView
            .barcodeArDefaults.BarcodeArView.defaultTorchControlPosition;
        this._shouldShowZoomControl = BaseBarcodeArView
            .barcodeArDefaults.BarcodeArView.defaultShouldShowZoomControl;
        this._zoomControlPosition = BaseBarcodeArView
            .barcodeArDefaults.BarcodeArView.defaultZoomControlPosition;
        this._dataCaptureContext = context;
        this._barcodeAr = barcodeAr;
        this._barcodeArViewSettings = barcodeArViewSettings;
        this._cameraSettings = cameraSettings;
        this._autoCreateNativeView = autoCreateNativeView;
        this._annotationProvider = annotationProvider !== null && annotationProvider !== void 0 ? annotationProvider : null;
        this._highlightProvider = highlightProvider !== null && highlightProvider !== void 0 ? highlightProvider : null;
        this._barcodeArViewUiListener = uiListener !== null && uiListener !== void 0 ? uiListener : null;
        this.nativeView = nativeView;
        this.controller = BarcodeArViewController.forBarcodeArView(this._barcodeAr, this, this._autoCreateNativeView);
    }
    dispose() {
        this.controller.dispose();
        this._barcodeAr.unsubscribeNativeListeners();
    }
    updateNative() {
        return this.controller.update();
    }
    get barcodeArViewUiListener() {
        return this._barcodeArViewUiListener;
    }
    set barcodeArViewUiListener(value) {
        this._barcodeArViewUiListener = value;
        this.controller.setUiListener(value);
    }
    get annotationProvider() {
        return this._annotationProvider;
    }
    set annotationProvider(value) {
        this._annotationProvider = value;
        this.controller.setAnnotationProvider(value);
    }
    get highlightProvider() {
        return this._highlightProvider;
    }
    set highlightProvider(value) {
        this._highlightProvider = value;
        this.controller.setHighlightProvider(value);
    }
    get context() {
        return this._dataCaptureContext;
    }
    start() {
        this._isStarted = true;
        return this.controller.start();
    }
    stop() {
        this._isStarted = false;
        return this.controller.stop();
    }
    pause() {
        // TODO: check if we need to change isStarted
        return this.controller.pause();
    }
    reset() {
        return this.controller.reset();
    }
    get shouldShowTorchControl() {
        return this._shouldShowTorchControl;
    }
    set shouldShowTorchControl(value) {
        this._shouldShowTorchControl = value;
        this.updateNative();
    }
    get torchControlPosition() {
        return this._torchControlPosition;
    }
    set torchControlPosition(value) {
        this._torchControlPosition = value;
        this.updateNative();
    }
    get shouldShowZoomControl() {
        return this._shouldShowZoomControl;
    }
    set shouldShowZoomControl(value) {
        this._shouldShowZoomControl = value;
        this.updateNative();
    }
    get zoomControlPosition() {
        return this._zoomControlPosition;
    }
    set zoomControlPosition(value) {
        this._zoomControlPosition = value;
        this.updateNative();
    }
    get shouldShowCameraSwitchControl() {
        return this._shouldShowMacroControl;
    }
    set shouldShowCameraSwitchControl(value) {
        this._shouldShowMacroControl = value;
        this.updateNative();
    }
    get cameraSwitchControlPosition() {
        return this._macroModeControlPosition;
    }
    set cameraSwitchControlPosition(value) {
        this._macroModeControlPosition = value;
        this.updateNative();
    }
    get shouldShowMacroModeControl() {
        return this._shouldShowMacroControl;
    }
    set shouldShowMacroModeControl(value) {
        this._shouldShowMacroControl = value;
        this.updateNative();
    }
    get macroModeControlPosition() {
        return this._macroModeControlPosition;
    }
    set macroModeControlPosition(value) {
        this._macroModeControlPosition = value;
        this.updateNative();
    }
    toJSON() {
        const json = {
            View: {
                barcodeArViewSettings: this._barcodeArViewSettings,
                cameraSettings: this._cameraSettings,
                shouldShowMacroControl: this._shouldShowMacroControl,
                macroModeControlPosition: this._macroModeControlPosition,
                shouldShowTorchControl: this._shouldShowTorchControl,
                torchControlPosition: this._torchControlPosition,
                shouldShowZoomControl: this._shouldShowZoomControl,
                zoomControlPosition: this._zoomControlPosition,
                annotationProvider: this._annotationProvider,
                barcodeArViewUiListener: this._barcodeArViewUiListener,
                highlightProvider: this._highlightProvider,
                isStarted: this._isStarted,
                hasUiListener: this._barcodeArViewUiListener != null,
                hasHighlightProvider: this._highlightProvider != null,
                hasAnnotationProvider: this._annotationProvider != null,
            },
            BarcodeAr: this._barcodeAr.toJSON(),
        };
        return json;
    }
}
__decorate([
    ignoreFromSerialization
], BaseBarcodeArView.prototype, "_autoCreateNativeView", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodeArView.prototype, "_annotationProvider", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodeArView.prototype, "_barcodeArViewUiListener", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodeArView.prototype, "_highlightProvider", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodeArView.prototype, "nativeView", void 0);
__decorate([
    nameForSerialization('barcodeAr')
], BaseBarcodeArView.prototype, "_barcodeAr", void 0);
__decorate([
    nameForSerialization('isStarted')
], BaseBarcodeArView.prototype, "_isStarted", void 0);
__decorate([
    nameForSerialization('viewSettings')
], BaseBarcodeArView.prototype, "_barcodeArViewSettings", void 0);
__decorate([
    nameForSerialization('cameraSettings')
], BaseBarcodeArView.prototype, "_cameraSettings", void 0);
__decorate([
    nameForSerialization('dataCaptureContext')
], BaseBarcodeArView.prototype, "_dataCaptureContext", void 0);
__decorate([
    nameForSerialization('shouldShowMacroControl')
], BaseBarcodeArView.prototype, "_shouldShowMacroControl", void 0);
__decorate([
    nameForSerialization('macroModeControlPosition')
], BaseBarcodeArView.prototype, "_macroModeControlPosition", void 0);
__decorate([
    nameForSerialization('shouldShowTorchControl')
], BaseBarcodeArView.prototype, "_shouldShowTorchControl", void 0);
__decorate([
    nameForSerialization('torchControlPosition')
], BaseBarcodeArView.prototype, "_torchControlPosition", void 0);
__decorate([
    nameForSerialization('shouldShowZoomControl')
], BaseBarcodeArView.prototype, "_shouldShowZoomControl", void 0);
__decorate([
    nameForSerialization('zoomControlPosition')
], BaseBarcodeArView.prototype, "_zoomControlPosition", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodeArView, "barcodeArDefaults", null);

class BarcodeArViewSettings extends DefaultSerializeable {
    static get barcodeArDefaults() {
        return getBarcodeArDefaults();
    }
    constructor() {
        super();
        this._soundEnabled = BarcodeArViewSettings
            .barcodeArDefaults.BarcodeArView.defaultSoundEnabled;
        this._hapticEnabled = BarcodeArViewSettings
            .barcodeArDefaults.BarcodeArView.defaultHapticsEnabled;
        this._defaultCameraPosition = BarcodeArViewSettings
            .barcodeArDefaults.BarcodeArView.defaultCameraPosition;
    }
    get soundEnabled() {
        return this._soundEnabled;
    }
    set soundEnabled(value) {
        this._soundEnabled = value;
    }
    get hapticEnabled() {
        return this._hapticEnabled;
    }
    set hapticEnabled(value) {
        this._hapticEnabled = value;
    }
    get defaultCameraPosition() {
        return this._defaultCameraPosition;
    }
    set defaultCameraPosition(value) {
        this._defaultCameraPosition = value;
    }
}
__decorate([
    nameForSerialization("soundEnabled")
], BarcodeArViewSettings.prototype, "_soundEnabled", void 0);
__decorate([
    nameForSerialization("hapticEnabled")
], BarcodeArViewSettings.prototype, "_hapticEnabled", void 0);
__decorate([
    nameForSerialization("defaultCameraPosition")
], BarcodeArViewSettings.prototype, "_defaultCameraPosition", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeArViewSettings, "barcodeArDefaults", null);

var BarcodeArAnnotationTrigger;
(function (BarcodeArAnnotationTrigger) {
    BarcodeArAnnotationTrigger["HighlightTap"] = "highlightTap";
    BarcodeArAnnotationTrigger["HighlightTapAndBarcodeScan"] = "highlightTapAndBarcodeScan";
})(BarcodeArAnnotationTrigger || (BarcodeArAnnotationTrigger = {}));

var BarcodeArCircleHighlightPreset;
(function (BarcodeArCircleHighlightPreset) {
    BarcodeArCircleHighlightPreset["Dot"] = "dot";
    BarcodeArCircleHighlightPreset["Icon"] = "icon";
})(BarcodeArCircleHighlightPreset || (BarcodeArCircleHighlightPreset = {}));

var BarcodeArInfoAnnotationAnchor;
(function (BarcodeArInfoAnnotationAnchor) {
    BarcodeArInfoAnnotationAnchor["Top"] = "top";
    BarcodeArInfoAnnotationAnchor["Bottom"] = "bottom";
    BarcodeArInfoAnnotationAnchor["Left"] = "left";
    BarcodeArInfoAnnotationAnchor["Right"] = "right";
})(BarcodeArInfoAnnotationAnchor || (BarcodeArInfoAnnotationAnchor = {}));

var BarcodeArInfoAnnotationWidthPreset;
(function (BarcodeArInfoAnnotationWidthPreset) {
    BarcodeArInfoAnnotationWidthPreset["Small"] = "small";
    BarcodeArInfoAnnotationWidthPreset["Medium"] = "medium";
    BarcodeArInfoAnnotationWidthPreset["Large"] = "large";
})(BarcodeArInfoAnnotationWidthPreset || (BarcodeArInfoAnnotationWidthPreset = {}));

class BarcodeSelectionFeedback extends DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.controller = null;
        this._selection = BarcodeSelectionFeedback.barcodeSelectionDefaults.Feedback.selection;
    }
    get selection() {
        return this._selection;
    }
    set selection(selection) {
        this._selection = selection;
        this.updateFeedback();
    }
    static get barcodeSelectionDefaults() {
        return getBarcodeSelectionDefaults();
    }
    static get default() {
        return new BarcodeSelectionFeedback();
    }
    updateFeedback() {
        var _a;
        (_a = this.controller) === null || _a === void 0 ? void 0 : _a.updateFeedback(JSON.stringify(this.toJSON()));
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeSelectionFeedback.prototype, "controller", void 0);
__decorate([
    nameForSerialization('selection')
], BarcodeSelectionFeedback.prototype, "_selection", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeSelectionFeedback, "barcodeSelectionDefaults", null);

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
        var _a;
        const sessionJson = JSON.parse(json.session);
        const session = new BarcodeSelectionSession();
        session._selectedBarcodes = sessionJson.selectedBarcodes
            .map(Barcode.fromJSON);
        session._newlySelectedBarcodes = sessionJson.newlySelectedBarcodes
            .map(Barcode.fromJSON);
        session._newlyUnselectedBarcodes = sessionJson.newlyUnselectedBarcodes
            .map(Barcode.fromJSON);
        session._frameSequenceID = sessionJson.frameSequenceId;
        session.frameId = (_a = json.frameId) !== null && _a !== void 0 ? _a : '';
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
    BarcodeSelectionListenerEvents["didUpdateSelection"] = "BarcodeSelectionListener.didUpdateSelection";
    BarcodeSelectionListenerEvents["didUpdateSession"] = "BarcodeSelectionListener.didUpdateSession";
})(BarcodeSelectionListenerEvents || (BarcodeSelectionListenerEvents = {}));
class BarcodeSelectionListenerController extends BaseNewController {
    static forBarcodeSelection(barcodeSelection) {
        const controller = new BarcodeSelectionListenerController();
        controller.barcodeSelection = barcodeSelection;
        controller._proxy.$setBarcodeSelectionModeEnabledState = () => barcodeSelection.isEnabled;
        return controller;
    }
    constructor() {
        super('BarcodeSelectionListenerProxy');
    }
    getCount(barcode) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._proxy.$getCountForBarcodeInBarcodeSelectionSession({ selectionIdentifier: barcode.selectionIdentifier });
            if (result == null) {
                return 0;
            }
            return Number(result.data);
        });
    }
    reset() {
        return this._proxy.$resetBarcodeSelectionSession();
    }
    subscribeListener() {
        this._proxy.$registerBarcodeSelectionListenerForEvents();
        this._proxy.on$didUpdateSelection = (ev) => __awaiter(this, void 0, void 0, function* () {
            const payload = EventDataParser.parse(ev.data);
            if (payload === null) {
                console.error('BarcodeSelectionListenerController didUpdateSelection payload is null');
                return;
            }
            const session = BarcodeSelectionSession.fromJSON(payload);
            session.listenerController = this;
            yield this.notifyListenersOfDidUpdateSelection(session);
            this._proxy.$finishBarcodeSelectionDidSelect({ enabled: this.barcodeSelection.isEnabled });
        });
        this._proxy.on$didUpdateSession = (ev) => __awaiter(this, void 0, void 0, function* () {
            const payload = EventDataParser.parse(ev.data);
            if (payload === null) {
                console.error('BarcodeSelectionListenerController didUpdateSession payload is null');
                return;
            }
            const session = BarcodeSelectionSession.fromJSON(payload);
            session.listenerController = this;
            yield this.notifyListenersOfDidUpdateSession(session);
            this._proxy.$finishBarcodeSelectionDidUpdateSession({ enabled: this.barcodeSelection.isEnabled });
        });
    }
    unsubscribeListener() {
        this._proxy.$unregisterBarcodeSelectionListenerForEvents();
        this._proxy.dispose();
    }
    notifyListenersOfDidUpdateSelection(session) {
        return __awaiter(this, void 0, void 0, function* () {
            const mode = this.barcodeSelection;
            for (const listener of mode.listeners) {
                if (listener.didUpdateSelection) {
                    yield listener.didUpdateSelection(this.barcodeSelection, session, () => CameraController.getFrameOrNull(session.frameId));
                }
            }
        });
    }
    notifyListenersOfDidUpdateSession(session) {
        return __awaiter(this, void 0, void 0, function* () {
            const mode = this.barcodeSelection;
            for (const listener of mode.listeners) {
                if (listener.didUpdateSession) {
                    yield listener.didUpdateSession(this.barcodeSelection, session, () => CameraController.getFrameOrNull(session.frameId));
                }
            }
        });
    }
}

class BarcodeSelectionController extends BaseNewController {
    constructor() {
        super('BarcodeSelectionProxy');
    }
    unfreezeCamera() {
        return this._proxy.$unfreezeCameraInBarcodeSelection();
    }
    reset() {
        return this._proxy.$resetBarcodeSelection();
    }
    selectAimedBarcode() {
        return this._proxy.$selectAimedBarcode();
    }
    unselectBarcodes(barcodes) {
        const barcodesJson = this.convertBarcodesToJson(barcodes);
        return this._proxy.$unselectBarcodes({ barcodesJson: JSON.stringify(barcodesJson) });
    }
    setSelectBarcodeEnabled(barcode, enabled) {
        const barcodesJson = this.convertBarcodesToJson([barcode]);
        return this._proxy.$setSelectBarcodeEnabled({ barcodeJson: JSON.stringify(barcodesJson[0]), enabled: enabled });
    }
    increaseCountForBarcodes(barcodes) {
        const barcodesJson = this.convertBarcodesToJson(barcodes);
        return this._proxy.$increaseCountForBarcodes({ barcodeJson: JSON.stringify(barcodesJson) });
    }
    setModeEnabledState(enabled) {
        this._proxy.$setBarcodeSelectionModeEnabledState({ enabled: enabled });
    }
    updateBarcodeSelectionMode(barcodeSelection) {
        return this._proxy.$updateBarcodeSelectionMode({ modeJson: JSON.stringify(barcodeSelection.toJSON()) });
    }
    applyBarcodeSelectionModeSettings(newSettings) {
        return this._proxy.$applyBarcodeSelectionModeSettings({ modeSettingsJson: JSON.stringify(newSettings.toJSON()) });
    }
    updateFeedback(feedbackJson) {
        this._proxy.$updateBarcodeSelectionFeedback({ feedbackJson: feedbackJson });
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
        this.feedback.controller = this.modeController;
        this.modeController.updateFeedback(JSON.stringify(this.feedback.toJSON()));
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
        this._feedback = new BarcodeSelectionFeedback();
        this._pointOfInterest = null;
        this.privateContext = null;
        this.listeners = [];
        this.listenerController = BarcodeSelectionListenerController.forBarcodeSelection(this);
        this.modeController = new BarcodeSelectionController();
        this._feedback.controller = this.modeController;
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

var BarcodeSelectionBrushProviderEvents;
(function (BarcodeSelectionBrushProviderEvents) {
    BarcodeSelectionBrushProviderEvents["brushForAimedBarcode"] = "BarcodeSelectionAimedBrushProvider.brushForBarcode";
    BarcodeSelectionBrushProviderEvents["brushForTrackedBarcode"] = "BarcodeSelectionTrackedBrushProvider.brushForBarcode";
})(BarcodeSelectionBrushProviderEvents || (BarcodeSelectionBrushProviderEvents = {}));
class BarcodeSelectionOverlayController extends BaseNewController {
    constructor() {
        super('BarcodeSelectionOverlayProxy');
    }
    setTextForAimToSelectAutoHint(text) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._proxy.$setTextForAimToSelectAutoHint({ text });
        });
    }
    setAimedBarcodeBrushProvider(brushProvider) {
        if (!brushProvider) {
            this._proxy.on$brushForAimedBarcode = () => { };
            return this._proxy.$removeAimedBarcodeBrushProvider();
        }
        const subscriptionResult = this._proxy.$setAimedBarcodeBrushProvider();
        this._proxy.on$brushForAimedBarcode = (ev) => {
            const payload = EventDataParser.parse(ev.data);
            if (payload === null) {
                console.error('BarcodeSelectionOverlayController brushForAimedBarcode payload is null');
                return;
            }
            const barcode = Barcode
                .fromJSON(JSON.parse(payload.barcode));
            let brush = null;
            if (brushProvider.brushForBarcode) {
                brush = brushProvider.brushForBarcode(barcode);
            }
            this._proxy.$finishBrushForAimedBarcodeCallback({ brushJson: brush ? JSON.stringify(brush.toJSON()) : null, selectionIdentifier: barcode.selectionIdentifier });
        };
        return subscriptionResult;
    }
    setTrackedBarcodeBrushProvider(brushProvider) {
        if (!brushProvider) {
            this._proxy.on$brushForTrackedBarcode = () => { };
            return this._proxy.$removeTrackedBarcodeBrushProvider();
        }
        const subscriptionResult = this._proxy.$setTrackedBarcodeBrushProvider();
        this._proxy.on$brushForTrackedBarcode = (ev) => {
            const payload = EventDataParser.parse(ev.data);
            if (payload === null) {
                console.error('BarcodeSelectionBrushProvider brushForTrackedBarcode payload is null');
                return;
            }
            const barcode = Barcode
                .fromJSON(JSON.parse(payload.barcode));
            let brush = null;
            if (brushProvider.brushForBarcode) {
                brush = brushProvider.brushForBarcode(barcode);
            }
            this._proxy.$finishBrushForTrackedBarcodeCallback({ brushJson: brush ? JSON.stringify(brush.toJSON()) : null, selectionIdentifier: barcode.selectionIdentifier });
        };
        return subscriptionResult;
    }
    updateBarcodeSelectionBasicOverlay(overlay) {
        return this._proxy.$updateBarcodeSelectionBasicOverlay({ overlayJson: JSON.stringify(overlay.toJSON()) });
    }
    // TODO: We need to unsubscribe from the providers when the overlay is removed. Need spec.
    // https://scandit.atlassian.net/browse/SDC-16608
    unsubscribeProviders() {
        this._proxy.$removeAimedBarcodeBrushProvider();
        this._proxy.$removeTrackedBarcodeBrushProvider();
        this._proxy.dispose();
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

var BarcodeBatchBasicOverlayStyle;
(function (BarcodeBatchBasicOverlayStyle) {
    BarcodeBatchBasicOverlayStyle["Frame"] = "frame";
    BarcodeBatchBasicOverlayStyle["Dot"] = "dot";
})(BarcodeBatchBasicOverlayStyle || (BarcodeBatchBasicOverlayStyle = {}));

/**
 * @deprecated Setting a scenario is no longer recommended, use the BarcodeBatchSettings empty constructor instead.
 */
var BarcodeBatchScenario;
(function (BarcodeBatchScenario) {
    BarcodeBatchScenario["A"] = "A";
    BarcodeBatchScenario["B"] = "B";
})(BarcodeBatchScenario || (BarcodeBatchScenario = {}));

class BarcodeBatchSession {
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
        var _a;
        const sessionJson = JSON.parse(json.session);
        const session = new BarcodeBatchSession();
        session._frameSequenceID = sessionJson.frameSequenceId;
        session._addedTrackedBarcodes = sessionJson.addedTrackedBarcodes
            .map((trackedBarcodeJSON) => {
            return TrackedBarcode
                .fromJSON(trackedBarcodeJSON, sessionJson.frameSequenceId);
        });
        session._removedTrackedBarcodes = sessionJson.removedTrackedBarcodes;
        session._updatedTrackedBarcodes = sessionJson.updatedTrackedBarcodes
            .map((trackedBarcodeJSON) => {
            return TrackedBarcode
                .fromJSON(trackedBarcodeJSON, sessionJson.frameSequenceId);
        });
        session._trackedBarcodes = Object.keys(sessionJson.trackedBarcodes)
            .reduce((trackedBarcodes, identifier) => {
            trackedBarcodes[identifier] = TrackedBarcode
                .fromJSON(sessionJson.trackedBarcodes[identifier], sessionJson.frameSequenceId);
            return trackedBarcodes;
        }, {});
        session.frameId = (_a = json.frameId) !== null && _a !== void 0 ? _a : '';
        return session;
    }
    reset() {
        return this.listenerController.resetSession();
    }
}

var BarcodeBatchListenerEvents;
(function (BarcodeBatchListenerEvents) {
    BarcodeBatchListenerEvents["inCallback"] = "BarcodeBatchListener.inCallback";
    BarcodeBatchListenerEvents["didUpdateSession"] = "BarcodeBatchListener.didUpdateSession";
})(BarcodeBatchListenerEvents || (BarcodeBatchListenerEvents = {}));
class BarcodeBatchListenerController {
    get _proxy() {
        return FactoryMaker.getInstance("BarcodeBatchListenerProxy");
    }
    static forBarcodeBatch(barcodeBatch) {
        const controller = new BarcodeBatchListenerController();
        controller.barcodeBatch = barcodeBatch;
        controller._proxy.isModeEnabled = () => barcodeBatch.isEnabled;
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
        this.eventEmitter.on(BarcodeBatchListenerEvents.inCallback, (value) => {
            this.barcodeBatch.isInListenerCallback = value;
        });
        this.eventEmitter.on(BarcodeBatchListenerEvents.didUpdateSession, (data) => __awaiter(this, void 0, void 0, function* () {
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeBatchListenerController didUpdateSession payload is null');
                return;
            }
            const session = BarcodeBatchSession.fromJSON(payload);
            yield this.notifyListenersOfDidUpdateSession(session);
            this._proxy.finishDidUpdateSessionCallback(this.barcodeBatch.isEnabled);
        }));
    }
    unsubscribeListener() {
        this._proxy.unregisterListenerForEvents();
        this.eventEmitter.removeAllListeners(BarcodeBatchListenerEvents.inCallback);
        this.eventEmitter.removeAllListeners(BarcodeBatchListenerEvents.didUpdateSession);
    }
    setModeEnabledState(enabled) {
        this._proxy.setModeEnabledState(enabled);
    }
    updateBarcodeBatchMode() {
        return this._proxy.updateBarcodeBatchMode(JSON.stringify(this.barcodeBatch.toJSON()));
    }
    applyBarcodeBatchModeSettings(newSettings) {
        return this._proxy.applyBarcodeBatchModeSettings(JSON.stringify(newSettings.toJSON()));
    }
    notifyListenersOfDidUpdateSession(session) {
        return __awaiter(this, void 0, void 0, function* () {
            const mode = this.barcodeBatch;
            mode.isInListenerCallback = true;
            for (const listener of mode.listeners) {
                if (listener.didUpdateSession) {
                    yield listener.didUpdateSession(this.barcodeBatch, session, () => CameraController.getFrame(session.frameId));
                }
            }
            mode.isInListenerCallback = false;
        });
    }
}

class BarcodeBatch extends DefaultSerializeable {
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
        return BarcodeBatch.barcodeBatchDefaults.RecommendedCameraSettings;
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
    static get barcodeBatchDefaults() {
        return getBarcodeBatchDefaults();
    }
    static forContext(context, settings) {
        const barcodeBatch = new BarcodeBatch();
        barcodeBatch.settings = settings;
        if (context) {
            context.addMode(barcodeBatch);
        }
        return barcodeBatch;
    }
    constructor() {
        super();
        this.type = 'barcodeTracking';
        this._isEnabled = true;
        this.privateContext = null;
        this.listeners = [];
        this.isInListenerCallback = false;
        this.listenerController = BarcodeBatchListenerController.forBarcodeBatch(this);
    }
    applySettings(settings) {
        this.settings = settings;
        return this.listenerController.applyBarcodeBatchModeSettings(settings);
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
], BarcodeBatch.prototype, "_isEnabled", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeBatch.prototype, "privateContext", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeBatch.prototype, "listeners", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeBatch.prototype, "listenerController", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeBatch.prototype, "isInListenerCallback", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeBatch, "barcodeBatchDefaults", null);

var BarcodeBatchAdvancedOverlayListenerEvents;
(function (BarcodeBatchAdvancedOverlayListenerEvents) {
    BarcodeBatchAdvancedOverlayListenerEvents["didTapViewForTrackedBarcode"] = "BarcodeBatchAdvancedOverlayListener.didTapViewForTrackedBarcode";
    BarcodeBatchAdvancedOverlayListenerEvents["viewForTrackedBarcode"] = "BarcodeBatchAdvancedOverlayListener.viewForTrackedBarcode";
    BarcodeBatchAdvancedOverlayListenerEvents["anchorForTrackedBarcode"] = "BarcodeBatchAdvancedOverlayListener.anchorForTrackedBarcode";
    BarcodeBatchAdvancedOverlayListenerEvents["offsetForTrackedBarcode"] = "BarcodeBatchAdvancedOverlayListener.offsetForTrackedBarcode";
})(BarcodeBatchAdvancedOverlayListenerEvents || (BarcodeBatchAdvancedOverlayListenerEvents = {}));
class BarcodeBatchAdvancedOverlayController {
    get _proxy() {
        return FactoryMaker.getInstance("BarcodeBatchAdvancedOverlayProxy");
    }
    static forOverlay(overlay) {
        const controller = new BarcodeBatchAdvancedOverlayController();
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
    updateBarcodeBatchAdvancedOverlay() {
        return this._proxy.updateBarcodeBatchAdvancedOverlay(JSON.stringify(this.overlay.toJSON()));
    }
    subscribeListener() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this._proxy.registerListenerForAdvancedOverlayEvents();
        (_b = (_a = this._proxy).subscribeViewForTrackedBarcode) === null || _b === void 0 ? void 0 : _b.call(_a);
        (_d = (_c = this._proxy).subscribeAnchorForTrackedBarcode) === null || _d === void 0 ? void 0 : _d.call(_c);
        (_f = (_e = this._proxy).subscribeOffsetForTrackedBarcode) === null || _f === void 0 ? void 0 : _f.call(_e);
        (_h = (_g = this._proxy).subscribeDidTapViewForTrackedBarcode) === null || _h === void 0 ? void 0 : _h.call(_g);
        this.eventEmitter.on(BarcodeBatchAdvancedOverlayListenerEvents.viewForTrackedBarcode, (data) => __awaiter(this, void 0, void 0, function* () {
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeBatchAdvancedOverlayController viewForTrackedBarcode payload is null');
                return;
            }
            const trackedBarcode = TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            if (this.overlay.listener && this.overlay.listener.viewForTrackedBarcode) {
                const view = yield this.overlay.listener.viewForTrackedBarcode(this.overlay, trackedBarcode);
                this._proxy.setViewForTrackedBarcode(this._proxy.getJSONStringForView(view), trackedBarcode.identifier, trackedBarcode.sessionFrameSequenceID);
            }
        }));
        this.eventEmitter.on(BarcodeBatchAdvancedOverlayListenerEvents.anchorForTrackedBarcode, (data) => {
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeBatchAdvancedOverlayController anchorForTrackedBarcode payload is null');
                return;
            }
            const trackedBarcode = TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            let anchor = Anchor.Center;
            if (this.overlay.listener && this.overlay.listener.anchorForTrackedBarcode) {
                anchor = this.overlay.listener.anchorForTrackedBarcode(this.overlay, trackedBarcode);
            }
            this.setAnchorForTrackedBarcode(anchor, trackedBarcode);
        });
        this.eventEmitter.on(BarcodeBatchAdvancedOverlayListenerEvents.offsetForTrackedBarcode, (data) => {
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeBatchAdvancedOverlayController offsetForTrackedBarcode payload is null');
                return;
            }
            const trackedBarcode = TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            let offset = PointWithUnit.zero;
            if (this.overlay.listener && this.overlay.listener.offsetForTrackedBarcode) {
                offset = this.overlay.listener.offsetForTrackedBarcode(this.overlay, trackedBarcode);
            }
            this.setOffsetForTrackedBarcode(offset, trackedBarcode);
        });
        this.eventEmitter.on(BarcodeBatchAdvancedOverlayListenerEvents.didTapViewForTrackedBarcode, (data) => {
            var _a, _b;
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeBatchAdvancedOverlayController didTapViewForTrackedBarcode payload is null');
                return;
            }
            const trackedBarcode = TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            (_b = (_a = this.overlay.listener) === null || _a === void 0 ? void 0 : _a.didTapViewForTrackedBarcode) === null || _b === void 0 ? void 0 : _b.call(_a, this.overlay, trackedBarcode);
        });
    }
    unsubscribeListener() {
        this._proxy.unregisterListenerForAdvancedOverlayEvents();
        this.eventEmitter.removeAllListeners(BarcodeBatchAdvancedOverlayListenerEvents.anchorForTrackedBarcode);
        this.eventEmitter.removeAllListeners(BarcodeBatchAdvancedOverlayListenerEvents.offsetForTrackedBarcode);
        this.eventEmitter.removeAllListeners(BarcodeBatchAdvancedOverlayListenerEvents.viewForTrackedBarcode);
    }
}

var BarcodeBatchBasicOverlayListenerEvents;
(function (BarcodeBatchBasicOverlayListenerEvents) {
    BarcodeBatchBasicOverlayListenerEvents["brushForTrackedBarcode"] = "BarcodeBatchBasicOverlayListener.brushForTrackedBarcode";
    BarcodeBatchBasicOverlayListenerEvents["didTapTrackedBarcode"] = "BarcodeBatchBasicOverlayListener.didTapTrackedBarcode";
})(BarcodeBatchBasicOverlayListenerEvents || (BarcodeBatchBasicOverlayListenerEvents = {}));
class BarcodeBatchBasicOverlayController {
    get _proxy() {
        return FactoryMaker.getInstance("BarcodeBatchBasicOverlayProxy");
    }
    static forOverlay(overlay) {
        const controller = new BarcodeBatchBasicOverlayController();
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
    updateBarcodeBatchBasicOverlay() {
        return this._proxy.updateBarcodeBatchBasicOverlay(JSON.stringify(this.overlay.toJSON()));
    }
    subscribeListener() {
        var _a, _b, _c, _d;
        this._proxy.registerListenerForBasicOverlayEvents();
        (_b = (_a = this._proxy).subscribeBrushForTrackedBarcode) === null || _b === void 0 ? void 0 : _b.call(_a);
        (_d = (_c = this._proxy).subscribeDidTapTrackedBarcode) === null || _d === void 0 ? void 0 : _d.call(_c);
        this.eventEmitter.on(BarcodeBatchBasicOverlayListenerEvents.brushForTrackedBarcode, (data) => {
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeBatchBasicOverlayController brushForTrackedBarcode payload is null');
                return;
            }
            const trackedBarcode = TrackedBarcode.fromJSON(JSON.parse(payload.trackedBarcode));
            let brush = this.overlay.brush;
            if (this.overlay.listener && this.overlay.listener.brushForTrackedBarcode) {
                brush = this.overlay.listener.brushForTrackedBarcode(this.overlay, trackedBarcode);
                this.setBrushForTrackedBarcode(brush, trackedBarcode);
            }
        });
        this.eventEmitter.on(BarcodeBatchBasicOverlayListenerEvents.didTapTrackedBarcode, (data) => {
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeBatchBasicOverlayController didTapTrackedBarcode payload is null');
                return;
            }
            const trackedBarcode = TrackedBarcode.fromJSON(JSON.parse(payload.trackedBarcode));
            if (this.overlay.listener && this.overlay.listener.didTapTrackedBarcode) {
                this.overlay.listener.didTapTrackedBarcode(this.overlay, trackedBarcode);
            }
        });
    }
    unsubscribeListener() {
        this._proxy.unregisterListenerForBasicOverlayEvents();
        this.eventEmitter.removeAllListeners(BarcodeBatchBasicOverlayListenerEvents.brushForTrackedBarcode);
        this.eventEmitter.removeAllListeners(BarcodeBatchBasicOverlayListenerEvents.didTapTrackedBarcode);
    }
}

class BarcodeBatchBasicOverlay extends DefaultSerializeable {
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
        this.controller.updateBarcodeBatchBasicOverlay();
    }
    get shouldShowScanAreaGuides() {
        return this._shouldShowScanAreaGuides;
    }
    set shouldShowScanAreaGuides(shouldShow) {
        this._shouldShowScanAreaGuides = shouldShow;
        this.controller.updateBarcodeBatchBasicOverlay();
    }
    get style() {
        return this._style;
    }
    static withBarcodeBatch(barcodeBatch) {
        return BarcodeBatchBasicOverlay.withBarcodeBatchForView(barcodeBatch, null);
    }
    static withBarcodeBatchForView(barcodeBatch, view) {
        return this.withBarcodeBatchForViewWithStyle(barcodeBatch, view, BarcodeBatchBasicOverlay.barcodeBatchDefaults.BarcodeBatchBasicOverlay.defaultStyle);
    }
    static withBarcodeBatchForViewWithStyle(barcodeBatch, view, style) {
        const overlay = new BarcodeBatchBasicOverlay();
        overlay.barcodeBatch = barcodeBatch;
        overlay._style = style;
        overlay._brush = new Brush(BarcodeBatchBasicOverlay.barcodeBatchDefaults.BarcodeBatchBasicOverlay.styles[style].DefaultBrush.fillColor, BarcodeBatchBasicOverlay.barcodeBatchDefaults.BarcodeBatchBasicOverlay.styles[style].DefaultBrush.strokeColor, BarcodeBatchBasicOverlay.barcodeBatchDefaults.BarcodeBatchBasicOverlay.styles[style].DefaultBrush.strokeWidth);
        if (view) {
            view.addOverlay(overlay);
        }
        return overlay;
    }
    static get barcodeBatchDefaults() {
        return getBarcodeBatchDefaults();
    }
    constructor() {
        super();
        this.type = 'barcodeTrackingBasic';
        this._brush = BarcodeBatchBasicOverlay.barcodeBatchDefaults.BarcodeBatchBasicOverlay.DefaultBrush;
        this._shouldShowScanAreaGuides = false;
        this.listener = null;
        this.controller = BarcodeBatchBasicOverlayController.forOverlay(this);
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
], BarcodeBatchBasicOverlay.prototype, "barcodeBatch", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeBatchBasicOverlay.prototype, "_view", void 0);
__decorate([
    nameForSerialization('style')
], BarcodeBatchBasicOverlay.prototype, "_style", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeBatchBasicOverlay.prototype, "defaultBrush", null);
__decorate([
    nameForSerialization('defaultBrush')
], BarcodeBatchBasicOverlay.prototype, "_brush", void 0);
__decorate([
    nameForSerialization('shouldShowScanAreaGuides')
], BarcodeBatchBasicOverlay.prototype, "_shouldShowScanAreaGuides", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeBatchBasicOverlay.prototype, "listener", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeBatchBasicOverlay.prototype, "controller", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeBatchBasicOverlay, "barcodeBatchDefaults", null);

class BarcodeBatchSettings extends DefaultSerializeable {
    get enabledSymbologies() {
        return Object.keys(this.symbologies)
            .filter(symbology => this.symbologies[symbology].isEnabled);
    }
    /**
    * @deprecated Setting a scenario is no longer recommended, use the BarcodeBatchSettings empty constructor instead.
    */
    static forScenario(scenario) {
        console.warn('Setting a scenario is no longer recommended, use the BarcodeBatchSettings empty constructor instead.');
        const settings = new BarcodeBatchSettings();
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
            const symbologySettings = BarcodeBatchSettings.barcodeDefaults.SymbologySettings[symbology];
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
], BarcodeBatchSettings.prototype, "_arucoDictionary", void 0);
__decorate([
    ignoreFromSerialization
], BarcodeBatchSettings, "barcodeDefaults", null);

class BaseBarcodeBatchAdvancedOverlay extends DefaultSerializeable {
    get shouldShowScanAreaGuides() {
        return this._shouldShowScanAreaGuides;
    }
    set shouldShowScanAreaGuides(shouldShow) {
        this._shouldShowScanAreaGuides = shouldShow;
        this.controller.updateBarcodeBatchAdvancedOverlay();
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
    initialize(barcodeBatch, view) {
        this.barcodeBatch = barcodeBatch;
        if (view) {
            view.addOverlay(this);
        }
    }
    constructor() {
        super();
        this.type = 'barcodeTrackingAdvanced';
        this._shouldShowScanAreaGuides = false;
        this.listener = null;
        this.controller = BarcodeBatchAdvancedOverlayController.forOverlay(this);
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
], BaseBarcodeBatchAdvancedOverlay.prototype, "_shouldShowScanAreaGuides", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodeBatchAdvancedOverlay.prototype, "barcodeBatch", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodeBatchAdvancedOverlay.prototype, "listener", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodeBatchAdvancedOverlay.prototype, "controller", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodeBatchAdvancedOverlay.prototype, "_view", void 0);

class SparkScan extends DefaultSerializeable {
    get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(isEnabled) {
        var _a;
        this._isEnabled = isEnabled;
        (_a = this.controller) === null || _a === void 0 ? void 0 : _a.setModeEnabledState(isEnabled);
    }
    get context() {
        return this._context;
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
        this.hasListeners = false;
        this.privateContext = null;
        this.listeners = [];
        this.controller = null;
        this.isInListenerCallback = false;
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
        this.hasListeners = this.listeners.length > 0;
    }
    checkAndSubscribeListeners() {
        var _a;
        if (this.listeners.length === 0) {
            (_a = this.controller) === null || _a === void 0 ? void 0 : _a.subscribeModeListener();
        }
    }
    checkAndUnsubscribeListeners() {
        var _a;
        if (this.listeners.length === 0) {
            (_a = this.controller) === null || _a === void 0 ? void 0 : _a.unsubscribeModeListener();
        }
    }
    removeListener(listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener));
        this.hasListeners = this.listeners.length > 0;
        this.checkAndUnsubscribeListeners();
    }
    didChange() {
        if (this.controller) {
            return this.controller.updateMode();
        }
        else {
            return Promise.resolve();
        }
    }
}
__decorate([
    nameForSerialization('isEnabled')
], SparkScan.prototype, "_isEnabled", void 0);
__decorate([
    ignoreFromSerialization
], SparkScan.prototype, "privateContext", void 0);
__decorate([
    ignoreFromSerialization
], SparkScan.prototype, "listeners", void 0);
__decorate([
    ignoreFromSerialization
], SparkScan.prototype, "controller", void 0);
__decorate([
    ignoreFromSerialization
], SparkScan.prototype, "isInListenerCallback", void 0);

var SparkScanMiniPreviewSize;
(function (SparkScanMiniPreviewSize) {
    SparkScanMiniPreviewSize["Regular"] = "regular";
    SparkScanMiniPreviewSize["Expanded"] = "expanded";
})(SparkScanMiniPreviewSize || (SparkScanMiniPreviewSize = {}));

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
    nameForSerialization('previewBehavior')
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

class SparkScanSession {
    static fromJSON(json) {
        var _a;
        const sessionJson = JSON.parse(json.session);
        const session = new SparkScanSession();
        session._newlyRecognizedBarcode = sessionJson.newlyRecognizedBarcode != null ?
            Barcode.fromJSON(sessionJson.newlyRecognizedBarcode) :
            null;
        session._frameSequenceID = sessionJson.frameSequenceId;
        session.frameId = (_a = json.frameId) !== null && _a !== void 0 ? _a : '';
        return session;
    }
    get newlyRecognizedBarcode() {
        return this._newlyRecognizedBarcode;
    }
    get frameSequenceID() {
        return this._frameSequenceID;
    }
    reset() {
        return this.controller.resetSession();
    }
}

class SparkScanSettings extends DefaultSerializeable {
    get batterySaving() {
        return this._batterySaving;
    }
    set batterySaving(newValue) {
        this._batterySaving = newValue;
    }
    get locationSelection() {
        return this._locationSelection;
    }
    set locationSelection(newValue) {
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
        this._batterySaving = SparkScanSettings.sparkScanDefaults.SparkScanSettings.batterySaving;
        this._locationSelection = SparkScanSettings.sparkScanDefaults.SparkScanSettings.locationSelection;
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
    nameForSerialization('batterySaving')
], SparkScanSettings.prototype, "_batterySaving", void 0);
__decorate([
    nameForSerialization('locationSelection')
], SparkScanSettings.prototype, "_locationSelection", void 0);
__decorate([
    ignoreFromSerialization
], SparkScanSettings, "sparkScanDefaults", null);
__decorate([
    ignoreFromSerialization
], SparkScanSettings, "barcodeDefaults", null);

class SparkScanViewSettings extends DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.triggerButtonCollapseTimeout = SparkScanViewSettings.viewSettingsDefaults.triggerButtonCollapseTimeout;
        this.defaultTorchState = SparkScanViewSettings.viewSettingsDefaults.defaultTorchState;
        this.defaultScanningMode = SparkScanViewSettings.viewSettingsDefaults.defaultScanningMode;
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
        this.defaultMiniPreviewSize = SparkScanViewSettings.viewSettingsDefaults.defaultMiniPreviewSize;
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

var SparkScanViewState;
(function (SparkScanViewState) {
    SparkScanViewState["Initial"] = "initial";
    SparkScanViewState["Idle"] = "idle";
    SparkScanViewState["Inactive"] = "inactive";
    SparkScanViewState["Active"] = "active";
    SparkScanViewState["Error"] = "error";
})(SparkScanViewState || (SparkScanViewState = {}));

var SparkScanViewEvents;
(function (SparkScanViewEvents) {
    SparkScanViewEvents["barcodeFindButtonTapped"] = "SparkScanViewUiListener.barcodeFindButtonTapped";
    SparkScanViewEvents["barcodeCountButtonTapped"] = "SparkScanViewUiListener.barcodeCountButtonTapped";
    SparkScanViewEvents["didChangeViewState"] = "SparkScanViewUiListener.didChangeViewState";
    SparkScanViewEvents["feedbackForBarcode"] = "SparkScanFeedbackDelegate.feedbackForBarcode";
    SparkScanViewEvents["didUpdateSession"] = "SparkScanListener.didUpdateSession";
    SparkScanViewEvents["didScan"] = "SparkScanListener.didScan";
})(SparkScanViewEvents || (SparkScanViewEvents = {}));
class SparkScanViewController extends BaseNewController {
    static forSparkScanView(view, sparkScan) {
        const controller = new SparkScanViewController();
        controller.view = view;
        controller.sparkScan = sparkScan;
        controller.sparkScan.controller = controller;
        controller.initialize();
        return controller;
    }
    constructor() {
        super('SparkScanViewProxy');
        this.hasFeedbackDelegateListener = false;
        this.hasNativeViewListenerSubscriptions = false;
        this.hasNativeModeListenerSubscriptions = false;
        this.viewInstanceId = -1;
        this.didUpdateSessionListener = (ev) => __awaiter(this, void 0, void 0, function* () {
            const payload = EventDataParser.parse(ev.data);
            if (payload === null) {
                console.error('SparkScanListenerController didUpdateSession payload is null');
                return;
            }
            if (payload.viewId !== this.viewInstanceId) {
                return;
            }
            const session = SparkScanSession.fromJSON(payload);
            session.controller = this;
            yield this.notifyListenersOfDidUpdateSession(session);
            this._proxy.$finishSparkScanDidUpdateSession({ viewId: this.viewInstanceId, isEnabled: this.sparkScan.isEnabled });
        });
        this.didScanListener = (ev) => __awaiter(this, void 0, void 0, function* () {
            const payload = EventDataParser.parse(ev.data);
            if (payload === null) {
                console.error('SparkScanListenerController.subscribeListener: didScan payload is null');
                return;
            }
            if (payload.viewId !== this.viewInstanceId) {
                return;
            }
            const session = SparkScanSession.fromJSON(payload);
            session.controller = this;
            yield this.notifyListenersOfDidScan(session);
            this._proxy.$finishSparkScanDidScan({ viewId: this.viewInstanceId, isEnabled: this.sparkScan.isEnabled });
        });
        this.barcodeCountButtonTappedListener = (ev) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const payload = EventDataParser.parse(ev.data);
            if (payload === null) {
                return;
            }
            if (payload.viewId !== this.viewInstanceId) {
                return;
            }
            (_b = (_a = this.view.uiListener) === null || _a === void 0 ? void 0 : _a.didTapBarcodeCountButton) === null || _b === void 0 ? void 0 : _b.call(_a, this.view);
        });
        this.barcodeFindButtonTappedListener = (ev) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const payload = EventDataParser.parse(ev.data);
            if (payload === null) {
                return;
            }
            if (payload.viewId !== this.viewInstanceId) {
                return;
            }
            (_b = (_a = this.view.uiListener) === null || _a === void 0 ? void 0 : _a.didTapBarcodeFindButton) === null || _b === void 0 ? void 0 : _b.call(_a, this.view);
        });
        this.didChangeViewStateListener = (ev) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const payload = EventDataParser.parse(ev.data);
            if (payload === null) {
                console.error('SparkScanViewController didChangeViewState payload is null');
                return;
            }
            if (payload.viewId !== this.viewInstanceId) {
                return;
            }
            const newState = payload.state;
            (_b = (_a = this.view.uiListener) === null || _a === void 0 ? void 0 : _a.didChangeViewState) === null || _b === void 0 ? void 0 : _b.call(_a, newState);
        });
    }
    initialize() {
        this._proxy.on$barcodeCountButtonTapped = this.barcodeCountButtonTappedListener;
        this._proxy.on$barcodeFindButtonTapped = this.barcodeFindButtonTappedListener;
        this._proxy.on$didChangeViewState = this.didChangeViewStateListener;
        this._proxy.on$didUpdateSession = this.didUpdateSessionListener;
        this._proxy.on$didScan = this.didScanListener;
        this._proxy.on$feedbackForBarcode = this.handleFeedbackForBarcode.bind(this);
        if (this.sparkScan.listeners.length > 0) {
            this.subscribeModeListener();
        }
        if (this.view.uiListener) {
            this.subscribeViewListeners();
        }
        if (this.view.feedbackDelegate) {
            this.addFeedbackDelegate();
        }
    }
    dispose() {
        this.unsubscribeModeListener();
        this.unsubscribeViewListeners();
        this.removeFeedbackDelegate();
        this._proxy.$disposeSparkScanView({ viewId: this.viewInstanceId });
        this._proxy.dispose();
    }
    subscribeViewListeners() {
        if (!this.isViewCreated)
            return; // view not created yet
        if (this.hasNativeViewListenerSubscriptions)
            return;
        this._proxy.$registerSparkScanViewListenerEvents({ viewId: this.viewInstanceId });
        this.hasNativeViewListenerSubscriptions = true;
    }
    unsubscribeViewListeners() {
        if (!this.isViewCreated)
            return; // view not created yet
        if (this.hasNativeViewListenerSubscriptions === false)
            return;
        this._proxy.$unregisterSparkScanViewListenerEvents({ viewId: this.viewInstanceId });
        this.hasNativeViewListenerSubscriptions = false;
    }
    createView() {
        const viewJson = {
            SparkScan: this.sparkScan.toJSON(),
            SparkScanView: this.view.toJSON()
        };
        const viewId = this.view.viewId;
        const json = JSON.stringify(viewJson);
        return this._proxy.$createSparkScanView({ viewId, viewJson: json }).then(() => {
            this.viewInstanceId = viewId;
            this.initialize();
        });
    }
    updateView() {
        if (!this.isViewCreated) {
            return Promise.resolve(); // No updates if view not created yet
        }
        const sparkScanViewJson = this.view.toJSON();
        const json = JSON.stringify({ SparkScanView: sparkScanViewJson });
        return this._proxy.$updateSparkScanView({ viewId: this.viewInstanceId, viewJson: json });
    }
    stopScanning() {
        if (!this.isViewCreated) {
            return Promise.resolve(); // No updates if view not created yet
        }
        return this._proxy.$stopSparkScanViewScanning({ viewId: this.viewInstanceId });
    }
    pauseScanning() {
        if (!this.isViewCreated) {
            return Promise.resolve(); // No updates if view not created yet
        }
        return this._proxy.$pauseSparkScanViewScanning({ viewId: this.viewInstanceId });
    }
    startScanning() {
        if (!this.isViewCreated) {
            return Promise.resolve(); // No updates if view not created yet
        }
        return this._proxy.$startSparkScanViewScanning({ viewId: this.viewInstanceId });
    }
    prepareScanning() {
        if (!this.isViewCreated) {
            return Promise.resolve(); // No updates if view not created yet
        }
        return this._proxy.$prepareSparkScanViewScanning({ viewId: this.viewInstanceId });
    }
    showToast(text) {
        if (!this.isViewCreated) {
            return Promise.resolve(); // No updates if view not created yet
        }
        return this._proxy.$showSparkScanViewToast({ viewId: this.viewInstanceId, text: text });
    }
    showView() {
        if (!this.isViewCreated) {
            return Promise.resolve(); // No updates if view not created yet
        }
        return this._proxy.$showSparkScanView({ viewId: this.viewInstanceId });
    }
    hideView() {
        if (!this.isViewCreated) {
            return Promise.resolve(); // No updates if view not created yet
        }
        return this._proxy.$hideSparkScanView({ viewId: this.viewInstanceId });
    }
    addFeedbackDelegate() {
        if (!this.isViewCreated)
            return; // view not created yet
        if (this.hasFeedbackDelegateListener)
            return;
        this._proxy.$registerSparkScanFeedbackDelegateForEvents({ viewId: this.viewInstanceId });
        this.hasFeedbackDelegateListener = true;
    }
    removeFeedbackDelegate() {
        if (!this.isViewCreated)
            return; // view not created yet
        if (!this.hasFeedbackDelegateListener)
            return;
        this._proxy.$unregisterSparkScanFeedbackDelegateForEvents({ viewId: this.viewInstanceId });
        this.hasFeedbackDelegateListener = false;
    }
    resetSession() {
        if (!this.isViewCreated) {
            return Promise.resolve(); // view not created yet
        }
        return this._proxy.$resetSparkScanSession({ viewId: this.viewInstanceId });
    }
    updateMode() {
        if (!this.isViewCreated) {
            return Promise.resolve(); // No updates if view not created yet
        }
        const sparkScanJson = this.sparkScan.toJSON();
        const json = JSON.stringify(sparkScanJson);
        return this._proxy.$updateSparkScanMode({ viewId: this.viewInstanceId, modeJson: json });
    }
    subscribeModeListener() {
        if (!this.isViewCreated)
            return; // view not created yet
        if (this.hasNativeModeListenerSubscriptions)
            return;
        this._proxy.$registerSparkScanListenerForEvents({ viewId: this.viewInstanceId });
        this.hasNativeModeListenerSubscriptions = true;
    }
    unsubscribeModeListener() {
        if (!this.isViewCreated)
            return; // view not created yet
        if (this.hasNativeModeListenerSubscriptions == false)
            return;
        this._proxy.$unregisterSparkScanListenerForEvents({ viewId: this.viewInstanceId });
        this.hasNativeModeListenerSubscriptions = false;
    }
    setModeEnabledState(enabled) {
        if (!this.isViewCreated)
            return; // view not created yet
        this._proxy.$setSparkScanModeEnabledState({ viewId: this.viewInstanceId, isEnabled: enabled });
    }
    get isViewCreated() {
        return this.viewInstanceId !== -1;
    }
    handleFeedbackForBarcode(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const payload = EventDataParser.parse(ev.data);
            if (payload === null) {
                console.error('SparkScanViewController feedbackForBarcode payload is null');
                return;
            }
            if (payload.viewId !== this.viewInstanceId) {
                return;
            }
            const barcode = Barcode.fromJSON(JSON.parse(payload.barcode));
            const feedback = (_b = (_a = this.view.feedbackDelegate) === null || _a === void 0 ? void 0 : _a.feedbackForBarcode) === null || _b === void 0 ? void 0 : _b.call(_a, barcode);
            if (feedback instanceof Promise) {
                feedback.then((feedback) => {
                    this._proxy.$submitSparkScanFeedbackForBarcode({ viewId: this.viewInstanceId, feedbackJson: JSON.stringify(feedback === null || feedback === void 0 ? void 0 : feedback.toJSON()) });
                });
            }
            else {
                this._proxy.$submitSparkScanFeedbackForBarcode({ viewId: this.viewInstanceId, feedbackJson: JSON.stringify(feedback === null || feedback === void 0 ? void 0 : feedback.toJSON()) });
            }
        });
    }
    notifyListenersOfDidUpdateSession(session) {
        return __awaiter(this, void 0, void 0, function* () {
            const mode = this.sparkScan;
            mode.isInListenerCallback = true;
            for (const listener of mode.listeners) {
                if (listener.didUpdateSession) {
                    yield listener.didUpdateSession(this.sparkScan, session, () => CameraController.getFrameOrNull(session.frameId));
                }
            }
            mode.isInListenerCallback = false;
        });
    }
    notifyListenersOfDidScan(session) {
        return __awaiter(this, void 0, void 0, function* () {
            const mode = this.sparkScan;
            mode.isInListenerCallback = true;
            for (const listener of mode.listeners) {
                if (listener.didScan) {
                    yield listener.didScan(this.sparkScan, session, () => CameraController.getFrameOrNull(session.frameId));
                }
            }
            mode.isInListenerCallback = false;
        });
    }
}

class BaseSparkScanView {
    get viewId() {
        return this._viewId;
    }
    get uiListener() {
        return this._uiListener;
    }
    set uiListener(listener) {
        this._uiListener = listener;
        if (listener) {
            this._controller.subscribeViewListeners();
        }
        else {
            this._controller.unsubscribeViewListeners();
        }
    }
    static forContext(context, sparkScan, settings) {
        const view = new BaseSparkScanView({ context, sparkScan, settings });
        return view;
    }
    static withProps(props) {
        const view = new BaseSparkScanView({
            context: props.context,
            sparkScan: props.sparkScan,
            settings: props.sparkScanViewSettings,
        });
        if (props.uiListener) {
            view.uiListener = props.uiListener;
        }
        if (props.previewSizeControlVisible !== undefined && props.previewSizeControlVisible !== null) {
            view._previewSizeControlVisible = props.previewSizeControlVisible;
        }
        if (props.cameraSwitchButtonVisible !== undefined && props.cameraSwitchButtonVisible !== null) {
            view._cameraSwitchButtonVisible = props.cameraSwitchButtonVisible;
        }
        if (props.scanningBehaviorButtonVisible !== undefined && props.scanningBehaviorButtonVisible !== null) {
            view._scanningBehaviorButtonVisible = props.scanningBehaviorButtonVisible;
        }
        if (props.barcodeCountButtonVisible !== undefined && props.barcodeCountButtonVisible !== null) {
            view._barcodeCountButtonVisible = props.barcodeCountButtonVisible;
        }
        if (props.barcodeFindButtonVisible !== undefined && props.barcodeFindButtonVisible !== null) {
            view._barcodeFindButtonVisible = props.barcodeFindButtonVisible;
        }
        if (props.targetModeButtonVisible !== undefined && props.targetModeButtonVisible !== null) {
            view._targetModeButtonVisible = props.targetModeButtonVisible;
        }
        if (props.torchControlVisible !== undefined && props.torchControlVisible !== null) {
            view._torchControlVisible = props.torchControlVisible;
        }
        if (props.previewCloseControlVisible !== undefined && props.previewCloseControlVisible !== null) {
            view._previewCloseControlVisible = props.previewCloseControlVisible;
        }
        if (props.triggerButtonVisible !== undefined) {
            view._triggerButtonVisible = props.triggerButtonVisible;
        }
        if (props.triggerButtonImage !== undefined) {
            view._triggerButtonImage = props.triggerButtonImage;
        }
        if (props.triggerButtonTintColor !== undefined) {
            view._triggerButtonTintColor = props.triggerButtonTintColor;
        }
        if (props.triggerButtonAnimationColor !== undefined) {
            view._triggerButtonAnimationColor = props.triggerButtonAnimationColor;
        }
        if (props.triggerButtonExpandedColor !== undefined) {
            view._triggerButtonExpandedColor = props.triggerButtonExpandedColor;
        }
        if (props.triggerButtonCollapsedColor !== undefined) {
            view._triggerButtonCollapsedColor = props.triggerButtonCollapsedColor;
        }
        if (props.toolbarBackgroundColor !== undefined) {
            view._toolbarBackgroundColor = props.toolbarBackgroundColor;
        }
        if (props.toolbarIconActiveTintColor !== undefined) {
            view._toolbarIconActiveTintColor = props.toolbarIconActiveTintColor;
        }
        if (props.toolbarIconInactiveTintColor !== undefined) {
            view._toolbarIconInactiveTintColor = props.toolbarIconInactiveTintColor;
        }
        if (props.feedbackDelegate !== undefined) {
            view.feedbackDelegate = props.feedbackDelegate;
        }
        return view;
    }
    static get defaultBrush() {
        return BaseSparkScanView.sparkScanDefaults.SparkScanView.brush;
    }
    constructor({ context, sparkScan, settings }) {
        this._viewId = -1; // -1 means the view is not created yet
        this._uiListener = null;
        this._brush = BaseSparkScanView.defaultBrush;
        this._feedbackDelegate = null;
        this._previewSizeControlVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.previewSizeControlVisible;
        this._cameraSwitchButtonVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.cameraSwitchButtonVisible;
        this._scanningBehaviorButtonVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.scanningBehaviorButtonVisible;
        this._barcodeCountButtonVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.barcodeCountButtonVisible;
        this._barcodeFindButtonVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.barcodeFindButtonVisible;
        this._targetModeButtonVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.targetModeButtonVisible;
        this._toolbarBackgroundColor = BaseSparkScanView.sparkScanDefaults.SparkScanView.toolbarBackgroundColor;
        this._toolbarIconActiveTintColor = BaseSparkScanView.sparkScanDefaults.SparkScanView.toolbarIconActiveTintColor;
        this._toolbarIconInactiveTintColor = BaseSparkScanView.sparkScanDefaults.SparkScanView.toolbarIconInactiveTintColor;
        this._triggerButtonAnimationColor = BaseSparkScanView.sparkScanDefaults.SparkScanView.triggerButtonAnimationColor;
        this._triggerButtonExpandedColor = BaseSparkScanView.sparkScanDefaults.SparkScanView.triggerButtonExpandedColor;
        this._triggerButtonCollapsedColor = BaseSparkScanView.sparkScanDefaults.SparkScanView.triggerButtonCollapsedColor;
        this._triggerButtonTintColor = BaseSparkScanView.sparkScanDefaults.SparkScanView.triggerButtonTintColor;
        this._triggerButtonVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.triggerButtonVisible;
        this._triggerButtonImage = BaseSparkScanView.sparkScanDefaults.SparkScanView.triggerButtonImage;
        this._torchControlVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.torchControlVisible;
        this._previewCloseControlVisible = BaseSparkScanView.sparkScanDefaults.SparkScanView.previewSizeControlVisible;
        this._sparkScan = sparkScan;
        this.context = context;
        this._viewSettings = settings !== null && settings !== void 0 ? settings : new SparkScanViewSettings();
        this._controller = SparkScanViewController.forSparkScanView(this, sparkScan);
    }
    get previewSizeControlVisible() {
        return this._previewSizeControlVisible;
    }
    set previewSizeControlVisible(newValue) {
        this._previewSizeControlVisible = newValue;
        this.update();
    }
    /**
     * @deprecated The torch button has been moved to the mini preview. Use property `torchControlVisible` instead.
     */
    get torchButtonVisible() {
        return false;
    }
    /**
     * @deprecated The torch button has been moved to the mini preview. Use property `torchControlVisible` instead.
     */
    set torchButtonVisible(newValue) {
        console.warn('The torch button has been moved to the mini preview. Use property `torchControlVisible` instead.');
    }
    get torchControlVisible() {
        return this._torchControlVisible;
    }
    set torchControlVisible(newValue) {
        this._torchControlVisible = newValue;
        this.update();
    }
    get previewCloseControlVisible() {
        return this._previewCloseControlVisible;
    }
    set previewCloseControlVisible(newValue) {
        this._previewCloseControlVisible = newValue;
        this.update();
    }
    get scanningBehaviorButtonVisible() {
        return this._scanningBehaviorButtonVisible;
    }
    set scanningBehaviorButtonVisible(newValue) {
        this._scanningBehaviorButtonVisible = newValue;
        this.update();
    }
    get barcodeCountButtonVisible() {
        return this._barcodeCountButtonVisible;
    }
    set barcodeCountButtonVisible(newValue) {
        this._barcodeCountButtonVisible = newValue;
        this.update();
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
     * @deprecated The trigger button no longer displays text.
     */
    get stopCapturingText() {
        return null;
    }
    /**
     * @deprecated The trigger button no longer displays text.
     */
    set stopCapturingText(newValue) {
        console.warn('The trigger button no longer displays text.');
    }
    /**
     * @deprecated The trigger button no longer displays text.
     */
    get startCapturingText() {
        return null;
    }
    /**
     * @deprecated The trigger button no longer displays text.
     */
    set startCapturingText(newValue) {
        console.warn('The trigger button no longer displays text.');
    }
    /**
     * @deprecated The trigger button no longer displays text.
     */
    get resumeCapturingText() {
        return null;
    }
    /**
     * @deprecated The trigger button no longer displays text.
     */
    set resumeCapturingText(newValue) {
        console.warn('The trigger button no longer displays text.');
    }
    /**
     * @deprecated The trigger button no longer displays text.
     */
    get scanningCapturingText() {
        return null;
    }
    /**
     * @deprecated The trigger button no longer displays text.
     */
    set scanningCapturingText(newValue) {
        console.warn('The trigger button no longer displays text.');
    }
    /**
     * @deprecated This property is not relevant anymore.
     */
    get captureButtonActiveBackgroundColor() {
        return null;
    }
    /**
     * @deprecated This property is not relevant anymore.
     */
    set captureButtonActiveBackgroundColor(newValue) {
        console.warn('captureButtonActiveBackgroundColor is deprecated.');
    }
    /**
     * @deprecated Use triggerButtonCollapsedColor and triggerButtonExpandedColor instead.
     */
    get captureButtonBackgroundColor() {
        return null;
    }
    /**
     * @deprecated Use triggerButtonCollapsedColor and triggerButtonExpandedColor instead.
     */
    set captureButtonBackgroundColor(newValue) {
        console.warn('captureButtonBackgroundColor is deprecated. ' +
            'Use triggerButtonCollapsedColor and triggerButtonExpandedColor instead.');
    }
    /**
     * @deprecated use triggerButtonTintColor instead.
     */
    get captureButtonTintColor() {
        return null;
    }
    /**
     * @deprecated use triggerButtonTintColor instead.
     */
    set captureButtonTintColor(newValue) {
        console.warn('triggerButtonTintColor is deprecated. Use triggerButtonTintColor instead.');
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
    get cameraSwitchButtonVisible() {
        return this._cameraSwitchButtonVisible;
    }
    set cameraSwitchButtonVisible(newValue) {
        this._cameraSwitchButtonVisible = newValue;
        this.update();
    }
    get triggerButtonAnimationColor() {
        return this._triggerButtonAnimationColor;
    }
    set triggerButtonAnimationColor(newValue) {
        this._triggerButtonAnimationColor = newValue;
        this.update();
    }
    get triggerButtonExpandedColor() {
        return this._triggerButtonExpandedColor;
    }
    set triggerButtonExpandedColor(newValue) {
        this._triggerButtonExpandedColor = newValue;
        this.update();
    }
    get triggerButtonCollapsedColor() {
        return this._triggerButtonCollapsedColor;
    }
    set triggerButtonCollapsedColor(newValue) {
        this._triggerButtonCollapsedColor = newValue;
        this.update();
    }
    get triggerButtonTintColor() {
        return this._triggerButtonTintColor;
    }
    set triggerButtonTintColor(newValue) {
        this._triggerButtonTintColor = newValue;
        this.update();
    }
    get triggerButtonImage() {
        return this._triggerButtonImage;
    }
    set triggerButtonImage(newValue) {
        this._triggerButtonImage = newValue;
        this.update();
    }
    get triggerButtonVisible() {
        return this._triggerButtonVisible;
    }
    set triggerButtonVisible(newValue) {
        this._triggerButtonVisible = newValue;
        this.update();
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
        return this._controller.updateView();
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
    createNativeView(viewId) {
        this._viewId = viewId;
        return this._controller.createView();
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
    updateWithProps(prevProps, props) {
        // Update UI Listener
        if (props.uiListener !== prevProps.uiListener) {
            this.uiListener = props.uiListener || null;
        }
        // Update visibility controls
        if (props.previewSizeControlVisible !== prevProps.previewSizeControlVisible &&
            props.previewSizeControlVisible !== undefined) {
            this.previewSizeControlVisible = props.previewSizeControlVisible;
        }
        if (props.scanningBehaviorButtonVisible !== prevProps.scanningBehaviorButtonVisible &&
            props.scanningBehaviorButtonVisible !== undefined) {
            this.scanningBehaviorButtonVisible = props.scanningBehaviorButtonVisible;
        }
        if (props.barcodeCountButtonVisible !== prevProps.barcodeCountButtonVisible &&
            props.barcodeCountButtonVisible !== undefined) {
            this.barcodeCountButtonVisible = props.barcodeCountButtonVisible;
        }
        if (props.barcodeFindButtonVisible !== prevProps.barcodeFindButtonVisible &&
            props.barcodeFindButtonVisible !== undefined) {
            this.barcodeFindButtonVisible = props.barcodeFindButtonVisible;
        }
        if (props.targetModeButtonVisible !== prevProps.targetModeButtonVisible &&
            props.targetModeButtonVisible !== undefined) {
            this.targetModeButtonVisible = props.targetModeButtonVisible;
        }
        if (props.cameraSwitchButtonVisible !== prevProps.cameraSwitchButtonVisible &&
            props.cameraSwitchButtonVisible !== undefined) {
            this.cameraSwitchButtonVisible = props.cameraSwitchButtonVisible;
        }
        if (props.torchControlVisible !== prevProps.torchControlVisible &&
            props.torchControlVisible !== undefined) {
            this.torchControlVisible = props.torchControlVisible;
        }
        if (props.previewCloseControlVisible !== prevProps.previewCloseControlVisible &&
            props.previewCloseControlVisible !== undefined) {
            this.previewCloseControlVisible = props.previewCloseControlVisible;
        }
        if (props.triggerButtonVisible !== prevProps.triggerButtonVisible &&
            props.triggerButtonVisible !== undefined) {
            this.triggerButtonVisible = props.triggerButtonVisible;
        }
        // Update color customizations
        if (props.toolbarBackgroundColor !== prevProps.toolbarBackgroundColor &&
            props.toolbarBackgroundColor !== undefined) {
            this.toolbarBackgroundColor = props.toolbarBackgroundColor;
        }
        if (props.toolbarIconActiveTintColor !== prevProps.toolbarIconActiveTintColor &&
            props.toolbarIconActiveTintColor !== undefined) {
            this.toolbarIconActiveTintColor = props.toolbarIconActiveTintColor;
        }
        if (props.toolbarIconInactiveTintColor !== prevProps.toolbarIconInactiveTintColor &&
            props.toolbarIconInactiveTintColor !== undefined) {
            this.toolbarIconInactiveTintColor = props.toolbarIconInactiveTintColor;
        }
        if (props.triggerButtonAnimationColor !== prevProps.triggerButtonAnimationColor &&
            props.triggerButtonAnimationColor !== undefined) {
            this.triggerButtonAnimationColor = props.triggerButtonAnimationColor;
        }
        if (props.triggerButtonExpandedColor !== prevProps.triggerButtonExpandedColor &&
            props.triggerButtonExpandedColor !== undefined) {
            this.triggerButtonExpandedColor = props.triggerButtonExpandedColor;
        }
        if (props.triggerButtonCollapsedColor !== prevProps.triggerButtonCollapsedColor &&
            props.triggerButtonCollapsedColor !== undefined) {
            this.triggerButtonCollapsedColor = props.triggerButtonCollapsedColor;
        }
        if (props.triggerButtonTintColor !== prevProps.triggerButtonTintColor &&
            props.triggerButtonTintColor !== undefined) {
            this.triggerButtonTintColor = props.triggerButtonTintColor;
        }
        // Update image customizations
        if (props.triggerButtonImage !== prevProps.triggerButtonImage &&
            props.triggerButtonImage !== undefined) {
            this.triggerButtonImage = props.triggerButtonImage;
        }
        // Update feedback delegate
        if (props.feedbackDelegate !== prevProps.feedbackDelegate &&
            props.feedbackDelegate !== undefined) {
            this.feedbackDelegate = props.feedbackDelegate;
        }
    }
    _show() {
        if (!this.context) {
            throw new Error('There should be a context attached to a view that should be shown');
        }
        return this._controller.showView();
    }
    _hide() {
        if (!this.context) {
            throw new Error('There should be a context attached to a view that should be shown');
        }
        return this._controller.hideView();
    }
    static get sparkScanDefaults() {
        return getSparkScanDefaults();
    }
    toJSON() {
        var _a;
        const json = {
            brush: this._brush.toJSON(),
            scanningBehaviorButtonVisible: this.scanningBehaviorButtonVisible,
            barcodeCountButtonVisible: this.barcodeCountButtonVisible,
            barcodeFindButtonVisible: this.barcodeFindButtonVisible,
            targetModeButtonVisible: this.targetModeButtonVisible,
            stopCapturingText: this.stopCapturingText,
            startCapturingText: this.startCapturingText,
            resumeCapturingText: this.resumeCapturingText,
            scanningCapturingText: this.scanningCapturingText,
            toolbarBackgroundColor: this.toolbarBackgroundColor,
            toolbarIconActiveTintColor: this.toolbarIconActiveTintColor,
            toolbarIconInactiveTintColor: this.toolbarIconInactiveTintColor,
            hasFeedbackDelegate: this._feedbackDelegate != null,
            cameraSwitchButtonVisible: this.cameraSwitchButtonVisible,
            triggerButtonAnimationColor: this.triggerButtonAnimationColor,
            triggerButtonExpandedColor: this.triggerButtonExpandedColor,
            triggerButtonCollapsedColor: this.triggerButtonCollapsedColor,
            triggerButtonTintColor: this.triggerButtonTintColor,
            triggerButtonVisible: this.triggerButtonVisible,
            triggerButtonImage: this.triggerButtonImage,
            torchControlVisible: this.torchControlVisible,
            previewCloseControlVisible: this.previewCloseControlVisible,
            hasUiListener: this.uiListener !== null,
            viewId: this.viewId,
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
        this.eventEmitter.on(BarcodePickListenerEvents.DidCompleteScanningSession, (data) => {
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodePickListenerController DidCompleteScanningSession payload is null');
                return;
            }
            const session = BarcodePickScanningSession
                .fromJSON(JSON.parse(payload.session));
            this.notifyListenersOfDidCompleteScanningSession(session);
        });
        this.eventEmitter.on(BarcodePickListenerEvents.DidUpdateScanningSession, (data) => {
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodePickListenerController DidUpdateScanningSession payload is null');
                return;
            }
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
    static forBarcodePick(view, nativeView, autoCreateNativeView = true) {
        const viewController = new BarcodePickViewController();
        viewController.view = view;
        viewController.nativeView = nativeView;
        viewController.initialize(autoCreateNativeView);
        return viewController;
    }
    constructor() {
        super('BarcodePickViewProxy');
    }
    initialize(autoCreateNativeView) {
        return __awaiter(this, void 0, void 0, function* () {
            // We call update because it returns a promise, this guarantees, that by the time
            // we need the deserialized context, it will be set in the native layer.
            yield this.view.context.update();
            if (autoCreateNativeView) {
                yield this.create();
            }
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
    createNativeView() {
        return this.create();
    }
    removeNativeView() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this._proxy).removeView) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : Promise.resolve();
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
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodePickViewController DidPick payload is null');
                return;
            }
            const barcodePickActionCallback = new BarcodePickActionCallback();
            barcodePickActionCallback._viewController = this;
            barcodePickActionCallback._itemData = payload.itemData;
            this.view.actionListeners
                .forEach(listener => listener.didPickItem(payload.itemData, barcodePickActionCallback));
        });
        this.eventEmitter.on(BarcodePickEvents.DidUnpick, (data) => {
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodePickViewController DidUnpick payload is null');
                return;
            }
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
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodePickProductController OnProductIdentifierForItems payload is null');
                return;
            }
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
    constructor({ context, barcodePick, settings, cameraSettings, autoCreateNativeView = true }) {
        super();
        this.actionListeners = [];
        this.listeners = [];
        this.isStarted = false;
        this._context = null;
        this.isViewCreated = false;
        this.autoCreateNativeView = true;
        this._barcodePickViewUiListener = null;
        this.context = context;
        this.barcodePick = barcodePick;
        this.settings = settings;
        this.cameraSettings = cameraSettings;
        this.autoCreateNativeView = autoCreateNativeView;
        this.isViewCreated = autoCreateNativeView;
        this.barcodePick.privateContext = context;
    }
    initialize(nativeView) {
        this.viewController = BarcodePickViewController.forBarcodePick(this, nativeView, this.autoCreateNativeView);
    }
    createNativeView() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isViewCreated) {
                return Promise.resolve();
            }
            yield this.viewController.createNativeView();
            this.isViewCreated = true;
        });
    }
    removeNativeView() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.viewController.removeNativeView();
            this.isViewCreated = false;
        });
    }
    dispose() {
        this.viewController.dispose();
        this.barcodePick.unsubscribeNativeListeners();
        this.isViewCreated = false;
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
], BaseBarcodePickView.prototype, "isViewCreated", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodePickView.prototype, "autoCreateNativeView", void 0);
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
        this._loadingDialogTextForPicking = BarcodePickViewSettings.barcodePickDefaults.ViewSettings.loadingDialogTextForPicking;
        this._loadingDialogTextForUnpicking = BarcodePickViewSettings.barcodePickDefaults.ViewSettings.loadingDialogTextForUnpicking;
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
    get loadingDialogTextForPicking() {
        return this._loadingDialogTextForPicking;
    }
    set loadingDialogTextForPicking(text) {
        this._loadingDialogTextForPicking = text;
    }
    get loadingDialogTextForUnpicking() {
        return this._loadingDialogTextForUnpicking;
    }
    set loadingDialogTextForUnpicking(text) {
        this._loadingDialogTextForUnpicking = text;
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
    nameForSerialization('showLoadingDialogTextForPicking')
], BarcodePickViewSettings.prototype, "_loadingDialogTextForPicking", void 0);
__decorate([
    nameForSerialization('showLoadingDialogTextForUnpicking')
], BarcodePickViewSettings.prototype, "_loadingDialogTextForUnpicking", void 0);
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
        this.eventEmitter.on(BarcodeFindListenerEvents.onTransformBarcodeData, (data) => {
            var _a;
            const payload = EventDataParser.parse(data);
            if (payload === null) {
                console.error('BarcodeFindController onTransformBarcodeData payload is null');
                return;
            }
            const transformed = (_a = this._barcodeFind.barcodeTransformer) === null || _a === void 0 ? void 0 : _a.transformBarcodeData(payload.data);
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
        this.eventEmitter.on(BarcodeFindListenerEvents.onSearchPausedEvent, (data) => {
            var _a;
            const foundItems = this.filterFoundItemsFromEvent(data);
            for (const listener of this._barcodeFind.listeners) {
                (_a = listener === null || listener === void 0 ? void 0 : listener.didPauseSearch) === null || _a === void 0 ? void 0 : _a.call(listener, foundItems);
            }
        });
        this.eventEmitter.on(BarcodeFindListenerEvents.onSearchStoppedEvent, (data) => {
            var _a;
            const foundItems = this.filterFoundItemsFromEvent(data);
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
        this._brush = null;
        this._barcodeData = barcodeData;
    }
    static withBrush(barcodeData, brush) {
        const options = new BarcodeFindItemSearchOptions(barcodeData);
        options._brush = brush;
        return options;
    }
    get barcodeData() {
        return this._barcodeData;
    }
    get brush() {
        return this._brush;
    }
}
__decorate([
    nameForSerialization("barcodeData")
], BarcodeFindItemSearchOptions.prototype, "_barcodeData", void 0);
__decorate([
    nameForSerialization("brush")
], BarcodeFindItemSearchOptions.prototype, "_brush", void 0);

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
    constructor(inListItemColor, notInListItemColor, soundEnabled, hapticEnabled, hardwareTriggerEnabled, hardwareTriggerKeyCode) {
        super();
        this._inListItemColor = inListItemColor;
        this._notInListItemColor = notInListItemColor;
        this._soundEnabled = soundEnabled;
        this._hapticEnabled = hapticEnabled;
        this._hardwareTriggerEnabled = hardwareTriggerEnabled || false;
        this._hardwareTriggerKeyCode = hardwareTriggerKeyCode || null;
    }
    withHardwareTriggers(inListItemColor, notInListItemColor, soundEnabled, hapticEnabled, hardwareTriggerEnabled, hardwareTriggerKeyCode) {
        return new BarcodeFindViewSettings(inListItemColor, notInListItemColor, soundEnabled, hapticEnabled, hardwareTriggerEnabled, hardwareTriggerKeyCode);
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
    get hardwareTriggerEnabled() {
        return this._hardwareTriggerEnabled;
    }
    get hardwareTriggerKeyCode() {
        return this._hardwareTriggerKeyCode;
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
__decorate([
    nameForSerialization('hardwareTriggerEnabled')
], BarcodeFindViewSettings.prototype, "_hardwareTriggerEnabled", void 0);
__decorate([
    nameForSerialization('hardwareTriggerKeyCode')
], BarcodeFindViewSettings.prototype, "_hardwareTriggerKeyCode", void 0);

var BarcodeFindViewEvents;
(function (BarcodeFindViewEvents) {
    BarcodeFindViewEvents["onFinishButtonTappedEventName"] = "BarcodeFindViewUiListener.onFinishButtonTapped";
})(BarcodeFindViewEvents || (BarcodeFindViewEvents = {}));
class BarcodeFindViewController extends BaseController {
    constructor() {
        super('BarcodeFindViewProxy');
        this.autoCreateNativeView = true;
        this.isListenerEnabled = false;
    }
    static forBarcodeFindView(baseView, nativeView, autoCreateNativeView = true) {
        const viewController = new BarcodeFindViewController();
        viewController.baseView = baseView;
        viewController.nativeView = nativeView;
        viewController.autoCreateNativeView = autoCreateNativeView;
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
    createNativeView() {
        return this.create();
    }
    removeNativeView() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this._proxy).removeView) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : Promise.resolve();
    }
    create() {
        const barcodeFindView = this.baseView.toJSON();
        const json = JSON.stringify(barcodeFindView);
        const id = this._proxy.findNodeHandle(this.nativeView);
        return this._proxy.createView(id, json);
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.baseView.context.update();
            if (this.autoCreateNativeView) {
                yield this.create();
            }
        });
    }
    subscribeToEvents() {
        this._proxy.subscribeBarcodeFindViewListener();
        this.eventEmitter.on(BarcodeFindViewEvents.onFinishButtonTappedEventName, (data) => {
            var _a, _b;
            if (!this.baseView.barcodeFindViewUiListener) {
                return;
            }
            const { foundItems: barcodeFindItems = [] } = JSON.parse(data);
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
__decorate([
    ignoreFromSerialization
], BarcodeFindViewController.prototype, "autoCreateNativeView", void 0);

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
    constructor(context, barcodeFind, barcodeFindViewSettings, cameraSettings, autoCreateNativeView = true) {
        this.isViewCreated = false;
        this.autoCreateNativeView = true;
        this._startSearching = false;
        this._isInitialized = false;
        this._barcodeFindViewUiListener = null;
        this._dataCaptureContext = context;
        this._barcodeFind = barcodeFind;
        this._barcodeFindViewSettings = barcodeFindViewSettings;
        this._cameraSettings = cameraSettings;
        this.isViewCreated = autoCreateNativeView;
        this.autoCreateNativeView = autoCreateNativeView;
    }
    initialize(nativeView) {
        this.controller = BarcodeFindViewController.forBarcodeFindView(this, nativeView, this.autoCreateNativeView);
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
    static get hardwareTriggerSupported() {
        return BaseBarcodeFindView.barcodeFindViewDefaults.hardwareTriggerSupported;
    }
    createNativeView() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isViewCreated) {
                return Promise.resolve();
            }
            yield this.controller.createNativeView();
            this.isViewCreated = true;
        });
    }
    removeNativeView() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.controller.removeNativeView();
            this.isViewCreated = false;
        });
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
    get shouldShowZoomControl() {
        return BaseBarcodeFindView.barcodeFindViewDefaults.shouldShowZoomControl;
    }
    set shouldShowZoomControl(value) {
        BaseBarcodeFindView.barcodeFindViewDefaults.shouldShowZoomControl = value;
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
        this.isViewCreated = false;
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
__decorate([
    ignoreFromSerialization
], BaseBarcodeFindView.prototype, "isViewCreated", void 0);
__decorate([
    ignoreFromSerialization
], BaseBarcodeFindView.prototype, "autoCreateNativeView", void 0);

class BarcodeGeneratorCreationOptions {
    constructor(backgroundColor = null, foregroundColor = null, errorCorrectionLevel = null, versionNumber = null, minimumErrorCorrectionPercent = null, layers = null) {
        this.backgroundColor = backgroundColor;
        this.foregroundColor = foregroundColor;
        this.errorCorrectionLevel = errorCorrectionLevel;
        this.versionNumber = versionNumber;
        this.minimumErrorCorrectionPercent = minimumErrorCorrectionPercent;
        this.layers = layers;
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
        return controller;
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            // We call update because it returns a promise, this guarantees, that by the time
            // we need the deserialized context, it will be set in the native layer.
            yield this.generator.dataCaptureContext.update();
            yield this.create();
        });
    }
    create() {
        return this._proxy.create(JSON.stringify(this.generator.toJSON()));
    }
    generateFromBase64EncodedData(data, imageWidth) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._proxy.generateFromBase64EncodedData(this.generator.id, data, imageWidth);
            if (result == null) {
                return '';
            }
            return result.data;
        });
    }
    generate(text, imageWidth) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._proxy.generate(this.generator.id, text, imageWidth);
            if (result == null) {
                return '';
            }
            return result.data;
        });
    }
    dispose() {
        return this._proxy.dispose(this.generator.id);
    }
}

class AztecBarcodeGeneratorBuilder extends BarcodeGeneratorBuilder {
    constructor(dataCaptureContext) {
        super('aztecGenerator', dataCaptureContext);
    }
    withMinimumErrorCorrectionPercent(minimumErrorCorrectionPercent) {
        this.options.minimumErrorCorrectionPercent = minimumErrorCorrectionPercent;
        return this;
    }
    withLayers(layers) {
        this.options.layers = layers;
        return this;
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
        this.initializationPromise = undefined;
        this.dataCaptureContext = dataCaptureContext;
        this.type = type;
        this.backgroundColor = backgroundColor;
        this.foregroundColor = foregroundColor;
        this.errorCorrectionLevel = errorCorrectionLevel;
        this.versionNumber = versionNumber;
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            this.controller = BarcodeGeneratorController.forBarcodeGenerator(this);
            this.initializationPromise = this.controller.initialize();
            return this.initializationPromise;
        });
    }
    static create(type, options, dataCaptureContext) {
        const generator = new BarcodeGenerator(dataCaptureContext, type, options.backgroundColor, options.backgroundColor, options.errorCorrectionLevel, options.versionNumber);
        generator.initialize();
        return generator;
    }
    generate(text, imageWidth) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initializationPromise;
            return this.controller.generate(text, imageWidth);
        });
    }
    generateFromBase64EncodedData(data, imageWidth) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initializationPromise;
            return this.controller.generateFromBase64EncodedData(data, imageWidth);
        });
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
    static aztecBarcodeGeneratorBuilder(dataCaptureContext) {
        return new AztecBarcodeGeneratorBuilder(dataCaptureContext);
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

export { ArucoDictionary, ArucoDictionaryPreset, ArucoMarker, AztecBarcodeGeneratorBuilder, Barcode, BarcodeAr, BarcodeArAnnotationTrigger, BarcodeArCircleHighlight, BarcodeArCircleHighlightPreset, BarcodeArFeedback, BarcodeArInfoAnnotation, BarcodeArInfoAnnotationAnchor, BarcodeArInfoAnnotationBodyComponent, BarcodeArInfoAnnotationFooter, BarcodeArInfoAnnotationHeader, BarcodeArInfoAnnotationWidthPreset, BarcodeArListenerController, BarcodeArListenerEvents, BarcodeArPopoverAnnotation, BarcodeArPopoverAnnotationButton, BarcodeArRectangleHighlight, BarcodeArSession, BarcodeArSessionController, BarcodeArSettings, BarcodeArStatusIconAnnotation, BarcodeArViewController, BarcodeArViewEvents, BarcodeArViewSettings, BarcodeBatch, BarcodeBatchAdvancedOverlayController, BarcodeBatchAdvancedOverlayListenerEvents, BarcodeBatchBasicOverlay, BarcodeBatchBasicOverlayController, BarcodeBatchBasicOverlayListenerEvents, BarcodeBatchBasicOverlayStyle, BarcodeBatchListenerController, BarcodeBatchListenerEvents, BarcodeBatchScenario, BarcodeBatchSession, BarcodeBatchSettings, BarcodeCapture, BarcodeCaptureFeedback, BarcodeCaptureListenerController, BarcodeCaptureListenerEvents, BarcodeCaptureOverlay, BarcodeCaptureOverlayStyle, BarcodeCaptureSession, BarcodeCaptureSettings, BarcodeCount, BarcodeCountCaptureList, BarcodeCountCaptureListSession, BarcodeCountFeedback, BarcodeCountListenerController, BarcodeCountListenerEvents, BarcodeCountNotInListActionSettings, BarcodeCountSession, BarcodeCountSessionController, BarcodeCountSettings, BarcodeCountToolbarSettings, BarcodeCountViewController, BarcodeCountViewEvents, BarcodeCountViewStyle, BarcodeFilterHighlightSettingsBrush, BarcodeFilterHighlightType, BarcodeFilterSettings, BarcodeFind, BarcodeFindController, BarcodeFindFeedback, BarcodeFindItem, BarcodeFindItemContent, BarcodeFindItemSearchOptions, BarcodeFindListenerEvents, BarcodeFindSettings, BarcodeFindViewEvents, BarcodeFindViewSettings, BarcodeGenerator, BarcodeGeneratorBuilder, BarcodeGeneratorController, BarcodePick, BarcodePickActionCallback, BarcodePickAsyncMapperProductProvider, BarcodePickEvents, BarcodePickListenerController, BarcodePickListenerEvents, BarcodePickProduct, BarcodePickProductController, BarcodePickProductProviderCallback, BarcodePickProductProviderCallbackItem, BarcodePickScanningSession, BarcodePickSettings, BarcodePickState, BarcodePickStatusIconSettings, BarcodePickViewController, BarcodePickViewListenerEvents, BarcodePickViewSettings, BarcodePickViewUiListenerEvents, BarcodeSelection, BarcodeSelectionAimerSelection, BarcodeSelectionAutoSelectionStrategy, BarcodeSelectionBasicOverlay, BarcodeSelectionBasicOverlayStyle, BarcodeSelectionBrushProviderEvents, BarcodeSelectionController, BarcodeSelectionFeedback, BarcodeSelectionFreezeBehavior, BarcodeSelectionListenerController, BarcodeSelectionListenerEvents, BarcodeSelectionManualSelectionStrategy, BarcodeSelectionOverlayController, BarcodeSelectionSession, BarcodeSelectionSettings, BarcodeSelectionStrategyType, BarcodeSelectionTapBehavior, BarcodeSelectionTapSelection, BarcodeSelectionTypeName, BarcodeSpatialGrid, BaseBarcodeArView, BaseBarcodeBatchAdvancedOverlay, BaseBarcodeCountView, BaseBarcodeFindView, BaseBarcodePickView, BaseSparkScanView, BatterySavingMode, BrushForStateObject, Checksum, Code128BarcodeGeneratorBuilder, Code39BarcodeGeneratorBuilder, CompositeFlag, CompositeType, DataMatrixBarcodeGeneratorBuilder, Dot, DotWithIcons, Ean13BarcodeGeneratorBuilder, Ean13UpcaClassification, EncodingRange, InterleavedTwoOfFiveBarcodeGeneratorBuilder, LocalizedOnlyBarcode, PrivateBarcodeSelectionStrategy, PrivateBarcodeSelectionType, QrCodeBarcodeGeneratorBuilder, QrCodeErrorCorrectionLevel, Range, Rectangular, RectangularWithIcons, SparkScan, SparkScanBarcodeErrorFeedback, SparkScanBarcodeFeedback, SparkScanBarcodeSuccessFeedback, SparkScanMiniPreviewSize, SparkScanPreviewBehavior, SparkScanScanningBehavior, SparkScanScanningModeDefault, SparkScanScanningModeTarget, SparkScanSession, SparkScanSettings, SparkScanToastSettings, SparkScanViewController, SparkScanViewEvents, SparkScanViewSettings, SparkScanViewState, StructuredAppendData, Symbology, SymbologyDescription, SymbologySettings, TargetBarcode, TrackedBarcode, UpcaBarcodeGeneratorBuilder, getBarcodeArDefaults, getBarcodeBatchDefaults, getBarcodeCaptureDefaults, getBarcodeCountDefaults, getBarcodeDefaults, getBarcodeFindDefaults, getBarcodePickDefaults, getBarcodeSelectionDefaults, getSparkScanDefaults, loadBarcodeArDefaults, loadBarcodeBatchDefaults, loadBarcodeCaptureDefaults, loadBarcodeCountDefaults, loadBarcodeDefaults, loadBarcodeFindDefaults, loadBarcodePickDefaults, loadBarcodeSelectionDefaults, loadSparkScanDefaults };
