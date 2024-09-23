import { FactoryMaker, DataCaptureContextFeatures, ignoreFromSerialization, BaseNativeProxy } from 'scandit-react-native-datacapture-core/dist/core';
import { NativeModules, NativeEventEmitter, AppState, View, requireNativeComponent, Platform, findNodeHandle, UIManager } from 'react-native';
import { BarcodeTracking as BarcodeTracking$1, BaseSparkScanView, getBarcodeCountDefaults, BaseBarcodePickView, BaseBarcodeFindView, loadBarcodeDefaults, loadBarcodeCaptureDefaults, loadBarcodeTrackingDefaults, loadBarcodeSelectionDefaults, loadBarcodeCountDefaults, loadBarcodePickDefaults, loadBarcodeFindDefaults, loadSparkScanDefaults, BaseBarcodeTrackingAdvancedOverlay, BarcodeTrackingSettings, BarcodeTrackingBasicOverlay, BarcodeTrackingBasicOverlayStyle, BarcodeCountViewEvents, TrackedBarcode, BarcodeCaptureListenerEvents, BarcodeSelectionListenerEvents, BarcodeSelectionBrushProviderEvents, BarcodeCountListenerEvents, BarcodeTrackingListenerEvents, BarcodeTrackingBasicOverlayListenerEvents, BarcodeTrackingAdvancedOverlayListenerEvents, SparkScanListenerEvents, BarcodePickEvents, BarcodePickViewListenerEvents, BarcodePickViewUiListenerEvents, BarcodeFindListenerEvents, BarcodeFindViewEvents, BarcodePickListenerEvents, SparkScanViewEvents, SparkScanFeedbackDelegateEvents } from './barcode.js';
export { ArucoDictionary, ArucoDictionaryPreset, ArucoMarker, Barcode, BarcodeCapture, BarcodeCaptureFeedback, BarcodeCaptureOverlay, BarcodeCaptureOverlayStyle, BarcodeCaptureSession, BarcodeCaptureSettings, BarcodeCount, BarcodeCountCaptureList, BarcodeCountCaptureListSession, BarcodeCountFeedback, BarcodeCountSession, BarcodeCountSettings, BarcodeCountToolbarSettings, BarcodeFilterHighlightSettingsBrush, BarcodeFilterHighlightType, BarcodeFilterSettings, BarcodeFind, BarcodeFindFeedback, BarcodeFindItem, BarcodeFindItemContent, BarcodeFindItemSearchOptions, BarcodeFindSettings, BarcodeFindViewSettings, BarcodeGenerator, BarcodeGeneratorBuilder, BarcodePick, BarcodePickActionCallback, BarcodePickAsyncMapperProductProvider, BarcodePickIconStyle, BarcodePickProduct, BarcodePickProductProviderCallback, BarcodePickProductProviderCallbackItem, BarcodePickScanningSession, BarcodePickSettings, BarcodePickState, BarcodePickViewListenerEvents, BarcodePickViewSettings, BarcodePickViewUiListenerEvents, BarcodeSelection, BarcodeSelectionAimerSelection, BarcodeSelectionAutoSelectionStrategy, BarcodeSelectionBasicOverlay, BarcodeSelectionBasicOverlayStyle, BarcodeSelectionFeedback, BarcodeSelectionFreezeBehavior, BarcodeSelectionManualSelectionStrategy, BarcodeSelectionSession, BarcodeSelectionSettings, BarcodeSelectionTapBehavior, BarcodeSelectionTapSelection, BarcodeSpatialGrid, BarcodeTracking, BarcodeTrackingBasicOverlay, BarcodeTrackingBasicOverlayStyle, BarcodeTrackingScenario, BarcodeTrackingSession, BarcodeTrackingSettings, BatterySavingMode, Checksum, Code128BarcodeGeneratorBuilder, Code39BarcodeGeneratorBuilder, CompositeFlag, CompositeType, DataMatrixBarcodeGeneratorBuilder, Dot, DotWithIcons, Ean13BarcodeGeneratorBuilder, Ean13UpcaClassification, EncodingRange, InterleavedTwoOfFiveBarcodeGeneratorBuilder, LocalizedOnlyBarcode, QrCodeBarcodeGeneratorBuilder, QrCodeErrorCorrectionLevel, Range, Rectangular, RectangularWithIcons, SparkScan, SparkScanBarcodeErrorFeedback, SparkScanBarcodeFeedback, SparkScanBarcodeSuccessFeedback, SparkScanFeedback, SparkScanPreviewBehavior, SparkScanScanningBehavior, SparkScanScanningModeDefault, SparkScanScanningModeTarget, SparkScanScanningPrecision, SparkScanSession, SparkScanSettings, SparkScanToastSettings, SparkScanViewErrorFeedback, SparkScanViewFeedback, SparkScanViewHandMode, SparkScanViewSettings, SparkScanViewSuccessFeedback, StructuredAppendData, Symbology, SymbologyDescription, SymbologySettings, TargetBarcode, TrackedBarcode, UpcaBarcodeGeneratorBuilder } from './barcode.js';
import { FrameSourceState, Anchor, PointWithUnit, NumberWithUnit, MeasureUnit, Camera, CameraPosition, DataCaptureView, initCoreProxy, initCoreDefaults } from 'scandit-react-native-datacapture-core';
import React, { forwardRef, useRef, useState, useEffect } from 'react';

// tslint:disable:variable-name
const NativeModule$h = NativeModules.ScanditDataCaptureBarcodeCapture;
const RNEventEmitter$c = new NativeEventEmitter(NativeModule$h);
// tslint:enable:variable-name
class NativeBarcodeCaptureListenerProxy {
    nativeListeners = [];
    eventEmitter;
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    isModeEnabled = () => false;
    resetSession() {
        return NativeModule$h.resetSession();
    }
    registerListenerForEvents() {
        NativeModule$h.registerListenerForEvents();
    }
    setModeEnabledState(enabled) {
        NativeModule$h.setModeEnabledState(enabled);
    }
    unregisterListenerForEvents() {
        NativeModule$h.unregisterListenerForEvents();
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
    }
    subscribeDidUpdateSessionListener() {
        const didUpdateSessionListener = RNEventEmitter$c.addListener(BarcodeCaptureListenerEvents.didUpdateSession, (body) => {
            this.eventEmitter.emit(BarcodeCaptureListenerEvents.didUpdateSession, body);
        });
        this.nativeListeners.push(didUpdateSessionListener);
    }
    subscribeDidScanListener() {
        const didScanListener = RNEventEmitter$c.addListener(BarcodeCaptureListenerEvents.didScan, (body) => {
            this.eventEmitter.emit(BarcodeCaptureListenerEvents.didScan, body);
        });
        this.nativeListeners.push(didScanListener);
    }
    finishDidUpdateSessionCallback(isFinished) {
        NativeModule$h.finishDidUpdateSessionCallback(isFinished);
    }
    finishDidScanCallback(isFinished) {
        NativeModule$h.finishDidScanCallback(isFinished);
    }
    updateBarcodeCaptureMode(modeJson) {
        return NativeModule$h.updateBarcodeCaptureMode(modeJson);
    }
    applyBarcodeCaptureModeSettings(newSettingsJson) {
        return NativeModule$h.applyBarcodeCaptureModeSettings(newSettingsJson);
    }
    updateBarcodeCaptureOverlay(overlayJson) {
        return NativeModule$h.updateBarcodeCaptureOverlay(overlayJson);
    }
}

// tslint:disable:variable-name
const NativeModule$g = NativeModules.ScanditDataCaptureBarcodeSelection;
const RNEventEmitter$b = new NativeEventEmitter(NativeModule$g);
// tslint:enable:variable-name
class NativeBarcodeSelectionListenerProxy {
    eventEmitter;
    nativeListeners = [];
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    isModeEnabled = () => false;
    getCount(selectionIdentifier) {
        return NativeModule$g.getCount(selectionIdentifier);
    }
    resetSession() {
        return NativeModule$g.resetSession();
    }
    registerListenerForEvents() {
        NativeModule$g.registerListenerForEvents();
    }
    subscribeDidUpdateSelectionListener() {
        const didUpdateSelectionListener = RNEventEmitter$b.addListener(BarcodeSelectionListenerEvents.didUpdateSelection, (body) => {
            this.eventEmitter.emit(BarcodeSelectionListenerEvents.didUpdateSelection, body);
        });
        this.nativeListeners.push(didUpdateSelectionListener);
    }
    subscribeDidUpdateSession() {
        const didUpdateSession = RNEventEmitter$b.addListener(BarcodeSelectionListenerEvents.didUpdateSession, (body) => {
            this.eventEmitter.emit(BarcodeSelectionListenerEvents.didUpdateSession, body);
        });
        this.nativeListeners.push(didUpdateSession);
    }
    finishDidUpdateSelectionCallback(isEnabled) {
        NativeModule$g.finishDidUpdateSelectionCallback(isEnabled);
    }
    finishDidUpdateSessionCallback(isEnabled) {
        NativeModule$g.finishDidUpdateSessionCallback(isEnabled);
    }
    unregisterListenerForEvents() {
        NativeModule$g.unregisterListenerForEvents();
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
    }
}

// tslint:disable:variable-name
const NativeModule$f = NativeModules.ScanditDataCaptureBarcodeSelection;
const RNEventEmitter$a = new NativeEventEmitter(NativeModule$f);
// tslint:enable:variable-name
class NativeBarcodeSelectionOverlayProxy {
    brushForAimedBarcodeProvider = null;
    brushForTrackedBarcodeProvider = null;
    eventEmitter;
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    isModeEnabled = () => false;
    setTextForAimToSelectAutoHint(text) {
        return NativeModule$f.setTextForAimToSelectAutoHint(text);
    }
    removeAimedBarcodeBrushProvider() {
        this.brushForAimedBarcodeProvider?.remove();
        this.brushForAimedBarcodeProvider = null;
        return NativeModule$f.removeAimedBarcodeBrushProvider();
    }
    setAimedBarcodeBrushProvider() {
        return NativeModule$f.setAimedBarcodeBrushProvider();
    }
    finishBrushForAimedBarcodeCallback(brushStr, selectionIdentifier) {
        NativeModule$f.finishBrushForAimedBarcodeCallback(brushStr, selectionIdentifier);
    }
    subscribeBrushForAimedBarcode() {
        this.brushForAimedBarcodeProvider = RNEventEmitter$a.addListener(BarcodeSelectionBrushProviderEvents.brushForAimedBarcode, (body) => {
            this.eventEmitter.emit(BarcodeSelectionBrushProviderEvents.brushForAimedBarcode, body);
        });
    }
    removeTrackedBarcodeBrushProvider() {
        this.brushForTrackedBarcodeProvider?.remove();
        this.brushForTrackedBarcodeProvider = null;
        return NativeModule$f.removeTrackedBarcodeBrushProvider();
    }
    setTrackedBarcodeBrushProvider() {
        return NativeModule$f.setTrackedBarcodeBrushProvider();
    }
    finishBrushForTrackedBarcodeCallback(brushStr, selectionIdentifier) {
        NativeModule$f.finishBrushForTrackedBarcodeCallback(brushStr, selectionIdentifier);
    }
    updateBarcodeSelectionBasicOverlay(overlayJson) {
        return NativeModule$f.updateBarcodeSelectionBasicOverlay(overlayJson);
    }
    subscribeBrushForTrackedBarcode() {
        this.brushForTrackedBarcodeProvider = RNEventEmitter$a.addListener(BarcodeSelectionBrushProviderEvents.brushForTrackedBarcode, (body) => {
            this.eventEmitter.emit(BarcodeSelectionBrushProviderEvents.brushForTrackedBarcode, body);
        });
    }
}

// tslint:disable:variable-name
const NativeModule$e = NativeModules.ScanditDataCaptureBarcodeSelection;
new NativeEventEmitter(NativeModule$e);
// tslint:enable:variable-name
class NativeBarcodeSelectionProxy {
    unfreezeCamera() {
        return NativeModule$e.unfreezeCamera();
    }
    resetMode() {
        return NativeModule$e.resetMode();
    }
    selectAimedBarcode() {
        return NativeModule$e.selectAimedBarcode();
    }
    unselectBarcodes(barcodesStr) {
        return NativeModule$e.unselectBarcodes(barcodesStr);
    }
    setSelectBarcodeEnabled(barcodeStr, enabled) {
        return NativeModule$e.setSelectBarcodeEnabled(barcodeStr, enabled);
    }
    increaseCountForBarcodes(barcodesStr) {
        return NativeModule$e.increaseCountForBarcodes(barcodesStr);
    }
    setModeEnabledState(enabled) {
        NativeModule$e.setModeEnabledState(enabled);
    }
    updateBarcodeSelectionMode(modeJson) {
        return NativeModule$e.updateBarcodeSelectionMode(modeJson);
    }
    applyBarcodeSelectionModeSettings(newSettingsJson) {
        return NativeModule$e.applyBarcodeSelectionModeSettings(newSettingsJson);
    }
}

// tslint:disable:variable-name
const NativeModule$d = NativeModules.ScanditDataCaptureBarcodeCount;
const RNEventEmitter$9 = new NativeEventEmitter(NativeModule$d);
// tslint:enable:variable-name
class NativeBarcodeCountListenerProxy {
    nativeListeners = [];
    eventEmitter;
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    isModeEnabled = () => false;
    resetBarcodeCount() {
        return NativeModule$d.resetBarcodeCount();
    }
    updateMode(barcodeCountJson) {
        return NativeModule$d.updateMode(barcodeCountJson);
    }
    registerBarcodeCountListener() {
        return NativeModule$d.registerBarcodeCountListener();
    }
    unregisterBarcodeCountListener() {
        const p = NativeModule$d.unregisterBarcodeCountListener();
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
        return p;
    }
    subscribeDidScan() {
        const didScanListener = RNEventEmitter$9.addListener(BarcodeCountListenerEvents.didScan, (body) => {
            this.eventEmitter.emit(BarcodeCountListenerEvents.didScan, body);
        });
        this.nativeListeners.push(didScanListener);
    }
    subscribeDidListSessionUpdate() {
        const didUpdateSessionListener = RNEventEmitter$9.addListener(BarcodeCountListenerEvents.didListSessionUpdate, (body) => {
            this.eventEmitter.emit(BarcodeCountListenerEvents.didListSessionUpdate, body);
        });
        this.nativeListeners.push(didUpdateSessionListener);
    }
    finishOnScan() {
        NativeModule$d.finishOnScan();
    }
    startScanningPhase() {
        NativeModule$d.startScanningPhase();
    }
    endScanningPhase() {
        NativeModule$d.endScanningPhase();
    }
    setBarcodeCountCaptureList(captureListStr) {
        NativeModule$d.setBarcodeCountCaptureList(captureListStr);
    }
    setModeEnabledState(enabled) {
        NativeModule$d.setModeEnabledState(enabled);
    }
}

// tslint:disable:variable-name
const NativeModule$c = NativeModules.ScanditDataCaptureBarcodeCount;
// tslint:enable:variable-name
class NativeBarcodeCountSessionProxy {
    resetSession() {
        return NativeModule$c.resetSession();
    }
    getSpatialMap() {
        return NativeModule$c.getSpatialMap();
    }
    getSpatialMapWithHints(expectedNumberOfRows, expectedNumberOfColumns) {
        return NativeModule$c.getSpatialMapWithHints(expectedNumberOfRows, expectedNumberOfColumns);
    }
}

// tslint:disable:variable-name
const NativeModule$b = NativeModules.ScanditDataCaptureBarcodeTracking;
const RNEventEmitter$8 = new NativeEventEmitter(NativeModule$b);
// tslint:enable:variable-name
class NativeBarcodeTrackingListenerProxy {
    nativeListeners = [];
    eventEmitter;
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    isModeEnabled = () => false;
    resetSession() {
        return NativeModule$b.resetSession();
    }
    registerListenerForEvents() {
        NativeModule$b.registerListenerForEvents();
    }
    unregisterListenerForEvents() {
        NativeModule$b.unregisterListenerForEvents();
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
    }
    subscribeDidUpdateSession() {
        const listener = RNEventEmitter$8.addListener(BarcodeTrackingListenerEvents.didUpdateSession, (body) => {
            this.eventEmitter.emit(BarcodeTrackingListenerEvents.didUpdateSession, body);
        });
        this.nativeListeners.push(listener);
    }
    finishDidUpdateSessionCallback(enabled) {
        NativeModule$b.finishDidUpdateSessionCallback(enabled);
    }
    setModeEnabledState(enabled) {
        NativeModule$b.setModeEnabledState(enabled);
    }
    updateBarcodeTrackingMode(modeJson) {
        return NativeModule$b.updateBarcodeTrackingMode(modeJson);
    }
    applyBarcodeTrackingModeSettings(newSettingsJson) {
        return NativeModule$b.applyBarcodeTrackingModeSettings(newSettingsJson);
    }
}

// tslint:disable:variable-name
const NativeModule$a = NativeModules.ScanditDataCaptureBarcodeTracking;
const RNEventEmitter$7 = new NativeEventEmitter(NativeModule$a);
// tslint:enable:variable-name
class NativeBarcodeTrackingBasicOverlayProxy {
    nativeListeners = [];
    eventEmitter;
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    setBrushForTrackedBarcode(brushJson, trackedBarcodeIdentifer, _sessionFrameSequenceID) {
        return NativeModule$a.setBrushForTrackedBarcode(brushJson, trackedBarcodeIdentifer);
    }
    clearTrackedBarcodeBrushes() {
        return NativeModule$a.clearTrackedBarcodeBrushes();
    }
    registerListenerForBasicOverlayEvents() {
        NativeModule$a.registerListenerForBasicOverlayEvents();
    }
    unregisterListenerForBasicOverlayEvents() {
        NativeModule$a.unregisterListenerForBasicOverlayEvents();
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
    }
    updateBarcodeTrackingBasicOverlay(overlayJson) {
        return NativeModule$a.updateBarcodeTrackingBasicOverlay(overlayJson);
    }
    subscribeBrushForTrackedBarcode() {
        const brushForTrackedBarcodeListener = RNEventEmitter$7.addListener(BarcodeTrackingBasicOverlayListenerEvents.brushForTrackedBarcode, (body) => {
            this.eventEmitter.emit(BarcodeTrackingBasicOverlayListenerEvents.brushForTrackedBarcode, body);
        });
        this.nativeListeners.push(brushForTrackedBarcodeListener);
    }
    subscribeDidTapTrackedBarcode() {
        const didTapTrackedBarcodeListener = RNEventEmitter$7.addListener(BarcodeTrackingBasicOverlayListenerEvents.didTapTrackedBarcode, (body) => {
            this.eventEmitter.emit(BarcodeTrackingBasicOverlayListenerEvents.didTapTrackedBarcode, body);
        });
        this.nativeListeners.push(didTapTrackedBarcodeListener);
    }
}

// tslint:disable:variable-name
const NativeModule$9 = NativeModules.ScanditDataCaptureBarcodeTracking;
const RNEventEmitter$6 = new NativeEventEmitter(NativeModule$9);
// tslint:enable:variable-name
class NativeBarcodeTrackingAdvancedOverlayProxy {
    nativeListeners = [];
    eventEmitter;
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    isModeEnabled = () => false;
    setBrushForTrackedBarcode(brushJson, sessionFrameSequenceID, trackedBarcodeIdentifer) {
        return NativeModule$9.setBrushForTrackedBarcode(brushJson, sessionFrameSequenceID, trackedBarcodeIdentifer);
    }
    setViewForTrackedBarcode(viewJson, trackedBarcodeIdentifer) {
        return NativeModule$9.setViewForTrackedBarcode(viewJson, trackedBarcodeIdentifer);
    }
    setAnchorForTrackedBarcode(anchor, trackedBarcodeIdentifer) {
        return NativeModule$9.setAnchorForTrackedBarcode(anchor, trackedBarcodeIdentifer);
    }
    setOffsetForTrackedBarcode(offsetJson, trackedBarcodeIdentifer) {
        return NativeModule$9.setOffsetForTrackedBarcode(offsetJson, trackedBarcodeIdentifer);
    }
    clearTrackedBarcodeViews() {
        return NativeModule$9.clearTrackedBarcodeViews();
    }
    registerListenerForAdvancedOverlayEvents() {
        NativeModule$9.registerListenerForAdvancedOverlayEvents();
    }
    unregisterListenerForAdvancedOverlayEvents() {
        NativeModule$9.unregisterListenerForAdvancedOverlayEvents();
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
    }
    subscribeViewForTrackedBarcode() {
        const viewForTrackedBarcodeListener = RNEventEmitter$6.addListener(BarcodeTrackingAdvancedOverlayListenerEvents.viewForTrackedBarcode, (body) => {
            this.eventEmitter.emit(BarcodeTrackingAdvancedOverlayListenerEvents.viewForTrackedBarcode, body);
        });
        this.nativeListeners.push(viewForTrackedBarcodeListener);
    }
    subscribeAnchorForTrackedBarcode() {
        const anchorForTrackedBarcodeListener = RNEventEmitter$6.addListener(BarcodeTrackingAdvancedOverlayListenerEvents.anchorForTrackedBarcode, (body) => {
            this.eventEmitter.emit(BarcodeTrackingAdvancedOverlayListenerEvents.anchorForTrackedBarcode, body);
        });
        this.nativeListeners.push(anchorForTrackedBarcodeListener);
    }
    subscribeOffsetForTrackedBarcode() {
        const offsetForTrackedBarcodeListener = RNEventEmitter$6.addListener(BarcodeTrackingAdvancedOverlayListenerEvents.offsetForTrackedBarcode, (body) => {
            this.eventEmitter.emit(BarcodeTrackingAdvancedOverlayListenerEvents.offsetForTrackedBarcode, body);
        });
        this.nativeListeners.push(offsetForTrackedBarcodeListener);
    }
    subscribeDidTapViewForTrackedBarcode() {
        const didTapViewForTrackedBarcodeListener = RNEventEmitter$6.addListener(BarcodeTrackingAdvancedOverlayListenerEvents.didTapViewForTrackedBarcode, (body) => {
            this.eventEmitter.emit(BarcodeTrackingAdvancedOverlayListenerEvents.didTapViewForTrackedBarcode, body);
        });
        this.nativeListeners.push(didTapViewForTrackedBarcodeListener);
    }
    updateBarcodeTrackingAdvancedOverlay(overlayJson) {
        return NativeModule$9.updateBarcodeTrackingAdvancedOverlay(overlayJson);
    }
    getJSONStringForView(view) {
        if (view == null) {
            return null;
        }
        if (!view.moduleName) {
            throw new Error('View must have moduleName defined');
        }
        if (!this.isSerializeable(view.props)) {
            // react-navigation does something like this: https://reactnavigation.org/docs/troubleshooting/#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state
            throw new Error('Non-serializable values were found in the view passed passed to a BarcodeTrackingAdvancedOverlay, which can break usage. This might happen if you have non-serializable values such as function, class instances etc. in the props for the view component that you are passing.');
        }
        const viewJSON = {
            moduleName: view.moduleName,
            initialProperties: view.props,
        };
        return JSON.stringify(viewJSON);
    }
    isSerializeable(o) {
        if (o === undefined || o === null ||
            typeof o === 'boolean' || typeof o === 'number' || typeof o === 'string') {
            return true;
        }
        if (Object.prototype.toString.call(o) !== '[object Object]' &&
            !Array.isArray(o)) {
            return false;
        }
        if (Array.isArray(o)) {
            for (const it of o) {
                if (!this.isSerializeable(it)) {
                    return false;
                }
            }
        }
        else {
            for (const key in o) {
                if (!this.isSerializeable(o[key])) {
                    return false;
                }
            }
        }
        return true;
    }
}

// tslint:disable:variable-name
const NativeModule$8 = NativeModules.ScanditDataCaptureSparkScan;
const RNEventEmitter$5 = new NativeEventEmitter(NativeModule$8);
// tslint:enable:variable-name
class NativeSparkScanListenerProxy extends BaseNativeProxy {
    nativeListeners = [];
    resetSession() {
        return NativeModule$8.resetSession();
    }
    updateMode(sparkScanJson) {
        return NativeModule$8.updateMode(sparkScanJson);
    }
    registerListenerForEvents() {
        NativeModule$8.registerListenerForEvents();
    }
    unregisterListenerForEvents() {
        const p = NativeModule$8.unregisterListenerForEvents();
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
        return p;
    }
    subscribeDidUpdateSessionListener() {
        const didUpdateSessionListener = RNEventEmitter$5.addListener(SparkScanListenerEvents.didUpdateSession, (body) => {
            this.eventEmitter.emit(SparkScanListenerEvents.didUpdateSession, body);
        });
        this.nativeListeners.push(didUpdateSessionListener);
    }
    subscribeDidScanListener() {
        const didScanListener = RNEventEmitter$5.addListener(SparkScanListenerEvents.didScan, (body) => {
            this.eventEmitter.emit(SparkScanListenerEvents.didScan, body);
        });
        this.nativeListeners.push(didScanListener);
    }
    finishDidUpdateSessionCallback(enabled) {
        return NativeModule$8.finishDidUpdateSessionCallback(enabled);
    }
    finishDidScanCallback(enabled) {
        return NativeModule$8.finishDidScanCallback(enabled);
    }
    setModeEnabledState(enabled) {
        NativeModule$8.setModeEnabledState(enabled);
    }
}

// tslint:disable:variable-name
const NativeModule$7 = NativeModules.ScanditDataCaptureBarcodePick;
const RNEventEmitter$4 = new NativeEventEmitter(NativeModule$7);
// tslint:enable:variable-name
class NativeBarcodePickProductProxy extends BaseNativeProxy {
    nativeListeners = [];
    finishOnProductIdentifierForItems(jsonData) {
        return NativeModule$7.finishOnProductIdentifierForItems(jsonData);
    }
    subscribeProductIdentifierForItemsListener() {
        const productIdentifierForItemsListener = RNEventEmitter$4.addListener(BarcodePickEvents.OnProductIdentifierForItems, (data) => {
            this.eventEmitter.emit(BarcodePickEvents.OnProductIdentifierForItems, data);
        });
        this.nativeListeners.push(productIdentifierForItemsListener);
    }
    unsubscribeListeners() {
        this.nativeListeners.forEach(listener => {
            listener.remove();
        });
        this.nativeListeners = [];
        RNEventEmitter$4.removeAllListeners(BarcodePickEvents.OnProductIdentifierForItems);
    }
}

// tslint:disable:variable-name
const NativeModule$6 = NativeModules.ScanditDataCaptureBarcodePick;
const RNEventEmitter$3 = new NativeEventEmitter(NativeModule$6);
// tslint:enable:variable-name
class NativeBarcodePickViewProxy extends BaseNativeProxy {
    nativeListeners = [];
    didTapFinishButtonListener = null;
    ;
    viewStart() {
        return NativeModule$6.viewStart();
    }
    viewPause() {
        return Promise.resolve();
    }
    viewFreeze() {
        return NativeModule$6.viewFreeze();
    }
    viewStop() {
        return NativeModule$6.viewStop();
    }
    viewResume() {
        return Promise.resolve();
    }
    finishPickAction(code, result) {
        return NativeModule$6.finishPickAction(code, result);
    }
    findNodeHandle(view) {
        return findNodeHandle(view);
    }
    createView(id, json) {
        return NativeModule$6.createView(id, json);
    }
    updateView(json) {
        return NativeModule$6.updateView(json);
    }
    registerFrameworkEvents() {
        this.subscribeDidPickItemListener();
        this.subscribeDidUnpickItemListener();
        this.subscribeDidFreezeScanningListener();
        this.subscribeDidPauseScanningListener();
        this.subscribeDidStartScanningListener();
        this.subscribeDidStopScanningListener();
        NativeModule$6.addActionListener();
        NativeModule$6.addViewListener();
    }
    unregisterFrameworkEvents() {
        this.nativeListeners.forEach(listener => {
            listener.remove();
        });
        this.nativeListeners = [];
        RNEventEmitter$3.removeAllListeners(BarcodePickEvents.DidPick);
        RNEventEmitter$3.removeAllListeners(BarcodePickEvents.DidUnpick);
        RNEventEmitter$3.removeAllListeners(BarcodePickViewListenerEvents.DidFreezeScanning);
        RNEventEmitter$3.removeAllListeners(BarcodePickViewListenerEvents.DidPauseScanning);
        RNEventEmitter$3.removeAllListeners(BarcodePickViewListenerEvents.DidStartScanning);
        RNEventEmitter$3.removeAllListeners(BarcodePickViewListenerEvents.DidStopScanning);
        RNEventEmitter$3.removeAllListeners(BarcodePickViewUiListenerEvents.DidTapFinishButton);
        NativeModule$6.removeActionListener();
        NativeModule$6.removeViewListener();
        NativeModule$6.unregisterBarcodePickViewUiListener();
    }
    subscribeDidStartScanningListener() {
        const didStartScanningListener = RNEventEmitter$3.addListener(BarcodePickViewListenerEvents.DidStartScanning, () => {
            this.eventEmitter.emit(BarcodePickViewListenerEvents.DidStartScanning);
        });
        this.nativeListeners.push(didStartScanningListener);
    }
    subscribeDidFreezeScanningListener() {
        const didFreezeScanningListener = RNEventEmitter$3.addListener(BarcodePickViewListenerEvents.DidFreezeScanning, () => {
            this.eventEmitter.emit(BarcodePickViewListenerEvents.DidFreezeScanning);
        });
        this.nativeListeners.push(didFreezeScanningListener);
    }
    subscribeDidPauseScanningListener() {
        const didPauseScanningListener = RNEventEmitter$3.addListener(BarcodePickViewListenerEvents.DidPauseScanning, () => {
            this.eventEmitter.emit(BarcodePickViewListenerEvents.DidPauseScanning);
        });
        this.nativeListeners.push(didPauseScanningListener);
    }
    subscribeDidStopScanningListener() {
        const didStopScanningListener = RNEventEmitter$3.addListener(BarcodePickViewListenerEvents.DidStopScanning, () => {
            this.eventEmitter.emit(BarcodePickViewListenerEvents.DidStopScanning);
        });
        this.nativeListeners.push(didStopScanningListener);
    }
    subscribeDidPickItemListener() {
        const didPickItemListener = RNEventEmitter$3.addListener(BarcodePickEvents.DidPick, (data) => {
            this.eventEmitter.emit(BarcodePickEvents.DidPick, data);
        });
        this.nativeListeners.push(didPickItemListener);
    }
    subscribeDidUnpickItemListener() {
        const didUnpickItemListener = RNEventEmitter$3.addListener(BarcodePickEvents.DidUnpick, (data) => {
            this.eventEmitter.emit(BarcodePickEvents.DidUnpick, data);
        });
        this.nativeListeners.push(didUnpickItemListener);
    }
    subscribeBarcodePickViewUiListener() {
        this.didTapFinishButtonListener = RNEventEmitter$3.addListener(BarcodePickViewUiListenerEvents.DidTapFinishButton, (data) => {
            this.eventEmitter.emit(BarcodePickViewUiListenerEvents.DidTapFinishButton, data);
        });
        this.nativeListeners.push(this.didTapFinishButtonListener);
        return NativeModule$6.registerBarcodePickViewUiListener();
    }
    unsubscribeBarcodePickViewUiListener() {
        this.didTapFinishButtonListener?.remove();
        if (this.didTapFinishButtonListener) {
            const index = this.nativeListeners.indexOf(this.didTapFinishButtonListener);
            if (index > -1) {
                this.nativeListeners.splice(index, 1);
            }
        }
        return NativeModule$6.unregisterBarcodePickViewUiListener();
    }
}

// tslint:disable:variable-name
const NativeModule$5 = NativeModules.ScanditDataCaptureBarcodeFind;
const RNEventEmitter$2 = new NativeEventEmitter(NativeModule$5);
// tslint:enable:variable-name
class NativeBarcodeFindListenerProxy extends BaseNativeProxy {
    nativeListeners = [];
    isModeEnabled = () => false;
    setItemList(itemsJson) {
        return NativeModule$5.barcodeFindSetItemList(itemsJson);
    }
    updateFindMode(barcodeFindJson) {
        return NativeModule$5.updateFindMode(barcodeFindJson);
    }
    barcodeFindModeStart() {
        return NativeModule$5.barcodeFindModeStart();
    }
    barcodeFindModePause() {
        return NativeModule$5.barcodeFindModePause();
    }
    barcodeFindModeStop() {
        return NativeModule$5.barcodeFindModeStop();
    }
    setModeEnabledState(isEnabled) {
        NativeModule$5.setModeEnabledState(isEnabled);
    }
    setBarcodeTransformer() {
        return NativeModule$5.setBarcodeTransformer();
    }
    submitBarcodeFindTransformerResult(transformedBarcode) {
        return NativeModule$5.submitBarcodeFindTransformerResult(transformedBarcode);
    }
    subscribeBarcodeFindListener() {
        const onStartListener = RNEventEmitter$2.addListener(BarcodeFindListenerEvents.onSearchStartedEvent, () => {
            this.eventEmitter.emit(BarcodeFindListenerEvents.onSearchStartedEvent);
        });
        this.nativeListeners.push(onStartListener);
        const onPauseListener = RNEventEmitter$2.addListener(BarcodeFindListenerEvents.onSearchPausedEvent, (body) => {
            this.eventEmitter.emit(BarcodeFindListenerEvents.onSearchPausedEvent, body);
        });
        this.nativeListeners.push(onPauseListener);
        const onStopListener = RNEventEmitter$2.addListener(BarcodeFindListenerEvents.onSearchStoppedEvent, (body) => {
            this.eventEmitter.emit(BarcodeFindListenerEvents.onSearchStoppedEvent, body);
        });
        this.nativeListeners.push(onStopListener);
        const onBarcodeTransformed = RNEventEmitter$2.addListener(BarcodeFindListenerEvents.onTransformBarcodeData, (body) => {
            this.eventEmitter.emit(BarcodeFindListenerEvents.onTransformBarcodeData, body);
        });
        this.nativeListeners.push(onBarcodeTransformed);
        return NativeModule$5.registerBarcodeFindListener();
    }
    unsubscribeBarcodeFindListener() {
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
        return NativeModule$5.unregisterBarcodeFindListener();
    }
}

// tslint:disable:variable-name
const NativeModule$4 = NativeModules.ScanditDataCaptureBarcodeFind;
const RNEventEmitter$1 = new NativeEventEmitter(NativeModule$4);
// tslint:enable:variable-name
class NativeBarcodeFindViewProxy extends BaseNativeProxy {
    nativeListeners = [];
    updateView(barcodeFindViewJson) {
        return NativeModule$4.updateFindView(barcodeFindViewJson);
    }
    onPause() {
        return NativeModule$4.barcodeFindViewOnPause();
    }
    onResume() {
        return NativeModule$4.barcodeFindViewOnResume();
    }
    startSearching() {
        return NativeModule$4.barcodeFindViewStartSearching();
    }
    stopSearching() {
        return NativeModule$4.barcodeFindViewStopSearching();
    }
    pauseSearching() {
        return NativeModule$4.barcodeFindViewPauseSearching();
    }
    findNodeHandle(view) {
        return findNodeHandle(view);
    }
    createView(id, json) {
        return NativeModule$4.createFindView(id, json);
    }
    showView() {
        // This method does not existst for RN
        throw new Error('Method not implemented.');
    }
    hideView() {
        // This method does not existst for RN
        throw new Error('Method not implemented.');
    }
    subscribeBarcodeFindViewListener() {
        const onFinishButtonTappedListener = RNEventEmitter$1.addListener(BarcodeFindViewEvents.onFinishButtonTappedEventName, (body) => {
            this.eventEmitter.emit(BarcodeFindViewEvents.onFinishButtonTappedEventName, body);
        });
        this.nativeListeners.push(onFinishButtonTappedListener);
        return NativeModule$4.registerBarcodeFindViewListener();
    }
    unsubscribeBarcodeFindViewListener() {
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
        return NativeModule$4.unregisterBarcodeFindViewListener();
    }
}

// tslint:disable:variable-name
const NativeModule$3 = NativeModules.ScanditDataCaptureBarcodePick;
const RNEventEmitter = new NativeEventEmitter(NativeModule$3);
// tslint:enable:variable-name
class NativeBarcodePickListenerProxy extends BaseNativeProxy {
    nativeListeners = [];
    subscribeBarcodePickListeners() {
        NativeModule$3.addScanningListener();
        this.subscribeDidCompleteScanningSessionListener();
        this.subscribeDidUpdateScanningSessionListener();
    }
    unsubscribeBarcodePickListeners() {
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
        NativeModule$3.removeScanningListener();
    }
    subscribeDidCompleteScanningSessionListener() {
        const didCompleteScanningSessionListener = RNEventEmitter.addListener(BarcodePickListenerEvents.DidCompleteScanningSession, (body) => {
            this.eventEmitter.emit(BarcodePickListenerEvents.DidCompleteScanningSession, body);
        });
        this.nativeListeners.push(didCompleteScanningSessionListener);
    }
    subscribeDidUpdateScanningSessionListener() {
        const didUpdateScanningSessionListener = RNEventEmitter.addListener(BarcodePickListenerEvents.DidUpdateScanningSession, (body) => {
            this.eventEmitter.emit(BarcodePickListenerEvents.DidUpdateScanningSession, body);
        });
        this.nativeListeners.push(didUpdateScanningSessionListener);
    }
}

// tslint:disable:variable-name
const NativeModule$2 = NativeModules.ScanditDataCaptureSparkScan;
const EventEmitter$1 = new NativeEventEmitter(NativeModule$2);
// tslint:enable:variable-name
class NativeSparkScanViewProxy extends BaseNativeProxy {
    view;
    nativeListeners = [];
    feedbackForBarcodeListener = null;
    bindView(view) {
        this.view = view;
    }
    createSparkScanView(viewJson) {
        const id = findNodeHandle(this.view);
        return NativeModule$2.create(id, viewJson);
    }
    disposeSparkScanView() {
        return NativeModule$2.unregisterListenerForViewEvents();
    }
    emitSparkScanViewFeedback(feedbackJson) {
        return NativeModule$2.emitFeedback(findNodeHandle(this.view), feedbackJson);
    }
    pauseSparkScanViewScanning() {
        if (Platform.OS === 'ios') {
            const id = findNodeHandle(this.view);
            return NativeModule$2.pauseScanning(id);
        }
        return NativeModule$2.pauseScanning();
    }
    prepareSparkScanViewScanning() {
        if (Platform.OS === 'ios') {
            const id = findNodeHandle(this.view);
            return NativeModule$2.prepareScanning(id);
        }
        return NativeModule$2.onResume();
    }
    registerSparkScanViewListenerEvents() {
        NativeModule$2.registerListenerForViewEvents();
        const barcodeCountButtonTappedListener = EventEmitter$1.addListener(SparkScanViewEvents.barcodeCountButtonTapped, () => {
            this.eventEmitter.emit(SparkScanViewEvents.barcodeCountButtonTapped, this.view);
        });
        const fastFindButtonTappedListener = EventEmitter$1.addListener(SparkScanViewEvents.fastFindButtonTapped, () => {
            this.eventEmitter.emit(SparkScanViewEvents.fastFindButtonTapped, this.view);
        });
        const barcodeFindButtonTappedListener = EventEmitter$1.addListener(SparkScanViewEvents.barcodeFindButtonTapped, () => {
            this.eventEmitter.emit(SparkScanViewEvents.barcodeFindButtonTapped, this.view);
        });
        this.nativeListeners.push(barcodeCountButtonTappedListener);
        this.nativeListeners.push(fastFindButtonTappedListener);
        this.nativeListeners.push(barcodeFindButtonTappedListener);
    }
    showToast(text) {
        return NativeModule$2.showToast(text);
    }
    startSparkScanViewScanning() {
        if (Platform.OS === 'ios') {
            const id = findNodeHandle(this.view);
            return NativeModule$2.startScanning(id);
        }
        return NativeModule$2.startScanning();
    }
    stopSparkScanViewScanning() {
        if (Platform.OS === 'ios') {
            const id = findNodeHandle(this.view);
            return NativeModule$2.stopScanning(id);
        }
        return NativeModule$2.onPause();
    }
    submitFeedbackForBarcode(feedbackJson) {
        return NativeModule$2.submitSparkScanFeedbackForBarcode(feedbackJson);
    }
    registerDelegateForEvents() {
        this.feedbackForBarcodeListener = EventEmitter$1.addListener(SparkScanFeedbackDelegateEvents.feedbackForBarcode, (data) => {
            this.eventEmitter.emit(SparkScanFeedbackDelegateEvents.feedbackForBarcode, data);
        });
        return NativeModule$2.addFeedbackDelegate();
    }
    unregisterDelegateForEvents() {
        this.feedbackForBarcodeListener?.remove();
        this.feedbackForBarcodeListener = null;
        return NativeModule$2.removeFeedbackDelegate();
    }
    async unregisterSparkScanViewListenerEvents() {
        await NativeModule$2.unregisterListenerForViewEvents();
        this.nativeListeners.forEach(listener => {
            listener.remove();
        });
        this.nativeListeners = [];
    }
    updateSparkScanView(viewJson) {
        const id = findNodeHandle(this.view);
        const parsedViewJson = JSON.parse(viewJson).View;
        return NativeModule$2.update(id, JSON.stringify(parsedViewJson));
    }
}

// tslint:disable:variable-name
const NativeModule$1 = NativeModules.ScanditDataCaptureBarcodeGenerator;
// tslint:enable:variable-name
class NativeBarcodeGeneratorProxy {
    create(barcodeGeneratorJson) {
        return NativeModule$1.create(barcodeGeneratorJson);
    }
    dispose(generatorId) {
        return NativeModule$1.disposeGenerator(generatorId);
    }
    generateFromBase64EncodedData(generatorId, data, imageWidth) {
        return NativeModule$1.generateFromBase64EncodedData(generatorId, data, imageWidth);
    }
    generate(generatorId, text, imageWidth) {
        return NativeModule$1.generate(generatorId, text, imageWidth);
    }
}

function initBarcodeProxy() {
    initCoreProxy();
    FactoryMaker.bindInstance('BarcodeCaptureListenerProxy', new NativeBarcodeCaptureListenerProxy());
    FactoryMaker.bindInstance('BarcodeTrackingListenerProxy', new NativeBarcodeTrackingListenerProxy());
    FactoryMaker.bindInstance('BarcodeTrackingBasicOverlayProxy', new NativeBarcodeTrackingBasicOverlayProxy());
    FactoryMaker.bindInstance('BarcodeTrackingAdvancedOverlayProxy', new NativeBarcodeTrackingAdvancedOverlayProxy());
    FactoryMaker.bindInstance('BarcodeSelectionListenerProxy', new NativeBarcodeSelectionListenerProxy());
    FactoryMaker.bindInstance('BarcodeSelectionOverlayProxy', new NativeBarcodeSelectionOverlayProxy());
    FactoryMaker.bindInstance('BarcodeSelectionProxy', new NativeBarcodeSelectionProxy());
    FactoryMaker.bindInstance('BarcodeCountListenerProxy', new NativeBarcodeCountListenerProxy());
    FactoryMaker.bindInstance('BarcodeCountSessionProxy', new NativeBarcodeCountSessionProxy());
    FactoryMaker.bindInstance('BarcodePickListenerProxy', new NativeBarcodePickListenerProxy());
    FactoryMaker.bindInstance('BarcodePickProductProxy', new NativeBarcodePickProductProxy());
    FactoryMaker.bindInstance('BarcodePickViewProxy', new NativeBarcodePickViewProxy());
    FactoryMaker.bindInstance('SparkScanListenerProxy', new NativeSparkScanListenerProxy());
    FactoryMaker.bindInstance('SparkScanViewProxy', new NativeSparkScanViewProxy());
    FactoryMaker.bindInstance('BarcodeFindProxy', new NativeBarcodeFindListenerProxy());
    FactoryMaker.bindInstance('BarcodeFindViewProxy', new NativeBarcodeFindViewProxy());
    FactoryMaker.bindInstance('BarcodeGeneratorProxy', new NativeBarcodeGeneratorProxy());
}

// tslint:disable-next-line:variable-name
const ScanditDataCaptureBarcode = NativeModules.ScanditDataCaptureBarcode;
// tslint:disable-next-line:variable-name
const BarcodeCapture = NativeModules.ScanditDataCaptureBarcodeCapture;
// tslint:disable-next-line:variable-name
const BarcodeCount = NativeModules.ScanditDataCaptureBarcodeCount;
// tslint:disable-next-line:variable-name
const BarcodePickModule = NativeModules.ScanditDataCaptureBarcodePick;
// tslint:disable-next-line:variable-name
const BarcodeSelection = NativeModules.ScanditDataCaptureBarcodeSelection;
// tslint:disable-next-line:variable-name
const BarcodeTracking = NativeModules.ScanditDataCaptureBarcodeTracking;
// tslint:disable-next-line:variable-name
const SparkScan = NativeModules.ScanditDataCaptureSparkScan;
// tslint:disable-next-line:variable-name
const BarcodeFind = NativeModules.ScanditDataCaptureBarcodeFind;
function initBarcodeDefaults() {
    initCoreDefaults();
    loadBarcodeDefaults(ScanditDataCaptureBarcode.Defaults);
    loadBarcodeCaptureDefaults(BarcodeCapture.Defaults);
    loadBarcodeTrackingDefaults(BarcodeTracking.Defaults);
    loadBarcodeSelectionDefaults(BarcodeSelection.Defaults);
    loadBarcodeCountDefaults(BarcodeCount.Defaults);
    loadBarcodePickDefaults(BarcodePickModule.Defaults);
    loadBarcodeFindDefaults(BarcodeFind.Defaults);
    loadSparkScanDefaults(SparkScan.Defaults);
    loadBarcodeFindDefaults(BarcodeFind.Defaults);
}

class BarcodeTrackingAdvancedOverlay {
    baseBarcodeTracking;
    get listener() {
        return this.baseBarcodeTracking.listener;
    }
    set listener(listener) {
        this.baseBarcodeTracking.listener = listener;
    }
    get type() {
        return this.baseBarcodeTracking.type;
    }
    get shouldShowScanAreaGuides() {
        return this.baseBarcodeTracking.shouldShowScanAreaGuides;
    }
    set shouldShowScanAreaGuides(shouldShow) {
        this.baseBarcodeTracking.shouldShowScanAreaGuides = shouldShow;
    }
    set view(newView) {
        this.baseBarcodeTracking.view = newView;
    }
    get view() {
        return this.baseBarcodeTracking.view;
    }
    static withBarcodeTrackingForView(barcodeTracking, view) {
        const overlay = new BarcodeTrackingAdvancedOverlay();
        overlay.baseBarcodeTracking.initialize(barcodeTracking, view);
        return overlay;
    }
    constructor() {
        this.baseBarcodeTracking = new BaseBarcodeTrackingAdvancedOverlay();
    }
    setViewForTrackedBarcode(view, trackedBarcode) {
        const errorText = 'The method no longer supports rendering any kind of images. Remove them to be able to set the view for your barcode. For further details about this backwards incompatible change, contact support@scandit.com.';
        const featureFlags = DataCaptureContextFeatures.featureFlags;
        if (featureFlags['barcode-ar-full']) {
            return this.baseBarcodeTracking.setViewForTrackedBarcode(view, trackedBarcode);
        }
        if (view.hasImageInRender()) {
            return new Promise((resolve, reject) => reject(errorText));
        }
        return this.baseBarcodeTracking.setViewForTrackedBarcode(view, trackedBarcode);
    }
    setAnchorForTrackedBarcode(anchor, trackedBarcode) {
        return this.baseBarcodeTracking.setAnchorForTrackedBarcode(anchor, trackedBarcode);
    }
    setOffsetForTrackedBarcode(offset, trackedBarcode) {
        return this.baseBarcodeTracking.setOffsetForTrackedBarcode(offset, trackedBarcode);
    }
    clearTrackedBarcodeViews() {
        return this.baseBarcodeTracking.clearTrackedBarcodeViews();
    }
    toJSON() {
        return this.baseBarcodeTracking.toJSON();
    }
}

// tslint:disable-next-line
const BarcodeTrackingView = forwardRef(function BarcodeTrackingView(props, ref) {
    const viewRef = useRef(null);
    const componentIsSetUp = useRef(false);
    const advancedOverlayRef = useRef(null);
    const barcodeTrackingModeRef = useRef(null);
    function getMode() {
        if (barcodeTrackingModeRef.current !== null) {
            return barcodeTrackingModeRef.current;
        }
        barcodeTrackingModeRef.current = BarcodeTracking$1.forContext(null, props.barcodeTrackingSettings || new BarcodeTrackingSettings());
        return barcodeTrackingModeRef.current;
    }
    const basicOverlayRef = useRef(null);
    function getBasicOverlay() {
        if (basicOverlayRef.current !== null) {
            return basicOverlayRef.current;
        }
        basicOverlayRef.current = BarcodeTrackingBasicOverlay.withBarcodeTrackingForViewWithStyle(getMode(), null, props.basicOverlayStyle || BarcodeTrackingBasicOverlayStyle.Frame);
        return basicOverlayRef.current;
    }
    const cameraRef = useRef(null);
    function getCamera() {
        if (cameraRef.current !== null) {
            return cameraRef.current;
        }
        cameraRef.current = Camera.asPositionWithSettings(props.desiredCameraPosition || CameraPosition.WorldFacing, props.cameraSettings || BarcodeTracking$1.recommendedCameraSettings);
        return cameraRef.current;
    }
    const [basicOverlayListener, setBasicOverlayListener] = useState({});
    const [advancedOverlayListener, setAdvancedOverlayListener] = useState({});
    const torchSwitchControl = useRef(null);
    const zoomSwitchControl = useRef(null);
    const [viewForTrackedBarcodeCache, setViewForTrackedBarcodeCache] = useState(new Map());
    const appState = useRef(AppState.currentState);
    useEffect(() => {
        doSetup();
        const subscription = AppState.addEventListener('change', nextAppState => {
            if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
                getMode().isEnabled = true;
                getCamera()?.switchToDesiredState(FrameSourceState.On);
            }
            else {
                getMode().isEnabled = false;
                getCamera()?.switchToDesiredState(FrameSourceState.Off);
            }
            appState.current = nextAppState;
        });
        return () => {
            subscription.remove();
            doCleanup();
        };
    }, []);
    const doSetup = () => {
        if (componentIsSetUp.current)
            return;
        componentIsSetUp.current = true;
        /* Handling Data Capture Context */
        props.context.setFrameSource(getCamera());
        props.context.removeAllModes();
        props.context.addMode(getMode());
        /* Adding Basic Overlay */
        if (viewRef.current) {
            viewRef.current.addOverlay(getBasicOverlay());
        }
    };
    const doCleanup = () => {
        if (!componentIsSetUp.current)
            return;
        componentIsSetUp.current = false;
        /* Remove the torch control */
        if (torchSwitchControl.current) {
            viewRef.current?.removeControl(torchSwitchControl.current);
        }
        /* Remove the zoom control */
        if (zoomSwitchControl.current) {
            viewRef.current?.removeControl(zoomSwitchControl.current);
        }
        /* Closing the camera */
        getCamera()?.switchToDesiredState(FrameSourceState.Off);
        /* Cleaning Data Capture Context */
        if (barcodeTrackingModeRef.current) {
            props.context.removeMode(barcodeTrackingModeRef.current);
        }
        props.context.setFrameSource(null);
        barcodeTrackingModeRef.current = null;
        /* Cleaning Overlays */
        if (viewRef.current) {
            viewRef.current.view?.overlays?.forEach((overlay) => viewRef.current?.view?.removeOverlay(overlay));
        }
    };
    /* BARCODE TRACKING MODE */
    useEffect(() => {
        if (props.barcodeTrackingSettings) {
            getMode().applySettings(props.barcodeTrackingSettings);
        }
    }, [props.barcodeTrackingSettings]);
    useEffect(() => {
        // Enabling/disabling the scanning turns both camera and mode to the same state. We ignore standby mode for now.
        getMode().isEnabled = props.isEnabled;
        getCamera()?.switchToDesiredState(props.isEnabled ? FrameSourceState.On : FrameSourceState.Off);
    }, [props.isEnabled]);
    useEffect(() => {
        getMode().listeners.forEach((listener) => {
            getMode().removeListener(listener);
        });
        if (props.didUpdateSession) {
            getMode().addListener({
                didUpdateSession: props.didUpdateSession,
            });
        }
    }, [props.didUpdateSession]);
    /* OVERLAYS */
    useEffect(() => {
        // set default brush only if there is no brush provided via the listener
        if (props.defaultBasicOverlayBrush && !props.brushForTrackedBarcode) {
            getBasicOverlay().brush = props.defaultBasicOverlayBrush;
        }
    }, [props.defaultBasicOverlayBrush, props.brushForTrackedBarcode]);
    useEffect(() => {
        getBasicOverlay().shouldShowScanAreaGuides = !!props.shouldShowScanAreaGuides;
    }, [props.shouldShowScanAreaGuides]);
    useEffect(() => {
        getBasicOverlay().listener = basicOverlayListener;
    }, [basicOverlayListener]);
    useEffect(() => {
        setBasicOverlayListener({
            brushForTrackedBarcode: props.brushForTrackedBarcode,
            didTapTrackedBarcode: props.didTapTrackedBarcode,
        });
    }, [props.brushForTrackedBarcode, props.didTapTrackedBarcode]);
    useEffect(() => {
        if (advancedOverlayRef.current) {
            advancedOverlayRef.current.listener = advancedOverlayListener;
        }
    }, [advancedOverlayListener]);
    useEffect(() => {
        const hasAdvancedOverlayListenerToSet = !!props.viewForTrackedBarcode ||
            !!props.didTapViewForTrackedBarcode ||
            !!props.anchorForTrackedBarcode ||
            !!props.offsetForTrackedBarcode;
        if (!viewRef.current)
            return; // no overlay listener to set without a view.
        if (!hasAdvancedOverlayListenerToSet && !advancedOverlayRef.current) {
            // update with no listener, nothing had been set before; therefore nothing to do.
            return;
        }
        if (!hasAdvancedOverlayListenerToSet && advancedOverlayRef.current) {
            // update with no listener, something had been set before; therefore we do ONLY cleanup.)
            viewRef.current.view?.overlays?.forEach((overlay) => {
                if (overlay.type === 'barcodeTrackingAdvanced') {
                    viewRef.current?.view?.removeOverlay(overlay);
                }
            });
            advancedOverlayRef.current = null;
            return;
        }
        if (hasAdvancedOverlayListenerToSet && !advancedOverlayRef.current) {
            // update with listener, nothing set before; therefore we set WITHOUT cleanup.
            advancedOverlayRef.current =
                BarcodeTrackingAdvancedOverlay.withBarcodeTrackingForView(getMode(), viewRef.current);
            // do not return, so we also set the listener afterwards.
        }
        else if (hasAdvancedOverlayListenerToSet && advancedOverlayRef.current) {
            // update with listener, something had been set before; therefore we set WITH cleanup.
            viewRef.current.view?.overlays?.forEach((overlay) => {
                if (overlay.type === 'barcodeTrackingAdvanced') {
                    viewRef.current?.view?.removeOverlay(overlay);
                }
            });
            advancedOverlayRef.current =
                BarcodeTrackingAdvancedOverlay.withBarcodeTrackingForView(getMode(), viewRef.current);
            // do not return, so we also set the listener afterwards.
        }
        setAdvancedOverlayListener({
            viewForTrackedBarcode: (overlay, trackedBarcode) => {
                if (props.useCacheForViewsForTrackedBarcodes === true) {
                    const barcodeTrackingKey = trackedBarcode.barcode.symbology.toString() +
                        trackedBarcode.barcode.data;
                    if (viewForTrackedBarcodeCache.has(barcodeTrackingKey)) {
                        return viewForTrackedBarcodeCache.get(barcodeTrackingKey) || null;
                    }
                    if (props.viewForTrackedBarcode) {
                        const view = props.viewForTrackedBarcode(overlay, trackedBarcode);
                        if (view instanceof Promise) {
                            return view.then(actualView => {
                                setViewForTrackedBarcodeCache(viewForTrackedBarcodeCache.set(barcodeTrackingKey, actualView));
                                return actualView;
                            });
                        }
                        else {
                            setViewForTrackedBarcodeCache(viewForTrackedBarcodeCache.set(barcodeTrackingKey, view));
                            return view;
                        }
                    }
                }
                else {
                    if (props.viewForTrackedBarcode) {
                        return props.viewForTrackedBarcode(overlay, trackedBarcode);
                    }
                }
                return null;
            },
            didTapViewForTrackedBarcode: props.didTapViewForTrackedBarcode,
            anchorForTrackedBarcode: (overlay, trackedBarcode) => {
                if (props.anchorForTrackedBarcode) {
                    return props.anchorForTrackedBarcode(overlay, trackedBarcode);
                }
                else if (props.defaultAnchorForTrackedBarcode) {
                    return props.defaultAnchorForTrackedBarcode;
                }
                return Anchor.TopCenter;
            },
            offsetForTrackedBarcode: (overlay, trackedBarcode) => {
                if (props.offsetForTrackedBarcode) {
                    return props.offsetForTrackedBarcode(overlay, trackedBarcode);
                }
                else if (props.defaultsOffsetForTrackedBarcode) {
                    return props.defaultsOffsetForTrackedBarcode;
                }
                return new PointWithUnit(new NumberWithUnit(0, MeasureUnit.Fraction), new NumberWithUnit(0, MeasureUnit.Fraction));
            },
        });
    }, [
        props.viewForTrackedBarcode,
        props.didTapViewForTrackedBarcode,
        props.anchorForTrackedBarcode,
        props.offsetForTrackedBarcode,
    ]);
    /* CAMERA */
    useEffect(() => {
        // default to SDK recommended camera settings if the prop is unset
        getCamera()?.applySettings(props.cameraSettings || BarcodeTracking$1.recommendedCameraSettings);
    }, [props.cameraSettings]);
    useEffect(() => {
        if (props.desiredCameraState) {
            getCamera()?.switchToDesiredState(props.desiredCameraState);
        }
    }, [props.desiredCameraState]);
    useEffect(() => {
        if (props.desiredCameraPosition) {
            getCamera()?.switchToDesiredState(FrameSourceState.Off);
            props.context.setFrameSource(null).then(() => {
                cameraRef.current = Camera.asPositionWithSettings(props.desiredCameraPosition || CameraPosition.WorldFacing, props.cameraSettings || BarcodeTracking$1.recommendedCameraSettings);
                props.context.setFrameSource(getCamera()).then(() => {
                    getCamera()?.switchToDesiredState(props.desiredCameraState || FrameSourceState.On);
                });
            });
        }
    }, [props.desiredCameraPosition]);
    useEffect(() => {
        if (props.desiredTorchState) {
            getCamera().desiredTorchState = props.desiredTorchState;
        }
    }, [props.desiredTorchState]);
    useEffect(() => {
        if (!viewRef.current)
            return;
        if (torchSwitchControl.current) {
            viewRef.current?.removeControl(torchSwitchControl.current);
        }
        if (!props.torchSwitchControl)
            return;
        torchSwitchControl.current = props.torchSwitchControl;
        viewRef.current.addControl(torchSwitchControl.current);
    }, [props.torchSwitchControl]);
    useEffect(() => {
        if (!viewRef.current)
            return;
        if (zoomSwitchControl.current) {
            viewRef.current?.removeControl(zoomSwitchControl.current);
        }
        if (!props.zoomSwitchControl)
            return;
        zoomSwitchControl.current = props.zoomSwitchControl;
        viewRef.current.addControl(zoomSwitchControl.current);
    }, [props.zoomSwitchControl]);
    useEffect(() => {
        if (!props.navigation)
            return;
        // Attempt to hook onto the navigation events
        try {
            const unsubscribeFromFocus = props.navigation.addListener('focus', () => {
                // The screen is focused
                doSetup();
            });
            const unsubscribeFromBlur = props.navigation.addListener('blur', () => {
                // The screen is no longer focused (navigated away but still mounted)
                doCleanup();
            });
            return () => {
                unsubscribeFromFocus();
                unsubscribeFromBlur();
            };
        }
        catch (e) {
            // tslint:disable-next-line:no-console
            console.error(e);
        }
    }, [props.navigation]);
    // TODO: reset()
    return (React.createElement(View, { ref: ref, style: props.style },
        React.createElement(DataCaptureView, { context: props.context, style: { flex: 1 }, ref: viewRef })));
});

class BarcodeTrackingAdvancedOverlayView extends React.Component {
    static moduleName = 'BarcodeTrackingAdvancedOverlayViewComponent';
    hasImageInRender() {
        const element = this.render();
        let foundImage = false;
        if (!element)
            return false;
        // @ts-ignore
        function checkIfElementIsImage(el) {
            if (el.type.displayName && (el.type.displayName.toLowerCase() === 'image')) {
                return foundImage = true;
            }
            if (!el.props.children) {
                return false;
            }
            if (typeof el.props.children === 'object' && el.props.children.length > 0) {
                return el.props.children.forEach((child) => checkIfElementIsImage(child));
            }
            else if (typeof el.props.children === 'object' && !el.props.children.length) {
                return checkIfElementIsImage(el.props.children);
            }
        }
        try {
            checkIfElementIsImage(element);
        }
        catch (e) {
            return foundImage;
        }
        return foundImage;
    }
    get moduleName() {
        return BarcodeTrackingAdvancedOverlayView.moduleName;
    }
}

class SparkScanView extends React.Component {
    baseSparkScanView;
    rnViewListener = null;
    get uiListener() {
        return this.rnViewListener;
    }
    set uiListener(listener) {
        if (listener == null) {
            this.baseSparkScanView.uiListener = null;
            this.rnViewListener = null;
            return;
        }
        const rnView = this;
        this.baseSparkScanView.uiListener = {
            didTapFastFindButton(view) {
                listener?.onFastFindButtonTappedIn?.(rnView);
            },
            didTapBarcodeCountButton(view) {
                listener?.onBarcodeCountButtonTappedIn?.(rnView);
            },
            didTapBarcodeFindButton(view) {
                listener?.onBarcodeFindButtonTappedIn?.(rnView);
            }
        };
        this.rnViewListener = listener;
    }
    static get defaultBrush() {
        return BaseSparkScanView.defaultBrush;
    }
    constructor(props) {
        super(props);
        const proxy = FactoryMaker.getInstance('SparkScanViewProxy');
        proxy?.bindView(this);
        this.baseSparkScanView = BaseSparkScanView.forContext(props.context, props.sparkScan, this.props.sparkScanViewSettings);
    }
    componentWillUnmount() {
        this.baseSparkScanView.dispose();
    }
    render() {
        return React.createElement(RNTSparkScanView, { ...this.props });
    }
    /**
     * @deprecated This property is deprecated as it's no longer needed.
     */
    get shouldShowScanAreaGuides() {
        return this.baseSparkScanView.shouldShowScanAreaGuides;
    }
    /**
     * @deprecated This property is deprecated as it's no longer needed.
     */
    set shouldShowScanAreaGuides(newValue) {
        this.baseSparkScanView.shouldShowScanAreaGuides = newValue;
    }
    get brush() {
        return this.baseSparkScanView.brush;
    }
    set brush(newValue) {
        this.baseSparkScanView.brush = newValue;
    }
    get previewSizeControlVisible() {
        return this.baseSparkScanView.previewSizeControlVisible;
    }
    set previewSizeControlVisible(newValue) {
        this.baseSparkScanView.previewSizeControlVisible = newValue;
    }
    get torchButtonVisible() {
        return this.baseSparkScanView.torchButtonVisible;
    }
    set torchButtonVisible(newValue) {
        this.baseSparkScanView.torchButtonVisible = newValue;
    }
    get scanningBehaviorButtonVisible() {
        return this.baseSparkScanView.scanningBehaviorButtonVisible;
    }
    set scanningBehaviorButtonVisible(newValue) {
        this.baseSparkScanView.scanningBehaviorButtonVisible = newValue;
    }
    get handModeButtonVisible() {
        return this.baseSparkScanView.handModeButtonVisible;
    }
    set handModeButtonVisible(newValue) {
        this.baseSparkScanView.handModeButtonVisible = newValue;
    }
    get barcodeCountButtonVisible() {
        return this.baseSparkScanView.barcodeCountButtonVisible;
    }
    set barcodeCountButtonVisible(newValue) {
        this.baseSparkScanView.barcodeCountButtonVisible = newValue;
    }
    /**
     * @deprecated This property was renamed. Use the property `barcodeFindButtonVisible` instead.
     */
    get fastFindButtonVisible() {
        return this.baseSparkScanView.fastFindButtonVisible;
    }
    /**
     * @deprecated This property was renamed. Use the property `barcodeFindButtonVisible` instead.
     */
    set fastFindButtonVisible(newValue) {
        this.baseSparkScanView.fastFindButtonVisible = newValue;
    }
    get barcodeFindButtonVisible() {
        return this.baseSparkScanView.barcodeFindButtonVisible;
    }
    set barcodeFindButtonVisible(newValue) {
        this.baseSparkScanView.barcodeFindButtonVisible = newValue;
    }
    get targetModeButtonVisible() {
        return this.baseSparkScanView.targetModeButtonVisible;
    }
    set targetModeButtonVisible(newValue) {
        this.baseSparkScanView.targetModeButtonVisible = newValue;
    }
    /**
     * @deprecated This property is deprecated as sound mode button will be removed in the future.
     */
    get soundModeButtonVisible() {
        return this.baseSparkScanView.soundModeButtonVisible;
    }
    /**
     * @deprecated This property is deprecated as sound mode button will be removed in the future.
     */
    set soundModeButtonVisible(newValue) {
        this.baseSparkScanView.soundModeButtonVisible = newValue;
    }
    /**
     * @deprecated This property is deprecated as haptic mode button will be removed in the future.
     */
    get hapticModeButtonVisible() {
        return this.baseSparkScanView.hapticModeButtonVisible;
    }
    /**
     * @deprecated This property is deprecated as haptic mode button will be removed in the future.
     */
    set hapticModeButtonVisible(newValue) {
        this.baseSparkScanView.hapticModeButtonVisible = newValue;
    }
    get stopCapturingText() {
        return this.baseSparkScanView.stopCapturingText;
    }
    set stopCapturingText(newValue) {
        this.baseSparkScanView.stopCapturingText = newValue;
    }
    get startCapturingText() {
        return this.baseSparkScanView.startCapturingText;
    }
    set startCapturingText(newValue) {
        this.baseSparkScanView.startCapturingText = newValue;
    }
    get resumeCapturingText() {
        return this.baseSparkScanView.resumeCapturingText;
    }
    set resumeCapturingText(newValue) {
        this.baseSparkScanView.resumeCapturingText = newValue;
    }
    get scanningCapturingText() {
        return this.baseSparkScanView.scanningCapturingText;
    }
    set scanningCapturingText(newValue) {
        this.baseSparkScanView.scanningCapturingText = newValue;
    }
    get captureButtonActiveBackgroundColor() {
        return this.baseSparkScanView.captureButtonActiveBackgroundColor;
    }
    set captureButtonActiveBackgroundColor(newValue) {
        this.baseSparkScanView.captureButtonActiveBackgroundColor = newValue;
    }
    get captureButtonBackgroundColor() {
        return this.baseSparkScanView.captureButtonBackgroundColor;
    }
    set captureButtonBackgroundColor(newValue) {
        this.baseSparkScanView.captureButtonBackgroundColor = newValue;
    }
    get captureButtonTintColor() {
        return this.baseSparkScanView.captureButtonTintColor;
    }
    set captureButtonTintColor(newValue) {
        this.baseSparkScanView.captureButtonTintColor = newValue;
    }
    get toolbarBackgroundColor() {
        return this.baseSparkScanView.toolbarBackgroundColor;
    }
    set toolbarBackgroundColor(newValue) {
        this.baseSparkScanView.toolbarBackgroundColor = newValue;
    }
    get toolbarIconActiveTintColor() {
        return this.baseSparkScanView.toolbarIconActiveTintColor;
    }
    set toolbarIconActiveTintColor(newValue) {
        this.baseSparkScanView.toolbarIconActiveTintColor = newValue;
    }
    get toolbarIconInactiveTintColor() {
        return this.baseSparkScanView.toolbarIconInactiveTintColor;
    }
    set toolbarIconInactiveTintColor(newValue) {
        this.baseSparkScanView.toolbarIconInactiveTintColor = newValue;
    }
    get targetModeHintText() {
        return this.baseSparkScanView.targetModeHintText;
    }
    set targetModeHintText(newValue) {
        this.baseSparkScanView.targetModeHintText = newValue;
    }
    get shouldShowTargetModeHint() {
        return this.baseSparkScanView.shouldShowTargetModeHint;
    }
    set shouldShowTargetModeHint(newValue) {
        this.baseSparkScanView.shouldShowTargetModeHint = newValue;
    }
    get cameraSwitchButtonVisible() {
        return this.baseSparkScanView.cameraSwitchButtonVisible;
    }
    set cameraSwitchButtonVisible(newValue) {
        this.baseSparkScanView.cameraSwitchButtonVisible = newValue;
    }
    emitFeedback(feedback) {
        this.baseSparkScanView.emitFeedback(feedback);
    }
    prepareScanning() {
        this.baseSparkScanView.prepareScanning();
    }
    startScanning() {
        this.baseSparkScanView.startScanning();
    }
    pauseScanning() {
        this.baseSparkScanView.pauseScanning();
    }
    stopScanning() {
        this.baseSparkScanView.stopScanning();
    }
    get feedbackDelegate() {
        return this.baseSparkScanView.feedbackDelegate;
    }
    set feedbackDelegate(delegate) {
        this.baseSparkScanView.feedbackDelegate = delegate;
    }
    showToast(text) {
        return this.baseSparkScanView.showToast(text);
    }
    toJSON() {
        return this.baseSparkScanView.toJSON();
    }
}
// tslint:disable-next-line:variable-name
const RNTSparkScanView = requireNativeComponent('RNTSparkScanView', SparkScanView);

/*! *****************************************************************************
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
/* global Reflect, Promise */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

// tslint:disable:variable-name
const NativeModule = NativeModules.ScanditDataCaptureBarcodeCount;
const EventEmitter = new NativeEventEmitter(NativeModule);
// tslint:enable:variable-name
class BarcodeCountViewProxy {
    view;
    nativeListeners = [];
    static forBarcodeCount(view) {
        const viewProxy = new BarcodeCountViewProxy();
        viewProxy.view = view;
        // We call update because it returns a promise, this guarantees, that by the time
        // we need the deserialized context, it will be set in the native layer.
        view.props.context.update().then(() => {
            viewProxy.create();
        });
        viewProxy.subscribeListeners();
        return viewProxy;
    }
    update() {
        const barcodeCountView = this.view.toJSON();
        const json = barcodeCountView.View;
        return NativeModule.updateView(JSON.stringify(json));
    }
    create() {
        const barcodeCountView = this.view.toJSON();
        const json = JSON.stringify(barcodeCountView);
        const id = findNodeHandle(this.view);
        return NativeModule.createView(id, json);
    }
    setUiListener(listener) {
        if (!!listener) {
            NativeModule.registerBarcodeCountViewUiListener();
        }
        else {
            NativeModule.unregisterBarcodeCountViewUiListener();
        }
    }
    setViewListener(listener) {
        if (!!listener) {
            NativeModule.registerBarcodeCountViewListener();
        }
        else {
            NativeModule.unregisterBarcodeCountViewListener();
        }
    }
    clearHighlights() {
        NativeModule.clearHighlights();
    }
    dispose() {
        this.unsubscribeListeners();
    }
    subscribeListeners() {
        NativeModule.registerBarcodeCountViewListener();
        NativeModule.registerBarcodeCountViewUiListener();
        const singleScanButtonTappedListener = EventEmitter.addListener(BarcodeCountViewEvents.singleScanButtonTapped, () => {
            this.view.uiListener?.didTapSingleScanButton?.(this.view);
        });
        const listButtonTappedListener = EventEmitter.addListener(BarcodeCountViewEvents.listButtonTapped, () => {
            this.view.uiListener?.didTapListButton?.(this.view);
        });
        const exitButtonTappedListener = EventEmitter.addListener(BarcodeCountViewEvents.exitButtonTapped, () => {
            this.view.uiListener?.didTapExitButton?.(this.view);
        });
        const brushForRecognizedBarcodeListener = EventEmitter.addListener(BarcodeCountViewEvents.brushForRecognizedBarcode, (body) => {
            const payload = JSON.parse(body);
            const trackedBarcode = TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            let brush = this.view.recognizedBrush;
            if (this.view.listener && this.view.listener.brushForRecognizedBarcode) {
                brush = this.view.listener.brushForRecognizedBarcode(this.view, trackedBarcode);
            }
            const id = findNodeHandle(this.view);
            NativeModule.finishBrushForRecognizedBarcodeCallback(id, brush ? JSON.stringify(brush.toJSON()) : null, trackedBarcode.identifier);
        });
        const brushForRecognizedBarcodeNotInListListener = EventEmitter.addListener(BarcodeCountViewEvents.brushForRecognizedBarcodeNotInList, (body) => {
            const payload = JSON.parse(body);
            const trackedBarcode = TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            let brush = this.view.notInListBrush;
            if (this.view.listener && this.view.listener.brushForRecognizedBarcodeNotInList) {
                brush = this.view.listener.brushForRecognizedBarcodeNotInList(this.view, trackedBarcode);
            }
            const id = findNodeHandle(this.view);
            NativeModule.finishBrushForRecognizedBarcodeNotInListCallback(id, brush ? JSON.stringify(brush.toJSON()) : null, trackedBarcode.identifier);
        });
        const brushForUnrecognizedBarcodeListener = EventEmitter.addListener(BarcodeCountViewEvents.brushForUnrecognizedBarcode, (body) => {
            const payload = JSON.parse(body);
            const trackedBarcode = TrackedBarcode
                .fromJSON(JSON.parse(payload.trackedBarcode));
            let brush = this.view.unrecognizedBrush;
            if (this.view.listener && this.view.listener.brushForUnrecognizedBarcode) {
                brush = this.view.listener.brushForUnrecognizedBarcode(this.view, trackedBarcode);
            }
            const id = findNodeHandle(this.view);
            NativeModule.finishBrushForUnrecognizedBarcodeCallback(id, brush ? JSON.stringify(brush.toJSON()) : null, trackedBarcode.identifier);
        });
        const filteredBarcodeTappedListener = EventEmitter.addListener(BarcodeCountViewEvents.filteredBarcodeTapped, (body) => {
            const trackedBarcode = TrackedBarcode
                .fromJSON(JSON.parse(JSON.parse(body).trackedBarcode));
            if (this.view.listener && this.view.listener.didTapFilteredBarcode) {
                this.view.listener.didTapFilteredBarcode(this.view, trackedBarcode);
            }
        });
        const recognizedBarcodeNotInListTappedListener = EventEmitter.addListener(BarcodeCountViewEvents.recognizedBarcodeNotInListTapped, (body) => {
            const trackedBarcode = TrackedBarcode
                .fromJSON(JSON.parse(JSON.parse(body).trackedBarcode));
            if (this.view.listener && this.view.listener.didTapRecognizedBarcodeNotInList) {
                this.view.listener.didTapRecognizedBarcodeNotInList(this.view, trackedBarcode);
            }
        });
        const recognizedBarcodeTappedListener = EventEmitter.addListener(BarcodeCountViewEvents.recognizedBarcodeTapped, (body) => {
            const trackedBarcode = TrackedBarcode
                .fromJSON(JSON.parse(JSON.parse(body).trackedBarcode));
            if (this.view.listener && this.view.listener.didTapRecognizedBarcode) {
                this.view.listener.didTapRecognizedBarcode(this.view, trackedBarcode);
            }
        });
        const unrecognizedBarcodeTappedListener = EventEmitter.addListener(BarcodeCountViewEvents.unrecognizedBarcodeTapped, (body) => {
            const trackedBarcode = TrackedBarcode
                .fromJSON(JSON.parse(JSON.parse(body).trackedBarcode));
            if (this.view.listener && this.view.listener.didTapUnrecognizedBarcode) {
                this.view.listener.didTapUnrecognizedBarcode(this.view, trackedBarcode);
            }
        });
        const captureListCompletedListener = EventEmitter.addListener(BarcodeCountViewEvents.captureListCompleted, () => {
            if (this.view.listener && this.view.listener.didCompleteCaptureList) {
                this.view.listener.didCompleteCaptureList(this.view);
            }
        });
        this.nativeListeners.push(singleScanButtonTappedListener);
        this.nativeListeners.push(listButtonTappedListener);
        this.nativeListeners.push(exitButtonTappedListener);
        this.nativeListeners.push(brushForRecognizedBarcodeListener);
        this.nativeListeners.push(brushForRecognizedBarcodeNotInListListener);
        this.nativeListeners.push(brushForUnrecognizedBarcodeListener);
        this.nativeListeners.push(filteredBarcodeTappedListener);
        this.nativeListeners.push(recognizedBarcodeNotInListTappedListener);
        this.nativeListeners.push(recognizedBarcodeTappedListener);
        this.nativeListeners.push(unrecognizedBarcodeTappedListener);
        this.nativeListeners.push(captureListCompletedListener);
    }
    unsubscribeListeners() {
        NativeModule.unregisterBarcodeCountViewListener();
        NativeModule.unregisterBarcodeCountViewUiListener();
        this.nativeListeners.forEach(listener => {
            listener.remove();
        });
        this.nativeListeners = [];
    }
}

var BarcodeCountViewStyle;
(function (BarcodeCountViewStyle) {
    BarcodeCountViewStyle["Icon"] = "icon";
    BarcodeCountViewStyle["Dot"] = "dot";
})(BarcodeCountViewStyle || (BarcodeCountViewStyle = {}));
class BarcodeCountView extends React.Component {
    get uiListener() {
        return this._uiListener;
    }
    set uiListener(listener) {
        this._uiListener = listener;
        this.viewProxy.setUiListener(listener);
    }
    get listener() {
        return this._listener;
    }
    set listener(listener) {
        this._listener = listener;
        this.viewProxy.setViewListener(listener);
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
    ;
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
    static get defaultRecognizedBrush() {
        return BarcodeCountView.barcodeCountDefaults.BarcodeCountView.defaultRecognizedBrush;
    }
    static get defaultUnrecognizedBrush() {
        return BarcodeCountView.barcodeCountDefaults.BarcodeCountView.defaultUnrecognizedBrush;
    }
    static get defaultNotInListBrush() {
        return BarcodeCountView.barcodeCountDefaults.BarcodeCountView.defaultNotInListBrush;
    }
    get recognizedBrush() {
        return this._recognizedBrush;
    }
    ;
    set recognizedBrush(newValue) {
        this._recognizedBrush = newValue;
        this.updateNative();
    }
    get unrecognizedBrush() {
        return this._unrecognizedBrush;
    }
    set unrecognizedBrush(newValue) {
        this._unrecognizedBrush = newValue;
        this.updateNative();
    }
    get notInListBrush() {
        return this._notInListBrush;
    }
    set notInListBrush(newValue) {
        this._notInListBrush = newValue;
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
        return this.props.viewStyle;
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
        this.clearHighlightsButtonContentDescription = newValue;
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
    get textForUnrecognizedBarcodesDetectedHint() {
        return this._textForUnrecognizedBarcodesDetectedHint;
    }
    set textForUnrecognizedBarcodesDetectedHint(newValue) {
        this._textForUnrecognizedBarcodesDetectedHint = newValue;
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
    static get barcodeCountDefaults() {
        return getBarcodeCountDefaults();
    }
    viewProxy;
    _uiListener = null;
    _listener = null;
    _shouldDisableModeOnExitButtonTapped = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldDisableModeOnExitButtonTapped;
    _shouldShowUserGuidanceView = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowUserGuidanceView;
    _shouldShowListButton = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowListButton;
    _shouldShowExitButton = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowExitButton;
    _shouldShowShutterButton = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowShutterButton;
    _shouldShowHints = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowHints;
    _shouldShowClearHighlightsButton = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowClearHighlightsButton;
    _shouldShowSingleScanButton = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowSingleScanButton;
    _shouldShowFloatingShutterButton = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowFloatingShutterButton;
    _shouldShowToolbar = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowToolbar;
    _shouldShowScanAreaGuides = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowScanAreaGuides;
    _recognizedBrush = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.defaultRecognizedBrush;
    _unrecognizedBrush = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.defaultUnrecognizedBrush;
    _notInListBrush = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.defaultNotInListBrush;
    _filterSettings = null;
    _listButtonAccessibilityHint = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.listButtonAccessibilityHint;
    _listButtonAccessibilityLabel = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.listButtonAccessibilityLabel;
    _listButtonContentDescription = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.listButtonContentDescription;
    _exitButtonAccessibilityHint = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.exitButtonAccessibilityHint;
    _exitButtonAccessibilityLabel = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.exitButtonAccessibilityLabel;
    _exitButtonContentDescription = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.exitButtonContentDescription;
    _shutterButtonAccessibilityHint = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shutterButtonAccessibilityHint;
    _shutterButtonAccessibilityLabel = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shutterButtonAccessibilityLabel;
    _shutterButtonContentDescription = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shutterButtonContentDescription;
    _floatingShutterButtonAccessibilityHint = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.floatingShutterButtonAccessibilityHint;
    _floatingShutterButtonAccessibilityLabel = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.floatingShutterButtonAccessibilityLabel;
    _floatingShutterButtonContentDescription = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.floatingShutterButtonContentDescription;
    _clearHighlightsButtonAccessibilityHint = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.clearHighlightsButtonAccessibilityHint;
    _clearHighlightsButtonAccessibilityLabel = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.clearHighlightsButtonAccessibilityLabel;
    _clearHighlightsButtonContentDescription = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.clearHighlightsButtonContentDescription;
    _singleScanButtonAccessibilityHint = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.singleScanButtonAccessibilityHint;
    _singleScanButtonAccessibilityLabel = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.singleScanButtonAccessibilityLabel;
    _singleScanButtonContentDescription = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.singleScanButtonContentDescription;
    _clearHighlightsButtonText = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.clearHighlightsButtonText;
    _exitButtonText = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.exitButtonText;
    _textForTapShutterToScanHint = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForTapShutterToScanHint;
    _textForScanningHint = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForScanningHint;
    _textForMoveCloserAndRescanHint = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForMoveCloserAndRescanHint;
    _textForMoveFurtherAndRescanHint = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForMoveFurtherAndRescanHint;
    _shouldShowListProgressBar = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowListProgressBar;
    _textForUnrecognizedBarcodesDetectedHint = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForUnrecognizedBarcodesDetectedHint;
    _toolbarSettings = null;
    _shouldShowTorchControl = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowTorchControl;
    _torchControlPosition = BarcodeCountView.barcodeCountDefaults.BarcodeCountView.torchControlPosition;
    constructor(props) {
        super(props);
        this.viewProxy = BarcodeCountViewProxy.forBarcodeCount(this);
    }
    componentDidMount() {
        if (Platform.OS === 'android') {
            this.createFragment();
        }
    }
    componentWillUnmount() {
        this.viewProxy.dispose();
        this.props.barcodeCount.unsubscribeNativeListeners();
    }
    clearHighlights() {
        return this.viewProxy.clearHighlights();
    }
    setToolbarSettings(settings) {
        this._toolbarSettings = settings;
        this.updateNative();
    }
    updateNative() {
        return this.viewProxy.update();
    }
    render() {
        return React.createElement(RNTBarcodeCountView, { ...this.props });
    }
    createFragment() {
        const viewId = findNodeHandle(this);
        UIManager.dispatchViewManagerCommand(viewId, 
        // @ts-ignore - It complains that RNTBarcodeCountView doesn't exist
        UIManager.RNTBarcodeCountView.Commands.create.toString(), [viewId, JSON.stringify(this.toJSON())]);
    }
    toJSON() {
        const json = {
            View: {
                style: this.props.viewStyle,
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
                toolbarSettings: this._toolbarSettings?.toJSON(),
                shouldShowTorchControl: this._shouldShowTorchControl,
                torchControlPosition: this._torchControlPosition,
            },
            BarcodeCount: this.props.barcodeCount.toJSON()
        };
        if (this.listButtonAccessibilityHint !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.listButtonAccessibilityHint) {
            json.View.listButtonAccessibilityHint = this.listButtonAccessibilityHint; // iOS Only
        }
        if (this.listButtonAccessibilityLabel !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.listButtonAccessibilityLabel) {
            json.View.listButtonAccessibilityHint = this.listButtonAccessibilityLabel; // iOS Only
        }
        if (this.listButtonContentDescription !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.listButtonContentDescription) {
            json.View.listButtonContentDescription = this.listButtonContentDescription; // Android Only
        }
        if (this.exitButtonAccessibilityHint !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.exitButtonAccessibilityHint) {
            json.View.exitButtonAccessibilityHint = this.exitButtonAccessibilityHint; // iOS Only
        }
        if (this.exitButtonAccessibilityLabel !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.exitButtonAccessibilityLabel) {
            json.View.exitButtonAccessibilityLabel = this.exitButtonAccessibilityLabel; // iOS Only
        }
        if (this.exitButtonContentDescription !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.exitButtonContentDescription) {
            json.View.exitButtonContentDescription = this.exitButtonContentDescription; // Android Only
        }
        if (this.shutterButtonAccessibilityHint !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shutterButtonAccessibilityHint) {
            json.View.shutterButtonAccessibilityHint = this.shutterButtonAccessibilityHint; // iOS Only
        }
        if (this.shutterButtonAccessibilityLabel !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shutterButtonAccessibilityLabel) {
            json.View.shutterButtonAccessibilityLabel = this.shutterButtonAccessibilityLabel; // iOS Only
        }
        if (this.shutterButtonContentDescription !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shutterButtonContentDescription) {
            json.View.shutterButtonContentDescription = this.shutterButtonContentDescription; // Android Only
        }
        if (this.floatingShutterButtonAccessibilityHint !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.floatingShutterButtonAccessibilityHint) {
            json.View.floatingShutterButtonAccessibilityHint = this.floatingShutterButtonAccessibilityHint; // iOS Only
        }
        if (this.floatingShutterButtonAccessibilityLabel !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.floatingShutterButtonAccessibilityLabel) {
            json.View.floatingShutterButtonAccessibilityLabel = this.floatingShutterButtonAccessibilityLabel; // iOS Only
        }
        if (this.floatingShutterButtonContentDescription !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.floatingShutterButtonContentDescription) {
            json.View.floatingShutterButtonContentDescription = this.floatingShutterButtonContentDescription; // Android Only
        }
        if (this.clearHighlightsButtonAccessibilityHint !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.clearHighlightsButtonAccessibilityHint) {
            json.View.clearHighlightsButtonAccessibilityHint = this.clearHighlightsButtonAccessibilityHint; // iOS Only
        }
        if (this.clearHighlightsButtonAccessibilityLabel !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.clearHighlightsButtonAccessibilityLabel) {
            json.View.clearHighlightsButtonAccessibilityLabel = this.clearHighlightsButtonAccessibilityLabel; // iOS Only
        }
        if (this.clearHighlightsButtonContentDescription !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.clearHighlightsButtonContentDescription) {
            json.View.clearHighlightsButtonContentDescription = this.clearHighlightsButtonContentDescription; // Android Only
        }
        if (this.singleScanButtonAccessibilityHint !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.singleScanButtonAccessibilityHint) {
            json.View.singleScanButtonAccessibilityHint = this.singleScanButtonAccessibilityHint; // iOS Only
        }
        if (this.singleScanButtonAccessibilityLabel !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.singleScanButtonAccessibilityLabel) {
            json.View.singleScanButtonAccessibilityLabel = this.singleScanButtonAccessibilityLabel; // iOS Only
        }
        if (this.singleScanButtonContentDescription !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.singleScanButtonContentDescription) {
            json.View.singleScanButtonContentDescription = this.singleScanButtonContentDescription; // Android Only
        }
        if (this.clearHighlightsButtonText !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.clearHighlightsButtonText) {
            json.View.clearHighlightsButtonText = this.clearHighlightsButtonText;
        }
        if (this.exitButtonText !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.exitButtonText) {
            json.View.exitButtonText = this.exitButtonText;
        }
        if (this.textForTapShutterToScanHint !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForTapShutterToScanHint) {
            json.View.textForTapShutterToScanHint = this.textForTapShutterToScanHint;
        }
        if (this.textForScanningHint !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForScanningHint) {
            json.View.textForScanningHint = this.textForScanningHint;
        }
        if (this.textForMoveCloserAndRescanHint !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForMoveCloserAndRescanHint) {
            json.View.textForMoveCloserAndRescanHint = this.textForMoveCloserAndRescanHint;
        }
        if (this.textForMoveFurtherAndRescanHint !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForMoveFurtherAndRescanHint) {
            json.View.textForMoveFurtherAndRescanHint = this.textForMoveFurtherAndRescanHint;
        }
        if (this.shouldShowListProgressBar !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.shouldShowListProgressBar) {
            json.View.shouldShowListProgressBar = this.shouldShowListProgressBar;
        }
        if (this.textForUnrecognizedBarcodesDetectedHint !== BarcodeCountView.barcodeCountDefaults.BarcodeCountView.textForUnrecognizedBarcodesDetectedHint) {
            json.View.textForUnrecognizedBarcodesDetectedHint = this.textForUnrecognizedBarcodesDetectedHint;
        }
        if (this.recognizedBrush) {
            json.View.recognizedBrush = this.recognizedBrush?.toJSON();
        }
        if (this.unrecognizedBrush) {
            json.View.unrecognizedBrush = this.unrecognizedBrush?.toJSON();
        }
        if (this.notInListBrush) {
            json.View.notInListBrush = this.notInListBrush?.toJSON();
        }
        if (this.filterSettings) {
            json.View.filterSettings = this.filterSettings?.toJSON();
        }
        return json;
    }
}
__decorate([
    ignoreFromSerialization
], BarcodeCountView, "barcodeCountDefaults", null);
// tslint:disable-next-line:variable-name
const RNTBarcodeCountView = requireNativeComponent('RNTBarcodeCountView', BarcodeCountView);

class BarcodePickView extends React.Component {
    baseBarcodePickView;
    constructor(props) {
        super(props);
        this.baseBarcodePickView = new BaseBarcodePickView({
            context: props.context,
            barcodePick: props.barcodePick,
            settings: props.settings,
            cameraSettings: props.cameraSettings
        });
        this.baseBarcodePickView.initialize(this);
    }
    get uiListener() {
        return this.baseBarcodePickView.uiListener;
    }
    set uiListener(value) {
        this.baseBarcodePickView.uiListener = value;
    }
    componentDidMount() {
        if (Platform.OS === 'android') {
            this.createFragment();
        }
    }
    componentWillUnmount() {
        this.baseBarcodePickView.dispose();
    }
    start() {
        this.baseBarcodePickView.start();
    }
    stop() {
        this.baseBarcodePickView.stop();
    }
    freeze() {
        this.baseBarcodePickView.freeze();
    }
    pause() {
        // tslint:disable-next-line:no-console
        console.warn('BarcodePickView.pause is deprecated. There is no need to manually call pause.');
    }
    resume() {
        // tslint:disable-next-line:no-console
        console.warn('BarcodePickView.resume is deprecated. There is no need to manually call resume.');
    }
    addListener(listener) {
        this.baseBarcodePickView.addListener(listener);
    }
    removeListener(listener) {
        this.baseBarcodePickView.removeListener(listener);
    }
    addActionListener(listener) {
        this.baseBarcodePickView.addActionListener(listener);
    }
    removeActionListener(listener) {
        this.baseBarcodePickView.removeActionListener(listener);
    }
    render() {
        return React.createElement(RNTBarcodePickView, { ...this.props });
    }
    release() {
        this.baseBarcodePickView.dispose();
    }
    createFragment() {
        const viewId = findNodeHandle(this);
        UIManager.dispatchViewManagerCommand(viewId, 
        // @ts-ignore - It complains that RNTBarcodeCountView doesn't exist
        UIManager.RNTBarcodePickView.Commands.create.toString(), [viewId, JSON.stringify(this.toJSON())]);
    }
    toJSON() {
        return this.baseBarcodePickView.toJSON();
    }
}
__decorate([
    ignoreFromSerialization
], BarcodePickView.prototype, "baseBarcodePickView", void 0);
// tslint:disable-next-line:variable-name
const RNTBarcodePickView = requireNativeComponent('RNTBarcodePickView', BarcodePickView);

class BarcodeFindView extends React.Component {
    baseBarcodeFindView;
    constructor(props) {
        super(props);
        this.baseBarcodeFindView = new BaseBarcodeFindView(props.context, props.barcodeFind, props.viewSettings, props.cameraSettings);
        this.baseBarcodeFindView.initialize(this);
    }
    get barcodeFindViewUiListener() {
        return this.baseBarcodeFindView.barcodeFindViewUiListener;
    }
    set barcodeFindViewUiListener(value) {
        this.baseBarcodeFindView.barcodeFindViewUiListener = value;
    }
    get shouldShowUserGuidanceView() {
        return this.baseBarcodeFindView.shouldShowUserGuidanceView;
    }
    set shouldShowUserGuidanceView(value) {
        this.baseBarcodeFindView.shouldShowUserGuidanceView = value;
    }
    get shouldShowHints() {
        return this.baseBarcodeFindView.shouldShowHints;
    }
    set shouldShowHints(value) {
        this.baseBarcodeFindView.shouldShowHints = value;
    }
    get shouldShowCarousel() {
        return this.baseBarcodeFindView.shouldShowCarousel;
    }
    set shouldShowCarousel(value) {
        this.baseBarcodeFindView.shouldShowCarousel = value;
    }
    get shouldShowPauseButton() {
        return this.baseBarcodeFindView.shouldShowPauseButton;
    }
    set shouldShowPauseButton(value) {
        this.baseBarcodeFindView.shouldShowPauseButton = value;
    }
    get shouldShowFinishButton() {
        return this.baseBarcodeFindView.shouldShowFinishButton;
    }
    set shouldShowFinishButton(value) {
        this.baseBarcodeFindView.shouldShowFinishButton = value;
    }
    get shouldShowProgressBar() {
        return this.baseBarcodeFindView.shouldShowProgressBar;
    }
    set shouldShowProgressBar(value) {
        this.baseBarcodeFindView.shouldShowProgressBar = value;
    }
    get shouldShowTorchControl() {
        return this.baseBarcodeFindView.shouldShowTorchControl;
    }
    set shouldShowTorchControl(value) {
        this.baseBarcodeFindView.shouldShowTorchControl = value;
    }
    get torchControlPosition() {
        return this.baseBarcodeFindView.torchControlPosition;
    }
    set torchControlPosition(value) {
        this.baseBarcodeFindView.torchControlPosition = value;
    }
    get textForCollapseCardsButton() {
        return this.baseBarcodeFindView.textForCollapseCardsButton;
    }
    set textForCollapseCardsButton(value) {
        this.baseBarcodeFindView.textForCollapseCardsButton = value;
    }
    get textForAllItemsFoundSuccessfullyHint() {
        return this.baseBarcodeFindView.textForAllItemsFoundSuccessfullyHint;
    }
    set textForAllItemsFoundSuccessfullyHint(value) {
        this.baseBarcodeFindView.textForAllItemsFoundSuccessfullyHint = value;
    }
    get textForItemListUpdatedHint() {
        return this.baseBarcodeFindView.textForItemListUpdatedHint;
    }
    set textForItemListUpdatedHint(value) {
        this.baseBarcodeFindView.textForItemListUpdatedHint = value;
    }
    get textForItemListUpdatedWhenPausedHint() {
        return this.baseBarcodeFindView.textForItemListUpdatedWhenPausedHint;
    }
    set textForItemListUpdatedWhenPausedHint(value) {
        this.baseBarcodeFindView.textForItemListUpdatedWhenPausedHint = value;
    }
    get textForPointAtBarcodesToSearchHint() {
        return this.baseBarcodeFindView.textForPointAtBarcodesToSearchHint;
    }
    set textForPointAtBarcodesToSearchHint(value) {
        this.baseBarcodeFindView.textForPointAtBarcodesToSearchHint = value;
    }
    get textForMoveCloserToBarcodesHint() {
        return this.baseBarcodeFindView.textForMoveCloserToBarcodesHint;
    }
    set textForMoveCloserToBarcodesHint(value) {
        this.baseBarcodeFindView.textForMoveCloserToBarcodesHint = value;
    }
    get textForTapShutterToPauseScreenHint() {
        return this.baseBarcodeFindView.textForTapShutterToPauseScreenHint;
    }
    set textForTapShutterToPauseScreenHint(value) {
        this.baseBarcodeFindView.textForTapShutterToPauseScreenHint = value;
    }
    get textForTapShutterToResumeSearchHint() {
        return this.baseBarcodeFindView.textForTapShutterToResumeSearchHint;
    }
    set textForTapShutterToResumeSearchHint(value) {
        this.baseBarcodeFindView.textForTapShutterToResumeSearchHint = value;
    }
    stopSearching() {
        return this.baseBarcodeFindView.stopSearching();
    }
    startSearching() {
        return this.baseBarcodeFindView.startSearching();
    }
    pauseSearching() {
        return this.baseBarcodeFindView.pauseSearching();
    }
    render() {
        return React.createElement(RNTBarcodeFindView, { ...this.props });
    }
    componentWillUnmount() {
        this.baseBarcodeFindView.dispose();
    }
    componentDidMount() {
        if (Platform.OS === 'android') {
            this.createFragment();
        }
    }
    createFragment() {
        const viewId = findNodeHandle(this);
        UIManager.dispatchViewManagerCommand(viewId, 
        // @ts-ignore - It complains that RNTBarcodeFindView doesn't exist
        UIManager.RNTBarcodeFindView.Commands.create.toString(), [viewId, JSON.stringify(this.toJSON())]);
    }
    toJSON() {
        return this.baseBarcodeFindView.toJSON();
    }
}
// tslint:disable-next-line:variable-name
const RNTBarcodeFindView = requireNativeComponent('RNTBarcodeFindView', BarcodeFindView);

initBarcodeDefaults();
initBarcodeProxy();

export { BarcodeCountView, BarcodeCountViewStyle, BarcodeFindView, BarcodePickView, BarcodeTrackingAdvancedOverlay, BarcodeTrackingAdvancedOverlayView, BarcodeTrackingView, SparkScanView };
