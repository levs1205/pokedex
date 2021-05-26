"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRoutingModule = exports.MainRoutes = void 0;
var pokedex_component_1 = require("./components/pokedex/pokedex.component");
exports.MainRoutes = [
    {
        path: '',
        component: pokedex_component_1.PokedexComponent
    },
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    return MainRoutingModule;
}());
exports.MainRoutingModule = MainRoutingModule;
//# sourceMappingURL=main-routing.module.js.map