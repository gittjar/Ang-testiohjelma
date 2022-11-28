// crypto.component.ts
import { Component, OnInit } from '@angular/core';
import { CryptoService } from './crypto.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html'

})


export class CryptoComponent implements OnInit
 {  data= [];  
 
 constructor(private cryptoService: CryptoService) { 
   
   
 }
 
 ngOnInit() {this.cryptoService.get().subscribe()
  // console.log();
     return this.data = (this.data);
//    })  
  }
  }
  