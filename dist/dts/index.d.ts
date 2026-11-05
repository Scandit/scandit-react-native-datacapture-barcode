import { BarcodeBatchBasicOverlayStyle, TrackedBarcode, BarcodeBatchAdvancedOverlayView as BarcodeBatchAdvancedOverlayView$1, Symbology, BarcodeBatchSettings, BarcodeBatchSession, BarcodeBatchAdvancedOverlayListener as BarcodeBatchAdvancedOverlayListener$1, BarcodeBatch, Barcode, BarcodeCaptureSession, CompositeType, BatterySavingMode, ArucoDictionary, BarcodeCaptureSettings, BarcodeCaptureFeedback, AdaptiveRecognitionServiceListener, BarcodeArHighlight, BarcodeArAnnotationTrigger, BarcodeArAnnotation, BarcodeAr, BarcodeArViewSettings, BarcodeArViewUiListener, BarcodeArAnnotationProvider, BarcodeArHighlightProvider, BarcodeArSettings, BarcodeArSession, BarcodeArFilter, BarcodeArFeedback, SparkScanViewState, SparkScanScanningMode, SparkScanFeedbackDelegate, BaseSparkScanViewProps, SparkScanSession, ScanItemDefinition, SparkScanSettings, SparkScanViewSettings, SparkScanBarcodeFeedback, BarcodeCountIcon, BarcodeCountViewUiListener, BarcodeCountViewListener, BarcodeFilterHighlightSettings, BarcodeCountNotInListActionSettings, BarcodeCountToolbarSettings, BarcodeCountStatusProvider, BaseBarcodeCountViewProps, BarcodeCountSessionSnapshot, Cluster, BarcodeCountSession, BarcodeCountSettings, BarcodeCountCaptureList, BarcodeCountFeedback, BarcodeCountMappingFlowSettings, BarcodePickViewUiListener, BarcodePickViewListener, BarcodePickActionListener, BarcodePick, BarcodePickViewSettings, BarcodeFindViewUiListener, BarcodeFind, BarcodeFindViewSettings, BarcodeSelectionSettings, BarcodeSelectionBrushProvider, BarcodeSelectionBasicOverlayStyle, BarcodeSelectionFeedback, BarcodeSelection, BarcodeSelectionSession, getBarcodeArDefaults, getBarcodeBatchDefaults, getBarcodeCountDefaults } from './barcode';
import type { BarcodeCountDefaults, BarcodeCountViewSettingsDefaults, BarcodeArDefaults, BarcodeBatchDefaults } from './barcode';
export { AdaptiveRecognitionErrorReason, AdaptiveRecognitionFrameMetadata, AdaptiveRecognitionServiceListener, ArucoDictionary, ArucoDictionaryPreset, ArucoMarker, AztecBarcodeGeneratorBuilder, Barcode, BarcodeAr, BarcodeArAnnotation, BarcodeArAnnotationProvider, BarcodeArAnnotationTrigger, BarcodeArCircleHighlight, BarcodeArCircleHighlightPreset, BarcodeArFeedback, BarcodeArFilter, BarcodeArHighlight, BarcodeArHighlightProvider, BarcodeArInfoAnnotation, BarcodeArInfoAnnotationAnchor, BarcodeArInfoAnnotationBodyComponent, BarcodeArInfoAnnotationFooter, BarcodeArInfoAnnotationHeader, BarcodeArInfoAnnotationListener, BarcodeArInfoAnnotationWidthPreset, BarcodeArListener, BarcodeArPopoverAnnotation, BarcodeArPopoverAnnotationAnchor, BarcodeArPopoverAnnotationButton, BarcodeArPopoverAnnotationListener, BarcodeArRectangleHighlight, BarcodeArResponsiveAnnotation, BarcodeArSession, BarcodeArSettings, BarcodeArStatusIconAnnotation, BarcodeArStatusIconAnnotationAnchor, BarcodeArViewSettings, BarcodeArViewUiListener, BarcodeBatch, BarcodeBatchBasicOverlay, BarcodeBatchBasicOverlayListener, BarcodeBatchBasicOverlayStyle, BarcodeBatchLicenseInfo, BarcodeBatchListener, BarcodeBatchSession, BarcodeBatchSettings, BarcodeCapture, BarcodeCaptureFeedback, BarcodeCaptureLicenseInfo, BarcodeCaptureListener, BarcodeCaptureOverlay, BarcodeCaptureSession, BarcodeCaptureSettings, BarcodeCount, BarcodeCountCaptureList, BarcodeCountCaptureListListener, BarcodeCountCaptureListSession, BarcodeCountFeedback, BarcodeCountIcon, BarcodeCountListener, BarcodeCountMappingFlowSettings, BarcodeCountNotInListActionSettings, BarcodeCountSession, BarcodeCountSessionSnapshot, BarcodeCountSettings, BarcodeCountStatus, BarcodeCountStatusItem, BarcodeCountStatusProvider, BarcodeCountStatusProviderCallback, BarcodeCountStatusResult, BarcodeCountStatusResultAbort, BarcodeCountStatusResultError, BarcodeCountStatusResultSuccess, BarcodeCountToolbarSettings, BarcodeCountViewListener, BarcodeCountViewUiListener, BarcodeDataTransformer, BarcodeDefinition, BarcodeDefinitionBuilder, BarcodeFilterHighlightSettings, BarcodeFilterHighlightSettingsBrush, BarcodeFilterHighlightType, BarcodeFilterSettings, BarcodeFind, BarcodeFindFeedback, BarcodeFindItem, BarcodeFindItemContent, BarcodeFindItemSearchOptions, BarcodeFindListener, BarcodeFindSession, BarcodeFindSettings, BarcodeFindTransformer, BarcodeFindViewProps, BarcodeFindViewSettings, BarcodeFindViewUiListener, BarcodeGenerator, BarcodeGeneratorBuilder, BarcodeIdentifier, BarcodeInfo, BarcodePick, BarcodePickAction, BarcodePickActionCallback, BarcodePickActionListener, BarcodePickAsyncMapperProductProvider, BarcodePickAsyncMapperProductProviderCallback, BarcodePickListener, BarcodePickProduct, BarcodePickProductProvider, BarcodePickProductProviderCallback, BarcodePickProductProviderCallbackItem, BarcodePickScanningListener, BarcodePickScanningSession, BarcodePickSession, BarcodePickSettings, BarcodePickState, BarcodePickStatusIconSettings, BarcodePickStatusIconStyle, BarcodePickViewEvents, BarcodePickViewHighlightStyle, BarcodePickViewHighlightStyleAsyncProvider, BarcodePickViewHighlightStyleCustomView, BarcodePickViewHighlightStyleCustomViewProvider, BarcodePickViewHighlightStyleCustomViewResponse, BarcodePickViewHighlightStyleRequest, BarcodePickViewHighlightStyleResponse, BarcodePickViewHighlightStyleResponseBuilder, BarcodePickViewListener, BarcodePickViewSettings, BarcodePickViewUiListener, BarcodeSelection, BarcodeSelectionAimerBehavior, BarcodeSelectionAimerSelection, BarcodeSelectionAutoSelectionStrategy, BarcodeSelectionBasicOverlay, BarcodeSelectionBasicOverlayStyle, BarcodeSelectionBrushProvider, BarcodeSelectionFeedback, BarcodeSelectionFreezeBehavior, BarcodeSelectionLicenseInfo, BarcodeSelectionListener, BarcodeSelectionManualSelectionStrategy, BarcodeSelectionSession, BarcodeSelectionSettings, BarcodeSelectionStrategy, BarcodeSelectionTapBehavior, BarcodeSelectionTapSelection, BarcodeSelectionType, BarcodeSpatialGrid, BatterySavingMode, CapturePreset, Checksum, Cluster, Code128BarcodeGeneratorBuilder, Code39BarcodeGeneratorBuilder, CompositeFlag, CompositeType, CompositeTypeDescription, DataMatrixBarcodeGeneratorBuilder, Dot, DotWithIcons, Ean13BarcodeGeneratorBuilder, Ean13UpcaClassification, EncodingRange, InterleavedTwoOfFiveBarcodeGeneratorBuilder, LocalizedOnlyBarcode, Pdf417BarcodeGeneratorBuilder, Pdf417CompactionMode, Pdf417Dimensions, QrCodeBarcodeGeneratorBuilder, QrCodeErrorCorrectionLevel, Range, Rectangular, RectangularWithIcons, ScanComponentBarcodePreset, ScanComponentDefinition, ScanComponentTextSemanticType, ScanItemDefinition, ScanItemIdentifier, ScannedBarcode, ScannedComponent, ScannedComponentIdentifier, ScannedItem, ScannedItemIdentifier, ScannedText, SparkScan, SparkScanBarcodeErrorFeedback, SparkScanBarcodeFeedback, SparkScanBarcodeSuccessFeedback, SparkScanFeedbackDelegate, SparkScanLicenseInfo, SparkScanListener, SparkScanMiniPreviewSize, SparkScanPreviewBehavior, SparkScanScanningBehavior, SparkScanScanningMode, SparkScanScanningModeDefault, SparkScanScanningModeTarget, SparkScanSession, SparkScanSettings, SparkScanToastSettings, SparkScanViewSettings, SparkScanViewState, StructuredAppendData, Symbology, SymbologyDescription, SymbologySettings, TargetBarcode, TextDefinition, TextDefinitionBuilder, TextIdentifier, TrackedBarcode, TrackedObject, UpcaBarcodeGeneratorBuilder } from './barcode';
import React from 'react';
import { ReactElement } from 'react';
import type { ReactNode } from 'react';
import { StyleProp, ViewStyle, ViewProps, LayoutChangeEvent } from 'react-native';
import { Brush, Anchor, PointWithUnit, Viewfinder, TorchSwitchControl, ZoomSwitchControl, Point, Quadrilateral, Control, DataCaptureContext as DataCaptureContext$1, CameraSettings as CameraSettings$1, FrameSourceState as FrameSourceState$1, CameraPosition, TorchState, FrameData as FrameData$1 } from 'scandit-react-native-datacapture-core';
import type { ScanditNavigationProp } from 'scandit-react-native-datacapture-core';
export { ScanditProvider, useCameraPermission, useIsForeground } from 'scandit-react-native-datacapture-core';
export type { ScanditProviderProps } from 'scandit-react-native-datacapture-core';
import { FrameData, DataCaptureOverlay, Anchor as Anchor$1, PointWithUnit as PointWithUnit$1, LocationSelection, ScanIntention, Observable, DataCaptureContext, CameraSettings, LogoStyle, ZoomSwitchOrientation, Brush as Brush$1, Color, FrameSourceState } from 'scandit-react-native-datacapture-core/dist/dts/core';
import { NavigationProp, ParamListBase } from '@react-navigation/native';



/**
 * Configuration for the {@link BarcodeBatchBasicOverlay} that {@link BarcodeBatchAioView} attaches by default, passed through {@link BarcodeBatchAioViewProps.basicOverlay}. Every member is optional. The callback props correspond to the {@link BarcodeBatchBasicOverlayListener} methods, without the `overlay` argument.
 *
 * @since 8.7.0
 */
interface BarcodeBatchAioBasicOverlayProps {
    /**
     * Whether to attach the basic overlay at all. Defaults to *true*; pass *false* to render the camera preview without it.
     *
     * @since 8.7.0
     */
    enabled?: boolean;
    /**
     * The overlay style. Defaults to `Frame`.
     *
     * @since 8.7.0
     */
    style?: BarcodeBatchBasicOverlayStyle | null;
    /**
     * Default brush applied to every tracked barcode when {@link BarcodeBatchAioBasicOverlayProps.brushForTrackedBarcode} is not supplied. Omitting it, or passing *null*, keeps the overlay’s built-in default brush. To hide a tracked barcode, return *null* from {@link BarcodeBatchAioBasicOverlayProps.brushForTrackedBarcode} or pass *null* to {@link BarcodeBatchAioBasicOverlayHandle.setBrushForTrackedBarcode}.
     *
     * @since 8.7.0
     */
    defaultBrush?: Brush | null;
    /**
     * Whether the overlay renders scan-area guides. Defaults to *false*. Useful during development to check that the {@link DataCaptureView.scanAreaMargins|margins} of the {@link DataCaptureView} are set correctly; not intended for production.
     *
     * @since 8.7.0
     */
    shouldShowScanAreaGuides?: boolean;
    /**
     * Returns the brush to draw for a newly tracked barcode, or *null* to draw nothing — in which case tapping the barcode has no effect and {@link BarcodeBatchAioBasicOverlayProps.didTapTrackedBarcode} is not called. Called from the rendering thread.
     *
     * @since 8.7.0
     */
    brushForTrackedBarcode?(trackedBarcode: TrackedBarcode): Brush | null;
    /**
     * Called when the user taps a tracked barcode. Called from the main thread.
     *
     * @since 8.7.0
     */
    didTapTrackedBarcode?(trackedBarcode: TrackedBarcode): void;
}
/**
 * Configuration for the {@link BarcodeBatchAdvancedOverlay}, which renders application-supplied views per tracked barcode, passed through {@link BarcodeBatchAioViewProps.advancedOverlay}. The overlay is attached only when this prop is supplied; pass `{ enabled: false }` to keep the prop shape while disabling the overlay at runtime. The callback props correspond to the {@link BarcodeBatchAdvancedOverlayListener} methods, without the `overlay` argument.
 *
 * @since 8.7.0
 */
interface BarcodeBatchAioAdvancedOverlayProps {
    /**
     * Whether to attach the advanced overlay. Defaults to *true* when the prop is supplied.
     *
     * @since 8.7.0
     */
    enabled?: boolean;
    /**
     * Whether the overlay renders scan-area guides. Defaults to *false*. Useful during development to visualize the active scan area; not intended for production.
     *
     * @since 8.7.0
     */
    shouldShowScanAreaGuides?: boolean;
    /**
     * Returns the view to draw for a tracked barcode, or *null* to draw nothing. Called before {@link BarcodeBatchAioAdvancedOverlayProps.anchorForTrackedBarcode} and {@link BarcodeBatchAioAdvancedOverlayProps.offsetForTrackedBarcode}, and only for newly tracked barcodes that have no view yet; a view set through {@link BarcodeBatchAioAdvancedOverlayHandle.setViewForTrackedBarcode} takes precedence.
     *
     * @since 8.7.0
     */
    viewForTrackedBarcode?(trackedBarcode: TrackedBarcode): BarcodeBatchAdvancedOverlayView$1 | null | Promise<BarcodeBatchAdvancedOverlayView$1 | null>;
    /**
     * Called when the user taps the view drawn for a tracked barcode.
     *
     * @since 8.7.0
     */
    didTapViewForTrackedBarcode?(trackedBarcode: TrackedBarcode): void;
    /**
     * Returns the anchor point of the view drawn for a tracked barcode. Called after {@link BarcodeBatchAioAdvancedOverlayProps.viewForTrackedBarcode} and before {@link BarcodeBatchAioAdvancedOverlayProps.offsetForTrackedBarcode}, and only for newly tracked barcodes that have no anchor yet; an anchor set through {@link BarcodeBatchAioAdvancedOverlayHandle.setAnchorForTrackedBarcode} takes precedence.
     *
     * @since 8.7.0
     */
    anchorForTrackedBarcode?(trackedBarcode: TrackedBarcode): Anchor;
    /**
     * Returns the offset applied to the view drawn for a tracked barcode, relative to its anchor point. Called after {@link BarcodeBatchAioAdvancedOverlayProps.viewForTrackedBarcode} and {@link BarcodeBatchAioAdvancedOverlayProps.anchorForTrackedBarcode}, and only for newly tracked barcodes that have no offset yet; an offset set through {@link BarcodeBatchAioAdvancedOverlayHandle.setOffsetForTrackedBarcode} takes precedence.
     *
     * @since 8.7.0
     */
    offsetForTrackedBarcode?(trackedBarcode: TrackedBarcode): PointWithUnit;
}
/**
 * Configuration for {@link BarcodeBatchAioView}.
 *
 * **A settings source is required:** pass either {@link BarcodeBatchAioViewProps.symbologies} or {@link BarcodeBatchAioViewProps.barcodeBatchSettings}. Both are optional on this interface, but {@link BarcodeBatchAioView} requires one of them, so rendering the component with neither is a compile error. Supplying both is allowed, and {@link BarcodeBatchAioViewProps.barcodeBatchSettings} takes precedence. Every other prop is optional; the basic overlay is attached by default.
 *
 * @since 8.7.0
 */
interface BarcodeBatchAioViewProps {
    /**
     * Style applied to the view, defaulting to `{ flex: 1 }`. This is the only React Native `View` prop the component forwards — it renders its own {@link DataCaptureView} and passes nothing else through.
     *
     * @since 8.7.0
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Navigation object for the screen the component is rendered on, for example React Navigation’s `navigation` prop (typed as {@link ScanditNavigationProp}). When it is provided, scanning is suspended — the mode is disabled and the camera turned off — while the screen is blurred or the application is backgrounded, and resumed when the screen regains focus. Ignored while {@link BarcodeBatchAioViewProps.disabled} is set.
     *
     * @since 8.7.0
     */
    navigation?: ScanditNavigationProp;
    /**
     * Set to *true* to keep scanning off. Leaving it *false* does not keep scanning on — navigation and app-state handling still turn the mode on and off on their own.
     *
     * {@link BarcodeBatchAioViewHandle.enable} and {@link BarcodeBatchAioViewHandle.disable} change the same state directly. If you call those, this prop no longer reflects whether the component is actually scanning.
     *
     * @since 8.7.0
     */
    disabled?: boolean;
    /**
     * Turns off the automatic enabling and disabling of the mode in response to the application moving between foreground and background.
     *
     * @since 8.7.0
     */
    appStateHandlingDisabled?: boolean;
    /**
     * Symbologies to enable. Shorthand for {@link BarcodeBatchSettings.enabledSymbologies}; ignored when {@link BarcodeBatchAioViewProps.barcodeBatchSettings} is set.
     *
     * @since 8.7.0
     */
    symbologies?: Symbology[];
    /**
     * The settings applied to the underlying mode, as a complete {@link BarcodeBatchSettings} object. Takes precedence over {@link BarcodeBatchAioViewProps.symbologies}; when both are given, the shorthand is ignored and a warning is logged.
     *
     * @since 8.7.0
     */
    barcodeBatchSettings?: BarcodeBatchSettings | null;
    /**
     * Called on each session update with every newly-added tracked barcode, taken from {@link BarcodeBatchSession.addedTrackedBarcodes}.
     *
     * Derived from the same native BarcodeBatchListener.didUpdateSession() event as {@link BarcodeBatchAioViewProps.didUpdateSession}. When both are set, `didUpdateSession` completes first and then `didScan` fires, skipped when nothing was added. `getFrameData()` resolves to the {@link FrameData} for the frame and stays valid across both.
     *
     * @since 8.7.0
     */
    didScan?(barcodes: TrackedBarcode[], session: BarcodeBatchSession, getFrameData: () => Promise<FrameData>): void | Promise<void>;
    /**
     * Called on every session update, before {@link BarcodeBatchAioViewProps.didScan} for the same update. Backed by the native BarcodeBatchListener.didUpdateSession() event.
     *
     * @since 8.7.0
     */
    didUpdateSession?(session: BarcodeBatchSession, getFrameData: () => Promise<FrameData>): void | Promise<void>;
    /**
     * Configuration for the basic overlay, described by {@link BarcodeBatchAioBasicOverlayProps}, which draws a brush over each tracked barcode. The overlay is attached by default, so omitting this prop yields the default overlay; pass `{ enabled: false }` to skip it entirely.
     *
     * @since 8.7.0
     */
    basicOverlay?: BarcodeBatchAioBasicOverlayProps;
    /**
     * Configuration for the advanced overlay, which renders a custom view over each tracked barcode. Omit the prop entirely to skip the overlay; pass any object — even `{}` — to opt in. See {@link BarcodeBatchAioAdvancedOverlayProps}.
     *
     * @since 8.7.0
     */
    advancedOverlay?: BarcodeBatchAioAdvancedOverlayProps;
}
type BarcodeBatchAioViewSettingsSource = {
    symbologies: Symbology[];
} | {
    barcodeBatchSettings: BarcodeBatchSettings;
};
type BarcodeBatchAioViewComponentProps = BarcodeBatchAioViewProps & BarcodeBatchAioViewSettingsSource;
/**
 * Imperative operations scoped to the basic overlay, reached through {@link BarcodeBatchAioViewHandle.basicOverlay}. Present only while the basic overlay is enabled.
 *
 * @since 8.7.0
 */
interface BarcodeBatchAioBasicOverlayHandle {
    /**
     * Overrides the brush used for a tracked barcode. Pass *null* to draw nothing, in which case tapping the barcode has no effect and {@link BarcodeBatchAioBasicOverlayProps.didTapTrackedBarcode} is not called. Thread-safe.
     *
     * @since 8.7.0
     */
    setBrushForTrackedBarcode(brush: Brush | null, trackedBarcode: TrackedBarcode): Promise<void>;
    /**
     * Clears every per-barcode brush override set through {@link BarcodeBatchAioBasicOverlayHandle.setBrushForTrackedBarcode}.
     *
     * @since 8.7.0
     */
    clearTrackedBarcodeBrushes(): Promise<void>;
}
/**
 * Imperative operations scoped to the advanced overlay, reached through {@link BarcodeBatchAioViewHandle.advancedOverlay}. Present only while the advanced overlay is supplied and enabled.
 *
 * @since 8.7.0
 */
interface BarcodeBatchAioAdvancedOverlayHandle {
    /**
     * Sets the view drawn for a tracked barcode, taking precedence over {@link BarcodeBatchAioAdvancedOverlayProps.viewForTrackedBarcode}; when set before that callback runs, the callback is not called. Pass *null* to remove the view from the overlay. Thread-safe.
     *
     * @since 8.7.0
     */
    setViewForTrackedBarcode(view: BarcodeBatchAdvancedOverlayView$1 | Promise<BarcodeBatchAdvancedOverlayView$1>, trackedBarcode: TrackedBarcode): Promise<void>;
    /**
     * Sets the anchor point of the view drawn for a tracked barcode, taking precedence over {@link BarcodeBatchAioAdvancedOverlayProps.anchorForTrackedBarcode}; when set before that callback runs, the callback is not called. Thread-safe.
     *
     * @since 8.7.0
     */
    setAnchorForTrackedBarcode(anchor: Anchor, trackedBarcode: TrackedBarcode): Promise<void>;
    /**
     * Sets the offset applied to the view drawn for a tracked barcode, taking precedence over {@link BarcodeBatchAioAdvancedOverlayProps.offsetForTrackedBarcode}; when set before that callback runs, the callback is not called. If the {@link MeasureUnit} of the offset is {@link MeasureUnit.Fraction}, the offset is relative to the view’s dimensions. Thread-safe.
     *
     * @since 8.7.0
     */
    setOffsetForTrackedBarcode(offset: PointWithUnit, trackedBarcode: TrackedBarcode): Promise<void>;
    /**
     * Removes every view currently drawn by the advanced overlay. Thread-safe.
     *
     * @since 8.7.0
     */
    clearTrackedBarcodeViews(): Promise<void>;
    /**
     * Changes the width and height of the view drawn for a tracked barcode.
     *
     * @since 8.7.0
     */
    updateSizeOfTrackedBarcodeView(trackedBarcodeIdentifier: number, width: number, height: number): Promise<void>;
}
/**
 * Imperative operations on a {@link BarcodeBatchAioView}, reached through a `ref` on the component.
 *
 * Overlay-scoped operations live under {@link BarcodeBatchAioViewHandle.basicOverlay} and {@link BarcodeBatchAioViewHandle.advancedOverlay}, each present only when its overlay is configured and enabled — so a method can never be called on an overlay that is not there.
 *
 * @since 8.7.0
 */
interface BarcodeBatchAioViewHandle {
    /**
     * Resets the mode’s tracking session, clearing every currently tracked barcode.
     *
     * @since 8.7.0
     */
    reset(): Promise<void>;
    /**
     * Operations on the basic overlay. Omitted when the basic overlay is disabled.
     *
     * @since 8.7.0
     */
    basicOverlay?: BarcodeBatchAioBasicOverlayHandle;
    /**
     * Operations on the advanced overlay. Omitted when the advanced overlay is not supplied or is disabled.
     *
     * @since 8.7.0
     */
    advancedOverlay?: BarcodeBatchAioAdvancedOverlayHandle;
    /**
     * Turns scanning on now: enables the mode and turns the camera on. Automatic navigation and application-state handling may subsequently turn it off again.
     *
     * @since 8.7.0
     */
    enable(): Promise<void>;
    /**
     * Turns scanning off now: disables the mode and turns the camera off.
     *
     * @since 8.7.0
     */
    disable(): Promise<void>;
}
/**
 * An all-in-one React component for MatrixScan (Barcode Batch). Rendering this single element replaces the manual assembly of a {@link DataCaptureContext}, a {@link BarcodeBatch} mode, a {@link DataCaptureView} and its overlays — the component owns all of them, along with its camera claim and its lifecycle.
 *
 * The component must be rendered inside a {@link ScanditProvider}, which supplies the {@link DataCaptureContext} and the shared camera. Scanning starts once the component is mounted and enabled, and stops when it unmounts.
 *
 * Configuration is passed through {@link BarcodeBatchAioViewProps}. To gain manual control over the component, attach a React `ref` typed as {@link BarcodeBatchAioViewHandle}.
 *
 * There is no `feedback` prop, because Barcode Batch has no feedback API at the SDK level. Feedback is triggered from {@link BarcodeBatchAioViewProps.didScan}.
 *
 * To build your first screen with the AIO components, refer to the [AIO components getting started](#) guide. For the classic API, refer to the [MatrixScan Get Started](https://docs.scandit.com/sdks/react-native/matrixscan/get-started) guide.
 *
 * @since 8.7.0
 */
declare const BarcodeBatchAioView: React.ForwardRefExoticComponent<BarcodeBatchAioViewComponentProps & React.RefAttributes<BarcodeBatchAioViewHandle>>;

/**
 * A view that can be shown for a {@link TrackedBarcode} through a {@link BarcodeBatchAdvancedOverlay}.
 *
 * @since 7.0.0
 */
declare class BarcodeBatchAdvancedOverlayView extends React.Component {
    /** @since 7.0.0 */
    static moduleName: string;
    get moduleName(): string;
}

/**
 * An overlay for {@link DataCaptureView} that allows anchoring a single user-provided View to each tracked barcode.The provided view is visible on the top of the camera preview as long as its tracked barcode is and for all this time retains its relative position to it. This is useful when an additional information should be provided to tracked barcodes in real time. For instance, a user may overlay the price of an item or its expiry date for each corresponding barcode.To display the views, this overlay must be attached to a {@link DataCaptureView}. This can be done by passing this overlay to {@link DataCaptureView.addOverlay}.A user of this class may configure what view is displayed for the given barcode and the relative position between the two by implementing {@link BarcodeBatchAdvancedOverlayListener} or by calling {@link BarcodeBatchAdvancedOverlay.setViewForTrackedBarcode}, {@link BarcodeBatchAdvancedOverlay.setAnchorForTrackedBarcode} or {@link BarcodeBatchAdvancedOverlay.setOffsetForTrackedBarcode}.
 *
 * For additional information about using this overlay, refer to [Adding AR Overlays](https://docs.scandit.com/sdks/react-native/matrixscan/advanced) .
 *
 * When using the new React Native architecture, on iOS, ensure that your React Native version is >= 0.79 and that your app delegate implements the ScanditReactNativeFactoryContainer protocol available in our React-Native core module. In case you have followed the [React Native upgrade guide](https://raw.githubusercontent.com/react-native-community/rn-diff-purge/release/0.79.2/RnDiffApp/ios/RnDiffApp/AppDelegate.swift), you should already have the required property implemented.
 *
 * @since 7.0.0
 */
declare class BarcodeBatchAdvancedOverlay implements DataCaptureOverlay {
    private baseBarcodeBatch;
    /** @since 7.0.0 */
    get listener(): BarcodeBatchAdvancedOverlayListener$1 | null;
    set listener(listener: BarcodeBatchAdvancedOverlayListener$1 | null);
    private get type();
    /**
     * Whether to show scan area guides on top of the preview. This property is useful during development to visualize the current scan areas on screen. It is not meant to be used for production. By default this property is *false*.
     *
     * @since 7.0.0
     */
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    private set view(value);
    private get view();
    /**
     * Constructs a new BarcodeBatchAdvancedOverlay. For the overlay to be displayed on screen, it must be added to a {@link DataCaptureView}.
     *
     * @since 7.6.0
     */
    constructor(mode: BarcodeBatch);
    /**
     * The method can be called to change the view drawn for the given tracked barcode. Setting the view to *null* will unset the view from the tracked barcode and will effectively remove it from the overlay. This method is thread-safe, it can be called from any thread. The view set via this method will take precedence over the one set via {@link BarcodeBatchAdvancedOverlayListener.viewForTrackedBarcode}: in case a view is set before {@link BarcodeBatchAdvancedOverlayListener.viewForTrackedBarcode} got called, no call to {@link BarcodeBatchAdvancedOverlayListener.viewForTrackedBarcode} will happen.
     *
     * @since 7.0.0
     */
    setViewForTrackedBarcode(view: BarcodeBatchAdvancedOverlayView$1, trackedBarcode: TrackedBarcode): Promise<void>;
    /**
     * The method can be called to change the anchor point for the view associated with the given tracked barcode. This method is thread-safe, it can be called from any thread. The anchor set via this method will take precedence over the one set via {@link BarcodeBatchAdvancedOverlayListener.anchorForTrackedBarcode}: in case a view is set before {@link BarcodeBatchAdvancedOverlayListener.anchorForTrackedBarcode} got called, no call to {@link BarcodeBatchAdvancedOverlayListener.anchorForTrackedBarcode} will happen.
     *
     * @since 7.0.0
     */
    setAnchorForTrackedBarcode(anchor: Anchor$1, trackedBarcode: TrackedBarcode): Promise<void>;
    /**
     * The method can be called to change the offset for the view associated with the given tracked barcode. This method is thread-safe, it can be called from any thread. The offset set via this method will take precedence over the one set via {@link BarcodeBatchAdvancedOverlayListener.offsetForTrackedBarcode}: in case a view is set before {@link BarcodeBatchAdvancedOverlayListener.offsetForTrackedBarcode} got called, no call to {@link BarcodeBatchAdvancedOverlayListener.offsetForTrackedBarcode} will happen. If the {@link MeasureUnit} of the offset is {@link MeasureUnit.Fraction}, the offset is calculated relative to view’s dimensions.
     *
     * @since 7.0.0
     */
    setOffsetForTrackedBarcode(offset: PointWithUnit$1, trackedBarcode: TrackedBarcode): Promise<void>;
    /**
     * Clears all the views for the currently tracked barcodes from this overlay. This method is thread-safe, it can be called from any thread.
     *
     * @since 7.0.0
     */
    clearTrackedBarcodeViews(): Promise<void>;
    /**
     * The method can be called to change the width and height of the existing tracked barcode view.
     *
     * @since 7.4.0
     */
    updateSizeOfTrackedBarcodeView(trackedBarcodeIdentifier: number, width: number, height: number): Promise<void>;
    toJSON(): object;
    private onViewIdChanged;
}

/** @since 7.0.0 */
interface BarcodeBatchAdvancedOverlayListener {
    /**
     * Callback method that can be used to define an action that should be performed when a view for a tracked barcode is tapped.
     *
     * @since 7.0.0
     */
    didTapViewForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): void;
    /**
     * View to be drawn corresponding to the given {@link TrackedBarcode}. This method will be called before {@link BarcodeBatchAdvancedOverlayListener.anchorForTrackedBarcode} and {@link BarcodeBatchAdvancedOverlayListener.offsetForTrackedBarcode}. Beware that this view can be overridden with {@link BarcodeBatchAdvancedOverlay.setViewForTrackedBarcode} method. This method will only be called for new tracked barcodes that do not have a view yet, e.g. a view set by a call to {@link BarcodeBatchAdvancedOverlay.setViewForTrackedBarcode}.
     *
     * Called from the main thread.
     *
     * @since 7.0.0
     */
    viewForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): BarcodeBatchAdvancedOverlayView | null;
    /**
     * Anchor point that should be used for the view corresponding to the given {@link TrackedBarcode}. This method will be called after {@link BarcodeBatchAdvancedOverlayListener.viewForTrackedBarcode} and before {@link BarcodeBatchAdvancedOverlayListener.offsetForTrackedBarcode}. Beware that this anchor can be overridden with {@link BarcodeBatchAdvancedOverlay.setAnchorForTrackedBarcode} method. This method will only be called for new tracked barcodes that do not have an anchor yet, e.g. an anchor set by a call to {@link BarcodeBatchAdvancedOverlay.setAnchorForTrackedBarcode}.
     *
     * Called from the main thread.
     *
     * @since 7.0.0
     */
    anchorForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): Anchor$1;
    /**
     * Offset to be set to the view corresponding to the given {@link TrackedBarcode}. The offset is relative to the anchor point of the tracked barcode. This method will be called after {@link BarcodeBatchAdvancedOverlayListener.viewForTrackedBarcode} and {@link BarcodeBatchAdvancedOverlayListener.anchorForTrackedBarcode}. Beware that this offset can be overridden with {@link BarcodeBatchAdvancedOverlay.setOffsetForTrackedBarcode} method. This method will only be called for new tracked barcodes that do not have an offset yet, e.g. an offset set by a call to {@link BarcodeBatchAdvancedOverlay.setOffsetForTrackedBarcode}.
     *
     * Called from the main thread.
     *
     * @since 7.0.0
     */
    offsetForTrackedBarcode?(overlay: BarcodeBatchAdvancedOverlay, trackedBarcode: TrackedBarcode): PointWithUnit$1;
}



/**
 * Configuration for the {@link BarcodeCaptureOverlay} that {@link BarcodeCaptureAioView} attaches by default, passed through {@link BarcodeCaptureAioViewProps.basicOverlay}. Every member is optional.
 *
 * @since 8.7.0
 */
interface BarcodeCaptureAioBasicOverlayProps {
    /**
     * Whether to attach the basic overlay at all. Defaults to *true*; pass *false* to render the camera preview without it.
     *
     * @since 8.7.0
     */
    enabled?: boolean;
    /**
     * Default brush applied to every recognized barcode. To turn off drawing of locations, use a brush with both a transparent fill and a transparent stroke color. Defaults to a brush with a transparent fill color, a “Scandit”-blue stroke color and a stroke width of 1.
     *
     * @since 8.7.0
     */
    defaultBrush?: Brush | null;
    /**
     * The viewfinder drawn by the basic overlay. Defaults to *null*, in which case no viewfinder is drawn.
     *
     * @since 8.7.0
     */
    viewfinder?: Viewfinder | null;
    /**
     * Whether the overlay renders scan-area guides. Defaults to *false*.
     *
     * @since 8.7.0
     */
    shouldShowScanAreaGuides?: boolean;
}
/**
 * Configuration for {@link BarcodeCaptureAioView}.
 *
 * **A settings source is required:** pass either {@link BarcodeCaptureAioViewProps.symbologies} or {@link BarcodeCaptureAioViewProps.barcodeCaptureSettings}. Both are optional on this interface, but {@link BarcodeCaptureAioView} requires one of them, so rendering the component with neither is a compile error. Supplying both is allowed, and {@link BarcodeCaptureAioViewProps.barcodeCaptureSettings} takes precedence. Every other prop is optional; the basic overlay is attached by default.
 *
 * @since 8.7.0
 */
interface BarcodeCaptureAioViewProps {
    /**
     * Style applied to the view, defaulting to `{ flex: 1 }`. This is the only React Native `View` prop the component forwards — it renders its own {@link DataCaptureView} and passes nothing else through.
     *
     * @since 8.7.0
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Called for each newly-recognized barcode.
     *
     * Return a promise to keep the frame alive while asynchronous work runs. `getFrameData()` resolves to the {@link FrameData} for the frame, and becomes invalid once the returned promise resolves. Synchronous handlers do not affect throughput.
     *
     * Backed by the native BarcodeCaptureListener.didScan() event, so it fires only on a recognition, independently of {@link BarcodeCaptureAioViewProps.didUpdateSession}.
     *
     * @since 8.7.0
     */
    didScan?(barcodes: Barcode[], session: BarcodeCaptureSession, getFrameData: () => Promise<FrameData>): void | Promise<void>;
    /**
     * Called on every session update — roughly once per processed frame — regardless of whether a barcode was recognized. Backed by the native BarcodeCaptureListener.didUpdateSession() event and independent of {@link BarcodeCaptureAioViewProps.didScan}.
     *
     * An `async` handler is awaited by the native pipeline, which keeps `getFrameData()` valid through the asynchronous work but can slow frame processing. Handlers that do not need frame data should stay synchronous.
     *
     * @since 8.7.0
     */
    didUpdateSession?(session: BarcodeCaptureSession, getFrameData: () => Promise<FrameData>): void | Promise<void>;
    /**
     * Symbologies to enable. Shorthand for {@link BarcodeCaptureSettings.enabledSymbologies}; ignored when {@link BarcodeCaptureAioViewProps.barcodeCaptureSettings} is set.
     *
     * @since 8.7.0
     */
    symbologies?: Symbology[];
    /**
     * Restricts the scan area within the camera frame. Shorthand for {@link BarcodeCaptureSettings.locationSelection}; ignored when {@link BarcodeCaptureAioViewProps.barcodeCaptureSettings} is set.
     *
     * @since 8.7.0
     */
    locationSelection?: LocationSelection | null;
    /**
     * Composite barcode types to enable, such as GS1 composites. Shorthand for {@link BarcodeCaptureSettings.enabledCompositeTypes}; ignored when {@link BarcodeCaptureAioViewProps.barcodeCaptureSettings} is set.
     *
     * @since 8.7.0
     */
    compositeTypes?: CompositeType[];
    /**
     * Battery saving mode. Shorthand for {@link BarcodeCaptureSettings.batterySaving}; ignored when {@link BarcodeCaptureAioViewProps.barcodeCaptureSettings} is set.
     *
     * @since 8.7.0
     */
    batterySaving?: BatterySavingMode;
    /**
     * Whether scanning is smart or manual. Shorthand for {@link BarcodeCaptureSettings.scanIntention}; ignored when {@link BarcodeCaptureAioViewProps.barcodeCaptureSettings} is set.
     *
     * @since 8.7.0
     */
    scanIntention?: ScanIntention;
    /**
     * Time interval in milliseconds during which duplicate barcodes are filtered out. Shorthand for {@link BarcodeCaptureSettings.codeDuplicateFilter}; ignored when {@link BarcodeCaptureAioViewProps.barcodeCaptureSettings} is set.
     *
     * @since 8.7.0
     */
    codeDuplicateFilter?: number;
    /**
     * The ArUco marker dictionary to use. Shorthand for the equivalent setting on {@link BarcodeCaptureSettings}; ignored when {@link BarcodeCaptureAioViewProps.barcodeCaptureSettings} is set.
     *
     * @since 8.7.0
     */
    arucoDictionary?: ArucoDictionary;
    /**
     * The settings applied to the underlying mode, as a complete {@link BarcodeCaptureSettings} object. Takes precedence over the shorthand settings props above; when both are given, the shorthand props are ignored.
     *
     * @since 8.7.0
     */
    barcodeCaptureSettings?: BarcodeCaptureSettings | null;
    /**
     * Navigation object for the screen the component is rendered on, for example React Navigation’s `navigation` prop (typed as {@link ScanditNavigationProp}). When it is provided, scanning is suspended — the mode is disabled and the camera turned off — while the screen is blurred or the application is backgrounded, and resumed when the screen regains focus. Ignored while {@link BarcodeCaptureAioViewProps.disabled} is set.
     *
     * @since 8.7.0
     */
    navigation?: ScanditNavigationProp;
    /**
     * Set to *true* to keep scanning off. Leaving it *false* does not keep scanning on — navigation and app-state handling still turn the mode on and off on their own.
     *
     * {@link BarcodeCaptureAioViewHandle.enable} and {@link BarcodeCaptureAioViewHandle.disable} change the same state directly. If you call those, this prop no longer reflects whether the component is actually scanning.
     *
     * @since 8.7.0
     */
    disabled?: boolean;
    /**
     * Turns off the automatic enabling and disabling of the mode in response to the application moving between foreground and background.
     *
     * @since 8.7.0
     */
    appStateHandlingDisabled?: boolean;
    /**
     * Configuration for the basic overlay, described by {@link BarcodeCaptureAioBasicOverlayProps}, which draws a brush over recognized barcodes and can render a viewfinder. The overlay is attached by default, so omitting this prop yields the default overlay; pass `{ enabled: false }` to skip it entirely.
     *
     * @since 8.7.0
     */
    basicOverlay?: BarcodeCaptureAioBasicOverlayProps;
    /**
     * A torch toggle rendered on the view.
     *
     * @since 8.7.0
     */
    torchSwitchControl?: TorchSwitchControl | null;
    /**
     * A zoom toggle rendered on the view.
     *
     * @since 8.7.0
     */
    zoomSwitchControl?: ZoomSwitchControl | null;
    /**
     * Sound and vibration feedback emitted on scan, as a {@link BarcodeCaptureFeedback}. Omit to use the SDK default, which enables both sound (a beep) and vibration.
     *
     * @since 8.7.0
     */
    feedback?: BarcodeCaptureFeedback;
}
type BarcodeCaptureAioViewSettingsSource = {
    symbologies: Symbology[];
} | {
    barcodeCaptureSettings: BarcodeCaptureSettings;
};
type BarcodeCaptureAioViewComponentProps = BarcodeCaptureAioViewProps & BarcodeCaptureAioViewSettingsSource;
/**
 * Imperative operations on a {@link BarcodeCaptureAioView}, reached through a `ref` on the component.
 *
 * @since 8.7.0
 */
interface BarcodeCaptureAioViewHandle {
    /**
     * Resets the barcode capture session, clearing the history of scanned codes. This affects duplicate filtering: calling {@link BarcodeCaptureAioViewHandle.reset} every frame has the same effect as setting {@link BarcodeCaptureSettings.codeDuplicateFilter} to 0. Only call it from inside a listener callback.
     *
     * @since 8.7.0
     */
    reset(): Promise<void>;
    /**
     * Converts a point in the coordinate system of the last visible frame to a coordinate in the view. Thread-safe.
     *
     * @since 8.7.0
     */
    viewPointForFramePoint(point: Point): Promise<Point>;
    /**
     * Converts a quadrilateral in the coordinate system of the last visible frame to coordinates in the view.
     *
     * @since 8.7.0
     */
    viewQuadrilateralForFrameQuadrilateral(quadrilateral: Quadrilateral): Promise<Quadrilateral>;
    /**
     * Adds a control to the view. When several controls are added, the order of the {@link BarcodeCaptureAioViewHandle.addControl} calls determines their layout. Has no effect if the control is already part of the view.
     *
     * @since 8.7.0
     */
    addControl(control: Control): Promise<void>;
    /**
     * Removes a control previously added with {@link BarcodeCaptureAioViewHandle.addControl}.
     *
     * @since 8.7.0
     */
    removeControl(control: Control): void;
    /**
     * Adds the listener to the barcode capture mode that this component owns. See {@link BarcodeCapture.addAdaptiveRecognitionServiceListener}.
     *
     * @since 8.7.0
     */
    addAdaptiveRecognitionServiceListener(listener: AdaptiveRecognitionServiceListener): void;
    /**
     * Removes a listener previously added with {@link BarcodeCaptureAioViewHandle.addAdaptiveRecognitionServiceListener}.
     *
     * @since 8.7.0
     */
    removeAdaptiveRecognitionServiceListener(listener: AdaptiveRecognitionServiceListener): void;
    /**
     * Turns scanning on now: enables the mode and turns the camera on. Automatic navigation and application-state handling may subsequently turn it off again.
     *
     * @since 8.7.0
     */
    enable(): Promise<void>;
    /**
     * Turns scanning off now: disables the mode and turns the camera off.
     *
     * @since 8.7.0
     */
    disable(): Promise<void>;
}
/**
 * An all-in-one React component for Barcode Capture. Rendering this single element replaces the manual assembly of a {@link DataCaptureContext}, a {@link BarcodeCapture} mode, a {@link DataCaptureView} and a {@link BarcodeCaptureOverlay} — the component owns all of them, along with its camera claim and its lifecycle.
 *
 * The component must be rendered inside a {@link ScanditProvider}, which supplies the {@link DataCaptureContext} and the shared camera. Scanning starts once the component is mounted and enabled, and stops when it unmounts.
 *
 * Configuration is passed through {@link BarcodeCaptureAioViewProps}. To gain manual control over the component, attach a React `ref` typed as {@link BarcodeCaptureAioViewHandle}.
 *
 * To build your first screen with the AIO components, refer to the [AIO components getting started](#) guide. For the classic API, refer to the [Barcode Capture Get Started](https://docs.scandit.com/sdks/react-native/barcode-capture/get-started) guide.
 *
 * @since 8.7.0
 */
declare const BarcodeCaptureAioView: React.ForwardRefExoticComponent<BarcodeCaptureAioViewComponentProps & React.RefAttributes<BarcodeCaptureAioViewHandle>>;

/**
 * Configuration object for BarcodeArCustomHighlight.
 *
 * @since 8.0.0
 */
interface BarcodeArCustomHighlightConfig {
    /**
     * Method that returns a React component to be used as a custom highlight.
     *
     * @since 8.0.0
     */
    renderHighlight: () => ReactElement;
}
/**
 * A custom highlight that can be used to attach your own component to a scanned barcode.
 *
 * @since 8.0.0
 */
declare class BarcodeArCustomHighlight extends Observable implements BarcodeArHighlight {
    /** @since 8.0.0 */
    renderHighlight: () => ReactElement;
    private _type;
    /**
     * Creates a new instance with the provided configuration.
     *
     * @since 8.0.0
     */
    constructor(config: BarcodeArCustomHighlightConfig);
}

/**
 * Configuration object for BarcodeArCustomAnnotation.
 *
 * @since 8.1.0
 */
interface BarcodeArCustomAnnotationConfig {
    /**
     * Method that returns a React component to be used as a custom annotation.
     *
     * @since 8.1.0
     */
    renderAnnotation: () => ReactElement;
    /**
     * Defaults to `BarcodeArAnnotationTrigger.HighlightTap`.
     *
     * The trigger that causes the annotation to be presented. The default is {@link BarcodeArAnnotationTrigger.HighlightTapAndBarcodeScan}.
     *
     * @since 8.1.0
     */
    annotationTrigger?: BarcodeArAnnotationTrigger;
    /**
     * Defaults to `Anchor.TopCenter`.
     *
     * Specifies the anchor point for the annotation. The default is {@link Anchor.TopCenter}
     *
     * @since 8.1.0
     */
    anchor?: Anchor$1;
}
/**
 * A custom annotation that can be used to attach your own component to a scanned barcode.
 *
 * @since 8.1.0
 */
declare class BarcodeArCustomAnnotation extends Observable implements BarcodeArAnnotation {
    annotationTrigger: BarcodeArAnnotationTrigger;
    anchor: Anchor$1;
    /**
     * Method that returns a React component to be used as a custom annotation.
     *
     * @since 8.1.0
     */
    renderAnnotation: () => ReactElement;
    private _type;
    /**
     * Creates a new instance with the provided configuration.
     *
     * @since 8.1.0
     */
    constructor(config: BarcodeArCustomAnnotationConfig);
}

type ShownCustomAnnotation = {
    barcode: Barcode;
    barcodeId: string;
    threshold?: number;
};

interface BarcodeArViewProps extends ViewProps {
    context: DataCaptureContext;
    barcodeAr: BarcodeAr;
    settings?: BarcodeArViewSettings;
    cameraSettings?: CameraSettings;
    annotationProvider?: BarcodeArAnnotationProvider;
    highlightProvider?: BarcodeArHighlightProvider;
    uiListener?: BarcodeArViewUiListener;
    style?: StyleProp<ViewStyle>;
    navigation?: NavigationProp<ParamListBase>;
}
/**
 * Barcode AR comes with a ready-to-use UI that allows highlighting barcodes and displaying additional information over them. The BarcodeArView integrates with any app in just a few lines of code.
 *
 * @since 7.1.0
 */
declare class BarcodeArView extends React.Component<BarcodeArViewProps> {
    state: {
        shownHighlights: Record<string, Barcode>;
        shownAnnotations: Record<string, ShownCustomAnnotation>;
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
    /**
     * Creates a new BarcodeArView with the provided mode, viewSettings and cameraSettings.
     *
     * @since 7.1.0
     */
    static forMode(dataCaptureContext: DataCaptureContext, barcodeAr: BarcodeAr): BarcodeArView;
    /**
     * Creates a new BarcodeArView with the provided mode, viewSettings and default camera settings from {@link BarcodeAr.createRecommendedCameraSettings}. This is equivalent of calling forMode() with *null* cameraSettings.
     *
     * @since 7.1.0
     */
    static forModeWithViewSettings(dataCaptureContext: DataCaptureContext, barcodeAr: BarcodeAr, viewSettings: BarcodeArViewSettings): BarcodeArView;
    /**
     * Creates a new BarcodeArView with the provided mode, viewSettings and cameraSettings.
     *
     * @since 7.1.0
     */
    static forModeWithViewSettingsAndCameraSettings(dataCaptureContext: DataCaptureContext, barcodeAr: BarcodeAr, viewSettings: BarcodeArViewSettings, cameraSettings: CameraSettings): BarcodeArView;
    constructor(props: BarcodeArViewProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**
     * Sets the listener which is called whenever a barcode highlight is tapped in the view.
     *
     * @since 7.1.0
     */
    get uiListener(): BarcodeArViewUiListener | null;
    set uiListener(value: BarcodeArViewUiListener | null);
    /**
     * Sets the provider which supplies annotation information for barcodes in the view. If *null*, no annotation will be displayed for any barcode.
     *
     * @since 7.1.0
     */
    get annotationProvider(): BarcodeArAnnotationProvider | null;
    set annotationProvider(value: BarcodeArAnnotationProvider | null);
    /**
     * Sets the provider which supplies highlight information for barcodes in the view. If *null*, a default provider is used, which returns a predefined highlight for each barcode.
     *
     * @since 7.1.0
     */
    get highlightProvider(): BarcodeArHighlightProvider | null;
    set highlightProvider(value: BarcodeArHighlightProvider | null);
    /**
     * Starts the scanning process.
     *
     * @since 7.1.0
     */
    start(): Promise<void>;
    /**
     * Stops the scanning process.
     *
     * On Android the highlights and annotations that are already shown are kept, and they are still there when scanning starts again. On iOS they are removed, and they are supplied again by the providers after the next start. Resetting or disposing the view removes them.
     *
     * @since 7.1.0
     */
    stop(): Promise<void>;
    /**
     * Pauses the scanning process.
     *
     * The highlights and annotations that are already shown are kept, so they stay tappable while the view is paused and when scanning starts again. Resetting or disposing the view removes them.
     *
     * @since 7.1.0
     */
    pause(): Promise<void>;
    /**
     * Clears all highlights and annotations currently visible and calls {@link BarcodeArView.highlightProvider} and {@link BarcodeArView.annotationProvider} to supply new highlights and annotations.
     *
     * @since 7.2.0
     */
    reset(): Promise<void>;
    /**
     * Indicates whether the torch control button should be shown to the user.
     *
     * Default is *false*.
     *
     * @since 7.1.0
     */
    get shouldShowTorchControl(): boolean;
    set shouldShowTorchControl(value: boolean);
    /**
     * Updates the position of the torch control button.
     *
     * Default is {@link Anchor.TopLeft}.
     *
     * @since 7.1.0
     */
    get torchControlPosition(): Anchor$1;
    set torchControlPosition(value: Anchor$1);
    /**
     * Indicates whether the zoom control button should be shown to the user.
     *
     * @since 7.1.0
     */
    get shouldShowZoomControl(): boolean;
    set shouldShowZoomControl(value: boolean);
    /**
     * Updates the position of the zoom control button.
     *
     * Default is {@link Anchor.BottomRight}.
     *
     * @since 7.1.0
     */
    get zoomControlPosition(): Anchor$1;
    set zoomControlPosition(value: Anchor$1);
    /**
     * Indicates whether the camera switch control button should be shown to the user.
     *
     * @since 7.1.0
     */
    get shouldShowCameraSwitchControl(): boolean;
    set shouldShowCameraSwitchControl(value: boolean);
    /**
     * Updates the position of the camera switch control button.
     *
     * Default is {@link Anchor.TopRight}.
     *
     * @since 7.1.0
     */
    get cameraSwitchControlPosition(): Anchor$1;
    set cameraSwitchControlPosition(value: Anchor$1);
    /**
     * Indicates whether the macro mode control button should be shown to the user.
     *
     * @since 7.1.0
     */
    get shouldShowMacroModeControl(): boolean;
    set shouldShowMacroModeControl(value: boolean);
    /**
     * Updates the position of the macro mode control button.
     *
     * Default is {@link Anchor.TopRight}.
     *
     * @since 7.1.0
     */
    get macroModeControlPosition(): Anchor$1;
    set macroModeControlPosition(value: Anchor$1);
    /**
     * Sets the visual offset of the torch control button.
     *
     * Assign null to reset the offset to its default position.
     *
     * @since 8.6.0
     */
    get torchControlOffset(): PointWithUnit$1 | null;
    set torchControlOffset(value: PointWithUnit$1 | null);
    /**
     * Sets the visual offset of the zoom control button.
     *
     * Assign null to reset the offset to its default position.
     *
     * @since 8.6.0
     */
    get zoomControlOffset(): PointWithUnit$1 | null;
    set zoomControlOffset(value: PointWithUnit$1 | null);
    /**
     * Sets the visual offset of the camera switch control button.
     *
     * Assign null to reset the offset to its default position.
     *
     * @since 8.6.0
     */
    get cameraSwitchControlOffset(): PointWithUnit$1 | null;
    set cameraSwitchControlOffset(value: PointWithUnit$1 | null);
    /**
     * Sets the visual offset of the macro mode control button.
     *
     * Assign null to reset the offset to its default position.
     *
     * @since 8.6.0
     */
    get macroModeControlOffset(): PointWithUnit$1 | null;
    set macroModeControlOffset(value: PointWithUnit$1 | null);
    /**
     * The style of the logo, either the extended “Scanning By Scandit” or the minimal “Scandit”.
     *
     * Default is {@link LogoStyle.Extended}.
     *
     * @since 8.6.0
     */
    get logoStyle(): LogoStyle;
    set logoStyle(value: LogoStyle);
    /**
     * Sets the orientation of the zoom control button.
     *
     * Default is {@link ZoomSwitchOrientation.Default}.
     *
     * @since 8.6.0
     */
    get zoomControlOrientation(): ZoomSwitchOrientation;
    set zoomControlOrientation(value: ZoomSwitchOrientation);
    /**
     * The anchor point used to position the Scandit logo. To shift the logo relative to the anchor, use {@link BarcodeArView.logoOffset}.
     *
     * Default is {@link Anchor.BottomRight}.
     *
     * @since 8.6.0
     */
    get logoAnchor(): Anchor$1;
    set logoAnchor(value: Anchor$1);
    /**
     * The offset applied to the Scandit logo relative to the {@link BarcodeArView.logoAnchor|logo anchor}. When specified in pixels ({@link MeasureUnit.Pixel}) the offset is used as-is. When specified as a fraction ({@link MeasureUnit.Fraction}) the offset is computed relative to the view size minus the scan area margins.
     *
     * Default is a zero offset.
     *
     * @since 8.6.0
     */
    get logoOffset(): PointWithUnit$1;
    set logoOffset(value: PointWithUnit$1);
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




/**
 * Configuration for {@link BarcodeArAioView}.
 *
 * **A settings source is required:** pass either {@link BarcodeArAioViewProps.symbologies} or {@link BarcodeArAioViewProps.settings}. Both are optional on this interface, but {@link BarcodeArAioView} requires one of them, so rendering the component with neither is a compile error. Supplying both is allowed, and {@link BarcodeArAioViewProps.settings} takes precedence. Every other prop is optional.
 *
 * @since 8.7.0
 */
interface BarcodeArAioViewProps {
    /**
     * Symbologies to enable. Shorthand for {@link BarcodeArSettings.enabledSymbologies}; ignored when {@link BarcodeArAioViewProps.settings} is set.
     *
     * @since 8.7.0
     */
    symbologies?: Symbology[];
    /**
     * The settings applied to the underlying mode, as a complete {@link BarcodeArSettings} object. Takes precedence over {@link BarcodeArAioViewProps.symbologies}; when both are given, the shorthand is ignored and a warning is logged.
     *
     * @since 8.7.0
     */
    settings?: BarcodeArSettings | null;
    /**
     * View-level settings, as a {@link BarcodeArViewSettings} object.
     *
     * @since 8.7.0
     */
    viewSettings?: BarcodeArViewSettings | null;
    /**
     * Camera settings for the view’s own camera. Omit to use {@link BarcodeAr.createRecommendedCameraSettings}.
     *
     * @since 8.7.0
     */
    cameraSettings?: CameraSettings | null;
    /**
     * Called on each session update with every newly-added tracked barcode. Each entry is a {@link TrackedBarcode}, taken from {@link BarcodeArSession.addedTrackedBarcodes}.
     *
     * Derived from the same native BarcodeArListener.didUpdateSession() event as {@link BarcodeArAioViewProps.didUpdateSession}. When both are set, `didUpdateSession` completes first and then `didScan` fires, skipped when nothing was added. `getFrameData()` resolves to the {@link FrameData} for the frame and stays valid across both.
     *
     * @since 8.7.0
     */
    didScan?(barcodes: TrackedBarcode[], session: BarcodeArSession, getFrameData: () => Promise<FrameData>): void | Promise<void>;
    /**
     * Called on every session update, before {@link BarcodeArAioViewProps.didScan} for the same update. Backed by the native BarcodeArListener.didUpdateSession() event.
     *
     * @since 8.7.0
     */
    didUpdateSession?(session: BarcodeArSession, getFrameData: () => Promise<FrameData>): void | Promise<void>;
    /**
     * Provider that supplies highlight information for barcodes in the view. If *null*, a default provider is used, which returns a predefined highlight for each barcode.
     *
     * @since 8.7.0
     */
    highlightProvider?: BarcodeArHighlightProvider | null;
    /**
     * Provider that supplies annotation information for barcodes in the view. If *null*, no annotation is displayed for any barcode.
     *
     * @since 8.7.0
     */
    annotationProvider?: BarcodeArAnnotationProvider | null;
    /**
     * Listener called whenever a barcode highlight is tapped in the view.
     *
     * @since 8.7.0
     */
    uiListener?: BarcodeArViewUiListener | null;
    /**
     * Filter that determines which barcodes are visible in the {@link BarcodeArSession}. Pass *null* to remove the filter and show all barcodes. See {@link BarcodeArFilter} for details on implementing a custom filter.
     *
     * @since 8.7.0
     */
    barcodeFilter?: BarcodeArFilter | null;
    /**
     * Sound and vibration feedback emitted on scan, as a {@link BarcodeArFeedback}. Omit to use the SDK default, which enables both sound (a beep) and vibration.
     *
     * @since 8.7.0
     */
    feedback?: BarcodeArFeedback;
    /**
     * Whether the torch control button is shown. Defaults to *false*.
     *
     * @since 8.7.0
     */
    shouldShowTorchControl?: boolean;
    /**
     * Position of the torch control button. Defaults to {@link Anchor.TopLeft}.
     *
     * @since 8.7.0
     */
    torchControlPosition?: Anchor$1;
    /**
     * Whether the zoom control button is shown.
     *
     * @since 8.7.0
     */
    shouldShowZoomControl?: boolean;
    /**
     * Position of the zoom control button. Defaults to {@link Anchor.BottomRight}.
     *
     * @since 8.7.0
     */
    zoomControlPosition?: Anchor$1;
    /**
     * Whether the camera switch control button is shown.
     *
     * @since 8.7.0
     */
    shouldShowCameraSwitchControl?: boolean;
    /**
     * Position of the camera switch control button. Defaults to {@link Anchor.TopRight}.
     *
     * @since 8.7.0
     */
    cameraSwitchControlPosition?: Anchor$1;
    /**
     * Whether the macro mode control button is shown.
     *
     * @since 8.7.0
     */
    shouldShowMacroModeControl?: boolean;
    /**
     * Position of the macro mode control button. Defaults to {@link Anchor.TopRight}.
     *
     * @since 8.7.0
     */
    macroModeControlPosition?: Anchor$1;
    /**
     * Navigation object for the screen the component is rendered on, for example React Navigation’s `navigation` prop (typed as {@link ScanditNavigationProp}). When it is provided, scanning is suspended — the mode is disabled and the camera turned off — while the screen is blurred or the application is backgrounded, and resumed when the screen regains focus. Ignored while {@link BarcodeArAioViewProps.disabled} is set.
     *
     * @since 8.7.0
     */
    navigation?: ScanditNavigationProp;
    /**
     * Set to *true* to keep scanning off. Leaving it *false* does not keep scanning on — navigation and app-state handling still turn the mode on and off on their own.
     *
     * {@link BarcodeArAioViewHandle.enable} and {@link BarcodeArAioViewHandle.disable} change the same state directly. If you call those, this prop no longer reflects whether the component is actually scanning.
     *
     * @since 8.7.0
     */
    disabled?: boolean;
    /**
     * Turns off the automatic enabling and disabling of the mode in response to the application moving between foreground and background.
     *
     * @since 8.7.0
     */
    appStateHandlingDisabled?: boolean;
    /**
     * Style applied to the view, defaulting to `{ flex: 1 }`. This is the only React Native `View` prop the component forwards; it renders its own native view and passes nothing else through.
     *
     * @since 8.7.0
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Content rendered on top of the scanning UI.
     *
     * @since 8.7.0
     */
    children?: ReactNode;
}
type BarcodeArAioViewSettingsSource = {
    symbologies: Symbology[];
} | {
    settings: BarcodeArSettings;
};
type BarcodeArAioViewComponentProps = BarcodeArAioViewProps & BarcodeArAioViewSettingsSource;
/**
 * Imperative operations on a {@link BarcodeArAioView}, reached through a `ref` on the component.
 *
 * @since 8.7.0
 */
interface BarcodeArAioViewHandle {
    /**
     * Starts the scanning process.
     *
     * @since 8.7.0
     */
    start(): Promise<void>;
    /**
     * Stops the scanning process.
     *
     * @since 8.7.0
     */
    stop(): Promise<void>;
    /**
     * Pauses the scanning process.
     *
     * @since 8.7.0
     */
    pause(): Promise<void>;
    /**
     * Removes all current highlights and annotations.
     *
     * @since 8.7.0
     */
    reset(): Promise<void>;
    /**
     * Turns scanning on now: enables the mode and turns the camera on. Automatic navigation and application-state handling may subsequently turn it off again.
     *
     * @since 8.7.0
     */
    enable(): Promise<void>;
    /**
     * Turns scanning off now: disables the mode and turns the camera off.
     *
     * @since 8.7.0
     */
    disable(): Promise<void>;
}
/**
 * An all-in-one React component for MatrixScan AR. Rendering this single element replaces the manual assembly of a {@link DataCaptureContext}, a {@link BarcodeAr} mode and a {@link BarcodeArView} — the component owns all of them, along with its camera claim and its lifecycle.
 *
 * The component must be rendered inside a {@link ScanditProvider}, which supplies the {@link DataCaptureContext} and the shared camera. Scanning starts once the component is mounted and enabled, and stops when it unmounts.
 *
 * Configuration is passed through {@link BarcodeArAioViewProps}. To gain manual control over the component, attach a React `ref` typed as {@link BarcodeArAioViewHandle}.
 *
 * To build your first screen with the AIO components, refer to the [AIO components getting started](#) guide. For the classic API, refer to the [MatrixScan AR Get Started](https://docs.scandit.com/sdks/react-native/matrixscan-ar/get-started) guide.
 *
 * @since 8.7.0
 */
declare const BarcodeArAioView: React.ForwardRefExoticComponent<BarcodeArAioViewComponentProps & React.RefAttributes<BarcodeArAioViewHandle>>;

/** @since 6.16.0 */
interface SparkScanViewUiListener {
    /**
     * Callback method that can be used to define an action that should be performed when barcode count button is tapped from the toolbar. Called from the main thread.
     *
     * @since 6.16.0
     * @deprecated Use {@link didTapBarcodeCountButton} instead.
     */
    onBarcodeCountButtonTappedIn?(view: SparkScanView): void;
    /**
     * Callback method that can be used to define an action that should be performed when barcode find button is tapped from the toolbar. Called from the main thread.
     *
     * @since 6.16.0
     * @deprecated Use {@link didTapBarcodeFindButton} instead.
     */
    onBarcodeFindButtonTappedIn?(view: SparkScanView): void;
    /**
     * Callback method that can be used to define an action that should be performed when label capture button is tapped from the toolbar. Called from the main thread.
     *
     * @since 7.4.0
     * @deprecated Use {@link didTapLabelCaptureButton} instead.
     */
    onLabelCaptureButtonTappedIn?(view: SparkScanView): void;
    /**
     * Callback method that can be used to define an action that should be performed when barcode count button is tapped from the toolbar. Called from the main thread.
     *
     * @since 8.3.0
     */
    didTapBarcodeCountButton?(view: SparkScanView): void;
    /**
     * Callback method that can be used to define an action that should be performed when barcode find button is tapped from the toolbar. Called from the main thread.
     *
     * @since 8.3.0
     */
    didTapBarcodeFindButton?(view: SparkScanView): void;
    /**
     * Callback method that can be used to define an action that should be performed when label capture button is tapped from the toolbar. Called from the main thread.
     *
     * @since 8.3.0
     */
    didTapLabelCaptureButton?(view: SparkScanView): void;
    /**
     * Callback method that will be called when {@link SparkScanViewState} changes. Called from the main thread.
     *
     * @since 7.0.0
     */
    didChangeViewState?(newState: SparkScanViewState): void;
    /**
     * Callback method that will be called when the currently used SparkScanScanningMode changes. Called from the main thread.
     *
     * @since 8.3.0
     */
    didChangeScanningMode?(newScanningMode: SparkScanScanningMode): void;
}
interface SparkScanViewProps extends BaseSparkScanViewProps {
    style: StyleProp<ViewStyle>;
    children?: React.ReactNode;
    navigation?: NavigationProp<ParamListBase>;
    onLayout?: (event: LayoutChangeEvent) => void;
}
/**
 * {@link SparkScan} comes with a ready-to-use UI and scanning modes that are purpose-built to tackle high-volume scanning at close range. The SparkScanView integrates with any app without requiring app redesign or customization. It includes:
 *
 * camera preview screenlarge-sized scan buttonquick access toolbar to adjust scanning settings
 *
 * @since 6.16.0
 */
declare class SparkScanView extends React.Component<SparkScanViewProps> {
    private baseSparkScanView;
    private rnViewListener;
    private _isMounted;
    private _viewCreated;
    private _createViewRafHandle;
    private navigationUnsubscribers;
    private cameraOwner;
    /**
     * Sets the listener which is called whenever a barcode find button or barcode count button is tapped from the toolbar.
     *
     * @since 6.16.0
     */
    get uiListener(): SparkScanViewUiListener | null;
    set uiListener(listener: SparkScanViewUiListener | null);
    /**
     * Returns the default brush used by the overlay.
     *
     * @since 6.16.0
     */
    static get defaultBrush(): Brush$1;
    constructor(props: SparkScanViewProps);
    render(): React.JSX.Element;
    /**
     * Indicates whether the mini preview size control should be shown to the user.
     *
     * Default is *true*.
     *
     * @since 6.23.0
     */
    get previewSizeControlVisible(): boolean;
    set previewSizeControlVisible(newValue: boolean);
    /**
     * Indicates whether the scanning behavior button should be shown to the user.
     *
     * Default is *false*.
     *
     * @since 6.16.0
     */
    get scanningBehaviorButtonVisible(): boolean;
    set scanningBehaviorButtonVisible(newValue: boolean);
    /**
     * Indicates whether the barcode count button should be shown to the user.
     *
     * Default is *false*.
     *
     * @since 6.16.0
     */
    get barcodeCountButtonVisible(): boolean;
    set barcodeCountButtonVisible(newValue: boolean);
    /**
     * Indicates whether the barcode find button should be shown to the user.
     *
     * Default is *false*.
     *
     * @since 6.26.0
     */
    get barcodeFindButtonVisible(): boolean;
    set barcodeFindButtonVisible(newValue: boolean);
    /**
     * Indicates whether the target mode button should be shown to the user.
     *
     * Default is *false*.
     *
     * @since 6.16.0
     */
    get targetModeButtonVisible(): boolean;
    set targetModeButtonVisible(newValue: boolean);
    /**
     * Indicates whether the selection mode button should be shown to the user. The button toggles {@link SparkScanSettings.selectionMode} between {@link SelectionMode.On} and {@link SelectionMode.Off}.
     *
     * Renamed replacement for the deprecated {@link SparkScanView.targetModeButtonVisible}. Both properties share the same underlying state; when a deserialised JSON snapshot contains both keys, `selectionModeButtonVisible` wins.
     *
     * Default is *false*.
     *
     * @since 8.5.0
     */
    get selectionModeButtonVisible(): boolean;
    set selectionModeButtonVisible(newValue: boolean);
    /**
     * Indicates whether the label capture button should be shown to the user.
     *
     * Default is *false*.
     *
     * @since 7.4.0
     */
    get labelCaptureButtonVisible(): boolean;
    set labelCaptureButtonVisible(newValue: boolean);
    /**
     * Sets the toolbar background color.
     *
     * Default is *null*.
     *
     * @since 6.16.0
     */
    get toolbarBackgroundColor(): Color | null;
    set toolbarBackgroundColor(newValue: Color | null);
    /**
     * Sets the toolbar icon active color.
     *
     * Default is *null*.
     *
     * @since 6.16.0
     */
    get toolbarIconActiveTintColor(): Color | null;
    set toolbarIconActiveTintColor(newValue: Color | null);
    /**
     * Sets the toolbar icon inactive color.
     *
     * Default is *null*.
     *
     * @since 6.16.0
     */
    get toolbarIconInactiveTintColor(): Color | null;
    set toolbarIconInactiveTintColor(newValue: Color | null);
    /**
     * Indicates whether the camera switch button should be shown to the user.
     *
     * Default is *false*.
     *
     * This API is still in beta and may change in future versions of Scandit Data Capture SDK.
     *
     * @since 6.24.0
     */
    get cameraSwitchButtonVisible(): boolean;
    set cameraSwitchButtonVisible(newValue: boolean);
    /**
     * Indicates whether the torch control should be shown to the user.
     *
     * Default is *true*.
     *
     * If {@link SparkScanViewSettings.defaultTorchState} is set to {@link TorchState.Auto}, torch control is hidden.
     *
     * @since 7.0.0
     */
    get torchControlVisible(): boolean;
    set torchControlVisible(newValue: boolean);
    /**
     * Indicates whether the zoom switch control should be shown to the user.
     *
     * Default is *true*.
     *
     * @since 8.4.0
     */
    get zoomSwitchControlVisible(): boolean;
    set zoomSwitchControlVisible(newValue: boolean);
    /**
     * Indicates whether the mini preview close control should be shown to the user.
     *
     * Default is *true*.
     *
     * @since 7.0.0
     */
    get previewCloseControlVisible(): boolean;
    set previewCloseControlVisible(newValue: boolean);
    /**
     * Sets the color of the pulsing animation around the trigger button, which is shown when the scanner is active.
     *
     * @since 7.0.0
     */
    get triggerButtonAnimationColor(): Color | null;
    set triggerButtonAnimationColor(newValue: Color | null);
    /**
     * Sets the background color of the trigger button when button is expanded.
     *
     * @since 7.0.0
     */
    get triggerButtonExpandedColor(): Color | null;
    set triggerButtonExpandedColor(newValue: Color | null);
    /**
     * Sets the background color of the trigger button when button is collapsed.
     *
     * @since 7.0.0
     */
    get triggerButtonCollapsedColor(): Color | null;
    set triggerButtonCollapsedColor(newValue: Color | null);
    /**
     * Sets the trigger button tint color.
     *
     * @since 7.0.0
     */
    get triggerButtonTintColor(): Color | null;
    set triggerButtonTintColor(newValue: Color | null);
    /**
     * Indicates whether the trigger button should be shown to the user.
     *
     * Default is *true*.
     *
     * @since 7.0.0
     */
    get triggerButtonVisible(): boolean;
    set triggerButtonVisible(newValue: boolean);
    /**
     * The image displayed in the trigger button.
     *
     * @since 7.0.0
     */
    get triggerButtonImage(): string | null;
    set triggerButtonImage(newValue: string | null);
    /**
     * Method to call for preparing the mode for scanning. For instance, it can be called when the component containing SparkScanView is presented (i.e., Component’s componentDidMount).
     *
     * This method must be called before using the SparkScanView for scanning.
     *
     * @since 6.16.1
     */
    prepareScanning(): Promise<void>;
    /**
     * Starts the scanning process. You can call this method if you want to trigger the scanning process without any user interaction.
     *
     * @since 6.16.0
     */
    startScanning(): Promise<void>;
    /**
     * Pauses the scanning process. You can call this method if you want to trigger pausing the scanning process without any user interaction.
     *
     * @since 6.16.0
     */
    pauseScanning(): Promise<void>;
    /**
     * Stops the scanning process by putting the SparkScanView into an idle state and turning the camera off. This method should be called when the component containing SparkScanView is navigating away from the screen.
     *
     * This method is essential for proper resource management. It releases the camera and stops all scanning operations. If your workflow involves switching between different Scandit capture modes, always call this method before transitioning to another mode.
     *
     * @since 6.16.1
     */
    stopScanning(): Promise<void>;
    /**
     * Method to be called when the app goes to the background and the automatic handling of the lifecycle was turned off. After calling this method, if you want to resume scanning, you need to call {@link SparkScanView.prepareScanning} first.
     *
     * @since 7.6.2
     */
    onHostPause(): Promise<void>;
    /**
     * Sets the feedback delegate. If no delegate is set, the default {@link Success|SparkScanBarcodeFeedback.Success} feedback is emitted.
     *
     * @since 6.23.0
     */
    get feedbackDelegate(): SparkScanFeedbackDelegate | null;
    set feedbackDelegate(delegate: SparkScanFeedbackDelegate | null);
    /**
     * Shows a toast with text inside the mini preview.
     *
     * @since 6.23.0
     */
    showToast(text: string): Promise<void>;
    /**
     * Returns the currently used SparkScanScanningMode.
     *
     * @since 8.7.0
     */
    getScanningMode(): Promise<SparkScanScanningMode>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: SparkScanViewProps): void;
    componentWillUnmount(): void;
    private setupNavigationListeners;
    private onFocus;
    private onBlur;
    private onNativeViewLayout;
    private scheduleCreateNativeView;
    private tryCreateNativeView;
    private toJSON;
}




/**
 * Callbacks for taps on the toolbar buttons and for view state changes. Set it through {@link SparkScanAioViewProps.uiListener}.
 *
 * The callbacks correspond to the {@link SparkScanViewUiListener} methods; the tap callbacks receive the {@link SparkScanAioViewHandle} as their first argument, so the view can be acted on without a separate `ref`.
 *
 * @since 8.7.0
 */
interface SparkScanAioViewUiListener {
    /**
     * Called when the barcode count button in the toolbar is tapped. Called from the main thread.
     *
     * @since 8.7.0
     */
    didTapBarcodeCountButton?(view: SparkScanAioViewHandle): void;
    /**
     * Called when the barcode find button in the toolbar is tapped. Called from the main thread.
     *
     * @since 8.7.0
     */
    didTapBarcodeFindButton?(view: SparkScanAioViewHandle): void;
    /**
     * Called when the label capture button in the toolbar is tapped. Called from the main thread.
     *
     * @since 8.7.0
     */
    didTapLabelCaptureButton?(view: SparkScanAioViewHandle): void;
    /**
     * Called when the {@link SparkScanViewState} changes. Called from the main thread.
     *
     * @since 8.7.0
     */
    didChangeViewState?(newState: SparkScanViewState): void;
    /**
     * Called when the current {@link SparkScanScanningMode} changes. Called from the main thread.
     *
     * @since 8.7.0
     */
    didChangeScanningMode?(newScanningMode: SparkScanScanningMode): void;
}
/**
 * Configuration for {@link SparkScanAioView}.
 *
 * **A settings source is required:** pass either {@link SparkScanAioViewProps.symbologies} or {@link SparkScanAioViewProps.sparkScanSettings}. Both are optional on this interface, but {@link SparkScanAioView} requires one of them, so rendering the component with neither is a compile error. Supplying both is allowed, and {@link SparkScanAioViewProps.sparkScanSettings} takes precedence. Every other prop is optional.
 *
 * @since 8.7.0
 */
interface SparkScanAioViewProps {
    /**
     * Called for each newly-recognized barcode, with the barcodes taken from {@link SparkScanSession.newlyRecognizedBarcode} (an empty array when there are none).
     *
     * Return a promise to keep the frame alive while asynchronous work runs. `getFrameData()` resolves to the {@link FrameData} for the frame, and becomes invalid once the returned promise resolves.
     *
     * Backed by the native SparkScanListener.didScan() event, so it fires only on a recognition, independently of {@link SparkScanAioViewProps.didUpdateSession}.
     *
     * @since 8.7.0
     */
    didScan?(barcodes: Barcode[], session: SparkScanSession, getFrameData: () => Promise<FrameData | null>): void | Promise<void>;
    /**
     * Called on every session update, regardless of whether a barcode was recognized. Backed by the native SparkScanListener.didUpdateSession() event and independent of {@link SparkScanAioViewProps.didScan}.
     *
     * @since 8.7.0
     */
    didUpdateSession?(session: SparkScanSession, getFrameData: () => Promise<FrameData | null>): void | Promise<void>;
    /**
     * Symbologies to enable. Shorthand for {@link SparkScanSettings.enabledSymbologies}; ignored when {@link SparkScanAioViewProps.sparkScanSettings} is set.
     *
     * @since 8.7.0
     */
    symbologies?: Symbology[];
    /**
     * Whether scanning is smart or manual. Shorthand for {@link SparkScanSettings.scanIntention}; ignored when {@link SparkScanAioViewProps.sparkScanSettings} is set.
     *
     * @since 8.7.0
     */
    scanIntention?: ScanIntention;
    /**
     * Composite barcode types to enable. Shorthand for {@link SparkScanSettings.enabledCompositeTypes}; ignored when {@link SparkScanAioViewProps.sparkScanSettings} is set.
     *
     * @since 8.7.0
     */
    enabledCompositeTypes?: CompositeType[];
    /**
     * Item definitions for USI-style scanning. Shorthand for the equivalent setting on {@link SparkScanSettings}; ignored when {@link SparkScanAioViewProps.sparkScanSettings} is set.
     *
     * @since 8.7.0
     */
    itemDefinitions?: ScanItemDefinition[];
    /**
     * Time interval in milliseconds during which duplicate barcodes are filtered out. Shorthand for {@link SparkScanSettings.codeDuplicateFilter}; ignored when {@link SparkScanAioViewProps.sparkScanSettings} is set.
     *
     * @since 8.7.0
     */
    codeDuplicateFilter?: number;
    /**
     * Battery saving mode. Shorthand for {@link SparkScanSettings.batterySaving}; ignored when {@link SparkScanAioViewProps.sparkScanSettings} is set.
     *
     * @since 8.7.0
     */
    batterySaving?: BatterySavingMode;
    /**
     * The settings applied to the underlying mode, as a complete {@link SparkScanSettings} object. Takes precedence over the shorthand settings props above; when both are given, the shorthand props are ignored and a warning is logged.
     *
     * @since 8.7.0
     */
    sparkScanSettings?: SparkScanSettings | null;
    /**
     * View-level settings such as the mini preview size and trigger animation, as a {@link SparkScanViewSettings} object. Omit to use the defaults.
     *
     * @since 8.7.0
     */
    sparkScanViewSettings?: SparkScanViewSettings | null;
    /**
     * Listener that receives callbacks for toolbar button taps and view state changes. See {@link SparkScanAioViewUiListener}.
     *
     * @since 8.7.0
     */
    uiListener?: SparkScanAioViewUiListener;
    /**
     * Sound and vibration feedback applied to every scanned barcode. Shorthand for a constant {@link SparkScanAioViewProps.feedbackDelegate}, which decides feedback per barcode and takes precedence when both are set.
     *
     * @since 8.7.0
     */
    feedback?: SparkScanBarcodeFeedback;
    /**
     * Navigation object for the screen the component is rendered on, for example React Navigation’s `navigation` prop (typed as {@link ScanditNavigationProp}). When it is provided, scanning is suspended — the mode is disabled and the camera turned off — while the screen is blurred or the application is backgrounded, and resumed when the screen regains focus. Ignored while {@link SparkScanAioViewProps.disabled} is set.
     *
     * @since 8.7.0
     */
    navigation?: ScanditNavigationProp;
    /**
     * Set to *true* to keep scanning off. Leaving it *false* does not keep scanning on — navigation and app-state handling still turn the mode on and off on their own.
     *
     * {@link SparkScanAioViewHandle.enable} and {@link SparkScanAioViewHandle.disable} change the same state directly. If you call those, this prop no longer reflects whether the component is actually scanning.
     *
     * @since 8.7.0
     */
    disabled?: boolean;
    /**
     * Turns off the automatic enabling and disabling of the mode in response to the application moving between foreground and background.
     *
     * @since 8.7.0
     */
    appStateHandlingDisabled?: boolean;
    /**
     * Whether the trigger button is shown. Defaults to *true*.
     *
     * @since 8.7.0
     */
    triggerButtonVisible?: boolean;
    /**
     * Whether the mini preview size control is shown. Defaults to *true*.
     *
     * @since 8.7.0
     */
    previewSizeControlVisible?: boolean;
    /**
     * Whether the mini preview close control is shown. Defaults to *true*.
     *
     * @since 8.7.0
     */
    previewCloseControlVisible?: boolean;
    /**
     * Whether the torch control is shown. Defaults to *true*.
     *
     * @since 8.7.0
     */
    torchControlVisible?: boolean;
    /**
     * Whether the zoom switch control is shown. Defaults to *true*.
     *
     * @since 8.7.0
     */
    zoomSwitchControlVisible?: boolean;
    /**
     * Whether the scanning behavior button is shown. Defaults to *false*.
     *
     * @since 8.7.0
     */
    scanningBehaviorButtonVisible?: boolean;
    /**
     * Whether the selection mode button is shown. Defaults to *false*. The button toggles {@link SparkScanSettings.selectionMode} between {@link SelectionMode.On} and {@link SelectionMode.Off}.
     *
     * Replaces the deprecated {@link SparkScanAioViewProps.targetModeButtonVisible}. Both control the same state; this one wins when both are set.
     *
     * @since 8.7.0
     */
    selectionModeButtonVisible?: boolean;
    /**
     * Whether the camera switch button is shown. Defaults to *false*.
     *
     * @since 8.7.0
     */
    cameraSwitchButtonVisible?: boolean;
    /**
     * Whether the barcode count button is shown. Defaults to *false*.
     *
     * @since 8.7.0
     */
    barcodeCountButtonVisible?: boolean;
    /**
     * Whether the barcode find button is shown. Defaults to *false*.
     *
     * @since 8.7.0
     */
    barcodeFindButtonVisible?: boolean;
    /**
     * Whether the label capture button is shown. Defaults to *false*.
     *
     * @since 8.7.0
     */
    labelCaptureButtonVisible?: boolean;
    /**
     * Whether the target mode button is shown. Defaults to *false*.
     *
     * @since 8.7.0
     */
    targetModeButtonVisible?: boolean;
    /**
     * The toolbar background color.
     *
     * @since 8.7.0
     */
    toolbarBackgroundColor?: Color | null;
    /**
     * The toolbar icon active color.
     *
     * @since 8.7.0
     */
    toolbarIconActiveTintColor?: Color | null;
    /**
     * The toolbar icon inactive color.
     *
     * @since 8.7.0
     */
    toolbarIconInactiveTintColor?: Color | null;
    /**
     * The color of the pulsing animation around the trigger button, shown while the scanner is active.
     *
     * @since 8.7.0
     */
    triggerButtonAnimationColor?: Color | null;
    /**
     * The background color of the trigger button when it is expanded.
     *
     * @since 8.7.0
     */
    triggerButtonExpandedColor?: Color | null;
    /**
     * The background color of the trigger button when it is collapsed.
     *
     * @since 8.7.0
     */
    triggerButtonCollapsedColor?: Color | null;
    /**
     * The trigger button tint color.
     *
     * @since 8.7.0
     */
    triggerButtonTintColor?: Color | null;
    /**
     * The image displayed in the trigger button.
     *
     * @since 8.7.0
     */
    triggerButtonImage?: string | null;
    /**
     * Whether the native Android view pauses and resumes itself with the host activity’s lifecycle. Android only; ignored on iOS.
     *
     * @since 8.7.0
     */
    shouldHandleAndroidLifecycleAutomatically?: boolean;
    /**
     * Delegate that decides the feedback per barcode. If none is set, the default {@link Success|SparkScanBarcodeFeedback.Success} feedback is emitted.
     *
     * @since 8.7.0
     */
    feedbackDelegate?: SparkScanFeedbackDelegate | null;
    /**
     * Style applied to the view, defaulting to `{ flex: 1 }`. This is the only React Native `View` prop the component forwards; it renders its own native view and passes nothing else through.
     *
     * @since 8.7.0
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Content rendered on top of the scanning UI.
     *
     * @since 8.7.0
     */
    children?: ReactNode;
}
type SparkScanAioViewSettingsSource = {
    symbologies: Symbology[];
} | {
    sparkScanSettings: SparkScanSettings;
};
type SparkScanAioViewComponentProps = SparkScanAioViewProps & SparkScanAioViewSettingsSource;
/**
 * Imperative operations on a {@link SparkScanAioView}, reached through a `ref` on the component.
 *
 * @since 8.7.0
 */
interface SparkScanAioViewHandle {
    /**
     * Resets the SparkScan session, clearing the history of scanned codes. This affects duplicate filtering: calling {@link SparkScanAioViewHandle.reset} every frame has the same effect as setting {@link SparkScanSettings.codeDuplicateFilter} to 0. Only call it from inside a listener callback.
     *
     * @since 8.7.0
     */
    reset(): Promise<void>;
    /**
     * Shows a toast message over the scanning UI.
     *
     * @since 8.7.0
     */
    showToast(text: string): Promise<void>;
    /**
     * Starts the scanning process without user interaction.
     *
     * @since 8.7.0
     */
    startScanning(): Promise<void>;
    /**
     * Pauses the scanning process without user interaction.
     *
     * @since 8.7.0
     */
    pauseScanning(): Promise<void>;
    /**
     * Stops the scanning process: puts the view into an idle state and turns the camera off. Call it when the screen containing the component is navigated away from.
     *
     * @since 8.7.0
     */
    stopScanning(): Promise<void>;
    /**
     * Shows the scanning UI.
     *
     * @since 8.7.0
     */
    show(): Promise<void>;
    /**
     * Hides the scanning UI.
     *
     * @since 8.7.0
     */
    hide(): Promise<void>;
    /**
     * Turns scanning on now: enables the mode and turns the camera on. Automatic navigation and application-state handling may subsequently turn it off again.
     *
     * @since 8.7.0
     */
    enable(): Promise<void>;
    /**
     * Turns scanning off now: disables the mode and turns the camera off.
     *
     * @since 8.7.0
     */
    disable(): Promise<void>;
}
/**
 * An all-in-one React component for SparkScan. Rendering this single element replaces the manual assembly of a {@link DataCaptureContext}, a {@link SparkScan} mode and a {@link SparkScanView} — the component owns all of them, along with its camera claim and its lifecycle.
 *
 * The component must be rendered inside a {@link ScanditProvider}, which supplies the {@link DataCaptureContext} and the shared camera. Scanning starts once the component is mounted and enabled, and stops when it unmounts.
 *
 * Configuration is passed through {@link SparkScanAioViewProps}. To gain manual control over the component, attach a React `ref` typed as {@link SparkScanAioViewHandle}. Toolbar interactions are reported through {@link SparkScanAioViewUiListener}.
 *
 * To build your first screen with the AIO components, refer to the [AIO components getting started](#) guide. For the classic API, refer to the [SparkScan Get Started](https://docs.scandit.com/sdks/react-native/sparkscan/get-started) guide.
 *
 * @since 8.7.0
 */
declare const SparkScanAioView: React.ForwardRefExoticComponent<SparkScanAioViewComponentProps & React.RefAttributes<SparkScanAioViewHandle>>;

/**
 * The style of the {@link BarcodeCountView}
 *
 * @since 6.17.0
 */
declare enum BarcodeCountViewStyle {
    /**
     * Style that draws the highlights as icons and adds an animation for when a code newly appears.
     *
     * @since 6.17.0
     */
    Icon = "icon",
    /**
     * Style that draws the highlights as a dot and adds an animation for when a code newly appears.
     *
     * @since 6.17.0
     */
    Dot = "dot"
}
interface BarcodeCountViewProps extends BaseBarcodeCountViewProps {
    style: StyleProp<ViewStyle>;
    navigation?: NavigationProp<ParamListBase>;
    onLayout?: (event: LayoutChangeEvent) => void;
}
/**
 * {@link BarcodeCount} comes with a ready-to-use UI. Add {@link BarcodeCountView} to the view hierarchy. Please note that this view should be presented full screen.
 *
 * @since 6.17.0
 */
declare class BarcodeCountView extends React.Component<BarcodeCountViewProps> {
    private baseBarcodeCountView;
    private _isMounted;
    private _viewCreated;
    private _createViewRafHandle;
    private navigationUnsubscribers;
    private cameraOwner;
    /**
     * Returns the default brush to use for a recognized barcode. When setting a {@link BarcodeCountCaptureList} to the mode, this brush will be used for recognized barcodes that are part of the target list. Only used when setting the view {@link BarcodeCountView.style} to {@link BarcodeCountViewStyle.Dot}.
     *
     * @since 6.17.0
     */
    static get defaultRecognizedBrush(): Brush;
    /**
     * Returns the default brush to use for a recognized barcode that’s not part of the target {@link BarcodeCountCaptureList}. Only used when setting the view {@link BarcodeCountView.style} to {@link BarcodeCountViewStyle.Dot}.
     *
     * @since 6.17.0
     */
    static get defaultNotInListBrush(): Brush;
    /**
     * Returns the default brush to use for accepted barcodes. Only used when setting the view {@link BarcodeCountView.style} to {@link BarcodeCountViewStyle.Dot}.
     *
     * @since 7.1.0
     */
    static get defaultAcceptedBrush(): Brush;
    /**
     * Returns the default brush to use for rejected barcodes. Only used when setting the view {@link BarcodeCountView.style} to {@link BarcodeCountViewStyle.Dot}.
     *
     * @since 7.1.0
     */
    static get defaultRejectedBrush(): Brush;
    /**
     * Returns the default {@link BarcodeCountIcon} used for a recognized barcode. When setting a {@link BarcodeCountCaptureList} to the mode, this icon will be used for recognized barcodes that are part of the target list. Only used when the view {@link BarcodeCountView.style} is {@link BarcodeCountViewStyle.Icon}.
     *
     * @since 8.7.0
     */
    static get defaultRecognizedIcon(): BarcodeCountIcon;
    /**
     * Returns the default {@link BarcodeCountIcon} used for a recognized barcode that’s not part of the target {@link BarcodeCountCaptureList}. Only used when the view {@link BarcodeCountView.style} is {@link BarcodeCountViewStyle.Icon}.
     *
     * @since 8.7.0
     */
    static get defaultNotInListIcon(): BarcodeCountIcon;
    /**
     * Returns the default {@link BarcodeCountIcon} used for an accepted barcode. Used regardless of the view {@link BarcodeCountView.style}.
     *
     * @since 8.7.0
     */
    static get defaultAcceptedIcon(): BarcodeCountIcon;
    /**
     * Returns the default {@link BarcodeCountIcon} used for a rejected barcode. Used regardless of the view {@link BarcodeCountView.style}.
     *
     * @since 8.7.0
     */
    static get defaultRejectedIcon(): BarcodeCountIcon;
    /**
     * Returns whether the device supports listening for hardware button events. This is true for devices with api >= 28.
     *
     * This method is only supported on Android devices.
     *
     * @since 7.1.0
     */
    static get hardwareTriggerSupported(): boolean;
    /**
     * The listener which is called whenever the exit or list button of the view did receive a tap.
     *
     * Using this listener requires the MatrixScan AR add-on.
     *
     * @since 6.17.0
     */
    get uiListener(): BarcodeCountViewUiListener | null;
    set uiListener(listener: BarcodeCountViewUiListener | null);
    /**
     * The listener which is called whenever a new {@link TrackedBarcode} is newly tracked or newly recognized.
     *
     * Using this listener requires the MatrixScan AR add-on.
     *
     * @since 6.17.0
     */
    get listener(): BarcodeCountViewListener | null;
    set listener(listener: BarcodeCountViewListener | null);
    /**
     * When set to *true*, user guidance and the loading view will be shown to the user. The user guidance prompts the user to scan, and to move closer or further away from the target barcodes in order to scan them properly.
     *
     * By default this property is *true*.
     *
     * @since 6.17.0
     */
    get shouldShowUserGuidanceView(): boolean;
    set shouldShowUserGuidanceView(newValue: boolean);
    /**
     * When set to *true*, a list button will be shown to the user in the lower left hand corner of the screen. When tapped, this button will freeze the mode unless {@link BarcodeCountView.shouldDisableModeOnExitButtonTapped} is set to *false*. This button triggers a call to BarcodeCountViewUiListener.didTapListButton().
     *
     * By default this property is *true*.
     *
     * @since 6.17.0
     */
    get shouldShowListButton(): boolean;
    set shouldShowListButton(newValue: boolean);
    /**
     * When set to *true*, the mode will disable automatically when the default exit button is tapped.
     *
     * By default this property is *true*.
     *
     * @since 6.19.0
     */
    get shouldDisableModeOnExitButtonTapped(): boolean;
    set shouldDisableModeOnExitButtonTapped(newValue: boolean);
    /**
     * When set to *true*, an exit button will be shown in the lower right hand corner of the screen. The behavior for this button is left entirely to the developer, and does nothing by default. When clicked, this button triggers a call to BarcodeCountViewUiListener.didTapExitButton().
     *
     * By default this property is *true*.
     *
     * @since 6.17.0
     */
    get shouldShowExitButton(): boolean;
    set shouldShowExitButton(newValue: boolean);
    /**
     * When set to *true*, a shutter button will be shown to the user centered in the bottom of the screen. This button triggers the processing of the current video feed. The same functionality can be triggered by calling {@link BarcodeCount.startScanningPhase}.
     *
     * By default this property is *true*.
     *
     * @since 6.17.0
     */
    get shouldShowShutterButton(): boolean;
    set shouldShowShutterButton(newValue: boolean);
    /**
     * When set to *true*, this view will show some messages about currently scanned barcodes.
     *
     * By default this property is *true*.
     *
     * @since 6.17.0
     */
    get shouldShowHints(): boolean;
    set shouldShowHints(newValue: boolean);
    /**
     * When set to *true*, a button will be shown above the default shutter button. This button clears all currently shown barcodes highlights.
     *
     * @since 6.17.0
     */
    get shouldShowClearHighlightsButton(): boolean;
    set shouldShowClearHighlightsButton(newValue: boolean);
    /**
     * When set to *true*, a button will be shown to the user in the lower left corner of the preview. The behavior for this button is left entirely to the developer, and does nothing by default. When clicked, this button triggers a call to BarcodeCountViewUiListener.didTapSingleScanButton().
     *
     * By default this property is *false*.
     *
     * @since 6.17.0
     */
    get shouldShowSingleScanButton(): boolean;
    set shouldShowSingleScanButton(newValue: boolean);
    /**
     * When set to *true*, a floating shutter button will be visible on screen. This button can be dragged to any position and, when tapped, will trigger the processing of the current video feed.
     *
     * By default this property is *false*.
     *
     * @since 6.17.0
     */
    get shouldShowFloatingShutterButton(): boolean;
    set shouldShowFloatingShutterButton(newValue: boolean);
    /**
     * When set to *true*, a collapsable toolbar will be visible at the top of the preview. This toolbar contains a set of convenience buttons for easy preference setting during scanning.
     *
     * By default this property is *true*.
     *
     * @since 6.17.0
     */
    get shouldShowToolbar(): boolean;
    set shouldShowToolbar(newValue: boolean);
    /**
     * When set to *true*, a button will be shown to the user in the lower right corner of the preview. This button toggles “status mode”, in which the normal barcode highlights will be replaced by status indicators for each barcode.
     *
     * @since 8.3.0
     */
    get shouldShowStatusModeButton(): boolean;
    set shouldShowStatusModeButton(newValue: boolean);
    /**
     * When enabled, status icons will be loaded immediately after barcodes are scanned, without requiring manual activation of status mode.
     *
     * @since 8.3.0
     */
    get shouldShowStatusIconsOnScan(): boolean;
    set shouldShowStatusIconsOnScan(newValue: boolean);
    /**
     * When set to *true*, this view will visualize the active scan area used for BarcodeCount. This is useful to check {@link DataCaptureView.scanAreaMargins|margins} defined on the {@link DataCaptureView} are set correctly. This property is meant for debugging during development and is not intended for use in production.
     *
     * By default this property is *false*.
     *
     * @since 6.17.0
     */
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(newValue: boolean);
    /**
     * The brush applied to recognized tracked barcodes if {@link BarcodeCountViewListener} is not implemented. When setting a {@link BarcodeCountCaptureList} to the mode, this brush will be used for recognized barcodes that are part of the target list. Setting this brush to *null* hides all tracked barcodes.
     *
     * Defaults to a yellow-colored Brush.
     *
     * Used only when the view uses the {@link BarcodeCountViewStyle.Dot} style.
     *
     * @since 6.17.0
     */
    get recognizedBrush(): Brush | null;
    set recognizedBrush(newValue: Brush | null);
    /**
     * The brush applied to recognized tracked barcodes that are not part of the target {@link BarcodeCountCaptureList}, and only if {@link BarcodeCountViewListener} is not implemented. When {@link BarcodeCountCaptureList} is not set, this method will never be called. Setting this brush to *null* hides all tracked barcodes.
     *
     * Defaults to a red-colored Brush.
     *
     * Used only when the view uses the {@link BarcodeCountViewStyle.Dot} style.
     *
     * @since 6.17.0
     */
    get notInListBrush(): Brush | null;
    set notInListBrush(newValue: Brush | null);
    /**
     * The brush applied to accepted tracked barcodes if {@link BarcodeCountViewListener} is not implemented. Setting this brush to *null* hides all accepted barcodes.
     *
     * Defaults to a green-colored Brush.
     *
     * Used only when the view uses the {@link BarcodeCountViewStyle.Dot} style.
     *
     * @since 7.1.0
     */
    get acceptedBrush(): Brush | null;
    set acceptedBrush(newValue: Brush | null);
    /**
     * The brush applied to rejected tracked barcodes if {@link BarcodeCountViewListener} is not implemented. Setting this brush to *null* hides all rejected barcodes.
     *
     * Defaults to a red-colored Brush.
     *
     * Used only when the view uses the {@link BarcodeCountViewStyle.Dot} style.
     *
     * @since 7.1.0
     */
    get rejectedBrush(): Brush | null;
    set rejectedBrush(newValue: Brush | null);
    /**
     * The style of the logo, either the extended “Scanning By Scandit” or the minimal “Scandit”.
     *
     * Default is {@link LogoStyle.Minimal}.
     *
     * @since 8.7.0
     */
    get logoStyle(): LogoStyle;
    set logoStyle(newValue: LogoStyle);
    /**
     * The anchor point used to position the Scandit logo.
     *
     * Default is {@link Anchor.BottomLeft}.
     *
     * @since 8.7.0
     */
    get logoAnchor(): Anchor$1;
    set logoAnchor(newValue: Anchor$1);
    /**
     * Use this property to access or modify the current view settings for barcode filtering.
     *
     * @since 6.17.0
     */
    get filterSettings(): BarcodeFilterHighlightSettings | null;
    set filterSettings(newValue: BarcodeFilterHighlightSettings | null);
    /**
     * The view style. Defaults to {@link BarcodeCountViewStyle.Dot}.
     *
     * @since 6.17.0
     */
    get style(): BarcodeCountViewStyle;
    /**
     * Use this property to access or modify the accessibility hint for the list button provided by the view.
     *
     * Default value is “List button”.
     *
     * This property has effect only when running on iOS.
     *
     * @since 6.17.0
     */
    get listButtonAccessibilityHint(): string;
    set listButtonAccessibilityHint(newValue: string);
    /**
     * Use this property to access or modify the accessibility label for the list button provided by the view.
     *
     * Default value is “List button”.
     *
     * This property has effect only when running on iOS.
     *
     * @since 6.17.0
     */
    get listButtonAccessibilityLabel(): string;
    set listButtonAccessibilityLabel(newValue: string);
    /**
     * Use this property to access or modify the content description of the list button provided by the view.
     *
     * Default value is “List button”.
     *
     * This property has effect only when running on Android.
     *
     * @since 6.17.0
     */
    get listButtonContentDescription(): string;
    set listButtonContentDescription(newValue: string);
    /**
     * Use this property to access or modify the accessibility hint for the exit button provided by the view.
     *
     * Default value is “Exit button”.
     *
     * This property has effect only when running on iOS.
     *
     * @since 6.17.0
     */
    get exitButtonAccessibilityHint(): string;
    set exitButtonAccessibilityHint(newValue: string);
    /**
     * Use this property to access or modify the accessibility label for the exit button provided by the view.
     *
     * Default value is “Exit button”.
     *
     * This property has effect only when running on iOS.
     *
     * @since 6.17.0
     */
    get exitButtonAccessibilityLabel(): string;
    set exitButtonAccessibilityLabel(newValue: string);
    /**
     * Use this property to access or modify the content description of the exit button provided by the view.
     *
     * Default value is “Exit button”.
     *
     * This property has effect only when running on Android.
     *
     * @since 6.17.0
     */
    get exitButtonContentDescription(): string;
    set exitButtonContentDescription(newValue: string);
    /**
     * Use this property to access or modify the accessibility hint for the shutter button provided by the view.
     *
     * Default value is “Shutter button”.
     *
     * This property has effect only when running on iOS.
     *
     * @since 6.17.0
     */
    get shutterButtonAccessibilityHint(): string;
    set shutterButtonAccessibilityHint(newValue: string);
    /**
     * Use this property to access or modify the accessibility label for the shutter button provided by the view.
     *
     * Default value is “Shutter button”.
     *
     * This property has effect only when running on iOS.
     *
     * @since 6.17.0
     */
    get shutterButtonAccessibilityLabel(): string;
    set shutterButtonAccessibilityLabel(newValue: string);
    /**
     * Use this property to access or modify the content description of the shutter button provided by the view.
     *
     * Default value is “Shutter button”.
     *
     * This property has effect only when running on Android.
     *
     * @since 6.17.0
     */
    get shutterButtonContentDescription(): string;
    set shutterButtonContentDescription(newValue: string);
    /**
     * Use this property to access or modify the accessibility hint for the floating shutter button provided by the view.
     *
     * Default value is “Floating shutter button”.
     *
     * This property has effect only when running on iOS.
     *
     * @since 6.17.0
     */
    get floatingShutterButtonAccessibilityHint(): string;
    set floatingShutterButtonAccessibilityHint(newValue: string);
    /**
     * Use this property to access or modify the accessibility label for the floating shutter button provided by the view.
     *
     * Default value is “Floating shutter button”.
     *
     * This property has effect only when running on iOS.
     *
     * @since 6.17.0
     */
    get floatingShutterButtonAccessibilityLabel(): string;
    set floatingShutterButtonAccessibilityLabel(newValue: string);
    /**
     * Use this property to access or modify the content description for the floating shutter button provided by the view.
     *
     * Default value is “Floating shutter button”.
     *
     * This property has effect only when running on Android.
     *
     * @since 6.17.0
     */
    get floatingShutterButtonContentDescription(): string;
    set floatingShutterButtonContentDescription(newValue: string);
    /**
     * Use this property to access or modify the accessibility hint for the clear highlights button provided by the view.
     *
     * Default value is “Clear highlights button”.
     *
     * This property has effect only when running on iOS.
     *
     * @since 6.17.0
     */
    get clearHighlightsButtonAccessibilityHint(): string;
    set clearHighlightsButtonAccessibilityHint(newValue: string);
    /**
     * Use this property to access or modify the accessibility label for the clear highlights button provided by the view.
     *
     * Default value is “Clear highlights button”.
     *
     * This property has effect only when running on iOS.
     *
     * @since 6.17.0
     */
    get clearHighlightsButtonAccessibilityLabel(): string;
    set clearHighlightsButtonAccessibilityLabel(newValue: string);
    /**
     * Use this property to access or modify the content description of the “clear highlights” button provided by the view.
     *
     * Default value is “Clear highlights button”.
     *
     * This property has effect only when running on Android.
     *
     * @since 6.17.0
     */
    get clearHighlightsButtonContentDescription(): string;
    set clearHighlightsButtonContentDescription(newValue: string);
    /**
     * Use this property to access or modify the accessibility hint for the single scan button provided by the view.
     *
     * Default value is “Single scan button”.
     *
     * This property has effect only when running on iOS.
     *
     * @since 6.17.0
     */
    get singleScanButtonAccessibilityHint(): string;
    set singleScanButtonAccessibilityHint(newValue: string);
    /**
     * Use this property to access or modify the accessibility label for the single scan button provided by the view.
     *
     * Default value is “Single scan button”.
     *
     * This property has effect only when running on iOS.
     *
     * @since 6.17.0
     */
    get singleScanButtonAccessibilityLabel(): string;
    set singleScanButtonAccessibilityLabel(newValue: string);
    /**
     * Use this property to access or modify the content description of the “single scan” button provided by the view.
     *
     * Default value is “Single scan button”.
     *
     * This property has effect only when running on Android.
     *
     * @since 6.17.0
     */
    get singleScanButtonContentDescription(): string;
    set singleScanButtonContentDescription(newValue: string);
    /**
     * Use this property to access or modify the accessibility hint for the status mode button provided by the view.
     *
     * Default value is “Status mode button”.
     *
     * @since 8.3.0
     */
    get statusModeButtonAccessibilityHint(): string;
    set statusModeButtonAccessibilityHint(newValue: string);
    /**
     * Use this property to access or modify the accessibility label for the single status mode button provided by the view.
     *
     * Default value is “Status mode button”.
     *
     * This property has effect only when running on iOS.
     *
     * @since 8.3.0
     */
    get statusModeButtonAccessibilityLabel(): string;
    set statusModeButtonAccessibilityLabel(newValue: string);
    /**
     * Gets or sets the content description for the status mode button provided by the view.
     *
     * Default value is “Status mode button”.
     *
     * This property has effect only when running on Android.
     *
     * @since 8.3.0
     */
    get statusModeButtonContentDescription(): string;
    set statusModeButtonContentDescription(newValue: string);
    /**
     * Use this property to access or modify the text of the clear button label provided by the view.
     *
     * Default value is “Clear screen”.
     *
     * @since 6.17.0
     */
    get clearHighlightsButtonText(): string;
    set clearHighlightsButtonText(newValue: string);
    /**
     * Use this property to access or modify the text of the exit button label provided by the view.
     *
     * Default value is “Finish”.
     *
     * @since 6.17.0
     */
    get exitButtonText(): string;
    set exitButtonText(newValue: string);
    /**
     * Use this property to access or modify the text of the hint which suggests to tap the shutter button.
     *
     * Default value is “Tap shutter to scan items”.
     *
     * @since 6.17.0
     */
    get textForTapShutterToScanHint(): string;
    set textForTapShutterToScanHint(newValue: string);
    /**
     * Use this property to access or modify the text of the hint displayed while scanning is in progress.
     *
     * Default value is “Scanning”.
     *
     * @since 6.17.0
     */
    get textForScanningHint(): string;
    set textForScanningHint(newValue: string);
    /**
     * Use this property to access or modify the text of the hint displayed when camera should be moved closer to rescan.
     *
     * Default value is “Move closer and tap shutter”.
     *
     * @since 6.17.0
     */
    get textForMoveCloserAndRescanHint(): string;
    set textForMoveCloserAndRescanHint(newValue: string);
    /**
     * Use this property to access or modify the text of the hint displayed when camera should be further away to rescan.
     *
     * Default value is “Step back and tap shutter”.
     *
     * @since 6.17.0
     */
    get textForMoveFurtherAndRescanHint(): string;
    set textForMoveFurtherAndRescanHint(newValue: string);
    /**
     * Use this property to access or modify the text of the hint displayed when a barcode not in list is scanned.
     *
     * Default value is “Wrong barcodes detected!”.
     *
     * @since 8.3.0
     */
    get textForBarcodesNotInListDetectedHint(): string;
    set textForBarcodesNotInListDetectedHint(newValue: string);
    /**
     * Use this property to access or modify the text of the hint displayed when screen is cleaned.
     *
     * Default value is “Screen cleaned up. All items saved.”.
     *
     * @since 8.3.0
     */
    get textForScreenCleanedUpHint(): string;
    set textForScreenCleanedUpHint(newValue: string);
    /**
     * Use this property to access or modify the text of the hint that suggests the user to use gestures to form clusters. Shown only when {@link BarcodeCountSettings.clusteringMode} is {@link ClusteringMode.Manual} or {@link ClusteringMode.AutoWithManualCorrection}.
     *
     * Default value is “Swipe or circle codes to group together.”.
     *
     * @since 8.3.0
     */
    get textForClusteringGestureHint(): string;
    set textForClusteringGestureHint(newValue: string);
    /**
     * When set to *true*, a progress bar will be shown to the user when a capture list has been set using {@link BarcodeCount.setBarcodeCountCaptureList}, indicating how many of the barcodes in the list have been scanned.
     *
     * By default this property is *true*.
     *
     * @since 6.25.0
     */
    get shouldShowListProgressBar(): boolean;
    set shouldShowListProgressBar(newValue: boolean);
    /**
     * Indicates whether the torch control button should be shown to the user.
     *
     * Default is *false*.
     *
     * @since 6.26.0
     */
    get shouldShowTorchControl(): boolean;
    set shouldShowTorchControl(newValue: boolean);
    /**
     * Updates the position of the torch control button.
     *
     * Only {@link Anchor.TopLeft}, {@link Anchor.TopRight}, {@link Anchor.BottomLeft} and {@link Anchor.BottomRight}, are supported.
     *
     * Any other value will default to {@link Anchor.TopLeft}.
     *
     * @since 6.26.0
     */
    get torchControlPosition(): Anchor$1;
    set torchControlPosition(newValue: Anchor$1);
    /**
     * Text of the hint displayed when the user deselects an item.
     *
     * Default value is “Barcode removed”.
     *
     * @since 7.0.0
     */
    get textForTapToUncountHint(): string;
    set textForTapToUncountHint(newValue: string);
    /**
     * Enables this feature to be able to deselect items by tapping on the highlights.
     *
     * Default value is *false*.
     *
     * @since 7.0.0
     */
    get tapToUncountEnabled(): boolean;
    set tapToUncountEnabled(newValue: boolean);
    /**
     * Use this object to customize barcode not in list actions.
     *
     * @since 7.1.0
     */
    get barcodeNotInListActionSettings(): BarcodeCountNotInListActionSettings;
    set barcodeNotInListActionSettings(newValue: BarcodeCountNotInListActionSettings);
    /**
     * Enables the {@link BarcodeCountView} to react to clicks of the volume button.
     *
     * This method is only supported on iOS devices.
     *
     * @since 7.1.0
     */
    get hardwareTriggerEnabled(): boolean;
    set hardwareTriggerEnabled(newValue: boolean);
    constructor(props: BarcodeCountViewProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: BarcodeCountViewProps): void;
    /**
     * Clear all currently shown barcodes highlights. This only affects screen rendering, and all detected barcodes will still be available in the {@link BarcodeCountSession}.
     *
     * @since 6.17.0
     */
    clearHighlights(): Promise<void>;
    /**
     * Pass an instance of {@link BarcodeCountToolbarSettings} to configure the text and accessibility options for the toolbar.
     *
     * @since 6.17.0
     */
    setToolbarSettings(settings: BarcodeCountToolbarSettings): void;
    /**
     * Sets a {@link BarcodeCountStatusProvider} for this view. This provider will be queried when the “status mode” button is clicked.
     *
     * The Barcode Count status mode API is still in beta and may change in future versions of Scandit Data Capture SDK.
     *
     * @since 8.3.0
     */
    setStatusProvider(provider: BarcodeCountStatusProvider): void;
    /**
     * Sets a {@link Brush} to be used for a particular recognized {@link TrackedBarcode}. This will override any other applicable brush for this particular barcode.
     *
     * Used only when the view uses the {@link BarcodeCountViewStyle.Dot} style.
     *
     * @since 7.1.0
     */
    setBrushForRecognizedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    /**
     * Sets a {@link Brush} to be used for a particular recognized {@link TrackedBarcode} that doesn’t belong to the capture list. This will only be applicable when using a capture list, and will override any other applicable brush for this particular barcode.
     *
     * Used only when the view uses the {@link BarcodeCountViewStyle.Dot} style.
     *
     * @since 7.1.0
     */
    setBrushForRecognizedBarcodeNotInList(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    /**
     * Sets a {@link Brush} to be used for a particular accepted {@link TrackedBarcode}. This will override any other applicable brush for this particular barcode.
     *
     * Used only when the view uses the {@link BarcodeCountViewStyle.Dot} style.
     *
     * @since 7.1.0
     */
    setBrushForAcceptedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    /**
     * Sets a {@link Brush} to be used for a particular rejected {@link TrackedBarcode}. This will override any other applicable brush for this particular barcode.
     *
     * Used only when the view uses the {@link BarcodeCountViewStyle.Dot} style.
     *
     * @since 7.1.0
     */
    setBrushForRejectedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    /**
     * Sets a {@link BarcodeCountIcon} to be used for a particular recognized {@link TrackedBarcode}. This will override any other applicable icon for this particular barcode.
     *
     * Used only when the view uses the {@link BarcodeCountViewStyle.Icon} style.
     *
     * On iOS, passing *null* suppresses the highlight for the given barcode. On Android, passing *null* removes the override, so the barcode reverts to its default or listener-provided icon.
     *
     * The icon is applied while answering the corresponding view listener callback for that barcode. Calling this method at another time resolves without changing the icon, as the pre-existing brush setters do.
     *
     * @since 8.7.0
     */
    setIconForRecognizedBarcode(trackedBarcode: TrackedBarcode, icon: BarcodeCountIcon | null): Promise<void>;
    /**
     * Sets a {@link BarcodeCountIcon} to be used for a particular recognized {@link TrackedBarcode} that doesn’t belong to the capture list. This will only be applicable when using a capture list, and will override any other applicable icon for this particular barcode.
     *
     * Used only when the view uses the {@link BarcodeCountViewStyle.Icon} style.
     *
     * On iOS, passing *null* suppresses the highlight for the given barcode. On Android, passing *null* removes the override, so the barcode reverts to its default or listener-provided icon.
     *
     * The icon is applied while answering the corresponding view listener callback for that barcode. Calling this method at another time resolves without changing the icon, as the pre-existing brush setters do.
     *
     * @since 8.7.0
     */
    setIconForRecognizedBarcodeNotInList(trackedBarcode: TrackedBarcode, icon: BarcodeCountIcon | null): Promise<void>;
    /**
     * Sets a {@link BarcodeCountIcon} to be used for a particular accepted {@link TrackedBarcode}. This will override any other applicable icon for this particular barcode.
     *
     * Used only when the view uses the {@link BarcodeCountViewStyle.Icon} style.
     *
     * On iOS, passing *null* suppresses the highlight for the given barcode. On Android, passing *null* removes the override, so the barcode reverts to its default or listener-provided icon.
     *
     * The icon is applied while answering the corresponding view listener callback for that barcode. Calling this method at another time resolves without changing the icon, as the pre-existing brush setters do.
     *
     * @since 8.7.0
     */
    setIconForAcceptedBarcode(trackedBarcode: TrackedBarcode, icon: BarcodeCountIcon | null): Promise<void>;
    /**
     * Sets a {@link BarcodeCountIcon} to be used for a particular rejected {@link TrackedBarcode}. This will override any other applicable icon for this particular barcode.
     *
     * Used only when the view uses the {@link BarcodeCountViewStyle.Icon} style.
     *
     * On iOS, passing *null* suppresses the highlight for the given barcode. On Android, passing *null* removes the override, so the barcode reverts to its default or listener-provided icon.
     *
     * The icon is applied while answering the corresponding view listener callback for that barcode. Calling this method at another time resolves without changing the icon, as the pre-existing brush setters do.
     *
     * @since 8.7.0
     */
    setIconForRejectedBarcode(trackedBarcode: TrackedBarcode, icon: BarcodeCountIcon | null): Promise<void>;
    /**
     * This method is only supported on Android devices and is only available on devices with api >= 28. Whether a device supports this can be checked at runtime with the {@link BarcodeCountView.hardwareTriggerSupported} flag.
     *
     * @since 7.1.0
     */
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




/**
 * Callbacks for taps on the view’s own buttons. Set it through {@link BarcodeCountAioViewProps.uiListener}.
 *
 * The callbacks correspond to the {@link BarcodeCountViewUiListener} methods, without the `view` argument.
 *
 * @since 8.7.0
 */
interface BarcodeCountAioUiListener {
    /**
     * Called when the list button is tapped, with a {@link BarcodeCountSessionSnapshot} of the current session.
     *
     * @since 8.7.0
     */
    didTapListButton?(snapshot: BarcodeCountSessionSnapshot | null): void;
    /**
     * Called when the exit button is tapped, with a {@link BarcodeCountSessionSnapshot} of the current session.
     *
     * @since 8.7.0
     */
    didTapExitButton?(snapshot: BarcodeCountSessionSnapshot | null): void;
    /**
     * Called when the single scan button is tapped. Called from the main thread.
     *
     * @since 8.7.0
     */
    didTapSingleScanButton?(): void;
}
/**
 * Callbacks for per-barcode brushes and taps. Set it through {@link BarcodeCountAioViewProps.listener}.
 *
 * The callbacks correspond to the {@link BarcodeCountViewListener} methods, without the `view` argument.
 *
 * @since 8.7.0
 */
interface BarcodeCountAioViewListener {
    /**
     * Returns the brush to draw for a recognized barcode, or *null* to draw nothing.
     *
     * @since 8.7.0
     */
    brushForRecognizedBarcode?(trackedBarcode: TrackedBarcode): Brush | null;
    /**
     * Returns the brush to draw for a recognized barcode that is not in the capture list, or *null* to draw nothing.
     *
     * @since 8.7.0
     */
    brushForRecognizedBarcodeNotInList?(trackedBarcode: TrackedBarcode): Brush | null;
    /**
     * Returns the brush to draw for an accepted barcode, or *null* to draw nothing.
     *
     * @since 8.7.0
     */
    brushForAcceptedBarcode?(trackedBarcode: TrackedBarcode): Brush | null;
    /**
     * Returns the brush to draw for a rejected barcode, or *null* to draw nothing.
     *
     * @since 8.7.0
     */
    brushForRejectedBarcode?(trackedBarcode: TrackedBarcode): Brush | null;
    /**
     * Called when a recognized barcode is tapped.
     *
     * @since 8.7.0
     */
    didTapRecognizedBarcode?(trackedBarcode: TrackedBarcode): void;
    /**
     * Called when a filtered-out barcode is tapped.
     *
     * @since 8.7.0
     */
    didTapFilteredBarcode?(filteredBarcode: TrackedBarcode): void;
    /**
     * Called when a recognized barcode that is not in the capture list is tapped.
     *
     * @since 8.7.0
     */
    didTapRecognizedBarcodeNotInList?(trackedBarcode: TrackedBarcode): void;
    /**
     * Called when an accepted barcode is tapped.
     *
     * @since 8.7.0
     */
    didTapAcceptedBarcode?(trackedBarcode: TrackedBarcode): void;
    /**
     * Called when a rejected barcode is tapped.
     *
     * @since 8.7.0
     */
    didTapRejectedBarcode?(trackedBarcode: TrackedBarcode): void;
    /**
     * Called when a cluster of barcodes is tapped.
     *
     * @since 8.7.0
     */
    didTapCluster?(cluster: Cluster): void;
    /**
     * Called when every barcode in the capture list has been counted.
     *
     * @since 8.7.0
     */
    didCompleteCaptureList?(): void;
}
/**
 * Configuration for {@link BarcodeCountAioView}.
 *
 * **A settings source is required:** pass either {@link BarcodeCountAioViewProps.symbologies} or {@link BarcodeCountAioViewProps.barcodeCountSettings}. Both are optional on this interface, but {@link BarcodeCountAioView} requires one of them, so rendering the component with neither is a compile error. Supplying both is allowed, and {@link BarcodeCountAioViewProps.barcodeCountSettings} takes precedence. Every other prop is optional.
 *
 * @since 8.7.0
 */
interface BarcodeCountAioViewProps {
    /**
     * Navigation object for the screen the component is rendered on, for example React Navigation’s `navigation` prop (typed as {@link ScanditNavigationProp}). When it is provided, scanning is suspended — the mode is disabled and the camera turned off — while the screen is blurred or the application is backgrounded, and resumed when the screen regains focus. Ignored while {@link BarcodeCountAioViewProps.disabled} is set.
     *
     * @since 8.7.0
     */
    navigation?: ScanditNavigationProp;
    /**
     * Set to *true* to keep scanning off. Leaving it *false* does not keep scanning on — navigation and app-state handling still turn the mode on and off on their own.
     *
     * {@link BarcodeCountAioViewHandle.enable} and {@link BarcodeCountAioViewHandle.disable} change the same state directly. If you call those, this prop no longer reflects whether the component is actually scanning.
     *
     * @since 8.7.0
     */
    disabled?: boolean;
    /**
     * Turns off the automatic enabling and disabling of the mode in response to the application moving between foreground and background.
     *
     * @since 8.7.0
     */
    appStateHandlingDisabled?: boolean;
    /**
     * Called on each scan, with the barcodes taken from {@link BarcodeCountSession.recognizedBarcodes}.
     *
     * Return a promise to keep the frame alive while asynchronous work runs. `getFrameData()` resolves to the {@link FrameData} for the frame, and becomes invalid once the returned promise resolves.
     *
     * Backed by the native BarcodeCountListener.didScan() event, so it fires only on a recognition, independently of {@link BarcodeCountAioViewProps.didUpdateSession}.
     *
     * @since 8.7.0
     */
    didScan?(barcodes: Barcode[], session: BarcodeCountSession, getFrameData: () => Promise<FrameData | null>): void | Promise<void>;
    /**
     * Called on every session update, regardless of whether a barcode was recognized. Backed by the native {@link BarcodeCountListener.onSessionUpdated} event and independent of {@link BarcodeCountAioViewProps.didScan}.
     *
     * @since 8.7.0
     */
    didUpdateSession?(session: BarcodeCountSession, getFrameData: () => Promise<FrameData | null>): void | Promise<void>;
    /**
     * Symbologies to enable. Shorthand for {@link BarcodeCountSettings.enabledSymbologies}; ignored when {@link BarcodeCountAioViewProps.barcodeCountSettings} is set.
     *
     * @since 8.7.0
     */
    symbologies?: Symbology[];
    /**
     * The settings applied to the underlying mode, as a complete {@link BarcodeCountSettings} object. Takes precedence over {@link BarcodeCountAioViewProps.symbologies}; when both are given, the shorthand is ignored and a warning is logged.
     *
     * @since 8.7.0
     */
    barcodeCountSettings?: BarcodeCountSettings | null;
    /**
     * Enables “Scanning against a list” mode, which provides additional functionality when looking for a specific set of Barcodes.
     *
     * @since 8.7.0
     */
    captureList?: BarcodeCountCaptureList | null;
    /**
     * Barcodes to count in addition to those recognized from the camera feed, such as ones entered by hand.
     *
     * @since 8.7.0
     */
    additionalBarcodes?: Barcode[] | null;
    /**
     * Listener that receives callbacks when the view’s own buttons are tapped. See {@link BarcodeCountAioUiListener}.
     *
     * @since 8.7.0
     */
    uiListener?: BarcodeCountAioUiListener;
    /**
     * Listener that supplies per-barcode brushes and receives callbacks when a {@link TrackedBarcode} is tapped. See {@link BarcodeCountAioViewListener}.
     *
     * @since 8.7.0
     */
    listener?: BarcodeCountAioViewListener;
    /**
     * Sound and vibration feedback emitted on scan, as a {@link BarcodeCountFeedback}. Omit to use the SDK default, which enables both sound (a beep) and vibration.
     *
     * @since 8.7.0
     */
    feedback?: BarcodeCountFeedback;
    /**
     * Text and accessibility overrides for the in-view toolbar toggle buttons.
     *
     * @since 8.7.0
     */
    toolbarSettings?: BarcodeCountToolbarSettings;
    /**
     * Provider that drives the status icons and status mode.
     *
     * Required whenever {@link BarcodeCountAioViewProps.shouldShowStatusIconsOnScan} is *true*; without a provider, every scan aborts.
     *
     * @since 8.7.0
     */
    statusProvider?: BarcodeCountStatusProvider | null;
    /**
     * The view style. Defaults to {@link BarcodeCountViewStyle.Dot}.
     *
     * @since 8.7.0
     */
    viewStyle?: BarcodeCountViewStyle;
    /**
     * Whether the view renders scan-area guides. Defaults to *false*. Useful during development to check that the scan area of the view is positioned correctly; not intended for production.
     *
     * @since 8.7.0
     */
    shouldShowScanAreaGuides?: boolean;
    /**
     * Whether a list button is shown in the lower left corner of the screen. Tapping it freezes the mode unless {@link BarcodeCountAioViewProps.shouldDisableModeOnExitButtonTapped} is *false*, and calls {@link BarcodeCountAioUiListener.didTapListButton}.
     *
     * @since 8.7.0
     */
    shouldShowListButton?: boolean;
    /**
     * Whether an exit button is shown in the lower right corner of the screen. The button does nothing on its own; tapping it calls {@link BarcodeCountAioUiListener.didTapExitButton}.
     *
     * @since 8.7.0
     */
    shouldShowExitButton?: boolean;
    /**
     * Whether a single scan button is shown in the lower left corner of the preview. The button does nothing on its own; tapping it calls {@link BarcodeCountAioUiListener.didTapSingleScanButton}.
     *
     * @since 8.7.0
     */
    shouldShowSingleScanButton?: boolean;
    /**
     * Whether the mode is disabled automatically when the exit button is tapped. Defaults to *true*.
     *
     * @since 8.7.0
     */
    shouldDisableModeOnExitButtonTapped?: boolean;
    /**
     * Whether a shutter button is shown centered at the bottom of the screen. Tapping it triggers the processing of the current video feed, the same as calling {@link BarcodeCount.startScanningPhase}. Defaults to *true*.
     *
     * @since 8.7.0
     */
    shouldShowShutterButton?: boolean;
    /**
     * Whether a floating shutter button is shown. It can be dragged to any position and, when tapped, triggers the processing of the current video feed. Defaults to *false*.
     *
     * @since 8.7.0
     */
    shouldShowFloatingShutterButton?: boolean;
    /**
     * Whether a button that clears all currently shown barcode highlights is shown above the shutter button.
     *
     * @since 8.7.0
     */
    shouldShowClearHighlightsButton?: boolean;
    /**
     * Whether a status mode button is shown in the lower right corner of the preview. It toggles “status mode”, in which the barcode highlights are replaced by status indicators for each barcode.
     *
     * @since 8.7.0
     */
    shouldShowStatusModeButton?: boolean;
    /**
     * Whether a collapsible toolbar is shown at the top of the preview, with convenience buttons for changing preferences during scanning. Defaults to *true*.
     *
     * @since 8.7.0
     */
    shouldShowToolbar?: boolean;
    /**
     * Whether the torch control button is shown. Defaults to *false*.
     *
     * @since 8.7.0
     */
    shouldShowTorchControl?: boolean;
    /**
     * Position of the torch control button. Only {@link Anchor.TopLeft}, {@link Anchor.TopRight}, {@link Anchor.BottomLeft} and {@link Anchor.BottomRight} are supported; any other value falls back to {@link Anchor.TopLeft}.
     *
     * @since 8.7.0
     */
    torchControlPosition?: Anchor;
    /**
     * The style of the Scandit logo shown on the view.
     *
     * @since 8.7.0
     */
    logoStyle?: LogoStyle;
    /**
     * Where the Scandit logo is anchored in the view.
     *
     * @since 8.7.0
     */
    logoAnchor?: Anchor;
    /**
     * Whether the view reacts to presses of the volume button.
     *
     * @since 8.7.0
     */
    hardwareTriggerEnabled?: boolean;
    /**
     * Whether items can be uncounted by tapping their highlights. Defaults to *false*.
     *
     * @since 8.7.0
     */
    tapToUncountEnabled?: boolean;
    /**
     * Whether user guidance and the loading view are shown. The user guidance prompts the user to scan, and to move closer or further away from the target barcodes in order to scan them properly. Defaults to *true*.
     *
     * @since 8.7.0
     */
    shouldShowUserGuidanceView?: boolean;
    /**
     * Whether hints about the currently scanned barcodes are shown. Defaults to *true*.
     *
     * @since 8.7.0
     */
    shouldShowHints?: boolean;
    /**
     * Whether a progress bar is shown when a capture list is set, indicating how many of the barcodes in the list have been scanned.
     *
     * @since 8.7.0
     */
    shouldShowListProgressBar?: boolean;
    /**
     * Brush applied to recognized tracked barcodes when {@link BarcodeCountAioViewListener.brushForRecognizedBarcode} is not supplied. With a capture list set, it applies to recognized barcodes that are part of the list. Set it to *null* to hide all tracked barcodes. Defaults to a yellow brush. Used only with the {@link BarcodeCountViewStyle.Dot} style.
     *
     * @since 8.7.0
     */
    recognizedBrush?: Brush | null;
    /**
     * Brush applied to recognized tracked barcodes that are not part of the capture list, when {@link BarcodeCountAioViewListener.brushForRecognizedBarcodeNotInList} is not supplied. Unused when no capture list is set. Set it to *null* to hide those barcodes. Defaults to a red brush. Used only with the {@link BarcodeCountViewStyle.Dot} style.
     *
     * @since 8.7.0
     */
    notInListBrush?: Brush | null;
    /**
     * Brush applied to accepted tracked barcodes when {@link BarcodeCountAioViewListener.brushForAcceptedBarcode} is not supplied. Set it to *null* to hide all accepted barcodes. Defaults to a green brush. Used only with the {@link BarcodeCountViewStyle.Dot} style.
     *
     * @since 8.7.0
     */
    acceptedBrush?: Brush | null;
    /**
     * Brush applied to rejected tracked barcodes when {@link BarcodeCountAioViewListener.brushForRejectedBarcode} is not supplied. Set it to *null* to hide all rejected barcodes. Defaults to a red brush. Used only with the {@link BarcodeCountViewStyle.Dot} style.
     *
     * @since 8.7.0
     */
    rejectedBrush?: Brush | null;
    /**
     * Settings for the highlights of filtered barcodes.
     *
     * @since 8.7.0
     */
    filterSettings?: BarcodeFilterHighlightSettings | null;
    /**
     * Settings for the actions offered for barcodes that are not in the capture list.
     *
     * @since 8.7.0
     */
    barcodeNotInListActionSettings?: BarcodeCountNotInListActionSettings;
    /**
     * Settings for the mapping flow, which pairs each counted barcode with a location.
     *
     * @since 8.7.0
     */
    mappingFlowSettings?: BarcodeCountMappingFlowSettings;
    /**
     * Whether status icons are shown immediately after barcodes are scanned, without manually activating status mode.
     *
     * @since 8.7.0
     */
    shouldShowStatusIconsOnScan?: boolean;
    /**
     * Text of the clear button label provided by the view. Defaults to “Clear screen”.
     *
     * @since 8.7.0
     */
    clearHighlightsButtonText?: string;
    /**
     * Text of the exit button label provided by the view. Defaults to “Finish”.
     *
     * @since 8.7.0
     */
    exitButtonText?: string;
    /**
     * Text of the hint suggesting to tap the shutter button. Defaults to “Tap shutter to scan items”.
     *
     * @since 8.7.0
     */
    textForTapShutterToScanHint?: string;
    /**
     * Text of the hint displayed while scanning is in progress. Defaults to “Scanning”.
     *
     * @since 8.7.0
     */
    textForScanningHint?: string;
    /**
     * Text of the hint displayed when the camera should be moved closer to rescan. Defaults to “Move closer and tap shutter”.
     *
     * @since 8.7.0
     */
    textForMoveCloserAndRescanHint?: string;
    /**
     * Text of the hint displayed when the camera should be moved further away to rescan. Defaults to “Step back and tap shutter”.
     *
     * @since 8.7.0
     */
    textForMoveFurtherAndRescanHint?: string;
    /**
     * Text of the hint displayed when a barcode not in list is scanned. Defaults to “Wrong barcodes detected!”.
     *
     * @since 8.7.0
     */
    textForBarcodesNotInListDetectedHint?: string;
    /**
     * Text of the hint displayed when the screen is cleaned up. Defaults to “Screen cleaned up. All items saved.”.
     *
     * @since 8.7.0
     */
    textForScreenCleanedUpHint?: string;
    /**
     * Text of the hint suggesting gestures to form clusters. Shown only when {@link BarcodeCountSettings.clusteringMode} is {@link ClusteringMode.Manual} or {@link ClusteringMode.AutoWithManualCorrection}. Defaults to “Swipe or circle codes to group together.”.
     *
     * @since 8.7.0
     */
    textForClusteringGestureHint?: string;
    /**
     * Text of the hint displayed when the user deselects an item. Defaults to “Barcode removed”.
     *
     * @since 8.7.0
     */
    textForTapToUncountHint?: string;
    /**
     * Accessibility hint for the list button. Defaults to “List button”.
     *
     * @since 8.7.0
     */
    listButtonAccessibilityHint?: string;
    /**
     * Accessibility label for the list button. Defaults to “List button”.
     *
     * @since 8.7.0
     */
    listButtonAccessibilityLabel?: string;
    /**
     * Content description for the list button. Defaults to “List button”.
     *
     * @since 8.7.0
     */
    listButtonContentDescription?: string;
    /**
     * Accessibility hint for the exit button. Defaults to “Exit button”.
     *
     * @since 8.7.0
     */
    exitButtonAccessibilityHint?: string;
    /**
     * Accessibility label for the exit button. Defaults to “Exit button”.
     *
     * @since 8.7.0
     */
    exitButtonAccessibilityLabel?: string;
    /**
     * Content description for the exit button. Defaults to “Exit button”.
     *
     * @since 8.7.0
     */
    exitButtonContentDescription?: string;
    /**
     * Accessibility hint for the shutter button. Defaults to “Shutter button”.
     *
     * @since 8.7.0
     */
    shutterButtonAccessibilityHint?: string;
    /**
     * Accessibility label for the shutter button. Defaults to “Shutter button”.
     *
     * @since 8.7.0
     */
    shutterButtonAccessibilityLabel?: string;
    /**
     * Content description for the shutter button. Defaults to “Shutter button”.
     *
     * @since 8.7.0
     */
    shutterButtonContentDescription?: string;
    /**
     * Accessibility hint for the floating shutter button. Defaults to “Floating shutter button”.
     *
     * @since 8.7.0
     */
    floatingShutterButtonAccessibilityHint?: string;
    /**
     * Accessibility label for the floating shutter button. Defaults to “Floating shutter button”.
     *
     * @since 8.7.0
     */
    floatingShutterButtonAccessibilityLabel?: string;
    /**
     * Content description for the floating shutter button. Defaults to “Floating shutter button”.
     *
     * @since 8.7.0
     */
    floatingShutterButtonContentDescription?: string;
    /**
     * Accessibility hint for the clear highlights button. Defaults to “Clear highlights button”.
     *
     * @since 8.7.0
     */
    clearHighlightsButtonAccessibilityHint?: string;
    /**
     * Accessibility label for the clear highlights button. Defaults to “Clear highlights button”.
     *
     * @since 8.7.0
     */
    clearHighlightsButtonAccessibilityLabel?: string;
    /**
     * Content description for the clear highlights button. Defaults to “Clear highlights button”.
     *
     * @since 8.7.0
     */
    clearHighlightsButtonContentDescription?: string;
    /**
     * Accessibility hint for the single scan button. Defaults to “Single scan button”.
     *
     * @since 8.7.0
     */
    singleScanButtonAccessibilityHint?: string;
    /**
     * Accessibility label for the single scan button. Defaults to “Single scan button”.
     *
     * @since 8.7.0
     */
    singleScanButtonAccessibilityLabel?: string;
    /**
     * Content description for the single scan button. Defaults to “Single scan button”.
     *
     * @since 8.7.0
     */
    singleScanButtonContentDescription?: string;
    /**
     * Accessibility hint for the status mode button. Defaults to “Status mode button”.
     *
     * @since 8.7.0
     */
    statusModeButtonAccessibilityHint?: string;
    /**
     * Accessibility label for the single status mode button. Defaults to “Status mode button”.
     *
     * @since 8.7.0
     */
    statusModeButtonAccessibilityLabel?: string;
    /**
     * Content description for the status mode button. Defaults to “Status mode button”.
     *
     * @since 8.7.0
     */
    statusModeButtonContentDescription?: string;
    /**
     * Style applied to the view, defaulting to `{ flex: 1 }`. This is the only React Native `View` prop the component forwards; it renders its own native view and passes nothing else through.
     *
     * @since 8.7.0
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Content rendered on top of the scanning UI.
     *
     * @since 8.7.0
     */
    children?: ReactNode;
}
type BarcodeCountAioViewSettingsSource = {
    symbologies: Symbology[];
} | {
    barcodeCountSettings: BarcodeCountSettings;
};
type BarcodeCountAioViewComponentProps = BarcodeCountAioViewProps & BarcodeCountAioViewSettingsSource;
/**
 * Imperative operations on a {@link BarcodeCountAioView}, reached through a `ref` on the component.
 *
 * @since 8.7.0
 */
interface BarcodeCountAioViewHandle {
    /**
     * Resets the session, clearing the history of tracked and unscanned barcodes.
     *
     * @since 8.7.0
     */
    reset(): Promise<void>;
    /**
     * Clears all currently shown barcode highlights. Only affects rendering; detected barcodes remain in the {@link BarcodeCountSession}.
     *
     * @since 8.7.0
     */
    clearHighlights(): Promise<void>;
    /**
     * Applies toolbar text and accessibility overrides. The declarative equivalent is {@link BarcodeCountAioViewProps.toolbarSettings}.
     *
     * @since 8.7.0
     */
    setToolbarSettings(settings: BarcodeCountToolbarSettings): void;
    /**
     * Sets the provider driving status icons and status mode. The declarative equivalent is {@link BarcodeCountAioViewProps.statusProvider}.
     *
     * @since 8.7.0
     */
    setStatusProvider(provider: BarcodeCountStatusProvider): void;
    /**
     * Overrides the brush used for a recognized {@link TrackedBarcode}. Used only with the {@link BarcodeCountViewStyle.Dot} style.
     *
     * @since 8.7.0
     */
    setBrushForRecognizedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    /**
     * Overrides the brush used for a recognized {@link TrackedBarcode} that is not in the capture list. Applies only when a capture list is set. Used only with the {@link BarcodeCountViewStyle.Dot} style.
     *
     * @since 8.7.0
     */
    setBrushForRecognizedBarcodeNotInList(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    /**
     * Overrides the brush used for an accepted {@link TrackedBarcode}. Used only with the {@link BarcodeCountViewStyle.Dot} style.
     *
     * @since 8.7.0
     */
    setBrushForAcceptedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    /**
     * Overrides the brush used for a rejected {@link TrackedBarcode}. Used only with the {@link BarcodeCountViewStyle.Dot} style.
     *
     * @since 8.7.0
     */
    setBrushForRejectedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    /**
     * Makes the view react to presses of the hardware button with the given key code. Pass *null* for the default button: the dedicated hardware button on XCover devices, `KeyEvent.KEYCODE_VOLUME_DOWN` elsewhere.
     *
     * @since 8.7.0
     */
    enableHardwareTrigger(hardwareTriggerKeyCode: number | null): Promise<void>;
    /**
     * Turns scanning on now: enables the mode and turns the camera on. Automatic navigation and application-state handling may subsequently turn it off again.
     *
     * @since 8.7.0
     */
    enable(): Promise<void>;
    /**
     * Turns scanning off now: disables the mode and turns the camera off.
     *
     * @since 8.7.0
     */
    disable(): Promise<void>;
}
/**
 * An all-in-one React component for Barcode Count. Rendering this single element replaces the manual assembly of a {@link DataCaptureContext}, a {@link BarcodeCount} mode and a {@link BarcodeCountView} — the component owns all of them, along with its camera claim and its lifecycle.
 *
 * The component must be rendered inside a {@link ScanditProvider}, which supplies the {@link DataCaptureContext} and the shared camera. Scanning starts once the component is mounted and enabled, and stops when it unmounts.
 *
 * Configuration is passed through {@link BarcodeCountAioViewProps}. To gain manual control over the component, attach a React `ref` typed as {@link BarcodeCountAioViewHandle}. Interactions are reported through {@link BarcodeCountAioUiListener} and {@link BarcodeCountAioViewListener}.
 *
 * To build your first screen with the AIO components, refer to the [AIO components getting started](#) guide. For the classic API, refer to the [MatrixScan Count Get Started](https://docs.scandit.com/sdks/react-native/matrixscan-count/get-started) guide.
 *
 * @since 8.7.0
 */
declare const BarcodeCountAioView: React.ForwardRefExoticComponent<BarcodeCountAioViewComponentProps & React.RefAttributes<BarcodeCountAioViewHandle>>;

interface BarcodePickViewProps {
    context: DataCaptureContext;
    barcodePick: BarcodePick;
    settings: BarcodePickViewSettings;
    cameraSettings: CameraSettings;
    style: StyleProp<ViewStyle>;
    navigation?: NavigationProp<ParamListBase>;
    onLayout?: (event: LayoutChangeEvent) => void;
}
/**
 * BarcodePickView.
 *
 * @since 6.19.0
 */
declare class BarcodePickView extends React.Component<BarcodePickViewProps> {
    private baseBarcodePickView;
    private _isMounted;
    private _createViewRafHandle;
    private _viewCreated;
    private navigationUnsubscribers;
    private cameraOwner;
    constructor(props: BarcodePickViewProps);
    /**
     * Sets the listener which is called whenever the finish button is tapped from the view.
     *
     * @since 6.23.0
     */
    get uiListener(): BarcodePickViewUiListener | null;
    set uiListener(value: BarcodePickViewUiListener | null);
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**
     * Starts the camera and the scanning process. Can be stopped by calling {@link BarcodePickView.stop}.
     *
     * @since 6.19.0
     */
    start(): Promise<void>;
    /**
     * Pauses the camera and the scanning process. It can be started again using {@link BarcodePickView.start}.
     *
     * @since 6.24.0
     */
    stop(): Promise<void>;
    /**
     * Freezes the camera and the highlights position to make the selection easier. The scanning can be started again using {@link BarcodePickView.start}.
     *
     * @since 6.23.0
     */
    freeze(): Promise<void>;
    /**
     * Notifies the barcode pick view that the container has paused.
     *
     * For instance, this method could be called when the [AppState](https://reactnative.dev/docs/appstate) state changes to background or inactive.
     *
     * @since 6.24.0
     */
    pause(): Promise<void>;
    /**
     * Notifies the barcode pick view that the container has resumed.
     *
     * For instance, this method could be called when the [AppState](https://reactnative.dev/docs/appstate) state changes to active.
     *
     * @since 6.24.0
     */
    resume(): Promise<void>;
    /**
     * Resets the picking flow. This will clear all picked items and restore the initial state.
     *
     * @since 7.5.0
     */
    reset(): Promise<void>;
    /**
     * Adds a {@link BarcodePickViewListener} to the mode. User actions will be notified to the listener.
     *
     * @since 6.23.0
     */
    addListener(listener: BarcodePickViewListener): void;
    /**
     * Removes a {@link BarcodePickViewListener}.
     *
     * @since 6.23.0
     */
    removeListener(listener: BarcodePickViewListener): void;
    /**
     * Adds a {@link BarcodePickActionListener} to the mode. User actions will be notified to the listener.
     *
     * @since 6.19.0
     */
    addActionListener(listener: BarcodePickActionListener): void;
    /**
     * Removes a {@link BarcodePickActionListener}.
     *
     * @since 6.19.0
     */
    removeActionListener(listener: BarcodePickActionListener): void;
    render(): React.JSX.Element;
    /**
     * Stops the camera and the scanning process. After this call the view should not be used anymore.
     *
     * @since 6.23.0
     */
    release(): void;
    private setupNavigationListeners;
    private onFocus;
    private onBlur;
    private onNativeViewLayout;
    private scheduleCreateNativeView;
    private tryCreateNativeView;
    private toJSON;
}

/**
 * Configuration interface for defining the properties of a {@link BarcodeFindView} component. This interface specifies the required and optional parameters for initializing a BarcodeFind view.
 *
 * @since 7.6.0
 */
interface BarcodeFindViewProps {
    /**
     * The data capture context that manages the camera and processing pipeline. This context coordinates the barcode find mode with other capture modes and provides access to the camera.
     *
     * @since 7.6.0
     */
    context: DataCaptureContext;
    /**
     * The barcode find mode instance that defines the scanning behavior and settings. This mode handles the barcode detection logic and manages the list of items to find.
     *
     * @since 7.6.0
     */
    barcodeFind: BarcodeFind;
    /**
     * Optional view settings that control the appearance and behavior of the barcode find view. If not provided, the view will use default settings for colors, sounds, haptic feedback, and UI elements.
     *
     * @since 7.6.0
     */
    viewSettings?: BarcodeFindViewSettings;
    /**
     * Optional camera settings to customize the camera behavior. If not provided, the view will use the recommended camera settings optimized for barcode find operations. These settings control aspects like resolution, frame rate, and focus behavior.
     *
     * @since 7.6.0
     */
    cameraSettings?: CameraSettings;
    /**
     * Optional style object for customizing the appearance of the BarcodeFind view component. This property allows you to apply custom styles and follows the styling conventions of the respective framework.
     *
     * @since 7.6.0
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Navigation object from React Navigation library, used specifically in React Native applications. This property enables the BarcodeFind view to integrate with React Navigation’s navigation system for better handling camera access.
     *
     * @since 8.0.0
     */
    navigation?: NavigationProp<ParamListBase>;
    onLayout?: (event: LayoutChangeEvent) => void;
}
/**
 * {@link BarcodeFind} comes with a ready-to-use search UI that uses augmented reality overlays to highlight items that match predefined criteria. The BarcodeFindView integrates with any app in just a few lines of code.
 *
 * @since 6.22.0
 */
declare class BarcodeFindView extends React.Component<BarcodeFindViewProps> {
    private baseBarcodeFindView;
    private _isMounted;
    private _viewCreated;
    private _createViewRafHandle;
    private navigationUnsubscribers;
    private cameraOwner;
    constructor(props: BarcodeFindViewProps);
    /**
     * Returns whether the device supports listening for hardware button events. This is true for devices with api >= 28.
     *
     * @since 7.1.0
     */
    static get hardwareTriggerSupported(): boolean;
    /**
     * Sets the listener which is called whenever the finish button is tapped from the view.
     *
     * @since 6.22.0
     */
    get barcodeFindViewUiListener(): BarcodeFindViewUiListener | null;
    set barcodeFindViewUiListener(value: BarcodeFindViewUiListener | null);
    /**
     * Indicates whether guidance should be shown to the user.
     *
     * Default is *true*.
     *
     * @since 6.22.0
     */
    get shouldShowUserGuidanceView(): boolean;
    set shouldShowUserGuidanceView(value: boolean);
    /**
     * Indicates whether hints should be shown to the user.
     *
     * Default is *true*.
     *
     * @since 6.22.0
     */
    get shouldShowHints(): boolean;
    set shouldShowHints(value: boolean);
    /**
     * Indicates whether the item carousel should be shown to the user.
     *
     * Default is *true*.
     *
     * @since 6.22.0
     */
    get shouldShowCarousel(): boolean;
    set shouldShowCarousel(value: boolean);
    /**
     * Indicates whether the pause button should be shown to the user.
     *
     * Default is *true*.
     *
     * @since 6.22.0
     */
    get shouldShowPauseButton(): boolean;
    set shouldShowPauseButton(value: boolean);
    /**
     * Indicates whether the finish button should be shown to the user.
     *
     * Default is *true*.
     *
     * @since 6.22.0
     */
    get shouldShowFinishButton(): boolean;
    set shouldShowFinishButton(value: boolean);
    /**
     * Indicates whether the progress bar should be shown to the user.
     *
     * Default is *false*.
     *
     * @since 6.22.0
     */
    get shouldShowProgressBar(): boolean;
    set shouldShowProgressBar(value: boolean);
    /**
     * Indicates whether the torch control button should be shown to the user.
     *
     * Default is *false*.
     *
     * @since 6.22.0
     */
    get shouldShowTorchControl(): boolean;
    set shouldShowTorchControl(value: boolean);
    /**
     * Indicates whether the zoom control should be shown to the user, allowing them to switch between the normal and ultra-wide lenses.
     *
     * Default is *false*.
     *
     * The zoom control requires a device with an ultra-wide camera. On devices without an ultra-wide camera, setting this property to *true* has no effect.
     *
     * @since 7.1.0
     */
    get shouldShowZoomControl(): boolean;
    set shouldShowZoomControl(value: boolean);
    /**
     * Updates the position of the torch control button.
     *
     * Only {@link Anchor.TopLeft}, {@link Anchor.TopCenter}, {@link Anchor.TopRight} and {@link Anchor.BottomLeft} are supported.
     *
     * Any other value will default to {@link Anchor.TopLeft}.
     *
     * @since 6.22.0
     */
    get torchControlPosition(): Anchor$1;
    set torchControlPosition(value: Anchor$1);
    /**
     * Overrides the default text displayed in the button for collapsing the item carousel.
     *
     * Default is *null*.
     *
     * @since 6.22.0
     */
    get textForCollapseCardsButton(): string | null;
    set textForCollapseCardsButton(value: string | null);
    /**
     * Overrides the default text displayed in the green confirmation view shown when all items have been found.
     *
     * Default is *null*.
     *
     * @since 6.22.0
     */
    get textForAllItemsFoundSuccessfullyHint(): string | null;
    set textForAllItemsFoundSuccessfullyHint(value: string | null);
    /**
     * Overrides the default text displayed in the confirmation view shown when the item list has been updated.
     *
     * Default is *null*.
     *
     * @since 6.24.0
     */
    get textForItemListUpdatedHint(): string | null;
    set textForItemListUpdatedHint(value: string | null);
    /**
     * Overrides the default text displayed in the confirmation view shown when the item list has been updated and search is paused.
     *
     * Default is *null*.
     *
     * @since 6.24.0
     */
    get textForItemListUpdatedWhenPausedHint(): string | null;
    set textForItemListUpdatedWhenPausedHint(value: string | null);
    /**
     * Overrides the default text for the “Point at barcodes to search” hint.
     *
     * Default is *null*.
     *
     * @since 6.22.0
     */
    get textForPointAtBarcodesToSearchHint(): string | null;
    set textForPointAtBarcodesToSearchHint(value: string | null);
    /**
     * Overrides the default text for the “Move closer” hint.
     *
     * Default is *null*.
     *
     * @since 6.22.0
     */
    get textForMoveCloserToBarcodesHint(): string | null;
    set textForMoveCloserToBarcodesHint(value: string | null);
    /**
     * Overrides the default text for “Tap shutter to pause” hint.
     *
     * Default is *null*.
     *
     * @since 6.22.0
     */
    get textForTapShutterToPauseScreenHint(): string | null;
    set textForTapShutterToPauseScreenHint(value: string | null);
    /**
     * Overrides the default text for “Tap shutter to resume” hint.
     *
     * Default is *null*.
     *
     * @since 6.22.0
     */
    get textForTapShutterToResumeSearchHint(): string | null;
    set textForTapShutterToResumeSearchHint(value: string | null);
    /**
     * The style of the logo, either the extended “Scanning By Scandit” or the minimal “Scandit”.
     *
     * Default is {@link LogoStyle.Extended}.
     *
     * @since 8.6.0
     */
    get logoStyle(): LogoStyle;
    set logoStyle(value: LogoStyle);
    /**
     * The anchor point used to position the Scandit logo.
     *
     * Default is {@link Anchor.BottomRight}.
     *
     * @since 8.6.0
     */
    get logoAnchor(): Anchor$1;
    set logoAnchor(value: Anchor$1);
    /**
     * Specifies the desired camera state when BarcodeFind stops searching. This property allows optimization of camera transitions when switching between different capture modes.
     *
     * On Flutter, Capacitor, Cordova and React Native this property is only effective on iOS; it is ignored on Android.
     *
     * For example, setting this to {@link FrameSourceState.Standby} instead of the default {@link FrameSourceState.Off} can improve camera startup times when transitioning to another mode (such as SparkScan) that uses standby state, as it avoids the On→Off→Standby transition sequence.
     *
     * Default is {@link FrameSourceState.Off}.
     *
     * @since 8.6.0
     */
    get cameraStateOnStop(): FrameSourceState;
    set cameraStateOnStop(value: FrameSourceState);
    /**
     * Method to call for stopping the mode. For instance, it can be called when the view controller containing BarcodeFindView is about to disappear (i.e., UIViewController’s viewWillDisappear).
     *
     * @since 6.22.0
     */
    stopSearching(): Promise<void>;
    /**
     * Starts the searching process. You can call this method if you want to trigger the searching process without any user interaction.
     *
     * @since 6.22.0
     */
    startSearching(): Promise<void>;
    /**
     * Pauses the searching process. You can call this method if you want to trigger pausing the searching process without any user interaction.
     *
     * @since 6.22.0
     */
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

interface BarcodeSelectionViewProps extends ViewProps {
    context: DataCaptureContext$1;
    isEnabled: boolean;
    barcodeSelectionSettings?: BarcodeSelectionSettings | null;
    aimedBrush?: Brush | null;
    selectedBrush?: Brush | null;
    selectingBrush?: Brush | null;
    trackedBrush?: Brush | null;
    aimedBarcodeBrushProvider?: BarcodeSelectionBrushProvider | null;
    trackedBarcodeBrushProvider?: BarcodeSelectionBrushProvider | null;
    basicOverlayStyle?: BarcodeSelectionBasicOverlayStyle | null;
    cameraSettings?: CameraSettings$1 | null;
    desiredCameraState?: FrameSourceState$1 | null;
    desiredCameraPosition?: CameraPosition | null;
    desiredTorchState?: TorchState | null;
    torchSwitchControl?: TorchSwitchControl | null;
    zoomSwitchControl?: ZoomSwitchControl | null;
    pointOfInterest?: PointWithUnit | null;
    feedback?: BarcodeSelectionFeedback;
    navigation?: NavigationProp<ParamListBase>;
    shouldUnfreezeCamera?: boolean | null;
    didUpdateSelection?(barcodeSelection: BarcodeSelection, session: BarcodeSelectionSession, getFrameData: () => Promise<FrameData$1>): Promise<void>;
}
/**
 * Precursor component from SDC-21451, never documented or supported. No longer
 * re-exported from the package root; kept internal rather than part of the API.
 *
 * @internal
 */
declare const BarcodeSelectionView: React.ForwardRefExoticComponent<BarcodeSelectionViewProps & React.RefAttributes<unknown>>;






declare const internal_d_BarcodeArDefaults: typeof BarcodeArDefaults;
declare const internal_d_BarcodeBatchDefaults: typeof BarcodeBatchDefaults;
declare const internal_d_BarcodeCountDefaults: typeof BarcodeCountDefaults;
declare const internal_d_BarcodeCountViewSettingsDefaults: typeof BarcodeCountViewSettingsDefaults;
declare const internal_d_BarcodeSelectionView: typeof BarcodeSelectionView;
declare const internal_d_getBarcodeArDefaults: typeof getBarcodeArDefaults;
declare const internal_d_getBarcodeBatchDefaults: typeof getBarcodeBatchDefaults;
declare const internal_d_getBarcodeCountDefaults: typeof getBarcodeCountDefaults;
declare namespace internal_d {
  export {
    internal_d_BarcodeArDefaults as BarcodeArDefaults,
    internal_d_BarcodeBatchDefaults as BarcodeBatchDefaults,
    internal_d_BarcodeCountDefaults as BarcodeCountDefaults,
    internal_d_BarcodeCountViewSettingsDefaults as BarcodeCountViewSettingsDefaults,
    internal_d_BarcodeSelectionView as BarcodeSelectionView,
    internal_d_getBarcodeArDefaults as getBarcodeArDefaults,
    internal_d_getBarcodeBatchDefaults as getBarcodeBatchDefaults,
    internal_d_getBarcodeCountDefaults as getBarcodeCountDefaults,
  };
}





















export { BarcodeArAioView, BarcodeArCustomAnnotation, BarcodeArCustomHighlight, BarcodeArView, BarcodeBatchAdvancedOverlay, BarcodeBatchAdvancedOverlayView, BarcodeBatchAioView, BarcodeCaptureAioView, BarcodeCountAioView, BarcodeCountView, BarcodeCountViewStyle, BarcodeFindView, BarcodePickView, SparkScanAioView, SparkScanView, internal_d as _internal };
export type { BarcodeArAioViewHandle, BarcodeArAioViewProps, BarcodeArCustomAnnotationConfig, BarcodeArCustomHighlightConfig, BarcodeBatchAdvancedOverlayListener, BarcodeBatchAioAdvancedOverlayHandle, BarcodeBatchAioAdvancedOverlayProps, BarcodeBatchAioBasicOverlayHandle, BarcodeBatchAioBasicOverlayProps, BarcodeBatchAioViewHandle, BarcodeBatchAioViewProps, BarcodeCaptureAioBasicOverlayProps, BarcodeCaptureAioViewHandle, BarcodeCaptureAioViewProps, BarcodeCountAioUiListener, BarcodeCountAioViewHandle, BarcodeCountAioViewListener, BarcodeCountAioViewProps, SparkScanAioViewHandle, SparkScanAioViewProps, SparkScanAioViewUiListener, SparkScanViewUiListener };
