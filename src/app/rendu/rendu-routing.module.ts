import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenduPage } from './rendu.page';

const routes: Routes = [
  {
    path: '',
    component: RenduPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenduPageRoutingModule {}
