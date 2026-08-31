import { setBarcodeDefaultsLoader, BarcodeBatch, BarcodeBatchSettings, BarcodeBatchBasicOverlay, BarcodeBatchBasicOverlayStyle, BarcodeCaptureOverlay, BarcodeCapture, BaseBarcodeArView, BarcodeSelection, BarcodeSelectionSettings, BarcodeSelectionBasicOverlay, BarcodeSelectionBasicOverlayStyle, BaseSparkScanView, BaseBarcodeCountView, BaseBarcodePickView, BaseBarcodeFindView, SparkScan, SparkScanViewSettings, BarcodeCount, BarcodeAr, registerBarcodeProxies, loadAllBarcodeDefaults, BaseBarcodeBatchAdvancedOverlay, BarcodeCaptureSettings, BarcodeArAnnotationTrigger, SparkScanSettings, BarcodeCountSettings, BarcodeArSettings, getBarcodeArDefaults, getBarcodeBatchDefaults, getBarcodeCountDefaults } from './barcode.js';
export { ArucoDictionary, ArucoDictionaryPreset, ArucoMarker, AztecBarcodeGeneratorBuilder, Barcode, BarcodeAr, BarcodeArAnnotationTrigger, BarcodeArCircleHighlight, BarcodeArCircleHighlightPreset, BarcodeArFeedback, BarcodeArInfoAnnotation, BarcodeArInfoAnnotationAnchor, BarcodeArInfoAnnotationBodyComponent, BarcodeArInfoAnnotationFooter, BarcodeArInfoAnnotationHeader, BarcodeArInfoAnnotationWidthPreset, BarcodeArPopoverAnnotation, BarcodeArPopoverAnnotationAnchor, BarcodeArPopoverAnnotationButton, BarcodeArRectangleHighlight, BarcodeArResponsiveAnnotation, BarcodeArSession, BarcodeArSettings, BarcodeArStatusIconAnnotation, BarcodeArStatusIconAnnotationAnchor, BarcodeArViewSettings, BarcodeBatch, BarcodeBatchBasicOverlay, BarcodeBatchBasicOverlayStyle, BarcodeBatchLicenseInfo, BarcodeBatchSession, BarcodeBatchSettings, BarcodeCapture, BarcodeCaptureFeedback, BarcodeCaptureLicenseInfo, BarcodeCaptureOverlay, BarcodeCaptureSession, BarcodeCaptureSettings, BarcodeCount, BarcodeCountCaptureList, BarcodeCountCaptureListSession, BarcodeCountFeedback, BarcodeCountMappingFlowSettings, BarcodeCountNotInListActionSettings, BarcodeCountSession, BarcodeCountSettings, BarcodeCountStatus, BarcodeCountStatusItem, BarcodeCountStatusProviderCallback, BarcodeCountStatusResultAbort, BarcodeCountStatusResultError, BarcodeCountStatusResultSuccess, BarcodeCountToolbarSettings, BarcodeDefinition, BarcodeDefinitionBuilder, BarcodeFilterHighlightSettingsBrush, BarcodeFilterHighlightType, BarcodeFilterSettings, BarcodeFind, BarcodeFindFeedback, BarcodeFindItem, BarcodeFindItemContent, BarcodeFindItemSearchOptions, BarcodeFindSession, BarcodeFindSettings, BarcodeFindViewSettings, BarcodeGenerator, BarcodeGeneratorBuilder, BarcodeIdentifier, BarcodeInfo, BarcodePick, BarcodePickAction, BarcodePickActionCallback, BarcodePickAsyncMapperProductProvider, BarcodePickProduct, BarcodePickProductProviderCallback, BarcodePickProductProviderCallbackItem, BarcodePickScanningSession, BarcodePickSession, BarcodePickSettings, BarcodePickState, BarcodePickStatusIconSettings, BarcodePickStatusIconStyle, BarcodePickViewEvents, BarcodePickViewHighlightStyleCustomView, BarcodePickViewHighlightStyleCustomViewResponse, BarcodePickViewHighlightStyleRequest, BarcodePickViewHighlightStyleResponse, BarcodePickViewHighlightStyleResponseBuilder, BarcodePickViewSettings, BarcodeSelection, BarcodeSelectionAimerSelection, BarcodeSelectionAutoSelectionStrategy, BarcodeSelectionBasicOverlay, BarcodeSelectionBasicOverlayStyle, BarcodeSelectionFeedback, BarcodeSelectionFreezeBehavior, BarcodeSelectionLicenseInfo, BarcodeSelectionManualSelectionStrategy, BarcodeSelectionSession, BarcodeSelectionSettings, BarcodeSelectionTapBehavior, BarcodeSelectionTapSelection, BarcodeSpatialGrid, BatterySavingMode, CapturePreset, Checksum, Cluster, Code128BarcodeGeneratorBuilder, Code39BarcodeGeneratorBuilder, CompositeFlag, CompositeType, DataMatrixBarcodeGeneratorBuilder, Dot, DotWithIcons, Ean13BarcodeGeneratorBuilder, Ean13UpcaClassification, EncodingRange, InterleavedTwoOfFiveBarcodeGeneratorBuilder, LocalizedOnlyBarcode, Pdf417BarcodeGeneratorBuilder, Pdf417CompactionMode, Pdf417Dimensions, QrCodeBarcodeGeneratorBuilder, QrCodeErrorCorrectionLevel, Range, Rectangular, RectangularWithIcons, ScanComponentBarcodePreset, ScanComponentTextSemanticType, ScanItemDefinition, ScanItemIdentifier, ScannedBarcode, ScannedComponentIdentifier, ScannedItem, ScannedItemIdentifier, ScannedText, SparkScan, SparkScanBarcodeErrorFeedback, SparkScanBarcodeFeedback, SparkScanBarcodeSuccessFeedback, SparkScanLicenseInfo, SparkScanMiniPreviewSize, SparkScanPreviewBehavior, SparkScanScanningBehavior, SparkScanScanningModeDefault, SparkScanScanningModeTarget, SparkScanSession, SparkScanSettings, SparkScanToastSettings, SparkScanViewSettings, SparkScanViewState, StructuredAppendData, Symbology, SymbologyDescription, SymbologySettings, TargetBarcode, TextDefinition, TextDefinitionBuilder, TextIdentifier, TrackedBarcode, TrackedObject, UpcaBarcodeGeneratorBuilder } from './barcode.js';
import { CameraPosition, FrameSourceState, Anchor, PointWithUnit, NumberWithUnit, MeasureUnit, DataCaptureView, _internal, initCoreProxy, initCoreDefaults, getModuleDefaults, getNativeModule, createRNNativeCaller } from 'scandit-react-native-datacapture-core';
export { ScanditProvider, useCameraPermission, useIsForeground } from 'scandit-react-native-datacapture-core';
import React, { forwardRef, useRef, useState, useMemo, useCallback, useEffect, useImperativeHandle } from 'react';
import { AppState, View, requireNativeComponent, StyleSheet, Platform, findNodeHandle } from 'react-native';
import { CameraOwnershipHelper, nameForSerialization, CameraPosition as CameraPosition$1, Observable, Anchor as Anchor$1, ignoreFromSerialization } from 'scandit-react-native-datacapture-core/dist/core';

class RNBarcodeNativeCallerProvider {
    getNativeCaller(_proxyType) {
        // Use getNativeModule which handles both TurboModules and legacy modules
        const nativeModule = getNativeModule('ScanditDataCaptureBarcode');
        return createRNNativeCaller(nativeModule);
    }
}

function initBarcodeProxy() {
    initCoreProxy();
    registerBarcodeProxies(new RNBarcodeNativeCallerProvider());
}

function initBarcodeDefaults() {
    initCoreDefaults();
    loadAllBarcodeDefaults(getModuleDefaults('ScanditDataCaptureBarcode'));
}
setBarcodeDefaultsLoader(initBarcodeDefaults);

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onViewIdChanged() {
        this.baseBarcodeBatch.onViewIdChanged();
    }
}

const BarcodeBatchView$1 = forwardRef(function BarcodeBatchView(props, ref) {
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
        barcodeBatchModeRef.current = new BarcodeBatch(props.barcodeBatchSettings || new BarcodeBatchSettings());
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
            const settings = props.cameraSettings || BarcodeBatch.createRecommendedCameraSettings();
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
                },
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
        const settings = props.cameraSettings || BarcodeBatch.createRecommendedCameraSettings();
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

/** Builds a `BarcodeCaptureSettings` from the props, or returns the override. */
function buildSettings$4(props) {
    const { barcodeCaptureSettings, symbologies, locationSelection, compositeTypes, batterySaving, scanIntention, codeDuplicateFilter, arucoDictionary, } = props;
    const hasShorthand = symbologies !== undefined ||
        locationSelection !== undefined ||
        compositeTypes !== undefined ||
        batterySaving !== undefined ||
        scanIntention !== undefined ||
        codeDuplicateFilter !== undefined ||
        arucoDictionary !== undefined;
    if (barcodeCaptureSettings) {
        if (hasShorthand) {
            console.warn('BarcodeCaptureView: `barcodeCaptureSettings` takes precedence; shorthand props are ignored.');
        }
        return barcodeCaptureSettings;
    }
    const s = new BarcodeCaptureSettings();
    if (symbologies !== undefined)
        s.enableSymbologies(symbologies);
    if (locationSelection !== undefined)
        s.locationSelection = locationSelection;
    if (compositeTypes !== undefined)
        s.enableSymbologiesForCompositeTypes(compositeTypes);
    if (batterySaving !== undefined)
        s.batterySaving = batterySaving;
    if (scanIntention !== undefined)
        s.scanIntention = scanIntention;
    if (codeDuplicateFilter !== undefined)
        s.codeDuplicateFilter = codeDuplicateFilter;
    if (arucoDictionary !== undefined)
        s.setArucoDictionary(arucoDictionary);
    return s;
}
const BarcodeCaptureView = forwardRef(function BarcodeCaptureView(props, ref) {
    // SDK-instance props are stabilized so consumers can pass `new Brush(...)`
    // / `new TorchSwitchControl()` inline without memoizing — the hooks below
    // see the same reference until the structural content actually changes.
    const barcodeCaptureSettings = _internal.useStableProp(props.barcodeCaptureSettings);
    const symbologies = _internal.useStableProp(props.symbologies);
    const locationSelection = _internal.useStableProp(props.locationSelection);
    const compositeTypes = _internal.useStableProp(props.compositeTypes);
    const arucoDictionary = _internal.useStableProp(props.arucoDictionary);
    const basicOverlayDefaultBrush = _internal.useStableProp(props.basicOverlay?.defaultBrush);
    const basicOverlayViewfinder = _internal.useStableProp(props.basicOverlay?.viewfinder);
    const torchSwitchControl = _internal.useStableProp(props.torchSwitchControl);
    const zoomSwitchControl = _internal.useStableProp(props.zoomSwitchControl);
    const feedback = _internal.useStableProp(props.feedback);
    const context = _internal.useDataCaptureContextInternal();
    // Shared claim: coexists with any other provider-camera view, coalesced
    // by the coordinator into a single ON/OFF as views come and go.
    const [cameraActive, setCameraActive] = useState(false);
    // viewHandle bundles a stable ref callback, a reactive snapshot (used by
    // useModeListener and effects that need to react to mount), the mutable ref
    // for imperative calls, and a stable parent-id for native serialization.
    const viewHandle = _internal.useViewHandle();
    const cameraClaim = _internal.useCameraClaim({
        mode: 'shared',
        active: cameraActive,
        nativeViewRef: viewHandle.mutableRef,
    });
    const viewRef = viewHandle.mutableRef;
    const viewState = viewHandle.current;
    const viewRefCallback = viewHandle.ref;
    const viewId = viewHandle.id;
    // Tracks the most recent session so `reset()` on the imperative handle has
    // something to act on. BarcodeCapture itself doesn't expose a reset method;
    // `BarcodeCaptureSession.reset()` is the underlying operation.
    const latestSessionRef = useRef(null);
    // We rebuild settings whenever any settings-related prop changes; the
    // closure identity is stable otherwise so dependent effects don't churn.
    const resolveSettings = useCallback(() => buildSettings$4({
        barcodeCaptureSettings,
        symbologies,
        locationSelection,
        compositeTypes,
        batterySaving: props.batterySaving,
        scanIntention: props.scanIntention,
        codeDuplicateFilter: props.codeDuplicateFilter,
        arucoDictionary,
    }), [
        barcodeCaptureSettings,
        symbologies,
        locationSelection,
        compositeTypes,
        props.batterySaving,
        props.scanIntention,
        props.codeDuplicateFilter,
        arucoDictionary,
    ]);
    const basicOverlay = _internal.useOverlay({
        view: viewRef,
        enabled: props.basicOverlay?.enabled !== false,
        factory: () => new BarcodeCaptureOverlay(getMode()),
        factoryDeps: [],
        update: overlay => {
            if (basicOverlayDefaultBrush)
                overlay.brush = basicOverlayDefaultBrush;
            if (basicOverlayViewfinder !== undefined)
                overlay.viewfinder = basicOverlayViewfinder;
            if (props.basicOverlay?.shouldShowScanAreaGuides !== undefined) {
                overlay.shouldShowScanAreaGuides = props.basicOverlay.shouldShowScanAreaGuides;
            }
        },
        updateDeps: [basicOverlayDefaultBrush, basicOverlayViewfinder, props.basicOverlay?.shouldShowScanAreaGuides],
    });
    const { getMode, attach: attachMode, detach: detachMode, } = _internal.useMode({
        disabled: props.disabled,
        createMode: () => {
            const mode = new BarcodeCapture(resolveSettings());
            // `parentId` is a private serialization field that links the mode to its
            // DataCaptureView — same pattern as BarcodeBatchView / BarcodeSelectionView.
            // Replace with a public setter once one lands in the shared barcode package.
            mode['parentId'] = viewId;
            return mode;
        },
        applySettings: mode => mode.applySettings(resolveSettings()),
        setEnabled: (mode, enabled) => {
            if (mode.isEnabled !== enabled)
                mode.isEnabled = enabled;
        },
        attach: mode => context.addMode(mode),
        detach: mode => context.removeMode(mode),
        attachables: [basicOverlay],
        settingsDeps: [resolveSettings],
    });
    _internal.useModeListener({
        mode: getMode(),
        listenerFns: {
            didScan: props.didScan
                ? async (_mode, session, getFD) => {
                    latestSessionRef.current = session;
                    if (props.didScan) {
                        const barcodes = session.newlyRecognizedBarcode ? [session.newlyRecognizedBarcode] : [];
                        await props.didScan(barcodes, session, getFD);
                    }
                }
                : undefined,
            didUpdateSession: props.didUpdateSession
                ? async (_mode, session, getFD) => {
                    latestSessionRef.current = session;
                    if (props.didUpdateSession)
                        await props.didUpdateSession(session, getFD);
                }
                : (_mode, session) => {
                    // Always track the latest session so `reset()` works even when
                    // the consumer hasn't wired up a session callback themselves.
                    latestSessionRef.current = session;
                    return Promise.resolve();
                },
        },
        addListener: (m, l) => m.addListener(l),
        removeListener: (m, l) => m.removeListener(l),
    });
    // ─── Feedback ─────────────────────────────────────────────────────────────
    useEffect(() => {
        if (feedback === undefined)
            return;
        getMode().feedback = feedback;
    }, [feedback, getMode]);
    // Enable/disable scanning, shared by the navigation prop and the imperative
    // `enable()`/`disable()` handle. Focus fully *attaches* (adds the mode to the
    // shared context) and blur *detaches* (removes it) — not merely toggling
    // `isEnabled`. The native context is single-active-mode: `addMode` of a
    // non-coexisting mode (e.g. BarcodeCount) silently evicts BarcodeCapture from
    // the context, and the framework isn't notified. Re-adding on focus keeps the
    // focused view as the context's active mode and re-registers its listener
    // (the instance is reused, so the listener re-subscribes on re-add).
    const enable = useCallback(async () => {
        await attachMode();
        setCameraActive(true);
        await cameraClaim.granted();
    }, [attachMode, cameraClaim]);
    const disable = useCallback(async () => {
        setCameraActive(false);
        await detachMode();
    }, [detachMode]);
    // Lifecycle: focus/blur + app foreground/background + the `disabled` veto,
    // resolved to a single enable/disable.
    _internal.useLifecycleHook({
        navigation: props.navigation,
        disabled: props.disabled,
        appStateHandlingDisabled: props.appStateHandlingDisabled,
        onEnable: enable,
        onDisable: disable,
    });
    // ─── Native controls ──────────────────────────────────────────────────────
    _internal.useNativeControl(viewState, torchSwitchControl);
    _internal.useNativeControl(viewState, zoomSwitchControl);
    _internal.useModeListener({
        mode: viewState,
        listenerFns: {
            didChangeSize: props.onDidChangeSize ?? undefined,
        },
        addListener: (v, l) => v.addListener(l),
        removeListener: (v, l) => v.removeListener(l),
    });
    useImperativeHandle(ref, () => ({
        reset: () => latestSessionRef.current?.reset() ?? Promise.resolve(),
        viewPointForFramePoint: point => viewRef.current?.viewPointForFramePoint(point) ?? Promise.reject(new Error('DataCaptureView not mounted')),
        viewQuadrilateralForFrameQuadrilateral: quad => viewRef.current?.viewQuadrilateralForFrameQuadrilateral(quad) ??
            Promise.reject(new Error('DataCaptureView not mounted')),
        addControl: control => viewRef.current?.addControl(control) ?? Promise.reject(new Error('DataCaptureView not mounted')),
        removeControl: control => {
            viewRef.current?.removeControl(control);
        },
        enable,
        disable,
    }), [viewRef, enable, disable]);
    return (React.createElement(DataCaptureView, { context: context, parentId: viewId, style: props.style ?? { flex: 1 }, ref: viewRefCallback, onNativeDispose: teardown => cameraClaim.release(teardown) }));
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

// Single shared registration of the `RNTBarcodeArView` native component.
//
// `requireNativeComponent` registers the name in
// `ReactNativeViewConfigRegistry`; calling it twice with the same name throws
// "Tried to register two views with the same name RNTBarcodeArView". Both
// `ts/BarcodeArView.tsx` (legacy class) and `ts/private/BarcodeArView.tsx`
// (AIO) need this component, so the require lives here and they import it.
const RNTBarcodeArView = requireNativeComponent('RNTBarcodeArView');

function BarcodeArCustomHighlightContainer({ barcodeId, customHighlight, onClick, registerCustomHighlightUpdateEvent, registerCustomHighlightHideEvent, registerCustomHighlightShowEvent, }) {
    const viewRef = useRef(null);
    const timeoutRef = useRef(null);
    const widthAndHeight = useRef({ width: 0, height: 0 });
    // Start hidden and only show when we get a position update
    const [hidden, setHidden] = useState(true);
    // `setHidden` is stable and idempotent for equal values, so we don't need
    // `hidden` as a dep — keeping it stable prevents the effect below from
    // tearing down and re-registering listeners on every visibility flip.
    const onUpdate = useCallback((centerPosition) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setHidden(true);
        }, 1000);
        setHidden(false);
        if (!viewRef.current) {
            return;
        }
        const xPos = centerPosition.x - widthAndHeight.current.width / 2;
        const yPos = centerPosition.y - widthAndHeight.current.height / 2;
        viewRef.current.setNativeProps({
            style: { left: xPos, top: yPos },
        });
    }, []);
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
        barcodeId,
        onUpdate,
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

function BarcodeArCustomAnnotationContainer({ barcodeId, customAnnotation, registerCustomAnnotationUpdateEvent, registerCustomAnnotationHideEvent, registerCustomAnnotationShowEvent, }) {
    const viewRef = useRef(null);
    const timeoutRef = useRef(null);
    const widthAndHeight = useRef({ width: 0, height: 0 });
    // Start hidden and only show when we get a position update
    const [hidden, setHidden] = useState(true);
    // `setHidden` is stable and idempotent for equal values, so we don't need
    // `hidden` as a dep — keeping it stable prevents the effect below from
    // tearing down and re-registering listeners on every visibility flip.
    const onUpdate = useCallback((centerPosition) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setHidden(true);
        }, 1000);
        setHidden(false);
        if (!viewRef.current) {
            return;
        }
        const position = calculatePosition(centerPosition, widthAndHeight.current, customAnnotation.anchor);
        viewRef.current.setNativeProps({
            style: position,
        });
    }, [customAnnotation.anchor]);
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
        barcodeId,
        onUpdate,
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

let BarcodeArView$1 = class BarcodeArView extends React.Component {
    state = {
        shownHighlights: {},
        shownAnnotations: {},
    };
    baseBarcodeArView;
    _isMounted = false;
    _viewCreated = false;
    _createViewRafHandle = null;
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
        this._isMounted = true;
        // Set up navigation listeners if navigation prop is provided
        this.setupNavigationListeners();
        // Native view creation is driven by `onLayout` in render() (see SDC-32208),
        // not `InteractionManager.runAfterInteractions`, which can be starved by a
        // blocked JS interaction queue. On Android, additionally drive it from a
        // requestAnimationFrame loop: on RN 0.78 New Architecture Android release
        // builds `onLayout` is not reliably emitted on the Fabric view, so relying
        // on it alone can leave the view uncreated (SDC-32583). On iOS creation
        // must wait for `onLayout`: creating at mount runs before callback refs
        // attach and before the native container has a frame, so a start() issued
        // from a ref or an effect races the deferred native creation and is
        // dropped (SDC-32861).
        if (Platform.OS === 'android') {
            this.scheduleCreateNativeView();
        }
        // Subscribe to custom highlight events
        this.baseBarcodeArView.subscribeForCustomHighlightEvents();
        this.baseBarcodeArView.subscribeForCustomAnnotationEvents();
        this.unregisterFromCustomHighlightCreateEvent = this.baseBarcodeArView.registerCustomHighlightCreateEvent(this.onCustomHighlightCreated.bind(this));
        this.unregisterFromCustomHighlightDisposeEvent = this.baseBarcodeArView.registerCustomHighlightDisposeEvent(this.onCustomHighlightDisposed.bind(this));
        this.unregisterFromCustomAnnotationCreateEvent = this.baseBarcodeArView.registerCustomAnnotationCreateEvent(this.onCustomAnnotationCreated.bind(this));
        this.unregisterFromCustomAnnotationDisposeEvent = this.baseBarcodeArView.registerCustomAnnotationDisposeEvent(this.onCustomAnnotationDisposed.bind(this));
    }
    componentWillUnmount() {
        this._isMounted = false;
        this._viewCreated = false;
        if (this._createViewRafHandle !== null) {
            cancelAnimationFrame(this._createViewRafHandle);
            this._createViewRafHandle = null;
        }
        this.unregisterFromCustomHighlightCreateEvent?.();
        this.unregisterFromCustomHighlightDisposeEvent?.();
        this.unregisterFromCustomAnnotationCreateEvent?.();
        this.unregisterFromCustomAnnotationDisposeEvent?.();
        // Clean up navigation listeners
        this.navigationUnsubscribers.forEach(unsubscribe => unsubscribe());
        this.navigationUnsubscribers = [];
        // Release camera ownership
        CameraOwnershipHelper.releaseOwnership(CameraPosition$1.WorldFacing, this.cameraOwner);
        // dispose() is now async (awaits native teardown); the classic view
        // tears down fire-and-forget as before, so explicitly ignore the promise.
        void this.baseBarcodeArView.dispose();
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
            return;
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
    get torchControlOffset() {
        return this.baseBarcodeArView.torchControlOffset;
    }
    set torchControlOffset(value) {
        this.baseBarcodeArView.torchControlOffset = value;
    }
    get zoomControlOffset() {
        return this.baseBarcodeArView.zoomControlOffset;
    }
    set zoomControlOffset(value) {
        this.baseBarcodeArView.zoomControlOffset = value;
    }
    get cameraSwitchControlOffset() {
        return this.baseBarcodeArView.cameraSwitchControlOffset;
    }
    set cameraSwitchControlOffset(value) {
        this.baseBarcodeArView.cameraSwitchControlOffset = value;
    }
    get macroModeControlOffset() {
        return this.baseBarcodeArView.macroModeControlOffset;
    }
    set macroModeControlOffset(value) {
        this.baseBarcodeArView.macroModeControlOffset = value;
    }
    get logoStyle() {
        return this.baseBarcodeArView.logoStyle;
    }
    set logoStyle(value) {
        this.baseBarcodeArView.logoStyle = value;
    }
    get zoomControlOrientation() {
        return this.baseBarcodeArView.zoomControlOrientation;
    }
    set zoomControlOrientation(value) {
        this.baseBarcodeArView.zoomControlOrientation = value;
    }
    get logoAnchor() {
        return this.baseBarcodeArView.logoAnchor;
    }
    set logoAnchor(value) {
        this.baseBarcodeArView.logoAnchor = value;
    }
    get logoOffset() {
        return this.baseBarcodeArView.logoOffset;
    }
    set logoOffset(value) {
        this.baseBarcodeArView.logoOffset = value;
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(RNTBarcodeArView, { ...this.props, onLayout: (event) => {
                    // Forward to a caller-supplied onLayout (BarcodeArViewProps extends
                    // ViewProps) so this internal handler doesn't swallow it.
                    this.props.onLayout?.(event);
                    // Position the augmentation container to match the camera view
                    const { x, y, width, height } = event.nativeEvent.layout;
                    this.augementationContainerRef.current.setNativeProps({
                        style: { top: y, left: x, width, height },
                    });
                    // Create the native view once, off the layout signal (was
                    // InteractionManager.runAfterInteractions). Layout is not starvable
                    // by a blocked JS interaction queue. See SDC-32208.
                    this.tryCreateNativeView();
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
    scheduleCreateNativeView = () => {
        if (this._viewCreated || !this._isMounted) {
            return;
        }
        if (this.tryCreateNativeView()) {
            return;
        }
        this._createViewRafHandle = requestAnimationFrame(this.scheduleCreateNativeView);
    };
    // Create the native view exactly once. Returns true once creation is kicked
    // off, false if the native tag is not available yet (so the rAF loop retries).
    // The `_viewCreated` flag is set synchronously, so `onLayout` and the rAF loop
    // race safely and only one wins.
    tryCreateNativeView() {
        if (this._viewCreated || !this._isMounted) {
            return true;
        }
        const viewId = findNodeHandle(this);
        if (viewId === null) {
            return false;
        }
        this._viewCreated = true;
        if (this._createViewRafHandle !== null) {
            cancelAnimationFrame(this._createViewRafHandle);
            this._createViewRafHandle = null;
        }
        void this.baseBarcodeArView.createNativeView(viewId);
        return true;
    }
    toJSON() {
        return this.baseBarcodeArView.toJSON();
    }
};

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
        barcodeSelectionModeRef.current = new BarcodeSelection(props.barcodeSelectionSettings || new BarcodeSelectionSettings());
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
            const settings = props.cameraSettings || BarcodeSelection.createRecommendedCameraSettings();
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
        const settings = props.cameraSettings || BarcodeSelection.createRecommendedCameraSettings();
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

// Single shared registration of the `RNTSparkScanView` native component.
//
// `requireNativeComponent` registers the name in
// `ReactNativeViewConfigRegistry`; calling it twice with the same name throws
// "Tried to register two views with the same name RNTSparkScanView". Both
// `ts/SparkScanView.tsx` (legacy class) and `ts/private/SparkScanView.tsx`
// (AIO) need this component, so the require lives here and they import it.
//
// Props are typed permissively because the legacy class spreads
// `BaseSparkScanViewProps` and the AIO passes style/children/ref. The native
// side accepts whichever it knows about and ignores the rest.
const RNTSparkScanView = requireNativeComponent('RNTSparkScanView');

let SparkScanView$1 = class SparkScanView extends React.Component {
    baseSparkScanView;
    rnViewListener = null;
    _isMounted = false;
    _viewCreated = false;
    _createViewRafHandle = null;
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
                listener?.didTapBarcodeCountButton?.(this);
            },
            didTapBarcodeFindButton: () => {
                listener?.onBarcodeFindButtonTappedIn?.(this);
                listener?.didTapBarcodeFindButton?.(this);
            },
            didTapLabelCaptureButton: () => {
                listener?.onLabelCaptureButtonTappedIn?.(this);
                listener?.didTapLabelCaptureButton?.(this);
            },
            didChangeScanningMode: (newScanningMode) => {
                listener?.didChangeScanningMode?.(newScanningMode);
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
        return React.createElement(RNTSparkScanView, { ...this.props, onLayout: this.onNativeViewLayout });
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
    get selectionModeButtonVisible() {
        return this.baseSparkScanView.selectionModeButtonVisible;
    }
    set selectionModeButtonVisible(newValue) {
        this.baseSparkScanView.selectionModeButtonVisible = newValue;
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
    get zoomSwitchControlVisible() {
        return this.baseSparkScanView.zoomSwitchControlVisible;
    }
    set zoomSwitchControlVisible(newValue) {
        this.baseSparkScanView.zoomSwitchControlVisible = newValue;
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
        // On Android, also drive creation from a requestAnimationFrame loop: on
        // RN 0.78 New Architecture Android release builds `onLayout` is not
        // reliably emitted on the Fabric view, so relying on it alone can leave
        // the view uncreated (SDC-32583). On iOS creation must wait for
        // `onLayout`: creating at mount runs before callback refs attach and
        // before the native container has a frame, so commands issued from a ref
        // or an effect race the deferred native creation and are dropped
        // (SDC-32861).
        if (Platform.OS === 'android') {
            this.scheduleCreateNativeView();
        }
    }
    componentDidUpdate(prevProps) {
        this.baseSparkScanView.updateWithProps(prevProps, this.props);
    }
    componentWillUnmount() {
        this._isMounted = false;
        this._viewCreated = false;
        if (this._createViewRafHandle !== null) {
            cancelAnimationFrame(this._createViewRafHandle);
            this._createViewRafHandle = null;
        }
        // Clean up navigation listeners
        this.navigationUnsubscribers.forEach(unsubscribe => unsubscribe());
        this.navigationUnsubscribers = [];
        // Release camera ownership
        CameraOwnershipHelper.releaseOwnership(CameraPosition$1.WorldFacing, this.cameraOwner);
        void this.baseSparkScanView.dispose();
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
    // Create the native view on layout rather than via
    // `InteractionManager.runAfterInteractions`: layout fires when the view is
    // committed (so `findNodeHandle` is valid) and is not starvable by a blocked
    // JS interaction queue. See SDC-32208. `onLayout` can fire repeatedly, so
    // create exactly once.
    onNativeViewLayout = (event) => {
        this.props.onLayout?.(event);
        this.tryCreateNativeView();
    };
    scheduleCreateNativeView = () => {
        if (this._viewCreated || !this._isMounted) {
            return;
        }
        if (this.tryCreateNativeView()) {
            return;
        }
        this._createViewRafHandle = requestAnimationFrame(this.scheduleCreateNativeView);
    };
    // Create the native view exactly once. Returns true once creation is kicked
    // off, false if the native tag is not available yet (so the rAF loop retries).
    // The `_viewCreated` flag is set synchronously, so `onLayout` and the rAF loop
    // race safely and only one wins.
    tryCreateNativeView() {
        if (this._viewCreated || !this._isMounted) {
            return true;
        }
        const viewId = findNodeHandle(this);
        if (viewId === null) {
            return false;
        }
        this._viewCreated = true;
        if (this._createViewRafHandle !== null) {
            cancelAnimationFrame(this._createViewRafHandle);
            this._createViewRafHandle = null;
        }
        void this.baseSparkScanView.createNativeView(viewId);
        return true;
    }
    toJSON() {
        return this.baseSparkScanView.toJSON();
    }
};

// Single shared registration of the `RNTBarcodeCountView` native component.
//
// `requireNativeComponent` registers the name in
// `ReactNativeViewConfigRegistry`; calling it twice with the same name throws
// "Tried to register two views with the same name RNTBarcodeCountView". Both
// `ts/BarcodeCountView.tsx` (legacy class) and `ts/private/BarcodeCountView.tsx`
// (AIO) need this component, so the require lives here and they import it.
const RNTBarcodeCountView = requireNativeComponent('RNTBarcodeCountView');

var BarcodeCountViewStyle;
(function (BarcodeCountViewStyle) {
    BarcodeCountViewStyle["Icon"] = "icon";
    BarcodeCountViewStyle["Dot"] = "dot";
})(BarcodeCountViewStyle || (BarcodeCountViewStyle = {}));
let BarcodeCountView$1 = class BarcodeCountView extends React.Component {
    baseBarcodeCountView;
    _isMounted = false;
    _viewCreated = false;
    _createViewRafHandle = null;
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
    get shouldShowStatusModeButton() {
        return this.baseBarcodeCountView.shouldShowStatusModeButton;
    }
    set shouldShowStatusModeButton(newValue) {
        this.baseBarcodeCountView.shouldShowStatusModeButton = newValue;
    }
    get shouldShowStatusIconsOnScan() {
        return this.baseBarcodeCountView.shouldShowStatusIconsOnScan;
    }
    set shouldShowStatusIconsOnScan(newValue) {
        this.baseBarcodeCountView.shouldShowStatusIconsOnScan = newValue;
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
    get statusModeButtonAccessibilityHint() {
        return this.baseBarcodeCountView.statusModeButtonAccessibilityHint;
    }
    set statusModeButtonAccessibilityHint(newValue) {
        this.baseBarcodeCountView.statusModeButtonAccessibilityHint = newValue;
    }
    get statusModeButtonAccessibilityLabel() {
        return this.baseBarcodeCountView.statusModeButtonAccessibilityLabel;
    }
    set statusModeButtonAccessibilityLabel(newValue) {
        this.baseBarcodeCountView.statusModeButtonAccessibilityLabel = newValue;
    }
    get statusModeButtonContentDescription() {
        return this.baseBarcodeCountView.statusModeButtonContentDescription;
    }
    set statusModeButtonContentDescription(newValue) {
        this.baseBarcodeCountView.statusModeButtonContentDescription = newValue;
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
    get textForBarcodesNotInListDetectedHint() {
        return this.baseBarcodeCountView.textForBarcodesNotInListDetectedHint;
    }
    set textForBarcodesNotInListDetectedHint(newValue) {
        this.baseBarcodeCountView.textForBarcodesNotInListDetectedHint = newValue;
    }
    get textForScreenCleanedUpHint() {
        return this.baseBarcodeCountView.textForScreenCleanedUpHint;
    }
    set textForScreenCleanedUpHint(newValue) {
        this.baseBarcodeCountView.textForScreenCleanedUpHint = newValue;
    }
    get textForClusteringGestureHint() {
        return this.baseBarcodeCountView.textForClusteringGestureHint;
    }
    set textForClusteringGestureHint(newValue) {
        this.baseBarcodeCountView.textForClusteringGestureHint = newValue;
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
        // On Android, also drive creation from a requestAnimationFrame loop: on
        // RN 0.78 New Architecture Android release builds `onLayout` is not
        // reliably emitted on the Fabric view, so relying on it alone can leave
        // the view uncreated (SDC-32583). On iOS creation must wait for
        // `onLayout`: creating at mount runs before callback refs attach and
        // before the native container has a frame, so commands issued from a ref
        // or an effect race the deferred native creation and are dropped
        // (SDC-32861).
        if (Platform.OS === 'android') {
            this.scheduleCreateNativeView();
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
        this._viewCreated = false;
        if (this._createViewRafHandle !== null) {
            cancelAnimationFrame(this._createViewRafHandle);
            this._createViewRafHandle = null;
        }
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
    setStatusProvider(provider) {
        this.baseBarcodeCountView.setStatusProvider(provider);
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
        return React.createElement(RNTBarcodeCountView, { ...this.props, onLayout: this.onNativeViewLayout });
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
    // Create the native view on layout rather than via
    // `InteractionManager.runAfterInteractions`: layout fires when the view is
    // committed (so `findNodeHandle` is valid) and is not starvable by a blocked
    // JS interaction queue. See SDC-32208. `onLayout` can fire repeatedly, so
    // create exactly once.
    onNativeViewLayout = (event) => {
        this.props.onLayout?.(event);
        this.tryCreateNativeView();
    };
    scheduleCreateNativeView = () => {
        if (this._viewCreated || !this._isMounted) {
            return;
        }
        if (this.tryCreateNativeView()) {
            return;
        }
        this._createViewRafHandle = requestAnimationFrame(this.scheduleCreateNativeView);
    };
    // Create the native view exactly once. Returns true once creation is kicked
    // off, false if the native tag is not available yet (so the rAF loop retries).
    // The `_viewCreated` flag is set synchronously, so `onLayout` and the rAF loop
    // race safely and only one wins.
    tryCreateNativeView() {
        if (this._viewCreated || !this._isMounted) {
            return true;
        }
        const viewId = findNodeHandle(this);
        if (viewId === null) {
            return false;
        }
        this._viewCreated = true;
        if (this._createViewRafHandle !== null) {
            cancelAnimationFrame(this._createViewRafHandle);
            this._createViewRafHandle = null;
        }
        void this.baseBarcodeCountView.createNativeView(viewId);
        return true;
    }
    toJSON() {
        return this.baseBarcodeCountView.toJSON();
    }
};

class BarcodePickView extends React.Component {
    baseBarcodePickView;
    _isMounted = false;
    _createViewRafHandle = null;
    _viewCreated = false;
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
        // On Android, also drive creation from a requestAnimationFrame loop: on
        // RN 0.78 New Architecture Android release builds `onLayout` is not
        // reliably emitted on the Fabric view, so relying on it alone can leave
        // the view uncreated (SDC-32583). On iOS creation must wait for
        // `onLayout`: creating at mount runs before callback refs attach and
        // before the native container has a frame, so a start() issued from a
        // ref or an effect races the deferred native creation and is dropped
        // (SDC-32861).
        if (Platform.OS === 'android') {
            this.scheduleCreateNativeView();
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
        this._viewCreated = false;
        if (this._createViewRafHandle !== null) {
            cancelAnimationFrame(this._createViewRafHandle);
            this._createViewRafHandle = null;
        }
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
        return React.createElement(RNTBarcodePickView, { ...this.props, onLayout: this.onNativeViewLayout });
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
    // Create the native view on layout rather than via
    // `InteractionManager.runAfterInteractions`: layout fires when the view is
    // committed (so `findNodeHandle` is valid) and is not starvable by a blocked
    // JS interaction queue. See SDC-32208. `onLayout` can fire repeatedly, so
    // create exactly once.
    onNativeViewLayout = (event) => {
        this.props.onLayout?.(event);
        this.tryCreateNativeView();
    };
    scheduleCreateNativeView = () => {
        if (this._viewCreated || !this._isMounted) {
            return;
        }
        if (this.tryCreateNativeView()) {
            return;
        }
        this._createViewRafHandle = requestAnimationFrame(this.scheduleCreateNativeView);
    };
    // Create the native view exactly once. Returns true once creation is kicked
    // off, false if the native tag is not available yet (so the rAF loop retries).
    // The `_viewCreated` flag is set synchronously, so `onLayout` and the rAF loop
    // race safely and only one wins.
    tryCreateNativeView() {
        if (this._viewCreated || !this._isMounted) {
            return true;
        }
        const viewId = findNodeHandle(this);
        if (viewId === null) {
            return false;
        }
        this._viewCreated = true;
        if (this._createViewRafHandle !== null) {
            cancelAnimationFrame(this._createViewRafHandle);
            this._createViewRafHandle = null;
        }
        void this.baseBarcodePickView.createNativeView(viewId);
        return true;
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
], BarcodePickView.prototype, "_createViewRafHandle", void 0);
__decorate([
    ignoreFromSerialization
], BarcodePickView.prototype, "_viewCreated", void 0);
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
    _viewCreated = false;
    _createViewRafHandle = null;
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
    get logoStyle() {
        return this.baseBarcodeFindView.logoStyle;
    }
    set logoStyle(value) {
        this.baseBarcodeFindView.logoStyle = value;
    }
    get logoAnchor() {
        return this.baseBarcodeFindView.logoAnchor;
    }
    set logoAnchor(value) {
        this.baseBarcodeFindView.logoAnchor = value;
    }
    // cameraStateOnStop is only effective on iOS; it is ignored on Android.
    get cameraStateOnStop() {
        return this.baseBarcodeFindView.cameraStateOnStop;
    }
    set cameraStateOnStop(value) {
        this.baseBarcodeFindView.cameraStateOnStop = value;
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
        return React.createElement(RNTBarcodeFindView, { ...this.props, onLayout: this.onNativeViewLayout });
    }
    componentWillUnmount() {
        this._isMounted = false;
        this._viewCreated = false;
        if (this._createViewRafHandle !== null) {
            cancelAnimationFrame(this._createViewRafHandle);
            this._createViewRafHandle = null;
        }
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
        // On Android, also drive creation from a requestAnimationFrame loop: on
        // RN 0.78 New Architecture Android release builds `onLayout` is not
        // reliably emitted on the Fabric view, so relying on it alone can leave
        // the view uncreated (SDC-32583). On iOS creation must wait for
        // `onLayout`: creating at mount runs before callback refs attach and
        // before the native container has a frame, so a startSearching() issued
        // from a ref or an effect is lost and the camera never starts
        // (SDC-32861).
        if (Platform.OS === 'android') {
            this.scheduleCreateNativeView();
        }
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
    // Create the native view on layout rather than via
    // `InteractionManager.runAfterInteractions`: layout fires when the view is
    // committed (so `findNodeHandle` is valid) and is not starvable by a blocked
    // JS interaction queue. See SDC-32208. `onLayout` can fire repeatedly, so
    // create exactly once.
    onNativeViewLayout = (event) => {
        this.props.onLayout?.(event);
        this.tryCreateNativeView();
    };
    scheduleCreateNativeView = () => {
        if (this._viewCreated || !this._isMounted) {
            return;
        }
        if (this.tryCreateNativeView()) {
            return;
        }
        this._createViewRafHandle = requestAnimationFrame(this.scheduleCreateNativeView);
    };
    // Create the native view exactly once. Returns true once creation is kicked
    // off, false if the native tag is not available yet (so the rAF loop retries).
    // The `_viewCreated` flag is set synchronously, so `onLayout` and the rAF loop
    // race safely and only one wins.
    tryCreateNativeView() {
        if (this._viewCreated || !this._isMounted) {
            return true;
        }
        const viewId = findNodeHandle(this);
        if (viewId === null) {
            return false;
        }
        this._viewCreated = true;
        if (this._createViewRafHandle !== null) {
            cancelAnimationFrame(this._createViewRafHandle);
            this._createViewRafHandle = null;
        }
        void this.baseBarcodeFindView.createNativeView(viewId);
        return true;
    }
    toJSON() {
        return this.baseBarcodeFindView.toJSON();
    }
}
const RNTBarcodeFindView = requireNativeComponent('RNTBarcodeFindView');

function buildSettings$3(props) {
    const { sparkScanSettings, symbologies, scanIntention, enabledCompositeTypes, itemDefinitions, codeDuplicateFilter, batterySaving, } = props;
    const hasShorthand = symbologies !== undefined ||
        scanIntention !== undefined ||
        enabledCompositeTypes !== undefined ||
        itemDefinitions !== undefined ||
        codeDuplicateFilter !== undefined ||
        batterySaving !== undefined;
    if (sparkScanSettings) {
        if (hasShorthand) {
            console.warn('SparkScanView: `sparkScanSettings` takes precedence; shorthand props are ignored.');
        }
        return sparkScanSettings;
    }
    const s = new SparkScanSettings();
    if (symbologies !== undefined)
        s.enableSymbologies(symbologies);
    if (scanIntention !== undefined)
        s.scanIntention = scanIntention;
    if (enabledCompositeTypes !== undefined) {
        s.enabledCompositeTypes = enabledCompositeTypes;
        s.enableSymbologiesForCompositeTypes(enabledCompositeTypes);
    }
    if (itemDefinitions !== undefined)
        s.itemDefinitions = itemDefinitions;
    if (codeDuplicateFilter !== undefined)
        s.codeDuplicateFilter = codeDuplicateFilter;
    if (batterySaving !== undefined)
        s.batterySaving = batterySaving;
    return s;
}
const PASS_THROUGH_KEYS$1 = [
    'previewSizeControlVisible',
    'scanningBehaviorButtonVisible',
    'barcodeCountButtonVisible',
    'barcodeFindButtonVisible',
    'targetModeButtonVisible',
    'selectionModeButtonVisible',
    'labelCaptureButtonVisible',
    'cameraSwitchButtonVisible',
    'torchControlVisible',
    'zoomSwitchControlVisible',
    'previewCloseControlVisible',
    'triggerButtonVisible',
    'toolbarBackgroundColor',
    'toolbarIconActiveTintColor',
    'toolbarIconInactiveTintColor',
    'triggerButtonAnimationColor',
    'triggerButtonExpandedColor',
    'triggerButtonCollapsedColor',
    'triggerButtonTintColor',
    'triggerButtonImage',
    'shouldHandleAndroidLifecycleAutomatically',
];
const SparkScanView = forwardRef(function SparkScanView(props, ref) {
    const { didScan, didUpdateSession, uiListener, navigation, style, children, symbologies, scanIntention, enabledCompositeTypes, itemDefinitions, codeDuplicateFilter, batterySaving, } = props;
    // Stable structural references for SDK class instances.
    const sparkScanSettings = _internal.useStableProp(props.sparkScanSettings);
    const sparkScanViewSettings = _internal.useStableProp(props.sparkScanViewSettings);
    // Not stabilized: registered via useModeListener, which handles re-subscription.
    const feedbackDelegateProp = props.feedbackDelegate;
    const feedbackProp = _internal.useStableProp(props.feedback);
    // `feedback` is sugar for a constant delegate (same feedback for every
    // barcode); an explicit `feedbackDelegate` takes precedence.
    const feedbackDelegate = useMemo(() => {
        if (feedbackDelegateProp)
            return feedbackDelegateProp;
        if (feedbackProp)
            return { feedbackForBarcode: () => feedbackProp };
        return feedbackDelegateProp;
    }, [feedbackDelegateProp, feedbackProp]);
    useEffect(() => {
        if (feedbackDelegateProp && feedbackProp) {
            console.warn('SparkScanView: `feedbackDelegate` takes precedence; `feedback` is ignored.');
        }
    }, [feedbackDelegateProp, feedbackProp]);
    const stableItemDefinitions = _internal.useStableProp(itemDefinitions);
    // Stabilize array shorthand props too — otherwise an inline `symbologies={[…]}`
    // is a new identity every render, churns `resolveSettings`, and re-applies
    // settings natively on every unrelated render. (Finding F1; matches BarcodeCaptureView.)
    const stableSymbologies = _internal.useStableProp(symbologies);
    const stableEnabledCompositeTypes = _internal.useStableProp(enabledCompositeTypes);
    const context = _internal.useDataCaptureContextInternal();
    const viewHandle = _internal.useViewHandle();
    const viewNode = viewHandle.current;
    // Own-camera view: an exclusive claim hands the provider camera back while
    // this SparkScan is the focused scanner, so camera 0 is free for its own
    // native camera; releasing it (on blur, driven from enable/disable below)
    // re-asserts the provider. Focus-keyed via `cameraActive`, not mount-keyed,
    // so a blurred-but-mounted SparkScan in a nav stack doesn't starve a
    // focused provider-camera mode above it.
    const [cameraActive, setCameraActive] = useState(false);
    const cameraClaim = _internal.useCameraClaim({
        mode: 'exclusive',
        active: cameraActive,
        nativeViewRef: viewHandle.mutableRef,
    });
    const baseViewRef = useRef(null);
    // Reactive snapshot of the base view so listener hooks can register once it
    // exists and re-register after a detach/re-attach cycle. Updated alongside
    // `baseViewRef` whenever the underlying instance changes.
    const [baseView, setBaseView] = useState(null);
    const prevPassThroughRef = useRef(null);
    const resolveSettings = useCallback(() => buildSettings$3({
        sparkScanSettings,
        symbologies: stableSymbologies,
        scanIntention,
        enabledCompositeTypes: stableEnabledCompositeTypes,
        itemDefinitions: stableItemDefinitions,
        codeDuplicateFilter,
        batterySaving,
    }), [
        sparkScanSettings,
        stableSymbologies,
        scanIntention,
        stableEnabledCompositeTypes,
        stableItemDefinitions,
        codeDuplicateFilter,
        batterySaving,
    ]);
    const { getMode: getSparkScan, enable: enableMode, disable: disableMode, } = _internal.useMode({
        disabled: props.disabled,
        canAttach: viewNode != null,
        createMode: () => new SparkScan(resolveSettings()),
        applySettings: m => m.applySettings(resolveSettings()),
        setEnabled: async (m, enabled) => {
            // Claim camera 0 exclusively before this view opens it; this is the
            // single gate every enable path (incl. useMode's auto-attach) funnels
            // through. `granted()` resolving already guarantees the provider camera
            // is off — no separate `run()`/`runExclusive` serialization needed to
            // order this against a pending provider OFF (SDC-32484).
            if (enabled) {
                setCameraActive(true);
                await cameraClaim.granted();
                if (m.isEnabled !== enabled)
                    m.isEnabled = enabled;
                // onHostPause() before prepareScanning(): SparkScan manages its camera
                // NATIVELY, and a sibling component's native teardown can switch
                // camera 0 off while this view's native side still believes it is
                // active — a bare prepare then no-ops on the stale state and the
                // preview stays black. The pause→prepare cycle forces the native view
                // to re-assert its camera on every (re-)enable (SDC-32484, iOS).
                await getBaseView().onHostPause();
                await getBaseView().prepareScanning();
            }
            else {
                if (m.isEnabled !== enabled)
                    m.isEnabled = enabled;
                await getBaseView().onHostPause();
                setCameraActive(false);
            }
        },
        attach: () => new Promise(resolve => {
            const node = viewNode;
            if (!node)
                return resolve();
            // Gate creation on layout (the view being committed to the native tree)
            // rather than InteractionManager.runAfterInteractions, whose queue can
            // be starved by a blocked JS interaction. See SDC-32208.
            void viewHandle.whenReady().then(async () => {
                const id = findNodeHandle(node);
                if (id == null)
                    return resolve();
                await getBaseView().createNativeView(id);
                resolve();
            });
        }),
        detach: async () => {
            const view = baseViewRef.current;
            baseViewRef.current = null;
            setBaseView(null);
            prevPassThroughRef.current = null;
            const disposed = Promise.resolve(view?.dispose());
            // Hand the claim release over to the dispose: on iOS the async native
            // teardown nulls/steals the context frame source *after* unmount, so
            // releasing before `dispose()` resolves races it and leaves the
            // provider camera off (SDC-32484 black screen on back-navigation). The
            // coordinator parks `disposed` as a barrier and waits for it before
            // re-asserting the provider camera.
            cameraClaim.release(disposed);
            await disposed;
        },
        settingsDeps: [resolveSettings],
    });
    const getBaseView = useCallback(() => {
        if (baseViewRef.current)
            return baseViewRef.current;
        baseViewRef.current = BaseSparkScanView.withProps({
            context,
            sparkScan: getSparkScan(),
            sparkScanViewSettings: sparkScanViewSettings ?? new SparkScanViewSettings(),
            previewSizeControlVisible: props.previewSizeControlVisible,
            scanningBehaviorButtonVisible: props.scanningBehaviorButtonVisible,
            barcodeCountButtonVisible: props.barcodeCountButtonVisible,
            barcodeFindButtonVisible: props.barcodeFindButtonVisible,
            targetModeButtonVisible: props.targetModeButtonVisible,
            selectionModeButtonVisible: props.selectionModeButtonVisible,
            labelCaptureButtonVisible: props.labelCaptureButtonVisible,
            cameraSwitchButtonVisible: props.cameraSwitchButtonVisible,
            torchControlVisible: props.torchControlVisible,
            zoomSwitchControlVisible: props.zoomSwitchControlVisible,
            previewCloseControlVisible: props.previewCloseControlVisible,
            triggerButtonVisible: props.triggerButtonVisible,
            toolbarBackgroundColor: props.toolbarBackgroundColor,
            toolbarIconActiveTintColor: props.toolbarIconActiveTintColor,
            toolbarIconInactiveTintColor: props.toolbarIconInactiveTintColor,
            triggerButtonAnimationColor: props.triggerButtonAnimationColor,
            triggerButtonExpandedColor: props.triggerButtonExpandedColor,
            triggerButtonCollapsedColor: props.triggerButtonCollapsedColor,
            triggerButtonTintColor: props.triggerButtonTintColor,
            triggerButtonImage: props.triggerButtonImage,
            shouldHandleAndroidLifecycleAutomatically: props.shouldHandleAndroidLifecycleAutomatically,
        });
        setBaseView(baseViewRef.current);
        return baseViewRef.current;
        // Lazy: subsequent updates go through `updateWithProps` in the diffing
        // effect. Listing every prop here would defeat lazy construction.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context, getSparkScan, sparkScanViewSettings]);
    // ─── Pass-through prop diffing ───────────────────────────────────────────
    useEffect(() => {
        const next = {
            context,
            sparkScan: getSparkScan(),
            // updateWithProps ignores this; read from the view rather than build a default.
            sparkScanViewSettings: sparkScanViewSettings ?? getBaseView().viewSettings,
        };
        const writableNext = next;
        const propsByKey = props;
        for (const key of PASS_THROUGH_KEYS$1)
            writableNext[key] = propsByKey[key];
        const prev = prevPassThroughRef.current ?? next;
        getBaseView().updateWithProps(prev, next);
        prevPassThroughRef.current = next;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        sparkScanViewSettings,
        props.previewSizeControlVisible,
        props.scanningBehaviorButtonVisible,
        props.barcodeCountButtonVisible,
        props.barcodeFindButtonVisible,
        props.targetModeButtonVisible,
        props.selectionModeButtonVisible,
        props.labelCaptureButtonVisible,
        props.cameraSwitchButtonVisible,
        props.torchControlVisible,
        props.zoomSwitchControlVisible,
        props.previewCloseControlVisible,
        props.triggerButtonVisible,
        props.toolbarBackgroundColor,
        props.toolbarIconActiveTintColor,
        props.toolbarIconInactiveTintColor,
        props.triggerButtonAnimationColor,
        props.triggerButtonExpandedColor,
        props.triggerButtonCollapsedColor,
        props.triggerButtonTintColor,
        props.triggerButtonImage,
        props.shouldHandleAndroidLifecycleAutomatically,
    ]);
    // ─── Listener registration ───────────────────────────────────────────────
    _internal.useModeListener({
        mode: getSparkScan(),
        listenerFns: {
            didScan: didScan
                ? async (_s, session, getFD) => {
                    const barcodes = session.newlyRecognizedBarcode ? [session.newlyRecognizedBarcode] : [];
                    await didScan(barcodes, session, getFD);
                }
                : undefined,
            didUpdateSession: didUpdateSession
                ? async (_s, session, getFD) => {
                    await didUpdateSession(session, getFD);
                }
                : undefined,
        },
        addListener: (m, l) => m.addListener(l),
        removeListener: (m, l) => m.removeListener(l),
    });
    // ─── Imperative handle ───────────────────────────────────────────────────
    const enable = enableMode;
    const disable = disableMode;
    const handle = useMemo(() => ({
        showToast: async (text) => {
            await getBaseView().showToast(text);
        },
        startScanning: async () => {
            await getBaseView().startScanning();
        },
        pauseScanning: async () => {
            await getBaseView().pauseScanning();
        },
        stopScanning: async () => {
            await getBaseView().stopScanning();
        },
        show: async () => {
            await getBaseView().show();
        },
        hide: async () => {
            await getBaseView().hide();
        },
        enable,
        disable,
    }), [getBaseView, enable, disable]);
    useImperativeHandle(ref, () => handle, [handle]);
    // ─── UI listener (prop-driven) ───────────────────────────────────────────
    // `useModeListener` handles the latest-callbacks-via-ref dance, and the
    // setter pattern (single-slot `uiListener`) is adapted via the add/remove
    // overrides below. The listener-fn shapes translate between the shared
    // listener interface (which takes `BaseSparkScanView`) and the AIO surface
    // (which exposes only `SparkScanViewHandle`).
    _internal.useModeListener({
        mode: baseView,
        listenerFns: {
            didChangeViewState: uiListener?.didChangeViewState
                ? (newState) => uiListener.didChangeViewState?.(newState)
                : undefined,
            didTapBarcodeCountButton: uiListener?.didTapBarcodeCountButton
                ? () => uiListener.didTapBarcodeCountButton?.(handle)
                : undefined,
            didTapBarcodeFindButton: uiListener?.didTapBarcodeFindButton
                ? () => uiListener.didTapBarcodeFindButton?.(handle)
                : undefined,
            didTapLabelCaptureButton: uiListener?.didTapLabelCaptureButton
                ? () => uiListener.didTapLabelCaptureButton?.(handle)
                : undefined,
            didChangeScanningMode: uiListener?.didChangeScanningMode
                ? (newMode) => uiListener.didChangeScanningMode?.(newMode)
                : undefined,
        },
        addListener: (v, l) => {
            v.uiListener = l;
        },
        removeListener: v => {
            v.uiListener = null;
        },
    });
    // `feedbackDelegate` is a listener (its setter subscribes the controller to the
    // native feedbackForBarcode/feedbackForScannedItem events), so register it
    // through `useModeListener` like `uiListener` rather than via prop diffing. The
    // computed `feedbackDelegate` above carries the `feedback` shorthand too.
    _internal.useModeListener({
        mode: baseView,
        listenerFns: {
            feedbackForBarcode: feedbackDelegate?.feedbackForBarcode
                ? (barcode) => feedbackDelegate.feedbackForBarcode(barcode)
                : undefined,
            feedbackForScannedItem: feedbackDelegate?.feedbackForScannedItem
                ? (item) => feedbackDelegate.feedbackForScannedItem(item)
                : undefined,
        },
        addListener: (v, l) => {
            v.feedbackDelegate = l;
        },
        removeListener: v => {
            v.feedbackDelegate = null;
        },
    });
    // ─── Lifecycle: focus/blur + foreground/background + the `disabled` veto ──
    _internal.useLifecycleHook({
        navigation,
        disabled: props.disabled,
        appStateHandlingDisabled: props.appStateHandlingDisabled,
        onEnable: enable,
        onDisable: disable,
    });
    return (React.createElement(RNTSparkScanView, { style: style ?? { flex: 1 }, ref: viewHandle.ref, onLayout: viewHandle.onLayout }, children));
});

function buildSettings$2(props) {
    const { barcodeCountSettings, symbologies } = props;
    if (barcodeCountSettings) {
        if (symbologies !== undefined) {
            console.warn('BarcodeCountView: `barcodeCountSettings` takes precedence; `symbologies` is ignored.');
        }
        return barcodeCountSettings;
    }
    const s = new BarcodeCountSettings();
    if (symbologies !== undefined)
        s.enableSymbologies(symbologies);
    return s;
}
const PASS_THROUGH_KEYS = [
    'viewStyle',
    'shouldDisableModeOnExitButtonTapped',
    'shouldShowUserGuidanceView',
    'shouldShowListButton',
    'shouldShowExitButton',
    'shouldShowShutterButton',
    'shouldShowHints',
    'shouldShowClearHighlightsButton',
    'shouldShowSingleScanButton',
    'shouldShowFloatingShutterButton',
    'shouldShowToolbar',
    'shouldShowStatusModeButton',
    'shouldShowScanAreaGuides',
    'recognizedBrush',
    'notInListBrush',
    'acceptedBrush',
    'rejectedBrush',
    'filterSettings',
    'listButtonAccessibilityHint',
    'listButtonAccessibilityLabel',
    'listButtonContentDescription',
    'exitButtonAccessibilityHint',
    'exitButtonAccessibilityLabel',
    'exitButtonContentDescription',
    'shutterButtonAccessibilityHint',
    'shutterButtonAccessibilityLabel',
    'shutterButtonContentDescription',
    'floatingShutterButtonAccessibilityHint',
    'floatingShutterButtonAccessibilityLabel',
    'floatingShutterButtonContentDescription',
    'clearHighlightsButtonAccessibilityHint',
    'clearHighlightsButtonAccessibilityLabel',
    'clearHighlightsButtonContentDescription',
    'singleScanButtonAccessibilityHint',
    'singleScanButtonAccessibilityLabel',
    'singleScanButtonContentDescription',
    'statusModeButtonAccessibilityHint',
    'statusModeButtonAccessibilityLabel',
    'statusModeButtonContentDescription',
    'clearHighlightsButtonText',
    'exitButtonText',
    'textForTapShutterToScanHint',
    'textForScanningHint',
    'textForMoveCloserAndRescanHint',
    'textForMoveFurtherAndRescanHint',
    'textForBarcodesNotInListDetectedHint',
    'textForScreenCleanedUpHint',
    'textForClusteringGestureHint',
    'shouldShowListProgressBar',
    'shouldShowTorchControl',
    'torchControlPosition',
    'tapToUncountEnabled',
    'textForTapToUncountHint',
    'barcodeNotInListActionSettings',
    'hardwareTriggerEnabled',
    'mappingFlowSettings',
];
const BarcodeCountView = forwardRef(function BarcodeCountView(props, ref) {
    const { didScan, didUpdateSession, uiListener, listener, style, children, symbologies } = props;
    const barcodeCountSettings = _internal.useStableProp(props.barcodeCountSettings);
    // Stabilize the array shorthand too — an inline `symbologies={[…]}` is a new
    // identity every render and would churn `resolveSettings` → re-apply settings
    // natively on every unrelated render. (Finding F1; matches the other views.)
    const stableSymbologies = _internal.useStableProp(symbologies);
    const captureList = _internal.useStableProp(props.captureList);
    const additionalBarcodes = _internal.useStableProp(props.additionalBarcodes);
    const feedback = _internal.useStableProp(props.feedback);
    const toolbarSettings = _internal.useStableProp(props.toolbarSettings);
    const context = _internal.useDataCaptureContextInternal();
    const viewHandle = _internal.useViewHandle();
    const viewNode = viewHandle.current;
    // On RN, BarcodeCountView renders the PROVIDER camera: device-verified
    // (SDC-32484) — with an exclusive claim (provider handed off) the preview
    // goes black and the native trace shows no camera activity at all, while
    // the previous shared-demand wiring worked on every run. The native SDK's
    // BarcodeCountView can manage its own camera standalone, but the RN
    // integration does not feed it that way — same trap as BarcodeAr (H5).
    const [cameraActive, setCameraActive] = useState(false);
    const cameraClaim = _internal.useCameraClaim({
        mode: 'shared',
        active: cameraActive,
        nativeViewRef: viewHandle.mutableRef,
    });
    const baseViewRef = useRef(null);
    // Reactive snapshot so listener hooks can register once the base view exists
    // and re-register after a detach/re-attach cycle.
    const [baseView, setBaseView] = useState(null);
    const prevPassThroughRef = useRef(null);
    const resolveSettings = useCallback(() => buildSettings$2({ barcodeCountSettings, symbologies: stableSymbologies }), [barcodeCountSettings, stableSymbologies]);
    const buildPassThrough = useCallback((mode) => {
        const next = {
            context,
            barcodeCount: mode,
            viewStyle: props.viewStyle ?? BarcodeCountViewStyle.Icon,
        };
        const writableNext = next;
        const propsByKey = props;
        for (const key of PASS_THROUGH_KEYS) {
            if (propsByKey[key] !== undefined)
                writableNext[key] = propsByKey[key];
        }
        return next;
    }, 
    // Depend on the individual pass-through values rather than the whole
    // `props` object, so this callback (and the diffing effect that consumes
    // it) only re-runs when a forwarded prop actually changes — not on every
    // unrelated render. Behavior is unchanged: the same values are read, and
    // `updateWithProps` still diffs prev/next.
    // `viewStyle` is already part of `PASS_THROUGH_KEYS`, so the spread covers it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [context, ...PASS_THROUGH_KEYS.map(k => props[k])]);
    const { getMode: getBarcodeCount, attach: attachMode, detach: detachMode, } = _internal.useMode({
        disabled: props.disabled,
        canAttach: viewNode != null,
        createMode: () => new BarcodeCount(resolveSettings()),
        applySettings: m => m.applySettings(resolveSettings()),
        setEnabled: (m, enabled) => {
            if (m.isEnabled !== enabled)
                m.isEnabled = enabled;
        },
        attach: mode => new Promise(resolve => {
            const node = viewNode;
            if (!node)
                return resolve();
            // Gate creation on layout (the view being committed to the native
            // tree) rather than InteractionManager.runAfterInteractions, whose
            // queue can be starved by a blocked JS interaction. See SDC-32208.
            void viewHandle.whenReady().then(async () => {
                const id = findNodeHandle(node);
                if (id == null)
                    return resolve();
                // Build the base view but *don't* publish it reactively yet —
                // listener registration on the controller side silently no-ops
                // while `isViewCreated == false`, and any `useModeListener`
                // effect that runs during the await would be lost. Publish only
                // after the native view is created so listeners always register
                // against a ready controller.
                const created = getBaseView(mode);
                await created.createNativeView(id);
                setBaseView(created);
                resolve();
            });
        }),
        detach: async () => {
            if (baseViewRef.current)
                await baseViewRef.current.dispose();
            baseViewRef.current = null;
            setBaseView(null);
            prevPassThroughRef.current = null;
        },
        settingsDeps: [resolveSettings],
    });
    // Enable/disable scanning, shared by the navigation prop and the imperative
    // `enable()`/`disable()` handle. Focus *attaches* (adds the mode + builds the
    // native view) and blur *detaches* (removes it): the native context is
    // single-active-mode and `addMode` of a non-coexisting mode silently evicts
    // this one, so re-adding on focus keeps it the active mode and re-registers
    // its listener. Just toggling `isEnabled` is not enough.
    const enable = useCallback(async () => {
        await attachMode();
        setCameraActive(true);
        await cameraClaim.granted();
    }, [attachMode, cameraClaim]);
    const disable = useCallback(async () => {
        setCameraActive(false);
        await detachMode();
    }, [detachMode]);
    // Lifecycle: focus/blur + app foreground/background + the `disabled` veto.
    _internal.useLifecycleHook({
        navigation: props.navigation,
        disabled: props.disabled,
        appStateHandlingDisabled: props.appStateHandlingDisabled,
        onEnable: enable,
        onDisable: disable,
    });
    const getBaseView = useCallback((mode) => {
        if (baseViewRef.current)
            return baseViewRef.current;
        const props = buildPassThrough(mode ?? getBarcodeCount());
        baseViewRef.current = BaseBarcodeCountView.withProps(props);
        prevPassThroughRef.current = props;
        // Reactive publication is deferred until the native view is created —
        // see `attach`. Callers that need the imperative handle access via the
        // ref are unaffected.
        return baseViewRef.current;
    }, [buildPassThrough, getBarcodeCount]);
    // ─── Pass-through prop diffing ───────────────────────────────────────────
    useEffect(() => {
        if (!baseViewRef.current)
            return;
        const next = buildPassThrough(getBarcodeCount());
        const prev = prevPassThroughRef.current ?? next;
        baseViewRef.current.updateWithProps(prev, next);
        prevPassThroughRef.current = next;
    }, [buildPassThrough, getBarcodeCount]);
    // ─── Capture list ────────────────────────────────────────────────────────
    useEffect(() => {
        if (!captureList)
            return;
        getBarcodeCount().setBarcodeCountCaptureList(captureList);
    }, [captureList, getBarcodeCount]);
    // ─── Additional barcodes ─────────────────────────────────────────────────
    useEffect(() => {
        void getBarcodeCount().setAdditionalBarcodes(additionalBarcodes ?? []);
    }, [additionalBarcodes, getBarcodeCount]);
    // ─── Feedback ────────────────────────────────────────────────────────────
    useEffect(() => {
        if (feedback === undefined)
            return;
        getBarcodeCount().feedback = feedback;
    }, [feedback, getBarcodeCount]);
    // ─── Toolbar settings ────────────────────────────────────────────────────
    useEffect(() => {
        if (toolbarSettings === undefined)
            return;
        baseView?.setToolbarSettings(toolbarSettings);
    }, [toolbarSettings, baseView]);
    useEffect(() => {
        if (!baseView)
            return;
        if (props.shouldShowStatusIconsOnScan === true && !props.statusProvider) {
            console.warn('BarcodeCountView: `statusProvider` is required when `shouldShowStatusIconsOnScan` is `true`; status icons will not be shown.');
            return;
        }
        baseView.shouldShowStatusIconsOnScan = props.shouldShowStatusIconsOnScan === true;
        if (props.statusProvider) {
            baseView.setStatusProvider(props.statusProvider);
        }
    }, [props.shouldShowStatusIconsOnScan, props.statusProvider, baseView]);
    // ─── Mode listener (didScan / didUpdateSession) ────────────────────────────
    _internal.useModeListener({
        mode: getBarcodeCount(),
        listenerFns: {
            didScan: didScan
                ? async (_m, session, getFD) => {
                    await didScan(session.recognizedBarcodes ?? [], session, getFD);
                }
                : undefined,
            onSessionUpdated: didUpdateSession
                ? async (_m, session, getFD) => {
                    await didUpdateSession(session, getFD);
                }
                : undefined,
        },
        addListener: (m, l) => m.addListener(l),
        removeListener: (m, l) => m.removeListener(l),
    });
    // ─── UI listener (single-slot setter) ────────────────────────────────────
    // The AIO listener shape drops the `view` argument that the shared
    // `BarcodeCountViewUiListener` exposes; we adapt it here.
    _internal.useModeListener({
        mode: baseView,
        listenerFns: {
            didTapListButton: uiListener?.didTapListButton ? () => uiListener.didTapListButton?.() : undefined,
            didTapExitButton: uiListener?.didTapExitButton ? () => uiListener.didTapExitButton?.() : undefined,
            didTapSingleScanButton: uiListener?.didTapSingleScanButton
                ? () => uiListener.didTapSingleScanButton?.()
                : undefined,
        },
        addListener: (v, l) => {
            v.uiListener = l;
        },
        removeListener: v => {
            v.uiListener = null;
        },
    });
    // ─── View listener (single-slot setter) ──────────────────────────────────
    // Same shape adaptation as the UI listener: drop the `view` argument from
    // every callback the consumer provides.
    _internal.useModeListener({
        mode: baseView,
        listenerFns: {
            brushForRecognizedBarcode: listener?.brushForRecognizedBarcode
                ? (_v, tb) => listener.brushForRecognizedBarcode(tb)
                : undefined,
            brushForRecognizedBarcodeNotInList: listener?.brushForRecognizedBarcodeNotInList
                ? (_v, tb) => listener.brushForRecognizedBarcodeNotInList(tb)
                : undefined,
            brushForAcceptedBarcode: listener?.brushForAcceptedBarcode
                ? (_v, tb) => listener.brushForAcceptedBarcode(tb)
                : undefined,
            brushForRejectedBarcode: listener?.brushForRejectedBarcode
                ? (_v, tb) => listener.brushForRejectedBarcode(tb)
                : undefined,
            didTapRecognizedBarcode: listener?.didTapRecognizedBarcode
                ? (_v, tb) => listener.didTapRecognizedBarcode(tb)
                : undefined,
            didTapFilteredBarcode: listener?.didTapFilteredBarcode
                ? (_v, tb) => listener.didTapFilteredBarcode(tb)
                : undefined,
            didTapRecognizedBarcodeNotInList: listener?.didTapRecognizedBarcodeNotInList
                ? (_v, tb) => listener.didTapRecognizedBarcodeNotInList(tb)
                : undefined,
            didTapAcceptedBarcode: listener?.didTapAcceptedBarcode
                ? (_v, tb) => listener.didTapAcceptedBarcode(tb)
                : undefined,
            didTapRejectedBarcode: listener?.didTapRejectedBarcode
                ? (_v, tb) => listener.didTapRejectedBarcode(tb)
                : undefined,
            didTapCluster: listener?.didTapCluster ? (_v, cluster) => listener.didTapCluster(cluster) : undefined,
            didCompleteCaptureList: listener?.didCompleteCaptureList ? () => listener.didCompleteCaptureList() : undefined,
        },
        addListener: (v, l) => {
            v.listener = l;
        },
        removeListener: v => {
            v.listener = null;
        },
    });
    // ─── Imperative handle ───────────────────────────────────────────────────
    // Methods read `baseViewRef.current` directly — they must not lazily
    // instantiate the mode + base view when the consumer has set
    // `state='detached'` (that would defeat the opt-out). Callers should
    // either await the next render after flipping `state='enabled'` or hold
    // off on imperative calls until the view is attached.
    const handle = useMemo(() => {
        const ifAttached = (label, fn, fallback) => {
            const v = baseViewRef.current;
            if (!v) {
                console.warn(`BarcodeCountView.${label}: ignored, view is not attached`);
                return fallback;
            }
            return fn(v);
        };
        const noop = Promise.resolve();
        return {
            clearHighlights: () => ifAttached('clearHighlights', v => v.clearHighlights(), noop),
            setToolbarSettings: settings => ifAttached('setToolbarSettings', v => v.setToolbarSettings(settings), undefined),
            setStatusProvider: provider => ifAttached('setStatusProvider', v => v.setStatusProvider(provider), undefined),
            setBrushForRecognizedBarcode: (t, b) => ifAttached('setBrushForRecognizedBarcode', v => v.setBrushForRecognizedBarcode(t, b), noop),
            setBrushForRecognizedBarcodeNotInList: (t, b) => ifAttached('setBrushForRecognizedBarcodeNotInList', v => v.setBrushForRecognizedBarcodeNotInList(t, b), noop),
            setBrushForAcceptedBarcode: (t, b) => ifAttached('setBrushForAcceptedBarcode', v => v.setBrushForAcceptedBarcode(t, b), noop),
            setBrushForRejectedBarcode: (t, b) => ifAttached('setBrushForRejectedBarcode', v => v.setBrushForRejectedBarcode(t, b), noop),
            enableHardwareTrigger: code => ifAttached('enableHardwareTrigger', v => v.enableHardwareTrigger(code), noop),
            enable,
            disable,
        };
    }, [enable, disable]);
    useImperativeHandle(ref, () => handle, [handle]);
    return (React.createElement(RNTBarcodeCountView, { style: style ?? { flex: 1 }, ref: viewHandle.ref, onLayout: viewHandle.onLayout }, children));
});

function buildSettings$1(barcodeBatchSettings, symbologies) {
    if (barcodeBatchSettings) {
        if (symbologies !== undefined) {
            console.warn('BarcodeBatchView: `barcodeBatchSettings` takes precedence; `symbologies` is ignored.');
        }
        return barcodeBatchSettings;
    }
    const s = new BarcodeBatchSettings();
    if (symbologies !== undefined)
        s.enableSymbologies(symbologies);
    return s;
}
const BarcodeBatchView = forwardRef(function BarcodeBatchView(props, ref) {
    // SDK class instances are stabilized so consumers can pass inline
    // `new Brush(...)` etc. without memoizing. Everything else is read off
    // `props` directly inside the hooks below.
    const basicOverlayDefaultBrush = _internal.useStableProp(props.basicOverlay?.defaultBrush);
    const basicOverlayStyle = _internal.useStableProp(props.basicOverlay?.style);
    const barcodeBatchSettings = _internal.useStableProp(props.barcodeBatchSettings);
    const symbologies = _internal.useStableProp(props.symbologies);
    const context = _internal.useDataCaptureContextInternal();
    // Shared claim: coexists with any other provider-camera view, coalesced
    // by the coordinator into a single ON/OFF as views come and go.
    const [cameraActive, setCameraActive] = useState(false);
    const viewHandle = _internal.useViewHandle();
    const cameraClaim = _internal.useCameraClaim({
        mode: 'shared',
        active: cameraActive,
        nativeViewRef: viewHandle.mutableRef,
    });
    const viewRef = viewHandle.mutableRef;
    const viewId = viewHandle.id;
    const resolveSettings = useCallback(() => buildSettings$1(barcodeBatchSettings, symbologies), [barcodeBatchSettings, symbologies]);
    const basicOverlay = _internal.useOverlay({
        view: viewRef,
        enabled: props.basicOverlay?.enabled !== false,
        factory: () => new BarcodeBatchBasicOverlay(getMode(), basicOverlayStyle ?? BarcodeBatchBasicOverlayStyle.Frame),
        factoryDeps: [basicOverlayStyle],
        update: overlay => {
            if (basicOverlayDefaultBrush)
                overlay.brush = basicOverlayDefaultBrush;
            if (props.basicOverlay?.shouldShowScanAreaGuides !== undefined) {
                overlay.shouldShowScanAreaGuides = props.basicOverlay.shouldShowScanAreaGuides;
            }
        },
        updateDeps: [basicOverlayDefaultBrush, props.basicOverlay?.shouldShowScanAreaGuides],
    });
    const advancedOverlay = _internal.useOverlay({
        view: viewRef,
        // Advanced overlay is off by default; opt in by passing the `advancedOverlay` prop.
        enabled: props.advancedOverlay !== undefined && props.advancedOverlay.enabled !== false,
        factory: () => new BarcodeBatchAdvancedOverlay(getMode()),
        factoryDeps: [],
        update: overlay => {
            if (props.advancedOverlay?.shouldShowScanAreaGuides !== undefined) {
                overlay.shouldShowScanAreaGuides = props.advancedOverlay.shouldShowScanAreaGuides;
            }
        },
        updateDeps: [props.advancedOverlay?.shouldShowScanAreaGuides],
    });
    // ─── Mode ─────────────────────────────────────────────────────────────────
    const { getMode, attach: attachMode, detach: detachMode, } = _internal.useMode({
        disabled: props.disabled,
        createMode: () => {
            const mode = new BarcodeBatch(resolveSettings());
            // `parentId` links the mode to its DataCaptureView for native serialization.
            mode['parentId'] = viewId;
            return mode;
        },
        applySettings: mode => mode.applySettings(resolveSettings()),
        setEnabled: (mode, enabled) => {
            if (mode.isEnabled !== enabled)
                mode.isEnabled = enabled;
        },
        attach: mode => context.addMode(mode),
        // Quiesce the shared camera while the mode is removed — removing it with
        // frames still streaming aborts natively in the engine.
        detach: mode => context.removeMode(mode),
        attachables: [basicOverlay, advancedOverlay],
        settingsDeps: [resolveSettings],
    });
    // Enable/disable scanning, shared by the navigation prop and the imperative
    // `enable()`/`disable()` handle. Focus *attaches* (adds the mode to the shared
    // context) and blur *detaches* (removes it): the native context is
    // single-active-mode and `addMode` of a non-coexisting mode silently evicts
    // this one, so re-adding on focus keeps it the active mode and re-registers
    // its listener. Just toggling `isEnabled` is not enough.
    const enable = useCallback(async () => {
        await attachMode();
        setCameraActive(true);
        await cameraClaim.granted();
    }, [attachMode, cameraClaim]);
    const disable = useCallback(async () => {
        setCameraActive(false);
        await detachMode();
    }, [detachMode]);
    // Lifecycle: focus/blur + app foreground/background + the `disabled` veto.
    _internal.useLifecycleHook({
        navigation: props.navigation,
        disabled: props.disabled,
        appStateHandlingDisabled: props.appStateHandlingDisabled,
        onEnable: enable,
        onDisable: disable,
    });
    _internal.useModeListener({
        mode: getMode(),
        listenerFns: {
            didUpdateSession: props.didScan || props.didUpdateSession
                ? async (_mode, session, getFD) => {
                    if (props.didUpdateSession)
                        await props.didUpdateSession(session, getFD);
                    if (props.didScan && session.addedTrackedBarcodes?.length) {
                        await props.didScan(session.addedTrackedBarcodes, session, getFD);
                    }
                }
                : undefined,
        },
        addListener: (m, l) => {
            void m.addListener(l);
        },
        removeListener: (m, l) => {
            void m.removeListener(l);
        },
    });
    _internal.useModeListener({
        mode: basicOverlay.overlay,
        listenerFns: {
            brushForTrackedBarcode: props.basicOverlay?.brushForTrackedBarcode
                ? (_overlay, tb) => props.basicOverlay.brushForTrackedBarcode(tb)
                : undefined,
            didTapTrackedBarcode: props.basicOverlay?.didTapTrackedBarcode
                ? (_overlay, tb) => props.basicOverlay.didTapTrackedBarcode(tb)
                : undefined,
        },
        addListener: (overlay, l) => {
            overlay.listener = l;
        },
        removeListener: overlay => {
            overlay.listener = null;
        },
    });
    _internal.useModeListener({
        mode: advancedOverlay.overlay,
        listenerFns: {
            viewForTrackedBarcode: props.advancedOverlay?.viewForTrackedBarcode
                ? (_overlay, tb) => props.advancedOverlay.viewForTrackedBarcode(tb)
                : undefined,
            didTapViewForTrackedBarcode: props.advancedOverlay?.didTapViewForTrackedBarcode
                ? (_overlay, tb) => props.advancedOverlay.didTapViewForTrackedBarcode(tb)
                : undefined,
            anchorForTrackedBarcode: props.advancedOverlay?.anchorForTrackedBarcode
                ? (_overlay, tb) => props.advancedOverlay.anchorForTrackedBarcode(tb)
                : undefined,
            offsetForTrackedBarcode: props.advancedOverlay?.offsetForTrackedBarcode
                ? (_overlay, tb) => props.advancedOverlay.offsetForTrackedBarcode(tb)
                : undefined,
        },
        addListener: (overlay, l) => {
            overlay.listener = l;
        },
        removeListener: overlay => {
            overlay.listener = null;
        },
    });
    const basicOverlayEnabled = props.basicOverlay?.enabled !== false;
    const advancedOverlayEnabled = props.advancedOverlay !== undefined && props.advancedOverlay.enabled !== false;
    useImperativeHandle(ref, () => ({
        reset: () => getMode().reset(),
        // Call through `getOverlay()?.` so the handle is safe before the overlay
        // has attached (overlay is null until then) and so `this` stays bound to
        // the overlay instance. Mirrors LabelCaptureView. (Finding F4.)
        basicOverlay: basicOverlayEnabled
            ? {
                setBrushForTrackedBarcode: (brush, tb) => basicOverlay.getOverlay()?.setBrushForTrackedBarcode(brush, tb) ?? Promise.resolve(),
                clearTrackedBarcodeBrushes: () => basicOverlay.getOverlay()?.clearTrackedBarcodeBrushes() ?? Promise.resolve(),
            }
            : undefined,
        advancedOverlay: advancedOverlayEnabled
            ? {
                setViewForTrackedBarcode: (view, tb) => advancedOverlay.getOverlay()?.setViewForTrackedBarcode(view, tb) ?? Promise.resolve(),
                setAnchorForTrackedBarcode: (anchor, tb) => advancedOverlay.getOverlay()?.setAnchorForTrackedBarcode(anchor, tb) ?? Promise.resolve(),
                setOffsetForTrackedBarcode: (offset, tb) => advancedOverlay.getOverlay()?.setOffsetForTrackedBarcode(offset, tb) ?? Promise.resolve(),
                clearTrackedBarcodeViews: () => advancedOverlay.getOverlay()?.clearTrackedBarcodeViews() ?? Promise.resolve(),
                updateSizeOfTrackedBarcodeView: (id, w, h) => advancedOverlay.getOverlay()?.updateSizeOfTrackedBarcodeView(id, w, h) ?? Promise.resolve(),
            }
            : undefined,
        enable,
        disable,
    }), [getMode, basicOverlay, advancedOverlay, basicOverlayEnabled, advancedOverlayEnabled, enable, disable]);
    return (React.createElement(DataCaptureView, { context: context, parentId: viewId, style: props.style ?? { flex: 1 }, ref: viewHandle.ref, onNativeDispose: teardown => cameraClaim.release(teardown) }));
});

const BarcodeArCustomAugmentationOverlay = forwardRef(function BarcodeArCustomAugmentationOverlay({ baseView, highlightProvider, annotationProvider }, ref) {
    const customHighlightCacheRef = useRef({});
    const customAnnotationCacheRef = useRef({});
    const [shownHighlights, setShownHighlights] = useState({});
    const [shownAnnotations, setShownAnnotations] = useState({});
    const wrappedHighlightProvider = useMemo(() => {
        if (!highlightProvider)
            return null;
        return {
            highlightForBarcode: async (barcode) => {
                const highlight = await highlightProvider.highlightForBarcode(barcode);
                if (highlight instanceof BarcodeArCustomHighlight) {
                    customHighlightCacheRef.current[barcode['_barcodeId']] = highlight;
                }
                return highlight;
            },
        };
    }, [highlightProvider]);
    const wrappedAnnotationProvider = useMemo(() => {
        if (!annotationProvider)
            return null;
        return {
            annotationForBarcode: async (barcode) => {
                const annotation = await annotationProvider.annotationForBarcode(barcode);
                if (annotation instanceof BarcodeArCustomAnnotation) {
                    customAnnotationCacheRef.current[barcode['_barcodeId']] = annotation;
                }
                return annotation;
            },
        };
    }, [annotationProvider]);
    useEffect(() => {
        if (!baseView)
            return;
        baseView.highlightProvider = wrappedHighlightProvider;
    }, [baseView, wrappedHighlightProvider]);
    useEffect(() => {
        if (!baseView)
            return;
        baseView.annotationProvider = wrappedAnnotationProvider;
    }, [baseView, wrappedAnnotationProvider]);
    useEffect(() => {
        if (!baseView)
            return;
        baseView.subscribeForCustomHighlightEvents();
        baseView.subscribeForCustomAnnotationEvents();
        const unregisterHighlightCreate = baseView.registerCustomHighlightCreateEvent((barcode, barcodeId) => {
            setShownHighlights(prev => (prev[barcodeId] ? prev : { ...prev, [barcodeId]: barcode }));
        });
        // Note: don't evict `customHighlightCacheRef` on dispose. Native dedupes
        // highlights by barcodeId and won't re-invoke the provider when the same
        // barcode is rediscovered, so dropping the cache here would make the next
        // create render to null. The cache is cleared in the effect teardown
        // (view detached) below.
        const unregisterHighlightDispose = baseView.registerCustomHighlightDisposeEvent(barcodeId => {
            setShownHighlights(prev => {
                if (!(barcodeId in prev))
                    return prev;
                const { [barcodeId]: _unused, ...rest } = prev;
                return rest;
            });
        });
        const unregisterAnnotationCreate = baseView.registerCustomAnnotationCreateEvent((barcode, barcodeId) => {
            setShownAnnotations(prev => (prev[barcodeId] ? prev : { ...prev, [barcodeId]: barcode }));
        });
        const unregisterAnnotationDispose = baseView.registerCustomAnnotationDisposeEvent(barcodeId => {
            setShownAnnotations(prev => {
                if (!(barcodeId in prev))
                    return prev;
                const { [barcodeId]: _unused, ...rest } = prev;
                return rest;
            });
        });
        return () => {
            unregisterHighlightCreate();
            unregisterHighlightDispose();
            unregisterAnnotationCreate();
            unregisterAnnotationDispose();
            baseView.unsubscribeFromCustomHighlightEvents();
            baseView.unsubscribeFromCustomAnnotationEvents();
            setShownHighlights({});
            setShownAnnotations({});
            customHighlightCacheRef.current = {};
            customAnnotationCacheRef.current = {};
        };
    }, [baseView]);
    return (React.createElement(View, { ref: ref, style: { position: 'absolute', overflow: 'hidden', pointerEvents: 'box-none' } },
        Object.entries(shownAnnotations).map(([barcodeId, barcode]) => {
            const annotation = customAnnotationCacheRef.current[barcodeId];
            if (!annotation || !baseView)
                return null;
            return (React.createElement(BarcodeArCustomAnnotationContainer, { key: 'annotation:' + barcodeId, barcodeId: barcodeId, barcode: barcode, customAnnotation: annotation, registerCustomAnnotationUpdateEvent: baseView.registerCustomAnnotationUpdateEvent, registerCustomAnnotationShowEvent: baseView.registerCustomAnnotationShowEvent, registerCustomAnnotationHideEvent: baseView.registerCustomAnnotationHideEvent }));
        }),
        Object.entries(shownHighlights).map(([barcodeId, barcode]) => {
            const highlight = customHighlightCacheRef.current[barcodeId];
            if (!highlight || !baseView)
                return null;
            return (React.createElement(BarcodeArCustomHighlightContainer, { key: 'highlight:' + barcodeId, barcodeId: barcodeId, barcode: barcode, customHighlight: highlight, onClick: () => {
                    void baseView.onCustomHighlightClicked(barcodeId);
                }, registerCustomHighlightUpdateEvent: baseView.registerCustomHighlightUpdateEvent, registerCustomHighlightShowEvent: baseView.registerCustomHighlightShowEvent, registerCustomHighlightHideEvent: baseView.registerCustomHighlightHideEvent }));
        })));
});

// Pass-through props that map 1:1 to `BaseBarcodeArView` setters. The
// `satisfies` clause guarantees every entry is both a prop name *and* a
// matching field on the base view — a rename on either side is a compile
// error. Adding a new control prop? Add it here and to `BarcodeArViewProps`.
const CONTROL_PASS_THROUGH_KEYS = [
    'shouldShowTorchControl',
    'torchControlPosition',
    'shouldShowZoomControl',
    'zoomControlPosition',
    'shouldShowCameraSwitchControl',
    'cameraSwitchControlPosition',
    'shouldShowMacroModeControl',
    'macroModeControlPosition',
];
function buildSettings(settings, symbologies) {
    if (settings) {
        if (symbologies !== undefined) {
            console.warn('BarcodeArView: `settings` takes precedence; `symbologies` is ignored.');
        }
        return settings;
    }
    const s = new BarcodeArSettings();
    if (symbologies?.length)
        s.enableSymbologies(symbologies);
    return s;
}
const BarcodeArView = forwardRef(function BarcodeArView(props, ref) {
    const { didScan, didUpdateSession, highlightProvider, annotationProvider, uiListener, barcodeFilter, navigation, style, children, } = props;
    const settings = _internal.useStableProp(props.settings);
    const symbologies = _internal.useStableProp(props.symbologies);
    const viewSettings = _internal.useStableProp(props.viewSettings);
    const cameraSettings = _internal.useStableProp(props.cameraSettings);
    const feedback = _internal.useStableProp(props.feedback);
    const context = _internal.useDataCaptureContextInternal();
    const viewHandle = _internal.useViewHandle();
    const viewNode = viewHandle.current;
    // AR is an own-camera view: native SDCBarcodeArView creates/manages its own
    // internal camera from `cameraSettings`, invisible to JS. Holding the
    // shared provider camera ON blocks AR's internal camera, so an exclusive
    // claim hands the provider camera back while AR is enabled and releases it
    // on disable, same as SparkScanView.
    const [cameraActive, setCameraActive] = useState(false);
    // On RN, BarcodeAr renders the PROVIDER camera — device-verified twice
    // (SDC-32484): with an exclusive claim the handoff switches the provider
    // camera off and the native view's "internal camera" never engages (zero
    // camera activity in the native trace, main-thread + in-window + post-create
    // all proven). Same finding as BarcodeCount. The native SDK's BarcodeArView
    // can drive its own camera standalone; the RN integration does not wire it
    // that way.
    const cameraClaim = _internal.useCameraClaim({
        mode: 'shared',
        active: cameraActive,
        nativeViewRef: viewHandle.mutableRef,
    });
    // Reactive snapshot of the base view: listener effects depend on it so they
    // (re-)register once it exists, and again after a detach/re-attach cycle.
    const baseViewRef = useRef(null);
    const [baseView, setBaseView] = useState(null);
    const augmentationContainerRef = useRef(null);
    // Remount epoch for the native host component. Bumped on every detach so the
    // next focus mounts a FRESH Fabric component: the native module's pending
    // create actions pair with the container on didMoveToSuperview, which never
    // re-fires for a reused, still-mounted container — recreating the native AR
    // view into the old host leaves it unattached/unsized and the preview black
    // (SDC-32484 back-navigation; forward-nav always creates a fresh host and
    // has never failed).
    const [hostEpoch, setHostEpoch] = useState(0);
    const resolveSettings = useCallback(() => buildSettings(settings, symbologies), [settings, symbologies]);
    // Providers / listeners are NOT passed to the constructor: doing so makes
    // the controller's `initialize()` call `registerHighlightProvider` during
    // `createNativeView`, while the parallel setter effects below would
    // *also* race to register before the native `$createBarcodeArView` RPC
    // has resolved. Instead we apply them exclusively via the setters, and
    // only after `createNativeView` is awaited (see `attach`).
    const getBaseView = useCallback((mode) => {
        if (baseViewRef.current)
            return baseViewRef.current;
        baseViewRef.current = new BaseBarcodeArView(context, mode, null, viewSettings ?? undefined, cameraSettings ?? undefined);
        return baseViewRef.current;
    }, [context, viewSettings, cameraSettings]);
    const { getMode, enable: enableMode, disable: disableMode, } = _internal.useMode({
        disabled: props.disabled,
        canAttach: viewNode != null,
        createMode: () => new BarcodeAr(resolveSettings()),
        applySettings: m => m.applySettings(resolveSettings()),
        setEnabled: async (_m, enabled) => {
            const view = baseViewRef.current;
            if (!view) {
                return;
            }
            // Claim camera 0 exclusively before AR opens its own internal camera.
            // `granted()` resolving already guarantees the provider camera is off —
            // ordering against a pending provider OFF is guaranteed without a
            // separate `run()`/`runExclusive` wrapper. A stop→start re-assert (not
            // a bare start) is still required: the native view can be left with a
            // stale "started" flag that makes a bare `start()` a no-op (SDC-32484).
            if (enabled) {
                setCameraActive(true);
                await cameraClaim.granted();
                await view.stop();
                await view.start();
            }
            else {
                await view.stop();
                setCameraActive(false);
            }
        },
        attach: mode => new Promise(resolve => {
            const node = viewNode;
            if (!node) {
                return resolve();
            }
            // Gate creation on layout (the view being committed to the native tree)
            // rather than InteractionManager.runAfterInteractions, whose queue can
            // be starved by a blocked JS interaction. See SDC-32208.
            void viewHandle.whenReady().then(async () => {
                const id = findNodeHandle(node);
                if (id == null) {
                    return resolve();
                }
                const view = getBaseView(mode);
                // Create only after the camera coordinator settles: a popped sibling
                // screen's DataCaptureView teardown is parked as a coordinator
                // barrier, and iOS only renders to the most recently attached view —
                // creating ours while the dead one still exists leaves rendering
                // bound to a corpse and the preview black (SDC-32484).
                setCameraActive(true);
                await cameraClaim.granted();
                await view.createNativeView(id);
                // Publish the reactive snapshot only after the native view has
                // actually been created, so the provider/listener effects below
                // don't fire RPCs that race with `$createBarcodeArView`.
                setBaseView(view);
                resolve();
            });
        }),
        detach: async () => {
            // Await native teardown before resolving so a rapid detach→attach
            // (e.g. mid-navigation) can't race a new createNativeView against an
            // in-flight dispose. Matches SparkScanView/BarcodeCountView.
            const view = baseViewRef.current;
            baseViewRef.current = null;
            setBaseView(null);
            const disposed = Promise.resolve(view?.dispose());
            setHostEpoch(e => e + 1);
            // Hand the claim release over to the dispose: on iOS the async native
            // teardown nulls/steals the context frame source *after* unmount, so
            // releasing before `dispose()` resolves races it and leaves the
            // provider camera off (SDC-32484 black screen on back-navigation). The
            // coordinator parks `disposed` as a barrier and waits for it before
            // re-asserting the provider camera.
            cameraClaim.release(disposed);
            await disposed;
        },
        settingsDeps: [resolveSettings],
    });
    // ─── Mode listener ───────────────────────────────────────────────────────
    // `useModeListener` watches the `mode` snapshot from `getMode()`; the
    // listener is (re-)bound whenever a new BarcodeAr instance exists, so the
    // race "listener prop set before mode is created" is impossible.
    _internal.useModeListener({
        mode: getMode(),
        listenerFns: {
            didUpdateSession: didScan || didUpdateSession
                ? async (_m, session, getFD) => {
                    if (didUpdateSession)
                        await didUpdateSession(session, getFD);
                    if (didScan && session.addedTrackedBarcodes?.length) {
                        await didScan(session.addedTrackedBarcodes, session, getFD);
                    }
                }
                : undefined,
        },
        addListener: (m, l) => m.addListener(l),
        removeListener: (m, l) => m.removeListener(l),
    });
    // ─── UI-listener wiring ──────────────────────────────────────────────────
    // Depends on `baseView` (reactive) so handlers (re-)register when the view
    // is (re-)created after a detach/attach cycle. Highlight/annotation
    // provider wiring and the custom RN-view augmentation lifecycle live in
    // `BarcodeArCustomAugmentationOverlay` so state churn from frequent
    // create/dispose events doesn't re-render this component.
    useEffect(() => {
        if (!baseView)
            return;
        baseView.barcodeArViewUiListener = uiListener ?? null;
    }, [baseView, uiListener]);
    // ─── Barcode filter ──────────────────────────────────────────────────────
    // Keyed on `baseView` so the filter is (re-)applied after attach. Setting
    // it before the mode controller exists is a no-op on the shared layer, so
    // gating on `baseView` is the safe signal that the mode is ready.
    useEffect(() => {
        if (!baseView)
            return;
        void getMode().setBarcodeFilter(barcodeFilter ?? null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [baseView, barcodeFilter]);
    // ─── Feedback ────────────────────────────────────────────────────────────
    // Gated on `baseView` so the setter's `updateFeedback` RPC reaches a live
    // controller (matches the barcodeFilter pattern above).
    useEffect(() => {
        if (!baseView)
            return;
        if (feedback === undefined)
            return;
        getMode().feedback = feedback;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [baseView, feedback]);
    _internal.usePassThroughProps(baseView, props, CONTROL_PASS_THROUGH_KEYS);
    // Lifecycle: focus/blur + app foreground/background + the `disabled` veto.
    // Provider-camera demand/release lives in `setEnabled`, so these wire straight through.
    _internal.useLifecycleHook({
        navigation,
        disabled: props.disabled,
        appStateHandlingDisabled: props.appStateHandlingDisabled,
        onEnable: enableMode,
        onDisable: disableMode,
    });
    // ─── Imperative handle ───────────────────────────────────────────────────
    const handle = useMemo(() => ({
        start: async () => {
            await baseViewRef.current?.start();
        },
        stop: async () => {
            await baseViewRef.current?.stop();
        },
        pause: async () => {
            await baseViewRef.current?.pause();
        },
        reset: async () => {
            await baseViewRef.current?.reset();
        },
        enable: enableMode,
        disable: disableMode,
    }), [enableMode, disableMode]);
    useImperativeHandle(ref, () => handle, [handle]);
    const onNativeViewLayout = useCallback((event) => {
        const { x, y, width, height } = event.nativeEvent.layout;
        augmentationContainerRef.current?.setNativeProps({
            style: { top: y, left: x, width, height },
        });
        // Signal native-view readiness so `attach` can create the view. See SDC-32208.
        viewHandle.onLayout();
    }, [viewHandle]);
    return (React.createElement(React.Fragment, null,
        React.createElement(RNTBarcodeArView, { key: hostEpoch, style: style ?? { flex: 1 }, ref: viewHandle.ref, onLayout: onNativeViewLayout }, children),
        React.createElement(BarcodeArCustomAugmentationOverlay, { ref: augmentationContainerRef, baseView: baseView, highlightProvider: highlightProvider, annotationProvider: annotationProvider })));
});

// Internal-only exports for AIO views and other not-yet-public APIs.
// Exposed at the package level via `import { _internal } from 'scandit-react-native-datacapture-barcode'`.

var internal = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BarcodeArView: BarcodeArView,
    BarcodeBatchView: BarcodeBatchView,
    BarcodeCountView: BarcodeCountView,
    SparkScanView: SparkScanView,
    getBarcodeArDefaults: getBarcodeArDefaults,
    getBarcodeBatchDefaults: getBarcodeBatchDefaults,
    getBarcodeCountDefaults: getBarcodeCountDefaults
});

initBarcodeDefaults();
initBarcodeProxy();

export { BarcodeArCustomAnnotation, BarcodeArCustomHighlight, BarcodeArView$1 as BarcodeArView, BarcodeBatchAdvancedOverlay, BarcodeBatchAdvancedOverlayView, BarcodeBatchView$1 as BarcodeBatchView, BarcodeCaptureView, BarcodeCountView$1 as BarcodeCountView, BarcodeCountViewStyle, BarcodeFindView, BarcodePickView, BarcodeSelectionView, SparkScanView$1 as SparkScanView, internal as _internal };
