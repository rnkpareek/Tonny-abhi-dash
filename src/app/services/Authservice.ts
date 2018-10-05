import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';
import { JwtHelper } from 'angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt';
import {Http, Headers} from '@angular/http';
@Injectable()
export class AuthService  {
  constructor(private router: Router,public authHttp: AuthHttp, private _http: Http) {

  }

  jwtHelper: JwtHelper = new JwtHelper();
  useJwtHelper() {
    if (localStorage.getItem('apiToken')) {
      const token = localStorage.getItem('apiToken');
      console.log('token::::' + token);
      if (!this.jwtHelper.isTokenExpired(token)) {
        return true;
      } else {
        localStorage.clear();
        return false;
      }
    }
    return false;
  }
  

  userLogout() {
    console.log('Signing Out...');

     localStorage.clear();
     this.router.navigate(['/login']);
    /*return this.authHttp.get('http://localhost:3000/login');*/
   

  }

  canActivate() {
    if (localStorage.getItem('apiToken') !== null) {
      console.log("getting true..")
      return true;
    }
   else{
      console.log("canactive is blocking you sorry")
      this.router.navigate(['']);
      return false;
    }

  }
 
}
