import { ReactElement } from 'react';
import { Observable } from 'scandit-datacapture-frameworks-core';
import { BarcodeArHighlight } from 'scandit-datacapture-frameworks-barcode';
export interface BarcodeArCustomHighlightConfig {
    renderHighlight: () => ReactElement;
}
export declare class BarcodeArCustomHighlight extends Observable implements BarcodeArHighlight {
    renderHighlight: () => ReactElement;
    private _type;
    constructor(config: BarcodeArCustomHighlightConfig);
}
