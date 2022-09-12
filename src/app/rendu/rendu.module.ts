import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenduPageRoutingModule } from './rendu-routing.module';

import { RenduPage } from './rendu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenduPageRoutingModule
  ],
  declarations: [RenduPage]
})
export class RenduPageModule {}
