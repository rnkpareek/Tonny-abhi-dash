import { Injectable } from '@angular/core';
import {Http , Headers , RequestOptions } from '@angular/http';
import {  Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  result: any;
  constructor( private  _http: Http) { }
  
  login(email, password) {
    const headers = new Headers();
    var data = [{username:email,password:password}]
    console.log("mail "+JSON.stringify(data))
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/login', JSON.stringify(data) ,{headers : headers, withCredentials: true})
      .map(res => res.json())

  }

 /* signUp(data) {
    console.log("data is here " + JSON.stringify(data))
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/signup', JSON.stringify(data), {headers : headers, withCredentials: true})
      .map(res => res.json());
  }*/

  test(){
    /*return this._http.get('/api/getuser').toPromise().then((response) => 
console.log("-------------",response.json())
      );*/

      return this._http.get('/api/getuser').map( r => r.json())
      ;
  }

 

}
