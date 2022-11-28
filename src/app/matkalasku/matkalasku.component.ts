import {Component} from '@angular/core';


@Component({
  selector: 'app-matkalasku',
  templateUrl: './matkalasku.component.html',
  styleUrls: ['./matkalasku.component.css'],
})

export class MatkalaskuComponent {

favKulkupeli: string | undefined;
kulkupeli: string[] = ['Auto (0,46eur/km)', 'Fillari (0,12eur/km)', 'Motobike (0,24eur/km)', 'Vene (0,33eur/km)', 'Potkulauta (0,10eur/km)'];  
fname: string = '';
lname: string = '';
detail: string = '';
aloituspaivamaara: string | undefined;
aloituspaikka: string | undefined;
aloitusaika: string | undefined;
luontipaiva: string | undefined;
// laskemisessa pit‰‰ olla = 0; 
public kilometrit = 0;
public taksa = 0;


  calculate() : any {
  return this.kilometrit * this.taksa; 
  }
  
//  calculate() : any {
// return this.kilometrit * this.kulkupeli.find.length;
    
//  }

  setValue() {
    console.timeLog(this.luontipaiva);
    console.log(this.fname);
    console.log(this.lname);
    console.log(this.detail);
    console.log(this.aloituspaivamaara);
    console.log(this.aloitusaika);
    console.log(this.aloituspaikka);
    console.log(this.kilometrit);
    console.log(this.taksa);
  }
  
  
  
}

