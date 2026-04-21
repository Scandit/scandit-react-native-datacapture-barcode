import { BarcodeNativeCallerProvider, BarcodeProxyType } from 'scandit-datacapture-frameworks-barcode';
import { NativeCaller } from 'scandit-datacapture-frameworks-core';
export declare class RNBarcodeNativeCallerProvider implements BarcodeNativeCallerProvider {
    private readonly moduleMap;
    getNativeCaller(proxyType: BarcodeProxyType): NativeCaller;
}
