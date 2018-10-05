import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/Authservice'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   role=localStorage.getItem("role");
   name=localStorage.getItem("name")
  constructor(private authService:AuthService) { }

 private _opened: boolean = false;
 
  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  ngOnInit() {
  	console.log("----",this.role)
  }

Logout(){
	this.authService.userLogout();

}

}
