import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsProductsPageRoutingModule } from './details-products-routing.module';

import { DetailsProductsPage } from './details-products.page';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';
import { CountComponent } from './components/count/count.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsProductsPageRoutingModule,
    IonicHeaderParallaxModule
  ],
  declarations: [DetailsProductsPage,CountComponent],
})
export class DetailsProductsPageModule {}
