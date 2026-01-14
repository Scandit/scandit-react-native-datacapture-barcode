import React from 'react';
import { Barcode, BaseBarcodeArView } from 'scandit-datacapture-frameworks-barcode';
export type BarcodeArCustomHighlightContainerProps = {
    barcodeId: string;
    barcode: Barcode;
    renderHighlight: () => React.JSX.Element;
    registerCustomHighlightUpdateEvent: BaseBarcodeArView['registerCustomHighlightUpdateEvent'];
    registerCustomHighlightHideEvent: BaseBarcodeArView['registerCustomHighlightHideEvent'];
    registerCustomHighlightShowEvent: BaseBarcodeArView['registerCustomHighlightShowEvent'];
};
export default function BarcodeArCustomHighlightContainer({ barcodeId, barcode, renderHighlight, registerCustomHighlightUpdateEvent, registerCustomHighlightHideEvent, registerCustomHighlightShowEvent, }: BarcodeArCustomHighlightContainerProps): React.JSX.Element;
