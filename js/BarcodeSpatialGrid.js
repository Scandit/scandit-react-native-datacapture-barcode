"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeSpatialGrid = void 0;
var Barcode_1 = require("./Barcode");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeSpatialGrid = /** @class */ (function (_super) {
    __extends(BarcodeSpatialGrid, _super);
    function BarcodeSpatialGrid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarcodeSpatialGrid.fromJSON = function (json) {
        var spatialGrid = new BarcodeSpatialGrid();
        spatialGrid._rows = json.rows;
        spatialGrid._columns = json.columns;
        spatialGrid._grid = json.grid;
        return spatialGrid;
    };
    Object.defineProperty(BarcodeSpatialGrid.prototype, "rows", {
        get: function () {
            return this._rows;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BarcodeSpatialGrid.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        enumerable: false,
        configurable: true
    });
    BarcodeSpatialGrid.prototype.barcodeAt = function (row, column) {
        var barcodeJSON = this._grid[row][column];
        if (barcodeJSON) {
            return Barcode_1.Barcode.fromJSON(barcodeJSON);
        }
        return null;
    };
    BarcodeSpatialGrid.prototype.row = function (index) {
        var barcodesJSON = this._grid[index];
        if (barcodesJSON) {
            return (barcodesJSON.map(Barcode_1.Barcode.fromJSON));
        }
        return [];
    };
    BarcodeSpatialGrid.prototype.column = function (index) {
        var barcodesJSON = this._grid.map(function (barcodes) { return barcodes[index]; });
        if (barcodesJSON) {
            return (barcodesJSON.map(Barcode_1.Barcode.fromJSON));
        }
        return [];
    };
    __decorate([
        (0, Serializeable_1.nameForSerialization)('rows')
    ], BarcodeSpatialGrid.prototype, "_rows", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('columns')
    ], BarcodeSpatialGrid.prototype, "_columns", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('grid')
    ], BarcodeSpatialGrid.prototype, "_grid", void 0);
    return BarcodeSpatialGrid;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeSpatialGrid = BarcodeSpatialGrid;
//# sourceMappingURL=BarcodeSpatialGrid.js.map