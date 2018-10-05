import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import{DashboardComponent} from './dashboard/dashboard.component'
import{D1Component} from './d1/d1.component';
import{D2Component} from './d2/d2.component';
import{HomeComponent} from './home/home.component';
import {AuthService} from './services/Authservice';
import {LogoutComponent} from './logout/logout.component';
export const routes: Routes = [
 
 
  {
    path: 'login',
    component: LoginComponent,
  },
   { path: '',
    redirectTo:'/login', 
    pathMatch:'full'
     },
  {
   path: 'logout',
   component:LogoutComponent
     },
  
  {
    path: 'app',
    component :DashboardComponent,
    canActivate:[AuthService],

    children: [
     
      {
        path: 'd1',
        loadChildren: 'src/app/d1/d1.module#D1Module'
      },
      {
        path: 'd2',
        loadChildren: 'src/app/d2/d2.module#D2Module'
      },
      {
        path: 'home',
        loadChildren: 'src/app/home/home.module#HomeModule'
      },
      {
        path:'setting',
        loadChildren:'src/app/setting/setting.module#SettingModule'
      }
      
      ]
  }
//canActivate:[AuthService],

  ];
