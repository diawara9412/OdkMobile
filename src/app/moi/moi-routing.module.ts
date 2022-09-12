import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoiPage } from './moi.page';

const routes: Routes = [
  {
    path: '',
    component: MoiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoiPageRoutingModule {}
