import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoiPageRoutingModule } from './moi-routing.module';

import { MoiPage } from './moi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoiPageRoutingModule
  ],
  declarations: [MoiPage]
})
export class MoiPageModule {}
