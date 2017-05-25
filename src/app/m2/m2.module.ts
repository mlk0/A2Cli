import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M2c1Component } from './m2c1/m2c1.component';
import { M2c2Component } from './m2c2/m2c2.component';
import { M3Module } from "../m3/m3.module";
import { M3c1Component } from "../m3/m3c1/m3c1.component";

@NgModule({
  imports: [
    CommonModule,
    M3Module
  ],
  declarations: [M2c1Component, M2c2Component],
  exports : [M2c1Component, M2c2Component,M3c1Component] //re-exporting M3c1Component since I want to reuse the app-m3c1 in app.component.html
})
export class M2Module { }
