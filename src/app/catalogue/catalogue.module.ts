import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CataloguePageRoutingModule } from './catalogue-routing.module';

import { CataloguePage } from './catalogue.page';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CataloguePageRoutingModule,
    RouterModule
  ],
  declarations: [CataloguePage,CardComponent,LoaderComponent],
  exports: [LoaderComponent]

})
export class CataloguePageModule {}
