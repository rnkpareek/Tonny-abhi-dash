import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SettingComponent} from './setting.component'
import {settingRouter} from './setting-routing';
import { CreateComponent } from './create/create.component';
import { UsertableComponent } from './usertable/usertable.component'
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(settingRouter),FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SettingComponent, CreateComponent, UsertableComponent]
})
export class SettingModule { }
