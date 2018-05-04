import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { ContenidoComponent }      from './contenido/contenido.component';
import { PanelComponent} from './panel/panel.component';
import { CloseComponent } from './close/close.component';
import { HomeComponent } from './home/home.component';
import { ParkingComponent } from './parking/parking.component';
import { AtmComponent } from './atm/atm.component';
import { HrComponent } from './hr/hr.component';
import { MedicComponent } from './medic/medic.component';
import { ContractorComponent } from './contractor/contractor.component';
import {LinkComponent} from './link/link.component';

export const routes: Routes = [
  { path: '', redirectTo: '/panel', pathMatch: 'full' },
  { path: 'panel', component: PanelComponent },
    { path: 'contenido', component: ContenidoComponent },  //se espera que se cambie aqui dependiende de que contenido se quiere cambiar
    { path: 'close', component : CloseComponent }, 
    {path: 'home', component: HomeComponent},
    {path: 'parking', component: ParkingComponent},
    {path: 'atm', component: AtmComponent},
    {path: 'contractor', component: ContractorComponent},
    {path: 'hr', component: HrComponent},
    {path: 'medic', component: MedicComponent},
    {path: 'link', component: LinkComponent},
    {path: '**', component: PanelComponent}
  

];

@NgModule({
 imports:  
  [RouterModule.forRoot(routes)],

  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }

