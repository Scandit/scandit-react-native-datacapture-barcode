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
exports.BarcodeCapture = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeCaptureListenerProxy_1 = require("./native/BarcodeCaptureListenerProxy");
var BarcodeCaptureDefaults_1 = require("./private/BarcodeCaptureDefaults");
var BarcodeCapture = /** @class */ (function (_super) {
    __extends(BarcodeCapture, _super);
    function BarcodeCapture() {
        var _this = _super.call(this) || this;
        _this.type = 'barcodeCapture';
        _this._isEnabled = true;
        _this.privateContext = null;
        _this.listeners = [];
        _this.isInListenerCallback = false;
        _this.listenerProxy = BarcodeCaptureListenerProxy_1.BarcodeCaptureListenerProxy.forBarcodeCapture(_this);
        return _this;
    }
    Object.defineProperty(BarcodeCapture.prototype, "isEnabled", {
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
    Object.defineProperty(BarcodeCapture.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCapture.prototype, "feedback", {
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
    Object.defineProperty(BarcodeCapture, "recommendedCameraSettings", {
        get: function () {
            return BarcodeCaptureDefaults_1.BarcodeCaptureDefaults.RecommendedCameraSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCapture.prototype, "_context", {
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
    BarcodeCapture.forContext = function (context, settings) {
        var barcodeCapture = new BarcodeCapture();
        barcodeCapture.settings = settings;
        if (context) {
            context.addMode(barcodeCapture);
        }
        return barcodeCapture;
    };
    BarcodeCapture.prototype.applySettings = function (settings) {
        this.settings = settings;
        return this.didChange();
    };
    BarcodeCapture.prototype.addListener = function (listener) {
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    };
    BarcodeCapture.prototype.removeListener = function (listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    };
    BarcodeCapture.prototype.didChange = function () {
        if (this.context) {
            return this.context.update();
        }
        else {
            return Promise.resolve();
        }
    };
    __decorate([
        (0, Serializeable_1.nameForSerialization)('enabled')
    ], BarcodeCapture.prototype, "_isEnabled", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('feedback')
    ], BarcodeCapture.prototype, "_feedback", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeCapture.prototype, "privateContext", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeCapture.prototype, "listeners", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeCapture.prototype, "listenerProxy", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodeCapture.prototype, "isInListenerCallback", void 0);
    return BarcodeCapture;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeCapture = BarcodeCapture;
//# sourceMappingURL=BarcodeCapture.js.map