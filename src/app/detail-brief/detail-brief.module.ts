import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailBriefPageRoutingModule } from './detail-brief-routing.module';

import { DetailBriefPage } from './detail-brief.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailBriefPageRoutingModule
  ],
  declarations: [DetailBriefPage]
})
export class DetailBriefPageModule {}
