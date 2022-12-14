import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanierPageRoutingModule } from './panier-routing.module';

import { PanierPage } from './panier.page';
import { CountComponent } from '../details-products/components/count/count.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanierPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PanierPage]
})
export class PanierPageModule {}
