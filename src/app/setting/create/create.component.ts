import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor( private fb:FormBuilder) { }

  ngOnInit() {
  }

}


/*import { Component, OnInit } from '@angular/core';
import {userForm} from "./user.model";
import { PasswordValidation } from './validators';
import {UserService} from "../admin.service/create.user";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
@Component({
   selector: 'app-create',
  templateUrl: './create.component.html',
  styles:[`input.ng-invalid{border-left:5px solid red;}
	          input.ng-valid{border-left:5px solid green;}`],
  providers:[UserService]
})
export class CreateComponent implements OnInit {
  Schedule_FormData :any ={};
  userform: FormGroup;
  constructor( private fb:FormBuilder , private userservice:UserService) {
    }

  ngOnInit() {

    this.userform= this.fb.group({
      firstName:['',[Validators.required] ],
      lastName:[null, Validators.required],
      password:[null, [Validators.required]],
      userName:[null, [Validators.required,Validators.email]],
      confirmPassword:[null,[ Validators.required]],

    },
      { validator: PasswordValidation.MatchPassword})
  }



  onSubmit(){
    this.Schedule_FormData = this.userform.value;
    console.log("addresss----",this.userform.value);
    this.userservice.createUser(this.Schedule_FormData)
      .subscribe(task => {
        console.log(task)
      })
  }

  equalvalidator (){
    var password = this.userform.value.password;
    var conPass = this.userform.value.confirmPassword;

  }

}*/
