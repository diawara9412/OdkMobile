import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResFormaPageRoutingModule } from './res-forma-routing.module';

import { ResFormaPage } from './res-forma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResFormaPageRoutingModule
  ],
  declarations: [ResFormaPage]
})
export class ResFormaPageModule {}
