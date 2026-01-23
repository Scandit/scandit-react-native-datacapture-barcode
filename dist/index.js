import { NativeModules, AppState, View, InteractionManager, findNodeHandle, requireNativeComponent } from 'react-native';
import { ScreenStateManager, FactoryMaker, createNativeProxy, createAdvancedNativeProxy, createAdvancedInstanceAwareNativeProxy, ignoreFromSerialization } from 'scandit-react-native-datacapture-core/dist/core';
import { FrameSourceState, Anchor, PointWithUnit, NumberWithUnit, MeasureUnit, Camera, CameraPosition, DataCaptureView, initCoreProxy, createRNNativeCaller, initCoreDefaults } from 'scandit-react-native-datacapture-core';
import { BarcodeBatch as BarcodeBatch$1, BarcodeCapture as BarcodeCapture$1, BaseBarcodeArView, BarcodeSelection as BarcodeSelection$1, BarcodeSelectionSettings, BaseSparkScanView, BaseBarcodeCountView, BaseBarcodePickView, BaseBarcodeFindView, BarcodeSelectionListenerEvents, BarcodeSelectionBrushProviderEvents, BarcodeCountViewEvents, SparkScanViewEvents, loadBarcodeDefaults, loadBarcodeCaptureDefaults, loadBarcodeArDefaults, loadBarcodeBatchDefaults, loadBarcodeSelectionDefaults, loadBarcodeCountDefaults, loadBarcodePickDefaults, loadBarcodeFindDefaults, loadSparkScanDefaults, BaseBarcodeBatchAdvancedOverlay, BarcodeBatchSettings, BarcodeBatchBasicOverlay, BarcodeBatchBasicOverlayStyle, BarcodeCaptureSettings, BarcodeCaptureOverlay, BarcodeSelectionBasicOverlay, BarcodeSelectionBasicOverlayStyle } from './barcode.js';
export { ArucoDictionary, ArucoDictionaryPreset, ArucoMarker, AztecBarcodeGeneratorBuilder, Barcode, BarcodeAr, BarcodeArAnnotationTrigger, BarcodeArCircleHighlight, BarcodeArCircleHighlightPreset, BarcodeArFeedback, BarcodeArInfoAnnotation, BarcodeArInfoAnnotationAnchor, BarcodeArInfoAnnotationBodyComponent, BarcodeArInfoAnnotationFooter, BarcodeArInfoAnnotationHeader, BarcodeArInfoAnnotationWidthPreset, BarcodeArPopoverAnnotation, BarcodeArPopoverAnnotationButton, BarcodeArRectangleHighlight, BarcodeArSession, BarcodeArSettings, BarcodeArStatusIconAnnotation, BarcodeArViewSettings, BarcodeBatch, BarcodeBatchBasicOverlay, BarcodeBatchBasicOverlayStyle, BarcodeBatchScenario, BarcodeBatchSession, BarcodeBatchSettings, BarcodeCapture, BarcodeCaptureFeedback, BarcodeCaptureOverlay, BarcodeCaptureOverlayStyle, BarcodeCaptureSession, BarcodeCaptureSettings, BarcodeCount, BarcodeCountCaptureList, BarcodeCountCaptureListSession, BarcodeCountFeedback, BarcodeCountNotInListActionSettings, BarcodeCountSession, BarcodeCountSettings, BarcodeCountToolbarSettings, BarcodeFilterHighlightSettingsBrush, BarcodeFilterHighlightType, BarcodeFilterSettings, BarcodeFind, BarcodeFindFeedback, BarcodeFindItem, BarcodeFindItemContent, BarcodeFindItemSearchOptions, BarcodeFindSession, BarcodeFindSettings, BarcodeFindViewSettings, BarcodeGenerator, BarcodeGeneratorBuilder, BarcodePick, BarcodePickActionCallback, BarcodePickAsyncMapperProductProvider, BarcodePickProduct, BarcodePickProductProviderCallback, BarcodePickProductProviderCallbackItem, BarcodePickScanningSession, BarcodePickSession, BarcodePickSettings, BarcodePickState, BarcodePickStatusIconSettings, BarcodePickViewEvents, BarcodePickViewSettings, BarcodeSelection, BarcodeSelectionAimerSelection, BarcodeSelectionAutoSelectionStrategy, BarcodeSelectionBasicOverlay, BarcodeSelectionBasicOverlayStyle, BarcodeSelectionFeedback, BarcodeSelectionFreezeBehavior, BarcodeSelectionManualSelectionStrategy, BarcodeSelectionSession, BarcodeSelectionSettings, BarcodeSelectionTapBehavior, BarcodeSelectionTapSelection, BarcodeSpatialGrid, BatterySavingMode, Checksum, Code128BarcodeGeneratorBuilder, Code39BarcodeGeneratorBuilder, CompositeFlag, CompositeType, DataMatrixBarcodeGeneratorBuilder, Dot, DotWithIcons, Ean13BarcodeGeneratorBuilder, Ean13UpcaClassification, EncodingRange, InterleavedTwoOfFiveBarcodeGeneratorBuilder, LocalizedOnlyBarcode, QrCodeBarcodeGeneratorBuilder, QrCodeErrorCorrectionLevel, Range, Rectangular, RectangularWithIcons, SparkScan, SparkScanBarcodeErrorFeedback, SparkScanBarcodeFeedback, SparkScanBarcodeSuccessFeedback, SparkScanMiniPreviewSize, SparkScanPreviewBehavior, SparkScanScanningBehavior, SparkScanScanningModeDefault, SparkScanScanningModeTarget, SparkScanSession, SparkScanSettings, SparkScanToastSettings, SparkScanViewSettings, SparkScanViewState, StructuredAppendData, Symbology, SymbologyDescription, SymbologySettings, TargetBarcode, TrackedBarcode, UpcaBarcodeGeneratorBuilder } from './barcode.js';
import React, { forwardRef, useRef, useMemo, useState, useEffect, useImperativeHandle } from 'react';

// tslint:disable:variable-name
const NativeModule = NativeModules.ScanditDataCaptureBarcodeGenerator;
// tslint:enable:variable-name
class NativeBarcodeGeneratorProxy {
    create(barcodeGeneratorJson) {
        return NativeModule.create(barcodeGeneratorJson);
    }
    dispose(generatorId) {
        return NativeModule.disposeGenerator(generatorId);
    }
    generateFromBase64EncodedData(generatorId, data, imageWidth) {
        return NativeModule.generateFromBase64EncodedData(generatorId, data, imageWidth);
    }
    generate(generatorId, text, imageWidth) {
        return NativeModule.generate(generatorId, text, imageWidth);
    }
}

function initBarcodeProxy() {
    initCoreProxy();
    FactoryMaker.bindLazyInstance('BarcodeCaptureListenerProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureBarcodeCapture);
        return createNativeProxy(caller);
    });
    FactoryMaker.bindLazyInstance('BarcodeCaptureOverlayProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureBarcodeCapture);
        return createNativeProxy(caller);
    });
    FactoryMaker.bindLazyInstance('BarcodeBatchListenerProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureBarcodeBatch);
        return createNativeProxy(caller);
    });
    FactoryMaker.bindLazyInstance('BarcodeBatchBasicOverlayProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureBarcodeBatch);
        return createNativeProxy(caller);
    });
    FactoryMaker.bindLazyInstance('BarcodeBatchAdvancedOverlayProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureBarcodeBatch);
        return createNativeProxy(caller);
    });
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
    FactoryMaker.bindLazyInstance('BarcodeArSessionProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureBarcodeAr);
        return createNativeProxy(caller);
    });
    FactoryMaker.bindLazyInstance('BarcodeArViewProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureBarcodeAr);
        return createNativeProxy(caller);
    });
    FactoryMaker.bindLazyInstance('BarcodeCountViewProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureBarcodeCount);
        return createAdvancedInstanceAwareNativeProxy(caller, BarcodeCountViewEvents);
    });
    FactoryMaker.bindLazyInstance('BarcodeCountSessionProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureBarcodeCount);
        return createAdvancedInstanceAwareNativeProxy(caller);
    });
    FactoryMaker.bindLazyInstance('BarcodePickViewProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureBarcodePick);
        return createNativeProxy(caller);
    });
    FactoryMaker.bindLazyInstance('SparkScanViewProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureSparkScan);
        return createAdvancedInstanceAwareNativeProxy(caller, SparkScanViewEvents);
    });
    FactoryMaker.bindLazyInstance('BarcodeFindViewProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureBarcodeFind);
        return createNativeProxy(caller);
    });
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
    /**
     * @deprecated Since 7.6. This factory will be removed in 8.0.
     * Create the overlay and add it to the view manually instead:
     * ```ts
     * const overlay = new BarcodeBatchAdvancedOverlay();
     * view.addOverlay(overlay);
     * ```
     */
    static withBarcodeBatchForView(barcodeBatch, view) {
        const overlay = new BarcodeBatchAdvancedOverlay(barcodeBatch);
        view?.addOverlay(overlay.baseBarcodeBatch);
        return overlay;
    }
    constructor(mode) {
        this.baseBarcodeBatch = new BaseBarcodeBatchAdvancedOverlay(mode);
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
    updateSizeOfTrackedBarcodeView(trackedBarcodeIdentifier, width, height) {
        return this.baseBarcodeBatch.updateSizeOfTrackedBarcodeView(trackedBarcodeIdentifier, width, height);
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
    const viewId = useRef(Math.floor(Math.random() * 1000000));
    const screenStateManager = useMemo(() => {
        return ScreenStateManager.getInstance();
    }, []);
    function getMode() {
        if (barcodeBatchModeRef.current !== null) {
            return barcodeBatchModeRef.current;
        }
        barcodeBatchModeRef.current = new BarcodeBatch$1(props.barcodeBatchSettings || new BarcodeBatchSettings());
        barcodeBatchModeRef.current.parentId = viewId.current;
        return barcodeBatchModeRef.current;
    }
    const basicOverlayRef = useRef(null);
    function getBasicOverlay() {
        if (basicOverlayRef.current !== null) {
            return basicOverlayRef.current;
        }
        basicOverlayRef.current = new BarcodeBatchBasicOverlay(getMode(), props.basicOverlayStyle || BarcodeBatchBasicOverlayStyle.Frame);
        if (props.defaultBasicOverlayBrush) {
            basicOverlayRef.current.brush = props.defaultBasicOverlayBrush;
        }
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
    const [basicOverlayListener, setBasicOverlayListener] = useState(null);
    const [advancedOverlayListener, setAdvancedOverlayListener] = useState(null);
    const torchSwitchControl = useRef(null);
    const zoomSwitchControl = useRef(null);
    const [viewForTrackedBarcodeCache, setViewForTrackedBarcodeCache] = useState(new Map());
    const appState = useRef(AppState.currentState);
    // Create a ref to store current props
    const currentProps = useRef({
        isEnabled: props.isEnabled ?? true,
        desiredCameraState: props.desiredCameraState,
    });
    // Update the ref whenever props change
    useEffect(() => {
        currentProps.current = {
            isEnabled: props.isEnabled ?? true,
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
        if (props.desiredCameraState && screenStateManager.isScreenActive(viewId.current)) {
            getCamera()?.switchToDesiredState(props.desiredCameraState);
        }
    }, [props.desiredCameraState]);
    const handleAppStateChange = (nextAppState) => {
        if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
            // Use the latest props values from the ref
            getMode().isEnabled = currentProps.current.isEnabled;
            if (currentProps.current.desiredCameraState) {
                getCamera()?.switchToDesiredState(currentProps.current.desiredCameraState);
            }
        }
        else if (nextAppState.match(/inactive|background/) && appState.current === 'active') {
            getMode().isEnabled = false;
            if (screenStateManager.isScreenActive(viewId.current)) {
                getCamera()?.switchToDesiredState(FrameSourceState.Off);
            }
        }
        appState.current = nextAppState;
    };
    useEffect(() => {
        doSetup();
        const subscription = AppState.addEventListener('change', handleAppStateChange);
        return () => {
            subscription.remove();
            doCleanup();
        };
    }, []);
    const doSetup = () => {
        screenStateManager.setActiveScreen(viewId.current);
        if (componentIsSetUp.current)
            return;
        componentIsSetUp.current = true;
        /* Handling Data Capture Context */
        props.context.setFrameSource(getCamera());
        props.context.addMode(getMode());
        /* Adding Basic Overlay */
        if (viewRef.current) {
            viewRef.current.addOverlay(getBasicOverlay());
            if (advancedOverlayRef.current) {
                viewRef.current.addOverlay(advancedOverlayRef.current);
            }
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
        /* Cleaning Overlays */
        const dcView = viewRef.current;
        if (dcView != null) {
            dcView.removeAllOverlays();
        }
        /* Cleaning Data Capture Context */
        if (barcodeBatchModeRef.current) {
            props.context.removeMode(barcodeBatchModeRef.current);
        }
        barcodeBatchModeRef.current = null;
        // Execute this after 1 second to avoid turning off the camera and on again
        // when navigating back to another screen that handles camera
        setTimeout(() => {
            /* Closing the camera if camera is active */
            if (screenStateManager.isScreenActive(viewId.current)) {
                getCamera()?.switchToDesiredState(FrameSourceState.Off);
            }
        }, 1000);
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
            getBasicOverlay().shouldShowScanAreaGuides = props.shouldShowScanAreaGuides;
        }
    }, [props.shouldShowScanAreaGuides]);
    useEffect(() => {
        getBasicOverlay().listener = basicOverlayListener;
    }, [basicOverlayListener]);
    useEffect(() => {
        if (props.brushForTrackedBarcode || props.didTapTrackedBarcode) {
            const basicListener = {
                brushForTrackedBarcode: props.brushForTrackedBarcode
                    ? (overlay, trackedBarcode) => {
                        return props.brushForTrackedBarcode(overlay, trackedBarcode);
                    }
                    : undefined,
                didTapTrackedBarcode: props.didTapTrackedBarcode
                    ? (overlay, trackedBarcode) => {
                        props.didTapTrackedBarcode(overlay, trackedBarcode);
                    }
                    : undefined,
            };
            setBasicOverlayListener(basicListener);
        }
        else {
            setBasicOverlayListener(null);
        }
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
        if (hasAdvancedOverlayListenerToSet && advancedOverlayRef.current) {
            // update with listener, something had been set before; therefore we set WITH cleanup.
            viewRef.current.view?.overlays?.forEach((overlay) => {
                if (overlay.type === 'barcodeBatchAdvanced') {
                    viewRef.current?.view?.removeOverlay(overlay);
                }
            });
        }
        if (hasAdvancedOverlayListenerToSet) {
            advancedOverlayRef.current = new BarcodeBatchAdvancedOverlay(getMode());
            viewRef.current?.addOverlay(advancedOverlayRef.current);
        }
        setAdvancedOverlayListener({
            viewForTrackedBarcode: (overlay, trackedBarcode) => {
                if (props.useCacheForViewsForTrackedBarcodes === true) {
                    const barcodeBatchKey = trackedBarcode.barcode.symbology.toString() + trackedBarcode.barcode.data;
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
        if (props.desiredCameraState && screenStateManager.isScreenActive(viewId.current)) {
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
        React.createElement(DataCaptureView, { context: props.context, parentId: viewId.current, style: { flex: 1 }, ref: viewRef })));
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
    const viewId = useRef(Math.floor(Math.random() * 1000000));
    const screenStateManager = useMemo(() => {
        return ScreenStateManager.getInstance();
    }, []);
    const barcodeCaptureModeRef = useRef(null);
    function getMode() {
        if (barcodeCaptureModeRef.current !== null) {
            return barcodeCaptureModeRef.current;
        }
        barcodeCaptureModeRef.current = new BarcodeCapture$1(props.barcodeCaptureSettings || new BarcodeCaptureSettings());
        barcodeCaptureModeRef.current.parentId = viewId.current;
        return barcodeCaptureModeRef.current;
    }
    const basicOverlayRef = useRef(null);
    function getBasicOverlay() {
        if (basicOverlayRef.current !== null) {
            return basicOverlayRef.current;
        }
        basicOverlayRef.current = new BarcodeCaptureOverlay(getMode());
        return basicOverlayRef.current;
    }
    const cameraRef = useRef(null);
    function getCamera() {
        if (cameraRef.current !== null) {
            return cameraRef.current;
        }
        cameraRef.current = Camera.asPositionWithSettings(props.desiredCameraPosition || CameraPosition.WorldFacing, props.cameraSettings || BarcodeCapture$1.createRecommendedCameraSettings());
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
        screenStateManager.setActiveScreen(viewId.current);
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
        /* Cleaning Data Capture Context */
        if (barcodeCaptureModeRef.current) {
            props.context.removeMode(barcodeCaptureModeRef.current);
        }
        barcodeCaptureModeRef.current = null;
        /* Cleaning Overlays */
        if (viewRef.current) {
            viewRef.current.view?.overlays?.forEach((overlay) => viewRef.current?.view?.removeOverlay(overlay));
        }
        // Execute this after 1 second to avoid turning off the camera and on again
        // when navigating back to another screen that handles camera
        setTimeout(() => {
            /* Closing the camera if camera is active */
            if (screenStateManager.isScreenActive(viewId.current)) {
                getCamera()?.switchToDesiredState(FrameSourceState.Off);
            }
        }, 1000);
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
        getCamera()?.applySettings(props.cameraSettings || BarcodeCapture$1.createRecommendedCameraSettings());
    }, [props.cameraSettings]);
    useEffect(() => {
        if (props.desiredCameraState && screenStateManager.isScreenActive(viewId.current)) {
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
    return (React.createElement(DataCaptureView, { context: props.context, parentId: viewId.current, style: { flex: 1 }, ref: viewRef }));
});

class BarcodeArView extends React.Component {
    baseBarcodeArView;
    handle = null;
    static forMode(dataCaptureContext, barcodeAr) {
        return new BarcodeArView({ context: dataCaptureContext, barcodeAr });
    }
    static forModeWithViewSettings(dataCaptureContext, barcodeAr, viewSettings) {
        return new BarcodeArView({
            context: dataCaptureContext,
            barcodeAr,
            settings: viewSettings,
        });
    }
    static forModeWithViewSettingsAndCameraSettings(dataCaptureContext, barcodeAr, viewSettings, cameraSettings) {
        return new BarcodeArView({ context: dataCaptureContext, barcodeAr, settings: viewSettings, cameraSettings });
    }
    constructor(props) {
        super(props);
        this.baseBarcodeArView = new BaseBarcodeArView(props.context, props.barcodeAr, this, // Passing the native view to the base
        props.settings, props.cameraSettings, props.annotationProvider, props.highlightProvider, props.uiListener);
    }
    async componentDidMount() {
        // This is required to ensure that findNodeHandle returns a valid handle
        this.handle = InteractionManager.runAfterInteractions(() => {
            this.createBarcodeArView();
            this.handle = null;
        });
    }
    componentWillUnmount() {
        this.handle?.cancel();
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
    createBarcodeArView() {
        const viewId = findNodeHandle(this);
        this.baseBarcodeArView.createNativeView(viewId);
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
    const viewId = useRef(Math.floor(Math.random() * 1000000));
    const screenStateManager = useMemo(() => {
        return ScreenStateManager.getInstance();
    }, []);
    /* STATE HANDLERS */
    useEffect(() => {
        getMode().isEnabled = isEnabledState;
    }, [isEnabledState]);
    useEffect(() => {
        if (screenStateManager.isScreenActive(viewId.current)) {
            getCamera()?.switchToDesiredState(frameSourceState);
        }
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
        basicOverlayRef.current =
            BarcodeSelectionBasicOverlay.withBarcodeSelectionForViewWithStyle(getMode(), null, props.basicOverlayStyle || BarcodeSelectionBasicOverlayStyle.Frame);
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
            if (appState.current.match(/inactive|background/) &&
                nextAppState === 'active') {
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
        screenStateManager.setActiveScreen(viewId.current);
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
        /* Closing the camera if camera is active */
        if (screenStateManager.isScreenActive(viewId.current)) {
            setFrameSourceState(FrameSourceState.Off);
            props.context.setFrameSource(null);
        }
        /* Cleaning Data Capture Context */
        if (barcodeSelectionModeRef.current) {
            props.context.removeMode(barcodeSelectionModeRef.current);
        }
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
        const listeners = [
            ...getMode().listeners,
        ];
        listeners.forEach((listener) => {
            getMode().removeListener(listener);
        });
        if (props.didUpdateSelection) {
            getMode().addListener({
                didUpdateSelection: props.didUpdateSelection,
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
    }, [
        props.aimedBrush,
        props.selectedBrush,
        props.selectingBrush,
        props.trackedBrush,
    ]);
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
    _isMounted = false;
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
            didTapLabelCaptureButton(view) {
                listener?.onLabelCaptureButtonTappedIn?.(rnView);
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
    get labelCaptureButtonVisible() {
        return this.baseSparkScanView.labelCaptureButtonVisible;
    }
    set labelCaptureButtonVisible(newValue) {
        this.baseSparkScanView.labelCaptureButtonVisible = newValue;
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
    // prepare scanning on ios / onResume on android
    async prepareScanning() {
        await this.baseSparkScanView.prepareScanning();
    }
    // ios/android: start scanning
    async startScanning() {
        await this.baseSparkScanView.startScanning();
    }
    // ios/android: pause scanning
    async pauseScanning() {
        await this.baseSparkScanView.pauseScanning();
    }
    // stop scanning on ios / stopScanning on android
    async stopScanning() {
        await this.baseSparkScanView.stopScanning();
    }
    // stop scanning on ios / onPause on android
    async onHostPause() {
        await this.baseSparkScanView.onHostPause();
    }
    get feedbackDelegate() {
        return this.baseSparkScanView.feedbackDelegate;
    }
    set feedbackDelegate(delegate) {
        this.baseSparkScanView.feedbackDelegate = delegate;
    }
    async showToast(text) {
        await this.baseSparkScanView.showToast(text);
    }
    componentDidMount() {
        this._isMounted = true;
        // This is required to ensure that findNodeHandle returns a valid handle
        InteractionManager.runAfterInteractions(() => {
            if (this._isMounted) {
                this.createSparkScanView();
            }
        });
    }
    componentDidUpdate(prevProps) {
        this.baseSparkScanView.updateWithProps(prevProps, this.props);
    }
    componentWillUnmount() {
        this._isMounted = false;
        this.baseSparkScanView.dispose();
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
    _isMounted = false;
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
        this.baseBarcodeCountView = BaseBarcodeCountView.withProps(props, this);
    }
    componentDidMount() {
        this._isMounted = true;
        // This is required to ensure that findNodeHandle returns a valid handle
        InteractionManager.runAfterInteractions(() => {
            if (this._isMounted) {
                this.createBarcodeCountView();
            }
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
        this.baseBarcodeCountView.dispose();
    }
    componentDidUpdate(prevProps) {
        this.baseBarcodeCountView.updateWithProps(prevProps, this.props);
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
    createBarcodeCountView() {
        const viewId = findNodeHandle(this);
        this.baseBarcodeCountView.createNativeView(viewId);
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
    _isMounted = false;
    constructor(props) {
        super(props);
        this.baseBarcodePickView = new BaseBarcodePickView({
            context: props.context,
            barcodePick: props.barcodePick,
            settings: props.settings,
            cameraSettings: props.cameraSettings,
        });
        this.baseBarcodePickView.initialize(this);
    }
    get uiListener() {
        return this.baseBarcodePickView.uiListener;
    }
    set uiListener(value) {
        this.baseBarcodePickView.uiListener = value;
    }
    async componentDidMount() {
        this._isMounted = true;
        // This is required to ensure that findNodeHandle returns a valid handle
        InteractionManager.runAfterInteractions(() => {
            if (this._isMounted) {
                this.createBarcodePickView();
            }
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
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
        this.baseBarcodePickView.pause();
    }
    resume() {
        this.baseBarcodePickView.resume();
    }
    reset() {
        this.baseBarcodePickView.reset();
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
    createBarcodePickView() {
        const viewId = findNodeHandle(this);
        this.baseBarcodePickView.createNativeView(viewId);
    }
    toJSON() {
        return this.baseBarcodePickView.toJSON();
    }
}
__decorate([
    ignoreFromSerialization
], BarcodePickView.prototype, "baseBarcodePickView", void 0);
__decorate([
    ignoreFromSerialization
], BarcodePickView.prototype, "_isMounted", void 0);
// tslint:disable-next-line:variable-name
const RNTBarcodePickView = requireNativeComponent('RNTBarcodePickView', BarcodePickView);

class BarcodeFindView extends React.Component {
    baseBarcodeFindView;
    _isMounted = false;
    constructor(props) {
        super(props);
        this.baseBarcodeFindView = new BaseBarcodeFindView(props);
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
        this._isMounted = false;
        this.baseBarcodeFindView.dispose();
    }
    componentDidMount() {
        this._isMounted = true;
        // This is required to ensure that findNodeHandle returns a valid handle
        InteractionManager.runAfterInteractions(() => {
            if (this._isMounted) {
                this.createBarcodeFindView();
            }
        });
    }
    createBarcodeFindView() {
        const viewId = findNodeHandle(this);
        this.baseBarcodeFindView.createNativeView(viewId);
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
