import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResFormaPage } from './res-forma.page';

const routes: Routes = [
  {
    path: '',
    component: ResFormaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResFormaPageRoutingModule {}
