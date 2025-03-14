import { BarcodeCount, BarcodeCountNotInListActionSettings, BarcodeCountToolbarSettings, BarcodeCountViewListener, BarcodeCountViewUiListener, BarcodeFilterHighlightSettings, TrackedBarcode } from 'scandit-datacapture-frameworks-barcode';
import React from 'react';
import { Anchor, DataCaptureContext } from 'scandit-datacapture-frameworks-core';
import { Brush } from 'scandit-react-native-datacapture-core';
export declare enum BarcodeCountViewStyle {
    Icon = "icon",
    Dot = "dot"
}
interface BarcodeCountViewProps {
    context: DataCaptureContext;
    barcodeCount: BarcodeCount;
    viewStyle: BarcodeCountViewStyle;
    style: any;
}
export declare class BarcodeCountView extends React.Component<BarcodeCountViewProps> {
    private baseBarcodeCountView;
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
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    clearHighlights(): void;
    setToolbarSettings(settings: BarcodeCountToolbarSettings): void;
    setBrushForRecognizedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    setBrushForRecognizedBarcodeNotInList(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    setBrushForAcceptedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    setBrushForRejectedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void>;
    enableHardwareTrigger(hardwareTriggerKeyCode: number | null): Promise<void>;
    render(): React.JSX.Element;
    private createFragment;
    private toJSON;
}
export {};
