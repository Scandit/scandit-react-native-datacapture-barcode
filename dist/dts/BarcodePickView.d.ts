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
}
export declare class BarcodePickView extends React.Component<BarcodePickViewProps> {
    private baseBarcodePickView;
    constructor(props: BarcodePickViewProps);
    get uiListener(): BarcodePickViewUiListener | null;
    set uiListener(value: BarcodePickViewUiListener | null);
    componentWillUnmount(): void;
    start(): void;
    stop(): void;
    freeze(): void;
    pause(): void;
    resume(): void;
    addListener(listener: BarcodePickViewListener): void;
    removeListener(listener: BarcodePickViewListener): void;
    addActionListener(listener: BarcodePickActionListener): void;
    removeActionListener(listener: BarcodePickActionListener): void;
    render(): React.JSX.Element;
    release(): void;
    private toJSON;
}
export {};
