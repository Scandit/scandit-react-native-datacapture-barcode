import { DataCaptureContext } from 'scandit-react-native-datacapture-core/js/DataCaptureContext';
import { BarcodePickActionListener } from '../BarcodePickActionListener';
import { BarcodePickState } from '../BarcodePickState';
import { Brush } from 'scandit-react-native-datacapture-core/js/Common';
import { BarcodePickViewProxy } from '../native/BarcodePickViewProxy';
import { BarcodePickProductProxy } from '../native/BarcodePickProductProxy';
export interface PrivateBarcodePickProxy {
    _viewProxy: BarcodePickViewProxy;
    _itemData: String;
}
export interface PrivateBarcodePickView {
    _actionListeners: BarcodePickActionListener[];
    toJSON(): object;
}
export interface PrivateBarcodePick {
    privateContext: DataCaptureContext | null;
    isInListenerCallback: boolean;
    didChange: () => Promise<void>;
    unsubscribeNativeListeners: () => void;
}
export interface PrivateBarcodePickProductProvider {
    _productProxy: BarcodePickProductProxy;
}
export declare class BrushForStateObject {
    barcodePickState: BarcodePickState;
    brush: Brush;
}
export interface PrivateBarcodeItemDataEventPayload {
    itemData: string;
}
export interface BarcodeItemDataListEventPayload {
    itemsData: string[];
}
