interface NativeModuleWithDefaults<T = any> {
    Defaults: T;
}
export declare function getNativeModule<T>(name: string): NativeModuleWithDefaults<T>;
export declare function getNativeModuleTyped<T>(name: string): T;
export declare function initBarcodeDefaults(): void;
export {};
