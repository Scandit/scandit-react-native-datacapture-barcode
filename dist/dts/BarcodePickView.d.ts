import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { BarcodePickViewListener } from 'scandit-datacapture-frameworks-barcode';
import { DataCaptureContext } from 'scandit-datacapture-frameworks-core';
import { CameraSettings } from 'scandit-datacapture-frameworks-core';
import { BarcodePick } from 'scandit-datacapture-frameworks-barcode';
import { BarcodePickViewSettings } from 'scandit-datacapture-frameworks-barcode';
import { BarcodePickActionListener, BarcodePickViewUiListener } from 'scandit-datacapture-frameworks-barcode';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
interface BarcodePickViewProps {
    context: DataCaptureContext;
    barcodePick: BarcodePick;
    settings: BarcodePickViewSettings;
    cameraSettings: CameraSettings;
    style: StyleProp<ViewStyle>;
    navigation?: NavigationProp<ParamListBase>;
}
export declare class BarcodePickView extends React.Component<BarcodePickViewProps> {
    private baseBarcodePickView;
    private _isMounted;
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
    private createBarcodePickView;
    private toJSON;
}
export {};
