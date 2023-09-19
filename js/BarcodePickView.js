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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodePickView = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var BarcodePickViewProxy_1 = require("./native/BarcodePickViewProxy");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodePickView = /** @class */ (function (_super) {
    __extends(BarcodePickView, _super);
    function BarcodePickView(props) {
        var _this = _super.call(this, props) || this;
        _this._actionListeners = [];
        _this._isStarted = false;
        _this.props.barcodePick.privateContext = _this.props.context;
        _this.viewProxy = BarcodePickViewProxy_1.BarcodePickViewProxy.forBarcodePick(_this);
        return _this;
    }
    BarcodePickView.prototype.componentWillUnmount = function () {
        this.viewProxy.dispose();
        this.props.barcodePick.unsubscribeNativeListeners();
    };
    BarcodePickView.prototype.start = function () {
        this._isStarted = true;
        this.viewProxy.start();
    };
    BarcodePickView.prototype.pause = function () {
        this.viewProxy.pause();
    };
    BarcodePickView.prototype.addActionListener = function (listener) {
        if (this._actionListeners.findIndex(function (l) { return l === listener; }) === -1) {
            this._actionListeners.push(listener);
        }
    };
    BarcodePickView.prototype.removeActionListener = function (listener) {
        if (this._actionListeners.findIndex(function (l) { return l === listener; }) === -1) {
            return;
        }
        this._actionListeners.splice(this._actionListeners.indexOf(listener), 1);
    };
    BarcodePickView.prototype.render = function () {
        return react_1.default.createElement(RNTBarcodePickView, __assign({}, this.props));
    };
    BarcodePickView.prototype.toJSON = function () {
        return {
            View: {
                hasActionListeners: this._actionListeners.length > 0,
                isStarted: this._isStarted,
                viewSettings: this.props.settings.toJSON(),
                cameraSettings: this.props.cameraSettings.toJSON(),
            },
            BarcodePick: this.props.barcodePick.toJSON()
        };
    };
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodePickView.prototype, "viewProxy", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], BarcodePickView.prototype, "_actionListeners", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('isStarted')
    ], BarcodePickView.prototype, "_isStarted", void 0);
    return BarcodePickView;
}(react_1.default.Component));
exports.BarcodePickView = BarcodePickView;
// tslint:disable-next-line:variable-name
var RNTBarcodePickView = react_native_1.requireNativeComponent('RNTBarcodePickView', BarcodePickView);
//# sourceMappingURL=BarcodePickView.js.map