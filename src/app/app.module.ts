import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {routes} from './app-routing'
import { NavbarComponent } from './components/navbar/navbar.component'
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//services
import {LoginService} from './login/login.service';
//auth service
import{AuthService} from './services/Authservice';
import {AuthModule} from './Auth/authenticate.module';
import { LogoutComponent } from './logout/logout.component';
import {D2Service} from './d2/d2.service'
//extra
import { ToastrModule } from 'ngx-toastr';
import { SidebarModule } from 'ng-sidebar';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    LogoutComponent,
    FooterComponent,
    

    
    ],
  imports: [
    BrowserModule,AccordionModule.forRoot(),CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(routes),HttpModule,
    AuthModule,SidebarModule.forRoot(),
    BrowserAnimationsModule,ToastrModule.forRoot()
  ],
  providers: [LoginService,AuthService,D2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
