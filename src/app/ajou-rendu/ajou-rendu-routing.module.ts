import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouRenduPage } from './ajou-rendu.page';

const routes: Routes = [
  {
    path: '',
    component: AjouRenduPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouRenduPageRoutingModule {}
