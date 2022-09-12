import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouRenduPageRoutingModule } from './ajou-rendu-routing.module';

import { AjouRenduPage } from './ajou-rendu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouRenduPageRoutingModule
  ],
  declarations: [AjouRenduPage]
})
export class AjouRenduPageModule {}
