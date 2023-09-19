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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeCount = void 0;
var BarcodeCountFeedback_1 = require("./BarcodeCountFeedback");
var BarcodeCaptureDefaults_1 = require("./private/BarcodeCaptureDefaults");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeCountListenerProxy_1 = require("./native/BarcodeCountListenerProxy");
var BarcodeCount = /** @class */ (function (_super) {
    __extends(BarcodeCount, _super);
    function BarcodeCount() {
        var _this = _super.call(this) || this;
        _this.type = 'barcodeCount';
        _this._feedback = BarcodeCountFeedback_1.BarcodeCountFeedback.default;
        _this._isEnabled = true;
        _this.listeners = [];
        _this._additionalBarcodes = [];
        _this.isInListenerCallback = false;
        _this.privateContext = null;
        _this.listenerProxy = BarcodeCountListenerProxy_1.BarcodeCountListenerProxy.forBarcodeCount(_this);
        return _this;
    }
    Object.defineProperty(BarcodeCount.prototype, "isEnabled", {
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
    Object.defineProperty(BarcodeCount.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCount.prototype, "feedback", {
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
    Object.defineProperty(BarcodeCount.prototype, "_context", {
        get: function () {
            return this.privateContext;
        },
        set: function (newContext) {
            this.listenerProxy.unsubscribeListener();
            if (this.privateContext == null) {
                this.listenerProxy.subscribeListener();
            }
            this.privateContext = newContext;
        },
        enumerable: false,
        configurable: true
    });
    BarcodeCount.forContext = function (context, settings) {
        var barcodeCount = new BarcodeCount();
        barcodeCount.settings = settings;
        return barcodeCount;
    };
    BarcodeCount.prototype.applySettings = function (settings) {
        this.settings = settings;
        return this.didChange();
    };
    BarcodeCount.prototype.addListener = function (listener) {
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    };
    BarcodeCount.prototype.removeListener = function (listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener));
        this.checkAndUnsubscribeListeners();
    };
    BarcodeCount.prototype.checkAndUnsubscribeListeners = function () {
        if (this.listeners.length === 0) {
            this.listenerProxy.unsubscribeListener();
        }
    };
    BarcodeCount.prototype.reset = function () {
        return this.listenerProxy.reset();
    };
    BarcodeCount.prototype.startScanningPhase = function () {
        this.listenerProxy.startScanningPhase();
    };
    BarcodeCount.prototype.endScanningPhase = function () {
        this.listenerProxy.endScanningPhase();
    };
    BarcodeCount.prototype.setBarcodeCountCaptureList = function (barcodeCountCaptureList) {
        this.listenerProxy.setBarcodeCountCaptureList(barcodeCountCaptureList);
    };
    BarcodeCount.prototype.setAdditionalBarcodes = function (barcodes) {
        this._additionalBarcodes = barcodes;
        return this.didChange();
    };
    BarcodeCount.prototype.clearAdditionalBarcodes = function () {
        this._additionalBarcodes = [];
        return this.didChange();
    };
    Object.defineProperty(BarcodeCount, "recommendedCameraSettings", {
        get: function () {
            return BarcodeCaptureDefaults_1.BarcodeCaptureDefaults.RecommendedCameraSettings;
        },
        enumerable: false,
        configurable: true
    });
    BarcodeCount.prototype.didChange = function () {
        return this.listenerProxy.update();
    };
    BarcodeCount.prototype.unsubscribeNativeListeners = function () {
        this.listenerProxy.unsubscribeListener();
    };
    __decorate([
        (0, Serializeable_1.nameForSerialization)('feedback')
    ], BarcodeCount.prototype, "_feedback", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('enabled')
    ], BarcodeCount.prototype, "_isEnabled", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeCount.prototype, "listeners", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('additionalBarcodes')
    ], BarcodeCount.prototype, "_additionalBarcodes", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeCount.prototype, "isInListenerCallback", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeCount.prototype, "privateContext", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeCount.prototype, "listenerProxy", void 0);
    return BarcodeCount;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeCount = BarcodeCount;
//# sourceMappingURL=BarcodeCount.js.map