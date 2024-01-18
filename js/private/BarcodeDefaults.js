"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeDefaults = void 0;
var react_native_1 = require("react-native");
var Symbology_Related_1 = require("../Symbology+Related");
// tslint:disable-next-line:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureBarcode;
// tslint:disable-next-line:variable-name
exports.BarcodeDefaults = {
    SymbologySettings: Object.keys(NativeModule.Defaults.SymbologySettings)
        .reduce(function (settings, identifier) {
        settings[identifier] = Symbology_Related_1.SymbologySettings
            .fromJSON(JSON.parse(NativeModule.Defaults.SymbologySettings[identifier]));
        return settings;
    }, {}),
    SymbologyDescriptions: NativeModule.Defaults.SymbologyDescriptions.map(function (description) {
        return Symbology_Related_1.SymbologyDescription.fromJSON(JSON.parse(description));
    }),
    CompositeTypeDescriptions: NativeModule.Defaults.CompositeTypeDescriptions.map(JSON.parse),
};
Symbology_Related_1.SymbologyDescription.defaults = function () { return exports.BarcodeDefaults; };
//# sourceMappingURL=BarcodeDefaults.js.map