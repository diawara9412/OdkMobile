import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutRessPage } from './ajout-ress.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutRessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutRessPageRoutingModule {}
