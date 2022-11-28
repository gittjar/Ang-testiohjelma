import {Component} from '@angular/core';



/**
 * @title List with selection
 */
@Component({
  selector: 'app-nappi',
  styleUrls: ['./nappi.component.css'],
  templateUrl: './nappi.component.html',
})

export class NappiComponent {
  typesOfShoes: string[] = ['Lenkkarit', 'Purkkarit', 'Kumisaappaat', 'Sandaalit', 'Tossut'];
  typesOfColors: string[] = ['Punainen', 'Ruskea', 'Musta', 'Valkoinen', 'Pinkki'];
 // typesOfLinks: string[] = ['ekalinkki', 'tokalinkki', 'kolmaslinkki']
 
 
 // tehd‰‰n ngFor kutsulle taulukko, jossa kolme eri kentt‰‰
  typesOfUrls=[
    {
    id:"1",  
    nimi:"Hakukone",
    url:"https://google.com"
    },
    {
    id:"2",  
    nimi:"Uutisia",
    url:"https://yle.fi"
  //  icon:"<mat-icon>forward</mat-icon>"
    },
    {
    id:"3",  
    nimi:"Lottokuponki",
    url:"https://www.veikkaus.fi/fi/lotto/peruspeli"
    },
    {
    id:"4",  
    nimi:"Angular aineisto",
    url:"https://angular.io/"
    },
    {
    id:"5",  
    nimi:"Ruokaa",
    url:"http://mammarosa.fi/ruoka"
    }
    ]
  // t‰h‰n alle voi jatkaa >
  
    

}