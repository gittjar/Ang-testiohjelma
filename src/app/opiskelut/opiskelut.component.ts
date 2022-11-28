import { Component } from '@angular/core';

@Component({
  selector: 'app-tour',
  template: `
   
   Add School:
    <input #newName
      (keyup.enter)="addName(newName.value)">
    <button mat-raised-button color="primary" type="button" (click)="addName(newName.value)">Add koulu</button> 
    <br><br>    
  Add Aste:
  	<input #newTaso
      (keyup.enter)="addTaso(newTaso.value)">  
  	<button mat-raised-button color="primary" type="button" (click)="addTaso(newTaso.value)">Add aste</button>
   
	<table>
	<tr><th>Koulu</th></tr>
	
    <tr><td><ul><li *ngFor="let school of schools">{{school}}</li></ul></td></tr>
    
    <tr><th>Aste</th></tr>
    <tr><td><ul><li *ngFor="let aste of asteet">{{aste}}</li></ul></td></tr>
    </table>
  `
})
export class OpiskelutComponent {
  schools = ['Tuomela', 'HYK', 'HLTI', 'Haaga-Helia'];
  asteet = ['Ala-aste', 'Yla-aste', 'Kauppaoppilaitos', 'AMK'];
  
  addName(newName: string) {
    if (newName) {
      this.schools.push(newName);
    }
  }
  
    addTaso(newTaso: string) {
    if (newTaso) {
      this.asteet.push(newTaso);
    }
  }
}

// <button type="button" (click)="addName(newName.value)">Add</button>