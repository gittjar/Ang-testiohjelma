import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {  
  
  constructor(private httpClient: HttpClient) { }


  public get(){
    return this.httpClient.get("https://api.github.com/users/tektutorialshub/repos");
  }
}

