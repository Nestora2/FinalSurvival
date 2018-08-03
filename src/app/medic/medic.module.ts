import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicComponent, } from '../medic/medic.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', component: MedicComponent },
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MedicComponent
  ],
  exports: [MedicComponent]
})
export class MedicModule { }
