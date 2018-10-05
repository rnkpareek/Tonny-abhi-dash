import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { D2Component } from './d2.component';
import {d2Router} from './d2.routing';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap';
//services
import{D2Service} from './d2.service'

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(d2Router),
   AccordionModule.forRoot(),BsDatepickerModule.forRoot()
  ],
  declarations: [D2Component]
})
export class D2Module { }