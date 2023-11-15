import { BarcodeSpatialGrid } from 'BarcodeSpatialGrid';
import { BarcodeJSON } from './PrivateBarcode';
export interface BarcodeSpatialGridJSON {
    rows: number;
    columns: number;
    grid: BarcodeJSON[][];
}
export interface PrivateBarcodeSpatialGrid {
    fromJSON(json: BarcodeSpatialGridJSON): BarcodeSpatialGrid;
}
