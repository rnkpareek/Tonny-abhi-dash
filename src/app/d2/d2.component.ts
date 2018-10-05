import { Component, OnInit } from '@angular/core';
import {D2Service} from './d2.service';

@Component({
  selector: 'app-d2',
  templateUrl: './d2.component.html',
  styleUrls: ['./d2.component.css']
})
export class D2Component implements OnInit {

  constructor(private D2service:D2Service) { }

  ngOnInit() {
  }
  
  masterDataCreation(keyword,criteria){

  	console.log("------------",keyword+"--"+criteria)
   //this.D2service.masterDataCreation(data);
   return false;
  }

}
