"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrushForStateObject = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BrushForStateObject = /** @class */ (function () {
    function BrushForStateObject() {
    }
    __decorate([
        (0, Serializeable_1.nameForSerialization)('barcodePickState')
    ], BrushForStateObject.prototype, "barcodePickState", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('brush')
    ], BrushForStateObject.prototype, "brush", void 0);
    return BrushForStateObject;
}());
exports.BrushForStateObject = BrushForStateObject;
//# sourceMappingURL=PrivateBarcodePick.js.map