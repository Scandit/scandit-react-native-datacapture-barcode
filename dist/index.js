import { BarcodeBatch as BarcodeBatch$1, BarcodeBatchSettings, BarcodeBatchBasicOverlay, BarcodeBatchBasicOverlayStyle, BarcodeCapture as BarcodeCapture$1, BarcodeCaptureSettings, BarcodeCaptureOverlay, BaseBarcodeArView, BarcodeSelection as BarcodeSelection$1, BarcodeSelectionSettings, BarcodeSelectionBasicOverlay, BarcodeSelectionBasicOverlayStyle, BaseSparkScanView, BaseBarcodeCountView, BaseBarcodePickView, BaseBarcodeFindView, registerBarcodeProxies, loadBarcodeDefaults, loadBarcodeCaptureDefaults, loadBarcodeArDefaults, loadBarcodeBatchDefaults, loadBarcodeSelectionDefaults, loadBarcodeCountDefaults, loadBarcodePickDefaults, loadBarcodeFindDefaults, loadSparkScanDefaults, BaseBarcodeBatchAdvancedOverlay, BarcodeArAnnotationTrigger } from './barcode.js';
export { ArucoDictionary, ArucoDictionaryPreset, ArucoMarker, AztecBarcodeGeneratorBuilder, Barcode, BarcodeAr, BarcodeArAnnotationTrigger, BarcodeArCircleHighlight, BarcodeArCircleHighlightPreset, BarcodeArFeedback, BarcodeArInfoAnnotation, BarcodeArInfoAnnotationAnchor, BarcodeArInfoAnnotationBodyComponent, BarcodeArInfoAnnotationFooter, BarcodeArInfoAnnotationHeader, BarcodeArInfoAnnotationWidthPreset, BarcodeArPopoverAnnotation, BarcodeArPopoverAnnotationButton, BarcodeArRectangleHighlight, BarcodeArSession, BarcodeArSettings, BarcodeArStatusIconAnnotation, BarcodeArViewSettings, BarcodeBatch, BarcodeBatchBasicOverlay, BarcodeBatchBasicOverlayStyle, BarcodeBatchSession, BarcodeBatchSettings, BarcodeCapture, BarcodeCaptureFeedback, BarcodeCaptureOverlay, BarcodeCaptureSession, BarcodeCaptureSettings, BarcodeCount, BarcodeCountCaptureList, BarcodeCountCaptureListSession, BarcodeCountFeedback, BarcodeCountNotInListActionSettings, BarcodeCountSession, BarcodeCountSettings, BarcodeCountToolbarSettings, BarcodeDefinition, BarcodeDefinitionBuilder, BarcodeFilterHighlightSettingsBrush, BarcodeFilterHighlightType, BarcodeFilterSettings, BarcodeFind, BarcodeFindFeedback, BarcodeFindItem, BarcodeFindItemContent, BarcodeFindItemSearchOptions, BarcodeFindSession, BarcodeFindSettings, BarcodeFindViewSettings, BarcodeGenerator, BarcodeGeneratorBuilder, BarcodeIdentifier, BarcodePick, BarcodePickActionCallback, BarcodePickAsyncMapperProductProvider, BarcodePickProduct, BarcodePickProductProviderCallback, BarcodePickProductProviderCallbackItem, BarcodePickScanningSession, BarcodePickSession, BarcodePickSettings, BarcodePickState, BarcodePickStatusIconSettings, BarcodePickViewEvents, BarcodePickViewSettings, BarcodeSelection, BarcodeSelectionAimerSelection, BarcodeSelectionAutoSelectionStrategy, BarcodeSelectionBasicOverlay, BarcodeSelectionBasicOverlayStyle, BarcodeSelectionFeedback, BarcodeSelectionFreezeBehavior, BarcodeSelectionManualSelectionStrategy, BarcodeSelectionSession, BarcodeSelectionSettings, BarcodeSelectionTapBehavior, BarcodeSelectionTapSelection, BarcodeSpatialGrid, BatterySavingMode, Checksum, Code128BarcodeGeneratorBuilder, Code39BarcodeGeneratorBuilder, CompositeFlag, CompositeType, DataMatrixBarcodeGeneratorBuilder, Dot, DotWithIcons, Ean13BarcodeGeneratorBuilder, Ean13UpcaClassification, EncodingRange, InterleavedTwoOfFiveBarcodeGeneratorBuilder, LocalizedOnlyBarcode, QrCodeBarcodeGeneratorBuilder, QrCodeErrorCorrectionLevel, Range, Rectangular, RectangularWithIcons, ScanComponentBarcodePreset, ScanComponentTextSemanticType, ScanItemDefinition, ScanItemIdentifier, ScannedBarcode, ScannedComponentIdentifier, ScannedItem, ScannedItemIdentifier, ScannedText, SparkScan, SparkScanBarcodeErrorFeedback, SparkScanBarcodeFeedback, SparkScanBarcodeSuccessFeedback, SparkScanMiniPreviewSize, SparkScanPreviewBehavior, SparkScanScanningBehavior, SparkScanScanningModeDefault, SparkScanScanningModeTarget, SparkScanSession, SparkScanSettings, SparkScanToastSettings, SparkScanViewSettings, SparkScanViewState, StructuredAppendData, Symbology, SymbologyDescription, SymbologySettings, TargetBarcode, TextDefinition, TextDefinitionBuilder, TextIdentifier, TrackedBarcode, UpcaBarcodeGeneratorBuilder } from './barcode.js';
import { CameraPosition, FrameSourceState, Anchor, PointWithUnit, NumberWithUnit, MeasureUnit, DataCaptureView, initCoreProxy, initCoreDefaults, createRNNativeCaller } from 'scandit-react-native-datacapture-core';
import { AppState, View, StyleSheet, InteractionManager, findNodeHandle, requireNativeComponent, NativeModules } from 'react-native';
import React, { forwardRef, useRef, useState, useMemo, useCallback, useEffect, useImperativeHandle } from 'react';
import { CameraOwnershipHelper, nameForSerialization, CameraPosition as CameraPosition$1, Observable, Anchor as Anchor$1, ignoreFromSerialization } from 'scandit-react-native-datacapture-core/dist/core';

class RNBarcodeNativeCallerProvider {
    moduleMap = {
        BarcodeCaptureListenerProxy: 'ScanditDataCaptureBarcodeCapture',
        BarcodeCaptureOverlayProxy: 'ScanditDataCaptureBarcodeCapture',
        BarcodeBatchListenerProxy: 'ScanditDataCaptureBarcodeBatch',
        BarcodeBatchBasicOverlayProxy: 'ScanditDataCaptureBarcodeBatch',
        BarcodeBatchAdvancedOverlayProxy: 'ScanditDataCaptureBarcodeBatch',
        BarcodeSelectionListenerProxy: 'ScanditDataCaptureBarcodeSelection',
        BarcodeSelectionOverlayProxy: 'ScanditDataCaptureBarcodeSelection',
        BarcodeSelectionProxy: 'ScanditDataCaptureBarcodeSelection',
        BarcodeArSessionProxy: 'ScanditDataCaptureBarcodeAr',
        BarcodeArViewProxy: 'ScanditDataCaptureBarcodeAr',
        BarcodeCountViewProxy: 'ScanditDataCaptureBarcodeCount',
        BarcodeCountSessionProxy: 'ScanditDataCaptureBarcodeCount',
        BarcodePickViewProxy: 'ScanditDataCaptureBarcodePick',
        SparkScanViewProxy: 'ScanditDataCaptureSparkScan',
        BarcodeFindViewProxy: 'ScanditDataCaptureBarcodeFind',
        BarcodeGeneratorProxy: 'ScanditDataCaptureBarcodeGenerator',
    };
    getNativeCaller(proxyType) {
        const moduleName = this.moduleMap[proxyType];
        if (!moduleName) {
            throw new Error(`No native module mapped for proxy type: ${proxyType}`);
        }
        return createRNNativeCaller(NativeModules[moduleName]);
    }
}

function initBarcodeProxy() {
    initCoreProxy();
    registerBarcodeProxies(new RNBarcodeNativeCallerProvider());
}

function getNativeModule(name) {
    const mod = NativeModules[name];
    if (!mod) {
        throw new Error(`Module ${name} not found`);
    }
    return mod;
}
const ScanditDataCaptureBarcode = getNativeModule('ScanditDataCaptureBarcode');
const BarcodeCapture = getNativeModule('ScanditDataCaptureBarcodeCapture');
const BarcodeAr = getNativeModule('ScanditDataCaptureBarcodeAr');
const BarcodeCount = getNativeModule('ScanditDataCaptureBarcodeCount');
const BarcodePickModule = getNativeModule('ScanditDataCaptureBarcodePick');
const BarcodeSelection = getNativeModule('ScanditDataCaptureBarcodeSelection');
const BarcodeBatch = getNativeModule('ScanditDataCaptureBarcodeBatch');
const SparkScan = getNativeModule('ScanditDataCaptureSparkScan');
const BarcodeFind = getNativeModule('ScanditDataCaptureBarcodeFind');
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

const BarcodeBatchView = forwardRef(function BarcodeBatchView(props, ref) {
    const viewRef = useRef(null);
    const componentIsSetUp = useRef(false);
    const advancedOverlayRef = useRef(null);
    const barcodeBatchModeRef = useRef(null);
    const [viewId] = useState(() => Math.floor(Math.random() * 1000000));
    const [isCameraSetup, setIsCameraSetup] = useState(false);
    // Create camera owner using viewId
    const cameraOwner = useMemo(() => ({
        id: `barcode-batch-view-${viewId}`,
    }), [viewId]);
    const getMode = useCallback(() => {
        if (barcodeBatchModeRef.current !== null) {
            return barcodeBatchModeRef.current;
        }
        barcodeBatchModeRef.current = new BarcodeBatch$1(props.barcodeBatchSettings || new BarcodeBatchSettings());
        barcodeBatchModeRef.current['parentId'] = viewId;
        return barcodeBatchModeRef.current;
    }, [props.barcodeBatchSettings, viewId]);
    const basicOverlayRef = useRef(null);
    const getBasicOverlay = useCallback(() => {
        if (basicOverlayRef.current !== null) {
            return basicOverlayRef.current;
        }
        basicOverlayRef.current = new BarcodeBatchBasicOverlay(getMode(), props.basicOverlayStyle || BarcodeBatchBasicOverlayStyle.Frame);
        if (props.defaultBasicOverlayBrush) {
            basicOverlayRef.current.brush = props.defaultBasicOverlayBrush;
        }
        return basicOverlayRef.current;
    }, [getMode, props.basicOverlayStyle, props.defaultBasicOverlayBrush]);
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
    }, [props.isEnabled, getMode]);
    useEffect(() => {
        if (!isCameraSetup || !props.desiredCameraState)
            return; // Don't run until camera is ready
        currentProps.current = {
            isEnabled: currentProps.current.isEnabled,
            desiredCameraState: props.desiredCameraState,
        };
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
            await camera.switchToDesiredState(props.desiredCameraState || FrameSourceState.Standby);
        });
    }, [props.desiredCameraState, props.desiredCameraPosition, cameraOwner, isCameraSetup]);
    const handleAppStateChange = (nextAppState) => {
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
            // Use the latest props values from the ref
            getMode().isEnabled = currentProps.current.isEnabled;
            if (currentProps.current.desiredCameraState) {
                if (isCameraSetup) {
                    void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
                        await camera.switchToDesiredState(currentProps.current.desiredCameraState || FrameSourceState.Standby);
                    });
                }
            }
        }
        else if (nextAppState.match(/inactive|background/) && appState.current === 'active') {
            getMode().isEnabled = false;
            if (isCameraSetup) {
                void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
                    await camera.switchToDesiredState(FrameSourceState.Off);
                });
            }
        }
        appState.current = nextAppState;
    };
    useEffect(() => {
        void doSetup();
        const subscription = AppState.addEventListener('change', handleAppStateChange);
        return () => {
            subscription.remove();
            doCleanup();
        };
    }, []);
    const setupCamera = useCallback(async () => {
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        // Request ownership and set up camera
        await CameraOwnershipHelper.withCameraWhenAvailable(position, cameraOwner, async (camera) => {
            const settings = props.cameraSettings || BarcodeBatch$1.createRecommendedCameraSettings();
            await camera.applySettings(settings);
            const newCameraState = props.desiredCameraState || FrameSourceState.On;
            await camera.switchToDesiredState(newCameraState);
            await props.context.setFrameSource(camera);
            // Mark camera as set up
            setIsCameraSetup(true);
        });
    }, [props.desiredCameraPosition, cameraOwner, props.cameraSettings, props.context, props.desiredCameraState]);
    const doSetup = useCallback(async () => {
        if (componentIsSetUp.current)
            return;
        componentIsSetUp.current = true;
        /* Setup camera with ownership - WAIT for completion */
        await setupCamera();
        /* Only proceed after camera is ready */
        await props.context.addMode(getMode());
        /* Adding Basic Overlay */
        if (viewRef.current) {
            await viewRef.current.addOverlay(getBasicOverlay());
            if (advancedOverlayRef.current) {
                await viewRef.current.addOverlay(advancedOverlayRef.current);
            }
        }
    }, [setupCamera, props.context, getMode, getBasicOverlay]);
    const doCleanup = useCallback(() => {
        if (!componentIsSetUp.current)
            return;
        componentIsSetUp.current = false;
        // Reset camera setup state
        setIsCameraSetup(false);
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
            dcView['removeAllOverlays']();
        }
        /* Cleaning Data Capture Context */
        if (barcodeBatchModeRef.current) {
            void props.context.removeMode(barcodeBatchModeRef.current);
        }
        barcodeBatchModeRef.current = null;
        /* Turn off camera and release ownership */
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
            await camera.switchToDesiredState(FrameSourceState.Off);
            await props.context.setFrameSource(null);
        }).finally(() => {
            // Release camera ownership
            CameraOwnershipHelper.releaseOwnership(position, cameraOwner);
        });
    }, [props.desiredCameraPosition, cameraOwner, props.context]);
    /* BARCODE TRACKING MODE */
    useEffect(() => {
        if (props.barcodeBatchSettings) {
            void getMode().applySettings(props.barcodeBatchSettings);
        }
    }, [props.barcodeBatchSettings, getMode]);
    useEffect(() => {
        getMode()['listeners'].forEach((listener) => {
            void getMode().removeListener(listener);
        });
        if (props.didUpdateSession) {
            void getMode().addListener({
                didUpdateSession: (barcodeBatch, session, getFrameData) => {
                    return props.didUpdateSession(barcodeBatch, session, getFrameData);
                }
            });
        }
    }, [props.didUpdateSession, getMode]);
    /* OVERLAYS */
    useEffect(() => {
        // set default brush only if there is no brush provided via the listener
        if (props.defaultBasicOverlayBrush && !props.brushForTrackedBarcode) {
            getBasicOverlay().brush = props.defaultBasicOverlayBrush;
        }
    }, [props.defaultBasicOverlayBrush, props.brushForTrackedBarcode, getBasicOverlay]);
    useEffect(() => {
        if (props.shouldShowScanAreaGuides) {
            getBasicOverlay().shouldShowScanAreaGuides = props.shouldShowScanAreaGuides;
        }
    }, [props.shouldShowScanAreaGuides, getBasicOverlay]);
    useEffect(() => {
        getBasicOverlay().listener = basicOverlayListener;
    }, [basicOverlayListener, getBasicOverlay]);
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
            viewRef.current['view']?.overlays.forEach((overlay) => {
                if (overlay['type'] === 'barcodeBatchAdvanced') {
                    void viewRef.current?.['view']?.removeOverlay(overlay);
                }
            });
            advancedOverlayRef.current = null;
            return;
        }
        if (hasAdvancedOverlayListenerToSet && advancedOverlayRef.current) {
            // update with listener, something had been set before; therefore we set WITH cleanup.
            viewRef.current['view']?.overlays.forEach((overlay) => {
                if (overlay['type'] === 'barcodeBatchAdvanced') {
                    void viewRef.current?.['view']?.removeOverlay(overlay);
                }
            });
        }
        if (hasAdvancedOverlayListenerToSet) {
            advancedOverlayRef.current = new BarcodeBatchAdvancedOverlay(getMode());
            void viewRef.current?.addOverlay(advancedOverlayRef.current);
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
                            void view.then(actualView => {
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
        if (!isCameraSetup)
            return; // Don't run until camera is ready
        // default to SDK recommended camera settings if the prop is unset
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        const settings = props.cameraSettings || BarcodeBatch$1.createRecommendedCameraSettings();
        void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
            await camera.applySettings(settings);
        });
    }, [props.cameraSettings, props.desiredCameraPosition, cameraOwner, isCameraSetup]);
    useEffect(() => {
        if (!isCameraSetup || !props.desiredCameraState)
            return; // Don't run until camera is ready
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
            await camera.switchToDesiredState(props.desiredCameraState || FrameSourceState.Standby);
        });
    }, [props.desiredCameraState, props.desiredCameraPosition, cameraOwner, isCameraSetup]);
    useEffect(() => {
        if (!isCameraSetup || !props.desiredCameraPosition)
            return; // Don't run until camera is ready
        void (async () => {
            // Handle camera position change with ownership
            const currentOwnedPosition = CameraOwnershipHelper.getOwnedPosition(cameraOwner);
            const newPosition = props.desiredCameraPosition;
            if (currentOwnedPosition && currentOwnedPosition !== newPosition) {
                // Release old camera ownership
                CameraOwnershipHelper.releaseOwnership(currentOwnedPosition, cameraOwner);
                // Set up new camera
                await setupCamera();
            }
            else if (!currentOwnedPosition) {
                // No camera owned yet, set up new camera
                await setupCamera();
            }
        })();
    }, [props.desiredCameraPosition, cameraOwner, setupCamera, isCameraSetup]);
    useEffect(() => {
        if (!isCameraSetup || !props.desiredTorchState)
            return; // Don't run until camera is ready
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        void CameraOwnershipHelper.withCameraWhenAvailable(position, cameraOwner, camera => {
            camera.desiredTorchState = props.desiredTorchState;
        });
    }, [props.desiredTorchState, props.desiredCameraPosition, cameraOwner, isCameraSetup]);
    useEffect(() => {
        if (!viewRef.current)
            return;
        if (torchSwitchControl.current) {
            viewRef.current?.removeControl(torchSwitchControl.current);
        }
        if (!props.torchSwitchControl)
            return;
        torchSwitchControl.current = props.torchSwitchControl;
        void viewRef.current.addControl(torchSwitchControl.current);
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
        void viewRef.current.addControl(zoomSwitchControl.current);
    }, [props.zoomSwitchControl]);
    useEffect(() => {
        if (!props.navigation)
            return;
        // Attempt to hook onto the navigation events
        try {
            const unsubscribeFromFocus = props.navigation.addListener('focus', () => {
                // The screen is focused
                void doSetup();
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
            console.error(e);
        }
    }, [props.navigation, doSetup, doCleanup]);
    // TODO: reset()
    return (React.createElement(View, { ref: ref, style: props.style },
        React.createElement(DataCaptureView, { context: props.context, parentId: viewId, style: { flex: 1 }, ref: viewRef })));
});

class BarcodeBatchAdvancedOverlayView extends React.Component {
    static moduleName = 'BarcodeBatchAdvancedOverlayViewComponent';
    get moduleName() {
        return BarcodeBatchAdvancedOverlayView.moduleName;
    }
}

const BarcodeCaptureView = forwardRef(function BarcodeCaptureView(props, _ref) {
    const viewRef = useRef(null);
    const componentIsSetUp = useRef(false);
    const [viewId] = useState(() => Math.floor(Math.random() * 1000000));
    const [isCameraSetup, setIsCameraSetup] = useState(false);
    // Create camera owner using viewId
    const cameraOwner = useMemo(() => ({
        id: `barcode-capture-view-${viewId}`,
    }), [viewId]);
    const barcodeCaptureModeRef = useRef(null);
    const getMode = useCallback(() => {
        if (barcodeCaptureModeRef.current !== null) {
            return barcodeCaptureModeRef.current;
        }
        barcodeCaptureModeRef.current = new BarcodeCapture$1(props.barcodeCaptureSettings || new BarcodeCaptureSettings());
        barcodeCaptureModeRef.current['parentId'] = viewId;
        return barcodeCaptureModeRef.current;
    }, [props.barcodeCaptureSettings, viewId]);
    const basicOverlayRef = useRef(null);
    const getBasicOverlay = useCallback(() => {
        if (basicOverlayRef.current !== null) {
            return basicOverlayRef.current;
        }
        basicOverlayRef.current = new BarcodeCaptureOverlay(getMode());
        return basicOverlayRef.current;
    }, [getMode]);
    const torchSwitchControl = useRef(null);
    const zoomSwitchControl = useRef(null);
    const appState = useRef(AppState.currentState);
    useEffect(() => {
        void doSetup();
        const subscription = AppState.addEventListener('change', nextAppState => {
            const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
            if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
                getMode().isEnabled = props.isEnabled;
                void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
                    await camera.switchToDesiredState(props.desiredCameraState || FrameSourceState.On);
                });
            }
            else {
                getMode().isEnabled = false;
                void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
                    await camera.switchToDesiredState(FrameSourceState.Off);
                });
            }
            appState.current = nextAppState;
        });
        return () => {
            subscription.remove();
            doCleanup();
        };
    }, []);
    const setupCamera = useCallback(async () => {
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        // Request ownership and set up camera
        await CameraOwnershipHelper.withCameraWhenAvailable(position, cameraOwner, async (camera) => {
            const settings = props.cameraSettings || BarcodeCapture$1.createRecommendedCameraSettings();
            await camera.applySettings(settings);
            await camera.switchToDesiredState(props.desiredCameraState || FrameSourceState.On);
            await props.context.setFrameSource(camera);
            // Mark camera as set up
            setIsCameraSetup(true);
        });
    }, [props.desiredCameraPosition, cameraOwner, props.cameraSettings, props.context, props.desiredCameraState]);
    const doSetup = useCallback(async () => {
        if (componentIsSetUp.current)
            return;
        componentIsSetUp.current = true;
        /* Setup camera with ownership - WAIT for completion */
        await setupCamera();
        /* Only proceed after camera is ready */
        await props.context.addMode(getMode());
        /* Adding Basic Overlay */
        if (viewRef.current) {
            await viewRef.current.addOverlay(getBasicOverlay());
        }
    }, [setupCamera, getMode, getBasicOverlay, props.context]);
    const doCleanup = useCallback(() => {
        if (!componentIsSetUp.current)
            return;
        componentIsSetUp.current = false;
        // Reset camera setup state
        setIsCameraSetup(false);
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
            void props.context.removeMode(barcodeCaptureModeRef.current);
        }
        barcodeCaptureModeRef.current = null;
        /* Cleaning Overlays */
        if (viewRef.current) {
            viewRef.current['view']?.overlays.forEach((overlay) => void viewRef.current?.['view']?.removeOverlay(overlay));
        }
        /* Turn off camera and release ownership */
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
            await camera.switchToDesiredState(FrameSourceState.Off);
            await props.context.setFrameSource(null);
        }).finally(() => {
            // Release camera ownership
            CameraOwnershipHelper.releaseOwnership(position, cameraOwner);
        });
    }, [props.desiredCameraPosition, cameraOwner, props.context]);
    /* BARCODE CAPTURE MODE */
    useEffect(() => {
        if (props.barcodeCaptureSettings) {
            void getMode().applySettings(props.barcodeCaptureSettings);
        }
    }, [props.barcodeCaptureSettings, getMode]);
    useEffect(() => {
        if (!isCameraSetup)
            return; // Don't run until camera is ready
        // Enabling/disabling the scanning turns both camera and mode to the same state. We ignore standby mode for now.
        getMode().isEnabled = props.isEnabled;
        // Use ownership-aware camera control
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
            await camera.switchToDesiredState(props.desiredCameraState || FrameSourceState.On);
        });
    }, [props.isEnabled, props.desiredCameraPosition, cameraOwner, props.desiredCameraState, getMode, isCameraSetup]);
    useEffect(() => {
        const listeners = getMode()['listeners'] || [];
        listeners.forEach((listener) => {
            getMode().removeListener(listener);
        });
        if (props.didScan) {
            getMode().addListener({
                didScan: props.didScan,
            });
        }
    }, [props.didScan, getMode]);
    /* OVERLAYS */
    useEffect(() => {
        // set default brush only if there is no brush provided via the listener
        if (props.defaultBasicOverlayBrush) {
            getBasicOverlay().brush = props.defaultBasicOverlayBrush;
        }
    }, [props.defaultBasicOverlayBrush, getBasicOverlay]);
    /* CAMERA */
    useEffect(() => {
        if (!isCameraSetup)
            return; // Don't run until camera is ready
        // default to SDK recommended camera settings if the prop is unset
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        const settings = props.cameraSettings || BarcodeCapture$1.createRecommendedCameraSettings();
        void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
            await camera.applySettings(settings);
        });
    }, [props.cameraSettings, cameraOwner, props.desiredCameraPosition, isCameraSetup]);
    useEffect(() => {
        if (!isCameraSetup || !props.desiredCameraState)
            return; // Don't run until camera is ready
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
            await camera.switchToDesiredState(props.desiredCameraState);
        });
    }, [props.desiredCameraState, cameraOwner, props.desiredCameraPosition, isCameraSetup]);
    useEffect(() => {
        if (!props.desiredCameraPosition)
            return;
        void (async () => {
            // Handle camera position change with ownership
            const currentOwnedPosition = CameraOwnershipHelper.getOwnedPosition(cameraOwner);
            const newPosition = props.desiredCameraPosition;
            if (currentOwnedPosition && currentOwnedPosition !== newPosition) {
                // Release old camera ownership
                CameraOwnershipHelper.releaseOwnership(currentOwnedPosition, cameraOwner);
                // Set up new camera
                await setupCamera();
            }
            else if (!currentOwnedPosition) {
                // No camera owned yet, set up new camera
                await setupCamera();
            }
        })();
    }, [props.desiredCameraPosition, cameraOwner, props.desiredCameraState, setupCamera]);
    useEffect(() => {
        if (!isCameraSetup || !props.desiredTorchState)
            return; // Don't run until camera is ready
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        void CameraOwnershipHelper.withCameraWhenAvailable(position, cameraOwner, camera => {
            camera.desiredTorchState = props.desiredTorchState;
        });
    }, [props.desiredTorchState, cameraOwner, props.desiredCameraPosition, isCameraSetup]);
    useEffect(() => {
        if (!viewRef.current)
            return;
        if (torchSwitchControl.current) {
            viewRef.current?.removeControl(torchSwitchControl.current);
        }
        if (!props.torchSwitchControl)
            return;
        torchSwitchControl.current = props.torchSwitchControl;
        void viewRef.current.addControl(torchSwitchControl.current);
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
        void viewRef.current.addControl(zoomSwitchControl.current);
    }, [props.zoomSwitchControl]);
    useEffect(() => {
        if (!props.navigation)
            return;
        // Attempt to hook onto the navigation events
        try {
            const unsubscribeFromFocus = props.navigation.addListener('focus', () => {
                // The screen is focused
                void doSetup();
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
            console.error(e);
        }
    }, [props.navigation, doSetup, doCleanup]);
    // TODO: reset()
    return React.createElement(DataCaptureView, { context: props.context, parentId: viewId, style: { flex: 1 }, ref: viewRef });
});

/******************************************************************************
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
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

class BarcodeArCustomHighlight extends Observable {
    renderHighlight;
    _type = 'barcodeArCustomHighlight';
    constructor(config) {
        super();
        this.renderHighlight = config.renderHighlight;
    }
}
__decorate([
    nameForSerialization('type')
], BarcodeArCustomHighlight.prototype, "_type", void 0);

class BarcodeArCustomAnnotation extends Observable {
    annotationTrigger;
    anchor;
    renderAnnotation;
    _type = 'barcodeArCustomAnnotation';
    constructor(config) {
        super();
        this.renderAnnotation = config.renderAnnotation;
        this.annotationTrigger = config.annotationTrigger ?? BarcodeArAnnotationTrigger.HighlightTap;
        this.anchor = config.anchor ?? Anchor$1.TopCenter;
    }
}
__decorate([
    nameForSerialization('type')
], BarcodeArCustomAnnotation.prototype, "_type", void 0);

function BarcodeArCustomHighlightContainer({ barcodeId, barcode, customHighlight, onClick, registerCustomHighlightUpdateEvent, registerCustomHighlightHideEvent, registerCustomHighlightShowEvent, }) {
    const viewRef = useRef(null);
    const timeoutRef = useRef(null);
    const widthAndHeight = useRef({ width: 0, height: 0 });
    // Start hidden and only show when we get a position update
    const [hidden, setHidden] = useState(true);
    const onUpdate = useCallback((centerPosition) => {
        // set a timeout to hide the highlight if we don't get updates for a second
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setHidden(true);
        }, 1000);
        // After an update, we know the position.
        if (hidden) {
            setHidden(false);
        }
        if (!viewRef.current) {
            return;
        }
        const xPos = centerPosition.x - widthAndHeight.current.width / 2;
        const yPos = centerPosition.y - widthAndHeight.current.height / 2;
        viewRef.current.setNativeProps({
            style: { left: xPos, top: yPos },
        });
    }, [hidden, setHidden]);
    useEffect(() => {
        const disposeUpdate = registerCustomHighlightUpdateEvent(onUpdate, barcodeId);
        const disposeShow = registerCustomHighlightShowEvent(() => {
            setHidden(false);
        }, barcodeId);
        const disposeHide = registerCustomHighlightHideEvent(() => {
            setHidden(true);
        }, barcodeId);
        return () => {
            disposeUpdate();
            disposeShow();
            disposeHide();
        };
    }, [
        barcode,
        barcodeId,
        onUpdate,
        setHidden,
        registerCustomHighlightUpdateEvent,
        registerCustomHighlightHideEvent,
        registerCustomHighlightShowEvent,
    ]);
    const CustomComponent = customHighlight.renderHighlight;
    return (React.createElement(View, { style: [styles$1.customHightlightContainer, { display: hidden ? 'none' : 'flex' }], onTouchEndCapture: () => {
            onClick();
        } },
        React.createElement(View, { ref: viewRef, onLayout: event => {
                const { width, height } = event.nativeEvent.layout;
                widthAndHeight.current = { width, height };
            } },
            React.createElement(CustomComponent, null))));
}
const styles$1 = StyleSheet.create({
    customHightlightContainer: {
        position: 'absolute',
    },
});

function BarcodeArCustomAnnotationContainer({ barcodeId, barcode, customAnnotation, registerCustomAnnotationUpdateEvent, registerCustomAnnotationHideEvent, registerCustomAnnotationShowEvent, }) {
    const viewRef = useRef(null);
    const timeoutRef = useRef(null);
    const widthAndHeight = useRef({ width: 0, height: 0 });
    // Start hidden and only show when we get a position update
    const [hidden, setHidden] = useState(true);
    const onUpdate = useCallback((centerPosition) => {
        // set a timeout to hide the annotation if we don't get updates for a second
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setHidden(true);
        }, 1000);
        // After an update, we know the position.
        if (hidden) {
            setHidden(false);
        }
        if (!viewRef.current) {
            return;
        }
        const position = calculatePosition(centerPosition, widthAndHeight.current, customAnnotation.anchor);
        viewRef.current.setNativeProps({
            style: position,
        });
    }, [hidden, setHidden, customAnnotation.anchor]);
    useEffect(() => {
        const disposeUpdate = registerCustomAnnotationUpdateEvent(onUpdate, barcodeId);
        const disposeShow = registerCustomAnnotationShowEvent(() => {
            setHidden(false);
        }, barcodeId);
        const disposeHide = registerCustomAnnotationHideEvent(() => {
            setHidden(true);
        }, barcodeId);
        return () => {
            disposeUpdate();
            disposeShow();
            disposeHide();
        };
    }, [
        barcode,
        barcodeId,
        onUpdate,
        setHidden,
        registerCustomAnnotationUpdateEvent,
        registerCustomAnnotationHideEvent,
        registerCustomAnnotationShowEvent,
    ]);
    const CustomComponent = customAnnotation.renderAnnotation;
    return (React.createElement(View, { style: [styles.customAnnotationtContainer, { display: hidden ? 'none' : 'flex' }] },
        React.createElement(View, { ref: viewRef, onLayout: event => {
                const { width, height } = event.nativeEvent.layout;
                widthAndHeight.current = { width, height };
            } },
            React.createElement(CustomComponent, null))));
}
const styles = StyleSheet.create({
    customAnnotationtContainer: {
        position: 'absolute',
    },
});
function calculatePosition(centerPosition, viewWidthAndHeight, anchor) {
    const centerX = centerPosition.x;
    const centerY = centerPosition.y;
    switch (anchor) {
        case Anchor$1.CenterLeft:
            return {
                left: centerX,
                top: centerY - viewWidthAndHeight.height / 2,
            };
        case Anchor$1.Center:
            return {
                left: centerX - viewWidthAndHeight.width / 2,
                top: centerY - viewWidthAndHeight.height / 2,
            };
        case Anchor$1.CenterRight:
            return {
                left: centerX - viewWidthAndHeight.width,
                top: centerY - viewWidthAndHeight.height / 2,
            };
        case Anchor$1.TopLeft:
            return {
                left: centerX,
                top: centerY,
            };
        case Anchor$1.TopCenter:
            return {
                left: centerX - viewWidthAndHeight.width / 2,
                top: centerY,
            };
        case Anchor$1.TopRight:
            return {
                left: centerX - viewWidthAndHeight.width,
                top: centerY,
            };
        case Anchor$1.BottomLeft:
            return {
                left: centerX,
                top: centerY - viewWidthAndHeight.height,
            };
        case Anchor$1.BottomCenter:
            return {
                left: centerX - viewWidthAndHeight.width / 2,
                top: centerY - viewWidthAndHeight.height,
            };
        case Anchor$1.BottomRight:
            return {
                left: centerX - viewWidthAndHeight.width,
                top: centerY - viewWidthAndHeight.height,
            };
    }
}

class BarcodeArView extends React.Component {
    state = {
        shownHighlights: {},
        shownAnnotations: {},
    };
    baseBarcodeArView;
    handle = null;
    unregisterFromCustomHighlightCreateEvent = null;
    unregisterFromCustomHighlightDisposeEvent = null;
    unregisterFromCustomAnnotationCreateEvent = null;
    unregisterFromCustomAnnotationDisposeEvent = null;
    navigationUnsubscribers = [];
    cameraOwner;
    // Map barcodeid to custom highlight component
    customHighlightComponentCache = {};
    customAnnotationComponentCache = {};
    augementationContainerRef;
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
        // Create camera owner with unique ID
        this.cameraOwner = {
            id: `barcode-ar-view-${Math.floor(Math.random() * 1000000)}`,
        };
        this.augementationContainerRef = React.createRef();
        this.baseBarcodeArView = new BaseBarcodeArView(props.context, props.barcodeAr, this, // Passing the native view to the base
        props.settings, props.cameraSettings, props.annotationProvider ? this.wrapAnnotationProvider(props.annotationProvider) : undefined, props.highlightProvider ? this.wrapHighlightProvider(props.highlightProvider) : undefined, props.uiListener);
    }
    componentDidMount() {
        // Set up navigation listeners if navigation prop is provided
        this.setupNavigationListeners();
        // This is required to ensure that findNodeHandle returns a valid handle
        void (this.handle = InteractionManager.runAfterInteractions(async () => {
            await this.createBarcodeArView();
            this.handle = null;
        }));
        // Subscribe to custom highlight events
        this.baseBarcodeArView.subscribeForCustomHighlightEvents();
        this.baseBarcodeArView.subscribeForCustomAnnotationEvents();
        this.unregisterFromCustomHighlightCreateEvent = this.baseBarcodeArView.registerCustomHighlightCreateEvent(this.onCustomHighlightCreated.bind(this));
        this.unregisterFromCustomHighlightDisposeEvent = this.baseBarcodeArView.registerCustomHighlightDisposeEvent(this.onCustomHighlightDisposed.bind(this));
        this.unregisterFromCustomAnnotationCreateEvent = this.baseBarcodeArView.registerCustomAnnotationCreateEvent(this.onCustomAnnotationCreated.bind(this));
        this.unregisterFromCustomAnnotationDisposeEvent = this.baseBarcodeArView.registerCustomAnnotationDisposeEvent(this.onCustomAnnotationDisposed.bind(this));
    }
    componentWillUnmount() {
        this.handle?.cancel();
        this.unregisterFromCustomHighlightCreateEvent?.();
        this.unregisterFromCustomHighlightDisposeEvent?.();
        this.unregisterFromCustomAnnotationCreateEvent?.();
        this.unregisterFromCustomAnnotationDisposeEvent?.();
        // Clean up navigation listeners
        this.navigationUnsubscribers.forEach(unsubscribe => unsubscribe());
        this.navigationUnsubscribers = [];
        // Release camera ownership
        CameraOwnershipHelper.releaseOwnership(CameraPosition$1.WorldFacing, this.cameraOwner);
        this.baseBarcodeArView.dispose();
        this.baseBarcodeArView.unsubscribeFromCustomHighlightEvents();
        this.baseBarcodeArView.unsubscribeFromCustomAnnotationEvents();
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
        if (!value) {
            this.baseBarcodeArView.annotationProvider = null;
            return;
        }
        this.baseBarcodeArView.annotationProvider = this.wrapAnnotationProvider(value);
    }
    get highlightProvider() {
        return this.baseBarcodeArView.highlightProvider;
    }
    set highlightProvider(value) {
        if (!value) {
            this.baseBarcodeArView.highlightProvider = null;
        }
        this.baseBarcodeArView.highlightProvider = this.wrapHighlightProvider(value);
    }
    async start() {
        await this.baseBarcodeArView.start();
    }
    async stop() {
        await this.baseBarcodeArView.stop();
    }
    async pause() {
        await this.baseBarcodeArView.pause();
    }
    async reset() {
        await this.baseBarcodeArView.reset();
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
        return (React.createElement(React.Fragment, null,
            React.createElement(RNTBarcodeArView, { ...this.props, onLayout: (event) => {
                    // Position the augmentation container to match the camera view
                    const { x, y, width, height } = event.nativeEvent.layout;
                    this.augementationContainerRef.current.setNativeProps({
                        style: { top: y, left: x, width, height },
                    });
                } }),
            React.createElement(View, { ref: this.augementationContainerRef, style: { position: 'absolute', overflow: 'hidden', pointerEvents: 'box-none' } },
                Object.entries(this.state.shownAnnotations).map(([barcodeId, barcode]) => {
                    const annotation = this.customAnnotationComponentCache[barcodeId];
                    if (!annotation) {
                        return null;
                    }
                    return (React.createElement(BarcodeArCustomAnnotationContainer, { key: 'anotation:' + barcodeId, barcodeId: barcodeId, barcode: barcode, customAnnotation: annotation, registerCustomAnnotationUpdateEvent: this.baseBarcodeArView.registerCustomAnnotationUpdateEvent, registerCustomAnnotationShowEvent: this.baseBarcodeArView.registerCustomAnnotationShowEvent, registerCustomAnnotationHideEvent: this.baseBarcodeArView.registerCustomAnnotationHideEvent }));
                }),
                Object.entries(this.state.shownHighlights).map(([barcodeId, barcode]) => {
                    const highlight = this.customHighlightComponentCache[barcodeId];
                    if (!highlight) {
                        return null;
                    }
                    return (React.createElement(BarcodeArCustomHighlightContainer, { key: 'highlight:' + barcodeId, barcodeId: barcodeId, barcode: barcode, customHighlight: highlight, onClick: () => {
                            void this.baseBarcodeArView.onCustomHighlightClicked(barcodeId);
                        }, registerCustomHighlightUpdateEvent: this.baseBarcodeArView.registerCustomHighlightUpdateEvent, registerCustomHighlightShowEvent: this.baseBarcodeArView.registerCustomHighlightShowEvent, registerCustomHighlightHideEvent: this.baseBarcodeArView.registerCustomHighlightHideEvent }));
                }))));
    }
    // Wrap the user-provided highlight provider to intercept custom highlights
    wrapHighlightProvider(highlightProvider) {
        return {
            highlightForBarcode: async (barcode) => {
                const highlight = await highlightProvider.highlightForBarcode(barcode);
                if (highlight instanceof BarcodeArCustomHighlight) {
                    // We have a custom highlight, store it in the cache
                    // We can't add it to the shown highlights here since this call is cached
                    this.customHighlightComponentCache[barcode['_barcodeId']] = highlight;
                }
                return highlight;
            },
        };
    }
    // Wrap the user-provided highlight provider to intercept custom highlights
    wrapAnnotationProvider(annotationProvider) {
        return {
            annotationForBarcode: async (barcode) => {
                const annotation = await annotationProvider.annotationForBarcode(barcode);
                if (annotation instanceof BarcodeArCustomAnnotation) {
                    // We have a custom annotation, store it in the cache
                    // We can't add it to the shown annotations here since this call is cached
                    this.customAnnotationComponentCache[barcode['_barcodeId']] = annotation;
                }
                return annotation;
            },
        };
    }
    onCustomHighlightCreated(barcode, barcodeId) {
        if (this.state.shownHighlights[barcodeId]) {
            // Already shown
            return;
        }
        this.setState((prevState) => {
            return {
                ...prevState,
                shownHighlights: {
                    ...prevState.shownHighlights,
                    [barcodeId]: barcode,
                },
            };
        });
    }
    onCustomHighlightDisposed(barcodeId) {
        this.setState((prevState) => {
            const { [barcodeId]: _unused, ...rest } = prevState.shownHighlights;
            return { ...prevState, shownHighlights: rest };
        });
    }
    onCustomAnnotationCreated(barcode, barcodeId) {
        if (this.state.shownAnnotations[barcodeId]) {
            // Already shown
            return;
        }
        this.setState((prevState) => {
            return {
                ...prevState,
                shownAnnotations: {
                    ...prevState.shownAnnotations,
                    [barcodeId]: barcode,
                },
            };
        });
    }
    onCustomAnnotationDisposed(barcodeId) {
        this.setState((prevState) => {
            const { [barcodeId]: _unused, ...rest } = prevState.shownAnnotations;
            return { ...prevState, shownAnnotations: rest };
        });
    }
    setupNavigationListeners() {
        if (!this.props.navigation)
            return;
        try {
            const unsubscribeFromFocus = this.props.navigation.addListener('focus', () => {
                // The screen is focused - component gained focus
                void this.onFocus();
            });
            const unsubscribeFromBlur = this.props.navigation.addListener('blur', () => {
                // The screen is no longer focused (navigated away but still mounted) - component lost focus
                this.onBlur();
            });
            this.navigationUnsubscribers.push(unsubscribeFromFocus, unsubscribeFromBlur);
        }
        catch (e) {
            console.error('Failed to set up navigation listeners:', e);
        }
    }
    async onFocus() {
        await CameraOwnershipHelper.requestOwnership(CameraPosition$1.WorldFacing, this.cameraOwner);
    }
    onBlur() {
        CameraOwnershipHelper.releaseOwnership(CameraPosition$1.WorldFacing, this.cameraOwner);
    }
    async createBarcodeArView() {
        const viewId = findNodeHandle(this);
        await this.baseBarcodeArView.createNativeView(viewId);
    }
    toJSON() {
        return this.baseBarcodeArView.toJSON();
    }
}
const RNTBarcodeArView = requireNativeComponent('RNTBarcodeArView');

const BarcodeSelectionView = forwardRef(function BarcodeSelectionView(props, ref) {
    useImperativeHandle(ref, () => {
        return {
            async selectAimedBarcode() {
                await getMode().selectAimedBarcode();
            },
            async unselectBarcodes(barcodes) {
                await getMode().unselectBarcodes(barcodes);
            },
            async setSelectBarcodeEnabled(barcode, enabled) {
                await getMode().setSelectBarcodeEnabled(barcode, enabled);
            },
            async increaseCountForBarcodes(barcodes) {
                await getMode().increaseCountForBarcodes(barcodes);
            },
        };
    }, []);
    /* STATE VARIABLES */
    const [isEnabledState, setIsEnabledState] = useState(false);
    const [viewId] = useState(() => Math.floor(Math.random() * 1000000));
    const [isCameraSetup, setIsCameraSetup] = useState(false);
    // Create camera owner using viewId
    const cameraOwner = useMemo(() => ({
        id: `barcode-selection-view-${viewId}`,
    }), [viewId]);
    // Create a ref to store current props
    const currentProps = useRef({
        isEnabled: props.isEnabled ?? true,
        desiredCameraState: props.desiredCameraState,
    });
    /* STATE HANDLERS */
    const getMode = useCallback(() => {
        if (barcodeSelectionModeRef.current !== null) {
            return barcodeSelectionModeRef.current;
        }
        barcodeSelectionModeRef.current = new BarcodeSelection$1(props.barcodeSelectionSettings || new BarcodeSelectionSettings());
        barcodeSelectionModeRef.current.isEnabled = isEnabledState;
        barcodeSelectionModeRef.current['parentId'] = viewId;
        return barcodeSelectionModeRef.current;
    }, [props.barcodeSelectionSettings, isEnabledState, viewId]);
    useEffect(() => {
        getMode().isEnabled = isEnabledState;
    }, [isEnabledState, getMode]);
    useEffect(() => {
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
            await camera.switchToDesiredState(props.desiredCameraState || FrameSourceState.On);
        });
    }, [props.desiredCameraPosition, cameraOwner, props.desiredCameraState]);
    const viewRef = useRef(null);
    const componentIsSetUp = useRef(false);
    const barcodeSelectionModeRef = useRef(null);
    const basicOverlayRef = useRef(null);
    const getBasicOverlay = useCallback(() => {
        if (basicOverlayRef.current !== null) {
            return basicOverlayRef.current;
        }
        basicOverlayRef.current = new BarcodeSelectionBasicOverlay(getMode(), props.basicOverlayStyle || BarcodeSelectionBasicOverlayStyle.Frame);
        return basicOverlayRef.current;
    }, [getMode, props.basicOverlayStyle]);
    const torchSwitchControl = useRef(null);
    const zoomSwitchControl = useRef(null);
    const appState = useRef(AppState.currentState);
    /* SETUP */
    useEffect(() => {
        void doSetup();
        const subscription = AppState.addEventListener('change', nextAppState => {
            const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
            if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
                // Use the latest props values from the ref
                getMode().isEnabled = currentProps.current.isEnabled;
                if (currentProps.current.desiredCameraState) {
                    void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
                        await camera.switchToDesiredState(currentProps.current.desiredCameraState);
                    });
                }
            }
            else if (nextAppState.match(/inactive|background/) && appState.current === 'active') {
                getMode().isEnabled = false;
                void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
                    await camera.switchToDesiredState(FrameSourceState.Off);
                });
            }
            appState.current = nextAppState;
        });
        return () => {
            subscription.remove();
            doDestroy();
        };
    }, []);
    const setupCamera = useCallback(async () => {
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        // Request ownership and set up camera
        await CameraOwnershipHelper.withCameraWhenAvailable(position, cameraOwner, async (camera) => {
            const settings = props.cameraSettings || BarcodeSelection$1.createRecommendedCameraSettings();
            await camera.applySettings(settings);
            await camera.switchToDesiredState(props.desiredCameraState || FrameSourceState.On);
            await props.context.setFrameSource(camera);
            // Mark camera as set up
            setIsCameraSetup(true);
        });
    }, [props.desiredCameraPosition, cameraOwner, props.cameraSettings, props.context, props.desiredCameraState]);
    const doSetup = useCallback(async () => {
        if (componentIsSetUp.current)
            return;
        componentIsSetUp.current = true;
        /* Setup camera with ownership - WAIT for completion */
        await setupCamera();
        /* Only proceed after camera is ready */
        await props.context.addMode(getMode());
        /* Adding Basic Overlay */
        if (viewRef.current) {
            await viewRef.current.addOverlay(getBasicOverlay());
        }
    }, [setupCamera, props.context, getMode, getBasicOverlay]);
    const doCleanup = useCallback(async () => {
        if (!componentIsSetUp.current)
            return;
        componentIsSetUp.current = false;
        // Reset camera setup state
        setIsCameraSetup(false);
        /* Remove the torch control */
        if (torchSwitchControl.current) {
            viewRef.current?.removeControl(torchSwitchControl.current);
        }
        /* Remove the zoom control */
        if (zoomSwitchControl.current) {
            viewRef.current?.removeControl(zoomSwitchControl.current);
        }
        /* Cleaning Data Capture Context */
        if (barcodeSelectionModeRef.current) {
            await props.context.removeMode(barcodeSelectionModeRef.current);
        }
        /* Cleaning Overlays */
        if (viewRef.current) {
            viewRef.current['view']?.overlays.forEach((overlay) => void viewRef.current?.['view']?.removeOverlay(overlay));
        }
        /* Turn off camera and release ownership */
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
            await camera.switchToDesiredState(FrameSourceState.Off);
            await props.context.setFrameSource(null);
        }).finally(() => {
            // Release camera ownership
            CameraOwnershipHelper.releaseOwnership(position, cameraOwner);
        });
    }, [props.desiredCameraPosition, cameraOwner, props.context]);
    const doDestroy = () => {
        void doCleanup();
        barcodeSelectionModeRef.current = null;
        torchSwitchControl.current = null;
        zoomSwitchControl.current = null;
        basicOverlayRef.current = null;
    };
    /* BARCODE SELECTION MODE */
    useEffect(() => {
        if (props.barcodeSelectionSettings) {
            void getMode().applySettings(props.barcodeSelectionSettings);
        }
    }, [props.barcodeSelectionSettings, getMode]);
    useEffect(() => {
        // Enabling/disabling the scanning turns both camera and mode to the same state. We ignore standby mode for now.
        setIsEnabledState(props.isEnabled);
    }, [props.isEnabled, getMode, props.desiredCameraState]);
    useEffect(() => {
        const listeners = getMode()['listeners'] || [];
        listeners.forEach((listener) => {
            void getMode().removeListener(listener);
        });
        if (props.didUpdateSelection) {
            void getMode().addListener({
                didUpdateSelection: props.didUpdateSelection,
            });
        }
    }, [props.didUpdateSelection, getMode]);
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
    }, [props.aimedBrush, props.selectedBrush, props.selectingBrush, props.trackedBrush, getBasicOverlay]);
    useEffect(() => {
        if (props.aimedBarcodeBrushProvider !== undefined) {
            void getBasicOverlay().setAimedBarcodeBrushProvider(props.aimedBarcodeBrushProvider);
        }
    }, [props.aimedBarcodeBrushProvider, getBasicOverlay]);
    useEffect(() => {
        if (props.trackedBarcodeBrushProvider !== undefined) {
            void getBasicOverlay().setTrackedBarcodeBrushProvider(props.trackedBarcodeBrushProvider);
        }
    }, [props.trackedBarcodeBrushProvider, getBasicOverlay]);
    /* CAMERA */
    useEffect(() => {
        if (!isCameraSetup)
            return; // Don't run until camera is ready
        // default to SDK recommended camera settings if the prop is unset
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        const settings = props.cameraSettings || BarcodeSelection$1.createRecommendedCameraSettings();
        void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
            await camera.applySettings(settings);
        });
    }, [props.cameraSettings, props.desiredCameraPosition, cameraOwner, isCameraSetup]);
    useEffect(() => {
        if (!isCameraSetup || !props.desiredCameraState)
            return; // Don't run until camera is ready
        void CameraOwnershipHelper.withCamera(props.desiredCameraPosition || CameraPosition.WorldFacing, cameraOwner, async (camera) => {
            await camera.switchToDesiredState(props.desiredCameraState);
        });
    }, [props.desiredCameraState, props.desiredCameraPosition, cameraOwner, isCameraSetup]);
    useEffect(() => {
        if (!isCameraSetup || !props.desiredCameraPosition)
            return; // Don't run until camera is ready
        void (async () => {
            // Handle camera position change with ownership
            const currentOwnedPosition = CameraOwnershipHelper.getOwnedPosition(cameraOwner);
            const newPosition = props.desiredCameraPosition;
            if (currentOwnedPosition && currentOwnedPosition !== newPosition) {
                // Release old camera ownership
                CameraOwnershipHelper.releaseOwnership(currentOwnedPosition, cameraOwner);
                // Set up new camera
                await setupCamera();
            }
            else if (!currentOwnedPosition) {
                // No camera owned yet, set up new camera
                await setupCamera();
            }
        })();
    }, [props.desiredCameraPosition, cameraOwner, setupCamera, isCameraSetup]);
    /* CONTROLS */
    useEffect(() => {
        if (!isCameraSetup || !props.desiredTorchState)
            return; // Don't run until camera is ready
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        void CameraOwnershipHelper.withCameraWhenAvailable(position, cameraOwner, camera => {
            camera.desiredTorchState = props.desiredTorchState;
        });
    }, [props.desiredTorchState, props.desiredCameraPosition, cameraOwner, isCameraSetup]);
    useEffect(() => {
        if (!viewRef.current)
            return;
        if (torchSwitchControl.current) {
            viewRef.current?.removeControl(torchSwitchControl.current);
        }
        if (!props.torchSwitchControl)
            return;
        torchSwitchControl.current = props.torchSwitchControl;
        void viewRef.current.addControl(torchSwitchControl.current);
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
        void viewRef.current.addControl(zoomSwitchControl.current);
    }, [props.zoomSwitchControl]);
    /* MISC */
    useEffect(() => {
        if (props.pointOfInterest) {
            getMode().pointOfInterest = props.pointOfInterest;
        }
    }, [props.pointOfInterest, getMode]);
    useEffect(() => {
        if (props.feedback) {
            getMode().feedback = props.feedback;
        }
    }, [props.feedback, getMode]);
    useEffect(() => {
        if (!props.navigation)
            return;
        // Attempt to hook onto the navigation events
        try {
            const unsubscribeFromFocus = props.navigation.addListener('focus', () => {
                // The screen is focused
                void doSetup();
            });
            const unsubscribeFromBlur = props.navigation.addListener('blur', () => {
                // The screen is no longer focused (navigated away but still mounted)
                void doCleanup();
            });
            return () => {
                unsubscribeFromFocus();
                unsubscribeFromBlur();
            };
        }
        catch (e) {
            console.error(e);
        }
    }, [props.navigation, doSetup, doCleanup]);
    // TODO: reset()
    /* METHODS */
    // could be handled with a prop
    useEffect(() => {
        void (async () => {
            if (props.shouldUnfreezeCamera === true) {
                await getMode().unfreezeCamera();
            }
        })();
    }, [props.shouldUnfreezeCamera, getMode]);
    return React.createElement(DataCaptureView, { context: props.context, parentId: viewId, style: { flex: 1 }, ref: viewRef });
});

class SparkScanView extends React.Component {
    baseSparkScanView;
    rnViewListener = null;
    _isMounted = false;
    navigationUnsubscribers = [];
    cameraOwner;
    get uiListener() {
        return this.rnViewListener;
    }
    set uiListener(listener) {
        if (listener == null) {
            this.baseSparkScanView.uiListener = null;
            this.rnViewListener = null;
            return;
        }
        this.baseSparkScanView.uiListener = {
            didChangeViewState: (newState) => {
                listener?.didChangeViewState?.(newState);
            },
            didTapBarcodeCountButton: () => {
                listener?.onBarcodeCountButtonTappedIn?.(this);
            },
            didTapBarcodeFindButton: () => {
                listener?.onBarcodeFindButtonTappedIn?.(this);
            },
            didTapLabelCaptureButton: () => {
                listener?.onLabelCaptureButtonTappedIn?.(this);
            },
        };
        this.rnViewListener = listener;
    }
    static get defaultBrush() {
        return BaseSparkScanView.defaultBrush;
    }
    constructor(props) {
        super(props);
        // Create camera owner with unique ID
        this.cameraOwner = {
            id: `spark-scan-view-${Math.floor(Math.random() * 1000000)}`,
        };
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
        // Set up navigation listeners if navigation prop is provided
        this.setupNavigationListeners();
        // This is required to ensure that findNodeHandle returns a valid handle
        void InteractionManager.runAfterInteractions(async () => {
            if (this._isMounted) {
                await this.createSparkScanView();
            }
        });
    }
    componentDidUpdate(prevProps) {
        this.baseSparkScanView.updateWithProps(prevProps, this.props);
    }
    componentWillUnmount() {
        this._isMounted = false;
        // Clean up navigation listeners
        this.navigationUnsubscribers.forEach(unsubscribe => unsubscribe());
        this.navigationUnsubscribers = [];
        // Release camera ownership
        CameraOwnershipHelper.releaseOwnership(CameraPosition$1.WorldFacing, this.cameraOwner);
        this.baseSparkScanView.dispose();
    }
    setupNavigationListeners() {
        const nav = this.props.navigation;
        if (!nav)
            return;
        const unsubscribeFromFocus = nav.addListener('focus', () => {
            void this.onFocus();
        });
        const unsubscribeFromBlur = nav.addListener('blur', () => {
            this.onBlur();
        });
        this.navigationUnsubscribers.push(unsubscribeFromFocus, unsubscribeFromBlur);
    }
    async onFocus() {
        await CameraOwnershipHelper.requestOwnership(CameraPosition$1.WorldFacing, this.cameraOwner);
    }
    onBlur() {
        CameraOwnershipHelper.releaseOwnership(CameraPosition$1.WorldFacing, this.cameraOwner);
    }
    async createSparkScanView() {
        const viewId = findNodeHandle(this);
        await this.baseSparkScanView.createNativeView(viewId);
    }
    toJSON() {
        return this.baseSparkScanView.toJSON();
    }
}
const RNTSparkScanView = requireNativeComponent('RNTSparkScanView');

var BarcodeCountViewStyle;
(function (BarcodeCountViewStyle) {
    BarcodeCountViewStyle["Icon"] = "icon";
    BarcodeCountViewStyle["Dot"] = "dot";
})(BarcodeCountViewStyle || (BarcodeCountViewStyle = {}));
class BarcodeCountView extends React.Component {
    baseBarcodeCountView;
    _isMounted = false;
    navigationUnsubscribers = [];
    cameraOwner;
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
        // Create camera owner with unique ID
        this.cameraOwner = {
            id: `barcode-count-view-${Math.floor(Math.random() * 1000000)}`,
        };
        this.baseBarcodeCountView = BaseBarcodeCountView.withProps(props, this);
    }
    componentDidMount() {
        this._isMounted = true;
        // Set up navigation listeners if navigation prop is provided
        this.setupNavigationListeners();
        // This is required to ensure that findNodeHandle returns a valid handle
        void InteractionManager.runAfterInteractions(async () => {
            if (this._isMounted) {
                await this.createBarcodeCountView();
            }
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
        // Clean up navigation listeners
        this.navigationUnsubscribers.forEach(unsubscribe => unsubscribe());
        this.navigationUnsubscribers = [];
        // Release camera ownership
        CameraOwnershipHelper.releaseOwnership(CameraPosition$1.WorldFacing, this.cameraOwner);
        void this.baseBarcodeCountView.dispose();
    }
    componentDidUpdate(prevProps) {
        this.baseBarcodeCountView.updateWithProps(prevProps, this.props);
    }
    async clearHighlights() {
        await this.baseBarcodeCountView.clearHighlights();
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
    setupNavigationListeners() {
        if (!this.props.navigation)
            return;
        try {
            const unsubscribeFromFocus = this.props.navigation.addListener('focus', () => {
                // The screen is focused - component gained focus
                void this.onFocus();
            });
            const unsubscribeFromBlur = this.props.navigation.addListener('blur', () => {
                // The screen is no longer focused (navigated away but still mounted) - component lost focus
                this.onBlur();
            });
            this.navigationUnsubscribers.push(unsubscribeFromFocus, unsubscribeFromBlur);
        }
        catch (e) {
            console.error('Failed to set up navigation listeners:', e);
        }
    }
    async onFocus() {
        await CameraOwnershipHelper.requestOwnership(CameraPosition$1.WorldFacing, this.cameraOwner);
    }
    onBlur() {
        CameraOwnershipHelper.releaseOwnership(CameraPosition$1.WorldFacing, this.cameraOwner);
    }
    async createBarcodeCountView() {
        const viewId = findNodeHandle(this);
        await this.baseBarcodeCountView.createNativeView(viewId);
    }
    toJSON() {
        return this.baseBarcodeCountView.toJSON();
    }
}
const RNTBarcodeCountView = requireNativeComponent('RNTBarcodeCountView');

class BarcodePickView extends React.Component {
    baseBarcodePickView;
    _isMounted = false;
    navigationUnsubscribers = [];
    cameraOwner;
    constructor(props) {
        super(props);
        // Create camera owner with unique ID
        this.cameraOwner = {
            id: `barcode-pick-view-${Math.floor(Math.random() * 1000000)}`,
        };
        this.baseBarcodePickView = new BaseBarcodePickView({
            context: props.context,
            barcodePick: props.barcodePick,
            settings: props.settings,
            cameraSettings: props.cameraSettings,
        });
    }
    get uiListener() {
        return this.baseBarcodePickView.uiListener;
    }
    set uiListener(value) {
        this.baseBarcodePickView.uiListener = value;
    }
    componentDidMount() {
        this._isMounted = true;
        // Set up navigation listeners if navigation prop is provided
        this.setupNavigationListeners();
        // This is required to ensure that findNodeHandle returns a valid handle
        void InteractionManager.runAfterInteractions(async () => {
            if (this._isMounted) {
                await this.createBarcodePickView();
            }
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
        // Clean up navigation listeners
        this.navigationUnsubscribers.forEach(unsubscribe => unsubscribe());
        this.navigationUnsubscribers = [];
        // Release camera ownership
        CameraOwnershipHelper.releaseOwnership(CameraPosition$1.WorldFacing, this.cameraOwner);
        this.baseBarcodePickView.dispose();
    }
    async start() {
        await this.baseBarcodePickView.start();
    }
    async stop() {
        await this.baseBarcodePickView.stop();
    }
    async freeze() {
        await this.baseBarcodePickView.freeze();
    }
    async pause() {
        await this.baseBarcodePickView.pause();
    }
    async resume() {
        await this.baseBarcodePickView.resume();
    }
    async reset() {
        await this.baseBarcodePickView.reset();
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
    setupNavigationListeners() {
        if (!this.props.navigation)
            return;
        try {
            const unsubscribeFromFocus = this.props.navigation.addListener('focus', () => {
                // The screen is focused - component gained focus
                void this.onFocus();
            });
            const unsubscribeFromBlur = this.props.navigation.addListener('blur', () => {
                // The screen is no longer focused (navigated away but still mounted) - component lost focus
                this.onBlur();
            });
            this.navigationUnsubscribers.push(unsubscribeFromFocus, unsubscribeFromBlur);
        }
        catch (e) {
            console.error('Failed to set up navigation listeners:', e);
        }
    }
    async onFocus() {
        await CameraOwnershipHelper.requestOwnership(CameraPosition$1.WorldFacing, this.cameraOwner);
    }
    onBlur() {
        CameraOwnershipHelper.releaseOwnership(CameraPosition$1.WorldFacing, this.cameraOwner);
    }
    async createBarcodePickView() {
        const viewId = findNodeHandle(this);
        await this.baseBarcodePickView.createNativeView(viewId);
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
__decorate([
    ignoreFromSerialization
], BarcodePickView.prototype, "navigationUnsubscribers", void 0);
__decorate([
    ignoreFromSerialization
], BarcodePickView.prototype, "cameraOwner", void 0);
const RNTBarcodePickView = requireNativeComponent('RNTBarcodePickView');

class BarcodeFindView extends React.Component {
    baseBarcodeFindView;
    _isMounted = false;
    navigationUnsubscribers = [];
    cameraOwner;
    constructor(props) {
        super(props);
        // Create camera owner with unique ID
        this.cameraOwner = {
            id: `barcode-find-view-${Math.floor(Math.random() * 1000000)}`,
        };
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
        // Clean up navigation listeners
        this.navigationUnsubscribers.forEach(unsubscribe => unsubscribe());
        this.navigationUnsubscribers = [];
        // Release camera ownership
        CameraOwnershipHelper.releaseOwnership(CameraPosition$1.WorldFacing, this.cameraOwner);
        this.baseBarcodeFindView.dispose();
    }
    componentDidMount() {
        this._isMounted = true;
        // Set up navigation listeners if navigation prop is provided
        this.setupNavigationListeners();
        // This is required to ensure that findNodeHandle returns a valid handle
        void InteractionManager.runAfterInteractions(async () => {
            if (this._isMounted) {
                await this.createBarcodeFindView();
            }
        });
    }
    setupNavigationListeners() {
        if (!this.props.navigation)
            return;
        try {
            const unsubscribeFromFocus = this.props.navigation.addListener('focus', () => {
                // The screen is focused - component gained focus
                void this.onFocus();
            });
            const unsubscribeFromBlur = this.props.navigation.addListener('blur', () => {
                // The screen is no longer focused (navigated away but still mounted) - component lost focus
                this.onBlur();
            });
            this.navigationUnsubscribers.push(unsubscribeFromFocus, unsubscribeFromBlur);
        }
        catch (e) {
            console.error('Failed to set up navigation listeners:', e);
        }
    }
    async onFocus() {
        await CameraOwnershipHelper.requestOwnership(CameraPosition$1.WorldFacing, this.cameraOwner);
    }
    onBlur() {
        CameraOwnershipHelper.releaseOwnership(CameraPosition$1.WorldFacing, this.cameraOwner);
    }
    async createBarcodeFindView() {
        const viewId = findNodeHandle(this);
        await this.baseBarcodeFindView.createNativeView(viewId);
    }
    toJSON() {
        return this.baseBarcodeFindView.toJSON();
    }
}
const RNTBarcodeFindView = requireNativeComponent('RNTBarcodeFindView');

initBarcodeDefaults();
initBarcodeProxy();

export { BarcodeArCustomAnnotation, BarcodeArCustomHighlight, BarcodeArView, BarcodeBatchAdvancedOverlay, BarcodeBatchAdvancedOverlayView, BarcodeBatchView, BarcodeCaptureView, BarcodeCountView, BarcodeCountViewStyle, BarcodeFindView, BarcodePickView, BarcodeSelectionView, SparkScanView };
