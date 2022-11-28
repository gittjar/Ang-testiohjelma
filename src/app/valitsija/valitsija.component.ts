import { Component } from '@angular/core';

interface Food {
 value: string;
 viewValue: string;
 material: string;
 }

@Component({
  selector: 'app-valitsija',
  templateUrl: './valitsija.component.html',
  styleUrls: ['./valitsija.component.css']
})





export class ValitsijaComponent {
 selectedValue: string | undefined;
 foods: Food[] = [
    {value: 'steak-0', viewValue: 'Pihvi', material: 'Ulkofile, pippuri, suola'},
    {value: 'pizza-1', viewValue: 'Pizza', material: 'Pohja, kastike, mozzarellaraaste, pepperoni'},
    {value: 'tacos-2', viewValue: 'Tacoja', material: 'Maissikuori, jauheliha, cajunmauste, jalapeno, avokado'},
    {value: 'pasta-4', viewValue: 'Pasta', material: 'Fusili, kerma, paprika, kanafile, mausteet'},
  ];  
}

