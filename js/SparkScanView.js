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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparkScanView = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Common_1 = require("scandit-react-native-datacapture-core/js/Common");
var SparkScanDefaults_1 = require("./private/SparkScanDefaults");
var SparkScanViewProxy_1 = require("./native/SparkScanViewProxy");
var SparkScanView = /** @class */ (function (_super) {
    __extends(SparkScanView, _super);
    function SparkScanView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uiListener = null;
        _this._shouldShowScanAreaGuides = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.shouldShowScanAreaGuides;
        _this._brush = SparkScanView.defaultBrush;
        _this._torchButtonVisible = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.torchButtonVisible;
        _this._scanningBehaviorButtonVisible = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.scanningBehaviorButtonVisible;
        _this._handModeButtonVisible = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.handModeButtonVisible;
        _this._barcodeCountButtonVisible = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.barcodeCountButtonVisible;
        _this._fastFindButtonVisible = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.fastFindButtonVisible;
        _this._targetModeButtonVisible = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.targetModeButtonVisible;
        _this._soundModeButtonVisible = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.soundModeButtonVisible;
        _this._hapticModeButtonVisible = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.hapticModeButtonVisible;
        _this._stopCapturingText = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.stopCapturingText;
        _this._startCapturingText = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.startCapturingText;
        _this._resumeCapturingText = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.resumeCapturingText;
        _this._scanningCapturingText = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.scanningCapturingText;
        _this._captureButtonActiveBackgroundColor = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.captureButtonActiveBackgroundColor;
        _this._captureButtonBackgroundColor = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.captureButtonBackgroundColor;
        _this._captureButtonTintColor = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.captureButtonTintColor;
        _this._toolbarBackgroundColor = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.toolbarBackgroundColor;
        _this._toolbarIconActiveTintColor = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.toolbarIconActiveTintColor;
        _this._toolbarIconInactiveTintColor = SparkScanDefaults_1.SparkScanDefaults.SparkScanView.toolbarIconInactiveTintColor;
        return _this;
    }
    Object.defineProperty(SparkScanView.prototype, "shouldShowScanAreaGuides", {
        get: function () {
            return this._shouldShowScanAreaGuides;
        },
        set: function (newValue) {
            this._shouldShowScanAreaGuides = newValue;
            this.viewProxy.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView, "defaultBrush", {
        get: function () {
            return new Common_1.Brush(SparkScanDefaults_1.SparkScanDefaults.SparkScanView.brush.fillColor, SparkScanDefaults_1.SparkScanDefaults.SparkScanView.brush.strokeColor, SparkScanDefaults_1.SparkScanDefaults.SparkScanView.brush.strokeWidth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "brush", {
        get: function () {
            return this._brush;
        },
        set: function (newValue) {
            this._brush = newValue;
            this.viewProxy.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "torchButtonVisible", {
        get: function () {
            return this._torchButtonVisible;
        },
        set: function (newValue) {
            this._torchButtonVisible = newValue;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "scanningBehaviorButtonVisible", {
        get: function () {
            return this._scanningBehaviorButtonVisible;
        },
        set: function (newValue) {
            this._scanningBehaviorButtonVisible = newValue;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "handModeButtonVisible", {
        get: function () {
            return this._handModeButtonVisible;
        },
        set: function (newValue) {
            this._handModeButtonVisible = newValue;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "barcodeCountButtonVisible", {
        get: function () {
            return this._barcodeCountButtonVisible;
        },
        set: function (newValue) {
            this._barcodeCountButtonVisible = newValue;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "fastFindButtonVisible", {
        get: function () {
            return this._fastFindButtonVisible;
        },
        set: function (newValue) {
            this._fastFindButtonVisible = newValue;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "targetModeButtonVisible", {
        get: function () {
            return this._targetModeButtonVisible;
        },
        set: function (newValue) {
            this._targetModeButtonVisible = newValue;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "soundModeButtonVisible", {
        get: function () {
            return this._soundModeButtonVisible;
        },
        set: function (newValue) {
            this._soundModeButtonVisible = newValue;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "hapticModeButtonVisible", {
        get: function () {
            return this._hapticModeButtonVisible;
        },
        set: function (newValue) {
            this._hapticModeButtonVisible = newValue;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "stopCapturingText", {
        get: function () {
            return this._stopCapturingText;
        },
        set: function (newValue) {
            this._stopCapturingText = newValue;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "startCapturingText", {
        get: function () {
            return this._startCapturingText;
        },
        set: function (newValue) {
            this._startCapturingText = newValue;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "resumeCapturingText", {
        get: function () {
            return this._resumeCapturingText;
        },
        set: function (newValue) {
            this._resumeCapturingText = newValue;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "scanningCapturingText", {
        get: function () {
            return this._scanningCapturingText;
        },
        set: function (newValue) {
            this._scanningCapturingText = newValue;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "captureButtonActiveBackgroundColor", {
        get: function () {
            return this._captureButtonActiveBackgroundColor;
        },
        set: function (newValue) {
            this._captureButtonActiveBackgroundColor = newValue;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "captureButtonBackgroundColor", {
        get: function () {
            return this._captureButtonBackgroundColor;
        },
        set: function (newValue) {
            this._captureButtonBackgroundColor = newValue;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "captureButtonTintColor", {
        get: function () {
            return this._captureButtonTintColor;
        },
        set: function (newValue) {
            this._captureButtonTintColor = newValue;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "toolbarBackgroundColor", {
        get: function () {
            return this._toolbarBackgroundColor;
        },
        set: function (newValue) {
            this._toolbarBackgroundColor = newValue;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "toolbarIconActiveTintColor", {
        get: function () {
            return this._toolbarIconActiveTintColor;
        },
        set: function (newValue) {
            this._toolbarIconActiveTintColor = newValue;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SparkScanView.prototype, "toolbarIconInactiveTintColor", {
        get: function () {
            return this._toolbarIconInactiveTintColor;
        },
        set: function (newValue) {
            this._toolbarIconInactiveTintColor = newValue;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    SparkScanView.prototype.emitFeedback = function (feedback) {
        this.viewProxy.emitFeedback(feedback);
    };
    SparkScanView.prototype.componentDidMount = function () {
        this.props.sparkScan._context = this.props.context;
        this.viewProxy = SparkScanViewProxy_1.SparkScanViewProxy.forSparkScanView(this);
    };
    SparkScanView.prototype.componentWillUnmount = function () {
        this.viewProxy.dispose();
    };
    SparkScanView.prototype.startScanning = function () {
        this.viewProxy.startScanning();
    };
    SparkScanView.prototype.pauseScanning = function () {
        this.viewProxy.pauseScanning();
    };
    SparkScanView.prototype.render = function () {
        return react_1.default.createElement(RNTSparkScanView, __assign({}, this.props));
    };
    SparkScanView.prototype.update = function () {
        this.viewProxy.update();
    };
    SparkScanView.prototype.toJSON = function () {
        var _a, _b, _c, _d, _e, _f;
        return {
            shouldShowScanAreaGuides: this.shouldShowScanAreaGuides,
            brush: this.brush.toJSON(),
            torchButtonVisible: this.torchButtonVisible,
            scanningBehaviorButtonVisible: this.scanningBehaviorButtonVisible,
            handModeButtonVisible: this.hapticModeButtonVisible,
            barcodeCountButtonVisible: this.barcodeCountButtonVisible,
            fastFindButtonVisible: this.fastFindButtonVisible,
            targetModeButtonVisible: this.targetModeButtonVisible,
            soundModeButtonVisible: this.soundModeButtonVisible,
            hapticModeButtonVisible: this.hapticModeButtonVisible,
            stopCapturingText: this.stopCapturingText,
            startCapturingText: this.startCapturingText,
            resumeCapturingText: this.resumeCapturingText,
            scanningCapturingText: this.scanningCapturingText,
            captureButtonActiveBackgroundColor: (_a = this.captureButtonActiveBackgroundColor) === null || _a === void 0 ? void 0 : _a.toJSON(),
            captureButtonBackgroundColor: (_b = this.captureButtonBackgroundColor) === null || _b === void 0 ? void 0 : _b.toJSON(),
            captureButtonTintColor: (_c = this.captureButtonTintColor) === null || _c === void 0 ? void 0 : _c.toJSON(),
            toolbarBackgroundColor: (_d = this.toolbarBackgroundColor) === null || _d === void 0 ? void 0 : _d.toJSON(),
            toolbarIconActiveTintColor: (_e = this.toolbarIconActiveTintColor) === null || _e === void 0 ? void 0 : _e.toJSON(),
            toolbarIconInactiveTintColor: (_f = this.toolbarIconInactiveTintColor) === null || _f === void 0 ? void 0 : _f.toJSON()
        };
    };
    return SparkScanView;
}(react_1.default.Component));
exports.SparkScanView = SparkScanView;
// tslint:disable-next-line:variable-name
var RNTSparkScanView = react_native_1.requireNativeComponent('RNTSparkScanView', SparkScanView);
//# sourceMappingURL=SparkScanView.js.map