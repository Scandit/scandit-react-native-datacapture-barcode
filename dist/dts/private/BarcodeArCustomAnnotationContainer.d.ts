import React from 'react';
import { Barcode, BaseBarcodeArView } from 'scandit-datacapture-frameworks-barcode';
import { BarcodeArCustomAnnotation } from 'ts/BarcodeArCustomAnnotation';
export type BarcodeArCustomAnnotationContainerProps = {
    barcodeId: string;
    barcode: Barcode;
    customAnnotation: BarcodeArCustomAnnotation;
    registerCustomAnnotationUpdateEvent: BaseBarcodeArView['registerCustomAnnotationUpdateEvent'];
    registerCustomAnnotationHideEvent: BaseBarcodeArView['registerCustomAnnotationHideEvent'];
    registerCustomAnnotationShowEvent: BaseBarcodeArView['registerCustomAnnotationShowEvent'];
};
export default function BarcodeArCustomAnnotationContainer({ barcodeId, barcode, customAnnotation, registerCustomAnnotationUpdateEvent, registerCustomAnnotationHideEvent, registerCustomAnnotationShowEvent, }: BarcodeArCustomAnnotationContainerProps): React.JSX.Element;
