import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailBriefPage } from './detail-brief.page';

const routes: Routes = [
  {
    path: '',
    component: DetailBriefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailBriefPageRoutingModule {}
