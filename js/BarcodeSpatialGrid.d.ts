import { Barcode } from './Barcode';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
export declare class BarcodeSpatialGrid extends DefaultSerializeable {
    private _rows;
    private _columns;
    private _grid;
    private static fromJSON;
    get rows(): number;
    get columns(): number;
    barcodeAt(row: number, column: number): Barcode | null;
    row(index: number): Barcode[];
    column(index: number): Barcode[];
}
