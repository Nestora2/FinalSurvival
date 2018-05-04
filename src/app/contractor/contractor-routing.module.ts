import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes } from '../app-routing.module';
import {ContractorComponent } from './contractor.component';

@NgModule({
  imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
 
})
export class ContractorRoutingModule { }
