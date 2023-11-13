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
exports.BarcodeCountView = exports.BarcodeCountViewStyle = void 0;
var BarcodeCountDefaults_1 = require("./private/BarcodeCountDefaults");
var react_native_1 = require("react-native");
var react_1 = __importDefault(require("react"));
var BarcodeCountViewProxy_1 = require("./native/BarcodeCountViewProxy");
var BarcodeCountViewStyle;
(function (BarcodeCountViewStyle) {
    BarcodeCountViewStyle["Icon"] = "icon";
    BarcodeCountViewStyle["Dot"] = "dot";
})(BarcodeCountViewStyle = exports.BarcodeCountViewStyle || (exports.BarcodeCountViewStyle = {}));
var BarcodeCountView = /** @class */ (function (_super) {
    __extends(BarcodeCountView, _super);
    function BarcodeCountView(props) {
        var _this = _super.call(this, props) || this;
        _this._uiListener = null;
        _this._listener = null;
        _this._shouldShowUserGuidanceView = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.shouldShowUserGuidanceView;
        _this._shouldShowListButton = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.shouldShowListButton;
        _this._shouldShowExitButton = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.shouldShowExitButton;
        _this._shouldShowShutterButton = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.shouldShowShutterButton;
        _this._shouldShowHints = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.shouldShowHints;
        _this._shouldShowClearHighlightsButton = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.shouldShowClearHighlightsButton;
        _this._shouldShowSingleScanButton = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.shouldShowSingleScanButton;
        _this._shouldShowFloatingShutterButton = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.shouldShowFloatingShutterButton;
        _this._shouldShowToolbar = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.shouldShowToolbar;
        _this._shouldShowScanAreaGuides = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.shouldShowScanAreaGuides;
        _this._recognizedBrush = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.defaultRecognizedBrush;
        _this._unrecognizedBrush = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.defaultUnrecognizedBrush;
        _this._notInListBrush = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.defaultNotInListBrush;
        _this._filterSettings = null;
        _this._listButtonAccessibilityHint = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.listButtonAccessibilityHint;
        _this._listButtonAccessibilityLabel = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.listButtonAccessibilityLabel;
        _this._listButtonContentDescription = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.listButtonContentDescription;
        _this._exitButtonAccessibilityHint = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.exitButtonAccessibilityHint;
        _this._exitButtonAccessibilityLabel = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.exitButtonAccessibilityLabel;
        _this._exitButtonContentDescription = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.exitButtonContentDescription;
        _this._shutterButtonAccessibilityHint = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.shutterButtonAccessibilityHint;
        _this._shutterButtonAccessibilityLabel = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.shutterButtonAccessibilityLabel;
        _this._shutterButtonContentDescription = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.shutterButtonContentDescription;
        _this._floatingShutterButtonAccessibilityHint = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.floatingShutterButtonAccessibilityHint;
        _this._floatingShutterButtonAccessibilityLabel = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.floatingShutterButtonAccessibilityLabel;
        _this._floatingShutterButtonContentDescription = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.floatingShutterButtonContentDescription;
        _this._clearHighlightsButtonAccessibilityHint = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.clearHighlightsButtonAccessibilityHint;
        _this._clearHighlightsButtonAccessibilityLabel = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.clearHighlightsButtonAccessibilityLabel;
        _this._clearHighlightsButtonContentDescription = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.clearHighlightsButtonContentDescription;
        _this._singleScanButtonAccessibilityHint = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.singleScanButtonAccessibilityHint;
        _this._singleScanButtonAccessibilityLabel = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.singleScanButtonAccessibilityLabel;
        _this._singleScanButtonContentDescription = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.singleScanButtonContentDescription;
        _this._clearHighlightsButtonText = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.clearHighlightsButtonText;
        _this._exitButtonText = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.exitButtonText;
        _this._textForTapShutterToScanHint = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.textForTapShutterToScanHint;
        _this._textForScanningHint = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.textForScanningHint;
        _this._textForMoveCloserAndRescanHint = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.textForMoveCloserAndRescanHint;
        _this._textForMoveFurtherAndRescanHint = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.textForMoveFurtherAndRescanHint;
        _this._textForUnrecognizedBarcodesDetectedHint = BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.textForUnrecognizedBarcodesDetectedHint;
        _this._toolbarSettings = null;
        _this.props.barcodeCount._context = _this.props.context;
        _this.viewProxy = BarcodeCountViewProxy_1.BarcodeCountViewProxy.forBarcodeCount(_this);
        return _this;
    }
    Object.defineProperty(BarcodeCountView.prototype, "uiListener", {
        get: function () {
            return this._uiListener;
        },
        set: function (listener) {
            this._uiListener = listener;
            this.viewProxy.setUiListener(listener);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "listener", {
        get: function () {
            return this._listener;
        },
        set: function (listener) {
            this._listener = listener;
            this.viewProxy.setViewListener(listener);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "shouldShowUserGuidanceView", {
        get: function () {
            return this._shouldShowUserGuidanceView;
        },
        set: function (newValue) {
            this._shouldShowUserGuidanceView = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "shouldShowListButton", {
        get: function () {
            return this._shouldShowListButton;
        },
        set: function (newValue) {
            this._shouldShowListButton = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(BarcodeCountView.prototype, "shouldShowExitButton", {
        get: function () {
            return this._shouldShowExitButton;
        },
        set: function (newValue) {
            this._shouldShowExitButton = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "shouldShowShutterButton", {
        get: function () {
            return this._shouldShowShutterButton;
        },
        set: function (newValue) {
            this._shouldShowShutterButton = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "shouldShowHints", {
        get: function () {
            return this._shouldShowHints;
        },
        set: function (newValue) {
            this._shouldShowHints = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "shouldShowClearHighlightsButton", {
        get: function () {
            return this._shouldShowClearHighlightsButton;
        },
        set: function (newValue) {
            this._shouldShowClearHighlightsButton = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "shouldShowSingleScanButton", {
        get: function () {
            return this._shouldShowSingleScanButton;
        },
        set: function (newValue) {
            this._shouldShowSingleScanButton = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "shouldShowFloatingShutterButton", {
        get: function () {
            return this._shouldShowFloatingShutterButton;
        },
        set: function (newValue) {
            this._shouldShowFloatingShutterButton = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "shouldShowToolbar", {
        get: function () {
            return this._shouldShowToolbar;
        },
        set: function (newValue) {
            this._shouldShowToolbar = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "shouldShowScanAreaGuides", {
        get: function () {
            return this._shouldShowScanAreaGuides;
        },
        set: function (newValue) {
            this._shouldShowScanAreaGuides = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView, "defaultRecognizedBrush", {
        get: function () {
            return BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.defaultRecognizedBrush;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView, "defaultUnrecognizedBrush", {
        get: function () {
            return BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.defaultUnrecognizedBrush;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView, "defaultNotInListBrush", {
        get: function () {
            return BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.defaultNotInListBrush;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "recognizedBrush", {
        get: function () {
            return this._recognizedBrush;
        },
        set: function (newValue) {
            this._recognizedBrush = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(BarcodeCountView.prototype, "unrecognizedBrush", {
        get: function () {
            return this._unrecognizedBrush;
        },
        set: function (newValue) {
            this._unrecognizedBrush = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "notInListBrush", {
        get: function () {
            return this._notInListBrush;
        },
        set: function (newValue) {
            this._notInListBrush = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "filterSettings", {
        get: function () {
            return this._filterSettings;
        },
        set: function (newValue) {
            this._filterSettings = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "style", {
        get: function () {
            return this.props.viewStyle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "listButtonAccessibilityHint", {
        get: function () {
            return this._listButtonAccessibilityHint;
        },
        set: function (newValue) {
            this._listButtonAccessibilityHint = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "listButtonAccessibilityLabel", {
        get: function () {
            return this._listButtonAccessibilityLabel;
        },
        set: function (newValue) {
            this._listButtonAccessibilityLabel = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "listButtonContentDescription", {
        get: function () {
            return this._listButtonContentDescription;
        },
        set: function (newValue) {
            this._listButtonContentDescription = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "exitButtonAccessibilityHint", {
        get: function () {
            return this._exitButtonAccessibilityHint;
        },
        set: function (newValue) {
            this._exitButtonAccessibilityHint = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "exitButtonAccessibilityLabel", {
        get: function () {
            return this._exitButtonAccessibilityLabel;
        },
        set: function (newValue) {
            this._exitButtonAccessibilityLabel = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "exitButtonContentDescription", {
        get: function () {
            return this._exitButtonContentDescription;
        },
        set: function (newValue) {
            this._exitButtonContentDescription = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "shutterButtonAccessibilityHint", {
        get: function () {
            return this._shutterButtonAccessibilityHint;
        },
        set: function (newValue) {
            this._shutterButtonAccessibilityHint = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "shutterButtonAccessibilityLabel", {
        get: function () {
            return this._shutterButtonAccessibilityLabel;
        },
        set: function (newValue) {
            this._shutterButtonAccessibilityLabel = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "shutterButtonContentDescription", {
        get: function () {
            return this._shutterButtonContentDescription;
        },
        set: function (newValue) {
            this._shutterButtonContentDescription = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "floatingShutterButtonAccessibilityHint", {
        get: function () {
            return this._floatingShutterButtonAccessibilityHint;
        },
        set: function (newValue) {
            this._floatingShutterButtonAccessibilityHint = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "floatingShutterButtonAccessibilityLabel", {
        get: function () {
            return this._floatingShutterButtonAccessibilityLabel;
        },
        set: function (newValue) {
            this._floatingShutterButtonAccessibilityLabel = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "floatingShutterButtonContentDescription", {
        get: function () {
            return this._floatingShutterButtonContentDescription;
        },
        set: function (newValue) {
            this._floatingShutterButtonContentDescription = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "clearHighlightsButtonAccessibilityHint", {
        get: function () {
            return this._clearHighlightsButtonAccessibilityHint;
        },
        set: function (newValue) {
            this._clearHighlightsButtonAccessibilityHint = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "clearHighlightsButtonAccessibilityLabel", {
        get: function () {
            return this._clearHighlightsButtonAccessibilityLabel;
        },
        set: function (newValue) {
            this._clearHighlightsButtonAccessibilityLabel = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "clearHighlightsButtonContentDescription", {
        get: function () {
            return this._clearHighlightsButtonContentDescription;
        },
        set: function (newValue) {
            this.clearHighlightsButtonContentDescription = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "singleScanButtonAccessibilityHint", {
        get: function () {
            return this._singleScanButtonAccessibilityHint;
        },
        set: function (newValue) {
            this._singleScanButtonAccessibilityHint = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "singleScanButtonAccessibilityLabel", {
        get: function () {
            return this._singleScanButtonAccessibilityLabel;
        },
        set: function (newValue) {
            this._singleScanButtonAccessibilityLabel = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "singleScanButtonContentDescription", {
        get: function () {
            return this._singleScanButtonContentDescription;
        },
        set: function (newValue) {
            this._singleScanButtonContentDescription = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "clearHighlightsButtonText", {
        get: function () {
            return this._clearHighlightsButtonText;
        },
        set: function (newValue) {
            this._clearHighlightsButtonText = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "exitButtonText", {
        get: function () {
            return this._exitButtonText;
        },
        set: function (newValue) {
            this._exitButtonText = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "textForTapShutterToScanHint", {
        get: function () {
            return this._textForTapShutterToScanHint;
        },
        set: function (newValue) {
            this._textForTapShutterToScanHint = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "textForScanningHint", {
        get: function () {
            return this._textForScanningHint;
        },
        set: function (newValue) {
            this._textForScanningHint = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "textForMoveCloserAndRescanHint", {
        get: function () {
            return this._textForMoveCloserAndRescanHint;
        },
        set: function (newValue) {
            this._textForMoveCloserAndRescanHint = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "textForMoveFurtherAndRescanHint", {
        get: function () {
            return this._textForMoveFurtherAndRescanHint;
        },
        set: function (newValue) {
            this._textForMoveFurtherAndRescanHint = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeCountView.prototype, "textForUnrecognizedBarcodesDetectedHint", {
        get: function () {
            return this._textForUnrecognizedBarcodesDetectedHint;
        },
        set: function (newValue) {
            this._textForUnrecognizedBarcodesDetectedHint = newValue;
            this.updateNative();
        },
        enumerable: false,
        configurable: true
    });
    BarcodeCountView.prototype.clearHighlights = function () {
        return this.viewProxy.clearHighlights();
    };
    BarcodeCountView.prototype.setToolbarSettings = function (settings) {
        this._toolbarSettings = settings;
        this.updateNative();
    };
    BarcodeCountView.prototype.updateNative = function () {
        return this.viewProxy.update();
    };
    BarcodeCountView.prototype.render = function () {
        return react_1.default.createElement(RNTBarcodeCountView, __assign({}, this.props));
    };
    BarcodeCountView.prototype.toJSON = function () {
        var _a, _b, _c, _d, _e;
        var json = {
            View: {
                style: this.props.viewStyle,
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
            },
            BarcodeCount: this.props.barcodeCount.toJSON()
        };
        if (this.listButtonAccessibilityHint !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.listButtonAccessibilityHint) {
            json.View.listButtonAccessibilityHint = this.listButtonAccessibilityHint; // iOS Only
        }
        if (this.listButtonAccessibilityLabel !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.listButtonAccessibilityLabel) {
            json.View.listButtonAccessibilityHint = this.listButtonAccessibilityLabel; // iOS Only
        }
        if (this.listButtonContentDescription !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.listButtonContentDescription) {
            json.View.listButtonContentDescription = this.listButtonContentDescription; // Android Only
        }
        if (this.exitButtonAccessibilityHint !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.exitButtonAccessibilityHint) {
            json.View.exitButtonAccessibilityHint = this.exitButtonAccessibilityHint; // iOS Only
        }
        if (this.exitButtonAccessibilityLabel !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.exitButtonAccessibilityLabel) {
            json.View.exitButtonAccessibilityLabel = this.exitButtonAccessibilityLabel; // iOS Only
        }
        if (this.exitButtonContentDescription !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.exitButtonContentDescription) {
            json.View.exitButtonContentDescription = this.exitButtonContentDescription; // Android Only
        }
        if (this.shutterButtonAccessibilityHint !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.shutterButtonAccessibilityHint) {
            json.View.shutterButtonAccessibilityHint = this.shutterButtonAccessibilityHint; // iOS Only
        }
        if (this.shutterButtonAccessibilityLabel !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.shutterButtonAccessibilityLabel) {
            json.View.shutterButtonAccessibilityLabel = this.shutterButtonAccessibilityLabel; // iOS Only
        }
        if (this.shutterButtonContentDescription !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.shutterButtonContentDescription) {
            json.View.shutterButtonContentDescription = this.shutterButtonContentDescription; // Android Only
        }
        if (this.floatingShutterButtonAccessibilityHint !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.floatingShutterButtonAccessibilityHint) {
            json.View.floatingShutterButtonAccessibilityHint = this.floatingShutterButtonAccessibilityHint; // iOS Only
        }
        if (this.floatingShutterButtonAccessibilityLabel !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.floatingShutterButtonAccessibilityLabel) {
            json.View.floatingShutterButtonAccessibilityLabel = this.floatingShutterButtonAccessibilityLabel; // iOS Only
        }
        if (this.floatingShutterButtonContentDescription !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.floatingShutterButtonContentDescription) {
            json.View.floatingShutterButtonContentDescription = this.floatingShutterButtonContentDescription; // Android Only
        }
        if (this.clearHighlightsButtonAccessibilityHint !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.clearHighlightsButtonAccessibilityHint) {
            json.View.clearHighlightsButtonAccessibilityHint = this.clearHighlightsButtonAccessibilityHint; // iOS Only
        }
        if (this.clearHighlightsButtonAccessibilityLabel !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.clearHighlightsButtonAccessibilityLabel) {
            json.View.clearHighlightsButtonAccessibilityLabel = this.clearHighlightsButtonAccessibilityLabel; // iOS Only
        }
        if (this.clearHighlightsButtonContentDescription !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.clearHighlightsButtonContentDescription) {
            json.View.clearHighlightsButtonContentDescription = this.clearHighlightsButtonContentDescription; // Android Only
        }
        if (this.singleScanButtonAccessibilityHint !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.singleScanButtonAccessibilityHint) {
            json.View.singleScanButtonAccessibilityHint = this.singleScanButtonAccessibilityHint; // iOS Only
        }
        if (this.singleScanButtonAccessibilityLabel !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.singleScanButtonAccessibilityLabel) {
            json.View.singleScanButtonAccessibilityLabel = this.singleScanButtonAccessibilityLabel; // iOS Only
        }
        if (this.singleScanButtonContentDescription !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.singleScanButtonContentDescription) {
            json.View.singleScanButtonContentDescription = this.singleScanButtonContentDescription; // Android Only
        }
        if (this.clearHighlightsButtonText !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.clearHighlightsButtonText) {
            json.View.clearHighlightsButtonText = this.clearHighlightsButtonText;
        }
        if (this.exitButtonText !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.exitButtonText) {
            json.View.exitButtonText = this.exitButtonText;
        }
        if (this.textForTapShutterToScanHint !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.textForTapShutterToScanHint) {
            json.View.textForTapShutterToScanHint = this.textForTapShutterToScanHint;
        }
        if (this.textForScanningHint !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.textForScanningHint) {
            json.View.textForScanningHint = this.textForScanningHint;
        }
        if (this.textForMoveCloserAndRescanHint !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.textForMoveCloserAndRescanHint) {
            json.View.textForMoveCloserAndRescanHint = this.textForMoveCloserAndRescanHint;
        }
        if (this.textForMoveFurtherAndRescanHint !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.textForMoveFurtherAndRescanHint) {
            json.View.textForMoveFurtherAndRescanHint = this.textForMoveFurtherAndRescanHint;
        }
        if (this.textForUnrecognizedBarcodesDetectedHint !== BarcodeCountDefaults_1.BarcodeCountDefaults.BarcodeCountView.textForUnrecognizedBarcodesDetectedHint) {
            json.View.textForUnrecognizedBarcodesDetectedHint = this.textForUnrecognizedBarcodesDetectedHint;
        }
        if (this.recognizedBrush) {
            json.View.recognizedBrush = (_b = this.recognizedBrush) === null || _b === void 0 ? void 0 : _b.toJSON();
        }
        if (this.unrecognizedBrush) {
            json.View.unrecognizedBrush = (_c = this.unrecognizedBrush) === null || _c === void 0 ? void 0 : _c.toJSON();
        }
        if (this.notInListBrush) {
            json.View.notInListBrush = (_d = this.notInListBrush) === null || _d === void 0 ? void 0 : _d.toJSON();
        }
        if (this.filterSettings) {
            json.View.filterSettings = (_e = this.filterSettings) === null || _e === void 0 ? void 0 : _e.toJSON();
        }
        return json;
    };
    return BarcodeCountView;
}(react_1.default.Component));
exports.BarcodeCountView = BarcodeCountView;
// tslint:disable-next-line:variable-name
var RNTBarcodeCountView = react_native_1.requireNativeComponent('RNTBarcodeCountView', BarcodeCountView);
//# sourceMappingURL=BarcodeCountView.js.map