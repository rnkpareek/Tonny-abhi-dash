import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import{homeRouter} from './home-routing'
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(homeRouter)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
