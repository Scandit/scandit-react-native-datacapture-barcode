import { BarcodeBatchAdvancedOverlayListener as BarcodeBatchAdvancedOverlayListener$1, BarcodeBatch, BarcodeBatchAdvancedOverlayView as BarcodeBatchAdvancedOverlayView$1, TrackedBarcode, BarcodeBatchSettings, BarcodeBatchBasicOverlayStyle, BarcodeBatchSession, BarcodeBatchBasicOverlay, Barcode, BarcodeCaptureSession, Symbology, CompositeType, BatterySavingMode, ArucoDictionary, BarcodeCaptureSettings, BarcodeCaptureFeedback, BarcodeArHighlight, BarcodeArAnnotationTrigger, BarcodeArAnnotation, BarcodeAr, BarcodeArViewSettings, BarcodeArViewUiListener, BarcodeArAnnotationProvider, BarcodeArHighlightProvider, BarcodeSelectionSettings, BarcodeSelectionBrushProvider, BarcodeSelectionBasicOverlayStyle, BarcodeSelectionFeedback, BarcodeSelection, BarcodeSelectionSession, SparkScanViewState, SparkScanScanningMode, SparkScanFeedbackDelegate, BaseSparkScanViewProps, BarcodeCountViewUiListener, BarcodeCountViewListener, BarcodeFilterHighlightSettings, BarcodeCountNotInListActionSettings, BarcodeCountToolbarSettings, BarcodeCountStatusProvider, BaseBarcodeCountViewProps, BarcodePickViewUiListener, BarcodePickViewListener, BarcodePickActionListener, BarcodePick, BarcodePickViewSettings, BarcodeFindViewUiListener, BarcodeFind, BarcodeFindViewSettings, SparkScanSession, ScanItemDefinition, SparkScanSettings, SparkScanViewSettings, SparkScanBarcodeFeedback, Cluster, BarcodeCountSession, BarcodeCountSettings, BarcodeCountCaptureList, BarcodeCountFeedback, BarcodeArSettings, BarcodeArSession, BarcodeArFilter, BarcodeArFeedback, getBarcodeArDefaults, getBarcodeBatchDefaults, getBarcodeCountDefaults } from './barcode';
import type { BarcodeCountDefaults, BarcodeCountViewSettingsDefaults, BarcodeArDefaults, BarcodeBatchDefaults } from './barcode';
export { ArucoDictionary, ArucoDictionaryPreset, ArucoMarker, AztecBarcodeGeneratorBuilder, Barcode, BarcodeAr, BarcodeArAnnotation, BarcodeArAnnotationProvider, BarcodeArAnnotationTrigger, BarcodeArCircleHighlight, BarcodeArCircleHighlightPreset, BarcodeArFeedback, BarcodeArFilter, BarcodeArHighlight, BarcodeArHighlightProvider, BarcodeArInfoAnnotation, BarcodeArInfoAnnotationAnchor, BarcodeArInfoAnnotationBodyComponent, BarcodeArInfoAnnotationFooter, BarcodeArInfoAnnotationHeader, BarcodeArInfoAnnotationListener, BarcodeArInfoAnnotationWidthPreset, BarcodeArListener, BarcodeArPopoverAnnotation, BarcodeArPopoverAnnotationAnchor, BarcodeArPopoverAnnotationButton, BarcodeArPopoverAnnotationListener, BarcodeArRectangleHighlight, BarcodeArResponsiveAnnotation, BarcodeArSession, BarcodeArSettings, BarcodeArStatusIconAnnotation, BarcodeArStatusIconAnnotationAnchor, BarcodeArViewSettings, BarcodeArViewUiListener, BarcodeBatch, BarcodeBatchBasicOverlay, BarcodeBatchBasicOverlayListener, BarcodeBatchBasicOverlayStyle, BarcodeBatchLicenseInfo, BarcodeBatchListener, BarcodeBatchSession, BarcodeBatchSettings, BarcodeCapture, BarcodeCaptureFeedback, BarcodeCaptureLicenseInfo, BarcodeCaptureListener, BarcodeCaptureOverlay, BarcodeCaptureSession, BarcodeCaptureSettings, BarcodeCount, BarcodeCountCaptureList, BarcodeCountCaptureListListener, BarcodeCountCaptureListSession, BarcodeCountFeedback, BarcodeCountListener, BarcodeCountMappingFlowSettings, BarcodeCountNotInListActionSettings, BarcodeCountSession, BarcodeCountSettings, BarcodeCountStatus, BarcodeCountStatusItem, BarcodeCountStatusProvider, BarcodeCountStatusProviderCallback, BarcodeCountStatusResult, BarcodeCountStatusResultAbort, BarcodeCountStatusResultError, BarcodeCountStatusResultSuccess, BarcodeCountToolbarSettings, BarcodeCountViewListener, BarcodeCountViewUiListener, BarcodeDataTransformer, BarcodeDefinition, BarcodeDefinitionBuilder, BarcodeFilterHighlightSettings, BarcodeFilterHighlightSettingsBrush, BarcodeFilterHighlightType, BarcodeFilterSettings, BarcodeFind, BarcodeFindFeedback, BarcodeFindItem, BarcodeFindItemContent, BarcodeFindItemSearchOptions, BarcodeFindListener, BarcodeFindSession, BarcodeFindSettings, BarcodeFindTransformer, BarcodeFindViewProps, BarcodeFindViewSettings, BarcodeFindViewUiListener, BarcodeGenerator, BarcodeGeneratorBuilder, BarcodeIdentifier, BarcodeInfo, BarcodePick, BarcodePickAction, BarcodePickActionCallback, BarcodePickActionListener, BarcodePickAsyncMapperProductProvider, BarcodePickAsyncMapperProductProviderCallback, BarcodePickListener, BarcodePickProduct, BarcodePickProductProvider, BarcodePickProductProviderCallback, BarcodePickProductProviderCallbackItem, BarcodePickScanningListener, BarcodePickScanningSession, BarcodePickSession, BarcodePickSettings, BarcodePickState, BarcodePickStatusIconSettings, BarcodePickStatusIconStyle, BarcodePickViewEvents, BarcodePickViewHighlightStyle, BarcodePickViewHighlightStyleAsyncProvider, BarcodePickViewHighlightStyleCustomView, BarcodePickViewHighlightStyleCustomViewProvider, BarcodePickViewHighlightStyleCustomViewResponse, BarcodePickViewHighlightStyleRequest, BarcodePickViewHighlightStyleResponse, BarcodePickViewHighlightStyleResponseBuilder, BarcodePickViewListener, BarcodePickViewSettings, BarcodePickViewUiListener, BarcodeSelection, BarcodeSelectionAimerSelection, BarcodeSelectionAutoSelectionStrategy, BarcodeSelectionBasicOverlay, BarcodeSelectionBasicOverlayStyle, BarcodeSelectionBrushProvider, BarcodeSelectionFeedback, BarcodeSelectionFreezeBehavior, BarcodeSelectionLicenseInfo, BarcodeSelectionListener, BarcodeSelectionManualSelectionStrategy, BarcodeSelectionSession, BarcodeSelectionSettings, BarcodeSelectionStrategy, BarcodeSelectionTapBehavior, BarcodeSelectionTapSelection, BarcodeSelectionType, BarcodeSpatialGrid, BatterySavingMode, CapturePreset, Checksum, Cluster, Code128BarcodeGeneratorBuilder, Code39BarcodeGeneratorBuilder, CompositeFlag, CompositeType, DataMatrixBarcodeGeneratorBuilder, Dot, DotWithIcons, Ean13BarcodeGeneratorBuilder, Ean13UpcaClassification, EncodingRange, InterleavedTwoOfFiveBarcodeGeneratorBuilder, LocalizedOnlyBarcode, Pdf417BarcodeGeneratorBuilder, Pdf417CompactionMode, Pdf417Dimensions, QrCodeBarcodeGeneratorBuilder, QrCodeErrorCorrectionLevel, Range, Rectangular, RectangularWithIcons, ScanComponentBarcodePreset, ScanComponentDefinition, ScanComponentTextSemanticType, ScanItemDefinition, ScanItemIdentifier, ScannedBarcode, ScannedComponent, ScannedComponentIdentifier, ScannedItem, ScannedItemIdentifier, ScannedText, SparkScan, SparkScanBarcodeErrorFeedback, SparkScanBarcodeFeedback, SparkScanBarcodeSuccessFeedback, SparkScanFeedbackDelegate, SparkScanLicenseInfo, SparkScanListener, SparkScanMiniPreviewSize, SparkScanPreviewBehavior, SparkScanScanningBehavior, SparkScanScanningMode, SparkScanScanningModeDefault, SparkScanScanningModeTarget, SparkScanSession, SparkScanSettings, SparkScanToastSettings, SparkScanViewSettings, SparkScanViewState, StructuredAppendData, Symbology, SymbologyDescription, SymbologySettings, TargetBarcode, TextDefinition, TextDefinitionBuilder, TextIdentifier, TrackedBarcode, TrackedObject, UpcaBarcodeGeneratorBuilder } from './barcode';
import React, { ReactElement } from 'react';
import { View, ViewProps, StyleProp, ViewStyle, LayoutChangeEvent } from 'react-native';
import { DataCaptureContext, Brush, Anchor as Anchor$1, PointWithUnit as PointWithUnit$1, CameraSettings, FrameSourceState, CameraPosition, TorchState, TorchSwitchControl, ZoomSwitchControl, FrameData, Viewfinder, _internal, DataCaptureView, Size, Orientation, Point, Quadrilateral, Control } from 'scandit-react-native-datacapture-core';
export { ScanditProvider, useCameraPermission, useIsForeground } from 'scandit-react-native-datacapture-core';
export type { ScanditProviderProps } from 'scandit-react-native-datacapture-core';
import { DataCaptureOverlay, Anchor, PointWithUnit, FrameData as FrameData$1, LocationSelection, ScanIntention, Observable, DataCaptureContext as DataCaptureContext$1, CameraSettings as CameraSettings$1, LogoStyle, ZoomSwitchOrientation, Brush as Brush$1, Color, FrameSourceState as FrameSourceState$1 } from 'scandit-react-native-datacapture-core/dist/dts/core';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

declare class BarcodeBatchAdvancedOverlay implements DataCaptureOverlay {
    private baseBarcodeBatch;
    get listener(): BarcodeBatchAdvancedOverlayListener$1 | null;
    set listener(listener: BarcodeBatchAdvancedOverlayListener$1 | null);
    private get type();
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    private set view(value);
    private get view();
    constructor(mode: BarcodeBatch);
    setViewForTrackedBarcode(view: BarcodeBatchAdvancedOverlayView$1, trackedBarcode: TrackedBarcode): Promise<void>;
    setAnchorForTrackedBarcode(anchor: Anchor, trackedBarcode: TrackedBarcode): Promise<void>;
    setOffsetForTrackedBarcode(offset: PointWithUnit, trackedBarcode: TrackedBarcode): Promise<void>;
    clearTrackedBarcodeViews(): Promise<void>;
    updateSizeOfTrackedBarcodeView(trackedBarcodeIdentifier: number, width: number, height: number): Promise<void>;
    toJSON(): object;
    private onViewIdChanged;
}

interface BarcodeBatchViewProps$1 extends ViewProps {
    context: DataCaptureContext;
    isEnabled?: boolean;
    barcodeBatchSettings?: BarcodeBatchSettings | null;
    defaultBasicOverlayBrush?: Brush | null;
    basicOverlayStyle?: BarcodeBatchBasicOverlayStyle | null;
    shouldShowScanAreaGuides?: boolean;
    defaultAnchorForTrackedBarcode?: Anchor$1;
    defaultsOffsetForTrackedBarcode?: PointWithUnit$1;
    cameraSettings?: CameraSettings | null;
    desiredCameraState?: FrameSourceState;
    desiredCameraPosition?: CameraPosition | null;
    desiredTorchState?: TorchState | null;
    torchSwitchControl?: TorchSwitchControl | null;
    zoomSwitchControl?: ZoomSwitchControl | null;
    style: StyleProp<ViewStyle>;
    useCacheForViewsForTrackedBarcodes?: boolean;
    navigation?: NavigationProp<ParamListBase>;
    didUpdateSession?(barcodeBatch: BarcodeBatch, session: BarcodeBatchSession, getFrameData: () => Promise<FrameData>): Promise<void>;
    brushForTrackedBarcode?(overlay: BarcodeBatchBasicOverlay, trackedBarcode: TrackedBarcode): Brush | null;
    didTapTrackedBarcode?(overlay: BarcodeBatchBasicOverlay, trackedBarcode: TrackedBarcode): void;
    didTapViewForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): void;
    viewForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): BarcodeBatchAdvancedOverlayView$1 | null | Promise<BarcodeBatchAdvancedOverlayView$1 | null>;
    anchorForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): Anchor$1;
    offsetForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): PointWithUnit$1;
}
declare const BarcodeBatchView$1: React.ForwardRefExoticComponent<BarcodeBatchViewProps$1 & React.RefAttributes<View>>;

declare class BarcodeBatchAdvancedOverlayView extends React.Component {
    static moduleName: string;
    get moduleName(): string;
}

interface BarcodeBatchAdvancedOverlayListener {
    didTapViewForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): void;
    viewForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): BarcodeBatchAdvancedOverlayView | null;
    anchorForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): Anchor;
    offsetForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): PointWithUnit;
}

/**
 * Basic-overlay configuration. The overlay is attached by default; pass
 * `{ enabled: false }` to skip it. `BarcodeCaptureOverlay` has no listener
 * interface, so this is purely a setter bag.
 *
 * @internal
 */
interface BarcodeCaptureBasicOverlayProps {
    /** Whether to attach the basic overlay. Defaults to `true`. */
    enabled?: boolean;
    /** Default brush applied to recognized barcodes. */
    defaultBrush?: Brush | null;
    /** Viewfinder rendered on top of the camera preview. */
    viewfinder?: Viewfinder | null;
    /** Whether to render scan-area guides. */
    shouldShowScanAreaGuides?: boolean;
}
interface BarcodeCaptureViewProps extends ViewProps {
    /**
     * Called for each newly-recognized barcode. Return a `Promise` to keep the
     * frame alive while async work runs — `getFrameData()` becomes invalid once
     * the returned promise resolves. Sync handlers return immediately (1
     * microtask) and don't impact throughput.
     *
     * Backed by the native `BarcodeCaptureListener.didScan` event — fires only
     * on a recognition, independently of `didUpdateSession`.
     */
    didScan?: (barcodes: Barcode[], session: BarcodeCaptureSession, getFrameData: () => Promise<FrameData$1>) => void | Promise<void>;
    /**
     * Called on every session update (~once per processed frame), regardless of
     * whether a barcode was recognized. Backed by the native
     * `BarcodeCaptureListener.didUpdateSession` event — independent of `didScan`.
     *
     * If the handler is `async`, the native pipeline awaits it — useful when
     * you need `getFrameData()` to stay valid through async work, but be aware
     * it can slow down frame processing. For "fire-and-forget" background
     * work that doesn't need frame data, keep the handler synchronous and
     * dispatch via your own queue.
     */
    didUpdateSession?: (session: BarcodeCaptureSession, getFrameData: () => Promise<FrameData$1>) => void | Promise<void>;
    /** Symbologies to enable. Ignored when `barcodeCaptureSettings` is set. */
    symbologies?: Symbology[];
    /** Restrict the scan area within the camera frame. Ignored when `barcodeCaptureSettings` is set. */
    locationSelection?: LocationSelection | null;
    /** Composite barcode types to enable (e.g. GS1 composites). Ignored when `barcodeCaptureSettings` is set. */
    compositeTypes?: CompositeType[];
    /** Battery saving mode. Ignored when `barcodeCaptureSettings` is set. */
    batterySaving?: BatterySavingMode;
    /** Scan intention (smart or manual). Ignored when `barcodeCaptureSettings` is set. */
    scanIntention?: ScanIntention;
    /** Time interval in ms during which duplicate barcodes are filtered out. Ignored when `barcodeCaptureSettings` is set. */
    codeDuplicateFilter?: number;
    /** ArUco marker dictionary to use. Ignored when `barcodeCaptureSettings` is set. */
    arucoDictionary?: ArucoDictionary;
    /** Full settings object. Takes precedence over all shorthand settings props. */
    barcodeCaptureSettings?: BarcodeCaptureSettings | null;
    /**
     * Optional navigation object (e.g. React Navigation's `navigation` prop).
     * When provided, scanning is suspended (mode + camera off) while the screen
     * is blurred or the app is backgrounded, and resumed when it returns —
     * unless `disabled` is set.
     */
    navigation?: _internal.ScanditNavigationProp;
    /**
     * Disable the mode. When set, scanning is kept off regardless of whether
     * automatic navigation-event handling and/or AppState handling is turned on.
     * You can also use the view handle methods `enable()` / `disable()` to
     * enable/disable once, but when using those this prop might go out of sync
     * with the actual state of the component. Setting this to `false` does not
     * guarantee that scanning is constantly running — automatic event handling
     * might still turn the mode on and off.
     */
    disabled?: boolean;
    /**
     * Disable the automatic enabling and disabling of the mode based on AppState.
     */
    appStateHandlingDisabled?: boolean;
    /**
     * Basic overlay configuration. Omit the prop (or pass `undefined`) to use
     * defaults. Pass `{ enabled: false }` to skip the overlay.
     */
    basicOverlay?: BarcodeCaptureBasicOverlayProps;
    /** Called when the view's size or orientation changes. */
    onDidChangeSize?: (view: DataCaptureView, size: Size, orientation: Orientation) => void;
    /** Native on-view torch toggle control. */
    torchSwitchControl?: TorchSwitchControl | null;
    /** Native on-view zoom toggle control. */
    zoomSwitchControl?: ZoomSwitchControl | null;
    /** Sound / vibration feedback on scan. Omit to use the SDK default. */
    feedback?: BarcodeCaptureFeedback;
}
/**
 * Imperative methods exposed via `ref`. `BarcodeCaptureOverlay` has no
 * imperative API of its own, so there's no overlay-scoped namespace.
 *
 * @internal
 */
interface BarcodeCaptureViewMethods {
    /**
     * Reset the current capture session (clears recently-recognized barcodes
     * tracked by the duplicate filter). No-op until the first session callback
     * has fired.
     */
    reset(): Promise<void>;
    /** Maps a point in frame coordinates to view coordinates. */
    viewPointForFramePoint(point: Point): Promise<Point>;
    /** Maps a quadrilateral in frame coordinates to view coordinates. */
    viewQuadrilateralForFrameQuadrilateral(quadrilateral: Quadrilateral): Promise<Quadrilateral>;
    /** Add a custom on-view control. */
    addControl(control: Control): Promise<void>;
    /** Remove a previously-added on-view control. */
    removeControl(control: Control): void;
}
type BarcodeCaptureViewHandle = BarcodeCaptureViewMethods & _internal.EnableDisableHandle;
declare const BarcodeCaptureView: React.ForwardRefExoticComponent<BarcodeCaptureViewProps & React.RefAttributes<BarcodeCaptureViewHandle>>;

interface BarcodeArCustomHighlightConfig {
    renderHighlight: () => ReactElement;
}
declare class BarcodeArCustomHighlight extends Observable implements BarcodeArHighlight {
    renderHighlight: () => ReactElement;
    private _type;
    constructor(config: BarcodeArCustomHighlightConfig);
}

interface BarcodeArCustomAnnotationConfig {
    renderAnnotation: () => ReactElement;
    /** Defaults to `BarcodeArAnnotationTrigger.HighlightTap`. */
    annotationTrigger?: BarcodeArAnnotationTrigger;
    /** Defaults to `Anchor.TopCenter`. */
    anchor?: Anchor;
}
declare class BarcodeArCustomAnnotation extends Observable implements BarcodeArAnnotation {
    annotationTrigger: BarcodeArAnnotationTrigger;
    anchor: Anchor;
    renderAnnotation: () => ReactElement;
    private _type;
    constructor(config: BarcodeArCustomAnnotationConfig);
}

interface BarcodeArViewProps$1 extends ViewProps {
    context: DataCaptureContext$1;
    barcodeAr: BarcodeAr;
    settings?: BarcodeArViewSettings;
    cameraSettings?: CameraSettings$1;
    annotationProvider?: BarcodeArAnnotationProvider;
    highlightProvider?: BarcodeArHighlightProvider;
    uiListener?: BarcodeArViewUiListener;
    style?: StyleProp<ViewStyle>;
    navigation?: NavigationProp<ParamListBase>;
}
declare class BarcodeArView$1 extends React.Component<BarcodeArViewProps$1> {
    state: {
        shownHighlights: Record<string, Barcode>;
        shownAnnotations: Record<string, Barcode>;
    };
    private baseBarcodeArView;
    private _isMounted;
    private _viewCreated;
    private _createViewRafHandle;
    private unregisterFromCustomHighlightCreateEvent;
    private unregisterFromCustomHighlightDisposeEvent;
    private unregisterFromCustomAnnotationCreateEvent;
    private unregisterFromCustomAnnotationDisposeEvent;
    private navigationUnsubscribers;
    private cameraOwner;
    private customHighlightComponentCache;
    private customAnnotationComponentCache;
    private augementationContainerRef;
    static forMode(dataCaptureContext: DataCaptureContext$1, barcodeAr: BarcodeAr): BarcodeArView$1;
    static forModeWithViewSettings(dataCaptureContext: DataCaptureContext$1, barcodeAr: BarcodeAr, viewSettings: BarcodeArViewSettings): BarcodeArView$1;
    static forModeWithViewSettingsAndCameraSettings(dataCaptureContext: DataCaptureContext$1, barcodeAr: BarcodeAr, viewSettings: BarcodeArViewSettings, cameraSettings: CameraSettings$1): BarcodeArView$1;
    constructor(props: BarcodeArViewProps$1);
    componentDidMount(): void;
    componentWillUnmount(): void;
    get uiListener(): BarcodeArViewUiListener | null;
    set uiListener(value: BarcodeArViewUiListener | null);
    get annotationProvider(): BarcodeArAnnotationProvider | null;
    set annotationProvider(value: BarcodeArAnnotationProvider | null);
    get highlightProvider(): BarcodeArHighlightProvider | null;
    set highlightProvider(value: BarcodeArHighlightProvider | null);
    start(): Promise<void>;
    stop(): Promise<void>;
    pause(): Promise<void>;
    reset(): Promise<void>;
    get shouldShowTorchControl(): boolean;
    set shouldShowTorchControl(value: boolean);
    get torchControlPosition(): Anchor;
    set torchControlPosition(value: Anchor);
    get shouldShowZoomControl(): boolean;
    set shouldShowZoomControl(value: boolean);
    get zoomControlPosition(): Anchor;
    set zoomControlPosition(value: Anchor);
    get shouldShowCameraSwitchControl(): boolean;
    set shouldShowCameraSwitchControl(value: boolean);
    get cameraSwitchControlPosition(): Anchor;
    set cameraSwitchControlPosition(value: Anchor);
    get shouldShowMacroModeControl(): boolean;
    set shouldShowMacroModeControl(value: boolean);
    get macroModeControlPosition(): Anchor;
    set macroModeControlPosition(value: Anchor);
    get torchControlOffset(): PointWithUnit | null;
    set torchControlOffset(value: PointWithUnit | null);
    get zoomControlOffset(): PointWithUnit | null;
    set zoomControlOffset(value: PointWithUnit | null);
    get cameraSwitchControlOffset(): PointWithUnit | null;
    set cameraSwitchControlOffset(value: PointWithUnit | null);
    get macroModeControlOffset(): PointWithUnit | null;
    set macroModeControlOffset(value: PointWithUnit | null);
    get logoStyle(): LogoStyle;
    set logoStyle(value: LogoStyle);
    get zoomControlOrientation(): ZoomSwitchOrientation;
    set zoomControlOrientation(value: ZoomSwitchOrientation);
    get logoAnchor(): Anchor;
    set logoAnchor(value: Anchor);
    get logoOffset(): PointWithUnit;
    set logoOffset(value: PointWithUnit);
    render(): React.JSX.Element;
    private wrapHighlightProvider;
    private wrapAnnotationProvider;
    private onCustomHighlightCreated;
    private onCustomHighlightDisposed;
    private onCustomAnnotationCreated;
    private onCustomAnnotationDisposed;
    private setupNavigationListeners;
    private onFocus;
    private onBlur;
    private scheduleCreateNativeView;
    private tryCreateNativeView;
    private toJSON;
}

interface BarcodeSelectionViewProps extends ViewProps {
    context: DataCaptureContext;
    isEnabled: boolean;
    barcodeSelectionSettings?: BarcodeSelectionSettings | null;
    aimedBrush?: Brush | null;
    selectedBrush?: Brush | null;
    selectingBrush?: Brush | null;
    trackedBrush?: Brush | null;
    aimedBarcodeBrushProvider?: BarcodeSelectionBrushProvider | null;
    trackedBarcodeBrushProvider?: BarcodeSelectionBrushProvider | null;
    basicOverlayStyle?: BarcodeSelectionBasicOverlayStyle | null;
    cameraSettings?: CameraSettings | null;
    desiredCameraState?: FrameSourceState | null;
    desiredCameraPosition?: CameraPosition | null;
    desiredTorchState?: TorchState | null;
    torchSwitchControl?: TorchSwitchControl | null;
    zoomSwitchControl?: ZoomSwitchControl | null;
    pointOfInterest?: PointWithUnit$1 | null;
    feedback?: BarcodeSelectionFeedback;
    navigation?: NavigationProp<ParamListBase>;
    shouldUnfreezeCamera?: boolean | null;
    didUpdateSelection?(barcodeSelection: BarcodeSelection, session: BarcodeSelectionSession, getFrameData: () => Promise<FrameData>): Promise<void>;
}
declare const BarcodeSelectionView: React.ForwardRefExoticComponent<BarcodeSelectionViewProps & React.RefAttributes<unknown>>;

interface SparkScanViewUiListener$1 {
    /**
     * @deprecated Use {@link didTapBarcodeCountButton} instead.
     */
    onBarcodeCountButtonTappedIn?(view: SparkScanView$1): void;
    /**
     * @deprecated Use {@link didTapBarcodeFindButton} instead.
     */
    onBarcodeFindButtonTappedIn?(view: SparkScanView$1): void;
    /**
     * @deprecated Use {@link didTapLabelCaptureButton} instead.
     */
    onLabelCaptureButtonTappedIn?(view: SparkScanView$1): void;
    didTapBarcodeCountButton?(view: SparkScanView$1): void;
    didTapBarcodeFindButton?(view: SparkScanView$1): void;
    didTapLabelCaptureButton?(view: SparkScanView$1): void;
    didChangeViewState?(newState: SparkScanViewState): void;
    didChangeScanningMode?(newScanningMode: SparkScanScanningMode): void;
}
interface SparkScanViewProps$1 extends BaseSparkScanViewProps {
    style: StyleProp<ViewStyle>;
    children?: React.ReactNode;
    navigation?: NavigationProp<ParamListBase>;
    onLayout?: (event: LayoutChangeEvent) => void;
}
declare class SparkScanView$1 extends React.Component<SparkScanViewProps$1> {
    private baseSparkScanView;
    private rnViewListener;
    private _isMounted;
    private _viewCreated;
    private _createViewRafHandle;
    private navigationUnsubscribers;
    private cameraOwner;
    get uiListener(): SparkScanViewUiListener$1 | null;
    set uiListener(listener: SparkScanViewUiListener$1 | null);
    static get defaultBrush(): Brush$1;
    constructor(props: SparkScanViewProps$1);
    render(): React.JSX.Element;
    get previewSizeControlVisible(): boolean;
    set previewSizeControlVisible(newValue: boolean);
    get scanningBehaviorButtonVisible(): boolean;
    set scanningBehaviorButtonVisible(newValue: boolean);
    get barcodeCountButtonVisible(): boolean;
    set barcodeCountButtonVisible(newValue: boolean);
    get barcodeFindButtonVisible(): boolean;
    set barcodeFindButtonVisible(newValue: boolean);
    get targetModeButtonVisible(): boolean;
    set targetModeButtonVisible(newValue: boolean);
    get selectionModeButtonVisible(): boolean;
    set selectionModeButtonVisible(newValue: boolean);
    get labelCaptureButtonVisible(): boolean;
    set labelCaptureButtonVisible(newValue: boolean);
    get toolbarBackgroundColor(): Color | null;
    set toolbarBackgroundColor(newValue: Color | null);
    get toolbarIconActiveTintColor(): Color | null;
    set toolbarIconActiveTintColor(newValue: Color | null);
    get toolbarIconInactiveTintColor(): Color | null;
    set toolbarIconInactiveTintColor(newValue: Color | null);
    get cameraSwitchButtonVisible(): boolean;
    set cameraSwitchButtonVisible(newValue: boolean);
    get torchControlVisible(): boolean;
    set torchControlVisible(newValue: boolean);
    get zoomSwitchControlVisible(): boolean;
    set zoomSwitchControlVisible(newValue: boolean);
    get previewCloseControlVisible(): boolean;
    set previewCloseControlVisible(newValue: boolean);
    get triggerButtonAnimationColor(): Color | null;
    set triggerButtonAnimationColor(newValue: Color | null);
    get triggerButtonExpandedColor(): Color | null;
    set triggerButtonExpandedColor(newValue: Color | null);
    get triggerButtonCollapsedColor(): Color | null;
    set triggerButtonCollapsedColor(newValue: Color | null);
    get triggerButtonTintColor(): Color | null;
    set triggerButtonTintColor(newValue: Color | null);
    get triggerButtonVisible(): boolean;
    set triggerButtonVisible(newValue: boolean);
    get triggerButtonImage(): string | null;
    set triggerButtonImage(newValue: string | null);
    prepareScanning(): Promise<void>;
    startScanning(): Promise<void>;
    pauseScanning(): Promise<void>;
    stopScanning(): Promise<void>;
    onHostPause(): Promise<void>;
    get feedbackDelegate(): SparkScanFeedbackDelegate | null;
    set feedbackDelegate(delegate: SparkScanFeedbackDelegate | null);
    showToast(text: string): Promise<void>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: SparkScanViewProps$1): void;
    componentWillUnmount(): void;
    private setupNavigationListeners;
    private onFocus;
    private onBlur;
    private onNativeViewLayout;
    private scheduleCreateNativeView;
    private tryCreateNativeView;
    private toJSON;
}

declare enum BarcodeCountViewStyle {
    Icon = "icon",
    Dot = "dot"
}
interface BarcodeCountViewProps extends BaseBarcodeCountViewProps {
    style: StyleProp<ViewStyle>;
    navigation?: NavigationProp<ParamListBase>;
    onLayout?: (event: LayoutChangeEvent) => void;
}
declare class BarcodeCountView$1 extends React.Component<BarcodeCountViewProps> {
    private baseBarcodeCountView;
    private _isMounted;
    private _viewCreated;
    private _createViewRafHandle;
    private navigationUnsubscribers;
    private cameraOwner;
    static get defaultRecognizedBrush(): Brush;
    static get defaultNotInListBrush(): Brush;
    static get defaultAcceptedBrush(): Brush;
    static get defaultRejectedBrush(): Brush;
    static get hardwareTriggerSupported(): boolean;
    get uiListener(): BarcodeCountViewUiListener | null;
    set uiListener(listener: BarcodeCountViewUiListener | null);
    get listener(): BarcodeCountViewListener | null;
    set listener(listener: BarcodeCountViewListener | null);
    get shouldShowUserGuidanceView(): boolean;
    set shouldShowUserGuidanceView(newValue: boolean);
    get shouldShowListButton(): boolean;
    set shouldShowListButton(newValue: boolean);
    get shouldDisableModeOnExitButtonTapped(): boolean;
    set shouldDisableModeOnExitButtonTapped(newValue: boolean);
    get shouldShowExitButton(): boolean;
    set shouldShowExitButton(newValue: boolean);
    get shouldShowShutterButton(): boolean;
    set shouldShowShutterButton(newValue: boolean);
    get shouldShowHints(): boolean;
    set shouldShowHints(newValue: boolean);
    get shouldShowClearHighlightsButton(): boolean;
    set shouldShowClearHighlightsButton(newValue: boolean);
    get shouldShowSingleScanButton(): boolean;
    set shouldShowSingleScanButton(newValue: boolean);
    get shouldShowFloatingShutterButton(): boolean;
    set shouldShowFloatingShutterButton(newValue: boolean);
    get shouldShowToolbar(): boolean;
    set shouldShowToolbar(newValue: boolean);
    get shouldShowStatusModeButton(): boolean;
    set shouldShowStatusModeButton(newValue: boolean);
    get shouldShowStatusIconsOnScan(): boolean;
    set shouldShowStatusIconsOnScan(newValue: boolean);
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(newValue: boolean);
    get recognizedBrush(): Brush | null;
    set recognizedBrush(newValue: Brush | null);
    get notInListBrush(): Brush | null;
    set notInListBrush(newValue: Brush | null);
    get acceptedBrush(): Brush | null;
    set acceptedBrush(newValue: Brush | null);
    get rejectedBrush(): Brush | null;
    set rejectedBrush(newValue: Brush | null);
    get filterSettings(): BarcodeFilterHighlightSettings | null;
    set filterSettings(newValue: BarcodeFilterHighlightSettings | null);
    get style(): BarcodeCountViewStyle;
    get listButtonAccessibilityHint(): string;
    set listButtonAccessibilityHint(newValue: string);
    get listButtonAccessibilityLabel(): string;
    set listButtonAccessibilityLabel(newValue: string);
    get listButtonContentDescription(): string;
    set listButtonContentDescription(newValue: string);
    get exitButtonAccessibilityHint(): string;
    set exitButtonAccessibilityHint(newValue: string);
    get exitButtonAccessibilityLabel(): string;
    set exitButtonAccessibilityLabel(newValue: string);
    get exitButtonContentDescription(): string;
    set exitButtonContentDescription(newValue: string);
    get shutterButtonAccessibilityHint(): string;
    set shutterButtonAccessibilityHint(newValue: string);
    get shutterButtonAccessibilityLabel(): string;
    set shutterButtonAccessibilityLabel(newValue: string);
    get shutterButtonContentDescription(): string;
    set shutterButtonContentDescription(newValue: string);
    get floatingShutterButtonAccessibilityHint(): string;
    set floatingShutterButtonAccessibilityHint(newValue: string);
    get floatingShutterButtonAccessibilityLabel(): string;
    set floatingShutterButtonAccessibilityLabel(newValue: string);
    get floatingShutterButtonContentDescription(): string;
    set floatingShutterButtonContentDescription(newValue: string);
    get clearHighlightsButtonAccessibilityHint(): string;
    set clearHighlightsButtonAccessibilityHint(newValue: string);
    get clearHighlightsButtonAccessibilityLabel(): string;
    set clearHighlightsButtonAccessibilityLabel(newValue: string);
    get clearHighlightsButtonContentDescription(): string;
    set clearHighlightsButtonContentDescription(newValue: string);
    get singleScanButtonAccessibilityHint(): string;
    set singleScanButtonAccessibilityHint(newValue: string);
    get singleScanButtonAccessibilityLabel(): string;
    set singleScanButtonAccessibilityLabel(newValue: string);
    get singleScanButtonContentDescription(): string;
    set singleScanButtonContentDescription(newValue: string);
    get statusModeButtonAccessibilityHint(): string;
    set statusModeButtonAccessibilityHint(newValue: string);
    get statusModeButtonAccessibilityLabel(): string;
    set statusModeButtonAccessibilityLabel(newValue: string);
    get statusModeButtonContentDescription(): string;
    set statusModeButtonContentDescription(newValue: string);
    get clearHighlightsButtonText(): string;
    set clearHighlightsButtonText(newValue: string);
    get exitButtonText(): string;
    set exitButtonText(newValue: string);
    get textForTapShutterToScanHint(): string;
    set textForTapShutterToScanHint(newValue: string);
    get textForScanningHint(): string;
    set textForScanningHint(newValue: string);
    get textForMoveCloserAndRescanHint(): string;
    set textForMoveCloserAndRescanHint(newValue: string);
    get textForMoveFurtherAndRescanHint(): string;
    set textForMoveFurtherAndRescanHint(newValue: string);
    get textForBarcodesNotInListDetectedHint(): string;
    set textForBarcodesNotInListDetectedHint(newValue: string);
    get textForScreenCleanedUpHint(): string;
    set textForScreenCleanedUpHint(newValue: string);
    get textForClusteringGestureHint(): string;
    set textForClusteringGestureHint(newValue: string);
    get shouldShowListProgressBar(): boolean;
    set shouldShowListProgressBar(newValue: boolean);
    get shouldShowTorchControl(): boolean;
    set shouldShowTorchControl(newValue: boolean);
    get torchControlPosition(): Anchor;
    set torchControlPosition(newValue: Anchor);
    get textForTapToUncountHint(): string;
    set textForTapToUncountHint(newValue: string);
    get tapToUncountEnabled(): boolean;
    set tapToUncountEnabled(newValue: boolean);
    get barcodeNotInListActionSettings(): BarcodeCountNotInListActionSettings;
    set barcodeNotInListActionSettings(newValue: BarcodeCountNotInListActionSettings);
    get hardwareTriggerEnabled(): boolean;
    set hardwareTriggerEnabled(newValue: boolean);
    constructor(props: BarcodeCountViewProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: BarcodeCountViewProps): void;
    clearHighlights(): Promise<void>;
    setToolbarSettings(settings: BarcodeCountToolbarSettings): void;
    setStatusProvider(provider: BarcodeCountStatusProvider): void;
    setBrushForRecognizedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    setBrushForRecognizedBarcodeNotInList(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    setBrushForAcceptedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    setBrushForRejectedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    enableHardwareTrigger(hardwareTriggerKeyCode: number | null): Promise<void>;
    render(): React.JSX.Element;
    private setupNavigationListeners;
    private onFocus;
    private onBlur;
    private onNativeViewLayout;
    private scheduleCreateNativeView;
    private tryCreateNativeView;
    private toJSON;
}

interface BarcodePickViewProps {
    context: DataCaptureContext$1;
    barcodePick: BarcodePick;
    settings: BarcodePickViewSettings;
    cameraSettings: CameraSettings$1;
    style: StyleProp<ViewStyle>;
    navigation?: NavigationProp<ParamListBase>;
    onLayout?: (event: LayoutChangeEvent) => void;
}
declare class BarcodePickView extends React.Component<BarcodePickViewProps> {
    private baseBarcodePickView;
    private _isMounted;
    private _createViewRafHandle;
    private _viewCreated;
    private navigationUnsubscribers;
    private cameraOwner;
    constructor(props: BarcodePickViewProps);
    get uiListener(): BarcodePickViewUiListener | null;
    set uiListener(value: BarcodePickViewUiListener | null);
    componentDidMount(): void;
    componentWillUnmount(): void;
    start(): Promise<void>;
    stop(): Promise<void>;
    freeze(): Promise<void>;
    pause(): Promise<void>;
    resume(): Promise<void>;
    reset(): Promise<void>;
    addListener(listener: BarcodePickViewListener): void;
    removeListener(listener: BarcodePickViewListener): void;
    addActionListener(listener: BarcodePickActionListener): void;
    removeActionListener(listener: BarcodePickActionListener): void;
    render(): React.JSX.Element;
    release(): void;
    private setupNavigationListeners;
    private onFocus;
    private onBlur;
    private onNativeViewLayout;
    private scheduleCreateNativeView;
    private tryCreateNativeView;
    private toJSON;
}

interface BarcodeFindViewProps {
    context: DataCaptureContext$1;
    barcodeFind: BarcodeFind;
    viewSettings?: BarcodeFindViewSettings;
    cameraSettings?: CameraSettings$1;
    style?: StyleProp<ViewStyle>;
    navigation?: NavigationProp<ParamListBase>;
    onLayout?: (event: LayoutChangeEvent) => void;
}
declare class BarcodeFindView extends React.Component<BarcodeFindViewProps> {
    private baseBarcodeFindView;
    private _isMounted;
    private _viewCreated;
    private _createViewRafHandle;
    private navigationUnsubscribers;
    private cameraOwner;
    constructor(props: BarcodeFindViewProps);
    static get hardwareTriggerSupported(): boolean;
    get barcodeFindViewUiListener(): BarcodeFindViewUiListener | null;
    set barcodeFindViewUiListener(value: BarcodeFindViewUiListener | null);
    get shouldShowUserGuidanceView(): boolean;
    set shouldShowUserGuidanceView(value: boolean);
    get shouldShowHints(): boolean;
    set shouldShowHints(value: boolean);
    get shouldShowCarousel(): boolean;
    set shouldShowCarousel(value: boolean);
    get shouldShowPauseButton(): boolean;
    set shouldShowPauseButton(value: boolean);
    get shouldShowFinishButton(): boolean;
    set shouldShowFinishButton(value: boolean);
    get shouldShowProgressBar(): boolean;
    set shouldShowProgressBar(value: boolean);
    get shouldShowTorchControl(): boolean;
    set shouldShowTorchControl(value: boolean);
    get shouldShowZoomControl(): boolean;
    set shouldShowZoomControl(value: boolean);
    get torchControlPosition(): Anchor;
    set torchControlPosition(value: Anchor);
    get textForCollapseCardsButton(): string | null;
    set textForCollapseCardsButton(value: string | null);
    get textForAllItemsFoundSuccessfullyHint(): string | null;
    set textForAllItemsFoundSuccessfullyHint(value: string | null);
    get textForItemListUpdatedHint(): string | null;
    set textForItemListUpdatedHint(value: string | null);
    get textForItemListUpdatedWhenPausedHint(): string | null;
    set textForItemListUpdatedWhenPausedHint(value: string | null);
    get textForPointAtBarcodesToSearchHint(): string | null;
    set textForPointAtBarcodesToSearchHint(value: string | null);
    get textForMoveCloserToBarcodesHint(): string | null;
    set textForMoveCloserToBarcodesHint(value: string | null);
    get textForTapShutterToPauseScreenHint(): string | null;
    set textForTapShutterToPauseScreenHint(value: string | null);
    get textForTapShutterToResumeSearchHint(): string | null;
    set textForTapShutterToResumeSearchHint(value: string | null);
    get logoStyle(): LogoStyle;
    set logoStyle(value: LogoStyle);
    get logoAnchor(): Anchor;
    set logoAnchor(value: Anchor);
    get cameraStateOnStop(): FrameSourceState$1;
    set cameraStateOnStop(value: FrameSourceState$1);
    stopSearching(): Promise<void>;
    startSearching(): Promise<void>;
    pauseSearching(): Promise<void>;
    render(): React.JSX.Element;
    componentWillUnmount(): void;
    componentDidMount(): void;
    private setupNavigationListeners;
    private onFocus;
    private onBlur;
    private onNativeViewLayout;
    private scheduleCreateNativeView;
    private tryCreateNativeView;
    private toJSON;
}

/**
 * UI-listener callbacks fired by the native trigger/toolbar.
 *
 * The `view` parameter is the imperative handle.
 */
interface SparkScanViewUiListener {
    didTapBarcodeCountButton?(view: SparkScanViewHandle): void;
    didTapBarcodeFindButton?(view: SparkScanViewHandle): void;
    didTapLabelCaptureButton?(view: SparkScanViewHandle): void;
    didChangeViewState?(newState: SparkScanViewState): void;
    didChangeScanningMode?(newScanningMode: SparkScanScanningMode): void;
}
/**
 * Props inherited from `BaseSparkScanViewProps`. We `Omit` the four fields
 * the AIO component owns (`context` + `sparkScan` are auto-resolved,
 * `sparkScanViewSettings` is optional, `uiListener` uses the local type).
 */
type InheritedBaseProps$1 = Omit<Partial<BaseSparkScanViewProps>, 'context' | 'sparkScan' | 'sparkScanViewSettings' | 'uiListener'>;
interface SparkScanViewProps extends InheritedBaseProps$1 {
    /**
     * Called for each newly-recognized barcode. Receives the new barcode
     * extracted from `session.newlyRecognizedBarcode` (empty array if none).
     * Return a `Promise` to keep the frame alive while async work runs —
     * `getFrameData()` becomes invalid once the returned promise resolves.
     *
     * Backed by the native `SparkScanListener.didScan` event — fires only on a
     * recognition, independently of `didUpdateSession`.
     */
    didScan?: (barcodes: Barcode[], session: SparkScanSession, getFrameData: () => Promise<FrameData$1 | null>) => void | Promise<void>;
    /**
     * Called on every session update (native `SparkScanListener.didUpdateSession`
     * event) — independent of `didScan`.
     */
    didUpdateSession?: (session: SparkScanSession, getFrameData: () => Promise<FrameData$1 | null>) => void | Promise<void>;
    /** Symbologies to enable. Ignored when `sparkScanSettings` is set. */
    symbologies?: Symbology[];
    /** Scan intention. Ignored when `sparkScanSettings` is set. */
    scanIntention?: ScanIntention;
    /** Composite types to enable. Ignored when `sparkScanSettings` is set. */
    enabledCompositeTypes?: CompositeType[];
    /** Item definitions for USI-style scanning. Ignored when `sparkScanSettings` is set. */
    itemDefinitions?: ScanItemDefinition[];
    /** Time interval in ms during which duplicate barcodes are filtered out. Ignored when `sparkScanSettings` is set. */
    codeDuplicateFilter?: number;
    /** Battery saving mode. Ignored when `sparkScanSettings` is set. */
    batterySaving?: BatterySavingMode;
    /** Full settings object. Takes precedence over all shorthand settings props. */
    sparkScanSettings?: SparkScanSettings | null;
    /** View-level settings (mini preview, animation, etc.). */
    sparkScanViewSettings?: SparkScanViewSettings | null;
    /** UI listener. */
    uiListener?: SparkScanViewUiListener;
    /**
     * Sound / vibration feedback applied to every scanned barcode. Shorthand for
     * a constant `feedbackDelegate` (which decides feedback per barcode and takes
     * precedence when both are set). Matches the simple `feedback` prop on the
     * other AIO views.
     */
    feedback?: SparkScanBarcodeFeedback;
    /**
     * Optional navigation object (e.g. React Navigation's `navigation` prop).
     * When provided, scanning is suspended while the screen is blurred or the app
     * is backgrounded, and resumed when it returns — unless `disabled` is set.
     */
    navigation?: _internal.ScanditNavigationProp;
    /**
     * Disable the mode. When set, scanning is kept off regardless of whether
     * automatic navigation-event handling and/or AppState handling is turned on.
     * You can also use the view handle methods `enable()` / `disable()` to
     * enable/disable once, but when using those this prop might go out of sync
     * with the actual state of the component. Setting this to `false` does not
     * guarantee that scanning is constantly running — automatic event handling
     * might still turn the mode on and off.
     */
    disabled?: boolean;
    /**
     * Disable the automatic enabling and disabling of the mode based on AppState.
     */
    appStateHandlingDisabled?: boolean;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}
/** Imperative methods exposed via `ref`. */
interface SparkScanViewMethods {
    showToast(text: string): Promise<void>;
    startScanning(): Promise<void>;
    pauseScanning(): Promise<void>;
    stopScanning(): Promise<void>;
    show(): Promise<void>;
    hide(): Promise<void>;
}
type SparkScanViewHandle = SparkScanViewMethods & _internal.EnableDisableHandle;
declare const SparkScanView: React.ForwardRefExoticComponent<SparkScanViewProps & React.RefAttributes<SparkScanViewHandle>>;

/**
 * Inherited pass-through props. `context`, `barcodeCount`, and the two
 * listeners are owned by the AIO component; everything else is forwarded as-is
 * to `BaseBarcodeCountView`.
 */
type InheritedBaseProps = Omit<Partial<BaseBarcodeCountViewProps>, 'context' | 'barcodeCount' | 'uiListener' | 'listener'>;
/**
 * UI-listener callbacks for the AIO `BarcodeCountView`. Identical to
 * `BarcodeCountViewUiListener` from the shared layer, minus the `view` argument
 * that consumers of the AIO API never need.
 */
interface BarcodeCountAioUiListener {
    didTapListButton?(): void;
    didTapExitButton?(): void;
    didTapSingleScanButton?(): void;
}
/**
 * View-listener callbacks for the AIO `BarcodeCountView`. Identical to
 * `BarcodeCountViewListener` from the shared layer, minus the `view` argument.
 */
interface BarcodeCountAioViewListener {
    brushForRecognizedBarcode?(trackedBarcode: TrackedBarcode): Brush | null;
    brushForRecognizedBarcodeNotInList?(trackedBarcode: TrackedBarcode): Brush | null;
    brushForAcceptedBarcode?(trackedBarcode: TrackedBarcode): Brush | null;
    brushForRejectedBarcode?(trackedBarcode: TrackedBarcode): Brush | null;
    didTapRecognizedBarcode?(trackedBarcode: TrackedBarcode): void;
    didTapFilteredBarcode?(filteredBarcode: TrackedBarcode): void;
    didTapRecognizedBarcodeNotInList?(trackedBarcode: TrackedBarcode): void;
    didTapAcceptedBarcode?(trackedBarcode: TrackedBarcode): void;
    didTapRejectedBarcode?(trackedBarcode: TrackedBarcode): void;
    didTapCluster?(cluster: Cluster): void;
    didCompleteCaptureList?(): void;
}
interface BarcodeCountViewAioProps extends InheritedBaseProps {
    /**
     * Optional navigation object (e.g. React Navigation's `navigation` prop).
     * When provided, scanning is suspended (mode + camera off) while the screen
     * is blurred or the app is backgrounded, and resumed when it returns —
     * unless `disabled` is set.
     */
    navigation?: _internal.ScanditNavigationProp;
    /**
     * Disable the mode. When set, scanning is kept off regardless of whether
     * automatic navigation-event handling and/or AppState handling is turned on.
     * You can also use the view handle methods `enable()` / `disable()` to
     * enable/disable once, but when using those this prop might go out of sync
     * with the actual state of the component. Setting this to `false` does not
     * guarantee that scanning is constantly running — automatic event handling
     * might still turn the mode on and off.
     */
    disabled?: boolean;
    /**
     * Disable the automatic enabling and disabling of the mode based on AppState.
     */
    appStateHandlingDisabled?: boolean;
    /**
     * Called on each native `BarcodeCountListener.didScan` event — fires only on
     * a recognition, independently of `didUpdateSession`. Receives
     * `session.recognizedBarcodes` as `barcodes` for convenience; the full
     * session is also passed.
     */
    didScan?: (barcodes: Barcode[], session: BarcodeCountSession, getFrameData: () => Promise<FrameData$1 | null>) => void | Promise<void>;
    /**
     * Called on each session update (native `BarcodeCountListener.onSessionUpdated`
     * event) — independent of `didScan`.
     */
    didUpdateSession?: (session: BarcodeCountSession, getFrameData: () => Promise<FrameData$1 | null>) => void | Promise<void>;
    /** Shorthand: enabled symbologies. Ignored when `barcodeCountSettings` is set. */
    symbologies?: Symbology[];
    /** Full settings object. Takes precedence over `symbologies`. */
    barcodeCountSettings?: BarcodeCountSettings | null;
    captureList?: BarcodeCountCaptureList | null;
    additionalBarcodes?: Barcode[] | null;
    uiListener?: BarcodeCountAioUiListener;
    listener?: BarcodeCountAioViewListener;
    /** Sound / vibration feedback on scan. Omit to use the default. */
    feedback?: BarcodeCountFeedback;
    /** Text/accessibility overrides for the in-view toolbar toggle buttons. */
    toolbarSettings?: BarcodeCountToolbarSettings;
    /**
     * Status provider used to drive status icons / status mode. Required when
     * `shouldShowStatusIconsOnScan` is `true` — without one, the engine still
     * enters the status-icon code path on every scan and aborts.
     */
    statusProvider?: BarcodeCountStatusProvider | null;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}
/** Imperative methods exposed via `ref`. */
interface BarcodeCountViewMethods {
    clearHighlights(): Promise<void>;
    setToolbarSettings(settings: BarcodeCountToolbarSettings): void;
    setStatusProvider(provider: BarcodeCountStatusProvider): void;
    setBrushForRecognizedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    setBrushForRecognizedBarcodeNotInList(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    setBrushForAcceptedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    setBrushForRejectedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    enableHardwareTrigger(hardwareTriggerKeyCode: number | null): Promise<void>;
}
type BarcodeCountViewHandle = BarcodeCountViewMethods & _internal.EnableDisableHandle;
declare const BarcodeCountView: React.ForwardRefExoticComponent<BarcodeCountViewAioProps & React.RefAttributes<BarcodeCountViewHandle>>;

/**
 * Basic-overlay configuration. The overlay is attached by default; pass
 * `{ enabled: false }` to skip it.
 */
interface BarcodeBatchBasicOverlayProps {
    enabled?: boolean;
    /** Overlay style (constructor arg). Defaults to `Frame`. Changing this recreates the overlay. */
    style?: BarcodeBatchBasicOverlayStyle | null;
    defaultBrush?: Brush | null;
    shouldShowScanAreaGuides?: boolean;
    /** Per-barcode brush. Overrides `defaultBrush` per call. */
    brushForTrackedBarcode?: (trackedBarcode: TrackedBarcode) => Brush | null;
    didTapTrackedBarcode?: (trackedBarcode: TrackedBarcode) => void;
}
/**
 * Advanced-overlay configuration. Renders custom views per tracked barcode.
 * The overlay is only attached when this prop is supplied — omit it entirely
 * if you don't need custom-view annotations. Pass `{ enabled: false }` to
 * keep the prop shape but disable the overlay (e.g. for runtime opt-out).
 */
interface BarcodeBatchAdvancedOverlayProps {
    /** Whether to attach the advanced overlay. Defaults to `true` (when the prop is supplied). */
    enabled?: boolean;
    /** Whether to render scan-area guides. */
    shouldShowScanAreaGuides?: boolean;
    /**
     * View to render over each tracked barcode. Return `null` to skip. Returning
     * a `Promise` is supported.
     */
    viewForTrackedBarcode?: (trackedBarcode: TrackedBarcode) => BarcodeBatchAdvancedOverlayView$1 | null | Promise<BarcodeBatchAdvancedOverlayView$1 | null>;
    /** Tap callback for the custom view. */
    didTapViewForTrackedBarcode?: (trackedBarcode: TrackedBarcode) => void;
    /** Per-barcode anchor. */
    anchorForTrackedBarcode?: (trackedBarcode: TrackedBarcode) => Anchor$1;
    /** Per-barcode offset. */
    offsetForTrackedBarcode?: (trackedBarcode: TrackedBarcode) => PointWithUnit$1;
}
/**
 * Note: unlike the other AIO views, there is no `feedback` prop — the
 * BarcodeBatch mode has no feedback API at the SDK level. Trigger your own
 * feedback from `didScan` if needed.
 */
interface BarcodeBatchViewProps extends ViewProps {
    /**
     * Optional navigation object (e.g. React Navigation's `navigation` prop).
     * When provided, scanning is suspended (mode + camera off) while the screen
     * is blurred or the app is backgrounded, and resumed when it returns —
     * unless `disabled` is set.
     */
    navigation?: _internal.ScanditNavigationProp;
    /**
     * Disable the mode. When set, scanning is kept off regardless of whether
     * automatic navigation-event handling and/or AppState handling is turned on.
     * You can also use the view handle methods `enable()` / `disable()` to
     * enable/disable once, but when using those this prop might go out of sync
     * with the actual state of the component. Setting this to `false` does not
     * guarantee that scanning is constantly running — automatic event handling
     * might still turn the mode on and off.
     */
    disabled?: boolean;
    /**
     * Disable the automatic enabling and disabling of the mode based on AppState.
     */
    appStateHandlingDisabled?: boolean;
    /** Symbologies to enable. Ignored when `barcodeBatchSettings` is set. */
    symbologies?: Symbology[];
    /** Full BarcodeBatch settings object. Takes precedence over `symbologies`. */
    barcodeBatchSettings?: BarcodeBatchSettings | null;
    /**
     * Convenience callback fired on each session update with all newly-added
     * tracked barcodes (`session.addedTrackedBarcodes`).
     *
     * Derived from the same native `BarcodeBatchListener.didUpdateSession` event
     * as `didUpdateSession`: when both are set, `didUpdateSession` completes first,
     * then `didScan` fires (skipped when nothing was added). `getFrameData()`
     * stays valid across both.
     */
    didScan?: (barcodes: TrackedBarcode[], session: BarcodeBatchSession, getFrameData: () => Promise<FrameData$1>) => void | Promise<void>;
    /** Fires on every session update, before `didScan` for the same update. */
    didUpdateSession?: (session: BarcodeBatchSession, getFrameData: () => Promise<FrameData$1>) => void | Promise<void>;
    /**
     * Basic overlay configuration. Omit the prop (or pass `undefined`) to use
     * defaults. Pass `{ enabled: false }` to skip the overlay.
     */
    basicOverlay?: BarcodeBatchBasicOverlayProps;
    /**
     * Advanced overlay configuration. Omit the prop entirely to skip the overlay;
     * pass any object (even `{}`) to opt in to custom-view annotations.
     */
    advancedOverlay?: BarcodeBatchAdvancedOverlayProps;
}
/** Imperative methods scoped to the basic overlay. Present only when `basicOverlay.enabled !== false`. */
interface BarcodeBatchBasicOverlayHandle {
    /** Override the brush for a specific tracked barcode. */
    setBrushForTrackedBarcode(brush: Brush | null, trackedBarcode: TrackedBarcode): Promise<void>;
    /** Clear all per-barcode brush overrides set via `setBrushForTrackedBarcode`. */
    clearTrackedBarcodeBrushes(): Promise<void>;
}
/** Imperative methods scoped to the advanced overlay. Present only when the `advancedOverlay` prop is supplied and enabled. */
interface BarcodeBatchAdvancedOverlayHandle {
    /** Set the view for a tracked barcode. */
    setViewForTrackedBarcode(view: BarcodeBatchAdvancedOverlayView$1 | Promise<BarcodeBatchAdvancedOverlayView$1>, trackedBarcode: TrackedBarcode): Promise<void>;
    /** Set the anchor for a tracked barcode. */
    setAnchorForTrackedBarcode(anchor: Anchor$1, trackedBarcode: TrackedBarcode): Promise<void>;
    /** Set the offset for a tracked barcode. */
    setOffsetForTrackedBarcode(offset: PointWithUnit$1, trackedBarcode: TrackedBarcode): Promise<void>;
    /** Clear all per-barcode views. */
    clearTrackedBarcodeViews(): Promise<void>;
    /** Update the recorded size of a tracked-barcode view (after layout). */
    updateSizeOfTrackedBarcodeView(trackedBarcodeIdentifier: number, width: number, height: number): Promise<void>;
}
/**
 * Imperative methods exposed via `ref`. Overlay-scoped methods live under
 * `basicOverlay` / `advancedOverlay` namespaces that are only present when
 * the corresponding overlay is configured + enabled — so consumers can't call
 * a method that has nothing to act on.
 */
interface BarcodeBatchViewMethods {
    /** Reset the mode's tracking session. */
    reset(): Promise<void>;
    /** Basic overlay methods (omitted when `basicOverlay.enabled === false`). */
    basicOverlay?: BarcodeBatchBasicOverlayHandle;
    /** Advanced overlay methods (omitted when `advancedOverlay` is not supplied or `enabled === false`). */
    advancedOverlay?: BarcodeBatchAdvancedOverlayHandle;
}
type BarcodeBatchViewHandle = BarcodeBatchViewMethods & _internal.EnableDisableHandle;
declare const BarcodeBatchView: React.ForwardRefExoticComponent<BarcodeBatchViewProps & React.RefAttributes<BarcodeBatchViewHandle>>;

interface BarcodeArViewProps {
    symbologies?: Symbology[];
    settings?: BarcodeArSettings | null;
    viewSettings?: BarcodeArViewSettings | null;
    cameraSettings?: CameraSettings$1 | null;
    /**
     * Convenience callback fired with the barcodes newly added to the session
     * (`session.addedTrackedBarcodes`) on a session update.
     *
     * Derived from the same native `BarcodeArListener.didUpdateSession` event as
     * `didUpdateSession`: when both are set, `didUpdateSession` completes first,
     * then `didScan` fires (skipped when nothing was added). `getFrameData()`
     * stays valid across both.
     */
    didScan?: (barcodes: TrackedBarcode[], session: BarcodeArSession, getFrameData: () => Promise<FrameData$1>) => void | Promise<void>;
    /** Fires on every session update, before `didScan` for the same update. */
    didUpdateSession?: (session: BarcodeArSession, getFrameData: () => Promise<FrameData$1>) => void | Promise<void>;
    highlightProvider?: BarcodeArHighlightProvider | null;
    annotationProvider?: BarcodeArAnnotationProvider | null;
    uiListener?: BarcodeArViewUiListener | null;
    barcodeFilter?: BarcodeArFilter | null;
    feedback?: BarcodeArFeedback;
    shouldShowTorchControl?: boolean;
    torchControlPosition?: Anchor;
    shouldShowZoomControl?: boolean;
    zoomControlPosition?: Anchor;
    shouldShowCameraSwitchControl?: boolean;
    cameraSwitchControlPosition?: Anchor;
    shouldShowMacroModeControl?: boolean;
    macroModeControlPosition?: Anchor;
    /**
     * Optional navigation object (e.g. React Navigation's `navigation` prop).
     * When provided, scanning is suspended while the screen is blurred or the app
     * is backgrounded, and resumed when it returns — unless `disabled` is set.
     */
    navigation?: _internal.ScanditNavigationProp;
    /**
     * Disable the mode. When set, scanning is kept off regardless of whether
     * automatic navigation-event handling and/or AppState handling is turned on.
     * You can also use the view handle methods `enable()` / `disable()` to
     * enable/disable once, but when using those this prop might go out of sync
     * with the actual state of the component. Setting this to `false` does not
     * guarantee that scanning is constantly running — automatic event handling
     * might still turn the mode on and off.
     */
    disabled?: boolean;
    /**
     * Disable the automatic enabling and disabling of the mode based on AppState.
     */
    appStateHandlingDisabled?: boolean;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}
/** Imperative methods exposed via `ref`. */
interface BarcodeArViewMethods {
    start(): Promise<void>;
    stop(): Promise<void>;
    pause(): Promise<void>;
    reset(): Promise<void>;
}
type BarcodeArViewHandle = BarcodeArViewMethods & _internal.EnableDisableHandle;
declare const BarcodeArView: React.ForwardRefExoticComponent<BarcodeArViewProps & React.RefAttributes<BarcodeArViewHandle>>;












declare const internal_d_BarcodeArDefaults: typeof BarcodeArDefaults;
declare const internal_d_BarcodeArView: typeof BarcodeArView;
type internal_d_BarcodeArViewHandle = BarcodeArViewHandle;
declare const internal_d_BarcodeBatchDefaults: typeof BarcodeBatchDefaults;
declare const internal_d_BarcodeBatchView: typeof BarcodeBatchView;
type internal_d_BarcodeCountAioUiListener = BarcodeCountAioUiListener;
type internal_d_BarcodeCountAioViewListener = BarcodeCountAioViewListener;
declare const internal_d_BarcodeCountDefaults: typeof BarcodeCountDefaults;
declare const internal_d_BarcodeCountView: typeof BarcodeCountView;
type internal_d_BarcodeCountViewHandle = BarcodeCountViewHandle;
declare const internal_d_BarcodeCountViewSettingsDefaults: typeof BarcodeCountViewSettingsDefaults;
declare const internal_d_SparkScanView: typeof SparkScanView;
type internal_d_SparkScanViewHandle = SparkScanViewHandle;
type internal_d_SparkScanViewUiListener = SparkScanViewUiListener;
declare const internal_d_getBarcodeArDefaults: typeof getBarcodeArDefaults;
declare const internal_d_getBarcodeBatchDefaults: typeof getBarcodeBatchDefaults;
declare const internal_d_getBarcodeCountDefaults: typeof getBarcodeCountDefaults;
declare namespace internal_d {
  export { internal_d_BarcodeArDefaults as BarcodeArDefaults, internal_d_BarcodeArView as BarcodeArView, internal_d_BarcodeBatchDefaults as BarcodeBatchDefaults, internal_d_BarcodeBatchView as BarcodeBatchView, internal_d_BarcodeCountDefaults as BarcodeCountDefaults, internal_d_BarcodeCountView as BarcodeCountView, internal_d_BarcodeCountViewSettingsDefaults as BarcodeCountViewSettingsDefaults, internal_d_SparkScanView as SparkScanView, internal_d_getBarcodeArDefaults as getBarcodeArDefaults, internal_d_getBarcodeBatchDefaults as getBarcodeBatchDefaults, internal_d_getBarcodeCountDefaults as getBarcodeCountDefaults };
  export type { internal_d_BarcodeArViewHandle as BarcodeArViewHandle, internal_d_BarcodeCountAioUiListener as BarcodeCountAioUiListener, internal_d_BarcodeCountAioViewListener as BarcodeCountAioViewListener, internal_d_BarcodeCountViewHandle as BarcodeCountViewHandle, internal_d_SparkScanViewHandle as SparkScanViewHandle, internal_d_SparkScanViewUiListener as SparkScanViewUiListener };
}



export { BarcodeArCustomAnnotation, BarcodeArCustomHighlight, BarcodeArView$1 as BarcodeArView, BarcodeBatchAdvancedOverlay, BarcodeBatchAdvancedOverlayView, BarcodeBatchView$1 as BarcodeBatchView, BarcodeCaptureView, BarcodeCountView$1 as BarcodeCountView, BarcodeCountViewStyle, BarcodeFindView, BarcodePickView, BarcodeSelectionView, SparkScanView$1 as SparkScanView, internal_d as _internal };
export type { BarcodeArCustomAnnotationConfig, BarcodeArCustomHighlightConfig, BarcodeBatchAdvancedOverlayListener, BarcodeCaptureBasicOverlayProps, BarcodeCaptureViewHandle, SparkScanViewUiListener$1 as SparkScanViewUiListener };
