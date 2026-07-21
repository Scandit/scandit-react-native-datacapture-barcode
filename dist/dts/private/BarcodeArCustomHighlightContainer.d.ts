import React from 'react';
import { Barcode, BaseBarcodeArView } from 'scandit-datacapture-frameworks-barcode';
import { BarcodeArCustomHighlight } from 'ts/BarcodeArCustomHighlight';
export type BarcodeArCustomHighlightContainerProps = {
    barcodeId: string;
    barcode: Barcode;
    customHighlight: BarcodeArCustomHighlight;
    onClick: () => void;
    registerCustomHighlightUpdateEvent: BaseBarcodeArView['registerCustomHighlightUpdateEvent'];
    registerCustomHighlightHideEvent: BaseBarcodeArView['registerCustomHighlightHideEvent'];
    registerCustomHighlightShowEvent: BaseBarcodeArView['registerCustomHighlightShowEvent'];
};
export default function BarcodeArCustomHighlightContainer({ barcodeId, barcode, customHighlight, onClick, registerCustomHighlightUpdateEvent, registerCustomHighlightHideEvent, registerCustomHighlightShowEvent, }: BarcodeArCustomHighlightContainerProps): React.JSX.Element;
