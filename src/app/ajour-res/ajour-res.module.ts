import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjourResPageRoutingModule } from './ajour-res-routing.module';

import { AjourResPage } from './ajour-res.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjourResPageRoutingModule
  ],
  declarations: [AjourResPage]
})
export class AjourResPageModule {}
