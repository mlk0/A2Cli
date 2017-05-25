"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var m2c1_component_1 = require("./m2c1/m2c1.component");
var m2c2_component_1 = require("./m2c2/m2c2.component");
var m3_module_1 = require("../m3/m3.module");
var m3c1_component_1 = require("../m3/m3c1/m3c1.component");
var M2Module = (function () {
    function M2Module() {
    }
    return M2Module;
}());
M2Module = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            m3_module_1.M3Module
        ],
        declarations: [m2c1_component_1.M2c1Component, m2c2_component_1.M2c2Component],
        exports: [m2c1_component_1.M2c1Component, m2c2_component_1.M2c2Component, m3c1_component_1.M3c1Component] //re-exporting M3c1Component since I want to reuse the app-m3c1 in app.component.html
    })
], M2Module);
exports.M2Module = M2Module;
//# sourceMappingURL=m2.module.js.map