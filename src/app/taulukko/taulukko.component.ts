import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  alc: number;
  madein: string;
  secret: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Coca-Cola', alc: 0.0, madein: 'USA', secret: 'Kofeiinipitoinen limonadi'},
  {position: 2, name: 'Sprite', alc: 0.0, madein: 'USA', secret: 'Sitruunanmakuinen limonadi'},
  {position: 3, name: 'Olvi I', alc: 2.5, madein: 'Finland', secret: 'Raikas kevytolut'},
  {position: 4, name: 'IPA Zero', alc: 0.0, madein: 'Germany', secret: 'Tieto puuttuu'},
  {position: 5, name: 'Sol', alc: 4.5, madein: 'Mexico', secret: ''},
  {position: 6, name: 'Gato Negro', alc: 11.5, madein: 'Portugal', secret: 'Edullinen punaviini'},
  {position: 7, name: 'Prosecco Pajazzo', alc: 9.5, madein: 'Italy', secret: 'Kupliva juhlajuoma'},
  {position: 8, name: 'Water', alc: 0.0, madein: 'Finland', secret: 'Vesijohtovesi'},
  {position: 9, name: 'Paulaner Hell', alc: 4.9, madein: 'Germany', secret: 'Maukas lager'},
  {position: 10, name: 'Coffee', alc: 0.0, madein: 'Brazil', secret: 'Vaalea paahto'},
  {position: 11, name: 'Whisky Single Malt', alc: 40, madein: 'Ireland', secret: 'Savunmakuinen wiski'},
];
 
@Component({
  selector: 'app-taulukko',
  templateUrl: './taulukko.component.html',
  styleUrls: ['./taulukko.component.css'],
})

export class TaulukkoComponent {
  displayedColumns: string[] = ['position', 'name', 'alc', 'madein'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
}