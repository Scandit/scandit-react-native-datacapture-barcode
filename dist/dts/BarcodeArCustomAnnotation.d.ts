import { ReactElement } from 'react';
import { Anchor, Observable } from 'scandit-datacapture-frameworks-core';
import { BarcodeArAnnotation, BarcodeArAnnotationTrigger } from 'scandit-datacapture-frameworks-barcode';
export interface BarcodeArCustomAnnotationConfig {
    renderAnnotation: () => ReactElement;
    /** Defaults to `BarcodeArAnnotationTrigger.HighlightTap`. */
    annotationTrigger?: BarcodeArAnnotationTrigger;
    /** Defaults to `Anchor.TopCenter`. */
    anchor?: Anchor;
}
export declare class BarcodeArCustomAnnotation extends Observable implements BarcodeArAnnotation {
    annotationTrigger: BarcodeArAnnotationTrigger;
    anchor: Anchor;
    renderAnnotation: () => ReactElement;
    private _type;
    constructor(config: BarcodeArCustomAnnotationConfig);
}
