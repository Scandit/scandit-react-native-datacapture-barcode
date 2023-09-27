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
exports.SparkScan = void 0;
var SparkScanListenerProxy_1 = require("./native/SparkScanListenerProxy");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var SparkScanFeedback_1 = require("./SparkScanFeedback");
var SparkScan = /** @class */ (function (_super) {
    __extends(SparkScan, _super);
    function SparkScan() {
        var _this = _super.call(this) || this;
        _this.type = 'sparkScan';
        _this._isEnabled = true;
        _this._feedback = SparkScanFeedback_1.SparkScanFeedback.default;
        _this.privateContext = null;
        _this.listeners = [];
        _this.isInListenerCallback = false;
        _this.listenerProxy = SparkScanListenerProxy_1.SparkScanListenerProxy.forSparkScan(_this);
        return _this;
    }
    Object.defineProperty(SparkScan.prototype, "isEnabled", {
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
    Object.defineProperty(SparkScan.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScan.prototype, "feedback", {
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
    Object.defineProperty(SparkScan.prototype, "_context", {
        get: function () {
            return this.privateContext;
        },
        set: function (newContext) {
            if (this.privateContext) {
                this.listenerProxy.unsubscribeListener();
            }
            this.listenerProxy.subscribeListener();
            this.privateContext = newContext;
        },
        enumerable: false,
        configurable: true
    });
    SparkScan.forSettings = function (settings) {
        var sparkScan = new SparkScan();
        sparkScan.settings = settings;
        return sparkScan;
    };
    SparkScan.prototype.applySettings = function (settings) {
        this.settings = settings;
        return this.didChange();
    };
    SparkScan.prototype.addListener = function (listener) {
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    };
    SparkScan.prototype.removeListener = function (listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener));
    };
    SparkScan.prototype.didChange = function () {
        if (this.context) {
            return this.context.update();
        }
        else {
            return Promise.resolve();
        }
    };
    SparkScan.prototype.unsubscribeNativeListeners = function () {
        this.listenerProxy.unsubscribeListener();
    };
    __decorate([
        (0, Serializeable_1.nameForSerialization)('enabled')
    ], SparkScan.prototype, "_isEnabled", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('feedback')
    ], SparkScan.prototype, "_feedback", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], SparkScan.prototype, "privateContext", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], SparkScan.prototype, "listeners", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], SparkScan.prototype, "listenerProxy", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], SparkScan.prototype, "isInListenerCallback", void 0);
    return SparkScan;
}(Serializeable_1.DefaultSerializeable));
exports.SparkScan = SparkScan;
//# sourceMappingURL=SparkScan.js.map