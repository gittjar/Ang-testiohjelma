import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValitsijaComponent } from './valitsija/valitsija.component';
import { OpiskelutComponent } from './opiskelut/opiskelut.component';
import { NappiComponent } from './nappi/nappi.component';
import { MenuComponent } from './menu/menu.component';
import { TaulukkoComponent } from './taulukko/taulukko.component';
import { Kortti1 } from './tuotekortit/kortti1';
import { CryptoComponent } from './services/crypto.component';
import { RichtexteditorComponent } from './editori/richtexteditor.component';
import { NumeroComponent } from './numerot/numero.component';
import { MatkalaskuComponent } from './matkalasku/matkalasku.component';

//import { DialogOverviewExample, DialogOverviewExampleDialog } from './dialog/dialog.component';
// import { NgbdAccordionToggle } from './panelarrow/accordion-toggle';

const routes: Routes = [
  {path: 'valitsija', component: ValitsijaComponent},
  {path: 'opiskelut', component: OpiskelutComponent},
  {path: 'nappi', component: NappiComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'taulukko', component: TaulukkoComponent},
  {path: 'tuotekortit', component: Kortti1},
  {path: 'services', component: CryptoComponent},
  {path: 'editori', component: RichtexteditorComponent},
  {path: 'numerot', component: NumeroComponent},
  {path: 'matkalasku', component: MatkalaskuComponent},
//  {path: 'dialog', component: DialogOverviewExample, DialogOverviewExampleDialog},
//  {path: 'panelarrow', component: NgbdAccordionToggle},
  {path: '', redirectTo: '/valitsija', pathMatch: 'full'},  // redirect to me

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
