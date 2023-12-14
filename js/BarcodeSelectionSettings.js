"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeSelectionTapSelection = exports.BarcodeSelectionAimerSelection = exports.BarcodeSelectionTapBehavior = exports.BarcodeSelectionFreezeBehavior = exports.BarcodeSelectionManualSelectionStrategy = exports.BarcodeSelectionAutoSelectionStrategy = exports.BarcodeSelectionSettings = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeDefaults_1 = require("./private/BarcodeDefaults");
var BarcodeSelectionDefaults_1 = require("./private/BarcodeSelectionDefaults");
var BarcodeSelectionSettings = /** @class */ (function (_super) {
    __extends(BarcodeSelectionSettings, _super);
    function BarcodeSelectionSettings() {
        var _this = _super.call(this) || this;
        _this.codeDuplicateFilter = BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionSettings.codeDuplicateFilter;
        _this.singleBarcodeAutoDetection = BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionSettings.singleBarcodeAutoDetection;
        _this.selectionType = BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionSettings.selectionType(PrivateBarcodeSelectionType.fromJSON);
        _this.properties = {};
        _this.symbologies = {};
        return _this;
    }
    Object.defineProperty(BarcodeSelectionSettings.prototype, "enabledSymbologies", {
        get: function () {
            var _this = this;
            return Object.keys(this.symbologies)
                .filter(function (symbology) { return _this.symbologies[symbology].isEnabled; });
        },
        enumerable: false,
        configurable: true
    });
    BarcodeSelectionSettings.prototype.settingsForSymbology = function (symbology) {
        if (!this.symbologies[symbology]) {
            var symbologySettings = BarcodeDefaults_1.BarcodeDefaults.SymbologySettings[symbology];
            symbologySettings._symbology = symbology;
            this.symbologies[symbology] = symbologySettings;
        }
        return this.symbologies[symbology];
    };
    BarcodeSelectionSettings.prototype.setProperty = function (name, value) {
        this.properties[name] = value;
    };
    BarcodeSelectionSettings.prototype.getProperty = function (name) {
        return this.properties[name];
    };
    BarcodeSelectionSettings.prototype.enableSymbologies = function (symbologies) {
        var _this = this;
        symbologies.forEach(function (symbology) { return _this.enableSymbology(symbology, true); });
    };
    BarcodeSelectionSettings.prototype.enableSymbology = function (symbology, enabled) {
        this.settingsForSymbology(symbology).isEnabled = enabled;
    };
    return BarcodeSelectionSettings;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeSelectionSettings = BarcodeSelectionSettings;
var BarcodeSelectionAutoSelectionStrategy = /** @class */ (function (_super) {
    __extends(BarcodeSelectionAutoSelectionStrategy, _super);
    function BarcodeSelectionAutoSelectionStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = BarcodeSelectionStrategyType.Auto;
        return _this;
    }
    Object.defineProperty(BarcodeSelectionAutoSelectionStrategy, "autoSelectionStrategy", {
        get: function () {
            return new BarcodeSelectionAutoSelectionStrategy();
        },
        enumerable: false,
        configurable: true
    });
    return BarcodeSelectionAutoSelectionStrategy;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeSelectionAutoSelectionStrategy = BarcodeSelectionAutoSelectionStrategy;
var BarcodeSelectionManualSelectionStrategy = /** @class */ (function (_super) {
    __extends(BarcodeSelectionManualSelectionStrategy, _super);
    function BarcodeSelectionManualSelectionStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = BarcodeSelectionStrategyType.Manual;
        return _this;
    }
    Object.defineProperty(BarcodeSelectionManualSelectionStrategy, "manualSelectionStrategy", {
        get: function () {
            return new BarcodeSelectionManualSelectionStrategy();
        },
        enumerable: false,
        configurable: true
    });
    return BarcodeSelectionManualSelectionStrategy;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeSelectionManualSelectionStrategy = BarcodeSelectionManualSelectionStrategy;
var BarcodeSelectionFreezeBehavior;
(function (BarcodeSelectionFreezeBehavior) {
    BarcodeSelectionFreezeBehavior["Manual"] = "manual";
    BarcodeSelectionFreezeBehavior["ManualAndAutomatic"] = "manualAndAutomatic";
})(BarcodeSelectionFreezeBehavior || (exports.BarcodeSelectionFreezeBehavior = BarcodeSelectionFreezeBehavior = {}));
var BarcodeSelectionTapBehavior;
(function (BarcodeSelectionTapBehavior) {
    BarcodeSelectionTapBehavior["ToggleSelection"] = "toggleSelection";
    BarcodeSelectionTapBehavior["RepeatSelection"] = "repeatSelection";
})(BarcodeSelectionTapBehavior || (exports.BarcodeSelectionTapBehavior = BarcodeSelectionTapBehavior = {}));
var BarcodeSelectionAimerSelection = /** @class */ (function (_super) {
    __extends(BarcodeSelectionAimerSelection, _super);
    function BarcodeSelectionAimerSelection() {
        var _this = _super.call(this) || this;
        _this.type = BarcodeSelectionTypeName.Aimer;
        _this.selectionStrategy = BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionAimerSelection
            .defaultSelectionStrategy(PrivateBarcodeSelectionStrategy.fromJSON);
        return _this;
    }
    Object.defineProperty(BarcodeSelectionAimerSelection, "aimerSelection", {
        get: function () {
            return new BarcodeSelectionAimerSelection();
        },
        enumerable: false,
        configurable: true
    });
    return BarcodeSelectionAimerSelection;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeSelectionAimerSelection = BarcodeSelectionAimerSelection;
var BarcodeSelectionTapSelection = /** @class */ (function (_super) {
    __extends(BarcodeSelectionTapSelection, _super);
    function BarcodeSelectionTapSelection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = BarcodeSelectionTypeName.Tap;
        _this.freezeBehavior = BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionTapSelection.defaultFreezeBehavior;
        _this.tapBehavior = BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.BarcodeSelectionTapSelection.defaultTapBehavior;
        return _this;
    }
    Object.defineProperty(BarcodeSelectionTapSelection, "tapSelection", {
        get: function () {
            return new BarcodeSelectionTapSelection();
        },
        enumerable: false,
        configurable: true
    });
    BarcodeSelectionTapSelection.withFreezeBehaviorAndTapBehavior = function (freezeBehavior, tapBehavior) {
        var selection = this.tapSelection;
        selection.freezeBehavior = freezeBehavior;
        selection.tapBehavior = tapBehavior;
        return selection;
    };
    return BarcodeSelectionTapSelection;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeSelectionTapSelection = BarcodeSelectionTapSelection;
var BarcodeSelectionStrategyType;
(function (BarcodeSelectionStrategyType) {
    BarcodeSelectionStrategyType["Auto"] = "autoSelectionStrategy";
    BarcodeSelectionStrategyType["Manual"] = "manualSelectionStrategy";
})(BarcodeSelectionStrategyType || (BarcodeSelectionStrategyType = {}));
var BarcodeSelectionTypeName;
(function (BarcodeSelectionTypeName) {
    BarcodeSelectionTypeName["Aimer"] = "aimerSelection";
    BarcodeSelectionTypeName["Tap"] = "tapSelection";
})(BarcodeSelectionTypeName || (BarcodeSelectionTypeName = {}));
var PrivateBarcodeSelectionStrategy = /** @class */ (function () {
    function PrivateBarcodeSelectionStrategy() {
    }
    PrivateBarcodeSelectionStrategy.fromJSON = function (json) {
        switch (json.type) {
            case BarcodeSelectionStrategyType.Auto:
                return BarcodeSelectionAutoSelectionStrategy.autoSelectionStrategy;
            case BarcodeSelectionStrategyType.Manual:
                return BarcodeSelectionManualSelectionStrategy.manualSelectionStrategy;
            default:
                throw new Error('Unknown selection strategy type: ' + json.type);
        }
    };
    return PrivateBarcodeSelectionStrategy;
}());
var PrivateBarcodeSelectionType = /** @class */ (function () {
    function PrivateBarcodeSelectionType() {
    }
    PrivateBarcodeSelectionType.fromJSON = function (json) {
        switch (json.type) {
            case BarcodeSelectionTypeName.Aimer:
                return PrivateBarcodeSelectionAimerSelection.fromJSON(json);
            case BarcodeSelectionTypeName.Tap:
                return PrivateBarcodeSelectionTapSelection.fromJSON(json);
            default:
                throw new Error('Unknown selection strategy type: ' + json.type);
        }
    };
    return PrivateBarcodeSelectionType;
}());
var PrivateBarcodeSelectionAimerSelection = /** @class */ (function () {
    function PrivateBarcodeSelectionAimerSelection() {
    }
    PrivateBarcodeSelectionAimerSelection.fromJSON = function (json) {
        var selection = BarcodeSelectionAimerSelection.aimerSelection;
        selection.selectionStrategy = PrivateBarcodeSelectionStrategy.fromJSON(json.selectionStrategy);
        return selection;
    };
    return PrivateBarcodeSelectionAimerSelection;
}());
var PrivateBarcodeSelectionTapSelection = /** @class */ (function () {
    function PrivateBarcodeSelectionTapSelection() {
    }
    PrivateBarcodeSelectionTapSelection.fromJSON = function (json) {
        var selection = BarcodeSelectionTapSelection.tapSelection;
        selection.freezeBehavior = json.freezeBehavior;
        selection.tapBehavior = json.tapBehavior;
        return selection;
    };
    return PrivateBarcodeSelectionTapSelection;
}());
//# sourceMappingURL=BarcodeSelectionSettings.js.map