import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M3c1Component } from './m3c1/m3c1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [M3c1Component],
  exports : [M3c1Component]
})
export class M3Module { }
