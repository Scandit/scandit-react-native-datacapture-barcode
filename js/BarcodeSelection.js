"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeSelection = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeSelectionListenerProxy_1 = require("./native/BarcodeSelectionListenerProxy");
var BarcodeSelectionProxy_1 = require("./native/BarcodeSelectionProxy");
var BarcodeSelectionDefaults_1 = require("./private/BarcodeSelectionDefaults");
var BarcodeSelection = /** @class */ (function (_super) {
    __extends(BarcodeSelection, _super);
    function BarcodeSelection() {
        var _this = _super.call(this) || this;
        _this.type = 'barcodeSelection';
        _this._isEnabled = true;
        _this._pointOfInterest = null;
        _this.privateContext = null;
        _this.listeners = [];
        _this.modeProxy = new BarcodeSelectionProxy_1.BarcodeSelectionProxy();
        _this.isInListenerCallback = false;
        _this.listenerProxy = BarcodeSelectionListenerProxy_1.BarcodeSelectionListenerProxy.forBarcodeSelection(_this);
        return _this;
    }
    Object.defineProperty(BarcodeSelection.prototype, "isEnabled", {
        get: function () {
            return this._isEnabled;
        },
        set: function (isEnabled) {
            this._isEnabled = isEnabled;
            if (!this.isInListenerCallback) {
                // If we're "in" a listener callback, we don't want to deserialize the context to update the enabled state,
                // but rather pass that back to be applied in the native callback.
                this.didChange();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeSelection.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeSelection.prototype, "feedback", {
        get: function () {
            return this._feedback;
        },
        set: function (feedback) {
            this._feedback = feedback;
            this.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeSelection.prototype, "pointOfInterest", {
        get: function () {
            return this._pointOfInterest;
        },
        set: function (pointOfInterest) {
            this._pointOfInterest = pointOfInterest;
            this.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeSelection, "recommendedCameraSettings", {
        get: function () {
            return BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.RecommendedCameraSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeSelection.prototype, "_context", {
        get: function () {
            return this.privateContext;
        },
        set: function (newContext) {
            if (newContext == null) {
                this.listenerProxy.unsubscribeListener();
            }
            else if (this.privateContext == null) {
                this.listenerProxy.subscribeListener();
            }
            this.privateContext = newContext;
        },
        enumerable: false,
        configurable: true
    });
    BarcodeSelection.forContext = function (context, settings) {
        var barcodeSelection = new BarcodeSelection();
        barcodeSelection.settings = settings;
        if (context) {
            context.addMode(barcodeSelection);
        }
        return barcodeSelection;
    };
    BarcodeSelection.prototype.applySettings = function (settings) {
        this.settings = settings;
        return this.didChange();
    };
    BarcodeSelection.prototype.addListener = function (listener) {
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    };
    BarcodeSelection.prototype.removeListener = function (listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    };
    BarcodeSelection.prototype.reset = function () {
        return this.modeProxy.reset();
    };
    BarcodeSelection.prototype.unfreezeCamera = function () {
        return this.modeProxy.unfreezeCamera();
    };
    BarcodeSelection.prototype.selectAimedBarcode = function () {
        return this.modeProxy.selectAimedBarcode();
    };
    BarcodeSelection.prototype.unselectBarcodes = function (barcodes) {
        return this.modeProxy.unselectBarcodes(barcodes);
    };
    BarcodeSelection.prototype.setSelectBarcodeEnabled = function (barcode, enabled) {
        return this.modeProxy.setSelectBarcodeEnabled(barcode, enabled);
    };
    BarcodeSelection.prototype.increaseCountForBarcodes = function (barcodes) {
        return this.modeProxy.increaseCountForBarcodes(barcodes);
    };
    BarcodeSelection.prototype.didChange = function () {
        if (this.context) {
            return this.context.update();
        }
        else {
            return Promise.resolve();
        }
    };
    __decorate([
        Serializeable_1.nameForSerialization('enabled')
    ], BarcodeSelection.prototype, "_isEnabled", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('feedback')
    ], BarcodeSelection.prototype, "_feedback", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('pointOfInterest')
    ], BarcodeSelection.prototype, "_pointOfInterest", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeSelection.prototype, "privateContext", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeSelection.prototype, "listeners", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeSelection.prototype, "listenerProxy", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeSelection.prototype, "modeProxy", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeSelection.prototype, "isInListenerCallback", void 0);
    return BarcodeSelection;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeSelection = BarcodeSelection;
//# sourceMappingURL=BarcodeSelection.js.map