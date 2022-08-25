import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsCmdPageRoutingModule } from './details-cmd-routing.module';

import { DetailsCmdPage } from './details-cmd.page';
import { LoaderComponent } from '../loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsCmdPageRoutingModule
  ],
  declarations: [DetailsCmdPage,LoaderComponent]
})
export class DetailsCmdPageModule {}
