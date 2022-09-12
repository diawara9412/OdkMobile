import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjourResPage } from './ajour-res.page';

const routes: Routes = [
  {
    path: '',
    component: AjourResPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjourResPageRoutingModule {}
