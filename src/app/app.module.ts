import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ClipboardModule } from '@angular/cdk/clipboard'; 
import { RichtexteditorComponent } from './editori/richtexteditor.component';
import { AppComponent } from './app.component';
import { OpiskelutComponent } from './opiskelut/opiskelut.component';

import { ClickMeComponent } from './opiskelut/click.me.component';
import { NappiComponent } from './nappi/nappi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ValitsijaComponent } from './valitsija/valitsija.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './menu/menu.component';
import { TaulukkoComponent } from './taulukko/taulukko.component';
import { Kortti1 } from './tuotekortit/kortti1';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
// import { CryptoService } from './services/crypto.service';
import { CryptoComponent } from './services/crypto.component';
import { NumeroComponent } from './numerot/numero.component';
import { MatkalaskuComponent } from './matkalasku/matkalasku.component';
import {MatRadioModule} from '@angular/material/radio';

//import { ServicesComponent } from './services/services.component';

//import {MatTableDataSource} from '@angular/material/table';
//import { MatDialogModule } from '@angular/material/dialog'; 

//https://ng-bootstrap.github.io/ lisättu NG Bootstrap modulet alla
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


//lisätty Matlistmodule ja lisätään se myös imports:
//asenna componenttimodule terminaali-ikkunassa ensin!
//komento: ng add @angular/material


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OpiskelutComponent,
    CryptoComponent,
    
 //   ServicesComponent,

    NappiComponent,
    RichtexteditorComponent,
 //   MatDialogModule,
    ValitsijaComponent,
    TaulukkoComponent,
    Kortti1,
    MenuComponent,
    NumeroComponent,
    MatkalaskuComponent,
    ClickMeComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSelectModule,
    MatRadioModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    ClipboardModule,
 //   NgbModule,
//    NgbPaginationModule,
 //   NgbAlertModule,
    MatIconModule,
    MatCardModule,
//    MatTableDataSource,
    MatTableModule,
        
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
