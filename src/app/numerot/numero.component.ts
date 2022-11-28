import { Component } from '@angular/core';

@Component({
  selector: 'app-numero',
  templateUrl: './numero.component.html',
  styleUrls: ['./numero.component.css']
})
export class NumeroComponent {

  public id: string | undefined;
  msg: string | undefined;
  msg1: string | undefined;
  input: string = '';

  constructor() {

   }
   
   click() : any {
     
 //    this.id=this.id;
     return this.id;
     
     

  
   
   
// 	clickEvent(){
//	this.msg1=this.msg
// }

  }
}