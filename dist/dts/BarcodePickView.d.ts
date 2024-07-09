import React from 'react';
import { DataCaptureContext } from 'scandit-datacapture-frameworks-core';
import { CameraSettings } from 'scandit-datacapture-frameworks-core';
import { BarcodePick } from 'scandit-datacapture-frameworks-barcode';
import { BarcodePickViewSettings } from 'scandit-datacapture-frameworks-barcode';
import { BarcodePickActionListener } from 'scandit-datacapture-frameworks-barcode';
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
    componentWillUnmount(): void;
    start(): void;
    pause(): void;
    addActionListener(listener: BarcodePickActionListener): void;
    removeActionListener(listener: BarcodePickActionListener): void;
    render(): React.JSX.Element;
    private toJSON;
}
export {};
