import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { D1Component } from './d1.component';
import { RouterModule } from '@angular/router';
import {d1Router} from './d1.routing';
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(d1Router),
  ],
  declarations: [D1Component]
})
export class D1Module { }
