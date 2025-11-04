import React from 'react';
import { BarcodePickViewListener } from 'scandit-datacapture-frameworks-barcode';
import { DataCaptureContext } from 'scandit-datacapture-frameworks-core';
import { CameraSettings } from 'scandit-datacapture-frameworks-core';
import { BarcodePick } from 'scandit-datacapture-frameworks-barcode';
import { BarcodePickViewSettings } from 'scandit-datacapture-frameworks-barcode';
import { BarcodePickActionListener, BarcodePickViewUiListener } from 'scandit-datacapture-frameworks-barcode';
interface BarcodePickViewProps {
    context: DataCaptureContext;
    barcodePick: BarcodePick;
    settings: BarcodePickViewSettings;
    cameraSettings: CameraSettings;
    style: any;
    navigation?: any;
}
export declare class BarcodePickView extends React.Component<BarcodePickViewProps> {
    private baseBarcodePickView;
    private _isMounted;
    private navigationUnsubscribers;
    private cameraOwner;
    constructor(props: BarcodePickViewProps);
    get uiListener(): BarcodePickViewUiListener | null;
    set uiListener(value: BarcodePickViewUiListener | null);
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    start(): void;
    stop(): void;
    freeze(): void;
    pause(): void;
    resume(): void;
    reset(): void;
    addListener(listener: BarcodePickViewListener): void;
    removeListener(listener: BarcodePickViewListener): void;
    addActionListener(listener: BarcodePickActionListener): void;
    removeActionListener(listener: BarcodePickActionListener): void;
    render(): React.JSX.Element;
    release(): void;
    private setupNavigationListeners;
    private onFocus;
    private onBlur;
    private createBarcodePickView;
    private toJSON;
}
export {};
