import { BarcodeGeneratorProxy } from 'scandit-datacapture-frameworks-barcode';
export declare class NativeBarcodeGeneratorProxy implements BarcodeGeneratorProxy {
    create(barcodeGeneratorJson: string): Promise<void>;
    dispose(generatorId: string): Promise<void>;
    generateFromBase64EncodedData(generatorId: string, data: string, imageWidth: number): Promise<string>;
    generate(generatorId: string, text: string, imageWidth: number): Promise<string>;
}
