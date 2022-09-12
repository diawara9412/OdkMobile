import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutRessPageRoutingModule } from './ajout-ress-routing.module';

import { AjoutRessPage } from './ajout-ress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutRessPageRoutingModule
  ],
  declarations: [AjoutRessPage]
})
export class AjoutRessPageModule {}
