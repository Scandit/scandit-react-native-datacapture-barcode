import React from 'react';
import { SparkScanViewFeedback, SparkScanFeedbackDelegate, SparkScanViewSettings, SparkScan } from 'scandit-datacapture-frameworks-barcode';
import { Brush, Color, DataCaptureContext } from 'scandit-datacapture-frameworks-core';
export interface SparkScanViewUiListener {
    onBarcodeCountButtonTappedIn?(view: SparkScanView): void;
    /**
     * @deprecated This method was renamed. Use onBarcodeFindButtonTappedIn instead.
     */
    onFastFindButtonTappedIn?(view: SparkScanView): void;
    onBarcodeFindButtonTappedIn?(view: SparkScanView): void;
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
    /**
     * @deprecated This property is deprecated as it's no longer needed.
     */
    get shouldShowScanAreaGuides(): boolean;
    /**
     * @deprecated This property is deprecated as it's no longer needed.
     */
    set shouldShowScanAreaGuides(newValue: boolean);
    get brush(): Brush;
    set brush(newValue: Brush);
    get previewSizeControlVisible(): boolean;
    set previewSizeControlVisible(newValue: boolean);
    get torchButtonVisible(): boolean;
    set torchButtonVisible(newValue: boolean);
    get scanningBehaviorButtonVisible(): boolean;
    set scanningBehaviorButtonVisible(newValue: boolean);
    get handModeButtonVisible(): boolean;
    set handModeButtonVisible(newValue: boolean);
    get barcodeCountButtonVisible(): boolean;
    set barcodeCountButtonVisible(newValue: boolean);
    /**
     * @deprecated This property was renamed. Use the property `barcodeFindButtonVisible` instead.
     */
    get fastFindButtonVisible(): boolean;
    /**
     * @deprecated This property was renamed. Use the property `barcodeFindButtonVisible` instead.
     */
    set fastFindButtonVisible(newValue: boolean);
    get barcodeFindButtonVisible(): boolean;
    set barcodeFindButtonVisible(newValue: boolean);
    get targetModeButtonVisible(): boolean;
    set targetModeButtonVisible(newValue: boolean);
    /**
     * @deprecated This property is deprecated as sound mode button will be removed in the future.
     */
    get soundModeButtonVisible(): boolean;
    /**
     * @deprecated This property is deprecated as sound mode button will be removed in the future.
     */
    set soundModeButtonVisible(newValue: boolean);
    /**
     * @deprecated This property is deprecated as haptic mode button will be removed in the future.
     */
    get hapticModeButtonVisible(): boolean;
    /**
     * @deprecated This property is deprecated as haptic mode button will be removed in the future.
     */
    set hapticModeButtonVisible(newValue: boolean);
    get stopCapturingText(): string | null;
    set stopCapturingText(newValue: string | null);
    get startCapturingText(): string | null;
    set startCapturingText(newValue: string | null);
    get resumeCapturingText(): string | null;
    set resumeCapturingText(newValue: string | null);
    get scanningCapturingText(): string | null;
    set scanningCapturingText(newValue: string | null);
    get captureButtonActiveBackgroundColor(): Color | null;
    set captureButtonActiveBackgroundColor(newValue: Color | null);
    get captureButtonBackgroundColor(): Color | null;
    set captureButtonBackgroundColor(newValue: Color | null);
    get captureButtonTintColor(): Color | null;
    set captureButtonTintColor(newValue: Color | null);
    get toolbarBackgroundColor(): Color | null;
    set toolbarBackgroundColor(newValue: Color | null);
    get toolbarIconActiveTintColor(): Color | null;
    set toolbarIconActiveTintColor(newValue: Color | null);
    get toolbarIconInactiveTintColor(): Color | null;
    set toolbarIconInactiveTintColor(newValue: Color | null);
    get targetModeHintText(): string | null;
    set targetModeHintText(newValue: string | null);
    get shouldShowTargetModeHint(): boolean;
    set shouldShowTargetModeHint(newValue: boolean);
    get cameraSwitchButtonVisible(): boolean;
    set cameraSwitchButtonVisible(newValue: boolean);
    emitFeedback(feedback: SparkScanViewFeedback): void;
    prepareScanning(): void;
    startScanning(): void;
    pauseScanning(): void;
    stopScanning(): void;
    get feedbackDelegate(): SparkScanFeedbackDelegate | null;
    set feedbackDelegate(delegate: SparkScanFeedbackDelegate | null);
    showToast(text: string): Promise<void>;
    private toJSON;
}
export {};
