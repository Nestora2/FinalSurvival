import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router/src/config';
import { ContenidoComponent } from './contenido/contenido.component';
import { provideRoutes} from '@angular/router';
import { CloseComponent } from './close/close.component';
import { MedicComponent } from './medic/medic.component';
import { HrComponent } from './hr/hr.component';
import { ContractorComponent } from './contractor/contractor.component';
import { ParkingComponent } from './parking/parking.component';
import { AtmComponent } from './atm/atm.component';
import { LinkComponent } from './link/link.component';
//import { ContractorRoutingModule } from './contractor/contractor-routing.module';
// import { PanelRoutingModule } from './panel/panel-routing.module';
// import { ContenidoRoutingModule } from './contenido/contenido-routing.module';
// import { CloseRoutingModule } from './close/close-routing.module';
// import { HomeRoutingModule } from './home/home-routing.module';


@NgModule({

  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
   //ContractorRoutingModule,
    // ContenidoRoutingModule,
    // CloseRoutingModule,
    // HomeRoutingModule,
    
  ],

  declarations: [
    AppComponent,
    PanelComponent,
    HomeComponent,
    ContenidoComponent,
    CloseComponent,
    MedicComponent,
    HrComponent,
    ContractorComponent,
    ParkingComponent,
    AtmComponent,
    LinkComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
