import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from './login.service'
import { Headers, Http } from '@angular/http';
import{AuthModule} from '../Auth/authenticate.module';
import {AuthService} from '../services/Authservice';
import "rxjs/Rx";
import { AdUnit } from './user';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  adunits: AdUnit[];
  roletype;
  name;
  constructor(private _router:Router , private toastr:ToastrService,
    private loginService:LoginService, private authService:AuthService) { }
auth_verified: boolean;
  ngOnInit() {
    this.auth_verified = this.authService.useJwtHelper();

   
    console.log('auth_verified:::::' + this.auth_verified);
    if (this.auth_verified) {
     
      this._router.navigate(['/app/d1']);
    }
  

  }

/*login($event,email,password){

  if(email && password !== null){
     console.log("----login---",email)
     this.loginService.login(email,password)
     //this._router.navigate(['../app'])
  }
  else{
    console.log("---else login")
  }*/

  login(event, email, password) {
    if(email && password != null ){
      console.log("not null")
      event.preventDefault();
      
     this.loginService.login(email, password)
        .subscribe(response => {
          console.log("-----response",response.role)
          if(response.save === true){
            localStorage.apiToken=response.token
            this.showSuccess()
            var role= response.role;
            this.name =response.name;
            if(role==3){
              this.roletype="admin"
            }
            else if(role==2){
              this.roletype="Reviewer"
            }
            else if(role==1){
             this.roletype="Researcher"
            }
            localStorage.setItem('name',this.name)
            localStorage.setItem('role',this.roletype)
           

           switch (role) {
             case 3:
               this._router.navigate(['/app/d2']);
               break;
             
               case 2:
               this._router.navigate(['/app/d1']);
               break;

               case 1:
               this._router.navigate(['/app/d1']);
               break;

             default:
               // code...
               break;
           }
           /* this._router.navigate(['/app/d2']);*/
            
          }
          else if(response.save === false){
            this.showError();
           
            console.log("password or user not matching 11")
          }
          }, this.handleError);
    }
    else{
      console.log("password or user not matching")
       this.showError();
    }
  }

  handleError(error) {
    console.log(error.status);
  }

 showSuccess() {
    this.toastr.success('Login', 'Success!');
  }
  showError(){
    this.toastr.error('password or user not matching!', 'Error!');
  }

 /* localStorage.setItem("role", "admin");
  this._router.navigate(['/app']);*/
  //this.ngZone.run(() => this._router.navigateByUrl('/app/d1'))
	 /*switch (this.role) {
              case 'admin':

              console.log("this.role",this.role)
                this._router.navigate(['/app/d1']);
                break;
              case 'parent' :
                this._router.navigate(['/app/d2']);
                break;
              case 'faculty':
                this._router.navigate(['/app/activity']);
                break;
            }*/
}
