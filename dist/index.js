import { FactoryMaker, DataCaptureContextFeatures, ignoreFromSerialization, BaseNativeProxy } from 'scandit-react-native-datacapture-core/dist/core';
import { NativeModules, NativeEventEmitter, AppState, View, Platform, findNodeHandle, UIManager, requireNativeComponent } from 'react-native';
import { BarcodeBatch as BarcodeBatch$1, BarcodeCapture as BarcodeCapture$1, BaseBarcodeCheckView, BarcodeSelection as BarcodeSelection$1, BarcodeSelectionSettings, BaseSparkScanView, BaseBarcodeCountView, BaseBarcodePickView, BaseBarcodeFindView, loadBarcodeDefaults, loadBarcodeCaptureDefaults, loadBarcodeCheckDefaults, loadBarcodeBatchDefaults, loadBarcodeSelectionDefaults, loadBarcodeCountDefaults, loadBarcodePickDefaults, loadBarcodeFindDefaults, loadSparkScanDefaults, BaseBarcodeBatchAdvancedOverlay, BarcodeBatchSettings, BarcodeBatchBasicOverlay, BarcodeBatchBasicOverlayStyle, BarcodeCaptureSettings, BarcodeCaptureOverlay, BarcodeCaptureOverlayStyle, BarcodeSelectionBasicOverlay, BarcodeSelectionBasicOverlayStyle, BarcodeCaptureListenerEvents, BarcodeSelectionListenerEvents, BarcodeSelectionBrushProviderEvents, BarcodeCountListenerEvents, BarcodeBatchListenerEvents, BarcodeBatchBasicOverlayListenerEvents, BarcodeBatchAdvancedOverlayListenerEvents, SparkScanListenerEvents, BarcodePickEvents, BarcodePickViewListenerEvents, BarcodePickViewUiListenerEvents, BarcodeFindListenerEvents, BarcodeFindViewEvents, BarcodePickListenerEvents, SparkScanViewEvents, SparkScanFeedbackDelegateEvents, BarcodeCountViewEvents, BarcodeCheckListenerEvents, BarcodeCheckViewEvents } from './barcode.js';
export { ArucoDictionary, ArucoDictionaryPreset, ArucoMarker, AztecBarcodeGeneratorBuilder, Barcode, BarcodeBatch, BarcodeBatchBasicOverlay, BarcodeBatchBasicOverlayStyle, BarcodeBatchScenario, BarcodeBatchSession, BarcodeBatchSettings, BarcodeCapture, BarcodeCaptureFeedback, BarcodeCaptureOverlay, BarcodeCaptureOverlayStyle, BarcodeCaptureSession, BarcodeCaptureSettings, BarcodeCheck, BarcodeCheckAnnotationTrigger, BarcodeCheckCircleHighlight, BarcodeCheckCircleHighlightPreset, BarcodeCheckFeedback, BarcodeCheckInfoAnnotation, BarcodeCheckInfoAnnotationAnchor, BarcodeCheckInfoAnnotationBodyComponent, BarcodeCheckInfoAnnotationFooter, BarcodeCheckInfoAnnotationHeader, BarcodeCheckInfoAnnotationWidthPreset, BarcodeCheckPopoverAnnotation, BarcodeCheckPopoverAnnotationButton, BarcodeCheckRectangleHighlight, BarcodeCheckSession, BarcodeCheckSettings, BarcodeCheckStatusIconAnnotation, BarcodeCheckViewSettings, BarcodeCount, BarcodeCountCaptureList, BarcodeCountCaptureListSession, BarcodeCountFeedback, BarcodeCountNotInListActionSettings, BarcodeCountSession, BarcodeCountSettings, BarcodeCountToolbarSettings, BarcodeFilterHighlightSettingsBrush, BarcodeFilterHighlightType, BarcodeFilterSettings, BarcodeFind, BarcodeFindFeedback, BarcodeFindItem, BarcodeFindItemContent, BarcodeFindItemSearchOptions, BarcodeFindSettings, BarcodeFindViewSettings, BarcodeGenerator, BarcodeGeneratorBuilder, BarcodePick, BarcodePickActionCallback, BarcodePickAsyncMapperProductProvider, BarcodePickIconStyle, BarcodePickProduct, BarcodePickProductProviderCallback, BarcodePickProductProviderCallbackItem, BarcodePickScanningSession, BarcodePickSettings, BarcodePickState, BarcodePickStatusIconSettings, BarcodePickViewListenerEvents, BarcodePickViewSettings, BarcodePickViewUiListenerEvents, BarcodeSelection, BarcodeSelectionAimerSelection, BarcodeSelectionAutoSelectionStrategy, BarcodeSelectionBasicOverlay, BarcodeSelectionBasicOverlayStyle, BarcodeSelectionFeedback, BarcodeSelectionFreezeBehavior, BarcodeSelectionManualSelectionStrategy, BarcodeSelectionSession, BarcodeSelectionSettings, BarcodeSelectionTapBehavior, BarcodeSelectionTapSelection, BarcodeSpatialGrid, BatterySavingMode, Checksum, Code128BarcodeGeneratorBuilder, Code39BarcodeGeneratorBuilder, CompositeFlag, CompositeType, DataMatrixBarcodeGeneratorBuilder, Dot, DotWithIcons, Ean13BarcodeGeneratorBuilder, Ean13UpcaClassification, EncodingRange, InterleavedTwoOfFiveBarcodeGeneratorBuilder, LocalizedOnlyBarcode, QrCodeBarcodeGeneratorBuilder, QrCodeErrorCorrectionLevel, Range, Rectangular, RectangularWithIcons, SparkScan, SparkScanBarcodeErrorFeedback, SparkScanBarcodeFeedback, SparkScanBarcodeSuccessFeedback, SparkScanMiniPreviewSize, SparkScanPreviewBehavior, SparkScanScanningBehavior, SparkScanScanningModeDefault, SparkScanScanningModeTarget, SparkScanSession, SparkScanSettings, SparkScanToastSettings, SparkScanViewSettings, SparkScanViewState, StructuredAppendData, Symbology, SymbologyDescription, SymbologySettings, TargetBarcode, TrackedBarcode, UpcaBarcodeGeneratorBuilder } from './barcode.js';
import { FrameSourceState, Anchor, PointWithUnit, NumberWithUnit, MeasureUnit, Camera, CameraPosition, DataCaptureView, initCoreProxy, initCoreDefaults } from 'scandit-react-native-datacapture-core';
import React, { forwardRef, useRef, useState, useEffect, useImperativeHandle } from 'react';

// tslint:disable:variable-name
const NativeModule$j = NativeModules.ScanditDataCaptureBarcodeCapture;
const RNEventEmitter$e = new NativeEventEmitter(NativeModule$j);
// tslint:enable:variable-name
class NativeBarcodeCaptureListenerProxy {
    nativeListeners = [];
    eventEmitter;
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    isModeEnabled = () => false;
    resetSession() {
        return NativeModule$j.resetSession();
    }
    registerListenerForEvents() {
        NativeModule$j.registerListenerForEvents();
    }
    setModeEnabledState(enabled) {
        NativeModule$j.setModeEnabledState(enabled);
    }
    unregisterListenerForEvents() {
        NativeModule$j.unregisterListenerForEvents();
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
    }
    subscribeDidUpdateSessionListener() {
        const didUpdateSessionListener = RNEventEmitter$e.addListener(BarcodeCaptureListenerEvents.didUpdateSession, (event) => {
            this.eventEmitter.emit(BarcodeCaptureListenerEvents.didUpdateSession, event.data);
        });
        this.nativeListeners.push(didUpdateSessionListener);
    }
    subscribeDidScanListener() {
        const didScanListener = RNEventEmitter$e.addListener(BarcodeCaptureListenerEvents.didScan, (event) => {
            this.eventEmitter.emit(BarcodeCaptureListenerEvents.didScan, event.data);
        });
        this.nativeListeners.push(didScanListener);
    }
    finishDidUpdateSessionCallback(isFinished) {
        NativeModule$j.finishDidUpdateSessionCallback(isFinished);
    }
    finishDidScanCallback(isFinished) {
        NativeModule$j.finishDidScanCallback(isFinished);
    }
    updateBarcodeCaptureMode(modeJson) {
        return NativeModule$j.updateBarcodeCaptureMode(modeJson);
    }
    applyBarcodeCaptureModeSettings(newSettingsJson) {
        return NativeModule$j.applyBarcodeCaptureModeSettings(newSettingsJson);
    }
    updateBarcodeCaptureOverlay(overlayJson) {
        return NativeModule$j.updateBarcodeCaptureOverlay(overlayJson);
    }
}

// tslint:disable:variable-name
const NativeModule$i = NativeModules.ScanditDataCaptureBarcodeSelection;
const RNEventEmitter$d = new NativeEventEmitter(NativeModule$i);
// tslint:enable:variable-name
class NativeBarcodeSelectionListenerProxy {
    eventEmitter;
    nativeListeners = [];
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    isModeEnabled = () => false;
    getCount(selectionIdentifier) {
        return NativeModule$i.getCount(selectionIdentifier);
    }
    resetSession() {
        return NativeModule$i.resetSession();
    }
    registerListenerForEvents() {
        NativeModule$i.registerListenerForEvents();
    }
    subscribeDidUpdateSelectionListener() {
        const didUpdateSelectionListener = RNEventEmitter$d.addListener(BarcodeSelectionListenerEvents.didUpdateSelection, (event) => {
            this.eventEmitter.emit(BarcodeSelectionListenerEvents.didUpdateSelection, event.data);
        });
        this.nativeListeners.push(didUpdateSelectionListener);
    }
    subscribeDidUpdateSession() {
        const didUpdateSession = RNEventEmitter$d.addListener(BarcodeSelectionListenerEvents.didUpdateSession, (event) => {
            this.eventEmitter.emit(BarcodeSelectionListenerEvents.didUpdateSession, event.data);
        });
        this.nativeListeners.push(didUpdateSession);
    }
    finishDidUpdateSelectionCallback(isEnabled) {
        NativeModule$i.finishDidUpdateSelectionCallback(isEnabled);
    }
    finishDidUpdateSessionCallback(isEnabled) {
        NativeModule$i.finishDidUpdateSessionCallback(isEnabled);
    }
    unregisterListenerForEvents() {
        NativeModule$i.unregisterListenerForEvents();
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
    }
}

// tslint:disable:variable-name
const NativeModule$h = NativeModules.ScanditDataCaptureBarcodeSelection;
const RNEventEmitter$c = new NativeEventEmitter(NativeModule$h);
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
        return NativeModule$h.setTextForAimToSelectAutoHint(text);
    }
    removeAimedBarcodeBrushProvider() {
        this.brushForAimedBarcodeProvider?.remove();
        this.brushForAimedBarcodeProvider = null;
        return NativeModule$h.removeAimedBarcodeBrushProvider();
    }
    setAimedBarcodeBrushProvider() {
        return NativeModule$h.setAimedBarcodeBrushProvider();
    }
    finishBrushForAimedBarcodeCallback(brushStr, selectionIdentifier) {
        NativeModule$h.finishBrushForAimedBarcodeCallback(brushStr, selectionIdentifier);
    }
    subscribeBrushForAimedBarcode() {
        this.brushForAimedBarcodeProvider = RNEventEmitter$c.addListener(BarcodeSelectionBrushProviderEvents.brushForAimedBarcode, (event) => {
            this.eventEmitter.emit(BarcodeSelectionBrushProviderEvents.brushForAimedBarcode, event.data);
        });
    }
    removeTrackedBarcodeBrushProvider() {
        this.brushForTrackedBarcodeProvider?.remove();
        this.brushForTrackedBarcodeProvider = null;
        return NativeModule$h.removeTrackedBarcodeBrushProvider();
    }
    setTrackedBarcodeBrushProvider() {
        return NativeModule$h.setTrackedBarcodeBrushProvider();
    }
    finishBrushForTrackedBarcodeCallback(brushStr, selectionIdentifier) {
        NativeModule$h.finishBrushForTrackedBarcodeCallback(brushStr, selectionIdentifier);
    }
    updateBarcodeSelectionBasicOverlay(overlayJson) {
        return NativeModule$h.updateBarcodeSelectionBasicOverlay(overlayJson);
    }
    subscribeBrushForTrackedBarcode() {
        this.brushForTrackedBarcodeProvider = RNEventEmitter$c.addListener(BarcodeSelectionBrushProviderEvents.brushForTrackedBarcode, (event) => {
            this.eventEmitter.emit(BarcodeSelectionBrushProviderEvents.brushForTrackedBarcode, event.data);
        });
    }
}

// tslint:disable:variable-name
const NativeModule$g = NativeModules.ScanditDataCaptureBarcodeSelection;
new NativeEventEmitter(NativeModule$g);
// tslint:enable:variable-name
class NativeBarcodeSelectionProxy {
    unfreezeCamera() {
        return NativeModule$g.unfreezeCamera();
    }
    resetMode() {
        return NativeModule$g.resetMode();
    }
    selectAimedBarcode() {
        return NativeModule$g.selectAimedBarcode();
    }
    unselectBarcodes(barcodesStr) {
        return NativeModule$g.unselectBarcodes(barcodesStr);
    }
    setSelectBarcodeEnabled(barcodeStr, enabled) {
        return NativeModule$g.setSelectBarcodeEnabled(barcodeStr, enabled);
    }
    increaseCountForBarcodes(barcodesStr) {
        return NativeModule$g.increaseCountForBarcodes(barcodesStr);
    }
    setModeEnabledState(enabled) {
        NativeModule$g.setModeEnabledState(enabled);
    }
    updateBarcodeSelectionMode(modeJson) {
        return NativeModule$g.updateBarcodeSelectionMode(modeJson);
    }
    applyBarcodeSelectionModeSettings(newSettingsJson) {
        return NativeModule$g.applyBarcodeSelectionModeSettings(newSettingsJson);
    }
    updateFeedback(feedbackJson) {
        return NativeModule$g.updateBarcodeSelectionFeedback(feedbackJson);
    }
}

// tslint:disable:variable-name
const NativeModule$f = NativeModules.ScanditDataCaptureBarcodeCount;
const RNEventEmitter$b = new NativeEventEmitter(NativeModule$f);
// tslint:enable:variable-name
class NativeBarcodeCountListenerProxy {
    nativeListeners = [];
    eventEmitter;
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    isModeEnabled = () => false;
    resetBarcodeCount() {
        return NativeModule$f.resetBarcodeCount();
    }
    updateMode(barcodeCountJson) {
        return NativeModule$f.updateMode(barcodeCountJson);
    }
    updateFeedback(feedbackJson) {
        NativeModule$f.updateBarcodeCountFeedback(feedbackJson);
    }
    registerBarcodeCountListener() {
        return NativeModule$f.registerBarcodeCountListener();
    }
    unregisterBarcodeCountListener() {
        const p = NativeModule$f.unregisterBarcodeCountListener();
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
        return p;
    }
    subscribeDidScan() {
        const didScanListener = RNEventEmitter$b.addListener(BarcodeCountListenerEvents.didScan, (event) => {
            this.eventEmitter.emit(BarcodeCountListenerEvents.didScan, event.data);
        });
        this.nativeListeners.push(didScanListener);
    }
    subscribeDidListSessionUpdate() {
        const didUpdateSessionListener = RNEventEmitter$b.addListener(BarcodeCountListenerEvents.didListSessionUpdate, (event) => {
            this.eventEmitter.emit(BarcodeCountListenerEvents.didListSessionUpdate, event.data);
        });
        this.nativeListeners.push(didUpdateSessionListener);
    }
    finishOnScan() {
        NativeModule$f.finishOnScan();
    }
    startScanningPhase() {
        NativeModule$f.startScanningPhase();
    }
    endScanningPhase() {
        NativeModule$f.endScanningPhase();
    }
    setBarcodeCountCaptureList(captureListStr) {
        NativeModule$f.setBarcodeCountCaptureList(captureListStr);
    }
    setModeEnabledState(enabled) {
        NativeModule$f.setModeEnabledState(enabled);
    }
}

// tslint:disable:variable-name
const NativeModule$e = NativeModules.ScanditDataCaptureBarcodeCount;
// tslint:enable:variable-name
class NativeBarcodeCountSessionProxy {
    resetSession() {
        return NativeModule$e.resetSession();
    }
    getSpatialMap() {
        return NativeModule$e.getSpatialMap();
    }
    getSpatialMapWithHints(expectedNumberOfRows, expectedNumberOfColumns) {
        return NativeModule$e.getSpatialMapWithHints(expectedNumberOfRows, expectedNumberOfColumns);
    }
}

// tslint:disable:variable-name
const NativeModule$d = NativeModules.ScanditDataCaptureBarcodeBatch;
const RNEventEmitter$a = new NativeEventEmitter(NativeModule$d);
// tslint:enable:variable-name
class NativeBarcodeBatchListenerProxy {
    nativeListeners = [];
    eventEmitter;
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    isModeEnabled = () => false;
    resetSession() {
        return NativeModule$d.resetSession();
    }
    registerListenerForEvents() {
        NativeModule$d.registerListenerForEvents();
    }
    unregisterListenerForEvents() {
        NativeModule$d.unregisterListenerForEvents();
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
    }
    subscribeDidUpdateSession() {
        const listener = RNEventEmitter$a.addListener(BarcodeBatchListenerEvents.didUpdateSession, (event) => {
            this.eventEmitter.emit(BarcodeBatchListenerEvents.didUpdateSession, event.data);
        });
        this.nativeListeners.push(listener);
    }
    finishDidUpdateSessionCallback(enabled) {
        NativeModule$d.finishDidUpdateSessionCallback(enabled);
    }
    setModeEnabledState(enabled) {
        NativeModule$d.setModeEnabledState(enabled);
    }
    updateBarcodeBatchMode(modeJson) {
        return NativeModule$d.updateBarcodeBatchMode(modeJson);
    }
    applyBarcodeBatchModeSettings(newSettingsJson) {
        return NativeModule$d.applyBarcodeBatchModeSettings(newSettingsJson);
    }
}

// tslint:disable:variable-name
const NativeModule$c = NativeModules.ScanditDataCaptureBarcodeBatch;
const RNEventEmitter$9 = new NativeEventEmitter(NativeModule$c);
// tslint:enable:variable-name
class NativeBarcodeBatchBasicOverlayProxy {
    nativeListeners = [];
    eventEmitter;
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    setBrushForTrackedBarcode(brushJson, trackedBarcodeIdentifer, _sessionFrameSequenceID) {
        return NativeModule$c.setBrushForTrackedBarcode(brushJson, trackedBarcodeIdentifer);
    }
    clearTrackedBarcodeBrushes() {
        return NativeModule$c.clearTrackedBarcodeBrushes();
    }
    registerListenerForBasicOverlayEvents() {
        NativeModule$c.registerListenerForBasicOverlayEvents();
    }
    unregisterListenerForBasicOverlayEvents() {
        NativeModule$c.unregisterListenerForBasicOverlayEvents();
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
    }
    updateBarcodeBatchBasicOverlay(overlayJson) {
        return NativeModule$c.updateBarcodeBatchBasicOverlay(overlayJson);
    }
    subscribeBrushForTrackedBarcode() {
        const brushForTrackedBarcodeListener = RNEventEmitter$9.addListener(BarcodeBatchBasicOverlayListenerEvents.brushForTrackedBarcode, (event) => {
            this.eventEmitter.emit(BarcodeBatchBasicOverlayListenerEvents.brushForTrackedBarcode, event.data);
        });
        this.nativeListeners.push(brushForTrackedBarcodeListener);
    }
    subscribeDidTapTrackedBarcode() {
        const didTapTrackedBarcodeListener = RNEventEmitter$9.addListener(BarcodeBatchBasicOverlayListenerEvents.didTapTrackedBarcode, (event) => {
            this.eventEmitter.emit(BarcodeBatchBasicOverlayListenerEvents.didTapTrackedBarcode, event.data);
        });
        this.nativeListeners.push(didTapTrackedBarcodeListener);
    }
}

// tslint:disable:variable-name
const NativeModule$b = NativeModules.ScanditDataCaptureBarcodeBatch;
const RNEventEmitter$8 = new NativeEventEmitter(NativeModule$b);
// tslint:enable:variable-name
class NativeBarcodeBatchAdvancedOverlayProxy {
    nativeListeners = [];
    eventEmitter;
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    isModeEnabled = () => false;
    setBrushForTrackedBarcode(brushJson, sessionFrameSequenceID, trackedBarcodeIdentifer) {
        return NativeModule$b.setBrushForTrackedBarcode(brushJson, sessionFrameSequenceID, trackedBarcodeIdentifer);
    }
    setViewForTrackedBarcode(viewJson, trackedBarcodeIdentifer) {
        return NativeModule$b.setViewForTrackedBarcode(viewJson, trackedBarcodeIdentifer);
    }
    setAnchorForTrackedBarcode(anchor, trackedBarcodeIdentifer) {
        return NativeModule$b.setAnchorForTrackedBarcode(anchor, trackedBarcodeIdentifer);
    }
    setOffsetForTrackedBarcode(offsetJson, trackedBarcodeIdentifer) {
        return NativeModule$b.setOffsetForTrackedBarcode(offsetJson, trackedBarcodeIdentifer);
    }
    clearTrackedBarcodeViews() {
        return NativeModule$b.clearTrackedBarcodeViews();
    }
    registerListenerForAdvancedOverlayEvents() {
        NativeModule$b.registerListenerForAdvancedOverlayEvents();
    }
    unregisterListenerForAdvancedOverlayEvents() {
        NativeModule$b.unregisterListenerForAdvancedOverlayEvents();
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
    }
    subscribeViewForTrackedBarcode() {
        const viewForTrackedBarcodeListener = RNEventEmitter$8.addListener(BarcodeBatchAdvancedOverlayListenerEvents.viewForTrackedBarcode, (event) => {
            this.eventEmitter.emit(BarcodeBatchAdvancedOverlayListenerEvents.viewForTrackedBarcode, event.data);
        });
        this.nativeListeners.push(viewForTrackedBarcodeListener);
    }
    subscribeAnchorForTrackedBarcode() {
        const anchorForTrackedBarcodeListener = RNEventEmitter$8.addListener(BarcodeBatchAdvancedOverlayListenerEvents.anchorForTrackedBarcode, (event) => {
            this.eventEmitter.emit(BarcodeBatchAdvancedOverlayListenerEvents.anchorForTrackedBarcode, event.data);
        });
        this.nativeListeners.push(anchorForTrackedBarcodeListener);
    }
    subscribeOffsetForTrackedBarcode() {
        const offsetForTrackedBarcodeListener = RNEventEmitter$8.addListener(BarcodeBatchAdvancedOverlayListenerEvents.offsetForTrackedBarcode, (event) => {
            this.eventEmitter.emit(BarcodeBatchAdvancedOverlayListenerEvents.offsetForTrackedBarcode, event.data);
        });
        this.nativeListeners.push(offsetForTrackedBarcodeListener);
    }
    subscribeDidTapViewForTrackedBarcode() {
        const didTapViewForTrackedBarcodeListener = RNEventEmitter$8.addListener(BarcodeBatchAdvancedOverlayListenerEvents.didTapViewForTrackedBarcode, (event) => {
            this.eventEmitter.emit(BarcodeBatchAdvancedOverlayListenerEvents.didTapViewForTrackedBarcode, event.data);
        });
        this.nativeListeners.push(didTapViewForTrackedBarcodeListener);
    }
    updateBarcodeBatchAdvancedOverlay(overlayJson) {
        return NativeModule$b.updateBarcodeBatchAdvancedOverlay(overlayJson);
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
            throw new Error('Non-serializable values were found in the view passed passed to a BarcodeBatchAdvancedOverlay, which can break usage. This might happen if you have non-serializable values such as function, class instances etc. in the props for the view component that you are passing.');
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
const NativeModule$a = NativeModules.ScanditDataCaptureSparkScan;
const RNEventEmitter$7 = new NativeEventEmitter(NativeModule$a);
// tslint:enable:variable-name
class NativeSparkScanListenerProxy extends BaseNativeProxy {
    nativeListeners = [];
    resetSession() {
        return NativeModule$a.resetSession();
    }
    updateMode(sparkScanJson) {
        return NativeModule$a.updateMode(sparkScanJson);
    }
    registerListenerForEvents() {
        NativeModule$a.registerListenerForEvents();
    }
    unregisterListenerForEvents() {
        const p = NativeModule$a.unregisterListenerForEvents();
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
        return p;
    }
    subscribeDidUpdateSessionListener() {
        const didUpdateSessionListener = RNEventEmitter$7.addListener(SparkScanListenerEvents.didUpdateSession, (event) => {
            this.eventEmitter.emit(SparkScanListenerEvents.didUpdateSession, event.data);
        });
        this.nativeListeners.push(didUpdateSessionListener);
    }
    subscribeDidScanListener() {
        const didScanListener = RNEventEmitter$7.addListener(SparkScanListenerEvents.didScan, (event) => {
            this.eventEmitter.emit(SparkScanListenerEvents.didScan, event.data);
        });
        this.nativeListeners.push(didScanListener);
    }
    finishDidUpdateSessionCallback(enabled) {
        return NativeModule$a.finishDidUpdateSessionCallback(enabled);
    }
    finishDidScanCallback(enabled) {
        return NativeModule$a.finishDidScanCallback(enabled);
    }
    setModeEnabledState(enabled) {
        NativeModule$a.setModeEnabledState(enabled);
    }
}

// tslint:disable:variable-name
const NativeModule$9 = NativeModules.ScanditDataCaptureBarcodePick;
const RNEventEmitter$6 = new NativeEventEmitter(NativeModule$9);
// tslint:enable:variable-name
class NativeBarcodePickProductProxy extends BaseNativeProxy {
    nativeListeners = [];
    finishOnProductIdentifierForItems(jsonData) {
        return NativeModule$9.finishOnProductIdentifierForItems(jsonData);
    }
    subscribeProductIdentifierForItemsListener() {
        const productIdentifierForItemsListener = RNEventEmitter$6.addListener(BarcodePickEvents.OnProductIdentifierForItems, (event) => {
            this.eventEmitter.emit(BarcodePickEvents.OnProductIdentifierForItems, event.data);
        });
        this.nativeListeners.push(productIdentifierForItemsListener);
    }
    unsubscribeListeners() {
        this.nativeListeners.forEach(listener => {
            listener.remove();
        });
        this.nativeListeners = [];
        RNEventEmitter$6.removeAllListeners(BarcodePickEvents.OnProductIdentifierForItems);
    }
}

// tslint:disable:variable-name
const NativeModule$8 = NativeModules.ScanditDataCaptureBarcodePick;
const RNEventEmitter$5 = new NativeEventEmitter(NativeModule$8);
// tslint:enable:variable-name
class NativeBarcodePickViewProxy extends BaseNativeProxy {
    nativeListeners = [];
    didTapFinishButtonListener = null;
    ;
    viewStart() {
        return NativeModule$8.viewStart();
    }
    viewPause() {
        return Promise.resolve();
    }
    viewFreeze() {
        return NativeModule$8.viewFreeze();
    }
    viewStop() {
        return NativeModule$8.viewStop();
    }
    viewResume() {
        return Promise.resolve();
    }
    finishPickAction(code, result) {
        return NativeModule$8.finishPickAction(code, result);
    }
    findNodeHandle(view) {
        return findNodeHandle(view);
    }
    createView(id, json) {
        return NativeModule$8.createView(id, json);
    }
    updateView(json) {
        return NativeModule$8.updateView(json);
    }
    registerFrameworkEvents() {
        this.subscribeDidPickItemListener();
        this.subscribeDidUnpickItemListener();
        this.subscribeDidFreezeScanningListener();
        this.subscribeDidPauseScanningListener();
        this.subscribeDidStartScanningListener();
        this.subscribeDidStopScanningListener();
        NativeModule$8.addActionListener();
        NativeModule$8.addViewListener();
    }
    unregisterFrameworkEvents() {
        this.nativeListeners.forEach(listener => {
            listener.remove();
        });
        this.nativeListeners = [];
        RNEventEmitter$5.removeAllListeners(BarcodePickEvents.DidPick);
        RNEventEmitter$5.removeAllListeners(BarcodePickEvents.DidUnpick);
        RNEventEmitter$5.removeAllListeners(BarcodePickViewListenerEvents.DidFreezeScanning);
        RNEventEmitter$5.removeAllListeners(BarcodePickViewListenerEvents.DidPauseScanning);
        RNEventEmitter$5.removeAllListeners(BarcodePickViewListenerEvents.DidStartScanning);
        RNEventEmitter$5.removeAllListeners(BarcodePickViewListenerEvents.DidStopScanning);
        RNEventEmitter$5.removeAllListeners(BarcodePickViewUiListenerEvents.DidTapFinishButton);
        NativeModule$8.removeActionListener();
        NativeModule$8.removeViewListener();
        NativeModule$8.unregisterBarcodePickViewUiListener();
    }
    subscribeDidStartScanningListener() {
        const didStartScanningListener = RNEventEmitter$5.addListener(BarcodePickViewListenerEvents.DidStartScanning, () => {
            this.eventEmitter.emit(BarcodePickViewListenerEvents.DidStartScanning);
        });
        this.nativeListeners.push(didStartScanningListener);
    }
    subscribeDidFreezeScanningListener() {
        const didFreezeScanningListener = RNEventEmitter$5.addListener(BarcodePickViewListenerEvents.DidFreezeScanning, () => {
            this.eventEmitter.emit(BarcodePickViewListenerEvents.DidFreezeScanning);
        });
        this.nativeListeners.push(didFreezeScanningListener);
    }
    subscribeDidPauseScanningListener() {
        const didPauseScanningListener = RNEventEmitter$5.addListener(BarcodePickViewListenerEvents.DidPauseScanning, () => {
            this.eventEmitter.emit(BarcodePickViewListenerEvents.DidPauseScanning);
        });
        this.nativeListeners.push(didPauseScanningListener);
    }
    subscribeDidStopScanningListener() {
        const didStopScanningListener = RNEventEmitter$5.addListener(BarcodePickViewListenerEvents.DidStopScanning, () => {
            this.eventEmitter.emit(BarcodePickViewListenerEvents.DidStopScanning);
        });
        this.nativeListeners.push(didStopScanningListener);
    }
    subscribeDidPickItemListener() {
        const didPickItemListener = RNEventEmitter$5.addListener(BarcodePickEvents.DidPick, (event) => {
            this.eventEmitter.emit(BarcodePickEvents.DidPick, event.data);
        });
        this.nativeListeners.push(didPickItemListener);
    }
    subscribeDidUnpickItemListener() {
        const didUnpickItemListener = RNEventEmitter$5.addListener(BarcodePickEvents.DidUnpick, (event) => {
            this.eventEmitter.emit(BarcodePickEvents.DidUnpick, event.data);
        });
        this.nativeListeners.push(didUnpickItemListener);
    }
    subscribeBarcodePickViewUiListener() {
        this.didTapFinishButtonListener = RNEventEmitter$5.addListener(BarcodePickViewUiListenerEvents.DidTapFinishButton, (event) => {
            this.eventEmitter.emit(BarcodePickViewUiListenerEvents.DidTapFinishButton, event.data);
        });
        this.nativeListeners.push(this.didTapFinishButtonListener);
        return NativeModule$8.registerBarcodePickViewUiListener();
    }
    unsubscribeBarcodePickViewUiListener() {
        this.didTapFinishButtonListener?.remove();
        if (this.didTapFinishButtonListener) {
            const index = this.nativeListeners.indexOf(this.didTapFinishButtonListener);
            if (index > -1) {
                this.nativeListeners.splice(index, 1);
            }
        }
        return NativeModule$8.unregisterBarcodePickViewUiListener();
    }
}

// tslint:disable:variable-name
const NativeModule$7 = NativeModules.ScanditDataCaptureBarcodeFind;
const RNEventEmitter$4 = new NativeEventEmitter(NativeModule$7);
// tslint:enable:variable-name
class NativeBarcodeFindListenerProxy extends BaseNativeProxy {
    nativeListeners = [];
    isModeEnabled = () => false;
    setItemList(itemsJson) {
        return NativeModule$7.barcodeFindSetItemList(itemsJson);
    }
    updateFindMode(barcodeFindJson) {
        return NativeModule$7.updateFindMode(barcodeFindJson);
    }
    barcodeFindModeStart() {
        return NativeModule$7.barcodeFindModeStart();
    }
    barcodeFindModePause() {
        return NativeModule$7.barcodeFindModePause();
    }
    barcodeFindModeStop() {
        return NativeModule$7.barcodeFindModeStop();
    }
    setModeEnabledState(isEnabled) {
        NativeModule$7.setModeEnabledState(isEnabled);
    }
    setBarcodeTransformer() {
        return NativeModule$7.setBarcodeTransformer();
    }
    submitBarcodeFindTransformerResult(transformedBarcode) {
        return NativeModule$7.submitBarcodeFindTransformerResult(transformedBarcode);
    }
    updateFeedback(feedbackJson) {
        return NativeModule$7.updateBarcodeFindFeedback(feedbackJson);
    }
    subscribeBarcodeFindListener() {
        const onStartListener = RNEventEmitter$4.addListener(BarcodeFindListenerEvents.onSearchStartedEvent, () => {
            this.eventEmitter.emit(BarcodeFindListenerEvents.onSearchStartedEvent);
        });
        this.nativeListeners.push(onStartListener);
        const onPauseListener = RNEventEmitter$4.addListener(BarcodeFindListenerEvents.onSearchPausedEvent, (event) => {
            this.eventEmitter.emit(BarcodeFindListenerEvents.onSearchPausedEvent, event.data);
        });
        this.nativeListeners.push(onPauseListener);
        const onStopListener = RNEventEmitter$4.addListener(BarcodeFindListenerEvents.onSearchStoppedEvent, (event) => {
            this.eventEmitter.emit(BarcodeFindListenerEvents.onSearchStoppedEvent, event.data);
        });
        this.nativeListeners.push(onStopListener);
        const onBarcodeTransformed = RNEventEmitter$4.addListener(BarcodeFindListenerEvents.onTransformBarcodeData, (event) => {
            this.eventEmitter.emit(BarcodeFindListenerEvents.onTransformBarcodeData, event.data);
        });
        this.nativeListeners.push(onBarcodeTransformed);
        return NativeModule$7.registerBarcodeFindListener();
    }
    unsubscribeBarcodeFindListener() {
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
        return NativeModule$7.unregisterBarcodeFindListener();
    }
}

// tslint:disable:variable-name
const NativeModule$6 = NativeModules.ScanditDataCaptureBarcodeFind;
const RNEventEmitter$3 = new NativeEventEmitter(NativeModule$6);
// tslint:enable:variable-name
class NativeBarcodeFindViewProxy extends BaseNativeProxy {
    nativeListeners = [];
    updateView(barcodeFindViewJson) {
        return NativeModule$6.updateFindView(barcodeFindViewJson);
    }
    onPause() {
        return NativeModule$6.barcodeFindViewOnPause();
    }
    onResume() {
        return NativeModule$6.barcodeFindViewOnResume();
    }
    startSearching() {
        return NativeModule$6.barcodeFindViewStartSearching();
    }
    stopSearching() {
        return NativeModule$6.barcodeFindViewStopSearching();
    }
    pauseSearching() {
        return NativeModule$6.barcodeFindViewPauseSearching();
    }
    findNodeHandle(view) {
        return findNodeHandle(view);
    }
    createView(id, json) {
        return NativeModule$6.createFindView(id, json);
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
        const onFinishButtonTappedListener = RNEventEmitter$3.addListener(BarcodeFindViewEvents.onFinishButtonTappedEventName, (event) => {
            this.eventEmitter.emit(BarcodeFindViewEvents.onFinishButtonTappedEventName, event.data);
        });
        this.nativeListeners.push(onFinishButtonTappedListener);
        return NativeModule$6.registerBarcodeFindViewListener();
    }
    unsubscribeBarcodeFindViewListener() {
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
        return NativeModule$6.unregisterBarcodeFindViewListener();
    }
}

// tslint:disable:variable-name
const NativeModule$5 = NativeModules.ScanditDataCaptureBarcodePick;
const RNEventEmitter$2 = new NativeEventEmitter(NativeModule$5);
// tslint:enable:variable-name
class NativeBarcodePickListenerProxy extends BaseNativeProxy {
    nativeListeners = [];
    subscribeBarcodePickListeners() {
        NativeModule$5.addScanningListener();
        this.subscribeDidCompleteScanningSessionListener();
        this.subscribeDidUpdateScanningSessionListener();
    }
    unsubscribeBarcodePickListeners() {
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
        NativeModule$5.removeScanningListener();
    }
    subscribeDidCompleteScanningSessionListener() {
        const didCompleteScanningSessionListener = RNEventEmitter$2.addListener(BarcodePickListenerEvents.DidCompleteScanningSession, (event) => {
            this.eventEmitter.emit(BarcodePickListenerEvents.DidCompleteScanningSession, event.data);
        });
        this.nativeListeners.push(didCompleteScanningSessionListener);
    }
    subscribeDidUpdateScanningSessionListener() {
        const didUpdateScanningSessionListener = RNEventEmitter$2.addListener(BarcodePickListenerEvents.DidUpdateScanningSession, (event) => {
            this.eventEmitter.emit(BarcodePickListenerEvents.DidUpdateScanningSession, event.data);
        });
        this.nativeListeners.push(didUpdateScanningSessionListener);
    }
}

// tslint:disable:variable-name
const NativeModule$4 = NativeModules.ScanditDataCaptureSparkScan;
const EventEmitter$1 = new NativeEventEmitter(NativeModule$4);
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
        return NativeModule$4.create(id, viewJson);
    }
    disposeSparkScanView() {
        return NativeModule$4.disposeSparkScanView();
    }
    prepareSparkScanViewScanning() {
        if (Platform.OS === 'ios') {
            const id = findNodeHandle(this.view);
            return NativeModule$4.prepareScanning(id);
        }
        return NativeModule$4.onResume();
    }
    registerSparkScanViewListenerEvents() {
        NativeModule$4.registerListenerForViewEvents();
        const barcodeCountButtonTappedListener = EventEmitter$1.addListener(SparkScanViewEvents.barcodeCountButtonTapped, () => {
            this.eventEmitter.emit(SparkScanViewEvents.barcodeCountButtonTapped, this.view);
        });
        const barcodeFindButtonTappedListener = EventEmitter$1.addListener(SparkScanViewEvents.barcodeFindButtonTapped, () => {
            this.eventEmitter.emit(SparkScanViewEvents.barcodeFindButtonTapped, this.view);
        });
        const didChangeViewStateListener = EventEmitter$1.addListener(SparkScanViewEvents.didChangeViewState, (event) => {
            this.eventEmitter.emit(SparkScanViewEvents.didChangeViewState, event.data);
        });
        this.nativeListeners.push(barcodeCountButtonTappedListener);
        this.nativeListeners.push(barcodeFindButtonTappedListener);
        this.nativeListeners.push(didChangeViewStateListener);
    }
    showToast(text) {
        return NativeModule$4.showToast(text);
    }
    startSparkScanViewScanning() {
        if (Platform.OS === 'ios') {
            const id = findNodeHandle(this.view);
            return NativeModule$4.startScanning(id);
        }
        return NativeModule$4.startScanning();
    }
    stopSparkScanViewScanning() {
        if (Platform.OS === 'ios') {
            const id = findNodeHandle(this.view);
            return NativeModule$4.stopScanning(id);
        }
        // there is no equivalent on android.
        return Promise.resolve();
    }
    pauseSparkScanViewScanning() {
        if (Platform.OS === 'ios') {
            const id = findNodeHandle(this.view);
            return NativeModule$4.pauseScanning(id);
        }
        return NativeModule$4.pauseScanning();
    }
    submitFeedbackForBarcode(feedbackJson) {
        return NativeModule$4.submitSparkScanFeedbackForBarcode(feedbackJson);
    }
    registerDelegateForEvents() {
        this.feedbackForBarcodeListener = EventEmitter$1.addListener(SparkScanFeedbackDelegateEvents.feedbackForBarcode, (event) => {
            this.eventEmitter.emit(SparkScanFeedbackDelegateEvents.feedbackForBarcode, event.data);
        });
        return NativeModule$4.addFeedbackDelegate();
    }
    unregisterDelegateForEvents() {
        this.feedbackForBarcodeListener?.remove();
        this.feedbackForBarcodeListener = null;
        return NativeModule$4.removeFeedbackDelegate();
    }
    async unregisterSparkScanViewListenerEvents() {
        await NativeModule$4.unregisterListenerForViewEvents();
        this.nativeListeners.forEach(listener => {
            listener.remove();
        });
        this.nativeListeners = [];
    }
    updateSparkScanView(viewJson) {
        const id = findNodeHandle(this.view);
        const parsedViewJson = JSON.parse(viewJson).View;
        return NativeModule$4.update(id, JSON.stringify(parsedViewJson));
    }
}

// tslint:disable:variable-name
const NativeModule$3 = NativeModules.ScanditDataCaptureBarcodeGenerator;
// tslint:enable:variable-name
class NativeBarcodeGeneratorProxy {
    create(barcodeGeneratorJson) {
        return NativeModule$3.create(barcodeGeneratorJson);
    }
    dispose(generatorId) {
        return NativeModule$3.disposeGenerator(generatorId);
    }
    generateFromBase64EncodedData(generatorId, data, imageWidth) {
        return NativeModule$3.generateFromBase64EncodedData(generatorId, data, imageWidth);
    }
    generate(generatorId, text, imageWidth) {
        return NativeModule$3.generate(generatorId, text, imageWidth);
    }
}

// tslint:disable:variable-name
const NativeModule$2 = NativeModules.ScanditDataCaptureBarcodeCount;
const EventEmitter = new NativeEventEmitter(NativeModule$2);
// tslint:enable:variable-name
class NativeBarcodeCountViewProxy extends BaseNativeProxy {
    nativeListeners = [];
    clearHighlights() {
        return NativeModule$2.clearHighlights();
    }
    createView(nativeView, viewJson) {
        const id = findNodeHandle(nativeView);
        return NativeModule$2.createView(id, viewJson);
    }
    updateView(viewJson) {
        return NativeModule$2.updateView(viewJson);
    }
    finishBrushForRecognizedBarcodeCallback(nativeView, brushJson, trackedBarcodeIdentifier) {
        const id = findNodeHandle(nativeView);
        return NativeModule$2.finishBrushForRecognizedBarcodeCallback(id, brushJson, trackedBarcodeIdentifier);
    }
    finishBrushForRecognizedBarcodeNotInListCallback(nativeView, brushJson, trackedBarcodeIdentifier) {
        const id = findNodeHandle(nativeView);
        return NativeModule$2.finishBrushForRecognizedBarcodeNotInListCallback(id, brushJson, trackedBarcodeIdentifier);
    }
    finishBrushForAcceptedBarcodeCallback(nativeView, brushJson, trackedBarcodeIdentifier) {
        const id = findNodeHandle(nativeView);
        return NativeModule$2.finishBrushForAcceptedBarcodeCallback(id, brushJson, trackedBarcodeIdentifier);
    }
    finishBrushForRejectedBarcodeCallback(nativeView, brushJson, trackedBarcodeIdentifier) {
        const id = findNodeHandle(nativeView);
        return NativeModule$2.finishBrushForRejectedBarcodeCallback(id, brushJson, trackedBarcodeIdentifier);
    }
    // Not used on RN
    hide() {
        return Promise.resolve(undefined);
    }
    // Not used on RN
    setPositionAndSize(top, left, width, height, shouldBeUnderWebView) {
        return Promise.resolve(undefined);
    }
    // Not used on RN
    show() {
        return Promise.resolve(undefined);
    }
    registerBarcodeCountViewListener() {
        return NativeModule$2.registerBarcodeCountViewListener();
    }
    registerBarcodeCountViewUiListener() {
        return NativeModule$2.registerBarcodeCountViewUiListener();
    }
    unregisterBarcodeCountViewListener() {
        return NativeModule$2.unregisterBarcodeCountViewListener();
    }
    unregisterBarcodeCountViewUiListener() {
        return NativeModule$2.unregisterBarcodeCountViewUiListener();
    }
    enableHardwareTrigger(hardwareTriggerKeyCode) {
        if (Platform.OS === 'ios') {
            return Promise.resolve(undefined);
        }
        return NativeModule$2.enableHardwareTrigger(hardwareTriggerKeyCode);
    }
    async subscribeListeners() {
        const singleScanButtonTappedListener = EventEmitter.addListener(BarcodeCountViewEvents.singleScanButtonTapped, () => {
            this.eventEmitter.emit(BarcodeCountViewEvents.singleScanButtonTapped);
        });
        const listButtonTappedListener = EventEmitter.addListener(BarcodeCountViewEvents.listButtonTapped, () => {
            this.eventEmitter.emit(BarcodeCountViewEvents.listButtonTapped);
        });
        const exitButtonTappedListener = EventEmitter.addListener(BarcodeCountViewEvents.exitButtonTapped, () => {
            this.eventEmitter.emit(BarcodeCountViewEvents.exitButtonTapped);
        });
        const brushForRecognizedBarcodeListener = EventEmitter.addListener(BarcodeCountViewEvents.brushForRecognizedBarcode, (event) => {
            this.eventEmitter.emit(BarcodeCountViewEvents.brushForRecognizedBarcode, event.data);
        });
        const brushForRecognizedBarcodeNotInListListener = EventEmitter.addListener(BarcodeCountViewEvents.brushForRecognizedBarcodeNotInList, (event) => {
            this.eventEmitter.emit(BarcodeCountViewEvents.brushForRecognizedBarcodeNotInList, event.data);
        });
        const brushForAcceptedBarcodeListener = EventEmitter.addListener(BarcodeCountViewEvents.brushForAcceptedBarcode, (event) => {
            this.eventEmitter.emit(BarcodeCountViewEvents.brushForAcceptedBarcode, event.data);
        });
        const brushForRejectedBarcodeListener = EventEmitter.addListener(BarcodeCountViewEvents.brushForRejectedBarcode, (event) => {
            this.eventEmitter.emit(BarcodeCountViewEvents.brushForRejectedBarcode, event.data);
        });
        const filteredBarcodeTappedListener = EventEmitter.addListener(BarcodeCountViewEvents.filteredBarcodeTapped, (event) => {
            this.eventEmitter.emit(BarcodeCountViewEvents.filteredBarcodeTapped, event.data);
        });
        const recognizedBarcodeNotInListTappedListener = EventEmitter.addListener(BarcodeCountViewEvents.recognizedBarcodeNotInListTapped, (event) => {
            this.eventEmitter.emit(BarcodeCountViewEvents.recognizedBarcodeNotInListTapped, event.data);
        });
        const recognizedBarcodeTappedListener = EventEmitter.addListener(BarcodeCountViewEvents.recognizedBarcodeTapped, (event) => {
            this.eventEmitter.emit(BarcodeCountViewEvents.recognizedBarcodeTapped, event.data);
        });
        const acceptedBarcodeTappedListener = EventEmitter.addListener(BarcodeCountViewEvents.acceptedBarcodeTapped, (event) => {
            this.eventEmitter.emit(BarcodeCountViewEvents.acceptedBarcodeTapped, event.data);
        });
        const rejectedBarcodeTappedListener = EventEmitter.addListener(BarcodeCountViewEvents.rejectedBarcodeTapped, (event) => {
            this.eventEmitter.emit(BarcodeCountViewEvents.rejectedBarcodeTapped, event.data);
        });
        const captureListCompletedListener = EventEmitter.addListener(BarcodeCountViewEvents.captureListCompleted, () => {
            this.eventEmitter.emit(BarcodeCountViewEvents.captureListCompleted);
        });
        this.nativeListeners.push(singleScanButtonTappedListener);
        this.nativeListeners.push(listButtonTappedListener);
        this.nativeListeners.push(exitButtonTappedListener);
        this.nativeListeners.push(brushForRecognizedBarcodeListener);
        this.nativeListeners.push(brushForRecognizedBarcodeNotInListListener);
        this.nativeListeners.push(brushForAcceptedBarcodeListener);
        this.nativeListeners.push(brushForRejectedBarcodeListener);
        this.nativeListeners.push(filteredBarcodeTappedListener);
        this.nativeListeners.push(recognizedBarcodeNotInListTappedListener);
        this.nativeListeners.push(recognizedBarcodeTappedListener);
        this.nativeListeners.push(acceptedBarcodeTappedListener);
        this.nativeListeners.push(rejectedBarcodeTappedListener);
        this.nativeListeners.push(captureListCompletedListener);
    }
    async unsubscribeListeners() {
        this.nativeListeners.forEach(listener => {
            listener.remove();
        });
        this.nativeListeners = [];
    }
}

// tslint:disable:variable-name
const NativeModule$1 = NativeModules.ScanditDataCaptureBarcodeCheck;
const RNEventEmitter$1 = new NativeEventEmitter(NativeModule$1);
// tslint:enable:variable-name
class NativeBarcodeCheckListenerProxy {
    nativeListeners = [];
    eventEmitter;
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    // TODO: need to handle this in the native code and shared
    isModeEnabled = () => false;
    setModeEnabledState(enabled) {
        NativeModule$1.setModeEnabledState(enabled);
    }
    updateMode(barcodeCheckJson) {
        return NativeModule$1.updateBarcodeCheckMode(barcodeCheckJson);
    }
    updateFeedback(feedbackJson) {
        NativeModule$1.updateBarcodeCheckFeedback(feedbackJson);
    }
    resetBarcodeCheck() {
        return NativeModule$1.resetBarcodeCheck();
    }
    registerBarcodeCheckListener() {
        return NativeModule$1.registerBarcodeCheckListener();
    }
    unregisterBarcodeCheckListener() {
        return NativeModule$1.unregisterBarcodeCheckListener();
    }
    finishOnDidUpdateSession() {
        return NativeModule$1.finishBarcodeCheckOnDidUpdateSession();
    }
    subscribeDidUpdateSession() {
        const didUpdateSessionListener = RNEventEmitter$1.addListener(BarcodeCheckListenerEvents.didUpdateSession, async (event) => {
            this.eventEmitter.emit(BarcodeCheckListenerEvents.didUpdateSession, event.data);
        });
        this.nativeListeners.push(didUpdateSessionListener);
        return Promise.resolve();
    }
}

// tslint:disable:variable-name
const NativeModule = NativeModules.ScanditDataCaptureBarcodeCheck;
// tslint:enable:variable-name
class NativeBarcodeCheckSessionProxy {
    resetSession() {
        return NativeModule.resetBarcodeCheckSession();
    }
}

// tslint:disable:variable-name
const { ScanditDataCaptureBarcodeCheck } = NativeModules;
const RNEventEmitter = new NativeEventEmitter(ScanditDataCaptureBarcodeCheck);
// tslint:enable:variable-name
class NativeBarcodeCheckViewProxy extends BaseNativeProxy {
    nativeListeners = [];
    barcodeCheckAnnotationProvider = null;
    barcodeCheckHighlightProvider = null;
    didTapInfoAnnotationEvent = null;
    didTapInfoAnnotationFooterEvent = null;
    didTapInfoAnnotationHeaderEvent = null;
    didTapInfoAnnotationLeftIconEvent = null;
    didTapInfoAnnotationRightIconEvent = null;
    didTapPopoverButtonEvent = null;
    didTapPopoverEvent = null;
    registerBarcodeCheckViewUiListener() {
        return ScanditDataCaptureBarcodeCheck.registerBarcodeCheckViewUiListener();
    }
    unregisterBarcodeCheckViewUiListener() {
        return ScanditDataCaptureBarcodeCheck.unregisterBarcodeCheckViewUiListener();
    }
    registerBarcodeCheckAnnotationProvider() {
        this.barcodeCheckAnnotationProvider = RNEventEmitter.addListener(BarcodeCheckViewEvents.didTapHighlightForBarcode, (event) => {
            this.eventEmitter.emit(BarcodeCheckViewEvents.didTapHighlightForBarcode, event.data);
        });
        return ScanditDataCaptureBarcodeCheck.registerBarcodeCheckAnnotationProvider();
    }
    unregisterBarcodeCheckAnnotationProvider() {
        this.barcodeCheckAnnotationProvider?.remove();
        this.barcodeCheckAnnotationProvider = null;
        return ScanditDataCaptureBarcodeCheck.unregisterBarcodeCheckAnnotationProvider();
    }
    registerBarcodeCheckHighlightProvider() {
        this.barcodeCheckHighlightProvider = RNEventEmitter.addListener(BarcodeCheckViewEvents.didTapHighlightForBarcode, (event) => {
            this.eventEmitter.emit(BarcodeCheckViewEvents.didTapHighlightForBarcode, event.data);
        });
        return ScanditDataCaptureBarcodeCheck.registerBarcodeCheckHighlightProvider();
    }
    unregisterBarcodeCheckHighlightProvider() {
        this.barcodeCheckHighlightProvider?.remove();
        this.barcodeCheckHighlightProvider = null;
        return ScanditDataCaptureBarcodeCheck.unregisterBarcodeCheckHighlightProvider();
    }
    start() {
        return ScanditDataCaptureBarcodeCheck.barcodeCheckViewStart();
    }
    stop() {
        return ScanditDataCaptureBarcodeCheck.barcodeCheckViewStop();
    }
    pause() {
        return ScanditDataCaptureBarcodeCheck.barcodeCheckViewPause();
    }
    update(json) {
        return ScanditDataCaptureBarcodeCheck.updateBarcodeCheckView(json);
    }
    findNodeHandle(view) {
        if (view === null) {
            return null;
        }
        return findNodeHandle(view);
    }
    createView(view, viewJson) {
        const id = this.findNodeHandle(view);
        return ScanditDataCaptureBarcodeCheck.createBarcodeCheckView(id, viewJson);
    }
    subscribeViewListeners() {
        const onDidTapHighlightForBarcodeListener = RNEventEmitter.addListener(BarcodeCheckViewEvents.didTapHighlightForBarcode, (event) => {
            this.eventEmitter.emit(BarcodeCheckViewEvents.didTapHighlightForBarcode, event.data);
        });
        this.nativeListeners.push(onDidTapHighlightForBarcodeListener);
        return ScanditDataCaptureBarcodeCheck.registerBarcodeCheckViewUiListener();
    }
    updateHighlight(highlightJson) {
        return ScanditDataCaptureBarcodeCheck.updateBarcodeCheckHighlight(highlightJson);
    }
    updateAnnotation(annotationJson) {
        return ScanditDataCaptureBarcodeCheck.updateBarcodeCheckAnnotation(annotationJson);
    }
    updatePopoverButton(updateJson) {
        return ScanditDataCaptureBarcodeCheck.updateBarcodeCheckPopoverButtonAtIndex(updateJson);
    }
    unsubscribeViewListeners() {
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
        return ScanditDataCaptureBarcodeCheck.unregisterBarcodeCheckViewUiListener();
    }
    finishAnnotationForBarcode(annotation) {
        return ScanditDataCaptureBarcodeCheck.finishBarcodeCheckAnnotationForBarcode(annotation);
    }
    finishHighlightForBarcode(highlight) {
        return ScanditDataCaptureBarcodeCheck.finishBarcodeCheckHighlightForBarcode(highlight);
    }
    subscribeToAnnotationProviderEvents() {
        this.barcodeCheckAnnotationProvider = RNEventEmitter.addListener(BarcodeCheckViewEvents.annotationForBarcode, (event) => {
            this.eventEmitter.emit(BarcodeCheckViewEvents.annotationForBarcode, event.data);
        });
        this.didTapInfoAnnotationEvent = RNEventEmitter.addListener(BarcodeCheckViewEvents.didTapInfoAnnotationEvent, (event) => {
            this.eventEmitter.emit(BarcodeCheckViewEvents.didTapInfoAnnotationEvent, event.data);
        });
        this.didTapInfoAnnotationFooterEvent = RNEventEmitter.addListener(BarcodeCheckViewEvents.didTapInfoAnnotationFooterEvent, (event) => {
            this.eventEmitter.emit(BarcodeCheckViewEvents.didTapInfoAnnotationFooterEvent, event.data);
        });
        this.didTapInfoAnnotationHeaderEvent = RNEventEmitter.addListener(BarcodeCheckViewEvents.didTapInfoAnnotationHeaderEvent, (event) => {
            this.eventEmitter.emit(BarcodeCheckViewEvents.didTapInfoAnnotationHeaderEvent, event.data);
        });
        this.didTapInfoAnnotationLeftIconEvent = RNEventEmitter.addListener(BarcodeCheckViewEvents.didTapInfoAnnotationLeftIconEvent, (event) => {
            this.eventEmitter.emit(BarcodeCheckViewEvents.didTapInfoAnnotationLeftIconEvent, event.data);
        });
        this.didTapInfoAnnotationRightIconEvent = RNEventEmitter.addListener(BarcodeCheckViewEvents.didTapInfoAnnotationRightIconEvent, (event) => {
            this.eventEmitter.emit(BarcodeCheckViewEvents.didTapInfoAnnotationRightIconEvent, event.data);
        });
        this.didTapPopoverButtonEvent = RNEventEmitter.addListener(BarcodeCheckViewEvents.didTapPopoverButtonEvent, (event) => {
            this.eventEmitter.emit(BarcodeCheckViewEvents.didTapPopoverButtonEvent, event.data);
        });
        this.didTapPopoverEvent = RNEventEmitter.addListener(BarcodeCheckViewEvents.didTapPopoverEvent, (event) => {
            this.eventEmitter.emit(BarcodeCheckViewEvents.didTapPopoverEvent, event.data);
        });
    }
    unsubscribeFromAnnotationProviderEvents() {
        this.barcodeCheckAnnotationProvider?.remove();
        this.barcodeCheckAnnotationProvider = null;
        this.didTapInfoAnnotationEvent?.remove();
        this.didTapInfoAnnotationEvent = null;
        this.didTapInfoAnnotationFooterEvent?.remove();
        this.didTapInfoAnnotationFooterEvent = null;
        this.didTapInfoAnnotationHeaderEvent?.remove();
        this.didTapInfoAnnotationHeaderEvent = null;
        this.didTapInfoAnnotationLeftIconEvent?.remove();
        this.didTapInfoAnnotationLeftIconEvent = null;
        this.didTapInfoAnnotationRightIconEvent?.remove();
        this.didTapInfoAnnotationRightIconEvent = null;
        this.didTapPopoverButtonEvent?.remove();
        this.didTapPopoverButtonEvent = null;
        this.didTapPopoverEvent?.remove();
        this.didTapPopoverEvent = null;
    }
    subscribeToHighlightProviderEvents() {
        this.barcodeCheckHighlightProvider = RNEventEmitter.addListener(BarcodeCheckViewEvents.highlightForBarcode, (event) => {
            this.eventEmitter.emit(BarcodeCheckViewEvents.highlightForBarcode, event.data);
        });
    }
    unsubscribeFromHighlightProviderEvents() {
        this.barcodeCheckHighlightProvider?.remove();
        this.barcodeCheckHighlightProvider = null;
    }
}

function initBarcodeProxy() {
    initCoreProxy();
    FactoryMaker.bindInstance('BarcodeCaptureListenerProxy', new NativeBarcodeCaptureListenerProxy());
    FactoryMaker.bindInstance('BarcodeBatchListenerProxy', new NativeBarcodeBatchListenerProxy());
    FactoryMaker.bindInstance('BarcodeBatchBasicOverlayProxy', new NativeBarcodeBatchBasicOverlayProxy());
    FactoryMaker.bindInstance('BarcodeBatchAdvancedOverlayProxy', new NativeBarcodeBatchAdvancedOverlayProxy());
    FactoryMaker.bindInstance('BarcodeSelectionListenerProxy', new NativeBarcodeSelectionListenerProxy());
    FactoryMaker.bindInstance('BarcodeSelectionOverlayProxy', new NativeBarcodeSelectionOverlayProxy());
    FactoryMaker.bindInstance('BarcodeSelectionProxy', new NativeBarcodeSelectionProxy());
    FactoryMaker.bindInstance('BarcodeCheckListenerProxy', new NativeBarcodeCheckListenerProxy());
    FactoryMaker.bindInstance('BarcodeCheckSessionProxy', new NativeBarcodeCheckSessionProxy());
    FactoryMaker.bindInstance('BarcodeCheckViewProxy', new NativeBarcodeCheckViewProxy());
    FactoryMaker.bindInstance('BarcodeCountListenerProxy', new NativeBarcodeCountListenerProxy());
    FactoryMaker.bindInstance('BarcodeCountSessionProxy', new NativeBarcodeCountSessionProxy());
    FactoryMaker.bindInstance('BarcodeCountViewProxy', new NativeBarcodeCountViewProxy());
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
const BarcodeCheck = NativeModules.ScanditDataCaptureBarcodeCheck;
// tslint:disable-next-line:variable-name
const BarcodeCount = NativeModules.ScanditDataCaptureBarcodeCount;
// tslint:disable-next-line:variable-name
const BarcodePickModule = NativeModules.ScanditDataCaptureBarcodePick;
// tslint:disable-next-line:variable-name
const BarcodeSelection = NativeModules.ScanditDataCaptureBarcodeSelection;
// tslint:disable-next-line:variable-name
const BarcodeBatch = NativeModules.ScanditDataCaptureBarcodeBatch;
// tslint:disable-next-line:variable-name
const SparkScan = NativeModules.ScanditDataCaptureSparkScan;
// tslint:disable-next-line:variable-name
const BarcodeFind = NativeModules.ScanditDataCaptureBarcodeFind;
function initBarcodeDefaults() {
    initCoreDefaults();
    loadBarcodeDefaults(ScanditDataCaptureBarcode.Defaults);
    loadBarcodeCaptureDefaults(BarcodeCapture.Defaults);
    loadBarcodeCheckDefaults(BarcodeCheck.Defaults);
    loadBarcodeBatchDefaults(BarcodeBatch.Defaults);
    loadBarcodeSelectionDefaults(BarcodeSelection.Defaults);
    loadBarcodeCountDefaults(BarcodeCount.Defaults);
    loadBarcodePickDefaults(BarcodePickModule.Defaults);
    loadBarcodeFindDefaults(BarcodeFind.Defaults);
    loadSparkScanDefaults(SparkScan.Defaults);
    loadBarcodeFindDefaults(BarcodeFind.Defaults);
}

class BarcodeBatchAdvancedOverlay {
    baseBarcodeBatch;
    get listener() {
        return this.baseBarcodeBatch.listener;
    }
    set listener(listener) {
        this.baseBarcodeBatch.listener = listener;
    }
    get type() {
        return this.baseBarcodeBatch.type;
    }
    get shouldShowScanAreaGuides() {
        return this.baseBarcodeBatch.shouldShowScanAreaGuides;
    }
    set shouldShowScanAreaGuides(shouldShow) {
        this.baseBarcodeBatch.shouldShowScanAreaGuides = shouldShow;
    }
    set view(newView) {
        this.baseBarcodeBatch.view = newView;
    }
    get view() {
        return this.baseBarcodeBatch.view;
    }
    static withBarcodeBatchForView(barcodeBatch, view) {
        const overlay = new BarcodeBatchAdvancedOverlay();
        overlay.baseBarcodeBatch.initialize(barcodeBatch, view);
        return overlay;
    }
    constructor() {
        this.baseBarcodeBatch = new BaseBarcodeBatchAdvancedOverlay();
    }
    setViewForTrackedBarcode(view, trackedBarcode) {
        const errorText = 'The method no longer supports rendering any kind of images. Remove them to be able to set the view for your barcode. For further details about this backwards incompatible change, contact support@scandit.com.';
        const isArFullSupported = DataCaptureContextFeatures.isFeatureSupported('barcode-ar-full');
        if (isArFullSupported) {
            return this.baseBarcodeBatch.setViewForTrackedBarcode(view, trackedBarcode);
        }
        if (view.hasImageInRender()) {
            return new Promise((resolve, reject) => reject(errorText));
        }
        return this.baseBarcodeBatch.setViewForTrackedBarcode(view, trackedBarcode);
    }
    setAnchorForTrackedBarcode(anchor, trackedBarcode) {
        return this.baseBarcodeBatch.setAnchorForTrackedBarcode(anchor, trackedBarcode);
    }
    setOffsetForTrackedBarcode(offset, trackedBarcode) {
        return this.baseBarcodeBatch.setOffsetForTrackedBarcode(offset, trackedBarcode);
    }
    clearTrackedBarcodeViews() {
        return this.baseBarcodeBatch.clearTrackedBarcodeViews();
    }
    toJSON() {
        return this.baseBarcodeBatch.toJSON();
    }
}

// tslint:disable-next-line
const BarcodeBatchView = forwardRef(function BarcodeBatchView(props, ref) {
    const viewRef = useRef(null);
    const componentIsSetUp = useRef(false);
    const advancedOverlayRef = useRef(null);
    const barcodeBatchModeRef = useRef(null);
    function getMode() {
        if (barcodeBatchModeRef.current !== null) {
            return barcodeBatchModeRef.current;
        }
        barcodeBatchModeRef.current = BarcodeBatch$1.forContext(null, props.barcodeBatchSettings || new BarcodeBatchSettings());
        return barcodeBatchModeRef.current;
    }
    const basicOverlayRef = useRef(null);
    function getBasicOverlay() {
        if (basicOverlayRef.current !== null) {
            return basicOverlayRef.current;
        }
        basicOverlayRef.current = BarcodeBatchBasicOverlay.withBarcodeBatchForViewWithStyle(getMode(), null, props.basicOverlayStyle || BarcodeBatchBasicOverlayStyle.Frame);
        return basicOverlayRef.current;
    }
    const cameraRef = useRef(null);
    function getCamera() {
        if (cameraRef.current !== null) {
            return cameraRef.current;
        }
        cameraRef.current = Camera.asPositionWithSettings(props.desiredCameraPosition || CameraPosition.WorldFacing, props.cameraSettings || BarcodeBatch$1.recommendedCameraSettings);
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
                getMode().isEnabled = props.isEnabled;
                getCamera()?.switchToDesiredState(props.desiredCameraState || FrameSourceState.On);
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
        if (barcodeBatchModeRef.current) {
            props.context.removeMode(barcodeBatchModeRef.current);
        }
        props.context.setFrameSource(null);
        barcodeBatchModeRef.current = null;
        /* Cleaning Overlays */
        if (viewRef.current) {
            viewRef.current.view?.overlays?.forEach((overlay) => viewRef.current?.view?.removeOverlay(overlay));
        }
    };
    /* BARCODE TRACKING MODE */
    useEffect(() => {
        if (props.barcodeBatchSettings) {
            getMode().applySettings(props.barcodeBatchSettings);
        }
    }, [props.barcodeBatchSettings]);
    useEffect(() => {
        // Enabling/disabling the scanning turns both camera and mode to the same state. We ignore standby mode for now.
        getMode().isEnabled = props.isEnabled;
        getCamera()?.switchToDesiredState(props.desiredCameraState || FrameSourceState.On);
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
                if (overlay.type === 'barcodeBatchAdvanced') {
                    viewRef.current?.view?.removeOverlay(overlay);
                }
            });
            advancedOverlayRef.current = null;
            return;
        }
        if (hasAdvancedOverlayListenerToSet && !advancedOverlayRef.current) {
            // update with listener, nothing set before; therefore we set WITHOUT cleanup.
            advancedOverlayRef.current =
                BarcodeBatchAdvancedOverlay.withBarcodeBatchForView(getMode(), viewRef.current);
            // do not return, so we also set the listener afterwards.
        }
        else if (hasAdvancedOverlayListenerToSet && advancedOverlayRef.current) {
            // update with listener, something had been set before; therefore we set WITH cleanup.
            viewRef.current.view?.overlays?.forEach((overlay) => {
                if (overlay.type === 'barcodeBatchAdvanced') {
                    viewRef.current?.view?.removeOverlay(overlay);
                }
            });
            advancedOverlayRef.current =
                BarcodeBatchAdvancedOverlay.withBarcodeBatchForView(getMode(), viewRef.current);
            // do not return, so we also set the listener afterwards.
        }
        setAdvancedOverlayListener({
            viewForTrackedBarcode: (overlay, trackedBarcode) => {
                if (props.useCacheForViewsForTrackedBarcodes === true) {
                    const barcodeBatchKey = trackedBarcode.barcode.symbology.toString() +
                        trackedBarcode.barcode.data;
                    if (viewForTrackedBarcodeCache.has(barcodeBatchKey)) {
                        return viewForTrackedBarcodeCache.get(barcodeBatchKey) || null;
                    }
                    if (props.viewForTrackedBarcode) {
                        const view = props.viewForTrackedBarcode(overlay, trackedBarcode);
                        if (view instanceof Promise) {
                            return view.then(actualView => {
                                setViewForTrackedBarcodeCache(viewForTrackedBarcodeCache.set(barcodeBatchKey, actualView));
                                return actualView;
                            });
                        }
                        else {
                            setViewForTrackedBarcodeCache(viewForTrackedBarcodeCache.set(barcodeBatchKey, view));
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
        getCamera()?.applySettings(props.cameraSettings || BarcodeBatch$1.recommendedCameraSettings);
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
                cameraRef.current = Camera.asPositionWithSettings(props.desiredCameraPosition || CameraPosition.WorldFacing, props.cameraSettings || BarcodeBatch$1.recommendedCameraSettings);
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

class BarcodeBatchAdvancedOverlayView extends React.Component {
    static moduleName = 'BarcodeBatchAdvancedOverlayViewComponent';
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
        return BarcodeBatchAdvancedOverlayView.moduleName;
    }
}

// tslint:disable-next-line
const BarcodeCaptureView = forwardRef(function BarcodeCaptureView(props, ref) {
    const viewRef = useRef(null);
    const componentIsSetUp = useRef(false);
    const barcodeCaptureModeRef = useRef(null);
    function getMode() {
        if (barcodeCaptureModeRef.current !== null) {
            return barcodeCaptureModeRef.current;
        }
        barcodeCaptureModeRef.current = BarcodeCapture$1.forContext(null, props.barcodeCaptureSettings || new BarcodeCaptureSettings());
        return barcodeCaptureModeRef.current;
    }
    const basicOverlayRef = useRef(null);
    function getBasicOverlay() {
        if (basicOverlayRef.current !== null) {
            return basicOverlayRef.current;
        }
        basicOverlayRef.current = BarcodeCaptureOverlay.withBarcodeCaptureForViewWithStyle(getMode(), null, props.basicOverlayStyle || BarcodeCaptureOverlayStyle.Frame);
        return basicOverlayRef.current;
    }
    const cameraRef = useRef(null);
    function getCamera() {
        if (cameraRef.current !== null) {
            return cameraRef.current;
        }
        cameraRef.current = Camera.asPositionWithSettings(props.desiredCameraPosition || CameraPosition.WorldFacing, props.cameraSettings || BarcodeCapture$1.recommendedCameraSettings);
        return cameraRef.current;
    }
    const torchSwitchControl = useRef(null);
    const zoomSwitchControl = useRef(null);
    const appState = useRef(AppState.currentState);
    useEffect(() => {
        doSetup();
        const subscription = AppState.addEventListener('change', nextAppState => {
            if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
                getMode().isEnabled = props.isEnabled;
                getCamera()?.switchToDesiredState(props.desiredCameraState || FrameSourceState.On);
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
        if (barcodeCaptureModeRef.current) {
            props.context.removeMode(barcodeCaptureModeRef.current);
        }
        props.context.setFrameSource(null);
        barcodeCaptureModeRef.current = null;
        /* Cleaning Overlays */
        if (viewRef.current) {
            viewRef.current.view?.overlays?.forEach((overlay) => viewRef.current?.view?.removeOverlay(overlay));
        }
    };
    /* BARCODE CAPTURE MODE */
    useEffect(() => {
        if (props.barcodeCaptureSettings) {
            getMode().applySettings(props.barcodeCaptureSettings);
        }
    }, [props.barcodeCaptureSettings]);
    useEffect(() => {
        // Enabling/disabling the scanning turns both camera and mode to the same state. We ignore standby mode for now.
        getMode().isEnabled = props.isEnabled;
        getCamera()?.switchToDesiredState(props.desiredCameraState || FrameSourceState.On);
    }, [props.isEnabled]);
    useEffect(() => {
        const listeners = [...getMode().listeners];
        listeners.forEach((listener) => {
            getMode().removeListener(listener);
        });
        if (props.didScan) {
            getMode().addListener({
                didScan: props.didScan,
            });
        }
    }, [props.didScan]);
    /* OVERLAYS */
    useEffect(() => {
        // set default brush only if there is no brush provided via the listener
        if (props.defaultBasicOverlayBrush) {
            getBasicOverlay().brush = props.defaultBasicOverlayBrush;
        }
    }, [props.defaultBasicOverlayBrush]);
    /* CAMERA */
    useEffect(() => {
        // default to SDK recommended camera settings if the prop is unset
        getCamera()?.applySettings(props.cameraSettings || BarcodeCapture$1.recommendedCameraSettings);
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
                cameraRef.current = Camera.asPositionWithSettings(props.desiredCameraPosition || CameraPosition.WorldFacing, props.cameraSettings || BarcodeCapture$1.recommendedCameraSettings);
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
    return (React.createElement(DataCaptureView, { context: props.context, style: { flex: 1 }, ref: viewRef }));
});

class BarcodeCheckView extends React.Component {
    baseBarcodeCheckView;
    static forMode(dataCaptureContext, barcodeCheck) {
        return new BarcodeCheckView({ context: dataCaptureContext, barcodeCheck });
    }
    static forModeWithViewSettings(dataCaptureContext, barcodeCheck, viewSettings) {
        return new BarcodeCheckView({ context: dataCaptureContext, barcodeCheck, settings: viewSettings });
    }
    static forModeWithViewSettingsAndCameraSettings(dataCaptureContext, barcodeCheck, viewSettings, cameraSettings) {
        return new BarcodeCheckView({ context: dataCaptureContext, barcodeCheck, settings: viewSettings, cameraSettings });
    }
    constructor(props) {
        super(props);
        this.baseBarcodeCheckView = new BaseBarcodeCheckView(props.context, props.barcodeCheck, this, // Passing the native view to the base
        props.settings, props.cameraSettings, props.annotationProvider, props.highlightProvider, props.uiListener, Platform.OS === 'ios');
    }
    async componentDidMount() {
        if (Platform.OS === 'android') {
            this.createFragment();
        }
    }
    componentWillUnmount() {
        this.baseBarcodeCheckView.dispose();
    }
    get uiListener() {
        return this.baseBarcodeCheckView.barcodeCheckViewUiListener;
    }
    set uiListener(value) {
        this.baseBarcodeCheckView.barcodeCheckViewUiListener = value;
    }
    get annotationProvider() {
        return this.baseBarcodeCheckView.annotationProvider;
    }
    set annotationProvider(value) {
        this.baseBarcodeCheckView.annotationProvider = value;
    }
    get highlightProvider() {
        return this.baseBarcodeCheckView.highlightProvider;
    }
    set highlightProvider(value) {
        this.baseBarcodeCheckView.highlightProvider = value;
    }
    start() {
        this.baseBarcodeCheckView.start();
    }
    stop() {
        this.baseBarcodeCheckView.stop();
    }
    pause() {
        this.baseBarcodeCheckView.pause();
    }
    get shouldShowTorchControl() {
        return this.baseBarcodeCheckView.shouldShowTorchControl;
    }
    set shouldShowTorchControl(value) {
        this.baseBarcodeCheckView.shouldShowTorchControl = value;
    }
    get torchControlPosition() {
        return this.baseBarcodeCheckView.torchControlPosition;
    }
    set torchControlPosition(value) {
        this.baseBarcodeCheckView.torchControlPosition = value;
    }
    get shouldShowZoomControl() {
        return this.baseBarcodeCheckView.shouldShowZoomControl;
    }
    set shouldShowZoomControl(value) {
        this.baseBarcodeCheckView.shouldShowZoomControl = value;
    }
    get zoomControlPosition() {
        return this.baseBarcodeCheckView.zoomControlPosition;
    }
    set zoomControlPosition(value) {
        this.baseBarcodeCheckView.zoomControlPosition = value;
    }
    get shouldShowCameraSwitchControl() {
        return this.baseBarcodeCheckView.shouldShowCameraSwitchControl;
    }
    set shouldShowCameraSwitchControl(value) {
        this.baseBarcodeCheckView.shouldShowCameraSwitchControl = value;
    }
    get cameraSwitchControlPosition() {
        return this.baseBarcodeCheckView.cameraSwitchControlPosition;
    }
    set cameraSwitchControlPosition(value) {
        this.baseBarcodeCheckView.cameraSwitchControlPosition = value;
    }
    get shouldShowMacroModeControl() {
        return this.baseBarcodeCheckView.shouldShowMacroModeControl;
    }
    set shouldShowMacroModeControl(value) {
        this.baseBarcodeCheckView.shouldShowMacroModeControl = value;
    }
    get macroModeControlPosition() {
        return this.baseBarcodeCheckView.macroModeControlPosition;
    }
    set macroModeControlPosition(value) {
        this.baseBarcodeCheckView.macroModeControlPosition = value;
    }
    render() {
        return React.createElement(RNTBarcodeCheckView, { ...this.props });
    }
    createFragment() {
        const viewId = findNodeHandle(this);
        UIManager.dispatchViewManagerCommand(viewId, 'createBarcodeCheckView', [viewId, JSON.stringify(this.toJSON())]);
    }
    toJSON() {
        return this.baseBarcodeCheckView.toJSON();
    }
}
// tslint:disable-next-line:variable-name
const RNTBarcodeCheckView = requireNativeComponent('RNTBarcodeCheckView', BarcodeCheckView);

// tslint:disable-next-line
const BarcodeSelectionView = forwardRef(function BarcodeSelectionView(props, ref) {
    useImperativeHandle(ref, () => {
        return {
            selectAimedBarcode() {
                getMode().selectAimedBarcode();
            },
            unselectBarcodes(barcodes) {
                getMode().unselectBarcodes(barcodes);
            },
            setSelectBarcodeEnabled(barcode, enabled) {
                getMode().setSelectBarcodeEnabled(barcode, enabled);
            },
            increaseCountForBarcodes(barcodes) {
                getMode().increaseCountForBarcodes(barcodes);
            },
        };
    }, []);
    /* STATE VARIABLES */
    const [isEnabledState, setIsEnabledState] = useState(false);
    const [frameSourceState, setFrameSourceState] = useState(FrameSourceState.Off);
    /* STATE HANDLERS */
    useEffect(() => {
        getMode().isEnabled = isEnabledState;
    }, [isEnabledState]);
    useEffect(() => {
        getCamera()?.switchToDesiredState(frameSourceState);
    }, [frameSourceState]);
    const viewRef = useRef(null);
    const componentIsSetUp = useRef(false);
    const barcodeSelectionModeRef = useRef(null);
    function getMode() {
        if (barcodeSelectionModeRef.current !== null) {
            return barcodeSelectionModeRef.current;
        }
        barcodeSelectionModeRef.current = BarcodeSelection$1.forContext(null, props.barcodeSelectionSettings || new BarcodeSelectionSettings());
        return barcodeSelectionModeRef.current;
    }
    const basicOverlayRef = useRef(null);
    function getBasicOverlay() {
        if (basicOverlayRef.current !== null) {
            return basicOverlayRef.current;
        }
        basicOverlayRef.current = BarcodeSelectionBasicOverlay.withBarcodeSelectionForViewWithStyle(getMode(), null, props.basicOverlayStyle || BarcodeSelectionBasicOverlayStyle.Frame);
        return basicOverlayRef.current;
    }
    const cameraRef = useRef(null);
    function getCamera() {
        if (cameraRef.current !== null) {
            return cameraRef.current;
        }
        cameraRef.current = Camera.asPositionWithSettings(props.desiredCameraPosition || CameraPosition.WorldFacing, props.cameraSettings || BarcodeSelection$1.recommendedCameraSettings);
        return cameraRef.current;
    }
    const torchSwitchControl = useRef(null);
    const zoomSwitchControl = useRef(null);
    const appState = useRef(AppState.currentState);
    /* SETUP */
    useEffect(() => {
        doSetup();
        const subscription = AppState.addEventListener('change', nextAppState => {
            if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
                setIsEnabledState(props.isEnabled);
                setFrameSourceState(props.desiredCameraState || FrameSourceState.On);
            }
            else {
                setIsEnabledState(false);
                setFrameSourceState(FrameSourceState.Off);
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
        setFrameSourceState(FrameSourceState.Off);
        /* Cleaning Data Capture Context */
        if (barcodeSelectionModeRef.current) {
            props.context.removeMode(barcodeSelectionModeRef.current);
        }
        props.context.setFrameSource(null);
        barcodeSelectionModeRef.current = null;
        /* Cleaning Overlays */
        if (viewRef.current) {
            viewRef.current.view?.overlays?.forEach((overlay) => viewRef.current?.view?.removeOverlay(overlay));
        }
    };
    /* BARCODE SELECTION MODE */
    useEffect(() => {
        if (props.barcodeSelectionSettings) {
            getMode().applySettings(props.barcodeSelectionSettings);
        }
    }, [props.barcodeSelectionSettings]);
    useEffect(() => {
        // Enabling/disabling the scanning turns both camera and mode to the same state. We ignore standby mode for now.
        setIsEnabledState(props.isEnabled);
        setFrameSourceState(props.desiredCameraState || FrameSourceState.On);
    }, [props.isEnabled]);
    useEffect(() => {
        const listeners = [...getMode().listeners];
        listeners.forEach((listener) => {
            getMode().removeListener(listener);
        });
        if (props.didUpdateSelection) {
            getMode().addListener({
                didUpdateSelection: props.didUpdateSelection
            });
        }
    }, [props.didUpdateSelection]);
    /* OVERLAYS */
    useEffect(() => {
        // set default brush only if there is no brush provided via the listener
        if (props.aimedBrush) {
            getBasicOverlay().aimedBrush = props.aimedBrush;
        }
        if (props.selectedBrush) {
            getBasicOverlay().selectedBrush = props.selectedBrush;
        }
        if (props.selectingBrush) {
            getBasicOverlay().selectingBrush = props.selectingBrush;
        }
        if (props.trackedBrush) {
            getBasicOverlay().trackedBrush = props.trackedBrush;
        }
    }, [props.aimedBrush, props.selectedBrush, props.selectingBrush, props.trackedBrush]);
    /* CAMERA */
    useEffect(() => {
        // default to SDK recommended camera settings if the prop is unset
        getCamera()?.applySettings(props.cameraSettings || BarcodeSelection$1.recommendedCameraSettings);
    }, [props.cameraSettings]);
    useEffect(() => {
        if (props.desiredCameraState) {
            setFrameSourceState(props.desiredCameraState);
        }
    }, [props.desiredCameraState]);
    useEffect(() => {
        if (props.desiredCameraPosition) {
            setFrameSourceState(FrameSourceState.Off);
            props.context.setFrameSource(null).then(() => {
                cameraRef.current = Camera.asPositionWithSettings(props.desiredCameraPosition || CameraPosition.WorldFacing, props.cameraSettings || BarcodeSelection$1.recommendedCameraSettings);
                props.context.setFrameSource(getCamera()).then(() => {
                    setFrameSourceState(props.desiredCameraState || FrameSourceState.On);
                });
            });
        }
    }, [props.desiredCameraPosition]);
    /* CONTROLS */
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
    /* MISC */
    useEffect(() => {
        if (props.pointOfInterest) {
            getMode().pointOfInterest = props.pointOfInterest;
        }
    }, [props.pointOfInterest]);
    useEffect(() => {
        if (props.feedback) {
            getMode().feedback = props.feedback;
        }
    }, [props.feedback]);
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
    /* METHODS */
    // could be handled with a prop
    useEffect(() => {
        if (props.shouldUnfreezeCamera === true) {
            getMode().unfreezeCamera();
        }
    }, [props.shouldUnfreezeCamera]);
    return (React.createElement(DataCaptureView, { context: props.context, style: { flex: 1 }, ref: viewRef }));
});

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
            didChangeViewState(newState) {
                listener?.didChangeViewState?.(newState);
            },
            didTapBarcodeCountButton(view) {
                listener?.onBarcodeCountButtonTappedIn?.(rnView);
            },
            didTapBarcodeFindButton(view) {
                listener?.onBarcodeFindButtonTappedIn?.(rnView);
            },
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
        this.baseSparkScanView = BaseSparkScanView.forContext(props.context, props.sparkScan, this.props.sparkScanViewSettings, Platform.OS === 'ios');
    }
    componentWillUnmount() {
        this.baseSparkScanView.dispose();
    }
    render() {
        return React.createElement(RNTSparkScanView, { ...this.props });
    }
    get previewSizeControlVisible() {
        return this.baseSparkScanView.previewSizeControlVisible;
    }
    set previewSizeControlVisible(newValue) {
        this.baseSparkScanView.previewSizeControlVisible = newValue;
    }
    /**
     * @deprecated The torch button has been moved to the mini preview. Use property `torchControlVisible` instead.
     */
    get torchButtonVisible() {
        return this.baseSparkScanView.torchButtonVisible;
    }
    /**
     * @deprecated The torch button has been moved to the mini preview. Use property `torchControlVisible` instead.
     */
    set torchButtonVisible(newValue) {
        this.baseSparkScanView.torchButtonVisible = newValue;
    }
    get scanningBehaviorButtonVisible() {
        return this.baseSparkScanView.scanningBehaviorButtonVisible;
    }
    set scanningBehaviorButtonVisible(newValue) {
        this.baseSparkScanView.scanningBehaviorButtonVisible = newValue;
    }
    get barcodeCountButtonVisible() {
        return this.baseSparkScanView.barcodeCountButtonVisible;
    }
    set barcodeCountButtonVisible(newValue) {
        this.baseSparkScanView.barcodeCountButtonVisible = newValue;
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
    /**
     * @deprecated This property is not relevant anymore.
     */
    get captureButtonActiveBackgroundColor() {
        return this.baseSparkScanView.captureButtonActiveBackgroundColor;
    }
    /**
     * @deprecated This property is not relevant anymore.
     */
    set captureButtonActiveBackgroundColor(newValue) {
        this.baseSparkScanView.captureButtonActiveBackgroundColor = newValue;
    }
    /**
     * @deprecated use triggerButtonCollapsedColor and triggerButtonExpandedColor instead.
     */
    get captureButtonBackgroundColor() {
        return this.baseSparkScanView.captureButtonBackgroundColor;
    }
    /**
     * @deprecated use triggerButtonCollapsedColor and triggerButtonExpandedColor instead.
     */
    set captureButtonBackgroundColor(newValue) {
        this.baseSparkScanView.captureButtonBackgroundColor = newValue;
    }
    /**
     * @deprecated use triggerButtonTintColor instead.
     */
    get captureButtonTintColor() {
        return this.baseSparkScanView.captureButtonTintColor;
    }
    /**
     * @deprecated use triggerButtonTintColor instead.
     */
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
    get cameraSwitchButtonVisible() {
        return this.baseSparkScanView.cameraSwitchButtonVisible;
    }
    set cameraSwitchButtonVisible(newValue) {
        this.baseSparkScanView.cameraSwitchButtonVisible = newValue;
    }
    get torchControlVisible() {
        return this.baseSparkScanView.torchControlVisible;
    }
    set torchControlVisible(newValue) {
        this.baseSparkScanView.torchControlVisible = newValue;
    }
    get previewCloseControlVisible() {
        return this.baseSparkScanView.previewCloseControlVisible;
    }
    set previewCloseControlVisible(newValue) {
        this.baseSparkScanView.previewCloseControlVisible = newValue;
    }
    get triggerButtonAnimationColor() {
        return this.baseSparkScanView.triggerButtonAnimationColor;
    }
    set triggerButtonAnimationColor(newValue) {
        this.baseSparkScanView.triggerButtonAnimationColor = newValue;
    }
    get triggerButtonExpandedColor() {
        return this.baseSparkScanView.triggerButtonExpandedColor;
    }
    set triggerButtonExpandedColor(newValue) {
        this.baseSparkScanView.triggerButtonExpandedColor = newValue;
    }
    get triggerButtonCollapsedColor() {
        return this.baseSparkScanView.triggerButtonCollapsedColor;
    }
    set triggerButtonCollapsedColor(newValue) {
        this.baseSparkScanView.triggerButtonCollapsedColor = newValue;
    }
    get triggerButtonTintColor() {
        return this.baseSparkScanView.triggerButtonTintColor;
    }
    set triggerButtonTintColor(newValue) {
        this.baseSparkScanView.triggerButtonTintColor = newValue;
    }
    get triggerButtonVisible() {
        return this.baseSparkScanView.triggerButtonVisible;
    }
    set triggerButtonVisible(newValue) {
        this.baseSparkScanView.triggerButtonVisible = newValue;
    }
    get triggerButtonImage() {
        return this.baseSparkScanView.triggerButtonImage;
    }
    set triggerButtonImage(newValue) {
        this.baseSparkScanView.triggerButtonImage = newValue;
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
    componentDidMount() {
        this.createSparkScanView();
    }
    createSparkScanView() {
        if (Platform.OS === 'ios')
            return;
        const viewId = findNodeHandle(this);
        const viewJson = {
            SparkScan: this.baseSparkScanView._sparkScan.toJSON(),
            SparkScanView: this.toJSON(),
        };
        const json = JSON.stringify(viewJson);
        UIManager.dispatchViewManagerCommand(viewId, 'createSparkScanView', [json]);
    }
    toJSON() {
        return this.baseSparkScanView.toJSON();
    }
}
// tslint:disable-next-line:variable-name
const RNTSparkScanView = requireNativeComponent('RNTSparkScanView', SparkScanView);

var BarcodeCountViewStyle;
(function (BarcodeCountViewStyle) {
    BarcodeCountViewStyle["Icon"] = "icon";
    BarcodeCountViewStyle["Dot"] = "dot";
})(BarcodeCountViewStyle || (BarcodeCountViewStyle = {}));
class BarcodeCountView extends React.Component {
    baseBarcodeCountView;
    static get defaultRecognizedBrush() {
        return BaseBarcodeCountView.defaultRecognizedBrush;
    }
    static get defaultNotInListBrush() {
        return BaseBarcodeCountView.defaultNotInListBrush;
    }
    static get defaultAcceptedBrush() {
        return BaseBarcodeCountView.defaultAcceptedBrush;
    }
    static get defaultRejectedBrush() {
        return BaseBarcodeCountView.defaultRejectedBrush;
    }
    static get hardwareTriggerSupported() {
        return BaseBarcodeCountView.hardwareTriggerSupported;
    }
    get uiListener() {
        return this.baseBarcodeCountView.uiListener;
    }
    set uiListener(listener) {
        this.baseBarcodeCountView.uiListener = listener;
    }
    get listener() {
        return this.baseBarcodeCountView.listener;
    }
    set listener(listener) {
        this.baseBarcodeCountView.listener = listener;
    }
    get shouldShowUserGuidanceView() {
        return this.baseBarcodeCountView.shouldShowUserGuidanceView;
    }
    set shouldShowUserGuidanceView(newValue) {
        this.baseBarcodeCountView.shouldShowUserGuidanceView = newValue;
    }
    get shouldShowListButton() {
        return this.baseBarcodeCountView.shouldShowListButton;
    }
    set shouldShowListButton(newValue) {
        this.baseBarcodeCountView.shouldShowListButton = newValue;
    }
    get shouldDisableModeOnExitButtonTapped() {
        return this.baseBarcodeCountView.shouldDisableModeOnExitButtonTapped;
    }
    set shouldDisableModeOnExitButtonTapped(newValue) {
        this.baseBarcodeCountView.shouldDisableModeOnExitButtonTapped = newValue;
    }
    get shouldShowExitButton() {
        return this.baseBarcodeCountView.shouldShowExitButton;
    }
    set shouldShowExitButton(newValue) {
        this.baseBarcodeCountView.shouldShowExitButton = newValue;
    }
    get shouldShowShutterButton() {
        return this.baseBarcodeCountView.shouldShowShutterButton;
    }
    set shouldShowShutterButton(newValue) {
        this.baseBarcodeCountView.shouldShowShutterButton = newValue;
    }
    get shouldShowHints() {
        return this.baseBarcodeCountView.shouldShowHints;
    }
    set shouldShowHints(newValue) {
        this.baseBarcodeCountView.shouldShowHints = newValue;
    }
    get shouldShowClearHighlightsButton() {
        return this.baseBarcodeCountView.shouldShowClearHighlightsButton;
    }
    set shouldShowClearHighlightsButton(newValue) {
        this.baseBarcodeCountView.shouldShowClearHighlightsButton = newValue;
    }
    get shouldShowSingleScanButton() {
        return this.baseBarcodeCountView.shouldShowSingleScanButton;
    }
    set shouldShowSingleScanButton(newValue) {
        this.baseBarcodeCountView.shouldShowSingleScanButton = newValue;
    }
    get shouldShowFloatingShutterButton() {
        return this.baseBarcodeCountView.shouldShowFloatingShutterButton;
    }
    set shouldShowFloatingShutterButton(newValue) {
        this.baseBarcodeCountView.shouldShowFloatingShutterButton = newValue;
    }
    get shouldShowToolbar() {
        return this.baseBarcodeCountView.shouldShowToolbar;
    }
    set shouldShowToolbar(newValue) {
        this.baseBarcodeCountView.shouldShowToolbar = newValue;
    }
    get shouldShowScanAreaGuides() {
        return this.baseBarcodeCountView.shouldShowScanAreaGuides;
    }
    set shouldShowScanAreaGuides(newValue) {
        this.baseBarcodeCountView.shouldShowScanAreaGuides = newValue;
    }
    get recognizedBrush() {
        return this.baseBarcodeCountView.recognizedBrush;
    }
    set recognizedBrush(newValue) {
        this.baseBarcodeCountView.recognizedBrush = newValue;
    }
    get notInListBrush() {
        return this.baseBarcodeCountView.notInListBrush;
    }
    set notInListBrush(newValue) {
        this.baseBarcodeCountView.notInListBrush = newValue;
    }
    get acceptedBrush() {
        return this.baseBarcodeCountView.acceptedBrush;
    }
    set acceptedBrush(newValue) {
        this.baseBarcodeCountView.acceptedBrush = newValue;
    }
    get rejectedBrush() {
        return this.baseBarcodeCountView.rejectedBrush;
    }
    set rejectedBrush(newValue) {
        this.baseBarcodeCountView.rejectedBrush = newValue;
    }
    get filterSettings() {
        return this.baseBarcodeCountView.filterSettings;
    }
    set filterSettings(newValue) {
        this.baseBarcodeCountView.filterSettings = newValue;
    }
    get style() {
        return this.baseBarcodeCountView.style;
    }
    get listButtonAccessibilityHint() {
        return this.baseBarcodeCountView.listButtonAccessibilityHint;
    }
    set listButtonAccessibilityHint(newValue) {
        this.baseBarcodeCountView.listButtonAccessibilityHint = newValue;
    }
    get listButtonAccessibilityLabel() {
        return this.baseBarcodeCountView.listButtonAccessibilityLabel;
    }
    set listButtonAccessibilityLabel(newValue) {
        this.baseBarcodeCountView.listButtonAccessibilityLabel = newValue;
    }
    get listButtonContentDescription() {
        return this.baseBarcodeCountView.listButtonContentDescription;
    }
    set listButtonContentDescription(newValue) {
        this.baseBarcodeCountView.listButtonContentDescription = newValue;
    }
    get exitButtonAccessibilityHint() {
        return this.baseBarcodeCountView.exitButtonAccessibilityHint;
    }
    set exitButtonAccessibilityHint(newValue) {
        this.baseBarcodeCountView.exitButtonAccessibilityHint = newValue;
    }
    get exitButtonAccessibilityLabel() {
        return this.baseBarcodeCountView.exitButtonAccessibilityLabel;
    }
    set exitButtonAccessibilityLabel(newValue) {
        this.baseBarcodeCountView.exitButtonAccessibilityLabel = newValue;
    }
    get exitButtonContentDescription() {
        return this.baseBarcodeCountView.exitButtonContentDescription;
    }
    set exitButtonContentDescription(newValue) {
        this.baseBarcodeCountView.exitButtonContentDescription = newValue;
    }
    get shutterButtonAccessibilityHint() {
        return this.baseBarcodeCountView.shutterButtonAccessibilityHint;
    }
    set shutterButtonAccessibilityHint(newValue) {
        this.baseBarcodeCountView.shutterButtonAccessibilityHint = newValue;
    }
    get shutterButtonAccessibilityLabel() {
        return this.baseBarcodeCountView.shutterButtonAccessibilityLabel;
    }
    set shutterButtonAccessibilityLabel(newValue) {
        this.baseBarcodeCountView.shutterButtonAccessibilityLabel = newValue;
    }
    get shutterButtonContentDescription() {
        return this.baseBarcodeCountView.shutterButtonContentDescription;
    }
    set shutterButtonContentDescription(newValue) {
        this.baseBarcodeCountView.shutterButtonContentDescription = newValue;
    }
    get floatingShutterButtonAccessibilityHint() {
        return this.baseBarcodeCountView.floatingShutterButtonAccessibilityHint;
    }
    set floatingShutterButtonAccessibilityHint(newValue) {
        this.baseBarcodeCountView.floatingShutterButtonAccessibilityHint = newValue;
    }
    get floatingShutterButtonAccessibilityLabel() {
        return this.baseBarcodeCountView.floatingShutterButtonAccessibilityLabel;
    }
    set floatingShutterButtonAccessibilityLabel(newValue) {
        this.baseBarcodeCountView.floatingShutterButtonAccessibilityLabel = newValue;
    }
    get floatingShutterButtonContentDescription() {
        return this.baseBarcodeCountView.floatingShutterButtonContentDescription;
    }
    set floatingShutterButtonContentDescription(newValue) {
        this.baseBarcodeCountView.floatingShutterButtonContentDescription = newValue;
    }
    get clearHighlightsButtonAccessibilityHint() {
        return this.baseBarcodeCountView.clearHighlightsButtonAccessibilityHint;
    }
    set clearHighlightsButtonAccessibilityHint(newValue) {
        this.baseBarcodeCountView.clearHighlightsButtonAccessibilityHint = newValue;
    }
    get clearHighlightsButtonAccessibilityLabel() {
        return this.baseBarcodeCountView.clearHighlightsButtonAccessibilityLabel;
    }
    set clearHighlightsButtonAccessibilityLabel(newValue) {
        this.baseBarcodeCountView.clearHighlightsButtonAccessibilityLabel = newValue;
    }
    get clearHighlightsButtonContentDescription() {
        return this.baseBarcodeCountView.clearHighlightsButtonContentDescription;
    }
    set clearHighlightsButtonContentDescription(newValue) {
        this.baseBarcodeCountView.clearHighlightsButtonContentDescription = newValue;
    }
    get singleScanButtonAccessibilityHint() {
        return this.baseBarcodeCountView.singleScanButtonAccessibilityHint;
    }
    set singleScanButtonAccessibilityHint(newValue) {
        this.baseBarcodeCountView.singleScanButtonAccessibilityHint = newValue;
    }
    get singleScanButtonAccessibilityLabel() {
        return this.baseBarcodeCountView.singleScanButtonAccessibilityLabel;
    }
    set singleScanButtonAccessibilityLabel(newValue) {
        this.baseBarcodeCountView.singleScanButtonAccessibilityLabel = newValue;
    }
    get singleScanButtonContentDescription() {
        return this.baseBarcodeCountView.singleScanButtonContentDescription;
    }
    set singleScanButtonContentDescription(newValue) {
        this.baseBarcodeCountView.singleScanButtonContentDescription = newValue;
    }
    get clearHighlightsButtonText() {
        return this.baseBarcodeCountView.clearHighlightsButtonText;
    }
    set clearHighlightsButtonText(newValue) {
        this.baseBarcodeCountView.clearHighlightsButtonText = newValue;
    }
    get exitButtonText() {
        return this.baseBarcodeCountView.exitButtonText;
    }
    set exitButtonText(newValue) {
        this.baseBarcodeCountView.exitButtonText = newValue;
    }
    get textForTapShutterToScanHint() {
        return this.baseBarcodeCountView.textForTapShutterToScanHint;
    }
    set textForTapShutterToScanHint(newValue) {
        this.baseBarcodeCountView.textForTapShutterToScanHint = newValue;
    }
    get textForScanningHint() {
        return this.baseBarcodeCountView.textForScanningHint;
    }
    set textForScanningHint(newValue) {
        this.baseBarcodeCountView.textForScanningHint = newValue;
    }
    get textForMoveCloserAndRescanHint() {
        return this.baseBarcodeCountView.textForMoveCloserAndRescanHint;
    }
    set textForMoveCloserAndRescanHint(newValue) {
        this.baseBarcodeCountView.textForMoveCloserAndRescanHint = newValue;
    }
    get textForMoveFurtherAndRescanHint() {
        return this.baseBarcodeCountView.textForMoveFurtherAndRescanHint;
    }
    set textForMoveFurtherAndRescanHint(newValue) {
        this.baseBarcodeCountView.textForMoveFurtherAndRescanHint = newValue;
    }
    get shouldShowListProgressBar() {
        return this.baseBarcodeCountView.shouldShowListProgressBar;
    }
    set shouldShowListProgressBar(newValue) {
        this.baseBarcodeCountView.shouldShowListProgressBar = newValue;
    }
    get shouldShowTorchControl() {
        return this.baseBarcodeCountView.shouldShowTorchControl;
    }
    set shouldShowTorchControl(newValue) {
        this.baseBarcodeCountView.shouldShowTorchControl = newValue;
    }
    get torchControlPosition() {
        return this.baseBarcodeCountView.torchControlPosition;
    }
    set torchControlPosition(newValue) {
        this.baseBarcodeCountView.torchControlPosition = newValue;
    }
    get textForTapToUncountHint() {
        return this.baseBarcodeCountView.textForTapToUncountHint;
    }
    set textForTapToUncountHint(newValue) {
        this.baseBarcodeCountView.textForTapToUncountHint = newValue;
    }
    get tapToUncountEnabled() {
        return this.baseBarcodeCountView.tapToUncountEnabled;
    }
    set tapToUncountEnabled(newValue) {
        this.baseBarcodeCountView.tapToUncountEnabled = newValue;
    }
    get barcodeNotInListActionSettings() {
        return this.baseBarcodeCountView.barcodeNotInListActionSettings;
    }
    set barcodeNotInListActionSettings(newValue) {
        this.baseBarcodeCountView.barcodeNotInListActionSettings = newValue;
    }
    get hardwareTriggerEnabled() {
        return this.baseBarcodeCountView.hardwareTriggerEnabled;
    }
    set hardwareTriggerEnabled(newValue) {
        this.baseBarcodeCountView.hardwareTriggerEnabled = newValue;
    }
    constructor(props) {
        super(props);
        this.baseBarcodeCountView = new BaseBarcodeCountView({
            context: props.context,
            barcodeCount: props.barcodeCount,
            style: props.viewStyle,
            nativeView: this
        });
    }
    async componentDidMount() {
        if (Platform.OS === 'android') {
            this.createFragment();
        }
    }
    componentWillUnmount() {
        this.baseBarcodeCountView.dispose();
    }
    clearHighlights() {
        this.baseBarcodeCountView.clearHighlights();
    }
    setToolbarSettings(settings) {
        this.baseBarcodeCountView.setToolbarSettings(settings);
    }
    setBrushForRecognizedBarcode(trackedBarcode, brush) {
        return this.baseBarcodeCountView.setBrushForRecognizedBarcode(trackedBarcode, brush);
    }
    setBrushForRecognizedBarcodeNotInList(trackedBarcode, brush) {
        return this.baseBarcodeCountView.setBrushForRecognizedBarcodeNotInList(trackedBarcode, brush);
    }
    setBrushForAcceptedBarcode(trackedBarcode, brush) {
        return this.baseBarcodeCountView.setBrushForAcceptedBarcode(trackedBarcode, brush);
    }
    setBrushForRejectedBarcode(trackedBarcode, brush) {
        return this.baseBarcodeCountView.setBrushForRejectedBarcode(trackedBarcode, brush);
    }
    enableHardwareTrigger(hardwareTriggerKeyCode) {
        return this.baseBarcodeCountView.enableHardwareTrigger(hardwareTriggerKeyCode);
    }
    render() {
        return React.createElement(RNTBarcodeCountView, { ...this.props });
    }
    createFragment() {
        const viewId = findNodeHandle(this);
        UIManager.dispatchViewManagerCommand(viewId, 'createBarcodeCountView', [viewId, JSON.stringify(this.toJSON())]);
    }
    toJSON() {
        return this.baseBarcodeCountView.toJSON();
    }
}
// tslint:disable-next-line:variable-name
const RNTBarcodeCountView = requireNativeComponent('RNTBarcodeCountView', BarcodeCountView);

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
        UIManager.dispatchViewManagerCommand(viewId, 'createBarcodePickView', [viewId, JSON.stringify(this.toJSON())]);
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
    static get hardwareTriggerSupported() {
        return BaseBarcodeFindView.hardwareTriggerSupported;
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
    get shouldShowZoomControl() {
        return this.baseBarcodeFindView.shouldShowZoomControl;
    }
    set shouldShowZoomControl(value) {
        this.baseBarcodeFindView.shouldShowZoomControl = value;
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
        UIManager.dispatchViewManagerCommand(viewId, 'createBarcodeFindView', [viewId, JSON.stringify(this.toJSON())]);
    }
    toJSON() {
        return this.baseBarcodeFindView.toJSON();
    }
}
// tslint:disable-next-line:variable-name
const RNTBarcodeFindView = requireNativeComponent('RNTBarcodeFindView', BarcodeFindView);

initBarcodeDefaults();
initBarcodeProxy();

export { BarcodeBatchAdvancedOverlay, BarcodeBatchAdvancedOverlayView, BarcodeBatchView, BarcodeCaptureView, BarcodeCheckView, BarcodeCountView, BarcodeCountViewStyle, BarcodeFindView, BarcodePickView, BarcodeSelectionView, SparkScanView };
