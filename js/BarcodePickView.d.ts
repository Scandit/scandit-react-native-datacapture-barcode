import React from 'react';
import { DataCaptureContext } from 'scandit-react-native-datacapture-core/js/DataCaptureContext';
import { CameraSettings } from 'scandit-react-native-datacapture-core/js/Camera+Related';
import { BarcodePick } from './BarcodePick';
import { BarcodePickViewSettings } from './BarcodePickViewSettings';
import { BarcodePickActionListener } from './BarcodePickActionListener';
interface BarcodePickViewProps {
    context: DataCaptureContext;
    barcodePick: BarcodePick;
    settings: BarcodePickViewSettings;
    cameraSettings: CameraSettings;
    style: any;
}
export declare class BarcodePickView extends React.Component<BarcodePickViewProps> {
    private viewProxy;
    private _actionListeners;
    private _isStarted;
    constructor(props: BarcodePickViewProps);
    componentWillUnmount(): void;
    start(): void;
    pause(): void;
    addActionListener(listener: BarcodePickActionListener): void;
    removeActionListener(listener: BarcodePickActionListener): void;
    render(): JSX.Element;
    private toJSON;
}
export {};
