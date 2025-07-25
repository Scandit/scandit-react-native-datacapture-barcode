import { NativeModules, NativeEventEmitter, AppState, View, Platform, findNodeHandle, UIManager, requireNativeComponent, InteractionManager } from 'react-native';
import { FactoryMaker, createAdvancedNativeProxy, createAdvancedNativeFromCtorProxy, createAdvancedInstanceAwareNativeProxy, ignoreFromSerialization, BaseNativeProxy, AdvancedNativeProxy } from 'scandit-react-native-datacapture-core/dist/core';
import { BarcodeBatch as BarcodeBatch$1, BarcodeCapture as BarcodeCapture$1, BaseBarcodeArView, BarcodeSelection as BarcodeSelection$1, BarcodeSelectionSettings, BaseSparkScanView, BaseBarcodeCountView, BaseBarcodePickView, BaseBarcodeFindView, BarcodeCaptureListenerEvents, BarcodeSelectionListenerEvents, BarcodeSelectionBrushProviderEvents, BarcodeCountListenerEvents, BarcodeCountViewEvents, SparkScanViewEvents, loadBarcodeDefaults, loadBarcodeCaptureDefaults, loadBarcodeArDefaults, loadBarcodeBatchDefaults, loadBarcodeSelectionDefaults, loadBarcodeCountDefaults, loadBarcodePickDefaults, loadBarcodeFindDefaults, loadSparkScanDefaults, BaseBarcodeBatchAdvancedOverlay, BarcodeBatchSettings, BarcodeBatchBasicOverlay, BarcodeBatchBasicOverlayStyle, BarcodeCaptureSettings, BarcodeCaptureOverlay, BarcodeCaptureOverlayStyle, BarcodeSelectionBasicOverlay, BarcodeSelectionBasicOverlayStyle, BarcodeBatchListenerEvents, BarcodeBatchBasicOverlayListenerEvents, BarcodeBatchAdvancedOverlayListenerEvents, BarcodePickEvents, BarcodePickViewListenerEvents, BarcodePickViewUiListenerEvents, BarcodeFindListenerEvents, BarcodeFindViewEvents, BarcodePickListenerEvents, BarcodeArListenerEvents, BarcodeArViewEvents } from './barcode.js';
export { ArucoDictionary, ArucoDictionaryPreset, ArucoMarker, AztecBarcodeGeneratorBuilder, Barcode, BarcodeAr, BarcodeArAnnotationTrigger, BarcodeArCircleHighlight, BarcodeArCircleHighlightPreset, BarcodeArFeedback, BarcodeArInfoAnnotation, BarcodeArInfoAnnotationAnchor, BarcodeArInfoAnnotationBodyComponent, BarcodeArInfoAnnotationFooter, BarcodeArInfoAnnotationHeader, BarcodeArInfoAnnotationWidthPreset, BarcodeArPopoverAnnotation, BarcodeArPopoverAnnotationButton, BarcodeArRectangleHighlight, BarcodeArSession, BarcodeArSettings, BarcodeArStatusIconAnnotation, BarcodeArViewSettings, BarcodeBatch, BarcodeBatchBasicOverlay, BarcodeBatchBasicOverlayStyle, BarcodeBatchScenario, BarcodeBatchSession, BarcodeBatchSettings, BarcodeCapture, BarcodeCaptureFeedback, BarcodeCaptureOverlay, BarcodeCaptureOverlayStyle, BarcodeCaptureSession, BarcodeCaptureSettings, BarcodeCount, BarcodeCountCaptureList, BarcodeCountCaptureListSession, BarcodeCountFeedback, BarcodeCountNotInListActionSettings, BarcodeCountSession, BarcodeCountSettings, BarcodeCountToolbarSettings, BarcodeFilterHighlightSettingsBrush, BarcodeFilterHighlightType, BarcodeFilterSettings, BarcodeFind, BarcodeFindFeedback, BarcodeFindItem, BarcodeFindItemContent, BarcodeFindItemSearchOptions, BarcodeFindSettings, BarcodeFindViewSettings, BarcodeGenerator, BarcodeGeneratorBuilder, BarcodePick, BarcodePickActionCallback, BarcodePickAsyncMapperProductProvider, BarcodePickProduct, BarcodePickProductProviderCallback, BarcodePickProductProviderCallbackItem, BarcodePickScanningSession, BarcodePickSettings, BarcodePickState, BarcodePickStatusIconSettings, BarcodePickViewListenerEvents, BarcodePickViewSettings, BarcodePickViewUiListenerEvents, BarcodeSelection, BarcodeSelectionAimerSelection, BarcodeSelectionAutoSelectionStrategy, BarcodeSelectionBasicOverlay, BarcodeSelectionBasicOverlayStyle, BarcodeSelectionFeedback, BarcodeSelectionFreezeBehavior, BarcodeSelectionManualSelectionStrategy, BarcodeSelectionSession, BarcodeSelectionSettings, BarcodeSelectionTapBehavior, BarcodeSelectionTapSelection, BarcodeSpatialGrid, BatterySavingMode, Checksum, Code128BarcodeGeneratorBuilder, Code39BarcodeGeneratorBuilder, CompositeFlag, CompositeType, DataMatrixBarcodeGeneratorBuilder, Dot, DotWithIcons, Ean13BarcodeGeneratorBuilder, Ean13UpcaClassification, EncodingRange, InterleavedTwoOfFiveBarcodeGeneratorBuilder, LocalizedOnlyBarcode, QrCodeBarcodeGeneratorBuilder, QrCodeErrorCorrectionLevel, Range, Rectangular, RectangularWithIcons, SparkScan, SparkScanBarcodeErrorFeedback, SparkScanBarcodeFeedback, SparkScanBarcodeSuccessFeedback, SparkScanMiniPreviewSize, SparkScanPreviewBehavior, SparkScanScanningBehavior, SparkScanScanningModeDefault, SparkScanScanningModeTarget, SparkScanSession, SparkScanSettings, SparkScanToastSettings, SparkScanViewSettings, SparkScanViewState, StructuredAppendData, Symbology, SymbologyDescription, SymbologySettings, TargetBarcode, TrackedBarcode, UpcaBarcodeGeneratorBuilder } from './barcode.js';
import { FrameSourceState, Anchor, PointWithUnit, NumberWithUnit, MeasureUnit, Camera, CameraPosition, DataCaptureView, initCoreProxy, createRNNativeCaller, initCoreDefaults } from 'scandit-react-native-datacapture-core';
import React, { forwardRef, useRef, useState, useEffect, useImperativeHandle } from 'react';

// tslint:disable:variable-name
const NativeModule$b = NativeModules.ScanditDataCaptureBarcodeBatch;
const RNEventEmitter$9 = new NativeEventEmitter(NativeModule$b);
// tslint:enable:variable-name
class NativeBarcodeBatchListenerProxy {
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
        const listener = RNEventEmitter$9.addListener(BarcodeBatchListenerEvents.didUpdateSession, (event) => {
            this.eventEmitter.emit(BarcodeBatchListenerEvents.didUpdateSession, event.data);
        });
        this.nativeListeners.push(listener);
    }
    finishDidUpdateSessionCallback(enabled) {
        NativeModule$b.finishDidUpdateSessionCallback(enabled);
    }
    setModeEnabledState(enabled) {
        NativeModule$b.setModeEnabledState(enabled);
    }
    updateBarcodeBatchMode(modeJson) {
        return NativeModule$b.updateBarcodeBatchMode(modeJson);
    }
    applyBarcodeBatchModeSettings(newSettingsJson) {
        return NativeModule$b.applyBarcodeBatchModeSettings(newSettingsJson);
    }
}

// tslint:disable:variable-name
const NativeModule$a = NativeModules.ScanditDataCaptureBarcodeBatch;
const RNEventEmitter$8 = new NativeEventEmitter(NativeModule$a);
// tslint:enable:variable-name
class NativeBarcodeBatchBasicOverlayProxy {
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
    updateBarcodeBatchBasicOverlay(overlayJson) {
        return NativeModule$a.updateBarcodeBatchBasicOverlay(overlayJson);
    }
    subscribeBrushForTrackedBarcode() {
        const brushForTrackedBarcodeListener = RNEventEmitter$8.addListener(BarcodeBatchBasicOverlayListenerEvents.brushForTrackedBarcode, (event) => {
            this.eventEmitter.emit(BarcodeBatchBasicOverlayListenerEvents.brushForTrackedBarcode, event.data);
        });
        this.nativeListeners.push(brushForTrackedBarcodeListener);
    }
    subscribeDidTapTrackedBarcode() {
        const didTapTrackedBarcodeListener = RNEventEmitter$8.addListener(BarcodeBatchBasicOverlayListenerEvents.didTapTrackedBarcode, (event) => {
            this.eventEmitter.emit(BarcodeBatchBasicOverlayListenerEvents.didTapTrackedBarcode, event.data);
        });
        this.nativeListeners.push(didTapTrackedBarcodeListener);
    }
}

// tslint:disable:variable-name
const NativeModule$9 = NativeModules.ScanditDataCaptureBarcodeBatch;
const RNEventEmitter$7 = new NativeEventEmitter(NativeModule$9);
// tslint:enable:variable-name
class NativeBarcodeBatchAdvancedOverlayProxy {
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
        const viewForTrackedBarcodeListener = RNEventEmitter$7.addListener(BarcodeBatchAdvancedOverlayListenerEvents.viewForTrackedBarcode, (event) => {
            this.eventEmitter.emit(BarcodeBatchAdvancedOverlayListenerEvents.viewForTrackedBarcode, event.data);
        });
        this.nativeListeners.push(viewForTrackedBarcodeListener);
    }
    subscribeAnchorForTrackedBarcode() {
        const anchorForTrackedBarcodeListener = RNEventEmitter$7.addListener(BarcodeBatchAdvancedOverlayListenerEvents.anchorForTrackedBarcode, (event) => {
            this.eventEmitter.emit(BarcodeBatchAdvancedOverlayListenerEvents.anchorForTrackedBarcode, event.data);
        });
        this.nativeListeners.push(anchorForTrackedBarcodeListener);
    }
    subscribeOffsetForTrackedBarcode() {
        const offsetForTrackedBarcodeListener = RNEventEmitter$7.addListener(BarcodeBatchAdvancedOverlayListenerEvents.offsetForTrackedBarcode, (event) => {
            this.eventEmitter.emit(BarcodeBatchAdvancedOverlayListenerEvents.offsetForTrackedBarcode, event.data);
        });
        this.nativeListeners.push(offsetForTrackedBarcodeListener);
    }
    subscribeDidTapViewForTrackedBarcode() {
        const didTapViewForTrackedBarcodeListener = RNEventEmitter$7.addListener(BarcodeBatchAdvancedOverlayListenerEvents.didTapViewForTrackedBarcode, (event) => {
            this.eventEmitter.emit(BarcodeBatchAdvancedOverlayListenerEvents.didTapViewForTrackedBarcode, event.data);
        });
        this.nativeListeners.push(didTapViewForTrackedBarcodeListener);
    }
    updateBarcodeBatchAdvancedOverlay(overlayJson) {
        return NativeModule$9.updateBarcodeBatchAdvancedOverlay(overlayJson);
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
const NativeModule$8 = NativeModules.ScanditDataCaptureBarcodePick;
const RNEventEmitter$6 = new NativeEventEmitter(NativeModule$8);
// tslint:enable:variable-name
class NativeBarcodePickProductProxy extends BaseNativeProxy {
    nativeListeners = [];
    finishOnProductIdentifierForItems(jsonData) {
        return NativeModule$8.finishOnProductIdentifierForItems(jsonData);
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
const NativeModule$7 = NativeModules.ScanditDataCaptureBarcodePick;
const RNEventEmitter$5 = new NativeEventEmitter(NativeModule$7);
// tslint:enable:variable-name
class NativeBarcodePickViewProxy extends BaseNativeProxy {
    nativeListeners = [];
    didTapFinishButtonListener = null;
    ;
    viewStart() {
        return NativeModule$7.viewStart();
    }
    viewPause() {
        return Promise.resolve();
    }
    viewFreeze() {
        return NativeModule$7.viewFreeze();
    }
    viewStop() {
        return NativeModule$7.viewStop();
    }
    viewResume() {
        return Promise.resolve();
    }
    finishPickAction(code, result) {
        return NativeModule$7.finishPickAction(code, result);
    }
    findNodeHandle(view) {
        return findNodeHandle(view);
    }
    createView(id, json) {
        return NativeModule$7.createView(id, json);
    }
    updateView(json) {
        return NativeModule$7.updateView(json);
    }
    registerFrameworkEvents() {
        this.subscribeDidPickItemListener();
        this.subscribeDidUnpickItemListener();
        this.subscribeDidFreezeScanningListener();
        this.subscribeDidPauseScanningListener();
        this.subscribeDidStartScanningListener();
        this.subscribeDidStopScanningListener();
        NativeModule$7.addActionListener();
        NativeModule$7.addViewListener();
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
        NativeModule$7.removeActionListener();
        NativeModule$7.removeViewListener();
        NativeModule$7.unregisterBarcodePickViewUiListener();
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
        return NativeModule$7.registerBarcodePickViewUiListener();
    }
    unsubscribeBarcodePickViewUiListener() {
        this.didTapFinishButtonListener?.remove();
        if (this.didTapFinishButtonListener) {
            const index = this.nativeListeners.indexOf(this.didTapFinishButtonListener);
            if (index > -1) {
                this.nativeListeners.splice(index, 1);
            }
        }
        return NativeModule$7.unregisterBarcodePickViewUiListener();
    }
}

// tslint:disable:variable-name
const NativeModule$6 = NativeModules.ScanditDataCaptureBarcodeFind;
const RNEventEmitter$4 = new NativeEventEmitter(NativeModule$6);
// tslint:enable:variable-name
class NativeBarcodeFindListenerProxy extends BaseNativeProxy {
    nativeListeners = [];
    isModeEnabled = () => false;
    setItemList(itemsJson) {
        return NativeModule$6.barcodeFindSetItemList(itemsJson);
    }
    updateFindMode(barcodeFindJson) {
        return NativeModule$6.updateFindMode(barcodeFindJson);
    }
    barcodeFindModeStart() {
        return NativeModule$6.barcodeFindModeStart();
    }
    barcodeFindModePause() {
        return NativeModule$6.barcodeFindModePause();
    }
    barcodeFindModeStop() {
        return NativeModule$6.barcodeFindModeStop();
    }
    setModeEnabledState(isEnabled) {
        NativeModule$6.setModeEnabledState(isEnabled);
    }
    setBarcodeTransformer() {
        return NativeModule$6.setBarcodeTransformer();
    }
    submitBarcodeFindTransformerResult(transformedBarcode) {
        return NativeModule$6.submitBarcodeFindTransformerResult(transformedBarcode);
    }
    updateFeedback(feedbackJson) {
        return NativeModule$6.updateBarcodeFindFeedback(feedbackJson);
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
        return NativeModule$6.registerBarcodeFindListener();
    }
    unsubscribeBarcodeFindListener() {
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
        return NativeModule$6.unregisterBarcodeFindListener();
    }
}

// tslint:disable:variable-name
const NativeModule$5 = NativeModules.ScanditDataCaptureBarcodeFind;
const RNEventEmitter$3 = new NativeEventEmitter(NativeModule$5);
// tslint:enable:variable-name
class NativeBarcodeFindViewProxy extends BaseNativeProxy {
    nativeListeners = [];
    updateView(barcodeFindViewJson) {
        return NativeModule$5.updateFindView(barcodeFindViewJson);
    }
    onPause() {
        return NativeModule$5.barcodeFindViewOnPause();
    }
    onResume() {
        return NativeModule$5.barcodeFindViewOnResume();
    }
    startSearching() {
        return NativeModule$5.barcodeFindViewStartSearching();
    }
    stopSearching() {
        return NativeModule$5.barcodeFindViewStopSearching();
    }
    pauseSearching() {
        return NativeModule$5.barcodeFindViewPauseSearching();
    }
    findNodeHandle(view) {
        return findNodeHandle(view);
    }
    createView(id, json) {
        return NativeModule$5.createFindView(id, json);
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
        return NativeModule$5.registerBarcodeFindViewListener();
    }
    unsubscribeBarcodeFindViewListener() {
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
        return NativeModule$5.unregisterBarcodeFindViewListener();
    }
}

// tslint:disable:variable-name
const NativeModule$4 = NativeModules.ScanditDataCaptureBarcodePick;
const RNEventEmitter$2 = new NativeEventEmitter(NativeModule$4);
// tslint:enable:variable-name
class NativeBarcodePickListenerProxy extends BaseNativeProxy {
    nativeListeners = [];
    subscribeBarcodePickListeners() {
        NativeModule$4.addScanningListener();
        this.subscribeDidCompleteScanningSessionListener();
        this.subscribeDidUpdateScanningSessionListener();
    }
    unsubscribeBarcodePickListeners() {
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
        NativeModule$4.removeScanningListener();
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
// tslint:enable:variable-name
class NativeBarcodeCountViewProxy extends AdvancedNativeProxy {
    // Not used on RN
    $hideBarcodeCountView() {
        return Promise.resolve(undefined);
    }
    // Not used on RN
    $setBarcodeCountViewPositionAndSize({ top, left, width, height, shouldBeUnderWebView }) {
        return Promise.resolve(undefined);
    }
    // Not used on RN
    $showBarcodeCountView() {
        return Promise.resolve(undefined);
    }
    $enableBarcodeCountHardwareTrigger({ hardwareTriggerKeyCode }) {
        if (Platform.OS === 'ios') {
            return Promise.resolve(undefined);
        }
        return NativeModule$2.enableBarcodeCountHardwareTrigger(hardwareTriggerKeyCode);
    }
}

// tslint:disable:variable-name
const NativeModule$1 = NativeModules.ScanditDataCaptureBarcodeAr;
const RNEventEmitter$1 = new NativeEventEmitter(NativeModule$1);
// tslint:enable:variable-name
class NativeBarcodeArListenerProxy {
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
    updateMode(barcodeArJson) {
        return NativeModule$1.updateBarcodeArMode(barcodeArJson);
    }
    updateFeedback(feedbackJson) {
        NativeModule$1.updateBarcodeArFeedback(feedbackJson);
    }
    resetBarcodeAr() {
        return NativeModule$1.resetBarcodeAr();
    }
    registerBarcodeArListener() {
        return NativeModule$1.registerBarcodeArListener();
    }
    unregisterBarcodeArListener() {
        return NativeModule$1.unregisterBarcodeArListener();
    }
    finishOnDidUpdateSession() {
        return NativeModule$1.finishBarcodeArOnDidUpdateSession();
    }
    subscribeDidUpdateSession() {
        const didUpdateSessionListener = RNEventEmitter$1.addListener(BarcodeArListenerEvents.didUpdateSession, async (event) => {
            this.eventEmitter.emit(BarcodeArListenerEvents.didUpdateSession, event.data);
        });
        this.nativeListeners.push(didUpdateSessionListener);
        return Promise.resolve();
    }
}

// tslint:disable:variable-name
const NativeModule = NativeModules.ScanditDataCaptureBarcodeAr;
// tslint:enable:variable-name
class NativeBarcodeArSessionProxy {
    resetSession() {
        return NativeModule.resetBarcodeArSession();
    }
}

// tslint:disable:variable-name
const { ScanditDataCaptureBarcodeAr } = NativeModules;
const RNEventEmitter = new NativeEventEmitter(ScanditDataCaptureBarcodeAr);
// tslint:enable:variable-name
class NativeBarcodeArViewProxy extends BaseNativeProxy {
    nativeListeners = [];
    barcodeArAnnotationProvider = null;
    barcodeArHighlightProvider = null;
    didTapInfoAnnotationEvent = null;
    didTapInfoAnnotationFooterEvent = null;
    didTapInfoAnnotationHeaderEvent = null;
    didTapInfoAnnotationLeftIconEvent = null;
    didTapInfoAnnotationRightIconEvent = null;
    didTapPopoverButtonEvent = null;
    didTapPopoverEvent = null;
    registerBarcodeArViewUiListener() {
        return ScanditDataCaptureBarcodeAr.registerBarcodeArViewUiListener();
    }
    unregisterBarcodeArViewUiListener() {
        return ScanditDataCaptureBarcodeAr.unregisterBarcodeArViewUiListener();
    }
    registerBarcodeArAnnotationProvider() {
        this.barcodeArAnnotationProvider = RNEventEmitter.addListener(BarcodeArViewEvents.didTapHighlightForBarcode, (event) => {
            this.eventEmitter.emit(BarcodeArViewEvents.didTapHighlightForBarcode, event.data);
        });
        return ScanditDataCaptureBarcodeAr.registerBarcodeArAnnotationProvider();
    }
    unregisterBarcodeArAnnotationProvider() {
        this.barcodeArAnnotationProvider?.remove();
        this.barcodeArAnnotationProvider = null;
        return ScanditDataCaptureBarcodeAr.unregisterBarcodeArAnnotationProvider();
    }
    registerBarcodeArHighlightProvider() {
        this.barcodeArHighlightProvider = RNEventEmitter.addListener(BarcodeArViewEvents.didTapHighlightForBarcode, (event) => {
            this.eventEmitter.emit(BarcodeArViewEvents.didTapHighlightForBarcode, event.data);
        });
        return ScanditDataCaptureBarcodeAr.registerBarcodeArHighlightProvider();
    }
    unregisterBarcodeArHighlightProvider() {
        this.barcodeArHighlightProvider?.remove();
        this.barcodeArHighlightProvider = null;
        return ScanditDataCaptureBarcodeAr.unregisterBarcodeArHighlightProvider();
    }
    start() {
        return ScanditDataCaptureBarcodeAr.barcodeArViewStart();
    }
    stop() {
        return ScanditDataCaptureBarcodeAr.barcodeArViewStop();
    }
    pause() {
        return ScanditDataCaptureBarcodeAr.barcodeArViewPause();
    }
    update(json) {
        return ScanditDataCaptureBarcodeAr.updateBarcodeArView(json);
    }
    barcodeArViewReset() {
        return ScanditDataCaptureBarcodeAr.barcodeArViewReset();
    }
    findNodeHandle(view) {
        if (view === null) {
            return null;
        }
        return findNodeHandle(view);
    }
    createView(view, viewJson) {
        const id = this.findNodeHandle(view);
        return ScanditDataCaptureBarcodeAr.createBarcodeArView(id, viewJson);
    }
    subscribeViewListeners() {
        const onDidTapHighlightForBarcodeListener = RNEventEmitter.addListener(BarcodeArViewEvents.didTapHighlightForBarcode, (event) => {
            this.eventEmitter.emit(BarcodeArViewEvents.didTapHighlightForBarcode, event.data);
        });
        this.nativeListeners.push(onDidTapHighlightForBarcodeListener);
        return ScanditDataCaptureBarcodeAr.registerBarcodeArViewUiListener();
    }
    updateHighlight(highlightJson) {
        return ScanditDataCaptureBarcodeAr.updateBarcodeArHighlight(highlightJson);
    }
    updateAnnotation(annotationJson) {
        return ScanditDataCaptureBarcodeAr.updateBarcodeArAnnotation(annotationJson);
    }
    updatePopoverButton(updateJson) {
        return ScanditDataCaptureBarcodeAr.updateBarcodeArPopoverButtonAtIndex(updateJson);
    }
    unsubscribeViewListeners() {
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
        return ScanditDataCaptureBarcodeAr.unregisterBarcodeArViewUiListener();
    }
    finishAnnotationForBarcode(annotation) {
        return ScanditDataCaptureBarcodeAr.finishBarcodeArAnnotationForBarcode(annotation);
    }
    finishHighlightForBarcode(highlight) {
        return ScanditDataCaptureBarcodeAr.finishBarcodeArHighlightForBarcode(highlight);
    }
    subscribeToAnnotationProviderEvents() {
        this.barcodeArAnnotationProvider = RNEventEmitter.addListener(BarcodeArViewEvents.annotationForBarcode, (event) => {
            this.eventEmitter.emit(BarcodeArViewEvents.annotationForBarcode, event.data);
        });
        this.didTapInfoAnnotationEvent = RNEventEmitter.addListener(BarcodeArViewEvents.didTapInfoAnnotationEvent, (event) => {
            this.eventEmitter.emit(BarcodeArViewEvents.didTapInfoAnnotationEvent, event.data);
        });
        this.didTapInfoAnnotationFooterEvent = RNEventEmitter.addListener(BarcodeArViewEvents.didTapInfoAnnotationFooterEvent, (event) => {
            this.eventEmitter.emit(BarcodeArViewEvents.didTapInfoAnnotationFooterEvent, event.data);
        });
        this.didTapInfoAnnotationHeaderEvent = RNEventEmitter.addListener(BarcodeArViewEvents.didTapInfoAnnotationHeaderEvent, (event) => {
            this.eventEmitter.emit(BarcodeArViewEvents.didTapInfoAnnotationHeaderEvent, event.data);
        });
        this.didTapInfoAnnotationLeftIconEvent = RNEventEmitter.addListener(BarcodeArViewEvents.didTapInfoAnnotationLeftIconEvent, (event) => {
            this.eventEmitter.emit(BarcodeArViewEvents.didTapInfoAnnotationLeftIconEvent, event.data);
        });
        this.didTapInfoAnnotationRightIconEvent = RNEventEmitter.addListener(BarcodeArViewEvents.didTapInfoAnnotationRightIconEvent, (event) => {
            this.eventEmitter.emit(BarcodeArViewEvents.didTapInfoAnnotationRightIconEvent, event.data);
        });
        this.didTapPopoverButtonEvent = RNEventEmitter.addListener(BarcodeArViewEvents.didTapPopoverButtonEvent, (event) => {
            this.eventEmitter.emit(BarcodeArViewEvents.didTapPopoverButtonEvent, event.data);
        });
        this.didTapPopoverEvent = RNEventEmitter.addListener(BarcodeArViewEvents.didTapPopoverEvent, (event) => {
            this.eventEmitter.emit(BarcodeArViewEvents.didTapPopoverEvent, event.data);
        });
    }
    unsubscribeFromAnnotationProviderEvents() {
        this.barcodeArAnnotationProvider?.remove();
        this.barcodeArAnnotationProvider = null;
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
        this.barcodeArHighlightProvider = RNEventEmitter.addListener(BarcodeArViewEvents.highlightForBarcode, (event) => {
            this.eventEmitter.emit(BarcodeArViewEvents.highlightForBarcode, event.data);
        });
    }
    unsubscribeFromHighlightProviderEvents() {
        this.barcodeArHighlightProvider?.remove();
        this.barcodeArHighlightProvider = null;
    }
}

function initBarcodeProxy() {
    initCoreProxy();
    FactoryMaker.bindLazyInstance('BarcodeCaptureListenerProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureBarcodeCapture);
        return createAdvancedNativeProxy(caller, BarcodeCaptureListenerEvents);
    });
    FactoryMaker.bindInstance('BarcodeBatchListenerProxy', new NativeBarcodeBatchListenerProxy());
    FactoryMaker.bindInstance('BarcodeBatchBasicOverlayProxy', new NativeBarcodeBatchBasicOverlayProxy());
    FactoryMaker.bindInstance('BarcodeBatchAdvancedOverlayProxy', new NativeBarcodeBatchAdvancedOverlayProxy());
    FactoryMaker.bindLazyInstance('BarcodeSelectionListenerProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureBarcodeSelection);
        return createAdvancedNativeProxy(caller, BarcodeSelectionListenerEvents);
    });
    FactoryMaker.bindLazyInstance('BarcodeSelectionOverlayProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureBarcodeSelection);
        return createAdvancedNativeProxy(caller, BarcodeSelectionBrushProviderEvents);
    });
    FactoryMaker.bindLazyInstance('BarcodeSelectionProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureBarcodeSelection);
        return createAdvancedNativeProxy(caller);
    });
    FactoryMaker.bindInstance('BarcodeArListenerProxy', new NativeBarcodeArListenerProxy());
    FactoryMaker.bindInstance('BarcodeArSessionProxy', new NativeBarcodeArSessionProxy());
    FactoryMaker.bindInstance('BarcodeArViewProxy', new NativeBarcodeArViewProxy());
    FactoryMaker.bindLazyInstance('BarcodeCountListenerProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureBarcodeCount);
        return createAdvancedNativeProxy(caller, BarcodeCountListenerEvents);
    });
    FactoryMaker.bindLazyInstance('BarcodeCountViewProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureBarcodeCount);
        return createAdvancedNativeFromCtorProxy(NativeBarcodeCountViewProxy, caller, BarcodeCountViewEvents);
    });
    FactoryMaker.bindLazyInstance('BarcodeCountSessionProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureBarcodeCount);
        return createAdvancedNativeProxy(caller);
    });
    FactoryMaker.bindInstance('BarcodePickListenerProxy', new NativeBarcodePickListenerProxy());
    FactoryMaker.bindInstance('BarcodePickProductProxy', new NativeBarcodePickProductProxy());
    FactoryMaker.bindInstance('BarcodePickViewProxy', new NativeBarcodePickViewProxy());
    FactoryMaker.bindLazyInstance('SparkScanViewProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureSparkScan);
        return createAdvancedInstanceAwareNativeProxy(caller, SparkScanViewEvents);
    });
    FactoryMaker.bindInstance('BarcodeFindProxy', new NativeBarcodeFindListenerProxy());
    FactoryMaker.bindInstance('BarcodeFindViewProxy', new NativeBarcodeFindViewProxy());
    FactoryMaker.bindInstance('BarcodeGeneratorProxy', new NativeBarcodeGeneratorProxy());
}

// tslint:disable-next-line:variable-name
const ScanditDataCaptureBarcode = NativeModules.ScanditDataCaptureBarcode;
// tslint:disable-next-line:variable-name
const BarcodeCapture = NativeModules.ScanditDataCaptureBarcodeCapture;
// tslint:disable-next-line:variable-name
const BarcodeAr = NativeModules.ScanditDataCaptureBarcodeAr;
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
    loadBarcodeArDefaults(BarcodeAr.Defaults);
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
        basicOverlayRef.current =
            BarcodeBatchBasicOverlay.withBarcodeBatchForViewWithStyle(getMode(), null, props.basicOverlayStyle || BarcodeBatchBasicOverlayStyle.Frame);
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
    // Create a ref to store current props
    const currentProps = useRef({
        isEnabled: props.isEnabled,
        desiredCameraState: props.desiredCameraState,
    });
    // Update the ref whenever props change
    useEffect(() => {
        currentProps.current = {
            isEnabled: props.isEnabled,
            desiredCameraState: currentProps.current.desiredCameraState,
        };
        getMode().isEnabled = currentProps.current.isEnabled;
        // Clean cache
        setViewForTrackedBarcodeCache(new Map());
    }, [props.isEnabled]);
    useEffect(() => {
        currentProps.current = {
            isEnabled: currentProps.current.isEnabled,
            desiredCameraState: props.desiredCameraState,
        };
        if (props.desiredCameraState) {
            getCamera()?.switchToDesiredState(props.desiredCameraState);
        }
    }, [props.desiredCameraState]);
    useEffect(() => {
        doSetup();
        const subscription = AppState.addEventListener('change', nextAppState => {
            if (appState.current.match(/inactive|background/) &&
                nextAppState === 'active') {
                // Use the latest props values from the ref
                getMode().isEnabled = currentProps.current.isEnabled;
                if (currentProps.current.desiredCameraState) {
                    getCamera()?.switchToDesiredState(currentProps.current.desiredCameraState);
                }
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
        if (props.shouldShowScanAreaGuides) {
            getBasicOverlay().shouldShowScanAreaGuides =
                props.shouldShowScanAreaGuides;
        }
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
                    // Check if we already have this in the cache
                    const currentCache = viewForTrackedBarcodeCache;
                    if (currentCache.has(barcodeBatchKey)) {
                        return currentCache.get(barcodeBatchKey) || null;
                    }
                    if (props.viewForTrackedBarcode) {
                        const view = props.viewForTrackedBarcode(overlay, trackedBarcode);
                        if (view instanceof Promise) {
                            // For promises, we'll return the promise directly and update the cache when it resolves
                            view.then(actualView => {
                                // We need to use a callback form of setState to avoid circular dependencies
                                setTimeout(() => {
                                    setViewForTrackedBarcodeCache(prevCache => {
                                        const newCache = new Map(prevCache);
                                        newCache.set(barcodeBatchKey, actualView);
                                        return newCache;
                                    });
                                }, 0);
                            });
                            return view;
                        }
                        else {
                            // For non-promises, update cache and return immediately
                            setTimeout(() => {
                                setViewForTrackedBarcodeCache(prevCache => {
                                    const newCache = new Map(prevCache);
                                    newCache.set(barcodeBatchKey, view);
                                    return newCache;
                                });
                            }, 0);
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
        // Intentionally not including viewForTrackedBarcodeCache to avoid circular dependency
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

class BarcodeArView extends React.Component {
    baseBarcodeArView;
    static forMode(dataCaptureContext, barcodeAr) {
        return new BarcodeArView({ context: dataCaptureContext, barcodeAr });
    }
    static forModeWithViewSettings(dataCaptureContext, barcodeAr, viewSettings) {
        return new BarcodeArView({ context: dataCaptureContext, barcodeAr, settings: viewSettings });
    }
    static forModeWithViewSettingsAndCameraSettings(dataCaptureContext, barcodeAr, viewSettings, cameraSettings) {
        return new BarcodeArView({ context: dataCaptureContext, barcodeAr, settings: viewSettings, cameraSettings });
    }
    constructor(props) {
        super(props);
        this.baseBarcodeArView = new BaseBarcodeArView(props.context, props.barcodeAr, this, // Passing the native view to the base
        props.settings, props.cameraSettings, props.annotationProvider, props.highlightProvider, props.uiListener, Platform.OS === 'ios');
    }
    async componentDidMount() {
        if (Platform.OS === 'android') {
            this.createFragment();
        }
    }
    componentWillUnmount() {
        this.baseBarcodeArView.dispose();
    }
    get uiListener() {
        return this.baseBarcodeArView.barcodeArViewUiListener;
    }
    set uiListener(value) {
        this.baseBarcodeArView.barcodeArViewUiListener = value;
    }
    get annotationProvider() {
        return this.baseBarcodeArView.annotationProvider;
    }
    set annotationProvider(value) {
        this.baseBarcodeArView.annotationProvider = value;
    }
    get highlightProvider() {
        return this.baseBarcodeArView.highlightProvider;
    }
    set highlightProvider(value) {
        this.baseBarcodeArView.highlightProvider = value;
    }
    start() {
        this.baseBarcodeArView.start();
    }
    stop() {
        this.baseBarcodeArView.stop();
    }
    pause() {
        this.baseBarcodeArView.pause();
    }
    reset() {
        this.baseBarcodeArView.reset();
    }
    get shouldShowTorchControl() {
        return this.baseBarcodeArView.shouldShowTorchControl;
    }
    set shouldShowTorchControl(value) {
        this.baseBarcodeArView.shouldShowTorchControl = value;
    }
    get torchControlPosition() {
        return this.baseBarcodeArView.torchControlPosition;
    }
    set torchControlPosition(value) {
        this.baseBarcodeArView.torchControlPosition = value;
    }
    get shouldShowZoomControl() {
        return this.baseBarcodeArView.shouldShowZoomControl;
    }
    set shouldShowZoomControl(value) {
        this.baseBarcodeArView.shouldShowZoomControl = value;
    }
    get zoomControlPosition() {
        return this.baseBarcodeArView.zoomControlPosition;
    }
    set zoomControlPosition(value) {
        this.baseBarcodeArView.zoomControlPosition = value;
    }
    get shouldShowCameraSwitchControl() {
        return this.baseBarcodeArView.shouldShowCameraSwitchControl;
    }
    set shouldShowCameraSwitchControl(value) {
        this.baseBarcodeArView.shouldShowCameraSwitchControl = value;
    }
    get cameraSwitchControlPosition() {
        return this.baseBarcodeArView.cameraSwitchControlPosition;
    }
    set cameraSwitchControlPosition(value) {
        this.baseBarcodeArView.cameraSwitchControlPosition = value;
    }
    get shouldShowMacroModeControl() {
        return this.baseBarcodeArView.shouldShowMacroModeControl;
    }
    set shouldShowMacroModeControl(value) {
        this.baseBarcodeArView.shouldShowMacroModeControl = value;
    }
    get macroModeControlPosition() {
        return this.baseBarcodeArView.macroModeControlPosition;
    }
    set macroModeControlPosition(value) {
        this.baseBarcodeArView.macroModeControlPosition = value;
    }
    render() {
        return React.createElement(RNTBarcodeArView, { ...this.props });
    }
    createFragment() {
        const viewId = findNodeHandle(this);
        UIManager.dispatchViewManagerCommand(viewId, 'createBarcodeArView', [viewId, JSON.stringify(this.toJSON())]);
    }
    toJSON() {
        return this.baseBarcodeArView.toJSON();
    }
}
// tslint:disable-next-line:variable-name
const RNTBarcodeArView = requireNativeComponent('RNTBarcodeArView', BarcodeArView);

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
        this.baseSparkScanView = BaseSparkScanView.withProps(props);
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
        // This is required to ensure that findNodeHandle returns a valid handle
        InteractionManager.runAfterInteractions(() => {
            this.createSparkScanView();
        });
    }
    componentDidUpdate(prevProps) {
        this.baseSparkScanView.updateWithProps(prevProps, this.props);
    }
    createSparkScanView() {
        const viewId = findNodeHandle(this);
        this.baseSparkScanView.createNativeView(viewId);
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

export { BarcodeArView, BarcodeBatchAdvancedOverlay, BarcodeBatchAdvancedOverlayView, BarcodeBatchView, BarcodeCaptureView, BarcodeCountView, BarcodeCountViewStyle, BarcodeFindView, BarcodePickView, BarcodeSelectionView, SparkScanView };
