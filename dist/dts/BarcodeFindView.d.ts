import React from 'react';
import { BarcodeFind, BarcodeFindViewSettings, BarcodeFindViewUiListener } from 'scandit-datacapture-frameworks-barcode';
import { Anchor, CameraSettings, DataCaptureContext } from 'scandit-datacapture-frameworks-core';
interface BarcodeFindViewProps {
    context: DataCaptureContext;
    barcodeFind: BarcodeFind;
    viewSettings?: BarcodeFindViewSettings;
    cameraSettings?: CameraSettings;
    style: any;
}
export declare class BarcodeFindView extends React.Component<BarcodeFindViewProps> {
    private baseBarcodeFindView;
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
    stopSearching(): Promise<void>;
    startSearching(): Promise<void>;
    pauseSearching(): Promise<void>;
    render(): React.JSX.Element;
    componentWillUnmount(): void;
    componentDidMount(): void;
    private createFragment;
    private toJSON;
}
export {};
