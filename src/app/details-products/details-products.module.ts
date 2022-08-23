import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsProductsPageRoutingModule } from './details-products-routing.module';

import { DetailsProductsPage } from './details-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsProductsPageRoutingModule,
  ],
  declarations: [DetailsProductsPage]
})
export class DetailsProductsPageModule {}
