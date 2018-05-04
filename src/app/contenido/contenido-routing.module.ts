import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContenidoComponent} from './contenido.component';
import { routes } from '../app-routing.module';

@NgModule({
  imports: [RouterModule.forChild(routes)],
   // CommonModule
   exports: [RouterModule]
  //declarations: []
})
export class ContenidoRoutingModule { }
