import React from 'react';
import { SparkScanFeedbackDelegate, SparkScanViewSettings, SparkScan, SparkScanViewState } from 'scandit-datacapture-frameworks-barcode';
import { Brush, Color, DataCaptureContext } from 'scandit-datacapture-frameworks-core';
export interface SparkScanViewUiListener {
    onBarcodeCountButtonTappedIn?(view: SparkScanView): void;
    onBarcodeFindButtonTappedIn?(view: SparkScanView): void;
    didChangeViewState?(newState: SparkScanViewState): void;
}
interface SparkScanViewProps {
    context: DataCaptureContext;
    sparkScan: SparkScan;
    sparkScanViewSettings: SparkScanViewSettings;
    style: any;
    children?: React.ReactNode;
}
export declare class SparkScanView extends React.Component<SparkScanViewProps> {
    private baseSparkScanView;
    private rnViewListener;
    get uiListener(): SparkScanViewUiListener | null;
    set uiListener(listener: SparkScanViewUiListener | null);
    static get defaultBrush(): Brush;
    constructor(props: SparkScanViewProps);
    componentWillUnmount(): void;
    render(): React.JSX.Element;
    get previewSizeControlVisible(): boolean;
    set previewSizeControlVisible(newValue: boolean);
    /**
     * @deprecated The torch button has been moved to the mini preview. Use property `torchControlVisible` instead.
     */
    get torchButtonVisible(): boolean;
    /**
     * @deprecated The torch button has been moved to the mini preview. Use property `torchControlVisible` instead.
     */
    set torchButtonVisible(newValue: boolean);
    get scanningBehaviorButtonVisible(): boolean;
    set scanningBehaviorButtonVisible(newValue: boolean);
    get barcodeCountButtonVisible(): boolean;
    set barcodeCountButtonVisible(newValue: boolean);
    get barcodeFindButtonVisible(): boolean;
    set barcodeFindButtonVisible(newValue: boolean);
    get targetModeButtonVisible(): boolean;
    set targetModeButtonVisible(newValue: boolean);
    get stopCapturingText(): string | null;
    set stopCapturingText(newValue: string | null);
    get startCapturingText(): string | null;
    set startCapturingText(newValue: string | null);
    get resumeCapturingText(): string | null;
    set resumeCapturingText(newValue: string | null);
    get scanningCapturingText(): string | null;
    set scanningCapturingText(newValue: string | null);
    /**
     * @deprecated This property is not relevant anymore.
     */
    get captureButtonActiveBackgroundColor(): Color | null;
    /**
     * @deprecated This property is not relevant anymore.
     */
    set captureButtonActiveBackgroundColor(newValue: Color | null);
    /**
     * @deprecated use triggerButtonCollapsedColor and triggerButtonExpandedColor instead.
     */
    get captureButtonBackgroundColor(): Color | null;
    /**
     * @deprecated use triggerButtonCollapsedColor and triggerButtonExpandedColor instead.
     */
    set captureButtonBackgroundColor(newValue: Color | null);
    /**
     * @deprecated use triggerButtonTintColor instead.
     */
    get captureButtonTintColor(): Color | null;
    /**
     * @deprecated use triggerButtonTintColor instead.
     */
    set captureButtonTintColor(newValue: Color | null);
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
    prepareScanning(): void;
    startScanning(): void;
    pauseScanning(): void;
    stopScanning(): void;
    get feedbackDelegate(): SparkScanFeedbackDelegate | null;
    set feedbackDelegate(delegate: SparkScanFeedbackDelegate | null);
    showToast(text: string): Promise<void>;
    componentDidMount(): void;
    private createSparkScanView;
    private toJSON;
}
export {};
