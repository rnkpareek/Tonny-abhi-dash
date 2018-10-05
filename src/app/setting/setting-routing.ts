import { Routes } from "@angular/router";
import { SettingComponent } from './setting.component';
import {CreateComponent} from './create/create.component'
import {UsertableComponent} from './usertable/usertable.component'
export const settingRouter: Routes = [
  {
    path: '',
    component: SettingComponent,
     children: [
      { path: '', redirectTo: '.app/setting/user', pathMatch: 'full' },
      {
        path: '',
        component: CreateComponent
      },
      {
        path: 'usertable',
        component: UsertableComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
     
    ]
  }
];